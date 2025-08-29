import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
// import Header from "../../components/Header"; // Header is already rendered by App.tsx
import Footer from "../../components/Footer";

interface DakpannenWelkeKeusProps {
  onOpenContactModal: () => void;
}

export default function DakpannenWelkeKeus({ onOpenContactModal }: DakpannenWelkeKeusProps) {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Dakpannen Welke Keus - TBGS | Expert Dakpannen Keuze & Advies</title>
        <meta name="description" content="⭐ Dakpannen specialist TBGS - Expert advies over dakpannen keuze: gebakken, beton, keramiek. Welke dakpannen kiezen voor uw dak? Gratis advies!" />
        <meta name="keywords" content="dakpannen keuze, dakpannen soorten, gebakken dakpannen, betonnen dakpannen, keramische dakpannen, dakpannen advies" />
        <link rel="canonical" href="https://tbgs.nl/kennisbank/dakpannen-welke-keus" />
      </Helmet>

      {/* Header is already rendered by App.tsx */}

      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-tbgs-navy text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Dakpannen: <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Welke Keus?</span>
              </h1>
              <p className="text-xl lg:text-2xl font-light leading-relaxed mb-12 opacity-90">
                Expert gids voor het kiezen van de juiste dakpannen voor uw woning
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                
                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                  <h2 className="text-2xl font-bold text-orange-900 mb-4">Waarom is dakpannen keuze zo belangrijk?</h2>
                  <p className="text-orange-800 leading-relaxed">
                    Dakpannen bepalen niet alleen de uitstraling van uw woning, maar ook de duurzaamheid, 
                    onderhoudskosten en isolatiewaarde van uw dak. De juiste keuze kan decennia verschil 
                    maken in prestaties en kosten.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Overzicht dakpannen types</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Er zijn verschillende soorten dakpannen beschikbaar, elk met unieke eigenschappen. 
                  De keuze hangt af van factoren zoals budget, gewenste uitstraling, duurzaamheid 
                  en lokale bouwvoorschriften. TBGS helpt u de juiste keuze maken.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Gebakken dakpannen</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Eigenschappen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Gebakken klei dakpannen zijn het meest traditionele en duurzame type dakpan. 
                  Ze worden gemaakt van natuurlijke klei die bij hoge temperaturen wordt gebakken, 
                  waardoor een zeer hard en weersbestendig product ontstaat.
                </p>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">Voordelen:</h4>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Zeer lange levensduur (50-100 jaar)</li>
                  <li>Uitstekende weerbestendigheid</li>
                  <li>Natuurlijke kleurvastheid</li>
                  <li>Goede isolatie-eigenschappen</li>
                  <li>Recyclebaar en milieuvriendelijk</li>
                  <li>Klassieke, tijdloze uitstraling</li>
                  <li>Bestand tegen extreme temperaturen</li>
                </ul>

                <h4 className="text-xl font-bold text-gray-900 mb-3">Nadelen:</h4>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Hogere aanschafkosten</li>
                  <li>Zwaarder gewicht (vereist sterke dakconstructie)</li>
                  <li>Beperkte kleurmogelijkheden</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Soorten gebakken dakpannen</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Natuurrode pannen:</strong> Klassieke terracotta kleur</li>
                  <li><strong>Geëngobeerde pannen:</strong> Met kleurlaag voor andere tinten</li>
                  <li><strong>Geglazuurde pannen:</strong> Met glanzende beschermlaag</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Betonnen dakpannen</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Eigenschappen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Betonnen dakpannen worden gemaakt van cement, zand en water. Ze bieden 
                  een kosteneffectief alternatief voor gebakken pannen en zijn verkrijgbaar 
                  in een groot scala aan kleuren en profielen.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3">Voordelen:</h4>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Kosteneffectief</li>
                  <li>Grote variëteit in kleuren en vormen</li>
                  <li>Goede isolatiewaarde</li>
                  <li>Levensduur 30-50 jaar</li>
                  <li>Eenvoudige installatie</li>
                  <li>Geschikt voor moderne architectuur</li>
                </ul>

                <h4 className="text-xl font-bold text-gray-900 mb-3">Nadelen:</h4>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Korte levensduur dan gebakken pannen</li>
                  <li>Kleurvervaaging mogelijk na jaren</li>
                  <li>Gevoelig voor vorstschade</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Keramische dakpannen</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium kwaliteit</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Keramische dakpannen vertegenwoordigen de top van dakpannenkwaliteit. 
                  Ze combineren de voordelen van gebakken pannen met moderne 
                  productietechnieken voor superieure prestaties.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3">Voordelen:</h4>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Maximale duurzaamheid (80+ jaar)</li>
                  <li>Superieure kleurvastheid</li>
                  <li>Uitstekende dimensiestabiliteit</li>
                  <li>Optimale waterafstoting</li>
                  <li>Bestand tegen UV-straling</li>
                  <li>Premium uitstraling</li>
                </ul>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-800"><strong>Onderhoudsabonnement Tip:</strong> Met een TBGS 
                  onderhoudsabonnement worden uw dakpannen regelmatig gecontroleerd op beschadigingen 
                  en wordt preventief onderhoud uitgevoerd voor maximale levensduur.</p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Dakpannen profielen</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Holle pannen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  De klassieke dakpanvorm met een gebogen profiel dat optimale 
                  waterafvoer garandeert. Geschikt voor traditionele en landelijke 
                  architectuur.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Platte pannen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Moderne, strakke profielen die perfect passen bij hedendaagse 
                  architectuur. Bieden een clean, minimalistische uitstraling.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Golfpannen</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Pannen met golvend profiel voor extra sterkte en karakteristieke 
                  schaduwwerking. Populair voor mediterrane en moderne stijlen.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Keuzecriteria</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Budget overwegingen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Bedenk niet alleen de aanschafkosten, maar ook de totale kosten 
                  over de levensduur. Duurzame pannen kunnen op lange termijn 
                  goedkoper uitpakken door lagere vervangings- en onderhoudskosten.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Architectuurstijl</h3>
                <p className="text-lg leading-relaxed mb-4">
                  De dakpannen moeten passen bij de architectuur van uw woning 
                  en de omgeving. Monumentale panden hebben vaak specifieke 
                  voorschriften voor materialen en kleuren.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lokale regelgeving</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Gemeentelijke voorschriften kunnen de keuze van dakpannen 
                  beperken. Informeer altijd naar de geldende bouwregels 
                  voordat u een definitieve keuze maakt.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Klimaat en oriëntatie</h3>
                <p className="text-lg leading-relaxed mb-6">
                  De oriëntatie van het dak en lokale klimaatomstandigheden 
                  beïnvloeden de keuze. Zuid-gerichte daken ondervinden meer 
                  UV-belasting en temperatuurschommelingen.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Installatie overwegingen</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dakconstructie</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Het gewicht van dakpannen varieert aanzienlijk. Gebakken pannen 
                  zijn zwaarder dan betonnen pannen en vereisen mogelijk 
                  versterking van de dakconstructie.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dakhelling</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Verschillende panprofielen hebben verschillende minimum 
                  dakhellingen. TBGS adviseert over de juiste combinatie 
                  van dakpan en helling.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Bevestiging</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Moderne dakpannen worden mechanisch bevestigd voor optimale 
                  wind- en stormbestendigheid. TBGS gebruikt gecertificeerde 
                  bevestigingssystemen.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Onderhoud van dakpannen</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Preventief onderhoud</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Jaarlijkse controle op losliggende of beschadigde pannen</li>
                  <li>Reiniging van mos en algen</li>
                  <li>Controle van nokkenpannen en eindkappen</li>
                  <li>Inspectie van dakgoten en hemelwaterafvoer</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Reparaties</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Beschadigde dakpannen moeten direct vervangen worden om 
                  waterinfiltratie te voorkomen. TBGS houdt voorraad van 
                  gangbare pantypen voor snelle reparaties.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Expert advies nodig?</h3>
                  <p className="text-blue-800">
                    De keuze van dakpannen is complex en beïnvloedt uw woning voor decennia. 
                    Laat u adviseren door TBGS specialisten voor de beste oplossing.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Waarom kiezen voor TBGS?</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Dakpannen expertise</h3>
                    <p className="text-blue-800">
                      25+ jaar ervaring met alle types dakpannen en hun eigenschappen.
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Onafhankelijk advies</h3>
                    <p className="text-green-800">
                      Objectieve adviezen over de beste dakpannen voor uw situatie.
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-orange-900 mb-3">A-merk leveranciers</h3>
                    <p className="text-orange-800">
                      Samenwerking met premium dakpannen fabrikanten voor kwaliteitsgarantie.
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-900 mb-3">Vakkundige installatie</h3>
                    <p className="text-purple-800">
                      Gecertificeerde dakdekkers voor perfecte installatie en garantie.
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
                Hulp nodig bij dakpannen keuze?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Onze specialisten adviseren u graag over de beste dakpannen voor uw woning!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-white text-tbgs-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Gratis Dakpannen Advies
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