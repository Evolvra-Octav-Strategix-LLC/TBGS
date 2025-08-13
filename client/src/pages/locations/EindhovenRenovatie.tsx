import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Shield, Award, Zap, CheckCircle, Home, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface EindhovenRenovatieProps {
  onOpenContactModal: () => void;
}

export default function EindhovenRenovatie({ onOpenContactModal }: EindhovenRenovatieProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="Renovatie Eindhoven - Dakrenovatie & Verbouwing Specialist | TBGS Eindhoven"
        description="🏡 Renovatie Eindhoven ✓ Complete woning verbouwing ✓ Dakrenovatie specialist ✓ Badkamer & keuken renovatie ✓ Erkend aannemer ✓ Gratis offerte ✓ 15+ jaar ervaring"
        url="https://tbgs.nl/eindhoven/renovatie"
        keywords="renovatie Eindhoven, verbouwing Eindhoven, dakrenovatie Eindhoven, aannemer Eindhoven, badkamer renovatie Eindhoven, keuken verbouwing Eindhoven, huis renoveren Eindhoven"
      />
      <LocalSEOSchema businessData={{
        name: "TBGS Eindhoven - Renovatie Specialist",
        address: {
          streetAddress: "Servicegebied Eindhoven",
          addressLocality: "Eindhoven",
          addressRegion: "Noord-Brabant", 
          postalCode: "5600",
          addressCountry: "NL"
        },
        telephone: "+31 40 202 6744",
        email: "eindhoven@tbgs.nl",
        website: "https://tbgs-bv.nl/eindhoven/renovatie",
        geo: { latitude: 51.4416, longitude: 5.4697 },
        areaServed: ["Eindhoven", "Woensel", "Stratum", "Gestel", "Strijp", "Tongelre"],
        rating: { ratingValue: 4.9, reviewCount: 87 },
        openingHours: ["Mo-Fr 07:30-17:30", "Sa 08:00-16:00"]
      }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-2 text-sm font-medium text-blue-700 mb-6">
              <Home className="w-4 h-4" />
              <span>Erkend Renovatie Specialist</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Renovatie</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">Specialist Eindhoven</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
              <strong className="text-blue-600">Complete woningurenoveratie in Eindhoven</strong> door erkende professionals. Van <strong>dakrenovatie tot badkamers</strong> - alles onder één dak.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-600 mb-1 sm:mb-2">15+</div>
                <div className="text-xs sm:text-sm lg:text-base text-slate-600">Jaar Ervaring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-green-600 mb-1 sm:mb-2">100%</div>
                <div className="text-xs sm:text-sm lg:text-base text-slate-600">Erkend</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-purple-600 mb-1 sm:mb-2">5★</div>
                <div className="text-xs sm:text-sm lg:text-base text-slate-600">Klantbeoordeling</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-orange-600 mb-1 sm:mb-2">10j</div>
                <div className="text-xs sm:text-sm lg:text-base text-slate-600">Garantie</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button 
                onClick={onOpenContactModal}
                className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg lg:text-xl hover:from-blue-400 hover:to-blue-500 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 hover:scale-105 inline-flex items-center w-full sm:w-auto"
              >
                <Home className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:animate-bounce" />
                <span className="text-sm sm:text-base lg:text-xl">Gratis Renovatie Offerte</span>
              </button>
              <a 
                href="https://wa.me/31614595142" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-green-500 text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg lg:text-xl hover:bg-green-400 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-1 hover:scale-105 inline-flex items-center w-full sm:w-auto"
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
              Renovatie Service in <span className="text-blue-600">Heel Eindhoven</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Van complete dakrenovaties tot badkamer verbouwingen - TBGS voert renovaties uit in alle Eindhovense wijken.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              "Eindhoven Centrum", "Woensel-Noord", "Woensel-Zuid", 
              "Stratum", "Gestel", "Strijp", 
              "Tongelre", "Meerhoven", "De Wielen"
            ].map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900">{area}</h3>
                      <p className="text-sm text-slate-600">Erkende Renovatie Service</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Renovation Services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Complete <span className="text-blue-600">Renovatie Diensten</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Van kleine verbouwingen tot complete woning renovaties. TBGS regelt alles voor uw droomhuis in Eindhoven.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Dakrenovaties</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Complete dakrenovatie</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Dakpannen vernieuwen</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Dakisolatie upgrade</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Dakkapel plaatsing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Badkamer Renovatie</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Complete badkamer vernieuwing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Tegeling en sanitair</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Loodgieterswerk</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Vloerverwarming</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Keuken Verbouwing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Keuken ontwerp & plaatsing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Elektra en leidingwerk</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Tegelwerk en afwerking</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Kookeiland installatie</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Renovation Knowledge */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Lokale Renovatie Expertise <span className="text-blue-600">Eindhoven</span>
              </h2>
              <p className="text-lg text-slate-600">
                Met 15+ jaar ervaring in Eindhoven kennen wij de lokale bouwstijlen en voorschriften als geen ander.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Eindhovense Specialiteiten</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Renovatie jaren '30 woningen</li>
                    <li>• Philips woningen karakteristiek behouden</li>
                    <li>• Moderne nieuwbouwwijken upgrade</li>
                    <li>• Monumentaal onderhoud centrum</li>
                    <li>• Energiezuinige verbouwingen</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Lokale Voordelen</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Kennis gemeentelijke procedures</li>
                    <li>• Contacten leveranciers regio</li>
                    <li>• Vergunningen snel geregeld</li>
                    <li>• Nazorg en garantie nabij</li>
                    <li>• Persoonlijke service</li>
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
              Renovatie Informatie & Tips
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/energiebesparing-door-isolatie">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Isolatie Renovatie</h3>
                  <p className="text-sm text-slate-600">Energiezuinig renoveren met isolatie</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/daklekkage-herkennen-voorkomen">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Dakproblemen</h3>
                  <p className="text-sm text-slate-600">Voorkomen van schade tijdens renovatie</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/contact">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Gratis Advies</h3>
                  <p className="text-sm text-slate-600">Persoonlijk renovatie advies</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Klaar voor uw Renovatie in Eindhoven?
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              Vraag een gratis offerte aan of bel voor persoonlijk advies
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+31402026744"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-3" />
                040 - 202 6744
              </a>
              <button 
                onClick={onOpenContactModal}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Gratis Offerte
              </button>
            </div>

            <p className="text-sm mt-6 opacity-75">
              Erkend Aannemer • 10 Jaar Garantie • Lokaal Eindhovens Bedrijf
            </p>
          </div>
        </div>
      </section>
    </>
  );
}