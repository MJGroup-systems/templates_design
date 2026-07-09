import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Workflow,
  Menu,
  X,
  Target,
  Heart,
  Lightbulb,
  Shield
} from 'lucide-react';

const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&display=swap');

  .font-heebo { font-family: 'Heebo', sans-serif; }
  .text-gradient {
    background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .bg-gradient-primary { background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%); }
  .hero-glow {
    position: absolute; width: 800px; height: 800px;
    background: radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(6,182,212,0) 70%);
    top: 40%; left: 30%; transform: translate(-50%, -50%); z-index: 0; pointer-events: none;
  }
  .animate-on-scroll {
    opacity: 0; transform: translateY(30px);
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .animate-on-scroll.visible { opacity: 1; transform: translateY(0); }
`;

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight * 0.85) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'בית', href: '#' },
    { name: 'אודות', href: '#' },
    { name: 'שירותים', href: '#' },
    { name: 'צור קשר', href: '#' },
  ];

  return (
    <div dir="rtl" className="font-heebo min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-blue-200 selection:text-blue-900">
      <style>{customStyles}</style>
      
      {/* Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-12">
              <a href="#" className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform duration-300 shadow-md">
                  <Workflow size={20} />
                </div>
                <span className="text-2xl font-bold tracking-tight text-slate-900">
                  פלואו<span className="text-blue-600">.</span>
                </span>
              </a>
              <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="text-slate-600 hover:text-slate-900 font-medium transition-colors px-4">התחברות</a>
              <a href="#" className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2 group">
                התחל חינם
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              </a>
            </div>
            <button className="md:hidden text-slate-900 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden">
          <nav className="flex flex-col gap-6 text-lg">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-900 font-medium pb-4 border-b border-slate-100" onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-4 mt-4">
              <a href="#" className="text-center py-3 text-slate-600 font-medium bg-slate-50 rounded-xl border border-slate-200">התחברות</a>
              <a href="#" className="text-center py-3 bg-gradient-primary text-white font-medium rounded-xl shadow-md">התחל חינם עכשיו</a>
            </div>
          </nav>
        </div>
      )}

      <main className="pt-32 pb-20 md:pt-40">
        {/* About Hero */}
        <section className="relative py-12 md:py-20 overflow-hidden">
          <div className="hero-glow"></div>
          <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
            <div className="max-w-3xl mx-auto animate-on-scroll">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900 mb-6">
                הסיפור מאחורי <span className="text-gradient">פלואו.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                אנחנו מאמינים שטכנולוגיה צריכה לשרת אנשים, לא להפך. פלואו נולדה מתוך תסכול על זמן מבוזבז, ומטרה אחת פשוטה: לתת לעסקים את הזמן שלהם בחזרה.
              </p>
            </div>
            
            <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 animate-on-scroll h-[400px] md:h-[500px]">
              <img 
                src="/__mockup/images/team.jpg" 
                alt="Flow Team" 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x600/f8fafc/0f172a?text=Our+Team"; }}
              />
            </div>
          </div>
        </section>

        {/* Mission / Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">הערכים שמובילים אותנו</h2>
              <p className="text-lg text-slate-600">
                בנינו את הפלטפורמה שלנו על בסיס עקרונות ברורים. כל שורת קוד וכל פיצ׳ר חדש נבדקים מול הערכים האלו.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Target className="text-blue-500" size={32} />, title: 'פוקוס על המשתמש', desc: 'אנחנו מעצבים חוויות ברורות, פשוטות וישירות ששמות את המשתמש במרכז.' },
                { icon: <Heart className="text-pink-500" size={32} />, title: 'אכפתיות ושותפות', desc: 'ההצלחה של הלקוחות שלנו היא ההצלחה שלנו. אנחנו כאן ללוות ולהקשיב.' },
                { icon: <Lightbulb className="text-amber-500" size={32} />, title: 'חדשנות מתמדת', desc: 'העולם משתנה מהר, ואנחנו דואגים שהכלים שלנו תמיד יהיו צעד אחד קדימה.' },
                { icon: <Shield className="text-emerald-500" size={32} />, title: 'אמינות ללא פשרות', desc: 'הנתונים שלכם מאובטחים. המערכת יציבה. אתם יכולים לישון בשקט.' }
              ].map((val, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all animate-on-scroll">
                  <div className="mb-6">{val.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team / Founders */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">מי אנחנו?</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  פלואו הוקמה ב-2021 על ידי צוות של מהנדסים, מעצבים ומומחי מוצר שחוו על בשרם את הקושי בחיבור בין מערכות שונות בארגונים.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  היום, אנחנו צוות של מעל ל-40 עובדים בתל אביב, שמקדישים את הזמן שלהם לבניית העתיד של האוטומציה העסקית. אנחנו מחפשים תמיד אנשים מוכשרים שיצטרפו למסע שלנו.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group text-lg border-b-2 border-transparent hover:border-blue-600 pb-1">
                  הצטרפו לצוות שלנו
                  <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
                </a>
              </div>
              <div className="relative animate-on-scroll">
                <div className="absolute inset-0 bg-blue-100 rounded-3xl transform rotate-3 scale-105 opacity-50"></div>
                <img 
                  src="/__mockup/images/office.jpg" 
                  alt="Flow Office" 
                  className="relative w-full h-auto rounded-3xl shadow-xl border border-slate-200"
                  onError={(e) => { e.currentTarget.src = "https://placehold.co/800x600/f8fafc/0f172a?text=Office"; }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <a href="#" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-white">
                  <Workflow size={20} />
                </div>
                <span className="text-2xl font-bold tracking-tight text-slate-900">
                  פלואו<span className="text-blue-600">.</span>
                </span>
              </a>
              <p className="text-slate-500 mb-6 max-w-xs leading-relaxed">
                פלטפורמת האוטומציה המובילה בישראל. עוזרים לעסקים לחבר מערכות ולעבוד חכם יותר.
              </p>
              <div className="flex gap-4">
                {[1,2,3,4].map(i => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-200 hover:bg-blue-100 hover:text-blue-600 flex items-center justify-center text-slate-500 transition-colors">
                    <div className="w-4 h-4 bg-current rounded-sm"></div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-6 text-lg">מוצר</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">תכונות</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">אינטגרציות</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">תמחור</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">עדכוני מערכת</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-6 text-lg">משאבים</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">מרכז תמיכה</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">מדריכים</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">בלוג</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">API ופיתוח</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-6 text-lg">חברה</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">אודות</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">דרושים</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">יצירת קשר</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">תנאי שימוש ופרטיות</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} פלואו מערכות מידע בע״מ. כל הזכויות שמורות.</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                מערכות פעילות
              </div>
              <div dir="ltr">Hebrew / English</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
