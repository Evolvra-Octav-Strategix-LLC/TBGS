import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

interface EindhovenBouwSpecialistProps {
  onOpenContactModal: () => void;
}

export default function EindhovenBouwSpecialist({ onOpenContactModal }: EindhovenBouwSpecialistProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="Aannemer in Eindhoven | Totaal Bouw Specialist – TBGS"
        description="✓ Professionele aannemer Eindhoven ✓ Verbouwingen ✓ Renovaties ✓ Nieuwbouw ✓ Algemene bouwwerken ✓ Lokale service ✓ Gratis offerte"
        url="https://tbgs.nl/nl/totaal-bouw-specialist/eindhoven"
        keywords="aannemer Eindhoven, verbouwing Eindhoven, renovatie Eindhoven, nieuwbouw Eindhoven, bouwbedrijf Eindhoven"
      />
      <LocalSEOSchema businessData={{
        "@type": "GeneralContractor",
        name: "TBGS Totaal Bouw Specialist - Eindhoven",
        address: {
          addressLocality: "Eindhoven",
          addressRegion: "Noord-Brabant", 
          addressCountry: "NL"
        },
        telephone: "+31 40 202 6744",
        email: "info@tbgs.nl",
        website: "https://tbgs.nl/nl/totaal-bouw-specialist/eindhoven",
        geo: {
          latitude: 51.4416,
          longitude: 5.4697
        },
        areaServed: ["Eindhoven", "Noord-Brabant"],
        rating: {
          ratingValue: 4.8,
          reviewCount: 127
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
              Eindhoven, Noord-Brabant
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Uw aannemer in Eindhoven
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ervaren aannemer in Eindhoven voor alle bouwwerkzaamheden. Van kleine verbouwingen 
              tot complete renovaties - vakmanschap met garantie door lokale professionals.
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