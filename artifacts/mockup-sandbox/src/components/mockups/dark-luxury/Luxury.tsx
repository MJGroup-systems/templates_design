import React, { useEffect, useState, useRef } from 'react';
import { Scale, Building2, Briefcase, Shield, Menu, X, ArrowLeft, ChevronDown } from 'lucide-react';

const IMAGES = {
  hero: "/__mockup/images/law-firm-hero.jpg",
  texture: "/__mockup/images/law-firm-texture.jpg",
  details: "/__mockup/images/law-firm-details.jpg",
  boardroom: "/__mockup/images/law-firm-boardroom.jpg"
};

// Intersection Observer Hook for scroll animations
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

// Reveal Component for scroll effects
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

export default function LuxuryLawFirm() {
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
            {['בית', 'אודות', 'שירותים', 'צור קשר'].map((item, i) => (
              <a key={i} href={`#${item}`} className="text-sm tracking-wider text-[#a19f99] hover:text-[#c2a672] transition-colors duration-300">
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
          {['בית', 'אודות', 'שירותים', 'צור קשר'].map((item, i) => (
            <a key={i} href={`#${item}`} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif-he text-white hover:text-[#c2a672] transition-colors">
              {item}
            </a>
          ))}
          <button className="mt-8 border border-[#c2a672]/40 px-8 py-3 text-[#c2a672]">תיאום פגישה</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-center justify-start pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="w-full h-full animate-image-pan overflow-hidden origin-center">
            <img src={IMAGES.hero} alt="Law Firm Interior" className="w-full h-full object-cover opacity-40" />
          </div>
          {/* Gradients for text readability and moody atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-[#050505]/95 via-[#050505]/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="max-w-3xl">
            <Reveal delay={100}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-[#c2a672]"></div>
                <span className="text-[#c2a672] tracking-[0.2em] text-sm font-light">בסטנדרט בלתי מתפשר</span>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <h1 className="font-serif-he text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-white mb-6">
                אומנות הליטיגציה <br />
                <span className="luxury-gradient italic">והעסקים.</span>
              </h1>
            </Reveal>
            <Reveal delay={500}>
              <p className="text-lg md:text-xl text-[#a19f99] font-light max-w-xl leading-relaxed mb-10">
                ייצוג משפטי אסטרטגי המותאם אישית לאינטרסים העסקיים והאישיים שלך. משרד הבוטיק המוביל ליחידי סגולה ולתאגידים במשק.
              </p>
            </Reveal>
            <Reveal delay={700}>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="group relative overflow-hidden bg-[#c2a672] text-[#050505] px-8 py-4 flex items-center justify-center gap-3 transition-transform hover:scale-[1.02]">
                  <span className="relative z-10 font-semibold tracking-wide">התחל דיאלוג</span>
                  <ArrowLeft className="relative z-10 w-4 h-4 transition-transform group-hover:-translate-x-2" />
                  <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                </button>
                <button className="group px-8 py-4 flex items-center justify-center gap-3 border border-white/20 text-white hover:border-[#c2a672]/60 hover:text-[#c2a672] transition-colors duration-500">
                  <span className="tracking-wide">תחומי התמחות</span>
                </button>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#a19f99] opacity-60 hover:opacity-100 transition-opacity animate-pulse">
          <span className="text-xs tracking-widest uppercase">גלול מטה</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="הפילוסופיה" className="py-24 md:py-40 bg-[#050505] relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <Reveal>
                <h2 className="font-serif-he text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
                  חזון, דיסקרטיות <br />
                  <span className="text-[#a19f99]">וראיית הנולד.</span>
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <div className="space-y-6 text-[#a19f99] font-light text-lg leading-relaxed">
                  <p>
                    אנו מלווים את לקוחותינו בצמתים הקריטיים ביותר בחייהם העסקיים והאישיים. מתוך הבנה כי כל מהלך משפטי נושא בחובו השלכות מרחיקות לכת, אנו פועלים בתכנון קפדני, יצירתיות ואסטרטגיה מנצחת.
                  </p>
                  <p>
                    משרדנו חרת על דגלו להעניק שירות אישי ודיסקרטי, ברמת המצוינות הגבוהה ביותר. אנו בוחרים בקפידה את התיקים שאנו מנהלים, כדי להבטיח שכל לקוח יזכה למלוא תשומת הלב של השותפים הבכירים מתחילת התהליך ועד סופו.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={400}>
                <div className="mt-12">
                  <div className="font-serif-he text-3xl text-[#c2a672] mb-1 italic">יונתן שטרן</div>
                  <div className="text-xs tracking-widest text-[#a19f99] uppercase">מייסד ושותף בכיר</div>
                </div>
              </Reveal>
            </div>
            <div className="relative">
              <Reveal type="reveal-scale">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img src={IMAGES.boardroom} alt="Law Firm Boardroom" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 border border-[#c2a672]/20 m-6 pointer-events-none transition-transform duration-700 hover:scale-[0.97]"></div>
                </div>
              </Reveal>
              {/* Decorative element */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#0a0a0c] border border-white/5 items-center justify-center p-8 hidden md:flex">
                <Scale className="w-16 h-16 text-[#c2a672]/30 stroke-[1]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="תחומי התמחות" className="py-24 md:py-32 bg-[#0a0a0c] relative border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-[1px] w-8 bg-[#c2a672]"></div>
                  <span className="text-[#c2a672] tracking-[0.2em] text-sm">תחומי התמחות</span>
                </div>
                <h2 className="font-serif-he text-4xl md:text-5xl text-white">מומחיות ללא פשרות.</h2>
              </div>
              <button className="flex items-center gap-2 text-sm text-[#a19f99] hover:text-[#c2a672] transition-colors group pb-2 border-b border-transparent hover:border-[#c2a672]">
                כל תחומי העיסוק
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-2" />
              </button>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Scale, title: "ליטיגציה מסחרית", desc: "ניהול סכסוכים מורכבים וייצוג בערכאות הגבוהות ביותר תוך ראייה אסטרטגית חדה וחסרת פשרות." },
              { icon: Building2, title: "נדל״ן ופרויקטים", desc: "ליווי יזמים, קבוצות רכישה ועסקאות נדל״ן רחבות היקף מהשלב הראשוני ועד מפתח." },
              { icon: Briefcase, title: "מיזוגים ורכישות", desc: "ייצוג תאגידים, משקיעים וקרנות בעסקאות M&A, ארגון מחדש, מיזמים משותפים והנפקות." },
              { icon: Shield, title: "ניהול הון משפחתי", desc: "הגנה על נכסים, נאמנויות, תכנון בין-דורי וייצוג משפחות עתירות הון בסטנדרט הגלובלי הגבוה ביותר." }
            ].map((area, i) => (
              <Reveal key={i} delay={i * 150}>
                <div className="group bg-[#121214] border border-white/5 p-8 h-full transition-all duration-500 hover:bg-[#151518] hover:border-[#c2a672]/30 relative overflow-hidden cursor-pointer">
                  <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-[#c2a672] to-transparent transform scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100"></div>
                  <area.icon className="w-10 h-10 text-[#c2a672]/70 mb-6 stroke-[1.5] transition-transform duration-500 group-hover:scale-110" />
                  <h3 className="font-serif-he text-2xl text-white mb-4">{area.title}</h3>
                  <p className="text-[#a19f99] font-light text-sm leading-relaxed">{area.desc}</p>
                  <div className="mt-8 flex items-center gap-2 text-[#c2a672] text-sm opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    קרא עוד <ArrowLeft className="w-4 h-4" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Quote */}
      <section className="relative py-32 md:py-48 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="w-full h-full bg-[url('/__mockup/images/law-firm-texture.jpg')] bg-cover bg-fixed bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-transparent to-[#050505]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 flex justify-center text-center">
          <Reveal>
            <div className="max-w-4xl mx-auto">
              <div className="text-[#c2a672] text-6xl md:text-8xl font-serif-he opacity-30 mb-[-2rem] md:mb-[-3rem]">״</div>
              <h2 className="font-serif-he text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-10">
                הצלחה אינה תוצאה של מזל, אלא של <span className="luxury-gradient italic">תכנון מוקפד</span>, יצירתיות משפטית, וראיית הנולד.
              </h2>
              <div className="h-[1px] w-12 bg-[#c2a672]/50 mx-auto mb-6"></div>
              <div className="text-[#a19f99] tracking-widest text-sm uppercase">מתוך חזון המשרד</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Details / The Firm */}
      <section id="השותפים" className="py-24 md:py-40 bg-[#050505] relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <Reveal type="reveal-scale">
                <div className="relative aspect-[16/10] overflow-hidden group">
                  <img src={IMAGES.details} alt="Luxury Pen and Paper" className="w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#050505]/40 to-transparent"></div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5 lg:-mr-16 relative z-10 bg-[#0a0a0c] p-8 md:p-14 border border-white/5 shadow-2xl">
              <Reveal delay={200}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] w-8 bg-[#c2a672]"></div>
                  <span className="text-[#c2a672] tracking-[0.2em] text-sm">גישת הבוטיק</span>
                </div>
                <h2 className="font-serif-he text-3xl md:text-4xl lg:text-5xl text-white mb-8">
                  תשומת לב אישית לכל פרט.
                </h2>
                <p className="text-[#a19f99] font-light leading-relaxed mb-6">
                  אנו מאמינים כי משפטנות עילית אינה יכולה להיות מיוצרת בפס ייצור. במשרדנו, כל תיק מקבל את מלוא הפוקוס, המסירות והניסיון של השותפים המייסדים. 
                </p>
                <p className="text-[#a19f99] font-light leading-relaxed mb-10">
                  תפיסת העולם שלנו דוגלת בירידה לפרטים הקטנים ביותר, מתוך הבנה כי דווקא שם מסתתרים הפתרונות המבריקים ביותר שיכריעו את הכף לטובת הלקוח.
                </p>
                <button className="text-white hover:text-[#c2a672] border-b border-[#c2a672]/30 hover:border-[#c2a672] pb-1 transition-colors flex items-center gap-2 text-sm uppercase tracking-wider group">
                  הכר את השותפים <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-2" />
                </button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-white/5 bg-[#08080a]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-start">
            {[
              { num: "30+", label: "שנות ניסיון מצטבר" },
              { num: "₪4B+", label: "שווי עסקאות בליווי המשרד" },
              { num: "100%", label: "דיסקרטיות ומסירות" },
              { num: "Top", label: "דירוג איכות בוטיק" }
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 100} className="flex flex-col items-center md:items-start">
                <div className="font-serif-he text-5xl md:text-6xl text-[#c2a672] mb-4">{stat.num}</div>
                <div className="text-sm text-[#a19f99] tracking-wider">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Boardroom */}
      <section id="צור קשר" className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img src={IMAGES.boardroom} alt="Boardroom" className="w-full h-full object-cover opacity-20" />
           <div className="absolute inset-0 bg-[#050505]/80 backdrop-blur-[2px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Reveal>
            <div className="max-w-2xl mx-auto border border-white/5 bg-[#0a0a0c]/80 backdrop-blur-md p-10 md:p-16 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c2a672] to-transparent opacity-50"></div>
              
              <Scale className="w-12 h-12 text-[#c2a672] mx-auto mb-8 stroke-[1]" />
              <h2 className="font-serif-he text-3xl md:text-5xl text-white mb-6">
                מוכנים לשלב הבא?
              </h2>
              <p className="text-[#a19f99] mb-10 font-light">
                אנו מזמינים אתכם ליצור עמנו קשר לתיאום פגישת היכרות אישית במשרדינו. אנו מתחייבים לדיסקרטיות מלאה.
              </p>
              
              <form className="flex flex-col gap-4 text-start" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="שם מלא" className="bg-[#121214]/80 border border-white/5 text-white p-4 focus:outline-none focus:border-[#c2a672]/50 transition-colors font-light placeholder:text-[#a19f99]/50" />
                  <input type="tel" placeholder="טלפון" className="bg-[#121214]/80 border border-white/5 text-white p-4 focus:outline-none focus:border-[#c2a672]/50 transition-colors font-light placeholder:text-[#a19f99]/50" dir="rtl" />
                </div>
                <input type="email" placeholder="דוא״ל" className="bg-[#121214]/80 border border-white/5 text-white p-4 focus:outline-none focus:border-[#c2a672]/50 transition-colors font-light placeholder:text-[#a19f99]/50" dir="rtl" />
                <button type="submit" className="bg-[#c2a672] text-[#050505] font-semibold tracking-wide py-4 mt-4 hover:bg-[#e8d5a5] transition-colors duration-300">
                  שליחת פנייה דיסקרטית
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5 relative z-10">
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
                {['בית', 'אודות', 'שירותים', 'צור קשר'].map(item => (
                  <li key={item}><a href={`#${item}`} className="hover:text-[#c2a672] transition-colors">{item}</a></li>
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
