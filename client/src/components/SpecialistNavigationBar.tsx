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
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="w-full sticky top-0 z-40">
      <div className="w-full">
        <div className="grid grid-cols-4 gap-0">
          {/* TSS - Totaal Schoorsteen Specialist */}
          <Link href="/totaal-schoorsteen-specialist" className="group block">
            <div className={`tbgs-blue hover:bg-blue-700 transition-all duration-300 px-1 sm:px-3 text-center text-white ${isScrolled ? 'py-3' : 'py-4 sm:py-6'}`}>
              <div className="flex flex-col items-center justify-center">
                <img src={tssLogo} alt="TSS Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                <div className={`font-bold text-xs sm:text-sm transition-all duration-300 overflow-hidden ${isScrolled ? 'max-h-0 opacity-0 mt-0' : 'max-h-8 opacity-100 mt-2 sm:mt-3'}`}>
                  <span className="hidden sm:inline">Totaal Schoorsteen Specialist</span>
                  <span className="sm:hidden">Schoorsteen</span>
                </div>
              </div>
            </div>
          </Link>

          {/* TDS - Totaal Dak Specialist */}
          <Link href="/totaal-dak-specialist" className="group block">
            <div className={`tbgs-red hover:bg-red-700 transition-all duration-300 px-1 sm:px-3 text-center text-white ${isScrolled ? 'py-3' : 'py-4 sm:py-6'}`}>
              <div className="flex flex-col items-center justify-center">
                <img src={tdsLogo} alt="TDS Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                <div className={`font-bold text-xs sm:text-sm transition-all duration-300 overflow-hidden ${isScrolled ? 'max-h-0 opacity-0 mt-0' : 'max-h-8 opacity-100 mt-2 sm:mt-3'}`}>
                  <span className="hidden sm:inline">Totaal Dak Specialist</span>
                  <span className="sm:hidden">Dak</span>
                </div>
              </div>
            </div>
          </Link>

          {/* TOS - Totaal Onderhoud Specialist */}
          <Link href="/totaal-onderhoud-specialist" className="group block">
            <div className={`tbgs-green hover:bg-green-700 transition-all duration-300 px-1 sm:px-3 text-center text-white ${isScrolled ? 'py-3' : 'py-4 sm:py-6'}`}>
              <div className="flex flex-col items-center justify-center">
                <img src={tosLogo} alt="TOS Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                <div className={`font-bold text-xs sm:text-sm transition-all duration-300 overflow-hidden ${isScrolled ? 'max-h-0 opacity-0 mt-0' : 'max-h-8 opacity-100 mt-2 sm:mt-3'}`}>
                  <span className="hidden sm:inline">Totaal Onderhoud Specialist</span>
                  <span className="sm:hidden">Onderhoud</span>
                </div>
              </div>
            </div>
          </Link>

          {/* TBS - Totaal Bouw Specialist */}
          <Link href="/totaal-bouw-specialist" className="group block">
            <div className={`tbgs-orange hover:bg-yellow-600 transition-all duration-300 px-1 sm:px-3 text-center text-white ${isScrolled ? 'py-3' : 'py-4 sm:py-6'}`}>
              <div className="flex flex-col items-center justify-center">
                <img src={tbsLogo} alt="TBS Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                <div className={`font-bold text-xs sm:text-sm transition-all duration-300 overflow-hidden ${isScrolled ? 'max-h-0 opacity-0 mt-0' : 'max-h-8 opacity-100 mt-2 sm:mt-3'}`}>
                  <span className="hidden sm:inline">Totaal Bouw Specialist</span>
                  <span className="sm:hidden">Bouw</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
