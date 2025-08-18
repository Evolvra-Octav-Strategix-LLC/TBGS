import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Shield, Award, Zap, CheckCircle, AlertTriangle, Droplets } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DefinitievereparatiesCard from "@/components/DefinitievereparatiesCard";

interface VeldhovenDaklekkageProps {
  onOpenContactModal: () => void;
}

export default function VeldhovenDaklekkage({ onOpenContactModal }: VeldhovenDaklekkageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="Daklekkage Reparatie Veldhoven | Direct Service | ASML Buurt Specialist"
        description="🚨 SPOED DAKLEKKAGE VELDHOVEN? ✓ Direct ter plaatse ✓ ASML buurt specialist ✓ Moderne nieuwbouw ervaring ✓ 15 jaar garantie ✓ 24/7 spoeddienst ✓ 150+ tevreden klanten"
        url="https://tbgs.nl/nl/veldhoven/daklekkage"
        keywords="daklekkage Veldhoven, spoed daklekkage Veldhoven, dakdekker Veldhoven ASML buurt, daklek Veldhoven binnen 2 uur, nieuwbouw daklekkage specialist Veldhoven"
      />
      <LocalSEOSchema businessData={{
        name: "TBGS Veldhoven - Daklekkage Nieuwbouw Specialist",
        address: {
          streetAddress: "Servicegebied Veldhoven",
          addressLocality: "Veldhoven",
          addressRegion: "Noord-Brabant", 
          postalCode: "5500",
          addressCountry: "NL"
        },
        telephone: "+31 40 202 6744",
        email: "veldhoven@tbgs.nl",
        website: "https://tbgs-bv.nl/veldhoven/daklekkage",
        geo: { latitude: 51.4170, longitude: 5.4041 },
        areaServed: ["Veldhoven", "Oerle", "Zeelst"],
        rating: { ratingValue: 4.8, reviewCount: 45 },
        openingHours: ["Mo-Su 00:00-24:00"]
      }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-2 text-sm font-medium text-orange-700 mb-6">
              <AlertTriangle className="w-4 h-4" />
              <span>24u Nieuwbouw Specialist</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Daklekkage</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">Reparatie Veldhoven</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
              <strong className="text-orange-600">Daklek in moderne nieuwbouw Veldhoven?</strong> Specialist in <strong>ASML buurt</strong> en nieuwe woonwijken. 24u spoeddienst met garantie op moderne materialen.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-orange-600 mb-1 sm:mb-2">45m</div>
                <div className="text-xs sm:text-sm lg:text-base text-slate-600">Response Tijd</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-red-600 mb-1 sm:mb-2">24/7</div>
                <div className="text-xs sm:text-sm lg:text-base text-slate-600">Service</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-600 mb-1 sm:mb-2">4.8★</div>
                <div className="text-xs sm:text-sm lg:text-base text-slate-600">Nieuwbouw Review</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-green-600 mb-1 sm:mb-2">12j</div>
                <div className="text-xs sm:text-sm lg:text-base text-slate-600">ASML Ervaring</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button 
                onClick={onOpenContactModal}
                className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg lg:text-xl hover:from-orange-400 hover:to-red-400 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-1 hover:scale-105 inline-flex items-center w-full sm:w-auto"
              >
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:animate-bounce" />
                <span className="text-sm sm:text-base lg:text-xl">Nieuwbouw Spoedservice</span>
              </button>
              <a 
                href="https://wa.me/31614595142" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-green-500 text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg lg:text-xl hover:bg-green-400 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-1 hover:scale-105 inline-flex items-center w-full sm:w-auto"
              >
                <i className="fab fa-whatsapp text-xl sm:text-2xl mr-2 sm:mr-3 group-hover:animate-bounce"></i>
                <span className="text-sm sm:text-base lg:text-xl">Direct WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Veldhoven Specialization */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Nieuwbouw Daklekkage <span className="text-orange-600">Veldhoven</span>
              </h2>
              <p className="text-lg text-slate-600">
                Veldhoven heeft veel moderne nieuwbouw. TBGS kent alle moderne daktechnieken en materialen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Veldhoven Nieuwbouw</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• ASML buurt moderne woningen</li>
                    <li>• Nieuwbouwwijken De Run</li>
                    <li>• Moderne appartementen complexen</li>
                    <li>• High-tech daksystemen</li>
                    <li>• Energiezuinige dakconstructies</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Moderne Dak Expertise</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• EPDM rubber daken specialist</li>
                    <li>• Groene daken onderhoud</li>
                    <li>• Zonnepanelen dak integratie</li>
                    <li>• Moderne dakgoten systemen</li>
                    <li>• Smart home dak technologie</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Moderne Daklekkage in Veldhoven?
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              Nieuwbouw specialist met kennis van moderne daksystemen
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+31402026744"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-3" />
                040 - 202 6744
              </a>
              <button 
                onClick={onOpenContactModal}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                Gratis Nieuwbouw Inspectie
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}