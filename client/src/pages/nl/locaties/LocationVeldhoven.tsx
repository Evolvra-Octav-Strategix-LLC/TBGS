import SEOHead from "@/lib/seo";
import { Link } from "wouter";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Star, Phone, Mail, MapPin, Clock, Shield, Award, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LocationVeldhovenProps {
  onOpenContactModal: () => void;
}

export default function LocationVeldhoven({ onOpenContactModal }: LocationVeldhovenProps) {
  return (
    <>
      <SEOHead 
        title="TBGS Veldhoven - Dakdekker & Bouwspecialist Veldhoven | Dakwerken Veldhoven"
        description="🏆 TBGS Veldhoven ✓ Lokale dakdekker & bouwspecialist ✓ Dakwerken, schoorsteenwerken, onderhoud Veldhoven ✓ Moderne nieuwbouw specialist ✓ Gratis offerte"
        url="https://tbgs.nl/veldhoven"
        keywords="dakdekker Veldhoven, dakwerken Veldhoven, bouwbedrijf Veldhoven, schoorsteenwerk Veldhoven, onderhoud Veldhoven, nieuwbouw Veldhoven"
      />
      <LocalSEOSchema businessData={{
        name: "TBGS Veldhoven - Totaal Bouw Groep Specialisten",
        address: {
          streetAddress: "Servicegebied Veldhoven",
          addressLocality: "Veldhoven",
          addressRegion: "Noord-Brabant", 
          postalCode: "5500",
          addressCountry: "NL"
        },
        telephone: "+31 40 202 6744",
        email: "veldhoven@tbgs.nl",
        website: "https://tbgs-bv.nl/veldhoven",
        geo: {
          latitude: 51.4170,
          longitude: 5.4041
        },
        areaServed: ["Veldhoven", "Oerle", "Zeelst"],
        rating: {
          ratingValue: 4.8,
          reviewCount: 45
        }
      }} />

      {/* Hero Section - Veldhoven Specific */}
      <section className="relative bg-gradient-to-br from-slate-50 via-orange-50 to-red-50 py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700">
                <MapPin className="w-4 h-4 text-tbgs-orange" />
                <span>Actief in Veldhoven</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                  <span className="bg-gradient-to-r from-tbgs-orange to-orange-600 bg-clip-text text-transparent">TBGS</span>
                  <br />
                  <span className="text-4xl lg:text-6xl">Veldhoven</span>
                </h1>
                <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light">
                  Uw betrouwbare <strong>dakdekker en bouwspecialist</strong> in Veldhoven. Specialist in <strong>nieuwbouwprojecten</strong> en <strong>moderne renovaties</strong>.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl px-6 py-4 flex items-center space-x-3">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <div>
                    <div className="font-bold text-slate-900">4.8★</div>
                    <div className="text-sm text-slate-600">45 reviews Veldhoven</div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl px-6 py-4 flex items-center space-x-3">
                  <Award className="w-6 h-6 text-orange-500" />
                  <div>
                    <div className="font-bold text-slate-900">Specialist</div>
                    <div className="text-sm text-slate-600">Nieuwbouw</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/offerte" className="bg-tbgs-orange text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-3" />
                  Gratis Offerte Veldhoven
                </Link>
                <a href="tel:+31402026744" className="bg-white text-tbgs-orange border-2 border-tbgs-orange px-8 py-4 rounded-2xl font-bold text-lg hover:bg-tbgs-orange hover:text-white transition-all duration-300 inline-flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-3" />
                  040 202 6744
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="TBGS dakwerken Veldhoven - moderne nieuwbouw dakconstructie"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                    <h3 className="font-bold text-slate-900 mb-2">Recent Project Veldhoven</h3>
                    <p className="text-sm text-slate-600">Nieuwbouw dakconstructie • Zilverkamp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Veldhoven */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Onze diensten in <span className="bg-gradient-to-r from-tbgs-orange to-orange-600 bg-clip-text text-transparent">Veldhoven</span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              Gespecialiseerd in <strong>nieuwbouwprojecten</strong> en <strong>moderne woningen</strong> in Veldhoven.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 hover:border-tbgs-orange hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-home text-2xl text-tbgs-orange"></i>
                </div>
                <CardTitle className="text-xl">Nieuwbouw dakwerken</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>✓ Complete dakconstructies</li>
                  <li>✓ Moderne dakbedekking</li>
                  <li>✓ Zonnepanelen integratie</li>
                  <li>✓ Smart home oplossingen</li>
                </ul>
                <div className="mt-4 text-sm text-slate-500">
                  Actief: Zilverkamp, Cobbeek
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-tbgs-orange hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-industry text-2xl text-tbgs-blue"></i>
                </div>
                <CardTitle className="text-xl">Moderne schoorsteenwerk</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>✓ HR-ketel installaties</li>
                  <li>✓ Moderne rookgasafvoer</li>
                  <li>✓ Warmtepomp integratie</li>
                  <li>✓ Jaarlijks onderhoud</li>
                </ul>
                <div className="mt-4 text-sm text-slate-500">
                  Ook: Oerle, Zeelst
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-tbgs-green hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-wrench text-2xl text-tbgs-green"></i>
                </div>
                <CardTitle className="text-xl">Onderhoud Veldhoven</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>✓ Preventief onderhoud</li>
                  <li>✓ Gevelreiniging</li>
                  <li>✓ Moderne schildertechnieken</li>
                  <li>✓ Kleine renovaties</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-tbgs-red hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-hammer text-2xl text-tbgs-red"></i>
                </div>
                <CardTitle className="text-xl">Renovaties Veldhoven</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>✓ Complete woningrenovaties</li>
                  <li>✓ Keuken & badkamer</li>
                  <li>✓ Uitbreidingen</li>
                  <li>✓ Energetische verbeteringen</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section Veldhoven */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-tbgs-orange via-orange-700 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Contact <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Veldhoven</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Nieuwbouwproject of renovatie in <strong>Veldhoven</strong>? Wij denken graag mee!
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
                <a href="mailto:veldhoven@tbgs.nl" className="text-xl font-bold text-yellow-300 hover:text-white transition-colors">
                  veldhoven@tbgs.nl
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
              <CardHeader>
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <CardTitle>Servicegebied</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold">Veldhoven, Oerle, Zeelst</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/offerte" className="bg-yellow-400 text-slate-900 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center">
              <Phone className="w-6 h-6 mr-3" />
              Gratis Offerte Veldhoven
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}