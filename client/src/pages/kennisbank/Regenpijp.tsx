import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
// import Header from "../../components/Header"; // Header is already rendered by App.tsx
import Footer from "../../components/Footer";

interface RegenpijpProps {
  onOpenContactModal: () => void;
}

export default function Regenpijp({ onOpenContactModal }: RegenpijpProps) {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Regenpijp Specialist - TBGS | Expert Regenpijp Installatie & Onderhoud</title>
        <meta name="description" content="⭐ Regenpijp specialist TBGS - Expert in regenpijp installatie, reparatie en onderhoud. Professionele hemelwaterafvoer voor optimale dakdrainage. Gratis advies!" />
        <meta name="keywords" content="regenpijp, hemelwaterafvoer, dakgoot, waterafvoer, regenpijp installatie, regenpijp reparatie" />
        <link rel="canonical" href="https://tbgs.nl/kennisbank/regenpijp" />
      </Helmet>

      {/* Header is already rendered by App.tsx */}

      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-tbgs-navy text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Regenpijp <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Specialist</span>
              </h1>
              <p className="text-xl lg:text-2xl font-light leading-relaxed mb-12 opacity-90">
                Professionele regenpijp installatie voor optimale hemelwaterafvoer
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">Waarom zijn regenpijpen cruciaal?</h2>
                  <p className="text-blue-800 leading-relaxed">
                    In Nederland valt er jaarlijks op 130 dagen van het jaar 1mm regen of meer. 
                    Een goed functionerend regenpijpsysteem is essentieel om deze grote hoeveelheden 
                    water veilig af te voeren en waterschade aan uw woning te voorkomen.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Wat is een regenpijp?</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Een regenpijp is een verticale buis die regenwater van de dakgoot naar de riolering 
                  of infiltratievoorziening transporteert. Dit onderdeel van het hemelwaterafvoersysteem 
                  is cruciaal voor het voorkomen van wateroverlast en funderingsschade.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Functies van regenpijpen:</h3>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li><strong>Waterafvoer:</strong> Transport van regenwater van dak naar afvoersysteem</li>
                  <li><strong>Bescherming:</strong> Voorkoming van erosie rond de fundering</li>
                  <li><strong>Drainage:</strong> Voorkoming van waterophoping bij de woning</li>
                  <li><strong>Structurele bescherming:</strong> Behoud van droge funderingen</li>
                  <li><strong>Tuinbescherming:</strong> Voorkoming van overstromingen in tuinen</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Materialen voor regenpijpen</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Zinken regenpijpen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Zink is het meest gebruikt materiaal voor regenpijpen vanwege de uitstekende 
                  duurzaamheid en corrosiebestendigheid. Zinken regenpijpen gaan 50+ jaar mee 
                  en ontwikkelen een natuurlijke patina die extra bescherming biedt.
                </p>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">Voordelen zink:</h4>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Zeer lange levensduur (50-80 jaar)</li>
                  <li>Natuurlijke corrosiebestendigheid</li>
                  <li>Recyclebaar en milieuvriendelijk</li>
                  <li>Onderhoudsarm</li>
                  <li>Klassieke, tijdloze uitstraling</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Aluminium regenpijpen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Aluminium biedt een lichtgewicht alternatief met goede duurzaamheid. 
                  Deze regenpijpen zijn verkrijgbaar in verschillende kleuren en zijn 
                  eenvoudig te installeren en onderhouden.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Koperen regenpijpen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Voor premium projecten biedt koper de hoogste kwaliteit en meest 
                  exclusieve uitstraling. Koperen regenpijpen ontwikkelen een 
                  karakteristieke groene patina en gaan een leven lang mee.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Kunststof regenpijpen</h3>
                <p className="text-lg leading-relaxed mb-6">
                  PVC regenpijpen zijn kosteneffectief en geschikt voor moderne woningen. 
                  Ze zijn licht, eenvoudig te installeren en verkrijgbaar in verschillende 
                  kleuren om aan te sluiten bij de gevelkleur.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Regenpijp installatie</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Juiste positionering</h3>
                <p className="text-lg leading-relaxed mb-4">
                  De regenpijp moet strategisch geplaatst worden op het laagste punt van 
                  de dakgoot voor optimale waterafvoer. TBGS berekent de ideale afstand 
                  tussen regenpijpen op basis van dakoppervlak en verwachte regenval.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bevestiging aan de gevel</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Professionele bevestiging met regenpijpbeugels op maximaal 2 meter 
                  afstand zorgt voor stabiliteit. De beugels worden aangepast aan het 
                  gevelmateriaal en voorzien van een beschermende coating.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Aansluiting op afvoersysteem</h3>
                <p className="text-lg leading-relaxed mb-6">
                  De onderste aansluiting moet waterdicht zijn aangesloten op het 
                  rioolsysteem of infiltratievoorziening. TBGS zorgt voor correcte 
                  afschotten en professionele dichtingen.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-800"><strong>Onderhoudsabonnement Tip:</strong> Met een TBGS 
                  onderhoudsabonnement worden uw regenpijpen jaarlijks gecontroleerd op verstoppingen 
                  en beschadigingen, waardoor kostbare reparaties worden voorkomen.</p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Veelvoorkomende problemen</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Verstoppingen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Bladeren, takjes en vuil kunnen regenpijpen verstoppen, vooral bij 
                  de aansluiting met de dakgoot. Regelmatige reiniging en het plaatsen 
                  van bladvangers voorkomt dit probleem.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Loszittende bevestigingen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Door wind en temperatuurschommelingen kunnen regenpijpbeugels losraken. 
                  Tijdige controle en herstel voorkomt dat de regenpijp beschadigd 
                  raakt of van de gevel valt.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lekkages bij verbindingen</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Vooral bij de overgang van dakgoot naar regenpijp kunnen lekkages 
                  ontstaan. Professionele afdichting en regelmatige controle zijn 
                  essentieel voor een waterdicht systeem.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Onderhoud regenpijpen</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Seizoensgebonden onderhoud</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Voorjaar:</strong> Controle na winter op beschadigingen door vorst</li>
                  <li><strong>Zomer:</strong> Reiniging en inspectie van bevestigingen</li>
                  <li><strong>Herfst:</strong> Verwijdering van bladeren en takjes</li>
                  <li><strong>Winter:</strong> Controle op vorstschade en ijsvorming</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professionele reiniging</h3>
                <p className="text-lg leading-relaxed mb-6">
                  TBGS gebruikt professionele reinigingsapparatuur om verstoppingen 
                  te verwijderen zonder de regenpijp te beschadigen. Hogedruk spoeling 
                  en speciale borstels zorgen voor grondige reiniging.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Moderne innovaties</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligente regenpijpen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Moderne regenpijpsystemen kunnen uitgerust worden met sensoren die 
                  verstoppingen detecteren en waarschuwen voor onderhoudsbehoefte. 
                  Dit voorkomt onverwachte problemen en waterschade.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Geïntegreerde opvang</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Regenwateropvangsystemen kunnen geïntegreerd worden in regenpijpen 
                  voor hergebruik van regenwater. Dit draagt bij aan duurzaamheid 
                  en vermindert de waterrekening.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Verwarmde regenpijpen</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Voor locaties waar bevriezing een probleem vormt, kunnen regenpijpen 
                  uitgerust worden met verwarmingskabels. Dit voorkomt ijsvorming 
                  en zorgt voor jaar-rond functionerende waterafvoer.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-yellow-900 mb-3">Let op: Wateroverlast</h3>
                  <p className="text-yellow-800">
                    Defecte regenpijpen kunnen leiden tot ernstige waterschade aan funderingen. 
                    Bij de eerste tekenen van problemen direct professionele hulp inschakelen.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Waarom kiezen voor TBGS?</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Expertise</h3>
                    <p className="text-blue-800">
                      25+ jaar ervaring in regenpijp installatie en waterafvoersystemen.
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Kwaliteitsmaterialen</h3>
                    <p className="text-green-800">
                      Uitsluitend A-merk materialen met uitgebreide garantie.
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-orange-900 mb-3">Vakmanschap</h3>
                    <p className="text-orange-800">
                      Gecertificeerde installateurs met oog voor detail en afwerking.
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-900 mb-3">Service</h3>
                    <p className="text-purple-800">
                      24/7 spoeddienst voor acute problemen met regenpijpen.
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
                Problemen met uw regenpijp?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Onze specialisten helpen u snel en vakkundig. Vraag direct hulp bij regenpijp problemen!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-white text-tbgs-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Spoedhulp Aanvragen
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