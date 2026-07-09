import React from "react";
import { 
  ShieldCheck, 
  Server, 
  Lock, 
  Check, 
  BarChart, 
  Users, 
  Building2, 
  PhoneCall,
  Activity,
  ArrowLeft,
  Menu
} from "lucide-react";

export default function EnterpriseTrust() {
  const BASE = import.meta.env.BASE_URL;

  return (
    <div dir="rtl" className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-900 selection:text-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-2xl tracking-tight">פלואו <span className="text-blue-500 text-sm font-medium tracking-normal border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 rounded-full ml-1 relative -top-1">Enterprise</span></span>
              </div>
              <div className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
                <a href="#platform" className="hover:text-white transition-colors">פלטפורמה</a>
                <a href="#security" className="hover:text-white transition-colors">אבטחה ותאימות</a>
                <a href="#compare" className="hover:text-white transition-colors">השוואת יכולות</a>
                <a href="#customers" className="hover:text-white transition-colors">לקוחות</a>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4 text-sm font-medium">
              <a href="#login" className="text-slate-300 hover:text-white transition-colors">התחברות לקוחות</a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md transition-all font-semibold flex items-center gap-2">
                קבע שיחת יעוץ
                <PhoneCall className="w-4 h-4" />
              </button>
            </div>
            <div className="md:hidden">
              <button className="text-slate-300 p-2">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sm font-medium text-blue-400">
                <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                זמינות מובטחת של 99.99% SLA
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                אוטומציה תהליכית לארגונים <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-blue-600">בסביבה מאובטחת</span>
              </h1>
              
              <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                תשתית ה-No-Code של פלואו מאפשרת לארגוני אנטרפרייז לבנות, לנהל ולהרחיב תהליכי ליבה, תוך עמידה בתקני האבטחה המחמירים ביותר. עם אפשרות לאירוח מקומי (On-Prem) ושליטה מלאה בנתונים.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md transition-all font-semibold text-lg flex justify-center items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                  קבע הדגמה לארגון
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white px-8 py-4 rounded-md transition-all font-semibold text-lg flex justify-center items-center">
                  קרא את דוח האבטחה (SOC2)
                </button>
              </div>

              {/* Trust Signals */}
              <div className="pt-8 border-t border-slate-800 mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-slate-300 font-semibold">
                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                    SOC 2 Type II
                  </div>
                  <span className="text-xs text-slate-500">מוסמך מבוקר</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-slate-300 font-semibold">
                    <Lock className="w-5 h-5 text-blue-400" />
                    ISO 27001
                  </div>
                  <span className="text-xs text-slate-500">תקן אבטחת מידע</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-slate-300 font-semibold">
                    <Server className="w-5 h-5 text-indigo-400" />
                    GDPR
                  </div>
                  <span className="text-xs text-slate-500">תאימות פרטיות מלאה</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-slate-300 font-semibold">
                    <Building2 className="w-5 h-5 text-slate-400" />
                    Local Data
                  </div>
                  <span className="text-xs text-slate-500">שמירת נתונים בישראל</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-slate-800 rounded-xl blur opacity-30"></div>
              <div className="relative rounded-xl border border-slate-800 bg-slate-950 p-2 shadow-2xl">
                <img 
                  src={`${BASE}/images/flow-enterprise-dashboard.png`}
                  alt="ממשק פלואו אנטרפרייז" 
                  className="rounded-lg w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/800x600/1e293b/94a3b8?text=Flow+Enterprise+Dashboard";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-b border-slate-900 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-slate-500 mb-8 uppercase tracking-widest">ארגונים מובילים כבר סומכים על התשתית שלנו</p>
          <div className="flex flex-wrap justify-center gap-12 sm:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos represented by stylized text for the mockup */}
            <span className="text-2xl font-bold font-serif">Harel Insurance</span>
            <span className="text-2xl font-black">BANK<span className="font-light">LEUMI</span></span>
            <span className="text-2xl font-bold tracking-tighter">EL AL</span>
            <span className="text-2xl font-extrabold italic">Techem</span>
            <span className="text-2xl font-bold uppercase tracking-widest">Klal</span>
          </div>
        </div>
      </section>

      {/* Security Architecture */}
      <section id="security" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>
              <img 
                  src={`${BASE}/images/flow-security-architecture.png`}
                  alt="ארכיטקטורת אבטחה של פלואו" 
                  className="rounded-xl border border-slate-800 shadow-2xl relative z-10 w-full"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/800x800/1e293b/94a3b8?text=Security+Architecture";
                  }}
                />
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                ארכיטקטורה שנבנתה מראש עבור <span className="text-blue-500">תאימות ופרטיות</span>
              </h2>
              <p className="text-slate-400 text-lg">
                אנחנו מבינים שמידע ארגוני הוא הנכס הרגיש ביותר שלכם. לכן בנינו את פלואו עם שכבות הגנה מרובות, בידוד נתונים, ואפשרויות פריסה גמישות.
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-900/30 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <Server className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-200 mb-1">אירוח מקומי (On-Premises) או ענן מבודד</h3>
                    <p className="text-slate-500">בחרו בין פריסה בשרתי הארגון מאחורי חומת האש שלכם (VPC), או בענן פרטי ייעודי בישראל להבטחת עמידה ברגולציות הנתונים המקומיות.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-900/30 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <Lock className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-200 mb-1">הצפנה מקצה לקצה (E2EE)</h3>
                    <p className="text-slate-500">כל הנתונים העוברים במערכת מוצפנים במנוחה (AES-256) ובתנועה (TLS 1.3), עם ניהול מפתחות הצפנה עצמאי (BYOK) הזמין ללקוחות Enterprise.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-900/30 border border-purple-500/30 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-200 mb-1">בקרת גישה (RBAC) ו-SSO</h3>
                    <p className="text-slate-500">שליטה גרנולרית בהרשאות משתמשים. אינטגרציה מובנית עם Okta, Azure AD, Google Workspace ותמיכה בתקני SAML ו-OIDC.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive - Enterprise focus */}
      <section className="py-24 bg-slate-900/50 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">מנוע אוטומציה שלא מתפשר על שליטה</h2>
            <p className="text-lg text-slate-400">העצימו את צוותי הפיתוח והתפעול שלכם עם כלים עוצמתיים שמאפשרים שקיפות מלאה ובקרה על כל תהליך שרץ בארגון.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 hover:border-blue-500/50 transition-colors">
              <BarChart className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">יומני ביקורת מקיפים (Audit Logs)</h3>
              <p className="text-slate-500">תיעוד מלא של כל פעולה, שינוי קונפיגורציה, והרצת תהליך. ייצוא אוטומטי למערכות SIEM כגון Splunk ו-Datadog למעקב ואנליזה.</p>
            </div>
            
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 hover:border-blue-500/50 transition-colors">
              <Activity className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">ניטור ביצועים והתראות</h3>
              <p className="text-slate-500">דשבורד מתקדם לניטור בריאות התהליכים בזמן אמת. הגדרת התראות מותאמות אישית לערוצי Slack/Teams בעת זיהוי חריגות או כשלים.</p>
            </div>
            
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 hover:border-blue-500/50 transition-colors">
              <ShieldCheck className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">סביבות פיתוח מבודדות (Environments)</h3>
              <p className="text-slate-500">ניהול מחזור חיים שלם (Dev, Test, Prod) עבור תהליכי האוטומציה. מנגנון אישורים (Approvals) לפני העברה לסביבת ייצור.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="compare" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">השוואת יכולות לצוותים וארגונים</h2>
            <p className="text-lg text-slate-400">אנו מציעים מסלולים גמישים המתאימים לדרישות האבטחה והגודל של הארגון שלך.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr>
                  <th className="w-1/3 p-6 border-b border-slate-800 bg-slate-950/50 text-xl text-slate-300 font-bold">יכולות ופיצ'רים</th>
                  <th className="w-1/3 p-6 border-b border-slate-800 bg-slate-900/30 text-xl font-bold text-slate-200">
                    <div className="mb-1">Advanced</div>
                    <div className="text-sm font-normal text-slate-500">לצוותים ומחלקות בצמיחה</div>
                  </th>
                  <th className="w-1/3 p-6 border-b-2 border-blue-600 bg-blue-900/10 text-xl font-bold text-blue-400">
                    <div className="mb-1">Enterprise</div>
                    <div className="text-sm font-normal text-blue-300">לארגונים גדולים ותאגידים</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50 text-slate-400">
                {/* Section 1 */}
                <tr className="bg-slate-900/50">
                  <td colSpan={3} className="p-4 text-sm font-bold text-slate-300">אבטחה ותאימות</td>
                </tr>
                <tr className="hover:bg-slate-900/30 transition-colors">
                  <td className="p-6">הצפנת נתונים (At Rest & In Transit)</td>
                  <td className="p-6"><Check className="w-5 h-5 text-emerald-500" /></td>
                  <td className="p-6 bg-blue-900/5"><Check className="w-5 h-5 text-blue-500" /></td>
                </tr>
                <tr className="hover:bg-slate-900/30 transition-colors">
                  <td className="p-6">Single Sign-On (SSO / SAML 2.0)</td>
                  <td className="p-6 text-slate-600">-</td>
                  <td className="p-6 bg-blue-900/5"><Check className="w-5 h-5 text-blue-500" /></td>
                </tr>
                <tr className="hover:bg-slate-900/30 transition-colors">
                  <td className="p-6">ניהול הרשאות מתקדם (RBAC)</td>
                  <td className="p-6 text-slate-600">-</td>
                  <td className="p-6 bg-blue-900/5"><Check className="w-5 h-5 text-blue-500" /></td>
                </tr>
                <tr className="hover:bg-slate-900/30 transition-colors">
                  <td className="p-6">אופציית On-Premise או VPC</td>
                  <td className="p-6 text-slate-600">-</td>
                  <td className="p-6 bg-blue-900/5"><Check className="w-5 h-5 text-blue-500" /></td>
                </tr>

                {/* Section 2 */}
                <tr className="bg-slate-900/50">
                  <td colSpan={3} className="p-4 text-sm font-bold text-slate-300">תפעול וניהול</td>
                </tr>
                <tr className="hover:bg-slate-900/30 transition-colors">
                  <td className="p-6">היסטוריית הרצות (Log Retention)</td>
                  <td className="p-6">30 ימים</td>
                  <td className="p-6 bg-blue-900/5 text-blue-400 font-semibold">ללא הגבלת זמן</td>
                </tr>
                <tr className="hover:bg-slate-900/30 transition-colors">
                  <td className="p-6">סביבות פיתוח (Dev/Test/Prod)</td>
                  <td className="p-6 text-slate-600">-</td>
                  <td className="p-6 bg-blue-900/5"><Check className="w-5 h-5 text-blue-500" /></td>
                </tr>
                <tr className="hover:bg-slate-900/30 transition-colors">
                  <td className="p-6">ייצוא לוגים למערכות SIEM</td>
                  <td className="p-6 text-slate-600">-</td>
                  <td className="p-6 bg-blue-900/5"><Check className="w-5 h-5 text-blue-500" /></td>
                </tr>

                {/* Section 3 */}
                <tr className="bg-slate-900/50">
                  <td colSpan={3} className="p-4 text-sm font-bold text-slate-300">תמיכה ושירות</td>
                </tr>
                <tr className="hover:bg-slate-900/30 transition-colors">
                  <td className="p-6">זמן תגובה מובטח (SLA)</td>
                  <td className="p-6">תמיכה בשעות הפעילות</td>
                  <td className="p-6 bg-blue-900/5 text-blue-400 font-semibold">24/7 (זמן תגובה של שעה)</td>
                </tr>
                <tr className="hover:bg-slate-900/30 transition-colors">
                  <td className="p-6">מנהל תיק לקוח ייעודי (CSM)</td>
                  <td className="p-6 text-slate-600">-</td>
                  <td className="p-6 bg-blue-900/5"><Check className="w-5 h-5 text-blue-500" /></td>
                </tr>
                
                {/* CTA Row */}
                <tr>
                  <td className="p-6"></td>
                  <td className="p-6">
                    <button className="w-full bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-md transition-colors font-medium">
                      צור קשר לפרטים
                    </button>
                  </td>
                  <td className="p-6 bg-blue-900/5 rounded-bl-xl">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors font-semibold shadow-lg shadow-blue-900/20">
                      קבע שיחת אפיון
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20 -z-10"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/30 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">מוכנים לשדרג את התשתיות שלכם?</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            צוות המומחים שלנו מוכן להדגים כיצד פלואו יכולה להתאים לדרישות המחמירות ביותר של הארגון שלך.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-md transition-all font-semibold text-lg flex justify-center items-center gap-3">
              דבר עם מחלקת מכירות
              <PhoneCall className="w-5 h-5" />
            </button>
            <button className="bg-transparent hover:bg-slate-900 border border-slate-700 text-white px-10 py-5 rounded-md transition-all font-semibold text-lg">
              עיין בתיעוד למפתחים
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 pt-16 pb-8 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6 text-white">
                <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center">
                  <Activity className="w-3 h-3 text-white" />
                </div>
                <span className="font-bold text-lg tracking-tight">פלואו</span>
              </div>
              <p className="mb-4">פלטפורמת אוטומציה ארגונית מאובטחת, נבנתה במיוחד לדרישות תאגידיות.</p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">מוצר</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">פלטפורמה</a></li>
                <li><a href="#" className="hover:text-white transition-colors">אבטחה</a></li>
                <li><a href="#" className="hover:text-white transition-colors">אינטגרציות</a></li>
                <li><a href="#" className="hover:text-white transition-colors">On-Premise</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">משאבים</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">תיעוד API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">מרכז תמיכה</a></li>
                <li><a href="#" className="hover:text-white transition-colors">סטטוס מערכת</a></li>
                <li><a href="#" className="hover:text-white transition-colors">פורטל שותפים</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">חברה</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">אודות</a></li>
                <li><a href="#" className="hover:text-white transition-colors">קריירה</a></li>
                <li><a href="#" className="hover:text-white transition-colors">בלוג הנדסה</a></li>
                <li><a href="#" className="hover:text-white transition-colors">צור קשר</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} פלואו טכנולוגיות בע"מ. כל הזכויות שמורות.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">תנאי שימוש</a>
              <a href="#" className="hover:text-white transition-colors">מדיניות פרטיות</a>
              <a href="#" className="hover:text-white transition-colors">אבטחת מידע</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
