import React from 'react';
import { Check, Phone, Mail, MapPin, ArrowLeft, Star } from 'lucide-react';

export default function CleanMinimalismMockup() {
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
            <a href={`${BASE}preview/clean-minimalism/Clean`} className="text-[#1c1917] font-semibold transition-colors">בית</a>
            <a href={`${BASE}preview/clean-minimalism/Services`} className="hover:text-[#1c1917] transition-colors">שירותים</a>
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
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1c1917] leading-[1.1] mb-6">
              מרחב נקי, <br />
              ראש שקט.
            </h1>
            <p className="text-lg md:text-xl text-[#57534e] leading-relaxed mb-10">
              שירותי ניקיון מוקפדים לבתים ומשרדים. אנחנו לוקחים על עצמנו את העבודה הקשה, כדי שאתם תוכלו להתמקד במה שחשוב באמת.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`${BASE}preview/clean-minimalism/Contact`} className="inline-flex items-center justify-center bg-[#293d35] text-white px-8 py-4 text-base font-medium hover:bg-[#1f2e28] transition-colors group">
                תיאום ייעוץ חינם
                <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] md:aspect-square w-full">
            <div className="absolute inset-0 bg-[#e7e5e4] animate-pulse rounded-sm" />
            <img 
              src="/__mockup/images/clean-hero.jpg" 
              alt="סלון מודרני ונקי" 
              className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-sm"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">השירותים שלנו</h2>
            <p className="text-[#57534e] text-lg max-w-2xl">
              פתרונות ניקיון מותאמים אישית, המבוצעים על ידי צוות מקצועי ומיומן עם חומרי הניקוי האיכותיים ביותר.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: 'ניקיון בתים ודירות',
                description: 'ניקיון יסודי ותקופתי, החל מתחזוקה שוטפת ועד ניקיון יסודי של חלונות, תריסים ופאנלים.',
                features: ['צוות קבוע ואמין', 'חומרי ניקוי אקולוגיים', 'גמישות בשעות']
              },
              {
                title: 'ניקיון משרדים',
                description: 'סביבת עבודה נקייה ומזמינה המעודדת פרודוקטיביות ומשאירה רושם מצוין על לקוחות.',
                features: ['ניקיון לאחר שעות הפעילות', 'אספקת מוצרי טואלטיקה', 'תחזוקת מטבחים']
              },
              {
                title: 'ניקיון לאחר שיפוץ',
                description: 'הסרת שאריות צבע, רובה ואבק בנייה. הכנת הנכס לכניסה חלקה ונעימה, ללא מאמץ מצידכם.',
                features: ['מכשור מתקדם', 'פוליש וליטוש רצפות', 'הסרת כתמים קשים']
              }
            ].map((service, index) => (
              <div key={index} className="group cursor-default border-t border-[#e7e5e4] pt-8">
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-[#57534e] leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm text-[#78716c]">
                      <Check className="w-4 h-4 ml-3 text-[#293d35]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature / Philosophy */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="order-2 md:order-1 relative aspect-[4/3] w-full">
             <div className="absolute inset-0 bg-[#e7e5e4] animate-pulse rounded-sm" />
             <img 
               src="/__mockup/images/clean-detail.jpg" 
               alt="תקריב של משטח עבודה נקי" 
               className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-sm"
               loading="lazy"
             />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              תשומת לב לפרטים הקטנים ביותר.
            </h2>
            <p className="text-lg text-[#57534e] leading-relaxed mb-6">
              אנחנו מאמינים שניקיון אמיתי נמדד בפינות הנסתרות. הגישה שלנו משלבת יסודיות חסרת פשרות עם כבוד למרחב האישי שלכם.
            </p>
            <p className="text-lg text-[#57534e] leading-relaxed">
              כל חבר צוות עובר הכשרה מקיפה, ואנחנו משתמשים רק בציוד ובחומרים הבטוחים והיעילים ביותר, לשמירה על הנכס והבריאות שלכם.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-[#293d35] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-center">מה הלקוחות שלנו אומרים</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-[#1f2e28] p-8 md:p-10 rounded-sm">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-white text-white" />)}
              </div>
              <p className="text-lg leading-relaxed mb-6 opacity-90">
                "רמת הניקיון והיסודיות של הצוות פשוט יוצאת דופן. הם מגיעים בזמן, עובדים בשקט, ומשאירים את המשרד שלנו מבריק. מומלץ בחום."
              </p>
              <div className="font-medium">מיכל כהן, מנהלת משרד</div>
            </div>
            <div className="bg-[#1f2e28] p-8 md:p-10 rounded-sm">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-white text-white" />)}
              </div>
              <p className="text-lg leading-relaxed mb-6 opacity-90">
                "אחרי שיפוץ ארוך ומייגע, ניקיון פלוס החזירו לנו את השפיות. הדירה הייתה מלאה באבק בנייה, ותוך יום אחד הכל הבריק. שירות מקצועי ואדיב."
              </p>
              <div className="font-medium">דוד לוי, תל אביב</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
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
