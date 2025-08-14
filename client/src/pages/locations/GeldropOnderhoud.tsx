import { Phone, Clock, MapPin, CheckCircle, Star, Shield, Wrench, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { useState } from "react";
import { Link } from "wouter";
import LocalSEOSchema from "@/components/LocalSEOSchema";

export default function GeldropOnderhoud() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const whatsappUrl = "https://wa.me/31614595142?text=Hallo,%20ik%20heb%20een%20vraag%20over%20onderhoud%20in%20Geldrop";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      <LocalSEOSchema 
        businessData={{
          name: "TBGS Onderhoud Specialist Geldrop",
          address: {
            addressLocality: "Geldrop",
            addressRegion: "Noord-Brabant",
            postalCode: "5664",
            addressCountry: "NL"
          },
          telephone: "+31614595142",
          email: "info@tbgs.nl",
          website: "https://tbgs.nl",
          openingHours: ["Mo-Fr 07:00-17:00", "Sa 08:00-16:00"],
          geo: { latitude: 51.4208, longitude: 5.5653 },
          areaServed: ["Geldrop"],
          rating: { ratingValue: 4.8, reviewCount: 127 }
        }}
      />
      
      <Header onOpenContactModal={() => setIsContactModalOpen(true)} />
      
      {/* Hero Section - Geldrop Themed */}
      <section className="relative bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Onderhoud Specialist Geldrop</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Onderhoud in <span className="text-yellow-400">Geldrop</span>
              <br />Betrouwbaar & Vakkundig
            </h1>
            
            <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
              Professioneel onderhoud van woningen en bedrijfspanden in Geldrop. 
              Preventief onderhoud, reparaties en technische diensten door ervaren specialisten.
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
                className="border-2 border-white text-white hover:bg-white hover:text-green-800 font-semibold px-8 py-4 rounded-xl text-lg"
                onClick={() => setIsContactModalOpen(true)}
              >
                Gratis Offerte
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Settings className="w-8 h-8 text-yellow-400 mb-3 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">Preventief Onderhoud</h3>
                <p className="text-green-100 text-sm">Voorkom problemen met regelmatig onderhoud</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Shield className="w-8 h-8 text-yellow-400 mb-3 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">20+ Jaar Ervaring</h3>
                <p className="text-green-100 text-sm">Ervaren onderhoudsspecialisten</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Star className="w-8 h-8 text-yellow-400 mb-3 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">4.8★ Beoordeling</h3>
                <p className="text-green-100 text-sm">127+ tevreden klanten</p>
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
              <Settings className="w-5 h-5 mr-2" />
              <span>Onderhoudscontract nodig in Geldrop? Vraag vrijblijvend advies!</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+31614595142" className="flex items-center text-black font-bold hover:underline">
                <Phone className="w-4 h-4 mr-2" />
                06-14 59 51 42
              </a>
              <span className="text-black">|</span>
              <span className="text-black font-semibold">Gratis onderhoudsadvies</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Geldrop Maintenance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Onderhoud Specialist in <span className="text-green-600">Geldrop</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Als lokale onderhoudsspecialist in Geldrop zorgen wij voor het optimale onderhoud van uw pand. 
                Van preventief onderhoud tot acute reparaties, wij houden uw eigendom in topconditie.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Waarom TBGS voor onderhoud in Geldrop?
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Lokale service</h4>
                      <p className="text-gray-600">Snelle responstijd en persoonlijke service in Geldrop</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Preventief denken</h4>
                      <p className="text-gray-600">Voorkomen is beter dan genezen - bespaart kosten</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Multidisciplinair</h4>
                      <p className="text-gray-600">Alle onderhoudsdisciplines onder één dak</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Onderhoudscontracten</h4>
                      <p className="text-gray-600">Jaarcontracten voor zorgeloos onderhoud</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl text-lg font-semibold"
                    onClick={() => setIsContactModalOpen(true)}
                  >
                    Gratis Onderhoudsadvies
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Onderhoud Services Geldrop</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Wrench className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700">Preventief onderhoud</span>
                    </div>
                    <div className="flex items-center">
                      <Wrench className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700">Technische reparaties</span>
                    </div>
                    <div className="flex items-center">
                      <Wrench className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700">VvE onderhoud</span>
                    </div>
                    <div className="flex items-center">
                      <Wrench className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700">Woningonderhoud</span>
                    </div>
                    <div className="flex items-center">
                      <Wrench className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700">Bedrijfsonderhoud</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white rounded-xl">
                    <p className="text-sm text-gray-600 text-center">
                      <strong>Geldrop voordeel:</strong> Korte lijnen, snelle service 
                      en persoonlijke aandacht voor elk onderhoudsproject.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Types in Geldrop */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Onderhoudstypen in <span className="text-green-600">Geldrop</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-600">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Woningonderhoud</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Complete onderhoudsservice voor particuliere woningen in Geldrop.
                  </p>
                  <Badge variant="outline" className="text-green-600 border-green-600">Particulier</Badge>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-600">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">VvE Onderhoud</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Professioneel onderhoud voor verenigingen van eigenaren.
                  </p>
                  <Badge variant="outline" className="text-green-600 border-green-600">VvE</Badge>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-600">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Bedrijfsonderhoud</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Technisch onderhoud voor bedrijfspanden en kantoren.
                  </p>
                  <Badge variant="outline" className="text-green-600 border-green-600">Zakelijk</Badge>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Of het nu gaat om woningonderhoud, VvE onderhoud of bedrijfsonderhoud in Geldrop - 
                wij leveren maatwerkoplossingen die aansluiten bij uw behoeften.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-xl"
                  onClick={() => window.open(whatsappUrl, '_blank')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp Contact
                </Button>
                
                <Link href="/locaties/geldrop">
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 font-semibold px-8 py-3 rounded-xl">
                    <MapPin className="w-5 h-5 mr-2" />
                    Vestiging Geldrop
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
              Andere Services in <span className="text-green-600">Geldrop</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/geldrop/daklekkage">
                <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-green-600 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 flex items-center">
                      <Wrench className="w-6 h-6 text-green-600 mr-3" />
                      Daklekkage Geldrop
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Professionele daklekkage reparatie en 24/7 spoeddienst voor acute dakproblemen in Geldrop.
                    </p>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Bekijk service →</Badge>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/geldrop/renovatie">
                <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-green-600 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 flex items-center">
                      <Shield className="w-6 h-6 text-green-600 mr-3" />
                      Renovatie Geldrop
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Complete woningrenovaties en verbouwingen in Geldrop met focus op kwaliteit en duurzaamheid.
                    </p>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Bekijk service →</Badge>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer backgroundColor="bg-gray-900" accentColor="text-green-600" />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}