import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, MapPin, Instagram, Sparkles, Scissors, Zap } from 'lucide-react';

// Reusable Intersection Observer hook for scroll animations
const useScrollReveal = (options = { threshold: 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options.threshold]);

  return { ref, isVisible };
};

const Reveal = ({ 
  children, 
  delay = 0, 
  className = "", 
  direction = "up" 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string;
  direction?: "up" | "left" | "right" | "none"
}) => {
  const { ref, isVisible } = useScrollReveal();

  const base = "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]";
  
  let translate = "";
  if (direction === "up") translate = isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0";
  if (direction === "left") translate = isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0";
  if (direction === "right") translate = isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0";
  if (direction === "none") translate = isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95";

  return (
    <div
      ref={ref}
      className={`${base} ${translate} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const BASE = import.meta.env.BASE_URL;

export default function LuxeStudio() {
  return (
    <div dir="rtl" className="bg-[#050505] min-h-screen text-[#F4F4F4] font-sans selection:bg-[#FF0055] selection:text-white overflow-x-hidden">
      
      {/* Dynamic Noise Overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] mix-blend-overlay"
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' 
        }}
      />

      {/* Internal CSS for Marquee & custom animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(50%); }
        }
        .animate-marquee {
          display: flex;
          white-space: nowrap;
          animation: marquee 15s linear infinite;
        }
        .text-outline {
          color: transparent;
          -webkit-text-stroke: 1px #F4F4F4;
        }
        .text-outline-pink {
          color: transparent;
          -webkit-text-stroke: 2px #FF0055;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 p-6 flex justify-between items-center mix-blend-difference">
        <div className="text-3xl font-black tracking-tighter">לוקס.</div>
        <div className="hidden md:flex items-center gap-6 font-bold text-sm tracking-widest uppercase">
          <a href={BASE + "preview/bold-creative/Bold"} className="text-[#FF0055] transition-colors">בית</a>
          <a href={BASE + "preview/bold-creative/About"} className="hover:text-[#FF0055] transition-colors">אודות</a>
          <a href={BASE + "preview/bold-creative/Services"} className="hover:text-[#FF0055] transition-colors">שירותים</a>
          <a href={BASE + "preview/bold-creative/Contact"} className="hover:text-[#FF0055] transition-colors">צור קשר</a>
        </div>
        <a href={BASE + "preview/bold-creative/Contact"} className="text-sm font-bold tracking-widest uppercase hover:text-[#FF0055] transition-colors border-b-2 border-transparent hover:border-[#FF0055] pb-1">
          קבעי תור
        </a>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 pb-12 px-4 md:px-8 overflow-hidden">
        {/* Massive Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 opacity-10 pointer-events-none">
          <h1 className="text-[clamp(10rem,20vw,25rem)] font-black leading-none tracking-tighter select-none">
            LUXE
          </h1>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
          
          <div className="lg:col-span-7 flex flex-col items-start gap-6 lg:pe-12 relative z-20">
            <Reveal direction="up" delay={100}>
              <div className="inline-flex items-center gap-2 bg-[#CCFF00] text-black px-3 py-1 font-bold text-xs uppercase tracking-widest border border-black shadow-[2px_2px_0_0_#FF0055]">
                <Zap size={14} className="fill-black" />
                סטודיו לעיצוב שיער ואיפור בתל אביב
              </div>
            </Reveal>
            
            <Reveal direction="up" delay={200}>
              <h2 className="text-[clamp(3.5rem,7vw,7rem)] font-black leading-[0.9] tracking-tight">
                <span className="block text-[#FF0055]">לא באנו</span>
                <span className="block text-outline">להיות</span>
                <span className="block">נחמדות.</span>
              </h2>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <p className="text-lg md:text-xl text-gray-400 max-w-md font-medium border-s-4 border-[#CCFF00] ps-4">
                שכחי מכל מה שידעת על סלון יופי. אנחנו כאן כדי לשבור את החוקים, למתוח את הגבולות וליצור אמנות בלתי נשכחת על הפנים והשיער שלך.
              </p>
            </Reveal>

            <Reveal direction="up" delay={400} className="mt-4">
              <a href={BASE + "preview/bold-creative/Contact"} className="group relative inline-flex items-center justify-center gap-4 bg-[#FF0055] text-white font-black text-xl px-8 py-5 border-2 border-transparent hover:border-white transition-all hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0_0_#CCFF00]">
                הזמיני תור עכשיו
                <ArrowLeft className="group-hover:-translate-x-2 transition-transform duration-300" />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <Reveal direction="right" delay={300}>
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-[#FF0055] translate-x-4 translate-y-4"></div>
                <div className="absolute inset-0 border-2 border-[#CCFF00] -translate-x-4 -translate-y-4 z-20 pointer-events-none"></div>
                <img 
                  src="/__mockup/images/luxe-hero.jpg" 
                  alt="דוגמנית עם תספורת נועזת ואיפור צבעוני" 
                  className="relative z-10 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Marquee Section */}
      <section className="relative py-8 bg-[#CCFF00] text-black overflow-hidden -rotate-2 scale-105 border-y-4 border-black z-20 shadow-[0_10px_30px_rgba(204,255,0,0.2)]">
        <div className="animate-marquee items-center gap-8 font-black text-3xl md:text-5xl uppercase tracking-widest">
          {Array(8).fill("אמנות • תעוזה • חוסר פשרות • סטייל •").map((text, i) => (
            <span key={i} className="flex-shrink-0">{text}</span>
          ))}
        </div>
      </section>

      {/* 3. Services Grid (Asymmetrical) */}
      <section className="py-32 px-4 md:px-8 relative max-w-7xl mx-auto">
        <Reveal direction="up">
          <h2 className="text-[clamp(3rem,6vw,5rem)] font-black mb-20 leading-none">
            מה אנחנו <span className="text-outline-pink">עושות</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
          
          {/* Service 1 */}
          <div className="md:col-span-6 relative">
            <Reveal direction="up" delay={100}>
              <a href={BASE + "preview/bold-creative/Services"} className="block group cursor-pointer">
                <div className="relative aspect-square overflow-hidden border-2 border-white/10 group-hover:border-[#FF0055] transition-colors duration-500">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src="/__mockup/images/luxe-hair.jpg" 
                    alt="עיצוב שיער צבעוני" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Floating Number */}
                  <div className="absolute top-4 start-4 z-20 text-[#CCFF00] font-black text-6xl leading-none">01</div>
                </div>
                
                <div className="mt-6">
                  <div className="flex items-center gap-3 mb-3 text-[#FF0055]">
                    <Scissors size={24} />
                    <h3 className="text-3xl font-black">עיצוב שיער אקספרסיבי</h3>
                  </div>
                  <p className="text-gray-400 text-lg md:pe-12">
                    לא עוד בלונד משעמם או קצוות יבשים. אנחנו יוצרות יצירות אמנות על הראש שלך. צבעים עזים, גזירות גיאומטריות, וסטייל שלא מתנצל.
                  </p>
                </div>
              </a>
            </Reveal>
          </div>

          {/* Service 2 - Offset */}
          <div className="md:col-span-5 md:col-start-8 mt-12 md:mt-32 relative">
            <Reveal direction="up" delay={200}>
              <a href={BASE + "preview/bold-creative/Services"} className="block group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden border-2 border-white/10 group-hover:border-[#CCFF00] transition-colors duration-500">
                  <div className="absolute inset-0 bg-[#FF0055]/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply"></div>
                  <img 
                    src="/__mockup/images/luxe-makeup.jpg" 
                    alt="איפור אוונגרד" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  
                  {/* Floating Number */}
                  <div className="absolute top-4 start-4 z-20 text-[#FF0055] font-black text-6xl leading-none">02</div>
                </div>
                
                <div className="mt-6">
                  <div className="flex items-center gap-3 mb-3 text-[#CCFF00]">
                    <Sparkles size={24} />
                    <h3 className="text-3xl font-black">איפור אוונגרד</h3>
                  </div>
                  <p className="text-gray-400 text-lg md:pe-12">
                    מראה שגונב את ההצגה בכל חדר שאת נכנסת אליו. טקסטורות מבריקות, ליינרים חדים, ושילובים שגורמים לאנשים לעצור ולבהות.
                  </p>
                </div>
              </a>
            </Reveal>
          </div>

        </div>
      </section>

      {/* 4. Manifesto / Big Quote */}
      <section className="py-24 bg-[#FF0055] text-white overflow-hidden relative selection:bg-[#CCFF00] selection:text-black">
        {/* Background typographic pattern */}
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-10 pointer-events-none whitespace-nowrap -rotate-6 scale-150 text-[10rem] font-black leading-[0.8]">
          <div className="text-outline">STATEMENT</div>
          <div className="text-black">STATEMENT</div>
          <div className="text-outline">STATEMENT</div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <Reveal direction="none">
            <p className="text-[clamp(2rem,5vw,4.5rem)] font-black leading-[1.1] mb-8">
              היופי שלך הוא לא תבנית מאינסטגרם. <br/>
              <span className="text-[#CCFF00]">הוא הצהרה.</span>
            </p>
            <div className="w-24 h-2 bg-black mx-auto"></div>
          </Reveal>
        </div>
      </section>

      {/* 5. The Studio Vibe */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center border-y-4 border-[#111]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/__mockup/images/luxe-studio.jpg" 
            alt="חלל הסטודיו שלנו" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-[#FF0055]/10 mix-blend-color-burn"></div>
        </div>

        <div className="relative z-10 text-center px-4 w-full max-w-4xl">
          <Reveal direction="up">
            <h2 className="text-[clamp(4rem,10vw,8rem)] font-black leading-none mb-6">
              המקדש <span className="text-outline text-transparent">שלך.</span>
            </h2>
          </Reveal>
          
          <Reveal direction="up" delay={200}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-xl md:text-2xl font-bold">
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-6 py-3 border border-white/20">
                <MapPin className="text-[#CCFF00]" />
                רחוב החשמל 14, תל אביב
              </div>
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-6 py-3 border border-white/20 hover:border-[#FF0055] transition-colors cursor-pointer">
                <Instagram className="text-[#FF0055]" />
                luxe.studio.tlv@
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Footer / CTA */}
      <footer className="pt-32 pb-12 px-4 md:px-8 bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          
          <Reveal direction="up">
            <h2 className="text-[clamp(4rem,9vw,7rem)] font-black leading-[0.9] mb-12">
              אל תישארי <br/>
              <span className="text-[#CCFF00]">מאחור.</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={150} className="w-full max-w-md">
            <a href={BASE + "preview/bold-creative/Contact"} className="w-full group relative flex items-center justify-between bg-white text-black font-black text-2xl md:text-3xl px-8 py-6 border-2 border-transparent hover:border-[#FF0055] transition-all hover:-translate-y-2 hover:translate-x-2 hover:shadow-[10px_10px_0_0_#FF0055]">
              <span>בואי נדבר.</span>
              <div className="bg-[#CCFF00] p-3 rounded-full group-hover:-translate-x-4 transition-transform duration-300">
                <ArrowLeft size={32} className="text-black" />
              </div>
            </a>
            <p className="mt-6 text-gray-500 font-medium tracking-wide">
              * קביעת תורים מראש בלבד. אין כניסה בלי וייב.
            </p>
          </Reveal>

          <div className="w-full mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-bold uppercase tracking-widest">
            <div>© 2024 LUXE STUDIO. ALL RIGHTS RESERVED.</div>
            <div className="flex gap-6">
              <span className="hover:text-white cursor-pointer transition-colors">תקנון</span>
              <span className="hover:text-white cursor-pointer transition-colors">נגישות</span>
              <span className="hover:text-white cursor-pointer transition-colors">קרדיטים</span>
            </div>
          </div>
          
        </div>
      </footer>

    </div>
  );
}
