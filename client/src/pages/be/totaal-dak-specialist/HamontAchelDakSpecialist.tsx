import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

interface HamontAchelDakSpecialistProps {
  onOpenContactModal: () => void;
}

export default function HamontAchelDakSpecialist({ onOpenContactModal }: HamontAchelDakSpecialistProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="Dakdekker in Hamont-Achel | Totaal Dak Specialist – TBGS België"
        description="✓ Professionele dakdekker Hamont-Achel ✓ EPDM, bitumen, dakpannen ✓ Daklekkage reparatie ✓ Dakisolatie ✓ België service ✓ Gratis offerte"
        url="https://tbgs.nl/be/totaal-dak-specialist/hamont-achel"
        keywords="dakdekker Hamont-Achel, dakreparatie Hamont-Achel, EPDM Hamont-Achel, bitumen dak Hamont-Achel België"
      />
      <LocalSEOSchema businessData={{
        name: "TBGS Totaal Dak Specialist - Hamont-Achel",
        address: {
          addressLocality: "Hamont-Achel",
          addressRegion: "Limburg", 
          addressCountry: "BE"
        },
        telephone: "+32 11 34 24 50",
        email: "info@tbgs.nl",
        website: "https://tbgs.nl/be/totaal-dak-specialist/hamont-achel",
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
          "Mo-Fr 07:00-17:00",
          "Sa 08:00-16:00"
        ]
      }} />

      <section className="relative bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Hamont-Achel, Limburg
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Uw dakdekker in Hamont-Achel
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Betrouwbare dakdekker in Hamont-Achel voor alle soorten dakwerkzaamheden. 
              Lokale service in België met jarenlange ervaring en garantie.
            </p>

            <Button 
              onClick={onOpenContactModal}
              size="lg"
              className="bg-tbgs-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Gratis Dakadvies Hamont-Achel
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}