import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface TerrasDakProps {
  onOpenContactModal: () => void;
}

export default function TerrasDak({ onOpenContactModal }: TerrasDakProps) {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Terras Dak Specialist - TBGS | Professionele Terrasoverkapping Nederland & België</title>
        <meta name="description" content="⭐ Terras dak specialist TBGS - Expert in terrasoverkappingen, waterdichte terrasoplossingen en stijlvolle buitenruimtes. 25+ jaar ervaring in Nederland & België. Gratis advies!" />
        <meta name="keywords" content="terras dak, terrasoverkapping, terras dakbedekking, terrasconstructie, overkapping terras, terras specialist, dakdekker terras" />
        <link rel="canonical" href="https://tbgs.nl/kennisbank/terras-dak" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Terras Dak Specialist - TBGS | Professionele Terrasoverkapping" />
        <meta property="og:description" content="Expert in terrasoverkappingen en waterdichte terrasoplossingen. 25+ jaar ervaring. Gratis advies en offerte!" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tbgs.nl/kennisbank/terras-dak" />
        <meta property="og:image" content="https://tbgs.nl/images/terras-dak-specialist.jpg" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Terras Dak Specialist - Complete Gids voor Terrasoverkappingen",
            "description": "Uitgebreide gids over terrasdakken, materialen, constructies en onderhoud door TBGS dakspecialisten",
            "author": {
              "@type": "Organization",
              "name": "TBGS - Totaal Bouw Groep Specialisten"
            },
            "publisher": {
              "@type": "Organization",
              "name": "TBGS",
              "logo": {
                "@type": "ImageObject",
                "url": "https://tbgs.nl/logo.png"
              }
            },
            "datePublished": "2024-08-17",
            "dateModified": "2024-08-17",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://tbgs.nl/kennisbank/terras-dak"
            }
          })}
        </script>
      </Helmet>

      <Header onOpenContactModal={onOpenContactModal} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-tbgs-navy text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Terras Dak <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Specialist</span>
              </h1>
              <p className="text-xl lg:text-2xl font-light leading-relaxed mb-12 opacity-90">
                Professionele terrasoverkappingen voor optimaal buitengenot in alle weersomstandigheden
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                
                <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                  <h2 className="text-2xl font-bold text-green-900 mb-4">Waarom een terrasoverkapping?</h2>
                  <p className="text-green-800 leading-relaxed">
                    Een terrasoverkapping verdubbelt de bruikbaarheid van uw buitenruimte. Met een professionele 
                    terrasdak van TBGS geniet u het hele jaar door van uw terras, ongeacht het weer. 
                    Onze specialisten zorgen voor duurzame en stijlvolle oplossingen.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Wat is een terrasoverkapping?</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Een terrasoverkapping is een dakconstructie die speciaal ontworpen is om terrassen en buitenruimtes 
                  te beschermen tegen weersinvloeden. Deze constructies bieden niet alleen bescherming tegen regen 
                  en wind, maar creëren ook schaduw tijdens warme zomerdagen en maken uw terras het hele jaar door bruikbaar.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Voordelen van een terrasoverkapping:</h3>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li><strong>Jaarrondbescherming:</strong> Gebruik uw terras in alle weersomstandigheden</li>
                  <li><strong>UV-bescherming:</strong> Veilige schaduw zonder schadelijke zonnestraling</li>
                  <li><strong>Waardeverhoging:</strong> Significante toename van de woningwaarde</li>
                  <li><strong>Energiebesparing:</strong> Natuurlijke koeling en bescherming tegen oververhitting</li>
                  <li><strong>Leefruimte uitbreiding:</strong> Extra vierkante meters buitenruimte</li>
                  <li><strong>Meubelsbescherming:</strong> Uw tuinmeubilair blijft langer mooi</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Soorten terrasoverkappingen</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Glazen terrasoverkapping</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Een glazen terrasoverkapping biedt maximale lichtdoorlatendheid en een luxe uitstraling. 
                  Modern gehard veiligheidsglas met HR++ coating zorgt voor uitstekende isolatie en veiligheid. 
                  Deze oplossing is ideaal voor wie de natuurlijke lichtinval wil behouden.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-blue-800"><strong>TBGS Tip:</strong> Kies voor zelfreinigend glas met speciale 
                  coating die ervoor zorgt dat regenwater vuil afspoelt. Dit houdt uw overkapping langer schoon.</p>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Polycarbonaat terrasoverkapping</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Polycarbonaat platen zijn een populaire keuze vanwege de uitstekende prijs-kwaliteitverhouding. 
                  Deze platen zijn extreem sterk (200x sterker dan glas), lichtgewicht en bieden goede isolatie. 
                  Verkrijgbaar in verschillende transparantieniveaus en kleuren.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Aluminium terrasoverkapping</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Een volledig gesloten aluminium terrasoverkapping biedt maximale bescherming en isolatie. 
                  Deze constructies kunnen voorzien worden van dakramen voor natuurlijke lichtinval en 
                  zijn verkrijgbaar in vele RAL-kleuren.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Hybride terrasoverkappingen</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Combineer het beste van beide werelden met een hybride terrasoverkapping. Bijvoorbeeld 
                  aluminium sandwichpanelen gecombineerd met glazen strips voor natuurlijke lichtinval, 
                  of polycarbonaat met geïntegreerde zonnepanelen.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Constructietypes terrasdakken</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Aanbouw terrasoverkapping</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Een aanbouw terrasoverkapping wordt tegen de bestaande gevel geplaatst en is de meest 
                  voorkomende vorm. Deze constructie biedt goede stabiliteit door de steun van de woning 
                  en is meestal kosteneffectiever dan vrijstaande constructies.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vrijstaande terrasoverkapping</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Een vrijstaande terrasoverkapping staat volledig los van de woning en biedt maximale 
                  flexibiliteit in plaatsing. Deze oplossing is ideaal voor grote terrassen of wanneer 
                  aanbouw aan de gevel niet mogelijk is.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pergola-style overkapping</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Een pergola-style terrasoverkapping combineert de voordelen van een open pergola met 
                  de bescherming van een dakconstructie. Often uitgerust met verstelbare lamellen voor 
                  variabele licht- en schaduwregeling.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Vergunningen en regelgeving</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vergunningsvrij bouwen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  In Nederland kunnen terrasoverkappingen tot bepaalde afmetingen vergunningsvrij gebouwd worden:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Maximaal 50m² oppervlakte</li>
                  <li>Maximaal 5 meter hoogte</li>
                  <li>Niet hoger dan de bestaande woning</li>
                  <li>Minimaal 1 meter van de perceelgrens</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Welstandstoetsing</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Ook bij vergunningsvrij bouwen moet de terrasoverkapping voldoen aan welstandseisen. 
                  TBGS adviseert u graag over de mogelijkheden binnen uw gemeente en helpt bij eventuele 
                  vergunningsaanvragen.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Onderhoud terrasoverkapping</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Jaarlijkse controle</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Inspectie van alle verbindingen en bevestigingen</li>
                  <li>Controle van de dakbedekking op scheuren of beschadigingen</li>
                  <li>Beoordeling van kit- en afdichtwerk</li>
                  <li>Controle van waterafvoer en dakgoten</li>
                  <li>Inspectie van de aluminium constructie op corrosie</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Reiniging en klein onderhoud</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Reguliere reiniging houdt uw terrasoverkapping in optimale staat. Voor glazen panelen 
                  gebruikt u een mild glasreiniger, voor polycarbonaat een zachte spons met zeepsop. 
                  Vermijd schuurmiddelen die de coating kunnen beschadigen.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-red-900 mb-3">Veiligheidsadvies</h3>
                  <p className="text-red-800">
                    Terrasoverkappingen kunnen door sneeuwlast of storm zwaar belast worden. Controleer na 
                    extreme weersomstandigheden altijd de constructie en schakel bij twijfel een professional in.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Kosten terrasoverkapping</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Factoren die de prijs beïnvloeden:</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Materiaalkeuze:</strong> Polycarbonaat vs. glas vs. aluminium panelen</li>
                  <li><strong>Afmetingen:</strong> Lengte, breedte en hoogte van de constructie</li>
                  <li><strong>Constructietype:</strong> Aanbouw vs. vrijstaand vs. pergola-style</li>
                  <li><strong>Extra's:</strong> Verlichting, verwarming, zonwering of screens</li>
                  <li><strong>Locatie:</strong> Toegankelijkheid en bodemgesteldheid</li>
                  <li><strong>Fundatie:</strong> Type fundering en grondomstandigheden</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Investering op lange termijn</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Een kwaliteitsterrasoverkapping van TBGS is een investering voor decennia. Met onze 
                  uitgebreide garanties en gebruik van hoogwaardige materialen kunt u rekenen op 
                  jarenlang zorgeloos genieten van uw buitenruimte.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Waarom kiezen voor TBGS?</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Maatwerk specialist</h3>
                    <p className="text-blue-800">
                      Elke terrasoverkapping wordt op maat ontworpen en vervaardigd volgens uw wensen en situatie.
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Complete service</h3>
                    <p className="text-green-800">
                      Van ontwerp tot realisatie en onderhoud - alles uit één hand voor optimaal resultaat.
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-orange-900 mb-3">Kwaliteitsgarantie</h3>
                    <p className="text-orange-800">
                      Uitgebreide garantie op materiaal en montage geeft u jarenlange zekerheid.
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-900 mb-3">Ervaren vakmensen</h3>
                    <p className="text-purple-800">
                      25+ jaar ervaring in terrasoverkappingen en dakconstructies in Nederland en België.
                    </p>
                  </div>
                </div>

              </article>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-tbgs-navy via-blue-900 to-indigo-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Klaar voor uw terrasoverkapping?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Onze specialisten adviseren u graag over de beste terrasoverkapping voor uw situatie. 
                Vraag nu een gratis offerte aan voor uw maatwerk terrasdak!
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