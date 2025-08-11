import { Link } from "wouter";

export default function SpecialistNavigationBar() {
  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {/* TDS - Totaal Dak Specialist */}
          <Link href="/totaal-dak-specialist" className="group block">
            <div className="tbgs-red hover:bg-red-700 transition-colors p-4 text-center text-white">
              <div className="flex flex-col items-center space-y-2">
                <i className="fas fa-home text-2xl"></i>
                <div>
                  <div className="font-bold text-sm">TDS</div>
                  <div className="text-xs opacity-90">Dak Specialist</div>
                </div>
              </div>
            </div>
          </Link>

          {/* TSS - Totaal Schoorsteen Specialist */}
          <Link href="/totaal-schoorsteen-specialist" className="group block">
            <div className="tbgs-blue hover:bg-blue-700 transition-colors p-4 text-center text-white">
              <div className="flex flex-col items-center space-y-2">
                <i className="fas fa-industry text-2xl"></i>
                <div>
                  <div className="font-bold text-sm">TSS</div>
                  <div className="text-xs opacity-90">Schoorsteen Specialist</div>
                </div>
              </div>
            </div>
          </Link>

          {/* TOS - Totaal Onderhoud Specialist */}
          <Link href="/totaal-onderhoud-specialist" className="group block">
            <div className="tbgs-green hover:bg-green-700 transition-colors p-4 text-center text-white">
              <div className="flex flex-col items-center space-y-2">
                <i className="fas fa-tools text-2xl"></i>
                <div>
                  <div className="font-bold text-sm">TOS</div>
                  <div className="text-xs opacity-90">Onderhoud Specialist</div>
                </div>
              </div>
            </div>
          </Link>

          {/* TBS - Totaal Bouw Specialist */}
          <Link href="/totaal-bouw-specialist" className="group block">
            <div className="tbgs-orange hover:bg-yellow-600 transition-colors p-4 text-center text-white">
              <div className="flex flex-col items-center space-y-2">
                <i className="fas fa-hammer text-2xl"></i>
                <div>
                  <div className="font-bold text-sm">TBS</div>
                  <div className="text-xs opacity-90">Bouw Specialist</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
