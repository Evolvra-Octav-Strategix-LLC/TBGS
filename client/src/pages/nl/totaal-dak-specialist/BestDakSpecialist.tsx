import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, CheckCircle } from "lucide-react";

interface BestDakSpecialistProps {
  onOpenContactModal: () => void;
}

export default function BestDakSpecialist({ onOpenContactModal }: BestDakSpecialistProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="Dakdekker in Best | Totaal Dak Specialist – TBGS"
        description="✓ Professionele dakdekker Best ✓ EPDM, bitumen, dakpannen ✓ Daklekkage reparatie ✓ Dakisolatie ✓ Lokale service ✓ Gratis offerte"
        url="https://tbgs.nl/nl/totaal-dak-specialist/best"
        keywords="dakdekker Best, dakreparatie Best, EPDM Best, bitumen dak Best, dakisolatie Best, lekkage Best"
      />
      <LocalSEOSchema businessData={{
        "@type": "RoofingContractor",
        name: "TBGS Totaal Dak Specialist - Best",
        address: {
          addressLocality: "Best",
          addressRegion: "Noord-Brabant", 
          addressCountry: "NL"
        },
        telephone: "+31 40 202 6744",
        email: "info@tbgs.nl",
        website: "https://tbgs.nl/nl/totaal-dak-specialist/best",
        geo: {
          latitude: 51.5078,
          longitude: 5.3897
        },
        areaServed: ["Best", "Noord-Brabant"],
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
              Best, Noord-Brabant
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Uw dakdekker in Best
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Vakkundige dakdekker in Best voor alle dakwerkzaamheden. Jarenlange ervaring 
              met platte daken, hellende daken en alle soorten reparaties.
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
              Dakdekker Best - Onze Diensten
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Dakgoten Best</h3>
                  <p className="text-gray-600 mb-4">
                    Plaatsing en onderhoud van dakgoten in Best. Aluminium, PVC en zinken 
                    dakgoten met professionele installatie en jarenlange garantie.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Maatwerk dakgoten op locatie
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Inclusief hemelwaterafvoer
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Dakpannen Reparatie</h3>
                  <p className="text-gray-600 mb-4">
                    Reparatie en vervanging van dakpannen in Best. Vakkundige herstel van 
                    beschadigde dakpannen met passende materialen.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Alle soorten dakpannen op voorraad
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Kleurpassende vervanging
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
              Dakdekker Nodig in Best?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Betrouwbare dakspecialist voor Best en omgeving. Vakkundige service 
              voor al uw dakwerkzaamheden met uitgebreide garantie.
            </p>

            <Button 
              onClick={onOpenContactModal}
              size="lg"
              className="bg-tbgs-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Gratis Offerte Best
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}