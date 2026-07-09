import React from 'react';
import { MapPin, Clock, Star, Instagram, Facebook, Phone, Menu, Plus, Zap, ArrowDown } from 'lucide-react';

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

export default function ServicesDiner() {
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
            <a href={`${BASE}preview/modern-retro/About`} className="hover:text-[#D1492E] transition-colors relative group">
              אודות
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#D1492E] origin-right scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
            <a href={`${BASE}preview/modern-retro/Services`} className="hover:text-[#D1492E] transition-colors relative group text-[#D1492E]">
              שירותים
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#D1492E] origin-right scale-x-100 transition-transform"></span>
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

      {/* Hero Menu */}
      <section className="bg-[#2B6764] py-20 px-4 border-b-4 border-[#252422] text-center relative overflow-hidden">
        <div className="absolute top-10 left-10 text-[#F4EFE6] opacity-10 rotate-12 pointer-events-none">
          <Zap className="w-48 h-48" />
        </div>
        <div className="absolute -bottom-10 -right-10 text-[#F4EFE6] opacity-10 -rotate-12 pointer-events-none">
          <Star className="w-64 h-64 fill-current" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="font-display text-7xl md:text-8xl text-[#F4EFE6] text-outline drop-shadow-[4px_4px_0_#252422] mb-6">
            התפריט
          </h1>
          <p className="text-2xl font-bold text-[#EAAA00] drop-shadow-[2px_2px_0_#252422]">
            קלאסיקות אמריקאיות עם טוויסט מקומי.<br /> בלי סכו"ם, בלי שטויות. רק אוכל טוב.
          </p>
          <div className="mt-12 flex justify-center">
            <a href="#menu-items" className="animate-bounce bg-[#D1492E] w-16 h-16 rounded-full retro-border retro-shadow flex items-center justify-center text-white">
              <ArrowDown className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Menu Categories */}
      <section id="menu-items" className="py-24 px-4 bg-checkerboard border-b-4 border-[#252422]">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Category: Burgers */}
          <div>
            <div className="flex items-center gap-6 mb-12">
              <h2 className="font-display text-5xl md:text-6xl text-[#252422] bg-[#EAAA00] px-6 py-2 retro-border shadow-[4px_4px_0_#D1492E] -rotate-1">
                בורגרים
              </h2>
              <div className="h-2 flex-grow bg-[#252422]"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { name: "קלאסיק 66", desc: "2 קציצות סמאש 100 גרם, גבינה אמריקאית, חסה, עגבנייה, בצל סגול ורוטב הבית.", price: "54" },
                { name: "המלוכלך", desc: "3 קציצות, דאבל בייקון טלה, צ'דר מותכת, ריבת בצל, טבעות בצל פריכות ואיולי כמהין.", price: "72" },
                { name: "דיינר צ'יקן", desc: "חזה עוף בציפוי פריך במיוחד, קולסלאו תפוחים, מלפפון חמוץ, איולי שום ומייפל חריף.", price: "58" },
                { name: "טבעוני אמריקאי", desc: "קציצת רידיפיין מיט, גבינה טבעונית נמסה, פטריות מוקפצות, חסה ואיולי טבעוני.", price: "64" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 retro-border retro-shadow-hover flex flex-col justify-between group">
                  <div>
                    <div className="flex justify-between items-start mb-2 border-b-2 border-dashed border-gray-300 pb-2">
                      <h3 className="font-display text-2xl text-[#D1492E]">{item.name}</h3>
                      <span className="font-display text-2xl text-[#2B6764]">₪{item.price}</span>
                    </div>
                    <p className="font-semibold text-[#4a4844] mt-2">{item.desc}</p>
                  </div>
                  <button className="mt-6 flex items-center justify-center gap-2 w-full py-3 bg-[#F4EFE6] retro-border font-bold group-hover:bg-[#EAAA00] transition-colors">
                    הוסף להזמנה <Plus className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Category: Hotdogs & Extras */}
          <div>
            <div className="flex items-center gap-6 mb-12">
              <h2 className="font-display text-5xl md:text-6xl text-[#F4EFE6] bg-[#2B6764] px-6 py-2 retro-border shadow-[4px_4px_0_#252422] rotate-1 text-outline">
                נקניקיות ומוגזמים
              </h2>
              <div className="h-2 flex-grow bg-[#252422]"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1 bg-[#D1492E] p-4 retro-border retro-shadow relative flex items-center justify-center">
                 <img src="/__mockup/images/retro/hotdog.png" alt="הוט דוג קלאסי" className="w-full object-contain max-h-64 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] rotate-12" />
                 <div className="absolute -top-6 -right-6 w-24 h-24 starburst flex items-center justify-center -rotate-12 retro-border">
                   <span className="font-display text-xl text-center leading-none text-[#252422]">חדש<br/>בתפריט!</span>
                 </div>
              </div>
              <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
                {[
                  { name: "שיקגו דוג", desc: "נקניקיית עגל שמנמנה, חרדל צהוב, רליש מתוק, בצל קצוץ, עגבניות ומלפפון כבוש.", price: "42" },
                  { name: "צ'ילי דוג", desc: "נקניקיית עגל קלאסית, תבשיל צ'ילי בקר חרפרף, גבינת צ'דר, וחלפיניו כבוש.", price: "48" },
                  { name: "כנפיים בבאפלו", desc: "12 כנפיים מטוגנות פריכות ברוטב באפלו אוריגינל עם מטבל רוקפור.", price: "52" },
                  { name: "טבעות בצל", desc: "טבעות בצל ענקיות בציפוי פריך של בירה עם רוטב איולי צ'יפוטלה בצד.", price: "36" },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 retro-border retro-shadow-hover flex flex-col justify-between group">
                    <div>
                      <div className="flex justify-between items-start mb-2 border-b-2 border-dashed border-gray-300 pb-2">
                        <h3 className="font-display text-xl text-[#252422]">{item.name}</h3>
                        <span className="font-display text-xl text-[#2B6764]">₪{item.price}</span>
                      </div>
                      <p className="font-semibold text-sm text-[#4a4844] mt-2">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Category: Sweets */}
          <div>
            <div className="flex items-center gap-6 mb-12">
              <h2 className="font-display text-5xl md:text-6xl text-[#252422] bg-[#F4EFE6] px-6 py-2 retro-border shadow-[4px_4px_0_#D1492E]">
                שייקים ומתוקים
              </h2>
              <div className="h-2 flex-grow bg-[#252422]"></div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: "שייק וניל צרפתי", price: "32", img: "/__mockup/images/retro/shake.png" },
                { name: "שייק שוקולד כפול", price: "34", img: "/__mockup/images/retro/shake.png" },
                { name: "שייק תות נוסטלגיה", price: "32", img: "/__mockup/images/retro/shake.png" },
                { name: "קראק פאי דינר", price: "42", img: "/__mockup/images/retro/burger.png", hideImg: true },
              ].map((item, i) => (
                <div key={i} className="bg-[#2B6764] p-6 retro-border retro-shadow text-center relative mt-12">
                  {!item.hideImg && (
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32">
                      <img src={item.img} alt={item.name} className="w-full h-full object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]" style={{ filter: i===0 ? 'hue-rotate(50deg)' : i===1 ? 'hue-rotate(180deg) brightness(0.7)' : 'none' }} />
                    </div>
                  )}
                  <h3 className="font-display text-2xl text-[#F4EFE6] mt-12 mb-2">{item.name}</h3>
                  <span className="font-display text-xl text-[#EAAA00]">₪{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Banner */}
      <section className="bg-[#EAAA00] py-16 px-4 border-b-4 border-[#252422]">
        <div className="max-w-5xl mx-auto bg-white retro-border retro-shadow p-8 md:p-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-[#252422] mb-4">חוגגים בדיינר? 🎈</h2>
          <p className="text-xl font-bold text-[#4a4844] max-w-2xl mx-auto mb-8">
            יש לכם יום הולדת? מסיבת רווקים? או סתם בא לכם לסגור שולחן ענק עם חברים? 
            דברו איתנו, נארגן לכם ארוחה שחיתות עם אלכוהול זורם ומוזיקה שתרים אתכם באוויר.
          </p>
          <a href={`${BASE}preview/modern-retro/Contact`} className="inline-block bg-[#D1492E] text-white px-8 py-4 font-display text-2xl retro-border retro-shadow-hover hover:scale-105 transition-transform">
            לתיאום אירוע
          </a>
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
