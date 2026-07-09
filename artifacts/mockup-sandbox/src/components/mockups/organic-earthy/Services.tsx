import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, ArrowLeft, Calendar, ChefHat, PartyPopper } from 'lucide-react';

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

const scaleReveal = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const } 
  }
};

export default function Services() {
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
        
        .organic-shape-1 { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        .organic-shape-leaf { border-radius: 0 50% 0 50%; }
        .organic-shape-arch { border-radius: 200px 200px 0 0; }
        
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
            <a href="#" className="hover:text-[#B65842] transition-colors">ראשי</a>
            <a href="#about" className="hover:text-[#B65842] transition-colors">אודות</a>
            <a href="#services" className="text-[#B65842] transition-colors">שירותים</a>
            <a href="#contact" className="hover:text-[#B65842] transition-colors">צור קשר</a>
          </div>
          <button className="bg-[#B65842] text-[#F7F4EB] px-6 py-2.5 rounded-full font-semibold hover:bg-[#9C4835] transition-colors shadow-sm flex items-center gap-2">
            הזמינו שולחן
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-[#7D846C] text-[#F7F4EB]">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h1 variants={fadeIn} className="font-serif-he text-6xl md:text-7xl font-black mb-8">
              מעבר <span className="text-[#E8E1D5] italic">לצלחת</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-[#E8E1D5] leading-relaxed">
              אנחנו אוהבים לארח, לבשל ולחלוק את הידע שלנו. גלו את הדרכים הנוספות בהן תוכלו לחוות את הקסם של שורש – מאירועים פרטיים ועד סדנאות בישול.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 space-y-32">
          
          {/* Service 1 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={scaleReveal}
              className="organic-shape-arch overflow-hidden h-[500px]"
            >
              <img 
                src="/__mockup/images/organic-event.jpg" 
                alt="אירועי בוטיק במסעדה" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div className="flex items-center gap-4 text-[#B65842] mb-4">
                <PartyPopper size={28} />
                <span className="font-bold text-lg">חוגגים בטבע</span>
              </div>
              <motion.h2 variants={fadeIn} className="font-serif-he text-4xl md:text-5xl font-bold mb-6 text-[#2A231E]">
                אירועי בוטיק
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-[#685D53] leading-relaxed mb-8">
                החלל הייחודי של המסעדה שלנו זמין לאירועים פרטיים של עד 60 איש. חתונות קטנות, ימי הולדת מיוחדים או אירועי חברה אינטימיים. אנחנו נתפור עבורכם תפריט עונתי מותאם אישית, מלווה ביינות מיקבי בוטיק מקומיים.
              </motion.p>
              <motion.ul variants={fadeIn} className="space-y-4 mb-8 text-[#42372F] font-semibold">
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#7D846C]"></span> תפריט שף בהתאמה אישית</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#7D846C]"></span> עיצוב פרחים וצמחיה טבעית</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#7D846C]"></span> ליווי צמוד של מנהל אירוע</li>
              </motion.ul>
              <motion.button variants={fadeIn} className="text-[#B65842] font-bold border-b-2 border-[#B65842] pb-1 hover:text-[#9C4835] hover:border-[#9C4835] transition-colors flex items-center gap-2">
                לקבלת הצעת מחיר <ArrowLeft size={18} />
              </motion.button>
            </motion.div>
          </div>

          {/* Service 2 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="order-2 md:order-1"
            >
              <div className="flex items-center gap-4 text-[#B65842] mb-4">
                <ChefHat size={28} />
                <span className="font-bold text-lg">לומדים לבשל</span>
              </div>
              <motion.h2 variants={fadeIn} className="font-serif-he text-4xl md:text-5xl font-bold mb-6 text-[#2A231E]">
                סדנאות בישול ואפייה
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-[#685D53] leading-relaxed mb-8">
                בואו ללמוד איך להוציא את המקסימום מחומרי גלם עונתיים. בסדנאות המעשיות שלנו נלמד יחד טכניקות של התססה, בישול איטי, עבודה עם מחמצת והיכרות עם צמחי בר למאכל. הסדנאות מתקיימות בימי שישי בבוקר וכוללות ארוחה משותפת.
              </motion.p>
              <motion.div variants={fadeIn} className="bg-[#EBE7DD] p-6 rounded-2xl mb-8 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-[#2A231E]">הסדנה הקרובה: קסם ההתססה</h4>
                  <p className="text-[#685D53] text-sm mt-1">24.11.2023 | 09:00 - 13:00</p>
                </div>
                <div className="text-[#B65842] font-serif-he font-bold text-2xl">₪380</div>
              </motion.div>
              <motion.button variants={fadeIn} className="text-[#B65842] font-bold border-b-2 border-[#B65842] pb-1 hover:text-[#9C4835] hover:border-[#9C4835] transition-colors flex items-center gap-2">
                להרשמה לסדנאות <ArrowLeft size={18} />
              </motion.button>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={scaleReveal}
              className="organic-shape-leaf overflow-hidden h-[500px] order-1 md:order-2"
            >
              <img 
                src="/__mockup/images/organic-workshop.jpg" 
                alt="סדנאות בישול בשורש" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Service 3 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={scaleReveal}
              className="organic-shape-1 overflow-hidden h-[500px]"
            >
              <img 
                src="/__mockup/images/organic-catering.jpg" 
                alt="קייטרינג טבעוני לאירועים" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div className="flex items-center gap-4 text-[#B65842] mb-4">
                <Calendar size={28} />
                <span className="font-bold text-lg">במקום שלכם</span>
              </div>
              <motion.h2 variants={fadeIn} className="font-serif-he text-4xl md:text-5xl font-bold mb-6 text-[#2A231E]">
                קייטרינג שורש
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-[#685D53] leading-relaxed mb-8">
                מביאים את הטעמים, האסתטיקה ותשומת הלב של שורש לכל מקום בארץ. פתרונות הסעדה מלאים לאירועי שטח, חתונות, הפקות אופנה וימי צילום. אנחנו מביאים איתנו הכל - מהשולחנות ועד הפרחים, כדי ליצור חוויה מושלמת וחסרת דאגות.
              </motion.p>
              <motion.ul variants={fadeIn} className="space-y-4 mb-8 text-[#42372F] font-semibold">
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#7D846C]"></span> מתאים ל-20 עד 200 סועדים</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#7D846C]"></span> ציוד הגשה מקרמיקה עבודת יד</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#7D846C]"></span> אפשרות למטבח פתוח ובישול פרונטלי</li>
              </motion.ul>
              <motion.button variants={fadeIn} className="text-[#B65842] font-bold border-b-2 border-[#B65842] pb-1 hover:text-[#9C4835] hover:border-[#9C4835] transition-colors flex items-center gap-2">
                הורידו את תפריט הקייטרינג <ArrowLeft size={18} />
              </motion.button>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-[#2A231E] text-[#F7F4EB] py-12 border-t border-[#F7F4EB]/10 mt-12">
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
