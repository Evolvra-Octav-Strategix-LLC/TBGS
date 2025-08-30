import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Clock, 
  Award, 
  CheckCircle, 
  Phone, 
  MapPin, 
  Star,
  Users,
  Zap,
  Wrench,
  Home,
  Calendar,
  MessageCircle,
  Droplets,
  Building,
  Hammer,
  FileText
} from "lucide-react";

interface DakdekkerEindhovenProps {
  onOpenContactModal: () => void;
}

export default function DakdekkerEindhoven({ onOpenContactModal }: DakdekkerEindhovenProps) {
  const urgentServices = [
    "Daklekkage spoedservice",
    "Binnen 24 uur ter plaatse",
    "Stormdade herstel",
    "Alles inclusief service"
  ];

  const leakageTypes = [
    {
      icon: <Droplets className="h-5 w-5" />,
      title: "Dakgoot Lekkage",
      description: "Verstopte of beschadigde dakgoten direct gerepareerd"
    },
    {
      icon: <Home className="h-5 w-5" />,
      title: "Pannendak Lekkage", 
      description: "Kapotte dakpannen en naden professioneel hersteld"
    },
    {
      icon: <Building className="h-5 w-5" />,
      title: "Platdak Lekkage",
      description: "EPDM, bitumen en andere platdak materialen"
    },
    {
      icon: <Hammer className="h-5 w-5" />,
      title: "Schoorsteen Lekkage",
      description: "Loodwerk en schoorsteenvoet reparaties"
    },
    {
      icon: <Home className="h-5 w-5" />,
      title: "Dakkapel Lekkage",
      description: "Dakkapellen waterdicht maken en isoleren"
    },
    {
      icon: <Wrench className="h-5 w-5" />,
      title: "Zinken Dakgoot",
      description: "Zinken dakgoten onderhoud en vervanging"
    }
  ];

  const allInclusiveServices = [
    "Gratis uitgebreide dakinspectie",
    "Professionele schaderapportage", 
    "Tijdelijke noodoplossing",
    "Permanente duurzame reparatie",
    "Garantie op alle werkzaamheden",
    "Opruimen en afvoeren materiaal",
    "Directe verzekeringshulp",
    "Follow-up onderhoud service"
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "VCA Gecertificeerd",
      description: "Alle werkzaamheden volgens veiligheidsnormen"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Binnen 24 Uur",
      description: "Altijd binnen 24 uur ter plaatse in Eindhoven"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "80 Jaar Familietraditie",
      description: "Van vader op zoon - vier generaties dakdekkersvakmanschap"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Local Expert",
      description: "Bekend met Eindhovense bouwstijlen"
    }
  ];

  const serviceAreas = [
    "Eindhoven Centrum", "Woensel", "Stratum", "Gestel", "Strijp",
    "Tongelre", "Meerhoven", "De Hurk", "Acht", "Nuenen",
    "Veldhoven", "Best", "Son en Breugel", "Geldrop-Mierlo"
  ];

  return (
    <>
      <Helmet>
        <title>Dakdekker Eindhoven | 24/7 Daklekkage Reparatie | TBGS BV</title>
        <meta name="description" content="Dakdekker Eindhoven ✓ Spoedservice daklekkage ✓ VCA gecertificeerd ✓ 15+ jaar ervaring ✓ Gratis offerte ✓ Pannendaken, platte daken, dakgoten ✓ 24/7 bereikbaar" />
        <meta name="keywords" content="dakdekker eindhoven, daklekkage eindhoven, dakreparatie eindhoven, dakgoot eindhoven, pannendak eindhoven, plat dak eindhoven, dakonderhoud eindhoven, dak specialist eindhoven" />
        
        {/* Local SEO */}
        <meta name="geo.region" content="NL-NB" />
        <meta name="geo.placename" content="Eindhoven" />
        <meta name="geo.position" content="51.4416;5.4697" />
        <meta name="ICBM" content="51.4416,5.4697" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Dakdekker Eindhoven | 24/7 Daklekkage Reparatie | TBGS BV" />
        <meta property="og:description" content="Professionele dakdekker in Eindhoven. Spoedservice voor daklekkage, dakreparatie en dakonderhoud. VCA gecertificeerd met 15+ jaar ervaring." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        
        {/* Schema.org Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RoofingContractor",
            "name": "TBGS BV - Dakdekker Eindhoven",
            "description": "Professionele dakdekker in Eindhoven gespecialiseerd in daklekkage reparatie, dakonderhoud en dakrenovatie",
            "url": "https://totaal-platform.vercel.app/dakdekker-eindhoven",
            "telephone": "+31-40-123-4567",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Hoofdstraat 123",
              "addressLocality": "Eindhoven",
              "postalCode": "5611 AA",
              "addressRegion": "Noord-Brabant",
              "addressCountry": "NL"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.4416,
              "longitude": 5.4697
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Eindhoven",
                "sameAs": "https://nl.wikipedia.org/wiki/Eindhoven"
              }
            ],
            "serviceType": [
              "Daklekkage reparatie",
              "Dakonderhoud", 
              "Pannendak reparatie",
              "Platte daken renovatie",
              "Dakgoot onderhoud",
              "Dakisolatie"
            ],
            "hasCredential": "VCA Veiligheidscertificaat",
            "foundingDate": "2008",
            "employees": {
              "@type": "QuantitativeValue",
              "value": "10-20"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": 4.8,
              "reviewCount": 127,
              "bestRating": 5,
              "worstRating": 1
            },
            "priceRange": "€€",
            "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
            "currenciesAccepted": "EUR"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-yellow-500 text-red-900 hover:bg-yellow-400 text-lg px-4 py-2">
                🚨 BINNEN 24 UUR TER PLAATSE
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Dakdekker <span className="text-yellow-300">Eindhoven</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
                Specialist in <strong className="text-yellow-300">alle soorten daklekkages</strong> in Eindhoven. 
                Dakgoot, pannendak, platdak, schoorsteen en dakkapel lekkages - 
                <strong className="text-yellow-300"> alles inclusief service</strong> binnen 24 uur.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-500 text-white font-bold text-lg px-8 py-4"
                  onClick={() => window.open('https://wa.me/31612345678?text=Hallo%2C%20ik%20heb%20daklekkage%20in%20Eindhoven%20en%20zou%20graag%20hulp%20willen.', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Direct
                </Button>
                <Button 
                  size="lg" 
                  className="bg-yellow-500 hover:bg-yellow-400 text-red-900 hover:text-red-900 font-bold text-lg px-8 py-4 transition-colors"
                  onClick={onOpenContactModal}
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Gratis Offerte
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                {urgentServices.map((service, index) => (
                  <Badge key={index} variant="outline" className="border-white text-white bg-red-700/50">
                    <CheckCircle className="mr-1 h-3 w-3" />
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="text-center border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="text-red-600 mb-3 flex justify-center">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Dakdekker Specialist <span className="text-red-600">Eindhoven</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Van acute daklekkage tot complete dakrenovatie - wij zijn uw lokale dakspecialist
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-600 flex items-center">
                      <Zap className="mr-2 h-5 w-5" />
                      Spoedservice Daklekkage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Daklekkage in Eindhoven? Onze lokale dakdekkers zijn binnen 24 uur ter plaatse voor alle 
                      soorten lekkages. Van dakgoot tot schoorsteen - alles inclusief service voor een vaste prijs.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                        Binnen 24 uur ter plaatse in Eindhoven
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                        Dakgoot, pannendak, platdak specialisten
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                        Schoorsteen en dakkapel lekkage expert
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                        Alles inclusief - geen verrassingen
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-600 flex items-center">
                      <Wrench className="mr-2 h-5 w-5" />
                      Dakonderhoud & Renovatie
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Preventief dakonderhoud voorkomt kostbare lekkages. Onze Eindhovense dakspecialisten 
                      bieden uitgebreid onderhoud voor pannendaken, platdaken, dakgoten en schoorstenen.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                        Uitgebreide dakinspectie met rapport
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                        Dakgoot ontstopping en reiniging
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                        Pannendak en platdak onderhoud
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                        Schoorsteen en loodwerk controle
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* All Leakage Types Grid */}
              <div className="bg-gray-50 rounded-lg p-8 mb-12">
                <h3 className="text-3xl font-bold text-center mb-6 text-gray-900">
                  Alle Soorten Daklekkages in <span className="text-red-600">Eindhoven</span>
                </h3>
                <p className="text-center text-gray-600 mb-8 text-lg">
                  Van dakgoot tot dakkapel - wij repareren alle lekkages snel en vakkundig
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {leakageTypes.map((type, index) => (
                    <Card key={index} className="border-red-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="text-red-600 mt-1 flex-shrink-0">
                            {type.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-2 text-gray-900">{type.title}</h4>
                            <p className="text-gray-600 text-sm">{type.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* All-Inclusive Service */}
              <div className="bg-red-50 rounded-lg p-8">
                <h3 className="text-3xl font-bold text-center mb-6 text-gray-900">
                  <span className="text-red-600">Alles Inclusief</span> Daklekkage Service
                </h3>
                <p className="text-center text-gray-600 mb-8 text-lg">
                  Geen verrassingen - alles wat u nodig heeft voor een waterdicht dak
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {allInclusiveServices.map((service, index) => (
                    <div key={index} className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="font-medium text-gray-800">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Area Coverage */}
        <section className="py-16 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Dakdekker Service in <span className="text-red-600">Eindhoven</span> en Omgeving
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Als lokale dakdekker specialist kennen wij alle wijken van Eindhoven. Van historische panden in het centrum 
                tot moderne woningen in Meerhoven - wij weten precies hoe uw dak het beste gerepareerd wordt.
              </p>
              
              <div className="grid md:grid-cols-5 gap-3 mb-8">
                {serviceAreas.map((area, index) => (
                  <Badge key={index} variant="outline" className="border-red-300 text-red-700 py-2">
                    <MapPin className="mr-1 h-3 w-3" />
                    {area}
                  </Badge>
                ))}
              </div>

              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-yellow-500 fill-current" />
                    <Star className="h-6 w-6 text-yellow-500 fill-current" />
                    <Star className="h-6 w-6 text-yellow-500 fill-current" />
                    <Star className="h-6 w-6 text-yellow-500 fill-current" />
                    <Star className="h-6 w-6 text-yellow-500 fill-current" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">4.8/5 uit 127+ Reviews</h3>
                  <p className="text-gray-600">
                    "Binnen 24 uur was de daklekkage gerepareerd! Professionele dakdekker uit Eindhoven met 
                    alles-inclusief service. Geen verrassingen achteraf."
                  </p>
                  <p className="text-sm text-gray-500 mt-2">- Tevreden klanten uit Eindhoven</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Daklekkage in Eindhoven? <span className="text-yellow-300">Bel Nu!</span>
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Daklekkage spoedservice in Eindhoven. Binnen 24 uur ter plaatse voor dakgoot, pannendak, 
              platdak, schoorsteen en dakkapel lekkages. Alles inclusief tegen vaste prijs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-500 text-white hover:text-white font-bold text-xl px-8 py-4 transition-colors"
                onClick={() => window.open('https://wa.me/31612345678?text=Hallo%2C%20ik%20heb%20daklekkage%20in%20Eindhoven%20en%20heb%20hulp%20nodig.', '_blank')}
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                WhatsApp Nu
              </Button>
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-400 text-red-900 hover:text-red-900 font-bold text-xl px-8 py-4 transition-colors"
                onClick={onOpenContactModal}
              >
                <FileText className="mr-2 h-6 w-6" />
                Gratis Offerte
              </Button>
            </div>

            <p className="text-sm mt-6 opacity-75">
              ✓ Binnen 24 uur ter plaatse ✓ Alles inclusief service ✓ VCA gecertificeerd ✓ Dakgoot, pannendak, platdak, schoorsteen & dakkapel specialist
            </p>
          </div>
        </section>
      </div>
    </>
  );
}