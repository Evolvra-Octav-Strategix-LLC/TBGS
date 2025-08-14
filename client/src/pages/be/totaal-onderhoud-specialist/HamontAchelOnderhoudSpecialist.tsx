import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

interface HamontAchelOnderhoudSpecialistProps {
  onOpenContactModal: () => void;
}

export default function HamontAchelOnderhoudSpecialist({ onOpenContactModal }: HamontAchelOnderhoudSpecialistProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="Onderhoudsbedrijf in Hamont-Achel | Totaal Onderhoud Specialist – TBGS België"
        description="✓ Professioneel onderhoudsbedrijf Hamont-Achel ✓ Preventief onderhoud ✓ Reparatiediensten ✓ Onderhoudscontracten ✓ België service ✓ Gratis offerte"
        url="https://tbgs.nl/be/totaal-onderhoud-specialist/hamont-achel"
        keywords="onderhoudsbedrijf Hamont-Achel, onderhoudsservice Hamont-Achel België"
      />
      <LocalSEOSchema businessData={{
        name: "TBGS Totaal Onderhoud Specialist - Hamont-Achel",
        address: {
          addressLocality: "Hamont-Achel",
          addressRegion: "Limburg", 
          addressCountry: "BE"
        },
        telephone: "+32 11 34 24 50",
        email: "info@tbgs.nl",
        website: "https://tbgs.nl/be/totaal-onderhoud-specialist/hamont-achel",
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

      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Hamont-Achel, Limburg
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Uw onderhoudsbedrijf in Hamont-Achel
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Betrouwbaar onderhoudsbedrijf in Hamont-Achel voor al uw onderhoudsbehoeften. 
              Lokale service in België met jarenlange ervaring.
            </p>

            <Button 
              onClick={onOpenContactModal}
              size="lg"
              className="bg-tbgs-green hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Gratis Onderhoudsadvies
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}