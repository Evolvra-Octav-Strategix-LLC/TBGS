import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Shield, Award, Zap, CheckCircle, Settings, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface EindhovenOnderhoudProps {
  onOpenContactModal: () => void;
}

export default function EindhovenOnderhoud({ onOpenContactModal }: EindhovenOnderhoudProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="Onderhoud Eindhoven - Dakonderhoud & Preventief Onderhoud | TBGS Eindhoven"
        description="🔧 Onderhoud Eindhoven ✓ Dakonderhoud specialist ✓ Preventief onderhoudscontract ✓ Jaarlijkse inspectie ✓ Dakgoten reiniging ✓ TBGS onderhoudsservice ✓ Gratis advies"
        url="https://tbgs.nl/eindhoven/onderhoud"
        keywords="onderhoud Eindhoven, dakonderhoud Eindhoven, preventief onderhoud Eindhoven, onderhoudscontract Eindhoven, dakgoten reiniging Eindhoven, jaarlijkse controle Eindhoven"
      />
      <LocalSEOSchema businessData={{
        name: "TBGS Eindhoven - Onderhoud Specialist",
        address: {
          streetAddress: "Servicegebied Eindhoven",
          addressLocality: "Eindhoven",
          addressRegion: "Noord-Brabant", 
          postalCode: "5600",
          addressCountry: "NL"
        },
        telephone: "+31 40 202 6744",
        email: "eindhoven@tbgs.nl",
        website: "https://tbgs-bv.nl/eindhoven/onderhoud",
        geo: { latitude: 51.4416, longitude: 5.4697 },
        areaServed: ["Eindhoven", "Woensel", "Stratum", "Gestel", "Strijp", "Tongelre"],
        rating: { ratingValue: 4.9, reviewCount: 87 },
        openingHours: ["Mo-Fr 07:30-17:30", "Sa 08:00-16:00"]
      }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-green-100 border border-green-200 rounded-full px-4 py-2 text-sm font-medium text-green-700 mb-6">
              <Settings className="w-4 h-4" />
              <span>Preventief Onderhoud Specialist</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Onderhoud</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">Service Eindhoven</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
              <strong className="text-green-600">Preventief onderhoud voorkomt dure reparaties!</strong> Professionele onderhoudsservice in Eindhoven met <strong>jaarlijkse controles</strong> en onderhoudscontracten.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-green-600 mb-1 sm:mb-2">1x</div>
                <div className="text-xs sm:text-sm lg:text-base text-slate-600">Per Jaar</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-600 mb-1 sm:mb-2">75%</div>
                <div className="text-xs sm:text-sm lg:text-base text-slate-600">Schade Voorkomen</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-purple-600 mb-1 sm:mb-2">5★</div>
                <div className="text-xs sm:text-sm lg:text-base text-slate-600">Klantbeoordeling</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-orange-600 mb-1 sm:mb-2">15+</div>
                <div className="text-xs sm:text-sm lg:text-base text-slate-600">Jaar Ervaring</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button 
                onClick={onOpenContactModal}
                className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg lg:text-xl hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-1 hover:scale-105 inline-flex items-center w-full sm:w-auto"
              >
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:animate-bounce" />
                <span className="text-sm sm:text-base lg:text-xl">Onderhoudscontract Aanvragen</span>
              </button>
              <a 
                href="https://wa.me/31614595142" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-blue-500 text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg lg:text-xl hover:bg-blue-400 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 hover:scale-105 inline-flex items-center w-full sm:w-auto"
              >
                <i className="fab fa-whatsapp text-xl sm:text-2xl mr-2 sm:mr-3 group-hover:animate-bounce"></i>
                <span className="text-sm sm:text-base lg:text-xl">Direct WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Onderhoudsservice in <span className="text-green-600">Heel Eindhoven</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Regelmatig onderhoud in alle wijken van Eindhoven. Preventief werken bespaart u dure noodreparaties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              "Eindhoven Centrum", "Woensel-Noord", "Woensel-Zuid", 
              "Stratum", "Gestel", "Strijp", 
              "Tongelre", "Meerhoven", "De Wielen"
            ].map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900">{area}</h3>
                      <p className="text-sm text-slate-600">Jaarlijks Onderhoudsbezoek</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Complete <span className="text-green-600">Onderhoudspakketten</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Van eenmalige controles tot volledig onderhoudscontract. TBGS houdt uw eigendom in topconditie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Dakonderhoud</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Jaarlijkse dakcontrole</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Dakpannen nazien</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Preventieve reparaties</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Detailrapportage</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Dakgoten Service</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Dakgoten reiniging</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Afvoercontrole</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Bladvangers plaatsen</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Seizoensreiniging</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Onderhoudscontract</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Jaarcontract mogelijk</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Automatische planning</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Korting op reparaties</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Prioriteitsservice</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Maintenance Knowledge */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Preventief Onderhoud <span className="text-green-600">Eindhoven</span>
              </h2>
              <p className="text-lg text-slate-600">
                Door lokale weersomstandigheden en bouwstijlen weten wij precies waar u op moet letten in Eindhoven.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Seizoensonderhoud Eindhoven</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Voorjaar: dakgoten legen na winter</li>
                    <li>• Zomer: preventieve controle voor storm</li>
                    <li>• Herfst: bladeren uit dakgoten</li>
                    <li>• Winter: vorstcontrole en ijspegels</li>
                    <li>• Jaarrond: monitoring zwakke punten</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Lokale Onderhoudsvoordelen</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Snelle response bij problemen</li>
                    <li>• Kennis lokale weerspatronen</li>
                    <li>• Ervaring met Eindhovense daken</li>
                    <li>• Persoonlijke relatie opbouwen</li>
                    <li>• Directe beschikbaarheid materialen</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Base Links */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Onderhoud Informatie & Planning
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/jaarlijkse-schoorsteencontrole">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Schoorsteencontrole</h3>
                  <p className="text-sm text-slate-600">Jaarlijkse schoorsteencontrole planning</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/daklekkage-herkennen-voorkomen">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Preventie Tips</h3>
                  <p className="text-sm text-slate-600">Voorkom dure reparaties door onderhoud</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/contact">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Onderhoudsadvies</h3>
                  <p className="text-sm text-slate-600">Gratis advies onderhoudsplanning</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Start met Preventief Onderhoud in Eindhoven
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              Voorkom dure reparaties met een onderhoudscontract
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+31402026744"
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-3" />
                040 - 202 6744
              </a>
              <button 
                onClick={onOpenContactModal}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                Onderhoudscontract Aanvragen
              </button>
            </div>

            <p className="text-sm mt-6 opacity-75">
              Lokaal Bedrijf • Persoonlijke Service • 15+ Jaar Ervaring in Eindhoven
            </p>
          </div>
        </div>
      </section>
    </>
  );
}