import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Clock, MapPin, Shield, CheckCircle, Home, Users, Wrench } from "lucide-react";
import LocationCards from "@/components/LocationCards";

interface LommelRenovatieProps {
  onOpenContactModal: () => void;
}

export default function LommelRenovatie({ onOpenContactModal }: LommelRenovatieProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TBGS Renovatie Specialist Lommel",
    "description": "Professionele renovatie diensten in Lommel, België. Complete woningrenovaties, badkamerrenovaties door gecertificeerde specialisten.",
    "url": "https://tbgs.nl/be/lommel/renovatie",
    "telephone": "+32 11 54 32 10",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Stationsstraat 25",
      "addressLocality": "Lommel",
      "postalCode": "3920",
      "addressCountry": "BE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.2303,
      "longitude": 5.3133
    },
    "openingHours": [
      "Mo-Fr 07:00-18:00",
      "Sa 08:00-17:00",
      "Su 09:00-17:00"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 51.2303,
        "longitude": 5.3133
      },
      "geoRadius": "25000"
    },
    "services": [
      "Complete woningrenovatie",
      "Badkamerrenovatie",
      "Keukenrenovatie",
      "Dakkapel plaatsing",
      "Verbouwing België"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Renovatie Specialist Lommel | Woningrenovaties België | TBGS</title>
        <meta name="description" content="Renovatie in Lommel, België? ✓ Complete woningrenovaties ✓ Badkamer & keuken ✓ Gecertificeerde vakmannen. Professionele renovatiediensten TBGS België." />
        <meta name="keywords" content="renovatie lommel belgië, woningrenovatie, badkamerrenovatie lommel, verbouwing lommel, keukenrenovatie belgië" />
        <link rel="canonical" href="https://tbgs.nl/be/lommel/renovatie" />
        <meta property="og:title" content="Renovatie Specialist Lommel | Woningrenovaties België | TBGS" />
        <meta property="og:description" content="Complete woningrenovaties in Lommel, België door gecertificeerde specialisten. Van badkamer tot keuken, wij realiseren uw droomhuis." />
        <meta property="og:url" content="https://tbgs.nl/be/lommel/renovatie" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_BE" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-yellow-500 text-yellow-900 mb-4 text-sm font-semibold px-3 py-1">
                GRATIS RENOVATIE ADVIES BELGIË
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Renovatie Specialist in <span className="text-yellow-300">Lommel</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                Complete woningrenovaties in België door ervaren vakmannen
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-yellow-500 text-yellow-900 hover:bg-yellow-400 font-semibold px-8 py-3"
                  onClick={onOpenContactModal}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Direct Bellen: +32 11 54 32 10
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-blue-700 px-8"
                  onClick={onOpenContactModal}
                >
                  Gratis Offerte België
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Service Info */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                  Renovatie Services in <span className="text-blue-600">Lommel, België</span>
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Van kleine renovaties tot complete woningverbouwingen - TBGS realiseert uw droomhuis in Lommel en heel Limburg.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <Card className="text-center p-6 border-2 hover:border-blue-200 transition-colors">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Complete Renovaties</h3>
                  <p className="text-gray-600 text-sm">Van grondwerk tot afwerking, alles uit één hand in België</p>
                </Card>

                <Card className="text-center p-6 border-2 hover:border-blue-200 transition-colors">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Belgische Garantie</h3>
                  <p className="text-gray-600 text-sm">Jarenlange garantie op alle renovatiewerkzaamheden</p>
                </Card>

                <Card className="text-center p-6 border-2 hover:border-blue-200 transition-colors">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Ervaren Team België</h3>
                  <p className="text-gray-600 text-sm">Gekwalificeerde vakmensen met jarenlange ervaring</p>
                </Card>

                <Card className="text-center p-6 border-2 hover:border-blue-200 transition-colors">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Lokaal Limburg</h3>
                  <p className="text-gray-600 text-sm">Korte communicatielijnen en lokale expertise</p>
                </Card>
              </div>

              {/* Services Section */}
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    Onze <span className="text-blue-600">Renovatie Diensten België</span>
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Complete woningrenovaties België",
                      "Badkamerrenovaties Lommel",
                      "Keukenrenovaties moderne stijl", 
                      "Dakkapel plaatsing België",
                      "Aanbouw en uitbouw projecten",
                      "Zolder- en kelderverbouwing",
                      "Kozijnen en ramen vervanging",
                      "Isolatie en verduurzaming België"
                    ].map((service, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-slate-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Card className="p-6 bg-blue-50 border-blue-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Home className="w-6 h-6 text-blue-600" />
                      <h3 className="font-bold text-xl text-blue-800">Renovatieproces België</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                        <div>
                          <h4 className="font-semibold text-blue-800">Gratis Adviesgesprek</h4>
                          <p className="text-blue-700 text-sm">Bespreking van uw wensen en mogelijkheden in België</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                        <div>
                          <h4 className="font-semibold text-blue-800">Ontwerp & Offerte</h4>
                          <p className="text-blue-700 text-sm">Detailontwerp met transparante kostenraming</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                        <div>
                          <h4 className="font-semibold text-blue-800">Uitvoering</h4>
                          <p className="text-blue-700 text-sm">Professionele realisatie van uw renovatie</p>
                        </div>
                      </div>
                    </div>
                    <Button 
                      className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={onOpenContactModal}
                    >
                      Start Renovatieproject België
                    </Button>
                  </Card>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-slate-100 rounded-lg p-8 mb-16">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                    Contact & <span className="text-blue-600">Service Gebied Limburg</span>
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold text-xl mb-4">Contactgegevens België</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-blue-600" />
                          <span>+32 11 54 32 10</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-blue-600" />
                          <span>Stationsstraat 25, 3920 Lommel, België</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-blue-600" />
                          <span>Ma-Vr: 07:00-18:00 | Za: 08:00-17:00</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-4">Service Gebied België</h3>
                      <p className="text-slate-700 mb-4">
                        Wij bedienen Lommel en omliggende gebieden in Limburg:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Lommel", "Hamont-Achel", "Pelt", "Overpelt", "Neerpelt", "Retie"].map((city) => (
                          <Badge key={city} variant="secondary" className="bg-blue-100 text-blue-700">
                            {city}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <LocationCards showCTA={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}