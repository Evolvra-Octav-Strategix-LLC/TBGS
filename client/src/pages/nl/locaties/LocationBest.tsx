import SEOHead from "@/lib/seo";
import { Link } from "wouter";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Star, Phone, Mail, MapPin, Clock, Shield, Award, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LocationBestProps {
  onOpenContactModal: () => void;
}

export default function LocationBest({ onOpenContactModal }: LocationBestProps) {
  return (
    <>
      <SEOHead 
        title="TBGS Best - Dakdekker & Bouwspecialist Best | Dakwerken Best"
        description="🏆 TBGS Best ✓ Lokale dakdekker & bouwspecialist ✓ Dakwerken, schoorsteenwerken, onderhoud Best ✓ Familiedorp specialist ✓ Gratis offerte ✓ Erkend & verzekerd"
        url="https://tbgs.nl/best"
        keywords="dakdekker Best, dakwerken Best, bouwbedrijf Best, schoorsteenwerk Best, onderhoud Best, familie woningen Best"
      />
      <LocalSEOSchema businessData={{
        name: "TBGS Best - Totaal Bouw Groep Specialisten",
        address: {
          addressLocality: "Best",
          addressRegion: "Noord-Brabant", 
          postalCode: "5684",
          addressCountry: "NL"
        },
        telephone: "+31 40 202 6744",
        email: "best@tbgs.nl",
        website: "https://tbgs-bv.nl/best",
        geo: { latitude: 51.5065, longitude: 5.3892 },
        areaServed: ["Best", "Noord-Brabant"],
        rating: { ratingValue: 4.9, reviewCount: 23 }
      }} />

      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700 mb-6">
              <MapPin className="w-4 h-4 text-tbgs-navy" />
              <span>Actief in Best</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-8">
              <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">TBGS</span>
              <br />
              <span className="text-4xl lg:text-6xl">Best</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light max-w-4xl mx-auto">
              Uw lokale <strong>dakdekker en bouwspecialist</strong> in Best. Gespecialiseerd in <strong>gezinswoningen</strong> en <strong>familiepanden</strong> met persoonlijke service.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Onze diensten in Best</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 hover:border-tbgs-navy hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <i className="fas fa-home text-xl text-tbgs-red"></i>
                    </div>
                    <CardTitle className="text-lg">Dakwerken Best</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>✓ Gezinswoning dakonderhoud</li>
                      <li>✓ Dakisolatie verbetering</li>
                      <li>✓ Dakgoten service</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-tbgs-navy hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <i className="fas fa-wrench text-xl text-tbgs-green"></i>
                    </div>
                    <CardTitle className="text-lg">Onderhoud Best</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>✓ Familiehuis onderhoud</li>
                      <li>✓ Preventieve service</li>
                      <li>✓ Kleine reparaties</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Star className="w-8 h-8 text-yellow-400 fill-current" />
                  <div>
                    <div className="text-2xl font-bold text-slate-900">4.9★</div>
                    <div className="text-slate-600">23 reviews Best</div>
                  </div>
                </div>
                <p className="text-slate-600">"Uitstekende service in Best. Persoonlijke aanpak en vakmanschap."</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/offerte" className="bg-tbgs-navy text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-3" />
                  Gratis Offerte Best
                </Link>
                <a href="tel:+31402026744" className="bg-white text-tbgs-navy border-2 border-tbgs-navy px-8 py-4 rounded-2xl font-bold text-lg hover:bg-tbgs-navy hover:text-white transition-all duration-300 inline-flex items-center justify-center">
                  040 202 6744
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-tbgs-navy via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Contact Best</h2>
          <p className="text-xl opacity-90 mb-12">Project in Best? Wij staan voor u klaar!</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
              <CardHeader>
                <Phone className="w-12 h-12 mx-auto mb-4" />
                <CardTitle>Telefoon</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+31402026744" className="text-2xl font-bold text-yellow-300 hover:text-white transition-colors">040 202 6744</a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
              <CardHeader>
                <Mail className="w-12 h-12 mx-auto mb-4" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:best@tbgs.nl" className="text-xl font-bold text-yellow-300 hover:text-white transition-colors">best@tbgs.nl</a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
              <CardHeader>
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <CardTitle>Locatie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold">Best, Noord-Brabant</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}