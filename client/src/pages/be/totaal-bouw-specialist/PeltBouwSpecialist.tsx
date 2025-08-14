import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

interface PeltBouwSpecialistProps {
  onOpenContactModal: () => void;
}

export default function PeltBouwSpecialist({ onOpenContactModal }: PeltBouwSpecialistProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="Aannemer in Pelt | Totaal Bouw Specialist – TBGS België"
        description="✓ Professionele aannemer Pelt ✓ Verbouwingen ✓ Renovaties ✓ Nieuwbouw ✓ Algemene bouwwerken ✓ België service ✓ Gratis offerte"
        url="https://tbgs.nl/be/totaal-bouw-specialist/pelt"
        keywords="aannemer Pelt, verbouwing Pelt, renovatie Pelt, nieuwbouw Pelt België"
      />
      <LocalSEOSchema businessData={{
        name: "TBGS Totaal Bouw Specialist - Pelt",
        address: {
          addressLocality: "Pelt",
          addressRegion: "Limburg", 
          addressCountry: "BE"
        },
        telephone: "+32 11 34 24 50",
        email: "info@tbgs.nl",
        website: "https://tbgs.nl/be/totaal-bouw-specialist/pelt",
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

      <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Pelt, Limburg
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Uw aannemer in Pelt
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professionele aannemer in Pelt voor complete bouwprojecten. 
              Vakkundige service en kwaliteit die u kunt vertrouwen in België.
            </p>

            <Button 
              onClick={onOpenContactModal}
              size="lg"
              className="bg-tbgs-orange hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Gratis Bouwadvies
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}