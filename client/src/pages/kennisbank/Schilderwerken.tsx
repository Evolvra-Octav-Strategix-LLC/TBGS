import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface SchilderwerkenProps {
  onOpenContactModal: () => void;
}

export default function Schilderwerken({ onOpenContactModal }: SchilderwerkenProps) {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Schilderwerken Specialist - TBGS | Professionele Schilders Nederland & België</title>
        <meta name="description" content="⭐ Schilderwerken specialist TBGS - Expert in buitenschilderwerk, binnenschilderwerk, gevelreiniging en beschermende coatings. 25+ jaar ervaring in Nederland & België. Gratis offerte!" />
        <meta name="keywords" content="schilderwerken, schilder, buitenschilderwerk, binnenschilderwerk, gevelreiniging, coatings, verfwerk, schildersbedrijf" />
        <link rel="canonical" href="https://tbgs.nl/kennisbank/schilderwerken" />
      </Helmet>

      <Header onOpenContactModal={onOpenContactModal} />

      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-tbgs-navy text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Schilderwerken <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Specialist</span>
              </h1>
              <p className="text-xl lg:text-2xl font-light leading-relaxed mb-12 opacity-90">
                Professionele schilderwerken voor duurzame bescherming en perfecte afwerking
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                
                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                  <h2 className="text-2xl font-bold text-orange-900 mb-4">Waarom professionele schilderwerken?</h2>
                  <p className="text-orange-800 leading-relaxed">
                    Schilderwerk is meer dan alleen esthetiek - het beschermt uw woning tegen weersinvloeden 
                    en verlengt de levensduur van materialen. TBGS combineert vakmanschap met moderne technieken 
                    voor duurzame en prachtige resultaten.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Wat omvatten professionele schilderwerken?</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Professionele schilderwerken gaan verder dan alleen verf aanbrengen. Het omvat grondige 
                  voorbereiding, keuze van juiste materialen, vakkundige uitvoering en nazorg. TBGS biedt 
                  complete schilderoplossingen voor binnen- en buitenwerk met jarenlange garantie.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Voordelen van professioneel schilderwerk:</h3>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li><strong>Bescherming:</strong> Preventie van vochtindringing en materiaalschade</li>
                  <li><strong>Waardevermeerdering:</strong> Aanzienlijke verhoging van de woningwaarde</li>
                  <li><strong>Energiebesparing:</strong> Reflecterende verven verminderen warmte-absorptie</li>
                  <li><strong>Duurzaamheid:</strong> Kwaliteitsverven gaan 10-15 jaar mee</li>
                  <li><strong>Esthetiek:</strong> Perfect afgewerkte uitstraling</li>
                  <li><strong>Garantie:</strong> Zekerheid op materiaal en uitvoering</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Buitenschilderwerk</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gevelbehandeling</h3>
                <p className="text-lg leading-relaxed mb-4">
                  De gevel is het visitekaartje van uw woning en het meest blootgesteld aan weersinvloeden. 
                  TBGS gebruikt hoogwaardige gevelverven die UV-bestendig zijn en optimale hechting bieden 
                  op verschillende ondergronden zoals hout, metselwerk en kunststof.
                </p>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">Gevelvoorbehandeling:</h4>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li><strong>Hogedruk reiniging:</strong> Verwijdering van algen, mos en vervuiling</li>
                  <li><strong>Reparaties:</strong> Herstel van scheuren en beschadigingen</li>
                  <li><strong>Ontvetten:</strong> Grondige reiniging voor optimale hechting</li>
                  <li><strong>Primer applicatie:</strong> Hechtingsbevordering en ondergrondsealing</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Houtwerk buitenschilderen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Buitenhoutwerk zoals kozijnen, deuren, boeidelen en dakranden vereisen speciale aandacht. 
                  TBGS gebruikt ademende verfsystemen die het hout beschermen tegen vocht en UV-straling 
                  terwijl de natuurlijke beweging van het hout behouden blijft.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Metaalwerk en leidingwerk</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Metalen onderdelen zoals hekken, leidingen en dakgoten krijgen een roestwerende behandeling 
                  gevolgd door speciale metaalverf. Dit voorkomt corrosie en verlengt de levensduur aanzienlijk.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Binnenschilderwerk</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Wand- en plafondafwerking</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Voor binnenschilderwerk gebruikt TBGS emissiearme verven die bijdragen aan een gezond 
                  binnenklimaat. Onze schilders zorgen voor strakke lijnen, egale kleurverdeling en 
                  professionele afwerking van hoeken en randen.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Houtwerk binnen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Binnendeuren, plinten, kasten en trap worden behandeld met duurzame laksystemen die 
                  bestand zijn tegen dagelijks gebruik. TBGS biedt zowel dekkende als transparante 
                  afwerkingen die de natuurlijke houtstructuur behouden.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Speciale ruimtes</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Voor vochtige ruimtes zoals badkamers en keukens gebruikt TBGS speciale anti-schimmel 
                  verven en waterdichte coatings. Deze bieden langdurige bescherming tegen condensatie 
                  en vochtproblemen.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Moderne verftechnieken en materialen</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nano-coatings</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Moderne nano-coatings bieden zelfreinigende eigenschappen en extreme duurzaamheid. 
                  Deze technologie zorgt ervoor dat vuil en vocht minder hechten aan het oppervlak, 
                  waardoor de gevel langer schoon blijft.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Thermische verven</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Thermische isolatieverven helpen bij energiebesparing door reflectie van warmte. 
                  Deze innovatieve verven kunnen de temperatuur van gevels in de zomer met 10-15°C 
                  verlagen en dragen bij aan een beter binnenklimaat.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Minerale verven</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Voor historische gebouwen en natuursteen gebruikt TBGS minerale kalkverven die 
                  de ondergrond laten ademen. Deze traditionele technieken zijn perfect geschikt 
                  voor monumentale panden en authentieke restauraties.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Voorbereiding en proces</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Uitgebreide inspectie</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Voor elke schilderklus voert TBGS een grondige inspectie uit van de ondergrond. 
                  We beoordelen de staat van het bestaande verfwerk, identificeren probleemgebieden 
                  en stellen een gedetailleerd uitvoeringsplan op.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Grondige voorbereiding</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Afdekken van planten, terrassen en geveldelen</li>
                  <li>Verwijdering van loszittende verflagen</li>
                  <li>Reparatie van houtrot en andere beschadigingen</li>
                  <li>Kitten van naden en scheuren</li>
                  <li>Schuren en ontstoffen van alle oppervlakken</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professionele uitvoering</h3>
                <p className="text-lg leading-relaxed mb-6">
                  TBGS werkt volgens strikte kwaliteitsstandaarden met gecertificeerde schilders. 
                  We gebruiken professionele spuitapparatuur voor grote vlakken en zorgen voor 
                  handmatige nabewerking van details voor een perfect resultaat.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-800"><strong>Onderhoudsabonnement Tip:</strong> Met een TBGS 
                  onderhoudsabonnement wordt uw schilderwerk jaarlijks geïnspecteerd en onderhouden, 
                  waardoor de levensduur wordt verlengd en grote herhaalschilderingen worden voorkomen.</p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Kleurkeuze en advies</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Kleurplan op maat</h3>
                <p className="text-lg leading-relaxed mb-4">
                  TBGS biedt professioneel kleuradvies passend bij uw woonstijl en omgeving. 
                  We houden rekening met architectuur, lichtinval, omgevingskleuren en 
                  persoonlijke voorkeuren voor een harmonieus eindresultaat.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Trendinzichten</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Onze kleurspecialisten zijn op de hoogte van de laatste trends in 
                  gevenkleuren en interieurverven. We adviseren tijdloze kleuren die 
                  jarenlang mooi blijven en de waarde van uw woning behouden.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Digitale visualisatie</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Met moderne visualisatiesoftware kunt u vooraf zien hoe uw woning 
                  eruit komt te zien in verschillende kleuren. Dit helpt bij het 
                  maken van de juiste kleurkeuze zonder verrassingen.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Onderhoud en garantie</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Onderhoudsinstructies</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Jaarlijkse controle op kleine beschadigingen</li>
                  <li>Reiniging van gevels met zachte borstel en mild detergent</li>
                  <li>Directe reparatie van kleine krassen en chips</li>
                  <li>Controle van kitwerk rond kozijnen en aansluitingen</li>
                  <li>Bijschilderen van houtwerk indien nodig</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Garantievoorwaarden</h3>
                <p className="text-lg leading-relaxed mb-6">
                  TBGS biedt uitgebreide garantie op zowel materiaal als uitvoering. 
                  Voor buitenschilderwerk geldt 8-10 jaar garantie, voor binnenschilderwerk 
                  5-7 jaar, afhankelijk van de gebruikte materialen en omstandigheden.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Duurzaamheid en milieu</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Milieuvriendelijke verven</h3>
                <p className="text-lg leading-relaxed mb-4">
                  TBGS gebruikt waar mogelijk watergedragen verven met lage VOC-uitstoot. 
                  Deze verven zijn beter voor het milieu en zorgen voor een gezonder 
                  binnenklimaat zonder in te boeten op kwaliteit of duurzaamheid.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Afvalverwerking</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Al ons verfafval wordt professioneel afgevoerd en gerecycled conform 
                  milieuregelgeving. Lege verfblikken en verfrestanten worden apart 
                  ingezameld en hergebruikt waar mogelijk.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Duurzaamheidsvoordeel</h3>
                  <p className="text-blue-800">
                    Kwaliteitsschilderwerk verlengt de levensduur van uw woning met 15-20 jaar 
                    en voorkomt kostbare renovaties door tijdige bescherming van materialen.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Waarom kiezen voor TBGS?</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Vakmanschap</h3>
                    <p className="text-blue-800">
                      25+ jaar ervaring in professionele schilderwerken met gecertificeerde vakmensen.
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Kwaliteitsgarantie</h3>
                    <p className="text-green-800">
                      Uitgebreide garantie en gebruik van premium A-merk verven voor duurzame resultaten.
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-orange-900 mb-3">Complete service</h3>
                    <p className="text-orange-800">
                      Van kleuradvies tot nazorg - alles uit één hand voor zorgeloze schilderwerken.
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-900 mb-3">Moderne technieken</h3>
                    <p className="text-purple-800">
                      Innovatieve verfsystemen en applicatietechnieken voor optimale resultaten.
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
                Klaar voor professionele schilderwerken?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Onze schilderspecialisten adviseren u graag over de beste verfoplossing voor uw project. 
                Vraag nu een gratis offerte aan!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-white text-tbgs-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Gratis Offerte Aanvragen
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