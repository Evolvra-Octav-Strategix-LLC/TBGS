import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Clock, AlertTriangle, Zap, Shield, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ContactModal from "@/components/ContactModal";
import LocalSEOSchema from "@/components/LocalSEOSchema";

interface OverpeltDaklekkageProps {
  onOpenContactModal: () => void;
}

export default function OverpeltDaklekkage({ onOpenContactModal }: OverpeltDaklekkageProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const emergencyServices = [
    {
      title: "Directe Lekstop",
      description: "Onmiddellijke noodmaatregelen om verdere waterschade te voorkomen",
      icon: Zap,
      urgency: "Binnen 1u"
    },
    {
      title: "Waterschade Preventie",
      description: "Professionele bescherming van interieur en bezittingen tegen wateroverlast",
      icon: Shield,  
      urgency: "Binnen 2u"
    },
    {
      title: "Permanente Reparatie",
      description: "Duurzame daklekkage reparatie met garantie voor langdurige bescherming",
      icon: Droplets,
      urgency: "Zelfde dag"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Daklekkage Overpelt | TBGS Specialisten | 24/7 Daklekkage Reparatie België</title>
        <meta name="description" content="Daklekkage in Overpelt? ✓ 24/7 spoedreparatie ✓ Ervaren dakspecialisten ✓ Directe oplossing ✓ Belgische kwaliteit ✓ Gratis inspectie ✓ Binnen 2 uur ter plaatse" />
        <meta name="keywords" content="daklekkage Overpelt, lekkend dak, daklekkage reparatie, dakdekker Overpelt, spoeddienst daklekkage België, dak lekt Overpelt" />
        <link rel="canonical" href="https://www.tbgs.nl/overpelt/daklekkage" />
        
        <meta property="og:title" content="Daklekkage Overpelt | TBGS Specialisten" />
        <meta property="og:description" content="Daklekkage in Overpelt? 24/7 spoedreparatie door ervaren specialisten. Binnen 2 uur ter plaatse." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tbgs.nl/overpelt/daklekkage" />
        <meta property="og:locale" content="nl_BE" />
        
        <meta name="geo.region" content="BE-LI" />
        <meta name="geo.placename" content="Overpelt" />
        <meta name="geo.position" content="51.1967;5.4156" />
        <meta name="ICBM" content="51.1967,5.4156" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="TBGS Totaal Bouw Groep Specialisten" />
      </Helmet>

      <LocalSEOSchema 
        businessData={{
          name: "TBGS Totaal Bouw Groep Specialisten",
          address: {
            addressLocality: "Overpelt",
            addressRegion: "Limburg",
            addressCountry: "België"
          },
          telephone: "+31614595142",
          geo: {
            latitude: 51.1967,
            longitude: 5.4156
          },
          areaServed: ["Overpelt", "Limburg", "België"]
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50/30">
        <Header onOpenContactModal={onOpenContactModal} />
        
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <AlertTriangle className="w-4 h-4" />
                Overpelt, Limburg België • 24/7 Spoeddienst
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  Daklekkage Spoeddienst
                </span>
                <span className="block text-tbgs-navy mt-2">Overpelt</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                <strong>Daklekkage in Overpelt?</strong> Geen paniek! Onze <em>24/7 spoeddienst</em> 
                is <strong>binnen 2 uur ter plaatse</strong> voor <em>directe lekstop</em> en 
                <em>permanente reparatie</em>. <strong>25+ jaar ervaring</strong> in noodreparaties.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  onClick={() => window.open(`https://wa.me/31614595142?text=SPOEDDIENST! Daklekkage in Overpelt - kom zo snel mogelijk`, '_blank')}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  SPOEDDIENST BELLEN
                </Button>
                <div className="flex items-center gap-2 text-red-600 font-semibold">
                  <Clock className="w-5 h-5" />
                  Binnen 2u ter plaatse gegarandeerd
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Spoeddienst Procedure Overpelt
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Snel en effectief handelen bij daklekkage voorkomt grote waterschade
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {emergencyServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="w-8 h-8 text-red-600" />
                      </div>
                      
                      <Badge className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs mb-4">
                        {service.urgency}
                      </Badge>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Daklekkage Noodsituatie?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Elke minuut telt! Bel nu voor directe hulp en voorkom grote waterschade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open(`https://wa.me/31614595142?text=NOODGEVAL! Daklekkage in Overpelt - Kom direct!`, '_blank')}
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                24/7 NOODDIENST
              </Button>
              <Button 
                onClick={onOpenContactModal}
                className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Gratis Dakinspectie
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