import React, { useEffect, useRef, useState } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  ArrowLeft
} from 'lucide-react';

// --- Hooks ---
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
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, isIntersecting] as const;
}

// --- Components ---
const FadeIn = ({ children, delay = 0, className = "", direction = "up" }: { children: React.ReactNode, delay?: number, className?: string, direction?: "up" | "left" | "right" }) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  let translateClass = "translate-y-12";
  if (direction === "left") translateClass = "-translate-x-12";
  if (direction === "right") translateClass = "translate-x-12";

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${translateClass}`} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function ContactPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'בית', href: '#' },
    { name: 'אודות', href: '#about' },
    { name: 'שירותים', href: '#services' },
    { name: 'צור קשר', href: '#contact' },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-[#F8F9FA] text-slate-900 font-sans selection:bg-[#C5A47E] selection:text-white" style={{ fontFamily: "'Assistant', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&display=swap');
        
        html { scroll-behavior: smooth; }
        
        .gold-gradient-text {
          background: linear-gradient(135deg, #C5A47E 0%, #A3825C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 flex items-center justify-center border-2 transition-colors duration-300 ${scrolled ? 'border-slate-900' : 'border-white'}`}>
              <span className={`font-bold text-xl ${scrolled ? 'text-slate-900' : 'text-white'}`}>א</span>
            </div>
            <div>
              <h1 className={`font-bold text-lg leading-none tracking-tight transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                אבן ושות׳
              </h1>
              <p className={`text-[10px] tracking-widest font-medium transition-colors duration-300 ${scrolled ? 'text-slate-500' : 'text-white/80'}`}>
                רואי חשבון
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors hover:text-[#C5A47E] ${scrolled ? 'text-slate-700' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className={`text-sm font-semibold px-6 py-2.5 transition-all duration-300 border ${
                scrolled 
                  ? 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-slate-900'
              }`}
            >
              קבע פגישה
            </a>
          </nav>

          <button 
            className={`md:hidden transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl md:hidden flex flex-col py-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="px-6 py-4 text-slate-700 hover:bg-slate-50 hover:text-[#C5A47E] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center pt-24 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="/__mockup/images/corp-office.jpg" 
            alt="Office Building" 
            className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center text-white">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
              צרו קשר
            </h2>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
              נשמח לעמוד לשירותכם לכל שאלה, התייעצות או תיאום פגישת היכרות.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-[#F8F9FA] relative -mt-10 z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Contact Info */}
            <div className="w-full lg:w-1/3">
              <FadeIn direction="right">
                <div className="bg-white p-10 shadow-xl border border-slate-100 h-full">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">פרטי התקשרות</h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#F8F9FA] flex items-center justify-center rounded-full text-[#C5A47E] shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">הכתובת שלנו</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          מגדלי אקליפטוס, קומה 34<br />
                          שדרות רוטשילד, תל אביב
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#F8F9FA] flex items-center justify-center rounded-full text-[#C5A47E] shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">טלפון</h4>
                        <p className="text-slate-600 text-sm" dir="ltr">03 - 555 - 0199</p>
                        <p className="text-slate-600 text-sm" dir="ltr">054 - 555 - 0198</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#F8F9FA] flex items-center justify-center rounded-full text-[#C5A47E] shrink-0">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">דואר אלקטרוני</h4>
                        <p className="text-slate-600 text-sm" dir="ltr">contact@even-cpas.co.il</p>
                        <p className="text-slate-600 text-sm" dir="ltr">info@even-cpas.co.il</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#F8F9FA] flex items-center justify-center rounded-full text-[#C5A47E] shrink-0">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">שעות פעילות</h4>
                        <p className="text-slate-600 text-sm">א׳ - ה׳: 08:30 - 18:00</p>
                        <p className="text-slate-600 text-sm">שישי וערבי חג: סגור</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-2/3">
              <FadeIn direction="left">
                <div className="bg-white p-10 md:p-14 shadow-xl border-t-4 border-[#C5A47E]">
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">שלחו לנו הודעה</h3>
                  <p className="text-slate-500 mb-10">מלאו את הפרטים ונציג המשרד יחזור אליכם בהקדם האפשרי.</p>
                  
                  <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">שם מלא</label>
                        <input type="text" className="w-full border-b-2 border-slate-200 py-3 bg-transparent focus:outline-none focus:border-[#C5A47E] transition-colors" placeholder="הכנס/י שם מלא" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">שם חברה (אופציונלי)</label>
                        <input type="text" className="w-full border-b-2 border-slate-200 py-3 bg-transparent focus:outline-none focus:border-[#C5A47E] transition-colors" placeholder="הכנס/י שם חברה" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">טלפון</label>
                        <input type="tel" className="w-full border-b-2 border-slate-200 py-3 bg-transparent focus:outline-none focus:border-[#C5A47E] transition-colors" placeholder="הכנס/י מספר טלפון" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">דואר אלקטרוני</label>
                        <input type="email" className="w-full border-b-2 border-slate-200 py-3 bg-transparent focus:outline-none focus:border-[#C5A47E] transition-colors" placeholder="email@example.com" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">נושא הפנייה</label>
                      <select className="w-full border-b-2 border-slate-200 py-3 bg-transparent focus:outline-none focus:border-[#C5A47E] transition-colors text-slate-600">
                        <option value="">בחר/י נושא</option>
                        <option value="audit">ביקורת דוחות כספיים</option>
                        <option value="tax">ייעוץ מס</option>
                        <option value="cfo">שירותי ניהול כספים (CFO)</option>
                        <option value="valuation">הערכות שווי וייעוץ כלכלי</option>
                        <option value="other">אחר</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">תוכן ההודעה</label>
                      <textarea rows={4} className="w-full border-b-2 border-slate-200 py-3 bg-transparent focus:outline-none focus:border-[#C5A47E] transition-colors resize-none" placeholder="כתבו כאן את שאלתכם..."></textarea>
                    </div>

                    <button type="button" className="inline-flex justify-center items-center gap-2 bg-slate-900 hover:bg-[#C5A47E] text-white px-10 py-4 text-lg font-bold transition-colors w-full md:w-auto">
                      שלח הודעה
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 flex items-center justify-center border-2 border-slate-700">
                  <span className="font-bold text-lg text-white">א</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg leading-none">אבן ושות׳</h4>
                  <p className="text-[10px] tracking-widest uppercase">רואי חשבון</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-6 max-w-xs">
                משרד רואי חשבון מהמובילים בישראל, המספק פתרונות פיננסיים מתקדמים, ביקורת, מיסוי וייעוץ אסטרטגי.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">ניווט מהיר</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">בית</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">אודות המשרד</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">שירותים ותחומי התמחות</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">צור קשר</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">שירותים</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">ביקורת דוחות כספיים</a></li>
                <li><a href="#" className="hover:text-white transition-colors">מיסוי תאגידי ובינלאומי</a></li>
                <li><a href="#" className="hover:text-white transition-colors">מיזוגים ורכישות</a></li>
                <li><a href="#" className="hover:text-white transition-colors">הערכות שווי</a></li>
                <li><a href="#" className="hover:text-white transition-colors">שירותי CFO</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">יצירת קשר</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C5A47E] shrink-0" />
                  <span>מגדלי אקליפטוס, קומה 34<br />רח׳ שדרות רוטשילד, תל אביב</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#C5A47E] shrink-0" />
                  <span dir="ltr">03 - 555 - 0199</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#C5A47E] shrink-0" />
                  <span dir="ltr">contact@even-cpas.co.il</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© {new Date().getFullYear()} אבן ושות׳ רואי חשבון. כל הזכויות שמורות.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">תנאי שימוש</a>
              <a href="#" className="hover:text-white transition-colors">הצהרת נגישות</a>
              <a href="#" className="hover:text-white transition-colors">מדיניות פרטיות</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
