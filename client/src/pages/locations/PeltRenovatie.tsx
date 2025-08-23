import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Clock, Star, ArrowRight, CheckCircle, Wrench, Home, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import ContactModal from "@/components/ContactModal";

export default function PeltRenovatie() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const whatsappNumber = "+31614595142";
  const businessName = "TBGS Totaal Bouw Groep Specialisten";
  const currentYear = new Date().getFullYear();

  const services = [
    "Badkamerrenovatie",
    "Keukenrenovatie", 
    "Zolderrenovatie",
    "Volledige woningrenovatie",
    "Moderne woningen aanpassing",
    "Energetische renovatie",
    "Fundering versterking",
    "Gevelrenovatie",
    "Dakkapel plaatsing",
    "Interieur verbouwing"
  ];

  const whyChooseUs = [
    "25+ jaar renovatie ervaring",
    "Moderne architectuur specialisatie",
    "Belgische bouwreglementen kennis",
    "Energie-efficiënte oplossingen",
    "Transparante projectcommunicatie",
    "Lokale aannemers uit regio"
  ];

  return (
    <>
      <Helmet>
        <title>Renovatie Pelt | TBGS Specialisten | Moderne Woningrenovatie</title>
        <meta name="description" content="Professionele renovatie in Pelt ✓ Badkamer & keuken renovatie ✓ Moderne woningrenovatie ✓ 25+ jaar ervaring ✓ Belgische specialisten ✓ Offerte op maat" />
        <meta name="keywords" content="renovatie Pelt, woningrenovatie, badkamerrenovatie, keukenrenovatie, verbouwing Pelt, aannemer renovatie" />
        <link rel="canonical" href="https://www.tbgs.nl/pelt/renovatie" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Renovatie Pelt | TBGS Specialisten" />
        <meta property="og:description" content="Professionele renovatie in Pelt. Van badkamer tot volledige woningrenovatie. 25+ jaar ervaring. Offerte op maat." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tbgs.nl/pelt/renovatie" />
        <meta property="og:locale" content="nl_BE" />
        
        {/* Additional tags */}
        <meta name="geo.region" content="BE-LI" />
        <meta name="geo.placename" content="Pelt" />
        <meta name="geo.position" content="51.2264;5.2756" />
        <meta name="ICBM" content="51.2264,5.2756" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="TBGS Totaal Bouw Groep Specialisten" />
      </Helmet>

      <LocalSEOSchema 
        businessData={{
          name: businessName,
          address: {
            addressLocality: "Pelt",
            addressRegion: "Limburg",
            addressCountry: "België"
          },
          telephone: whatsappNumber,
          geo: {
            latitude: 51.2264,
            longitude: 5.2756
          },
          areaServed: ["Pelt", "Limburg", "België"]
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50/30">
        <Header onOpenContactModal={() => setIsContactModalOpen(true)} />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 to-orange-800/5"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Pelt, België
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Renovatie Specialisten
                <span className="block text-orange-600 text-2xl md:text-4xl lg:text-5xl mt-2">
                  Pelt
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Van badkamerrenovatie tot volledige woningtransformatie. Onze ervaren specialisten 
                realiseren uw droomrenovatie in Pelt met moderne technieken en Belgische vakmanschap.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button 
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hallo, ik wil graag informatie over renovatie in Pelt`, '_blank')}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Direct WhatsApp Contact
                </Button>
                <div className="flex items-center gap-2 text-orange-600 font-medium">
                  <Clock className="w-5 h-5" />
                  24/7 Spoeddienst Beschikbaar
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">25+</div>
                  <div className="text-sm text-gray-600">Jaar Ervaring</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">500+</div>
                  <div className="text-sm text-gray-600">Renovaties</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">4.9★</div>
                  <div className="text-sm text-gray-600">Klantbeoordeling</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">100%</div>
                  <div className="text-sm text-gray-600">Garantie</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Onze renovatie diensten
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Complete renovatieoplossingen voor uw woning in Pelt
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-orange-100 hover:border-orange-200 transition-all duration-200 hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <Home className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{service}</h3>
                      <p className="text-gray-600 text-sm">Vakkundige uitvoering met oog voor detail</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange-50 to-orange-100/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Waarom Kiezen voor TBGS?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Uw betrouwbare renovatiepartner in Pelt
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0" />
                    <span className="font-medium text-gray-900">{reason}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Info */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Renovatie in Pelt en Omgeving
            </h2>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Pelt, een gemeente die moderne ontwikkeling combineert met traditionele waarden, 
                biedt uitstekende mogelijkheden voor innovatieve renovatieprojecten. Onze 
                specialisten begrijpen de unieke architecturale diversiteit van deze regio.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-orange-600" />
                    Onze Specialiteiten
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Moderne woningen renovatie</li>
                    <li>• Energetische woningverbetering</li>
                    <li>• Traditionele en moderne combinaties</li>
                    <li>• Duurzame materiaaltechnieken</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-orange-600" />
                    Voordelen
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Belgische bouwvoorschriften kennis</li>
                    <li>• Lokale leveranciers netwerk</li>
                    <li>• Snelle responstijd in regio</li>
                    <li>• Meertalige communicatie</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Uw Renovatie Project Vandaag
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Gratis adviesgesprek en offerte op maat voor uw renovatie in Pelt
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hallo, ik wil graag een offerte voor renovatie in Pelt`, '_blank')}
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Gratis offerte Aanvragen
              </Button>
              <Button 
                onClick={() => window.open('tel:+31614595142', '_blank')}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Direct Bellen
              </Button>
            </div>
            <p className="mt-6 text-orange-100">
              <Clock className="w-4 h-4 inline mr-1" />
              24/7 spoeddienst • Binnen 24 uur reactie gegarandeerd
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