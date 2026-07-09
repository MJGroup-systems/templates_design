import React, { useEffect, useRef } from 'react';

const BASE = import.meta.env.BASE_URL;

// Custom hook for scroll-triggered reveal animations
const useScrollReveal = (options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        currentRef.classList.add('is-revealed');
        observer.unobserve(currentRef);
      }
    }, options);

    observer.observe(currentRef);
    return () => observer.disconnect();
  }, [options]);

  return ref;
};

// Section wrapper with animation
const RevealSection: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ 
  children, 
  className = "",
  delay = 0 
}) => {
  const ref = useScrollReveal();
  return (
    <div 
      ref={ref} 
      className={`reveal-wrapper ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function EditorialAboutPage() {
  return (
    <div dir="rtl" className="editorial-root min-h-screen font-sans selection:bg-[#9c462c] selection:text-white overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600&family=Frank+Ruhl+Libre:wght@300;400;500;700;900&display=swap');

        :root {
          --bg-color: #f4f0e6;
          --text-primary: #111111;
          --text-muted: #666666;
          --accent: #9c462c;
          --border-color: rgba(17, 17, 17, 0.15);
        }

        .editorial-root {
          background-color: var(--bg-color);
          color: var(--text-primary);
        }

        .font-serif {
          font-family: 'Frank Ruhl Libre', serif;
        }

        .font-sans {
          font-family: 'Assistant', sans-serif;
        }

        /* Smooth Scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom typography utilities */
        .drop-cap::first-letter {
          font-family: 'Frank Ruhl Libre', serif;
          font-size: 4.5rem;
          font-weight: 700;
          float: right;
          line-height: 0.8;
          margin-left: 0.75rem;
          margin-top: 0.2rem;
          color: var(--text-primary);
        }

        .text-balance {
          text-wrap: balance;
        }

        /* Reveal Animations */
        .reveal-wrapper {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 1s cubic-bezier(0.2, 0.8, 0.2, 1), 
                      transform 1s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .reveal-wrapper.is-revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-scale {
          clip-path: inset(100% 0 0 0);
          transform: scale(1.05);
          transition: clip-path 1.2s cubic-bezier(0.7, 0, 0.2, 1),
                      transform 1.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .is-revealed .reveal-scale {
          clip-path: inset(0 0 0 0);
          transform: scale(1);
        }

        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 1px;
          bottom: 0;
          left: 0;
          background-color: currentColor;
          transform-origin: bottom right;
          transition: transform 0.3s ease-out;
        }
        .nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }

        /* Image treatment */
        .editorial-img {
          filter: contrast(1.05) brightness(0.95) saturate(0.8);
          mix-blend-mode: multiply;
        }
      `}} />

      {/* FIXED NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-50 mix-blend-difference text-[#f4f0e6]">
        <div className="font-serif text-2xl font-medium tracking-tight">
          מיכל אבני.
        </div>
        <div className="flex gap-8 text-sm uppercase tracking-widest font-sans font-medium">
          <a href={`${BASE}preview/editorial-typography/Editorial`} className="nav-link hidden md:block">בית</a>
          <a href={`${BASE}preview/editorial-typography/About`} className="nav-link hidden md:block text-[var(--accent)]">אודות</a>
          <a href={`${BASE}preview/editorial-typography/Services`} className="nav-link hidden md:block">תחומי התמחות</a>
          <a href={`${BASE}preview/editorial-typography/Contact`} className="nav-link">יצירת קשר</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 border-b border-[var(--border-color)]">
        <div className="max-w-screen-2xl mx-auto">
          <RevealSection>
            <h1 className="font-serif text-[12vw] md:text-[8vw] leading-[0.85] font-light tracking-[-0.03em] mb-12">
              מאחורי <span className="italic">הקלעים.</span>
            </h1>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mt-12">
            <div className="md:col-span-5 relative">
              <RevealSection delay={200}>
                <div className="aspect-[4/5] w-full overflow-hidden group relative">
                  <img 
                    src="/__mockup/images/editorial-team.jpg" 
                    alt="צוות בפעולה" 
                    className="w-full h-full object-cover grayscale contrast-125 editorial-img transition-transform duration-[2s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[var(--accent)] mix-blend-overlay opacity-20"></div>
                </div>
              </RevealSection>
            </div>
            <div className="md:col-span-7 flex flex-col justify-center">
              <RevealSection delay={400}>
                <h3 className="text-sm uppercase tracking-widest mb-8 text-[var(--accent)] font-semibold">הפילוסופיה שלנו</h3>
                <div className="text-xl md:text-2xl leading-[1.8] font-light max-w-2xl space-y-6 text-balance">
                  <p className="drop-cap">
                    אנחנו מאמינים שעסקים הם לא רק דוחות אקסל וגרפים של צמיחה. הם רקמה אנושית עדינה שפועלת תחת לחצים עצומים בתוך סביבה תחרותית דינמית.
                  </p>
                  <p>
                    הוקמנו מתוך הבנה שההנהלות הטובות ביותר לא צריכות עוד יועץ שיגיד להן מה שהן כבר יודעות, אלא שותף לדרך שיעז לתת את נקודת המבט שכולם חוששים להשמיע. אסטרטגיה אמיתית כרוכה לעיתים קרובות בהחלטות כואבות וויתור על החלופות הנוחות.
                  </p>
                  <p>
                    הגישה שלנו משלבת אנליזה אכזרית בדיוקה עם הבנה עמוקה של הפסיכולוגיה הארגונית. אנחנו מפרקים מערכות מורכבות לגורמים, ומרכיבים אותן מחדש כך שיפעלו בסנכרון מושלם לקראת מטרה אחת, ברורה וחדה.
                  </p>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-32 px-6 md:px-12 bg-white/40">
        <div className="max-w-screen-2xl mx-auto">
          <RevealSection>
             <h2 className="text-sm uppercase tracking-widest mb-16 text-[var(--accent)] font-semibold">האנשים מאחורי האסטרטגיה</h2>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {[
              { name: "מיכל אבני", role: "מייסדת ושותפה מנהלת", img: "/__mockup/editorial-michal.jpg" },
              { name: "דויד לוי", role: "ראש מחקר ואסטרטגיה", img: "/__mockup/images/editorial-details.jpg" },
              { name: "שירה כהן", role: "מומחית לטרנספורמציה ארגונית", img: "/__mockup/editorial-collaboration.jpg" }
            ].map((member, i) => (
              <RevealSection key={i} delay={i * 200}>
                <div className="group cursor-pointer">
                  <div className="aspect-[3/4] w-full overflow-hidden mb-6 relative">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale contrast-125 editorial-img transition-transform duration-[2s] group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-3xl font-medium mb-2 group-hover:text-[var(--accent)] transition-colors">{member.name}</h3>
                  <p className="text-sm uppercase tracking-widest text-[var(--text-muted)]">{member.role}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-24 px-6 md:px-12 border-t border-[var(--border-color)]">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <RevealSection>
            <h2 className="font-serif text-[12vw] md:text-[8vw] leading-none mb-12">
              בואו <br/>
              <span className="italic text-[var(--accent)]">נדבר.</span>
            </h2>
            <a 
              href="mailto:contact@michalavni.com" 
              className="text-2xl md:text-4xl font-light hover:text-[var(--accent)] transition-colors inline-block border-b border-transparent hover:border-[var(--accent)] pb-2"
              dir="ltr"
            >
              contact@michalavni.com
            </a>
          </RevealSection>
          
          <RevealSection className="flex flex-col justify-end md:items-end md:text-left" delay={200}>
            <div className="space-y-12">
              <div dir="rtl">
                <h4 className="text-sm uppercase tracking-widest text-[var(--text-muted)] mb-4 text-right">משרד</h4>
                <p className="text-lg text-right">שדרות רוטשילד 22, קומה 14<br/>תל אביב, 6688218</p>
              </div>
              
              <div dir="rtl">
                <h4 className="text-sm uppercase tracking-widest text-[var(--text-muted)] mb-4 text-right">רשתות</h4>
                <div className="flex gap-6 justify-end" dir="ltr">
                  <a href="#" className="nav-link text-lg">LinkedIn</a>
                  <a href="#" className="nav-link text-lg">Medium</a>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
        
        <RevealSection>
          <div className="mt-32 pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-[var(--text-muted)] gap-4" dir="ltr">
            <p>© {new Date().getFullYear()} MICHAL AVNI STRATEGY. ALL RIGHTS RESERVED.</p>
            <p>DESIGNED BY MOCKUP SANDBOX</p>
          </div>
        </RevealSection>
      </footer>
    </div>
  );
}
