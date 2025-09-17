import { Link } from "wouter";

interface LocationAreasOnlyProps {
  className?: string;
  specialist?: "dak" | "schoorsteen" | "onderhoud" | "bouw";
}

export default function LocationAreasOnly({ className = "", specialist }: LocationAreasOnlyProps) {
  // Show Belgium section for all specialists
  const showBelgiumSection = true;

  return (
    <div className={`max-w-2xl mx-auto ${className}`} data-testid="location-areas-container">
      {/* Service Areas */}
      <div className="space-y-8">
        {/* Nederland */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
              <span className="text-2xl">🇳🇱</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Nederland</h3>
              <p className="text-slate-600">Eindhoven & omstreken</p>
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
    </div>
  );
}