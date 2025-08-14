import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Clock, Star, ArrowRight, Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ContactModal from "@/components/ContactModal";
import { Link } from "wouter";
import LocalSEOSchema from "@/components/LocalSEOSchema";

interface LocationMierloProps {
  onOpenContactModal: () => void;
}

export default function LocationMierlo({ onOpenContactModal }: LocationMierloProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const whatsappNumber = "+31614595142";
  const businessName = "TBGS Totaal Bouw Groep Specialisten";

  const services = [
    {
      name: "Daklekkage Reparatie",
      description: "24/7 spoedservice voor daklekkages, noodreparaties en waterschade preventie in Mierlo",
      icon: "💧",
      color: "bg-red-600",
      url: "/mierlo/daklekkage",
      features: ["24/7 Spoeddienst", "Binnen 2u ter plaatse", "Waterschade preventie"]
    },
    {
      name: "Complete Renovatie", 
      description: "Totaalrenovaties, badkamer- en keukenrenovaties door gecertificeerde vakmensen",
      icon: "🏠",
      color: "bg-orange-600",
      url: "/mierlo/renovatie",
      features: ["Totaalprojecten", "Keukens & badkamers", "Energiebesparing"]
    },
    {
      name: "Preventief Onderhoud",
      description: "Regelmatig onderhoud voorkomt kostbare reparaties en verlengt de levensduur",
      icon: "🔧", 
      color: "bg-green-600",
      url: "/mierlo/onderhoud",
      features: ["Onderhoudscontracten", "Periodieke controles", "Kostenbesparingen"]
    }
  ];

  const seoKeywords = [
    "dakdekker Mierlo", "renovatie Mierlo", "onderhoud Mierlo", "daklekkage Mierlo",
    "aannemer Mierlo", "bouwbedrijf Mierlo", "badkamerrenovatie Mierlo", "keukenrenovatie Mierlo",
    "dakonderhoud Mierlo", "gootreiniging Mierlo", "schoorsteenveeg Mierlo"
  ];

  return (
    <>
      <Helmet>
        <title>TBGS Mierlo | Premium Dakdekker, Renovatie & Onderhoud Specialisten Noord-Brabant</title>
        <meta name="description" content="🏆 TBGS Mierlo - Uw premium specialist voor daklekkage (24/7 spoed), complete renovaties en professioneel onderhoud. ✓ 25+ jaar ervaring ✓ Gecertificeerd ✓ Garantie ✓ Lokale kennis Mierlo ✓ Gratis offerte binnen 24u" />
        <meta name="keywords" content={seoKeywords.join(", ")} />
        <link rel="canonical" href="https://www.tbgs.nl/mierlo" />
        
        {/* Advanced Open Graph */}
        <meta property="og:title" content="TBGS Mierlo | Premium Bouwspecialisten Noord-Brabant" />
        <meta property="og:description" content="Premium dakdekker, renovatie en onderhoud specialisten in Mierlo. 25+ jaar ervaring, 24/7 spoeddienst, gecertificeerde vakmensen." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tbgs.nl/mierlo" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="TBGS Totaal Bouw Groep Specialisten" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TBGS Mierlo | Premium Bouwspecialisten" />
        <meta name="twitter:description" content="Daklekkage, renovatie en onderhoud specialisten in Mierlo. 24/7 service." />
        
        {/* Advanced Geo Tags */}
        <meta name="geo.region" content="NL-NB" />
        <meta name="geo.placename" content="Mierlo" />
        <meta name="geo.position" content="51.4408;5.6247" />
        <meta name="ICBM" content="51.4408,5.6247" />
        
        {/* Advanced SEO Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="TBGS Totaal Bouw Groep Specialisten" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        
        {/* Structured Data - Service Area */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ServiceArea",
            "name": "TBGS Service Area Mierlo",
            "serviceType": ["Daklekkage reparatie", "Woningrenovatie", "Bouwonderhoud"],
            "areaServed": {
              "@type": "City",
              "name": "Mierlo",
              "addressRegion": "Noord-Brabant",
              "addressCountry": "NL"
            }
          })}
        </script>
      </Helmet>

      <LocalSEOSchema 
        businessData={{
          name: businessName,
          address: {
            addressLocality: "Mierlo",
            addressRegion: "Noord-Brabant", 
            addressCountry: "Nederland"
          },
          telephone: whatsappNumber,
          geo: {
            latitude: 51.4408,
            longitude: 5.6247
          },
          areaServed: ["Mierlo", "Noord-Brabant", "Nederland"],
          priceRange: "€€",
          aggregateRating: {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127"
          }
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <Header onOpenContactModal={onOpenContactModal} />
        
        {/* Hero Section - Enhanced SEO */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Mierlo, Noord-Brabant • Lokale Bouwspecialisten
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">
                  Premium Bouwspecialisten
                </span>
                <span className="block text-tbgs-navy mt-2">Mierlo</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                <strong>TBGS Mierlo</strong> - Uw lokale specialist voor <em>daklekkage reparatie</em>, 
                <em>complete renovaties</em> en <em>professioneel onderhoud</em> in Mierlo en omgeving. 
                Met <strong>25+ jaar ervaring</strong> en <strong>24/7 spoeddienst</strong> staan wij garant voor kwaliteit.
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hallo TBGS, ik zoek een betrouwbare specialist in Mierlo voor mijn bouwproject`, '_blank')}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Direct WhatsApp Contact
                </Button>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span><strong>24/7 Spoeddienst</strong> • Binnen 2u ter plaatse</span>
                </div>
              </div>

              {/* Enhanced Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                <div className="text-center bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-3xl font-bold text-tbgs-navy mb-1">25+</div>
                  <div className="text-sm text-gray-600">Jaar Ervaring</div>
                  <Award className="w-5 h-5 mx-auto mt-2 text-yellow-500" />
                </div>
                <div className="text-center bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-1">4.9★</div>
                  <div className="text-sm text-gray-600">Google Reviews</div>
                  <Star className="w-5 h-5 mx-auto mt-2 text-yellow-500" />
                </div>
                <div className="text-center bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Tevredenheid</div>
                  <Shield className="w-5 h-5 mx-auto mt-2 text-blue-600" />
                </div>
                <div className="text-center bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Projecten</div>
                  <Users className="w-5 h-5 mx-auto mt-2 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Services Grid with Rich SEO Content */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Premium <span className="text-tbgs-navy">Bouwdiensten</span> in Mierlo
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Van <strong>spoeddienst daklekkage reparatie</strong> tot <strong>complete woningrenovaties</strong> - 
                TBGS Mierlo levert uitsluitend premium kwaliteit met jarenlange garantie.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link href={service.url} key={index}>
                  <article className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full">
                    <header className="text-center mb-6">
                      <div className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl text-white group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
                        {service.icon}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    </header>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <footer className="mt-6 flex items-center justify-between">
                      <Badge className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                        Premium Service
                      </Badge>
                      <div className="flex items-center text-tbgs-navy font-medium group-hover:text-blue-600">
                        Meer informatie
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </footer>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Location Benefits with SEO Content */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Waarom Kiezen voor <span className="text-tbgs-navy">TBGS in Mierlo</span>?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Als <strong>lokale bouwspecialist in Mierlo</strong> bieden wij unieke voordelen 
                die landelijke bedrijven niet kunnen evenaren.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">Lokale Expertise Mierlo</h3>
                <p className="text-gray-600 text-sm">Grondige kennis van Mierlose bouwstijlen, lokale regelgeving en karakteristieke woningtypen uit verschillende bouwperioden.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">Snelste Service Regio</h3>
                <p className="text-gray-600 text-sm">Korte reistijd vanuit onze lokale vestiging betekent snellere hulp bij noodgevallen en lagere reiskosten voor u.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">Persoonlijk Contact</h3>
                <p className="text-gray-600 text-sm">Directe communicatie met vaste contactpersoon die uw project van A tot Z begeleidt en lokaal bereikbaar is.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">Premium Garantie</h3>
                <p className="text-gray-600 text-sm">Uitgebreide garantievoorwaarden op materialen en vakmanschap, plus lokale nazorg gedurende de gehele garantieperiode.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-tbgs-navy via-blue-700 to-tbgs-navy text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar voor <span className="text-yellow-400">Premium Kwaliteit</span>?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Ervaar het verschil van <strong>lokale expertise</strong> en <strong>premium service</strong> in Mierlo. 
              Vraag vandaag nog een <strong>gratis offerte</strong> aan of bel voor <strong>24/7 spoedservice</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hallo TBGS, ik wil graag een premium offerte voor mijn project in Mierlo`, '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Direct WhatsApp Contact
              </Button>
              <Button 
                onClick={onOpenContactModal}
                className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Gratis Premium Offerte
              </Button>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              ⭐ Binnen 24u reactie gegarandeerd • 💼 Gecertificeerde specialisten • 🏆 25+ jaar ervaring
            </p>
          </div>
        </section>

        <Footer />
      </div>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}