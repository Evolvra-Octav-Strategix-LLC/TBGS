import { Link } from "wouter";
import tdsLogo from "@assets/TDS 545x642 (1)_1754935666048.png";
import tssLogo from "@assets/TSS 545x642 (1)_1754935673253.png";
import tosLogo from "@assets/TOS 545x642 (1)_1754935666048.png";
import tbsLogo from "@assets/TBS 545x642 (1)_1754935666048.png";
import tbgsLogo from "@assets/TBGS 545x642_1754935666047.png";

interface FooterProps {
  backgroundColor?: string;
  accentColor?: string;
}

export default function Footer({ backgroundColor = "bg-gray-900", accentColor = "text-tbgs-red" }: FooterProps) {
  return (
    <footer className={`${backgroundColor} text-white relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
      </div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            {/* Top Section - Company Info & CTA */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Company Info */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <img src={tbgsLogo} alt="TBGS Logo" className="w-16 h-16 object-contain flex-shrink-0" />
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Totaal Bouw Groep Specialisten</h3>
                    <p className="text-white/80 text-lg">Samen duurzaam & innovatief (ver)bouwen</p>
                    <p className="text-white/60 mt-4 leading-relaxed">
                      Uw betrouwbare partner voor dakwerken, schoorsteenwerken, onderhoud en algemene bouw in Nederland en België. Vakmanschap met garantie sinds 2010.
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <i className="fas fa-map-marker-alt text-white"></i>
                      </div>
                      <div>
                        <p className="font-medium">Hoofdvestiging</p>
                        <p className="text-white/70 text-sm">Eindhoven, Nederland</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <i className="fas fa-phone text-white"></i>
                      </div>
                      <div>
                        <p className="font-medium">Direct Contact</p>
                        <a href="tel:+31612345678" className="text-white/70 text-sm hover:text-white transition-colors">+31 6 12 34 56 78</a>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <i className="fas fa-envelope text-white"></i>
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:info@tbgs.nl" className="text-white/70 text-sm hover:text-white transition-colors">info@tbgs.nl</a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <i className="fas fa-clock text-white"></i>
                      </div>
                      <div>
                        <p className="font-medium">Openingstijden</p>
                        <p className="text-white/70 text-sm">Ma-Vr: 8:00-17:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="lg:pl-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h4 className="text-xl font-bold mb-4">Klaar voor uw project?</h4>
                  <p className="text-white/80 mb-6">
                    Vraag vandaag nog een vrijblijvende offerte aan en ontdek wat TBGS voor u kan betekenen.
                  </p>
                  <div className="space-y-3">
                    <button className="w-full bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                      <i className="fas fa-calculator mr-2"></i>
                      Gratis Offerte Aanvragen
                    </button>
                    <a href="tel:+31612345678" className="w-full border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center">
                      <i className="fas fa-phone mr-2"></i>
                      Direct Bellen
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Services & Links Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Specialists */}
              <div>
                <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-white/20">Onze Specialiteiten</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/totaal-dak-specialist" className="group flex items-center space-x-3 text-white/70 hover:text-white transition-colors">
                      <img src={tdsLogo} alt="TDS" className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      <span>Totaal Dak Specialist</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/totaal-schoorsteen-specialist" className="group flex items-center space-x-3 text-white/70 hover:text-white transition-colors">
                      <img src={tssLogo} alt="TSS" className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      <span>Totaal Schoorsteen Specialist</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/totaal-onderhoud-specialist" className="group flex items-center space-x-3 text-white/70 hover:text-white transition-colors">
                      <img src={tosLogo} alt="TOS" className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      <span>Totaal Onderhoud Specialist</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/totaal-bouw-specialist" className="group flex items-center space-x-3 text-white/70 hover:text-white transition-colors">
                      <img src={tbsLogo} alt="TBS" className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      <span>Totaal Bouw Specialist</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-white/20">Bedrijf</h4>
                <ul className="space-y-3 text-white/70">
                  <li><a href="#" className="hover:text-white transition-colors">Over TBGS</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Onze Projecten</a></li>
                  <li><Link href="/kennisbank" className="hover:text-white transition-colors">Kennisbank</Link></li>
                  <li><a href="#" className="hover:text-white transition-colors">Carrière</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Service Areas */}
              <div>
                <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-white/20">Werkgebied</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-white mb-2">Nederland</h5>
                    <ul className="space-y-1 text-sm text-white/70">
                      <li><a href="#" className="hover:text-white transition-colors">Eindhoven</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Nuenen</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Veldhoven</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">+ 15 andere steden</a></li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-2">België</h5>
                    <ul className="space-y-1 text-sm text-white/70">
                      <li><a href="#" className="hover:text-white transition-colors">Hamont-Achel</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Lommel</a></li>
                      <li><a href="#" className="hover:text-white transition-colors">Pelt</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Certifications & Social */}
              <div>
                <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-white/20">Kwaliteit & Volg Ons</h4>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                        <i className="fas fa-certificate text-green-400 text-sm"></i>
                      </div>
                      <span className="text-sm text-white/80">ISO 9001 Gecertificeerd</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <i className="fas fa-shield-alt text-blue-400 text-sm"></i>
                      </div>
                      <span className="text-sm text-white/80">15 Jaar Garantie</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                        <i className="fas fa-users text-yellow-400 text-sm"></i>
                      </div>
                      <span className="text-sm text-white/80">Gecertificeerde Teams</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="text-sm text-white/70 mb-3">Volg ons op social media</p>
                    <div className="flex space-x-3">
                      <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                        <i className="fab fa-facebook text-white"></i>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                        <i className="fab fa-instagram text-white"></i>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                        <i className="fab fa-linkedin text-white"></i>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                        <i className="fab fa-youtube text-white"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-center lg:text-left">
                <p className="text-white/70 text-sm">
                  &copy; 2024 Totaal Bouw Groep Specialisten B.V. Alle rechten voorbehouden.
                </p>
                <p className="text-white/50 text-xs mt-1">
                  KvK: 12345678 | BTW: NL123456789B01 | Inschrijfnummer Handelsregister: 87654321
                </p>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
                <a href="#" className="text-white/70 hover:text-white transition-colors">Privacy</a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Algemene Voorwaarden</a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Cookie Beleid</a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Disclaimer</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
