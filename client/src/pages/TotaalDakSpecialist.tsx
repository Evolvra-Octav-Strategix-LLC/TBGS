import SEOHead from "@/lib/seo";
import { Link } from "wouter";
import Header from "@/components/Header";
import LocationAreasOnly from "@/components/LocationAreasOnly";
import PartnerSlider from "@/components/PartnerSlider";
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
                      Totaal Dak Specialist
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
                    <img src={roofWarrantyIcon} alt="Tot 25 jaar garantie" className="w-10 h-10 object-contain brightness-0 invert" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Tot 25 jaar garantie</div>
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
              Professionele dakwerken diensten
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
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-2"></i>Professionele lekdetectie</li>
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
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                <i className="fas fa-tint text-tbgs-red text-4xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Daklekkage Reparatie</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Daklekkage</strong> spoedservice 24/7 door ervaren <strong>dakdekkers</strong>. Snelle lokalisatie en permanente reparatie van lekkende daken met 80+ jaar familietraditie.
                </p>
                <Link href="/dak/daklekkage" className="text-tbgs-red font-semibold hover:text-red-700 transition-colors cursor-pointer">
                  Lees meer over daklekkage →
                </Link>
              </div>
            </div>

            {/* Dakrenovatie Article */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                <i className="fas fa-hammer text-tbgs-red text-4xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dakrenovatie</h3>
                <p className="text-gray-600 mb-4">
                  Complete <strong>dakrenovatie</strong> door gecertificeerde <strong>dakdekkers</strong>. Van dakpannen vervangen tot volledige <strong>dakwerken</strong> met moderne materialen en garantie.
                </p>
                <Link href="/dak/dakrenovatie" className="text-tbgs-red font-semibold hover:text-red-700 transition-colors cursor-pointer">
                  Lees meer over dakrenovatie →
                </Link>
              </div>
            </div>

            {/* Dakgoot reinigen Article */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                <i className="fas fa-broom text-tbgs-red text-4xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dakgoot Reinigen</h3>
                <p className="text-gray-600 mb-4">
                  Professionele <strong>dakgoot reinigen</strong> voorkomt waterschade. Onze <strong>dakdekkers</strong> reinigen dakgoten, regenpijpen en voeren preventief onderhoud uit.
                </p>
                <Link href="/dak/dakgoot-reinigen" className="text-tbgs-red font-semibold hover:text-red-700 transition-colors cursor-pointer">
                  Lees meer over dakgoot reinigen →
                </Link>
              </div>
            </div>

            {/* Dak isolatie Article */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                <i className="fas fa-thermometer-half text-tbgs-red text-4xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dak Isolatie</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Dak isolatie</strong> bespaart tot 30% energiekosten. Professionele <strong>dakwerken</strong> isolatie door gecertificeerde <strong>dakdekkers</strong> met premium materialen.
                </p>
                <Link href="/dak/dakisolatie" className="text-tbgs-red font-semibold hover:text-red-700 transition-colors cursor-pointer">
                  Lees meer over dak isolatie →
                </Link>
              </div>
            </div>

            {/* Dakinspectie Article */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                <i className="fas fa-search text-tbgs-red text-4xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dakinspectie & Advies</h3>
                <p className="text-gray-600 mb-4">
                  Grondige <strong>dakinspectie</strong> door ervaren <strong>dakdekkers</strong>. 80+ jaar familietraditie detecteert problemen vroeg en voorkomt dure <strong>dakwerken</strong> reparaties.
                </p>
                <Link href="/dak/dakinspectie" className="text-tbgs-red font-semibold hover:text-red-700 transition-colors cursor-pointer">
                  Lees meer over dakinspectie →
                </Link>
              </div>
            </div>

            {/* Dakbedekking Article */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                <i className="fas fa-layer-group text-tbgs-red text-4xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dakbedekking</h3>
                <p className="text-gray-600 mb-4">
                  Alle soorten <strong>dakbedekking</strong> door vakkundige <strong>dakdekkers</strong>: dakpannen, leien, bitumen shingles en EPDM. Professionele <strong>dakwerken</strong> met kwaliteitsgarantie.
                </p>
                <Link href="/dak/dakbedekking" className="text-tbgs-red font-semibold hover:text-red-700 transition-colors cursor-pointer">
                  Lees meer over dakbedekking →
                </Link>
              </div>
            </div>

            {/* Nokvorsten Article */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                <i className="fas fa-tools text-tbgs-red text-4xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nokvorsten Repareren</h3>
                <p className="text-gray-600 mb-4">
                  Professionele <strong>nokvorsten reparatie</strong> door ervaren <strong>dakdekkers</strong>. Vakkundige <strong>dakwerken</strong> reparatie van nokvorsten en complete dakrand afwerking.
                </p>
                <Link href="/dak/nokvorsten-repareren" className="text-tbgs-red font-semibold hover:text-red-700 transition-colors cursor-pointer">
                  Lees meer over nokvorsten repareren →
                </Link>
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

      {/* Locaties Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Onze <span className="text-tbgs-red">Dakwerk Specialisten</span> in uw Regio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TBGS dakspecialisten zijn actief in heel Nederland en België. Vind uw lokale dakdekker voor snelle service en persoonlijk advies.
            </p>
          </div>
          
          <LocationAreasOnly 
            specialist="dak"
          />
        </div>
      </section>

      {/* Partner Slider */}
      <PartnerSlider showTitle={false} showDescription={false} className="border-t border-gray-100" />
    </>
  );
}
