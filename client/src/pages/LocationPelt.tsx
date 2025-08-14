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

interface LocationPeltProps {
  onOpenContactModal: () => void;
}

export default function LocationPelt({ onOpenContactModal }: LocationPeltProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const whatsappNumber = "+31614595142";
  const businessName = "TBGS Totaal Bouw Groep Specialisten";

  const services = [
    {
      name: "Daklekkage Nooddienst",
      description: "24/7 directe daklekkage reparatie en wateroverlast preventie in Pelt",
      icon: "💧",
      color: "bg-red-600",
      url: "/pelt/daklekkage",
      response: "< 2 uur"
    },
    {
      name: "Moderne Renovatie", 
      description: "Hedendaagse woningrenovaties en stylishmodern makeovers in Pelt",
      icon: "🏠",
      color: "bg-orange-600",
      url: "/pelt/renovatie",
      response: "24 uur"
    },
    {
      name: "Systematisch Onderhoud",
      description: "Gestructureerde onderhoudsplanningen en preventieve zorgcontracten",
      icon: "🔧", 
      color: "bg-green-600",
      url: "/pelt/onderhoud", 
      response: "Gepland"
    }
  ];

  return (
    <>
      <Helmet>
        <title>TBGS Pelt | Daklekkage, Renovatie & Onderhoud Specialisten Limburg België</title>
        <meta name="description" content="🏆 TBGS Pelt - Moderne bouwspecialisten in Pelt, België. ✓ 24/7 daklekkage nooddienst ✓ Hedendaagse renovaties ✓ Systematisch onderhoud ✓ 25+ jaar expertise ✓ Lokale Limburgse specialisten ✓ Belgische vakmanschap" />
        <meta name="keywords" content="dakdekker Pelt België, renovatie Pelt Limburg, onderhoud Pelt, daklekkage Pelt 24/7, aannemer Pelt België, bouwbedrijf Limburg, badkamer renovatie Pelt, moderne woningrenovatie Pelt België" />
        <link rel="canonical" href="https://www.tbgs.nl/pelt" />
        
        <meta property="og:title" content="TBGS Pelt | Moderne Bouwspecialisten Limburg België" />
        <meta property="og:description" content="Moderne daklekkage service, renovaties en onderhoud in Pelt, België. Lokale specialisten met 25+ jaar ervaring." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tbgs.nl/pelt" />
        <meta property="og:locale" content="nl_BE" />
        
        <meta name="geo.region" content="BE-LI" />
        <meta name="geo.placename" content="Pelt" />
        <meta name="geo.position" content="51.2264;5.2756" />
        <meta name="ICBM" content="51.2264,5.2756" />
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <Header onOpenContactModal={onOpenContactModal} />
        
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Pelt, Limburg • België
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Moderne Bouwspecialisten
                </span>
                <span className="block text-tbgs-navy mt-2">Pelt</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                <strong>TBGS Pelt</strong> - Uw moderne specialist voor <em>daklekkage nooddienst</em>, 
                <em>hedendaagse renovaties</em> en <em>systematisch onderhoud</em> in Pelt en omgeving. 
                <strong>25+ jaar ervaring</strong> gecombineerd met <strong>moderne technieken</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hallo TBGS, ik zoek moderne bouwdiensten in Pelt`, '_blank')}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Direct Contact
                </Button>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  24/7 Nooddienst Pelt
                </div>
              </div>

              <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">25+</div>
                  <div className="text-sm text-gray-600">Jaar Expertise</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">4.9★</div>
                  <div className="text-sm text-gray-600">Klant Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Modern Vakwerk</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Moderne Diensten in Pelt
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Van nooddienst tot geplande projecten - moderne oplossingen voor al uw bouwbehoeften
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link href={service.url} key={index}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300 cursor-pointer group h-full">
                    <div className="text-center">
                      <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl text-white group-hover:scale-110 transition-transform duration-200`}>
                        {service.icon}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      
                      <div className="bg-green-50 rounded-xl p-3 mb-4">
                        <div className="text-sm text-gray-600">Reactietijd: <span className="font-bold text-green-600">{service.response}</span></div>
                      </div>
                      
                      <div className="mt-6 flex items-center justify-center text-green-600 font-medium group-hover:text-green-700">
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

        <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Waarom TBGS in Pelt?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-3">Moderne Technieken</h3>
                <p className="text-gray-600">Nieuwste bouw- en reparatietechnieken gecombineerd met bewezen methoden</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-3">Lokale Aanwezigheid</h3>
                <p className="text-gray-600">Snelle responstijden door lokale aanwezigheid in Pelt en omgeving</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-3">Persoonlijke Service</h3>
                <p className="text-gray-600">Directe communicatie en persoonlijke begeleiding van uw project</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-3">Kwaliteitsgarantie</h3>
                <p className="text-gray-600">Uitgebreide garanties op al onze moderne werkzaamheden</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar voor Moderne Kwaliteit?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Ontdek het verschil van moderne bouwdiensten in Pelt - contacteer ons vandaag
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hallo TBGS, ik wil graag een moderne offerte in Pelt`, '_blank')}
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp Contact
              </Button>
              <Button 
                onClick={onOpenContactModal}
                className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Gratis Moderne Offerte
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