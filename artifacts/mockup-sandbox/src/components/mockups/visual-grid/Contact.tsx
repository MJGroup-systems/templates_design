import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const BASE = import.meta.env.BASE_URL;

export default function Contact() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    {
      q: "כמה זמן מראש צריך לשריין תאריך?",
      a: "לחתונות מומלץ לשריין תאריך 6-8 חודשים מראש. לצילומי סטודיו ותדמית ניתן לקבוע פגישה כשבועיים עד חודש מראש, בהתאם לזמינות."
    },
    {
      q: "האם אתם מגיעים לכל הארץ?",
      a: "כן! הסטודיו שלנו ממוקם בתל אביב, אך אנחנו מגיעים לצלם ולאפר בכל רחבי הארץ (בתוספת תשלום נסיעות אזורית)."
    },
    {
      q: "תוך כמה זמן מקבלים את התמונות?",
      a: "תמונות סטודיו נמסרות תוך 14 ימי עסקים. אלבומי חתונה וגלריות לאירועים נמסרים תוך עד 45 ימי עסקים מהאירוע."
    }
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-[#F9F9F8] text-[#1C1C1C] font-sans selection:bg-[#B79A88] selection:text-white flex flex-col">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white/90 backdrop-blur-md border-[#E5E5E5] py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">קליק<span className="text-[#B79A88]">.</span></div>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
            <a href={BASE + 'preview/visual-grid/Grid'} className="hover:text-[#B79A88] transition-colors">עבודות</a>
            <a href={BASE + 'preview/visual-grid/Services'} className="hover:text-[#B79A88] transition-colors">שירותים</a>
            <a href={BASE + 'preview/visual-grid/About'} className="hover:text-[#B79A88] transition-colors">הסטודיו</a>
            <a href={BASE + 'preview/visual-grid/Contact'} className="text-[#B79A88] transition-colors">צור קשר</a>
          </div>
          <button className="md:hidden">
            <div className="w-6 h-0.5 bg-current mb-1.5"></div>
            <div className="w-6 h-0.5 bg-current mb-1.5"></div>
            <div className="w-4 h-0.5 bg-current"></div>
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow pt-32 md:pt-48 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        {/* Left Side: Image & FAQ */}
        <div className="order-2 md:order-1 flex flex-col gap-16">
          <div className="relative w-full aspect-square bg-[#EAEAEA] overflow-hidden group">
            <img 
              src="/__mockup/images/visual-grid/couple.jpg" 
              alt="זוגיות והשראה" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-8">שאלות נפוצות</h3>
            <div className="space-y-8">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-[#D5D3CF] pb-6">
                  <h4 className="text-lg font-bold mb-3">{faq.q}</h4>
                  <p className="text-[#5A5A5A] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Text & Form (Integrated for the specific Contact Page feel) */}
        <div className="order-1 md:order-2">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            בואו ניצור יחד.
          </h1>
          <p className="text-lg md:text-xl text-[#5A5A5A] leading-relaxed mb-12">
            נשמח לשמוע מכם. מלאו את הטופס ונחזור אליכם עם כל הפרטים, בדרך לחוויה בלתי נשכחת.
          </p>

          <div className="bg-white p-8 md:p-10 border border-[#D5D3CF] mb-12 shadow-sm">
            <form className="space-y-8 flex flex-col" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium mb-2 text-[#5A5A5A]">שם מלא</label>
                <input 
                  type="text" 
                  className="w-full border-b border-[#D5D3CF] py-3 bg-transparent focus:outline-none focus:border-[#1C1C1C] transition-colors"
                  placeholder="ישראל ישראלי"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#5A5A5A]">טלפון</label>
                  <input 
                    type="tel" 
                    className="w-full border-b border-[#D5D3CF] py-3 bg-transparent focus:outline-none focus:border-[#1C1C1C] transition-colors"
                    placeholder="05x-xxxxxxx"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#5A5A5A]">אימייל</label>
                  <input 
                    type="email" 
                    className="w-full border-b border-[#D5D3CF] py-3 bg-transparent focus:outline-none focus:border-[#1C1C1C] transition-colors"
                    placeholder="name@example.com"
                    dir="ltr"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-[#5A5A5A]">סוג הפנייה</label>
                <select className="w-full border-b border-[#D5D3CF] py-3 bg-transparent focus:outline-none focus:border-[#1C1C1C] transition-colors text-[#1C1C1C]">
                  <option value="">בחרו נושא...</option>
                  <option value="wedding">צילומי חתונה ואירועים</option>
                  <option value="studio">צילומי סטודיו ותדמית</option>
                  <option value="makeup">איפור וביוטי</option>
                  <option value="other">אחר</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-[#5A5A5A]">הודעה</label>
                <textarea 
                  className="w-full border-b border-[#D5D3CF] py-3 bg-transparent focus:outline-none focus:border-[#1C1C1C] transition-colors resize-none h-32"
                  placeholder="ספרו לנו קצת על האירוע או הצרכים שלכם..."
                ></textarea>
              </div>
              <button className="bg-[#1C1C1C] text-white py-5 font-medium hover:bg-[#333333] transition-colors mt-4 w-full">
                שליחה
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold tracking-tight mb-2">פרטי קשר ישירים</h3>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white flex items-center justify-center border border-[#D5D3CF]">
                <Phone className="w-5 h-5 text-[#B79A88]" />
              </div>
              <div>
                <div className="text-sm text-[#5A5A5A]">טלפון</div>
                <div className="font-medium text-lg" dir="ltr">054-123-4567</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white flex items-center justify-center border border-[#D5D3CF]">
                <Mail className="w-5 h-5 text-[#B79A88]" />
              </div>
              <div>
                <div className="text-sm text-[#5A5A5A]">אימייל</div>
                <div className="font-medium text-lg">hello@clickstudio.co.il</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white flex items-center justify-center border border-[#D5D3CF]">
                <MapPin className="w-5 h-5 text-[#B79A88]" />
              </div>
              <div>
                <div className="text-sm text-[#5A5A5A]">כתובת הסטודיו</div>
                <div className="font-medium text-lg">הרצל 45, תל אביב</div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-4">
              <a href="#" className="w-12 h-12 bg-[#1C1C1C] text-white flex items-center justify-center hover:bg-[#B79A88] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-[#1C1C1C] text-white flex items-center justify-center hover:bg-[#B79A88] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Simplified Footer for Contact Page (since the form is main content) */}
      <footer className="bg-[#EAE8E3] py-12 px-6 md:px-12 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-[#8A8A8A]">
          <p>© {new Date().getFullYear()} קליק סטודיו. כל הזכויות שמורות.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#1C1C1C] transition-colors">תקנון האתר</a>
            <a href="#" className="hover:text-[#1C1C1C] transition-colors">הצהרת נגישות</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
