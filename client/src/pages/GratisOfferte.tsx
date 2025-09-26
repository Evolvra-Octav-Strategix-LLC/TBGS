import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import SEOHead from "@/lib/seo";
import Footer from "@/components/Footer";
import ContactModalV2 from "@/components/ContactModalV2";
import GoogleReviewSlider from "@/components/GoogleReviewSlider";
import GoogleBusinessIntegration from "@/components/GoogleBusinessIntegration";
import { CheckCircle, Clock, Phone, Mail, MapPin, Calculator, FileText, Users, Award, Star, Zap, Shield, ThumbsUp, Building, Home, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import tdsLogo from "@assets/TDS 545x642 (1)_1755096847747.png";
import tssLogo from "@assets/TSS 545x642 (1)_1755096878001.png";
import tosLogo from "@assets/TOS 545x642 (1)_1755096847747.png";
import tbsLogo from "@assets/TBS 545x642 (1)_1755096847747.png";

export default function GratisOfferte() {
  useEffect(() => {
    // Start with collapsed header like in form steps (120px from top)
    // Delay to ensure page is fully loaded
    setTimeout(() => {
      window.scrollTo({ top: 120, behavior: 'instant' });
    }, 50);
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
        {/* Form Section - Direct Focus */}
        <section className="px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto py-8">
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
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 rounded-lg bg-white border flex items-center justify-center p-2 flex-shrink-0">
                    <img 
                      src={tdsLogo} 
                      alt="TDS Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-tbgs-red mb-2">TDS - Totaal Dak Specialist</h4>
                    <p className="text-gray-600 text-sm">Daklekkage, dakrenovatie, dakbedekking, zonnepanelen en alle dakwerkzaamheden</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 rounded-lg bg-white border flex items-center justify-center p-2 flex-shrink-0">
                    <img 
                      src={tssLogo} 
                      alt="TSS Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-tbgs-blue mb-2">TSS - Totaal Schoorsteen Specialist</h4>
                    <p className="text-gray-600 text-sm">Schoorsteenreparatie, jaarlijkse controle, rookgasafvoer en nieuwe schoorsteenbouw</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 rounded-lg bg-white border flex items-center justify-center p-2 flex-shrink-0">
                    <img 
                      src={tosLogo} 
                      alt="TOS Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-tbgs-green mb-2">TOS - Totaal Onderhoud Specialist</h4>
                    <p className="text-gray-600 text-sm">Gevelreiniging, schilderwerk, dakgootonderhoud en preventief onderhoud</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 rounded-lg bg-white border flex items-center justify-center p-2 flex-shrink-0">
                    <img 
                      src={tbsLogo} 
                      alt="TBS Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-tbgs-orange mb-2">TBS - Totaal Bouw Specialist</h4>
                    <p className="text-gray-600 text-sm">Verbouwingen, aanbouw, renovaties, keukens, badkamers en nieuwbouwprojecten</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Werkgebied: Nederland & België</h3>
              <p className="text-gray-700 mb-4">
                Vanuit onze basis in Eindhoven werken wij in heel Nederland en België. Onze specialisten zijn actief in 
                <strong> Eindhoven, Nuenen, Veldhoven, Best, Waalre, Geldrop-Mierlo</strong> en vele andere Nederlandse gemeenten. 
                In België bedienen wij onder andere <strong>Lommel, Pelt, Neerpelt, Overpelt, Hamont-Achel, Kaulille</strong> en de gehele provincie Limburg.
              </p>
              
              <p className="text-gray-700">
                Of het nu gaat om urgente daklekkage in Eindhoven, schoorsteenonderhoud in Lommel, of een complete renovatie in Veldhoven - 
                TBGS B.V. staat voor u klaar met vakkundig advies en een eerlijke offerte. Neem vandaag nog contact op en ervaar waarom 
                duizenden klanten ons vertrouwen voor hun bouw- en onderhoudsprojecten.
              </p>
            </div>
          </div>
        </section>
        
        {/* Locations & Google Business Profile */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Onze Werkgebieden
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                TBGS B.V. levert kwaliteitsdiensten in heel Nederland en België
              </p>
            </div>
            
            {/* Google Business Integration */}
            <div className="mb-12">
              <GoogleBusinessIntegration 
                placeId="ChIJVSc2_yXbxkcROATmSZNFGFU"
                showReviews={false}
                showMap={true}
                showHours={true}
                className=""
              />
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Veelgestelde Vragen Over Offertes
            </h2>
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Wat kost een offerte voor dakrenovatie in Eindhoven?
                </h3>
                <p className="text-gray-700">
                  Het aanvragen van een offerte bij TBGS is altijd gratis en vrijblijvend. De kosten voor dakrenovatie 
                  variëren afhankelijk van de grootte van het dak, gekozen materialen en complexiteit van het project. 
                  Gemiddeld liggen de kosten tussen €75-€150 per m² voor complete dakrenovatie.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Hoe snel krijg ik een reactie van TBGS?
                </h3>
                <p className="text-gray-700">
                  Wij nemen binnen 24 uur contact met u op na het indienen van uw offerteaanvraag. Voor spoedgevallen 
                  zoals daklekkage bieden wij 24/7 service en kunnen wij vaak dezelfde dag nog ter plaatse zijn.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Is een offerte gratis en vrijblijvend?
                </h3>
                <p className="text-gray-700">
                  Ja, alle offertes van TBGS zijn volledig gratis en vrijblijvend. Dit geldt voor alle onze diensten: 
                  dakwerkzaamheden, schoorsteenreparaties, onderhoudsdiensten en bouwprojecten. Er zijn geen verborgen kosten.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Werken jullie ook in België (bijv. Lommel en Pelt)?
                </h3>
                <p className="text-gray-700">
                  Ja, TBGS is actief in zowel Nederland als België. In België werken wij voornamelijk in de provincie Limburg, 
                  inclusief Lommel, Pelt, Neerpelt, Overpelt, Hamont-Achel en omliggende gemeenten. Dezelfde kwaliteit en service 
                  als in Nederland.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Kan ik een spoedaanvraag doen bij een lekkage?
                </h3>
                <p className="text-gray-700">
                  Absoluut! Voor noodgevallen zoals daklekkage, schoorsteenproblemen of andere urgente reparaties bieden wij 
                  24/7 spoedservice. Bel direct +31 (0)40 244 58 20 of markeer uw aanvraag als 'urgent' in het formulier. 
                  Wij zijn vaak binnen enkele uren ter plaatse.
                </p>
              </div>
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
        
        {/* Review & Trust Block */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Wat Onze Klanten Zeggen
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Lees de ervaringen van duizenden tevreden klanten uit Eindhoven, Nederland en België
              </p>
            </div>
            
            {/* Google Reviews Slider */}
            <div>
              <GoogleReviewSlider placeId="ChIJVSc2_yXbxkcROATmSZNFGFU" className="" />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-tbgs-navy to-blue-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar Om Uw Project Te Starten?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Vraag direct uw gratis offerte aan en ons team neemt binnen 24 uur contact op.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-tbgs-navy hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Nu Offerte Aanvragen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                size="lg" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a 
                  href="https://wa.me/31402445820?text=Hallo%20TBGS%2C%20ik%20wil%20graag%20een%20gratis%20offerte%20aanvragen." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <FaWhatsapp className="w-6 h-6 mr-2" />
                  WhatsApp Contact
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer showPartnerSlider={true} />
    </>
  );
}