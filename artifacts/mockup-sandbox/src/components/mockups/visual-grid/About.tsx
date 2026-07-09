import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div dir="rtl" className="min-h-screen bg-[#F9F9F8] text-[#1C1C1C] font-sans selection:bg-[#B79A88] selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white/90 backdrop-blur-md border-[#E5E5E5] py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">קליק<span className="text-[#B79A88]">.</span></div>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
            <a href="#portfolio" className="hover:text-[#B79A88] transition-colors">עבודות</a>
            <a href="#services" className="hover:text-[#B79A88] transition-colors">שירותים</a>
            <a href="#about" className="hover:text-[#B79A88] transition-colors">הסטודיו</a>
            <a href="#contact" className="hover:text-[#B79A88] transition-colors">צור קשר</a>
          </div>
          <button className="md:hidden">
            <div className="w-6 h-0.5 bg-current mb-1.5"></div>
            <div className="w-6 h-0.5 bg-current mb-1.5"></div>
            <div className="w-4 h-0.5 bg-current"></div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            מאחורי העדשה.<br />
            <span className="text-[#B79A88]">הסיפור של קליק.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#5A5A5A] leading-relaxed max-w-xl mb-10">
            סטודיו קליק הוקם מתוך אהבה עמוקה לאסתטיקה, אמנות ואנשים. אנחנו כאן כדי להפוך רגעים חולפים לזיכרונות נצחיים בעזרת קומפוזיציה מדויקת ותאורה מושלמת.
          </p>
        </div>
      </header>

      {/* Main Story Section */}
      <section className="px-6 md:px-12 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="relative aspect-[4/5] bg-[#EAEAEA] group overflow-hidden">
            <img 
              src="/__mockup/images/visual-grid/team.jpg" 
              alt="צוות הסטודיו" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-8">יצירה משותפת, חזון אחד</h2>
            <div className="space-y-6 text-lg text-[#5A5A5A] leading-relaxed">
              <p>
                הכל התחיל מצילום במצלמת פילם ישנה וחלום ליצור מרחב שבו יופי פוגש אותנטיות. כיום, סטודיו קליק מאגד תחתיו צלמים, מאפרים ואנשי הפקה מובילים בתחומם.
              </p>
              <p>
                הגישה שלנו מינימליסטית, טבעית ומוקפדת. אנחנו מאמינים שאין צורך בהעמדות מאולצות או עריכה מוגזמת כשהבסיס הוא אמיתי. כל פריים נבחר בקפידה, כל קליק מחושב.
              </p>
              <p>
                מחתונות אינטימיות ועד הפקות אופנה מסחריות, הצוות שלנו מביא את אותה רמת מסירות, דיוק ותשוקה לכל פרויקט.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-[#1C1C1C] mb-2">10+</div>
                <div className="text-sm text-[#8A8A8A] uppercase tracking-widest font-bold">שנות ניסיון</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#1C1C1C] mb-2">2.5K</div>
                <div className="text-sm text-[#8A8A8A] uppercase tracking-widest font-bold">פרויקטים מוצלחים</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Sneak Peek */}
      <section className="bg-[#1C1C1C] text-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold tracking-tight mb-6">הבית שלנו</h2>
            <p className="text-[#A0A0A0] leading-relaxed mb-8">
              הסטודיו שלנו בתל אביב מעוצב בקווים נקיים עם המון אור טבעי. המרחב נוצר כדי לתת לכם תחושה של רוגע ונינוחות מהרגע הראשון שנכנסים.
            </p>
            <div className="w-12 h-[1px] bg-[#B79A88]"></div>
          </div>
          <div className="md:w-2/3 h-[400px] bg-[#2A2A2A] relative overflow-hidden group">
            <img 
              src="/__mockup/images/visual-grid/studio.jpg" 
              alt="חלל הסטודיו" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-[#EAE8E3] pt-24 pb-12 px-6 md:px-12 mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 mb-24">
          <div>
            <h2 className="text-4xl font-bold mb-6">בואו נדבר.</h2>
            <p className="text-[#5A5A5A] mb-12 max-w-sm">
              מחפשים צלם לאירוע? רוצה לקבוע איפור ערב? או סתם להתייעץ? השאירו פרטים ונחזור אליכם בהקדם.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white flex items-center justify-center border border-[#D5D3CF]">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-medium" dir="ltr">054-123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white flex items-center justify-center border border-[#D5D3CF]">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-medium">hello@clickstudio.co.il</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white flex items-center justify-center border border-[#D5D3CF]">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-medium">הרצל 45, תל אביב</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-10 border border-[#D5D3CF]">
            <form className="space-y-6 flex flex-col" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium mb-2 text-[#5A5A5A]">שם מלא</label>
                <input 
                  type="text" 
                  className="w-full border-b border-[#D5D3CF] py-3 bg-transparent focus:outline-none focus:border-[#1C1C1C] transition-colors"
                  placeholder="ישראל ישראלי"
                />
              </div>
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
                <label className="block text-sm font-medium mb-2 text-[#5A5A5A]">הודעה</label>
                <textarea 
                  className="w-full border-b border-[#D5D3CF] py-3 bg-transparent focus:outline-none focus:border-[#1C1C1C] transition-colors resize-none h-24"
                  placeholder="ספרו לנו קצת על מה שאתם מחפשים..."
                ></textarea>
              </div>
              <button className="bg-[#1C1C1C] text-white py-4 font-medium hover:bg-[#333333] transition-colors mt-4 w-full">
                שליחה
              </button>
            </form>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-[#D5D3CF] pt-8 text-sm text-[#8A8A8A]">
          <p>© {new Date().getFullYear()} קליק סטודיו. כל הזכויות שמורות.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#1C1C1C] transition-colors">אינסטגרם</a>
            <a href="#" className="hover:text-[#1C1C1C] transition-colors">פייסבוק</a>
            <a href="#" className="hover:text-[#1C1C1C] transition-colors">פינטרסט</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
