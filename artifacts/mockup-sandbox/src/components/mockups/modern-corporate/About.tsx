import React, { useEffect, useRef, useState } from 'react';
import { 
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  ChevronLeft,
  Users,
  Target,
  Award
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

export default function AboutPage() {
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
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/__mockup/images/corp-about.jpg" 
            alt="Corporate Boardroom" 
            className="w-full h-full object-cover object-center transform scale-105 motion-safe:animate-[pulse_30s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center text-white">
          <FadeIn>
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <span className="h-[1px] w-12 bg-[#C5A47E]"></span>
              <span className="text-[#C5A47E] font-medium tracking-wider text-sm uppercase">מי אנחנו</span>
              <span className="h-[1px] w-12 bg-[#C5A47E]"></span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
              השותפים לדרך <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-white to-slate-400">העסקית שלך.</span>
            </h2>
          </FadeIn>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <h3 className="gold-gradient-text font-bold text-sm tracking-widest uppercase mb-4">הסיפור שלנו</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
              משרד בוטיק המבוסס על מצוינות, <br/> אמינות ויחס אישי לכל לקוח.
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-12">
              <p>
                משרד אבן ושות׳ הוקם לפני למעלה מעשור מתוך חזון להעניק שירותי ראיית חשבון ברמה הגבוהה ביותר, עם דגש על הבנה עסקית עמוקה מעבר למספרים. אנו מאמינים כי תפקידו של רואה החשבון בעידן המודרני הוא להיות נווט אסטרטגי, שותף לדרך ויועץ אמין למקבלי ההחלטות בארגון.
              </p>
              <p>
                הצוות שלנו מורכב מרואי חשבון, כלכלנים ומשפטנים מהשורה הראשונה, יוצאי פירמות מובילות (Big 4) ורשויות המס, המביאים עמם ידע מקצועי עשיר וניסיון רב שנים בליווי חברות פרטיות וציבוריות, סטארט-אפים, ועסקים משפחתיים במגוון רחב של תעשיות.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={100}>
              <div className="bg-white p-10 border border-slate-100 hover:border-[#C5A47E]/30 hover:shadow-lg transition-all duration-300 h-full text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-900 flex items-center justify-center rounded-full text-[#C5A47E] mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">דיוק חסר פשרות</h4>
                <p className="text-slate-600 leading-relaxed">
                  אנו מאמינים שהצלחה עסקית מתחילה בנתונים מדויקים. תהליכי הבקרה שלנו מבטיחים אפס תקלות ושקיפות מלאה.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="bg-white p-10 border border-slate-100 hover:border-[#C5A47E]/30 hover:shadow-lg transition-all duration-300 h-full text-center flex flex-col items-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#C5A47E]"></div>
                <div className="w-16 h-16 bg-[#C5A47E] flex items-center justify-center rounded-full text-white mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">שותפות אמיתית</h4>
                <p className="text-slate-600 leading-relaxed">
                  הצלחת הלקוחות שלנו היא ההצלחה שלנו. אנו פועלים כחלק אינטגרלי מהצוות שלכם, זמינים וקשובים לכל אתגר.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="bg-white p-10 border border-slate-100 hover:border-[#C5A47E]/30 hover:shadow-lg transition-all duration-300 h-full text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-900 flex items-center justify-center rounded-full text-[#C5A47E] mb-6">
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">מצוינות מקצועית</h4>
                <p className="text-slate-600 leading-relaxed">
                  אנו מתעדכנים באופן תדיר בשינויי החקיקה והרגולציה, במטרה לספק לכם פתרונות מס ופיננסים יצירתיים וחכמים.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <FadeIn direction="right">
                <div className="relative p-4 bg-slate-800">
                  <img 
                    src="/__mockup/images/corp-partners.jpg" 
                    alt="Our Partners" 
                    className="w-full h-[500px] object-cover border border-slate-700"
                  />
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#C5A47E] flex items-center justify-center text-white">
                    <span className="font-bold text-3xl">א</span>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <div className="w-full lg:w-1/2">
              <FadeIn direction="left">
                <h3 className="text-[#C5A47E] font-bold text-sm tracking-widest uppercase mb-4">הצוות המוביל</h3>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  מומחיות שנבנתה <br />לאורך שנים של עשייה.
                </h2>
                <div className="space-y-6 text-slate-300 text-lg leading-relaxed mb-10">
                  <p>
                    ההנהלה הבכירה של המשרד כוללת שותפים בעלי מומחיות ספציפית במיסוי מורכב, ביקורת תאגידים וייעוץ כלכלי. הסינרגיה בין תחומי ההתמחות מאפשרת לנו להציע פתרונות רב-תחומיים תחת קורת גג אחת (One Stop Shop).
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="border-t border-slate-700 pt-6">
                    <h4 className="text-2xl font-bold text-white mb-1">רו״ח יונתן אבן</h4>
                    <p className="text-[#C5A47E] text-sm mb-3 font-medium uppercase tracking-wide">שותף מייסד, מנהל מחלקת מיסוי</p>
                    <p className="text-slate-400 text-sm leading-relaxed">מומחה במיסוי ישראלי ובינלאומי, ליווי עסקאות ענק ורה-ארגון בחברות ציבוריות.</p>
                  </div>
                  <div className="border-t border-slate-700 pt-6">
                    <h4 className="text-2xl font-bold text-white mb-1">רו״ח מאיה דגן</h4>
                    <p className="text-[#C5A47E] text-sm mb-3 font-medium uppercase tracking-wide">שותפה, מנהלת מחלקת ביקורת</p>
                    <p className="text-slate-400 text-sm leading-relaxed">בעלת ניסיון עשיר בביקורת דוחות כספיים לחברות הייטק, תעשייה ומסחר.</p>
                  </div>
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
