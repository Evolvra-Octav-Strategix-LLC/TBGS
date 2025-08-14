import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Clock, Star, ArrowRight, Shield, Award, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ContactModal from "@/components/ContactModal";
import { Link } from "wouter";
import LocalSEOSchema from "@/components/LocalSEOSchema";

interface LocationWaalreProps {
  onOpenContactModal: () => void;
}

export default function LocationWaalre({ onOpenContactModal }: LocationWaalreProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const whatsappNumber = "+31614595142";
  const businessName = "TBGS Totaal Bouw Groep Specialisten";

  const services = [
    {
      name: "Daklekkage Spoeddienst",
      description: "24/7 professionele daklekkage reparatie en waterschade preventie in Waalre en omstreken",
      icon: "💧",
      color: "bg-red-600",
      url: "/waalre/daklekkage",
      urgency: "Spoedeisend",
      responseTime: "< 2 uur"
    },
    {
      name: "Luxe Renovatie", 
      description: "High-end woningrenovaties, exclusieve badkamers en designer keukens door master craftsmen",
      icon: "🏠",
      color: "bg-orange-600", 
      url: "/waalre/renovatie",
      urgency: "Premium",
      responseTime: "24 uur"
    },
    {
      name: "Elite Onderhoud",
      description: "Exclusieve onderhoudscontracten en preventieve zorg voor luxe woningen en villa's",
      icon: "🔧", 
      color: "bg-green-600",
      url: "/waalre/onderhoud",
      urgency: "Preventief",
      responseTime: "Gepland"
    }
  ];

  return (
    <>
      <Helmet>
        <title>TBGS Waalre | Elite Dakdekker, Luxe Renovatie & Premium Onderhoud Specialisten</title>
        <meta name="description" content="🏆 TBGS Waalre - Elite bouwspecialisten voor luxe woningen. ✓ 24/7 daklekkage spoeddienst ✓ High-end renovaties ✓ Premium onderhoudscontracten ✓ 25+ jaar expertise ✓ Master craftsmen ✓ Exclusieve service Waalre" />
        <meta name="keywords" content="elite dakdekker Waalre, luxe renovatie Waalre, premium onderhoud Waalre, high-end aannemer Waalre, villa renovatie Waalre, exclusieve bouwdiensten Waalre, daklekkage Waalre 24/7, luxury construction Waalre" />
        <link rel="canonical" href="https://www.tbgs.nl/waalre" />
        
        {/* Enhanced Open Graph */}
        <meta property="og:title" content="TBGS Waalre | Elite Bouwspecialisten voor Luxe Woningen" />
        <meta property="og:description" content="Elite daklekkage service, high-end renovaties en premium onderhoud voor luxe woningen in Waalre. Master craftsmen met 25+ jaar expertise." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tbgs.nl/waalre" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="TBGS Elite Bouwspecialisten" />
        
        {/* Premium Location Tags */}
        <meta name="geo.region" content="NL-NB" />
        <meta name="geo.placename" content="Waalre" />
        <meta name="geo.position" content="51.3886;5.4458" />
        <meta name="ICBM" content="51.3886,5.4458" />
        
        {/* Elite Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "TBGS Elite Bouwspecialisten Waalre",
            "description": "Elite daklekkage service, luxe renovaties en premium onderhoud voor high-end woningen",
            "serviceType": ["Elite Daklekkage Service", "Luxe Woningrenovatie", "Premium Villa Onderhoud"],
            "areaServed": {
              "@type": "City", 
              "name": "Waalre",
              "addressRegion": "Noord-Brabant"
            },
            "priceRange": "€€€",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "89"
            }
          })}
        </script>
      </Helmet>

      <LocalSEOSchema 
        businessData={{
          name: businessName,
          address: {
            addressLocality: "Waalre",
            addressRegion: "Noord-Brabant", 
            addressCountry: "Nederland"
          },
          telephone: whatsappNumber,
          geo: {
            latitude: 51.3886,
            longitude: 5.4458
          },
          areaServed: ["Waalre", "Noord-Brabant", "Nederland"]
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <Header onOpenContactModal={onOpenContactModal} />
        
        {/* Premium Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-5xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
                <Award className="w-4 h-4" />
                Waalre Premium • Elite Bouwspecialisten
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-tbgs-navy via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Elite Bouwspecialisten
                </span>
                <span className="block text-tbgs-navy mt-3 text-4xl md:text-5xl">Waalre</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-4xl mx-auto">
                <strong>TBGS Elite Waalre</strong> - Exclusieve bouwdiensten voor <em>luxe woningen</em> en <em>villa's</em>. 
                Specialisatie in <strong>24/7 daklekkage spoeddienst</strong>, <strong>high-end renovaties</strong> en 
                <strong>premium onderhoudscontracten</strong>. <em>Master craftsmen</em> met <strong>25+ jaar expertise</strong>.
              </p>

              {/* Premium CTA */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <Button 
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hallo TBGS Elite, ik zoek premium bouwdiensten voor mijn woning in Waalre`, '_blank')}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-5 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  Elite WhatsApp Service
                </Button>
                <div className="flex items-center gap-3 text-gray-700">
                  <Zap className="w-6 h-6 text-yellow-500" />
                  <span className="text-lg"><strong>Premium 24/7</strong> • Binnen 90 min ter plaatse</span>
                </div>
              </div>

              {/* Elite Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-xl border border-blue-100">
                  <div className="text-4xl font-bold bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent mb-2">25+</div>
                  <div className="text-sm text-gray-600 font-medium">Jaar Elite Expertise</div>
                  <Award className="w-6 h-6 mx-auto mt-3 text-yellow-500" />
                </div>
                <div className="text-center bg-gradient-to-br from-white to-green-50 rounded-2xl p-6 shadow-xl border border-green-100">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">4.9★</div>
                  <div className="text-sm text-gray-600 font-medium">Premium Reviews</div>
                  <Star className="w-6 h-6 mx-auto mt-3 text-yellow-500" />
                </div>
                <div className="text-center bg-gradient-to-br from-white to-purple-50 rounded-2xl p-6 shadow-xl border border-purple-100">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">100%</div>
                  <div className="text-sm text-gray-600 font-medium">Luxe Tevredenheid</div>
                  <Shield className="w-6 h-6 mx-auto mt-3 text-purple-600" />
                </div>
                <div className="text-center bg-gradient-to-br from-white to-orange-50 rounded-2xl p-6 shadow-xl border border-orange-100">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">200+</div>
                  <div className="text-sm text-gray-600 font-medium">Villa Projecten</div>
                  <Users className="w-6 h-6 mx-auto mt-3 text-orange-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Elite Services Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-white to-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
                <span className="bg-gradient-to-r from-tbgs-navy to-purple-600 bg-clip-text text-transparent">Elite Services</span>
                <span className="block text-2xl md:text-3xl text-gray-600 mt-2">Voor Luxe Woningen Waalre</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Exclusieve <strong>premium bouwdiensten</strong> speciaal ontwikkeld voor <strong>high-end woningen</strong> 
                en <strong>villa's in Waalre</strong>. Van <em>spoeddienst daklekkage</em> tot <em>complete luxe renovaties</em>.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {services.map((service, index) => (
                <Link href={service.url} key={index}>
                  <article className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-2xl border border-gray-200 hover:border-blue-300 hover:shadow-3xl transition-all duration-500 cursor-pointer group h-full transform hover:scale-105">
                    <header className="text-center mb-8">
                      <div className={`w-24 h-24 ${service.color} rounded-3xl flex items-center justify-center mx-auto mb-8 text-4xl text-white group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                        {service.icon}
                      </div>
                      
                      <div className="flex justify-center mb-4">
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-xs font-bold">
                          {service.urgency}
                        </Badge>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.name}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">{service.description}</p>
                    </header>
                    
                    <div className="bg-blue-50 rounded-xl p-4 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Reactietijd:</span>
                        <span className="font-bold text-tbgs-navy">{service.responseTime}</span>
                      </div>
                    </div>
                    
                    <footer className="flex items-center justify-between">
                      <Badge className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                        Elite Service
                      </Badge>
                      <div className="flex items-center text-tbgs-navy font-bold group-hover:text-purple-600 transition-colors">
                        Exclusieve Info
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </footer>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose TBGS Elite */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-900 via-tbgs-navy to-blue-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Waarom <span className="text-yellow-400">TBGS Elite</span> in Waalre?
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                Als <strong>premium bouwspecialist in Waalre</strong> leveren wij exclusieve diensten 
                die perfect aansluiten bij de <strong>high-end woningmarkt</strong> en <strong>luxe lifestyle</strong>.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <MapPin className="w-12 h-12 text-yellow-400 mb-6" />
                <h3 className="font-bold text-xl mb-4">Waalre Villa Expertise</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Specialistische kennis van Waalrese villa architectuur, monumentale panden en exclusieve woningtypen uit verschillende perioden.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Zap className="w-12 h-12 text-green-400 mb-6" />
                <h3 className="font-bold text-xl mb-4">Premium Spoeddienst</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  24/7 elite spoeddienst met gegarandeerde respons binnen 90 minuten voor alle noodgevallen in Waalre.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Users className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="font-bold text-xl mb-4">Discretie & Service</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Volledige discretie, persoonlijke projectleiding en white-glove service voor alle luxe projecten.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Shield className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="font-bold text-xl mb-4">Elite Garantie</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Uitgebreide premium garantievoorwaarden met exclusieve nazorg gedurende de gehele garantieperiode.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Elite CTA */}
        <section className="py-20 px-4 bg-gradient-to-br from-yellow-50 via-white to-orange-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Klaar voor <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Elite Kwaliteit</span>?
            </h2>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
              Ervaar het verschil van <strong>premium vakmanschap</strong> en <strong>elite service</strong> in Waalre. 
              Vraag vandaag nog een <strong>exclusieve offerte</strong> aan of contacteer ons voor <strong>24/7 premium spoedservice</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button 
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hallo TBGS Elite, ik wil graag een premium offerte voor mijn luxe project in Waalre`, '_blank')}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-6 h-6 mr-3" />
                Elite WhatsApp Contact
              </Button>
              <Button 
                onClick={onOpenContactModal}
                className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                Exclusieve Premium Offerte
              </Button>
            </div>
            
            <div className="flex justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-500" />
                <span>Master Craftsmen</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span>Elite Garantie</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>25+ Jaar Expertise</span>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}