import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface DakgootProps {
  onOpenContactModal: () => void;
}

export default function Dakgoot({ onOpenContactModal }: DakgootProps) {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Dakgoot Specialist - TBGS | Expert Dakgoot Installatie & Onderhoud</title>
        <meta name="description" content="⭐ Dakgoot specialist TBGS - Expert in dakgoot installatie, reparatie en reiniging. Professionele hemelwaterafvoer voor optimale dakdrainage. Gratis advies!" />
        <meta name="keywords" content="dakgoot, goot, hemelwaterafvoer, waterafvoer, dakgoot installatie, dakgoot reiniging, gootreparatie" />
        <link rel="canonical" href="https://tbgs.nl/kennisbank/dakgoot" />
      </Helmet>

      <Header onOpenContactModal={onOpenContactModal} />

      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-tbgs-navy text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Dakgoot <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Specialist</span>
              </h1>
              <p className="text-xl lg:text-2xl font-light leading-relaxed mb-12 opacity-90">
                Professionele dakgoot installatie voor optimale hemelwaterafvoer en dakbescherming
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">Waarom is een dakgoot zo belangrijk?</h2>
                  <p className="text-blue-800 leading-relaxed">
                    Het is misschien het laatste waar u aan denkt bij uw dak, maar de dakgoot is 
                    één van de meest cruciale onderdelen. Een goed functionerende dakgoot beschermt 
                    uw woning tegen waterschade en zorgt voor een droge fundering.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Wat is een dakgoot?</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Een dakgoot is een horizontaal kanaal langs de dakrand dat regenwater opvangt 
                  en naar de regenpijpen leidt. Dit systeem voorkomt dat water langs de gevel 
                  stroomt en schade veroorzaakt aan fundering, gevel en landschapsarchitectuur.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Functies van dakgoten:</h3>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li><strong>Wateropvang:</strong> Verzameling van regenwater van het dak</li>
                  <li><strong>Waterafvoer:</strong> Geleidelijke afvoer naar regenpijpen</li>
                  <li><strong>Gevelbescherming:</strong> Voorkoming van waterschade aan de gevel</li>
                  <li><strong>Funderingsbescherming:</strong> Behoud van droge funderingen</li>
                  <li><strong>Erosiepreventie:</strong> Bescherming van tuin en bestrating</li>
                  <li><strong>Esthetiek:</strong> Afwerking van de daklijn</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Dakgoot materialen</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Zinken dakgoten</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Zink is het meest traditionele en duurzame materiaal voor dakgoten. 
                  Zinken goten hebben een levensduur van 50-80 jaar en ontwikkelen een 
                  natuurlijke patina die extra bescherming biedt tegen corrosie.
                </p>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">Voordelen zink:</h4>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Zeer lange levensduur (50-80 jaar)</li>
                  <li>Natuurlijke corrosiebestendigheid</li>
                  <li>Recyclebaar en milieuvriendelijk</li>
                  <li>Karakteristieke uitstraling</li>
                  <li>Minimaal onderhoud vereist</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Aluminium dakgoten</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Aluminium biedt een lichtgewicht en kosteneffectief alternatief. 
                  Deze goten zijn verkrijgbaar in vele RAL-kleuren en zijn 
                  eenvoudig te installeren en onderhouden.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Koperen dakgoten</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Voor exclusieve projecten biedt koper de hoogste kwaliteit en 
                  meest prestigieuze uitstraling. Koperen goten gaan een leven 
                  lang mee en ontwikkelen een kenmerkende groene patina.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Kunststof dakgoten</h3>
                <p className="text-lg leading-relaxed mb-6">
                  PVC dakgoten zijn de meest betaalbare optie en geschikt voor 
                  moderne woningen. Ze zijn licht, eenvoudig te installeren en 
                  verkrijgbaar in verschillende kleuren en profielen.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Dakgoot installatie</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Afschot en positionering</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Een correcte afschot van 3-5mm per meter is essentieel voor goede 
                  waterafvoer. TBGS gebruikt professionele meetapparatuur om het 
                  juiste afschot te garanderen en waterophoping te voorkomen.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bevestiging aan dakrand</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Dakgoten worden bevestigd met speciale gootbeugels die aangepast 
                  zijn aan het type dak en dakbedekking. De afstand tussen beugels 
                  is afhankelijk van het materiaal en de verwachte belasting.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Verbindingen en hoeken</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Professionele verbindingen tussen gootstukken en hoekstukken 
                  zijn cruciaal voor een waterdicht systeem. TBGS gebruikt 
                  hoogwaardige voegmaterialen en zorgt voor perfecte afdichting.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-800"><strong>Onderhoudsabonnement Tip:</strong> Met een TBGS 
                  onderhoudsabonnement worden uw dakgoten tweemaal per jaar professioneel gereinigd 
                  en gecontroleerd, waardoor de levensduur wordt gemaximaliseerd.</p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Dakgoot onderhoud</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Regelmatige reiniging</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Dakgoten moeten minimaal tweemaal per jaar gereinigd worden om 
                  verstoppingen te voorkomen. Bladeren, mos en vuil kunnen de 
                  waterafvoer belemmeren en tot overstroming leiden.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3">Reinigingsschema:</h4>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li><strong>Voorjaar:</strong> Verwijdering van wintervuil en controle op schade</li>
                  <li><strong>Herfst:</strong> Bladeren en takjes verwijderen voor winter</li>
                  <li><strong>Extra:</strong> Na storm of extreme weersomstandigheden</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Preventieve maatregelen</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Bladvangers en gootzeef kunnen geïnstalleerd worden om het 
                  onderhoud te verminderen. Deze voorzieningen houden grote 
                  partikels tegen terwijl water vrij kan stromen.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Veelvoorkomende problemen</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Verstoppingen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Bladeren en vuil kunnen dakgoten blokkeren, vooral bij de 
                  uitloop naar regenpijpen. Dit leidt tot overstroming van 
                  de goot en mogelijke waterschade.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Doorhangende goten</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Door het gewicht van water en vuil kunnen goten gaan doorhangen. 
                  Dit verstoort het afschot en kan leiden tot waterophoping en 
                  structurele schade aan de bevestiging.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lekkages bij verbindingen</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Vooral bij temperatuurschommelingen kunnen voegen gaan lekken. 
                  Tijdige reparatie voorkomt waterschade aan gevel en fundering.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Moderne innovaties</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Verwarmde dakgoten</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Voor locaties met veel sneeuw en ijs kunnen dakgoten uitgerust 
                  worden met verwarmingskabels. Dit voorkomt ijsdammen die tot 
                  ernstige schade kunnen leiden.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart monitoring</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Moderne sensoren kunnen de waterstroming in dakgoten monitoren 
                  en waarschuwen voor verstoppingen of overbelasting. Dit enableert 
                  predictief onderhoud.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Geïntegreerde filters</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Nieuwe systemen integreren filtermechanismen direct in de goot 
                  om vuil tegen te houden terwijl water vrij kan stromen. Dit 
                  vermindert onderhoudsfrequentie aanzienlijk.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-red-900 mb-3">Waarschuwing</h3>
                  <p className="text-red-800">
                    Defecte dakgoten kunnen leiden tot ernstige waterschade aan fundering en gevel. 
                    Bij overstroming of zichtbare schade direct professionele hulp inschakelen.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Waarom kiezen voor TBGS?</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Expertise</h3>
                    <p className="text-blue-800">
                      25+ jaar ervaring in dakgoot installatie en waterafvoersystemen.
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Vakmanschap</h3>
                    <p className="text-green-800">
                      Gecertificeerde installateurs met perfecte afwerking en garantie.
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-orange-900 mb-3">Service</h3>
                    <p className="text-orange-800">
                      Complete service van advies tot onderhoud voor zorgeloze dakgoten.
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-900 mb-3">Kwaliteit</h3>
                    <p className="text-purple-800">
                      Uitsluitend A-merk materialen met jarenlange garantie.
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
                Problemen met uw dakgoot?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Laat uw dakgoot professioneel installeren of onderhouden door onze specialisten!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-white text-tbgs-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Gratis offerte
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