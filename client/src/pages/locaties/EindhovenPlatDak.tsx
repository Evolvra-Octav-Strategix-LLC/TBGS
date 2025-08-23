import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface EindhovenPlatDakProps {
  onOpenContactModal: () => void;
}

export default function EindhovenPlatDak({ onOpenContactModal }: EindhovenPlatDakProps) {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Plat Dak Specialist Eindhoven – EPDM & Bitumen | TBGS Eindhoven</title>
        <meta name="description" content="🏆 Plat dak specialist Eindhoven ✓ EPDM & bitumen platte daken ✓ 25+ jaar lokale ervaring ✓ 20 jaar garantie ✓ Binnen 24u gratis offerte ✓ KvK 17276509" />
        <meta name="keywords" content="plat dak specialist Eindhoven, EPDM dakbedekking Eindhoven, plat dak laten maken Eindhoven, platdak Eindhoven, bitumen dak Eindhoven" />
        <link rel="canonical" href="https://tbgs.nl/eindhoven/plat-dak-specialist" />
        
        {/* Enhanced Local Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "TBGS Plat Dak Specialist Eindhoven",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Eindhoven",
              "addressRegion": "Noord-Brabant",
              "postalCode": "5600",
              "addressCountry": "NL"
            },
            "telephone": "+31 40 202 6744",
            "email": "eindhoven@tbgs.nl",
            "url": "https://tbgs.nl/eindhoven/plat-dak-specialist",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.4416,
              "longitude": 5.4697
            },
            "openingHoursSpecification": [{
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "07:30",
              "closes": "17:30"
            }, {
              "@type": "OpeningHoursSpecification", 
              "dayOfWeek": "Saturday",
              "opens": "08:00",
              "closes": "16:00"
            }],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 51.4416,
                "longitude": 5.4697
              },
              "geoRadius": "25000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Plat Dak Services Eindhoven",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "EPDM Plat Dak Installatie",
                    "description": "Professionele EPDM platte dakbedekking met 40 jaar levensduur"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Bitumen Plat Dak",
                    "description": "Traditionele bitumen platte dakbedekking voor duurzame waterdichtheid"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": 4.9,
              "reviewCount": 87,
              "bestRating": 5
            },
            "priceRange": "€€€"
          })}
        </script>
      </Helmet>

      <Header onOpenContactModal={onOpenContactModal} />

      <main className="flex-1">
        {/* Hero Section - Eindhoven Specific */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-tbgs-navy text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-sm font-medium text-white mb-8">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Actief in Eindhoven</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Plat Dak Specialist <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Eindhoven</span>
              </h1>
              <p className="text-lg lg:text-xl font-light leading-relaxed mb-6 opacity-90">
                EPDM & Bitumen Dakbedekking | 25+ jaar lokale ervaring
              </p>
              <p className="text-xl lg:text-2xl font-light leading-relaxed mb-12 opacity-90">
                Professionele platte dakoplossingen in Eindhoven en directe omgeving
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-white text-tbgs-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Gratis offerte Eindhoven
                </button>
                <a href="tel:+31402026744" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-tbgs-navy transition-all duration-300">
                  📞 040 202 6744
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Eindhoven Specific USPs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Waarom TBGS de #1 Plat Dak Specialist van Eindhoven is
                </h2>
                <p className="text-xl text-gray-600">
                  25+ jaar ervaring in Eindhoven | 300+ tevreden klanten | KvK 17276509
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Eindhoven Expert</h3>
                  <p className="text-gray-600 text-sm">25+ jaar lokale ervaring met Eindhovense bouwstijlen en klimaat</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Snelle Service</h3>
                  <p className="text-gray-600 text-sm">Binnen 24u gratis offerte | Spoeddienst binnen 2 uur</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">20 Jaar Garantie</h3>
                  <p className="text-gray-600 text-sm">Uitgebreide garantie op materiaal én vakmanschap</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📍</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Lokaal Bedrijf</h3>
                  <p className="text-gray-600 text-sm">Gevestigd in Eindhoven | Nederlandse kwaliteit</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eindhoven Service Coverage */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Plat Dak Service in Eindhoven</h2>
                <p className="text-blue-800 leading-relaxed mb-6">
                  TBGS is specialist in platte daken voor Eindhoven en directe omgeving. Wij kennen de lokale 
                  bouwvoorschriften, weersomstandigheden en architecturale stijlen van Eindhoven perfect. 
                  Met ons hoofdkantoor in Eindhoven zijn we altijd dichtbij voor service en onderhoud.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-blue-900 mb-3">📍 Servicegebied Eindhoven:</h3>
                    <ul className="text-blue-800 text-sm space-y-1">
                      <li>• Eindhoven Centrum</li>
                      <li>• Woensel-Noord & Woensel-Zuid</li>
                      <li>• Stratum & Gestel</li>
                      <li>• Tongelre & Strijp</li>
                      <li>• Meerhoven & De Runde</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 mb-3">🕒 Response Tijden:</h3>
                    <ul className="text-blue-800 text-sm space-y-1">
                      <li>• Gratis offerte: Binnen 24 uur</li>
                      <li>• Spoeddienst lekkage: Binnen 2 uur</li>
                      <li>• Onderhoud afspraak: Binnen 1 week</li>
                      <li>• Installatie planning: Op maat</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-tbgs-navy via-blue-900 to-indigo-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Klaar voor uw nieuwe platte dak in Eindhoven?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Vraag nu een gratis offerte aan en ontdek waarom 300+ Eindhovenaren al kozen voor TBGS!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-white text-tbgs-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Gratis offerte Aanvragen
                </button>
                <Link href="/kennisbank/plat-dak">
                  <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-tbgs-navy transition-all duration-300">
                    Kennisbank Plat Dak
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