import React, { useEffect, useState } from 'react';
import { Camera, Sparkles, CalendarHeart, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';

// Using a placeholder component structure for standard tier
export default function ClickStudioGrid() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolio = [
    { src: '/__mockup/images/visual-grid/bride.jpg', title: 'כלות', span: 'col-span-1 row-span-2' },
    { src: '/__mockup/images/visual-grid/makeup.jpg', title: 'ביוטי ואיפור', span: 'col-span-1 row-span-1' },
    { src: '/__mockup/images/visual-grid/fashion.jpg', title: 'אופנה', span: 'col-span-1 row-span-1' },
    { src: '/__mockup/images/visual-grid/couple.jpg', title: 'זוגיות', span: 'col-span-2 row-span-1' },
    { src: '/__mockup/images/visual-grid/family.jpg', title: 'משפחה', span: 'col-span-1 row-span-1' },
    { src: '/__mockup/images/visual-grid/corporate.jpg', title: 'תדמית', span: 'col-span-1 row-span-1' },
  ];

  const services = [
    { icon: Camera, title: 'צילומי סטודיו', desc: 'צילומי תדמית, היריון, משפחה ופורטרטים אישיים באווירה מקצועית ונינוחה.' },
    { icon: Sparkles, title: 'איפור מקצועי', desc: 'איפור ערב, כלות והפקות אופנה. שימוש בחומרים האיכותיים ביותר לעמידות מושלמת.' },
    { icon: CalendarHeart, title: 'צילומי אירועים', desc: 'תיעוד אירועים קטנים וגדולים, חתונות, בר/בת מצווה, תוך דגש על רגעים טבעיים.' },
  ];

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
            תופסים את הרגע.<br />
            <span className="text-[#B79A88]">מדגישים את היופי.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#5A5A5A] leading-relaxed max-w-xl mb-10">
            סטודיו לצילום ואיפור מקצועי המשלב אמנות, אסתטיקה ודיוק. אנחנו כאן כדי לספר את הסיפור שלכם דרך העדשה.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#portfolio" className="bg-[#1C1C1C] text-white px-8 py-4 rounded-none font-medium hover:bg-[#333333] transition-colors inline-flex items-center gap-2">
              לתיק העבודות <ArrowLeft className="w-4 h-4" />
            </a>
            <a href="#contact" className="border border-[#1C1C1C] px-8 py-4 rounded-none font-medium hover:bg-[#1C1C1C] hover:text-white transition-colors">
              תיאום פגישה
            </a>
          </div>
        </div>
      </header>

      {/* The Grid - Visual Core */}
      <section id="portfolio" className="px-6 md:px-12 pb-24 max-w-[100rem] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold tracking-tight">נבחרות</h2>
          <span className="text-sm font-medium uppercase tracking-wider text-[#B79A88]">2023 - 2024</span>
        </div>
        
        {/* Disciplined visual grid: gaps are sharp, images cover cells fully */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-4 md:gap-6">
          {portfolio.map((item, idx) => (
            <div 
              key={idx} 
              className={`group relative overflow-hidden bg-[#EAEAEA] ${item.span}`}
            >
              <img 
                src={item.src} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-[#1C1C1C] text-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-[#333333] pt-12">
            <h2 className="text-3xl font-bold tracking-tight mb-16">מה אנחנו עושים</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} className="group">
                    <div className="w-12 h-12 bg-[#2A2A2A] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#B79A88] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#B79A88] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-[#A0A0A0] leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About/Minimal Quote */}
      <section id="about" className="py-32 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-medium leading-relaxed">
          "צילום טוב לא רק מראה איך דברים נראים, אלא איך הם מרגישים. השילוב של איפור מוקפד ותאורה נכונה יוצר את הקסם."
        </h2>
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="w-12 h-[1px] bg-[#B79A88]"></div>
          <span className="text-sm font-bold tracking-widest uppercase">צוות הסטודיו</span>
          <div className="w-12 h-[1px] bg-[#B79A88]"></div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-[#EAE8E3] pt-24 pb-12 px-6 md:px-12">
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
