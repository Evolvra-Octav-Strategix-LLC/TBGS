import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Clock, Star, ArrowRight, Home, Wrench, Droplets, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ContactModal from "@/components/ContactModal";
import LocalSEOSchema from "@/components/LocalSEOSchema";

interface SintHuibrechtsLilleRenovatieProps {
  onOpenContactModal: () => void;
}

export default function SintHuibrechtsLilleRenovatie({ onOpenContactModal }: SintHuibrechtsLilleRenovatieProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const renovationServices = [
    {
      title: "Complete Woningrenovatie",
      description: "Totaalrenovaties van traditionele Limburgse woningen met respect voor architecturale eigenschappen",
      icon: Home,
      features: ["Structurele aanpassingen", "Historische elementen behoud", "Moderne comfort integratie"]
    },
    {
      title: "Badkamer & Keuken Renovatie", 
      description: "Moderne badkamer- en keukenrenovaties met hoogwaardige materialen en tijdloze design",
      icon: Droplets,
      features: ["Sanitair installaties", "Tegелwerk", "Moderne apparatuur"]
    },
    {
      title: "Energetische Renovatie",
      description: "Energiebesparende renovaties voor betere isolatie en lagere energiekosten",
      icon: Shield,
      features: ["Gevelisolatie", "Dakisolatie", "HR++ beglazing"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Renovatie Sint-Huibrechts-Lille | TBGS Specialisten | Complete Woningrenovatie België</title>
        <meta name="description" content="Professionele renovatie in Sint-Huibrechts-Lille ✓ Complete woningrenovatie ✓ Badkamer & keuken renovatie ✓ Energetische renovatie ✓ 25+ jaar ervaring ✓ Belgische specialisten ✓ Offerte op maat" />
        <meta name="keywords" content="renovatie Sint-Huibrechts-Lille, woningrenovatie, badkamerrenovatie, keukenrenovatie, energetische renovatie, aannemer renovatie België" />
        <link rel="canonical" href="https://www.tbgs.nl/sint-huibrechts-lille/renovatie" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Renovatie Sint-Huibrechts-Lille | TBGS Specialisten" />
        <meta property="og:description" content="Professionele renovatie in Sint-Huibrechts-Lille. Complete woningrenovaties en energetische renovaties door Belgische specialisten." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tbgs.nl/sint-huibrechts-lille/renovatie" />
        <meta property="og:locale" content="nl_BE" />
        
        {/* Additional tags */}
        <meta name="geo.region" content="BE-LI" />
        <meta name="geo.placename" content="Sint-Huibrechts-Lille" />
        <meta name="geo.position" content="51.2000;5.2500" />
        <meta name="ICBM" content="51.2000,5.2500" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="TBGS Totaal Bouw Groep Specialisten" />
      </Helmet>

      <LocalSEOSchema 
        businessData={{
          name: "TBGS Totaal Bouw Groep Specialisten",
          address: {
            addressLocality: "Sint-Huibrechts-Lille",
            addressRegion: "Limburg",
            addressCountry: "België"
          },
          telephone: "+31614595142",
          geo: {
            latitude: 51.2000,
            longitude: 5.2500
          },
          areaServed: ["Sint-Huibrechts-Lille", "Limburg", "België"]
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
        <Header onOpenContactModal={onOpenContactModal} />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Sint-Huibrechts-Lille, Limburg België
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Complete Renovatie
                </span>
                <span className="block text-tbgs-navy mt-2">Sint-Huibrechts-Lille</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                <strong>TBGS Renovatie Specialisten Sint-Huibrechts-Lille</strong> - Van <em>complete woningrenovatie</em> 
                tot <em>badkamer en keuken makeovers</em>. Met <strong>25+ jaar ervaring</strong> transformeren wij uw woning 
                tot een <strong>modern en comfortabel thuis</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  onClick={() => window.open(`https://wa.me/31614595142?text=Hallo TBGS, ik wil graag een renovatie offerte in Sint-Huibrechts-Lille`, '_blank')}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Renovatie Offerte
                </Button>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  Binnen 24u Reactie Gegarandeerd
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                renovatie diensten Sint-Huibrechts-Lille
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Van kleine aanpassingen tot complete transformaties - wij realiseren uw droomrenovatie
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {renovationServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                    </div>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Uw Renovatie Project
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Klaar voor een complete transformatie? Contacteer onze renovatie specialisten vandaag nog
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open(`https://wa.me/31614595142?text=Hallo TBGS, ik wil starten met renovatie in Sint-Huibrechts-Lille`, '_blank')}
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Direct Contact
              </Button>
              <Button 
                onClick={onOpenContactModal}
                className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Gratis Renovatie Advies
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