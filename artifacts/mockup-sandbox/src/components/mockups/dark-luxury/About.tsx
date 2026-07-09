import React, { useEffect, useState, useRef } from 'react';
import { Scale, Menu, X, ArrowLeft, ChevronDown, Award, Shield, Target } from 'lucide-react';

const IMAGES = {
  hero: "/__mockup/images/law-firm-partners.jpg",
  texture: "/__mockup/images/law-firm-texture.jpg",
  details: "/__mockup/images/law-firm-details.jpg"
};

const BASE = import.meta.env.BASE_URL;

const NAV_LINKS = [
  { name: 'בית', href: `${BASE}preview/dark-luxury/Luxury` },
  { name: 'אודות', href: `${BASE}preview/dark-luxury/About` },
  { name: 'שירותים', href: `${BASE}preview/dark-luxury/Services` },
  { name: 'צור קשר', href: `${BASE}preview/dark-luxury/Contact` }
];

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

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            {NAV_LINKS.map((item, i) => (
              <a key={i} href={item.href} className={`text-sm tracking-wider hover:text-[#c2a672] transition-colors duration-300 ${item.name === 'אודות' ? 'text-[#c2a672]' : 'text-[#a19f99]'}`}>
                {item.name}
              </a>
            ))}
          </nav>

          <a href={NAV_LINKS[3].href} className="hidden md:flex items-center gap-2 border border-[#c2a672]/40 px-6 py-2.5 text-sm tracking-wider text-[#f5f4f0] hover:bg-[#c2a672] hover:text-[#050505] transition-all duration-500">
            תיאום פגישה
          </a>

          <button className="md:hidden text-white relative z-20" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 bg-[#050505] z-10 transition-transform duration-500 flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {NAV_LINKS.map((item, i) => (
            <a key={i} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className={`text-2xl font-serif-he hover:text-[#c2a672] transition-colors ${item.name === 'אודות' ? 'text-[#c2a672]' : 'text-white'}`}>
              {item.name}
            </a>
          ))}
          <a href={NAV_LINKS[3].href} className="mt-8 border border-[#c2a672]/40 px-8 py-3 text-[#c2a672] text-center inline-block">תיאום פגישה</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60dvh] flex items-center justify-start pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="w-full h-full animate-image-pan overflow-hidden origin-center">
            <img src={IMAGES.hero} alt="Partners" className="w-full h-full object-cover opacity-30" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="max-w-3xl">
            <Reveal delay={100}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-[#c2a672]"></div>
                <span className="text-[#c2a672] tracking-[0.2em] text-sm font-light">מורשת של מצוינות</span>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <h1 className="font-serif-he text-5xl md:text-7xl leading-[1.1] text-white mb-6">
                מי <span className="luxury-gradient italic">שאנחנו.</span>
              </h1>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32 bg-[#050505] relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
               <Reveal type="reveal-scale">
                 <div className="aspect-[4/5] overflow-hidden relative group">
                   <img src={IMAGES.details} alt="Firm Details" className="w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105" />
                   <div className="absolute inset-0 border border-[#c2a672]/20 m-6 pointer-events-none"></div>
                 </div>
               </Reveal>
            </div>
            <div className="order-1 lg:order-2">
              <Reveal>
                <h2 className="font-serif-he text-3xl md:text-5xl text-white mb-8 leading-tight">
                  כוחנו נובע מתוך <span className="text-[#a19f99]">המחויבות המוחלטת</span> לכל לקוח.
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <div className="space-y-6 text-[#a19f99] font-light text-lg leading-relaxed">
                  <p>
                    משרד שטרן ושות׳ הוקם לפני למעלה משני עשורים מתוך חזון ברור: להעניק ייצוג משפטי בסטנדרט חסר פשרות, המשלב תחכום משפטי עם הבנה עסקית עמוקה. אנו לא רק עורכי דין, אלא שותפים אסטרטגיים לדרך.
                  </p>
                  <p>
                    מאז היווסדו, ליווה המשרד את התיקים המורכבים והמשמעותיים ביותר במשק הישראלי, תוך שמירה על דיסקרטיות מלאה והשגת תוצאות יוצאות דופן. צוות השותפים שלנו מורכב ממשפטנים מהשורה הראשונה, יוצאי מערכות אכיפת החוק והפירמות הגלובליות המובילות בעולם.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={400}>
                <div className="mt-12 pt-8 border-t border-white/5">
                  <div className="font-serif-he text-2xl text-[#c2a672] mb-1 italic">״המטרה אינה רק לנצח בתיק, אלא לעצב את המציאות מחדש עבור לקוחותינו.״</div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#0a0a0c] border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-[#c2a672] tracking-[0.2em] text-sm block mb-4">עמודי התווך</span>
              <h2 className="font-serif-he text-4xl text-white">הערכים שלנו</h2>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Award, title: "מצוינות עילאית", desc: "אנו לא מתפשרים על פחות משלמות. כל מסמך, כל טיעון וכל מהלך אסטרטגי נבחנים בקפידה יתרה." },
              { icon: Shield, title: "דיסקרטיות מוחלטת", desc: "סודיות היא אבן היסוד של המקצוע שלנו. אנו מספקים מעטפת הגנה הרמטית לענייניהם האישיים והעסקיים של לקוחותינו." },
              { icon: Target, title: "ראייה אסטרטגית", desc: "אנו מנתחים כל תרחיש מראש, מזהים סיכונים לפני שהם מתממשים, ומנצלים הזדמנויות לפני שהן חומקות." }
            ].map((val, i) => (
              <Reveal key={i} delay={i * 200}>
                <div className="bg-[#121214] p-10 border border-white/5 hover:border-[#c2a672]/30 transition-colors h-full text-center group">
                  <val.icon className="w-12 h-12 text-[#c2a672]/70 mx-auto mb-6 stroke-[1] transition-transform group-hover:scale-110 group-hover:text-[#c2a672]" />
                  <h3 className="font-serif-he text-2xl text-white mb-4">{val.title}</h3>
                  <p className="text-[#a19f99] font-light leading-relaxed">{val.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] pt-20 pb-10 relative z-10">
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
                {NAV_LINKS.map(item => (
                  <li key={item.name}><a href={item.href} className={`hover:text-[#c2a672] transition-colors ${item.name === 'אודות' ? 'text-[#c2a672]' : ''}`}>{item.name}</a></li>
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
