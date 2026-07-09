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

export default function EditorialContactPage() {
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

        /* Form placeholder fix for floating labels */
        input:not(:placeholder-shown) + label,
        textarea:not(:placeholder-shown) + label {
          top: -1.5rem;
          font-size: 0.75rem;
          color: var(--text-primary);
        }
      `}} />

      <nav className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-50 mix-blend-difference text-[#f4f0e6]">
        <div className="font-serif text-2xl font-medium tracking-tight">
          מיכל אבני.
        </div>
        <div className="flex gap-8 text-sm uppercase tracking-widest font-sans font-medium">
          <a href={`${BASE}preview/editorial-typography/Editorial`} className="nav-link hidden md:block">בית</a>
          <a href={`${BASE}preview/editorial-typography/About`} className="nav-link hidden md:block">אודות</a>
          <a href={`${BASE}preview/editorial-typography/Services`} className="nav-link hidden md:block">תחומי התמחות</a>
          <a href={`${BASE}preview/editorial-typography/Contact`} className="nav-link text-[var(--accent)]">יצירת קשר</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 border-b border-[var(--border-color)]">
        <div className="max-w-screen-2xl mx-auto">
          <RevealSection>
            <h1 className="font-serif text-[12vw] md:text-[8vw] leading-[0.85] font-light tracking-[-0.03em] mb-12">
              הצעד <span className="italic">הראשון.</span>
            </h1>
          </RevealSection>
        </div>
      </section>

      {/* FORM & LOCATION SECTION */}
      <section className="py-24 px-6 md:px-12 bg-white/40">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <RevealSection>
              <h2 className="text-3xl font-serif font-medium mb-16 text-balance">נשמח לשמוע מכם. השאירו פרטים ונחזור אליכם בהקדם.</h2>
              <form className="space-y-16">
                <div className="relative">
                  <input type="text" id="name" placeholder=" " className="w-full bg-transparent border-b border-[var(--border-color)] py-4 text-xl focus:outline-none focus:border-[var(--text-primary)] transition-colors peer" />
                  <label htmlFor="name" className="absolute right-0 top-4 text-[var(--text-muted)] transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[var(--text-primary)] peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl cursor-text">שם מלא</label>
                </div>
                <div className="relative">
                  <input type="email" id="email" placeholder=" " className="w-full bg-transparent border-b border-[var(--border-color)] py-4 text-xl focus:outline-none focus:border-[var(--text-primary)] transition-colors peer text-right" dir="ltr" />
                  <label htmlFor="email" className="absolute right-0 top-4 text-[var(--text-muted)] transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[var(--text-primary)] peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl cursor-text">כתובת דוא״ל</label>
                </div>
                <div className="relative">
                  <textarea id="message" rows={4} placeholder=" " className="w-full bg-transparent border-b border-[var(--border-color)] py-4 text-xl focus:outline-none focus:border-[var(--text-primary)] transition-colors peer resize-none"></textarea>
                  <label htmlFor="message" className="absolute right-0 top-4 text-[var(--text-muted)] transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[var(--text-primary)] peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl cursor-text">הודעה (אופציונלי)</label>
                </div>
                <button type="button" className="group flex items-center gap-6 text-lg uppercase tracking-widest font-semibold hover:text-[var(--accent)] transition-colors mt-8">
                  <span>שלח הודעה</span>
                  <span className="inline-block transform transition-transform group-hover:-translate-x-3 text-2xl">←</span>
                </button>
              </form>
            </RevealSection>
          </div>
          
          <div className="flex flex-col">
            <RevealSection delay={200} className="h-full flex flex-col">
               <div className="aspect-[4/3] md:aspect-[3/4] w-full overflow-hidden mb-16 relative flex-grow">
                  <img 
                    src="/__mockup/images/editorial-office.jpg" 
                    alt="משרדי החברה" 
                    className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 editorial-img"
                  />
               </div>
               <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[var(--border-color)] shrink-0">
                 <div>
                    <h4 className="text-sm uppercase tracking-widest text-[var(--text-muted)] mb-4">משרד ראשי</h4>
                    <p className="text-lg">שדרות רוטשילד 22, קומה 14<br/>תל אביב, 6688218</p>
                 </div>
                 <div>
                    <h4 className="text-sm uppercase tracking-widest text-[var(--text-muted)] mb-4">יצירת קשר</h4>
                    <p className="text-lg leading-relaxed" dir="ltr">
                      contact@michalavni.com<br/>
                      +972 3 123 4567
                    </p>
                 </div>
               </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-24 px-6 md:px-12 border-t border-[var(--border-color)]">
        <RevealSection>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-[var(--text-muted)] gap-4" dir="ltr">
            <p>© {new Date().getFullYear()} MICHAL AVNI STRATEGY. ALL RIGHTS RESERVED.</p>
            <p>DESIGNED BY MOCKUP SANDBOX</p>
          </div>
        </RevealSection>
      </footer>
    </div>
  );
}
