import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Clock, MapPin, Shield, CheckCircle, AlertTriangle, Wrench, Users } from "lucide-react";
import LocationCards from "@/components/LocationCards";

interface MierloDaklekkageProps {
  onOpenContactModal: () => void;
}

export default function MierloDaklekkage({ onOpenContactModal }: MierloDaklekkageProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TBGS Daklekkage Specialist Mierlo",
    "description": "Professionele daklekkage reparatie in Mierlo. 24/7 spoeddienst, gecertificeerde dakdekkers en 10 jaar garantie op alle werkzaamheden.",
    "url": "https://tbgs.nl/nl/mierlo/daklekkage",
    "telephone": "+31 40 202 6744",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Grote Kerkstraat 15",
      "addressLocality": "Mierlo",
      "postalCode": "5731 JT",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.4406,
      "longitude": 5.6219
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
        "latitude": 51.4406,
        "longitude": 5.6219
      },
      "geoRadius": "25000"
    },
    "services": [
      "Daklekkage opsporing",
      "Noodafdichting daken",
      "Daklekkage reparatie",
      "Preventief dakonderhoud"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Daklekkage Reparatie Mierlo | 24/7 Spoedhulp | TBGS Dakspecialisten</title>
        <meta name="description" content="Daklekkage in Mierlo? ✓ 24/7 spoedhulp ✓ Gecertificeerde dakdekkers ✓ 10 jaar garantie. Direct professionele hulp van TBGS dakspecialisten." />
        <meta name="keywords" content="daklekkage mierlo, dakdekker mierlo, lekkend dak repareren, noodafdichting dak, dakonderhoud mierlo" />
        <link rel="canonical" href="https://tbgs.nl/nl/mierlo/daklekkage" />
        <meta property="og:title" content="Daklekkage Reparatie Mierlo | 24/7 Spoedhulp | TBGS" />
        <meta property="og:description" content="Daklekkage in Mierlo? Onze gecertificeerde dakspecialisten helpen 24/7 met professionele reparaties en 10 jaar garantie." />
        <meta property="og:url" content="https://tbgs.nl/nl/mierlo/daklekkage" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-yellow-500 text-yellow-900 mb-4 text-sm font-semibold px-3 py-1">
                24/7 SPOEDDIENST BESCHIKBAAR
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Daklekkage Reparatie in <span className="text-yellow-300">Mierlo</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-red-100">
                Professionele daklekkage oplossingen door gecertificeerde specialisten
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-yellow-500 text-yellow-900 hover:bg-yellow-400 font-semibold px-8 py-3"
                  onClick={onOpenContactModal}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Direct Bellen: 040 202 6744
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-red-700 px-8"
                  onClick={onOpenContactModal}
                >
                  Gratis offerte
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
                  Waarom Kiezen voor TBGS in <span className="text-red-600">Mierlo</span>?
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Als ervaren dakspecialisten in Mierlo bieden wij snelle, professionele daklekkage reparaties met jarenlange garantie.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <Card className="text-center p-6 border-2 hover:border-red-200 transition-colors">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">24/7 Beschikbaar</h3>
                  <p className="text-gray-600 text-sm">Ook buiten kantooruren en in het weekend bereikbaar voor noodgevallen</p>
                </Card>

                <Card className="text-center p-6 border-2 hover:border-red-200 transition-colors">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">10 Jaar Garantie</h3>
                  <p className="text-gray-600 text-sm">Uitgebreide garantie op alle uitgevoerde daklekkage reparaties</p>
                </Card>

                <Card className="text-center p-6 border-2 hover:border-red-200 transition-colors">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Gecertificeerd Team</h3>
                  <p className="text-gray-600 text-sm">Volledig gekwalificeerde dakdekkers met officiële certificering</p>
                </Card>

                <Card className="text-center p-6 border-2 hover:border-red-200 transition-colors">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Lokaal in Mierlo</h3>
                  <p className="text-gray-600 text-sm">Korte aanrijtijd en kennis van lokale bouwvoorschriften</p>
                </Card>
              </div>

              {/* Services Section */}
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    Onze <span className="text-red-600">Daklekkage Services</span>
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Spoedafdichting bij acute lekkage",
                      "Professionele lekkage opsporing",
                      "Reparatie van beschadigde dakbedekking",
                      "Vervanging van dakpannen en tegels",
                      "Renovatie van platte daken",
                      "Preventief dakonderhoud",
                      "Dakgoot reparatie en reiniging",
                      "Schoorsteen afdichting"
                    ].map((service, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-slate-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Card className="p-6 bg-red-50 border-red-200">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                      <h3 className="font-bold text-xl text-red-800">Noodgevallen in Mierlo</h3>
                    </div>
                    <p className="text-red-700 mb-4">
                      Heeft u acute daklekkage in Mierlo? Bel direct voor professionele spoedhulp!
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-red-600" />
                        <span className="font-semibold text-red-800">040 202 6744</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-red-600" />
                        <span className="text-red-700">24/7 bereikbaar</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wrench className="w-4 h-4 text-red-600" />
                        <span className="text-red-700">Snelle reparatie</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                      onClick={onOpenContactModal}
                    >
                      Direct Contact Opnemen
                    </Button>
                  </Card>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-slate-100 rounded-lg p-8 mb-16">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                    Contact & <span className="text-red-600">Service Gebied</span>
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold text-xl mb-4">Contactgegevens</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-red-600" />
                          <span>+31 40 202 6744</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-red-600" />
                          <span>Grote Kerkstraat 15, 5731 JT Mierlo</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-red-600" />
                          <span>Ma-Vr: 07:00-18:00 | Za: 08:00-17:00</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-4">Service Gebied</h3>
                      <p className="text-slate-700 mb-4">
                        Wij bedienen Mierlo en omliggende gebieden binnen 25km straal, waaronder:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Mierlo", "Geldrop", "Eindhoven", "Nuenen", "Helmond", "Deurne"].map((city) => (
                          <Badge key={city} variant="secondary" className="bg-red-100 text-red-700">
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