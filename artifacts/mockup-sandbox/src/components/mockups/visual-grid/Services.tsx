import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';

export default function Services() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesList = [
    {
      title: "צילומי חתונות ואירועים",
      desc: "תיעוד רגיש, ספונטני ואמנותי של היום המיוחד שלכם. אנו מתמקדים ברגעים האמיתיים, ללא העמדות מיותרות, ויוצרים סיפור ויזואלי מהמם שמלווה אתכם לכל החיים.",
      features: ["פגישת היכרות ותיאום ציפיות", "שני צלמי סטילס וצלם וידאו", "אלבום דיגיטלי מעוצב", "גלריה מקוונת לשיתוף"],
      price: "החל מ-₪8,500",
      image: "/__mockup/images/visual-grid/bride.jpg",
      reverse: false
    },
    {
      title: "ביוטי, אופנה ואיפור",
      desc: "הפקות אופנה, איפור כלות וצילומי ביוטי מוקפדים. השילוב המושלם בין איפור מקצועי שעמיד לאורך שעות לבין צילום שמדגיש את היופי והמרקם המדויק.",
      features: ["איפור ניסיון לפני האירוע", "ליווי לאורך הצילומים", "שימוש במוצרי פרימיום בלבד", "אפשרות לריטוש מתקדם בתוצרים"],
      price: "החל מ-₪1,500",
      image: "/__mockup/images/visual-grid/makeup.jpg",
      reverse: true
    },
    {
      title: "צילומי תדמית וסטודיו",
      desc: "בניית שפה חזותית מנצחת לעסקים, יזמים ואמנים. פורטרטים שמקרינים מקצועיות, אופי ייחודי וסטייל, באווירה נינוחה בסטודיו שלנו או בלוקיישן לבחירתכם.",
      features: ["ייעוץ סטיילינג מקדים", "שני סטים של ביגוד", "20 תמונות ערוכות ומוכנות לשימוש", "ריטוש קל ואלגנטי"],
      price: "החל מ-₪1,800",
      image: "/__mockup/images/visual-grid/corporate.jpg",
      reverse: false
    }
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
            האמנות שלנו.<br />
            <span className="text-[#B79A88]">בשבילכם.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#5A5A5A] leading-relaxed max-w-xl mb-10">
            אנו מציעים מגוון שירותי צילום ואיפור המותאמים בדיוק לצרכים שלכם. כל חבילה נבנית מתוך מחשבה על הפרטים הקטנים ביותר, כדי להעניק לכם תוצר מושלם ועל-זמני.
          </p>
        </div>
      </header>

      {/* Services Breakdown */}
      <section className="px-6 md:px-12 pb-24 max-w-7xl mx-auto space-y-32">
        {servicesList.map((service, idx) => (
          <div key={idx} className={`flex flex-col ${service.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}>
            
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/5] bg-[#EAEAEA] group overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{service.title}</h2>
              <p className="text-lg text-[#5A5A5A] leading-relaxed mb-8">
                {service.desc}
              </p>
              
              <div className="mb-10">
                <h3 className="text-sm font-bold tracking-widest uppercase mb-4">מה כולל השירות:</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#5A5A5A]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#B79A88]"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-6">
                <span className="text-2xl font-medium">{service.price}</span>
                <a href="#contact" className="text-[#B79A88] font-bold uppercase tracking-wider text-sm hover:text-[#1C1C1C] transition-colors flex items-center gap-2">
                  לפרטים נוספים <ArrowLeft className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* Albums Mini-section */}
      <section className="bg-[#1C1C1C] text-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="w-24 h-24 mb-8 rounded-full overflow-hidden border border-[#333333]">
            <img src="/__mockup/images/visual-grid/album.jpg" alt="אלבומים" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-6">אלבומים ופרינט</h2>
          <p className="text-[#A0A0A0] leading-relaxed max-w-2xl mb-8">
            בעידן הדיגיטלי, אנחנו מאמינים בערך של תמונה שאפשר להחזיק ביד. הסטודיו מציע שירותי הדפסה איכותיים ואלבומי פרימיום בעבודת יד, בכריכות פשתן ועור לבחירתכם.
          </p>
          <a href="#contact" className="border border-white/30 px-8 py-4 rounded-none font-medium hover:bg-white hover:text-[#1C1C1C] transition-colors">
            קטלוג מוצרים מלא
          </a>
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
