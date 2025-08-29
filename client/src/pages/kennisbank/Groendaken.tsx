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
  Leaf, 
  Droplets, 
  Thermometer,
  Heart,
  TrendingUp,
  ArrowRight,
  Star,
  Award,
  Users
} from "lucide-react";
import LocationCards from "@/components/LocationCards";

interface GroendakenProps {
  onOpenContactModal: () => void;
}

export default function Groendaken({ onOpenContactModal }: GroendakenProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Gids voor Groendaken - Voordelen, Kosten en Installatie",
    "description": "Alles over groendaken: voordelen, verschillende types, installatie en onderhoud. Professioneel advies van TBGS dakspecialisten voor uw groendak project.",
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
      "@id": "https://tbgs.nl/kennisbank/groendaken"
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://tbgs.nl/images/groendaken-expert-guide.jpg",
      "width": 1200,
      "height": 630
    }
  };

  return (
    <>
      <Helmet>
        <title>Groendaken Specialist | Complete Gids & Installatie | TBGS</title>
        <meta name="description" content="🌱 Groendaken expert gids: 30% energiebesparing, voordelen, types en installatie. ✓ Subsidies 2025 ✓ 25+ jaar ervaring ✓ Gratis advies. TBGS groendak specialisten." />
        <meta name="keywords" content="groendaken, extensief groendak, intensief groendak, sedum dak, groendak installatie, groendak specialist, duurzaam bouwen, groendak subsidie 2025, energiebesparing dak, TBGS groendak" />
        <link rel="canonical" href="https://tbgs.nl/kennisbank/groendaken" />
        <meta property="og:title" content="Groendaken Specialist | Complete Expert Gids | TBGS" />
        <meta property="og:description" content="Complete gids voor groendaken: voordelen, installatie en onderhoud door groendak specialisten. Van sedum tot intensieve daktuinen." />
        <meta property="og:url" content="https://tbgs.nl/kennisbank/groendaken" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="nl_NL" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-emerald-400 text-emerald-900 mb-4 text-sm font-semibold px-4 py-2">
                🌱 DUURZAAM BOUWEN EXPERT
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Complete Gids voor <span className="text-emerald-300">Groendaken</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-green-100">
                Van extensieve sedumdaken tot intensieve daktuinen - ontdek alle mogelijkheden
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-emerald-500 text-white hover:bg-emerald-400 font-semibold px-8 py-3"
                  onClick={onOpenContactModal}
                  data-testid="button-contact-groendak-specialist"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Groendak Specialist: 040 202 6744
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-green-700 px-8"
                  onClick={onOpenContactModal}
                  data-testid="button-gratis-groendak-advies"
                >
                  Gratis Groendak Advies
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
                  Waarom Kiezen voor een <span className="text-green-600">Groendak</span>?
                </h2>
                <div className="prose prose-lg text-slate-700 mb-8">
                  <p>
                    Groendaken zijn meer dan een trend - ze zijn een investering in een duurzame toekomst. 
                    Met toenemende klimaatverandering en stedelijke hitte-eilanden bieden groendaken een 
                    natuurlijke oplossing voor energiebesparing, waterbeheersing en biodiversiteit.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  <Card className="text-center p-6 border-2 hover:border-green-200 transition-colors">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Thermometer className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Energiebesparing</h3>
                    <p className="text-gray-600 text-sm">Tot 30% minder kosten voor verwarming en koeling</p>
                  </Card>

                  <Card className="text-center p-6 border-2 hover:border-green-200 transition-colors">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Droplets className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Waterbeheersing</h3>
                    <p className="text-gray-600 text-sm">85% regenwater wordt opgevangen en vertraagd afgevoerd</p>
                  </Card>

                  <Card className="text-center p-6 border-2 hover:border-green-200 transition-colors">
                    <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Leaf className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Biodiversiteit</h3>
                    <p className="text-gray-600 text-sm">Leefruimte voor bijen, vlinders en vogels</p>
                  </Card>

                  <Card className="text-center p-6 border-2 hover:border-green-200 transition-colors">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Welzijn</h3>
                    <p className="text-gray-600 text-sm">Vermindert stress en verbetert luchtkwaliteit</p>
                  </Card>
                </div>
              </div>

              <Separator className="my-12" />

              {/* Types of Green Roofs */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Types <span className="text-green-600">Groendaken</span>
                </h2>
                
                <div className="space-y-8">
                  <Card className="p-8 border-l-4 border-l-green-500">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Leaf className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Extensieve Groendaken</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-lg mb-3">Kenmerken:</h4>
                            <ul className="space-y-2 text-slate-700">
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                Laagbouwend (2-15cm substraat)
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                Gewicht: 60-150 kg/m²
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                Sedum, grassen, mossen
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                Minimaal onderhoud
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg mb-3">Voordelen:</h4>
                            <ul className="space-y-2 text-slate-700">
                              <li className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                Kosteneffectief
                              </li>
                              <li className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                Geschikt voor hellende daken (tot 45°)
                              </li>
                              <li className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                Zelfvoorzienend na aanleg
                              </li>
                              <li className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                Lange levensduur (25+ jaar)
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
                        <Leaf className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Intensieve Groendaken</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-lg mb-3">Kenmerken:</h4>
                            <ul className="space-y-2 text-slate-700">
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                Dik substraat (15-100cm)
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                Gewicht: 300-2000 kg/m²
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                Struiken, bomen, gazons
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                Regelmatig onderhoud
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg mb-3">Mogelijkheden:</h4>
                            <ul className="space-y-2 text-slate-700">
                              <li className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-amber-600 flex-shrink-0" />
                                Daktuin met zitgelegenheid
                              </li>
                              <li className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-amber-600 flex-shrink-0" />
                                Voedselproductie (groenten/kruiden)
                              </li>
                              <li className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-amber-600 flex-shrink-0" />
                                Recreatieve ruimte
                              </li>
                              <li className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-amber-600 flex-shrink-0" />
                                Maximum ecologische waarde
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
                  Installatie <span className="text-green-600">Proces</span>
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      step: 1,
                      title: "Structurele Beoordeling",
                      description: "Controle van draagkracht en statiek van het dak",
                      details: "Een groendak brengt extra gewicht met zich mee. Wij controleren of uw dak geschikt is of versterkingen nodig heeft."
                    },
                    {
                      step: 2,
                      title: "Waterdichting & Wortelwering",
                      description: "Professionele afdichting tegen water en wortelschade",
                      details: "Een hoogwaardige EPDM-dakbedekking met geïntegreerde wortelwering vormt de basis van elk groendak."
                    },
                    {
                      step: 3,
                      title: "Drainage Systeem",
                      description: "Afvoer van overtollig water en voorkomen van opstuwing",
                      details: "Professioneel drainagesysteem met overloopkappen en regelbare afvoer voor optimale waterbeheersing."
                    },
                    {
                      step: 4,
                      title: "Substraat & Beplanting",
                      description: "Geschikte groeibodem en plantselectie",
                      details: "Specifiek groendaksubstraat met de juiste nutriënten en drainage, afgestemd op het gekozen plantentype."
                    }
                  ].map((phase, index) => (
                    <Card key={index} className="p-6 border-l-4 border-l-emerald-500">
                      <div className="flex gap-6">
                        <div className="bg-emerald-100 text-emerald-800 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
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

              {/* Maintenance */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Onderhoud & <span className="text-green-600">Levensduur</span>
                </h2>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="p-6 bg-green-50 border-green-200">
                    <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                      <Shield className="w-6 h-6" />
                      Extensief Groendak Onderhoud
                    </h3>
                    <ul className="space-y-3 text-green-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        Jaarlijkse inspectie afvoeren
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        Onkruidbestrijding (1-2x per jaar)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        Bemesting indien nodig
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        Controle dakbedekking
                      </li>
                    </ul>
                    <Badge className="mt-4 bg-green-100 text-green-800">
                      Onderhoudskosten: €2-4 per m² per jaar
                    </Badge>
                  </Card>

                  <Card className="p-6 bg-blue-50 border-blue-200">
                    <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                      <Award className="w-6 h-6" />
                      Intensief Groendak Onderhoud
                    </h3>
                    <ul className="space-y-3 text-blue-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        Regulier tuinonderhoud
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        Seizoensgebonden beplanting
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        Irrigatiesysteem controle
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        Snoeiwerk en bemesting
                      </li>
                    </ul>
                    <Badge className="mt-4 bg-blue-100 text-blue-800">
                      Onderhoudskosten: €8-15 per m² per jaar
                    </Badge>
                  </Card>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Klaar voor Uw Groendak Project?</h2>
                <p className="text-xl text-green-100 mb-6">
                  Onze groendak specialisten adviseren u graag over de mogelijkheden voor uw dak
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="bg-white text-green-700 hover:bg-green-50 font-semibold px-8"
                    onClick={onOpenContactModal}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Direct Contact: 040 202 6744
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-green-700 px-8"
                    onClick={onOpenContactModal}
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Plan Groendak Adviesgesprek
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