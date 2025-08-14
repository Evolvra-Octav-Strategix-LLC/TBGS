import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

interface NuenenSchoorsteenSpecialistProps {
  onOpenContactModal: () => void;
}

export default function NuenenSchoorsteenSpecialist({ onOpenContactModal }: NuenenSchoorsteenSpecialistProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="Schoorsteenveger in Nuenen | Totaal Schoorsteen Specialist – TBGS"
        description="✓ Professionele schoorsteenveger Nuenen ✓ Schoorsteenreiniging ✓ Rookgasafvoer ✓ CV ketel aansluiting ✓ Lokale service ✓ Gratis offerte"
        url="https://tbgs.nl/nl/totaal-schoorsteen-specialist/nuenen"
        keywords="schoorsteenveger Nuenen, schoorsteenreiniging Nuenen, rookgasafvoer Nuenen, ketel aansluiting Nuenen"
      />
      <LocalSEOSchema businessData={{
        "@type": "ChimneySweep",
        name: "TBGS Totaal Schoorsteen Specialist - Nuenen",
        address: {
          addressLocality: "Nuenen",
          addressRegion: "Noord-Brabant", 
          addressCountry: "NL"
        },
        telephone: "+31 40 202 6744",
        email: "info@tbgs.nl",
        website: "https://tbgs.nl/nl/totaal-schoorsteen-specialist/nuenen",
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
          "Mo-Fr 08:00-17:00",
          "Sa 09:00-16:00"
        ]
      }} />

      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Nuenen, Noord-Brabant
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Uw schoorsteenveger in Nuenen
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Betrouwbare schoorsteenveger in Nuenen voor professionele reiniging en onderhoud. 
              Gecertificeerde service voor veilige rookgasafvoer.
            </p>

            <Button 
              onClick={onOpenContactModal}
              size="lg"
              className="bg-tbgs-blue hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Gratis Inspectie Nuenen
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}