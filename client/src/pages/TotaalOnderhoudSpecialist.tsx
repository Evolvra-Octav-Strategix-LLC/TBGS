import SEOHead from "@/lib/seo";
import { Link } from "wouter";
import Header from "@/components/Header";
import SpecialistNavigationBar from "@/components/SpecialistNavigationBar";
import tosLogo from "@assets/TOS 545x642 (1)_1754935666048.png";

interface TotaalOnderhoudSpecialistProps {
  onOpenContactModal: () => void;
}

export default function TotaalOnderhoudSpecialist({ onOpenContactModal }: TotaalOnderhoudSpecialistProps) {
  return (
    <>
      <SEOHead 
        title="Totaal Onderhoud Specialist (TOS) - Gevelonderhoud & Schilderwerk | TBGS"
        description="TOS - Totaal Onderhoud Specialist van TBGS. Specialist in gevelreiniging, schilderwerk, preventief onderhoud en algemene reparaties in Nederland en België."
        url="https://tbgs.nl/totaal-onderhoud-specialist"
      />

      <SpecialistNavigationBar />

      <Header 
        specialist="TOS"
        onOpenContactModal={onOpenContactModal}
      />


      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <img src={tosLogo} alt="TOS Logo" className="w-20 h-20 object-contain" />
                  <div>
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                      Totaal Onderhoud Specialist
                    </h1>
                    <p className="text-xs sm:text-sm lg:text-lg text-tbgs-green font-semibold">TOS - Uw onderhouds specialist</p>
                  </div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Van preventief onderhoud tot curatieve reparaties. Onze specialisten zorgen ervoor 
                  dat uw woning of bedrijfspand er altijd perfect uitziet en zijn waarde behoudt.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-tbgs-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  <i className="fas fa-calculator mr-3"></i>
                  Onderhoud offerte
                </button>
                <a 
                  href="tel:+31402026744"
                  className="border-2 border-tbgs-green text-tbgs-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-tbgs-green hover:text-white transition-colors flex items-center justify-center"
                >
                  <i className="fas fa-phone mr-3"></i>
                  Direct bellen
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-tbgs-green">300+</div>
                  <div className="text-sm text-gray-600">Onderhoud per jaar</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tbgs-green">80+</div>
                  <div className="text-sm text-gray-600">Jaar familietraditie</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tbgs-green">100%</div>
                  <div className="text-sm text-gray-600">Tevredenheid</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professionele onderhoudswerkers aan het schilderen" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-tbgs-green bg-opacity-10 rounded-full flex items-center justify-center">
                    <i className="fas fa-leaf text-tbgs-green text-xl"></i>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Duurzaam</div>
                    <div className="text-sm text-gray-600">Milieuvriendelijke producten</div>
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
              Onze onderhoud diensten
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Als totaal onderhoud specialist bieden wij complete service voor al uw onderhoudswerkzaamheden. 
              Preventief en curatief onderhoud voor optimaal behoud van waarde.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-green bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-home text-tbgs-green text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gevelreiniging</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-2"></i>Hogedruk reiniging</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-2"></i>Gevelrestauratie</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-2"></i>Anti-graffiti coating</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-2"></i>Voegwerk herstellen</li>
              </ul>
              <button 
                onClick={onOpenContactModal}
                className="text-tbgs-green font-semibold hover:text-green-700 transition-colors"
              >
                Meer informatie →
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-green bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-paint-brush text-tbgs-green text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Schilderwerk</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-2"></i>Binnen schilderwerk</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-2"></i>Buiten schilderwerk</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-2"></i>Houtrot behandeling</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-2"></i>Lak- en beitswerk</li>
              </ul>
              <button 
                onClick={onOpenContactModal}
                className="text-tbgs-green font-semibold hover:text-green-700 transition-colors"
              >
                Meer informatie →
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-green bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-wrench text-tbgs-green text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Algemene reparaties</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-2"></i>Timmerwerk</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-2"></i>Loodgieterswerk</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-2"></i>Elektrische klussen</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-2"></i>Tegelwerk</li>
              </ul>
              <button 
                onClick={onOpenContactModal}
                className="text-tbgs-green font-semibold hover:text-green-700 transition-colors"
              >
                Meer informatie →
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-green bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-calendar-check text-tbgs-green text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Preventief onderhoud</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-2"></i>Onderhoudscontracten</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-2"></i>Jaarlijkse inspectie</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-2"></i>Onderhoudsplanning</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-2"></i>Kostenbesparing</li>
              </ul>
              <button 
                onClick={onOpenContactModal}
                className="text-tbgs-green font-semibold hover:text-green-700 transition-colors"
              >
                Meer informatie →
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-green bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-building text-tbgs-green text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">VvE Onderhoud</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-2"></i>Appartementencomplexen</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-2"></i>Gemeenschappelijke ruimtes</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-2"></i>Meerjarenplanning</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-2"></i>Budgetbeheer</li>
              </ul>
              <button 
                onClick={onOpenContactModal}
                className="text-tbgs-green font-semibold hover:text-green-700 transition-colors"
              >
                Meer informatie →
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-green bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-leaf text-tbgs-green text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Duurzaam Onderhoud</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-2"></i>Milieuvriendelijke producten</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-2"></i>Energiebesparende oplossingen</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-2"></i>Afvalreductie</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-2"></i>Duurzaamheidscertificaten</li>
              </ul>
              <button 
                onClick={onOpenContactModal}
                className="text-tbgs-green font-semibold hover:text-green-700 transition-colors"
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
              Ons Onderhoudsproces
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van inspectie tot oplevering. Wij werken systematisch en transparant 
              voor het beste onderhoudresultaat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-tbgs-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inspectie & Analyse</h3>
              <p className="text-gray-600">
                Grondige inspectie van uw pand en gedetailleerde analyse van de onderhoudsstaat. 
                Advies over prioriteiten en planning.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tbgs-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Planning & Offerte</h3>
              <p className="text-gray-600">
                Uitgebreide planning van alle werkzaamheden en transparante offerte. 
                Duidelijke communicatie over kosten en tijdslijnen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tbgs-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Uitvoering Onderhoud</h3>
              <p className="text-gray-600">
                Professionele uitvoering door ervaren vakmensen. 
                Minimale overlast en dagelijkse voortgangsrapportage.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tbgs-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nazorg & Garantie</h3>
              <p className="text-gray-600">
                Eindcontrole en nazorg. Onderhoudsadvies voor de toekomst 
                en uitgebreide garantie op alle werkzaamheden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Onderhoud Kennisbank Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Onderhoud Kennisbank
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uitgebreide informatieartikelen over onderhoud, preventie en zorg voor uw woning. 
              Professioneel advies van onze ervaren onderhoud specialisten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dakkapel Reinigen Article */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <i className="fas fa-home text-green-600 text-4xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dakkapel Reinigen</h3>
                <p className="text-gray-600 mb-4">
                  Professionele <strong>dakkapel reiniging</strong> voor optimale lichtinval en schone constructie. Complete zorg met maatwerk abonnement.
                </p>
                <Link href="/totaal-onderhoud-specialist/dakkapel-reinigen" className="text-tbgs-green font-semibold hover:text-green-700 transition-colors cursor-pointer">
                  Lees meer over dakkapel reinigen →
                </Link>
              </div>
            </div>

            {/* Onderhoud Dakkapel Article */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <i className="fas fa-tools text-green-600 text-4xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Onderhoud Dakkapel</h3>
                <p className="text-gray-600 mb-4">
                  Complete <strong>dakkapel onderhoud</strong> door ervaren specialisten. Preventief onderhoud voorkomt kostbare reparaties.
                </p>
                <Link href="/totaal-onderhoud-specialist/onderhoud-dakkapel" className="text-tbgs-green font-semibold hover:text-green-700 transition-colors cursor-pointer">
                  Lees meer over dakkapel onderhoud →
                </Link>
              </div>
            </div>

            {/* Onderhoud Hout Dak Article */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <i className="fas fa-tree text-green-600 text-4xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Onderhoud Hout in Dak</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Houtbescherming</strong> voor dakconstructies door ervaren specialisten. Preventieve behandeling tegen aantasting.
                </p>
                <Link href="/totaal-onderhoud-specialist/onderhoud-hout-dak" className="text-tbgs-green font-semibold hover:text-green-700 transition-colors cursor-pointer">
                  Lees meer over hout onderhoud →
                </Link>
              </div>
            </div>

            {/* Schilder Article */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <i className="fas fa-paint-brush text-green-600 text-4xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Schilder</h3>
                <p className="text-gray-600 mb-4">
                  Vakkundig <strong>schilderwerk</strong> door ervaren schilders. Binnen- en buitenschilderwerk met perfecte afwerking.
                </p>
                <Link href="/totaal-onderhoud-specialist/schilder" className="text-tbgs-green font-semibold hover:text-green-700 transition-colors cursor-pointer">
                  Lees meer over schilderwerk →
                </Link>
              </div>
            </div>

            {/* Onderhoud Garage Article */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <i className="fas fa-car text-green-600 text-4xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Onderhoud Garage</h3>
                <p className="text-gray-600 mb-4">
                  Complete <strong>garage onderhoud</strong> door ervaren specialisten. Van dak tot vloer - alle aspecten van garage zorg.
                </p>
                <Link href="/totaal-onderhoud-specialist/onderhoud-garage" className="text-tbgs-green font-semibold hover:text-green-700 transition-colors cursor-pointer">
                  Lees meer over garage onderhoud →
                </Link>
              </div>
            </div>

            {/* Onderhoud Dakgoot Article */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <i className="fas fa-tint text-green-600 text-4xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Onderhoud Dakgoot</h3>
                <p className="text-gray-600 mb-4">
                  Professioneel <strong>dakgoot onderhoud</strong> voorkomt wateroverlast. Regelmatige reiniging en preventieve zorg.
                </p>
                <Link href="/totaal-onderhoud-specialist/onderhoud-dakgoot" className="text-tbgs-green font-semibold hover:text-green-700 transition-colors cursor-pointer">
                  Lees meer over dakgoot onderhoud →
                </Link>
              </div>
            </div>

            {/* Preventief Onderhoud Article */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <i className="fas fa-shield-alt text-green-600 text-4xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Preventief Onderhoud</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Preventief onderhoud</strong> bespaart geld en voorkomt problemen. Maatwerk onderhoudsprogramma voor uw woning.
                </p>
                <Link href="/totaal-onderhoud-specialist/preventief-onderhoud" className="text-tbgs-green font-semibold hover:text-green-700 transition-colors cursor-pointer">
                  Lees meer over preventief onderhoud →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-tbgs-green text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Tijd voor Onderhoud?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Neem contact met ons op voor een vrijblijvende inspectie en onderhoudsofferte. 
              Preventief onderhoud bespaart kosten op de lange termijn.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onOpenContactModal}
                className="bg-white text-tbgs-green px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <i className="fas fa-calculator mr-3"></i>
                Gratis Onderhoud offerte
              </button>
              <a 
                href="tel:+31402026744"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-tbgs-green transition-colors flex items-center justify-center"
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
