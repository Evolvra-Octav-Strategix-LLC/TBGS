import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Shield, Award, Zap, CheckCircle, AlertTriangle, Droplets } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BestDaklekkageProps {
  onOpenContactModal: () => void;
}

export default function BestDaklekkage({ onOpenContactModal }: BestDaklekkageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="Daklekkage Reparatie Best | Binnen 2 Uur | Familiedorp Specialist"
        description="🚨 SPOED DAKLEKKAGE BEST? ✓ Binnen 2 uur ter plaatse ✓ Familiedorp specialist ✓ Gezinswoningen ervaring ✓ 15 jaar garantie ✓ 24/7 spoeddienst ✓ 75+ tevreden gezinnen"
        url="https://tbgs.nl/nl/best/daklekkage"
        keywords="daklekkage Best, spoed daklekkage Best, dakdekker Best familiedorp, daklek Best binnen 2 uur, gezinswoningen daklekkage specialist Best"
      />
      <LocalSEOSchema businessData={{
        name: "TBGS Best - Daklekkage Familiedorp Specialist",
        address: {
          addressLocality: "Best",
          addressRegion: "Noord-Brabant", 
          postalCode: "5684",
          addressCountry: "NL"
        },
        telephone: "+31 40 202 6744",
        email: "best@tbgs.nl",
        website: "https://tbgs-bv.nl/best/daklekkage",
        geo: { latitude: 51.5065, longitude: 5.3892 },
        areaServed: ["Best", "Noord-Brabant"],
        rating: { ratingValue: 4.9, reviewCount: 23 },
        openingHours: ["Mo-Su 00:00-24:00"]
      }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-red-100 border border-red-200 rounded-full px-3 py-2 text-xs sm:text-sm font-medium text-red-700 mb-4 sm:mb-6">
              <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>24u Familiedorp Service</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Daklekkage</span>
              <br />
              <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl">Reparatie Best</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto px-2">
              <strong className="text-red-600">Daklek in familiedorp Best?</strong> Specialist in <strong>gezinswoningen</strong> met persoonlijke dorpsservice. 24u spoeddienst voor alle families.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12 px-2">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-red-600 mb-1">15m</div>
                <div className="text-xs sm:text-sm text-slate-600">Response Tijd</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-green-600 mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-slate-600">Familie Service</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-blue-600 mb-1">4.9★</div>
                <div className="text-xs sm:text-sm text-slate-600">Familie Review</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-orange-600 mb-1">18+</div>
                <div className="text-xs sm:text-sm text-slate-600">Jaar Best</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
              <button 
                onClick={onOpenContactModal}
                className="group bg-gradient-to-r from-red-500 to-red-600 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:from-red-400 hover:to-red-500 transition-all duration-300 shadow-xl hover:shadow-red-500/25 transform hover:-translate-y-1 inline-flex items-center w-full sm:w-auto"
              >
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />
                <span className="text-xs sm:text-sm lg:text-base">Spoedinterventie Best</span>
              </button>
              <a 
                href="https://wa.me/31614595142" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-green-500 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:bg-green-400 transition-all duration-300 shadow-xl hover:shadow-green-500/25 transform hover:-translate-y-1 inline-flex items-center w-full sm:w-auto"
              >
                <i className="fab fa-whatsapp text-lg sm:text-xl mr-2 group-hover:animate-bounce"></i>
                <span className="text-xs sm:text-sm lg:text-base">Direct WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              Daklek in Familiedorp Best?
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
              24/7 spoedinterventie voor alle gezinswoningen
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
              <a 
                href="tel:+31402026744"
                className="bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                <span className="text-xs sm:text-sm lg:text-base">040 - 202 6744</span>
              </a>
              <button 
                onClick={onOpenContactModal}
                className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:bg-white hover:text-red-600 transition-all duration-300 w-full sm:w-auto"
              >
                <span className="text-xs sm:text-sm lg:text-base">Gratis Familie Offerte</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}