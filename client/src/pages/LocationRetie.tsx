import SEOHead from "@/lib/seo";
import { Link } from "wouter";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Star, Phone, Mail, MapPin, Clock, Shield, Award, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LocationRetieProps {
  onOpenContactModal: () => void;
}

export default function LocationRetie({ onOpenContactModal }: LocationRetieProps) {
  return (
    <>
      <SEOHead 
        title="TBGS Retie - Dakdekker & Bouwspecialist Retie België | Dakwerken Retie"
        description="🏆 TBGS Retie België ✓ Lokale dakdekker & bouwspecialist ✓ Dakwerken, schoorsteenwerken, onderhoud Retie ✓ Belgische vakmannen ✓ Gratis offerte"
        url="https://tbgs.nl/retie"
        keywords="dakdekker Retie, dakwerken Retie, bouwbedrijf Retie België, schoorsteenwerk Retie, onderhoud Retie België, Antwerpen"
      />
      <LocalSEOSchema businessData={{
        name: "TBGS Retie - Totaal Bouw Groep Specialisten België",
        address: {
          streetAddress: "Servicegebied Retie",
          addressLocality: "Retie",
          addressRegion: "Antwerpen", 
          postalCode: "2470",
          addressCountry: "BE"
        },
        telephone: "+31 40 202 6744",
        email: "retie@tbgs.nl",
        website: "https://tbgs-bv.nl/retie",
        geo: {
          latitude: 51.2667,
          longitude: 5.0833
        },
        areaServed: ["Retie", "Dessel", "Mol", "Antwerpen"],
        rating: {
          ratingValue: 4.9,
          reviewCount: 28
        }
      }} />

      {/* Hero Section - Retie Belgium Specific */}
      <section className="relative bg-gradient-to-br from-slate-50 via-yellow-50 to-amber-50 py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700">
                <MapPin className="w-4 h-4 text-yellow-600" />
                <span>Actief in Retie, België</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                  <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">TBGS</span>
                  <br />
                  <span className="text-4xl lg:text-6xl">Retie</span>
                </h1>
                <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light">
                  Uw vertrouwde <strong>dakdekker en bouwspecialist</strong> in Retie, België. Nederlandse kwaliteit in de Kempen met <strong>lokale Belgische kennis</strong>.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl px-6 py-4 flex items-center space-x-3">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <div>
                    <div className="font-bold text-slate-900">4.9★</div>
                    <div className="text-sm text-slate-600">28 reviews Retie</div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl px-6 py-4 flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-blue-500" />
                  <div>
                    <div className="font-bold text-slate-900">Erkend</div>
                    <div className="text-sm text-slate-600">België & Nederland</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/offerte" className="bg-yellow-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-3" />
                  Gratis Offerte Retie
                </Link>
                <a href="tel:+31402026744" className="bg-white text-yellow-600 border-2 border-yellow-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-3" />
                  040 202 6744
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="TBGS dakwerken Retie België - Belgische woningen dakwerk"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                    <h3 className="font-bold text-slate-900 mb-2">Recent Project Retie</h3>
                    <p className="text-sm text-slate-600">Volledige dakrenovatie • Belgische villa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Belgium Specialization */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Nederlandse Kwaliteit in <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">België</span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              TBGS combineert <strong>Nederlandse vakmanschap</strong> met <strong>lokale Belgische kennis</strong> in Retie en omgeving.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Waarom TBGS in België?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <i className="fas fa-flag text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Bi-nationale Expertise</h4>
                    <p className="text-slate-600">Ervaring met zowel Nederlandse als Belgische bouwvoorschriften en werkwijzen.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <i className="fas fa-certificate text-green-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Erkende Kwaliteit</h4>
                    <p className="text-slate-600">Alle certificeringen voor werken in België. Verzekerd voor beide landen.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                    <i className="fas fa-map-marker-alt text-yellow-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Lokale Kennis</h4>
                    <p className="text-slate-600">Bekend met Belgische gemeentelijke procedures en lokale leveranciers.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="België Nederlands grensgebied Retie"
                className="w-full h-80 object-cover rounded-3xl shadow-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-yellow-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-4">
                  <i className="fas fa-home text-2xl text-yellow-600"></i>
                </div>
                <CardTitle className="text-xl">Dakwerken Retie</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>✓ Belgische dakpannen expertise</li>
                  <li>✓ Nederlandse isolatiestandaarden</li>
                  <li>✓ Lokale leveranciers</li>
                  <li>✓ Garantie beide landen</li>
                </ul>
                <div className="mt-4 text-sm text-slate-500">
                  Ook: Dessel, Mol, grensgebied
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-yellow-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <i className="fas fa-tools text-2xl text-blue-600"></i>
                </div>
                <CardTitle className="text-xl">Renovaties België</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>✓ Belgische bouwstijl respect</li>
                  <li>✓ Gemeentelijke vergunningen</li>
                  <li>✓ Grensoverschrijdende service</li>
                  <li>✓ Nederlandse kwaliteit</li>
                </ul>
                <div className="mt-4 text-sm text-slate-500">
                  Kempen regio specialist
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section Retie */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-yellow-600 via-amber-600 to-orange-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Contact <span className="bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">Retie</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Project in <strong>Retie of omgeving</strong>? Nederlandse kwaliteit, Belgische service!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
              <CardHeader>
                <Phone className="w-12 h-12 mx-auto mb-4" />
                <CardTitle>Bel Direct</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+31402026744" className="text-2xl font-bold text-yellow-100 hover:text-white transition-colors">
                  040 202 6744
                </a>
                <p className="text-sm opacity-80 mt-2">Ook België bereikbaar</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
              <CardHeader>
                <Mail className="w-12 h-12 mx-auto mb-4" />
                <CardTitle>Email Ons</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:retie@tbgs.nl" className="text-xl font-bold text-yellow-100 hover:text-white transition-colors">
                  retie@tbgs.nl
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
              <CardHeader>
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <CardTitle>Servicegebied</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold">Retie, Dessel, Mol</p>
                <p className="text-sm opacity-80">Kempen regio</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/offerte" className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-yellow-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center">
              <Phone className="w-6 h-6 mr-3" />
              Gratis Offerte Retie
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}