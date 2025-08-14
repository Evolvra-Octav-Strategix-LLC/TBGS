import { Phone, Clock, MapPin, CheckCircle, Star, Shield, Wrench, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { useState } from "react";
import { Link } from "wouter";
import LocalSEOSchema from "@/components/LocalSEOSchema";

export default function WaalreDaklekkage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const whatsappUrl = "https://wa.me/31614595142?text=Hallo,%20ik%20heb%20een%20vraag%20over%20daklekkage%20in%20Waalre";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <LocalSEOSchema 
        businessData={{
          name: "TBGS Daklekkage Specialist Waalre",
          address: {
            addressLocality: "Waalre",
            addressRegion: "Noord-Brabant",
            postalCode: "5582",
            addressCountry: "NL"
          },
          telephone: "+31614595142",
          email: "info@tbgs.nl",
          website: "https://tbgs.nl",
          openingHours: ["Mo-Fr 07:00-17:00", "Sa 08:00-16:00"],
          geo: { latitude: 51.3883, longitude: 5.4444 },
          areaServed: ["Waalre"],
          rating: { ratingValue: 4.8, reviewCount: 127 }
        }}
      />
      
      <Header onOpenContactModal={() => setIsContactModalOpen(true)} />
      
      {/* Hero Section - Waalre Themed */}
      <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Daklekkage Specialist Waalre</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Daklekkage in <span className="text-yellow-400">Waalre</span>?
              <br />Premium Service Direct!
            </h1>
            
            <p className="text-xl md:text-2xl text-red-100 mb-8 leading-relaxed">
              Professionele daklekkage reparatie in Waalre met premium service. 
              24/7 spoeddienst voor acute dakproblemen. Gecertificeerde specialisten met 10+ jaar ervaring.
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
                className="border-2 border-white text-white hover:bg-white hover:text-red-800 font-semibold px-8 py-4 rounded-xl text-lg"
                onClick={() => setIsContactModalOpen(true)}
              >
                Gratis Offerte
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Clock className="w-8 h-8 text-yellow-400 mb-3 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">24/7 Spoeddienst</h3>
                <p className="text-red-100 text-sm">Direct hulp bij acute daklekkage</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Shield className="w-8 h-8 text-yellow-400 mb-3 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">Premium Service</h3>
                <p className="text-red-100 text-sm">Exclusieve service voor Waalre</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Star className="w-8 h-8 text-yellow-400 mb-3 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">4.8★ Beoordeling</h3>
                <p className="text-red-100 text-sm">127+ tevreden klanten</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Bar */}
      <section className="bg-yellow-500 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center text-black font-semibold mb-2 md:mb-0">
              <Zap className="w-5 h-5 mr-2" />
              <span>Acute daklekkage in Waalre? Premium service binnen 30 min!</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+31614595142" className="flex items-center text-black font-bold hover:underline">
                <Phone className="w-4 h-4 mr-2" />
                06-14 59 51 42
              </a>
              <span className="text-black">|</span>
              <span className="text-black font-semibold">Premium responstijd</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Waalre Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Premium Dakspecialist in <span className="text-red-600">Waalre</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Als premium dakspecialist in Waalre begrijpen wij de hoge kwaliteitsstandaard van deze gemeente. 
                Van karakteristieke villa's tot moderne woningen, wij leveren premium service die past bij Waalre.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Waarom TBGS voor daklekkage in Waalre?
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Premium kwaliteit</h4>
                      <p className="text-gray-600">Exclusieve service aangepast aan Waalrese kwaliteitsstandaard</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Discrete service</h4>
                      <p className="text-gray-600">Professionele, respectvolle aanpak passend bij Waalre</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Alle premium daktypen</h4>
                      <p className="text-gray-600">Expertise in leien, pannen, EPDM en exclusieve dakmaterialen</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Garantie & service</h4>
                      <p className="text-gray-600">5 jaar garantie met exclusieve nazorgservice</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl text-lg font-semibold"
                    onClick={() => setIsContactModalOpen(true)}
                  >
                    Premium Dakcontrole Aanvragen
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Premium Services Waalre</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Wrench className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-gray-700">Premium daklekkage opsporing</span>
                    </div>
                    <div className="flex items-center">
                      <Wrench className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-gray-700">Dakgoot premium onderhoud</span>
                    </div>
                    <div className="flex items-center">
                      <Wrench className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-gray-700">Exclusieve dakmaterialen</span>
                    </div>
                    <div className="flex items-center">
                      <Wrench className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-gray-700">VIP preventieve service</span>
                    </div>
                    <div className="flex items-center">
                      <Wrench className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-gray-700">24/7 premium spoeddienst</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white rounded-xl">
                    <p className="text-sm text-gray-600 text-center">
                      <strong>Waalre exclusief:</strong> Premium service met persoonlijke aandacht 
                      en hoogwaardige materialen voor uw woning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas in Waalre */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Premium Service in <span className="text-red-600">Waalre</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-red-600">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Waalre Centrum</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Karakteristieke villa's en monumentale panden in dorpskern.
                  </p>
                  <Badge variant="outline" className="text-red-600 border-red-600">Premium</Badge>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-red-600">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Exclusive Wijken</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Luxe woningen met moderne dakconstructies en isolatie.
                  </p>
                  <Badge variant="outline" className="text-red-600 border-red-600">Luxe</Badge>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-red-600">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Landgoederen</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Exclusieve landgoederen met complexe dakstructuren.
                  </p>
                  <Badge variant="outline" className="text-red-600 border-red-600">Exclusief</Badge>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Onze premium dakspecialisten leveren exclusieve service in heel Waalre. 
                Discrete aanpak met respect voor uw privacy en eigendom.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-xl"
                  onClick={() => window.open(whatsappUrl, '_blank')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp Contact
                </Button>
                
                <Link href="/locaties/waalre">
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 font-semibold px-8 py-3 rounded-xl">
                    <MapPin className="w-5 h-5 mr-2" />
                    Vestiging Waalre
                  </Button>
                </Link>
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
              Andere Premium Services in <span className="text-red-600">Waalre</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/waalre/renovatie">
                <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-red-600 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 flex items-center">
                      <Wrench className="w-6 h-6 text-red-600 mr-3" />
                      Premium Renovatie Waalre
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Exclusieve woningrenovaties in Waalre met premium materialen en vakmanschap op het hoogste niveau.
                    </p>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Bekijk service →</Badge>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/waalre/onderhoud">
                <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-red-600 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 flex items-center">
                      <Shield className="w-6 h-6 text-red-600 mr-3" />
                      Premium Onderhoud Waalre
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      VIP onderhoudsservice voor premium woningen en landgoederen in Waalre met discrete aanpak.
                    </p>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Bekijk service →</Badge>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer backgroundColor="bg-gray-900" accentColor="text-red-600" />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}