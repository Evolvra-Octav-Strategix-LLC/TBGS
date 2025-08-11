import SEOHead from "@/lib/seo";
import { Link } from "wouter";
import SpecialistHeader from "@/components/SpecialistHeader";
import tdsLogo from "@assets/TDS 545x642 (1)_1754935666048.png";

interface TotaalDakSpecialistProps {
  onOpenContactModal: () => void;
}

export default function TotaalDakSpecialist({ onOpenContactModal }: TotaalDakSpecialistProps) {
  return (
    <>
      <SEOHead 
        title="Totaal Dak Specialist (TDS) - Dakwerken & Dakisolatie | TBGS"
        description="TDS - Totaal Dak Specialist van TBGS. Specialist in hellende en platte daken, dakisolatie, lekkagedetectie en dakgoten in Nederland en België."
        url="https://tbgs.nl/totaal-dak-specialist"
      />

      <SpecialistHeader
        specialist="TDS"
        logo={tdsLogo}
        companyName="Totaal Dak Specialist"
        tagline="TDS - Uw dakwerken specialist"
        primaryColor="text-tbgs-red"
        hoverColor="text-red-700"
        onOpenContactModal={onOpenContactModal}
      />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-tbgs-red">
                  <i className="fas fa-home mr-2"></i>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <i className="fas fa-chevron-right text-gray-400 mx-2"></i>
                  <span className="ml-1 text-sm font-medium text-tbgs-red md:ml-2">Totaal Dak Specialist</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-red-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <img src={tdsLogo} alt="TDS Logo" className="w-20 h-20 object-contain" />
                  <div>
                    <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                      Totaal Dak Specialist
                    </h1>
                    <p className="text-lg text-tbgs-red font-semibold">TDS - Uw dakwerken specialist</p>
                  </div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Van hellende daken tot platte dakconstructies, van dakisolatie tot lekkagedetectie. 
                  Onze gecertificeerde dakspecialisten zorgen voor kwalitatieve en duurzame oplossingen.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-tbgs-red text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors flex items-center justify-center"
                >
                  <i className="fas fa-calculator mr-3"></i>
                  Dakwerk Offerte
                </button>
                <a 
                  href="tel:+31612345678"
                  className="border-2 border-tbgs-red text-tbgs-red px-8 py-4 rounded-lg font-semibold text-lg hover:bg-tbgs-red hover:text-white transition-colors flex items-center justify-center"
                >
                  <i className="fas fa-phone mr-3"></i>
                  Direct Bellen
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-tbgs-red">200+</div>
                  <div className="text-sm text-gray-600">Daken per jaar</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tbgs-red">10+</div>
                  <div className="text-sm text-gray-600">Jaar ervaring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tbgs-red">100%</div>
                  <div className="text-sm text-gray-600">Garantie</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professionele dakwerkers bezig met dakbedekking" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-tbgs-red bg-opacity-10 rounded-full flex items-center justify-center">
                    <i className="fas fa-shield-alt text-tbgs-red text-xl"></i>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">15 Jaar Garantie</div>
                    <div className="text-sm text-gray-600">Op al onze dakwerken</div>
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
              Onze Dakwerk Diensten
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Als totaal dak specialist bieden wij een complete service voor al uw dakwerk behoeften. 
              Van kleine reparaties tot volledige dakrenovaties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-red bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-home text-tbgs-red text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hellende Daken</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-2"></i>Pannendaken</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-2"></i>Leien dakbedekking</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-2"></i>Bitumen shingles</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-2"></i>Dakpannen vervangen</li>
              </ul>
              <button 
                onClick={onOpenContactModal}
                className="text-tbgs-red font-semibold hover:text-red-700 transition-colors"
              >
                Meer informatie →
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-red bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-layer-group text-tbgs-red text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Platte Daken</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-2"></i>EPDM rubber</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-2"></i>Bitumen dakbedekking</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-2"></i>Groene daken</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-2"></i>Dakafwatering</li>
              </ul>
              <button 
                onClick={onOpenContactModal}
                className="text-tbgs-red font-semibold hover:text-red-700 transition-colors"
              >
                Meer informatie →
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-red bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-thermometer-half text-tbgs-red text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dakisolatie</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-2"></i>Spouwmuurisolatie</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-2"></i>Zoldervloerisolatie</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-2"></i>Dakplatisolatie</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-2"></i>Energiebesparing</li>
              </ul>
              <button 
                onClick={onOpenContactModal}
                className="text-tbgs-red font-semibold hover:text-red-700 transition-colors"
              >
                Meer informatie →
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-red bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-tint text-tbgs-red text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lekkage Opsporing</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-2"></i>Thermografisch onderzoek</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-2"></i>Vochtmeting</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-2"></i>Snelle reparatie</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-2"></i>Preventief onderhoud</li>
              </ul>
              <button 
                onClick={onOpenContactModal}
                className="text-tbgs-red font-semibold hover:text-red-700 transition-colors"
              >
                Meer informatie →
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-red bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-tools text-tbgs-red text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dakgoten & Boeidelen</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-2"></i>Dakgoot vervanging</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-2"></i>Boeidelen renovatie</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-2"></i>Regenpijpen</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-2"></i>Onderhoud & reiniging</li>
              </ul>
              <button 
                onClick={onOpenContactModal}
                className="text-tbgs-red font-semibold hover:text-red-700 transition-colors"
              >
                Meer informatie →
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-red bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-hammer text-tbgs-red text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dakreparaties</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-2"></i>Spoedservice 24/7</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-2"></i>Gebroken dakpannen</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-2"></i>Storm schade</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-2"></i>Nooddak installatie</li>
              </ul>
              <button 
                onClick={onOpenContactModal}
                className="text-tbgs-red font-semibold hover:text-red-700 transition-colors"
              >
                Meer informatie →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ons Werkproces
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van eerste contact tot eindoplevering. Wij werken gestructureerd en transparant 
              zodat u precies weet wat u kunt verwachten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Process Steps */}
            <div className="text-center">
              <div className="w-20 h-20 bg-tbgs-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Offerte & Advies</h3>
              <p className="text-gray-600">
                Gratis inspectie van uw dak en vrijblijvende offerte binnen 48 uur. 
                Inclusief advies over materialen en werkwijze.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tbgs-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Planning & Voorbereiding</h3>
              <p className="text-gray-600">
                Planning van het project, bestelling materialen en aanvraag vergunningen indien nodig. 
                Heldere communicatie over tijdslijnen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tbgs-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Uitvoering Dakwerk</h3>
              <p className="text-gray-600">
                Professionele uitvoering door gecertificeerde dakdekkers. 
                Dagelijkse voortgangsrapportage en nette werkplek.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tbgs-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Oplevering & Garantie</h3>
              <p className="text-gray-600">
                Eindcontrole, opruimen werkplek en uitgebreide garantie. 
                Onderhoudstips voor langdurige duurzaamheid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-tbgs-red text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Klaar voor een Nieuw Dak?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Neem contact met ons op voor een vrijblijvende dakwerk offerte. 
              Onze specialists adviseren u graag over de beste oplossing voor uw situatie.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onOpenContactModal}
                className="bg-white text-tbgs-red px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <i className="fas fa-calculator mr-3"></i>
                Gratis Dakwerk Offerte
              </button>
              <a 
                href="tel:+31612345678"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-tbgs-red transition-colors flex items-center justify-center"
              >
                <i className="fas fa-phone mr-3"></i>
                Direct Bellen
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
