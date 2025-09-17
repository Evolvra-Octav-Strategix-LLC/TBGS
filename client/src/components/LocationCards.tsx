import { Link } from "wouter";

interface LocationCardsProps {
  onOpenContactModal?: () => void;
  showCTA?: boolean;
  className?: string;
  specialist?: "dak" | "schoorsteen" | "onderhoud" | "bouw";
}

export default function LocationCards({ onOpenContactModal, showCTA = true, className = "", specialist }: LocationCardsProps) {
  // Show Belgium section for all specialists except "bouw"
  const showBelgiumSection = specialist !== "bouw";
  return (
    <div className={`grid lg:grid-cols-2 gap-16 items-center ${className}`} data-testid="location-cards-container">
      {/* Left Side - Service Areas */}
      <div className="space-y-8">
        {/* Nederland */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mr-4">
              <span className="text-2xl">🇳🇱</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Nederland</h3>
              <p className="text-slate-600">Brabant & omstreken</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-slate-900 mb-3">Hoofdlocaties</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 w-4 mr-2"></i>
                  <Link href="/nl/eindhoven" className="hover:text-tbgs-navy font-medium" data-testid="link-location-eindhoven">Eindhoven</Link>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 w-4 mr-2"></i>
                  <Link href="/nl/nuenen" className="hover:text-tbgs-navy font-medium" data-testid="link-location-nuenen">Nuenen</Link>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 w-4 mr-2"></i>
                  <Link href="/nl/veldhoven" className="hover:text-tbgs-navy font-medium" data-testid="link-location-veldhoven">Veldhoven</Link>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 w-4 mr-2"></i>
                  <Link href="/nl/best" className="hover:text-tbgs-navy font-medium" data-testid="link-location-best">Best</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-3">Ook beschikbaar</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 w-4 mr-2"></i>
                  <Link href="/nl/son-en-breugel" className="hover:text-tbgs-navy font-medium" data-testid="link-location-son-en-breugel">Son en Breugel</Link>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 w-4 mr-2"></i>
                  <Link href="/nl/geldrop" className="hover:text-tbgs-navy font-medium" data-testid="link-location-geldrop">Geldrop</Link>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 w-4 mr-2"></i>
                  <Link href="/nl/mierlo" className="hover:text-tbgs-navy font-medium" data-testid="link-location-mierlo">Mierlo</Link>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 w-4 mr-2"></i>
                  <Link href="/nl/waalre" className="hover:text-tbgs-navy font-medium" data-testid="link-location-waalre">Waalre</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* België */}
        {showBelgiumSection && (
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
              <span className="text-2xl">🇧🇪</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">België</h3>
              <p className="text-slate-600">Provincie Limburg</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-slate-900 mb-3">Actieve gebieden</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 w-4 mr-2"></i>
                  <Link href="/be/retie" className="hover:text-tbgs-navy font-medium" data-testid="link-location-retie">Retie</Link>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 w-4 mr-2"></i>
                  <Link href="/be/lommel" className="hover:text-tbgs-navy font-medium" data-testid="link-location-lommel">Lommel</Link>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 w-4 mr-2"></i>
                  <Link href="/be/hamont-achel" className="hover:text-tbgs-navy font-medium" data-testid="link-location-hamont-achel">Hamont-Achel</Link>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 w-4 mr-2"></i>
                  <Link href="/be/hamont" className="hover:text-tbgs-navy font-medium" data-testid="link-location-hamont">Hamont</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-3">Aangrenzende</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 w-4 mr-2"></i>
                  <Link href="/be/pelt" className="hover:text-tbgs-navy font-medium" data-testid="link-location-pelt">Pelt</Link>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 w-4 mr-2"></i>
                  <Link href="/be/sint-huibrechts-lille" className="hover:text-tbgs-navy font-medium" data-testid="link-location-sint-huibrechts-lille">Sint-Huibrechts-Lille</Link>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 w-4 mr-2"></i>
                  <Link href="/be/overpelt" className="hover:text-tbgs-navy font-medium" data-testid="link-location-overpelt">Overpelt</Link>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 w-4 mr-2"></i>
                  <Link href="/be/neerpelt" className="hover:text-tbgs-navy font-medium" data-testid="link-location-neerpelt">Neerpelt</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        )}
      </div>

      {/* Right Side - Interactive CTA */}
      {showCTA && (
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-tbgs-navy to-blue-700 text-white rounded-3xl p-10 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-calendar-check text-3xl"></i>
              </div>
              <h3 className="text-3xl font-bold mb-4">Gratis inspectie in 24u</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                <strong>Preventieve controle voorkomt kostbare reparaties.</strong> Onze specialisten plannen binnen 24 uur een gratis inspectie en persoonlijk advies.
              </p>
            </div>
            
            <div className="space-y-4">
              {onOpenContactModal && (
                <button 
                  onClick={onOpenContactModal}
                  className="w-full bg-white text-tbgs-navy px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  data-testid="button-plan-inspection"
                >
                  <i className="fas fa-search mr-3"></i>
                  Plan gratis inspectie
                </button>
              )}
              
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold">~25km</div>
                  <div className="text-sm opacity-80">Maximale reisafstand</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm opacity-80">Gratis inspectie</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Elements */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
            <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">Waarom TBGS in uw regio?</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-green-600"></i>
                </div>
                <span className="text-slate-700">Lokale kennis van bouwvoorschriften</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-blue-600"></i>
                </div>
                <span className="text-slate-700">Korte reistijd = lagere kosten</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-purple-600"></i>
                </div>
                <span className="text-slate-700">Snelle service bij noodgevallen</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-yellow-600"></i>
                </div>
                <span className="text-slate-700">Persoonlijke relatie met klanten</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}