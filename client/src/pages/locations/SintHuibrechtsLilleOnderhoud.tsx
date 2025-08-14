import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Clock, Star, ArrowRight, Settings, Shield, Calendar, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ContactModal from "@/components/ContactModal";
import LocalSEOSchema from "@/components/LocalSEOSchema";

interface SintHuibrechtsLilleOnderhoudProps {
  onOpenContactModal: () => void;
}

export default function SintHuibrechtsLilleOnderhoud({ onOpenContactModal }: SintHuibrechtsLilleOnderhoudProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const maintenanceServices = [
    {
      title: "Dakonderhoud & Gootreiniging",
      description: "Preventief dakonderhoud en professionele gootreiniging voor optimale waterafvoer",
      icon: Settings,
      features: ["Dakpannen controle", "Gootreiniging", "Lekkage preventie"]
    },
    {
      title: "Schoorsteenonderhoud",
      description: "Professionele schoorsteenreiniging en veiligheidscontroles volgens Belgische normen",
      icon: Shield,
      features: ["Schoorsteenveeg", "Rookkanaal controle", "Veiligheidscertificaat"]
    },
    {
      title: "Onderhoudscontracten", 
      description: "Jaarlijkse onderhoudscontracten voor zorgeloos eigendom en kostenbeheersing",
      icon: Calendar,
      features: ["Jaarplanning", "Preventieve zorg", "Kostenzekerheid"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Onderhoud Sint-Huibrechts-Lille | TBGS Specialisten | Preventief Bouwonderhoud België</title>
        <meta name="description" content="Professioneel bouwonderhoud in Sint-Huibrechts-Lille ✓ Dakonderhoud ✓ Gootreiniging ✓ Schoorsteenonderhoud ✓ Preventief onderhoud ✓ Onderhoudscontracten ✓ Belgische specialisten" />
        <meta name="keywords" content="onderhoud Sint-Huibrechts-Lille, dakonderhoud, gootreiniging, schoorsteenonderhoud, bouwonderhoud België, preventief onderhoud" />
        <link rel="canonical" href="https://www.tbgs.nl/sint-huibrechts-lille/onderhoud" />
        
        <meta property="og:title" content="Onderhoud Sint-Huibrechts-Lille | TBGS Specialisten" />
        <meta property="og:description" content="Professioneel bouwonderhoud in Sint-Huibrechts-Lille. Dakonderhoud, gootreiniging en preventief onderhoud door Belgische specialisten." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tbgs.nl/sint-huibrechts-lille/onderhoud" />
        <meta property="og:locale" content="nl_BE" />
        
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
        <Header onOpenContactModal={onOpenContactModal} />
        
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Sint-Huibrechts-Lille, Limburg België
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Preventief Onderhoud
                </span>
                <span className="block text-tbgs-navy mt-2">Sint-Huibrechts-Lille</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                <strong>TBGS Onderhoudsspecialisten Sint-Huibrechts-Lille</strong> - <em>Preventief onderhoud</em> 
                voorkomt kostbare reparaties. Van <em>dakonderhoud</em> tot <em>schoorsteenreiniging</em>, 
                wij zorgen voor <strong>optimale bescherming</strong> van uw eigendom.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  onClick={() => window.open(`https://wa.me/31614595142?text=Hallo TBGS, ik wil graag een onderhoudscontract in Sint-Huibrechts-Lille`, '_blank')}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Onderhoudscontract
                </Button>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  Jaarlijks Onderhoudsschema
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Onderhoudsdiensten Sint-Huibrechts-Lille
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Regelmatig onderhoud bespaart geld en voorkomt onverwachte reparaties
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {maintenanceServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                    </div>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
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

        <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Preventief Onderhoud
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Voorkom kostbare reparaties met regelmatig onderhoud. Plan vandaag uw eerste inspectie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open(`https://wa.me/31614595142?text=Hallo TBGS, ik wil starten met preventief onderhoud in Sint-Huibrechts-Lille`, '_blank')}
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Direct Contact
              </Button>
              <Button 
                onClick={onOpenContactModal}
                className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Gratis Onderhoudsadvies
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