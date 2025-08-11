import SEOHead from "@/lib/seo";
import { Link } from "wouter";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import { Star, Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LocationLommelProps {
  onOpenContactModal: () => void;
}

export default function LocationLommel({ onOpenContactModal }: LocationLommelProps) {
  return (
    <>
      <SEOHead 
        title="TBGS Lommel - Dakdekker & Bouwspecialist Lommel België | Dakwerken Lommel"
        description="🏆 TBGS Lommel België ✓ Lokale dakdekker & bouwspecialist ✓ Dakwerken, schoorsteenwerken, onderhoud Lommel ✓ Nederlandse kwaliteit in België"
        url="https://tbgs.nl/lommel"
        keywords="dakdekker Lommel, dakwerken Lommel België, bouwbedrijf Lommel, schoorsteenwerk Lommel België, onderhoud Lommel"
      />
      <LocalSEOSchema businessData={{
        name: "TBGS Lommel België",
        address: { addressLocality: "Lommel", addressRegion: "Limburg", postalCode: "3920", addressCountry: "BE" },
        telephone: "+31 40 202 6744",
        email: "lommel@tbgs.nl",
        geo: { latitude: 51.2300, longitude: 5.3100 },
        areaServed: ["Lommel", "Limburg België"],
        rating: { ratingValue: 4.9, reviewCount: 21 }
      }} />

      <section className="py-32 bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700 mb-8">
            <MapPin className="w-4 h-4 text-yellow-600" />
            <span>Actief in Lommel, België</span>
          </div>
          
          <h1 className="text-6xl font-bold text-slate-900 mb-8">
            <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">TBGS</span> Lommel
          </h1>
          <p className="text-2xl text-slate-600 mb-12 max-w-3xl mx-auto">
            Nederlandse <strong>dakdekker en bouwspecialist</strong> in Lommel, België. Grensoverschrijdende kwaliteit en service.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <Card className="border-2 hover:border-yellow-600 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-home text-2xl text-yellow-600"></i>
                </div>
                <CardTitle>Dakwerken Lommel</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>✓ Belgische dakpannen expertise</li>
                  <li>✓ Nederlandse kwaliteitsstandaarden</li>
                  <li>✓ Lokale leveranciers</li>
                  <li>✓ Bi-nationale garantie</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-yellow-600 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-tools text-2xl text-blue-600"></i>
                </div>
                <CardTitle>Renovaties Lommel</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>✓ Belgische bouwstijl respect</li>
                  <li>✓ Gemeentelijke procedures</li>
                  <li>✓ Nederlandse werkwijze</li>
                  <li>✓ Grensregio specialist</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/80 rounded-2xl p-8 max-w-md mx-auto mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <span className="text-2xl font-bold">4.9★</span>
              <span className="text-slate-600">21 reviews Lommel</span>
            </div>
            <p className="text-slate-600">"Nederlandse kwaliteit, Belgische service in Lommel"</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/offerte" className="bg-yellow-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-700 transition-all duration-300 inline-flex items-center justify-center">
              <Phone className="w-5 h-5 mr-3" />
              Gratis Offerte Lommel
            </Link>
            <a href="tel:+31402026744" className="bg-white text-yellow-600 border-2 border-yellow-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center">
              040 202 6744
            </a>
          </div>
        </div>
      </section>
    </>
  );
}