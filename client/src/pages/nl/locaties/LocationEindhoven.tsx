import SEOHead from "@/lib/seo";
import { Link } from "wouter";
import GoogleBusinessIntegration from "@/components/GoogleBusinessIntegration";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Star, Phone, Mail, MapPin, Clock, Shield, Award, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LocationEindhovenProps {
  onOpenContactModal: () => void;
}

export default function LocationEindhoven({ onOpenContactModal }: LocationEindhovenProps) {
  return (
    <>
      <SEOHead 
        title="TBGS Eindhoven - Premium Dakwerken & Bouwspecialisten | Dakdekker Eindhoven"
        description="🏆 TBGS Eindhoven ✓ Lokale dakdekker & bouwspecialist ✓ Dakwerken, schoorsteenwerken, onderhoud Eindhoven ✓ 15+ jaar ervaring ✓ Gratis offerte ✓ Erkend & verzekerd"
        url="https://tbgs.nl/eindhoven"
        keywords="dakdekker Eindhoven, dakwerken Eindhoven, bouwbedrijf Eindhoven, schoorsteenwerk Eindhoven, onderhoud Eindhoven, dakgoten Eindhoven, dakisolatie Eindhoven"
      />
      <LocalSEOSchema businessData={{
        name: "TBGS Eindhoven - Totaal Bouw Groep Specialisten",
        address: {
          streetAddress: "Servicegebied Eindhoven",
          addressLocality: "Eindhoven",
          addressRegion: "Noord-Brabant", 
          postalCode: "5600",
          addressCountry: "NL"
        },
        telephone: "+31 40 202 6744",
        email: "eindhoven@tbgs.nl",
        website: "https://tbgs-bv.nl/eindhoven",
        geo: {
          latitude: 51.4416,
          longitude: 5.4697
        },
        areaServed: ["Eindhoven", "Noord-Brabant"],
        rating: {
          ratingValue: 4.9,
          reviewCount: 87
        },
        openingHours: [
          "Mo-Fr 07:30-17:30",
          "Sa 08:00-16:00"
        ]
      }} />

      {/* Hero Section - Eindhoven Specific */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              {/* Location Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700">
                <MapPin className="w-4 h-4 text-tbgs-navy" />
                <span>Actief in Eindhoven</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                  <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">TBGS</span>
                  <br />
                  <span className="text-4xl lg:text-6xl">Eindhoven</span>
                </h1>
                <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light">
                  Uw lokale <strong>dakdekker en bouwspecialist</strong> in Eindhoven. Gespecialiseerd in <strong>dakwerken</strong>, <strong>schoorsteenwerken</strong> en <strong>onderhoud</strong> met 15+ jaar ervaring in de regio.
                </p>
              </div>

              {/* Local Trust Indicators */}
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl px-6 py-4 flex items-center space-x-3">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <div>
                    <div className="font-bold text-slate-900">4.9★</div>
                    <div className="text-sm text-slate-600">87 reviews Eindhoven</div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl px-6 py-4 flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-green-500" />
                  <div>
                    <div className="font-bold text-slate-900">Erkend</div>
                    <div className="text-sm text-slate-600">Gemeente Eindhoven</div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl px-6 py-4 flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-blue-500" />
                  <div>
                    <div className="font-bold text-slate-900">24/7</div>
                    <div className="text-sm text-slate-600">Spoedservice</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/offerte" className="bg-tbgs-navy text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-3" />
                  Gratis Offerte Eindhoven
                </Link>
                <a href="tel:+31402026744" className="bg-white text-tbgs-navy border-2 border-tbgs-navy px-8 py-4 rounded-2xl font-bold text-lg hover:bg-tbgs-navy hover:text-white transition-all duration-300 inline-flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-3" />
                  040 202 6744
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="TBGS dakwerken Eindhoven - professionele dakdekker aan het werk"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tbgs-navy/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                    <h3 className="font-bold text-slate-900 mb-2">Recent Project Eindhoven</h3>
                    <p className="text-sm text-slate-600">Complete dakrenovatie Woensel-Noord • Dec 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Eindhoven */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Onze diensten in <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">Eindhoven</span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              Complete bouwoplossingen voor <strong>particulieren en bedrijven</strong> in Eindhoven en omgeving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Dakwerken Eindhoven */}
            <Card className="border-2 hover:border-tbgs-red hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-home text-2xl text-tbgs-red"></i>
                </div>
                <CardTitle className="text-xl">Dakwerken Eindhoven</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>✓ Dakvervanging & reparatie</li>
                  <li>✓ Dakisolatie verbetering</li>
                  <li>✓ Dakgoten & boeiboorden</li>
                  <li>✓ Zonnepanelen integratie</li>
                </ul>
                <div className="mt-4 text-sm text-slate-500">
                  Populair in: Woensel, Stratum, Gestel
                </div>
              </CardContent>
            </Card>

            {/* Schoorsteenwerken Eindhoven */}
            <Card className="border-2 hover:border-tbgs-blue hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-industry text-2xl text-tbgs-blue"></i>
                </div>
                <CardTitle className="text-xl">Schoorsteenwerk Eindhoven</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>✓ Jaarlijkse controle & reiniging</li>
                  <li>✓ Schoorsteenreparatie</li>
                  <li>✓ Rookgasafvoer installatie</li>
                  <li>✓ CV-ketel onderhoud</li>
                </ul>
                <div className="mt-4 text-sm text-slate-500">
                  Actief in: Centrum, Tongelre, Meerhoven
                </div>
              </CardContent>
            </Card>

            {/* Onderhoud Eindhoven */}
            <Card className="border-2 hover:border-tbgs-green hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-wrench text-2xl text-tbgs-green"></i>
                </div>
                <CardTitle className="text-xl">Onderhoud Eindhoven</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>✓ Gevelreiniging & herstel</li>
                  <li>✓ Schilderwerk binnen/buiten</li>
                  <li>✓ Preventief onderhoud</li>
                  <li>✓ Kleine reparaties</li>
                </ul>
                <div className="mt-4 text-sm text-slate-500">
                  Ook in: Blixembosch, Acht
                </div>
              </CardContent>
            </Card>

            {/* Bouwwerken Eindhoven */}
            <Card className="border-2 hover:border-tbgs-orange hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-hammer text-2xl text-tbgs-orange"></i>
                </div>
                <CardTitle className="text-xl">Bouwwerken Eindhoven</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>✓ Verbouwingen & uitbreiding</li>
                  <li>✓ Keuken & badkamer renovatie</li>
                  <li>✓ Aanbouwen</li>
                  <li>✓ Complete renovaties</li>
                </ul>
                <div className="mt-4 text-sm text-slate-500">
                  Ervaring: Strijp, Raamsdonksveer
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Projects Eindhoven */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Recente Projecten <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">Eindhoven</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ontdek onze laatste projecten in <strong>Eindhoven</strong> en omgeving
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250" 
                  alt="Dakisolatie project Woensel-Noord Eindhoven"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-tbgs-red text-white px-3 py-1 rounded-full text-sm font-bold">TDS</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Dakisolatie Woensel-Noord</h3>
                <p className="text-slate-600 mb-4">Complete dakisolatie verbetering van Rc 2.5 naar Rc 6.0 inclusief nieuwe dakbedekking.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Dec 2024</span>
                  <span className="text-tbgs-red font-semibold">€24.500</span>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250" 
                  alt="Gevelrenovatie Centrum Eindhoven"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-tbgs-orange text-white px-3 py-1 rounded-full text-sm font-bold">TBS</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Gevelrenovatie Centrum</h3>
                <p className="text-slate-600 mb-4">Volledige gevelrenovatie herenhuis inclusief nieuwe gevelbekleding en isolatie.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Nov 2024</span>
                  <span className="text-tbgs-orange font-semibold">€18.750</span>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250" 
                  alt="Schoorsteenreparatie Meerhoven Eindhoven"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-tbgs-blue text-white px-3 py-1 rounded-full text-sm font-bold">TSS</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Schoorsteenreparatie Meerhoven</h3>
                <p className="text-slate-600 mb-4">Reparatie en renovatie schoorsteen nieuwbouwwijk inclusief nieuwe voering.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Oct 2024</span>
                  <span className="text-tbgs-blue font-semibold">€5.200</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose TBGS Eindhoven */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Waarom TBGS in <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">Eindhoven?</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:border-tbgs-navy hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-tbgs-navy" />
                </div>
                <CardTitle>Lokale Kennis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">15+ jaar ervaring in Eindhoven. Wij kennen de lokale bouwvoorschriften en gemeentelijke procedures.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-tbgs-navy hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Snelle Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Korte reistijd betekent snellere service en lagere kosten. 24/7 spoedservice beschikbaar in Eindhoven.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-tbgs-navy hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle>Erkend Vakmanschap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Erkende specialisten met alle benodigde certificeringen. Lid van lokale vakorganisaties.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section Eindhoven */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-tbgs-navy via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Contact <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Eindhoven</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Heeft u een project in <strong>Eindhoven</strong>? Neem contact op voor een vrijblijvende offerte!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader className="text-center">
                <Phone className="w-12 h-12 mx-auto mb-4" />
                <CardTitle>Bel Direct</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <a href="tel:+31402026744" className="text-2xl font-bold text-yellow-300 hover:text-white transition-colors">
                  040 202 6744
                </a>
                <p className="text-sm opacity-80 mt-2">Ma-Vr 07:30-17:30</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader className="text-center">
                <Mail className="w-12 h-12 mx-auto mb-4" />
                <CardTitle>Email Ons</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <a href="mailto:eindhoven@tbgs.nl" className="text-xl font-bold text-yellow-300 hover:text-white transition-colors">
                  eindhoven@tbgs.nl
                </a>
                <p className="text-sm opacity-80 mt-2">Reactie binnen 4 uur</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white md:col-span-2 lg:col-span-1">
              <CardHeader className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <CardTitle>Servicegebied</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-bold">Heel Eindhoven</p>
                <p className="text-sm opacity-80 mt-2">Woensel • Stratum • Gestel<br />Tongelre • Meerhoven</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/offerte" className="bg-yellow-400 text-slate-900 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center">
              <Phone className="w-6 h-6 mr-3" />
              Gratis Offerte Eindhoven
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}