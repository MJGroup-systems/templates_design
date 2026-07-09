import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, CheckCircle2, Zap, Workflow, AlertCircle, ArrowDown } from 'lucide-react';

const BASE = import.meta.env.BASE_URL;

function useIntersectionObserver(options: IntersectionObserverInit = { threshold: 0.2 }) {
  // Starts visible so the page renders fully immediately (e.g. inside static
  // preview screenshots that never fire scroll/intersection events), while
  // still allowing a subtle reveal animation for elements below the fold
  // once they actually scroll into view in a real browser.
  const [isIntersecting, setIsIntersecting] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;
    // If already in view on mount, keep it visible immediately.
    const rect = currentRef.getBoundingClientRect();
    const inView = rect.top < (window.innerHeight || document.documentElement.clientHeight) * 1.2;
    if (inView) {
      setIsIntersecting(true);
      return;
    }
    setIsIntersecting(false);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
      }
    }, options);
    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [options.threshold, options.rootMargin]);

  return [ref, isIntersecting] as const;
}

const FadeIn = ({ children, delay = "0ms", className = "" }: { children: React.ReactNode, delay?: string, className?: string }) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

export default function NarrativeScroll() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30 overflow-x-hidden" dir="rtl">
      {/* Navbar - Minimalist */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Workflow className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">פלואו</span>
        </div>
        <button className="text-sm font-medium bg-white text-slate-950 px-5 py-2.5 rounded-full hover:bg-slate-200 transition-colors flex items-center gap-2 group">
          <span>התחל חינם</span>
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        </button>
      </nav>

      {/* Act 1: The Problem (Chaos) */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
        {/* Abstract background elements for chaos */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-red-600/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-5xl">
          <FadeIn delay="0ms">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 mb-8 text-sm font-medium">
              <AlertCircle className="w-4 h-4" />
              <span>העבודה שלכם לא אמורה להיראות ככה</span>
            </div>
          </FadeIn>
          
          <FadeIn delay="200ms">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
              כשהתהליכים<br />
              <span className="text-red-400">יוצאים משליטה.</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay="400ms">
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed">
              מיילים הולכים לאיבוד, אקסלים נשברים, אישורים מתעכבים שבועות.
              הצוות שלכם מבזבז שעות על עבודה ידנית שחורה במקום להתקדם.
            </p>
          </FadeIn>
          
          <FadeIn delay="600ms" className="w-full max-w-4xl relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-red-900/20 aspect-video bg-slate-900 flex items-center justify-center">
              <img 
                src={`${BASE}/images/narrative-chaos.png`} 
                alt="Chaos" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/1200x675/1e293b/ef4444?text=Chaos+&font=Montserrat';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>
          </FadeIn>
          
          <FadeIn delay="800ms" className="mt-20">
            <div className="flex flex-col items-center gap-4 text-slate-500 animate-bounce">
              <span className="text-sm tracking-widest uppercase">גללו כדי לתקן את זה</span>
              <ArrowDown className="w-5 h-5" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Act 2: The Transition (Resolution Reveal) */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 border-t border-white/5">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <div className="w-16 h-16 mx-auto bg-indigo-500/20 rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(99,102,241,0.3)] border border-indigo-500/30">
              <Zap className="w-8 h-8 text-indigo-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">ואז הגיעה <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">פלואו</span>.</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-16">
              פלטפורמת אוטומציה אחת שמתחברת לכל הכלים שלכם, 
              מיישרת את הבלאגן והופכת כל תהליך לזרימה חלקה. ללא כתיבת קוד.
            </p>
          </FadeIn>

          <FadeIn delay="200ms" className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(99,102,241,0.15)] aspect-[21/9] bg-slate-800">
            <img 
              src={`${BASE}/images/narrative-resolution.png`} 
              alt="Resolution" 
              className="w-full h-full object-cover opacity-90"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://placehold.co/1200x514/1e293b/6366f1?text=Order+and+Clarity&font=Montserrat';
              }}
            />
          </FadeIn>
        </div>
      </section>

      {/* Act 3: Narrative Beats (Progressive Disclosure) */}
      <section className="py-24 bg-slate-900 relative">
        <div className="container mx-auto px-6 max-w-5xl">
          
          {/* Beat 1 */}
          <div className="min-h-[70vh] flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 py-16">
            <div className="flex-1 space-y-6 md:order-last">
              <FadeIn>
                <div className="text-indigo-400 font-semibold tracking-wider text-sm">שלב 1</div>
                <h3 className="text-3xl md:text-4xl font-bold mt-2">מאיסוף ידני לזרימה אוטומטית</h3>
                <p className="text-slate-400 text-lg leading-relaxed mt-4">
                  במקום להעתיק נתונים ממערכת אחת לאחרת, פלואו עושה את זה בשבילכם.
                  ברגע שלקוח משלם, נוצרת לו שורה ב-CRM, נשלח לו מייל קבלת פנים, ונפתחת משימה לצוות התמיכה.
                </p>
                <ul className="mt-8 space-y-4">
                  {['חיבור ליותר מ-200 מערכות', 'סנכרון נתונים דו-כיווני בזמן אמת', 'ללא טעויות אנוש או שכפול נתונים'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
            <div className="flex-1 w-full">
              <FadeIn delay="200ms" className="relative group">
                <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full group-hover:bg-indigo-500/30 transition-colors" />
                <img 
                  src={`${BASE}/images/narrative-beat-1.png`} 
                  alt="Data Pipeline" 
                  className="relative z-10 w-full rounded-2xl border border-white/10 shadow-xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/0f172a/818cf8?text=Beat+1&font=Montserrat';
                  }}
                />
              </FadeIn>
            </div>
          </div>

          {/* Spacer */}
          <div className="w-px h-32 bg-gradient-to-b from-indigo-500/0 via-indigo-500/50 to-indigo-500/0 mx-auto hidden md:block" />

          {/* Beat 2 */}
          <div className="min-h-[70vh] flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 py-16">
            <div className="flex-1 space-y-6">
              <FadeIn>
                <div className="text-cyan-400 font-semibold tracking-wider text-sm">שלב 2</div>
                <h3 className="text-3xl md:text-4xl font-bold mt-2">צוואר הבקבוק נפתח</h3>
                <p className="text-slate-400 text-lg leading-relaxed mt-4">
                  תהליכי אישור שלוקחים ימים מסתיימים כעת בדקות.
                  הבקשה מנותבת אוטומטית לגורם המאשר הנכון, עם התראות חכמות וכל המידע הדרוש לקבלת החלטה.
                </p>
                <ul className="mt-8 space-y-4">
                  {['ניתוב חכם לפי לוגיקה עסקית', 'אישור בלחיצה מתוך סלאק או המייל', 'תזכורות אוטומטיות למעכבים'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
            <div className="flex-1 w-full">
              <FadeIn delay="200ms" className="relative group">
                <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full group-hover:bg-cyan-500/30 transition-colors" />
                <img 
                  src={`${BASE}/images/narrative-beat-2.png`} 
                  alt="Approvals UI" 
                  className="relative z-10 w-full rounded-2xl border border-white/10 shadow-xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/0f172a/22d3ee?text=Beat+2&font=Montserrat';
                  }}
                />
              </FadeIn>
            </div>
          </div>

          {/* Spacer */}
          <div className="w-px h-32 bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 mx-auto hidden md:block" />

          {/* Beat 3 */}
          <div className="min-h-[70vh] flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 py-16">
            <div className="flex-1 space-y-6 md:order-last">
              <FadeIn>
                <div className="text-purple-400 font-semibold tracking-wider text-sm">שלב 3</div>
                <h3 className="text-3xl md:text-4xl font-bold mt-2">שליטה מלאה בזמן אמת</h3>
                <p className="text-slate-400 text-lg leading-relaxed mt-4">
                  אין יותר "איפה זה עומד?". פלואו מספקת דשבורד מנהלים שקוף לחלוטין.
                  זהו צווארי בקבוק מראש, מדדו ביצועים וקבלו החלטות מבוססות נתונים.
                </p>
                <ul className="mt-8 space-y-4">
                  {['דשבורדים מותאמים אישית למנהלים', 'התראות חריגים פרואקטיביות', 'דוחות יעילות אוטומטיים'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
            <div className="flex-1 w-full">
              <FadeIn delay="200ms" className="relative group">
                <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full group-hover:bg-purple-500/30 transition-colors" />
                <img 
                  src={`${BASE}/images/narrative-beat-3.png`} 
                  alt="Metrics Dashboard" 
                  className="relative z-10 w-full rounded-2xl border border-white/10 shadow-xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/0f172a/c084fc?text=Beat+3&font=Montserrat';
                  }}
                />
              </FadeIn>
            </div>
          </div>

        </div>
      </section>

      {/* Act 4: The One Solution (Pricing) */}
      <section className="py-32 bg-slate-950 relative border-t border-white/5">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl font-bold mb-4">חבילה אחת, הכל כלול.</h2>
              <p className="text-xl text-slate-400">בלי חישובי קרדיטים מבלבלים או תכונות נעולות. כל מה שצריך כדי לייעל את העסק.</p>
            </FadeIn>
          </div>

          <FadeIn delay="200ms">
            <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                <div className="flex-1 text-center md:text-right">
                  <h3 className="text-2xl font-bold text-white mb-2">פלואו פרו</h3>
                  <p className="text-slate-400 mb-6">מיועד לצוותים שרוצים לגדול בלי להגדיל את הכאב ראש.</p>
                  
                  <div className="flex items-baseline gap-2 mb-8 justify-center md:justify-start">
                    <span className="text-5xl font-black text-white">₪499</span>
                    <span className="text-slate-500">/ חודש</span>
                  </div>
                  
                  <button className="w-full sm:w-auto bg-white text-slate-950 text-lg font-semibold px-8 py-4 rounded-xl hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2 group">
                    <span>התחילו 14 ימי נסיון</span>
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  </button>
                  <p className="text-sm text-slate-500 mt-3 text-center md:text-right">ללא התחייבות. ביטול בכל עת.</p>
                </div>
                
                <div className="flex-1 w-full md:border-r md:border-white/10 md:pr-12">
                  <ul className="space-y-4">
                    {[
                      'עד 50 משתמשים בארגון',
                      'אוטומציות ללא הגבלה',
                      'חיבור לכל המערכות (200+ אינטגרציות)',
                      'תמיכה טלפונית בעברית',
                      'הדרכת Onboarding פרטית לצוות'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                        </div>
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay="400ms">
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-slate-500">
              <span className="font-medium text-slate-400">צריכים יותר? תוספות אפשריות:</span>
              <div className="flex gap-4">
                <span className="px-3 py-1 rounded-md bg-slate-800 border border-white/5">חיבור פרימיום ל-ERP מקומי</span>
                <span className="px-3 py-1 rounded-md bg-slate-800 border border-white/5">ניהול הרשאות SSO מתקדם</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer minimal CTA */}
      <footer className="py-12 border-t border-white/5 bg-slate-950 text-center">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Workflow className="w-6 h-6 text-indigo-500" />
            <span className="text-2xl font-bold tracking-tight text-white">פלואו</span>
          </div>
          <p className="text-slate-500 mb-8 max-w-md mx-auto">
            מפסיקים לעבוד בשביל התהליכים, ומתחילים לגרום להם לעבוד בשבילכם.
          </p>
          <div className="text-sm text-slate-600">
            © {new Date().getFullYear()} פלואו מערכות בע"מ. כל הזכויות שמורות.
          </div>
        </div>
      </footer>
    </div>
  );
}
