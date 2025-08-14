import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

interface EindhovenSchoorsteenSpecialistProps {
  onOpenContactModal: () => void;
}

export default function EindhovenSchoorsteenSpecialist({ onOpenContactModal }: EindhovenSchoorsteenSpecialistProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="Schoorsteenveger in Eindhoven | Totaal Schoorsteen Specialist – TBGS"
        description="✓ Professionele schoorsteenveger Eindhoven ✓ Schoorsteenreiniging ✓ Rookgasafvoer ✓ CV ketel aansluiting ✓ Lokale service ✓ Gratis offerte"
        url="https://tbgs.nl/nl/totaal-schoorsteen-specialist/eindhoven"
        keywords="schoorsteenveger Eindhoven, schoorsteenreiniging Eindhoven, rookgasafvoer Eindhoven, ketel aansluiting Eindhoven"
      />
      <LocalSEOSchema businessData={{
        "@type": "ChimneySweep",
        name: "TBGS Totaal Schoorsteen Specialist - Eindhoven",
        address: {
          addressLocality: "Eindhoven",
          addressRegion: "Noord-Brabant", 
          addressCountry: "NL"
        },
        telephone: "+31 40 202 6744",
        email: "info@tbgs.nl",
        website: "https://tbgs.nl/nl/totaal-schoorsteen-specialist/eindhoven",
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

      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Eindhoven, Noord-Brabant
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Uw schoorsteenveger in Eindhoven
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professionele schoorsteenservice in Eindhoven. Van reiniging tot renovatie, 
              wij zorgen voor veilige rookgasafvoer en optimale prestaties van uw installatie.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={onOpenContactModal}
                size="lg"
                className="bg-tbgs-blue hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Gratis Inspectie
              </Button>
              <a 
                href="tel:+31402026744"
                className="inline-flex items-center px-8 py-3 border-2 border-tbgs-blue text-tbgs-blue rounded-lg font-semibold hover:bg-tbgs-blue hover:text-white transition-colors"
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Schoorsteenservice Eindhoven
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Gecertificeerde schoorsteenveger voor Eindhoven en omgeving. 
              Veilige en betrouwbare service voor al uw schoorsteenbehoeften.
            </p>

            <Button 
              onClick={onOpenContactModal}
              size="lg"
              className="bg-tbgs-blue hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Plan Schoorsteenreiniging
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}