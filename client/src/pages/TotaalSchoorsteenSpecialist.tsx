import SEOHead from "@/lib/seo";
import { Link } from "wouter";

interface TotaalSchoorsteenSpecialistProps {
  onOpenContactModal: () => void;
}

export default function TotaalSchoorsteenSpecialist({ onOpenContactModal }: TotaalSchoorsteenSpecialistProps) {
  return (
    <>
      <SEOHead 
        title="Totaal Schoorsteen Specialist (TSS) - Schoorsteenwerken | TBGS"
        description="TSS - Totaal Schoorsteen Specialist van TBGS. Expert in schoorsteenonderhoud, reparaties, vervangingen en rookkanaal services in Nederland en België."
        url="https://tbgs.nl/totaal-schoorsteen-specialist"
      />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-tbgs-blue">
                  <i className="fas fa-home mr-2"></i>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <i className="fas fa-chevron-right text-gray-400 mx-2"></i>
                  <span className="ml-1 text-sm font-medium text-tbgs-blue md:ml-2">Totaal Schoorsteen Specialist</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-16 h-16 bg-tbgs-blue rounded-full flex items-center justify-center">
                    <i className="fas fa-industry text-2xl text-white"></i>
                  </div>
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                      Totaal Schoorsteen Specialist
                    </h1>
                    <p className="text-lg text-tbgs-blue font-semibold">TSS - Uw schoorsteenwerken expert</p>
                  </div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Van traditionele schoorsteenreiniging tot moderne rookgasafvoersystemen. 
                  Onze gecertificeerde specialisten zorgen voor veilige en efficiënte schoorsteenoplossingen.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-tbgs-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <i className="fas fa-calculator mr-3"></i>
                  Schoorsteen Offerte
                </button>
                <a 
                  href="tel:+31612345678"
                  className="border-2 border-tbgs-blue text-tbgs-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-tbgs-blue hover:text-white transition-colors flex items-center justify-center"
                >
                  <i className="fas fa-phone mr-3"></i>
                  Spoedservice
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-tbgs-blue">150+</div>
                  <div className="text-sm text-gray-600">Schoorstenen per maand</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tbgs-blue">24/7</div>
                  <div className="text-sm text-gray-600">Spoedservice</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tbgs-blue">100%</div>
                  <div className="text-sm text-gray-600">Gecertificeerd</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1664362240026-7f8e4c845a5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professionele schoorsteenveger aan het werk" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-tbgs-blue bg-opacity-10 rounded-full flex items-center justify-center">
                    <i className="fas fa-certificate text-tbgs-blue text-xl"></i>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Gecertificeerd</div>
                    <div className="text-sm text-gray-600">Erkend schoorsteenveger</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Onze Schoorsteen Diensten
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Als totaal schoorsteen specialist bieden wij complete service voor alle schoorsteentypes. 
              Van onderhoud tot complete vervanging.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-blue bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-broom text-tbgs-blue text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Schoorsteenvegen</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-2"></i>Jaarlijks onderhoud</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-2"></i>Roetverwijdering</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-2"></i>Veiligheidscontrole</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-2"></i>Vegen certificaat</li>
              </ul>
              <button 
                onClick={onOpenContactModal}
                className="text-tbgs-blue font-semibold hover:text-blue-700 transition-colors"
              >
                Meer informatie →
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-blue bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-search text-tbgs-blue text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rookkanaal Inspectie</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-2"></i>Camera inspectie</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-2"></i>Lekdetectie</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-2"></i>Trekmetingen</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-2"></i>Veiligheidsrapport</li>
              </ul>
              <button 
                onClick={onOpenContactModal}
                className="text-tbgs-blue font-semibold hover:text-blue-700 transition-colors"
              >
                Meer informatie →
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-blue bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-wrench text-tbgs-blue text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Schoorsteenreparatie</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-2"></i>Voegwerk herstellen</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-2"></i>Schoorsteenkap reparatie</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-2"></i>Binnenwerkherstellingen</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-2"></i>Noodreparaties</li>
              </ul>
              <button 
                onClick={onOpenContactModal}
                className="text-tbgs-blue font-semibold hover:text-blue-700 transition-colors"
              >
                Meer informatie →
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-blue bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-tools text-tbgs-blue text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Schoorsteen Vervanging</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-2"></i>Complete vervanging</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-2"></i>RVS inliner plaatsing</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-2"></i>Moderne systemen</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-2"></i>Energie-efficiënt</li>
              </ul>
              <button 
                onClick={onOpenContactModal}
                className="text-tbgs-blue font-semibold hover:text-blue-700 transition-colors"
              >
                Meer informatie →
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-blue bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-fire text-tbgs-blue text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rookgasafvoer Systemen</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-2"></i>HR-ketel aansluitingen</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-2"></i>Concentrische systemen</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-2"></i>Dakdoorvoeren</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-2"></i>Condensafvoer</li>
              </ul>
              <button 
                onClick={onOpenContactModal}
                className="text-tbgs-blue font-semibold hover:text-blue-700 transition-colors"
              >
                Meer informatie →
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-blue bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-exclamation-triangle text-tbgs-blue text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Spoedservice 24/7</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-2"></i>Rookproblemen</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-2"></i>CO-alarm situaties</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-2"></i>Brandveiligheid</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-2"></i>Noodoplossingen</li>
              </ul>
              <button 
                onClick={onOpenContactModal}
                className="text-tbgs-blue font-semibold hover:text-blue-700 transition-colors"
              >
                Meer informatie →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-tbgs-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Problemen met Uw Schoorsteen?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Neem direct contact op met onze gecertificeerde schoorsteenspecialisten. 
              Voor spoedgevallen zijn wij 24/7 bereikbaar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onOpenContactModal}
                className="bg-white text-tbgs-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <i className="fas fa-calculator mr-3"></i>
                Gratis Schoorsteen Offerte
              </button>
              <a 
                href="tel:+31612345678"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-tbgs-blue transition-colors flex items-center justify-center"
              >
                <i className="fas fa-phone mr-3"></i>
                Spoedservice 24/7
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
