import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Scissors, Sparkles, Droplets } from 'lucide-react';

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

const services = [
  {
    category: "שיער",
    icon: <Scissors className="text-[#FF0055]" size={32} />,
    items: [
      { name: "גזירה אקספרסיבית", desc: "תספורת גיאומטרית, דיס-קונקטד, שאג או מאלט קיצוני.", price: "₪350" },
      { name: "צבע מלא + הבהרה", desc: "שינוי גוון טוטאלי, כולל ניקוי פיגמנט.", price: "₪850" },
      { name: "ניאון / פסטל", desc: "גוונים בוהקים שדורשים בסיס לבן לחלוטין. כולל טיפול משקם.", price: "₪1100" },
      { name: "גילוחים / Patterns", desc: "אמנות מגולחת על הראש, כולל צביעת התבנית.", price: "₪250" },
    ]
  },
  {
    category: "איפור",
    icon: <Sparkles className="text-[#CCFF00]" size={32} />,
    items: [
      { name: "גלאם מושחת", desc: "איפור ערב נועז, קונטור חרוט ואייליינר מושלם.", price: "₪450" },
      { name: "אוונגרד / פאשן", desc: "איפור יצירתי להפקות אופנה או כשאת רוצה להרוס מסיבה.", price: "₪700" },
      { name: "עיניים בלבד", desc: "פוקוס על משחקי צבע ואייליינר גרפי בלבד.", price: "₪300" },
    ]
  },
  {
    category: "אקסטרים",
    icon: <Droplets className="text-[#F4F4F4]" size={32} />,
    items: [
      { name: "הלבנת גבות", desc: "הטרנד שלא עוזב. מחיקת גבות טוטאלית או צביעה בוורוד/ירוק.", price: "₪150" },
      { name: "אבני חן / Pearls", desc: "הדבקת אבני חן ופנינים סביב העיניים והשיער.", price: "₪200" },
    ]
  }
];

export default function Services() {
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
          <a href="#" className="hover:text-[#FF0055] transition-colors">בית</a>
          <a href="#" className="hover:text-[#FF0055] transition-colors">אודות</a>
          <a href="#" className="text-[#FF0055] transition-colors">שירותים</a>
          <a href="#" className="hover:text-[#FF0055] transition-colors">צור קשר</a>
        </div>
        <button className="text-sm font-bold tracking-widest uppercase hover:text-[#FF0055] transition-colors border-b-2 border-transparent hover:border-[#FF0055] pb-1">
          קבעי תור
        </button>
      </nav>

      {/* Header */}
      <header className="relative pt-40 pb-20 px-4 md:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <Reveal direction="right">
            <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-black leading-none tracking-tight">
              <span className="block text-outline">תפריט</span>
              <span className="block text-[#CCFF00]">הרס עצמי.</span>
            </h1>
          </Reveal>
          <Reveal direction="left" delay={200}>
            <p className="text-xl text-gray-400 max-w-md border-s-4 border-[#FF0055] ps-4">
              אנחנו לא עושות פן גלי ופסים טבעיים. המחירים משקפים חומרים ברמת הפרימיום הגבוהה ביותר ושעות של עבודה אמנותית.
            </p>
          </Reveal>
        </div>
      </header>

      {/* Menu & Image Split */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: Services */}
        <div className="lg:col-span-7 flex flex-col gap-24">
          {services.map((section, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 100}>
              <div className="relative">
                <div className="flex items-center gap-4 mb-10">
                  {section.icon}
                  <h2 className="text-4xl md:text-5xl font-black">{section.category}</h2>
                </div>
                
                <div className="flex flex-col gap-8">
                  {section.items.map((item, i) => (
                    <div key={i} className="group relative">
                      <div className="flex justify-between items-baseline gap-4 mb-2">
                        <h3 className="text-2xl font-bold group-hover:text-[#FF0055] transition-colors">{item.name}</h3>
                        <div className="flex-1 border-b border-dashed border-white/20 relative -top-2 mx-4 group-hover:border-[#CCFF00] transition-colors"></div>
                        <span className="text-2xl font-black text-[#CCFF00]">{item.price}</span>
                      </div>
                      <p className="text-gray-500 font-medium pe-24">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Right Side: Image/Sticky */}
        <div className="lg:col-span-5 relative lg:sticky lg:top-32">
          <Reveal direction="left" delay={300}>
            <div className="relative aspect-[3/4] w-full p-4 border border-white/10 bg-[#111]">
              <div className="absolute inset-0 bg-[#FF0055] translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src="/__mockup/images/luxe-pricing.jpg" 
                alt="אווירת הסטודיו" 
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute top-8 start-8 bg-black/80 backdrop-blur-md p-6 border-l-4 border-[#CCFF00]">
                <h4 className="text-[#CCFF00] font-black text-2xl mb-2">שימי לב</h4>
                <p className="text-sm text-gray-300">
                  המחירים הם הערכה בלבד ועשויים<br/>להשתנות בהתאם לאורך השיער, מצבו<br/>והחזון הסופי. פגישת ייעוץ היא חובה.
                </p>
              </div>
            </div>
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
            <button className="w-full group relative flex items-center justify-between bg-white text-black font-black text-2xl md:text-3xl px-8 py-6 border-2 border-transparent hover:border-[#FF0055] transition-all hover:-translate-y-2 hover:translate-x-2 hover:shadow-[10px_10px_0_0_#FF0055]">
              <span>בואי נדבר.</span>
              <div className="bg-[#CCFF00] p-3 rounded-full group-hover:-translate-x-4 transition-transform duration-300">
                <ArrowLeft size={32} className="text-black" />
              </div>
            </button>
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
