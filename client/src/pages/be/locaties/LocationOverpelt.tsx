import { useState } from "react";
import { Helmet } from "react-helmet-async";

import Footer from "@/components/Footer";
import { MapPin, Phone, Clock, Star, ArrowRight, Shield, Award, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ContactModal from "@/components/ContactModal";
import { Link } from "wouter";
import LocalSEOSchema from "@/components/LocalSEOSchema";

interface LocationOverpeltProps {
  onOpenContactModal: () => void;
}

export default function LocationOverpelt({ onOpenContactModal }: LocationOverpeltProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const whatsappNumber = "+31614595142";
  const businessName = "TBGS Totaal Bouw Groep Specialisten";

  const services = [
    {
      name: "Daklekkage Nooddienst",
      description: "24/7 directe daklekkage interventie en waterschade preventie in Overpelt",
      icon: "💧",
      color: "bg-red-600",
      url: "/overpelt/daklekkage",
      badge: "24/7 Spoeddienst"
    },
    {
      name: "Complete Renovatie", 
      description: "Volledige woningrenovaties en moderne makeovers in Overpelt",
      icon: "🏠",
      color: "bg-orange-600",
      url: "/overpelt/renovatie",
      badge: "Totaalpakket"
    },
    {
      name: "Preventief Onderhoud",
      description: "Systematisch onderhoud en onderhoudscontracten voor Overpeltse woningen",
      icon: "🔧", 
      color: "bg-green-600",
      url: "/overpelt/onderhoud",
      badge: "Preventief"
    }
  ];

  return (
    <>
      <Helmet>
        <title>TBGS Overpelt | Daklekkage, Renovatie & Onderhoud Specialisten Limburg België</title>
        <meta name="description" content="🏆 TBGS Overpelt - Uw betrouwbare bouwspecialisten in Overpelt, België. ✓ 24/7 daklekkage nooddienst ✓ Complete renovaties ✓ Preventief onderhoud ✓ 25+ jaar ervaring ✓ Lokale Limburgse specialisten" />
        <meta name="keywords" content="dakdekker Overpelt België, renovatie Overpelt Limburg, onderhoud Overpelt, daklekkage Overpelt 24/7, aannemer Overpelt België, bouwbedrijf Limburg, badkamer renovatie Overpelt" />
        <link rel="canonical" href="https://www.tbgs.nl/overpelt" />
        
        <meta property="og:title" content="TBGS Overpelt | Betrouwbare Bouwspecialisten Limburg België" />
        <meta property="og:description" content="Betrouwbare daklekkage service, renovaties en onderhoud in Overpelt, België. 25+ jaar ervaring in Limburg." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tbgs.nl/overpelt" />
        <meta property="og:locale" content="nl_BE" />
        
        <meta name="geo.region" content="BE-LI" />
        <meta name="geo.placename" content="Overpelt" />
        <meta name="geo.position" content="51.1967;5.4156" />
        <meta name="ICBM" content="51.1967,5.4156" />
      </Helmet>

      <LocalSEOSchema 
        businessData={{
          name: businessName,
          address: {
            addressLocality: "Overpelt",
            addressRegion: "Limburg", 
            addressCountry: "België"
          },
          telephone: whatsappNumber,
          geo: {
            latitude: 51.1967,
            longitude: 5.4156
          },
          areaServed: ["Overpelt", "Limburg", "België"]
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Overpelt, Limburg • België
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">
                  TBGS Specialisten
                </span>
                <span className="block text-tbgs-navy mt-2">Overpelt</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                <strong>TBGS Overpelt</strong> - Uw lokale specialist voor <em>daklekkage nooddienst</em>, 
                <em>complete renovaties</em> en <em>preventief onderhoud</em> in Overpelt en omgeving. 
                Met <strong>25+ jaar ervaring</strong> leveren wij <strong>betrouwbare Belgische kwaliteit</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hallo TBGS, ik zoek een betrouwbare specialist in Overpelt voor mijn bouwproject`, '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp Contact
                </Button>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  24/7 Spoeddienst België
                </div>
              </div>

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

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Onze diensten in Overpelt
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

        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-slate-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Waarom TBGS in Overpelt?
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

        <section className="py-16 px-4 bg-tbgs-navy text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar om te Starten?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Neem vandaag nog contact op voor een gratis offerte of spoedinterventie in Overpelt
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hallo TBGS, ik wil graag een offerte in Overpelt`, '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp Contact
              </Button>
              <Button 
                onClick={onOpenContactModal}
                className="bg-white text-tbgs-navy hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Gratis offerte Aanvragen
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