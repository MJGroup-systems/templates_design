import React, { useEffect, useState, useRef } from 'react';
import { Menu, X, MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const IMAGES = {
  hero: "/__mockup/images/law-firm-office.jpg",
  texture: "/__mockup/images/law-firm-texture.jpg",
};

function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting] as const;
}

const Reveal = ({ children, className = "", type = "reveal-up", delay = 0 }: { children: React.ReactNode, className?: string, type?: string, delay?: number }) => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div 
      ref={ref} 
      className={`${type} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function Contact() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['בית', 'אודות', 'שירותים', 'צור קשר'];

  return (
    <div dir="rtl" className="bg-[#050505] text-[#e2e0d9] min-h-screen overflow-x-hidden selection:bg-[#c2a672]/30 selection:text-white font-sans-he">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;600&family=Frank+Ruhl+Libre:wght@300;400;500;700;900&display=swap');

        .font-serif-he { font-family: 'Frank Ruhl Libre', serif; }
        .font-sans-he { font-family: 'Assistant', sans-serif; }
        
        .luxury-gradient {
          background: linear-gradient(135deg, #c2a672 0%, #e8d5a5 50%, #c2a672 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .reveal-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .reveal-up.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-scale {
          opacity: 0;
          transform: scale(0.95);
          transition: all 1.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .reveal-scale.is-visible {
          opacity: 1;
          transform: scale(1);
        }

        .animate-image-pan {
          animation: panImage 40s ease-in-out infinite alternate;
        }
        @keyframes panImage {
          0% { transform: scale(1.05) translate(0, 0); }
          100% { transform: scale(1.15) translate(-1%, 2%); }
        }
        
        html { scroll-behavior: smooth; }
        
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #1a1a1c; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #c2a672; }
      `}</style>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-[#050505]/95 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex flex-col relative z-20">
            <span className="font-serif-he text-2xl md:text-3xl tracking-wide text-white">שטרן ושות׳</span>
            <span className="text-[0.65rem] tracking-[0.2em] text-[#c2a672] uppercase font-sans-he mt-1">משרד עורכי דין</span>
          </div>
          
          <nav className="hidden md:flex gap-10">
            {navItems.map((item, i) => (
              <a key={i} href="#" className="text-sm tracking-wider text-[#a19f99] hover:text-[#c2a672] transition-colors duration-300">
                {item}
              </a>
            ))}
          </nav>

          <button className="hidden md:flex items-center gap-2 border border-[#c2a672]/40 px-6 py-2.5 text-sm tracking-wider text-[#f5f4f0] hover:bg-[#c2a672] hover:text-[#050505] transition-all duration-500">
            תיאום פגישה
          </button>

          <button className="md:hidden text-white relative z-20" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 bg-[#050505] z-10 transition-transform duration-500 flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navItems.map((item, i) => (
            <a key={i} href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif-he text-white hover:text-[#c2a672] transition-colors">
              {item}
            </a>
          ))}
          <button className="mt-8 border border-[#c2a672]/40 px-8 py-3 text-[#c2a672]">תיאום פגישה</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60dvh] flex items-center justify-start pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="w-full h-full animate-image-pan overflow-hidden origin-center">
            <img src={IMAGES.hero} alt="Luxury Office" className="w-full h-full object-cover opacity-40" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="max-w-3xl">
            <Reveal delay={100}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-[#c2a672]"></div>
                <span className="text-[#c2a672] tracking-[0.2em] text-sm font-light">בדיסקרטיות מלאה</span>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <h1 className="font-serif-he text-5xl md:text-7xl leading-[1.1] text-white mb-6">
                יצירת <span className="luxury-gradient italic">קשר.</span>
              </h1>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form Side */}
            <div className="order-2 lg:order-1">
              <Reveal>
                <div className="bg-[#0a0a0c] p-10 md:p-14 border border-white/5 shadow-2xl relative">
                  <div className="absolute top-0 right-0 w-32 h-[2px] bg-[#c2a672]"></div>
                  <h3 className="font-serif-he text-3xl text-white mb-2">תיאום פגישה</h3>
                  <p className="text-[#a19f99] font-light mb-10">השאירו פרטים ונציג משרדנו יחזור אליכם בהקדם האפשרי. הפנייה נשמרת בסודיות מוחלטת.</p>
                  
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm text-[#a19f99] tracking-wide">שם מלא</label>
                        <input type="text" className="w-full bg-[#121214] border border-white/10 text-white p-4 focus:outline-none focus:border-[#c2a672] transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-[#a19f99] tracking-wide">טלפון</label>
                        <input type="tel" dir="rtl" className="w-full bg-[#121214] border border-white/10 text-white p-4 focus:outline-none focus:border-[#c2a672] transition-colors" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm text-[#a19f99] tracking-wide">דוא״ל</label>
                      <input type="email" dir="rtl" className="w-full bg-[#121214] border border-white/10 text-white p-4 focus:outline-none focus:border-[#c2a672] transition-colors" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-[#a19f99] tracking-wide">נושא הפנייה (בקצרה)</label>
                      <textarea rows={4} className="w-full bg-[#121214] border border-white/10 text-white p-4 focus:outline-none focus:border-[#c2a672] transition-colors resize-none"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-[#c2a672] text-[#050505] font-semibold tracking-wide py-4 mt-4 flex items-center justify-center gap-2 hover:bg-[#e8d5a5] transition-colors duration-300">
                      <span>שליחת פנייה</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </Reveal>
            </div>

            {/* Info Side */}
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <Reveal delay={200}>
                <div className="space-y-12">
                  <div className="flex items-start gap-6">
                    <div className="bg-[#121214] p-4 rounded-full border border-white/5">
                      <MapPin className="w-6 h-6 text-[#c2a672]" />
                    </div>
                    <div>
                      <h4 className="font-serif-he text-2xl text-white mb-2">המשרד שלנו</h4>
                      <p className="text-[#a19f99] font-light leading-relaxed">
                        מגדל המוזיאון, קומה 24<br />
                        רחוב ברקוביץ 4, תל אביב-יפו<br />
                        חניה שמורה לאורחי המשרד בחניון המגדל (P4)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="bg-[#121214] p-4 rounded-full border border-white/5">
                      <Phone className="w-6 h-6 text-[#c2a672]" />
                    </div>
                    <div>
                      <h4 className="font-serif-he text-2xl text-white mb-2">התקשרות ישירה</h4>
                      <p className="text-[#a19f99] font-light leading-relaxed" dir="ltr" style={{ textAlign: 'right' }}>
                        +972 (0)3 555 1234
                      </p>
                      <p className="text-[#a19f99] font-light leading-relaxed" dir="ltr" style={{ textAlign: 'right' }}>
                        +972 (0)3 555 1235 (פקס)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="bg-[#121214] p-4 rounded-full border border-white/5">
                      <Mail className="w-6 h-6 text-[#c2a672]" />
                    </div>
                    <div>
                      <h4 className="font-serif-he text-2xl text-white mb-2">דוא״ל</h4>
                      <p className="text-[#a19f99] font-light leading-relaxed" dir="ltr" style={{ textAlign: 'right' }}>
                        office@stern-law.co.il
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="bg-[#121214] p-4 rounded-full border border-white/5">
                      <Clock className="w-6 h-6 text-[#c2a672]" />
                    </div>
                    <div>
                      <h4 className="font-serif-he text-2xl text-white mb-2">שעות פעילות</h4>
                      <p className="text-[#a19f99] font-light leading-relaxed">
                        ימים א׳-ה׳: 08:30 - 19:00<br />
                        זמינות 24/7 ללקוחות המשרד למקרי חירום משפטיים
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] pt-20 pb-10 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="font-serif-he text-2xl text-white mb-6">שטרן ושות׳</div>
              <p className="text-[#a19f99] text-sm font-light leading-relaxed max-w-sm">
                משרד עורכי דין בוטיק המעניק שירותים משפטיים אסטרטגיים ברף הגבוה ביותר עבור יחידי סגולה ותאגידים.
              </p>
            </div>
            
            <div>
              <h4 className="text-white mb-6 tracking-wider text-sm">יצירת קשר</h4>
              <ul className="text-[#a19f99] text-sm space-y-3 font-light">
                <li>מגדל המוזיאון, רחוב ברקוביץ 4, תל אביב</li>
                <li dir="ltr" className="text-right">+972 (0)3 555 1234</li>
                <li dir="ltr" className="text-right">office@stern-law.co.il</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white mb-6 tracking-wider text-sm">ניווט</h4>
              <ul className="text-[#a19f99] text-sm space-y-3 font-light">
                {navItems.map(item => (
                  <li key={item}><a href="#" className="hover:text-[#c2a672] transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white mb-6 tracking-wider text-sm">משפטי</h4>
              <ul className="text-[#a19f99] text-sm space-y-3 font-light">
                <li><a href="#" className="hover:text-[#c2a672] transition-colors">תנאי שימוש</a></li>
                <li><a href="#" className="hover:text-[#c2a672] transition-colors">מדיניות פרטיות</a></li>
                <li><a href="#" className="hover:text-[#c2a672] transition-colors">הצהרת נגישות</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#a19f99] font-light">
            <div>&copy; {new Date().getFullYear()} שטרן ושות׳ עורכי דין. כל הזכויות שמורות.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors tracking-widest uppercase">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
