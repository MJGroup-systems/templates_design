import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Clock, Phone, Instagram, Facebook, Leaf } from 'lucide-react';

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

export default function OrganicRestaurant() {
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
        
        .font-serif-he {
          font-family: 'Frank Ruhl Libre', serif;
        }
        .font-sans-he {
          font-family: 'Assistant', sans-serif;
        }
        
        .organic-shape-1 {
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        }
        .organic-shape-2 {
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        }
        .organic-shape-arch {
          border-radius: 200px 200px 0 0;
        }
        .organic-shape-leaf {
          border-radius: 0 50% 0 50%;
        }
        
        .bg-noise {
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 50;
        }

        /* Hide scrollbar for cleaner look */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #F7F4EB;
        }
        ::-webkit-scrollbar-thumb {
          background: #D8CFC4;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #B65842;
        }
      `}} />

      <div className="bg-noise"></div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrolled ? 'bg-[#F7F4EB]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="font-serif-he font-black text-3xl tracking-tight text-[#B65842]">
            שורש.
          </div>
          <div className="hidden md:flex gap-8 items-center text-lg font-semibold">
            <a href={`${BASE}preview/organic-earthy/Organic`} className="text-[#B65842] transition-colors">ראשי</a>
            <a href={`${BASE}preview/organic-earthy/About`} className="hover:text-[#B65842] transition-colors">אודות</a>
            <a href={`${BASE}preview/organic-earthy/Services`} className="hover:text-[#B65842] transition-colors">שירותים</a>
            <a href={`${BASE}preview/organic-earthy/Contact`} className="hover:text-[#B65842] transition-colors">צור קשר</a>
          </div>
          <a href={`${BASE}preview/organic-earthy/Contact`} className="bg-[#B65842] text-[#F7F4EB] px-6 py-2.5 rounded-full font-semibold hover:bg-[#9C4835] transition-colors shadow-sm flex items-center gap-2 inline-flex">
            הזמינו שולחן
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-24 pb-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-xl z-10"
            >
              <motion.div variants={fadeIn} className="flex items-center gap-2 text-[#7D846C] font-semibold mb-6">
                <Leaf size={20} />
                <span>מטבח מקומי מבוסס צומח</span>
              </motion.div>
              <motion.h1 variants={fadeIn} className="font-serif-he text-6xl md:text-8xl font-black leading-[1.05] mb-6 text-[#2A231E]">
                אוכל שמחובר <br/><span className="text-[#B65842] italic font-serif-he">לאדמה.</span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-[#685D53] mb-10 leading-relaxed max-w-lg">
                אנחנו מאמינים שאוכל טוב מתחיל בשורשים. תוצרת מקומית, עונתית ואורגנית שמגיעה ישר מהשדה לצלחת שלכם, במינימום התערבות ומקסימום אהבה.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <a href="#menu" className="bg-[#B65842] text-[#F7F4EB] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#9C4835] transition-all hover:shadow-lg flex items-center gap-2 group inline-flex">
                  <span>תפריט העונה</span>
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                </a>
                <a href={`${BASE}preview/organic-earthy/About`} className="bg-transparent border border-[#42372F] text-[#42372F] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#42372F] hover:text-[#F7F4EB] transition-all inline-block">
                  הסיפור שלנו
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              initial="hidden"
              animate="visible"
              variants={scaleReveal}
              className="relative h-[600px] w-full mt-12 md:mt-0"
            >
              <div className="absolute inset-0 bg-[#E8E1D5] organic-shape-1 transform rotate-6 scale-105"></div>
              <img 
                src="/__mockup/images/organic-hero.jpg" 
                alt="שולחן ערוך עם מנות טבעוניות עשירות" 
                className="absolute inset-0 w-full h-full object-cover organic-shape-1 shadow-2xl"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 bg-[#F7F4EB] p-4 rounded-full shadow-xl">
                <div className="w-24 h-24 border border-dashed border-[#B65842] rounded-full flex items-center justify-center text-center p-2">
                  <span className="font-serif-he font-bold text-[#B65842] text-sm leading-tight">100%<br/>אורגני</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision / About */}
      <section id="about" className="py-24 bg-[#EBE7DD] relative">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeIn} className="font-serif-he text-4xl md:text-5xl font-bold mb-8 text-[#2A231E]">
              טבע על הצלחת
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-[#685D53] leading-loose mb-16">
              כל מנה שלנו היא חגיגה של העונה. אנחנו עובדים צמוד עם חקלאים מקומיים כדי להביא אליכם את חומרי הגלם הטריים והאיכותיים ביותר, תוך כבוד לאדמה ולסביבה. אצלנו תמצאו פשטות, טעמים עמוקים, ואהבה גדולה לטבע שעוטף אותנו.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleReveal}
            className="relative h-[50vh] md:h-[70vh] w-full rounded-[2rem] overflow-hidden"
          >
            <img 
              src="/__mockup/images/organic-farm.jpg" 
              alt="תוצרת חקלאית טרייה" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div>
              <h3 className="text-[#7D846C] font-bold text-lg mb-2">תפריט משתנה</h3>
              <h2 className="font-serif-he text-4xl md:text-5xl font-bold text-[#2A231E]">מהשדה לצלחת</h2>
            </div>
            <a href={`${BASE}preview/organic-earthy/Services`} className="text-[#B65842] font-bold border-b-2 border-[#B65842] pb-1 hover:text-[#9C4835] hover:border-[#9C4835] transition-colors flex items-center gap-2 inline-flex">
              לצפייה בתפריט המלא
              <ArrowLeft size={18} />
            </a>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'שורשים צלויים',
                desc: 'שורשי עונה בצלייה איטית, קרם טחינה גולמית, שמן זית מסיק ראשון וזעתר טרי.',
                img: '/__mockup/images/organic-dish1.jpg',
                shape: 'organic-shape-arch'
              },
              {
                title: 'סלט משק',
                desc: 'עלים ירוקים רעננים, פירות עונה, אגוזי לוז קלויים וויניגרט סילאן וחרדל.',
                img: '/__mockup/images/organic-dish2.jpg',
                shape: 'organic-shape-leaf'
              },
              {
                title: 'לחם מחמצת ארטיזנל',
                desc: 'נאפה במקום באבן שמוט, מוגש עם שמן זית בכבישה קרה ומלח אטלנטי גס.',
                img: '/__mockup/images/organic-dish3.jpg',
                shape: 'organic-shape-2'
              }
            ].map((dish, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: idx * 0.2 } }
                }}
                className="group cursor-pointer"
              >
                <div className={`overflow-hidden mb-6 ${dish.shape} h-[400px]`}>
                  <img 
                    src={dish.img} 
                    alt={dish.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h4 className="font-serif-he text-2xl font-bold mb-3 text-[#2A231E] group-hover:text-[#B65842] transition-colors">{dish.title}</h4>
                <p className="text-[#685D53] leading-relaxed">{dish.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Atmosphere Block */}
      <section id="atmosphere" className="py-24 bg-[#7D846C] text-[#F7F4EB]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="order-2 md:order-1"
            >
              <h2 className="font-serif-he text-4xl md:text-6xl font-bold mb-8 leading-tight">
                מקום לעצור, <br/>ולנשום.
              </h2>
              <p className="text-xl md:text-2xl text-[#E8E1D5] mb-10 leading-relaxed font-light">
                המסעדה שלנו עוצבה כהמשך טבעי לסביבה. חומרים טבעיים כמו עץ גס, חימר ואבן, תאורה רכה ואווירה עוטפת שמזמינה אתכם להתנתק מהרעש בחוץ ולהתענג על הרגע, על האוכל ועל החברה.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-[1px] bg-[#E8E1D5]"></div>
                <span className="font-serif-he text-lg italic tracking-wider">צוות שורש</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={scaleReveal}
              className="order-1 md:order-2"
            >
              <div className="organic-shape-1 overflow-hidden h-[500px] shadow-2xl border-4 border-[#F7F4EB]/20">
                <img 
                  src="/__mockup/images/organic-interior.jpg" 
                  alt="פנים המסעדה" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reservation & Footer */}
      <section className="bg-[#B65842] text-[#F7F4EB] pt-24 pb-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="font-serif-he text-4xl md:text-5xl font-bold mb-6">נשמח לארח אתכם</h2>
              <p className="text-[#F7F4EB]/80 mb-10 text-lg">שמרו לכם שולחן ושתפו אותנו בחוויה קולינרית שמגיעה מהאדמה.</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#F7F4EB]/90">שם מלא</label>
                    <input type="text" className="w-full bg-transparent border-b border-[#F7F4EB]/30 py-2 focus:outline-none focus:border-[#F7F4EB] transition-colors placeholder:text-[#F7F4EB]/50" placeholder="ישראל ישראלי" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#F7F4EB]/90">טלפון</label>
                    <input type="tel" className="w-full bg-transparent border-b border-[#F7F4EB]/30 py-2 focus:outline-none focus:border-[#F7F4EB] transition-colors placeholder:text-[#F7F4EB]/50" placeholder="050-0000000" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#F7F4EB]/90">תאריך</label>
                    <input type="date" className="w-full bg-transparent border-b border-[#F7F4EB]/30 py-2 focus:outline-none focus:border-[#F7F4EB] transition-colors text-[#F7F4EB]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#F7F4EB]/90">שעה</label>
                    <input type="time" className="w-full bg-transparent border-b border-[#F7F4EB]/30 py-2 focus:outline-none focus:border-[#F7F4EB] transition-colors text-[#F7F4EB]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#F7F4EB]/90">אורחים</label>
                    <select className="w-full bg-transparent border-b border-[#F7F4EB]/30 py-2 focus:outline-none focus:border-[#F7F4EB] transition-colors text-[#F7F4EB] [&>option]:text-[#42372F]">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5+</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="mt-8 bg-[#F7F4EB] text-[#B65842] w-full py-4 rounded-full font-bold text-lg hover:bg-[#E8E1D5] transition-colors">
                  אישור הזמנה
                </button>
              </form>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-col justify-between"
            >
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#F7F4EB]/70 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl mb-1">מיקום</h4>
                    <p className="text-[#F7F4EB]/80 text-lg">רחוב התמר 12, פרדס חנה-כרכור</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-[#F7F4EB]/70 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl mb-1">שעות פתיחה</h4>
                    <p className="text-[#F7F4EB]/80 text-lg">א׳-ה׳: 12:00 - 23:00</p>
                    <p className="text-[#F7F4EB]/80 text-lg">ו׳: 10:00 - 15:00</p>
                    <p className="text-[#F7F4EB]/80 text-lg">שבת: מנוחה למשק</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-[#F7F4EB]/70 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl mb-1">צרו קשר</h4>
                    <p className="text-[#F7F4EB]/80 text-lg" dir="ltr">04-888-9999</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-[#F7F4EB]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-serif-he font-black text-2xl">שורש.</div>
            <p className="text-[#F7F4EB]/60 text-sm">© כל הזכויות שמורות לשורש - מסעדה מקומית. {new Date().getFullYear()}</p>
            <div className="flex gap-4 text-[#F7F4EB]/80">
              <a href="#" className="hover:text-[#F7F4EB] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-[#F7F4EB] transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
