import React, { useEffect, useRef, useState } from 'react';
import { 
  Building2, 
  Briefcase, 
  Scale, 
  LineChart, 
  Globe2, 
  ShieldCheck, 
  ChevronLeft, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle2
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

export default function ServicesPage() {
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

  const servicesDetailed = [
    { 
      icon: <Building2 className="w-8 h-8" />, 
      title: 'ביקורת דוחות כספיים', 
      desc: 'שירותי ביקורת קפדניים לחברות פרטיות וציבוריות תוך עמידה בתקנים המחמירים ביותר של תקינה ישראלית ובינלאומית (IFRS).',
      features: ['הכנת דוחות כספיים שנתיים ורבעוניים', 'ביקורת חברות ציבוריות ופרטיות', 'חוות דעת חשבונאיות מורכבות', 'ליווי הנפקות (IPO)']
    },
    { 
      icon: <Globe2 className="w-8 h-8" />, 
      title: 'מיסוי תאגידי ובינלאומי', 
      desc: 'תכנון מס יצירתי ואפקטיבי, ליווי עסקאות בינלאומיות וייצוג מול רשויות המס בארץ ובעולם.',
      features: ['תכנון מס לחברות ויחידים', 'מיסוי עסקאות בינלאומיות', 'ייצוג מול רשויות המס ופרה-רולינג', 'מחירי העברה']
    },
    { 
      icon: <Briefcase className="w-8 h-8" />, 
      title: 'שירותי ניהול כספים (CFO)', 
      desc: 'ניהול פיננסי חיצוני בסטנדרט תאגידי גבוה, בניית תקציב וניתוח תזרימי מזומנים לחברות בצמיחה.',
      features: ['בנייה וניהול תקציב ובקרה תקציבית', 'ניהול תזרים מזומנים', 'הכנת מודלים פיננסיים', 'הצגת נתונים לדירקטוריון ומשקיעים']
    },
    { 
      icon: <Scale className="w-8 h-8" />, 
      title: 'מיזוגים ורכישות (M&A)', 
      desc: 'ליווי מלא בעסקאות קנייה ומכירה, בדיקות נאותות (Due Diligence) ובניית מתווי עסקאות מיטביים.',
      features: ['בדיקות נאותות פיננסיות וחשבונאיות', 'ליווי בתהליכי משא ומתן', 'ייעוץ בבניית מתווה העסקה', 'PPA - הקצאת עלות רכישה']
    },
    { 
      icon: <LineChart className="w-8 h-8" />, 
      title: 'הערכות שווי וייעוץ כלכלי', 
      desc: 'ביצוע הערכות שווי לחברות, פעילויות ונכסים בלתי מוחשיים על ידי כלכלנים מומחים ורואי חשבון.',
      features: ['הערכות שווי חברות ופעילויות', 'בחינת כדאיות פרויקטים', 'הערכת שווי נכסים בלתי מוחשיים', 'חוות דעת כלכליות לבית משפט']
    },
    { 
      icon: <ShieldCheck className="w-8 h-8" />, 
      title: 'ניהול סיכונים וביקורת פנים', 
      desc: 'איתור חשיפות מוקדם, בניית נהלי עבודה ובקרות פנימיות להבטחת הממשל התאגידי התקין בחברה.',
      features: ['ביקורת פנים לחברות ציבוריות ופרטיות', 'סקר סיכונים (ERM)', 'בדיקת מעילות והונאות', 'יישום תקנות SOX / ISOX']
    },
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
      <section className="relative h-[50vh] min-h-[450px] flex items-center justify-center pt-24 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="/__mockup/images/corp-services.jpg" 
            alt="Corporate Services" 
            className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay transform scale-105 motion-safe:animate-[pulse_30s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center text-white">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
              השירותים שלנו
            </h2>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
              מעטפת פיננסית, מיסויית וייעוצית מלאה תחת קורת גג אחת, המותאמת אישית לצרכי החברה שלך.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-24 bg-[#F8F9FA] relative -mt-10 z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {servicesDetailed.map((service, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="bg-white p-10 md:p-12 border border-slate-100 hover:border-[#C5A47E]/40 hover:shadow-xl transition-all duration-300 h-full flex flex-col group rounded-sm">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-slate-50 flex items-center justify-center rounded-lg text-slate-800 shrink-0 group-hover:bg-[#C5A47E] group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-8">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A47E] shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
              <h3 className="gold-gradient-text font-bold text-sm tracking-widest uppercase mb-4">איך אנחנו עובדים</h3>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">תהליך עבודה מובנה ומוקפד</h2>
              <p className="text-slate-600 text-lg">
                הגישה שלנו מבוססת על הבנה עמוקה של העסק שלך לפני מתן הפתרונות. תהליך העבודה שלנו מבטיח שכל החלטה מגובה בנתונים מדויקים.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-slate-200 z-0"></div>
            
            {[
              { step: '01', title: 'אבחון ומיפוי', desc: 'למידה מעמיקה של הפעילות העסקית, המבנה הארגוני והאתגרים הנוכחיים של החברה.' },
              { step: '02', title: 'בניית אסטרטגיה', desc: 'גיבוש תוכנית פעולה מותאמת אישית, תכנון מס אופטימלי והגדרת יעדים פיננסיים ברורים.' },
              { step: '03', title: 'יישום ובקרה', desc: 'הטמעת תהליכי עבודה, בניית מודלים פיננסיים ויישום נהלי בקרה מחמירים.' },
              { step: '04', title: 'ליווי שוטף', desc: 'תמיכה רציפה, ישיבות סטטוס תקופתיות והתאמת האסטרטגיה למציאות העסקית המשתנה.' },
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 150} className="relative z-10">
                <div className="bg-white px-6">
                  <div className="w-24 h-24 bg-[#F8F9FA] rounded-full flex items-center justify-center border-4 border-white shadow-sm mx-auto mb-6 text-2xl font-bold text-[#C5A47E]">
                    {item.step}
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">זקוקים לייעוץ פיננסי או שירותי ראיית חשבון?</h2>
            <a href="#contact" className="inline-flex justify-center items-center gap-2 bg-[#C5A47E] hover:bg-[#B38D46] text-white px-10 py-4 text-lg font-bold transition-colors">
              דברו איתנו עכשיו
              <ChevronLeft className="w-5 h-5" />
            </a>
          </FadeIn>
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
