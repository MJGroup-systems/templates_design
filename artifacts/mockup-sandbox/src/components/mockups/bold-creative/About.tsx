import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Instagram } from 'lucide-react';

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

export default function About() {
  return (
    <div dir="rtl" className="bg-[#050505] min-h-screen text-[#F4F4F4] font-sans selection:bg-[#FF0055] selection:text-white overflow-x-hidden">
      
      {/* Dynamic Noise Overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] mix-blend-overlay"
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' 
        }}
      />

      <style>{`
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
          <a href={BASE + "preview/bold-creative/Bold"} className="hover:text-[#FF0055] transition-colors">בית</a>
          <a href={BASE + "preview/bold-creative/About"} className="text-[#FF0055] transition-colors">אודות</a>
          <a href={BASE + "preview/bold-creative/Services"} className="hover:text-[#FF0055] transition-colors">שירותים</a>
          <a href={BASE + "preview/bold-creative/Contact"} className="hover:text-[#FF0055] transition-colors">צור קשר</a>
        </div>
        <a href={BASE + "preview/bold-creative/Contact"} className="text-sm font-bold tracking-widest uppercase hover:text-[#FF0055] transition-colors border-b-2 border-transparent hover:border-[#FF0055] pb-1">
          קבעי תור
        </a>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <Reveal direction="up">
          <h1 className="text-[clamp(4rem,10vw,8rem)] font-black leading-[0.9] tracking-tight mb-8">
            <span className="block text-outline">הסיפור</span>
            <span className="block text-[#FF0055]">שלנו.</span>
          </h1>
        </Reveal>
        <Reveal direction="up" delay={200}>
          <div className="max-w-2xl border-s-4 border-[#CCFF00] ps-6">
            <p className="text-xl md:text-2xl font-bold text-gray-300 leading-relaxed mb-6">
              הכל התחיל מהבנה אחת פשוטה: תעשיית היופי משעממת. כולן רוצות להיראות אותו הדבר, כולן מחפשות את אותו ה"מושלם" הפלסטי. אנחנו החלטנו לשבור את המראה.
            </p>
            <p className="text-lg text-gray-500">
              לוקס הוקם ב-2022 מתוך זעם טהור על הבנאליה. רצינו מקום שבו יופי הוא אקסטרים, שבו שיער הוא קנבס ואיפור הוא הצהרה פוליטית. לא מעניין אותנו טרנדים, מעניין אותנו ביטוי עצמי.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Team */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <Reveal direction="up">
          <h2 className="text-[clamp(3rem,6vw,5rem)] font-black mb-16 leading-none">
            המוחות <span className="text-[#CCFF00]">המעוותים</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* Team Member 1 */}
          <Reveal direction="up" delay={100}>
            <div className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden border-2 border-white/10 group-hover:border-[#FF0055] transition-colors duration-500">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src="/__mockup/images/luxe-team-1.jpg" 
                  alt="מעצבת שיער" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute bottom-6 start-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-[#FF0055] text-white px-4 py-2 font-black text-xl flex items-center gap-2">
                    <Instagram size={20} />
                    @shira_luxe
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-baseline justify-between border-b border-white/10 pb-4">
                <h3 className="text-3xl font-black">שירה</h3>
                <span className="text-[#CCFF00] font-bold tracking-widest uppercase text-sm">מנהלת אמנותית • שיער</span>
              </div>
              <p className="mt-4 text-gray-400">
                מתמחה בצבעים ניאוניים, גילוחים גיאומטריים והרס מבוקר של מרקם השיער שלך כדי לבנות אותו מחדש כיצירת אמנות.
              </p>
            </div>
          </Reveal>

          {/* Team Member 2 */}
          <Reveal direction="up" delay={300} className="md:mt-32">
            <div className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden border-2 border-white/10 group-hover:border-[#CCFF00] transition-colors duration-500">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src="/__mockup/images/luxe-team-2.jpg" 
                  alt="מאפרת" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute bottom-6 start-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-[#CCFF00] text-black px-4 py-2 font-black text-xl flex items-center gap-2">
                    <Instagram size={20} />
                    @maya_vanguard
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-baseline justify-between border-b border-white/10 pb-4">
                <h3 className="text-3xl font-black">מאיה</h3>
                <span className="text-[#FF0055] font-bold tracking-widest uppercase text-sm">אוונגרד • איפור</span>
              </div>
              <p className="mt-4 text-gray-400">
                האיפור שלה מוגדר כנשק קר. אייליינר שחותך, צלליות שצועקות ופיסול פנים שלא משאיר מקום לספק.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 bg-[#CCFF00] text-black mt-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Reveal direction="up">
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
              "אנחנו לא מסתירות פגמים.<br />אנחנו מדגישות אותם והופכות אותם לכוח."
            </h2>
            <div className="w-16 h-2 bg-[#FF0055] mx-auto"></div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
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
