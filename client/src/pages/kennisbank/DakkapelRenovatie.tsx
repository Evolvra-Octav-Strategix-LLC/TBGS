import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
// import Header from "../../components/Header"; // Header is already rendered by App.tsx
import Footer from "../../components/Footer";

interface DakkapelRenovatieProps {
  onOpenContactModal: () => void;
}

export default function DakkapelRenovatie({ onOpenContactModal }: DakkapelRenovatieProps) {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Dakkapel Renovatie - TBGS | Expert Dakkapel Verbouwing & Renovatie</title>
        <meta name="description" content="⭐ Dakkapel renovatie specialist TBGS - Expert in dakkapel verbouwing, isolatie en modernisering. Meer ruimte en licht op zolder. Gratis advies!" />
        <meta name="keywords" content="dakkapel renovatie, dakkapel verbouwing, dakkapel isolatie, dakkapel modernisering, zolder verbouwing" />
        <link rel="canonical" href="https://tbgs.nl/kennisbank/dakkapel-renovatie" />
      </Helmet>

      {/* Header is already rendered by App.tsx */}

      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-tbgs-navy text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Dakkapel <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Renovatie</span>
              </h1>
              <p className="text-xl lg:text-2xl font-light leading-relaxed mb-12 opacity-90">
                Professionele dakkapel renovatie voor meer ruimte, licht en comfort op zolder
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                
                <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                  <h2 className="text-2xl font-bold text-green-900 mb-4">Waarom dakkapel renovatie?</h2>
                  <p className="text-green-800 leading-relaxed">
                    Dakkapel renovatie is een kosteneffectieve manier om extra woonruimte te creëren 
                    zonder uitbreiding van het huis. Moderne renovatie kan de woningwaarde aanzienlijk 
                    verhogen en het wooncomfort verbeteren.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Wat is dakkapel renovatie?</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Dakkapel renovatie omvat het moderniseren, uitbreiden of volledig vernieuwen van 
                  bestaande dakkapellen. Dit kan variëren van cosmetische aanpassingen tot structurele 
                  verbouwingen die de bruikbare ruimte op zolder aanzienlijk vergroten.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Voordelen van dakkapel renovatie:</h3>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li><strong>Meer ruimte:</strong> Optimaal gebruik van beschikbare zolderruimte</li>
                  <li><strong>Meer licht:</strong> Grotere ramen en betere oriëntatie</li>
                  <li><strong>Betere isolatie:</strong> Moderne isolatiematerialen en -technieken</li>
                  <li><strong>Woningwaarde:</strong> Aanzienlijke verhoging van de woningwaarde</li>
                  <li><strong>Energiebesparing:</strong> Verbeterde energieprestaties</li>
                  <li><strong>Moderne uitstraling:</strong> Eigentijdse architectuur en afwerking</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Soorten dakkapel renovaties</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cosmetische renovatie</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Bij cosmetische renovatie wordt de bestaande structuur behouden en worden 
                  alleen de afwerking, beglazing en isolatie vernieuwd. Dit is de meest 
                  kosteneffectieve vorm van renovatie.
                </p>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">Werkzaamheden:</h4>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Vervanging van ramen en kozijnen</li>
                  <li>Nieuwe gevelafwerking en schilderwerk</li>
                  <li>Verbetering van isolatie</li>
                  <li>Modernisering van binnenafwerking</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Structurele renovatie</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Bij structurele renovatie worden de afmetingen van de dakkapel vergroot 
                  of wordt de constructie aangepast voor betere functionaliteit en meer 
                  ruimte.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Volledige vervanging</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Soms is het efficiënter om de bestaande dakkapel volledig te vervangen 
                  door een nieuwe, moderne constructie die beter past bij de huidige 
                  behoeften en bouwstandaarden.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Moderne dakkapel ontwerpen</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vlakke dakkapellen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Moderne vlakke dakkapellen bieden een strakke, minimalistische uitstraling 
                  en maximale binnenruimte. Ze zijn ideaal voor eigentijdse architectuur 
                  en bieden uitstekende mogelijkheden voor grote raampartijen.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lessenaarsdakkapellen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Dakkapellen met één hellend vlak bieden een goede balans tussen moderne 
                  uitstraling en traditionele bouwwijze. Ze zijn geschikt voor verschillende 
                  architectuurstijlen.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Slaapkamerdakkapellen</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Grote dakkapellen kunnen volwaardige slaapkamers huisvesten met walk-in 
                  closets, ensuite badkamers en comfortabele staanhoogte.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-blue-800"><strong>Onderhoudsabonnement Tip:</strong> Met een TBGS 
                  onderhoudsabonnement wordt uw gerenoveerde dakkapel jarenlang optimaal onderhouden 
                  voor behoud van kwaliteit en garantie.</p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Renovatieproces</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Analyse en ontwerp</h3>
                <p className="text-lg leading-relaxed mb-4">
                  TBGS start met een grondige analyse van de bestaande situatie en uw 
                  wensen. Op basis hiervan wordt een ontwerp gemaakt dat past bij 
                  uw budget en de bouwregels.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Vergunningen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Afhankelijk van de omvang van de renovatie kunnen bouwvergunningen 
                  nodig zijn. TBGS begeleidt u door het vergunningsproces en zorgt 
                  voor alle benodigde documenten.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Uitvoering</h3>
                <p className="text-lg leading-relaxed mb-4">
                  De renovatie wordt uitgevoerd door ervaren vakmensen volgens een 
                  strak tijdschema. We zorgen voor minimale overlast en beschermen 
                  uw woning tijdens de werkzaamheden.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">4. Oplevering</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Na voltooiing wordt de renovatie opgeleverd met alle garantie-
                  documenten en onderhoudsinstructies. TBGS blijft beschikbaar 
                  voor nazorg en service.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Isolatie en energieprestaties</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Moderne isolatiematerialen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Bij renovatie kan de isolatie aanzienlijk verbeterd worden met 
                  moderne materialen zoals PIR, PUR of natuurlijke isolatie. 
                  Dit verhoogt het comfort en verlaagt de energiekosten.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">HR++ beglazing</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Moderne HR++ beglazing of zelfs triple glas zorgt voor uitstekende 
                  isolatie en reduceert condensatie en tocht. Speciale coatings kunnen 
                  warmte reflecteren in de zomer.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ventilatie</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Goede ventilatie is essentieel in gerenoveerde dakkapellen. 
                  Mechanische ventilatie of natuurlijke ventilatie via te openen 
                  ramen zorgt voor een gezond binnenklimaat.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Financiering en subsidies</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEEH subsidie</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Voor isolatieverbeteringen kunt u mogelijk gebruik maken van 
                  de SEEH subsidie. TBGS informeert u over de mogelijkheden en 
                  helpt bij de aanvraag.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Energieleningen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Verschillende banken bieden speciale leningen voor energiebesparende 
                  renovaties tegen gunstige voorwaarden. Dit maakt dakkapel renovatie 
                  financieel aantrekkelijker.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Return on investment</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Dakkapel renovatie heeft doorgaans een hoge return on investment 
                  door waardestijging van de woning en energiebesparing. Het project 
                  verdient zichzelf vaak binnen 10-15 jaar terug.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Bouwregels en vergunningen</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bouwvergunning</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Voor structurele wijzigingen of vergroting van dakkapellen is 
                  vaak een bouwvergunning vereist. TBGS kent alle lokale regelgeving 
                  en begeleidt het vergunningsproces.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Welstandstoetsing</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Wijzigingen aan de buitenkant van uw woning moeten mogelijk 
                  getoetst worden door de welstandscommissie. TBGS zorgt voor 
                  ontwerpen die voldoen aan de esthetische eisen.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Monumentenstatus</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Bij monumentale panden gelden specifieke regels. TBGS heeft 
                  ervaring met monumentaal restaureren en kent de vereisten 
                  voor authentieke renovaties.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-green-900 mb-3">Vakmanschap gegarandeerd</h3>
                  <p className="text-green-800">
                    TBGS gebruikt alleen gecertificeerde vakmensen en kwaliteitsmaterialen 
                    voor duurzame dakkapel renovaties met jarenlange garantie.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Waarom kiezen voor TBGS?</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Dakkapel expertise</h3>
                    <p className="text-blue-800">
                      25+ jaar ervaring in dakkapel constructie, renovatie en modernisering.
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Complete service</h3>
                    <p className="text-green-800">
                      Van ontwerp tot oplevering - alles uit één hand voor optimale kwaliteit.
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-orange-900 mb-3">Garantie</h3>
                    <p className="text-orange-800">
                      Uitgebreide garantie op constructie, materialen en afwerking.
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-900 mb-3">Begeleiding</h3>
                    <p className="text-purple-800">
                      Volledige begeleiding bij vergunningen, subsidies en financiering.
                    </p>
                  </div>
                </div>

              </article>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-tbgs-navy via-blue-900 to-indigo-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Klaar voor dakkapel renovatie?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Onze specialisten adviseren u graag over de mogelijkheden en maken een plan op maat!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-white text-tbgs-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Gratis Renovatie Advies
                </button>
                <Link href="/contact">
                  <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-tbgs-navy transition-all duration-300">
                    Direct Contact
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}