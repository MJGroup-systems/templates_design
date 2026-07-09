import React, { useState, useEffect } from 'react';

const BASE = import.meta.env.BASE_URL;

import { 
  ArrowLeft, 
  CheckCircle2, 
  Zap, 
  Play,
  PlayCircle,
  Menu,
  X,
  Workflow,
  Globe,
  Layers,
  Settings,
  Users,
  CreditCard,
  Bell,
  Code2,
  Database,
  Activity,
  Box,
  TerminalSquare
} from 'lucide-react';

const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap');

  .font-heebo { font-family: 'Heebo', sans-serif; }
  .font-mono { font-family: 'Fira Code', monospace; }

  /* Canvas Hero Animations */
  .canvas-bg {
    background-color: #0B1120;
    background-image: radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.15) 0%, rgba(11, 17, 32, 1) 100%);
  }

  .grid-pattern {
    background-size: 40px 40px;
    background-image: 
      linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  }

  .pulse-node {
    animation: pulse-node 3s infinite;
  }

  @keyframes pulse-node {
    0% { box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.4); }
    70% { box-shadow: 0 0 0 15px rgba(56, 189, 248, 0); }
    100% { box-shadow: 0 0 0 0 rgba(56, 189, 248, 0); }
  }

  .glass-panel-dark {
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  }

  .glass-panel-light {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
  }

  .animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .animate-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .app-scroll::-webkit-scrollbar {
    width: 6px;
  }
  .app-scroll::-webkit-scrollbar-track {
    background: rgba(15, 23, 42, 0.5);
  }
  .app-scroll::-webkit-scrollbar-thumb {
    background: rgba(51, 65, 85, 1);
    border-radius: 3px;
  }
`;

export default function ProductLedDemo() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePlan, setActivePlan] = useState('monthly');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight * 0.9) {
          el.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div dir="rtl" className="font-heebo min-h-screen bg-[#0B1120] text-slate-300 overflow-x-hidden selection:bg-cyan-900 selection:text-cyan-100">
      <style>{customStyles}</style>
      
      {/* Navigation - Dark/App style */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 max-w-[90rem]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              {/* Logo */}
              <a href={`${BASE}/preview/tech-saas/ProductLedDemo`} className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white shadow-lg">
                  <Workflow size={18} />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  פלואו<span className="text-cyan-400 font-mono text-sm ml-1">_</span>
                </span>
              </a>
              
              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-6 text-sm">
                <a href="#product" className="text-slate-300 hover:text-white transition-colors">פיצ'רים</a>
                <a href="#integrations" className="text-slate-300 hover:text-white transition-colors">אינטגרציות</a>
                <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">תמחור</a>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">תיעוד (Docs)</a>
              </nav>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors px-2">
                התחברות לסביבת עבודה
              </a>
              <a href="#" className="bg-white hover:bg-slate-100 text-slate-900 px-5 py-2 rounded-md font-medium text-sm transition-colors flex items-center gap-2">
                <Play size={14} className="fill-slate-900" />
                פתח קנבס חדש
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-slate-300 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0f172a] pt-24 px-6 md:hidden">
          <nav className="flex flex-col gap-6 text-lg">
            <a href="#product" className="font-medium pb-4 border-b border-slate-800 text-slate-200" onClick={() => setMobileMenuOpen(false)}>פיצ'רים</a>
            <a href="#integrations" className="font-medium pb-4 border-b border-slate-800 text-slate-200" onClick={() => setMobileMenuOpen(false)}>אינטגרציות</a>
            <a href="#pricing" className="font-medium pb-4 border-b border-slate-800 text-slate-200" onClick={() => setMobileMenuOpen(false)}>תמחור</a>
            <div className="flex flex-col gap-4 mt-4">
              <a href="#" className="text-center py-3 text-slate-300 font-medium bg-slate-800/50 rounded-lg border border-slate-700">התחברות</a>
              <a href="#" className="text-center py-3 bg-white text-slate-900 font-medium rounded-lg">פתח קנבס חדש</a>
            </div>
          </nav>
        </div>
      )}

      <main>
        {/* HERO: The Product Canvas IS the Hero */}
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden canvas-bg">
          {/* Grid Background overlay */}
          <div className="absolute inset-0 grid-pattern opacity-30"></div>
          
          {/* Main Hero Background Image (The Canvas UI) */}
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-60 md:opacity-80">
            <img 
              src={`${BASE}/images/flow-product-hero-canvas.png`} 
              alt="Flow Canvas Environment" 
              className="w-full h-full object-cover object-center transform scale-105"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/1920x1080/0B1120/1e293b?text=Interactive+Canvas+Background";
              }}
            />
            {/* Fake interactive elements on top of the image to make it feel alive */}
            <div className="absolute top-[30%] right-[25%] pulse-node w-4 h-4 bg-cyan-400 rounded-full"></div>
            <div className="absolute top-[45%] left-[40%] pulse-node w-4 h-4 bg-blue-500 rounded-full" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-[60%] right-[55%] pulse-node w-4 h-4 bg-emerald-400 rounded-full" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Vignette to fade edges */}
          <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(11,17,32,1)] z-0 pointer-events-none"></div>

          {/* Floating UI Overlay - The Pitch */}
          <div className="container mx-auto px-6 max-w-[90rem] relative z-10">
            <div className="max-w-2xl mt-12 md:mt-24">
              <div className="glass-panel-dark rounded-2xl p-8 md:p-12 border border-slate-700">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-cyan-400 text-xs font-mono mb-6">
                  <TerminalSquare size={14} />
                  <span>v2.4.0_stable</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-white mb-6">
                  הקנבס שלך <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    לאוטומציה.
                  </span>
                </h1>
                
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  בלי סיסמאות שיווקיות. תראה בעצמך. גרור, חבר, והרץ תהליכים מורכבים בתוך שניות ישירות מהדפדפן, בלי לכתוב שורת קוד אחת.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#" className="bg-white hover:bg-slate-100 text-slate-900 px-6 py-3.5 rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 group text-base">
                    הרץ דמו עכשיו
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  </a>
                  <a href="#product" className="bg-slate-800/50 hover:bg-slate-700 text-white border border-slate-600 px-6 py-3.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 group text-base backdrop-blur-sm">
                    <Activity size={18} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                    איך זה עובד
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Console-style Social Proof */}
        <section className="py-6 border-y border-slate-800 bg-[#0B1120]">
          <div className="container mx-auto px-6 max-w-[90rem]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">/* Trusted by engineering & ops teams */</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center opacity-50 grayscale contrast-200">
                <span className="text-xl font-bold tracking-tighter text-white flex items-center gap-1"><Layers size={20}/> פייננסPRO</span>
                <span className="text-xl font-bold tracking-tighter text-white">Cyber<span className="font-light">Net</span></span>
                <span className="text-xl font-bold tracking-tighter text-white">Market<span className="text-cyan-500">X</span></span>
                <span className="text-xl font-bold tracking-tighter text-white flex items-center gap-1"><Globe size={20}/> GlobalIL</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features: "Show, Don't Tell" Product Panels */}
        <section id="product" className="py-24 md:py-32 bg-[#080d1a] relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
          
          <div className="container mx-auto px-6 max-w-[90rem]">
            <div className="max-w-3xl mb-24 animate-on-scroll">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">הצצה פנימה: ככה נראית <span className="text-cyan-400">אוטומציה אמיתית</span></h2>
              <p className="text-xl text-slate-400">
                אנחנו מאמינים במוצר שלנו, אז אנחנו פשוט מראים אותו. בלי אייקונים כלליים – הנה הממשק שאתה הולך לעבוד איתו.
              </p>
            </div>

            <div className="space-y-32">
              
              {/* Feature 1: Trigger & Integrations */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 animate-on-scroll">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 mb-6 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">טריגרים וחיבור נתונים</h3>
                  <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                    הכל מתחיל באירוע. הגדר טריגרים מדויקים (Webhooks, API polling, או אפליקציות מובנות), ממפה נתונים ויזואלית, וצפה בתגובת המערכת ב-Live עוד לפני ששמרת.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-slate-300 font-mono text-sm">
                      <CheckCircle2 size={16} className="text-cyan-500" />
                      <span>{`> Request parsing & validation`}</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300 font-mono text-sm">
                      <CheckCircle2 size={16} className="text-cyan-500" />
                      <span>{`> Real-time payload preview`}</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300 font-mono text-sm">
                      <CheckCircle2 size={16} className="text-cyan-500" />
                      <span>{`> OAuth 2.0 native support`}</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-7 animate-on-scroll">
                  <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl relative">
                    <div className="h-8 bg-[#0f172a] border-b border-slate-800 flex items-center px-4 gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                      </div>
                      <div className="text-xs text-slate-500 font-mono ml-4">trigger_config.ui</div>
                    </div>
                    <img 
                      src={`${BASE}/images/flow-product-panel-1.png`} 
                      alt="Trigger Configuration UI" 
                      className="w-full h-auto"
                      onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/800x500/0f172a/38bdf8?text=Integration+Setup+Panel";
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Feature 2: Logic & Routing */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 order-2 lg:order-1 animate-on-scroll">
                  <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl relative">
                    <div className="h-8 bg-[#0f172a] border-b border-slate-800 flex items-center px-4 gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                      </div>
                      <div className="text-xs text-slate-500 font-mono ml-4">logic_tree.ui</div>
                    </div>
                    <img 
                      src={`${BASE}/images/flow-product-panel-2.png`} 
                      alt="Logic Tree UI" 
                      className="w-full h-auto"
                      onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/800x500/0f172a/818cf8?text=Logic+Tree+Panel";
                      }}
                    />
                  </div>
                </div>
                <div className="lg:col-span-5 order-1 lg:order-2 animate-on-scroll">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 mb-6 shadow-[0_0_15px_rgba(96,165,250,0.15)]">
                    <Code2 size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">לוגיקה חכמה וניתוב</h3>
                  <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                    תשכח מתרשימי זרימה בסיסיים. בנה מסלולים מותאמים אישית לכל תרחיש אפשרי עם ענפי If/Else מורכבים, לולאות foreach על מערכים, ופילטור נתונים מתקדם.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-slate-300 font-mono text-sm">
                      <CheckCircle2 size={16} className="text-blue-500" />
                      <span>{`> Nested conditional branches`}</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300 font-mono text-sm">
                      <CheckCircle2 size={16} className="text-blue-500" />
                      <span>{`> Array iteration & mapping`}</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300 font-mono text-sm">
                      <CheckCircle2 size={16} className="text-blue-500" />
                      <span>{`> Error handling fallback nodes`}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 3: Analytics & Logs */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 animate-on-scroll">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_15px_rgba(52,211,153,0.15)]">
                    <Database size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">ניטור ו-Logs בזמן אמת</h3>
                  <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                    שקיפות מלאה לכל מה שקורה מאחורי הקלעים. עקוב אחר כל ריצה, צלול לתוך ה-payload המדויק של כל node, ואתר שגיאות בשניות עם כלי הדיבאגינג המובנים שלנו.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-slate-300 font-mono text-sm">
                      <CheckCircle2 size={16} className="text-emerald-500" />
                      <span>{`> Millisecond execution logs`}</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300 font-mono text-sm">
                      <CheckCircle2 size={16} className="text-emerald-500" />
                      <span>{`> Payload diff viewer`}</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300 font-mono text-sm">
                      <CheckCircle2 size={16} className="text-emerald-500" />
                      <span>{`> Performance bottleneck tracing`}</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-7 animate-on-scroll">
                  <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl relative">
                    <div className="h-8 bg-[#0f172a] border-b border-slate-800 flex items-center px-4 gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                      </div>
                      <div className="text-xs text-slate-500 font-mono ml-4">analytics_dashboard.ui</div>
                    </div>
                    <img 
                      src={`${BASE}/images/flow-product-panel-3.png`} 
                      alt="Analytics UI" 
                      className="w-full h-auto"
                      onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/800x500/0f172a/34d399?text=Analytics+%26+Logs";
                      }}
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* App-like Pricing Section */}
        <section id="pricing" className="py-24 md:py-32 bg-[#0B1120]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">תמחור שקוף, מובנה במערכת</h2>
              <p className="text-lg text-slate-400">
                במקום כרטיסי תמחור שיווקיים, הנה איך מסך ניהול המנוי שלך ייראה בתוך האפליקציה. שדרג או בטל בכל רגע, ישירות מהמערכת.
              </p>
            </div>

            {/* The "App Settings" Window */}
            <div className="bg-[#0f172a] rounded-xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] animate-on-scroll font-sans">
              
              {/* Sidebar Settings Nav */}
              <div className="w-full md:w-64 bg-[#080d1a] border-b md:border-b-0 md:border-l border-slate-800 p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-white">
                    <Box size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">סביבת הפיתוח</div>
                    <div className="text-xs text-slate-500">acme-corp</div>
                  </div>
                </div>
                
                <div className="text-xs font-bold text-slate-500 mb-4 px-3">הגדרות חשבון</div>
                <nav className="flex flex-col gap-1 text-sm mb-8">
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg transition-colors">
                    <Settings size={16} /> הגדרות כלליות
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg transition-colors">
                    <Users size={16} /> ניהול צוות
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 bg-slate-800 text-white rounded-lg transition-colors border border-slate-700">
                    <CreditCard size={16} className="text-cyan-400" /> חיוב ותוכניות
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg transition-colors">
                    <Bell size={16} /> התראות
                  </a>
                </nav>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 bg-[#0f172a] p-8 md:p-10 flex flex-col h-[600px] overflow-y-auto app-scroll relative">
                <div className="flex justify-between items-end mb-8 border-b border-slate-800 pb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">חיוב ותוכניות</h3>
                    <p className="text-slate-400 text-sm">נהל את אמצעי התשלום שלך ואת תוכנית המנוי.</p>
                  </div>
                  
                  {/* Monthly/Yearly Toggle */}
                  <div className="flex bg-slate-800 p-1 rounded-lg border border-slate-700">
                    <button 
                      className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${activePlan === 'monthly' ? 'bg-[#0f172a] text-white shadow' : 'text-slate-400 hover:text-white'}`}
                      onClick={() => setActivePlan('monthly')}
                    >
                      חודשי
                    </button>
                    <button 
                      className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${activePlan === 'yearly' ? 'bg-[#0f172a] text-white shadow' : 'text-slate-400 hover:text-white'}`}
                      onClick={() => setActivePlan('yearly')}
                    >
                      שנתי <span className="text-emerald-400 ml-1 text-xs">-20%</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Current Plan (Free) */}
                  <div className="border border-slate-700 bg-slate-800/50 rounded-xl p-6 relative">
                    <div className="absolute top-6 left-6 text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">התוכנית הנוכחית</div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-bold text-white">Starter</h4>
                          <span className="text-slate-400 font-mono text-sm">חינם</span>
                        </div>
                        <p className="text-sm text-slate-400">1,000 פעולות / חודש • 5 תהליכים פעילים</p>
                      </div>
                      <div className="w-full md:w-48 bg-slate-900 rounded-full h-2 border border-slate-700 overflow-hidden">
                        <div className="bg-slate-500 h-full rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Pro Plan */}
                  <div className="border border-cyan-500/50 bg-cyan-950/10 rounded-xl p-6 relative shadow-[0_0_30px_rgba(34,211,238,0.05)]">
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-bold text-cyan-400">Professional</h4>
                          <span className="text-white font-mono text-xl">
                            {activePlan === 'monthly' ? '₪149' : '₪119'}
                            <span className="text-slate-500 text-sm">/חודש</span>
                          </span>
                        </div>
                        <p className="text-sm text-slate-400 mb-6">לצוותים קטנים ובינוניים שצריכים יותר כוח וגמישות.</p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-slate-300">
                          <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-500"/> ללא הגבלת תהליכים</div>
                          <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-500"/> 50,000 פעולות / חודש</div>
                          <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-500"/> לוגיקה מותנית מתקדמת</div>
                          <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-500"/> כל האינטגרציות פתוחות</div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center">
                        <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-6 py-2.5 rounded-lg transition-colors w-full md:w-auto text-sm">
                          שדרג עכשיו
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Enterprise Plan */}
                  <div className="border border-slate-700 bg-[#0f172a] rounded-xl p-6 transition-colors hover:border-slate-600 cursor-pointer group">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">Enterprise</h4>
                        <p className="text-sm text-slate-400">SLA מובטח, SSO, מנהל תיק אישי וסביבות Dedicated.</p>
                      </div>
                      <button className="bg-transparent border border-slate-600 text-white hover:bg-slate-800 font-medium px-6 py-2.5 rounded-lg transition-colors w-full md:w-auto text-sm">
                        צור קשר
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* Final CTA / Console Initialization */}
        <section className="py-24 bg-[#0B1120] relative border-t border-slate-800">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-500/30 text-cyan-400 mb-8 animate-on-scroll">
              <TerminalSquare size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-on-scroll delay-100">
              מוכן לאתחל את סביבת העבודה?
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto animate-on-scroll delay-200 font-mono text-sm">
              $ flow init --workspace="your-team" --template="quickstart"
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll delay-300">
              <a href="#" className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 group text-lg">
                <PlayCircle size={20} className="fill-slate-900 text-white" />
                פתח קנבס חדש (חינם)
              </a>
              <a href="#" className="w-full sm:w-auto text-slate-400 hover:text-white px-8 py-4 rounded-lg font-medium transition-colors border border-transparent hover:border-slate-700">
                קרא את ה-Docs
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-8 bg-[#080d1a] border-t border-slate-800/50 text-center text-sm text-slate-500">
        <p>פלואו © {new Date().getFullYear()}. הדגמת מוצר מבוססת UI.</p>
      </footer>
    </div>
  );
}
