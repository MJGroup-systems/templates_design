import React from 'react';
import { MapPin, Clock, Star, ArrowLeft, Menu, Instagram, Facebook, Phone } from 'lucide-react';

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

  /* RTL Marquee */
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

export default function RetroDiner() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#F4EFE6] text-[#252422] font-body overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* Header */}
      <header className="border-b-4 border-[#252422] bg-[#F4EFE6] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer">
            <span className="font-display text-3xl tracking-wide text-[#D1492E] drop-shadow-[2px_2px_0_#252422]">דיינר 66</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-bold text-lg">
            <a href="#" className="hover:text-[#D1492E] transition-colors relative group text-[#D1492E]">
              בית
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#D1492E] origin-right scale-x-100 transition-transform"></span>
            </a>
            <a href="#" className="hover:text-[#D1492E] transition-colors relative group">
              אודות
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#D1492E] origin-right scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
            <a href="#" className="hover:text-[#D1492E] transition-colors relative group">
              שירותים
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#D1492E] origin-right scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
            <a href="#" className="hover:text-[#D1492E] transition-colors relative group">
              צור קשר
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#D1492E] origin-right scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:flex bg-[#EAAA00] px-6 py-2 font-display text-lg retro-border retro-shadow retro-shadow-hover">
              הזמן שולחן
            </button>
            <button className="md:hidden">
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start gap-6 relative z-10">
          <div className="inline-block bg-[#2B6764] text-white px-4 py-1 rounded-full font-bold text-sm border-2 border-[#252422] -rotate-2">
            אמריקה זה כאן
          </div>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.9] text-[#252422]">
            טעם של <br />
            <span className="text-[#D1492E] relative inline-block mt-2">
              פעם,
              <div className="absolute -bottom-4 -right-4 w-full h-4 bg-[#EAAA00] -z-10 -rotate-1"></div>
            </span> <br />
            כאן ועכשיו.
          </h1>
          <p className="text-xl md:text-2xl font-semibold max-w-md mt-4 text-[#4a4844]">
            המבורגרים מושחתים שנעשים במקום, מילקשייקים שיחזירו אתכם לילדות, ואווירה של כביש 66.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <a href="#menu" className="bg-[#D1492E] text-white px-8 py-4 font-display text-2xl retro-border retro-shadow retro-shadow-hover flex items-center gap-3">
              לתפריט המלא <ArrowLeft className="w-6 h-6" />
            </a>
            <a href="#contact" className="bg-white px-8 py-4 font-display text-2xl retro-border retro-shadow retro-shadow-hover text-center">
              דרכי הגעה
            </a>
          </div>
        </div>

        <div className="relative mt-8 md:mt-0">
          {/* Starburst badge */}
          <div className="absolute -top-10 -right-8 z-20 w-36 h-36 starburst flex items-center justify-center rotate-12 retro-border">
            <div className="text-center rotate-[-12deg]">
              <span className="block font-display text-3xl leading-none text-[#252422]">100%</span>
              <span className="block font-bold text-sm leading-none mt-1 text-[#252422]">בקר טרי</span>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative bg-[#2B6764] p-4 retro-border retro-shadow rotate-3 transform hover:rotate-1 transition-transform duration-300">
            <div className="aspect-[4/5] bg-[#EBE3D5] retro-border overflow-hidden">
              <img
                src="/__mockup/images/retro/hero.jpg"
                alt="דיינר אמריקאי קלאסי"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="bg-[#EAAA00] border-y-4 border-[#252422] py-4 overflow-hidden relative z-20">
        <div className="marquee-wrapper font-display text-3xl tracking-wider text-[#252422] items-center">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center justify-around w-1/2 flex-shrink-0">
              <span>המבורגר סמאש מטורף</span>
              <Star className="w-6 h-6 text-[#D1492E] fill-current mx-4" />
              <span>פתוח עד השעות הקטנות</span>
              <Star className="w-6 h-6 text-[#D1492E] fill-current mx-4" />
              <span>מילקשייק כמו פעם</span>
              <Star className="w-6 h-6 text-[#D1492E] fill-current mx-4" />
              <span>אמריקה בישראל</span>
              <Star className="w-6 h-6 text-[#D1492E] fill-current mx-4" />
            </div>
          ))}
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="bg-[#2B6764] py-24 px-4 border-b-4 border-[#252422] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-28 md:mb-32">
            <h2 className="font-display text-5xl md:text-7xl text-[#F4EFE6] text-outline drop-shadow-[4px_4px_0_#252422]">
              המומלצים שלנו
            </h2>
            <p className="text-[#F4EFE6] font-bold text-xl mt-4">הכינו את הקיבה, זה הולך להיות מושחת</p>
          </div>

          <div className="grid md:grid-cols-3 gap-24 md:gap-8 mt-12">
            {/* Item 1 */}
            <div className="bg-[#F4EFE6] rounded-t-full pt-20 pb-8 px-6 flex flex-col items-center retro-border retro-shadow relative group">
              <div className="absolute -top-24 w-56 h-56 transition-transform duration-500 ease-out group-hover:-translate-y-6">
                <img src="/__mockup/images/retro/burger.png" alt="קלאסיק 66" className="w-full h-full object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]" />
              </div>
              <h3 className="font-display text-3xl mt-16 mb-3 text-[#252422]">קלאסיק 66</h3>
              <p className="text-center font-semibold text-[#4a4844] mb-6 flex-grow">
                שתי קציצות סמאש צרובות, גבינה אמריקאית נמסה, חסה פריכה, עגבנייה ורוטב סודי של הדיינר.
              </p>
              <div className="flex items-center justify-between w-full border-t-2 border-[#252422] pt-4">
                <span className="font-display text-3xl text-[#D1492E]">₪54</span>
                <button className="bg-[#EAAA00] px-6 py-2 font-bold retro-border retro-shadow-hover text-[#252422]">
                  הוסף
                </button>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-[#F4EFE6] rounded-t-full pt-20 pb-8 px-6 flex flex-col items-center retro-border retro-shadow relative group md:-translate-y-12">
              <div className="absolute -top-32 w-64 h-64 transition-transform duration-500 ease-out group-hover:-translate-y-6">
                <img src="/__mockup/images/retro/shake.png" alt="שייק תות" className="w-full h-full object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]" />
              </div>
              <h3 className="font-display text-3xl mt-16 mb-3 text-[#252422]">שייק נוסטלגיה</h3>
              <p className="text-center font-semibold text-[#4a4844] mb-6 flex-grow">
                גלידת תות איכותית שעורבבה למוות, הר של קצפת, סוכריות צבעוניות ודובדבן בשביל החיוך.
              </p>
              <div className="flex items-center justify-between w-full border-t-2 border-[#252422] pt-4">
                <span className="font-display text-3xl text-[#D1492E]">₪32</span>
                <button className="bg-[#EAAA00] px-6 py-2 font-bold retro-border retro-shadow-hover text-[#252422]">
                  הוסף
                </button>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-[#F4EFE6] rounded-t-full pt-20 pb-8 px-6 flex flex-col items-center retro-border retro-shadow relative group">
              <div className="absolute -top-24 w-60 h-60 transition-transform duration-500 ease-out group-hover:-translate-y-6">
                <img src="/__mockup/images/retro/fries.png" alt="צ'יפס שיכור" className="w-full h-full object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]" />
              </div>
              <h3 className="font-display text-3xl mt-16 mb-3 text-[#252422]">צ'יפס שיכור</h3>
              <p className="text-center font-semibold text-[#4a4844] mb-6 flex-grow">
                הר של צ'יפס פריך, מוצף ברוטב צ'דר חם, שברי בייקון טלה, בצל מטוגן וחלפיניו חריף אש.
              </p>
              <div className="flex items-center justify-between w-full border-t-2 border-[#252422] pt-4">
                <span className="font-display text-3xl text-[#D1492E]">₪42</span>
                <button className="bg-[#EAAA00] px-6 py-2 font-bold retro-border retro-shadow-hover text-[#252422]">
                  הוסף
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-20 flex justify-center">
            <button className="bg-transparent border-4 border-[#F4EFE6] text-[#F4EFE6] px-8 py-3 font-display text-2xl hover:bg-[#F4EFE6] hover:text-[#2B6764] transition-colors shadow-[6px_6px_0px_#252422]">
              לצפייה בתפריט המלא
            </button>
          </div>
        </div>
      </section>

      {/* Vibe / About Section */}
      <section id="about" className="bg-checkerboard py-24 px-4 border-b-4 border-[#252422]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 bg-[#D1492E] retro-border rotate-[-3deg]"></div>
            <div className="relative bg-white p-3 retro-border retro-shadow rotate-2 transition-transform hover:rotate-0 duration-300">
              <img src="/__mockup/images/retro/vibe.jpg" alt="אווירת הדיינר" className="w-full aspect-[4/3] object-cover retro-border" />
              <p className="font-display text-center mt-4 text-2xl text-[#4a4844] -rotate-2">הפינה הקבועה שלכם</p>
            </div>
          </div>

          <div className="bg-[#F4EFE6] p-8 md:p-12 retro-border retro-shadow order-1 md:order-2 relative">
             <div className="absolute -top-6 -right-6 bg-[#EAAA00] p-4 rounded-full retro-border rotate-12 hidden md:block">
               <Star className="w-8 h-8 text-[#252422] fill-current" />
             </div>
            <h2 className="font-display text-5xl mb-8 text-[#252422]">
              מסע בזמן,<br />
              <span className="text-[#2B6764] inline-block mt-2">בביס אחד.</span>
            </h2>
            <div className="space-y-5 font-bold text-lg text-[#4a4844]">
              <p>
                דיינר 66 הוקם מתוך געגוע לתקופה פשוטה יותר. לימים שבהם המבורגר היה המבורגר, מילקשייק היה חגיגה, והשירות היה תמיד עם חיוך.
              </p>
              <p>
                אנחנו טוחנים את הבקר שלנו כל בוקר, מכינים את הרטבים מאפס, ולא מתפשרים על כלום. כי קלאסיקה אמיתית אי אפשר לזייף.
              </p>
              <p>
                בואו לשבת על הבר, לשים שיר במכונת התקליטים (אוקיי, בפלייליסט שלנו), ופשוט ליהנות.
              </p>
            </div>
            <button className="mt-10 bg-[#252422] text-[#F4EFE6] px-8 py-3 font-display text-xl retro-border border-[#252422] retro-shadow-hover hover:text-[#EAAA00] transition-colors">
              קראו עוד על הסיפור שלנו
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="bg-[#D1492E] py-24 px-4 border-b-4 border-[#252422]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-6xl text-[#F4EFE6] mb-20 drop-shadow-[4px_4px_0_#252422]">
            מה אומרים עלינו ברחוב
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { name: "יואב ר.", text: "ההמבורגר הכי טוב שאכלתי מחוץ לניו יורק. נקודה." },
              { name: "מיכל ט.", text: "האווירה כאן פשוט מחשמלת! והמילקשייק? אל תתחילו איתי אפילו. שלמות בקוס." },
              { name: "דניאל ס.", text: "מקום מושלם למאנצ' של אמצע הלילה. הצ'יפס השיכור הוא חובת טעימה!" }
            ].map((review, i) => (
              <div key={i} className="bg-[#F4EFE6] p-8 retro-border retro-shadow relative text-right flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
                <div>
                  <div className="text-[#EAAA00] flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-6 h-6 fill-current drop-shadow-[1px_1px_0_#252422]" />
                    ))}
                  </div>
                  <p className="font-bold text-xl mb-8 text-[#252422] leading-relaxed">"{review.text}"</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2B6764] rounded-full retro-border flex items-center justify-center text-white font-display text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <p className="font-display text-xl text-[#2B6764]">{review.name}</p>
                </div>
                <div className="absolute top-4 left-4 text-8xl font-display text-[#EAAA00] opacity-20 leading-none">"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#252422] text-[#F4EFE6] pt-20 pb-8 px-4">
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
