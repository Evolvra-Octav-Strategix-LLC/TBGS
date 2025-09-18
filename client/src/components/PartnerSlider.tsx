import { useRef, useEffect } from "react";
import defrancqLogo from "@/assets/partners/defrancq.png";
import unilinLogo from "@/assets/partners/unilin.png";
import veluxLogo from "@/assets/partners/velux.png";
import zinkUniqueLogo from "@/assets/partners/zinkunique.png";
import monierLogo from "@/assets/partners/monier.png";
import bmiLogo from "@/assets/partners/bmi.png";
import recticelLogo from "@/assets/partners/recticel.jpg";
import ubbinkLogo from "@/assets/partners/ubbink.png";
import soudalLogo from "@/assets/partners/soudal.png";
import icopalLogo from "@assets/icopal-logo-auto_width_440-3706882960_1758228709473.png";
import koramicLogo from "@assets/koramic-logo-vector-211622967_1758228709494.png";

interface PartnerSliderProps {
  className?: string;
  showTitle?: boolean;
  showDescription?: boolean;
}

export default function PartnerSlider({ 
  className = "", 
  showTitle = true, 
  showDescription = true 
}: PartnerSliderProps) {
  const logosRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Setup infinite scroll - robust initialization
    const initializeSlider = () => {
      if (logosRef.current) {
        const scroller = logosRef.current;
        const scrollerInner = scroller.querySelector('.scroller__inner') as HTMLElement;
        
        if (scrollerInner && scrollerInner.children.length > 0) {
          // Prevent double execution
          if (scroller.hasAttribute('data-animated')) {
            return;
          }
          
          // First, prepare the element for animation
          scrollerInner.style.opacity = '0';
          
          // Clone all images for infinite effect
          const images = Array.from(scrollerInner.children);
          images.forEach((img) => {
            const clone = img.cloneNode(true) as HTMLElement;
            clone.setAttribute('aria-hidden', 'true');
            scrollerInner.appendChild(clone);
          });
          
          // Enable animation smoothly
          requestAnimationFrame(() => {
            scroller.setAttribute('data-animated', 'true');
            scrollerInner.style.opacity = '1';
            // Force a repaint to ensure smooth start
            scrollerInner.offsetHeight;
          });
        }
      }
    };

    // Try immediate initialization
    initializeSlider();
    
    // Backup with slight delay if DOM isn't ready
    const timeoutId = setTimeout(initializeSlider, 50);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className={`py-8 lg:py-12 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              Onze partners
            </h2>
          </div>
        )}

        {/* Partner Logos Scroller */}
        <div className="scroller" data-speed="medium" ref={logosRef}>
          <div className="scroller__inner">
            <img src={defrancqLogo} alt="Defrancq" />
            <img src={unilinLogo} alt="Unilin" />
            <img src={veluxLogo} alt="Velux" />
            <img src={zinkUniqueLogo} alt="Zinkunique" />
            <img src={monierLogo} alt="Monier" />
            <img src={bmiLogo} alt="BMI" />
            <img src={recticelLogo} alt="Recticel" />
            <img src={ubbinkLogo} alt="Ubbink" />
            <img src={soudalLogo} alt="Soudal" />
            <img src={koramicLogo} alt="Koramic" />
            <img src={icopalLogo} alt="Icopal" />
          </div>
        </div>

        {showDescription && (
          <div className="text-center mt-8 max-w-2xl mx-auto">
            <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
              Wij werken uitsluitend met materialen van de hoogste kwaliteit, zodat we altijd duurzame en betrouwbare resultaten kunnen leveren voor uw project.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}