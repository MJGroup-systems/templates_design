"""Original festive underscore: music-box celesta + warm pad + sleigh shaker + soft bass.
100 BPM, 4/4, 10 bars (24 s). Also renders transition whooshes and sparkle SFX.
Cuts in the video land on bar lines (every 2.4 s)."""
import numpy as np, wave, sys, os
SR = 48000
BPM = 100; BEAT = 60 / BPM; BAR = 4 * BEAT
DUR = 24.0 + 1.5
N = int(SR * DUR)
rng = np.random.default_rng(7)
L = np.zeros(N); R = np.zeros(N)

def midi(n): return 440.0 * 2 ** ((n - 69) / 12)
NOTE = {'C':0,'C#':1,'D':2,'D#':3,'E':4,'F':5,'F#':6,'G':7,'G#':8,'A':9,'A#':10,'B':11}
def nm(s):  # 'F#5'
    return NOTE[s[:-1]] + 12 * (int(s[-1]) + 1)

def add(sig, t0, pan=0.0, gain=1.0):
    i = int(t0 * SR); j = min(N, i + len(sig))
    if i >= N: return
    s = sig[:j - i] * gain
    L[i:j] += s * np.cos((pan + 1) * np.pi / 4)
    R[i:j] += s * np.sin((pan + 1) * np.pi / 4)

def celesta(f, dur=1.6, vel=1.0):
    t = np.arange(int(SR * dur)) / SR
    idx = 2.2 * np.exp(-t * 7)
    mod = np.sin(2 * np.pi * f * 3.5 * t) * idx
    car = np.sin(2 * np.pi * f * t + mod)
    car += 0.35 * np.sin(2 * np.pi * f * 2 * t) * np.exp(-t * 5)
    car += 0.12 * np.sin(2 * np.pi * f * 4.01 * t) * np.exp(-t * 9)
    env = (1 - np.exp(-t * 900)) * np.exp(-t * 2.6)
    return car * env * vel

def pad(freqs, dur, gain=1.0):
    n = int(SR * dur); t = np.arange(n) / SR
    s = np.zeros(n)
    for f in freqs:
        for d in (-0.08, 0.0, 0.07):
            ph = rng.uniform(0, 2 * np.pi)
            ff = f * 2 ** (d / 12)
            # soft saw from 6 harmonics
            for k in range(1, 7):
                s += np.sin(2 * np.pi * ff * k * t + ph * k) / k * (0.75 ** k)
    a = np.minimum(1, t / 0.6); r = np.minimum(1, (dur - t) / 0.5).clip(0, 1)
    s *= a * r * (1 + 0.04 * np.sin(2 * np.pi * 0.3 * t))
    return s / (len(freqs) * 3) * gain

def bass(f, dur):
    t = np.arange(int(SR * dur)) / SR
    s = np.sin(2 * np.pi * f * t) + 0.25 * np.sin(2 * np.pi * 2 * f * t)
    env = (1 - np.exp(-t * 60)) * np.exp(-t * 1.1)
    return s * env

def shaker(dur=0.09, bright=1.0):
    n = int(SR * dur); t = np.arange(n) / SR
    x = rng.standard_normal(n)
    x = np.diff(np.concatenate([[0], x]))          # high-pass-ish
    x = x - np.convolve(x, np.ones(6) / 6, 'same') * 0.6
    env = (1 - np.exp(-t * 400)) * np.exp(-t * 45)
    # little jingle partials
    jing = sum(np.sin(2 * np.pi * f * t) for f in (5200, 6750, 8100, 9300)) * np.exp(-t * 30) * 0.15
    return (x * 0.35 + jing) * env * bright

def kick():
    t = np.arange(int(SR * 0.5)) / SR
    f = 46 + 70 * np.exp(-t * 28)
    ph = 2 * np.pi * np.cumsum(f) / SR
    return np.sin(ph) * np.exp(-t * 7) * (1 - np.exp(-t * 800))

chords = [  # (root for bass, chord tones for arp/pad)
    ('D2', ['D4', 'F#4', 'A4']), ('B1', ['B3', 'D4', 'F#4']), ('G1', ['G3', 'B3', 'D4']), ('A1', ['A3', 'C#4', 'E4']),
    ('D2', ['D4', 'F#4', 'A4']), ('F#1', ['F#3', 'A3', 'C#4']), ('G1', ['G3', 'B3', 'D4']), ('A1', ['A3', 'C#4', 'E4']),
    ('D2', ['D4', 'F#4', 'A4']), ('D2', ['D4', 'F#4', 'A4']),
]
for b, (root, tones) in enumerate(chords):
    t0 = b * BAR
    tn = [nm(x) for x in tones]
    # music-box arpeggio (8ths): 1 5 8 10 12 10 8 5 pattern up an octave
    seq = [tn[0] + 12, tn[2] + 12, tn[0] + 24, tn[1] + 24, tn[2] + 24, tn[1] + 24, tn[0] + 24, tn[2] + 12]
    if b < 9:
        for k, n in enumerate(seq):
            vel = 0.55 if k % 2 else 0.75
            if b == 0 and k < 2: vel *= 0.6
            add(celesta(midi(n), 1.4, vel), t0 + k * BEAT / 2, pan=(-0.35 if k % 2 else 0.35), gain=0.16)
    # pad
    pd = pad([midi(n) for n in tn] + [midi(tn[0] - 12)], BAR + 0.6 if b < 9 else BAR * 1.3, gain=0.22 if b >= 2 else 0.14)
    add(pd, t0, pan=0.0)
    # bass + soft kick from bar 3
    if b >= 2 and b < 9:
        add(bass(midi(nm(root)), BAR), t0, gain=0.30)
        add(bass(midi(nm(root)), BAR / 2), t0 + 2.5 * BEAT, gain=0.16)
        add(kick(), t0, gain=0.28); add(kick(), t0 + 2 * BEAT, gain=0.18)
    # sleigh shaker 8ths from bar 3, accents on off-beats
    if b >= 2 and b < 9:
        for k in range(8):
            add(shaker(0.09, 0.9 if k % 2 else 0.55), t0 + k * BEAT / 2 + rng.normal(0, 0.003), pan=0.25, gain=0.22)

# top melody (bars 3-9), beats measured from bar start
mel = [
    (2, 0, 'D6', 1), (2, 1, 'B5', 1), (2, 2, 'A5', 2),
    (3, 0, 'C#6', 1), (3, 1, 'E6', 1), (3, 2, 'C#6', 2),
    (4, 0, 'F#6', 1), (4, 1, 'E6', 1), (4, 2, 'D6', 1), (4, 3, 'A5', 1),
    (5, 0, 'C#6', 2), (5, 2, 'A5', 2),
    (6, 0, 'B5', 1), (6, 1, 'D6', 1), (6, 2, 'G6', 1), (6, 3, 'F#6', 1),
    (7, 0, 'E6', 3), (7, 3, 'C#6', 1),
    (8, 0, 'D6', 4),
]
for bar, beat, n, ln in mel:
    f = midi(nm(n))
    s = celesta(f, 2.4, 1.0); s[:int(SR*1.2)] += 0.5 * celesta(f * 2, 1.2, 0.5)
    add(s, bar * BAR + beat * BEAT, pan=0.0, gain=0.24)

# final shimmer on the last bar
for k in range(14):
    add(celesta(midi(nm('D6')) * 2 ** (rng.choice([0, 4, 7, 12, 16, 19]) / 12), 2.5, 0.5), 8 * BAR + 0.05 * k + rng.uniform(0, .05), pan=rng.uniform(-.7, .7), gain=0.05)

# ---------- SFX ----------
def whoosh(dur=0.7, rev=False):
    n = int(SR * dur); t = np.arange(n) / SR
    x = rng.standard_normal(n)
    out = np.zeros(n); y = 0.0
    # sweeping one-pole lowpass
    cut = 300 + 5500 * (np.sin(np.pi * t / dur) ** 2)
    a = np.exp(-2 * np.pi * cut / SR)
    for i in range(n):
        y = a[i] * y + (1 - a[i]) * x[i]; out[i] = y
    env = np.sin(np.pi * t / dur) ** 2
    return out * env * 1.6

def sparkle(dur=1.2, cnt=16):
    n = int(SR * dur); s = np.zeros(n)
    for k in range(cnt):
        st = int(rng.uniform(0, dur * 0.6) * SR); f = rng.uniform(3000, 7500)
        t = np.arange(n - st) / SR
        s[st:] += np.sin(2 * np.pi * f * t) * np.exp(-t * rng.uniform(6, 14)) * rng.uniform(.3, 1)
    return s / cnt * 2.2

cuts = [4.8, 7.2, 9.6, 12.0, 16.8, 19.2]
for c in cuts:
    add(whoosh(0.6), c - 0.42, pan=rng.uniform(-.3, .3), gain=0.13)
for t in [0.55, 12.45, 19.55, 21.0]:
    add(sparkle(1.4, 18), t, pan=rng.uniform(-.4, .4), gain=0.10)

# ---------- reverb (convolution with synthetic stereo IR) ----------
def ir(seconds=2.4):
    n = int(SR * seconds); t = np.arange(n) / SR
    e = np.exp(-t * 3.2) * (1 - np.exp(-t * 200))
    return rng.standard_normal(n) * e, rng.standard_normal(n) * e
irl, irr = ir()
def conv(x, h):
    m = len(x) + len(h) - 1; nfft = 1 << (m - 1).bit_length()
    return np.fft.irfft(np.fft.rfft(x, nfft) * np.fft.rfft(h, nfft), nfft)[:len(x)]
wetL = conv(L, irl); wetR = conv(R, irr)
wetL /= np.max(np.abs(wetL)) + 1e-9; wetR /= np.max(np.abs(wetR)) + 1e-9
dry = max(np.max(np.abs(L)), np.max(np.abs(R)))
outL = L / dry + 0.22 * wetL; outR = R / dry + 0.22 * wetR
# fade tail
t = np.arange(N) / SR
fade = np.clip((DUR - t) / 1.8, 0, 1)
outL *= fade; outR *= fade
# gentle glue compression (soft clip)
pk = max(np.max(np.abs(outL)), np.max(np.abs(outR)))
outL = np.tanh(outL / pk * 1.2) / np.tanh(1.2); outR = np.tanh(outR / pk * 1.2) / np.tanh(1.2)
st = np.stack([outL, outR], 1) * 0.89
out = sys.argv[1]
with wave.open(out, 'wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes((st * 32767).astype('<i2').tobytes())
print('wrote', out, DUR, 's')
