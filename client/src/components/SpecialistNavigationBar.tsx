import { Link } from "wouter";
import tdsLogo from "@assets/TDS 545x642 (1)_1754935666048.png";
import tssLogo from "@assets/TSS 545x642 (1)_1754935673253.png";
import tosLogo from "@assets/TOS 545x642 (1)_1754935666048.png";
import tbsLogo from "@assets/TBS 545x642 (1)_1754935666048.png";

export default function SpecialistNavigationBar() {
  return (
    <div className="w-full sticky top-0 z-50">
      <div className="w-full">
        <div className="grid grid-cols-4 gap-0">
          {/* TSS - Totaal Schoorsteen Specialist */}
          <Link href="/totaal-schoorsteen-specialist" className="group block">
            <div className="tbgs-blue hover:bg-blue-700 transition-colors px-1 sm:px-3 py-4 sm:py-6 text-center text-white">
              <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                <img src={tssLogo} alt="TSS Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                <div className="font-bold text-xs">
                  Schoorsteen
                </div>
              </div>
            </div>
          </Link>

          {/* TDS - Totaal Dak Specialist */}
          <Link href="/totaal-dak-specialist" className="group block">
            <div className="tbgs-red hover:bg-red-700 transition-colors px-1 sm:px-3 py-4 sm:py-6 text-center text-white">
              <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                <img src={tdsLogo} alt="TDS Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                <div className="font-bold text-xs">
                  Dak
                </div>
              </div>
            </div>
          </Link>

          {/* TOS - Totaal Onderhoud Specialist */}
          <Link href="/totaal-onderhoud-specialist" className="group block">
            <div className="tbgs-green hover:bg-green-700 transition-colors px-1 sm:px-3 py-4 sm:py-6 text-center text-white">
              <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                <img src={tosLogo} alt="TOS Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                <div className="font-bold text-xs">
                  Onderhoud
                </div>
              </div>
            </div>
          </Link>

          {/* TBS - Totaal Bouw Specialist */}
          <Link href="/totaal-bouw-specialist" className="group block">
            <div className="tbgs-orange hover:bg-yellow-600 transition-colors px-1 sm:px-3 py-4 sm:py-6 text-center text-white">
              <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                <img src={tbsLogo} alt="TBS Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                <div className="font-bold text-xs">
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
