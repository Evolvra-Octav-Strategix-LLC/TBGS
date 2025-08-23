import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ArrowRight, CheckCircle, Star } from "lucide-react";
import { Link } from "wouter";
import tdsLogo from "@assets/TDS 545x642 (1)_1755096847747.png";
import tssLogo from "@assets/TSS 545x642 (1)_1755096878001.png";
import tosLogo from "@assets/TOS 545x642 (1)_1755096847747.png";
import tbsLogo from "@assets/TBS 545x642 (1)_1755096847747.png";

interface LimburgRegioHubProps {
  onOpenContactModal: () => void;
}

export default function LimburgRegioHub({ onOpenContactModal }: LimburgRegioHubProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead 
        title="TBGS Limburg – Dak, Schoorsteen, Onderhoud & Bouw Specialist België"
        description="✓ TBGS Limburg België ✓ Dakdekker, Schoorsteenveger, Onderhoudsbedrijf & Aannemer ✓ Lommel, Hamont-Achel, Pelt ✓ 15+ jaar ervaring ✓ Gratis offerte"
        url="https://tbgs.nl/be/limburg"
        keywords="TBGS Limburg, dakdekker Limburg België, schoorsteenveger Limburg, aannemer Limburg, onderhoudsbedrijf Limburg België"
      />
      <LocalSEOSchema businessData={{
        name: "TBGS BV - Limburg Regio",
        address: {
          addressRegion: "Limburg", 
          addressCountry: "BE"
        },
        telephone: "+32 11 34 24 50",
        email: "info@tbgs.nl",
        website: "https://tbgs.nl/be/limburg",
        geo: {
          latitude: 51.2000,
          longitude: 5.4000
        },
        areaServed: ["Limburg", "België", "Belgisch Limburg", "Lommel", "Hamont-Achel", "Pelt", "Retie"],
        rating: {
          ratingValue: 4.8,
          reviewCount: 89
        },
        openingHours: [
          "Mo-Fr 08:00-17:00",
          "Sa 09:00-16:00"
        ]
      }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Limburg, België
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              TBGS Limburg – Uw Bouwpartner in België
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Totaal Bouw & Gespecialiseerde Services actief in heel Limburg, België. Van Lommel tot Hamont-Achel, 
              van Pelt tot Retie - lokale vakmannen voor al uw bouwbehoeften.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={onOpenContactModal}
                size="lg"
                className="bg-tbgs-navy hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Gratis offerte België
              </Button>
              <a 
                href="tel:+3211342450"
                className="inline-flex items-center px-8 py-3 border-2 border-tbgs-navy text-tbgs-navy rounded-lg font-semibold hover:bg-tbgs-navy hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                +32 11 34 24 50
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Matrix */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vier Specialisten in Heel Limburg
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete bouwdienstverlening voor particulieren en bedrijven in Belgisch Limburg
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* TDS - Dak Specialist */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center group-hover:bg-red-100 transition-colors">
                    <img src={tdsLogo} alt="TDS Logo" className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-tbgs-red">Totaal Dak Specialist</CardTitle>
                    <p className="text-gray-600">Dakdekker Limburg België</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professionele dakwerkzaamheden in heel Limburg. EPDM, bitumen, dakpannen, 
                  isolatie en reparaties door ervaren dakdekkers.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <ArrowRight className="w-4 h-4 mr-2 text-tbgs-red" />
                    <Link href="/be/totaal-dak-specialist/lommel" className="hover:text-tbgs-red">Dakdekker Lommel</Link>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <ArrowRight className="w-4 h-4 mr-2 text-tbgs-red" />
                    <Link href="/be/totaal-dak-specialist/hamont-achel" className="hover:text-tbgs-red">Dakdekker Hamont-Achel</Link>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <ArrowRight className="w-4 h-4 mr-2 text-tbgs-red" />
                    <Link href="/be/totaal-dak-specialist/pelt" className="hover:text-tbgs-red">Dakdekker Pelt</Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* TSS - Schoorsteen Specialist */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <img src={tssLogo} alt="TSS Logo" className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-tbgs-blue">Totaal Schoorsteen Specialist</CardTitle>
                    <p className="text-gray-600">Schoorsteenveger Limburg België</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Gecertificeerde schoorsteenservice in Limburg. Reiniging, inspectie, 
                  renovatie en ketelkoppeling door erkende specialisten.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <ArrowRight className="w-4 h-4 mr-2 text-tbgs-blue" />
                    <Link href="/be/totaal-schoorsteen-specialist/lommel" className="hover:text-tbgs-blue">Schoorsteenveger Lommel</Link>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <ArrowRight className="w-4 h-4 mr-2 text-tbgs-blue" />
                    <Link href="/be/totaal-schoorsteen-specialist/hamont-achel" className="hover:text-tbgs-blue">Schoorsteenveger Hamont-Achel</Link>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <ArrowRight className="w-4 h-4 mr-2 text-tbgs-blue" />
                    <Link href="/be/totaal-schoorsteen-specialist/pelt" className="hover:text-tbgs-blue">Schoorsteenveger Pelt</Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* TOS - Onderhoud Specialist */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center group-hover:bg-green-100 transition-colors">
                    <img src={tosLogo} alt="TOS Logo" className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-tbgs-green">Totaal Onderhoud Specialist</CardTitle>
                    <p className="text-gray-600">Onderhoudsbedrijf Limburg België</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Preventief en curatief onderhoud in Limburg. Van kleine reparaties 
                  tot complete onderhoudscontracten voor woningen en bedrijven.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <ArrowRight className="w-4 h-4 mr-2 text-tbgs-green" />
                    <Link href="/be/totaal-onderhoud-specialist/lommel" className="hover:text-tbgs-green">Onderhoudsbedrijf Lommel</Link>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <ArrowRight className="w-4 h-4 mr-2 text-tbgs-green" />
                    <Link href="/be/totaal-onderhoud-specialist/hamont-achel" className="hover:text-tbgs-green">Onderhoudsbedrijf Hamont-Achel</Link>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <ArrowRight className="w-4 h-4 mr-2 text-tbgs-green" />
                    <Link href="/be/totaal-onderhoud-specialist/pelt" className="hover:text-tbgs-green">Onderhoudsbedrijf Pelt</Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* TBS - Bouw Specialist */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-orange-50 rounded-lg flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                    <img src={tbsLogo} alt="TBS Logo" className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-tbgs-orange">Totaal Bouw Specialist</CardTitle>
                    <p className="text-gray-600">Aannemer Limburg België</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Algemene bouwwerken en renovaties in Limburg. Van badkamers tot 
                  complete woningrenovaties door ervaren aannemers.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <ArrowRight className="w-4 h-4 mr-2 text-tbgs-orange" />
                    <Link href="/be/totaal-bouw-specialist/lommel" className="hover:text-tbgs-orange">Aannemer Lommel</Link>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <ArrowRight className="w-4 h-4 mr-2 text-tbgs-orange" />
                    <Link href="/be/totaal-bouw-specialist/hamont-achel" className="hover:text-tbgs-orange">Aannemer Hamont-Achel</Link>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <ArrowRight className="w-4 h-4 mr-2 text-tbgs-orange" />
                    <Link href="/be/totaal-bouw-specialist/pelt" className="hover:text-tbgs-orange">Aannemer Pelt</Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Onze Locaties in Limburg
            </h2>
            <p className="text-lg text-gray-600">
              Lokale teams actief in alle belangrijke gemeenten van Belgisch Limburg
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-tbgs-blue" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Lommel</h3>
                <p className="text-sm text-gray-600 mb-3">Hoofdlocatie Limburg</p>
                <Link href="/be/locaties/lommel">
                  <Button variant="outline" size="sm" className="w-full">
                    Meer Info
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-tbgs-blue" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Hamont-Achel</h3>
                <p className="text-sm text-gray-600 mb-3">Grensgebied dienstverlening</p>
                <Link href="/be/locaties/hamont-achel">
                  <Button variant="outline" size="sm" className="w-full">
                    Meer Info
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-tbgs-blue" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Pelt</h3>
                <p className="text-sm text-gray-600 mb-3">Noordoost Limburg</p>
                <Link href="/be/locaties/pelt">
                  <Button variant="outline" size="sm" className="w-full">
                    Meer Info
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-tbgs-blue" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Retie</h3>
                <p className="text-sm text-gray-600 mb-3">Kempen regio</p>
                <Link href="/be/locaties/retie">
                  <Button variant="outline" size="sm" className="w-full">
                    Meer Info
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Contact TBGS Limburg
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Voor al uw bouwvragen in Belgisch Limburg. Lokale vakmannen met jarenlange ervaring 
              staan voor u klaar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                onClick={onOpenContactModal}
                size="lg"
                className="bg-tbgs-navy hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Gratis Adviesgesprek
              </Button>
              <a 
                href="tel:+3211342450"
                className="inline-flex items-center px-8 py-3 border-2 border-tbgs-navy text-tbgs-navy rounded-lg font-semibold hover:bg-tbgs-navy hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                +32 11 34 24 50
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-tbgs-blue" />
                </div>
                <p className="font-semibold text-gray-900">Direct Bereikbaar</p>
                <p className="text-gray-600 text-sm">Ma-Vr: 08:00-17:00</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-tbgs-blue" />
                </div>
                <p className="font-semibold text-gray-900">Heel Limburg</p>
                <p className="text-gray-600 text-sm">Lokale service</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-tbgs-blue" />
                </div>
                <p className="font-semibold text-gray-900">Uitgebreide Garantie</p>
                <p className="text-gray-600 text-sm">Op alle werkzaamheden</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}