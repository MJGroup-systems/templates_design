import React from 'react';
import { Phone, Mail, MapPin, Check } from 'lucide-react';

export default function Services() {
  const BASE = import.meta.env.BASE_URL;
  return (
    <div dir="rtl" className="min-h-screen bg-[#fafaf9] text-[#1c1917] font-sans selection:bg-[#d6e2db] selection:text-[#1c1917]">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#fafaf9]/80 backdrop-blur-md z-50 border-b border-[#e7e5e4]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight text-[#293d35]">
            ניקיון פלוס.
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#57534e]">
            <a href={`${BASE}preview/clean-minimalism/Clean`} className="hover:text-[#1c1917] transition-colors">בית</a>
            <a href={`${BASE}preview/clean-minimalism/Services`} className="text-[#1c1917] font-semibold transition-colors">שירותים</a>
            <a href={`${BASE}preview/clean-minimalism/About`} className="hover:text-[#1c1917] transition-colors">אודות</a>
            <a href={`${BASE}preview/clean-minimalism/Contact`} className="hover:text-[#1c1917] transition-colors">צור קשר</a>
          </div>
          <div>
            <a href={`${BASE}preview/clean-minimalism/Contact`} className="hidden md:inline-flex items-center justify-center bg-[#293d35] text-white px-6 py-2.5 text-sm font-medium hover:bg-[#1f2e28] transition-colors">
              הזמנת שירות
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1c1917] leading-[1.1] mb-6">
            שירותים בהתאמה אישית.
          </h1>
          <p className="text-lg md:text-xl text-[#57534e] leading-relaxed">
            מהברקת דירות לפני אכלוס, דרך תחזוקה שוטפת של משרדים, ועד ניקוי יסודי של חללים.
            אנחנו מספקים מעטפת מלאה תחת קורת גג אחת.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Service 1 */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center mb-24">
            <div className="relative aspect-[4/3] w-full">
               <div className="absolute inset-0 bg-[#e7e5e4] animate-pulse rounded-sm" />
               <img 
                 src="/__mockup/images/clean-service-1.jpg" 
                 alt="ניקיון דירות ובתים" 
                 className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-sm"
                 loading="lazy"
               />
            </div>
            <div>
              <div className="inline-block bg-[#d6e2db] text-[#293d35] px-3 py-1 text-sm font-medium rounded-sm mb-6">
                ללקוחות פרטיים
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                ניקיון דירות ובתים
              </h2>
              <p className="text-lg text-[#57534e] leading-relaxed mb-6">
                שירות מקיף שמחזיר לבית שלכם את תחושת הניקיון והרעננות. מתאים כתחזוקה שוטפת או כניקיון יסודי ותקופתי (לפני חגים, מעבר דירה וכדומה).
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'שאיבה ושטיפה יסודית של כל החדרים',
                  'ניקוי והברקת חלונות, תריסים ומסילות',
                  'ניקוי יסודי של חדרי רחצה וחיטוי כלים סניטריים',
                  'ניקוי מטבחים, ארונות ומשטחי עבודה'
                ].map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start text-base text-[#57534e]">
                    <Check className="w-5 h-5 ml-3 text-[#293d35] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-2xl font-bold text-[#1c1917]">
                החל מ-350 ₪ <span className="text-base font-normal text-[#78716c]">/ לביקור</span>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center mb-24">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-[#e7e5e4] text-[#57534e] px-3 py-1 text-sm font-medium rounded-sm mb-6">
                ללקוחות עסקיים
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                ניקיון משרדים ועסקים
              </h2>
              <p className="text-lg text-[#57534e] leading-relaxed mb-6">
                סביבת עבודה נקייה היא המפתח לפרודוקטיביות. אנחנו דואגים למשרד שלכם אחרי או לפני שעות הפעילות, כדי שלא תרגישו אותנו, אלא רק את התוצאות.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'ריקון פחים ומיון למחזור',
                  'חיטוי משטחי עבודה, מקלדות וטלפונים',
                  'תחזוקה שוטפת של מטבחונים וחדרי אוכל',
                  'אספקת מוצרי טואלטיקה וחומרי ניקוי'
                ].map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start text-base text-[#57534e]">
                    <Check className="w-5 h-5 ml-3 text-[#293d35] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-2xl font-bold text-[#1c1917]">
                החל מ-1,500 ₪ <span className="text-base font-normal text-[#78716c]">/ לחודש</span>
              </div>
            </div>
            <div className="order-1 md:order-2 relative aspect-[4/3] w-full">
               <div className="absolute inset-0 bg-[#e7e5e4] animate-pulse rounded-sm" />
               <img 
                 src="/__mockup/images/clean-service-2.jpg" 
                 alt="ניקיון משרדים" 
                 className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-sm"
                 loading="lazy"
               />
            </div>
          </div>
          
          {/* Service 3 */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="relative aspect-[4/3] w-full">
               <div className="absolute inset-0 bg-[#e7e5e4] animate-pulse rounded-sm" />
               <img 
                 src="/__mockup/images/clean-detail.jpg" 
                 alt="ניקיון לאחר שיפוץ" 
                 className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-sm"
                 loading="lazy"
               />
            </div>
            <div>
              <div className="inline-block bg-[#d6e2db] text-[#293d35] px-3 py-1 text-sm font-medium rounded-sm mb-6">
                פרויקטים מיוחדים
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                ניקיון לאחר שיפוץ או בנייה
              </h2>
              <p className="text-lg text-[#57534e] leading-relaxed mb-6">
                הכנת הנכס לכניסה חלקה ונעימה לאחר תהליך הבנייה. הסרת שאריות של צבע, חומרי בניין ואבק עקשן, תוך שמירה קפדנית על המשטחים החדשים.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'הסרת כתמי צבע ורובה קשים',
                  'שאיבת אבק בנייה יסודית מכל הפינות',
                  'פוליש וליטוש רצפות (במידת הצורך)',
                  'חיטוי מלא של חלל המגורים לפני כניסה'
                ].map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start text-base text-[#57534e]">
                    <Check className="w-5 h-5 ml-3 text-[#293d35] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-2xl font-bold text-[#1c1917]">
                החל מ-1,200 ₪ <span className="text-base font-normal text-[#78716c]">/ לפרויקט</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#1c1917] text-white pt-24 pb-12 px-6">
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
                <label htmlFor="name" className="block text-sm font-medium text-[#a8a29e] mb-2">שם מלא</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-[#292524] border border-[#44403c] text-white px-4 py-3 focus:outline-none focus:border-[#d6e2db] transition-colors rounded-sm"
                  placeholder="ישראל ישראלי"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#a8a29e] mb-2">טלפון</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full bg-[#292524] border border-[#44403c] text-white px-4 py-3 focus:outline-none focus:border-[#d6e2db] transition-colors rounded-sm text-right"
                  placeholder="05X-XXXXXXX"
                  dir="ltr"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#a8a29e] mb-2">איך נוכל לעזור?</label>
                <textarea 
                  id="message" 
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
