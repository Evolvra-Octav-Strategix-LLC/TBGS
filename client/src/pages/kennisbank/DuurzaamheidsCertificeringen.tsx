import SEOHead from "@/lib/seo";
import { Leaf, Calculator } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function DuurzaamheidsCertificeringen() {
  return (
    <>
      <SEOHead 
        title="Duurzaamheidscertificeringen Bouw 2025 | BREEAM, LEED, WELL | TBGS Specialist"
        description="Professionele begeleiding bij BREEAM, LEED, WELL certificering. TBGS expertise in duurzame bouwcertificaten voor hogere vastgoedwaarde en lagere exploitatiekosten."
        keywords="BREEAM certificering, LEED certificaat, WELL building standard, duurzame bouw certificaten, GPR gebouw, TBGS duurzaamheid"
        url="/kennisbank/duurzaamheidscertificeringen"
        image="/images/sustainability-certifications-banner.jpg"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-emerald-100/30"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-green-100 text-green-700 px-6 py-3 rounded-full font-medium mb-8">
                <Leaf className="w-5 h-5 mr-3" />
                Duurzame Bouwcertificering
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
                Duurzaamheids <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Certificeringen</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed mb-12 font-light">
                TBGS begeleidt <strong>BREEAM, LEED en WELL certificeringsprocessen</strong> voor hogere vastgoedwaarde en aantoonbaar lagere exploitatiekosten.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">25%</div>
                  <div className="text-sm text-slate-600">Hogere vastgoedwaarde</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-teal-600 mb-2">40%</div>
                  <div className="text-sm text-slate-600">Lagere energiekosten</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
                  <div className="text-sm text-slate-600">Gecertificeerde projecten</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-24 bg-gradient-to-br from-green-600 via-emerald-700 to-teal-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Certificering <span className="text-green-300">Begeleiding</span> op Maat
              </h2>
              <p className="text-xl text-green-100 leading-relaxed mb-12">
                TBGS heeft 50+ succesvolle certificeringsprocessen begeleid. 
                Verhoog uw vastgoedwaarde en realiseer meetbare duurzaamheidsdoelstellingen.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="https://wa.me/31614595142?text=Hallo%20Team%20TBGS%2C%20ik%20ben%20ge%C3%AFnteresseerd%20in%20duurzaamheidscertificering%20begeleiding"
                  className="bg-green-400 hover:bg-green-300 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center"
                >
                  <WhatsAppIcon className="mr-3" color="green" />
                  Certificering Specialist
                </a>
                <button className="bg-transparent border-2 border-green-300 hover:bg-green-300 hover:text-slate-900 text-green-300 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <Calculator className="w-5 h-5 mr-3" />
                  Gratis Haalbaarheidscheck
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}