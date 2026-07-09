import React, { useState, useEffect } from 'react';
const BASE = import.meta.env.BASE_URL;

import { 
  ArrowLeft, 
  Workflow,
  Menu,
  X,
  Zap,
  Globe,
  Settings,
  Cpu,
  BarChart3,
  CheckCircle2,
  Rocket
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

export default function Services() {
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
    { name: 'בית', href: `${BASE}preview/tech-saas/SaaS` },
    { name: 'אודות', href: `${BASE}preview/tech-saas/About` },
    { name: 'שירותים', href: `${BASE}preview/tech-saas/Services` },
    { name: 'צור קשר', href: `${BASE}preview/tech-saas/Contact` },
  ];

  return (
    <div dir="rtl" className="font-heebo min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-blue-200 selection:text-blue-900">
      <style>{customStyles}</style>
      
      {/* Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-12">
              <a href={`${BASE}preview/tech-saas/SaaS`} className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform duration-300 shadow-md">
                  <Workflow size={20} />
                </div>
                <span className="text-2xl font-bold tracking-tight text-slate-900">
                  פלואו<span className="text-blue-600">.</span>
                </span>
              </a>
              <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className={`font-medium transition-colors ${link.name === 'שירותים' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}>
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
              <a key={link.name} href={link.href} className={`font-medium pb-4 border-b border-slate-100 ${link.name === 'שירותים' ? 'text-blue-600' : 'text-slate-900'}`} onClick={() => setMobileMenuOpen(false)}>
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
        {/* Services Hero */}
        <section className="relative py-12 md:py-20 overflow-hidden">
          <div className="hero-glow"></div>
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll">
                <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold mb-6">
                  הפתרונות שלנו
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900 mb-6">
                  שירותים שמניעים את <br/>
                  <span className="text-gradient">הצמיחה שלכם</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  החל מכלים לשירות עצמי ועד ליווי צמוד של מומחי אוטומציה. כל מה שהעסק שלכם צריך כדי לעבוד חכם יותר ולהפחית שגיאות אנוש.
                </p>
              </div>
              <div className="relative animate-on-scroll">
                <div className="absolute inset-0 bg-blue-100 rounded-3xl transform -rotate-3 scale-105 opacity-50 blur-lg"></div>
                <img 
                  src="/__mockup/images/services-automation.jpg" 
                  alt="Services Overview" 
                  className="relative w-full h-auto rounded-2xl shadow-2xl border border-slate-200"
                  onError={(e) => { e.currentTarget.src = "https://placehold.co/800x600/f8fafc/0f172a?text=Automation"; }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Services Grid */}
        <section className="py-24 bg-white border-y border-slate-200">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Settings className="text-blue-500" size={32} />,
                  bg: "bg-blue-50",
                  title: "מנוע האוטומציה המרכזי",
                  desc: "בניית תהליכים ויזואלית (Drag & Drop) מבוססת טריגרים, תנאים ולולאות. תמיכה במשתנים דינמיים ובדיקות בזמן אמת."
                },
                {
                  icon: <Globe className="text-cyan-500" size={32} />,
                  bg: "bg-cyan-50",
                  title: "Hub אינטגרציות מותאם לישראל",
                  desc: "חיבור מיידי למערכות המקומיות שאתם כבר עובדים איתן כמו חשבונית ירוקה, פריוריטי, מס״ב ועוד, לצד הכלים הגלובליים."
                },
                {
                  icon: <Rocket className="text-purple-500" size={32} />,
                  bg: "bg-purple-50",
                  title: "ליווי והטמעה ארגונית",
                  desc: "צוות המומחים שלנו ימפה את תהליכי העבודה בארגון שלכם ויבנה עבורכם את האוטומציות המורכבות ביותר."
                },
                {
                  icon: <BarChart3 className="text-emerald-500" size={32} />,
                  bg: "bg-emerald-50",
                  title: "אנליטיקה ותובנות",
                  desc: "מעקב מדויק אחרי זמן שנחסך, שגיאות שנמנעו ואופטימיזציה של תהליכים באמצעות בינה מלאכותית."
                }
              ].map((service, idx) => (
                <div key={idx} className="flex gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 animate-on-scroll">
                  <div className={`shrink-0 w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">חבילות שירות ומחירים</h2>
              <p className="text-lg text-slate-600">
                התחילו בחינם, ושדרגו כשהצרכים של העסק שלכם גדלים. מחיר שקוף ללא הפתעות.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Basic */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm animate-on-scroll">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">בסיסי</h3>
                <p className="text-slate-500 mb-6">מעולה לצוותים קטנים שרק מתחילים.</p>
                <div className="mb-6">
                  <span className="text-4xl font-black text-slate-900">חינם</span>
                  <span className="text-slate-500"> / לתמיד</span>
                </div>
                <a href="#" className="block w-full py-3 px-4 bg-white border-2 border-slate-200 hover:border-slate-300 text-center rounded-xl font-bold text-slate-700 transition-colors mb-8">
                  התחל עכשיו
                </a>
                <ul className="space-y-4">
                  {['עד 5 תהליכים פעילים', '1,000 פעולות בחודש', 'אינטגרציות בסיסיות', 'תמיכה במייל'].map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-slate-600">
                      <CheckCircle2 size={18} className="text-slate-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pro */}
              <div className="bg-white rounded-3xl p-8 border-2 border-blue-500 shadow-xl relative transform md:-translate-y-4 animate-on-scroll delay-100">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  הכי פופולרי
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">מקצועי</h3>
                <p className="text-slate-500 mb-6">לעסקים שרוצים לאוטומט את כל העבודה.</p>
                <div className="mb-6 flex items-baseline">
                  <span className="text-4xl font-black text-slate-900">₪149</span>
                  <span className="text-slate-500 ml-1"> / לחודש</span>
                </div>
                <a href="#" className="block w-full py-3 px-4 bg-gradient-primary hover:opacity-90 text-white text-center rounded-xl font-bold transition-opacity mb-8 shadow-md">
                  נסה 14 ימים בחינם
                </a>
                <ul className="space-y-4">
                  {['ללא הגבלת תהליכים', '50,000 פעולות בחודש', 'כל האינטגרציות פתוחות', 'לוגיקה מתקדמת ומשתנים', 'תמיכת פרימיום בצ׳אט'].map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-slate-800 font-medium">
                      <CheckCircle2 size={18} className="text-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enterprise */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm animate-on-scroll delay-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">ארגוני</h3>
                <p className="text-slate-500 mb-6">פתרון מותאם אישית לחברות גדולות.</p>
                <div className="mb-6">
                  <span className="text-4xl font-black text-slate-900">מותאם</span>
                </div>
                <a href={`${BASE}preview/tech-saas/Contact`} className="block w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white text-center rounded-xl font-bold transition-colors mb-8">
                  דבר עם המכירות
                </a>
                <ul className="space-y-4">
                  {['כמות פעולות מותאמת', 'SLA מובטח של 99.99%', 'SSO וניהול הרשאות מתקדם', 'מנהל תיק לקוח אישי', 'הדרכות צוות ייעודיות'].map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-slate-600">
                      <CheckCircle2 size={18} className="text-slate-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
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
              <a href={`${BASE}preview/tech-saas/SaaS`} className="flex items-center gap-2 mb-6">
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
                <li><a href={`${BASE}preview/tech-saas/SaaS#features`} className="text-slate-600 hover:text-blue-600 transition-colors">תכונות</a></li>
                <li><a href={`${BASE}preview/tech-saas/SaaS#integrations`} className="text-slate-600 hover:text-blue-600 transition-colors">אינטגרציות</a></li>
                <li><a href="#pricing" className="text-slate-600 hover:text-blue-600 transition-colors">תמחור</a></li>
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
                <li><a href={`${BASE}preview/tech-saas/About`} className="text-slate-600 hover:text-blue-600 transition-colors">אודות</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">דרושים</a></li>
                <li><a href={`${BASE}preview/tech-saas/Contact`} className="text-slate-600 hover:text-blue-600 transition-colors">יצירת קשר</a></li>
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
