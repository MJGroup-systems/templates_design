import React from 'react';
import { Heart, Stethoscope, Baby, Phone, MapPin, Clock, ArrowLeft, CalendarHeart, Sparkles } from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");
const BASE = import.meta.env.BASE_URL;

export default function PlayfulClinic() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#FFF8F3] text-[#2D3748] overflow-hidden">
      {/* Import Hebrew friendly font and custom animations */}
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
            <a href={BASE + "preview/illustrative-playful/Services"} className="hover:text-[#FF8FA3] transition-colors">השירותים שלנו</a>
            <a href={BASE + "preview/illustrative-playful/About"} className="hover:text-[#FF8FA3] transition-colors">הגישה שלנו</a>
            <a href={BASE + "preview/illustrative-playful/Contact"} className="hover:text-[#FF8FA3] transition-colors">יצירת קשר</a>
          </div>
          <a href={BASE + "preview/illustrative-playful/Contact"} className="hidden md:flex items-center gap-2 bg-[#7CBFBF] hover:bg-[#68a8a8] text-white px-6 py-2.5 rounded-full font-medium transition-all hover:shadow-lg hover:-translate-y-0.5">
            <CalendarHeart size={18} />
            <span>תיאום תור</span>
          </a>
        </nav>

        {/* Hero Section */}
        <section className="relative px-6 pt-12 pb-24 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFE8E8] rounded-full blur-3xl opacity-60 -z-10"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#E5F3F3] rounded-full blur-3xl opacity-60 -z-10"></div>
          
          {/* Hero Content */}
          <div className="flex-1 space-y-6 z-10 text-center md:text-right">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full text-[#7CBFBF] font-medium text-sm shadow-sm border border-[#E5F3F3]">
              <Sparkles size={16} />
              <span>רפואת ילדים באווירה אחרת</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#2D3748]">
              רפואת ילדים <br className="hidden md:block" />
              <span className="text-[#FF8FA3]">בגובה העיניים.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#4A5568] max-w-lg leading-relaxed">
              סביבה חמה, מרגיעה ומקצועית שילדים אוהבים והורים סומכים עליה. כי הבריאות של הילד שלכם מתחילה בחיוך.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
              <a href={BASE + "preview/illustrative-playful/Contact"} className="w-full sm:w-auto bg-[#FF8FA3] hover:bg-[#ff7b92] text-white px-8 py-3.5 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                <span>קבעו תור עכשיו</span>
                <ArrowLeft size={20} />
              </a>
              <button className="w-full sm:w-auto bg-white hover:bg-[#FDF3E7] text-[#4A5568] px-8 py-3.5 rounded-full font-medium text-lg transition-all shadow-sm flex items-center justify-center gap-2">
                <Phone size={20} className="text-[#7CBFBF]" />
                <span>03-123-4567</span>
              </button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="flex-1 relative z-10 w-full max-w-md md:max-w-none">
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-[#FCEAE8] blob-shape-1 scale-90"></div>
              <img 
                src={`${baseUrl}/images/tipa-hero.png`} 
                alt="רופאה מסבירה פנים וילד מחייך" 
                className="relative z-10 w-full h-full object-contain animate-float"
              />
            </div>
          </div>
        </section>

        {/* Wavy Divider */}
        <div className="w-full overflow-hidden leading-none relative -mb-1">
          <svg viewBox="0 0 1440 120" className="w-full h-auto text-[#FDF6F0] fill-current" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>

        {/* Services Section */}
        <section id="services" className="bg-[#FDF6F0] py-20 px-6">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748]">איך אנחנו יכולים לעזור?</h2>
              <p className="text-[#4A5568] text-lg max-w-2xl mx-auto">
                המרפאה שלנו מציעה מגוון שירותים רפואיים, כולם ניתנים באהבה, בסבלנות, ובגישה שמותאמת לילדים.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-right group border-2 border-transparent hover:border-[#FF8FA3]/20">
                <div className="w-16 h-16 bg-[#FCEAE8] rounded-3xl flex items-center justify-center mb-6 text-[#FF8FA3] group-hover:scale-110 transition-transform">
                  <Stethoscope size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#2D3748]">בדיקות שגרתיות</h3>
                <p className="text-[#4A5568] leading-relaxed">
                  מעקב התפתחות רגוע ונעים. אנחנו הופכים את הבדיקה למשחק כדי שהילדים ירגישו בנוח וישתפו פעולה בשמחה.
                </p>
              </div>
              
              {/* Service 2 */}
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-right group border-2 border-transparent hover:border-[#7CBFBF]/20">
                <div className="w-16 h-16 bg-[#E5F3F3] rounded-3xl flex items-center justify-center mb-6 text-[#7CBFBF] group-hover:scale-110 transition-transform">
                  <Heart size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#2D3748]">חיסונים בחיוך</h3>
                <p className="text-[#4A5568] leading-relaxed">
                  גישה עדינה שמפחיתה חרדה וכאב. בעזרת הסחות דעת נעימות וקסמים קטנים, הדקירה עוברת כמעט בלי לשים לב.
                </p>
              </div>
              
              {/* Service 3 */}
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-right group border-2 border-transparent hover:border-[#FFD166]/20">
                <div className="w-16 h-16 bg-[#FFF8E6] rounded-3xl flex items-center justify-center mb-6 text-[#F6B721] group-hover:scale-110 transition-transform">
                  <Baby size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#2D3748]">הדרכת הורים</h3>
                <p className="text-[#4A5568] leading-relaxed">
                  הורות היא מסע מלא שאלות. אנחנו כאן כדי לתת מענה מקצועי, להקשיב לחששות שלכם ולספק ייעוץ והכוונה.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Wavy Divider (Reversed) */}
        <div className="w-full overflow-hidden leading-none relative bg-white">
          <svg viewBox="0 0 1440 120" className="w-full h-auto text-[#FDF6F0] fill-current transform rotate-180" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>

        {/* About/Approach Section */}
        <section id="about" className="bg-white py-20 px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="flex-1 space-y-6 text-right relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-[#2D3748] leading-tight">
                רפואה שמרגישה <br/>
                <span className="text-[#7CBFBF]">כמו בית.</span>
              </h2>
              <p className="text-lg text-[#4A5568] leading-relaxed">
                בקליניקת טיפה אנחנו מאמינים שביקור אצל הרופא לא צריך להיות חוויה מפחידה. עיצבנו את המרפאה שלנו במיוחד כדי להרגיע, לעודד סקרנות ולתת לילדים תחושת ביטחון מלאה.
              </p>
              <p className="text-lg text-[#4A5568] leading-relaxed">
                פינות המשחק, הצבעים הרכים והצוות המיומן שלנו עובדים יחד כדי להפוך כל טיפול לחוויה חיובית, בזמן שאתם ההורים מקבלים את המענה הרפואי המקצועי והעדכני ביותר.
              </p>
              
              <div className="pt-6">
                <div className="bg-[#FFF8F3] p-6 rounded-3xl inline-block border border-[#FFE8E8]">
                  <p className="text-[#FF8FA3] font-bold italic text-lg">
                    "סוף סוף מצאנו מרפאה שהילדה שמחה ללכת אליה. הצוות פשוט מדהים!"
                  </p>
                  <p className="text-sm text-[#4A5568] mt-2 font-medium">- מיכל, אמא של נועה</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative z-10">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-[#E5F3F3] blob-shape-2 scale-95 opacity-80"></div>
                <img 
                  src={`${baseUrl}/images/tipa-family.png`} 
                  alt="משפחה מאושרת במרפאה" 
                  className="relative z-10 w-full h-full object-contain animate-float"
                  style={{ animationDelay: '1s' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer/Contact CTA */}
        <footer id="contact" className="bg-[#2D3748] text-white pt-24 pb-12 px-6 relative overflow-hidden">
          {/* Cute Top Wave for Footer */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1440 120" className="w-full h-auto text-white fill-current" preserveAspectRatio="none">
              <path d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg>
          </div>
          
          <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-12 gap-12 text-right">
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
