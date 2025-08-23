import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Clock, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ContactModal from "@/components/ContactModal";
import { Link } from "wouter";
import LocalSEOSchema from "@/components/LocalSEOSchema";

interface LocationGeldropProps {
  onOpenContactModal: () => void;
}

export default function LocationGeldrop({ onOpenContactModal }: LocationGeldropProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const whatsappNumber = "+31614595142";
  const businessName = "TBGS Totaal Bouw Groep Specialisten";

  const services = [
    {
      name: "Daklekkage",
      description: "24/7 spoedservice voor daklekkages en noodreparaties",
      icon: "💧",
      color: "bg-red-500",
      url: "/geldrop/daklekkage"
    },
    {
      name: "Renovatie", 
      description: "Complete woningrenovaties en verbouwingsprojecten",
      icon: "🏠",
      color: "bg-orange-500",
      url: "/geldrop/renovatie"
    },
    {
      name: "Onderhoud",
      description: "Preventief onderhoud en periodieke controles",
      icon: "🔧", 
      color: "bg-green-500",
      url: "/geldrop/onderhoud"
    }
  ];

  return (
    <>
      <Helmet>
        <title>TBGS Geldrop | Daklekkage, Renovatie & Onderhoud Specialisten</title>
        <meta name="description" content="TBGS Geldrop ✓ 24/7 daklekkage service ✓ Complete renovaties ✓ Preventief onderhoud ✓ Lokale specialisten ✓ 25+ jaar ervaring ✓ Gratis offerte" />
        <meta name="keywords" content="TBGS Geldrop, dakdekker Geldrop, renovatie Geldrop, onderhoud Geldrop, daklekkage Geldrop" />
        <link rel="canonical" href="https://www.tbgs.nl/geldrop" />
        
        <meta property="og:title" content="TBGS Geldrop | Daklekkage, Renovatie & Onderhoud Specialisten" />
        <meta property="og:description" content="TBGS Geldrop - Uw lokale specialist voor daklekkage, renovatie en onderhoud. 25+ jaar ervaring." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tbgs.nl/geldrop" />
        <meta property="og:locale" content="nl_NL" />
        
        <meta name="geo.region" content="NL-NB" />
        <meta name="geo.placename" content="Geldrop" />
        <meta name="geo.position" content="51.4225;5.5583" />
        <meta name="ICBM" content="51.4225,5.5583" />
      </Helmet>

      <LocalSEOSchema 
        businessData={{
          name: businessName,
          address: {
            addressLocality: "Geldrop",
            addressRegion: "Noord-Brabant", 
            addressCountry: "Nederland"
          },
          telephone: whatsappNumber,
          geo: {
            latitude: 51.4225,
            longitude: 5.5583
          },
          areaServed: ["Geldrop", "Noord-Brabant", "Nederland"]
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
                Geldrop, Noord-Brabant
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                TBGS Specialisten 
                <span className="block text-tbgs-navy mt-2">Geldrop</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Uw lokale specialist voor daklekkage, renovatie en onderhoud in Geldrop. 
                Met 25+ jaar ervaring staan wij 24/7 voor u klaar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hallo, ik zoek een specialist in Geldrop`, '_blank')}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp Contact
                </Button>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  24/7 Spoeddienst Beschikbaar
                </div>
              </div>

              {/* Stats */}
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
                  <div className="text-sm text-gray-600">Tevredenheid</div>
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
                Onze diensten in Geldrop
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Van spoeddienst tot geplande projecten - wij zijn uw betrouwbare partner
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
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      
                      <Badge className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                        Daklekkage
                      </Badge>
                      <Badge className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full ml-2">
                        Renovatie  
                      </Badge>
                      <Badge className="bg-green-100 text-green-800 px-4 py-2 rounded-full ml-2 mt-2">
                        Onderhoud
                      </Badge>
                      
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
              Waarom TBGS in Geldrop?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-3">Lokale Kennis</h3>
                <p className="text-gray-600">Grondige kennis van Geldropse bouwstijlen en lokale regelgeving</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-3">Snelle Service</h3>
                <p className="text-gray-600">Korte reistijd betekent snellere hulp bij noodgevallen</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-3">Persoonlijk Contact</h3>
                <p className="text-gray-600">Directe communicatie met vaste contactpersoon</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-3">Garantie</h3>
                <p className="text-gray-600">Uitgebreide garantie op al onze werkzaamheden</p>
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
              Neem vandaag nog contact op voor een gratis offerte of spoedinterventie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hallo, ik wil graag een offerte in Geldrop`, '_blank')}
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