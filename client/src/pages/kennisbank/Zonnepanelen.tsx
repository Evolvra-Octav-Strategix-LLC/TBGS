import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Clock, 
  MapPin, 
  Shield, 
  CheckCircle, 
  Sun, 
  Battery, 
  Zap,
  TrendingUp,
  Euro,
  ArrowRight,
  Star,
  Award,
  Users,
  Calculator
} from "lucide-react";
import LocationCards from "@/components/LocationCards";

interface ZonnepanelenProps {
  onOpenContactModal: () => void;
}

export default function Zonnepanelen({ onOpenContactModal }: ZonnepanelenProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Zonnepanelen op Dak - Complete Gids 2025 | Rendement & Installatie",
    "description": "Alles over zonnepanelen: rendement berekenen, verschillende types, installatie en onderhoud. Professioneel advies van TBGS dakspecialisten voor optimale opbrengst.",
    "author": {
      "@type": "Organization",
      "name": "TBGS - Totaal Bouw Groep Specialisten"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TBGS",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tbgs.nl/logo.png"
      }
    },
    "datePublished": "2025-08-17",
    "dateModified": "2025-08-17",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://tbgs.nl/kennisbank/zonnepanelen"
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://tbgs.nl/images/zonnepanelen-expert-guide.jpg",
      "width": 1200,
      "height": 630
    }
  };

  return (
    <>
      <Helmet>
        <title>Zonnepanelen op Dak | Complete Gids 2025 | TBGS Dakspecialisten</title>
        <meta name="description" content="☀️ Zonnepanelen expert gids: rendement, installatie, onderhoud. ✓ Subsidies 2025 ✓ Terugverdientijd ✓ Professioneel advies. TBGS zonnepaneel specialisten." />
        <meta name="keywords" content="zonnepanelen dak, zonnepanelen installatie, rendement zonnepanelen, zonnepaneel specialist, subsidie zonnepanelen 2025" />
        <link rel="canonical" href="https://tbgs.nl/kennisbank/zonnepanelen" />
        <meta property="og:title" content="Zonnepanelen op Dak | Complete Expert Gids 2025 | TBGS" />
        <meta property="og:description" content="Complete gids voor zonnepanelen op uw dak: rendement, installatie en onderhoud door zonnepaneel specialisten. Maximaal rendement gegarandeerd." />
        <meta property="og:url" content="https://tbgs.nl/kennisbank/zonnepanelen" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="nl_NL" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-yellow-400 text-yellow-900 mb-4 text-sm font-semibold px-4 py-2">
                ☀️ ENERGIE EXPERT 2025
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Zonnepanelen op <span className="text-yellow-300">Uw Dak</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-amber-100">
                Maximaal rendement met professionele installatie en deskundig advies
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-yellow-400 text-yellow-900 hover:bg-yellow-300 font-semibold px-8 py-3"
                  onClick={onOpenContactModal}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Zonnepaneel Expert: 040 202 6744
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-orange-700 px-8"
                  onClick={onOpenContactModal}
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Rendement Berekening
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              {/* Introduction */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Waarom Investeren in <span className="text-amber-600">Zonnepanelen</span>?
                </h2>
                <div className="prose prose-lg text-slate-700 mb-8">
                  <p>
                    Zonnepanelen zijn een slimme investering in 2025. Met stijgende energieprijzen en verbeterde 
                    technologie is de terugverdientijd korter dan ooit. Gemiddeld verdienen zonnepanelen zich 
                    binnen 7-9 jaar terug en leveren ze daarna 15+ jaar gratis stroom.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  <Card className="text-center p-6 border-2 hover:border-amber-200 transition-colors">
                    <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Euro className="w-8 h-8 text-amber-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Besparing</h3>
                    <p className="text-gray-600 text-sm">€800-1500 per jaar minder energiekosten</p>
                  </Card>

                  <Card className="text-center p-6 border-2 hover:border-amber-200 transition-colors">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Waardestijging</h3>
                    <p className="text-gray-600 text-sm">5-8% hogere woningwaarde</p>
                  </Card>

                  <Card className="text-center p-6 border-2 hover:border-amber-200 transition-colors">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sun className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Duurzaamheid</h3>
                    <p className="text-gray-600 text-sm">2-4 ton CO2 besparing per jaar</p>
                  </Card>

                  <Card className="text-center p-6 border-2 hover:border-amber-200 transition-colors">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Onafhankelijkheid</h3>
                    <p className="text-gray-600 text-sm">Bescherming tegen stijgende energieprijzen</p>
                  </Card>
                </div>
              </div>

              <Separator className="my-12" />

              {/* Types of Solar Panels */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Types <span className="text-amber-600">Zonnepanelen</span>
                </h2>
                
                <div className="space-y-8">
                  <Card className="p-8 border-l-4 border-l-amber-500">
                    <div className="flex items-start gap-4">
                      <div className="bg-amber-100 p-3 rounded-full">
                        <Sun className="w-6 h-6 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Monokristallijne Panelen</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-lg mb-3 text-amber-700">Kenmerken:</h4>
                            <ul className="space-y-2 text-slate-700">
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                                Rendement: 20-22%
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                                Zwarte, uniforme uitstraling
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                                25+ jaar levensduur
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                                Goed bij diffuus licht
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg mb-3 text-amber-700">Voordelen:</h4>
                            <ul className="space-y-2 text-slate-700">
                              <li className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-gold-600 flex-shrink-0" />
                                Hoogste opbrengst per m²
                              </li>
                              <li className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-gold-600 flex-shrink-0" />
                                Ideaal voor beperkte dakruimte
                              </li>
                              <li className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-gold-600 flex-shrink-0" />
                                Snelste terugverdientijd
                              </li>
                              <li className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-gold-600 flex-shrink-0" />
                                Premium kwaliteit
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-8 border-l-4 border-l-blue-500">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Sun className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Polykristallijne Panelen</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-lg mb-3 text-blue-700">Kenmerken:</h4>
                            <ul className="space-y-2 text-slate-700">
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                Rendement: 17-19%
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                Blauwige, gespikkelde uitstraling
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                20+ jaar levensduur
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                Goed bij direct zonlicht
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg mb-3 text-blue-700">Voordelen:</h4>
                            <ul className="space-y-2 text-slate-700">
                              <li className="flex items-center gap-2">
                                <Euro className="w-4 h-4 text-green-600 flex-shrink-0" />
                                Lagere aanschafkosten
                              </li>
                              <li className="flex items-center gap-2">
                                <Euro className="w-4 h-4 text-green-600 flex-shrink-0" />
                                Goede prijs-kwaliteit verhouding
                              </li>
                              <li className="flex items-center gap-2">
                                <Euro className="w-4 h-4 text-green-600 flex-shrink-0" />
                                Geschikt voor grote daken
                              </li>
                              <li className="flex items-center gap-2">
                                <Euro className="w-4 h-4 text-green-600 flex-shrink-0" />
                                Bewezen technologie
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <Separator className="my-12" />

              {/* Installation Process */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Installatie <span className="text-amber-600">Proces</span>
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      step: 1,
                      title: "Dakanalyse & Rendementberekening",
                      description: "Beoordeling geschiktheid dak en opbrengstprognose",
                      details: "Wij analyseren dakoriëntatie, hellingshoek, schaduw en structurele geschiktheid. Met satellietbeelden en 3D-modelling berekenen we uw exacte opbrengst."
                    },
                    {
                      step: 2,
                      title: "Systeem Ontwerp & Offerte",
                      description: "Maatwerk configuratie voor optimaal rendement",
                      details: "Op basis van uw energieverbruik en dakkenmerken ontwerpen we het optimale systeem. Inclusief keuze voor omvormers, monitoring en eventuele thuisbatterij."
                    },
                    {
                      step: 3,
                      title: "Vergunningen & Administratie",
                      description: "Wij regelen alle benodigde vergunningen",
                      details: "Aanmelding bij netbeheerder, bouwvergunning indien nodig, en subsidieaanvragen. Wij ontlasten u volledig van de administratieve rompslomp."
                    },
                    {
                      step: 4,
                      title: "Professionele Installatie",
                      description: "Vakkundige montage door gecertificeerde specialisten",
                      details: "Installatie volgens NEN-normen door gecertificeerde monteurs. Inclusief eindcontrole, inbedrijfstelling en uitgebreide documentatie."
                    }
                  ].map((phase, index) => (
                    <Card key={index} className="p-6 border-l-4 border-l-orange-500">
                      <div className="flex gap-6">
                        <div className="bg-orange-100 text-orange-800 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                          {phase.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{phase.title}</h3>
                          <p className="text-slate-600 font-medium mb-3">{phase.description}</p>
                          <p className="text-slate-700 text-sm leading-relaxed">{phase.details}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <Separator className="my-12" />

              {/* ROI Calculator */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Rendement <span className="text-amber-600">Berekening</span>
                </h2>
                
                <Card className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-amber-800 mb-6">Gemiddelde Opbrengst per kWp</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-amber-200">
                          <span className="font-medium">Zuid-oriëntatie (optimaal)</span>
                          <Badge className="bg-green-100 text-green-800">950-1000 kWh</Badge>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-amber-200">
                          <span className="font-medium">Oost/West-oriëntatie</span>
                          <Badge className="bg-yellow-100 text-yellow-800">800-900 kWh</Badge>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-amber-200">
                          <span className="font-medium">Noord-oriëntatie</span>
                          <Badge className="bg-red-100 text-red-800">600-700 kWh</Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-amber-800 mb-6">Voorbeeld Berekening</h3>
                      <div className="bg-white rounded-lg p-6 border border-amber-200">
                        <div className="space-y-3 text-slate-700">
                          <div className="flex justify-between">
                            <span>Systeemgrootte:</span>
                            <span className="font-semibold">6 kWp</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Jaaropbrengst:</span>
                            <span className="font-semibold">5.400 kWh</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Eigen verbruik (70%):</span>
                            <span className="font-semibold">3.780 kWh</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Besparing (€0,35/kWh):</span>
                            <span className="font-semibold">€1.323</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Terugleververgoeding:</span>
                            <span className="font-semibold">€567</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between text-lg font-bold text-green-600">
                            <span>Totale jaarlijkse besparing:</span>
                            <span>€1.890</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <Separator className="my-12" />

              {/* Maintenance & Warranty */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Onderhoud & <span className="text-amber-600">Garanties</span>
                </h2>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="p-6 bg-blue-50 border-blue-200">
                    <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                      <Shield className="w-6 h-6" />
                      Onderhoud
                    </h3>
                    <ul className="space-y-3 text-blue-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        Jaarlijkse visuele inspectie
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        Monitoring opbrengstgegevens
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        Reiniging indien nodig
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        Controle bevestigingen
                      </li>
                    </ul>
                    <Badge className="mt-4 bg-blue-100 text-blue-800">
                      Onderhoudskosten: €50-100 per jaar
                    </Badge>
                  </Card>

                  <Card className="p-6 bg-green-50 border-green-200">
                    <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                      <Award className="w-6 h-6" />
                      Garanties
                    </h3>
                    <ul className="space-y-3 text-green-700">
                      <li className="flex items-center gap-2">
                        <Star className="w-4 h-4 flex-shrink-0" />
                        25 jaar productgarantie panelen
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="w-4 h-4 flex-shrink-0" />
                        12 jaar garantie omvormers
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="w-4 h-4 flex-shrink-0" />
                        10 jaar installatiegarantie
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="w-4 h-4 flex-shrink-0" />
                        Prestatiegarantie 80% na 25 jaar
                      </li>
                    </ul>
                    <Badge className="mt-4 bg-green-100 text-green-800">
                      All-risk verzekering beschikbaar
                    </Badge>
                  </Card>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Start Vandaag met Zonnepanelen</h2>
                <p className="text-xl text-amber-100 mb-6">
                  Onze zonnepaneel specialisten berekenen uw exacte rendement en opbrengst
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="bg-white text-orange-700 hover:bg-orange-50 font-semibold px-8"
                    onClick={onOpenContactModal}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Direct Contact: 040 202 6744
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-orange-700 px-8"
                    onClick={onOpenContactModal}
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Gratis Rendementberekening
                  </Button>
                </div>
              </div>

              <LocationCards showCTA={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}