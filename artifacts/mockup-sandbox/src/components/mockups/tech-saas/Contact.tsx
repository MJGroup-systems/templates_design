import React, { useState, useEffect } from 'react';
const BASE = import.meta.env.BASE_URL;

import { 
  ArrowLeft, 
  Workflow,
  Menu,
  X,
  MapPin,
  Mail,
  Phone,
  MessageSquare
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

export default function Contact() {
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
      <header className={"fixed top-0 w-full z-50 transition-all duration-300 " + (isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6')}>
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
                  <a key={link.name} href={link.href} className={`font-medium transition-colors ${link.name === 'צור קשר' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}>
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
              <a key={link.name} href={link.href} className={`font-medium pb-4 border-b border-slate-100 ${link.name === 'צור קשר' ? 'text-blue-600' : 'text-slate-900'}`} onClick={() => setMobileMenuOpen(false)}>
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
        <section className="relative py-12 overflow-hidden">
          <div className="hero-glow"></div>
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                נשמח <span className="text-gradient">לדבר איתך.</span>
              </h1>
              <p className="text-xl text-slate-600">
                יש לך שאלות על המוצר? צריכים פתרון מותאם לארגון? הצוות שלנו זמין עבורך לכל שאלה והתייעצות.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 animate-on-scroll relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-primary"></div>
              
              {/* Form */}
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">שלחו הודעה ונחזור אליכם בהקדם</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">שם מלא</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="ישראל ישראלי" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">אימייל עסקי</label>
                      <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="israel@company.com" dir="ltr" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">שם החברה</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="חברה בע״מ" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">איך נוכל לעזור?</label>
                    <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" placeholder="ספר לנו קצת על הצרכים שלכם..."></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-gradient-primary hover:opacity-90 text-white font-bold text-lg py-4 rounded-xl transition-opacity shadow-md">
                    שליחת הודעה
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="order-1 lg:order-2 bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">פרטי התקשרות</h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-lg mb-1">המשרדים שלנו</div>
                        <div className="text-slate-600">
                          רחוב יגאל אלון 98,<br/>
                          מגדל אלקטרה, קומה 42<br/>
                          תל אביב, ישראל
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center shrink-0">
                        <Mail size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-lg mb-1">אימייל</div>
                        <div className="text-slate-600 font-sans" dir="ltr">
                          hello@flow-automation.co.il
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                        <Phone size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-lg mb-1">טלפון</div>
                        <div className="text-slate-600 font-sans" dir="ltr">
                          +972 3 123 4567
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-slate-200">
                  <div className="flex items-center gap-3 text-slate-800 font-medium bg-white p-4 rounded-xl border border-slate-200">
                    <MessageSquare className="text-blue-500" />
                    <span>תמיכה זמינה ללקוחות קיימים 24/7 בצ׳אט המערכת.</span>
                  </div>
                </div>
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
                <li><a href={`${BASE}preview/tech-saas/SaaS#pricing`} className="text-slate-600 hover:text-blue-600 transition-colors">תמחור</a></li>
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
