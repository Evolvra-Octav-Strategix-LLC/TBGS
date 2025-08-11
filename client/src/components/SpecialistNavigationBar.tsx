import { Link } from "wouter";

export default function SpecialistNavigationBar() {
  return (
    <div className="w-full bg-gray-100 border-b border-gray-300 sticky top-0 z-50">
      <div className="w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {/* TDS - Totaal Dak Specialist */}
          <Link href="/totaal-dak-specialist" className="group block">
            <div className="tbgs-red hover:bg-red-700 transition-colors p-6 text-center text-white">
              <div className="flex flex-col items-center space-y-3">
                <i className="fas fa-home text-3xl"></i>
                <div>
                  <div className="font-bold text-base">TDS</div>
                  <div className="text-sm opacity-90">Dak Specialist</div>
                </div>
              </div>
            </div>
          </Link>

          {/* TSS - Totaal Schoorsteen Specialist */}
          <Link href="/totaal-schoorsteen-specialist" className="group block">
            <div className="tbgs-blue hover:bg-blue-700 transition-colors p-6 text-center text-white">
              <div className="flex flex-col items-center space-y-3">
                <i className="fas fa-industry text-3xl"></i>
                <div>
                  <div className="font-bold text-base">TSS</div>
                  <div className="text-sm opacity-90">Schoorsteen Specialist</div>
                </div>
              </div>
            </div>
          </Link>

          {/* TOS - Totaal Onderhoud Specialist */}
          <Link href="/totaal-onderhoud-specialist" className="group block">
            <div className="tbgs-green hover:bg-green-700 transition-colors p-6 text-center text-white">
              <div className="flex flex-col items-center space-y-3">
                <i className="fas fa-tools text-3xl"></i>
                <div>
                  <div className="font-bold text-base">TOS</div>
                  <div className="text-sm opacity-90">Onderhoud Specialist</div>
                </div>
              </div>
            </div>
          </Link>

          {/* TBS - Totaal Bouw Specialist */}
          <Link href="/totaal-bouw-specialist" className="group block">
            <div className="tbgs-orange hover:bg-yellow-600 transition-colors p-6 text-center text-white">
              <div className="flex flex-col items-center space-y-3">
                <i className="fas fa-hammer text-3xl"></i>
                <div>
                  <div className="font-bold text-base">TBS</div>
                  <div className="text-sm opacity-90">Bouw Specialist</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
