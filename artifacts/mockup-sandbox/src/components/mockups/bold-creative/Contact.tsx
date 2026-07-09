import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, MapPin, Instagram, Mail, Phone } from 'lucide-react';

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

export default function Contact() {
  return (
    <div dir="rtl" className="bg-[#050505] min-h-screen text-[#F4F4F4] font-sans selection:bg-[#CCFF00] selection:text-black overflow-x-hidden">
      
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
        
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active{
            -webkit-box-shadow: 0 0 0 30px black inset !important;
            -webkit-text-fill-color: white !important;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 p-6 flex justify-between items-center mix-blend-difference">
        <div className="text-3xl font-black tracking-tighter">לוקס.</div>
        <div className="hidden md:flex items-center gap-6 font-bold text-sm tracking-widest uppercase">
          <a href={BASE + "preview/bold-creative/Bold"} className="hover:text-[#FF0055] transition-colors">בית</a>
          <a href={BASE + "preview/bold-creative/About"} className="hover:text-[#FF0055] transition-colors">אודות</a>
          <a href={BASE + "preview/bold-creative/Services"} className="hover:text-[#FF0055] transition-colors">שירותים</a>
          <a href={BASE + "preview/bold-creative/Contact"} className="text-[#FF0055] transition-colors">צור קשר</a>
        </div>
        <a href={BASE + "preview/bold-creative/Contact"} className="text-sm font-bold tracking-widest uppercase hover:text-[#FF0055] transition-colors border-b-2 border-transparent hover:border-[#FF0055] pb-1">
          קבעי תור
        </a>
      </nav>

      <section className="pt-32 pb-12 px-4 md:px-8 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
        
        <Reveal direction="up">
          <h1 className="text-[clamp(4rem,10vw,9rem)] font-black leading-none mb-16">
            בואי <span className="text-[#FF0055]">נדבר.</span>
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          {/* Form */}
          <div className="order-2 lg:order-1">
            <Reveal direction="up" delay={200}>
              <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name"
                    placeholder=" "
                    className="block w-full bg-transparent border-b-2 border-white/20 py-4 px-2 text-xl font-bold focus:outline-none focus:border-[#FF0055] transition-colors peer"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute right-2 top-4 text-gray-500 font-bold text-xl transition-all peer-focus:-translate-y-8 peer-focus:text-[#FF0055] peer-focus:text-sm peer-[:not(:placeholder-shown)]:-translate-y-8 peer-[:not(:placeholder-shown)]:text-[#FF0055] peer-[:not(:placeholder-shown)]:text-sm cursor-text"
                  >
                    איך קוראים לך?
                  </label>
                </div>

                <div className="relative group">
                  <input 
                    type="tel" 
                    id="phone"
                    placeholder=" "
                    className="block w-full bg-transparent border-b-2 border-white/20 py-4 px-2 text-xl font-bold focus:outline-none focus:border-[#CCFF00] transition-colors peer"
                  />
                  <label 
                    htmlFor="phone" 
                    className="absolute right-2 top-4 text-gray-500 font-bold text-xl transition-all peer-focus:-translate-y-8 peer-focus:text-[#CCFF00] peer-focus:text-sm peer-[:not(:placeholder-shown)]:-translate-y-8 peer-[:not(:placeholder-shown)]:text-[#CCFF00] peer-[:not(:placeholder-shown)]:text-sm cursor-text"
                  >
                    טלפון שנדע לחזור
                  </label>
                </div>

                <div className="relative group mt-4">
                  <textarea 
                    id="vibe"
                    placeholder=" "
                    rows={4}
                    className="block w-full bg-[#111] border-2 border-white/10 p-4 text-lg font-bold focus:outline-none focus:border-[#FF0055] transition-colors peer resize-none"
                  ></textarea>
                  <label 
                    htmlFor="vibe" 
                    className="absolute right-4 top-4 text-gray-500 font-bold text-xl transition-all peer-focus:-translate-y-10 peer-focus:text-[#FF0055] peer-focus:text-sm peer-focus:bg-[#050505] peer-focus:px-2 peer-[:not(:placeholder-shown)]:-translate-y-10 peer-[:not(:placeholder-shown)]:text-[#FF0055] peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:bg-[#050505] peer-[:not(:placeholder-shown)]:px-2 cursor-text"
                  >
                    תארי לנו את הוויב שאת מחפשת (חובה)
                  </label>
                </div>

                <button type="submit" className="group relative flex items-center justify-center gap-4 bg-[#CCFF00] text-black font-black text-xl px-8 py-5 border-2 border-transparent hover:border-black transition-all hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0_0_#FF0055] mt-4">
                  שלחי לנו
                  <ArrowLeft className="group-hover:-translate-x-2 transition-transform duration-300" />
                </button>

              </form>
            </Reveal>
          </div>

          {/* Info */}
          <div className="order-1 lg:order-2 flex flex-col gap-12">
            <Reveal direction="left" delay={300}>
              <div className="bg-[#111] p-8 border-l-4 border-[#FF0055]">
                <h3 className="text-2xl font-black mb-6 flex items-center gap-3 text-[#FF0055]">
                  <MapPin />
                  הסטודיו
                </h3>
                <p className="text-xl font-bold mb-2">רחוב החשמל 14, תל אביב</p>
                <p className="text-gray-400">קומה 2, דלת שחורה בלי שלט.</p>
                
                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 font-bold">א' - ה'</span>
                    <span className="font-bold">10:00 - 20:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 font-bold">שישי</span>
                    <span className="font-bold text-[#CCFF00]">09:00 - 15:00</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={400}>
              <div className="flex flex-col gap-6">
                <a href="#" className="flex items-center gap-4 text-2xl font-black hover:text-[#FF0055] transition-colors group">
                  <div className="bg-white/10 p-4 rounded-full group-hover:bg-[#FF0055]/20 transition-colors">
                    <Instagram />
                  </div>
                  @luxe.studio.tlv
                </a>
                <a href="#" className="flex items-center gap-4 text-2xl font-black hover:text-[#CCFF00] transition-colors group">
                  <div className="bg-white/10 p-4 rounded-full group-hover:bg-[#CCFF00]/20 transition-colors">
                    <Phone />
                  </div>
                  03-9988776
                </a>
                <a href="#" className="flex items-center gap-4 text-2xl font-black hover:text-white transition-colors group">
                  <div className="bg-white/10 p-4 rounded-full group-hover:bg-white/20 transition-colors">
                    <Mail />
                  </div>
                  die@luxe-studio.com
                </a>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-12 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-bold uppercase tracking-widest">
          <div>© 2024 LUXE STUDIO. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">תקנון</span>
            <span className="hover:text-white cursor-pointer transition-colors">נגישות</span>
            <span className="hover:text-white cursor-pointer transition-colors">קרדיטים</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
