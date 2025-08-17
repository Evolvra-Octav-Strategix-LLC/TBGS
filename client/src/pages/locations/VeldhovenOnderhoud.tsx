import { Phone, Clock, MapPin, CheckCircle, Star, Shield, Wrench, Home } from "lucide-react";
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

interface VeldhovenOnderhoudProps {
  onOpenContactModal: () => void;
}

export default function VeldhovenOnderhoud({ onOpenContactModal }: VeldhovenOnderhoudProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const whatsappUrl = "https://wa.me/31614595142?text=Hallo,%20ik%20heb%20een%20vraag%20over%20onderhoud%20in%20Veldhoven";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      <Helmet>
        <title>Onderhoud Specialist Veldhoven | TBGS | 24/7 Bouwonderhoud Service</title>
        <meta name="description" content="Professional onderhoud specialist in Veldhoven. TBGS biedt 24/7 bouwonderhoud, preventief onderhoud en spoedservice. Lokale specialist met jarenlange ervaring." />
        <meta name="keywords" content="onderhoud Veldhoven, bouwonderhoud, preventief onderhoud, spoedservice, dakonderhoud, gevelonderhoud, onderhoudscontract, TBGS Veldhoven" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Onderhoud Specialist Veldhoven | TBGS | 24/7 Bouwonderhoud Service" />
        <meta property="og:description" content="Professional onderhoud specialist in Veldhoven. TBGS biedt 24/7 bouwonderhoud, preventief onderhoud en spoedservice." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tbgs.nl/nl/veldhoven/onderhoud" />
        <meta property="og:image" content="https://tbgs.nl/images/tbgs-onderhoud-veldhoven.jpg" />
        <meta property="og:locale" content="nl_NL" />
        <meta name="geo.region" content="NL-NB" />
        <meta name="geo.placename" content="Veldhoven" />
        <meta name="geo.position" content="51.4214;5.4044" />
        <meta name="ICBM" content="51.4214, 5.4044" />
        <link rel="canonical" href="https://tbgs.nl/nl/veldhoven/onderhoud" />
        <link rel="alternate" hreflang="nl-be" href="https://tbgs.nl/be/veldhoven/onderhoud" />
        <meta name="author" content="TBGS" />
        <meta name="copyright" content="TBGS 2024" />
        <meta name="language" content="Dutch" />
      </Helmet>

      <LocalSEOSchema 
        businessData={{
          name: "TBGS Onderhoud Specialist Veldhoven",
          address: {
            addressLocality: "Veldhoven",
            addressRegion: "Noord-Brabant", 
            postalCode: "5501",
            addressCountry: "NL"
          },
          telephone: "+31614595142",
          email: "info@tbgs.nl",
          website: "https://tbgs.nl",
          openingHours: ["Mo-Fr 07:00-17:00", "Sa 08:00-16:00"],
          geo: { latitude: 51.4214, longitude: 5.4044 },
          areaServed: ["Veldhoven", "Zeelst", "Oerle", "Knegsel"],
          rating: { ratingValue: 4.9, reviewCount: 134 }
        }}
      />
      
      <Header onOpenContactModal={onOpenContactModal} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Shield className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">24/7 Onderhoud Service Veldhoven</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Professional <span className="text-green-200">Onderhoud</span> in Veldhoven
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
              Uw betrouwbare onderhoudspartner voor preventief en curatief onderhoud in Veldhoven. 
              Van dakonderhoud tot complete gebouwbeheersing - wij zorgen voor duurzaam behoud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-white text-green-700 hover:bg-green-50 font-semibold px-8 py-4 text-lg shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Gratis Onderhoudsinspectie
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="border-white text-white hover:bg-white hover:text-green-700 font-semibold px-8 py-4 text-lg"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Direct WhatsApp Contact
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Onderhoudsdiensten in Veldhoven
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Preventief en curatief onderhoud door gecertificeerde vakspecialisten
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Dakonderhoud</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professioneel dakonderhoud voor alle daktypen. Van pannenvervanging tot complete dakrenovatie.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Dakpannen vervangen</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Gootreiniging & reparatie</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Dakgoot vervanging</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Gevelonderhoud</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Compleet gevelonderhoud voor behoud van uw pand. Van reiniging tot renovatie.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Gevelreiniging</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Schilderwerk & coating</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Voegwerk renovatie</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-green-800">Preventief Onderhoud</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Preventief onderhoudscontract voor optimaal behoud en waardebehoud van uw eigendom.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Jaarlijkse inspectie</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Onderhoudsplanning</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Prioriteitsservice</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Voordelen van TBGS Onderhoud in Veldhoven
              </h2>
              <p className="text-xl text-gray-600">
                Lokale expertise, snelle service en jarenlange ervaring
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Spoedservice</h3>
                    <p className="text-gray-600">
                      Voor acute onderhoudsproblemen zijn wij 24/7 bereikbaar in Veldhoven en omgeving.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Lokale Specialist</h3>
                    <p className="text-gray-600">
                      Als Brabants bedrijf kennen wij Veldhoven en omgeving perfect en zijn snel ter plaatse.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Gecertificeerd Team</h3>
                    <p className="text-gray-600">
                      Ons team bestaat uit gecertificeerde vakspecialisten met jarenlange ervaring in bouwonderhoud.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Volledige Garantie</h3>
                    <p className="text-gray-600">
                      Uitgebreide garantie op al onze werkzaamheden en WA-verzekering tot €2.5 miljoen.
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
              Onderhoudsservice in Veldhoven en Omgeving
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Wij bedienen heel Veldhoven en directe omgeving voor alle onderhoudswerkzaamheden
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <MapPin className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Veldhoven Centrum</h3>
              <p className="text-sm text-gray-600">Complete onderhoudsdiensten</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <MapPin className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Zeelst</h3>
              <p className="text-sm text-gray-600">Preventief & curatief onderhoud</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <MapPin className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Oerle</h3>
              <p className="text-sm text-gray-600">24/7 spoedservice</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <MapPin className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Knegsel</h3>
              <p className="text-sm text-gray-600">Onderhoudscontracten</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Direct Contact voor Onderhoud in Veldhoven
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Bel direct voor een gratis inspectie en persoonlijk onderhoudsadvies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-white text-green-700 hover:bg-green-50 font-semibold px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Bel Direct: 06-14595142
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="border-white text-white hover:bg-white hover:text-green-700 font-semibold px-8 py-4"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp Contact
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