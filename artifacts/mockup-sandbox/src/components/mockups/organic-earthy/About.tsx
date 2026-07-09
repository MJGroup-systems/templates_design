import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Heart, Sprout, Sun } from 'lucide-react';

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
    transition: {
      staggerChildren: 0.2
    }
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

export default function About() {
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
        .organic-shape-2 { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
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
            <a href={`${BASE}preview/organic-earthy/Organic`} className="hover:text-[#B65842] transition-colors">ראשי</a>
            <a href={`${BASE}preview/organic-earthy/About`} className="text-[#B65842] transition-colors">אודות</a>
            <a href={`${BASE}preview/organic-earthy/Services`} className="hover:text-[#B65842] transition-colors">שירותים</a>
            <a href={`${BASE}preview/organic-earthy/Contact`} className="hover:text-[#B65842] transition-colors">צור קשר</a>
          </div>
          <a href={`${BASE}preview/organic-earthy/Contact`} className="bg-[#B65842] text-[#F7F4EB] px-6 py-2.5 rounded-full font-semibold hover:bg-[#9C4835] transition-colors shadow-sm flex items-center gap-2 inline-flex">
            הזמינו שולחן
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-[#EBE7DD]">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h1 variants={fadeIn} className="font-serif-he text-6xl md:text-7xl font-black mb-8 text-[#2A231E]">
              הסיפור <span className="text-[#B65842] italic">שלנו</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-[#685D53] leading-relaxed">
              הכל התחיל מחלקה קטנה של אדמה וחלום גדול להחזיר את האוכל לשורשים שלו. להיות מחוברים לעונות השנה, לחקלאים המקומיים, ולטעם האמיתי של הטבע.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story & Values */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleReveal}
              className="relative h-[600px]"
            >
              <img 
                src="/__mockup/images/organic-farm.jpg" 
                alt="השדה שלנו" 
                className="w-full h-full object-cover organic-shape-2 shadow-2xl"
              />
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="font-serif-he text-4xl md:text-5xl font-bold mb-6 text-[#2A231E]">
                מהאדמה באהבה
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-[#685D53] leading-relaxed mb-6">
                הקמנו את שורש מתוך רצון ליצור מקום שמכבד את מחזור החיים הטבעי. אנחנו לא מאמינים בקיצורי דרך. אנחנו מגדלים חלק מחומרי הגלם בעצמנו, ואת השאר אנחנו רוכשים מחקלאים מקומיים שחולקים איתנו את אותו החזון.
              </motion.p>
              <motion.p variants={fadeIn} className="text-lg text-[#685D53] leading-relaxed">
                כל צלחת שיוצאת מהמטבח שלנו מספרת סיפור של עונה, של מזג אוויר, של אדמה ושל אנשים. זוהי הזמנה להאט את הקצב ולהתענג על מה שהטבע נותן לנו בדיוק עכשיו.
              </motion.p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mt-32">
            {[
              { icon: Sprout, title: "כבוד לטבע", desc: "שיטות גידול אקולוגיות ומינימום פחת. כל מה שאפשר, חוזר לאדמה כקומפוסט." },
              { icon: Heart, title: "עבודת כפיים", desc: "מהלישה של בצק המחמצת ועד החיתוך העדין של הירקות, הכל נעשה בידיים אוהבות." },
              { icon: Sun, title: "לפי העונות", desc: "התפריט שלנו משתנה בהתאם למה שהשדה מציע. הטבע קובע, אנחנו מקשיבים." }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { delay: idx * 0.2, duration: 0.8 } }
                }}
                className="bg-[#EBE7DD] p-10 rounded-3xl text-center hover:bg-[#E8E1D5] transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#B65842] text-[#F7F4EB] mb-6">
                  <value.icon size={32} />
                </div>
                <h3 className="font-serif-he text-2xl font-bold mb-4 text-[#2A231E]">{value.title}</h3>
                <p className="text-[#685D53] leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-24 bg-[#7D846C] text-[#F7F4EB]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="font-serif-he text-4xl md:text-5xl font-bold mb-6">האנשים מאחורי שורש</h2>
            <p className="text-xl text-[#E8E1D5] leading-relaxed">
              צוות של בשלנים, אופים, וחקלאים בנשמה שחיים ונושמים את העשייה היומיומית.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleReveal}
              className="organic-shape-1 overflow-hidden h-[500px]"
            >
              <img 
                src="/__mockup/images/organic-team.jpg" 
                alt="צוות המסעדה" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <div>
                <h3 className="font-serif-he text-3xl font-bold mb-2">מאיה לוי</h3>
                <p className="text-[#B65842] font-bold mb-3">שפית ומייסדת</p>
                <p className="text-[#E8E1D5] leading-relaxed">
                  מאיה גדלה במושב חקלאי והביאה איתה את האהבה לאדמה ולמטבח. אחרי שנות עבודה במסעדות מישלן באירופה, חזרה לישראל כדי ליצור אוכל שמדבר בשפה המקומית.
                </p>
              </div>
              <div>
                <h3 className="font-serif-he text-3xl font-bold mb-2">יותם בר</h3>
                <p className="text-[#B65842] font-bold mb-3">מנהל המשק והחקלאות</p>
                <p className="text-[#E8E1D5] leading-relaxed">
                  הידיים של יותם הן אלו שמטפחות את הגידולים שלנו. הוא אמון על הקשר מול החקלאים, על בחירת הזרעים ועל שמירת החיוניות של האדמה ממנה אנחנו ניזונים.
                </p>
              </div>
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
