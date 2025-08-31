import SEOHead from "@/lib/seo";
import { Link } from "wouter";
import Header from "@/components/Header";
import SpecialistNavigationBar from "@/components/SpecialistNavigationBar";
import tdsLogo from "@assets/TDS 545x642 (1)_1754935666048.png";
import roofRepairIcon from "@assets/image (20)_1755004272803.png";
import gutterIcon from "@assets/image (21)_1755004272803.png";
import leakageDetectionIcon from "@assets/image (22)_1755004272803.png";
import roofInsulationIcon from "@assets/image (23)_1755004272803.png";
import flatRoofIcon from "@assets/image (24)_1755004272803.png";
import slopedRoofIcon from "@assets/image (25)_1755004272804.png";
import roofWarrantyIcon from "@assets/image (26)_1755004272804.png";

interface TotaalDakSpecialistProps {
  onOpenContactModal: () => void;
}

export default function TotaalDakSpecialist({ onOpenContactModal }: TotaalDakSpecialistProps) {
  return (
    <>
      <SEOHead 
        title="Dakdekker & Dakwerken Specialist | Daklekkage Reparatie | TDS TBGS"
        description="🏠 Dakdekker specialist voor daklekkage, dakrenovatie, dakgoot reinigen & dak isolatie. ⚡ 24/7 spoedservice voor dakwerken in Nederland & België. ✅ Gecertificeerde dakspecialisten."
        url="https://tbgs.nl/totaal-dak-specialist"
      />

      <SpecialistNavigationBar />

      <Header 
        specialist="TDS"
        onOpenContactModal={onOpenContactModal}
      />


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
                      Dakdekker & Dakwerken Specialist
                    </h1>
                    <p className="text-xs sm:text-sm lg:text-lg text-tbgs-red font-semibold">TDS - Gecertificeerde dakdekkers voor alle dakwerken</p>
                  </div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professionele <strong>dakdekker</strong> specialist voor <strong>daklekkage</strong>, <strong>dakrenovatie</strong> en <strong>dakgoot reinigen</strong>. 
                  Onze gecertificeerde <strong>dakwerken</strong> specialisten leveren kwalitatieve oplossingen met garantie.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-tbgs-red text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors flex items-center justify-center"
                >
                  <i className="fas fa-calculator mr-3"></i>
                  Dakwerk offerte
                </button>
                <a 
                  href="tel:+31402026744"
                  className="border-2 border-tbgs-red text-tbgs-red px-8 py-4 rounded-lg font-semibold text-lg hover:bg-tbgs-red hover:text-white transition-colors flex items-center justify-center"
                >
                  <i className="fas fa-phone mr-3"></i>
                  Direct bellen
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-tbgs-red">200+</div>
                  <div className="text-sm text-gray-600">Daken per jaar</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tbgs-red">80+</div>
                  <div className="text-sm text-gray-600">Jaar familietraditie</div>
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
                  <div className="w-12 h-12 bg-tbgs-red rounded-full flex items-center justify-center">
                    <img src={roofWarrantyIcon} alt="Levenslange garantie" className="w-10 h-10 object-contain brightness-0 invert" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Levenslange garantie</div>
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
              Professionele Dakwerken Diensten
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Als ervaren <strong>dakdekker specialist</strong> bieden wij alle <strong>dakwerken</strong> diensten. 
              Van <strong>daklekkage reparatie</strong> tot complete <strong>dakrenovatie</strong> met garantie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-red rounded-full flex items-center justify-center mb-4">
                <img src={slopedRoofIcon} alt="Hellende Daken" className="w-12 h-12 object-contain brightness-0 invert" />
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
              <div className="w-16 h-16 bg-tbgs-red rounded-full flex items-center justify-center mb-4">
                <img src={flatRoofIcon} alt="Platte Daken" className="w-12 h-12 object-contain brightness-0 invert" />
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
              <div className="w-16 h-16 bg-tbgs-red rounded-full flex items-center justify-center mb-4">
                <img src={roofInsulationIcon} alt="Dakisolatie" className="w-12 h-12 object-contain brightness-0 invert" />
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
              <div className="w-16 h-16 bg-tbgs-red rounded-full flex items-center justify-center mb-4">
                <img src={leakageDetectionIcon} alt="Lekkage Opsporing" className="w-12 h-12 object-contain brightness-0 invert" />
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
              <div className="w-16 h-16 bg-tbgs-red rounded-full flex items-center justify-center mb-4">
                <img src={gutterIcon} alt="Dakgoten & Boeidelen" className="w-12 h-12 object-contain brightness-0 invert" />
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
              <div className="w-16 h-16 bg-tbgs-red rounded-full flex items-center justify-center mb-4">
                <img src={roofRepairIcon} alt="Dakreparaties" className="w-12 h-12 object-contain brightness-0 invert" />
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

      {/* Dakwerken Artikelen Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Dakwerken & Dakdekker Advies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alles over <strong>dakwerken</strong>, <strong>daklekkage reparatie</strong> en <strong>dakonderhoud</strong>. 
              Professioneel advies van onze gecertificeerde <strong>dakdekkers</strong> en <strong>dakspecialisten</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Daklekkage Article */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <i className="fas fa-tint text-white text-6xl"></i>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-red-100 text-tbgs-red px-3 py-1 rounded-full text-sm font-semibold">Spoedservice</span>
                  <span className="text-gray-500 text-sm">5 min lezen</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Daklekkage Reparatie</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Daklekkage</strong> spoedservice 24/7 door ervaren <strong>dakdekkers</strong>. Snelle lokalisatie en permanente reparatie van lekkende daken met thermografisch onderzoek.
                </p>
                <Link href="/daklekkage" className="text-tbgs-red font-semibold hover:text-red-700 transition-colors cursor-pointer">
                  Lees meer over daklekkage →
                </Link>
              </div>
            </div>

            {/* Dakrenovatie Article */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <i className="fas fa-hammer text-white text-6xl"></i>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">Renovatie</span>
                  <span className="text-gray-500 text-sm">8 min lezen</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dakrenovatie</h3>
                <p className="text-gray-600 mb-4">
                  Complete <strong>dakrenovatie</strong> door gecertificeerde <strong>dakdekkers</strong>. Van dakpannen vervangen tot volledige <strong>dakwerken</strong> met moderne materialen en garantie.
                </p>
                <a href="#dakrenovatie-details" className="text-tbgs-red font-semibold hover:text-red-700 transition-colors cursor-pointer">
                  Lees meer over dakrenovatie →
                </a>
              </div>
            </div>

            {/* Dakgoot reinigen Article */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <i className="fas fa-broom text-white text-6xl"></i>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">Onderhoud</span>
                  <span className="text-gray-500 text-sm">4 min lezen</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dakgoot Reinigen</h3>
                <p className="text-gray-600 mb-4">
                  Professionele <strong>dakgoot reinigen</strong> voorkomt waterschade. Onze <strong>dakdekkers</strong> reinigen dakgoten, regenpijpen en voeren preventief onderhoud uit.
                </p>
                <div className="text-tbgs-red font-semibold hover:text-red-700 transition-colors cursor-pointer">
                  Lees meer over dakgoot reinigen →
                </div>
              </div>
            </div>

            {/* Dak isolatie Article */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <i className="fas fa-thermometer-half text-white text-6xl"></i>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">Energiebesparing</span>
                  <span className="text-gray-500 text-sm">6 min lezen</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dak Isolatie</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Dak isolatie</strong> bespaart tot 30% energiekosten. Professionele <strong>dakwerken</strong> isolatie door gecertificeerde <strong>dakdekkers</strong> met premium materialen.
                </p>
                <div className="text-tbgs-red font-semibold hover:text-red-700 transition-colors cursor-pointer">
                  Lees meer over dak isolatie →
                </div>
              </div>
            </div>

            {/* Dakinspectie Article */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <i className="fas fa-search text-white text-6xl"></i>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">Inspectie</span>
                  <span className="text-gray-500 text-sm">7 min lezen</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dakinspectie & Advies</h3>
                <p className="text-gray-600 mb-4">
                  Grondige <strong>dakinspectie</strong> door ervaren <strong>dakdekkers</strong>. Thermografisch onderzoek detecteert problemen vroeg en voorkomt dure <strong>dakwerken</strong> reparaties.
                </p>
                <div className="text-tbgs-red font-semibold hover:text-red-700 transition-colors cursor-pointer">
                  Lees meer over dakinspectie →
                </div>
              </div>
            </div>

            {/* Dakbedekking Article */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                <i className="fas fa-layer-group text-white text-6xl"></i>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-semibold">Materialen</span>
                  <span className="text-gray-500 text-sm">9 min lezen</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dakbedekking</h3>
                <p className="text-gray-600 mb-4">
                  Alle soorten <strong>dakbedekking</strong> door vakkundige <strong>dakdekkers</strong>: dakpannen, leien, bitumen shingles en EPDM. Professionele <strong>dakwerken</strong> met kwaliteitsgarantie.
                </p>
                <div className="text-tbgs-red font-semibold hover:text-red-700 transition-colors cursor-pointer">
                  Lees meer over dakbedekking →
                </div>
              </div>
            </div>

            {/* Nokvorsten Article */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                <i className="fas fa-tools text-white text-6xl"></i>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-semibold">Reparatie</span>
                  <span className="text-gray-500 text-sm">5 min lezen</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nokvorsten Repareren</h3>
                <p className="text-gray-600 mb-4">
                  Professionele <strong>nokvorsten reparatie</strong> door ervaren <strong>dakdekkers</strong>. Vakkundige <strong>dakwerken</strong> reparatie van nokvorsten en complete dakrand afwerking.
                </p>
                <div className="text-tbgs-red font-semibold hover:text-red-700 transition-colors cursor-pointer">
                  Lees meer over nokvorsten repareren →
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={onOpenContactModal}
              className="bg-tbgs-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors inline-flex items-center"
            >
              <i className="fas fa-envelope mr-3"></i>
              Vraag advies aan onze dakexperts
            </button>
          </div>
        </div>
      </section>

      {/* Dakrenovatie Details Section */}
      <section id="dakrenovatie-details" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Main Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Professionele Dakrenovatie 2025
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete <strong>dakrenovatie</strong> door gecertificeerde <strong>dakdekkers</strong> in Nederland en België. 
                Van <strong>dakkapel vervanging</strong> tot volledige <strong>dakwerken</strong> renovatie met moderne technieken.
              </p>
            </div>

            {/* Wat is dakrenovatie */}
            <div className="prose prose-lg max-w-none mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Wat is Dakrenovatie?</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Dakrenovatie</strong> van een jaren dertig woning, een hele woonwijk of van de tweekapper op de hoek kennen we allemaal. 
                Het herstellen van de oude glorie bij slijtage of veroudering of juist het te niet doen van moderne aanpassingen die het karakter van het pand ondermijnen, 
                allemaal <strong>dakwerken renovatie</strong> en werkzaamheden door professionele <strong>dakdekkers</strong>.
              </p>
            </div>

            {/* Vervanging van de dakkapel */}
            <div className="bg-red-50 p-8 rounded-2xl mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="fas fa-home text-red-600 mr-3"></i>
                Dakkapel Vervanging & Dakrenovatie
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Maar een <strong>dakrenovatie</strong> hoeft zeker niet altijd een totale facelift te zijn. Wanneer een pand te maken heeft gehad met brand- of waterschade 
                of wanneer het herstel van veroudering meer is dan een eenvoudige reparatie spreken we ook van een <strong>dak renovatie</strong>. 
                Natuurlijk is meestal een reparatie voldoende om schade of slijtage te verhelpen.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Soms echter, is een <strong>dakrenovatie</strong> of een totale <strong>vervanging van de dakkapel</strong> nodig wanneer het dak beter in het geheel vernieuwd kan worden 
                omdat de schade of slijtage te ingrijpend zijn. Onze ervaren <strong>dakdekkers</strong> adviseren u over de beste aanpak voor uw specifieke situatie.
              </p>
            </div>

            {/* Oorspronkelijke stijl */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="fas fa-history text-red-600 mr-3"></i>
                Uw Dak Renoveren in Oorspronkelijke Stijl
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Een andere mogelijkheid is <strong>dakrenovatie</strong> omdat u moderne aanpassingen aan uw woning wilt herstellen naar de oorspronkelijke stijl. 
                Destijds werd dat gezien als verbetering maar u wilt het originele uiterlijk van de woning zichtbaar maken. 
                Voor degenen die juist het karakter willen behouden of herstellen is het dan nodig om te renoveren.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Dakpannen</strong> in de oorspronkelijke stijl bijvoorbeeld, met de mogelijkheden tot isolatie en ventilatie van nu. 
                Onze <strong>dakdekkers</strong> combineren traditionele technieken met moderne <strong>dakwerken</strong> methoden voor het beste resultaat.
              </p>
            </div>

            {/* Dakrenovatie Types */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Soorten Dakrenovatie</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-tools text-white"></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Dakkapel Renovatie</h4>
                  <p className="text-gray-600">
                    Complete vervanging van verouderde dakkapellen. 
                    Moderne isolatie en energie-efficiënte oplossingen.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-layer-group text-white"></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Dakbedekking Vernieuwing</h4>
                  <p className="text-gray-600">
                    Vervanging van dakpannen, leisteen of andere dakbedekkingen. 
                    Traditionele stijl met moderne kwaliteit.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-fire text-white"></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Brand- & Waterschade</h4>
                  <p className="text-gray-600">
                    Herstel na brand- of waterschade. 
                    Volledige reconstructie met moderne materialen en technieken.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-home text-white"></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Karakterherstel</h4>
                  <p className="text-gray-600">
                    Restauratie naar oorspronkelijke stijl. 
                    Behoud van authentieke uitstraling met moderne isolatie.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-leaf text-white"></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Duurzame Renovatie</h4>
                  <p className="text-gray-600">
                    Energie-efficiënte dakrenovatie met zonnepanelen, 
                    groendaken en moderne isolatiesystemen.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-cog text-white"></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Totale Dakrenovatie</h4>
                  <p className="text-gray-600">
                    Volledige dakvernieuwing inclusief constructie, 
                    isolatie, bedekking en afwerking door specialisten.
                  </p>
                </div>
              </div>
            </div>

            {/* Dakrenovatie Process */}
            <div className="bg-gray-50 p-8 rounded-2xl mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Ons Dakrenovatie Proces</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-white">1</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Inspectie & Advies</h4>
                  <p className="text-gray-600 text-sm">
                    Grondige dakinspectie en advies over renovatiemogelijkheden. 
                    Gratis offerte met duidelijke kostenraming.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-white">2</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Planning & Voorbereiding</h4>
                  <p className="text-gray-600 text-sm">
                    Gedetailleerde planning van de dakrenovatie. 
                    Materiaalbestelling en vergunningen indien nodig.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-white">3</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Vakkundige Uitvoering</h4>
                  <p className="text-gray-600 text-sm">
                    Professionele dakrenovatie door gecertificeerde dakdekkers. 
                    Veilige werkwijze en kwaliteitscontrole.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-white">4</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Oplevering & Garantie</h4>
                  <p className="text-gray-600 text-sm">
                    Eindcontrole en oplevering van de dakrenovatie. 
                    Uitgebreide garantie op materiaal en vakmanschap.
                  </p>
                </div>
              </div>
            </div>

            {/* Voordelen */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Voordelen van Professionele Dakrenovatie</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-check text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Waardeverhoging Woning</h4>
                      <p className="text-gray-600">Een professionele dakrenovatie verhoogt de waarde van uw woning met 10-15%.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-check text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Energiebesparing</h4>
                      <p className="text-gray-600">Moderne isolatie bespaart tot 30% op uw energiekosten per jaar.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-check text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Langdurige Bescherming</h4>
                      <p className="text-gray-600">Nieuwe dakbedekking biedt 20-30 jaar bescherming tegen weersinvloeden.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-check text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Moderne Technieken</h4>
                      <p className="text-gray-600">Combinatie van traditionele vakmanschap met moderne dakwerken technologie.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-check text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Volledige Garantie</h4>
                      <p className="text-gray-600">Uitgebreide garantie op alle dakrenovatie werkzaamheden en materialen.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-check text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Karakterbehoud</h4>
                      <p className="text-gray-600">Behoud van authentieke uitstraling met moderne isolatie en ventilatie.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-red-50 p-8 rounded-2xl mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Dakrenovatie Service Gebieden 2025</h3>
              <p className="text-lg text-gray-700 mb-6">
                Onze gecertificeerde <strong>dakdekkers</strong> voeren <strong>dakrenovaties</strong> uit in heel Nederland en België:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <i className="fas fa-map-marker-alt text-red-600 mr-3"></i>
                    Nederland Dakrenovatie
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-gray-700">
                    <div>• Eindhoven dakrenovatie</div>
                    <div>• Amsterdam dakdekker</div>
                    <div>• Rotterdam dakwerken</div>
                    <div>• Den Haag renovatie</div>
                    <div>• Utrecht dakdekker</div>
                    <div>• Tilburg dakrenovatie</div>
                    <div>• Breda dakwerken</div>
                    <div>• 's-Hertogenbosch</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <i className="fas fa-map-marker-alt text-red-600 mr-3"></i>
                    België Dakrenovatie
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-gray-700">
                    <div>• Antwerpen dakrenovatie</div>
                    <div>• Brussel dakdekker</div>
                    <div>• Gent dakwerken</div>
                    <div>• Leuven renovatie</div>
                    <div>• Mechelen dakdekker</div>
                    <div>• Turnhout dakrenovatie</div>
                    <div>• Hasselt dakwerken</div>
                    <div>• Genk dakdekker</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Dakkapel Vervanging of Dakrenovatie Nodig?
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Onze ervaren <strong>dakdekkers</strong> adviseren u graag over de beste <strong>dakrenovatie</strong> aanpak voor uw woning. 
                Gratis inspectie en transparante offerte.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <i className="fas fa-calculator mr-3"></i>
                  Gratis Dakrenovatie Offerte
                </button>
                <a 
                  href="tel:+31402026744"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-colors flex items-center justify-center"
                >
                  <i className="fas fa-phone mr-3"></i>
                  Direct Bellen
                </a>
              </div>
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
                Gratis Dakwerk offerte
              </button>
              <a 
                href="tel:+31402026744"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-tbgs-red transition-colors flex items-center justify-center"
              >
                <i className="fas fa-phone mr-3"></i>
                Direct bellen
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
