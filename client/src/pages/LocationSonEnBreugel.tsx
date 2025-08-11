import SEOHead from "@/lib/seo";
import { Link } from "wouter";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Star, Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LocationSonEnBreugelProps {
  onOpenContactModal: () => void;
}

export default function LocationSonEnBreugel({ onOpenContactModal }: LocationSonEnBreugelProps) {
  return (
    <>
      <SEOHead 
        title="TBGS Son en Breugel - Dakdekker & Bouwspecialist | Dakwerken Son en Breugel"
        description="🏆 TBGS Son en Breugel ✓ Lokale dakdekker & bouwspecialist ✓ Dakwerken, schoorsteenwerken, onderhoud Son en Breugel ✓ Gratis offerte"
        url="https://tbgs.nl/son-en-breugel"
        keywords="dakdekker Son en Breugel, dakwerken Son en Breugel, bouwbedrijf Son en Breugel, onderhoud Son en Breugel"
      />
      <LocalSEOSchema businessData={{
        name: "TBGS Son en Breugel",
        address: { addressLocality: "Son en Breugel", addressRegion: "Noord-Brabant", postalCode: "5690", addressCountry: "NL" },
        telephone: "+31 40 202 6744",
        email: "son@tbgs.nl",
        geo: { latitude: 51.5167, longitude: 5.4833 },
        areaServed: ["Son en Breugel"],
        rating: { ratingValue: 4.8, reviewCount: 18 }
      }} />

      <section className="py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-slate-900 mb-8">
            <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">TBGS</span> Son en Breugel
          </h1>
          <p className="text-2xl text-slate-600 mb-12 max-w-3xl mx-auto">
            Uw lokale <strong>dakdekker en bouwspecialist</strong> in Son en Breugel met persoonlijke service.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 hover:border-tbgs-navy hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-home text-2xl text-tbgs-red"></i>
                </div>
                <CardTitle>Dakwerken Son en Breugel</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>✓ Dakreparatie & onderhoud</li>
                  <li>✓ Dakisolatie verbetering</li>
                  <li>✓ Dakgoten service</li>
                  <li>✓ Lokale garantie</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-tbgs-green hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-wrench text-2xl text-tbgs-green"></i>
                </div>
                <CardTitle>Onderhoud Son en Breugel</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>✓ Preventief onderhoud</li>
                  <li>✓ Gevelreiniging</li>
                  <li>✓ Kleine reparaties</li>
                  <li>✓ Snelle service</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 space-y-8">
            <div className="bg-white/80 rounded-2xl p-8 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                <span className="text-2xl font-bold">4.8★</span>
                <span className="text-slate-600">18 reviews</span>
              </div>
              <p className="text-slate-600">"Betrouwbare service in Son en Breugel"</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/offerte" className="bg-tbgs-navy text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all duration-300 inline-flex items-center justify-center">
                <Phone className="w-5 h-5 mr-3" />
                Gratis Offerte
              </Link>
              <a href="tel:+31402026744" className="bg-white text-tbgs-navy border-2 border-tbgs-navy px-8 py-4 rounded-2xl font-bold text-lg hover:bg-tbgs-navy hover:text-white transition-all duration-300 inline-flex items-center justify-center">
                040 202 6744
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}