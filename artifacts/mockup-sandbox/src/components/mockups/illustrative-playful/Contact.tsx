import React from 'react';
import { Heart, CalendarHeart, Sparkles, MapPin, Phone, Mail, Send } from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");
const BASE = import.meta.env.BASE_URL;

export default function Contact() {
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
            <a href={BASE + "preview/illustrative-playful/Services"} className="hover:text-[#FF8FA3] transition-colors">שירותים</a>
            <a href={BASE + "preview/illustrative-playful/Contact"} className="text-[#FF8FA3] transition-colors">צור קשר</a>
          </div>
          <a href={BASE + "preview/illustrative-playful/Contact"} className="hidden md:flex items-center gap-2 bg-[#7CBFBF] hover:bg-[#68a8a8] text-white px-6 py-2.5 rounded-full font-medium transition-all hover:shadow-lg hover:-translate-y-0.5 border-none">
            <CalendarHeart size={18} />
            <span>תיאום תור</span>
          </a>
        </nav>

        {/* Contact Form Section */}
        <section className="relative px-6 pt-12 pb-24 max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="absolute top-20 right-0 w-64 h-64 bg-[#FFE8E8] rounded-full blur-3xl opacity-60 -z-10"></div>
          
          <div className="flex-1 space-y-8 z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full text-[#F6B721] font-medium text-sm shadow-sm border border-[#FFF8E6] mb-4">
                <Sparkles size={16} />
                <span>דברו איתנו</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#2D3748] mb-4">
                אנחנו כאן <span className="text-[#FF8FA3]">בשבילכם.</span>
              </h1>
              <p className="text-lg text-[#4A5568] leading-relaxed">
                יש לכם שאלה? רוצים לקבוע תור? מלאו את הטופס ונחזור אליכם בהקדם, או פשוט הרימו טלפון.
              </p>
            </div>
            
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-[#FDF6F0]">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#4A5568]">שם מלא</label>
                    <input type="text" className="w-full bg-[#FDF6F0] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#FF8FA3] outline-none transition-all" placeholder="לדוגמה: ישראל ישראלי" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#4A5568]">טלפון</label>
                    <input type="tel" className="w-full bg-[#FDF6F0] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#FF8FA3] outline-none transition-all" placeholder="05X-XXXXXXX" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#4A5568]">אימייל</label>
                  <input type="email" className="w-full bg-[#FDF6F0] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#FF8FA3] outline-none transition-all" placeholder="email@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#4A5568]">איך נוכל לעזור?</label>
                  <textarea rows={4} className="w-full bg-[#FDF6F0] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#FF8FA3] outline-none transition-all resize-none" placeholder="ספרו לנו קצת על סיבת הפנייה..."></textarea>
                </div>
                
                <button type="button" className="w-full bg-[#FF8FA3] hover:bg-[#ff7b92] text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                  <Send size={20} />
                  <span>שליחת הודעה</span>
                </button>
              </form>
            </div>
          </div>
          
          <div className="flex-1 space-y-8 relative z-10 md:pt-16">
             <div className="relative aspect-[4/3] mb-8">
               <div className="absolute inset-0 bg-[#E5F3F3] blob-shape-2 scale-105 opacity-80"></div>
               <img 
                 src={`${baseUrl}/images/tipa-waiting.png`} 
                 alt="חדר ההמתנה שלנו" 
                 className="relative z-10 w-full h-full object-cover rounded-[3rem] shadow-lg animate-float"
                 style={{ animationDelay: '0.5s' }}
               />
             </div>
             
             <div className="space-y-6 bg-[#FDF6F0] p-8 rounded-[2.5rem]">
               <h3 className="text-xl font-bold text-[#2D3748] mb-4">מידע שימושי</h3>
               
               <div className="flex items-start gap-4">
                 <div className="bg-white p-3 rounded-2xl text-[#7CBFBF] shadow-sm mt-1">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <div className="font-bold text-[#2D3748]">כתובתנו</div>
                   <div className="text-[#4A5568]">רחוב השמש 12, שכונת הפרחים<br/>תל אביב, 6543210</div>
                 </div>
               </div>
               
               <div className="flex items-start gap-4">
                 <div className="bg-white p-3 rounded-2xl text-[#7CBFBF] shadow-sm mt-1">
                   <Phone size={24} />
                 </div>
                 <div>
                   <div className="font-bold text-[#2D3748]">טלפון</div>
                   <div className="text-[#4A5568]" dir="ltr">03-123-4567</div>
                 </div>
               </div>
               
               <div className="flex items-start gap-4">
                 <div className="bg-white p-3 rounded-2xl text-[#7CBFBF] shadow-sm mt-1">
                   <Mail size={24} />
                 </div>
                 <div>
                   <div className="font-bold text-[#2D3748]">אימייל</div>
                   <div className="text-[#4A5568]">hello@tipa-clinic.co.il</div>
                 </div>
               </div>
             </div>
          </div>
        </section>

        {/* Wavy Divider */}
        <div className="w-full overflow-hidden leading-none relative bg-[#2D3748]">
          <svg viewBox="0 0 1440 120" className="w-full h-auto text-[#FFF8F3] fill-current transform rotate-180 mb-[-1px]" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>

        {/* Footer/Contact CTA */}
        <footer id="contact" className="bg-[#2D3748] text-white pt-12 pb-12 px-6 relative overflow-hidden">
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
