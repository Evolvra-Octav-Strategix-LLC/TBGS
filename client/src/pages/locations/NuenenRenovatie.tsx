import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Shield, Award, Zap, CheckCircle, Home, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface NuenenRenovatieProps {
  onOpenContactModal: () => void;
}

export default function NuenenRenovatie({ onOpenContactModal }: NuenenRenovatieProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="Renovatie Nuenen Van Gogh Dorp - Historische Panden Specialist | TBGS Nuenen"
        description="🏡 Renovatie Nuenen Van Gogh Dorp ✓ Historische panden specialist ✓ Karakterbehoud renovaties ✓ Monumentaal onderhoud ✓ TBGS Nuenen ✓ Gratis offerte"
        url="https://tbgs.nl/nuenen/renovatie"
        keywords="renovatie Nuenen, Van Gogh dorp renovatie, historische panden renovatie Nuenen, monumentaal onderhoud Nuenen, karakterbehoud Nuenen, aannemer Nuenen"
      />
      <LocalSEOSchema businessData={{
        name: "TBGS Nuenen - Renovatie Van Gogh Dorp Specialist",
        address: {
          streetAddress: "Servicegebied Nuenen",
          addressLocality: "Nuenen",
          addressRegion: "Noord-Brabant", 
          postalCode: "5670",
          addressCountry: "NL"
        },
        telephone: "+31 40 202 6744",
        email: "nuenen@tbgs.nl",
        website: "https://tbgs-bv.nl/nuenen/renovatie",
        geo: { latitude: 51.4700, longitude: 5.5500 },
        areaServed: ["Nuenen", "Gerwen", "Nederwetten"],
        rating: { ratingValue: 4.9, reviewCount: 32 },
        openingHours: ["Mo-Fr 07:30-17:30", "Sa 08:00-16:00"]
      }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-green-100 border border-green-200 rounded-full px-3 py-2 text-xs sm:text-sm font-medium text-green-700 mb-4 sm:mb-6">
              <Home className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Van Gogh Dorp Renovatie</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Renovatie</span>
              <br />
              <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl">Van Gogh Dorp</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto px-2">
              <strong className="text-green-600">Renovatie in historisch Nuenen</strong> met respect voor het karakter van Van Gogh dorp. <strong>Erfgoedspecialist</strong> en moderne technieken gecombineerd.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12 px-2">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-green-600 mb-1">125+</div>
                <div className="text-xs sm:text-sm text-slate-600">Jaar Historie</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-blue-600 mb-1">100%</div>
                <div className="text-xs sm:text-sm text-slate-600">Karakterbehoud</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-purple-600 mb-1">5★</div>
                <div className="text-xs sm:text-sm text-slate-600">Dorpsreview</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-orange-600 mb-1">15+</div>
                <div className="text-xs sm:text-sm text-slate-600">Jaar Lokaal</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
              <button 
                onClick={onOpenContactModal}
                className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-xl hover:shadow-green-500/25 transform hover:-translate-y-1 inline-flex items-center w-full sm:w-auto"
              >
                <Home className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />
                <span className="text-xs sm:text-sm lg:text-base">Renovatie Van Gogh Dorp</span>
              </button>
              <a 
                href="https://wa.me/31614595142" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-blue-500 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:bg-blue-400 transition-all duration-300 shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1 inline-flex items-center w-full sm:w-auto"
              >
                <i className="fab fa-whatsapp text-lg sm:text-xl mr-2 group-hover:animate-bounce"></i>
                <span className="text-xs sm:text-sm lg:text-base">Direct WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              Renovatie in Van Gogh Dorp Nuenen?
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
              Specialist in historische panden met karakterbehoud
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
              <a 
                href="tel:+31402026744"
                className="bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                <span className="text-xs sm:text-sm lg:text-base">040 - 202 6744</span>
              </a>
              <button 
                onClick={onOpenContactModal}
                className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:bg-white hover:text-green-600 transition-all duration-300 w-full sm:w-auto"
              >
                <span className="text-xs sm:text-sm lg:text-base">Gratis offerte</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}