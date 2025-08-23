import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface VeldhovenPlatDakProps {
  onOpenContactModal: () => void;
}

export default function VeldhovenPlatDak({ onOpenContactModal }: VeldhovenPlatDakProps) {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Plat Dak Specialist Veldhoven – EPDM & Bitumen Nieuwbouw | TBGS</title>
        <meta name="description" content="🏆 Plat dak specialist Veldhoven ✓ Nieuwbouw & renovatie expert ✓ EPDM & bitumen platte daken ✓ 25+ jaar ervaring ✓ Oerle, Zeelst service ✓ Gratis offerte" />
        <meta name="keywords" content="plat dak specialist Veldhoven, EPDM dakbedekking Veldhoven, plat dak nieuwbouw Veldhoven, platdak Oerle, bitumen dak Zeelst" />
        <link rel="canonical" href="https://tbgs.nl/veldhoven/plat-dak-specialist" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "TBGS Plat Dak Specialist Veldhoven",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Veldhoven",
              "addressRegion": "Noord-Brabant",
              "postalCode": "5500",
              "addressCountry": "NL"
            },
            "telephone": "+31 40 202 6744",
            "email": "veldhoven@tbgs.nl",
            "url": "https://tbgs.nl/veldhoven/plat-dak-specialist",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.4170,
              "longitude": 5.4041
            },
            "serviceArea": {
              "@type": "Place",
              "name": "Veldhoven, Oerle, Zeelst"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Plat Dak Services Veldhoven",
              "itemListElement": [{
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Nieuwbouw Plat Dak Installatie",
                  "description": "Complete platte dakoplossingen voor nieuwbouwprojecten"
                }
              }]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": 4.8,
              "reviewCount": 45
            },
            "speciality": "Nieuwbouw en renovatie platte daken"
          })}
        </script>
      </Helmet>

      <Header onOpenContactModal={onOpenContactModal} />

      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-orange-900 via-red-800 to-pink-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-sm font-medium text-white mb-8">
                <span className="text-xl">🏗️</span>
                <span>Nieuwbouw & Renovatie Expert</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Plat Dak Specialist <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Veldhoven</span>
              </h1>
              <p className="text-lg lg:text-xl font-light leading-relaxed mb-6 opacity-90">
                EPDM & Bitumen | Nieuwbouw & Renovatie Focus
              </p>
              <p className="text-xl lg:text-2xl font-light leading-relaxed mb-12 opacity-90">
                Complete platte dakoplossingen voor Veldhoven, Oerle en Zeelst
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-white text-orange-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Gratis offerte Veldhoven
                </button>
                <a href="tel:+31402026744" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-orange-900 transition-all duration-300">
                  📞 040 202 6744
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-orange-900 mb-4">Plat Dak Specialist voor Nieuwbouw & Renovatie</h2>
                <p className="text-orange-800 leading-relaxed">
                  Veldhoven staat bekend om moderne nieuwbouwprojecten en creatieve renovaties. TBGS combineert 
                  moderne bouwmethoden met bewezen platte daktechnieken. Of het nu gaat om een complete nieuwbouw 
                  woning of renovatie van een bestaand pand, wij leveren platte dakoplossingen die perfect passen 
                  bij uw project en budget.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border">
                  <h3 className="font-bold text-orange-900 mb-4 text-lg">🏠 Nieuwbouw</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Complete dakintegration</li>
                    <li>• Energie-efficiënt ontwerp</li>
                    <li>• Moderne isolatiesystemen</li>
                    <li>• Smart home voorbereidingen</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border">
                  <h3 className="font-bold text-orange-900 mb-4 text-lg">🔧 Renovatie</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Bestaande dak upgrade</li>
                    <li>• Energielabel verbetering</li>
                    <li>• Lekkage eliminatie</li>
                    <li>• Duurzame materialen</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border">
                  <h3 className="font-bold text-orange-900 mb-4 text-lg">⚡ Service</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• 24u offerte service</li>
                    <li>• Project management</li>
                    <li>• Garantie & nazorg</li>
                    <li>• Onderhoudsprogramma's</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-orange-800 via-red-900 to-pink-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Veldhoven Platte Dak Projecten
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Van nieuwbouw tot renovatie - complete dakoplossingen op maat
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-white text-orange-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Plan uw Project
                </button>
                <Link href="/kennisbank/plat-dak">
                  <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-orange-900 transition-all duration-300">
                    Technische Info
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