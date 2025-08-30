import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import SEOHead from "@/lib/seo";
import Footer from "@/components/Footer";
import ContactModalV2 from "@/components/ContactModalV2";
import { CheckCircle, Clock, Phone, Mail, MapPin, Calculator, FileText, Users, Award, Star, Zap, Shield, ThumbsUp, Building, Home } from "lucide-react";

export default function GratisOfferte() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="Gratis Offerte Aanvragen - TBGS B.V. | Professionele Dak-, Schoorsteen-, Onderhoud- en Bouwdiensten"
        description="Vraag nu een gratis offerte aan voor uw dak-, schoorsteen-, onderhoud- of bouwproject. TBGS B.V. biedt professionele diensten in heel Nederland en België. Binnen 24 uur contact!"
        keywords="gratis offerte, dakdekker offerte, schoorsteen reparatie offerte, bouw offerte, onderhoud offerte, TBGS aanvraag"
        canonical="https://tbgs.nl/gratis-offerte"
      />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Hero Section */}
        <section className="relative py-12 px-4 sm:px-6 lg:px-8 pt-[2px] pb-[2px]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <div className="mb-8">
                <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-semibold bg-tbgs-navy text-white">
                  80 Jaar Ervaring • 4 Generaties Vakmanschap
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Gratis Offerte
                  <span className="block text-3xl md:text-4xl lg:text-5xl text-tbgs-navy mt-2">
                    Binnen 24 Uur
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Professionele dienstverlening voor al uw dak-, schoorsteen-, onderhoud- en bouwprojecten. 
                  Van spoedservice tot complete renovaties - wij staan voor u klaar.
                </p>
              </div>

            </div>
          </div>
        </section>
        {/* Form Section - Moved to Top */}
        <section className="px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto pt-8 pb-16">
            <ContactModalV2 />
          </div>
        </section>
        {/* Why Choose TBGS Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Waarom Kiezen Voor TBGS?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                80 jaar ervaring, 4 generaties vakmanschap en altijd de beste kwaliteit voor de scharpste prijs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-tbgs-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Familiebedrijf</h3>
                <p className="text-gray-600">4 generaties ervaring, doorgeegeven vakmanschap en persoonlijke service</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-tbgs-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <ThumbsUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Kwaliteitsgarantie</h3>
                <p className="text-gray-600">Alleen de beste materialen en vakmannen. Garantie op al ons werk</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-tbgs-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Spoedservice</h3>
                <p className="text-gray-600">24/7 beschikbaar voor noodgevallen. Binnen 24 uur ter plaatse</p>
              </div>
            </div>
          </div>
        </section>
        {/* Trust Indicators */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-tbgs-navy">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Vertrouwd Door Duizenden Klanten
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">80+</div>
                <div className="text-sm opacity-90">Jaar Ervaring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">5000+</div>
                <div className="text-sm opacity-90">Projecten Voltooid</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4.8★</div>
                <div className="text-sm opacity-90">Google Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24u</div>
                <div className="text-sm opacity-90">Reactietijd</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}