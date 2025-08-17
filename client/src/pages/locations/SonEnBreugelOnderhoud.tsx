import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Clock, MapPin, Shield, CheckCircle, Wrench, Users, Calendar } from "lucide-react";
import LocationCards from "@/components/LocationCards";

interface SonEnBreugelOnderhoudProps {
  onOpenContactModal: () => void;
}

export default function SonEnBreugelOnderhoud({ onOpenContactModal }: SonEnBreugelOnderhoudProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TBGS Onderhoud Specialist Son en Breugel",
    "description": "Professioneel woningonderhoud in Son en Breugel. Preventief onderhoud, dakonderhoud en algemene reparaties door vakkundige specialisten.",
    "url": "https://tbgs.nl/nl/son-en-breugel/onderhoud",
    "telephone": "+31 40 202 6744",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hoofdstraat 12",
      "addressLocality": "Son en Breugel",
      "postalCode": "5691 AJ",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.5089,
      "longitude": 5.4944
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
        "latitude": 51.5089,
        "longitude": 5.4944
      },
      "geoRadius": "25000"
    },
    "services": [
      "Preventief woningonderhoud",
      "Dakonderhoud",
      "Reparaties",
      "Schilderwerk",
      "Onderhoud installaties"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Woningonderhoud Son en Breugel | Preventief Onderhoud | TBGS</title>
        <meta name="description" content="Woningonderhoud in Son en Breugel? ✓ Preventief onderhoud ✓ Dakonderhoud ✓ Snel & betrouwbaar. Professionele onderhoudsdiensten van TBGS." />
        <meta name="keywords" content="woningonderhoud son en breugel, dakonderhoud, preventief onderhoud, schilderwerk, onderhoud specialist" />
        <link rel="canonical" href="https://tbgs.nl/nl/son-en-breugel/onderhoud" />
        <meta property="og:title" content="Woningonderhoud Son en Breugel | Preventief Onderhoud | TBGS" />
        <meta property="og:description" content="Professioneel woningonderhoud in Son en Breugel. Van preventief onderhoud tot acute reparaties - wij zorgen voor uw woning." />
        <meta property="og:url" content="https://tbgs.nl/nl/son-en-breugel/onderhoud" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-yellow-500 text-yellow-900 mb-4 text-sm font-semibold px-3 py-1">
                ONDERHOUDSCONTRACTEN BESCHIKBAAR
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Woningonderhoud in <span className="text-yellow-300">Son en Breugel</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-green-100">
                Preventief onderhoud voor duurzaam wooncomfort
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
                  className="border-white text-white hover:bg-white hover:text-green-700 px-8"
                  onClick={onOpenContactModal}
                >
                  Onderhoudscontract
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
                  Onderhoudsdiensten in <span className="text-green-600">Son en Breugel</span>
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Met regelmatig onderhoud voorkomt u grote reparaties en behoudt u de waarde van uw woning.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <Card className="text-center p-6 border-2 hover:border-green-200 transition-colors">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Preventief Onderhoud</h3>
                  <p className="text-gray-600 text-sm">Regelmatige controles voorkomen grote problemen</p>
                </Card>

                <Card className="text-center p-6 border-2 hover:border-green-200 transition-colors">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Onderhoudscontract</h3>
                  <p className="text-gray-600 text-sm">Jaarlijks onderhoudsplan voor optimaal comfort</p>
                </Card>

                <Card className="text-center p-6 border-2 hover:border-green-200 transition-colors">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Vakkundig Team</h3>
                  <p className="text-gray-600 text-sm">Ervaren specialisten voor alle onderhoudswerkzaamheden</p>
                </Card>

                <Card className="text-center p-6 border-2 hover:border-green-200 transition-colors">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Lokaal Actief</h3>
                  <p className="text-gray-600 text-sm">Snel ter plaatse in Son en Breugel en omgeving</p>
                </Card>
              </div>

              {/* Services Section */}
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    Onze <span className="text-green-600">Onderhoudsdiensten</span>
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Jaarlijkse dakinspectie en onderhoud",
                      "Dakgoot reiniging en reparatie",
                      "Schilderwerk binnen en buiten",
                      "Kozijnen en ramen onderhoud",
                      "Kleine reparaties en klusjes",
                      "CV-ketel en installatie controle",
                      "Tuin en bestrating onderhoud",
                      "Vochtproblemen oplossen"
                    ].map((service, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-slate-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Card className="p-6 bg-green-50 border-green-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Wrench className="w-6 h-6 text-green-600" />
                      <h3 className="font-bold text-xl text-green-800">Onderhoudsvoordelen</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-green-800">Kostenbesparing</h4>
                          <p className="text-green-700 text-sm">Voorkom dure reparaties door tijdig onderhoud</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-green-800">Waardebehoud</h4>
                          <p className="text-green-700 text-sm">Behoud de waarde van uw woning</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-green-800">Wooncomfort</h4>
                          <p className="text-green-700 text-sm">Optimaal comfort het hele jaar door</p>
                        </div>
                      </div>
                    </div>
                    <Button 
                      className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white"
                      onClick={onOpenContactModal}
                    >
                      Plan Onderhoud In
                    </Button>
                  </Card>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-slate-100 rounded-lg p-8 mb-16">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                    Contact & <span className="text-green-600">Service Gebied</span>
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold text-xl mb-4">Contactgegevens</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-green-600" />
                          <span>+31 40 202 6744</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-green-600" />
                          <span>Hoofdstraat 12, 5691 AJ Son en Breugel</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-green-600" />
                          <span>Ma-Vr: 07:00-18:00 | Za: 08:00-17:00</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-4">Service Gebied</h3>
                      <p className="text-slate-700 mb-4">
                        Wij bedienen Son en Breugel en omliggende gebieden, waaronder:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Son en Breugel", "Best", "Eindhoven", "Sint-Oedenrode", "Schijndel", "Veghel"].map((city) => (
                          <Badge key={city} variant="secondary" className="bg-green-100 text-green-700">
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