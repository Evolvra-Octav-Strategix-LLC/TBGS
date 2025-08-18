import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Shield, Award, Zap, CheckCircle, AlertTriangle, Droplets } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface NuenenDaklekkageProps {
  onOpenContactModal: () => void;
}

export default function NuenenDaklekkage({ onOpenContactModal }: NuenenDaklekkageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="Daklekkage Reparatie Nuenen | Binnen 2 Uur | Van Gogh Dorp Specialist"
        description="🚨 SPOED DAKLEKKAGE NUENEN? ✓ Binnen 2 uur ter plaatse ✓ Van Gogh dorp specialist ✓ 15 jaar garantie ✓ 24/7 spoeddienst ✓ Historische panden ervaring ✓ 100+ tevreden klanten"
        url="https://tbgs.nl/nl/nuenen/daklekkage"
        keywords="daklekkage Nuenen, spoed daklekkage reparatie Nuenen, dakdekker Nuenen Van Gogh dorp, daklek Nuenen binnen 2 uur, nooddienst dak Nuenen, historische panden dakdekker"
      />
      <LocalSEOSchema businessData={{
        name: "TBGS Nuenen - Daklekkage Specialist Van Gogh Dorp",
        address: {
          streetAddress: "Servicegebied Nuenen",
          addressLocality: "Nuenen",
          addressRegion: "Noord-Brabant", 
          postalCode: "5670",
          addressCountry: "NL"
        },
        telephone: "+31 40 202 6744",
        email: "nuenen@tbgs.nl",
        website: "https://tbgs-bv.nl/nuenen/daklekkage",
        geo: { latitude: 51.4700, longitude: 5.5500 },
        areaServed: ["Nuenen", "Gerwen", "Nederwetten"],
        rating: { ratingValue: 4.9, reviewCount: 32 },
        openingHours: ["Mo-Su 00:00-24:00"]
      }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-red-100 border border-red-200 rounded-full px-4 py-2 text-sm font-medium text-red-700 mb-6">
              <AlertTriangle className="w-4 h-4" />
              <span>24u Spoeddienst Van Gogh Dorp</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Daklekkage</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">Reparatie Nuenen</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
              <strong className="text-red-600">Daklek in Van Gogh Dorp Nuenen?</strong> Specialist in historische panden en moderne woningen. <strong>24u spoeddienst</strong> met kennis van lokale bouwstijlen.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-red-600 mb-1 sm:mb-2">30m</div>
                <div className="text-xs sm:text-sm lg:text-base text-slate-600">Response Tijd</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-green-600 mb-1 sm:mb-2">24/7</div>
                <div className="text-xs sm:text-sm lg:text-base text-slate-600">Spoeddienst</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-600 mb-1 sm:mb-2">5★</div>
                <div className="text-xs sm:text-sm lg:text-base text-slate-600">Dorpsbeoordeling</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-orange-600 mb-1 sm:mb-2">15+</div>
                <div className="text-xs sm:text-sm lg:text-base text-slate-600">Jaar Lokaal</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button 
                onClick={onOpenContactModal}
                className="group bg-gradient-to-r from-red-500 to-red-600 text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg lg:text-xl hover:from-red-400 hover:to-red-500 transition-all duration-300 shadow-2xl hover:shadow-red-500/25 transform hover:-translate-y-1 hover:scale-105 inline-flex items-center w-full sm:w-auto"
              >
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:animate-bounce" />
                <span className="text-sm sm:text-base lg:text-xl">Spoedinterventie Nuenen</span>
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

      {/* Local Nuenen Knowledge */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Daklekkage Specialist <span className="text-red-600">Van Gogh Dorp</span>
              </h2>
              <p className="text-lg text-slate-600">
                Nuenen heeft unieke historische panden die speciale kennis vereisen. TBGS kent het dorp als geen ander.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Nuenen Specialiteiten</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Historische boerderijen dakwerk</li>
                    <li>• Van Gogh tijd karakteristieke panden</li>
                    <li>• Dorpskern monumentale woningen</li>
                    <li>• Moderne nieuwbouw Nuenen Zuid</li>
                    <li>• Landelijke villa daklekkages</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Lokale Voordelen Nuenen</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Binnen 15 minuten ter plaatse</li>
                    <li>• Kennis historische materialen</li>
                    <li>• Contacten erfgoedadviseurs</li>
                    <li>• Karakterbehoud gegarandeerd</li>
                    <li>• Dorpsgenoten vertrouwen ons</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Daklek in Van Gogh Dorp Nuenen?
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              Specialist in historische panden - 24/7 spoedinterventie
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+31402026744"
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-3" />
                040 - 202 6744
              </a>
              <button 
                onClick={onOpenContactModal}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                Gratis Offerte
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}