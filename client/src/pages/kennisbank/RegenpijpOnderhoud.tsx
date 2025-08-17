import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, AlertTriangle, Droplets, Wrench } from "lucide-react";

export default function RegenpijpOnderhoud() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Regenpijp Onderhoud & Reparatie | Professionele Tips | TBGS</title>
        <meta name="description" content="Alles over regenpijp onderhoud, reparatie en vervanging. Voorkom waterschade met professionele tips van TBGS dakspecialisten. ✓ Gratis advies ✓ Vakmanschap" />
        <meta name="keywords" content="regenpijp onderhoud, regenpijp reparatie, dakgoot regenpijp, waterschade voorkomen, regenpijp vervangen" />
        <link rel="canonical" href="https://tbgs.nl/kennisbank/regenpijp-onderhoud-reparatie" />
        
        <meta property="og:title" content="Regenpijp Onderhoud & Reparatie | Professionele Tips | TBGS" />
        <meta property="og:description" content="Voorkom waterschade met professioneel regenpijp onderhoud. Leer alles over reparatie, vervanging en preventief onderhoud van regenpijpen." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tbgs.nl/kennisbank/regenpijp-onderhoud-reparatie" />
        
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Regenpijp Onderhoud & Reparatie - Complete Gids",
            "description": "Professionele gids over regenpijp onderhoud, reparatie en preventieve maatregelen voor optimale waterdrainage.",
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
            "datePublished": "2025-01-15",
            "dateModified": "2025-01-15"
          }`}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-4">
            <Droplets className="w-6 h-6 text-blue-300" />
            <span className="text-blue-300 font-medium">Kennisbank</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">De Regenpijp: Onderhoud & Reparatie</h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            In Nederland valt er jaarlijks op 130 dagen van het jaar 1mm regen en in sommige gebieden zelfs meer dan 2000mm per jaar. 
            Een goed functionerende regenpijp is daarom essentieel voor het beschermen van uw woning tegen waterschade.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Wrench className="w-8 h-8 text-blue-600 mr-3" />
            Waarom is Regenpijp Onderhoud Cruciaal?
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Een regenpijp is veel meer dan een simpele afvoer - het is een vitaal onderdeel van uw dakdrainagesysteem 
              dat uw woning beschermt tegen de elementen. Nederlandse woningen moeten bestand zijn tegen extreme weersomstandigheden, 
              van hevige regenbuien tot storm en hagel.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-red-800 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Gevolgen van Verwaarlozing
                </h3>
                <ul className="space-y-2 text-red-700">
                  <li>• Waterschade aan fundering en kelders</li>
                  <li>• Vochtproblemen en schimmelvorming</li>
                  <li>• Erosie van tuinpaden en bestrating</li>
                  <li>• Kostbare reparaties en verzekeringsclaims</li>
                  <li>• Waardedaling van uw eigendom</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Voordelen van Goed Onderhoud
                </h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Optimale waterafvoer en droge omgeving</li>
                  <li>• Verlengde levensduur van dakgoot systeem</li>
                  <li>• Voorkoming van dure reparaties</li>
                  <li>• Behoud van woningwaarde</li>
                  <li>• Gemoedsrust tijdens extreme weersomstandigheden</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Professioneel Onderhoudsschema</h2>
            
            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">Jaarlijks Inspectieprotocol</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-800">1</span>
                  </div>
                  <h4 className="font-semibold text-blue-900 mb-2">Voorjaar (Maart-April)</h4>
                  <p className="text-sm text-blue-700">Grondige reiniging na winter, controle op vorstschade en losgeraakte bevestigingen</p>
                </div>

                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-800">2</span>
                  </div>
                  <h4 className="font-semibold text-blue-900 mb-2">Nazomer (Augustus)</h4>
                  <p className="text-sm text-blue-700">Verwijdering van bladeren en puin, voorbereiding op het stormseizoen</p>
                </div>

                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-800">3</span>
                  </div>
                  <h4 className="font-semibold text-blue-900 mb-2">Winter (December)</h4>
                  <p className="text-sm text-blue-700">Controle op ijsvorming, vrije doorstroming en winterschade preventie</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Veelvoorkomende Regenpijp Problemen</h2>

            <div className="space-y-8 mb-12">
              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">Verstoppingen en Blokkades</h3>
                <p className="text-yellow-700 mb-4">
                  Bladeren, takjes, tennisballen en andere objecten kunnen de waterafvoer blokkeren. 
                  In stedelijke gebieden komen ook plastic zakken en ander afval voor.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <strong className="text-yellow-800">Professionele Oplossing:</strong>
                  <p className="text-gray-700 mt-2">
                    Gebruik van professionele hogedrukspuiting en specialistische camera-inspectie voor 
                    volledige diagnose en effectieve reiniging zonder schade aan het systeem.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-red-800 mb-3">Lekkages en Scheuren</h3>
                <p className="text-red-700 mb-4">
                  Vorstschade, UV-degradatie en normale slijtage kunnen leiden tot scheuren en lekkages, 
                  vooral bij oudere PVC-systemen en slecht onderhouden metalen regenpijpen.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <strong className="text-red-800">Professionele Oplossing:</strong>
                  <p className="text-gray-700 mt-2">
                    Gerichte reparatie met hoogwaardige sealants of volledige sectie vervanging 
                    met moderne, weerbestendige materialen en 15-jaar garantie.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Losgeraakte Bevestigingen</h3>
                <p className="text-orange-700 mb-4">
                  Storm en wind kunnen regenpijpklemmen loswerken, wat leidt tot trillingen, 
                  geluidsoverlast en uiteindelijk structurele schade aan de gevel.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <strong className="text-orange-800">Professionele Oplossing:</strong>
                  <p className="text-gray-700 mt-2">
                    Installatie van robuuste, corrosiebestendige bevestigingssystemen met 
                    trillingdempers en regelmatige controle van alle verbindingspunten.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Moderne Regenpijp Systemen</h2>
            
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Innovatieve Materialen & Technologieën</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-3">Hoogwaardige PVC Systemen</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• UV-bestendige compounds voor 25+ jaar levensduur</li>
                    <li>• Geruisarme waterafvoer door speciale wanddikte</li>
                    <li>• Eenvoudige montage met click-systemen</li>
                    <li>• Onderhoudsvrij en kleurvast</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-3">Premium Aluminium & Zink</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Corrosiebestendige coating voor extreme weersomstandigheden</li>
                    <li>• Duurzame esthetiek die waarde toevoegt</li>
                    <li>• Perfecte pasvorm door maatwerk productie</li>
                    <li>• Recyclebaar en milieuvriendelijk</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Professioneel Regenpijp Onderhoud Nodig?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Onze gecertificeerde dakspecialisten zorgen voor optimale waterafvoer en beschermen uw investering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/offerte">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
                Gratis Inspectie Aanvragen
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Bel Direct: 040-1234567
              </button>
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Gerelateerde Artikelen</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/kennisbank/dakgoot-onderhoud-reiniging">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Dakgoot Onderhoud</h3>
                <p className="text-gray-600 text-sm">Complete gids voor dakgoot reiniging en onderhoud</p>
              </div>
            </Link>
            
            <Link href="/kennisbank/gevellekkage-oorzaken-oplossingen">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Gevellekkage</h3>
                <p className="text-gray-600 text-sm">Oorzaken en professionele oplossingen voor gevellekkage</p>
              </div>
            </Link>
            
            <Link href="/kennisbank/dakbedekking-materialen-kiezen">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Dakbedekking Materialen</h3>
                <p className="text-gray-600 text-sm">Kies de juiste dakbedekking voor uw situatie</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}