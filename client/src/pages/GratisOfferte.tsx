import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SEOHead from "@/lib/seo";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { CheckCircle, Clock, Phone, Mail, MapPin, Calculator, FileText, Users, Award, Star, Zap } from "lucide-react";

export default function GratisOfferte() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

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
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Gratis Offerte
                <span className="block text-3xl md:text-4xl lg:text-5xl text-tbgs-navy mt-2">
                  Binnen 24 Uur
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Professionele dienstverlening voor al uw dak-, schoorsteen-, onderhoud- en bouwprojecten. 
                80 jaar ervaring, 4 generaties vakmanschap.
              </p>
            </div>

            {/* Call to Action */}
            <div className="space-y-6">
              <Button
                onClick={() => setIsContactModalOpen(true)}
                size="lg"
                className="bg-tbgs-navy hover:bg-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                data-testid="button-open-offerte-modal"
              >
                <Calculator className="w-6 h-6 mr-3" />
                Gratis Offerte Aanvragen
              </Button>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Binnen 24 uur contact</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Geen verborgen kosten</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Gratis inspectie</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Waarom Kiezen Voor TBGS?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                80 jaar ervaring, 4 generaties vakmanschap en altijd de beste kwaliteit voor de scharpste prijs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <Clock className="w-12 h-12 text-tbgs-navy mx-auto mb-4" />
                  <CardTitle className="text-lg">Binnen 24 Uur</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Snelle reactie en spoedservice voor urgente reparaties
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <Users className="w-12 h-12 text-tbgs-green mx-auto mb-4" />
                  <CardTitle className="text-lg">4 Generaties</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    80 jaar familiebedrijf met doorgeegeven vakmanschap
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <Award className="w-12 h-12 text-tbgs-red mx-auto mb-4" />
                  <CardTitle className="text-lg">Gecertificeerd</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Volledig verzekerd en gecertificeerd voor alle werkzaamheden
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <Star className="w-12 h-12 text-tbgs-orange mx-auto mb-4" />
                  <CardTitle className="text-lg">5-Sterren Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Uitstekende klantbeoordelingen en tevredenheidsgarantie
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Onze Specialismen
              </h2>
              <p className="text-xl text-gray-600">
                Vier gespecialiseerde teams voor al uw bouwbehoeften
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-red-800">TDS - Dak Specialist</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-red-700">
                    Dakvervanging, reparatie, isolatie en lekkage oplossen
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-blue-800">TSS - Schoorsteen Specialist</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-700">
                    Schoorsteenreparatie, reiniging en rookgasafvoer
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-green-800">TOS - Onderhoud Specialist</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-green-700">
                    Preventief onderhoud en onderhoudscontracten
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-orange-800">TBS - Bouw Specialist</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-orange-700">
                    Verbouwing, renovatie en nieuwbouw projecten
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Direct Contact Opnemen?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow">
                <Phone className="w-8 h-8 text-tbgs-navy mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Telefonisch</h3>
                <p className="text-gray-600">040 202 6744</p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow">
                <Mail className="w-8 h-8 text-tbgs-navy mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">E-mail</h3>
                <p className="text-gray-600">info@tbgs.nl</p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow">
                <MapPin className="w-8 h-8 text-tbgs-navy mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Werkgebied</h3>
                <p className="text-gray-600">Nederland & België</p>
              </div>
            </div>

            <Button
              onClick={() => setIsContactModalOpen(true)}
              size="lg"
              className="bg-tbgs-navy hover:bg-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-xl"
              data-testid="button-open-offerte-modal-bottom"
            >
              <FileText className="w-6 h-6 mr-3" />
              Start Uw Offerte Aanvraag
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}