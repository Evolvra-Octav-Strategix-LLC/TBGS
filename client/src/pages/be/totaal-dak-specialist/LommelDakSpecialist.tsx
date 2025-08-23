import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

interface LommelDakSpecialistProps {
  onOpenContactModal: () => void;
}

export default function LommelDakSpecialist({ onOpenContactModal }: LommelDakSpecialistProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="Dakdekker in Lommel | Totaal Dak Specialist – TBGS België"
        description="✓ Professionele dakdekker Lommel ✓ EPDM, bitumen, dakpannen ✓ Daklekkage reparatie ✓ Dakisolatie ✓ België service ✓ Gratis offerte"
        url="https://tbgs.nl/be/totaal-dak-specialist/lommel"
        keywords="dakdekker Lommel, dakreparatie Lommel, EPDM Lommel, bitumen dak Lommel, dakisolatie Lommel België"
      />
      <LocalSEOSchema businessData={{
        name: "TBGS Totaal Dak Specialist - Lommel",
        address: {
          addressLocality: "Lommel",
          addressRegion: "Limburg", 
          addressCountry: "BE"
        },
        telephone: "+32 11 34 24 50",
        email: "info@tbgs.nl",
        website: "https://tbgs.nl/be/totaal-dak-specialist/lommel",
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
          "Mo-Fr 07:00-17:00",
          "Sa 08:00-16:00"
        ]
      }} />

      <section className="relative bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Lommel, Limburg
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Uw dakdekker in Lommel
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professionele dakwerkzaamheden in Lommel door ervaren dakdekkers. Van daklekkage 
              reparatie tot complete dakvernieuwing - betrouwbare service in België.
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
                href="tel:+3211342450"
                className="inline-flex items-center px-8 py-3 border-2 border-tbgs-red text-tbgs-red rounded-lg font-semibold hover:bg-tbgs-red hover:text-white transition-colors"
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Dakspecialist Lommel
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Betrouwbare dakdekker voor Lommel en omgeving. Vakkundige dakwerkzaamheden 
              door gecertificeerde specialisten in België.
            </p>

            <Button 
              onClick={onOpenContactModal}
              size="lg"
              className="bg-tbgs-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Gratis offerte Lommel
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}