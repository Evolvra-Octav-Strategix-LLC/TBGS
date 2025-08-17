import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface DakbedekkingMaterialenProps {
  onOpenContactModal: () => void;
}

export default function DakbedekkingMaterialen({ onOpenContactModal }: DakbedekkingMaterialenProps) {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Dakbedekking Materialen - TBGS | Expert Dakbedekking Keuze & Advies</title>
        <meta name="description" content="⭐ Dakbedekking materialen specialist TBGS - Expert advies over dakpannen, EPDM, bitumen en moderne dakbedekkingen. Gratis materiaaladvies!" />
        <meta name="keywords" content="dakbedekking materialen, dakpannen, EPDM, bitumen, dakbedekking keuze, dakdekker materialen" />
        <link rel="canonical" href="https://tbgs.nl/kennisbank/dakbedekking-materialen" />
      </Helmet>

      <Header onOpenContactModal={onOpenContactModal} />

      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-tbgs-navy text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Dakbedekking <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Materialen</span>
              </h1>
              <p className="text-xl lg:text-2xl font-light leading-relaxed mb-12 opacity-90">
                Expert gids voor het kiezen van de juiste dakbedekking voor uw woning
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">Waarom is materiaalkeuze zo belangrijk?</h2>
                  <p className="text-blue-800 leading-relaxed">
                    De keuze van dakbedekkingsmateriaal bepaalt niet alleen de uitstraling van uw woning, 
                    maar ook de duurzaamheid, onderhoudskosten en energieprestaties. TBGS helpt u 
                    de juiste keuze maken voor uw specifieke situatie en budget.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Overzicht dakbedekking materialen</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Er zijn talloze materialen beschikbaar voor dakbedekking, elk met unieke eigenschappen 
                  en toepassingen. Van traditionele dakpannen tot moderne EPDM systemen - de keuze 
                  hangt af van factoren zoals daktype, budget, esthetiek en lokale bouwvoorschriften.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Materialen voor hellende daken</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gebakken dakpannen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Gebakken klei dakpannen zijn het meest traditionele en duurzame materiaal voor 
                  hellende daken. Ze bieden uitstekende weersbestendigheid en hebben een 
                  levensduur van 50-100 jaar bij juist onderhoud.
                </p>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">Eigenschappen:</h4>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Zeer lange levensduur (50-100 jaar)</li>
                  <li>Uitstekende weerbestendigheid</li>
                  <li>Natuurlijke kleurvastheid</li>
                  <li>Goede isolatie-eigenschappen</li>
                  <li>Recyclebaar en milieuvriendelijk</li>
                  <li>Klassieke, tijdloze uitstraling</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Betonnen dakpannen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Betonnen dakpannen bieden een kosteneffectief alternatief voor gebakken pannen. 
                  Ze zijn verkrijgbaar in vele kleuren en vormen en hebben goede 
                  isolatie-eigenschappen.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3">Voordelen:</h4>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Kosteneffectief</li>
                  <li>Grote variëteit in kleuren en profielen</li>
                  <li>Goede isolatiewaarde</li>
                  <li>Levensduur 30-50 jaar</li>
                  <li>Eenvoudige installatie</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Natuurlijke dakleien</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Natuursteen dakleien bieden de meest exclusieve en duurzame oplossing 
                  voor hellende daken. Ze zijn ideaal voor monumentale panden en 
                  high-end projecten.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Rietdekking</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Riet is een traditioneel Nederlands dakbedekkingsmateriaal dat 
                  uitstekende isolatie biedt en perfect past bij landelijke en 
                  monumentale architectuur.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Materialen voor platte daken</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">EPDM rubber</h3>
                <p className="text-lg leading-relaxed mb-4">
                  EPDM (Ethyleen Propyleen Dieen Monomeer) is een synthetisch rubber 
                  dat uitstekende prestaties levert voor platte daken. Het is 
                  extreem elastisch en heeft een levensduur van 40+ jaar.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3">Voordelen EPDM:</h4>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Zeer hoge elasticiteit</li>
                  <li>UV en ozon bestendig</li>
                  <li>Temperatuurbestendig (-45°C tot +120°C)</li>
                  <li>Lange levensduur (40+ jaar)</li>
                  <li>Onderhoudsarm</li>
                  <li>Milieuvriendelijk</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bitumineuze dakbedekking</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Bitumen is een traditioneel materiaal voor platte daken dat 
                  in moderne vormen nog steeds veel gebruikt wordt. SBS-gemodificeerd 
                  bitumen biedt verbeterde prestaties.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">TPO dakbedekking</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Thermoplastisch Polyolefine (TPO) is een moderne kunststof 
                  dakbedekking die uitstekende energiezuinigheid biedt door 
                  reflectie van zonlicht.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">PVC dakbedekking</h3>
                <p className="text-lg leading-relaxed mb-6">
                  PVC dakbedekking biedt uitstekende chemische bestendigheid 
                  en is ideaal voor industriële toepassingen. Het materiaal 
                  is volledig recyclebaar.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-800"><strong>Onderhoudsabonnement Tip:</strong> Met een TBGS 
                  onderhoudsabonnement worden verschillende dakbedekkingsmaterialen volgens 
                  hun specifieke onderhoudsvereisten behandeld voor maximale levensduur.</p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Moderne innovaties</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Zonnepaneel geïntegreerde dakbedekking</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Moderne dakpannen kunnen geïntegreerde zonnecellen bevatten, 
                  waardoor het dak zowel bescherming als energieopwekking biedt 
                  zonder afbreuk te doen aan de esthetiek.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cool roof technologie</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Reflecterende dakbedekkingen kunnen de temperatuur van het dak 
                  met 20-30°C verlagen, wat bijdraagt aan energiebesparing en 
                  comfort in het gebouw.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Groendaken</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Extensieve en intensieve groendaken bieden biodiversiteit, 
                  temperatuurregulatie en regenwateropvang. TBGS realiseert 
                  complete groendaksystemen.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Keuzecriteria</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Daktype en helling</h3>
                <p className="text-lg leading-relaxed mb-4">
                  De helling van het dak bepaalt grotendeels welke materialen 
                  geschikt zijn. Hellende daken (>15°) kunnen dakpannen of leien 
                  gebruiken, terwijl platte daken (<5°) membraansystemen vereisen.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Klimaat en locatie</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Nederlandse weersomstandigheden met veel regen, wind en 
                  temperatuurschommelingen vereisen materialen die hier goed 
                  tegen bestand zijn.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Budget en levensduur</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Het is belangrijk om niet alleen de aanschafkosten te bekijken, 
                  maar ook de totale kosten over de levensduur inclusief onderhoud 
                  en eventuele vervanging.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Esthetiek en regelgeving</h3>
                <p className="text-lg leading-relaxed mb-6">
                  De uitstraling moet passen bij de architectuur en omgeving. 
                  Daarnaast kunnen gemeentelijke voorschriften of monumentenstatus 
                  de materiaalkeuze beperken.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Duurzaamheid en milieu</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Recyclebare materialen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Moderne dakbedekkingsmaterialen zijn steeds vaker recyclebaar. 
                  EPDM, TPO en PVC kunnen aan het einde van hun levensduur 
                  worden hergebruikt voor nieuwe producten.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Energieprestaties</h3>
                <p className="text-lg leading-relaxed mb-4">
                  De kleur en samenstelling van dakbedekking beïnvloeden de 
                  energieprestaties van het gebouw. Lichte kleuren reflecteren 
                  meer warmte en verminderen cooling costs.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Lokale productie</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Het kiezen van lokaal geproduceerde materialen vermindert 
                  de CO2-voetafdruk van transport en ondersteunt de lokale economie.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Professioneel advies</h3>
                  <p className="text-blue-800">
                    De keuze van dakbedekkingsmateriaal is complex en beïnvloedt uw woning 
                    voor decennia. Laat u adviseren door TBGS specialisten voor de beste oplossing.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Waarom kiezen voor TBGS?</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Materiaalexpertise</h3>
                    <p className="text-blue-800">
                      25+ jaar ervaring met alle types dakbedekkingsmaterialen en hun eigenschappen.
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Onafhankelijk advies</h3>
                    <p className="text-green-800">
                      Objectief advies over de beste materialen voor uw specifieke situatie.
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-orange-900 mb-3">Kwaliteitsgarantie</h3>
                    <p className="text-orange-800">
                      Uitsluitend A-merk materialen met uitgebreide fabrieksgarantie.
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-900 mb-3">Vakmanschap</h3>
                    <p className="text-purple-800">
                      Gecertificeerde installateurs voor alle materialen en systemen.
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
                Twijfelt u over materiaalkeuze?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Onze specialisten adviseren u graag over de beste dakbedekking voor uw situatie!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-white text-tbgs-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Gratis Materiaaladvies
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