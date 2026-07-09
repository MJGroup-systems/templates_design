import React, { useEffect, useRef } from 'react';

const BASE = import.meta.env.BASE_URL;

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

export default function EditorialServicesPage() {
  const services = [
    {
      id: "01",
      title: "אסטרטגיית צמיחה",
      description: "פיצוח מנועי הצמיחה הבאים של הארגון. אנחנו מנתחים את השוק, מזהים הזדמנויות חבויות, ובונים מפת דרכים ברורה שמחברת בין חזון שאפתני למציאות בשטח.",
      deliverables: ["מחקר שוק מעמיק ומיפוי מתחרים", "זיהוי מנועי צמיחה חדשים", "בניית מודלים עסקיים מותאמים", "מפת דרכים לביצוע כולל אבני דרך"]
    },
    {
      id: "02",
      title: "אדריכלות מותג",
      description: "בניית זהות ארגונית עמוקה. לא מדובר רק בלוגו או שפה עיצובית, אלא בליבת הערך שמבדילה אתכם מכל מתחרה, ואיך היא מתקשרת לכל בעל עניין.",
      deliverables: ["זיקוק הצעת הערך (Value Proposition)", "ארכיטקטורת מותגים ומיצוב", "בניית שפת המותג ואסטרטגיית המסרים", "הטמעה והדרכת שגרירי מותג בארגון"]
    },
    {
      id: "03",
      title: "טרנספורמציה ארגונית",
      description: "הובלת שינויים מורכבים בתוך מערכות אנושיות. משינוי מבנה ארגוני ועד הטמעת תרבות עבודה חדשה, תוך שמירה על יציבות ביצועית.",
      deliverables: ["אבחון תרבות ארגונית וחסמים", "עיצוב מבנה ארגוני תומך אסטרטגיה", "ליווי הנהלה בתהליך השינוי", "בניית מנגנוני תקשורת פנים-ארגונית"]
    },
    {
      id: "04",
      title: "ניהול משברים",
      description: "ניווט כירורגי במצבי אי-ודאות קיצוניים. בניית תרחישים, ייצוב המערכת, וקבלת החלטות קרות ומושכלות תחת לחץ.",
      deliverables: ["בניית תוכניות מגירה ותרחישי קיצון", "צוות תגובה מיידי וניהול אירוע", "אסטרטגיית תקשורת בעת משבר", "הפקת לקחים ובניית חוסן עתידי"]
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

        html { scroll-behavior: smooth; }

        .text-balance { text-wrap: balance; }

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

        .nav-link { position: relative; }
        .nav-link::after {
          content: ''; position: absolute; width: 100%; transform: scaleX(0); height: 1px; bottom: 0; left: 0;
          background-color: currentColor; transform-origin: bottom right; transition: transform 0.3s ease-out;
        }
        .nav-link:hover::after { transform: scaleX(1); transform-origin: bottom left; }

        .editorial-img {
          filter: contrast(1.05) brightness(0.95) saturate(0.8);
          mix-blend-mode: multiply;
        }
      `}} />

      <nav className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-50 mix-blend-difference text-[#f4f0e6]">
        <div className="font-serif text-2xl font-medium tracking-tight">
          מיכל אבני.
        </div>
        <div className="flex gap-8 text-sm uppercase tracking-widest font-sans font-medium">
          <a href={`${BASE}preview/editorial-typography/Editorial`} className="nav-link hidden md:block">בית</a>
          <a href={`${BASE}preview/editorial-typography/About`} className="nav-link hidden md:block">אודות</a>
          <a href={`${BASE}preview/editorial-typography/Services`} className="nav-link hidden md:block text-[var(--accent)]">תחומי התמחות</a>
          <a href={`${BASE}preview/editorial-typography/Contact`} className="nav-link">יצירת קשר</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <RevealSection>
            <h1 className="font-serif text-[12vw] md:text-[8vw] leading-[0.85] font-light tracking-[-0.03em] mb-12">
              האמנות של <span className="italic">הדיוק.</span>
            </h1>
          </RevealSection>
          <RevealSection delay={200}>
            <p className="text-xl md:text-3xl font-light text-balance max-w-3xl leading-relaxed">
              אנחנו לא מספקים דוחות עבי כרס שמעלים אבק. השירותים שלנו נועדו לייצר אימפקט מיידי ובר-קיימא, כזה שמשנה את המסלול של הארגון ומכין אותו לאתגרי המחר.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-24 px-6 md:px-12 border-t border-[var(--border-color)]">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
          <div className="md:col-span-5 md:sticky top-40 h-fit hidden md:block">
            <RevealSection>
              <div className="aspect-[3/4] w-full overflow-hidden relative">
                <img 
                  src="/__mockup/images/editorial-details.jpg" 
                  alt="פרטי מסמכים ותכנון" 
                  className="w-full h-full object-cover grayscale editorial-img"
                />
              </div>
            </RevealSection>
          </div>
          
          <div className="md:col-span-7 flex flex-col gap-32">
            {services.map((service, index) => (
              <RevealSection key={service.id}>
                <div className="relative">
                  <div className="flex items-end gap-6 mb-8 pb-6 border-b border-[var(--border-color)]">
                    <span className="font-serif text-4xl text-[var(--text-muted)] italic leading-none">{service.id}</span>
                    <h2 className="font-serif text-3xl md:text-5xl font-medium leading-none">{service.title}</h2>
                  </div>
                  <p className="text-xl md:text-2xl text-[var(--text-muted)] font-light leading-[1.6] max-w-2xl mb-12 text-balance">
                    {service.description}
                  </p>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-[var(--accent)] font-semibold mb-8">תוצרי הליבה בתהליך</h4>
                    <ul className="space-y-4">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-center gap-6 text-lg">
                          <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full shrink-0"></span>
                          <span className="text-[var(--text-primary)] font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-24 px-6 md:px-12 border-t border-[var(--border-color)] bg-white/40">
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
