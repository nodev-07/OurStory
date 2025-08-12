import { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";

export const SpecialMessage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const message = `Hey Qtu,

Tu perfect ahes... I know mazhyat khup habits ashya a jyane me saglyanna unintentionally hurt krun dete, saglyanna tr me ni sangu shkt but tula nakki sangu shakte ki.. "I lub uh more" more than any arguments, any misunderstandings, any problem, and offcourse, more than myself.. 

I know apn krun gheu sagl handle. Tuch tr ahe mazha better half.. mazh kuchupuchu ^_^ khup jiv a mazha tuzhyat... and tuzhe smallest hun smallest efforts pn me notice krte, tuzhya saglya feelings chi respect krte. as kadhich nko smju ki mala frk ni padat, khup padto.. tu sodun dilas tr mazh ky hoil he think krun pn mala radu yeta itka prem a mazh.

Tula vatt tu mazhya javal feelings share krtos tr mala avdt ni.. budhu, js tula mazhe eyes avdle hote ts mala tuzhi baby vali side avdte. I wish aplyat je kahi ahe he aasch raho nehmi.. mazhya ghri tu jawai mhnunch entry kravi... 

Thankyou.. manapasun.. tuzhya mule me badaltiye.. swtala smjun ghetiye.. prt swta kade laksh detiye.. tu nstas tr maybe me aj pn ti adhi valich antara rahili asti.. ekti, radnari, swtala kosnari..

Kadhi kadhi as vatt ki khrch universe ne apl bhetna arrange kel hot.. coincidence navta to.. me tr yenar pn navti, last moment la ready houn aleli.. ani tula bghun blank houn geleli.. tu tevha mazha konich navtas pn tri divya la tuzhya sobat bghun me chidli hoti.. aplyat kahich navt still mala tuzhya sobat bsaych hot rides madhe... 

Tula kadhi disel ka ni mahit ni... but tu think krtos tya peksha khup jast prem krte me tuzhyavr.. kadhi pasun krtiye mahit ni.. pn bs krtiye.. js radha la mahit navt ki kanha aplyala bhetel ka ni, bs ti prem krt rahili.. ts prem a mazh.. pn ata tuzhya life madhe radha ani rukhmini doghi malach banaych a.. banavshil na..?

Forever and always your bubuda,
with khup sara pyar ♡`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section id="message" ref={sectionRef} className="py-20 px-6 bg-gradient-romantic">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Heart size={60} className="mx-auto text-primary-foreground fill-primary-foreground/20 pulse-heart mb-6" />
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-foreground mb-6">
            A Message From My Heart
          </h2>
        </div>

        <div className="bg-background/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-glow border border-primary/20">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="space-y-6 text-foreground font-inter leading-relaxed">
              {message.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index}
                  className={`transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 200}ms`,
                    fontSize: paragraph.startsWith('My Dearest') ? '1.25rem' : '1rem',
                    fontWeight: paragraph.startsWith('My Dearest') || paragraph.includes('Forever and always') ? '500' : '400',
                    textAlign: paragraph.includes('Forever and always') ? 'right' : 'left',
                    fontStyle: paragraph.includes('Forever and always') ? 'italic' : 'normal'
                  } as React.CSSProperties}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};