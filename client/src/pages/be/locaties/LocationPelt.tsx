import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface LocationPeltProps {
  onOpenContactModal: () => void;
}

export default function LocationPelt({ onOpenContactModal }: LocationPeltProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="TBGS Pelt – Dakdekker, Schoorsteenveger, Aannemer & Onderhoudsbedrijf"
        description="✓ TBGS Pelt België ✓ Dakdekker, Schoorsteenveger, Onderhoudsbedrijf & Aannemer ✓ Lokale service Limburg ✓ 15+ jaar ervaring ✓ Gratis offerte"
        url="https://tbgs.nl/be/locaties/pelt"
        keywords="TBGS Pelt, dakdekker Pelt, schoorsteenveger Pelt, aannemer Pelt, onderhoudsbedrijf Pelt België"
      />
      <LocalSEOSchema businessData={{
        name: "TBGS BV - Pelt",
        address: {
          addressLocality: "Pelt",
          addressRegion: "Limburg", 
          addressCountry: "BE"
        },
        telephone: "+32 11 34 24 50",
        email: "info@tbgs.nl",
        website: "https://tbgs.nl/be/locaties/pelt",
        geo: {
          latitude: 51.2167,
          longitude: 5.4667
        },
        areaServed: ["Pelt", "Limburg", "België"],
        rating: {
          ratingValue: 4.8,
          reviewCount: 89
        },
        openingHours: [
          "Mo-Fr 08:00-17:00",
          "Sa 09:00-16:00"
        ]
      }} />

      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Pelt, Limburg
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              TBGS Pelt – Uw Bouwpartner
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Vakkundige bouwdienstverlening in Pelt door lokale specialisten. 
              Complete service voor al uw bouw- en onderhoudsbehoeften in België.
            </p>

            <Button 
              onClick={onOpenContactModal}
              size="lg"
              className="bg-tbgs-navy hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Pelt
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Onze Diensten in Pelt
            </h2>
            <p className="text-lg text-gray-600">
              Vier specialistische teams voor complete bouwservice
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-tbgs-red">Dakdekker Pelt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professionele dakwerkzaamheden in Pelt. Van lekkage reparatie tot complete dakvernieuwing.
                </p>
                <Link href="/be/totaal-dak-specialist/pelt">
                  <Button variant="outline" className="w-full">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Dakdekker Info
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-tbgs-blue">Schoorsteenveger Pelt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Gecertificeerde schoorsteenservice in Pelt. Reiniging, inspectie en onderhoud.
                </p>
                <Link href="/be/totaal-schoorsteen-specialist/pelt">
                  <Button variant="outline" className="w-full">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Schoorsteen Info
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-tbgs-green">Onderhoudsbedrijf Pelt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Betrouwbaar onderhoudsbedrijf in Pelt. Preventief en curatief onderhoud.
                </p>
                <Link href="/be/totaal-onderhoud-specialist/pelt">
                  <Button variant="outline" className="w-full">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Onderhoud Info
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-tbgs-orange">Aannemer Pelt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Ervaren aannemer in Pelt. Verbouwingen, renovaties en nieuwbouwprojecten.
                </p>
                <Link href="/be/totaal-bouw-specialist/pelt">
                  <Button variant="outline" className="w-full">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Aannemer Info
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}