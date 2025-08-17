import { Phone, Clock, MapPin, CheckCircle, Star, Shield, Wrench, Building } from "lucide-react";
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

interface OverpeltRenovatieProps {
  onOpenContactModal: () => void;
}

export default function OverpeltRenovatie({ onOpenContactModal }: OverpeltRenovatieProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const whatsappUrl = "https://wa.me/31614595142?text=Hallo,%20ik%20heb%20een%20vraag%20over%20renovatie%20in%20Overpelt";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      <Helmet>
        <title>Renovatie Specialist Overpelt | TBGS | Complete Woningrenovatie België</title>
        <meta name="description" content="Professional renovatie specialist in Overpelt, België. TBGS realiseert complete woningrenovaties, badkamerrenovaties en keukenrenovaties. Belgische specialist." />
        <meta name="keywords" content="renovatie Overpelt, woningrenovatie België, badkamerrenovatie, keukenrenovatie, verbouwing België, renovatiebedrijf, TBGS Overpelt" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Renovatie Specialist Overpelt | TBGS | Complete Woningrenovatie België" />
        <meta property="og:description" content="Professional renovatie specialist in Overpelt, België. TBGS realiseert complete woningrenovaties, badkamerrenovaties en keukenrenovaties." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tbgs.nl/be/overpelt/renovatie" />
        <meta property="og:image" content="https://tbgs.nl/images/tbgs-renovatie-overpelt.jpg" />
        <meta property="og:locale" content="nl_BE" />
        <meta name="geo.region" content="BE-LI" />
        <meta name="geo.placename" content="Overpelt" />
        <meta name="geo.position" content="51.2111;5.4167" />
        <meta name="ICBM" content="51.2111, 5.4167" />
        <link rel="canonical" href="https://tbgs.nl/be/overpelt/renovatie" />
        <link rel="alternate" hreflang="nl-nl" href="https://tbgs.nl/nl/overpelt/renovatie" />
        <meta name="author" content="TBGS" />
        <meta name="copyright" content="TBGS 2024" />
        <meta name="language" content="Dutch" />
      </Helmet>

      <LocalSEOSchema 
        businessData={{
          name: "TBGS Renovatie Specialist Overpelt",
          address: {
            addressLocality: "Overpelt",
            addressRegion: "Limburg", 
            postalCode: "3900",
            addressCountry: "BE"
          },
          telephone: "+31614595142",
          email: "info@tbgs.nl",
          website: "https://tbgs.nl",
          openingHours: ["Mo-Fr 07:00-17:00", "Sa 08:00-16:00"],
          geo: { latitude: 51.2111, longitude: 5.4167 },
          areaServed: ["Overpelt", "Neerpelt", "Lommel"],
          rating: { ratingValue: 4.8, reviewCount: 135 }
        }}
      />
      
      <Header onOpenContactModal={onOpenContactModal} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Building className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Complete Renovaties Overpelt, België</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Expert <span className="text-orange-200">Renovatie</span> in Overpelt
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 leading-relaxed">
              Van complete woningrenovaties tot specifieke ruimteverbouwingen in Overpelt, België. 
              Nederlandse vakmanschap gecombineerd met Belgische service voor uw droomrenovatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-white text-orange-700 hover:bg-orange-50 font-semibold px-8 py-4 text-lg shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Gratis Renovatieadvies
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="border-white text-white hover:bg-white hover:text-orange-700 font-semibold px-8 py-4 text-lg"
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
              Renovatiediensten in Overpelt, België
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete renovaties van A tot Z door Nederlandse vakspecialisten in België
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-orange-800">Woningrenovatie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Complete woningrenovaties in Overpelt. Van klein tot groot project met Belgische normen.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Complete woningrenovatie</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Belgische bouwvoorschriften</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Nederlandse kwaliteit</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-orange-800">Badkamerrenovatie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Luxe badkamerrenovaties met moderne sanitair en tijdloze afwerking in Overpelt.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Complete badkamerrenovatie</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Moderne sanitairinstallatie</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Waterleiding aangesloten</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-orange-800">Keukenrenovatie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Moderne keukenrenovaties met maatwerk oplossingen en kwaliteitsapparatuur.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Complete keukenrenovatie</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Maatwerk keukens</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Apparatuurinstallatie</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Waarom TBGS voor Renovatie in Overpelt?
              </h2>
              <p className="text-xl text-gray-600">
                Nederlandse kwaliteit, Belgische service en jarenlange ervaring
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Grensoverschrijdende Specialist</h3>
                    <p className="text-gray-600">
                      Nederlandse kwaliteit en vakmanschap gecombineerd met kennis van Belgische regelgeving.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Belgische Normen</h3>
                    <p className="text-gray-600">
                      Volledig bekend met Belgische bouwvoorschriften en vergunningsprocedures in Overpelt.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparante Communicatie</h3>
                    <p className="text-gray-600">
                      Duidelijke offerte en planning. Nederlands-Belgische samenwerking zonder taalbarrières.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Snelle Service</h3>
                    <p className="text-gray-600">
                      Korte lijnen tussen Nederland en België voor efficiënte projectrealisatie.
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
              Renovatieservice in Overpelt en Omgeving
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Wij realiseren renovaties in Overpelt en directe omgeving in België
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <MapPin className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Overpelt Centrum</h3>
              <p className="text-sm text-gray-600">Complete woningrenovaties</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <MapPin className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Neerpelt</h3>
              <p className="text-sm text-gray-600">Badkamer & keukenrenovatie</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <MapPin className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Lommel</h3>
              <p className="text-sm text-gray-600">Verbouwingen & renovaties</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Uw Renovatie in Overpelt
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Bel direct voor een gratis intakegesprek en renovatieadvies op maat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-white text-orange-700 hover:bg-orange-50 font-semibold px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Bel Direct: 06-14595142
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="border-white text-white hover:bg-white hover:text-orange-700 font-semibold px-8 py-4"
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