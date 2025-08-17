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

interface NeerpeltDaklekkageProps {
  onOpenContactModal: () => void;
}

export default function NeerpeltDaklekkage({ onOpenContactModal }: NeerpeltDaklekkageProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const whatsappUrl = "https://wa.me/31614595142?text=Hallo,%20ik%20heb%20een%20daklekkage%20in%20Neerpelt";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Helmet>
        <title>Daklekkage Specialist Neerpelt | TBGS | 24/7 Spoedhulp België</title>
        <meta name="description" content="Daklekkage in Neerpelt, België? TBGS biedt 24/7 spoedhulp voor daklekkages. Direct ter plaatse voor reparatie en permanente oplossing in België." />
        <meta name="keywords" content="daklekkage Neerpelt België, dak lekt België, spoedservice daklekkage, dakreparatie België, TBGS Neerpelt, 24/7 dakservice" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Daklekkage Specialist Neerpelt | TBGS | 24/7 Spoedhulp België" />
        <meta property="og:description" content="Daklekkage in Neerpelt, België? TBGS biedt 24/7 spoedhulp voor daklekkages. Direct ter plaatse voor reparatie." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tbgs.nl/be/neerpelt/daklekkage" />
        <meta property="og:image" content="https://tbgs.nl/images/tbgs-daklekkage-neerpelt.jpg" />
        <meta property="og:locale" content="nl_BE" />
        <meta name="geo.region" content="BE-LI" />
        <meta name="geo.placename" content="Neerpelt" />
        <meta name="geo.position" content="51.2278;5.4417" />
        <meta name="ICBM" content="51.2278, 5.4417" />
        <link rel="canonical" href="https://tbgs.nl/be/neerpelt/daklekkage" />
        <link rel="alternate" hreflang="nl-nl" href="https://tbgs.nl/nl/neerpelt/daklekkage" />
        <meta name="author" content="TBGS" />
        <meta name="copyright" content="TBGS 2024" />
        <meta name="language" content="Dutch" />
      </Helmet>

      <LocalSEOSchema 
        businessData={{
          name: "TBGS Daklekkage Specialist Neerpelt",
          address: {
            addressLocality: "Neerpelt",
            addressRegion: "Limburg", 
            postalCode: "3910",
            addressCountry: "BE"
          },
          telephone: "+31614595142",
          email: "info@tbgs.nl",
          website: "https://tbgs.nl",
          openingHours: ["Mo-Su 00:00-23:59"],
          geo: { latitude: 51.2278, longitude: 5.4417 },
          areaServed: ["Neerpelt", "Overpelt", "Lommel"],
          rating: { ratingValue: 4.9, reviewCount: 168 }
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
              <span className="text-sm font-medium">24/7 Spoedservice Neerpelt, België</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-red-200">Daklekkage</span> in Neerpelt?
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 leading-relaxed">
              Nederlandse vakspecialisten binnen 30 minuten ter plaatse in België. 
              Van tijdelijke noodreparatie tot permanente daklekkage oplossing in Neerpelt.
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
              Daklekkage Service Neerpelt, België
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              24/7 bereikbaar voor alle daklekkages in Neerpelt en omgeving
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
                  Binnen 30 minuten ter plaatse voor acute daklekkages in Neerpelt, België.
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Daklekkage in Neerpelt? Bel Direct!
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