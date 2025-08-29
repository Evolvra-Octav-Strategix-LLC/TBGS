import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
// import Header from "../../components/Header"; // Header is already rendered by App.tsx
import Footer from "../../components/Footer";

interface PatioDakProps {
  onOpenContactModal: () => void;
}

export default function PatioDak({ onOpenContactModal }: PatioDakProps) {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Patio Dak Specialist - TBGS | Professionele Patio Dakbedekking Nederland & België</title>
        <meta name="description" content="⭐ Patio dak specialist TBGS - Expert in patio dakbedekking, waterdichte oplossingen en duurzame patio dakconstructies. 25+ jaar ervaring in Nederland & België. Gratis advies!" />
        <meta name="keywords" content="patio dak, patio dakbedekking, patio dakconstructie, patio overkapping, terrasoverkapping, patio specialist, dakdekker patio" />
        <link rel="canonical" href="https://tbgs.nl/kennisbank/patio-dak" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Patio Dak Specialist - TBGS | Professionele Patio Dakbedekking" />
        <meta property="og:description" content="Expert in patio dakbedekking en waterdichte patio dakconstructies. 25+ jaar ervaring. Gratis advies en offerte!" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tbgs.nl/kennisbank/patio-dak" />
        <meta property="og:image" content="https://tbgs.nl/images/patio-dak-specialist.jpg" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Patio Dak Specialist - Complete Gids voor Patio Dakbedekking",
            "description": "Uitgebreide gids over patio dakken, materialen, constructies en onderhoud door TBGS dakspecialisten",
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
              "@id": "https://tbgs.nl/kennisbank/patio-dak"
            }
          })}
        </script>
      </Helmet>

      {/* Header is already rendered by App.tsx */}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-tbgs-navy text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Patio Dak <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Specialist</span>
              </h1>
              <p className="text-xl lg:text-2xl font-light leading-relaxed mb-12 opacity-90">
                Professionele patio dakbedekking voor duurzame bescherming en stijlvolle buitenruimtes
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">Waarom kiezen voor een patio dak?</h2>
                  <p className="text-blue-800 leading-relaxed">
                    Een patio dak biedt de perfecte combinatie van stijl en functionaliteit voor uw buitenruimte. 
                    Als ervaren dakspecialisten van TBGS helpen wij u bij het kiezen van de juiste patio dakoplossing 
                    die jarenlang bescherming biedt tegen alle weersomstandigheden.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Wat is een patio dak?</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Een patio dak is een dakconstructie die speciaal ontworpen is om buitenruimtes zoals patio's, terrassen 
                  en veranda's te beschermen tegen regen, wind en zon. Deze dakoplossingen combineren functionaliteit 
                  met esthetiek en kunnen uitgevoerd worden in verschillende materialen en stijlen.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Voordelen van een patio dak:</h3>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li><strong>Weersbescherming:</strong> Volledige bescherming tegen regen, hagel en UV-straling</li>
                  <li><strong>Uitbreiding leefruimte:</strong> Uw buitenruimte wordt het hele jaar door bruikbaar</li>
                  <li><strong>Waardevermeerdering:</strong> Een kwalitatief patio dak verhoogt de waarde van uw woning</li>
                  <li><strong>Energiebesparing:</strong> Bescherming tegen oververhitting in de zomer</li>
                  <li><strong>Esthetische meerwaarde:</strong> Stijlvolle uitbreiding van uw woonruimte</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Patio dak materialen</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Polycarbonaat platen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Polycarbonaat is een populaire keuze voor patio dakken vanwege de uitstekende combinatie van 
                  lichtdoorlatendheid, sterkte en isolatie. Deze platen zijn tot 200 keer sterker dan glas en 
                  bieden excellent bescherming tegen UV-straling.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-800"><strong>TBGS Tip:</strong> Kies voor multiwall polycarbonaat platen 
                  met een dikte van minimaal 16mm voor optimale isolatie en geluiddemping.</p>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Glazen patio dakbedekking</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Gehard veiligheidsglas biedt de meeste lichtdoorlatendheid en een premium uitstraling. 
                  Modern geïsoleerd glas met HR++ coating zorgt voor uitstekende thermische eigenschappen 
                  en voorkomt condensvorming.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Aluminium sandwichpanelen</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Voor maximale isolatie en een gesloten uitstraling zijn aluminium sandwichpanelen ideaal. 
                  Deze bieden uitstekende thermische isolatie en kunnen gecombineerd worden met dakramen 
                  voor natuurlijke lichtinval.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Patio dak constructies</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Plat patio dak</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Een plat patio dak heeft een minimale helling (1-3 graden) en biedt een strakke, moderne uitstraling. 
                  Deze constructie is ideaal voor moderne architectuur en kan uitgevoerd worden met verschillende 
                  dakbedekkingsmaterialen zoals EPDM of TPO.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Schuin patio dak</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Een schuin patio dak heeft een helling van 15-30 graden en zorgt voor optimale regenwaterafvoer. 
                  Deze constructie is geschikt voor alle klimaten en biedt de mogelijkheid voor dakpannen, 
                  polycarbonaat of glazen bedekking.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lessenaarsdak patio</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Een lessenaarsdak heeft één hellend vlak en is vaak de meest kosteneffectieve oplossing. 
                  Deze constructie kan tegen een bestaande gevel geplaatst worden en biedt goede waterdichtheid 
                  bij juiste detaillering.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Onderhoud van uw patio dak</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Jaarlijkse inspectie</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Controle van de dakbedekking op beschadigingen of slijtage</li>
                  <li>Inspectie van voegen, kit- en loodwerk</li>
                  <li>Controle van de waterafvoer en dakgoten</li>
                  <li>Beoordeling van de draagconstructie</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Reiniging en klein onderhoud</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Regelmatige reiniging van polycarbonaat of glazen platen zorgt voor optimale lichtdoorlatendheid. 
                  Gebruik hiervoor mild reinigingsmiddel en vermijd schuurmiddelen die de UV-coating kunnen beschadigen.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-yellow-900 mb-3">Waarschuwing: Veiligheid eerst!</h3>
                  <p className="text-yellow-800">
                    Werk nooit alleen op een patio dak en gebruik altijd juiste veiligheidsuitrusting. 
                    Voor alle werkzaamheden op hoogte raden wij aan om een gecertificeerde dakdekker in te schakelen.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Veelvoorkomende problemen</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lekkages bij aansluitingen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  De meeste problemen ontstaan bij de aansluitingen van het patio dak aan de gevel of bij 
                  dakdoorvoeren. Professionele detaillering en kwalitatief kitwerk zijn essentieel voor 
                  een waterdicht patio dak.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Condensvorming</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Condensvorming onder polycarbonaat platen kan ontstaan bij onvoldoende ventilatie. 
                  Zorg voor adequate ventilatieopeningen aan voor- en achterzijde van het dak.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Verkleurig van materialen</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Goedkope polycarbonaat platen zonder UV-coating kunnen na enkele jaren verkleuren. 
                  Investeer daarom altijd in kwaliteitsmateriaal met minimaal 10 jaar garantie tegen verkleuring.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Waarom kiezen voor TBGS?</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">25+ jaar ervaring</h3>
                    <p className="text-blue-800">
                      Decennia aan ervaring in patio dakconstructies en dakbedekking in Nederland en België.
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Gecertificeerde specialisten</h3>
                    <p className="text-green-800">
                      Al onze dakdekkers zijn volledig gecertificeerd en blijven up-to-date met de nieuwste technieken.
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-orange-900 mb-3">Kwaliteitsgarantie</h3>
                    <p className="text-orange-800">
                      Wij bieden uitgebreide garantie op zowel materiaal als arbeid voor complete gemoedsrust.
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-900 mb-3">Maatwerk oplossingen</h3>
                    <p className="text-purple-800">
                      Elke patio is uniek. Wij leveren op maat gemaakte oplossingen die perfect bij uw woning passen.
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
                Klaar voor uw nieuwe patio dak?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Onze specialisten adviseren u graag over de beste patio dakoplossing voor uw situatie. 
                Vraag nu een gratis offerte aan!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-white text-tbgs-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Gratis offerte Aanvragen
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