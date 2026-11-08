"""Candy By Vevian - candy Christmas tree promo. 1080x1920, 30fps, 24s.
Usage: python3 compose.py <workdir> <out.mp4|frames:dir> [--fps 30] [--only t1,t2,...]
All geometry is in "pad space" (1100x1956), the frame of the AI scene plates.
The 4x AI-upscaled cutout maps into pad space as: pad = cut_hr/4 + (100.5, 357)."""
import sys, os, math, subprocess, argparse
import numpy as np
from PIL import Image, ImageFilter, ImageDraw
from multiprocessing import Pool

W, H = 1080, 1920
ap = argparse.ArgumentParser()
ap.add_argument('work'); ap.add_argument('out')
ap.add_argument('--fps', type=int, default=30)
ap.add_argument('--only', default='')
ap.add_argument('--audio', default='')
args = ap.parse_args()
WORK = args.work; FPS = args.fps
DUR = 24.0
CUTS = [4.8, 7.2, 9.6, 12.0, 16.8, 19.2]
XF = 0.22                                      # crossfade length
CUT_OFF = (100.5, 357.0); CUT_SCALE = 4.0      # cutout HR -> pad space

# ---------------------------------------------------------------- helpers
def clamp(x, a=0.0, b=1.0): return max(a, min(b, x))
def smooth(x): x = clamp(x); return x * x * (3 - 2 * x)
def ease_io(x):
    x = clamp(x); return 4 * x ** 3 if x < .5 else 1 - (-2 * x + 2) ** 3 / 2
def ease_out(x): x = clamp(x); return 1 - (1 - x) ** 3
def lerp(a, b, t): return a + (b - a) * t
def lerpv(a, b, t): return tuple(lerp(x, y, t) for x, y in zip(a, b))

def keyframes(kf, t):
    """kf: list of (time, (cx,cy,vh,rot), ease). Interpolates views."""
    if t <= kf[0][0]: return kf[0][1]
    for (t0, v0, _), (t1, v1, e) in zip(kf, kf[1:]):
        if t <= t1:
            return lerpv(v0, v1, e((t - t0) / (t1 - t0)))
    return kf[-1][1]

# ---------------------------------------------------------------- assets (per worker)
A = {}
def load():
    if A: return
    j = lambda f: os.path.join(WORK, f)
    cut = Image.open(j('p_cut_up.png')).convert('RGBA')
    # premultiply to avoid dark fringes when resampling
    def premul(im):
        a = np.asarray(im).astype(np.float32)
        a[..., :3] *= a[..., 3:4] / 255.0
        return Image.fromarray(a.clip(0, 255).astype(np.uint8), 'RGBA')
    levels = [cut]
    for _ in range(3):
        levels.append(levels[-1].resize((levels[-1].width // 2, levels[-1].height // 2), Image.LANCZOS))
    A['cut'] = [premul(l) for l in levels]
    def plate(name):
        if os.path.exists(j('ext_' + name + '.png')):   # outpainted 1400x2489, pad placed at (150,533)
            return (Image.open(j('ext_' + name + '.png')).convert('RGB'), (150.0, 533.0))
        return (Image.open(j('pad_' + name + '.png')).convert('RGB'), (0.0, 0.0))
    A['dark'] = plate('dark'); A['ivory'] = plate('ivory'); A['table'] = plate('table')
    # end-card backdrop: bokeh-only region above the tree, blurred and darkened
    dimg, doff = A['dark']
    top = int(doff[1] + 470); cw = int(top * 9 / 16); cx0 = int(dimg.width / 2 - cw / 2)
    eb = dimg.crop((cx0, 0, cx0 + cw, top)).resize((1100, 1956), Image.LANCZOS).filter(ImageFilter.GaussianBlur(18))
    eb = np.asarray(eb).astype(np.float32) / 255.0
    wine = np.array([0.30, 0.04, 0.09], np.float32)
    eb = eb * 0.55 + wine * 0.18
    A['endbg'] = (Image.fromarray((eb.clip(0, 1) * 255).astype(np.uint8)), (0.0, 0.0))
    A['text'] = {}
    for f in os.listdir(j('text')):
        im = np.asarray(Image.open(j('text/' + f)).convert('RGBA')).astype(np.float32) / 255.0
        A['text'][f[:-4]] = im
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    r = np.sqrt(((xx - W / 2) / (W * 0.62)) ** 2 + ((yy - H * 0.46) / (H * 0.62)) ** 2)
    A['vig'] = (1 - 0.30 * smoothstep_np(0.55, 1.25, r))[..., None]
    A['yy'] = yy; A['xx'] = xx
    rng = np.random.default_rng(3)
    A['grain'] = [rng.standard_normal((H // 2, W // 2)).astype(np.float32) for _ in range(6)]
    # sprites
    A['bokeh'] = {}
    for rad in (6, 10, 16, 24, 34, 48):
        s = rad * 2 + 8; y, x = np.mgrid[0:s, 0:s] - s / 2 + .5
        d = np.sqrt(x * x + y * y)
        disc = smoothstep_np(rad, rad - max(1.5, rad * .18), d) * (0.75 + 0.25 * smoothstep_np(rad * .2, rad, d))
        A['bokeh'][rad] = disc.astype(np.float32)
    A['glint'] = {}
    for sz in (28, 44, 64, 90):
        s = sz * 2 + 1; y, x = np.mgrid[0:s, 0:s] - sz
        g = np.exp(-(x * x + y * y) / (2 * (sz * .07) ** 2))
        g += np.exp(-(y * y) / (2 * 1.2 ** 2)) * np.exp(-np.abs(x) / (sz * .28))
        g += np.exp(-(x * x) / (2 * 1.2 ** 2)) * np.exp(-np.abs(y) / (sz * .28))
        A['glint'][sz] = (g / g.max()).astype(np.float32)

def smoothstep_np(e0, e1, x):
    t = np.clip((x - e0) / (e1 - e0), 0, 1); return t * t * (3 - 2 * t)

# ---------------------------------------------------------------- sampling
def affine_for(view, src_scale, src_off):
    """view=(cx,cy,vh,rot) in pad space. Source pixel = (pad - src_off) * src_scale."""
    cx, cy, vh, rot = view
    k = vh / H                      # pad units per output pixel
    c, s = math.cos(math.radians(rot)), math.sin(math.radians(rot))
    # output (u,v) -> pad: p = center + R * ((u - W/2) * k, (v - H/2) * k)
    a = c * k; b = -s * k; d = s * k; e = c * k
    px0 = cx - (a * W / 2 + b * H / 2); py0 = cy - (d * W / 2 + e * H / 2)
    # -> source
    return (a * src_scale, b * src_scale, (px0 - src_off[0]) * src_scale,
            d * src_scale, e * src_scale, (py0 - src_off[1]) * src_scale), k

def sample_plate(plate, view):
    img, off = plate
    data, k = affine_for(view, 1.0, (-off[0], -off[1]))
    out = img.transform((W, H), Image.AFFINE, data, resample=Image.BICUBIC)
    return np.asarray(out).astype(np.float32) / 255.0

def sample_cut(view, scale=1.0, offset=(0, 0)):
    """Returns premultiplied rgb and alpha of the HR cutout under the camera.
    scale/offset place the cutout in pad space (for the end card)."""
    cx, cy, vh, rot = view
    k = vh / H                                   # pad units per output px
    src_per_pad = CUT_SCALE / scale              # HR px per pad unit at level 0
    hr_per_out = k * src_per_pad
    lvl = 0
    while lvl < 3 and hr_per_out / (2 ** lvl) > 1.6: lvl += 1
    sc = src_per_pad / (2 ** lvl)
    off = (CUT_OFF[0] * scale + offset[0], CUT_OFF[1] * scale + offset[1])
    data, _ = affine_for(view, sc, off)
    out = A['cut'][lvl].transform((W, H), Image.AFFINE, data, resample=Image.BICUBIC)
    o = np.asarray(out).astype(np.float32) / 255.0
    return o[..., :3], o[..., 3:4]

# ---------------------------------------------------------------- fx
def add_sprite(img, spr, x, y, color, amt):
    h, w = spr.shape; x0 = int(x - w / 2); y0 = int(y - h / 2)
    xa, ya = max(0, x0), max(0, y0); xb, yb = min(W, x0 + w), min(H, y0 + h)
    if xa >= xb or ya >= yb: return
    s = spr[ya - y0:yb - y0, xa - x0:xb - x0][..., None] * amt
    reg = img[ya:yb, xa:xb]
    img[ya:yb, xa:xb] = 1 - (1 - reg) * (1 - s * color)     # screen

def bokeh(img, t, seed, n=26, color=(1.0, .80, .48), amt=0.22, rise=40, region=(0, H)):
    rng = np.random.default_rng(seed)
    for i in range(n):
        rad = rng.choice(list(A['bokeh'].keys()), p=[.22, .22, .2, .16, .12, .08])
        x = rng.uniform(-40, W + 40); y0 = rng.uniform(region[0], region[1])
        sp = rng.uniform(.5, 1.5) * rise
        y = (y0 - t * sp) % (H + 200) - 100
        x += math.sin(t * rng.uniform(.3, .8) + i) * 18
        tw = 0.6 + 0.4 * math.sin(t * rng.uniform(1, 2.5) + rng.uniform(0, 6))
        a = amt * tw * rng.uniform(.4, 1.0) * (0.6 if rad > 30 else 1.0)
        add_sprite(img, A['bokeh'][rad], x, y, np.array(color, np.float32), a)

def glints(img, t, seed, pts, n=10, amt=0.9, color=(1, .95, .85), period=1.1):
    """pts: callable rng -> (x,y) screen position candidates."""
    rng = np.random.default_rng(seed)
    for i in range(n):
        x, y = pts(rng); ph = rng.uniform(0, period); sz = rng.choice([28, 44, 64, 90], p=[.35, .35, .2, .1])
        life = ((t + ph) % period) / period
        a = math.sin(math.pi * life) ** 3 * amt * rng.uniform(.5, 1)
        if a > .01: add_sprite(img, A['glint'][sz], x, y, np.array(color, np.float32), a)

def sweep(img, t, t0, t1, mask=None, amt=0.38, width=150, ang=-28):
    if not (t0 <= t <= t1): return
    p = ease_io((t - t0) / (t1 - t0))
    th = math.radians(ang)
    pos = lerp(-700, W * math.cos(th) + H * abs(math.sin(th)) + 300, p)
    d = A['xx'] * math.cos(th) - A['yy'] * math.sin(th) + H * 0.35 - pos
    band = np.exp(-(d / width) ** 2) * amt * math.sin(math.pi * p)
    band = band[..., None]
    if mask is not None: band = band * mask
    img[:] = 1 - (1 - img) * (1 - band * np.array([1, .96, .9], np.float32))

def scrim(img, top=True, h=760, amt=0.55, color=(0, 0, 0), y0=None):
    yy = A['yy']
    if top: m = (1 - smoothstep_np(0, h, yy)) * amt
    else:
        y0 = y0 if y0 is not None else H - h
        m = smoothstep_np(y0, H, yy) * amt
    m = m[..., None]
    img[:] = img * (1 - m) + np.array(color, np.float32) * m

def put_text(img, key, y, t, t_in, t_out, dur=0.65, dy=46, blur=9):
    if t < t_in or t > t_out: return
    p = ease_out((t - t_in) / dur)
    fade_out = 1 - smooth((t - (t_out - 0.32)) / 0.3)
    op = p * fade_out
    if op <= 0.003: return
    lay = A['text'][key]
    br = (1 - p) * blur
    if br > 0.4:
        im = Image.fromarray((lay * 255).astype(np.uint8), 'RGBA').filter(ImageFilter.GaussianBlur(br))
        lay = np.asarray(im).astype(np.float32) / 255.0
    yy = int(round(y + (1 - p) * dy))
    h = lay.shape[0]; ya, yb = max(0, yy), min(H, yy + h)
    if ya >= yb: return
    l = lay[ya - yy:yb - yy]; a = l[..., 3:4] * op
    img[ya:yb] = img[ya:yb] * (1 - a) + l[..., :3] * a

def over(base, rgb_pm, a):
    return base * (1 - a) + rgb_pm

def grade(img, sat=1.06, contrast=0.08, warm=(1.0, 1.0, 1.0), lift=0.0):
    lum = (img * np.array([.299, .587, .114], np.float32)).sum(-1, keepdims=True)
    img = lum + (img - lum) * sat
    img = img + contrast * (img - 0.5) * (1 - np.abs(2 * img - 1))   # soft S-curve
    img = img * np.array(warm, np.float32) + lift
    return img

# ---------------------------------------------------------------- scenes
# tree landmarks in pad space
STAR = (691, 520); BOW = (690, 650); TREE_C = (636, 1140)
TOP_Y = 150   # top text block anchor

def s_hook(t):          # 0 - 4.8 : dark luxe, from star close-up pulling back to full tree
    v = keyframes([(0.0, (690, 700, 640, -2.0), ease_io), (1.5, (684, 760, 720, -1.0), ease_io),
                   (3.0, (585, 820, 2150, 0.0), ease_io), (5.2, (585, 830, 2080, 0.0), lambda x: x)], t)
    img = sample_plate(A['dark'], v)
    rgb, a = sample_cut(v); img = over(img, rgb, a)
    bokeh(img, t, 11, n=20, amt=0.16, rise=26)
    sweep(img, t, 2.9, 4.1, mask=a, amt=0.35)
    glints(img, t, 5, lambda r: (r.uniform(380, 900), r.uniform(560, 1700)), n=7, amt=0.85, period=1.3)
    scrim(img, top=True, h=820, amt=0.62)
    put_text(img, 'k1', TOP_Y, t, 2.55, 4.8)
    put_text(img, 't1', TOP_Y + 92, t, 2.75, 4.8, dy=60)
    put_text(img, 's1', TOP_Y + 92 + 190, t, 3.05, 4.8)
    return grade(img, sat=1.05, contrast=0.10)

def bottom_block(img, t, tk, sk, t_in, t_out):
    scrim(img, top=False, amt=0.72, y0=1020)
    put_text(img, tk, 1255, t, t_in, t_out, dy=50)
    put_text(img, sk, 1255 + 170, t, t_in + 0.22, t_out)

def s_marsh(t):         # 4.8 - 7.2 : macro, marshmallow column, slow tilt down
    v = keyframes([(0, (636, 900, 560, 1.5), ease_io), (2.6, (618, 1060, 500, 0.5), ease_io)], t)
    img = sample_plate(A['dark'], v)
    rgb, a = sample_cut(v); img = over(img, rgb, a)
    glints(img, t, 21, lambda r: (r.uniform(80, 1000), r.uniform(150, 1150)), n=9, amt=0.75, period=1.0)
    bottom_block(img, t, 't2', 's2', 0.25, 2.4)
    return grade(img, sat=1.04, contrast=0.08)

def s_sugar(t):         # 7.2 - 9.6 : macro, sugar-coated belts + green stripes, lateral drift
    v = keyframes([(0, (790, 1000, 520, -2.0), ease_io), (2.6, (745, 940, 470, -0.5), ease_io)], t)
    img = sample_plate(A['dark'], v)
    rgb, a = sample_cut(v); img = over(img, rgb, a)
    glints(img, t, 33, lambda r: (r.uniform(60, 1020), r.uniform(120, 1200)), n=14, amt=0.95, period=0.9)
    bottom_block(img, t, 't3', 's3', 0.25, 2.4)
    return grade(img, sat=1.07, contrast=0.08)

def s_top(t):           # 9.6 - 12.0 : bow + star detail tilting down the tree
    v = keyframes([(0, (690, 760, 520, 2.0), ease_io), (2.6, (660, 1000, 800, 0.0), ease_io)], t)
    img = sample_plate(A['dark'], v)
    rgb, a = sample_cut(v); img = over(img, rgb, a)
    bokeh(img, t, 41, n=10, amt=0.12, rise=30)
    glints(img, t, 45, lambda r: (r.uniform(300, 800), r.uniform(150, 900)), n=6, amt=0.8, period=1.2)
    bottom_block(img, t, 't4', 's4', 0.25, 2.4)
    return grade(img, sat=1.05, contrast=0.09)

def s_hero(t):          # 12.0 - 16.8 : ivory studio, slow push, gift message
    v = keyframes([(0, (560, 760, 2300, 0.0), lambda x: x), (5.0, (580, 830, 2100, 0.0), ease_io)], t)
    img = sample_plate(A['ivory'], v)
    rgb, a = sample_cut(v); img = over(img, rgb, a)
    sweep(img, t, 0.9, 2.1, mask=a, amt=0.30)
    glints(img, t, 55, lambda r: (r.uniform(420, 900), r.uniform(700, 1800)), n=6, amt=0.7, period=1.4, color=(1, 1, 1))
    scrim(img, top=True, h=760, amt=0.55, color=(1.0, 0.975, 0.94))
    put_text(img, 'k5', TOP_Y + 10, t, 0.35, 4.8)
    put_text(img, 't5', TOP_Y + 100, t, 0.55, 4.8, dy=60)
    put_text(img, 's5', TOP_Y + 100 + 175, t, 0.85, 4.8)
    return grade(img, sat=1.04, contrast=0.06, warm=(1.02, 1.0, 0.965))

def s_table(t):         # 16.8 - 19.2 : lifestyle, warm fairy lights
    v = keyframes([(0, (565, 800, 2250, 0.0), lambda x: x), (2.6, (585, 840, 2000, 0.0), ease_io)], t)
    img = sample_plate(A['table'], v)
    rgb, a = sample_cut(v); img = over(img, rgb, a)
    bokeh(img, t, 61, n=14, amt=0.13, rise=22)
    scrim(img, top=True, h=760, amt=0.55)
    put_text(img, 't6', TOP_Y + 60, t, 0.25, 2.4, dy=60)
    put_text(img, 's6', TOP_Y + 60 + 170, t, 0.5, 2.4)
    return grade(img, sat=1.04, contrast=0.08)

def s_end(t):           # 19.2 - 24.0 : brand end card
    bgv = (550, 978, lerp(1956, 1780, ease_io(t / 4.8)), 0.0)
    img = sample_plate(A['endbg'], bgv)
    # tree small at the top with glow + reflection
    pin = ease_out(t / 1.1)
    sc = 0.60 * lerp(0.94, 1.0, pin)
    view = (550, 978, 1956, 0.0)
    k = 1956 / H
    ytop = 110 + lerp(40, 0, pin)
    off = (550 - 636 * sc, 978 + (ytop - 960) * k - 504 * sc)
    th = 1271 * sc / k
    # glow behind
    gy = ytop + th * 0.55
    g = np.exp(-(((A['xx'] - W / 2) / 360) ** 2 + ((A['yy'] - gy) / 520) ** 2))[..., None] * 0.30 * pin
    img[:] = 1 - (1 - img) * (1 - g * np.array([1, .78, .45], np.float32))
    rgb, a = sample_cut(view, scale=sc, offset=off)
    # reflection
    base_y = int(ytop + th)
    rr = rgb[::-1]; ra = a[::-1]
    shift = 2 * base_y - H
    refl_rgb = np.zeros_like(rgb); refl_a = np.zeros_like(a)
    if 0 < shift < H:
        refl_rgb[shift:] = rr[:H - shift]; refl_a[shift:] = ra[:H - shift]
    fadem = (1 - smoothstep_np(base_y, base_y + 160, A['yy']))[..., None] * 0.22 * pin
    img = img * (1 - refl_a * fadem) + refl_rgb * fadem
    # contact shadow
    sh = np.exp(-(((A['xx'] - W / 2) / 260) ** 2 + ((A['yy'] - base_y) / 22) ** 2))[..., None] * 0.45 * pin
    img = img * (1 - sh)
    img = img * (1 - a * pin) + rgb * pin
    bokeh(img, t, 71, n=22, amt=0.16, rise=24)
    glints(img, t, 75, lambda r: (r.uniform(300, 780), r.uniform(120, 900)), n=7, amt=0.8, period=1.25)
    sweep(img, t, 0.5, 1.6, mask=a, amt=0.35)
    y = 975
    put_text(img, 'e1', y, t, 0.45, 99, dy=40)
    put_text(img, 'e2', y + 118, t, 0.65, 99, dy=50)
    put_text(img, 'e3', y + 118 + 205, t, 1.0, 99)
    put_text(img, 'e4', y + 118 + 205 + 120, t, 1.3, 99, dy=36, blur=4)
    put_text(img, 'e5', y + 118 + 205 + 120 + 200, t, 1.6, 99)
    return grade(img, sat=1.05, contrast=0.08)

SCENES = [(0.0, 4.8, s_hook), (4.8, 7.2, s_marsh), (7.2, 9.6, s_sugar), (9.6, 12.0, s_top),
          (12.0, 16.8, s_hero), (16.8, 19.2, s_table), (19.2, DUR, s_end)]

def scene_at(t):
    for i, (a, b, f) in enumerate(SCENES):
        if t < b or i == len(SCENES) - 1: return i

def render(t):
    load()
    i = scene_at(t)
    a, b, f = SCENES[i]
    img = None
    # crossfade with neighbour near a cut
    for c in CUTS:
        if abs(t - c) < XF / 2:
            ip = [k for k, s in enumerate(SCENES) if abs(s[1] - c) < 1e-6][0]
            pa, pb, pf = SCENES[ip]; na, nb, nf = SCENES[ip + 1]
            w = smooth((t - c + XF / 2) / XF)
            img = pf(t - pa) * (1 - w) + nf(t - na) * w
            break
    if img is None: img = f(t - a)
    # light-leak flash at cuts
    for c in CUTS:
        fl = math.exp(-((t - c) / 0.09) ** 2) * 0.28
        if fl > 0.004:
            g = np.exp(-(((A['xx'] - W * .7) / 700) ** 2 + ((A['yy'] - H * .3) / 900) ** 2))[..., None]
            img = 1 - (1 - img) * (1 - g * fl * np.array([1, .8, .55], np.float32))
    # fade in from black (first 0.25s)
    img = img * smooth(t / 0.25 + 0.15)
    img = img * A['vig']
    gr = A['grain'][int(t * FPS) % len(A['grain'])]
    gr = np.repeat(np.repeat(gr, 2, 0), 2, 1)[..., None]
    img = img + gr * 0.010
    return (np.clip(img, 0, 1) * 255 + 0.5).astype(np.uint8)

def job(n): return n, render(n / FPS).tobytes()

if __name__ == '__main__':
    nframes = int(round(DUR * FPS))
    if args.only:
        os.makedirs(args.out, exist_ok=True)
        for ts in args.only.split(','):
            t = float(ts); Image.fromarray(render(t)).save(os.path.join(args.out, f'f_{t:05.2f}.jpg'), quality=92)
        sys.exit(0)
    cmd = ['ffmpeg', '-y', '-hide_banner', '-loglevel', 'error', '-f', 'rawvideo', '-pix_fmt', 'rgb24',
           '-s', f'{W}x{H}', '-r', str(FPS), '-i', '-']
    if args.audio: cmd += ['-i', args.audio]
    cmd += ['-c:v', 'libx264', '-preset', 'slow', '-crf', '15', '-pix_fmt', 'yuv420p', '-profile:v', 'high',
            '-tune', 'film', '-x264-params', 'keyint=60:min-keyint=30', '-colorspace', 'bt709',
            '-color_primaries', 'bt709', '-color_trc', 'bt709', '-movflags', '+faststart']
    if args.audio:
        cmd += ['-c:a', 'aac', '-b:a', '256k', '-ar', '48000',
                '-af', 'loudnorm=I=-14:TP=-1.5:LRA=11,afade=t=out:st=22.6:d=1.4', '-shortest']
    cmd += [args.out]
    p = subprocess.Popen(cmd, stdin=subprocess.PIPE)
    with Pool(4) as pool:
        for n, buf in pool.imap(job, range(nframes), chunksize=4):
            p.stdin.write(buf)
            if n % 60 == 0: print('frame', n, '/', nframes, flush=True)
    p.stdin.close(); p.wait()
    print('done', args.out)
