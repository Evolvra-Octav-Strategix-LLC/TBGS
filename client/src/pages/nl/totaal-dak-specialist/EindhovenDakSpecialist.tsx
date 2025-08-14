import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Star, ArrowRight, CheckCircle, Shield, Award, Users } from "lucide-react";
import { Link } from "wouter";
import tdsLogo from "@assets/TDS 545x642 (1)_1755096847747.png";

interface EindhovenDakSpecialistProps {
  onOpenContactModal: () => void;
}

export default function EindhovenDakSpecialist({ onOpenContactModal }: EindhovenDakSpecialistProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="Dakdekker in Eindhoven | Totaal Dak Specialist – TBGS"
        description="✓ Professionele dakdekker Eindhoven ✓ EPDM, bitumen, dakpannen ✓ Daklekkage reparatie ✓ Dakisolatie ✓ 15+ jaar ervaring ✓ Gratis offerte ✓ Lokale service"
        url="https://tbgs.nl/nl/totaal-dak-specialist/eindhoven"
        keywords="dakdekker Eindhoven, dakreparatie Eindhoven, EPDM Eindhoven, bitumen dak Eindhoven, dakisolatie Eindhoven, lekkage Eindhoven, dakgoten Eindhoven"
      />
      <LocalSEOSchema businessData={{
        "@type": "RoofingContractor",
        name: "TBGS Totaal Dak Specialist - Eindhoven",
        address: {
          addressLocality: "Eindhoven",
          addressRegion: "Noord-Brabant", 
          addressCountry: "NL"
        },
        telephone: "+31 40 202 6744",
        email: "info@tbgs.nl",
        website: "https://tbgs.nl/nl/totaal-dak-specialist/eindhoven",
        geo: {
          latitude: 51.4416,
          longitude: 5.4697
        },
        areaServed: ["Eindhoven", "Noord-Brabant", "Nederland", "Woensel", "Stratum", "Gestel", "Strijp"],
        rating: {
          ratingValue: 4.8,
          reviewCount: 127
        },
        openingHours: [
          "Mo-Fr 07:00-17:00",
          "Sa 08:00-16:00"
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Dakwerk Diensten Eindhoven",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "EPDM dakbedekking",
                description: "Professionele EPDM dakbedekking voor platte daken"
              }
            },
            {
              "@type": "Offer", 
              itemOffered: {
                "@type": "Service",
                name: "Bitumen dakbedekking",
                description: "Dakbedekking met bitumen dakrollen"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service", 
                name: "Daklekkage reparatie",
                description: "Snelle reparatie van daklekkages"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Dakisolatie",
                description: "Energiezuinige dakisolatie"
              }
            }
          ]
        }
      }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Eindhoven, Noord-Brabant
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Uw dakdekker in Eindhoven
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Totaal Dak Specialist biedt professionele dakwerkzaamheden in Eindhoven. Van daklekkage 
              reparatie tot complete dakvernieuwing - wij zorgen voor een waterdicht en duurzaam dak.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={onOpenContactModal}
                size="lg"
                className="bg-tbgs-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Gratis Dakadvies
              </Button>
              <a 
                href="tel:+31402026744"
                className="inline-flex items-center px-8 py-3 border-2 border-tbgs-red text-tbgs-red rounded-lg font-semibold hover:bg-tbgs-red hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                040 202 6744
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Waarom Kiezen voor Onze Dakdekker in Eindhoven?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sinds 2010 de betrouwbare dakspecialist voor Eindhoven en omgeving
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-tbgs-red" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">15+ Jaar Ervaring</h3>
                <p className="text-gray-600 text-sm">
                  Uitgebreide ervaring met alle daktypen in Eindhoven
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-tbgs-red" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Gecertificeerd</h3>
                <p className="text-gray-600 text-sm">
                  Alle dakdekkers zijn volledig gekwalificeerd en verzekerd
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-tbgs-red" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Lokaal Team</h3>
                <p className="text-gray-600 text-sm">
                  Vaste teams uit Eindhoven met lokale kennis
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-tbgs-red" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Garantie</h3>
                <p className="text-gray-600 text-sm">
                  Uitgebreide garantie op materiaal en uitvoering
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Werkwijze Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Onze Werkwijze
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Van eerste contact tot oplevering - transparant en professioneel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-tbgs-red text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Gratis Inspectie</h3>
              <p className="text-gray-600 text-sm">
                Uitgebreide dakinspectie met digitaal rapport
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tbgs-red text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Offerte op Maat</h3>
              <p className="text-gray-600 text-sm">
                Heldere offerte zonder verrassingen
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tbgs-red text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Vakkundige Uitvoering</h3>
              <p className="text-gray-600 text-sm">
                Professionele dakwerkzaamheden door ervaren specialisten
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tbgs-red text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Garantie & Service</h3>
              <p className="text-gray-600 text-sm">
                Nazorg en garantie voor volledige zekerheid
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lokale Case Study */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Recent Project in Eindhoven
              </h2>
              <p className="text-lg text-gray-600">
                Vakkundig uitgevoerd door onze dakdekkers in Woensel
              </p>
            </div>

            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gradient-to-br from-red-100 to-orange-100 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <img src={tdsLogo} alt="TDS Logo" className="w-16 h-16 object-contain" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">EPDM Dakvernieuwing</h3>
                    <p className="text-gray-600">Woensel-Noord, Eindhoven</p>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Complete Dakvernieuwing Rijwoning Eindhoven
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Volledige vernieuwing van een plat dak aan de Geldropseweg in Eindhoven. 
                    Het oude bitumen dak werd vervangen door een duurzaam EPDM-systeem 
                    inclusief nieuwe isolatie en dakgoten.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      EPDM dakbedekking 85m² inclusief toebehoren
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      PIR isolatie 10cm voor optimale isolatiewaarde
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Nieuwe aluminium dakgoten en hemelwaterafvoer
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Uitgevoerd binnen 3 werkdagen
                    </div>
                  </div>
                  <div className="mt-6 flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    Geldropseweg, Woensel-Noord, Eindhoven
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Veelgestelde Vragen - Dakdekker Eindhoven
            </h2>
            <p className="text-lg text-gray-600">
              Antwoorden op de meest gestelde vragen over dakwerk in Eindhoven
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Wat kost een nieuwe dakbedekking in Eindhoven?
                </h3>
                <p className="text-gray-600">
                  De kosten zijn afhankelijk van het dakoppervlak, type bedekking en 
                  complexiteit. Voor een EPDM dak kunt u rekenen op €40-60 per m². 
                  Wij maken graag een vrijblijvende offerte voor uw specifieke situatie in Eindhoven.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Hoe lang duurt het vervangen van een dak in Eindhoven?
                </h3>
                <p className="text-gray-600">
                  Een gemiddeld rijtjeshuis dak (ca. 80m²) kan binnen 2-4 werkdagen worden 
                  vervangen, afhankelijk van het weer en de complexiteit. Wij plannen alle 
                  werkzaamheden zorgvuldig in overleg met u.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Welke garantie krijg ik op dakwerk in Eindhoven?
                </h3>
                <p className="text-gray-600">
                  Wij geven 10 jaar garantie op EPDM dakbedekking en 5 jaar op bitumen systemen. 
                  Op de uitvoering geven wij 5 jaar garantie. Alle garantievoorwaarden worden 
                  helder vastgelegd in onze offerte.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Kunnen jullie ook daklekkages in Eindhoven repareren?
                </h3>
                <p className="text-gray-600">
                  Ja, wij zijn gespecialiseerd in het opsporen en repareren van daklekkages 
                  in heel Eindhoven. Noodservice is beschikbaar voor acute lekkages. 
                  Neem direct contact op via 040 202 6744.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  In welke wijken van Eindhoven werken jullie?
                </h3>
                <p className="text-gray-600">
                  Wij dekken heel Eindhoven af, inclusief Woensel, Stratum, Gestel, Strijp, 
                  Tongelre en het centrum. Ook in de buitenwijken zoals Meerhoven en 
                  't Hofke zijn wij regelmatig actief met dakwerkzaamheden.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Dakdekker Nodig in Eindhoven?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Neem contact op voor een gratis dakinspectie en advies op maat. 
              Onze dakspecialisten staan voor u klaar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={onOpenContactModal}
                size="lg"
                className="bg-tbgs-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Gratis Dakinspectie
              </Button>
              <a 
                href="tel:+31402026744"
                className="inline-flex items-center px-8 py-3 border-2 border-tbgs-red text-tbgs-red rounded-lg font-semibold hover:bg-tbgs-red hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                040 202 6744
              </a>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-tbgs-red" />
                </div>
                <p className="font-semibold text-gray-900">Direct Bereikbaar</p>
                <p className="text-gray-600 text-sm">Ma-Vr: 07:00-17:00</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-tbgs-red" />
                </div>
                <p className="font-semibold text-gray-900">Lokale Service</p>
                <p className="text-gray-600 text-sm">Heel Eindhoven</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-tbgs-red" />
                </div>
                <p className="font-semibold text-gray-900">Garantie</p>
                <p className="text-gray-600 text-sm">Tot 10 jaar</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}