import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface NuenenPlatDakProps {
  onOpenContactModal: () => void;
}

export default function NuenenPlatDak({ onOpenContactModal }: NuenenPlatDakProps) {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Plat Dak Specialist Nuenen – EPDM & Bitumen Van Gogh Dorp | TBGS</title>
        <meta name="description" content="🏆 Plat dak specialist Nuenen ✓ Van Gogh dorp expert ✓ EPDM & bitumen platte daken ✓ Historische panden specialist ✓ 25+ jaar ervaring ✓ Gratis offerte" />
        <meta name="keywords" content="plat dak specialist Nuenen, EPDM dakbedekking Nuenen, plat dak Van Gogh dorp, platdak Nuenen, bitumen dak Nuenen, dakdekker Nuenen" />
        <link rel="canonical" href="https://tbgs.nl/nuenen/plat-dak-specialist" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "TBGS Plat Dak Specialist Nuenen",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nuenen",
              "addressRegion": "Noord-Brabant",
              "postalCode": "5670",
              "addressCountry": "NL"
            },
            "telephone": "+31 40 202 6744",
            "email": "nuenen@tbgs.nl",
            "url": "https://tbgs.nl/nuenen/plat-dak-specialist",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.4702,
              "longitude": 5.5544
            },
            "serviceArea": {
              "@type": "Place",
              "name": "Nuenen, Gerwen, Nederwetten"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Plat Dak Services Nuenen",
              "itemListElement": [{
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "EPDM Plat Dak Historische Panden",
                  "description": "Gespecialiseerd in platte daken voor historische panden in Van Gogh dorp"
                }
              }]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": 4.8,
              "reviewCount": 32
            },
            "speciality": "Historische panden en Van Gogh dorp architectuur"
          })}
        </script>
      </Helmet>

      <Header onOpenContactModal={onOpenContactModal} />

      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-sm font-medium text-white mb-8">
                <span className="text-xl">🎨</span>
                <span>Van Gogh Dorp Specialist</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Plat Dak Specialist <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Nuenen</span>
              </h1>
              <p className="text-lg lg:text-xl font-light leading-relaxed mb-6 opacity-90">
                EPDM & Bitumen | Historische Panden Expert
              </p>
              <p className="text-xl lg:text-2xl font-light leading-relaxed mb-12 opacity-90">
                Platte dakoplossingen die passen bij de Van Gogh dorp architectuur
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-white text-emerald-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Gratis offerte Nuenen
                </button>
                <a href="tel:+31402026744" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-emerald-900 transition-all duration-300">
                  📞 040 202 6744
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-emerald-900 mb-4">Plat Dak Specialist voor Van Gogh Dorp</h2>
                <p className="text-emerald-800 leading-relaxed">
                  TBGS begrijpt de unieke charme van Nuenen en de historische waarde van het Van Gogh dorp. 
                  Onze platte dakoplossingen respecteren de architecturale stijl terwijl we moderne technieken 
                  en materialen toepassen. Van historische boerderijen tot moderne aanbouwen - wij zorgen voor 
                  duurzame en passende platte dakbedekking.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-sm border">
                  <h3 className="font-bold text-emerald-900 mb-4 text-xl">🏛️ Historische Panden</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Authentieke materiaalintegratie</li>
                    <li>• Monumentenzorg ervaring</li>
                    <li>• Van Gogh periode architectuur</li>
                    <li>• Duurzame moderne technieken</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border">
                  <h3 className="font-bold text-emerald-900 mb-4 text-xl">🌿 Duurzame Oplossingen</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• EPDM groendaken mogelijk</li>
                    <li>• Regenwater opvang systemen</li>
                    <li>• Energie-efficiënte isolatie</li>
                    <li>• 40+ jaar levensduur</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-emerald-800 via-green-900 to-teal-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Van Gogh Dorp Platte Dak Service
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Respectvolle platte dakoplossingen die de geschiedenis van Nuenen eren
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-white text-emerald-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Gratis Advies & Offerte
                </button>
                <Link href="/kennisbank/plat-dak">
                  <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-emerald-900 transition-all duration-300">
                    Meer Over Platte Daken
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