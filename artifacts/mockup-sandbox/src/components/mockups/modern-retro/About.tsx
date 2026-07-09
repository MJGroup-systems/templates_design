import React from 'react';
import { MapPin, Clock, Star, Instagram, Facebook, Phone, Menu, Heart, Award, Flame, Smile } from 'lucide-react';

const BASE = import.meta.env.BASE_URL;

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@400;600;700;800&family=Suez+One&display=swap');

  .font-display { font-family: 'Suez One', serif; }
  .font-body { font-family: 'Assistant', sans-serif; }

  .retro-border {
    border: 4px solid #252422;
  }

  .retro-shadow {
    box-shadow: 6px 6px 0px #252422;
  }

  .retro-shadow-hover {
    transition: all 0.2s ease;
  }
  .retro-shadow-hover:hover {
    box-shadow: 2px 2px 0px #252422;
    transform: translate(4px, 4px);
  }

  .marquee-wrapper {
    display: flex;
    width: 200%;
    animation: marquee 30s linear infinite;
  }

  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(50%); }
  }

  .bg-checkerboard {
    background-color: #F4EFE6;
    background-image:
      linear-gradient(45deg, #EBE3D5 25%, transparent 25%, transparent 75%, #EBE3D5 75%, #EBE3D5),
      linear-gradient(45deg, #EBE3D5 25%, transparent 25%, transparent 75%, #EBE3D5 75%, #EBE3D5);
    background-size: 60px 60px;
    background-position: 0 0, 30px 30px;
  }

  .text-outline {
    -webkit-text-stroke: 2px #252422;
    color: white;
  }

  .starburst {
    background: #EAAA00;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  }
`;

export default function AboutDiner() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#F4EFE6] text-[#252422] font-body overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* Header */}
      <header className="border-b-4 border-[#252422] bg-[#F4EFE6] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <a href={`${BASE}preview/modern-retro/Retro`} className="flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer">
            <span className="font-display text-3xl tracking-wide text-[#D1492E] drop-shadow-[2px_2px_0_#252422]">דיינר 66</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 font-bold text-lg">
            <a href={`${BASE}preview/modern-retro/Retro`} className="hover:text-[#D1492E] transition-colors relative group">
              בית
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#D1492E] origin-right scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
            <a href={`${BASE}preview/modern-retro/About`} className="hover:text-[#D1492E] transition-colors relative group text-[#D1492E]">
              אודות
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#D1492E] origin-right scale-x-100 transition-transform"></span>
            </a>
            <a href={`${BASE}preview/modern-retro/Services`} className="hover:text-[#D1492E] transition-colors relative group">
              שירותים
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#D1492E] origin-right scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
            <a href={`${BASE}preview/modern-retro/Contact`} className="hover:text-[#D1492E] transition-colors relative group">
              צור קשר
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#D1492E] origin-right scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a href={`${BASE}preview/modern-retro/Contact`} className="hidden md:flex bg-[#EAAA00] px-6 py-2 font-display text-lg retro-border retro-shadow retro-shadow-hover text-[#252422]">
              הזמן שולחן
            </a>
            <button className="md:hidden">
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero / Our Story */}
      <section className="bg-checkerboard py-20 md:py-32 px-4 border-b-4 border-[#252422]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-block bg-[#EAAA00] px-4 py-1 font-bold text-lg border-2 border-[#252422] rotate-2">
              הסיפור שלנו
            </div>
            <h1 className="font-display text-6xl md:text-8xl leading-none text-[#252422]">
              מתכון של <br />
              <span className="text-[#2B6764] relative inline-block mt-2">
                שלושה דורות.
                <div className="absolute -bottom-3 -right-4 w-full h-4 bg-[#D1492E] -z-10 -rotate-1"></div>
              </span>
            </h1>
            <p className="text-xl font-semibold text-[#4a4844] max-w-lg leading-relaxed">
              הכל התחיל בברוקלין של שנות ה-60, כשסבא צ'רלי פתח חלון קטן שמכר רק המבורגרים וצ'יפס.
              שנים לאחר מכן, הבאנו את אותו המתכון המדויק, אותה הקציצה ואותה התשוקה לישראל. 
              דיינר 66 הוא מחווה לתקופה שבה אוכל היה נעשה עם נשמה והשירות היה מכל הלב.
            </p>
          </div>
          
          <div className="flex-1 relative w-full">
            <div className="absolute -top-8 -right-8 w-32 h-32 starburst flex items-center justify-center -rotate-12 retro-border z-20">
              <span className="font-display text-2xl text-center leading-tight">מאז<br/>1966</span>
            </div>
            <div className="relative bg-[#2B6764] p-4 retro-border retro-shadow -rotate-3 transform hover:-rotate-1 transition-transform duration-300 z-10">
              <img 
                src="/__mockup/images/retro/vibe.jpg" 
                alt="היסטוריית הדיינר" 
                className="w-full h-[400px] object-cover retro-border bg-[#F4EFE6]" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 bg-[#F4EFE6] border-b-4 border-[#252422]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl text-[#252422]">החוקים שלנו</h2>
            <div className="w-24 h-2 bg-[#D1492E] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "חומרי גלם טריים", desc: "אנחנו טוחנים את הבקר שלנו כל בוקר, אין פשרות.", color: "#2B6764" },
              { icon: Flame, title: "אש חיה", desc: "הבשר שלנו נצרב על הפלנצ'ה החמה לקרמול מושלם.", color: "#D1492E" },
              { icon: Heart, title: "הכל מאפס", desc: "הרטבים, הלחמניות והתוספות – הכל נעשה במקום.", color: "#EAAA00" },
              { icon: Smile, title: "אווירה מחשמלת", desc: "שירות עם חיוך, פלייליסט של ג'וקבוקס וויבים של פעם.", color: "#252422" },
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-8 retro-border retro-shadow retro-shadow-hover flex flex-col items-center text-center">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center retro-border mb-6"
                  style={{ backgroundColor: val.color }}
                >
                  <val.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-display text-2xl mb-4 text-[#252422]">{val.title}</h3>
                <p className="font-bold text-[#4a4844]">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#D1492E] py-24 px-4 border-b-4 border-[#252422] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative">
          <div className="w-full md:w-1/2 relative z-10 order-2 md:order-1">
             <div className="relative bg-[#EAAA00] p-4 retro-border retro-shadow rotate-2 transform hover:rotate-0 transition-transform duration-300">
              <img 
                src="/__mockup/images/retro/team.jpg" 
                alt="צוות הדיינר" 
                className="w-full aspect-square md:aspect-[4/3] object-cover retro-border grayscale-[20%] sepia-[30%]" 
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 z-10 order-1 md:order-2">
            <h2 className="font-display text-5xl md:text-7xl text-[#F4EFE6] mb-8 text-outline drop-shadow-[4px_4px_0_#252422]">
              המשפחה.
            </h2>
            <p className="text-xl font-bold text-[#F4EFE6] leading-relaxed mb-8 drop-shadow-[1px_1px_0_#252422]">
              הצוות שלנו מורכב מאנשים שאוהבים לארח ואוהבים לאכול. 
              החל מהטבחים שמנצחים על הפס, דרך הברמנים שמקשקשים מילקשייקים, 
              ועד למלצרים שמכירים כל לקוח קבוע. אנחנו לא סתם מסעדה, אנחנו בית.
            </p>
            <a href={`${BASE}preview/modern-retro/Contact`} className="bg-[#F4EFE6] text-[#252422] px-8 py-4 font-display text-2xl retro-border retro-shadow-hover hover:bg-[#EAAA00] transition-colors inline-flex items-center gap-3">
              בואו לעבוד איתנו <Heart className="w-6 h-6 fill-current" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#252422] text-[#F4EFE6] pt-20 pb-8 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display text-6xl text-[#EAAA00] mb-6 drop-shadow-[3px_3px_0_#D1492E]">דיינר 66</h3>
            <p className="font-semibold text-lg max-w-sm mb-8 text-gray-300 leading-relaxed">
              ההמבורגרים הכי טובים בעיר, באווירת רטרו אמריקאית בלתי נשכחת. בואו רעבים, תצאו שמחים.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-[#2B6764] rounded-full flex items-center justify-center retro-border border-[#F4EFE6] hover:-translate-y-2 transition-transform text-[#F4EFE6] shadow-[3px_3px_0px_#F4EFE6]">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-[#D1492E] rounded-full flex items-center justify-center retro-border border-[#F4EFE6] hover:-translate-y-2 transition-transform text-[#F4EFE6] shadow-[3px_3px_0px_#F4EFE6]">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-3xl text-[#D1492E] mb-6">שעות פתיחה</h4>
            <ul className="space-y-4 font-bold text-gray-300">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#EAAA00]" />
                <span>א' - ד': 11:00 - 02:00</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#EAAA00]" />
                <span>ה': 11:00 - 04:00</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#EAAA00]" />
                <span>ו': 11:00 - 16:00</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#EAAA00]" />
                <span>שבת: 18:00 - 03:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-3xl text-[#D1492E] mb-6">איפה אנחנו?</h4>
            <ul className="space-y-4 font-bold text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#EAAA00] shrink-0 mt-1" />
                <span>
                  רחוב הברזל 12, רמת החייל<br />
                  תל אביב - יפו
                </span>
              </li>
              <li className="flex items-center gap-3 mt-4 bg-[#F4EFE6] p-3 text-[#252422] retro-border inline-flex">
                <Phone className="w-5 h-5 text-[#D1492E]" />
                <span dir="ltr" className="font-display text-xl">03-666-6666</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t-4 border-gray-700 flex flex-col md:flex-row items-center justify-between font-bold text-gray-400">
          <p>© {new Date().getFullYear()} דיינר 66. כל הזכויות שמורות.</p>
          <p className="mt-4 md:mt-0">עוצב ופותח בסטייל של פעם</p>
        </div>
      </footer>
    </div>
  );
}
