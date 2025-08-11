import { Link } from "wouter";
import tdsLogo from "@assets/TDS 545x642 (1)_1754935666048.png";
import tssLogo from "@assets/TSS 545x642 (1)_1754935673253.png";
import tosLogo from "@assets/TOS 545x642 (1)_1754935666048.png";
import tbsLogo from "@assets/TBS 545x642 (1)_1754935666048.png";

export default function SpecialistNavigationBar() {
  return (
    <div className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {/* TDS - Totaal Dak Specialist */}
          <Link href="/totaal-dak-specialist" className="group block">
            <div className="tbgs-red hover:bg-red-700 transition-colors px-4 py-3 text-center text-white">
              <div className="flex items-center justify-center space-x-3">
                <img src={tdsLogo} alt="TDS Logo" className="w-8 h-8 object-contain flex-shrink-0" />
                <div className="text-left">
                  <div className="font-bold text-sm leading-tight">Totaal Dak</div>
                  <div className="text-xs opacity-90 leading-tight">Specialist</div>
                </div>
              </div>
            </div>
          </Link>

          {/* TSS - Totaal Schoorsteen Specialist */}
          <Link href="/totaal-schoorsteen-specialist" className="group block">
            <div className="tbgs-blue hover:bg-blue-700 transition-colors px-4 py-3 text-center text-white">
              <div className="flex items-center justify-center space-x-3">
                <img src={tssLogo} alt="TSS Logo" className="w-8 h-8 object-contain flex-shrink-0" />
                <div className="text-left">
                  <div className="font-bold text-sm leading-tight">Totaal Schoorsteen</div>
                  <div className="text-xs opacity-90 leading-tight">Specialist</div>
                </div>
              </div>
            </div>
          </Link>

          {/* TOS - Totaal Onderhoud Specialist */}
          <Link href="/totaal-onderhoud-specialist" className="group block">
            <div className="tbgs-green hover:bg-green-700 transition-colors px-4 py-3 text-center text-white">
              <div className="flex items-center justify-center space-x-3">
                <img src={tosLogo} alt="TOS Logo" className="w-8 h-8 object-contain flex-shrink-0" />
                <div className="text-left">
                  <div className="font-bold text-sm leading-tight">Totaal Onderhoud</div>
                  <div className="text-xs opacity-90 leading-tight">Specialist</div>
                </div>
              </div>
            </div>
          </Link>

          {/* TBS - Totaal Bouw Specialist */}
          <Link href="/totaal-bouw-specialist" className="group block">
            <div className="tbgs-orange hover:bg-yellow-600 transition-colors px-4 py-3 text-center text-white">
              <div className="flex items-center justify-center space-x-3">
                <img src={tbsLogo} alt="TBS Logo" className="w-8 h-8 object-contain flex-shrink-0" />
                <div className="text-left">
                  <div className="font-bold text-sm leading-tight">Totaal Bouw</div>
                  <div className="text-xs opacity-90 leading-tight">Specialist</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
