import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Clock, Star, ArrowRight, CheckCircle, Droplets, Umbrella, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import ContactModal from "@/components/ContactModal";

export default function HamontDaklekkage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const whatsappNumber = "+31614595142";
  const businessName = "TBGS Totaal Bouw Groep Specialisten";
  const currentYear = new Date().getFullYear();

  const services = [
    "Acute daklekkage reparatie",
    "Dakbedekking vernieuwing", 
    "Dakgoot reparatie en vervanging",
    "Regenpijp onderhoud",
    "Dakisolatie verbetering",
    "Dakkapel waterdichting",
    "Schoorsteen afdichting",
    "Mansarde dakwerken",
    "Pannendak reparaties",
    "Plat dak waterafvoer"
  ];

  const whyChooseUs = [
    "24/7 spoedreparatie service",
    "Belgische dakspecialisten",
    "Waterbestendig materiaalgebruik",
    "Lokale weersomstandigheden kennis",
    "Uitgebreide garantievoorwaarden",
    "Snelle kostenloze inspecties"
  ];

  return (
    <>
      <Helmet>
        <title>Daklekkage Hamont | TBGS Specialisten | 24/7 Daklekkage Reparatie</title>
        <meta name="description" content="Daklekkage in Hamont? ✓ 24/7 spoedreparatie ✓ Ervaren dakspecialisten ✓ Directe oplossing ✓ Belgische kwaliteit ✓ Gratis inspectie ✓ Binnen 2 uur ter plaatse" />
        <meta name="keywords" content="daklekkage Hamont, lekkend dak, daklekkage reparatie, dakdekker Hamont, spoeddienst daklekkage, dak lekt Hamont" />
        <link rel="canonical" href="https://www.tbgs.nl/hamont/daklekkage" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Daklekkage Hamont | TBGS Specialisten" />
        <meta property="og:description" content="Daklekkage in Hamont? 24/7 spoedreparatie door ervaren specialisten. Binnen 2 uur ter plaatse." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tbgs.nl/hamont/daklekkage" />
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

      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50/30">
        <Header onOpenContactModal={() => setIsContactModalOpen(true)} />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-red-800/5"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Hamont, België
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Daklekkage Specialisten
                <span className="block text-red-600 text-2xl md:text-4xl lg:text-5xl mt-2">
                  Hamont
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Daklekkage in Hamont? Onze ervaren specialisten zijn 24/7 beschikbaar voor snelle 
                en professionele daklekkage reparaties. Binnen 2 uur ter plaatse!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button 
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Spoed! Daklekkage in Hamont - kunnen jullie komen kijken?`, '_blank')}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Spoed WhatsApp
                </Button>
                <div className="flex items-center gap-2 text-red-600 font-medium">
                  <Clock className="w-5 h-5" />
                  Binnen 2 uur ter plaatse
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">24/7</div>
                  <div className="text-sm text-gray-600">Spoeddienst</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">2h</div>
                  <div className="text-sm text-gray-600">Reactietijd</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">100%</div>
                  <div className="text-sm text-gray-600">Droog Resultaat</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">15+</div>
                  <div className="text-sm text-gray-600">Jaar Ervaring</div>
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
                Onze daklekkage diensten
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Snelle en duurzame oplossingen voor al uw dakproblemen in Hamont
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-red-100 hover:border-red-200 transition-all duration-200 hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-2 rounded-lg">
                      <Droplets className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{service}</h3>
                      <p className="text-gray-600 text-sm">Professionele uitvoering met langdurige garantie</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-red-100/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Waarom Kiezen voor TBGS?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Uw betrouwbare daklekkage specialist in Hamont
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
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
              Daklekkage Expertise in Hamont
            </h2>
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Hamont's unieke ligging in Limburg brengt specifieke uitdagingen met zich mee voor 
                dakconstructies. Onze specialisten kennen de lokale bouwstijlen en klimatologische 
                omstandigheden die daklekkages kunnen veroorzaken.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Umbrella className="w-5 h-5 text-red-600" />
                    Lokale Expertise
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Traditionele Limburgse dakconstructies</li>
                    <li>• Moderne dakbedekkingsmaterialen</li>
                    <li>• Klimaatbestendige oplossingen</li>
                    <li>• Historische panden ervaring</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-red-600" />
                    Snelle Service
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 24/7 bereikbaarheid</li>
                    <li>• Lokale materiaalvoorraad</li>
                    <li>• Directe interventie mogelijk</li>
                    <li>• Meertalige communicatie</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Daklekkage? Bel Direct!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Elke minuut telt bij daklekkage. Onze specialisten staan 24/7 voor u klaar in Hamont.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Spoed! Daklekkage in Hamont`, '_blank')}
                className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Direct WhatsApp
              </Button>
              <Button 
                onClick={() => window.open('tel:+31614595142', '_blank')}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Bel Nu: +31 6 14595142
              </Button>
            </div>
            <p className="mt-6 text-red-100">
              <Clock className="w-4 h-4 inline mr-1" />
              24/7 beschikbaar • Binnen 2 uur ter plaatse in Hamont
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