import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

interface LocationRetieProps {
  onOpenContactModal: () => void;
}

export default function LocationRetie({ onOpenContactModal }: LocationRetieProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="TBGS Retie – Dakdekker, Schoorsteenveger, Aannemer & Onderhoudsbedrijf"
        description="✓ TBGS Retie België ✓ Dakdekker, Schoorsteenveger, Onderhoudsbedrijf & Aannemer ✓ Lokale service Kempen ✓ 15+ jaar ervaring ✓ Gratis offerte"
        url="https://tbgs.nl/be/locaties/retie"
        keywords="TBGS Retie, dakdekker Retie, schoorsteenveger Retie, aannemer Retie, onderhoudsbedrijf Retie België"
      />
      <LocalSEOSchema businessData={{
        name: "TBGS BV - Retie",
        address: {
          addressLocality: "Retie",
          addressRegion: "Antwerpen", 
          addressCountry: "BE"
        },
        telephone: "+32 11 34 24 50",
        email: "info@tbgs.nl",
        website: "https://tbgs.nl/be/locaties/retie",
        geo: {
          latitude: 51.2667,
          longitude: 5.0833
        },
        areaServed: ["Retie", "Kempen", "België"],
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
              Retie, Kempen
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              TBGS Retie – Lokale Bouwservice
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Betrouwbare bouwdienstverlening in Retie en de Kempen regio. 
              Lokale vakmannen voor al uw bouw- en onderhoudsbehoeften in België.
            </p>

            <Button 
              onClick={onOpenContactModal}
              size="lg"
              className="bg-tbgs-navy hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Retie
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              TBGS Service in Retie
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Complete bouwdienstverlening in Retie door lokale specialisten. 
              Van dakwerkzaamheden tot verbouwingen - betrouwbare kwaliteit.
            </p>

            <Button 
              onClick={onOpenContactModal}
              size="lg"
              className="bg-tbgs-navy hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Gratis Adviesgesprek Retie
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}