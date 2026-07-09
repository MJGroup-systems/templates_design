import React, { useEffect, useState, useRef } from 'react';
import { Scale, Building2, Briefcase, Shield, Menu, X, ArrowLeft, ArrowRight, Gavel, FileText, Lock } from 'lucide-react';

const IMAGES = {
  hero: "/__mockup/images/law-firm-scales.jpg",
  texture: "/__mockup/images/law-firm-texture.jpg",
  boardroom: "/__mockup/images/law-firm-boardroom.jpg"
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

export default function Services() {
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
            <img src={IMAGES.hero} alt="Scales of Justice" className="w-full h-full object-cover opacity-30" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="max-w-3xl">
            <Reveal delay={100}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-[#c2a672]"></div>
                <span className="text-[#c2a672] tracking-[0.2em] text-sm font-light">פתרונות מקיפים</span>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <h1 className="font-serif-he text-5xl md:text-7xl leading-[1.1] text-white mb-6">
                תחומי <span className="luxury-gradient italic">ההתמחות.</span>
              </h1>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Detailed */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-32">
            
            {/* Service 1 */}
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-4">
                  <Gavel className="w-16 h-16 text-[#c2a672] mb-6 stroke-[1]" />
                  <h2 className="font-serif-he text-4xl text-white mb-4">ליטיגציה <br/>מסחרית וצווארון לבן</h2>
                </div>
                <div className="lg:col-span-8 bg-[#0a0a0c] p-10 border border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-1 h-full bg-[#c2a672] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                  <p className="text-[#a19f99] font-light leading-relaxed mb-6 text-lg">
                    מחלקת הליטיגציה של המשרד נחשבת לאחת המובילות בישראל. אנו מייצגים תאגידים, נושאי משרה ואנשי עסקים בסכסוכים מורכבים במיוחד, מאבקי שליטה, תובענות ייצוגיות ונגזרות, וכן בעבירות צווארון לבן.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#a19f99] font-light">
                    <li className="flex items-center gap-2"><ArrowLeft className="w-4 h-4 text-[#c2a672]" /> סכסוכי בעלי מניות</li>
                    <li className="flex items-center gap-2"><ArrowLeft className="w-4 h-4 text-[#c2a672]" /> תובענות ייצוגיות</li>
                    <li className="flex items-center gap-2"><ArrowLeft className="w-4 h-4 text-[#c2a672]" /> עבירות כלכליות</li>
                    <li className="flex items-center gap-2"><ArrowLeft className="w-4 h-4 text-[#c2a672]" /> בוררויות בינלאומיות</li>
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Service 2 */}
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-4 lg:order-2">
                  <Building2 className="w-16 h-16 text-[#c2a672] mb-6 stroke-[1]" />
                  <h2 className="font-serif-he text-4xl text-white mb-4">נדל״ן<br/>ופרויקטים מורכבים</h2>
                </div>
                <div className="lg:col-span-8 lg:order-1 bg-[#0a0a0c] p-10 border border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#c2a672] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                  <p className="text-[#a19f99] font-light leading-relaxed mb-6 text-lg">
                    ליווי יזמים, קבלנים, קבוצות רכישה ומשקיעים בכל שלבי הפיתוח של פרויקטים נדל״ניים רחבי היקף, החל משלב רכישת הקרקע, דרך מימון הפרויקט, הליכי תכנון ובניה, ועד לשיווק ורישום זכויות.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#a19f99] font-light">
                    <li className="flex items-center gap-2"><ArrowLeft className="w-4 h-4 text-[#c2a672]" /> התחדשות עירונית</li>
                    <li className="flex items-center gap-2"><ArrowLeft className="w-4 h-4 text-[#c2a672]" /> מימון פרויקטים</li>
                    <li className="flex items-center gap-2"><ArrowLeft className="w-4 h-4 text-[#c2a672]" /> נדל״ן מסחרי מניב</li>
                    <li className="flex items-center gap-2"><ArrowLeft className="w-4 h-4 text-[#c2a672]" /> עסקאות קומבינציה</li>
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Service 3 */}
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-4">
                  <Lock className="w-16 h-16 text-[#c2a672] mb-6 stroke-[1]" />
                  <h2 className="font-serif-he text-4xl text-white mb-4">ניהול הון<br/>משפחתי ונאמנויות</h2>
                </div>
                <div className="lg:col-span-8 bg-[#0a0a0c] p-10 border border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-1 h-full bg-[#c2a672] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                  <p className="text-[#a19f99] font-light leading-relaxed mb-6 text-lg">
                    הגנה אסטרטגית על נכסי משפחות עתירות הון. אנו מלווים דורות של משפחות בבניית מבני החזקות אופטימליים, העברה בין דורית שקטה ויעילה, וניהול נכסים ועיזבונות מורכבים.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#a19f99] font-light">
                    <li className="flex items-center gap-2"><ArrowLeft className="w-4 h-4 text-[#c2a672]" /> תכנון בין-דורי</li>
                    <li className="flex items-center gap-2"><ArrowLeft className="w-4 h-4 text-[#c2a672]" /> הקמת נאמנויות</li>
                    <li className="flex items-center gap-2"><ArrowLeft className="w-4 h-4 text-[#c2a672]" /> הסכמי ממון יוקרתיים</li>
                    <li className="flex items-center gap-2"><ArrowLeft className="w-4 h-4 text-[#c2a672]" /> צוואות ועיזבונות</li>
                  </ul>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="py-24 bg-[#0a0a0c] border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="w-full h-full bg-[url('/__mockup/images/law-firm-texture.jpg')] bg-cover bg-fixed bg-center"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <FileText className="w-12 h-12 text-[#c2a672] mx-auto mb-6 stroke-[1]" />
              <h2 className="font-serif-he text-3xl md:text-5xl text-white mb-6">מודל ההתקשרות</h2>
              <p className="text-[#a19f99] font-light text-lg mb-10">
                כמשרד בוטיק המתמחה בלקוחות פרימיום, אנו מציעים מודלי התקשרות המותאמים אישית לאופי התיק וליעדי הלקוח. אנו דוגלים בשקיפות מוחלטת והתאמה אסטרטגית של מבנה שכר הטרחה.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="bg-[#c2a672] text-[#050505] px-8 py-4 font-semibold tracking-wide hover:bg-[#e8d5a5] transition-colors">
                  קביעת פגישת אבחון
                </button>
              </div>
            </div>
          </Reveal>
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
