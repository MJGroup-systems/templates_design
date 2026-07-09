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
  ArrowUpLeft
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

export default function CorporateLandingPage() {
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

  const services = [
    { icon: <Building2 className="w-6 h-6" />, title: 'ביקורת דוחות כספיים', desc: 'שירותי ביקורת קפדניים לחברות פרטיות וציבוריות תוך עמידה בתקנים המחמירים ביותר.' },
    { icon: <Globe2 className="w-6 h-6" />, title: 'מיסוי תאגידי ובינלאומי', desc: 'תכנון מס יצירתי ואפקטיבי, ליווי עסקאות בינלאומיות וייצוג מול רשויות המס.' },
    { icon: <Briefcase className="w-6 h-6" />, title: 'שירותי ניהול כספים (CFO)', desc: 'ניהול פיננסי חיצוני בסטנדרט תאגידי גבוה, בניית תקציב וניתוח תזרימי מזומנים.' },
    { icon: <Scale className="w-6 h-6" />, title: 'מיזוגים ורכישות (M&A)', desc: 'ליווי מלא בעסקאות קנייה ומכירה, בדיקות נאותות (Due Diligence) ובניית מתווי עסקאות.' },
    { icon: <LineChart className="w-6 h-6" />, title: 'הערכות שווי', desc: 'ביצוע הערכות שווי לחברות, פעילויות ונכסים בלתי מוחשיים על ידי כלכלנים מומחים.' },
    { icon: <ShieldCheck className="w-6 h-6" />, title: 'ניהול סיכונים וביקורת פנים', desc: 'איתור חשיפות מוקדם, בניית נהלי עבודה ובקרות פנימיות להבטחת הממשל התאגידי.' },
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
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/__mockup/images/corp-hero.jpg" 
            alt="Corporate Office" 
            className="w-full h-full object-cover object-center transform scale-105 motion-safe:animate-[pulse_30s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/5 text-white">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-[1px] w-12 bg-[#C5A47E]"></span>
                <span className="text-[#C5A47E] font-medium tracking-wider text-sm uppercase">מצוינות פיננסית. ניסיון מוכח.</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
                ניהול פיננסי <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-white to-slate-400">מדויק</span> לעסקים <br/>
                בצמיחה.
              </h2>
              <p className="text-lg md:text-xl text-slate-300 font-light max-w-xl mb-10 leading-relaxed">
                אנו מספקים מעטפת שירותים פיננסיים, חשבונאיים וייעוץ אסטרטגי לחברות מובילות במשק, מתוך מחויבות למצוינות, שקיפות ודיוק ללא פשרות.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex justify-center items-center gap-2 bg-[#C5A47E] hover:bg-[#B38D46] text-white px-8 py-4 text-lg font-medium transition-colors">
                  קבע פגישת היכרות
                  <ChevronLeft className="w-5 h-5" />
                </a>
                <a href="#services" className="inline-flex justify-center items-center gap-2 bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-4 text-lg font-medium transition-colors">
                  השירותים שלנו
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-slate-900 text-white py-16 relative z-20 -mt-2">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-white/10">
            <FadeIn delay={100} className="flex flex-col items-center text-center pt-6 md:pt-0">
              <span className="text-5xl font-bold text-[#C5A47E] mb-2">40+</span>
              <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">אנשי צוות ומומחים</span>
            </FadeIn>
            <FadeIn delay={200} className="flex flex-col items-center text-center pt-6 md:pt-0">
              <span className="text-5xl font-bold text-[#C5A47E] mb-2">₪3.2B</span>
              <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">הון מנוהל בבקרה</span>
            </FadeIn>
            <FadeIn delay={300} className="flex flex-col items-center text-center pt-6 md:pt-0">
              <span className="text-5xl font-bold text-[#C5A47E] mb-2">15</span>
              <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">שנות מצוינות</span>
            </FadeIn>
            <FadeIn delay={400} className="flex flex-col items-center text-center pt-6 md:pt-0">
              <span className="text-5xl font-bold text-[#C5A47E] mb-2">500+</span>
              <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">לקוחות עסקיים</span>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
              <h3 className="gold-gradient-text font-bold text-sm tracking-widest uppercase mb-4">תחומי התמחות</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">פתרונות פיננסיים מתקדמים</h2>
              <p className="text-slate-600 text-lg">
                אנו מספקים שירות מקיף המותאם לאתגרים המורכבים ביותר של העולם העסקי, ומאפשרים למנהלים להתמקד בצמיחת החברה.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="group bg-white p-10 border border-slate-100 hover:border-[#C5A47E]/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-1 h-0 bg-[#C5A47E] transition-all duration-300 group-hover:h-full"></div>
                  
                  <div className="w-14 h-14 bg-slate-50 flex items-center justify-center rounded-lg text-slate-800 mb-6 group-hover:bg-[#C5A47E] group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed flex-grow">{service.desc}</p>
                  
                  <div className="mt-8 pt-6 border-t border-slate-50 flex items-center text-sm font-bold text-slate-900 group-hover:text-[#C5A47E] transition-colors cursor-pointer w-max">
                    למידע נוסף
                    <ChevronLeft className="w-4 h-4 mr-2" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <FadeIn direction="right">
                <div className="relative">
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#F8F9FA] z-0"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-[#C5A47E] z-0"></div>
                  
                  <img 
                    src="/__mockup/images/corp-team.jpg" 
                    alt="Our Team" 
                    className="relative z-10 w-full h-[600px] object-cover shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-10 right-10 z-20 bg-slate-900 text-white p-6 shadow-xl max-w-xs border-r-4 border-[#C5A47E]">
                    <p className="font-bold text-xl mb-1">השותפים להצלחה שלך</p>
                    <p className="text-slate-400 text-sm">ליווי אישי מול האתגרים העסקיים</p>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <div className="w-full lg:w-1/2">
              <FadeIn direction="left">
                <h3 className="gold-gradient-text font-bold text-sm tracking-widest uppercase mb-4">הגישה שלנו</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                  סטנדרט חדש של <br />ראיית חשבון מודרנית
                </h2>
                
                <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10">
                  <p>
                    בעולם בו המציאות העסקית משתנה במהירות, תפקידו של רואה החשבון אינו מסתכם עוד בדיווח לאחור בלבד. אנו מאמינים כי רואה חשבון הוא שותף אסטרטגי לנווט את החברה קדימה.
                  </p>
                  <p>
                    משרד אבן ושות׳ הוקם מתוך חזון לספק מעטפת מקצועית שלמה, המשלבת ידע אקדמי מעמיק, ניסיון מעשי רחב והיכרות אינטימית עם הזירה העסקית המקומית והגלובלית. אנו פועלים כחלק אינטגרלי מהצוות של לקוחותינו.
                  </p>
                </div>

                <ul className="space-y-4 mb-10">
                  {['ראייה עסקית רחבה וצופה פני עתיד', 'זמינות גבוהה ויחס אישי לכל לקוח', 'שילוב כלים טכנולוגיים מתקדמים בבקרה'].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-slate-800 font-medium">
                      <div className="w-6 h-6 rounded-full bg-[#C5A47E]/10 flex items-center justify-center text-[#C5A47E]">
                        <div className="w-2 h-2 rounded-full bg-[#C5A47E]"></div>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 font-medium transition-colors inline-flex items-center gap-2">
                  הכר את צוות המשרד
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Detail / Methodology Section */}
      <section className="py-24 md:py-32 bg-slate-900 text-white overflow-hidden relative">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <FadeIn>
                <h3 className="text-[#C5A47E] font-bold text-sm tracking-widest uppercase mb-4">המתודולוגיה</h3>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
                  דיוק בכל פרט, <br />אסטרטגיה בכל מהלך.
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-12">
                  מתודולוגיית העבודה שלנו מבוססת על ירידה לפרטים הקטנים ביותר מבלי לאבד את התמונה הגדולה. כל דוח, כל הערכת שווי וכל תכנון מס עוברים תהליכי בקרת איכות מחמירים על ידי דרג השותפים.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border-t border-slate-700 pt-6">
                    <h4 className="text-xl font-bold text-white mb-3">בקרת איכות כפולה</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">נהלי הבקרה שלנו מבטיחים רמת דיוק מקסימלית ותאימות מלאה לרגולציה המשתנה.</p>
                  </div>
                  <div className="border-t border-slate-700 pt-6">
                    <h4 className="text-xl font-bold text-white mb-3">תכנון פרואקטיבי</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">אנו לא מחכים לסוף שנת המס, אלא פועלים באופן רציף לייעול החבות המסית והמבנה הפיננסי.</p>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <div className="w-full lg:w-1/2">
              <FadeIn delay={200}>
                <div className="relative p-4 bg-slate-800">
                  <img 
                    src="/__mockup/images/corp-detail.jpg" 
                    alt="Financial Details" 
                    className="w-full h-auto object-cover border border-slate-700"
                  />
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#C5A47E] flex items-center justify-center text-white">
                    <ArrowUpLeft className="w-10 h-10" />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-[#C5A47E] relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white opacity-5 translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-black opacity-10 -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">העסק שלך מוכן לשלב הבא?</h2>
            <p className="text-slate-800 text-xl mb-10 max-w-2xl mx-auto">
              השאר פרטים ונחזור אליך בהקדם לתיאום פגישת היכרות ובחינת הצרכים הפיננסיים של החברה.
            </p>
            
            <form className="bg-white p-8 shadow-2xl mx-auto max-w-3xl text-right">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">שם מלא / שם חברה</label>
                  <input type="text" className="w-full border-b border-slate-300 py-3 bg-transparent focus:outline-none focus:border-[#C5A47E] transition-colors" placeholder="הכנס שם מלא" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">טלפון</label>
                  <input type="tel" className="w-full border-b border-slate-300 py-3 bg-transparent focus:outline-none focus:border-[#C5A47E] transition-colors" placeholder="הכנס מספר טלפון" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">דוא״ל</label>
                  <input type="email" className="w-full border-b border-slate-300 py-3 bg-transparent focus:outline-none focus:border-[#C5A47E] transition-colors" placeholder="email@company.com" />
                </div>
              </div>
              <button type="button" className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 font-bold text-lg transition-colors mt-4">
                שלח פנייה
              </button>
            </form>
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
                <li><a href="#" className="hover:text-white transition-colors">אודות המשרד</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">תחומי התמחות</a></li>
                <li><a href="#" className="hover:text-white transition-colors">צוות המומחים</a></li>
                <li><a href="#" className="hover:text-white transition-colors">מאמרים ועדכונים</a></li>
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
