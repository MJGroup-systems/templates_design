import React from 'react';
import { Heart, CalendarHeart, Sparkles, Stethoscope, Baby, Syringe, ClipboardList, Activity, MapPin, Phone } from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");
const BASE = import.meta.env.BASE_URL;

export default function Services() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#FFF8F3] text-[#2D3748] overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
          
          .font-friendly {
            font-family: 'Varela Round', system-ui, sans-serif;
          }
          
          @keyframes gentleFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-8px) rotate(-1deg); }
            75% { transform: translateY(4px) rotate(1deg); }
          }
          
          .animate-float {
            animation: gentleFloat 6s ease-in-out infinite;
          }
          
          .blob-shape-1 {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          
          .blob-shape-2 {
            border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          }
        `
      }} />

      <div className="font-friendly">
        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
          <a href={BASE + "preview/illustrative-playful/Playful"} className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <div className="bg-[#FF8FA3] p-2 rounded-2xl blob-shape-1 text-white">
              <Heart size={24} fill="currentColor" strokeWidth={0} />
            </div>
            <span className="text-2xl font-bold text-[#FF8FA3]">קליניקת טיפה</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-[#4A5568] font-medium">
            <a href={BASE + "preview/illustrative-playful/Playful"} className="hover:text-[#FF8FA3] transition-colors">עמוד הבית</a>
            <a href={BASE + "preview/illustrative-playful/About"} className="hover:text-[#FF8FA3] transition-colors">אודות</a>
            <a href={BASE + "preview/illustrative-playful/Services"} className="text-[#FF8FA3] transition-colors">שירותים</a>
            <a href={BASE + "preview/illustrative-playful/Contact"} className="hover:text-[#FF8FA3] transition-colors">צור קשר</a>
          </div>
          <a href={BASE + "preview/illustrative-playful/Contact"} className="hidden md:flex items-center gap-2 bg-[#7CBFBF] hover:bg-[#68a8a8] text-white px-6 py-2.5 rounded-full font-medium transition-all hover:shadow-lg hover:-translate-y-0.5 border-none">
            <CalendarHeart size={18} />
            <span>תיאום תור</span>
          </a>
        </nav>

        {/* Services Hero Section */}
        <section className="relative px-6 pt-12 pb-20 max-w-6xl mx-auto text-center">
          <div className="absolute top-10 right-20 w-64 h-64 bg-[#FFE8E8] rounded-full blur-3xl opacity-60 -z-10"></div>
          
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full text-[#7CBFBF] font-medium text-sm shadow-sm border border-[#E5F3F3] mb-6">
            <Sparkles size={16} />
            <span>השירותים והטיפולים שלנו</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#2D3748] mb-6">
            מה אנחנו <span className="text-[#FF8FA3]">מציעים?</span>
          </h1>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
            מבדיקות התפתחות שגרתיות ועד לליווי צמוד במקרים מורכבים - הכל תחת קורת גג אחת, בחיוך ובסבלנות.
          </p>
        </section>

        {/* Services List Grid */}
        <section className="bg-white py-16 px-6 relative rounded-t-[3rem] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {/* Service Item */}
            <div className="bg-[#FDF6F0] p-8 rounded-[2.5rem] flex gap-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-[#FF8FA3]/20">
              <div className="w-16 h-16 shrink-0 bg-[#FCEAE8] rounded-3xl flex items-center justify-center text-[#FF8FA3]">
                <Stethoscope size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[#2D3748]">בדיקות שגרתיות ומעקב</h3>
                <p className="text-[#4A5568] mb-4">בדיקות גדילה והתפתחות, שקילה, מדידות וייעוץ תזונתי לגיל הרך.</p>
                <div className="text-sm font-bold text-[#FF8FA3]">החל מ-150 ₪ לביקור</div>
              </div>
            </div>

            {/* Service Item */}
            <div className="bg-[#FDF6F0] p-8 rounded-[2.5rem] flex gap-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-[#7CBFBF]/20">
              <div className="w-16 h-16 shrink-0 bg-[#E5F3F3] rounded-3xl flex items-center justify-center text-[#7CBFBF]">
                <Syringe size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[#2D3748]">חיסונים באווירה רגועה</h3>
                <p className="text-[#4A5568] mb-4">חיסוני שגרה, חיסוני שפעת וחיסוני מטיילים עם מינימום כאב ומקסימום עידוד.</p>
                <div className="text-sm font-bold text-[#7CBFBF]">ללא עלות במסגרת הסל</div>
              </div>
            </div>

            {/* Service Item */}
            <div className="bg-[#FDF6F0] p-8 rounded-[2.5rem] flex gap-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-[#F6B721]/20">
              <div className="w-16 h-16 shrink-0 bg-[#FFF8E6] rounded-3xl flex items-center justify-center text-[#F6B721]">
                <Baby size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[#2D3748]">רפואת פגים ויילודים</h3>
                <p className="text-[#4A5568] mb-4">מעקב מיוחד אחרי פגים מיום השחרור מבית החולים ועד גיל הגן.</p>
                <div className="text-sm font-bold text-[#F6B721]">בתיאום אישי</div>
              </div>
            </div>

            {/* Service Item */}
            <div className="bg-[#FDF6F0] p-8 rounded-[2.5rem] flex gap-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-[#9D88E3]/20">
              <div className="w-16 h-16 shrink-0 bg-[#F2EEFA] rounded-3xl flex items-center justify-center text-[#9D88E3]">
                <Activity size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[#2D3748]">שירותי חירום ועזרה ראשונה</h3>
                <p className="text-[#4A5568] mb-4">מענה מיידי במצבי חום גבוה, פציעות קלות וזיהומים אקוטיים.</p>
                <div className="text-sm font-bold text-[#9D88E3]">זמין בשעות הפעילות</div>
              </div>
            </div>
            
            {/* Service Item */}
            <div className="bg-[#FDF6F0] p-8 rounded-[2.5rem] flex gap-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-[#FF8FA3]/20 md:col-span-2">
              <div className="w-16 h-16 shrink-0 bg-[#FCEAE8] rounded-3xl flex items-center justify-center text-[#FF8FA3]">
                <ClipboardList size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[#2D3748]">אבחון מקיף וחוות דעת שנייה</h3>
                <p className="text-[#4A5568] mb-4 max-w-2xl">
                  אנו מציעים שירותי אבחון מתקדמים וחוות דעת שנייה למגוון מצבים רפואיים, בשיתוף פעולה עם מומחים מכל קשת הרפואה. אנחנו מבינים שלפעמים צריך עוד עין מקצועית כדי לקבל החלטה בטוחה.
                </p>
                <a href={BASE + "preview/illustrative-playful/Contact"} className="inline-block mt-6 bg-[#7CBFBF] hover:bg-[#68a8a8] text-white px-8 py-3 rounded-full font-medium transition-all w-full md:w-auto shadow-md text-center border-none">
                  למידע נוסף
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Break */}
        <section className="bg-[#7CBFBF] py-20 px-6 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-full overflow-hidden leading-none transform rotate-180 mb-[-1px]">
             <svg viewBox="0 0 1440 120" className="w-full h-auto text-white fill-current" preserveAspectRatio="none">
               <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
             </svg>
           </div>
           
           <div className="max-w-4xl mx-auto text-center text-white relative z-10 mt-10">
             <h2 className="text-3xl md:text-4xl font-bold mb-6">מגיעים לטיפול? אל דאגה.</h2>
             <p className="text-lg opacity-90 mb-10 leading-relaxed">
               פינת ההמתנה שלנו מאובזרת במשחקים, ספרים והפתעות קטנות שיהפכו את זמן ההמתנה לכיף. אתם תגלו שקשה לשכנע אותם לחזור הביתה!
             </p>
             <div className="relative aspect-video max-w-3xl mx-auto bg-white/20 p-2 rounded-[2rem] backdrop-blur-sm border border-white/30">
               <img 
                 src={`${baseUrl}/images/tipa-services.png`} 
                 alt="טיפול בילדים" 
                 className="w-full h-full object-cover rounded-[1.5rem]"
               />
             </div>
           </div>
        </section>

        {/* Wavy Divider */}
        <div className="w-full overflow-hidden leading-none relative bg-[#2D3748]">
          <svg viewBox="0 0 1440 120" className="w-full h-auto text-[#7CBFBF] fill-current" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>

        {/* Footer/Contact CTA */}
        <footer id="contact" className="bg-[#2D3748] text-white pt-24 pb-12 px-6 relative overflow-hidden">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 text-right">
            {/* Clinic Info */}
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-[#FF8FA3] p-2 rounded-xl text-white">
                  <Heart size={20} fill="currentColor" strokeWidth={0} />
                </div>
                <span className="text-2xl font-bold">קליניקת טיפה</span>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-sm">
                מרפאת הילדים שלכם. סביבה בטוחה, מקצועית ונעימה לכל שלבי ההתפתחות של הילד.
              </p>
              
              <div className="w-48 h-48 -mr-6 mt-8 relative">
                 <img 
                   src={`${baseUrl}/images/tipa-clinic.png`} 
                   alt="מבנה המרפאה הידידותי" 
                   className="w-full h-full object-contain"
                 />
              </div>
            </div>
            
            {/* Contact Details */}
            <div className="md:col-span-4 space-y-6 md:pt-4">
              <h4 className="text-xl font-bold text-[#FF8FA3]">פרטי קשר</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="text-[#7CBFBF] shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">רחוב השמש 12, שכונת הפרחים,<br/>תל אביב</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-[#7CBFBF] shrink-0" size={20} />
                  <span className="text-gray-300" dir="ltr">03-123-4567</span>
                </li>
              </ul>
              <a href={BASE + "preview/illustrative-playful/Contact"} className="inline-block mt-6 bg-[#7CBFBF] hover:bg-[#68a8a8] text-white px-8 py-3 rounded-full font-medium transition-all w-full md:w-auto shadow-md text-center border-none">
                לתיאום פגישה
              </a>
            </div>
            
            {/* Hours */}
            <div className="md:col-span-3 space-y-6 md:pt-4">
              <h4 className="text-xl font-bold text-[#FF8FA3]">שעות פעילות</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center justify-between">
                  <span>א' - ה'</span>
                  <span dir="ltr">08:00 - 19:00</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>ו'</span>
                  <span dir="ltr">08:00 - 13:00</span>
                </li>
                <li className="flex items-center justify-between text-gray-500">
                  <span>שבת</span>
                  <span>סגור</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} קליניקת טיפה. כל הזכויות שמורות.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
