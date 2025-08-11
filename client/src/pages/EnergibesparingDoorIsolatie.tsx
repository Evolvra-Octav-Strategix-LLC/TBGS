import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrendingUp, Home, Zap, Euro, Thermometer, CheckCircle, Calculator, Phone, Calendar, Star, Award } from "lucide-react";

interface EnergibesparingDoorIsolatieProps {
  onOpenContactModal: () => void;
}

export default function EnergibesparingDoorIsolatie({ onOpenContactModal }: EnergibesparingDoorIsolatieProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isolatietypes = [
    {
      type: "Dakisolatie",
      besparing: "25-30%",
      investering: "€2.500-4.500",
      terugverdientijd: "4-6 jaar",
      subsidie: "Tot €2.500",
      rdWaarde: "R ≥ 6.0 m²K/W",
      icon: <Home className="w-6 h-6 text-tbgs-green" />
    },
    {
      type: "Vloerisolatie",
      besparing: "15-20%",
      investering: "€1.800-3.200",
      terugverdientijd: "5-8 jaar",
      subsidie: "Tot €1.500",
      rdWaarde: "R ≥ 3.5 m²K/W",
      icon: <Home className="w-6 h-6 text-blue-500" />
    },
    {
      type: "Spouwmuurisolatie",
      besparing: "20-25%",
      investering: "€1.200-2.500",
      terugverdientijd: "3-5 jaar",
      subsidie: "Tot €1.800",
      rdWaarde: "R ≥ 2.5 m²K/W",
      icon: <Home className="w-6 h-6 text-orange-500" />
    },
    {
      type: "HR++ / Tripleglas",
      besparing: "10-15%",
      investering: "€4.000-8.000",
      terugverdientijd: "8-12 jaar",
      subsidie: "Tot €3.500",
      rdWaarde: "U ≤ 1.1 W/m²K",
      icon: <Home className="w-6 h-6 text-purple-500" />
    }
  ];

  const subsidieoverzicht = [
    {
      naam: "ISDE 2025",
      bedrag: "Tot €4.000",
      voorwaarde: "Particuliere woningeigenaren",
      extra: "Biobased isolatie: +25% subsidie"
    },
    {
      naam: "Nationaal Warmtefonds",
      bedrag: "€2.000-8.000",
      voorwaarde: "Huishoudens met laag inkomen",
      extra: "Renteloze lening mogelijk"
    },
    {
      naam: "Lokale Subsidies",
      bedrag: "€500-2.000",
      voorwaarde: "Afhankelijk van gemeente",
      extra: "Check uw gemeente website"
    },
    {
      naam: "Energiebespaarlening",
      bedrag: "Tot €25.000",
      voorwaarde: "2.5% rente, 20 jaar looptijd",
      extra: "Geen onderpand vereist"
    }
  ];

  const materiaalvergelijking = [
    {
      materiaal: "Steenwol",
      lambdaWaarde: "0.032-0.040",
      levensduur: "50+ jaar",
      brandveiligheid: "Uitstekend",
      vocht: "Goed",
      milieu: "Goed",
      prijs: "€€"
    },
    {
      materiaal: "Glaswol",
      lambdaWaarde: "0.032-0.044",
      levensduur: "40+ jaar",
      brandveiligheid: "Goed",
      vocht: "Matig",
      milieu: "Goed",
      prijs: "€"
    },
    {
      materiaal: "Vezelhennep",
      lambdaWaarde: "0.040-0.045",
      levensduur: "50+ jaar",
      brandveiligheid: "Goed",
      vocht: "Uitstekend",
      milieu: "Uitstekend",
      prijs: "€€€"
    },
    {
      materiaal: "Vlas Isolatie",
      lambdaWaarde: "0.038-0.042",
      levensduur: "50+ jaar",
      brandveiligheid: "Goed",
      vocht: "Uitstekend",
      milieu: "Uitstekend",
      prijs: "€€€"
    }
  ];

  return (
    <>
      <SEOHead
        title="Energiebesparing door Isolatie - Expert Gids 2025 | TBGS"
        description="🏠 Halveer uw energierekening met juiste isolatie. ✓ ISDE subsidie 2025 ✓ Biobased materialen ✓ ROI berekening ✓ Gratis advies. Expert isolatie tips van TOS specialisten."
        url="/kennisbank/energiebesparing-door-isolatie"
        keywords="energiebesparing woningen, woningisolatie, isolatie subsidie, ISDE subsidie 2025, energiezuinige woning, verduurzaming woning, energierekening verlagen, warmteverlies voorkomen, dakisolatie, vloerisolatie, spouwmuurisolatie, HR++ glas, tripleglas, isolatiemateriaal, biobased isolatie, vezelhennep isolatie, isolatiewaarde Rd, energielabel verbeteren, isolatie kosten, isolatie specialist"
      />

      <Header onOpenContactModal={onOpenContactModal} />

      <article className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-tbgs-green to-green-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-full mb-6">
                <Star className="w-5 h-5 mr-2" />
                <span className="font-semibold">TOS Expert</span>
                <span className="mx-2">•</span>
                <span>Nov 2024</span>
                <span className="mx-2">•</span>
                <span>7 min leestijd</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Energiebesparing door Isolatie
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                Ontdek hoe juiste isolatie uw energierekening kan halveren en uw wooncomfort verhoogt
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={onOpenContactModal}
                  className="bg-white text-tbgs-green px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Gratis Isolatieadvies
                </button>
                <a
                  href="tel:+31402026744"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-tbgs-green transition-colors flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  040 202 6744
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong>Isolatie is de sleutel tot een energiezuinige woning.</strong> Met de energieprijzen die blijven stijgen en strengere klimaatdoelstellingen, wordt investeren in goede isolatie belangrijker dan ooit. Als TOS-specialisten bij TBGS helpen we dagelijks huiseigenaren hun energierekening drastisch te verlagen.
                </p>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8">
                  <div className="flex">
                    <TrendingUp className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-green-800 mb-2">ISDE 2025 Update</h3>
                      <p className="text-green-700">
                        <strong>Goed nieuws!</strong> De ISDE subsidie is verhoogd naar €600 miljoen voor 2025. Voor biobased isolatiematerialen krijgt u zelfs 25% extra subsidie bovenop het standaardbedrag.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  In deze uitgebreide gids delen we onze expertise over de verschillende isolatietypes, hun besparing potentieel, beschikbare subsidies en de nieuwste ontwikkelingen in duurzame isolatiematerialen. Met concrete cijfers en praktische tips helpen we u de juiste keuze maken voor uw situatie.
                </p>
              </div>
            </section>

            {/* Isolatie Types */}
            <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Home className="w-8 h-8 text-tbgs-green mr-3" />
                Isolatietypes & Besparingpotentieel
              </h2>

              <div className="grid lg:grid-cols-2 gap-6">
                {isolatietypes.map((isolatie, index) => (
                  <div key={index} className="border rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {isolatie.icon}
                        <h3 className="font-bold text-xl text-gray-900">{isolatie.type}</h3>
                      </div>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        -{isolatie.besparing}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Investering:</span>
                        <span className="font-semibold">{isolatie.investering}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Terugverdientijd:</span>
                        <span className="font-semibold text-blue-600">{isolatie.terugverdientijd}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">ISDE Subsidie:</span>
                        <span className="font-semibold text-green-600">{isolatie.subsidie}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Isolatiewaarde:</span>
                        <span className="font-semibold text-purple-600">{isolatie.rdWaarde}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-blue-800 mb-4 flex items-center">
                  <Calculator className="w-6 h-6 mr-2" />
                  Persoonlijke Besparingcalculator
                </h3>
                <p className="text-blue-700 mb-4">
                  Wilt u weten hoeveel u precies kunt besparen met isolatie? Onze experts maken een gratis berekening op maat voor uw woning, inclusief subsidieadvies.
                </p>
                <button 
                  onClick={onOpenContactModal}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Vraag Gratis Berekening Aan
                </button>
              </div>
            </section>

            {/* Subsidies 2025 */}
            <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Euro className="w-8 h-8 text-tbgs-green mr-3" />
                Subsidieoverzicht 2025
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {subsidieoverzicht.map((subsidie, index) => (
                  <div key={index} className="border rounded-xl p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-lg text-gray-900">{subsidie.naam}</h3>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {subsidie.bedrag}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-2">{subsidie.voorwaarde}</p>
                    <p className="text-sm text-tbgs-green font-semibold">{subsidie.extra}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-800 mb-4 flex items-center">
                  <Award className="w-6 h-6 mr-2" />
                  TBGS Subsidieservice
                </h3>
                <p className="text-green-700 mb-4">
                  Wij regelen alle subsidieaanvragen voor u! Van ISDE tot gemeente subsidies - u hoeft zich geen zorgen te maken over de administratie.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={onOpenContactModal}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Subsidie Check & Aanvraag
                  </button>
                  <button 
                    onClick={onOpenContactModal}
                    className="border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                  >
                    Gratis Subsidieadvies
                  </button>
                </div>
              </div>
            </section>

            {/* Materiaalvergelijking */}
            <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Thermometer className="w-8 h-8 text-tbgs-green mr-3" />
                Isolatiematerialen Vergelijking 2025
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2">
                      <th className="text-left py-4 px-2 font-semibold">Materiaal</th>
                      <th className="text-center py-4 px-2 font-semibold">λ-waarde</th>
                      <th className="text-center py-4 px-2 font-semibold">Levensduur</th>
                      <th className="text-center py-4 px-2 font-semibold">Brandveilig</th>
                      <th className="text-center py-4 px-2 font-semibold">Vocht</th>
                      <th className="text-center py-4 px-2 font-semibold">Milieu</th>
                      <th className="text-center py-4 px-2 font-semibold">Prijs</th>
                    </tr>
                  </thead>
                  <tbody>
                    {materiaalvergelijking.map((materiaal, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-4 px-2 font-medium">{materiaal.materiaal}</td>
                        <td className="py-4 px-2 text-center">{materiaal.lambdaWaarde}</td>
                        <td className="py-4 px-2 text-center">{materiaal.levensduur}</td>
                        <td className="py-4 px-2 text-center">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            materiaal.brandveiligheid === 'Uitstekend' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {materiaal.brandveiligheid}
                          </span>
                        </td>
                        <td className="py-4 px-2 text-center">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            materiaal.vocht === 'Uitstekend' ? 'bg-green-100 text-green-800' :
                            materiaal.vocht === 'Goed' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'
                          }`}>
                            {materiaal.vocht}
                          </span>
                        </td>
                        <td className="py-4 px-2 text-center">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            materiaal.milieu === 'Uitstekend' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {materiaal.milieu}
                          </span>
                        </td>
                        <td className="py-4 px-2 text-center font-bold">{materiaal.prijs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-semibold text-green-800 mb-2">💡 Expert Tip - Biobased Voordeel 2025</h4>
                <p className="text-green-700">
                  <strong>Vezelhennep en vlas isolatie</strong> krijgen 25% extra ISDE subsidie in 2025! Deze natuurlijke materialen hebben uitstekende isolatiewaarden én zijn volledig circulair.
                </p>
              </div>
            </section>

            {/* ROI & Wooncomfort */}
            <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <TrendingUp className="w-8 h-8 text-tbgs-green mr-3" />
                Return on Investment & Wooncomfort
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Financiële Voordelen</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>25-50% lagere energierekening</strong> direct zichtbaar</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Woningwaarde stijgt</strong> met €15.000-30.000</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Energielabel verbetering</strong> naar A of B</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Terugverdientijd</strong> gemiddeld 4-8 jaar</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Wooncomfort Voordelen</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Thermometer className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <span><strong>Stabielere temperatuur</strong> het hele jaar</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Thermometer className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <span><strong>Minder tocht en koude plekken</strong></span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Thermometer className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <span><strong>Betere geluidsisolatie</strong> van buiten</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Thermometer className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <span><strong>Verminderde kans op schimmel</strong></span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-semibold text-blue-800 mb-2">🏆 Klant Testimonial</h4>
                <blockquote className="text-blue-700 italic">
                  "Na dakisolatie door TBGS is onze energierekening gehalveerd van €2.800 naar €1.400 per jaar. De investering van €3.200 hebben we al na 3 jaar terugverdiend!" - Familie Janssen, Eindhoven
                </blockquote>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-tbgs-green to-green-800 text-white rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Klaar voor Energiebesparing?</h2>
              <p className="text-xl mb-8 opacity-90">
                Onze TOS-experts maken een gratis isolatieplan op maat, inclusief subsidieadvies
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-white text-tbgs-green px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Gratis Isolatieplan
                </button>
                <a 
                  href="tel:+31402026744"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-tbgs-green transition-colors flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Direct Advies: 040 202 6744
                </a>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-2">
                    <Award className="w-6 h-6" />
                  </div>
                  <p className="font-semibold">Erkende Installateur</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-2">
                    <Euro className="w-6 h-6" />
                  </div>
                  <p className="font-semibold">Subsidieservice</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <p className="font-semibold">10 Jaar Garantie</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>

      <Footer backgroundColor="bg-gray-900" accentColor="text-tbgs-green" />
    </>
  );
}