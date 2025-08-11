import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, CheckCircle, AlertTriangle, Clock, Flame, Wrench, Phone, Calendar, Star, Award } from "lucide-react";

interface JaarlijkseSchoorsteencontroleProps {
  onOpenContactModal: () => void;
}

export default function JaarlijkseSchoorsteencontrole({ onOpenContactModal }: JaarlijkseSchoorsteencontroleProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const checklistItems = [
    {
      categorie: "Visuele Inspectie",
      items: [
        { check: "Schoorsteenkap controle", beschrijving: "Controleer op beschadigingen, roostering en afdichting", status: "essentieel" },
        { check: "Metselwerk inspectie", beschrijving: "Zoek naar scheuren, loshangende stenen of voegen", status: "belangrijk" },
        { check: "Rookgasafvoer opening", beschrijving: "Vrije doorgang en geen verstoppingen", status: "essentieel" },
        { check: "Regenkap functionaliteit", beschrijving: "Goede afdichting tegen weersinvloeden", status: "belangrijk" }
      ]
    },
    {
      categorie: "Technische Controle",
      items: [
        { check: "Creosoot aanslag meting", beschrijving: "Bepaal dikte van roetlaag en brandgevaar", status: "essentieel" },
        { check: "Trekwerking test", beschrijving: "Meet rookgasafvoer effectiviteit", status: "essentieel" },
        { check: "Aansluiting verwarmingstoestel", beschrijving: "Controleer verbinding en afdichting", status: "essentieel" },
        { check: "Binnenwand inspectie", beschrijving: "Zoek naar beschadigingen of roestvorming", status: "belangrijk" }
      ]
    },
    {
      categorie: "Veiligheidscheck",
      items: [
        { check: "Koolmonoxide meting", beschrijving: "Test op gevaarlijke gasconcentraties", status: "kritiek" },
        { check: "Brandveiligheid beoordeling", beschrijving: "Evalueer risico op schoorsteenbrand", status: "kritiek" },
        { check: "Omgeving controle", beschrijving: "Check brandbare materialen rondom schoorsteen", status: "belangrijk" },
        { check: "Ventilatie doorgang", beschrijving: "Voldoende luchttoevoer voor verbranding", status: "essentieel" }
      ]
    }
  ];

  const onderhoudsstappen = [
    {
      periode: "Jaarlijks (Verplicht)",
      taken: [
        "Professionele schoorsteenveger bezoek",
        "Volledige reiniging rookkanaal",
        "Veiligheidscontrole en certificering",
        "Creosoot verwijdering",
        "Technische inspectie rapport"
      ],
      kosten: "€150-250",
      wettelijk: true
    },
    {
      periode: "2x per Jaar",
      taken: [
        "Visuele controle schoorsteenkap",
        "Dakdoorvoer afdichting check",
        "Omgeving vrij houden van bladeren",
        "Stookgewoonten evalueren"
      ],
      kosten: "€0 (zelf uit te voeren)",
      wettelijk: false
    },
    {
      periode: "Per Stookseizoen",
      taken: [
        "Voor eerste keer stoken: controle",
        "Verwarmingstoestel onderhoud",
        "Brandstof kwaliteit checken",
        "Rookmelders testen"
      ],
      kosten: "€50-100",
      wettelijk: false
    }
  ];

  const risicoSignalen = [
    {
      signaal: "Witte Uitslag op Muren",
      oorzaak: "Vocht en zoutuitslag door slechte trek",
      actie: "Direct schoorsteenveger raadplegen",
      urgentie: "Hoog"
    },
    {
      signaal: "Roetdeeltjes in Huis",
      oorzaak: "Terugwaartse trek of verstopte schoorsteen",
      actie: "Stop met stoken, bel direct TSS",
      urgentie: "Kritiek"
    },
    {
      signaal: "Muffe Geur",
      oorzaak: "Vochtproblemen of slechte ventilatie",
      actie: "Ventilatie check en schoorsteencontrole",
      urgentie: "Gemiddeld"
    },
    {
      signaal: "Zichtbare Scheuren",
      oorzaak: "Uitzetting, verzakking of vorstschade",
      actie: "Professionele reparatie noodzakelijk",
      urgentie: "Hoog"
    }
  ];

  const kostenvergelijking = [
    { service: "Jaarlijkse controle & vegen", kosten: "€150-250", voordeel: "Wettelijk verplicht, veiligheid gegarandeerd" },
    { service: "Spoedservice na problemen", kosten: "€300-500", voordeel: "Direct beschikbaar, 24/7 service" },
    { service: "Schoorsteenreparatie", kosten: "€500-2.500", voordeel: "Voorkom grote renovatiekosten" },
    { service: "Onderhoudscontract", kosten: "€200-350/jaar", voordeel: "Alles geregeld, prioriteit service" }
  ];

  return (
    <>
      <SEOHead
        title="Jaarlijkse Schoorsteencontrole Checklist - TSS Expert Gids 2024 | TBGS"
        description="🔥 Complete schoorsteencontrole checklist voor veilige werking. ✓ Wettelijke vereisten ✓ Veiligheidscheck ✓ Erkende schoorsteenveger ✓ 24/7 service. Expert TSS schoorsteenonderhoud advies."
        url="/kennisbank/jaarlijkse-schoorsteencontrole"
        keywords="schoorsteenveger, schoorsteenvegen, schoorsteen onderhoud, schoorsteencontrole, schoorsteen reinigen, schoorsteenveger Nederland, schoorsteenveger nodig, schoorsteen laten vegen prijs, schoorsteenbrand voorkomen, erkende schoorsteenveger, kosten schoorsteenvegen 2024, creosoot verwijderen, rookgasafvoer controle, schoorsteenveger spoeddienst, schoorsteen inspectie, schoorsteencontrole checklist, veilig stoken, schoorsteenonderhoud wettelijk verplicht"
      />

      <Header onOpenContactModal={onOpenContactModal} />

      <article className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-tbgs-blue to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-full mb-6">
                <Star className="w-5 h-5 mr-2" />
                <span className="font-semibold">TSS Expert</span>
                <span className="mx-2">•</span>
                <span>Oct 2024</span>
                <span className="mx-2">•</span>
                <span>4 min leestijd</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Jaarlijkse Schoorsteencontrole
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                Volledige checklist voor veilige en efficiënte schoorsteenwerking het hele jaar door
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={onOpenContactModal}
                  className="bg-white text-tbgs-blue px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Plan Schoorsteencontrole
                </button>
                <a
                  href="tel:+31402026744"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-tbgs-blue transition-colors flex items-center"
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
                  <strong>Een jaarlijkse schoorsteencontrole is wettelijk verplicht</strong> en essentieel voor uw veiligheid. Als TSS-specialisten van TBGS voeren we dagelijks professionele schoorsteencontroles uit en zien we regelmatig de gevolgen van uitgesteld onderhoud.
                </p>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
                  <div className="flex">
                    <AlertTriangle className="w-6 h-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-red-800 mb-2">Wettelijke Verplichting</h3>
                      <p className="text-red-700">
                        <strong>Belangrijk:</strong> Sinds 2013 is jaarlijkse schoorsteencontrole wettelijk verplicht in Nederland. Verzuim kan leiden tot problemen met uw verzekering bij schade.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  In deze uitgebreide gids delen onze erkende schoorsteenvegers hun expertise over wat er precies wordt gecontroleerd, wanneer u alert moet zijn en hoe u zelf problemen kunt herkennen. Met meer dan 20 jaar ervaring weten we precies waar op te letten.
                </p>
              </div>
            </section>

            {/* Controle Checklist */}
            <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <CheckCircle className="w-8 h-8 text-tbgs-blue mr-3" />
                Professionele Controle Checklist
              </h2>

              <div className="space-y-8">
                {checklistItems.map((categorie, index) => (
                  <div key={index} className="border rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Shield className="w-6 h-6 text-tbgs-blue mr-2" />
                      {categorie.categorie}
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {categorie.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                          <div className="flex-shrink-0">
                            <span className={`inline-block w-3 h-3 rounded-full mt-2 ${
                              item.status === 'kritiek' ? 'bg-red-500' :
                              item.status === 'essentieel' ? 'bg-orange-500' :
                              'bg-yellow-500'
                            }`}></span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-1">{item.check}</h4>
                            <p className="text-sm text-gray-700">{item.beschrijving}</p>
                            <span className={`inline-block mt-2 px-2 py-1 rounded-full text-xs font-semibold ${
                              item.status === 'kritiek' ? 'bg-red-100 text-red-800' :
                              item.status === 'essentieel' ? 'bg-orange-100 text-orange-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {item.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-blue-800 mb-4 flex items-center">
                  <Award className="w-6 h-6 mr-2" />
                  TSS Certificering
                </h3>
                <p className="text-blue-700 mb-4">
                  Na elke controle ontvangt u een officieel certificaat dat bewijst dat uw schoorsteen veilig en conform wettelijke eisen functioneert.
                </p>
                <button 
                  onClick={onOpenContactModal}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Plan Gecertificeerde Controle
                </button>
              </div>
            </section>

            {/* Onderhoudsstappen */}
            <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Clock className="w-8 h-8 text-tbgs-blue mr-3" />
                Onderhoudsschema & Frequentie
              </h2>

              <div className="space-y-6">
                {onderhoudsstappen.map((stap, index) => (
                  <div key={index} className="border rounded-xl p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex items-center space-x-3 mb-2 lg:mb-0">
                        <h3 className="font-bold text-xl text-gray-900">{stap.periode}</h3>
                        {stap.wettelijk && (
                          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                            Wettelijk Verplicht
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-tbgs-blue">{stap.kosten}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {stap.taken.map((taak, taakIndex) => (
                        <li key={taakIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{taak}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-800 mb-4 flex items-center">
                  <Calendar className="w-6 h-6 mr-2" />
                  TSS Onderhoudscontract
                </h3>
                <p className="text-green-700 mb-4">
                  Met ons onderhoudscontract plannen we automatisch uw jaarlijkse controle en krijgt u prioriteit bij spoedgevallen. Nooit meer vergeten en altijd veilig gestookt!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={onOpenContactModal}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Onderhoudscontract Aanvragen
                  </button>
                  <button 
                    onClick={onOpenContactModal}
                    className="border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                  >
                    Eenmalige Controle
                  </button>
                </div>
              </div>
            </section>

            {/* Risico Signalen */}
            <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <AlertTriangle className="w-8 h-8 text-tbgs-blue mr-3" />
                Waarschuwingssignalen Herkennen
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {risicoSignalen.map((risico, index) => (
                  <div key={index} className="border rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-lg text-gray-900">{risico.signaal}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        risico.urgentie === 'Kritiek' ? 'bg-red-100 text-red-800' :
                        risico.urgentie === 'Hoog' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {risico.urgentie}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3"><strong>Oorzaak:</strong> {risico.oorzaak}</p>
                    <p className="text-tbgs-blue font-semibold"><strong>Actie:</strong> {risico.actie}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <Flame className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-red-800 mb-2">24/7 Spoeddienst</h3>
                    <p className="text-red-700 mb-4">
                      Bij acute problemen zoals roetdeeltjes in huis of zichtbare beschadigingen, <strong>stop direct met stoken</strong> en bel onze spoeddienst.
                    </p>
                    <a 
                      href="tel:+31402026744"
                      className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Direct Bellen: 040 202 6744
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Kostenvergelijking */}
            <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Kostenoverzicht Schoorsteenonderhoud</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2">
                      <th className="text-left py-4 px-2 font-semibold text-gray-900">Service</th>
                      <th className="text-center py-4 px-2 font-semibold text-gray-900">Kosten</th>
                      <th className="text-left py-4 px-2 font-semibold text-tbgs-blue">Voordeel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kostenvergelijking.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-4 px-2 font-medium">{item.service}</td>
                        <td className="py-4 px-2 text-center font-bold">{item.kosten}</td>
                        <td className="py-4 px-2 text-gray-700">{item.voordeel}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="text-blue-800 font-semibold">
                  💡 <strong>Expert tip:</strong> Regelmatig onderhoud voorkomt dure reparaties. Een jaarlijkse controle van €200 kan duizenden euro's aan schade voorkomen!
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-tbgs-blue to-blue-800 text-white rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Veilig Stoken Begint Hier</h2>
              <p className="text-xl mb-8 opacity-90">
                Onze erkende TSS-experts staan klaar voor uw schoorsteencontrole en onderhoud
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-white text-tbgs-blue px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Plan Uw Controle
                </button>
                <a 
                  href="tel:+31402026744"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-tbgs-blue transition-colors flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Spoeddienst: 040 202 6744
                </a>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-2">
                    <Award className="w-6 h-6" />
                  </div>
                  <p className="font-semibold">Erkende Schoorsteenveger</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-2">
                    <Shield className="w-6 h-6" />
                  </div>
                  <p className="font-semibold">Wettelijk Gecertificeerd</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-2">
                    <Flame className="w-6 h-6" />
                  </div>
                  <p className="font-semibold">20+ Jaar Ervaring</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>

      <Footer backgroundColor="bg-gray-900" accentColor="text-tbgs-blue" />
    </>
  );
}