import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, PlayCircle, BarChart3, Zap, Clock, ShieldCheck, Quote } from 'lucide-react';

const BASE = import.meta.env.BASE_URL;

const imageHero = `${BASE}/images/outcome-led-hero.jpg`;
const imageCase1 = `${BASE}/images/outcome-led-case1.jpg`;

export default function OutcomeLed() {
  const [imgErrorHero, setImgErrorHero] = useState(false);
  const [imgErrorCase1, setImgErrorCase1] = useState(false);

  return (
    <div dir="rtl" className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xl leading-none">
                פ
              </div>
              <span className="font-bold text-2xl tracking-tight text-slate-900">פלואו</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#customers" className="hover:text-blue-600 transition-colors">לקוחות מספרים</a>
              <a href="#solutions" className="hover:text-blue-600 transition-colors">פתרונות</a>
              <a href="#pricing" className="hover:text-blue-600 transition-colors">תמחור מותאם</a>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900">התחברות</a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md">
                התחל ניסיון חינם
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero: Outcome-led */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                מקרה מבחן: FinTech IL
              </div>
              
              <div>
                <Quote className="w-12 h-12 text-blue-200 mb-6" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] mb-6">
                  "קיצצנו <span className="text-blue-600">40%</span> מזמן התפעול השבועי שלנו בתוך חודש וחצי."
                </h1>
                <p className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl">
                  עם פלואו, הצלחנו להפוך תהליכים ידניים מתישים לאוטומציות שעובדות ברקע. הצוות שלי חזר להתמקד במה שבאמת חשוב – צמיחה.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm flex items-center justify-center text-slate-500">
                  <img src="https://ui-avatars.com/api/?name=Michal+Cohen&background=e2e8f0&color=475569" alt="מיכל כהן" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">מיכל כהן</div>
                  <div className="text-slate-500 text-sm">מנהלת אופרציה, FinTech IL</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#" className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-slate-900/20">
                  <span>בואו נדבר על התוצאות שלכם</span>
                  <ArrowLeft className="w-5 h-5" />
                </a>
                <a href="#" className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all">
                  <PlayCircle className="w-5 h-5 text-blue-600" />
                  <span>איך זה עובד? (2 דק')</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-emerald-50 rounded-3xl transform rotate-3 scale-105" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-white/50 bg-white p-2">
                <img 
                  src={imgErrorHero ? "https://placehold.co/800x600/f8fafc/94a3b8?text=Dashboard+Impact" : imageHero}
                  onError={() => setImgErrorHero(true)}
                  alt="Dashboard showing impact" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-500">החזר השקעה (ROI)</div>
                  <div className="text-2xl font-bold text-slate-900">300%+</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-slate-500 mb-8">התוצאות מדברות בעד עצמן בארגונים המובילים בישראל</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-black font-serif tracking-tighter">Wix</span>
            <span className="text-2xl font-black font-sans tracking-tight">monday.com</span>
            <span className="text-2xl font-bold font-mono tracking-tighter">Fiverr</span>
            <span className="text-2xl font-black tracking-widest text-slate-800">Gong</span>
            <span className="text-2xl font-extrabold italic">Payoneer</span>
          </div>
        </div>
      </section>

      {/* Proof Points Sequence */}
      <section id="customers" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          
          {/* Proof Point 1 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                יעילות תפעולית
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                "מעבר מ-12 שעות בשבוע ל-0 דקות על קליטת עובדים חדשים."
              </h2>
              <div className="prose prose-lg text-slate-600">
                <p>
                  לפני פלואו, תהליך האונבורדינג בחברת <strong>TechGrowth</strong> דרש פתיחת יוזרים ב-8 מערכות שונות, שליחת מיילים ידניים ותיאום פגישות. 
                </p>
                <p>
                  כיום, כל התהליך מתבצע אוטומטית ברגע שהעובד חותם על החוזה. מערכת פלואו מחברת בין מערכת ה-HR, הסלאק והגוגל וורקספייס בצורה חלקה.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-100">
                <div>
                  <div className="text-4xl font-black text-emerald-600 mb-2">12<span className="text-2xl">ש'</span></div>
                  <div className="text-sm font-medium text-slate-500">חיסכון בשבוע לכל מגייס</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-emerald-600 mb-2">100<span className="text-2xl">%</span></div>
                  <div className="text-sm font-medium text-slate-500">אפס טעויות אנוש</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-lg border border-slate-200/60 p-2">
                <img 
                  src={imgErrorCase1 ? "https://placehold.co/800x800/f8fafc/94a3b8?text=Workflow+Automation" : imageCase1}
                  onError={() => setImgErrorCase1(true)}
                  alt="Workflow diagram"
                  className="w-full h-full object-cover rounded-2xl" 
                />
              </div>
            </div>
          </div>

          {/* Proof Point 2 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-600 p-8 rounded-3xl text-white space-y-4 shadow-xl">
                  <Zap className="w-8 h-8 text-blue-200" />
                  <div className="text-5xl font-black">2.5M</div>
                  <div className="text-blue-100 font-medium">אירועים אוטומטיים בחודש</div>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl text-slate-900 space-y-4 mt-8 shadow-sm">
                  <Clock className="w-8 h-8 text-blue-600" />
                  <div className="text-5xl font-black">99.9%</div>
                  <div className="text-slate-500 font-medium">זמן פעילות (Uptime)</div>
                </div>
                <div className="bg-slate-900 p-8 rounded-3xl text-white space-y-4 col-span-2 shadow-xl flex items-center justify-between">
                  <div>
                    <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4" />
                    <div className="text-2xl font-bold mb-1">תקן אבטחה מחמיר</div>
                    <div className="text-slate-400 text-sm">מוכן לארגוני אנטרפרייז</div>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-black">SOC 2</div>
                    <div className="text-slate-400 mt-1">Type II Certified</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                סקייל ואמינות
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                "פלטפורמה שמחזיקה את כל האופרציה שלנו, בלי למצמץ."
              </h2>
              <div className="prose prose-lg text-slate-600">
                <p>
                  כאשר סוכנות הדיגיטל <strong>MediaIL</strong> הכפילה את מצבת הלקוחות שלה, הצוות קרס תחת העומס הניהולי.
                </p>
                <p>
                  פלואו אפשרה להם לבנות תשתיות נתונים המעבירות מידע בין פייסבוק, סיילספורס ומערכות חיוב – מיליוני פעולות בחודש שקרו בעבר באופן ידני, כעת מתבצעות באפס מאמץ ובאמינות מוחלטת.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
                  <img src="https://ui-avatars.com/api/?name=David+Levi&background=cbd5e1&color=334155" alt="דוד לוי" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">דוד לוי</div>
                  <div className="text-slate-500 text-sm">סמנכ"ל טכנולוגיות, MediaIL</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Profile-Based Pricing / Recommendations */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">איזה פתרון מתאים לצוות שלך?</h2>
            <p className="text-lg text-slate-600">אנחנו לא מאמינים במסלולים מורכבים. בחר את הפרופיל שמתאר אתכם הכי טוב.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative flex flex-col">
              <div className="mb-6">
                <div className="text-sm font-semibold text-blue-600 mb-2">פרופיל א'</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">צוות קטן שמתחיל להשתלט על הבלגן</h3>
                <p className="text-slate-500 min-h-[60px]">אתם צוות של עד 10 עובדים, והתחלתם להרגיש שהאקסלים והמיילים עוצרים אתכם מלהתקדם.</p>
              </div>
              
              <div className="bg-slate-50 rounded-2xl p-6 mb-8 mt-auto border border-slate-100">
                <div className="text-sm font-medium text-slate-500 mb-1">ההמלצה שלנו:</div>
                <div className="text-xl font-bold text-slate-900 mb-4">המסלול הבסיסי (Basic)</div>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span>עד 5,000 פעולות בחודש</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span>חיבור למערכות בסיסיות (Slack, Google)</span>
                  </li>
                </ul>
              </div>
              <a href="#" className="w-full block text-center py-3 px-4 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold hover:border-slate-300 hover:bg-slate-50 transition-colors">
                התחל עם Basic
              </a>
            </div>

            {/* Profile 2 - Highlighted */}
            <div className="bg-slate-900 rounded-3xl p-8 shadow-xl shadow-blue-900/10 border border-slate-800 transform md:-translate-y-4 relative flex flex-col">
              <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                הפרופיל הנפוץ ביותר
              </div>
              <div className="mb-6">
                <div className="text-sm font-semibold text-blue-400 mb-2">פרופיל ב'</div>
                <h3 className="text-2xl font-bold text-white mb-2">חברה שגדלה מהר וזקוקה לתשתיות</h3>
                <p className="text-slate-400 min-h-[60px]">אתם מגייסים עובדים, מחלקות חדשות נפתחות, וחייבים ליצור סטנדרט של תהליכים בין הצוותים.</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-2xl p-6 mb-8 mt-auto border border-slate-700">
                <div className="text-sm font-medium text-slate-400 mb-1">ההמלצה שלנו:</div>
                <div className="text-xl font-bold text-white mb-4">מסלול המקצוענים (Pro)</div>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                    <span>אוטומציות ללא הגבלה</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                    <span>חיבור ל-CRM ולמערכות פיננסיות</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                    <span>ניהול הרשאות מתקדם לצוותים</span>
                  </li>
                </ul>
              </div>
              <a href="#" className="w-full block text-center py-3 px-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20">
                התחל עם Pro
              </a>
            </div>

            {/* Profile 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative flex flex-col">
              <div className="mb-6">
                <div className="text-sm font-semibold text-blue-600 mb-2">פרופיל ג'</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">ארגון מורכב עם דרישות קפדניות</h3>
                <p className="text-slate-500 min-h-[60px]">ארגונים עם רגישות למידע, רגולציות מחמירות וצורך באבטחה ברמה הגבוהה ביותר ותמיכה צמודה.</p>
              </div>
              
              <div className="bg-slate-50 rounded-2xl p-6 mb-8 mt-auto border border-slate-100">
                <div className="text-sm font-medium text-slate-500 mb-1">ההמלצה שלנו:</div>
                <div className="text-xl font-bold text-slate-900 mb-4">מסלול ארגוני (Enterprise)</div>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span>SLA מובטח ו-Customer Success אישי</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span>SSO, Audit Logs ודרישות אבטחה</span>
                  </li>
                </ul>
              </div>
              <a href="#" className="w-full block text-center py-3 px-4 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold hover:border-slate-900 hover:text-slate-900 transition-colors">
                דבר עם נציג מכירות
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-blue-700 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            מוכנים להצטרף לחברות שכבר חסכו אלפי שעות?
          </h2>
          <p className="text-xl text-blue-100 mb-10 font-light max-w-2xl mx-auto">
            אל תתנו לתפעול שוטף לעכב את הצמיחה שלכם. צוות המומחים שלנו ישמח להראות לכם בדיוק אילו תהליכים אפשר לייעל אצלכם בארגון.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl shadow-blue-900/20 flex items-center justify-center gap-2 group">
              תאמו שיחת ייעוץ
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </a>
            <a href="#" className="bg-blue-700 text-white border border-blue-500 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-colors flex items-center justify-center">
              פתח חשבון חינם
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-sm leading-none">
                פ
              </div>
              <span className="font-bold text-xl tracking-tight text-white">פלואו</span>
            </div>
            <p className="text-sm">פלטפורמת האוטומציות המובילה לחברות וארגונים בישראל.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">מוצר</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">פיצ'רים</a></li>
              <li><a href="#" className="hover:text-white transition-colors">אינטגרציות</a></li>
              <li><a href="#" className="hover:text-white transition-colors">תמחור</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">משאבים</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">בלוג</a></li>
              <li><a href="#" className="hover:text-white transition-colors">מקרי מבחן</a></li>
              <li><a href="#" className="hover:text-white transition-colors">מרכז תמיכה</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">חברה</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">אודות</a></li>
              <li><a href="#" className="hover:text-white transition-colors">דרושים</a></li>
              <li><a href="#" className="hover:text-white transition-colors">צור קשר</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
          © {new Date().getFullYear()} פלואו טכנולוגיות בע"מ. כל הזכויות שמורות.
        </div>
      </footer>

    </div>
  );
}
