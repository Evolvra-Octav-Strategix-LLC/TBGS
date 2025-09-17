import SEOHead from "@/lib/seo";
import { Link } from "wouter";
import Header from "@/components/Header";
import PartnerSlider from "@/components/PartnerSlider";
import SpecialistNavigationBar from "@/components/SpecialistNavigationBar";
import tbsLogo from "@assets/TBS 545x642 (1)_1754935666048.png";

interface TotaalBouwSpecialistProps {
  onOpenContactModal: () => void;
}

export default function TotaalBouwSpecialist({ onOpenContactModal }: TotaalBouwSpecialistProps) {
  return (
    <>
      <SEOHead 
        title="Totaal Bouw Specialist (TBS) - Verbouwingen & Renovaties | TBGS"
        description="TBS - Totaal Bouw Specialist van TBGS. Specialist in verbouwingen, renovaties, aanbouw, badkamer- en keukenrenovaties in Nederland en België."
        url="https://tbgs.nl/totaal-bouw-specialist"
      />

      <SpecialistNavigationBar />

      <Header 
        specialist="TBS"
        onOpenContactModal={onOpenContactModal}
      />


      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <img src={tbsLogo} alt="TBS Logo" className="w-20 h-20 object-contain" />
                  <div>
                    <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                      Totaal Bouw Specialist
                    </h1>
                    <p className="text-xs sm:text-sm lg:text-lg text-tbgs-orange font-semibold">TBS - Uw bouw specialist</p>
                  </div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Van kleine verbouwingen tot complete renovaties en nieuwbouw. 
                  Onze ervaren bouwspecialisten realiseren uw droomproject van A tot Z.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-tbgs-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors flex items-center justify-center"
                >
                  <i className="fas fa-calculator mr-3"></i>
                  Bouw offerte
                </button>
                <a 
                  href="tel:+31402026744"
                  className="border-2 border-tbgs-orange text-tbgs-orange px-8 py-4 rounded-lg font-semibold text-lg hover:bg-tbgs-orange hover:text-white transition-colors flex items-center justify-center"
                >
                  <i className="fas fa-phone mr-3"></i>
                  Direct bellen
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-tbgs-orange">100+</div>
                  <div className="text-sm text-gray-600">Projecten per jaar</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tbgs-orange">80+</div>
                  <div className="text-sm text-gray-600">Jaar familietraditie</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tbgs-orange">100%</div>
                  <div className="text-sm text-gray-600">Op maat gemaakt</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professionele bouwwerkers aan het werk" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-tbgs-orange bg-opacity-10 rounded-full flex items-center justify-center">
                    <i className="fas fa-award text-tbgs-orange text-xl"></i>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Gekwalificeerd</div>
                    <div className="text-sm text-gray-600">Erkende aannemers</div>
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
              Onze bouw diensten
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Als totaal bouw specialist bieden wij complete service voor al uw bouwprojecten. 
              Van concept tot oplevering, alles onder één dak.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-orange bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-hammer text-tbgs-orange text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Metselwerk</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Baksteen metselwerk</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Natuursteen metselwerk</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Gevelmetselwerk</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Tuinmuren</li>
              </ul>
              <Link href="/bouw/metselwerk" className="text-tbgs-orange font-semibold hover:text-yellow-600 transition-colors cursor-pointer">
                Meer informatie →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-orange bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-cut text-tbgs-orange text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Timmerwerken</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Dakconstructies</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Kozijnen & Ramen</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Trappen</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Maatwerk</li>
              </ul>
              <Link href="/bouw/timmerwerken" className="text-tbgs-orange font-semibold hover:text-yellow-600 transition-colors cursor-pointer">
                Meer informatie →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-orange bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-arrow-up text-tbgs-orange text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Opbouw op Uw Huis</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Tweede verdieping</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Dakkapel uitbouw</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Zolderverbouwing</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Dakopbouw</li>
              </ul>
              <Link href="/bouw/opbouw-op-uw-huis" className="text-tbgs-orange font-semibold hover:text-yellow-600 transition-colors cursor-pointer">
                Meer informatie →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-orange bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-plus text-tbgs-orange text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Aanbouwen aan Uw Huis</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Woonkamer uitbreiding</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Keuken aanbouw</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Serre aanbouw</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Garage aanbouw</li>
              </ul>
              <Link href="/bouw/aanbouwen-aan-uw-huis" className="text-tbgs-orange font-semibold hover:text-yellow-600 transition-colors cursor-pointer">
                Meer informatie →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-orange bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-home text-tbgs-orange text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Uw Huis Verbouwen</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Complete renovatie</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Badkamer verbouwing</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Keuken verbouwing</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Indeling wijzigen</li>
              </ul>
              <Link href="/bouw/uw-huis-verbouwen" className="text-tbgs-orange font-semibold hover:text-yellow-600 transition-colors cursor-pointer">
                Meer informatie →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-orange bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-cube text-tbgs-orange text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Serre Aanbouw</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Klassieke serre</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Moderne glazen uitbouw</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Wintertuinen</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Tuinkamer serre</li>
              </ul>
              <Link href="/bouw/serre-aanbouw" className="text-tbgs-orange font-semibold hover:text-yellow-600 transition-colors cursor-pointer">
                Meer informatie →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-orange bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-hard-hat text-tbgs-orange text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nieuwbouw</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Eengezinswoning</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Villa nieuwbouw</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Energieneutrale woning</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Moderne architectuur</li>
              </ul>
              <Link href="/bouw/nieuwbouw" className="text-tbgs-orange font-semibold hover:text-yellow-600 transition-colors cursor-pointer">
                Meer informatie →
              </Link>
            </div>

            {/* Old service cards restored */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-orange bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-plus text-tbgs-orange text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Aanbouw & Uitbreiding</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Aanbouw woonhuis</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Serre & overkapping</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Garage & berging</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Dakopbouw</li>
              </ul>
              <button 
                onClick={onOpenContactModal}
                className="text-tbgs-orange font-semibold hover:text-yellow-700 transition-colors"
              >
                Meer informatie →
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-orange bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-bath text-tbgs-orange text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Badkamer renovatie</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Complete badkamer</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Leidingwerk</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Tegelwerk</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Sanitair installatie</li>
              </ul>
              <button 
                onClick={onOpenContactModal}
                className="text-tbgs-orange font-semibold hover:text-yellow-700 transition-colors"
              >
                Meer informatie →
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-orange bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-utensils text-tbgs-orange text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Keuken renovatie</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Keukenverbouwing</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Maatwerk kasten</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Werkblad installatie</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-2"></i>Apparatuur aansluiting</li>
              </ul>
              <button 
                onClick={onOpenContactModal}
                className="text-tbgs-orange font-semibold hover:text-yellow-700 transition-colors"
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
              Van Idee tot Realisatie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wij begeleiden u door het gehele bouwproces. Van eerste schets tot 
              sleuteloverdracht, alles volgens planning en budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-tbgs-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ontwerp & Planning</h3>
              <p className="text-gray-600">
                Samen met u ontwikkelen wij het ontwerp en de planning. 
                Vergunningaanvragen en technische uitwerking.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tbgs-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Offerte & Contract</h3>
              <p className="text-gray-600">
                Transparante offerte met alle details. Heldere afspraken 
                vastgelegd in een duidelijk contract.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tbgs-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bouw & Uitvoering</h3>
              <p className="text-gray-600">
                Professionele uitvoering door ons ervaren team. 
                Regelmatige updates en open communicatie.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tbgs-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Oplevering & Garantie</h3>
              <p className="text-gray-600">
                Eindoplevering volgens afspraak en uitgebreide garantie. 
                Nazorg en ondersteuning na oplevering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bouwwerken Artikelen Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Bouwwerken & Bouw Advies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alles over <strong>bouwwerken</strong>, <strong>verbouwingen</strong> en <strong>aanbouw</strong>. 
              Professioneel advies van onze gecertificeerde <strong>bouwspecialisten</strong> en <strong>aannemers</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Metselwerk Article */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <i className="fas fa-hammer text-tbgs-orange text-4xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Professioneel Metselwerk</h3>
                <p className="text-gray-600 mb-4">
                  Vakkundig <strong>metselwerk</strong> door ervaren <strong>metselaars</strong>. Van klassieke bakstenen gevels tot moderne tuinmuren met kwaliteitsmaterialen en garantie.
                </p>
                <Link href="/bouw/metselwerk" className="text-tbgs-orange font-semibold hover:text-orange-700 transition-colors cursor-pointer">
                  Lees meer over metselwerk →
                </Link>
              </div>
            </div>

            {/* Timmerwerken Article */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <i className="fas fa-cut text-tbgs-orange text-4xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Professioneel Timmerwerk</h3>
                <p className="text-gray-600 mb-4">
                  Vakkundig <strong>timmerwerk</strong> door ervaren <strong>timmerlieden</strong>. Van dakconstructies tot maatwerk met duurzame materialen en traditioneel vakmanschap.
                </p>
                <Link href="/bouw/timmerwerken" className="text-tbgs-orange font-semibold hover:text-orange-700 transition-colors cursor-pointer">
                  Lees meer over timmerwerk →
                </Link>
              </div>
            </div>

            {/* Opbouw Article */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <i className="fas fa-arrow-up text-tbgs-orange text-4xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Opbouw op Uw Huis</h3>
                <p className="text-gray-600 mb-4">
                  Meer woonruimte door professionele <strong>opbouw</strong>. Van tweede verdiepingen tot dakkapellen, zonder verhuizing meer ruimte creëren.
                </p>
                <Link href="/bouw/opbouw-op-uw-huis" className="text-tbgs-orange font-semibold hover:text-orange-700 transition-colors cursor-pointer">
                  Lees meer over opbouw →
                </Link>
              </div>
            </div>

            {/* Aanbouw Article */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <i className="fas fa-plus text-tbgs-orange text-4xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Aanbouwen aan Uw Huis</h3>
                <p className="text-gray-600 mb-4">
                  Meer woonruimte door professionele <strong>aanbouw</strong>. Van woonkamer uitbreiding tot serre, uw woning uitbreiden zonder verhuizing.
                </p>
                <Link href="/bouw/aanbouwen-aan-uw-huis" className="text-tbgs-orange font-semibold hover:text-orange-700 transition-colors cursor-pointer">
                  Lees meer over aanbouw →
                </Link>
              </div>
            </div>

            {/* Verbouwing Article */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <i className="fas fa-home text-tbgs-orange text-4xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Uw Huis Verbouwen</h3>
                <p className="text-gray-600 mb-4">
                  Complete <strong>huisverbouwing</strong> door ervaren professionals. Van badkamer tot keuken, uw droomhuis realiseren met volledige begeleiding.
                </p>
                <Link href="/bouw/uw-huis-verbouwen" className="text-tbgs-orange font-semibold hover:text-orange-700 transition-colors cursor-pointer">
                  Lees meer over verbouwing →
                </Link>
              </div>
            </div>

            {/* Serre Article */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <i className="fas fa-cube text-tbgs-orange text-4xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Serre Aanbouw</h3>
                <p className="text-gray-600 mb-4">
                  Glazen <strong>serre aanbouw</strong> brengt de buitenwereld naar binnen. Van klassieke serres tot moderne glazen uitbouw voor meer licht en ruimte.
                </p>
                <Link href="/bouw/serre-aanbouw" className="text-tbgs-orange font-semibold hover:text-orange-700 transition-colors cursor-pointer">
                  Lees meer over serre aanbouw →
                </Link>
              </div>
            </div>

            {/* Nieuwbouw Article */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <i className="fas fa-hard-hat text-tbgs-orange text-4xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nieuwbouw Woningen</h3>
                <p className="text-gray-600 mb-4">
                  Sleutelklaar <strong>nieuwbouw</strong> van uw droomhuis. Van eengezinswoningen tot luxe villa's, moderne technieken en duurzame materialen.
                </p>
                <Link href="/bouw/nieuwbouw" className="text-tbgs-orange font-semibold hover:text-orange-700 transition-colors cursor-pointer">
                  Lees meer over nieuwbouw →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Partner Slider */}
      <PartnerSlider showTitle={false} showDescription={false} className="border-t border-gray-100" />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-tbgs-orange text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Klaar voor Uw Bouwproject?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Van droomidee tot werkelijkheid. Neem contact met ons op en 
              ontdek hoe wij uw bouwproject tot een succes maken.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onOpenContactModal}
                className="bg-white text-tbgs-orange px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <i className="fas fa-calculator mr-3"></i>
                Gratis Bouw offerte
              </button>
              <a 
                href="tel:+31402026744"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-tbgs-orange transition-colors flex items-center justify-center"
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
