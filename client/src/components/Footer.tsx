import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-tbgs-red via-tbgs-blue to-tbgs-green rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TBGS BV</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">TBGS BV</h3>
                  <p className="text-sm text-gray-400">Bouw Groep Specialisten</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Samen duurzaam & innovatief (ver)bouwen. Uw betrouwbare partner voor alle bouwgerelateerde werkzaamheden.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-sm">
                <i className="fas fa-map-marker-alt text-tbgs-red w-4"></i>
                <span>Hoofdvestiging Eindhoven</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <i className="fas fa-phone text-tbgs-blue w-4"></i>
                <a href="tel:+31612345678" className="hover:text-yellow-300">+31 6 12 34 56 78</a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <i className="fas fa-envelope text-tbgs-green w-4"></i>
                <a href="mailto:info@tbgs.nl" className="hover:text-yellow-300">info@tbgs.nl</a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <i className="fas fa-clock text-tbgs-orange w-4"></i>
                <span>Ma-Vr: 8:00-17:00, Za: op afspraak</span>
              </div>
            </div>
          </div>

          {/* Specialist Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Onze Specialismen</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/totaal-dak-specialist" className="text-gray-300 hover:text-tbgs-red transition-colors flex items-center"><i className="fas fa-home w-4 mr-2"></i>Totaal Dak Specialist</Link></li>
              <li><Link href="/totaal-schoorsteen-specialist" className="text-gray-300 hover:text-tbgs-blue transition-colors flex items-center"><i className="fas fa-industry w-4 mr-2"></i>Totaal Schoorsteen Specialist</Link></li>
              <li><Link href="/totaal-onderhoud-specialist" className="text-gray-300 hover:text-tbgs-green transition-colors flex items-center"><i className="fas fa-tools w-4 mr-2"></i>Totaal Onderhoud Specialist</Link></li>
              <li><Link href="/totaal-bouw-specialist" className="text-gray-300 hover:text-tbgs-orange transition-colors flex items-center"><i className="fas fa-hammer w-4 mr-2"></i>Totaal Bouw Specialist</Link></li>
            </ul>

            <h5 className="text-md font-semibold mt-6 mb-3">Populaire Diensten</h5>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dakrenovatie</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dakisolatie</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Schoorsteenonderhoud</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gevelonderhoud</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Werkgebied</h4>
            
            <h5 className="text-md font-semibold mb-2 text-tbgs-red">Nederland</h5>
            <ul className="space-y-1 text-sm text-gray-400 mb-4">
              <li><a href="#" className="hover:text-white transition-colors">Eindhoven</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nuenen</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Veldhoven</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Geldrop</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Son en Breugel</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Valkenswaard</a></li>
            </ul>

            <h5 className="text-md font-semibold mb-2 text-tbgs-blue">België</h5>
            <ul className="space-y-1 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Hamont-Achel</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lommel</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pelt</a></li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Bedrijfsinformatie</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Over TBGS</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Projecten</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Kennisbank</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Offerte Aanvragen</a></li>
            </ul>

            <h5 className="text-md font-semibold mt-6 mb-3">Kwaliteit & Garantie</h5>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-xs">
                <i className="fas fa-certificate text-yellow-400"></i>
                <span className="text-gray-400">ISO 9001 Gecertificeerd</span>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <i className="fas fa-shield-alt text-green-400"></i>
                <span className="text-gray-400">Garantie op al ons werk</span>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <i className="fas fa-users text-blue-400"></i>
                <span className="text-gray-400">Gecertificeerde vakmensen</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>&copy; 2024 Totaal Bouw Groep Specialisten B.V. Alle rechten voorbehouden.</p>
              <p className="mt-1">KvK: 12345678 | BTW: NL123456789B01</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Algemene Voorwaarden</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Beleid</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
