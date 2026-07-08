import React, { useEffect, useRef, useState } from 'react';

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

export default function EditorialLandingPage() {
  const [activeService, setActiveService] = useState<number | null>(0);

  const services = [
    {
      id: "01",
      title: "אסטרטגיית צמיחה",
      description: "פיצוח מנועי הצמיחה הבאים של הארגון. אנחנו מנתחים את השוק, מזהים הזדמנויות חבויות, ובונים מפת דרכים ברורה שמחברת בין חזון שאפתני למציאות בשטח."
    },
    {
      id: "02",
      title: "אדריכלות מותג",
      description: "בניית זהות ארגונית עמוקה. לא מדובר רק בלוגו או שפה עיצובית, אלא בליבת הערך שמבדילה אתכם מכל מתחרה, ואיך היא מתקשרת לכל בעל עניין."
    },
    {
      id: "03",
      title: "טרנספורמציה ארגונית",
      description: "הובלת שינויים מורכבים בתוך מערכות אנושיות. משינוי מבנה ארגוני ועד הטמעת תרבות עבודה חדשה, תוך שמירה על יציבות ביצועית."
    },
    {
      id: "04",
      title: "ניהול משברים",
      description: "ניווט כירורגי במצבי אי-ודאות קיצוניים. בניית תרחישים, ייצוב המערכת, וקבלת החלטות קרות ומושכלות תחת לחץ."
    }
  ];

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
          <a href="#about" className="nav-link hidden md:block">אודות</a>
          <a href="#services" className="nav-link hidden md:block">תחומי התמחות</a>
          <a href="#contact" className="nav-link">יצירת קשר</a>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100dvh] flex flex-col justify-between pt-32 pb-10 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full flex-grow">
          <div className="md:col-span-8 flex flex-col justify-end pb-20 relative z-10">
            <RevealSection>
              <h1 className="font-serif text-[15vw] md:text-[11vw] leading-[0.85] font-light tracking-[-0.03em] mb-6 md:mb-12">
                בהירות
                <br />
                <span className="italic mr-8 md:mr-24 text-[14vw] md:text-[10vw]">בתוך</span> כאוס.
              </h1>
            </RevealSection>
            <RevealSection delay={200}>
              <p className="text-xl md:text-3xl font-light text-balance max-w-2xl leading-relaxed">
                ייעוץ אסטרטגי שקט, מדויק וחסר פשרות למנכ"לים, יזמים ודירקטוריונים שעומדים בפני צמתי ההחלטה הקריטיים ביותר.
              </p>
            </RevealSection>
          </div>
          
          <div className="md:col-span-4 relative h-[60vh] md:h-auto md:absolute md:top-20 md:left-12 md:w-[35vw] md:bottom-20 z-0">
            <RevealSection className="h-full w-full">
              <div className="w-full h-full overflow-hidden relative">
                <img 
                  src="/__mockup/editorial-architecture.jpg" 
                  alt="Abstract architecture representing structure and strategy" 
                  className="w-full h-full object-cover editorial-img reveal-scale"
                />
              </div>
            </RevealSection>
          </div>
        </div>

        <div className="flex justify-between items-end border-t border-[var(--border-color)] pt-6 text-sm uppercase tracking-widest text-[var(--text-muted)]">
          <p>תל אביב, ישראל</p>
          <p dir="ltr" className="flex items-center gap-2">SCROLL <span className="inline-block transform rotate-90">→</span></p>
        </div>
      </section>

      {/* 2. THE MANIFESTO / PULL QUOTE */}
      <section className="py-32 md:py-48 px-6 md:px-12 border-t border-[var(--border-color)]">
        <div className="max-w-5xl mx-auto text-center">
          <RevealSection>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl leading-[1.2] font-medium text-balance">
              "אסטרטגיה אינה מסמך במגירה. 
              <br className="hidden md:block"/> 
              היא האמנות של לומר <span className="italic text-[var(--accent)]">לא</span> לאלף רעיונות טובים, כדי להגיד <span className="italic text-[var(--accent)]">כן</span> לרעיון המצוין האחד שמשנה את כללי המשחק."
            </h2>
          </RevealSection>
        </div>
      </section>

      {/* 3. ABOUT / PORTRAIT */}
      <section id="about" className="py-24 px-6 md:px-12 bg-white/40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 max-w-screen-2xl mx-auto">
          <div className="md:col-span-5 relative">
            <RevealSection>
              <div className="aspect-[3/4] w-full overflow-hidden group">
                <img 
                  src="/__mockup/editorial-michal.jpg" 
                  alt="Michal Avni portrait" 
                  className="w-full h-full object-cover grayscale contrast-125 editorial-img transition-transform duration-[2s] group-hover:scale-105"
                />
              </div>
              <div className="mt-6 flex justify-between text-xs uppercase tracking-widest text-[var(--text-muted)] border-t border-[var(--border-color)] pt-4">
                <span>01</span>
                <span>מיכל אבני</span>
              </div>
            </RevealSection>
          </div>
          
          <div className="md:col-span-7 flex flex-col justify-center">
            <RevealSection delay={200}>
              <h3 className="text-sm uppercase tracking-widest mb-12 text-[var(--accent)] font-semibold">אודות</h3>
              <div className="text-xl md:text-2xl leading-[1.8] font-light max-w-2xl space-y-8 text-balance">
                <p className="drop-cap">
                  במשך למעלה משני עשורים, עמדתי בצמתים המורכבים ביותר של הכלכלה הישראלית והבינלאומית. מליווי של חדי-קרן בצמיחה היפר-מהירה, ועד להובלת תהליכי התייעלות ושינוי בתאגידי ענק.
                </p>
                <p>
                  הגישה שלי אינה מתבססת על תבניות מוכנות מראש. אני מאמינה שכל ארגון הוא אקוסיסטם אנושי ועסקי ייחודי, והתפקיד שלי הוא להיות המראה הצלולה ביותר עבור ההנהגה שלו. 
                </p>
                <p>
                  אני לא נותנת עצות מהיציע; אני יורדת למגרש, לומדת את הדנ"א של הארגון, ועוזרת לכם לנסח את הסיפור הבא שלכם – ואז לבנות את המכונה שתגרום לו לקרות.
                </p>
              </div>
              
              <div className="mt-16 pt-8 border-t border-[var(--border-color)] grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">20+</h4>
                  <p className="text-[var(--text-muted)]">שנות ניסיון בהנהלה בכירה וייעוץ</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">$2B+</h4>
                  <p className="text-[var(--text-muted)]">היקף עסקאות ומהלכים אסטרטגיים</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">50+</h4>
                  <p className="text-[var(--text-muted)]">חברות מלוות בישראל ובעולם</p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* 4. THE INDEX (SERVICES) */}
      <section id="services" className="py-32 px-6 md:px-12 max-w-screen-xl mx-auto">
        <RevealSection>
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 border-b border-[var(--text-primary)] pb-6">
            <h2 className="font-serif text-5xl md:text-7xl font-light">האינדקס.</h2>
            <p className="text-sm uppercase tracking-widest text-[var(--text-muted)] mt-4 md:mt-0">תחומי מומחיות מרכזיים</p>
          </div>
        </RevealSection>

        <div className="flex flex-col border-t border-[var(--border-color)]">
          {services.map((service, index) => (
            <RevealSection key={service.id} delay={index * 100}>
              <button 
                className="w-full relative group border-b border-[var(--border-color)] py-8 md:py-12 flex flex-col md:flex-row md:items-center text-right transition-colors hover:bg-white/50"
                onClick={() => setActiveService(activeService === index ? null : index)}
              >
                <div className="flex items-center gap-8 w-full md:w-1/2">
                  <span className="font-serif text-2xl md:text-4xl text-[var(--text-muted)] italic">
                    {service.id}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-serif font-medium group-hover:text-[var(--accent)] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <div className="w-full md:w-1/2 mt-6 md:mt-0 px-12 md:px-0">
                  <div 
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                      activeService === index 
                        ? 'grid-rows-[1fr] opacity-100' 
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <p className="overflow-hidden text-lg leading-relaxed text-[var(--text-muted)] font-light pl-4 md:pl-12 md:border-l border-[var(--border-color)] text-balance">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                {/* Plus/Minus Indicator */}
                <div className="hidden md:flex absolute left-8 w-6 h-6 items-center justify-center text-[var(--text-muted)]">
                  <div className="w-full h-[1px] bg-current absolute transition-transform duration-500"></div>
                  <div className={`w-[1px] h-full bg-current absolute transition-transform duration-500 ${activeService === index ? 'rotate-90 scale-0' : ''}`}></div>
                </div>
              </button>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* 5. THE METHODOLOGY (IMAGE SPREAD) */}
      <section className="py-24 px-6 md:px-12 overflow-hidden bg-white/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-screen-2xl mx-auto">
          <RevealSection className="order-2 md:order-1">
            <h2 className="text-sm uppercase tracking-widest mb-12 text-[var(--accent)] font-semibold">שיטת העבודה</h2>
            <div className="space-y-16">
              {[
                { step: "01", title: "אבחון ומיפוי", desc: "כניסה לעומק הארגון, ראיונות עם דמויות מפתח, ניתוח נתונים קרים וחשיפת הדינמיקות הסמויות שמניעות את המערכת." },
                { step: "02", title: "זיקוק הפתרון", desc: "תרגום של המורכבות לתובנה חדה אחת. בניית אסטרטגיה ברורה שניתנת לתקשור פשוט ובהיר לכל דרג בארגון." },
                { step: "03", title: "ביצוע והטמעה", desc: "אסטרטגיה ללא ביצוע היא ספרות יפה. אנו בונים יחד את מנגנוני הבקרה, המדדים ותוכנית הפעולה כדי לוודא שהחזון מתורגם לתוצאות." }
              ].map((item, i) => (
                <div key={item.step} className="flex gap-8 group">
                  <span className="font-serif text-xl italic text-[var(--text-muted)]">{item.step}</span>
                  <div>
                    <h3 className="text-2xl font-medium mb-4 group-hover:text-[var(--accent)] transition-colors">{item.title}</h3>
                    <p className="text-lg text-[var(--text-muted)] leading-relaxed max-w-md">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>

          <RevealSection className="order-1 md:order-2">
            <div className="aspect-square md:aspect-[4/5] overflow-hidden relative">
              <img 
                src="/__mockup/editorial-collaboration.jpg" 
                alt="Working document" 
                className="w-full h-full object-cover editorial-img grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 border border-white/20 m-6 mix-blend-overlay"></div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* 6. ENDORSEMENT / MINI CASE STUDY */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-[#1C1C1A] text-[#f4f0e6]">
        <div className="max-w-4xl mx-auto text-center">
          <RevealSection>
            <div className="w-16 h-[1px] bg-[var(--accent)] mx-auto mb-16"></div>
            <p className="font-serif text-3xl md:text-5xl leading-[1.4] font-light mb-16 text-balance">
              "מיכל לא רק פתרה לנו בעיה נקודתית, היא שינתה לחלוטין את הדרך שבה ההנהלה שלנו ניגשת לקבלת החלטות. יש לה יכולת נדירה לפרק אגו, להתמקד בעיקר, ולהוביל קבוצה של מנהלים דעתנים להסכמה ולפעולה."
            </p>
            <div>
              <p className="font-medium text-lg tracking-wide uppercase">יונתן כהן</p>
              <p className="text-sm text-white/50 tracking-widest mt-2">מנכ"ל ושותף מייסד, קבוצת נקסטק</p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* 7. FOOTER / CONTACT */}
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
