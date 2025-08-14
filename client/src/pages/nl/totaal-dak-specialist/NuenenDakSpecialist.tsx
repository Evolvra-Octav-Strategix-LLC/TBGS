import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, CheckCircle } from "lucide-react";

interface NuenenDakSpecialistProps {
  onOpenContactModal: () => void;
}

export default function NuenenDakSpecialist({ onOpenContactModal }: NuenenDakSpecialistProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="Dakdekker in Nuenen | Totaal Dak Specialist – TBGS"
        description="✓ Professionele dakdekker Nuenen ✓ EPDM, bitumen, dakpannen ✓ Daklekkage reparatie ✓ Dakisolatie ✓ Lokale service ✓ Gratis offerte"
        url="https://tbgs.nl/nl/totaal-dak-specialist/nuenen"
        keywords="dakdekker Nuenen, dakreparatie Nuenen, EPDM Nuenen, bitumen dak Nuenen, dakisolatie Nuenen, lekkage Nuenen"
      />
      <LocalSEOSchema businessData={{
        "@type": "RoofingContractor",
        name: "TBGS Totaal Dak Specialist - Nuenen",
        address: {
          addressLocality: "Nuenen",
          addressRegion: "Noord-Brabant", 
          addressCountry: "NL"
        },
        telephone: "+31 40 202 6744",
        email: "info@tbgs.nl",
        website: "https://tbgs.nl/nl/totaal-dak-specialist/nuenen",
        geo: {
          latitude: 51.4702,
          longitude: 5.5544
        },
        areaServed: ["Nuenen", "Noord-Brabant"],
        rating: {
          ratingValue: 4.8,
          reviewCount: 127
        },
        openingHours: [
          "Mo-Fr 07:00-17:00",
          "Sa 08:00-16:00"
        ]
      }} />

      <section className="relative bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Nuenen, Noord-Brabant
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Uw dakdekker in Nuenen
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professionele dakwerkzaamheden in Nuenen door ervaren dakdekkers. Van lekkage reparatie 
              tot complete dakvernieuwing - lokale service met garantie.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={onOpenContactModal}
                size="lg"
                className="bg-tbgs-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Gratis Dakadvies
              </Button>
              <a 
                href="tel:+31402026744"
                className="inline-flex items-center px-8 py-3 border-2 border-tbgs-red text-tbgs-red rounded-lg font-semibold hover:bg-tbgs-red hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                040 202 6744
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Dakdekker Diensten in Nuenen
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">EPDM Dakbedekking</h3>
                  <p className="text-gray-600 mb-4">
                    Duurzame EPDM dakbedekking voor platte daken in Nuenen. 25 jaar garantie 
                    op materiaal en vakkundige uitvoering door gecertificeerde dakdekkers.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Brandwerend en UV-bestendig
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Snelle en nette installatie
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Daklekkage Reparatie</h3>
                  <p className="text-gray-600 mb-4">
                    Snelle reparatie van daklekkages in Nuenen. Wij lokaliseren en verhelpen 
                    lekkages professioneel met gebruikmaking van moderne detectieapparatuur.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      24/7 noodservice beschikbaar
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Garantie op alle reparaties
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Dakdekker Nodig in Nuenen?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Neem contact op voor vakkundige dakwerkzaamheden in Nuenen. 
              Gratis inspectie en advies op maat.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={onOpenContactModal}
                size="lg"
                className="bg-tbgs-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Gratis Offerte Nuenen
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}