import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Shield, Award, Zap, CheckCircle, AlertTriangle, Droplets } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface EindhovenDaklekkageProps {
  onOpenContactModal: () => void;
}

export default function EindhovenDaklekkage({ onOpenContactModal }: EindhovenDaklekkageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="Daklekkage Reparatie Eindhoven | Binnen 2 Uur Ter Plaatse | 24u Spoed"
        description="🚨 SPOED DAKLEKKAGE EINDHOVEN? ✓ Binnen 2 uur ter plaatse ✓ 15 jaar garantie ✓ 24/7 spoeddienst ✓ Gratis inspectie ✓ Lokale daklekkage specialist ✓ 500+ tevreden klanten"
        url="https://tbgs.nl/nl/eindhoven/daklekkage"
        keywords="daklekkage Eindhoven, spoed daklekkage reparatie Eindhoven, dakdekker Eindhoven 24 uur, lekkend dak Eindhoven, daklek Eindhoven binnen 2 uur, nooddienst dak Eindhoven, daklekkage specialist Eindhoven"
      />
      <LocalSEOSchema businessData={{
        name: "TBGS Eindhoven - Daklekkage Specialist",
        address: {
          streetAddress: "Servicegebied Eindhoven",
          addressLocality: "Eindhoven",
          addressRegion: "Noord-Brabant", 
          postalCode: "5600",
          addressCountry: "NL"
        },
        telephone: "+31 40 202 6744",
        email: "eindhoven@tbgs.nl",
        website: "https://tbgs-bv.nl/eindhoven/daklekkage",
        geo: { latitude: 51.4416, longitude: 5.4697 },
        areaServed: ["Eindhoven", "Woensel", "Stratum", "Gestel", "Strijp", "Tongelre"],
        rating: { ratingValue: 4.9, reviewCount: 87 },
        openingHours: ["Mo-Su 00:00-24:00"]
      }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-red-100 border border-red-200 rounded-full px-4 py-2 text-sm font-medium text-red-700 mb-6">
              <AlertTriangle className="w-4 h-4" />
              <span>24 Uur Spoeddienst Actief</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Daklekkage</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">Reparatie Eindhoven</span>
            </h1>

            {/* Urgency Alert */}
            <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-6 mx-auto max-w-2xl rounded-lg">
              <div className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                <p className="text-red-700 font-semibold">
                  ⚠️ Elk uur wachten = €150+ extra waterschade! Winter/herfstweer verhoogt urgentie.
                </p>
              </div>
            </div>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
              <strong className="text-red-600">Daklek? Wij zijn er binnen 2 uur!</strong> Professionele daklekkage reparatie in Eindhoven met <strong>24u spoeddienst</strong> en directe oplossingen. <strong>500+ Eindhoven eigenaren</strong> kozen al voor onze bewezen aanpak.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-red-600 mb-1 sm:mb-2">2u</div>
                <div className="text-xs sm:text-sm lg:text-base text-slate-600">Response Tijd</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-green-600 mb-1 sm:mb-2">24/7</div>
                <div className="text-xs sm:text-sm lg:text-base text-slate-600">Spoeddienst</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-600 mb-1 sm:mb-2">5★</div>
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
                className="group bg-gradient-to-r from-red-500 to-red-600 text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg lg:text-xl hover:from-red-400 hover:to-red-500 transition-all duration-300 shadow-2xl hover:shadow-red-500/25 transform hover:-translate-y-1 hover:scale-105 inline-flex items-center w-full sm:w-auto"
              >
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:animate-bounce" />
                <span className="text-sm sm:text-base lg:text-xl">Spoedinterventie Aanvragen</span>
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
              Daklekkage Service in <span className="text-red-600">Heel Eindhoven</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Onze daklekkage specialisten komen naar alle wijken van Eindhoven voor directe noodreparaties en definitieve oplossingen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              "Eindhoven Centrum", "Woensel-Noord", "Woensel-Zuid", 
              "Stratum", "Gestel", "Strijp", 
              "Tongelre", "Meerhoven", "De Wielen"
            ].map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-500">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900">{area}</h3>
                      <p className="text-sm text-slate-600">24u Spoeddienst Beschikbaar</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Daklekkage Services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Complete <span className="text-red-600">Daklekkage Oplossingen</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Van noodreparaties tot definitieve oplossingen. TBGS lost alle daklekkage problemen op met vakmanschap en garantie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Spoednoodreparaties</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Directe lekkage stoppen</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Tijdelijke afdichting</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Wateroverlast voorkomen</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>24/7 bereikbaarheid</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Definitieve Reparaties</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Dakpannen vervangen</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>EPDM reparaties</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Bitumen herstel</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>10 jaar garantie</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Preventief Onderhoud</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Jaarlijkse dakcontrole</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Dakgoot reiniging</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Preventieve reparaties</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Onderhoudscontract</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Knowledge */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Lokale Kennis van <span className="text-red-600">Eindhoven Daklekkages</span>
              </h2>
              <p className="text-lg text-slate-600">
                Als lokale dakdekkers in Eindhoven kennen wij de veelvoorkomende oorzaken van daklekkages in onze regio.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Veelvoorkomende Oorzaken Eindhoven</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Stormschade door westenwind</li>
                    <li>• Verstopte dakgoten door populierenbladeren</li>
                    <li>• Oudere dakpannen in historische wijken</li>
                    <li>• Vorstschade aan leidingen</li>
                    <li>• Slechte aansluiting bij dakkapellen</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">TBGS Voordelen Eindhoven</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Binnen 30 minuten ter plaatse</li>
                    <li>• Kennis van lokale bouwstijlen</li>
                    <li>• Contacten bij lokale leveranciers</li>
                    <li>• Ervaring met Eindhovense weersomstandigheden</li>
                    <li>• Nazorg en garantie in de buurt</li>
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
              Meer Informatie over Daklekkages
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/daklekkage-herkennen-voorkomen">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Daklekkage Herkennen</h3>
                  <p className="text-sm text-slate-600">Leer de vroege signalen van daklekkage herkennen</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/energiebesparing-door-isolatie">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Dak Isolatie</h3>
                  <p className="text-sm text-slate-600">Voorkom lekkages met goede dakilsolatie</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/contact">
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Direct Contact</h3>
                  <p className="text-sm text-slate-600">24/7 bereikbaar voor spoednoodreparaties</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Daklek in Eindhoven? Direct Hulp Nodig?
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              Bel nu voor 24/7 spoedinterventie of vraag een gratis offerte aan
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+31402026744"
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-3" />
                040 - 202 6744
              </a>
              <button 
                onClick={onOpenContactModal}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                Gratis Offerte
              </button>
            </div>

            <p className="text-sm mt-6 opacity-75">
              Erkend & Verzekerd • 10 Jaar Garantie • Lokaal Eindhovens Bedrijf
            </p>
          </div>
        </div>
      </section>
    </>
  );
}