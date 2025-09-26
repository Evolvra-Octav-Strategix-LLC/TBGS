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
        url="/offerte"
      />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Hero Section with USP */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-tbgs-navy to-blue-700 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Vraag Vandaag Nog Uw Gratis Offerte Aan
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Binnen 24 uur reactie • Gratis dakinspectie • 25+ jaar ervaring • Werkzaamheden in Nederland & België
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>24/7 Spoedservice</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <Award className="w-5 h-5 text-yellow-300" />
                <span>Kwaliteitsgarantie</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-yellow-300" />
                <span>4.8★ Google Reviews</span>
              </div>
            </div>
          </div>
        </section>
        {/* Form Section - Top Priority */}
        <section className="px-4 sm:px-6 lg:px-8 bg-gray-50 -mt-8 relative z-10">
          <div className="max-w-6xl mx-auto pt-8 pb-16">
            <ContactModalV2 />
          </div>
        </section>

        {/* SEO Content Block */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Waarom Een Offerte Aanvragen Bij TBGS B.V.?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Bij TBGS B.V. begrijpen we dat het aanvragen van een offerte een belangrijke stap is in uw bouw-, renovatie- of onderhoudsproject. 
                Met meer dan 80 jaar ervaring als familiebedrijf in de regio Eindhoven en omstreken, bieden wij transparante en concurrerende offertes 
                voor al uw dakwerkzaamheden, schoorsteenreparaties, onderhoudsdiensten en bouwprojecten.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ons Offerteproces: Van Aanvraag Tot Uitvoering</h3>
              <p className="text-gray-700 mb-4">
                Ons gestructureerde proces zorgt ervoor dat u altijd weet waar u aan toe bent:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li><strong>Aanvraag:</strong> Vul eenvoudig ons formulier in met uw projectdetails</li>
                <li><strong>Gratis Inspectie:</strong> Binnen 24 uur nemen wij contact op voor een afspraak</li>
                <li><strong>Offerte:</strong> Binnen 48 uur ontvangt u een gedetailleerde, vrijblijvende offerte</li>
                <li><strong>Uitvoering:</strong> Bij akkoord starten we uw project met vakkundige uitvoering</li>
              </ul>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Onze Specialistische Diensten</h3>
              <p className="text-gray-700 mb-4">
                TBGS B.V. bestaat uit vier gespecialiseerde divisies, elk met eigen expertise:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-tbgs-red mb-2">🏠 TDS - Totaal Dak Specialist</h4>
                  <p className="text-gray-600 text-sm">Daklekkage, dakrenovatie, dakbedekking, zonnepanelen en alle dakwerkzaamheden</p>
                </div>
                <div>
                  <h4 className="font-semibold text-tbgs-blue mb-2">🏭 TSS - Totaal Schoorsteen Specialist</h4>
                  <p className="text-gray-600 text-sm">Schoorsteenreparatie, jaarlijkse controle, rookgasafvoer en nieuwe schoorsteenbouw</p>
                </div>
                <div>
                  <h4 className="font-semibold text-tbgs-green mb-2">🔧 TOS - Totaal Onderhoud Specialist</h4>
                  <p className="text-gray-600 text-sm">Gevelreiniging, schilderwerk, dakgootonderhoud en preventief onderhoud</p>
                </div>
                <div>
                  <h4 className="font-semibold text-tbgs-orange mb-2">🏗️ TBS - Totaal Bouw Specialist</h4>
                  <p className="text-gray-600 text-sm">Verbouwingen, aanbouw, renovaties, keukens, badkamers en nieuwbouwprojecten</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Werkgebied: Nederland & België</h3>
              <p className="text-gray-700 mb-4">
                Vanuit onze basis in Eindhoven werken wij in heel Nederland en België. Onze specialisten zijn actief in 
                <strong> Eindhoven, Nuenen, Veldhoven, Best, Waalre, Geldrop-Mierlo</strong> en vele andere Nederlandse gemeenten. 
                In België bedienen wij onder andere <strong>Lommel, Pelt, Neerpelt, Overpelt, Hamont-Achel, Retie</strong> en de gehele provincie Limburg.
              </p>
              
              <p className="text-gray-700">
                Of het nu gaat om urgente daklekkage in Eindhoven, schoorsteenonderhoud in Lommel, of een complete renovatie in Veldhoven - 
                TBGS B.V. staat voor u klaar met vakkundig advies en een eerlijke offerte. Neem vandaag nog contact op en ervaar waarom 
                duizenden klanten ons vertrouwen voor hun bouw- en onderhoudsprojecten.
              </p>
            </div>
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