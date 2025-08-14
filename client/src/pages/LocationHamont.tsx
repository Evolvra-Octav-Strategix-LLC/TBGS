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

interface LocationHamontProps {
  onOpenContactModal: () => void;
}

export default function LocationHamont({ onOpenContactModal }: LocationHamontProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const whatsappNumber = "+31614595142";
  const businessName = "TBGS Totaal Bouw Groep Specialisten";

  const services = [
    {
      name: "Daklekkage Spoeddienst",
      description: "24/7 professionele daklekkage reparatie en waterschade preventie in Hamont",
      icon: "💧",
      color: "bg-red-600",
      url: "/hamont/daklekkage",
      badge: "Spoeddienst"
    },
    {
      name: "Complete Renovatie", 
      description: "Totaalrenovaties, badkamer- en keukenrenovaties door Belgische vakspecialisten",
      icon: "🏠",
      color: "bg-orange-600",
      url: "/hamont/renovatie",
      badge: "Volledig"
    },
    {
      name: "Professioneel Onderhoud",
      description: "Preventief onderhoud en onderhoudscontracten voor woningen in Hamont",
      icon: "🔧", 
      color: "bg-green-600",
      url: "/hamont/onderhoud",
      badge: "Preventief"
    }
  ];

  return (
    <>
      <Helmet>
        <title>TBGS Hamont | Dakdekker, Renovatie & Onderhoud Specialisten Limburg België</title>
        <meta name="description" content="🏆 TBGS Hamont - Uw betrouwbare bouwspecialist in Hamont, België. ✓ 24/7 daklekkage spoeddienst ✓ Complete woningrenovaties ✓ Preventief onderhoud ✓ 25+ jaar ervaring ✓ Belgische kwaliteit ✓ Lokale specialisten Limburg" />
        <meta name="keywords" content="dakdekker Hamont, renovatie Hamont België, onderhoud Hamont, daklekkage Hamont, aannemer Hamont, bouwbedrijf Limburg, badkamerrenovatie Hamont, keukenrenovatie Hamont België, dakonderhoud Hamont" />
        <link rel="canonical" href="https://www.tbgs.nl/hamont" />
        
        {/* Open Graph */}
        <meta property="og:title" content="TBGS Hamont | Professionele Bouwspecialisten Limburg België" />
        <meta property="og:description" content="Betrouwbare daklekkage service, renovaties en onderhoud in Hamont, België. 25+ jaar ervaring in Limburg." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tbgs.nl/hamont" />
        <meta property="og:locale" content="nl_BE" />
        
        {/* Geographic Tags */}
        <meta name="geo.region" content="BE-LI" />
        <meta name="geo.placename" content="Hamont" />
        <meta name="geo.position" content="51.2797;5.2794" />
        <meta name="ICBM" content="51.2797,5.2794" />
        
        {/* Belgian Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "TBGS Hamont - Bouwspecialisten Limburg",
            "description": "Professionele daklekkage service, renovaties en onderhoud in Hamont, België",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hamont",
              "addressRegion": "Limburg",
              "addressCountry": "BE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.2797,
              "longitude": 5.2794
            },
            "areaServed": ["Hamont", "Limburg", "België"],
            "serviceType": ["Daklekkage reparatie", "Woningrenovatie", "Bouwonderhoud"]
          })}
        </script>
      </Helmet>

      <LocalSEOSchema 
        businessData={{
          name: businessName,
          address: {
            addressLocality: "Hamont",
            addressRegion: "Limburg", 
            addressCountry: "België"
          },
          telephone: whatsappNumber,
          geo: {
            latitude: 51.2797,
            longitude: 5.2794
          },
          areaServed: ["Hamont", "Limburg", "België"]
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <Header onOpenContactModal={onOpenContactModal} />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Hamont, Limburg • België
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">
                  TBGS Specialisten
                </span>
                <span className="block text-tbgs-navy mt-2">Hamont</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                <strong>TBGS Hamont</strong> - Uw lokale specialist voor <em>daklekkage reparatie</em>, 
                <em>complete renovaties</em> en <em>professioneel onderhoud</em> in Hamont en Limburg. 
                Met <strong>25+ jaar ervaring</strong> leveren wij <strong>Belgische kwaliteit</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hallo TBGS, ik zoek een betrouwbare specialist in Hamont voor mijn bouwproject`, '_blank')}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp Contact
                </Button>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  24/7 Spoeddienst België
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-tbgs-navy">25+</div>
                  <div className="text-sm text-gray-600">Jaar Ervaring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tbgs-navy">4.9★</div>
                  <div className="text-sm text-gray-600">Klantwaardering</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tbgs-navy">100%</div>
                  <div className="text-sm text-gray-600">Belgische Kwaliteit</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Onze Diensten in Hamont
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Van spoeddienst tot geplande projecten - wij zijn uw betrouwbare partner in België
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link href={service.url} key={index}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer group h-full">
                    <div className="text-center">
                      <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl text-white group-hover:scale-110 transition-transform duration-200`}>
                        {service.icon}
                      </div>
                      
                      <Badge className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs mb-4">
                        {service.badge}
                      </Badge>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      
                      <div className="mt-6 flex items-center justify-center text-tbgs-navy font-medium group-hover:text-blue-600">
                        Meer informatie
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Location Benefits */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-slate-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Waarom TBGS in Hamont?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-3">Belgische Kwaliteit</h3>
                <p className="text-gray-600">Traditioneel Belgisch vakmanschap gecombineerd met moderne technieken</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-3">Lokale Kennis</h3>
                <p className="text-gray-600">Grondige kennis van Limburgse bouwstijlen en lokale regelgeving</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-3">Snelle Service</h3>
                <p className="text-gray-600">Korte reistijd betekent snellere hulp bij noodgevallen</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-3">Persoonlijke Benadering</h3>
                <p className="text-gray-600">Directe communicatie met vaste contactpersoon</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-tbgs-navy text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar om te Starten?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Neem vandaag nog contact op voor een gratis offerte of spoedinterventie in Hamont
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hallo TBGS, ik wil graag een offerte in Hamont`, '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp Contact
              </Button>
              <Button 
                onClick={onOpenContactModal}
                className="bg-white text-tbgs-navy hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Gratis Offerte Aanvragen
              </Button>
            </div>
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