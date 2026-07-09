import React from 'react';
import { Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';

export default function Contact() {
  const BASE = import.meta.env.BASE_URL;
  return (
    <div dir="rtl" className="min-h-screen bg-[#fafaf9] text-[#1c1917] font-sans selection:bg-[#d6e2db] selection:text-[#1c1917] flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#fafaf9]/80 backdrop-blur-md z-50 border-b border-[#e7e5e4]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight text-[#293d35]">
            ניקיון פלוס.
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#57534e]">
            <a href={`${BASE}preview/clean-minimalism/Clean`} className="hover:text-[#1c1917] transition-colors">בית</a>
            <a href={`${BASE}preview/clean-minimalism/Services`} className="hover:text-[#1c1917] transition-colors">שירותים</a>
            <a href={`${BASE}preview/clean-minimalism/About`} className="hover:text-[#1c1917] transition-colors">אודות</a>
            <a href={`${BASE}preview/clean-minimalism/Contact`} className="text-[#1c1917] font-semibold transition-colors">צור קשר</a>
          </div>
          <div>
            <a href="#contact" className="hidden md:inline-flex items-center justify-center bg-[#293d35] text-white px-6 py-2.5 text-sm font-medium hover:bg-[#1f2e28] transition-colors">
              הזמנת שירות
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-32 pb-24 px-6 flex items-center">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1c1917] leading-[1.1] mb-6">
              דברו איתנו.
            </h1>
            <p className="text-[#57534e] text-xl mb-12 max-w-md leading-relaxed">
              הצעד הראשון למרחב נקי ורגוע מתחיל כאן. השאירו פרטים ונחזור אליכם בהקדם עם הצעה מותאמת אישית.
            </p>
            
            <div className="space-y-8 bg-white p-8 md:p-10 border border-[#e7e5e4] rounded-sm">
              <h3 className="text-xl font-bold mb-6">פרטי התקשרות</h3>
              <div className="flex items-center gap-6 text-[#57534e]">
                <div className="w-12 h-12 bg-[#d6e2db] flex items-center justify-center rounded-sm text-[#293d35]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-[#78716c] mb-1">טלפון</div>
                  <div className="text-lg font-medium text-[#1c1917]" dir="ltr">050-123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-[#57534e]">
                <div className="w-12 h-12 bg-[#d6e2db] flex items-center justify-center rounded-sm text-[#293d35]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-[#78716c] mb-1">דוא"ל</div>
                  <div className="text-lg font-medium text-[#1c1917]">hello@nikayonplus.co.il</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-[#57534e]">
                <div className="w-12 h-12 bg-[#d6e2db] flex items-center justify-center rounded-sm text-[#293d35]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-[#78716c] mb-1">כתובת</div>
                  <div className="text-lg font-medium text-[#1c1917]">הרצל 45, תל אביב</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-12 border border-[#e7e5e4] rounded-sm shadow-sm">
            <h2 className="text-2xl font-bold mb-8">השאירו פרטים</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-[#57534e] mb-2">שם מלא</label>
                <input 
                  type="text" 
                  id="contact-name" 
                  className="w-full bg-[#fafaf9] border border-[#e7e5e4] text-[#1c1917] px-4 py-3 focus:outline-none focus:border-[#293d35] focus:ring-1 focus:ring-[#293d35] transition-all rounded-sm"
                  placeholder="ישראל ישראלי"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-medium text-[#57534e] mb-2">טלפון</label>
                <input 
                  type="tel" 
                  id="contact-phone" 
                  className="w-full bg-[#fafaf9] border border-[#e7e5e4] text-[#1c1917] px-4 py-3 focus:outline-none focus:border-[#293d35] focus:ring-1 focus:ring-[#293d35] transition-all rounded-sm text-right"
                  placeholder="05X-XXXXXXX"
                  dir="ltr"
                />
              </div>
              <div>
                <label htmlFor="contact-serviceType" className="block text-sm font-medium text-[#57534e] mb-2">סוג שירות מבוקש</label>
                <select 
                  id="contact-serviceType" 
                  className="w-full bg-[#fafaf9] border border-[#e7e5e4] text-[#1c1917] px-4 py-3 focus:outline-none focus:border-[#293d35] focus:ring-1 focus:ring-[#293d35] transition-all rounded-sm appearance-none"
                >
                  <option value="">בחרו שירות...</option>
                  <option value="home">ניקיון דירות ובתים</option>
                  <option value="office">ניקיון משרדים</option>
                  <option value="post-reno">ניקיון לאחר שיפוץ</option>
                  <option value="other">אחר</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-[#57534e] mb-2">איך נוכל לעזור?</label>
                <textarea 
                  id="contact-message" 
                  rows={4}
                  className="w-full bg-[#fafaf9] border border-[#e7e5e4] text-[#1c1917] px-4 py-3 focus:outline-none focus:border-[#293d35] focus:ring-1 focus:ring-[#293d35] transition-all rounded-sm resize-none"
                  placeholder="ספרו לנו על הצרכים שלכם..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#293d35] text-white font-medium text-lg px-8 py-4 hover:bg-[#1f2e28] transition-colors rounded-sm flex justify-center items-center gap-2 group"
              >
                שליחת הודעה
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-[#1c1917] text-white pt-24 pb-12 px-6 mt-auto">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">דברו איתנו.</h2>
            <p className="text-[#a8a29e] text-lg mb-10 max-w-md">
              נשמח לשמוע מכם ולהתאים עבורכם את חבילת הניקיון המושלמת. השאירו פרטים ונחזור אליכם בהקדם.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-[#d6e2db]">
                <Phone className="w-5 h-5" />
                <span className="text-lg" dir="ltr">050-123-4567</span>
              </div>
              <div className="flex items-center gap-4 text-[#d6e2db]">
                <Mail className="w-5 h-5" />
                <span className="text-lg">hello@nikayonplus.co.il</span>
              </div>
              <div className="flex items-center gap-4 text-[#d6e2db]">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">הרצל 45, תל אביב</span>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="footer-name" className="block text-sm font-medium text-[#a8a29e] mb-2">שם מלא</label>
                <input 
                  type="text" 
                  id="footer-name" 
                  className="w-full bg-[#292524] border border-[#44403c] text-white px-4 py-3 focus:outline-none focus:border-[#d6e2db] transition-colors rounded-sm"
                  placeholder="ישראל ישראלי"
                />
              </div>
              <div>
                <label htmlFor="footer-phone" className="block text-sm font-medium text-[#a8a29e] mb-2">טלפון</label>
                <input 
                  type="tel" 
                  id="footer-phone" 
                  className="w-full bg-[#292524] border border-[#44403c] text-white px-4 py-3 focus:outline-none focus:border-[#d6e2db] transition-colors rounded-sm text-right"
                  placeholder="05X-XXXXXXX"
                  dir="ltr"
                />
              </div>
              <div>
                <label htmlFor="footer-message" className="block text-sm font-medium text-[#a8a29e] mb-2">איך נוכל לעזור?</label>
                <textarea 
                  id="footer-message" 
                  rows={4}
                  className="w-full bg-[#292524] border border-[#44403c] text-white px-4 py-3 focus:outline-none focus:border-[#d6e2db] transition-colors rounded-sm resize-none"
                  placeholder="ספרו לנו על הצרכים שלכם..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-white text-[#1c1917] font-bold text-lg px-8 py-4 hover:bg-[#d6e2db] transition-colors rounded-sm"
              >
                שליחת הודעה
              </button>
            </form>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-[#292524] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#78716c]">
          <div>© {new Date().getFullYear()} ניקיון פלוס. כל הזכויות שמורות.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">תנאי שימוש</a>
            <a href="#" className="hover:text-white transition-colors">מדיניות פרטיות</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
