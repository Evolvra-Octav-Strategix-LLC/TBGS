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

export default function MierloDaklekkage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const whatsappUrl = "https://wa.me/31614595142?text=Hallo,%20ik%20heb%20een%20vraag%20over%20daklekkage%20in%20Mierlo";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <LocalSEOSchema 
        businessData={{
          name: "TBGS Daklekkage Specialist Mierlo",
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
      <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Daklekkage Specialist Mierlo</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Daklekkage in <span className="text-yellow-400">Mierlo</span>?
              <br />Wij Helpen Direct!
            </h1>
            
            <p className="text-xl md:text-2xl text-red-100 mb-8 leading-relaxed">
              Professionele daklekkage reparatie in Mierlo en omgeving. 
              24/7 spoeddienst voor acute dakproblemen. Gecertificeerde specialists met 10+ jaar ervaring.
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
                <h3 className="font-semibold text-lg mb-2">10+ Jaar Ervaring</h3>
                <p className="text-red-100 text-sm">Gecertificeerde dakspecialisten</p>
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
              <span>Acute daklekkage in Mierlo? Bel direct!</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+31614595142" className="flex items-center text-black font-bold hover:underline">
                <Phone className="w-4 h-4 mr-2" />
                06-14 59 51 42
              </a>
              <span className="text-black">|</span>
              <span className="text-black font-semibold">Binnen 30 min ter plaatse</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Mierlo Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Daklekkage Specialist in <span className="text-red-600">Mierlo</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Als lokale dakspecialist in Mierlo kennen wij de gemeente en haar unieke uitdagingen. 
                Van de landelijke woningen tot de nieuwere ontwikkelingen, wij hebben ervaring met alle daktypen.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Waarom TBGS voor daklekkage in Mierlo?
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Lokale expertise</h4>
                      <p className="text-gray-600">Volledig bekend met Mierlose bouwstijlen en weersomstandigheden</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Snelle respons</h4>
                      <p className="text-gray-600">Vanuit regio binnen 30 minuten in Mierlo</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Alle daktypen</h4>
                      <p className="text-gray-600">Pannen-, bitumen-, EPDM- en metalen daken</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Garantie</h4>
                      <p className="text-gray-600">5 jaar garantie op alle daklekkage reparaties</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl text-lg font-semibold"
                    onClick={() => setIsContactModalOpen(true)}
                  >
                    Gratis Dakcontrole Aanvragen
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Onze Services in Mierlo</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Wrench className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-gray-700">Daklekkage opsporing & reparatie</span>
                    </div>
                    <div className="flex items-center">
                      <Wrench className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-gray-700">Dakgoot reiniging & reparatie</span>
                    </div>
                    <div className="flex items-center">
                      <Wrench className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-gray-700">Dakbedekking vernieuwen</span>
                    </div>
                    <div className="flex items-center">
                      <Wrench className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-gray-700">Preventieve dakcontrole</span>
                    </div>
                    <div className="flex items-center">
                      <Wrench className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-gray-700">Noodreparaties 24/7</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white rounded-xl">
                    <p className="text-sm text-gray-600 text-center">
                      <strong>Mierlo specialiteit:</strong> Ervaring met landelijke woningen 
                      en moderne nieuwbouwprojecten.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas in Mierlo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Servicegebieden in <span className="text-red-600">Mierlo</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-red-600">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Mierlo Centrum</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Dorpskern met karakteristieke woningen en moderne uitbreidingen.
                  </p>
                  <Badge variant="outline" className="text-red-600 border-red-600">Gemengd</Badge>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-red-600">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Nieuwbouwwijken</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Moderne woonwijken met eigentijdse dakconstructies.
                  </p>
                  <Badge variant="outline" className="text-red-600 border-red-600">Modern</Badge>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-red-600">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Buitengebied</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Landelijke woningen met diverse dakvormen en materialen.
                  </p>
                  <Badge variant="outline" className="text-red-600 border-red-600">Landelijk</Badge>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Onze dakspecialisten zijn actief in heel Mierlo en omliggende gebieden. 
                Snelle responstijd en lokale kennis gegarandeerd.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-xl"
                  onClick={() => window.open(whatsappUrl, '_blank')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp Contact
                </Button>
                
                <Link href="/locaties/mierlo">
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 font-semibold px-8 py-3 rounded-xl">
                    <MapPin className="w-5 h-5 mr-2" />
                    Vestiging Mierlo
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
              Andere Services in <span className="text-red-600">Mierlo</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/mierlo/renovatie">
                <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-red-600 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 flex items-center">
                      <Wrench className="w-6 h-6 text-red-600 mr-3" />
                      Renovatie Mierlo
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Complete woningrenovaties en verbouwingen in Mierlo met focus op kwaliteit en duurzaamheid.
                    </p>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Bekijk service →</Badge>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/mierlo/onderhoud">
                <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-red-600 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 flex items-center">
                      <Shield className="w-6 h-6 text-red-600 mr-3" />
                      Onderhoud Mierlo
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Preventief onderhoud en technische diensten voor woningen en bedrijfspanden in Mierlo.
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