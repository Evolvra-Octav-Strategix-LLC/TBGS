import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface LekkageDakkapellenProps {
  onOpenContactModal: () => void;
}

export default function LekkageDakkapellen({ onOpenContactModal }: LekkageDakkapellenProps) {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Lekkage Dakkapellen - TBGS | Expert Dakkapel Lekkage Reparatie</title>
        <meta name="description" content="⭐ Dakkapel lekkage specialist TBGS - Expert in dakkapel lekkage opsporing en reparatie. Snelle oplossing voor dakkapel problemen. Gratis inspectie!" />
        <meta name="keywords" content="dakkapel lekkage, lekkage dakkapel, dakkapel reparatie, dakkapel onderhoud, water dakkapel" />
        <link rel="canonical" href="https://tbgs.nl/kennisbank/lekkage-dakkapellen" />
      </Helmet>

      <Header onOpenContactModal={onOpenContactModal} />

      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-tbgs-navy text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Lekkage bij <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Dakkapellen</span>
              </h1>
              <p className="text-xl lg:text-2xl font-light leading-relaxed mb-12 opacity-90">
                Professionele dakkapel lekkage opsporing en reparatie voor een droge zolder
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                
                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                  <h2 className="text-2xl font-bold text-red-900 mb-4">Waarom zijn dakkapel lekkages zo problematisch?</h2>
                  <p className="text-red-800 leading-relaxed">
                    Dakkapellen zijn extra gevoelig voor lekkages vanwege hun complexe constructie 
                    met veel aansluitingen en overgangen. Lekkages kunnen snel leiden tot schade 
                    aan de zolderinrichting en isolatie, met kostbare gevolgen.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Wat zijn dakkapellen?</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Dakkapellen zijn uitbouwen in het dak die extra ruimte en licht brengen op de 
                  zolder. Door hun constructie met meerdere hoeken, aansluitingen en overgangen 
                  zijn ze kwetsbaarder voor waterinfiltratie dan het gewone dakoppervlak.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Kwetsbare punten bij dakkapellen:</h3>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li><strong>Aansluiting op hoofddak:</strong> Overgang tussen dakkapel en bestaand dak</li>
                  <li><strong>Zijwangen:</strong> Verticale wanden van de dakkapel</li>
                  <li><strong>Voorwand:</strong> Gevel van de dakkapel met raam</li>
                  <li><strong>Dakkapel dak:</strong> Het kleine dak boven de dakkapel</li>
                  <li><strong>Raamaansluitingen:</strong> Overgangen tussen kozijn en constructie</li>
                  <li><strong>Loodwerk:</strong> Waterdichte verbindingen tussen materialen</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Oorzaken van dakkapel lekkages</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gebrekkige aansluitdetails</h3>
                <p className="text-lg leading-relaxed mb-4">
                  De aansluiting tussen de dakkapel en het hoofddak is het meest kritieke punt. 
                  Onjuiste of verouderde aansuitdetails kunnen water doorlaten, vooral bij 
                  hevige regenval of sneeuwsmelt.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Beschadigd loodwerk</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Loden bekleding rond dakkapellen kan scheuren door zetting, vorst of 
                  veroudering. Deze scheuren zijn vaak klein maar kunnen grote 
                  waterschade veroorzaken.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Defecte dakbedekking</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Het dakje van de dakkapel heeft vaak een andere bedekking dan het 
                  hoofddak. Bitumen, EPDM of dakpannen kunnen hier eerder beschadigd 
                  raken door de beperkte afmetingen.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Raamlekkages</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Het raam van de dakkapel kan gaan lekken door veroudering van de 
                  kit, zetting van het kozijn of beschadiging van het glas of 
                  glaslatten.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Herkennen van dakkapel lekkages</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Binnenin de woning</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Waterplekken op plafond of wanden rond de dakkapel</li>
                  <li>Vochtige isolatie in de dakkapelconstructie</li>
                  <li>Schimmelvorming in hoeken</li>
                  <li>Muffe geuren op zolder</li>
                  <li>Afbladderende verf of behang</li>
                  <li>Druppelend water bij regenval</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Buitenin zichtbaar</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Losliggende of beschadigde dakbedekking</li>
                  <li>Scheuren in loodwerk of zinkwerk</li>
                  <li>Defecte voegen rond het raam</li>
                  <li>Vervormingen in de dakkapelconstructie</li>
                  <li>Groene uitslag (algen/mos) rond aansluitingen</li>
                </ul>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <p className="text-yellow-800"><strong>Onderhoudsabonnement Tip:</strong> Met een TBGS 
                  onderhoudsabonnement worden uw dakkapellen jaarlijks gecontroleerd op beginnende 
                  lekkages, waardoor grote reparaties worden voorkomen.</p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Reparatiemethoden</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Aansluiting vernieuwen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Bij structurele problemen met de aansluiting moet deze volledig 
                  vernieuwd worden. TBGS gebruikt moderne materialen en technieken 
                  voor langdurig waterdichte aansluitingen.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Loodwerk renovatie</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Beschadigd loodwerk wordt professioneel gerepareerd of vervangen. 
                  Moderne loodalternatieven zoals loodvervanger of EPDM kunnen 
                  gebruikt worden voor duurzame oplossingen.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dakbedekking herstel</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Het dakje van de dakkapel kan worden voorzien van nieuwe bitumen, 
                  EPDM of dakpannen. De keuze hangt af van de constructie en 
                  esthetische wensen.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Raam renovatie</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Lekkende ramen worden voorzien van nieuwe kit, glaslatten of 
                  volledige kozijnrenovatie. HR++ glas kan tegelijk worden 
                  geïnstalleerd voor betere isolatie.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Preventie van dakkapel lekkages</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Regelmatige inspectie</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Jaarlijkse controle van alle aansluitingen, loodwerk en 
                  dakbedekking kan beginnende problemen vroegtijdig signaleren 
                  voordat ze uitgroeien tot kostbare lekkages.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Onderhoud van details</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Kit rond ramen moet elke 5-10 jaar vernieuwd worden. Kleine 
                  reparaties aan loodwerk kunnen grote problemen voorkomen.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Drainage controle</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Zorg dat water goed kan wegstromen van de dakkapel. Verstopte 
                  gootjes of afvoeren kunnen tot waterophoping en lekkages leiden.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Moderne oplossingen</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Prefab dakkapellen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Moderne prefab dakkapellen worden in de fabriek gemaakt met 
                  geoptimaliseerde details en waterdichte verbindingen. Dit 
                  vermindert het risico op lekkages aanzienlijk.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">EPDM aansluitingen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  EPDM rubber biedt uitstekende flexibiliteit en duurzaamheid 
                  voor dakkapel aansluitingen. Het materiaal beweegt mee met 
                  natuurlijke bewegingen van de constructie.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Monitoring systemen</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Slimme vochtdetectors kunnen permanent de kritieke punten 
                  monitoren en vroeg waarschuwen voor beginnende lekkages.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Spoedprocedure bij lekkages</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Directe maatregelen</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Water opvangen met bakken of emmers</li>
                  <li>Meubels en spullen wegzetten uit het natte gebied</li>
                  <li>Ventileren voor vochtafvoer</li>
                  <li>Foto's maken voor verzekering en documentatie</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Professionele hulp</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Schakel direct professionele hulp in. TBGS biedt 24/7 spoeddienst 
                  voor acute dakkapel lekkages om verdere schade te voorkomen.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-red-900 mb-3">Urgentie</h3>
                  <p className="text-red-800">
                    Dakkapel lekkages vereisen snelle actie. Water kan snel doorlopen 
                    naar lagere verdiepingen en uitgebreide schade veroorzaken. 
                    Bij vermoeden van lekkage direct professionele hulp inschakelen.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Waarom kiezen voor TBGS?</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Dakkapel expertise</h3>
                    <p className="text-blue-800">
                      25+ jaar ervaring in dakkapel constructie, renovatie en lekkage reparatie.
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-900 mb-3">24/7 spoeddienst</h3>
                    <p className="text-green-800">
                      Directe hulp bij acute dakkapel lekkages om verdere schade te beperken.
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-orange-900 mb-3">Garantie</h3>
                    <p className="text-orange-800">
                      Uitgebreide garantie op reparaties en gebruikte materialen.
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-900 mb-3">Complete service</h3>
                    <p className="text-purple-800">
                      Van noodreparatie tot volledige dakkapel renovatie - alles uit één hand.
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
                Dakkapel lekkage problemen?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Onze specialisten helpen u snel met dakkapel lekkages. Spoedhulp 24/7 beschikbaar!
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