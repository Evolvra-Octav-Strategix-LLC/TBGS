import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface LocationHamontAchelProps {
  onOpenContactModal: () => void;
}

export default function LocationHamontAchel({ onOpenContactModal }: LocationHamontAchelProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="TBGS Hamont-Achel – Dakdekker, Schoorsteenveger, Aannemer & Onderhoudsbedrijf"
        description="✓ TBGS Hamont-Achel België ✓ Dakdekker, Schoorsteenveger, Onderhoudsbedrijf & Aannemer ✓ Lokale service Limburg ✓ 15+ jaar ervaring ✓ Gratis offerte"
        url="https://tbgs.nl/be/locaties/hamont-achel"
        keywords="TBGS Hamont-Achel, dakdekker Hamont-Achel, schoorsteenveger Hamont-Achel, aannemer Hamont-Achel België"
      />
      <LocalSEOSchema businessData={{
        name: "TBGS BV - Hamont-Achel",
        address: {
          addressLocality: "Hamont-Achel",
          addressRegion: "Limburg", 
          addressCountry: "BE"
        },
        telephone: "+32 11 34 24 50",
        email: "info@tbgs.nl",
        website: "https://tbgs.nl/be/locaties/hamont-achel",
        geo: {
          latitude: 51.2500,
          longitude: 5.3167
        },
        areaServed: ["Hamont-Achel", "Limburg", "België"],
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
              Hamont-Achel, Limburg
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              TBGS Hamont-Achel – Lokale Bouwservice
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Betrouwbare bouwdienstverlening in Hamont-Achel door ervaren lokale vakmannen. 
              Complete service voor al uw bouwbehoeften in België.
            </p>

            <Button 
              onClick={onOpenContactModal}
              size="lg"
              className="bg-tbgs-navy hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Hamont-Achel
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Specialisten in Hamont-Achel
            </h2>
            <p className="text-lg text-gray-600">
              Vier gespecialiseerde diensten voor al uw bouwprojecten
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-tbgs-red">Dakdekker Hamont-Achel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Vakkundige dakwerkzaamheden in Hamont-Achel. Alle soorten dakbedekkingen en reparaties.
                </p>
                <Link href="/be/totaal-dak-specialist/hamont-achel">
                  <Button variant="outline" className="w-full">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Dakdekker Service
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-tbgs-blue">Schoorsteenveger Hamont-Achel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professionele schoorsteenservice in Hamont-Achel. Reiniging en onderhoud door specialisten.
                </p>
                <Link href="/be/totaal-schoorsteen-specialist/hamont-achel">
                  <Button variant="outline" className="w-full">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Schoorsteen Service
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-tbgs-green">Onderhoudsbedrijf Hamont-Achel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Preventief onderhoud in Hamont-Achel. Van kleine reparaties tot complete onderhoudsplannen.
                </p>
                <Link href="/be/totaal-onderhoud-specialist/hamont-achel">
                  <Button variant="outline" className="w-full">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Onderhoud Service
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-tbgs-orange">Aannemer Hamont-Achel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Betrouwbare aannemer in Hamont-Achel. Verbouwingen en renovaties door lokale professionals.
                </p>
                <Link href="/be/totaal-bouw-specialist/hamont-achel">
                  <Button variant="outline" className="w-full">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Aannemer Service
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