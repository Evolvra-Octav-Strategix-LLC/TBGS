import SEOHead from "@/lib/seo";
import { Link } from "wouter";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Star, Phone, Mail, MapPin, Clock, Shield, Award, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LocationNuenenProps {
  onOpenContactModal: () => void;
}

export default function LocationNuenen({ onOpenContactModal }: LocationNuenenProps) {
  return (
    <>
      <SEOHead 
        title="TBGS Nuenen - Dakdekker & Bouwspecialist Nuenen | Dakwerken Nuenen"
        description="🏆 TBGS Nuenen ✓ Lokale dakdekker & bouwspecialist ✓ Dakwerken, schoorsteenwerken, onderhoud Nuenen ✓ Van Gogh dorp specialist ✓ Gratis offerte ✓ Erkend & verzekerd"
        url="https://tbgs.nl/nuenen"
        keywords="dakdekker Nuenen, dakwerken Nuenen, bouwbedrijf Nuenen, schoorsteenwerk Nuenen, onderhoud Nuenen, Van Gogh dorp, dakgoten Nuenen"
      />
      <LocalSEOSchema businessData={{
        name: "TBGS Nuenen - Totaal Bouw Groep Specialisten",
        address: {
          streetAddress: "Servicegebied Nuenen",
          addressLocality: "Nuenen",
          addressRegion: "Noord-Brabant", 
          postalCode: "5670",
          addressCountry: "NL"
        },
        telephone: "+31 40 202 6744",
        email: "nuenen@tbgs.nl",
        website: "https://tbgs-bv.nl/nuenen",
        geo: {
          latitude: 51.4700,
          longitude: 5.5500
        },
        areaServed: ["Nuenen", "Gerwen", "Nederwetten"],
        rating: {
          ratingValue: 4.9,
          reviewCount: 32
        }
      }} />

      {/* Hero Section - Nuenen Specific */}
      <section className="relative bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700">
                <MapPin className="w-4 h-4 text-tbgs-green" />
                <span>Actief in Van Gogh Dorp Nuenen</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                  <span className="bg-gradient-to-r from-tbgs-green to-green-600 bg-clip-text text-transparent">TBGS</span>
                  <br />
                  <span className="text-4xl lg:text-6xl">Nuenen</span>
                </h1>
                <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light">
                  Uw vertrouwde <strong>dakdekker en bouwspecialist</strong> in het Van Gogh dorp Nuenen. Specialist in <strong>historische panden</strong> en <strong>moderne woningen</strong>.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl px-6 py-4 flex items-center space-x-3">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <div>
                    <div className="font-bold text-slate-900">4.9★</div>
                    <div className="text-sm text-slate-600">32 reviews Nuenen</div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl px-6 py-4 flex items-center space-x-3">
                  <Award className="w-6 h-6 text-green-500" />
                  <div>
                    <div className="font-bold text-slate-900">Specialist</div>
                    <div className="text-sm text-slate-600">Historische panden</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/offerte" className="bg-tbgs-green text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-3" />
                  Gratis Offerte Nuenen
                </Link>
                <a href="tel:+31402026744" className="bg-white text-tbgs-green border-2 border-tbgs-green px-8 py-4 rounded-2xl font-bold text-lg hover:bg-tbgs-green hover:text-white transition-all duration-300 inline-flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-3" />
                  040 202 6744
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="TBGS dakwerken Nuenen - historisch pand renovatie Van Gogh dorp"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                    <h3 className="font-bold text-slate-900 mb-2">Recent Project Nuenen</h3>
                    <p className="text-sm text-slate-600">Historische boerderij dakrestauratie • Van Gogh plein</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Nuenen */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Onze diensten in <span className="bg-gradient-to-r from-tbgs-green to-green-600 bg-clip-text text-transparent">Nuenen</span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              Gespecialiseerd in <strong>historische panden</strong> en <strong>moderne woningen</strong> in het Van Gogh dorp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-tbgs-green hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                  <i className="fas fa-home text-2xl text-tbgs-green"></i>
                </div>
                <CardTitle className="text-xl">Historische dakwerken</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>✓ Restauratie historische daken</li>
                  <li>✓ Traditionele materialen & technieken</li>
                  <li>✓ Monumentenzorg ervaring</li>
                  <li>✓ Gemeentelijke vergunningen</li>
                </ul>
                <div className="mt-4 text-sm text-slate-500">
                  Actief: Centrum Nuenen, Van Gogh plein
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-tbgs-green hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <i className="fas fa-industry text-2xl text-tbgs-blue"></i>
                </div>
                <CardTitle className="text-xl">Schoorsteenonderhoud</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>✓ Historische schoorstenen</li>
                  <li>✓ Jaarlijkse controle & reiniging</li>
                  <li>✓ Rookkanaal restauratie</li>
                  <li>✓ Open haard onderhoud</li>
                </ul>
                <div className="mt-4 text-sm text-slate-500">
                  Ook: Gerwen, Nederwetten
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nuenen Specialization */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Specialist in <span className="bg-gradient-to-r from-tbgs-green to-green-600 bg-clip-text text-transparent">Van Gogh Dorp</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Waarom kiezen voor TBGS in Nuenen?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <i className="fas fa-monument text-green-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Monumentenzorg Ervaring</h4>
                    <p className="text-slate-600">Gespecialiseerd in het restaureren van historische panden met respect voor de originele architectuur.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <i className="fas fa-map-marker-alt text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Lokale Kennis</h4>
                    <p className="text-slate-600">15+ jaar ervaring in Nuenen. Wij kennen de lokale bouwstijlen en gemeentelijke eisen.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                    <i className="fas fa-certificate text-yellow-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Erkende Specialisten</h4>
                    <p className="text-slate-600">Alle benodigde certificeringen voor monumentenzorg en historische restauraties.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Historische panden Nuenen - Van Gogh dorp"
                className="w-full h-80 object-cover rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section Nuenen */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-tbgs-green via-green-700 to-emerald-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Contact <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Nuenen</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Project in het <strong>Van Gogh dorp</strong>? Wij helpen graag met uw dakwerk of renovatie!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
              <CardHeader>
                <Phone className="w-12 h-12 mx-auto mb-4" />
                <CardTitle>Bel direct</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+31402026744" className="text-2xl font-bold text-yellow-300 hover:text-white transition-colors">
                  040 202 6744
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
              <CardHeader>
                <Mail className="w-12 h-12 mx-auto mb-4" />
                <CardTitle>E-mail ons</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:nuenen@tbgs.nl" className="text-xl font-bold text-yellow-300 hover:text-white transition-colors">
                  nuenen@tbgs.nl
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
              <CardHeader>
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <CardTitle>Servicegebied</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold">Nuenen, Gerwen, Nederwetten</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/offerte" className="bg-yellow-400 text-slate-900 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center">
              <Phone className="w-6 h-6 mr-3" />
              Gratis Offerte Nuenen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}