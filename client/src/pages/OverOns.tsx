import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import { ShieldCheck, Users, Clock, Award, Building2, Heart, Star, MapPin } from "lucide-react";

interface OverOnsProps {
  onOpenContactModal: () => void;
}

export default function OverOns({ onOpenContactModal }: OverOnsProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Over TBGS BV - 80 Jaar Vakmanschap in Bouw & Renovatie | Nederland & België"
        description="Ontdek het verhaal van TBGS BV: 4 generaties vakmanschap sinds 1943. Specialist in dakwerk, schoorsteenservice, onderhoud en bouwprojecten in Nederland en België. Premium kwaliteit met preventieve aanpak."
        url="/over-ons"
        keywords="TBGS over ons, bouwbedrijf geschiedenis, 4 generaties vakmanschap, dakspecialist Nederland België, preventief onderhoud, familiebedrijf bouw, schoorsteenspecialist, onderhoudsspecialist"
      />
      
      {/* Clean Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium text-slate-600 mb-8">
              <Users className="w-4 h-4" />
              <span>4 Generaties Vakmanschap</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Van <span className="text-tbgs-navy">Grootvader</span> tot <span className="text-tbgs-navy">Kleinzoon</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-600 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
              <strong>Vakmanschap in de genen</strong> - sinds 1943 geven wij onze expertise door van generatie op generatie.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-tbgs-navy mb-2">1943</div>
                <div className="text-slate-600">Opgericht</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-tbgs-navy mb-2">4</div>
                <div className="text-slate-600">Generaties</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-tbgs-navy mb-2">80+</div>
                <div className="text-slate-600">Jaar Ervaring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Ons <span className="text-tbgs-navy">Verhaal</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Vier generaties later hebben wij duizenden kostbare herstelprojecten uitgevoerd die eigenlijk voorkomen hadden kunnen worden. <strong>Preventie is onze kracht.</strong>
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-tbgs-red rounded-xl flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">1943 - 1970: De Basis</h3>
                      <p className="text-slate-600">Grootvader legde de eerste dakpan. Traditioneel vakmanschap en kwaliteit als fundament.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-tbgs-blue rounded-xl flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">1970 - 1995: Uitbreiding</h3>
                      <p className="text-slate-600">Vader breidde uit naar schoorsteenservice en specialistische technieken.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-tbgs-green rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">1995 - 2010: Preventie</h3>
                      <p className="text-slate-600">Zoon introduceerde preventief onderhoud. "Voorkomen is beter dan genezen".</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-tbgs-orange rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">2010 - Heden: Totaalspecialist</h3>
                      <p className="text-slate-600">Kleinzoon transformeerde TBGS tot complete bouwspecialist met vier teams.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                    alt="TBGS vakmanschap door 4 generaties"
                    className="w-full rounded-2xl shadow-xl"
                  />
                  <div className="mt-6 text-center">
                    <div className="text-2xl font-bold text-slate-900 mb-2">80 Jaar Vakmanschap</div>
                    <p className="text-slate-600">Van grootvader tot kleinzoon - expertise in de genen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose TBGS */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 leading-tight">
              Waarom <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">TBGS?</span>
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto font-light">
              80 jaar ervaring, 4 specialistische teams, en duizenden tevreden klanten spreken boekdelen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Preventie Focus */}
            <div className="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 border-2 border-transparent hover:border-tbgs-navy/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-tbgs-navy to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Preventie Eerst</h3>
              <p className="text-slate-600 leading-relaxed">
                Met 80 jaar ervaring weten wij exact waar problemen ontstaan. <strong>Preventie bespaart u tijd, geld en zorgen.</strong>
              </p>
            </div>

            {/* 4 Generaties */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-transparent hover:border-green-500/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">4 Generaties</h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>Van overgrootvader tot kleinzoon</strong> - vakmanschap zit in onze genen en wordt continu doorontwikkeld.
              </p>
            </div>

            {/* Complete Ontzorging */}
            <div className="group bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border-2 border-transparent hover:border-orange-500/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Complete Ontzorging</h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>Vier specialisten onder één dak</strong> - van dak tot fundering, alles vanuit één betrouwbaar aanspreekpunt.
              </p>
            </div>

            {/* Nederland & België */}
            <div className="group bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 border-2 border-transparent hover:border-purple-500/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">NL & BE Werkgebied</h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>Noord-Brabant en Belgisch Limburg</strong> - lokale expertise met persoonlijke service in uw eigen regio.
              </p>
            </div>

            {/* 24/7 Service */}
            <div className="group bg-gradient-to-br from-red-50 to-rose-50 rounded-3xl p-8 border-2 border-transparent hover:border-red-500/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">24/7 Bereikbaar</h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>Noodsituaties kennen geen kantooruren</strong> - wij zijn altijd bereikbaar voor urgente reparaties.
              </p>
            </div>

            {/* Garantie */}
            <div className="group bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 border-2 border-transparent hover:border-teal-500/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">100% Garantie</h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>Volledige garantie op alle werkzaamheden</strong> - omdat kwaliteit en betrouwbaarheid onze standaard zijn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-tbgs-navy via-blue-900 to-slate-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 border border-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-white rounded-lg rotate-45 animate-pulse delay-300"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 border border-white rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium mb-8">
              <Heart className="w-4 h-4 text-red-400" />
              <span>Klaar voor uw Project?</span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">80 jaar ervaring</span>
              <br />
              <span className="text-white">aan uw dienst</span>
            </h2>

            <p className="text-2xl text-blue-100 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
              Van <strong className="text-white">overgrootvader tot kleinzoon</strong> - vier generaties vakmanschap die uw huis beschermen. 
              Preventief werken, zodat u geen dure verrassingen krijgt.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-black text-yellow-400 mb-2">24u</div>
                <div className="text-blue-100">Inspectie Gepland</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-green-400 mb-2">100%</div>
                <div className="text-blue-100">Garantie</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-blue-400 mb-2">4.9★</div>
                <div className="text-blue-100">Klantbeoordeling</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={onOpenContactModal}
                className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-10 py-6 rounded-2xl font-bold text-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 transform hover:-translate-y-1 hover:scale-105 inline-flex items-center"
              >
                <ShieldCheck className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                Gratis Inspectie Aanvragen
              </button>
              <a 
                href="https://wa.me/31614595142" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-green-500 text-white px-10 py-6 rounded-2xl font-bold text-xl hover:bg-green-400 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-1 hover:scale-105 inline-flex items-center"
              >
                <i className="fab fa-whatsapp text-2xl mr-3 group-hover:animate-bounce"></i>
                Direct WhatsApp
              </a>
            </div>

            <p className="text-blue-200 mt-8 text-lg">
              <strong>Nederland & België</strong> • <strong>24/7 Bereikbaar</strong> • <strong>80+ Jaar Ervaring</strong>
            </p>
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="#home"
          className="group bg-gradient-to-r from-tbgs-navy to-blue-600 text-white p-4 rounded-full shadow-2xl hover:shadow-tbgs-navy/25 transition-all duration-300 hover:-translate-y-1 hover:scale-110 inline-flex items-center"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <i className="fas fa-arrow-up text-xl group-hover:animate-bounce"></i>
        </a>
      </div>
    </div>
  );
}
