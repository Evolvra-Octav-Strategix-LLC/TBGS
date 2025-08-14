import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface LocationLommelProps {
  onOpenContactModal: () => void;
}

export default function LocationLommel({ onOpenContactModal }: LocationLommelProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="TBGS Lommel – Dakdekker, Schoorsteenveger, Aannemer & Onderhoudsbedrijf"
        description="✓ TBGS Lommel België ✓ Dakdekker, Schoorsteenveger, Onderhoudsbedrijf & Aannemer ✓ Lokale service Limburg ✓ 15+ jaar ervaring ✓ Gratis offerte"
        url="https://tbgs.nl/be/locaties/lommel"
        keywords="TBGS Lommel, dakdekker Lommel, schoorsteenveger Lommel, aannemer Lommel, onderhoudsbedrijf Lommel België"
      />
      <LocalSEOSchema businessData={{
        name: "TBGS BV - Lommel",
        address: {
          addressLocality: "Lommel",
          addressRegion: "Limburg", 
          addressCountry: "BE"
        },
        telephone: "+32 11 34 24 50",
        email: "info@tbgs.nl",
        website: "https://tbgs.nl/be/locaties/lommel",
        geo: {
          latitude: 51.2309,
          longitude: 5.3136
        },
        areaServed: ["Lommel", "Limburg", "België"],
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
              Lommel, Limburg
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              TBGS Lommel – Uw Lokale Bouwpartner
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Complete bouwdienstverlening in Lommel door lokale vakmannen. Van dakwerkzaamheden 
              tot schoorsteenservice, van onderhoud tot verbouwingen - alles onder één dak.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={onOpenContactModal}
                size="lg"
                className="bg-tbgs-navy hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Lommel
              </Button>
              <a 
                href="tel:+3211342450"
                className="inline-flex items-center px-8 py-3 border-2 border-tbgs-navy text-tbgs-navy rounded-lg font-semibold hover:bg-tbgs-navy hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                +32 11 34 24 50
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Onze Specialisten in Lommel
            </h2>
            <p className="text-lg text-gray-600">
              Vier gespecialiseerde teams voor al uw bouwbehoeften in Lommel
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-tbgs-red">Dakdekker Lommel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professionele dakwerkzaamheden in Lommel. EPDM, bitumen, dakpannen en reparaties.
                </p>
                <Link href="/be/totaal-dak-specialist/lommel">
                  <Button variant="outline" className="w-full">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Meer info Dakdekker
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-tbgs-blue">Schoorsteenveger Lommel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Gecertificeerde schoorsteenservice in Lommel. Reiniging, inspectie en onderhoud.
                </p>
                <Link href="/be/totaal-schoorsteen-specialist/lommel">
                  <Button variant="outline" className="w-full">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Meer info Schoorsteenveger
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-tbgs-green">Onderhoudsbedrijf Lommel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Preventief en curatief onderhoud in Lommel. Van kleine reparaties tot onderhoudscontracten.
                </p>
                <Link href="/be/totaal-onderhoud-specialist/lommel">
                  <Button variant="outline" className="w-full">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Meer info Onderhoud
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-tbgs-orange">Aannemer Lommel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Algemene bouwwerken en renovaties in Lommel. Van badkamers tot complete verbouwingen.
                </p>
                <Link href="/be/totaal-bouw-specialist/lommel">
                  <Button variant="outline" className="w-full">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Meer info Aannemer
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Waarom TBGS in Lommel?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Lokale vakmannen met jarenlange ervaring in Lommel en omgeving. 
              Betrouwbare service met uitgebreide garantie.
            </p>

            <Button 
              onClick={onOpenContactModal}
              size="lg"
              className="bg-tbgs-navy hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Gratis Adviesgesprek Lommel
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}