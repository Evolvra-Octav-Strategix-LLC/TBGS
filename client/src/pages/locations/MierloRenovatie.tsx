import { Phone, Clock, MapPin, CheckCircle, Star, Shield, Wrench, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { useState } from "react";
import { Link } from "wouter";
import LocalSEOSchema from "@/components/LocalSEOSchema";

export default function MierloRenovatie() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const whatsappUrl = "https://wa.me/31614595142?text=Hallo,%20ik%20heb%20een%20vraag%20over%20renovatie%20in%20Mierlo";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      <LocalSEOSchema 
        businessData={{
          name: "TBGS Renovatie Specialist Mierlo",
          address: {
            addressLocality: "Mierlo",
            addressRegion: "Noord-Brabant",
            postalCode: "5731",
            addressCountry: "NL"
          },
          telephone: "+31614595142",
          email: "info@tbgs.nl",
          website: "https://tbgs.nl",
          openingHours: ["Mo-Fr 07:00-17:00", "Sa 08:00-16:00"],
          geo: { latitude: 51.4411, longitude: 5.6222 },
          areaServed: ["Mierlo"],
          rating: { ratingValue: 4.8, reviewCount: 127 }
        }}
      />
      
      <Header onOpenContactModal={() => setIsContactModalOpen(true)} />
      
      {/* Hero Section - Mierlo Themed */}
      <section className="relative bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Renovatie Specialist Mierlo</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Renovatie in <span className="text-yellow-400">Mierlo</span>
              <br />Vakkundig Uitgevoerd
            </h1>
            
            <p className="text-xl md:text-2xl text-orange-100 mb-8 leading-relaxed">
              Complete woningrenovaties in Mierlo door ervaren vakspecialisten. 
              Van badkamer tot zolder, wij realiseren uw droomhuis met kwaliteit en vakmanschap.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Direct WhatsApp
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-orange-800 font-semibold px-8 py-4 rounded-xl text-lg"
                onClick={() => setIsContactModalOpen(true)}
              >
                Gratis offerte
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Home className="w-8 h-8 text-yellow-400 mb-3 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">Totaalrenovaties</h3>
                <p className="text-orange-100 text-sm">Complete woningtransformaties</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Shield className="w-8 h-8 text-yellow-400 mb-3 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">15+ Jaar Ervaring</h3>
                <p className="text-orange-100 text-sm">Vakspecialisten met proven track record</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Star className="w-8 h-8 text-yellow-400 mb-3 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">4.8★ Beoordeling</h3>
                <p className="text-orange-100 text-sm">127+ tevreden klanten</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="bg-yellow-500 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center text-black font-semibold mb-2 md:mb-0">
              <Home className="w-5 h-5 mr-2" />
              <span>Renovatieplannen in Mierlo? Vraag gratis advies!</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+31614595142" className="flex items-center text-black font-bold hover:underline">
                <Phone className="w-4 h-4 mr-2" />
                06-14 59 51 42
              </a>
              <span className="text-black">|</span>
              <span className="text-black font-semibold">Gratis adviesgesprek</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Mierlo Renovations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Renovatie Specialist in <span className="text-orange-600">Mierlo</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Als lokale renovatiespecialist in Mierlo realiseren wij complete woningtransformaties. 
                Van landelijke woningen tot moderne nieuwbouw, elk project krijgt onze volledige aandacht.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Waarom TBGS voor renovatie in Mierlo?
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Lokale kennis</h4>
                      <p className="text-gray-600">Bekend met Mierlose bouwstijlen en gemeentelijke procedures</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Ervaren vakteam</h4>
                      <p className="text-gray-600">15+ jaar ervaring in complete woningrenovaties</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Totaaloplossing</h4>
                      <p className="text-gray-600">Van ontwerp tot oplevering, alles uit één hand</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Projectbegeleiding</h4>
                      <p className="text-gray-600">Persoonlijke begeleiding tijdens het hele traject</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl text-lg font-semibold"
                    onClick={() => setIsContactModalOpen(true)}
                  >
                    Gratis Renovatie Advies
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Renovatie Services Mierlo</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Wrench className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="text-gray-700">Badkamerrenovatie</span>
                    </div>
                    <div className="flex items-center">
                      <Wrench className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="text-gray-700">Keukenrenovatie</span>
                    </div>
                    <div className="flex items-center">
                      <Wrench className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="text-gray-700">Zolderrenovatie</span>
                    </div>
                    <div className="flex items-center">
                      <Wrench className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="text-gray-700">Totaalrenovatie</span>
                    </div>
                    <div className="flex items-center">
                      <Wrench className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="text-gray-700">Energetische renovatie</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white rounded-xl">
                    <p className="text-sm text-gray-600 text-center">
                      <strong>Mierlo specialiteit:</strong> Renovaties van landelijke woningen 
                      met respect voor originele karakter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Andere Services in <span className="text-orange-600">Mierlo</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/mierlo/daklekkage">
                <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-600 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 flex items-center">
                      <Wrench className="w-6 h-6 text-orange-600 mr-3" />
                      Daklekkage Mierlo
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Professionele daklekkage reparatie en 24/7 spoeddienst voor acute dakproblemen in Mierlo.
                    </p>
                    <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">Bekijk service →</Badge>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/mierlo/onderhoud">
                <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-600 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 flex items-center">
                      <Shield className="w-6 h-6 text-orange-600 mr-3" />
                      Onderhoud Mierlo
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Preventief onderhoud en technische diensten voor woningen en bedrijfspanden in Mierlo.
                    </p>
                    <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">Bekijk service →</Badge>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer backgroundColor="bg-gray-900" accentColor="text-orange-600" />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}