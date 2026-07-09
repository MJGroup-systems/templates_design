import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, MapPin, Clock, Phone, Mail, Send } from 'lucide-react';

const BASE = import.meta.env.BASE_URL;

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Contact() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div dir="rtl" className="relative min-h-screen bg-[#F7F4EB] text-[#42372F] font-sans-he selection:bg-[#B65842] selection:text-[#F7F4EB] overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;600&family=Frank+Ruhl+Libre:wght@300;400;700;900&display=swap');
        
        .font-serif-he { font-family: 'Frank Ruhl Libre', serif; }
        .font-sans-he { font-family: 'Assistant', sans-serif; }
        
        .bg-noise {
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 50;
        }

        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #F7F4EB; }
        ::-webkit-scrollbar-thumb { background: #D8CFC4; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #B65842; }
      `}} />

      <div className="bg-noise"></div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrolled ? 'bg-[#F7F4EB]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="font-serif-he font-black text-3xl tracking-tight text-[#B65842]">
            שורש.
          </div>
          <div className="hidden md:flex gap-8 items-center text-lg font-semibold">
            <a href={`${BASE}preview/organic-earthy/Organic`} className="hover:text-[#B65842] transition-colors">ראשי</a>
            <a href={`${BASE}preview/organic-earthy/About`} className="hover:text-[#B65842] transition-colors">אודות</a>
            <a href={`${BASE}preview/organic-earthy/Services`} className="hover:text-[#B65842] transition-colors">שירותים</a>
            <a href={`${BASE}preview/organic-earthy/Contact`} className="text-[#B65842] transition-colors">צור קשר</a>
          </div>
          <a href={`${BASE}preview/organic-earthy/Contact`} className="bg-[#B65842] text-[#F7F4EB] px-6 py-2.5 rounded-full font-semibold hover:bg-[#9C4835] transition-colors shadow-sm flex items-center gap-2 inline-flex">
            הזמינו שולחן
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <section className="relative pt-40 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.h1 variants={fadeIn} className="font-serif-he text-6xl md:text-7xl font-black mb-8 text-[#2A231E]">
              בואו <span className="text-[#B65842] italic">נדבר</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-[#685D53] leading-relaxed">
              נשמח לשמוע מכם. בין אם זו הזמנת מקום, שאלה על התפריט, או התעניינות באירוע פרטי – אנחנו כאן, עם כוס תה צמחים חם ומוכנים לעזור.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start max-w-6xl mx-auto">
            
            {/* Info Panel */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-[#7D846C] text-[#F7F4EB] p-10 md:p-14 rounded-3xl shadow-xl relative overflow-hidden"
            >
              {/* Decorative shapes */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#E8E1D5] rounded-full opacity-10 mix-blend-overlay"></div>
              <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#B65842] rounded-full opacity-20 mix-blend-overlay"></div>
              
              <h2 className="font-serif-he text-4xl font-bold mb-10 relative z-10">פרטי התקשרות</h2>
              
              <div className="space-y-10 relative z-10">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#E8E1D5]/20 flex items-center justify-center shrink-0">
                    <MapPin className="text-[#E8E1D5]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-[#E8E1D5]">המשק שלנו</h4>
                    <p className="text-[#F7F4EB]/90 text-lg leading-relaxed">רחוב התמר 12<br/>פרדס חנה-כרכור</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#E8E1D5]/20 flex items-center justify-center shrink-0">
                    <Clock className="text-[#E8E1D5]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-[#E8E1D5]">שעות פעילות</h4>
                    <p className="text-[#F7F4EB]/90 text-lg leading-relaxed">
                      ראשון - חמישי: 12:00 - 23:00<br/>
                      שישי: 10:00 - 15:00<br/>
                      שבת: מנוחה למשק
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#E8E1D5]/20 flex items-center justify-center shrink-0">
                    <Phone className="text-[#E8E1D5]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-[#E8E1D5]">טלפון</h4>
                    <p className="text-[#F7F4EB]/90 text-lg leading-relaxed" dir="ltr">04-888-9999</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#E8E1D5]/20 flex items-center justify-center shrink-0">
                    <Mail className="text-[#E8E1D5]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-[#E8E1D5]">דוא״ל</h4>
                    <p className="text-[#F7F4EB]/90 text-lg leading-relaxed" dir="ltr">hello@shoresh.co.il</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-white/40 p-10 md:p-12 rounded-3xl backdrop-blur-sm border border-[#E8E1D5]"
            >
              <h2 className="font-serif-he text-3xl font-bold mb-8 text-[#2A231E]">שלחו לנו הודעה</h2>
              
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#685D53]">שם מלא</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b-2 border-[#D8CFC4] py-3 focus:outline-none focus:border-[#B65842] transition-colors text-[#2A231E] font-semibold text-lg" 
                    placeholder="איך קוראים לכם?" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#685D53]">טלפון</label>
                  <input 
                    type="tel" 
                    className="w-full bg-transparent border-b-2 border-[#D8CFC4] py-3 focus:outline-none focus:border-[#B65842] transition-colors text-[#2A231E] font-semibold text-lg" 
                    placeholder="מספר לחזור אליכם" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#685D53]">נושא הפנייה</label>
                  <select className="w-full bg-transparent border-b-2 border-[#D8CFC4] py-3 focus:outline-none focus:border-[#B65842] transition-colors text-[#2A231E] font-semibold text-lg">
                    <option value="reservation">הזמנת שולחן</option>
                    <option value="event">אירוע פרטי / קייטרינג</option>
                    <option value="workshop">הרשמה לסדנה</option>
                    <option value="other">אחר</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#685D53]">הודעה</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-transparent border-b-2 border-[#D8CFC4] py-3 focus:outline-none focus:border-[#B65842] transition-colors text-[#2A231E] font-semibold text-lg resize-none" 
                    placeholder="ספרו לנו איך אפשר לעזור..." 
                  />
                </div>
                
                <button type="submit" className="bg-[#B65842] text-[#F7F4EB] w-full py-4 rounded-full font-bold text-lg hover:bg-[#9C4835] transition-all hover:shadow-lg flex items-center justify-center gap-3">
                  <span>שליחה</span>
                  <Send size={20} />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-[#2A231E] text-[#F7F4EB] py-12">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif-he font-black text-3xl text-[#B65842]">שורש.</div>
          <p className="text-[#F7F4EB]/60 text-sm">© כל הזכויות שמורות לשורש - מסעדה מקומית. {new Date().getFullYear()}</p>
          <div className="flex gap-4 text-[#F7F4EB]/80">
            <a href="#" className="hover:text-[#B65842] transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-[#B65842] transition-colors"><Facebook size={24} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
