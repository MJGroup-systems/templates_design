import React from 'react';
import { MapPin, Clock, Instagram, Facebook, Phone, Menu, Send } from 'lucide-react';

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

  .form-input {
    width: 100%;
    background-color: white;
    border: 4px solid #252422;
    padding: 1rem;
    font-family: 'Assistant', sans-serif;
    font-weight: 700;
    color: #252422;
    outline: none;
    transition: all 0.2s ease;
  }
  
  .form-input:focus {
    background-color: #fffde7;
    box-shadow: 4px 4px 0px #EAAA00;
  }
`;

export default function ContactDiner() {
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
            <a href={`${BASE}preview/modern-retro/Services`} className="hover:text-[#D1492E] transition-colors relative group">
              שירותים
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#D1492E] origin-right scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
            <a href={`${BASE}preview/modern-retro/Contact`} className="hover:text-[#D1492E] transition-colors relative group text-[#D1492E]">
              צור קשר
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#D1492E] origin-right scale-x-100 transition-transform"></span>
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

      {/* Main Content */}
      <section className="bg-[#F4EFE6] py-16 md:py-24 px-4 border-b-4 border-[#252422]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Form Side */}
          <div className="flex-1">
             <div className="inline-block bg-[#2B6764] text-white px-4 py-1 font-bold text-lg border-2 border-[#252422] -rotate-2 mb-6">
              תרימו טלפון!
            </div>
            <h1 className="font-display text-6xl md:text-7xl text-[#252422] mb-4">
              דברו <span className="text-[#D1492E] drop-shadow-[2px_2px_0_#252422]">איתנו</span>
            </h1>
            <p className="text-xl font-bold text-[#4a4844] mb-12 max-w-lg">
              יש לכם שאלה? רוצים להזמין שולחן מראש? או סתם לספר לנו כמה נהניתם? תשאירו פרטים ונחזור אליכם.
            </p>

            <form className="space-y-6 bg-checkerboard p-8 retro-border retro-shadow relative">
               <div className="absolute -top-6 -left-6 bg-[#EAAA00] w-16 h-16 rounded-full flex items-center justify-center retro-border rotate-12">
                 <Send className="w-8 h-8 text-[#252422] -ml-1 mt-1" />
               </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-display text-xl text-[#252422]">שם מלא</label>
                  <input type="text" className="form-input" placeholder="ג'ון טרבולטה" />
                </div>
                <div className="space-y-2">
                  <label className="font-display text-xl text-[#252422]">טלפון</label>
                  <input type="tel" dir="ltr" className="form-input text-right" placeholder="050-1234567" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-display text-xl text-[#252422]">נושא הפנייה</label>
                <select className="form-input appearance-none bg-white">
                  <option>הזמנת שולחן / אירוע</option>
                  <option>משלוחים</option>
                  <option>תלונה / הארה</option>
                  <option>אחר</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-display text-xl text-[#252422]">ההודעה שלכם</label>
                <textarea className="form-input resize-none" rows={4} placeholder="כתבו לנו מה שבא לכם..."></textarea>
              </div>
              <button type="button" className="w-full bg-[#D1492E] text-[#F4EFE6] px-8 py-4 font-display text-2xl retro-border retro-shadow-hover hover:bg-[#EAAA00] hover:text-[#252422] transition-colors mt-4">
                שלח הודעה
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="flex-1 lg:max-w-md">
            <div className="bg-[#2B6764] p-8 retro-border retro-shadow text-[#F4EFE6] h-full flex flex-col justify-between">
              
              <div>
                <h3 className="font-display text-4xl mb-10 text-outline drop-shadow-[2px_2px_0_#252422]">פרטי קשר</h3>
                
                <ul className="space-y-8 font-bold text-lg">
                  <li className="flex items-start gap-4">
                    <div className="bg-[#EAAA00] p-3 retro-border shrink-0 rotate-3">
                      <MapPin className="w-6 h-6 text-[#252422]" />
                    </div>
                    <div>
                      <h4 className="font-display text-2xl text-[#EAAA00]">הכתובת שלנו</h4>
                      <p>רחוב הברזל 12, רמת החייל<br/>תל אביב - יפו</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="bg-[#D1492E] p-3 retro-border shrink-0 -rotate-3">
                      <Phone className="w-6 h-6 text-[#F4EFE6]" />
                    </div>
                    <div>
                      <h4 className="font-display text-2xl text-[#EAAA00]">טלפון</h4>
                      <p dir="ltr" className="text-right">03-666-6666</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="bg-[#F4EFE6] p-3 retro-border shrink-0 rotate-6">
                      <Clock className="w-6 h-6 text-[#252422]" />
                    </div>
                    <div>
                      <h4 className="font-display text-2xl text-[#EAAA00]">שעות פתיחה</h4>
                      <p>א' - ד': 11:00 - 02:00</p>
                      <p>ה': 11:00 - 04:00</p>
                      <p>ו': 11:00 - 16:00</p>
                      <p>שבת: 18:00 - 03:00</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-12 bg-[#F4EFE6] p-2 retro-border rotate-2">
                <img 
                  src="/__mockup/images/retro/diner-exterior.jpg" 
                  alt="דיינר מבחוץ" 
                  className="w-full h-48 object-cover retro-border grayscale-[10%]" 
                />
              </div>

            </div>
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
