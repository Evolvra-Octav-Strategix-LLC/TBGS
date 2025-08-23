import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import Footer from "@/components/Footer";
import { CheckCircle, AlertTriangle, Eye, Shield, Wrench, Phone, Calendar, Star } from "lucide-react";

interface DaklekkageHerkennenVoorokenProps {
  onOpenContactModal: () => void;
}

export default function DaklekkageHerkennenVoorkomen({ onOpenContactModal }: DaklekkageHerkennenVoorokenProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const signalen = [
    {
      icon: <Eye className="w-6 h-6 text-tbgs-red" />,
      titel: "Vochtplekken op Plafond",
      beschrijving: "Gele of bruine vlekken die langzaam groter worden zijn vaak het eerste teken van daklekkage.",
      urgentie: "Hoog"
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
      titel: "Druppelend Water",
      beschrijving: "Direct zichtbaar water dat door het plafond of langs muren naar beneden loopt.",
      urgentie: "Kritiek"
    },
    {
      icon: <Eye className="w-6 h-6 text-yellow-500" />,
      titel: "Muffe Geur in Huis",
      beschrijving: "Een karakteristieke muffe of schimmelachtige geur kan wijzen op verborgen vocht.",
      urgentie: "Gemiddeld"
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-tbgs-red" />,
      titel: "Loslatend Behang door Vocht",
      beschrijving: "Behang dat begint te bollen of los te laten door vochtinwerking van boven.",
      urgentie: "Hoog"
    },
    {
      icon: <Eye className="w-6 h-6 text-green-600" />,
      titel: "Schimmelvorming",
      beschrijving: "Zwarte of groene vlekken die ontstaan door langdurige vochtinwerking.",
      urgentie: "Hoog"
    },
    {
      icon: <Wrench className="w-6 h-6 text-blue-500" />,
      titel: "Beschadigde Dakgoot",
      beschrijving: "Overlopende of beschadigde dakgoten kunnen leiden tot water infiltratie.",
      urgentie: "Gemiddeld"
    }
  ];

  const preventieStappen = [
    {
      stap: 1,
      titel: "Regelmatige Dakinspectie",
      beschrijving: "Laat uw dak minimaal 2x per jaar professioneel inspecteren, vooral na stormen.",
      periode: "Elk halfjaar"
    },
    {
      stap: 2,
      titel: "Dakgoot Onderhoud",
      beschrijving: "Houd dakgoten schoon en controleer op scheuren of loshangende onderdelen.",
      periode: "3x per jaar"
    },
    {
      stap: 3,
      titel: "Daklood Controle",
      beschrijving: "Controleer daklood rond schoorstenen en dakdoorvoeren op scheurtjes.",
      periode: "Jaarlijks"
    },
    {
      stap: 4,
      titel: "Dakbedekking Check",
      beschrijving: "Inspecteer dakpannen, EPDM of bitumen op beschadigingen en versleten plekken.",
      periode: "Jaarlijks"
    }
  ];

  const kostenvergelijking = [
    { type: "Preventieve inspectie", voordeel: "Voorkom grote schade", besparing: "Aanzienlijke besparingen" },
    { type: "Dakgoot reiniging", voordeel: "Waterafvoer optimaal", besparing: "Voorkom kostbare reparaties" },
    { type: "Kleine reparatie op tijd", voordeel: "Snel opgelost", besparing: "Voorkom uitbreiding schade" },
    { type: "Directe schadereparatie", voordeel: "Direct ingrijpen", besparing: "Voorkom verdere escalatie" }
  ];

  return (
    <>
      <SEOHead
        title="Daklekkage Herkennen: 6 Vroege Signalen die €5000+ Schade Voorkomen | 2025"
        description="🚨 DAKLEKKAGE SIGNALEN? ✓ 6 vroege waarschuwingstekenen ✓ Voorkom €5000+ waterschade ✓ Expert dakinspectie tips ✓ 24/7 spoeddienst ✓ Gratis dakcontrole ✓ 15+ jaar ervaring"
        url="/kennisbank/daklekkage-herkennen-voorkomen"
        keywords="daklekkage herkennen 2025, vochtplekken plafond, daklek signalen, waterschade voorkomen, daklekkage vroege tekenen, druppelend water dak, daklekkage preventie tips, dakdekker spoedservice, gratis dakinspectie"
      />

      <article className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-tbgs-red to-red-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-full mb-6">
                <Star className="w-5 h-5 mr-2" />
                <span className="font-semibold">TDS Expert</span>
                <span className="mx-2">•</span>
                <span>Dec 2024</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Daklekkage Herkennen en Voorkomen
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                Leer de vroege signalen herkennen en voorkom kostbare waterschade met onze expert tips
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={onOpenContactModal}
                  className="bg-white text-tbgs-red px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Gratis Dakinspectie
                </button>
                <a
                  href="tel:+31402026744"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-tbgs-red transition-colors flex items-center"
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
                  <strong>Daklekkage is een van de meest onderschatte problemen</strong> in Nederlandse woningen. Wat begint als een klein vochtplekje kan uitgroeien tot duizenden euro's aan waterschade, schimmelgroei en constructieschade. Als erkende dakspecialisten van TBGS zien we dagelijks de gevolgen van te laat ontdekte daklekkages.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
                  <div className="flex">
                    <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-800 mb-2">Wist u dat...</h3>
                      <p className="text-yellow-700">
                        73% van alle waterschade in Nederlandse woningen wordt veroorzaakt door daklekkage? Vroege herkenning kan uw woning en portemonnee besparen van onnodige schade.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  In deze uitgebreide gids delen onze TDS-experts hun kennis over het herkennen van vroege signalen, effectieve preventie en wat te doen bij een acute daklekkage. Met meer dan 15 jaar ervaring in dakwerk hebben we de meest voorkomende oorzaken en oplossingen op een rij gezet.
                </p>
              </div>
            </section>

            {/* Signalen Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Eye className="w-8 h-8 text-tbgs-red mr-3" />
                6 Vroege Signalen van Daklekkage
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {signalen.map((signaal, index) => (
                  <div key={index} className="border rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {signaal.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-lg text-gray-900">{signaal.titel}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            signaal.urgentie === 'Kritiek' ? 'bg-red-100 text-red-800' :
                            signaal.urgentie === 'Hoog' ? 'bg-orange-100 text-orange-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {signaal.urgentie}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{signaal.beschrijving}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-red-800 mb-2">Spoedgevallen</h3>
                    <p className="text-red-700 mb-4">
                      Bij actief druppelend water of grote vochtplekken die snel uitbreiden, neem dan <strong>direct contact op</strong>. Elke minuut telt om verdere waterschade te voorkomen.
                    </p>
                    <button 
                      onClick={onOpenContactModal}
                      className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    >
                      24/7 Spoeddienst
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Preventie Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Shield className="w-8 h-8 text-tbgs-red mr-3" />
                Preventie: Voorkomen is Beter dan Genezen
              </h2>

              <div className="space-y-6">
                {preventieStappen.map((stap, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 border rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 bg-tbgs-red text-white rounded-full flex items-center justify-center font-bold">
                      {stap.stap}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="font-bold text-xl text-gray-900">{stap.titel}</h3>
                        <span className="text-sm text-tbgs-red font-semibold bg-red-50 px-3 py-1 rounded-full">
                          {stap.periode}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{stap.beschrijving}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-800 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  TBGS Onderhoudscontract
                </h3>
                <p className="text-green-700 mb-4">
                  Met ons onderhoudscontract voeren we alle preventieve controles automatisch uit. Zo hoeft u zich geen zorgen te maken en voorkomt u onaangename verrassingen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={onOpenContactModal}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Vraag Onderhoudscontract Aan
                  </button>
                  <button 
                    onClick={onOpenContactModal}
                    className="border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                  >
                    Eenmalige Inspectie
                  </button>
                </div>
              </div>
            </section>

            {/* Kostenvergelijking */}
            <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Kostenvergelijking: Preventie vs Reparatie</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2">
                      <th className="text-left py-4 px-2 font-semibold text-gray-900">Voorziening</th>
                      <th className="text-center py-4 px-2 font-semibold text-gray-900">Voordeel</th>
                      <th className="text-center py-4 px-2 font-semibold text-tbgs-red">Potentiële besparing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kostenvergelijking.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-4 px-2 font-medium">{item.type}</td>
                        <td className="py-4 px-2 text-center">{item.voordeel}</td>
                        <td className="py-4 px-2 text-center font-bold text-green-600">{item.besparing}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="text-blue-800 font-semibold">
                  💡 <strong>Expert tip:</strong> Een preventieve inspectie kan aanzienlijke reparatiekosten besparen. Investeren in preventie loont altijd!
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-tbgs-red to-red-800 text-white rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Zorgen om Uw Dak?</h2>
              <p className="text-xl mb-8 opacity-90">
                Onze TDS-experts staan klaar voor een gratis inspectie en professioneel advies
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-white text-tbgs-red px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Plan Gratis Inspectie
                </button>
                <a 
                  href="tel:+31402026744"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-tbgs-red transition-colors flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Bel Direct: 040 202 6744
                </a>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <p className="font-semibold">24/7 Spoedservice</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-2">
                    <Shield className="w-6 h-6" />
                  </div>
                  <p className="font-semibold">15+ Jaar Ervaring</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-2">
                    <Star className="w-6 h-6" />
                  </div>
                  <p className="font-semibold">Erkend & Verzekerd</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>

      <Footer backgroundColor="bg-gray-900" accentColor="text-tbgs-red" />
    </>
  );
}