import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Zap, 
  Shield, 
  BarChart3, 
  Play,
  Menu,
  X,
  Workflow,
  Globe,
  Cpu,
  ArrowRight,
  Layers
} from 'lucide-react';

const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&display=swap');

  .font-heebo {
    font-family: 'Heebo', sans-serif;
  }

  .text-gradient {
    background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .bg-gradient-primary {
    background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%);
  }

  .hero-glow {
    position: absolute;
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(6,182,212,0) 70%);
    top: 40%;
    left: 30%;
    transform: translate(-50%, -50%);
    z-index: 0;
    pointer-events: none;
  }

  .float-anim {
    animation: float 6s ease-in-out infinite;
  }

  .float-anim-delayed {
    animation: float 7s ease-in-out infinite;
    animation-delay: 2s;
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }

  .glass-panel {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.5);
  }

  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .animate-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function FlowSaaS() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Simple scroll animation observer
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
    handleScroll(); // Trigger once on mount
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
              {/* Logo */}
              <a href="#" className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform duration-300 shadow-md">
                  <Workflow size={20} />
                </div>
                <span className="text-2xl font-bold tracking-tight text-slate-900">
                  פלואו<span className="text-blue-600">.</span>
                </span>
              </a>
              
              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="text-slate-600 hover:text-slate-900 font-medium transition-colors px-4">
                התחברות
              </a>
              <a href="#" className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2 group">
                התחל חינם
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-slate-900 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
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
              <a 
                key={link.name} 
                href={link.href}
                className="text-slate-900 font-medium pb-4 border-b border-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-4 mt-4">
              <a href="#" className="text-center py-3 text-slate-600 font-medium bg-slate-50 rounded-xl border border-slate-200">
                התחברות
              </a>
              <a href="#" className="text-center py-3 bg-gradient-primary text-white font-medium rounded-xl shadow-md">
                התחל חינם עכשיו
              </a>
            </div>
          </nav>
        </div>
      )}

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="hero-glow"></div>
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div className="max-w-2xl animate-on-scroll">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  גרסה 2.0 זמינה כעת
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900 mb-6">
                  אוטומציה שדוחפת את <br/>
                  <span className="text-gradient">העסק שלך</span> קדימה
                </h1>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                  חבר את כל הכלים שלך, תכנן תהליכי עבודה מתקדמים ותן לצוות שלך להתמקד במה שבאמת חשוב. פלטפורמת ה-SaaS המובילה לעסקים ישראלים.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#" className="bg-gradient-primary hover:opacity-90 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group text-lg">
                    התחל לבנות בחינם
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                  </a>
                  <a href="#" className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 group text-lg shadow-sm">
                    <Play size={20} className="text-blue-600 group-hover:scale-110 transition-transform" />
                    הדגמת מערכת
                  </a>
                </div>
                <div className="mt-12 flex items-center gap-4 text-sm text-slate-500 font-medium">
                  <span className="flex -space-x-2 space-x-reverse">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className={`w-8 h-8 rounded-full border-2 border-slate-50 flex items-center justify-center text-xs text-white font-bold`} style={{ backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#6366f1'][i-1] }}>
                        {['א', 'ב', 'ג', 'ד'][i-1]}
                      </div>
                    ))}
                  </span>
                  <span>מעל 2,000+ צוותים כבר בפנים</span>
                </div>
              </div>

              <div className="relative lg:h-[600px] flex items-center justify-center animate-on-scroll">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-cyan-50 rounded-[3rem] transform rotate-3 scale-105 opacity-50"></div>
                <div className="relative w-full rounded-2xl shadow-2xl border border-slate-200 bg-white overflow-hidden float-anim">
                  <div className="h-8 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <img 
                    src="/__mockup/images/flow-hero-ui.png" 
                    alt="Flow Dashboard UI" 
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/800x600/f8fafc/0f172a?text=Dashboard+Mockup";
                    }}
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -left-8 top-32 glass-panel rounded-xl p-4 shadow-xl float-anim-delayed flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-800">תהליך אושר</div>
                    <div className="text-xs text-slate-500">לפני 2 דקות</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="py-10 border-y border-slate-200 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <p className="text-center text-sm font-semibold text-slate-400 mb-8 uppercase tracking-widest">הבחירה של החברות המובילות בישראל</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-2xl font-black tracking-tighter text-slate-800 flex items-center gap-1"><Layers className="text-blue-600"/> פייננסPRO</span>
              <span className="text-2xl font-black tracking-tighter text-slate-800">Cyber<span className="font-light">Net</span></span>
              <span className="text-2xl font-black tracking-tighter text-slate-800">Market<span className="text-cyan-500">X</span></span>
              <span className="text-2xl font-bold tracking-tighter text-slate-800 font-serif">תקשורת+</span>
              <span className="text-2xl font-black tracking-tighter text-slate-800 flex items-center gap-1"><Globe className="text-indigo-600"/> GlobalIL</span>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">בנוי לביצועים, מתוכנן לפשטות</h2>
              <p className="text-lg text-slate-600">
                כל מה שאתה צריך כדי לייעל את העבודה של הצוות שלך, במקום אחד. בלי פשרות על אבטחה, מהירות או חווית משתמש.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="text-amber-500" size={24} />,
                  bg: "bg-amber-50",
                  title: "מהירות שיא",
                  desc: "ביצוע אוטומציות בזמן אמת בלי עיכובים. המנוע שלנו מתוכנן לעמוד בעומסים הגבוהים ביותר."
                },
                {
                  icon: <Shield className="text-emerald-500" size={24} />,
                  bg: "bg-emerald-50",
                  title: "אבטחה ברמת ארגון",
                  desc: "הצפנה מקצה לקצה, תאימות לתקני אבטחה מחמירים, וניהול הרשאות מפורט לכל משתמש."
                },
                {
                  icon: <BarChart3 className="text-blue-500" size={24} />,
                  bg: "bg-blue-50",
                  title: "תובנות חכמות",
                  desc: "דאשבורד אנליטיקס מובנה שמציג את חיסכון הזמן שלך ואת הביצועים של כל תהליך וצוות."
                },
                {
                  icon: <Workflow className="text-purple-500" size={24} />,
                  bg: "bg-purple-50",
                  title: "ללא קוד בכלל",
                  desc: "ממשק ויזואלי מתקדם המאפשר בניית תהליכים מורכבים בגרירה ושחרור פשוטים."
                },
                {
                  icon: <Cpu className="text-pink-500" size={24} />,
                  bg: "bg-pink-50",
                  title: "למידת מכונה (AI)",
                  desc: "הצעות חכמות לאוטומציות מבוססות על דפוסי העבודה הקיימים של הארגון שלך."
                },
                {
                  icon: <Globe className="text-cyan-500" size={24} />,
                  bg: "bg-cyan-50",
                  title: "תמיכה גלובלית ומקומית",
                  desc: "ממשק מלא בעברית ואנגלית, תמיכה בתאריכים ומטבעות מקומיים, ושירות לקוחות ישראלי."
                }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
                  <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product / Visual Builder */}
        <section id="product" className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div className="order-2 lg:order-1 relative animate-on-scroll">
                <div className="absolute inset-0 bg-blue-100 rounded-3xl transform -rotate-3 scale-105 opacity-50 blur-lg"></div>
                <img 
                  src="/__mockup/images/flow-builder.png" 
                  alt="Workflow Builder UI" 
                  className="relative w-full h-auto rounded-2xl shadow-2xl border border-slate-200"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/800x600/f8fafc/0f172a?text=Builder+UI";
                  }}
                />
              </div>

              <div className="order-1 lg:order-2 animate-on-scroll">
                <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold mb-6">
                  עורך תהליכים ויזואלי
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  בנה תהליכים מורכבים ב<span className="text-blue-600">דקות</span>, לא חודשים
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  ממשק ה-Drag & Drop שלנו הופך יצירת תהליכי עבודה למשחק ילדים. תן לצוותים שלך את הכוח לארגן את העבודה שלהם, בלי לחכות לצוות הפיתוח.
                </p>
                
                <ul className="space-y-5 mb-10">
                  {[
                    "טריגרים מרובים מכל מערכת קיימת",
                    "לוגיקה מותנית מתקדמת (If/Else, Loops)",
                    "בדיקה ודיבאג בזמן אמת של תהליכים",
                    "שמירת תבניות לשימוש חוזר בכל הארגון"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                      <div className="mt-1 bg-blue-100 text-blue-600 rounded-full p-1">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group text-lg">
                  למד עוד על העורך שלנו
                  <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMGYxNzJhIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMWUzYThhIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-30"></div>
          <div className="container mx-auto px-6 max-w-7xl relative z-10 animate-on-scroll">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-slate-800">
              <div className="text-center md:py-4">
                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-blue-500 mb-2">10M+</div>
                <div className="text-slate-400 font-medium text-lg">פעולות מבוצעות בחודש</div>
              </div>
              <div className="text-center pt-12 md:pt-0 md:py-4">
                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-blue-500 mb-2">40%</div>
                <div className="text-slate-400 font-medium text-lg">חיסכון ממוצע בזמן עבודה</div>
              </div>
              <div className="text-center pt-12 md:pt-0 md:py-4">
                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-blue-500 mb-2">99.99%</div>
                <div className="text-slate-400 font-medium text-lg">זמינות ויציבות המערכת</div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section id="integrations" className="py-24 bg-slate-50 overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div className="animate-on-scroll">
                <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold mb-6">
                  הכלים שלך, מחוברים
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  מתחבר לכל הכלים <br/>שאתה כבר <span className="text-cyan-600">אוהב</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  פלואו מגיע עם מעל 500 אינטגרציות מוכנות מראש למערכות CRM, שיווק, פיננסים ותקשורת המובילות בעולם ובישראל.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {['Salesforce', 'HubSpot', 'Monday.com', 'Priority', 'Green Invoice', 'Slack'].map(tool => (
                    <div key={tool} className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg border border-slate-200 shadow-sm font-medium text-slate-700 font-sans" dir="ltr">
                      <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                      {tool}
                    </div>
                  ))}
                </div>
                
                <a href="#" className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-blue-600 transition-colors group text-lg border-b-2 border-slate-900 hover:border-blue-600 pb-1">
                  צפה בכל האינטגרציות
                  <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
                </a>
              </div>

              <div className="relative animate-on-scroll">
                <img 
                  src="/__mockup/images/flow-integrations.png" 
                  alt="Integrations Network" 
                  className="w-full h-auto rounded-3xl shadow-xl"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/800x800/0f172a/38bdf8?text=Integrations+Network";
                  }}
                />
              </div>

            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">תמחור פשוט שגדל איתך</h2>
              <p className="text-lg text-slate-600">
                התחל בחינם, ושדרג כשהצרכים של העסק שלך גדלים. בלי הפתעות, בלי התחייבות ארוכת טווח.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              
              {/* Basic */}
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 animate-on-scroll">
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
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 animate-on-scroll delay-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">ארגוני</h3>
                <p className="text-slate-500 mb-6">פתרון מותאם אישית לחברות גדולות.</p>
                <div className="mb-6">
                  <span className="text-4xl font-black text-slate-900">מותאם</span>
                </div>
                <a href="#" className="block w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white text-center rounded-xl font-bold transition-colors mb-8">
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

        {/* CTA Section */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl animate-on-scroll">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-400/20"></div>
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-[100px] opacity-40"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full blur-[100px] opacity-40"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  מוכן לקחת את העסק שלך <br/>לשלב הבא?
                </h2>
                <p className="text-xl text-slate-300 mb-10">
                  הצטרף לאלפי עסקים שכבר משתמשים בפלואו כדי לחסוך זמן ולהאיץ צמיחה. ההתקנה לוקחת פחות מ-5 דקות.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="#" className="bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group text-lg">
                    צור משתמש בחינם
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                  </a>
                  <a href="#" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center text-lg">
                    דבר עם נציג
                  </a>
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
                {/* Social placeholders */}
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
