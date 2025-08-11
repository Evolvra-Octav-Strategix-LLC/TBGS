import { Link } from "wouter";
import { useState, useEffect } from "react";
import tdsLogo from "@assets/TDS 545x642 (1)_1754935666048.png";
import tssLogo from "@assets/TSS 545x642 (1)_1754935673253.png";
import tosLogo from "@assets/TOS 545x642 (1)_1754935666048.png";
import tbsLogo from "@assets/TBS 545x642 (1)_1754935666048.png";

export default function SpecialistNavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="w-full">
        <div className="grid grid-cols-4 gap-0">
          {/* TSS - Totaal Schoorsteen Specialist */}
          <Link href="/totaal-schoorsteen-specialist" className="group block">
            <div className={`tbgs-blue hover:bg-blue-700 transition-all duration-300 px-3 sm:px-4 text-center text-white ${
              isScrolled ? 'py-4 sm:py-4' : 'py-6 sm:py-8'
            }`}>
              <div className={`flex flex-col items-center transition-all duration-300 ${
                isScrolled ? 'space-y-1 sm:space-y-2' : 'space-y-2 sm:space-y-3'
              }`}>
                <img src={tssLogo} alt="TSS Logo" className={`object-contain transition-all duration-300 ${
                  isScrolled ? 'w-10 h-10 sm:w-10 sm:h-10' : 'w-12 h-12 sm:w-12 sm:h-12'
                }`} />
                <div className="font-bold text-xs sm:text-xs">
                  Schoorsteen
                </div>
              </div>
            </div>
          </Link>

          {/* TDS - Totaal Dak Specialist */}
          <Link href="/totaal-dak-specialist" className="group block">
            <div className={`tbgs-red hover:bg-red-700 transition-all duration-300 px-3 sm:px-4 text-center text-white ${
              isScrolled ? 'py-4 sm:py-4' : 'py-6 sm:py-8'
            }`}>
              <div className={`flex flex-col items-center transition-all duration-300 ${
                isScrolled ? 'space-y-1 sm:space-y-2' : 'space-y-2 sm:space-y-3'
              }`}>
                <img src={tdsLogo} alt="TDS Logo" className={`object-contain transition-all duration-300 ${
                  isScrolled ? 'w-10 h-10 sm:w-10 sm:h-10' : 'w-12 h-12 sm:w-12 sm:h-12'
                }`} />
                <div className="font-bold text-xs sm:text-xs">
                  Dak
                </div>
              </div>
            </div>
          </Link>

          {/* TOS - Totaal Onderhoud Specialist */}
          <Link href="/totaal-onderhoud-specialist" className="group block">
            <div className={`tbgs-green hover:bg-green-700 transition-all duration-300 px-3 sm:px-4 text-center text-white ${
              isScrolled ? 'py-4 sm:py-4' : 'py-6 sm:py-8'
            }`}>
              <div className={`flex flex-col items-center transition-all duration-300 ${
                isScrolled ? 'space-y-1 sm:space-y-2' : 'space-y-2 sm:space-y-3'
              }`}>
                <img src={tosLogo} alt="TOS Logo" className={`object-contain transition-all duration-300 ${
                  isScrolled ? 'w-10 h-10 sm:w-10 sm:h-10' : 'w-12 h-12 sm:w-12 sm:h-12'
                }`} />
                <div className="font-bold text-xs sm:text-xs">
                  Onderhoud
                </div>
              </div>
            </div>
          </Link>

          {/* TBS - Totaal Bouw Specialist */}
          <Link href="/totaal-bouw-specialist" className="group block">
            <div className={`tbgs-orange hover:bg-yellow-600 transition-all duration-300 px-3 sm:px-4 text-center text-white ${
              isScrolled ? 'py-4 sm:py-4' : 'py-6 sm:py-8'
            }`}>
              <div className={`flex flex-col items-center transition-all duration-300 ${
                isScrolled ? 'space-y-1 sm:space-y-2' : 'space-y-2 sm:space-y-3'
              }`}>
                <img src={tbsLogo} alt="TBS Logo" className={`object-contain transition-all duration-300 ${
                  isScrolled ? 'w-10 h-10 sm:w-10 sm:h-10' : 'w-12 h-12 sm:w-12 sm:h-12'
                }`} />
                <div className="font-bold text-xs sm:text-xs">
                  Bouw
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
