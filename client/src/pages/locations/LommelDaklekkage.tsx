import { Phone, Clock, MapPin, CheckCircle, Star, Shield, Zap, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { useState } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import LocalSEOSchema from "@/components/LocalSEOSchema";

interface LommelDaklekkageProps {
  onOpenContactModal: () => void;
}

export default function LommelDaklekkage({ onOpenContactModal }: LommelDaklekkageProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const whatsappUrl = "https://wa.me/31614595142?text=Hallo,%20ik%20heb%20een%20daklekkage%20in%20Lommel";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Helmet>
        <title>Daklekkage Specialist Lommel | TBGS | 24/7 Spoedhulp België</title>
        <meta name="description" content="Daklekkage in Lommel, België? TBGS biedt 24/7 spoedhulp voor daklekkages. Direct ter plaatse voor reparatie en permanente oplossing in België." />
        <meta name="keywords" content="daklekkage Lommel België, dak lekt België, spoedservice daklekkage, dakreparatie België, TBGS Lommel, 24/7 dakservice" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Daklekkage Specialist Lommel | TBGS | 24/7 Spoedhulp België" />
        <meta property="og:description" content="Daklekkage in Lommel, België? TBGS biedt 24/7 spoedhulp voor daklekkages. Direct ter plaatse voor reparatie." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tbgs.nl/be/lommel/daklekkage" />
        <meta property="og:image" content="https://tbgs.nl/images/tbgs-daklekkage-lommel.jpg" />
        <meta property="og:locale" content="nl_BE" />
        <meta name="geo.region" content="BE-LI" />
        <meta name="geo.placename" content="Lommel" />
        <meta name="geo.position" content="51.2322;5.3131" />
        <meta name="ICBM" content="51.2322, 5.3131" />
        <link rel="canonical" href="https://tbgs.nl/be/lommel/daklekkage" />
        <link rel="alternate" hreflang="nl-nl" href="https://tbgs.nl/nl/lommel/daklekkage" />
        <meta name="author" content="TBGS" />
        <meta name="copyright" content="TBGS 2024" />
        <meta name="language" content="Dutch" />
      </Helmet>

      <LocalSEOSchema 
        businessData={{
          name: "TBGS Daklekkage Specialist Lommel",
          address: {
            addressLocality: "Lommel",
            addressRegion: "Limburg", 
            postalCode: "3920",
            addressCountry: "BE"
          },
          telephone: "+31614595142",
          email: "info@tbgs.nl",
          website: "https://tbgs.nl",
          openingHours: ["Mo-Su 00:00-23:59"],
          geo: { latitude: 51.2322, longitude: 5.3131 },
          areaServed: ["Lommel", "Neerpelt", "Overpelt"],
          rating: { ratingValue: 4.9, reviewCount: 171 }
        }}
      />
      
      <Header onOpenContactModal={onOpenContactModal} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <AlertTriangle className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">24/7 Spoedservice Lommel, België</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-red-200">Daklekkage</span> in Lommel?
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 leading-relaxed">
              Nederlandse vakspecialisten binnen 30 minuten ter plaatse in België. 
              Van tijdelijke noodreparatie tot permanente daklekkage oplossing in Lommel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-white text-red-700 hover:bg-red-50 font-semibold px-8 py-4 text-lg shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Direct Spoedservice: 06-14595142
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="border-white text-white hover:bg-white hover:text-red-700 font-semibold px-8 py-4 text-lg"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  WhatsApp Spoedmelding
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Daklekkage Service Lommel, België
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              24/7 bereikbaar voor alle daklekkages in Lommel en omgeving
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-red-100 hover:border-red-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-red-800">Spoedservice België</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Binnen 30 minuten ter plaatse voor acute daklekkages in Lommel, België.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />24/7 beschikbaar</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Grensoverschrijdende service</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Noodreparatie</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-100 hover:border-red-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-red-800">Lekkage Opsporing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professionele lekkage opsporing met moderne detectieapparatuur in België.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Thermografie camera</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Vochtmetingen</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Gratis inspectie</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-100 hover:border-red-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-red-800">Permanente Reparatie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Duurzame daklekkage reparatie met garantie volgens Belgische normen.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />10 jaar garantie</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Belgische standaarden</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Nederlandse vakmanschap</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Waarom TBGS voor Daklekkage in Lommel?
              </h2>
              <p className="text-xl text-gray-600">
                Nederlandse kwaliteit, Belgische service en jarenlange ervaring
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Snelste Service</h3>
                    <p className="text-gray-600">
                      Binnen 30 minuten ter plaatse in Lommel voor acute daklekkages.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Grensoverschrijdende Specialist</h3>
                    <p className="text-gray-600">
                      Nederlandse vakmanschap met kennis van Belgische bouwstandaarden en regelgeving.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">10 Jaar Garantie</h3>
                    <p className="text-gray-600">
                      Volledige garantie op al onze daklekkage reparaties en WA-verzekering voor België.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparante Tarieven</h3>
                    <p className="text-gray-600">
                      Duidelijke tarieven zonder verrassingen. Ook in het weekend en 's avonds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Daklekkage Service in Lommel en Omgeving
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Wij bedienen Lommel en directe omgeving in België voor alle daklekkages
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <MapPin className="w-8 h-8 text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Lommel Centrum</h3>
              <p className="text-sm text-gray-600">24/7 daklekkage service</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <MapPin className="w-8 h-8 text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Neerpelt</h3>
              <p className="text-sm text-gray-600">Spoedservice & reparatie</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <MapPin className="w-8 h-8 text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Overpelt</h3>
              <p className="text-sm text-gray-600">Complete daklekkage oplossing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Daklekkage in Lommel? Bel Direct!
          </h2>
          <p className="text-xl mb-8 text-red-100">
            24/7 bereikbaar voor spoedservice • Binnen 30 minuten ter plaatse in België
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-white text-red-700 hover:bg-red-50 font-semibold px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Bel Nu: 06-14595142
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="border-white text-white hover:bg-white hover:text-red-700 font-semibold px-8 py-4"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp Spoedmelding
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}