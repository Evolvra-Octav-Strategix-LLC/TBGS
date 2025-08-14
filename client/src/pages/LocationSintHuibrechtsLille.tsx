import { useState } from "react";
import { Helmet } from "react-helmet-async";

import Footer from "@/components/Footer";
import { MapPin, Phone, Clock, Star, ArrowRight, Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ContactModal from "@/components/ContactModal";
import { Link } from "wouter";
import LocalSEOSchema from "@/components/LocalSEOSchema";

interface LocationSintHuibrechtsLilleProps {
  onOpenContactModal: () => void;
}

export default function LocationSintHuibrechtsLille({ onOpenContactModal }: LocationSintHuibrechtsLilleProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const whatsappNumber = "+31614595142";
  const businessName = "TBGS Totaal Bouw Groep Specialisten";

  const services = [
    {
      name: "Daklekkage Spoeddienst",
      description: "24/7 professionele daklekkage reparatie en waterschade preventie in Sint-Huibrechts-Lille",
      icon: "💧",
      color: "bg-red-600",
      url: "/sint-huibrechts-lille/daklekkage",
      badge: "24/7 Service"
    },
    {
      name: "Complete Renovatie", 
      description: "Volledige woningrenovaties en moderne transformaties in Sint-Huibrechts-Lille",
      icon: "🏠",
      color: "bg-orange-600",
      url: "/sint-huibrechts-lille/renovatie",
      badge: "Totaalpakket"
    },
    {
      name: "Systematisch Onderhoud",
      description: "Preventief onderhoud en onderhoudscontracten voor woningen in Sint-Huibrechts-Lille",
      icon: "🔧", 
      color: "bg-green-600",
      url: "/sint-huibrechts-lille/onderhoud",
      badge: "Preventief"
    }
  ];

  return (
    <>
      <Helmet>
        <title>TBGS Sint-Huibrechts-Lille | Daklekkage, Renovatie & Onderhoud Specialisten België</title>
        <meta name="description" content="🏆 TBGS Sint-Huibrechts-Lille - Uw lokale bouwspecialisten in Sint-Huibrechts-Lille, België. ✓ 24/7 daklekkage spoeddienst ✓ Complete renovaties ✓ Systematisch onderhoud ✓ 25+ jaar ervaring ✓ Belgische specialisten" />
        <meta name="keywords" content="dakdekker Sint-Huibrechts-Lille België, renovatie Sint-Huibrechts-Lille, onderhoud Sint-Huibrechts-Lille, daklekkage Sint-Huibrechts-Lille, aannemer België" />
        <link rel="canonical" href="https://www.tbgs.nl/sint-huibrechts-lille" />
        
        <meta property="og:title" content="TBGS Sint-Huibrechts-Lille | Lokale Bouwspecialisten België" />
        <meta property="og:description" content="Lokale daklekkage service, renovaties en onderhoud in Sint-Huibrechts-Lille, België. 25+ jaar ervaring." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tbgs.nl/sint-huibrechts-lille" />
        <meta property="og:locale" content="nl_BE" />
        
        <meta name="geo.region" content="BE-LI" />
        <meta name="geo.placename" content="Sint-Huibrechts-Lille" />
        <meta name="geo.position" content="51.2000;5.2500" />
        <meta name="ICBM" content="51.2000,5.2500" />
      </Helmet>

      <LocalSEOSchema 
        businessData={{
          name: businessName,
          address: {
            addressLocality: "Sint-Huibrechts-Lille",
            addressRegion: "Limburg", 
            addressCountry: "België"
          },
          telephone: whatsappNumber,
          geo: {
            latitude: 51.2000,
            longitude: 5.2500
          },
          areaServed: ["Sint-Huibrechts-Lille", "Limburg", "België"]
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Sint-Huibrechts-Lille, Limburg • België
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  TBGS Specialisten
                </span>
                <span className="block text-tbgs-navy mt-2">Sint-Huibrechts-Lille</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                <strong>TBGS Sint-Huibrechts-Lille</strong> - Uw lokale specialist voor <em>daklekkage spoeddienst</em>, 
                <em>complete renovaties</em> en <em>systematisch onderhoud</em> in Sint-Huibrechts-Lille en omgeving. 
                Met <strong>25+ jaar ervaring</strong> leveren wij <strong>betrouwbare Belgische kwaliteit</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hallo TBGS, ik zoek een lokale specialist in Sint-Huibrechts-Lille voor mijn bouwproject`, '_blank')}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
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
                  <div className="text-3xl font-bold text-purple-600">25+</div>
                  <div className="text-sm text-gray-600">Jaar Ervaring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">4.9★</div>
                  <div className="text-sm text-gray-600">Klantwaardering</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">100%</div>
                  <div className="text-sm text-gray-600">Lokale Service</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Onze Diensten in Sint-Huibrechts-Lille
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Van spoeddienst tot geplande projecten - wij zijn uw lokale partner in België
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link href={service.url} key={index}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300 cursor-pointer group h-full">
                    <div className="text-center">
                      <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl text-white group-hover:scale-110 transition-transform duration-200`}>
                        {service.icon}
                      </div>
                      
                      <Badge className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs mb-4">
                        {service.badge}
                      </Badge>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      
                      <div className="mt-6 flex items-center justify-center text-purple-600 font-medium group-hover:text-purple-700">
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

        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar om te Starten?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Neem vandaag nog contact op voor een gratis offerte of spoedinterventie in Sint-Huibrechts-Lille
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hallo TBGS, ik wil graag een offerte in Sint-Huibrechts-Lille`, '_blank')}
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp Contact
              </Button>
              <Button 
                onClick={onOpenContactModal}
                className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-8 py-4 text-lg font-semibold rounded-xl"
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