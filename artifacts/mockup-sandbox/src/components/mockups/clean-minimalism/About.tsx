import React from 'react';
import { Phone, Mail, MapPin, Target, Shield, Heart } from 'lucide-react';

export default function About() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#fafaf9] text-[#1c1917] font-sans selection:bg-[#d6e2db] selection:text-[#1c1917]">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#fafaf9]/80 backdrop-blur-md z-50 border-b border-[#e7e5e4]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight text-[#293d35]">
            ניקיון פלוס.
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#57534e]">
            <a href="#" className="hover:text-[#1c1917] transition-colors">בית</a>
            <a href="#services" className="hover:text-[#1c1917] transition-colors">שירותים</a>
            <a href="#about" className="text-[#1c1917] font-semibold transition-colors">אודות</a>
            <a href="#contact" className="hover:text-[#1c1917] transition-colors">צור קשר</a>
          </div>
          <div>
            <a href="#contact" className="hidden md:inline-flex items-center justify-center bg-[#293d35] text-white px-6 py-2.5 text-sm font-medium hover:bg-[#1f2e28] transition-colors">
              הזמנת שירות
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1c1917] leading-[1.1] mb-6">
            הסיפור שלנו: <br />
            להחזיר את השקט למרחב.
          </h1>
          <p className="text-lg md:text-xl text-[#57534e] leading-relaxed">
            הקמנו את 'ניקיון פלוס' מתוך הבנה עמוקה של הצורך במרחב נקי ומסודר בסביבה העירונית העמוסה.
            אנחנו לא רק מנקים, אנחנו יוצרים סביבה שמאפשרת לכם לנשום.
          </p>
        </div>
      </section>

      {/* Story & Team */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center mb-24">
          <div className="relative aspect-[4/3] w-full">
             <div className="absolute inset-0 bg-[#e7e5e4] animate-pulse rounded-sm" />
             <img 
               src="/__mockup/images/clean-team.jpg" 
               alt="הצוות שלנו" 
               className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-sm"
               loading="lazy"
             />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              צוות של מקצוענים.
            </h2>
            <p className="text-lg text-[#57534e] leading-relaxed mb-6">
              הצוות שלנו מורכב מאנשי מקצוע מיומנים ומוקפדים, שעברו הכשרה מעמיקה. אנחנו בוחרים את העובדים שלנו לא רק לפי כישורי הניקיון שלהם, אלא לפי רמת האמינות ותשומת הלב לפרטים.
            </p>
            <p className="text-lg text-[#57534e] leading-relaxed">
              כל חבר בצוות שלנו מחויב לסטנדרט הגבוה ביותר, תוך שמירה על דיסקרטיות וכבוד מלא לפרטיות ולרכוש שלכם.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">הערכים שמובילים אותנו</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: <Target className="w-8 h-8 text-[#293d35] mb-6" />,
                title: 'דיוק חסר פשרות',
                description: 'אנחנו לא מעגלים פינות. כל משימה מבוצעת ביסודיות, עם ירידה לפרטים הקטנים ביותר שיעשו את ההבדל.',
              },
              {
                icon: <Shield className="w-8 h-8 text-[#293d35] mb-6" />,
                title: 'אמינות ושקיפות',
                description: 'השקט הנפשי שלכם הוא בראש סדר העדיפויות שלנו. מהבטחת עמידה בזמנים ועד שמירה על הרכוש שלכם.',
              },
              {
                icon: <Heart className="w-8 h-8 text-[#293d35] mb-6" />,
                title: 'אחריות סביבתית',
                description: 'שימוש בחומרי ניקוי אקולוגיים וידידותיים לסביבה, לשמירה על הבריאות שלכם ועל כדור הארץ.',
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 md:p-10 rounded-sm border border-[#e7e5e4]">
                {value.icon}
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-[#57534e] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
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
