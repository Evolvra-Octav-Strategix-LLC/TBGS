import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Clock, Star, ArrowRight, CheckCircle, Wrench, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import ContactModal from "@/components/ContactModal";

export default function HamontOnderhoud() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const whatsappNumber = "+31614595142";
  const businessName = "TBGS Totaal Bouw Groep Specialisten";
  const currentYear = new Date().getFullYear();

  const services = [
    "Dakonderhoud en inspecties",
    "Gootreiniging en reparatie", 
    "Schoorsteenonderhoud",
    "Gevelbeheer en reiniging",
    "Dakgoot vervanging",
    "Preventief bouwonderhoud",
    "Vochtproblemen oplossen",
    "Kleine reparaties",
    "Periodieke controles",
    "Onderhoudsabonnementen"
  ];

  const whyChooseUs = [
    "Preventief onderhoud specialist",
    "Belgische onderhoudsstandaarden",
    "Ervaren lokale vakmensen",
    "Transparante onderhoudsrapportage",
    "Flexibele onderhoudscontracten",
    "Snelle interventie bij storingen"
  ];

  return (
    <>
      <Helmet>
        <title>Onderhoud Hamont | TBGS Specialisten | Preventief Bouwonderhoud</title>
        <meta name="description" content="Professioneel bouwonderhoud in Hamont ✓ Dakonderhoud ✓ Gootreiniging ✓ Schoorsteenonderhoud ✓ Preventief onderhoud ✓ Onderhoudscontracten ✓ Lokale specialisten" />
        <meta name="keywords" content="onderhoud Hamont, dakonderhoud, gootreiniging, schoorsteenonderhoud, bouwonderhoud, preventief onderhoud Hamont" />
        <link rel="canonical" href="https://www.tbgs.nl/hamont/onderhoud" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Onderhoud Hamont | TBGS Specialisten" />
        <meta property="og:description" content="Professioneel bouwonderhoud in Hamont. Dakonderhoud, gootreiniging en preventief onderhoud door lokale specialisten." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tbgs.nl/hamont/onderhoud" />
        <meta property="og:locale" content="nl_BE" />
        
        {/* Additional tags */}
        <meta name="geo.region" content="BE-LI" />
        <meta name="geo.placename" content="Hamont" />
        <meta name="geo.position" content="51.2797;5.2794" />
        <meta name="ICBM" content="51.2797,5.2794" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="TBGS Totaal Bouw Groep Specialisten" />
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

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50/30">
        <Header onOpenContactModal={() => setIsContactModalOpen(true)} />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-green-800/5"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Hamont, België
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Onderhoud Specialisten
                <span className="block text-green-600 text-2xl md:text-4xl lg:text-5xl mt-2">
                  Hamont
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Preventief bouwonderhoud en snelle reparaties in Hamont. Van dakonderhoud tot 
                gootreiniging - onze lokale specialisten zorgen voor optimaal onderhoud van uw eigendom.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button 
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hallo, ik wil graag informatie over onderhoud in Hamont`, '_blank')}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Direct WhatsApp Contact
                </Button>
                <div className="flex items-center gap-2 text-green-600 font-medium">
                  <Clock className="w-5 h-5" />
                  24/7 Spoeddienst Beschikbaar
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">25+</div>
                  <div className="text-sm text-gray-600">Jaar Ervaring</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">1000+</div>
                  <div className="text-sm text-gray-600">Onderhoudsbeurten</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">4.9★</div>
                  <div className="text-sm text-gray-600">Klantbeoordeling</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Tevredenheid</div>
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
                Onze Onderhoudsdiensten
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Complete onderhoudsoplossingen voor uw eigendom in Hamont
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:border-green-200 transition-all duration-200 hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{service}</h3>
                      <p className="text-gray-600 text-sm">Vakkundige uitvoering met kwaliteitsgarantie</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-green-100/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Waarom Kiezen voor TBGS?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Uw betrouwbare onderhoudspartner in Hamont
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
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
              Bouwonderhoud in Hamont en Omgeving
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Het karakteristieke klimaat van Hamont vereist regelmatig en deskundig bouwonderhoud. 
                Onze specialisten kennen de lokale uitdagingen en bieden preventieve oplossingen die 
                de levensduur van uw eigendom verlengen.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-green-600" />
                    Onze Specialiteiten
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Preventief dakonderhoud</li>
                    <li>• Periodieke gootinspecties</li>
                    <li>• Schoorsteencontroles</li>
                    <li>• Vochtproblemen preventie</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-green-600" />
                    Voordelen
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Lokale beschikbaarheid</li>
                    <li>• Onderhoudscontracten mogelijk</li>
                    <li>• Belgische kwaliteitsstandaarden</li>
                    <li>• Snelle responstijd</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Plan Uw Onderhoud Vandaag
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Gratis inspectie en onderhoudsadvies voor uw eigendom in Hamont
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hallo, ik wil graag een onderhoudscontrole in Hamont`, '_blank')}
                className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Gratis Inspectie Aanvragen
              </Button>
              <Button 
                onClick={() => window.open('tel:+31614595142', '_blank')}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Direct Bellen
              </Button>
            </div>
            <p className="mt-6 text-green-100">
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