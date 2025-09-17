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
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-900 mb-6 sm:mb-8 leading-tight">
              Van <span className="text-tbgs-navy">Grootvader</span> tot <span className="text-tbgs-navy">Kleinzoon</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 font-light leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto">
              <strong>Vakmanschap in de genen</strong> - sinds 1943 geven wij onze expertise door van generatie op generatie.
            </p>
            
            <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-tbgs-navy mb-1 sm:mb-2">1943</div>
                <div className="text-sm sm:text-base text-slate-600">Opgericht</div>
              </div>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-tbgs-navy mb-1 sm:mb-2">4</div>
                <div className="text-sm sm:text-base text-slate-600">Generaties</div>
              </div>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-tbgs-navy mb-1 sm:mb-2">80+</div>
                <div className="text-sm sm:text-base text-slate-600">Jaar Ervaring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
              Ons <span className="text-tbgs-navy">Verhaal</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Vier generaties later hebben wij duizenden kostbare herstelprojecten uitgevoerd die eigenlijk voorkomen hadden kunnen worden. <strong>Preventie is onze kracht.</strong>
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-tbgs-red rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">1943 - 1974: De Basis</h3>
                      <p className="text-sm sm:text-base text-slate-600">De eerste generatie legde de fundamenten. Traditioneel vakmanschap en kwaliteit als uitgangspunt in platte en hellende daken.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-tbgs-blue rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">1974 - 1998: Uitbreiding</h3>
                      <p className="text-sm sm:text-base text-slate-600">Uitbreiding naar schoorsteenservice en gespecialiseerde technieken. Groei door kwaliteit en betrouwbaarheid.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">1998 - 2012: Preventie</h3>
                      <p className="text-sm sm:text-base text-slate-600">Introductie van preventief onderhoud. "Voorkomen is beter dan genezen" werd ons kernprincipe.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-tbgs-green rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">2012 - Heden: Totaalspecialist</h3>
                      <p className="text-sm sm:text-base text-slate-600">Transformatie tot complete bouwspecialist met vier gespecialiseerde teams onder één dak.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mt-8 lg:mt-0">
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl sm:rounded-3xl p-4 sm:p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                    alt="TBGS vakmanschap door 4 generaties"
                    className="w-full rounded-xl sm:rounded-2xl shadow-xl"
                  />
                  <div className="mt-4 sm:mt-6 text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-1 sm:mb-2">80 Jaar Vakmanschap</div>
                    <p className="text-sm sm:text-base text-slate-600">4 generaties expertise - vakmanschap in de genen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose TBGS */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold lg:font-black text-slate-900 mb-4 sm:mb-6 lg:mb-8 leading-tight">
              Waarom <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">TBGS?</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light">
              80 jaar ervaring, 4 specialistische teams, en duizenden tevreden klanten spreken boekdelen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {/* Preventie Focus */}
            <div className="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-transparent hover:border-tbgs-navy/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-tbgs-navy to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Preventie Eerst</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Met 80 jaar ervaring weten wij exact waar problemen ontstaan. <strong>Preventie bespaart u tijd, geld en zorgen.</strong>
              </p>
            </div>

            {/* 4 Generaties */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-transparent hover:border-green-500/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">4 Generaties</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong>80 jaar familiebedrijf</strong> - vakmanschap zit in onze genen en wordt continu doorontwikkeld.
              </p>
            </div>

            {/* Complete Ontzorging */}
            <div className="group bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-transparent hover:border-orange-500/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Complete Ontzorging</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong>Vier specialisten onder één dak</strong> - van dak tot fundering, alles vanuit één betrouwbaar aanspreekpunt.
              </p>
            </div>

            {/* Nederland & België */}
            <div className="group bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-transparent hover:border-purple-500/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">NL & BE Werkgebied</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong>Noord-Brabant en Belgisch Limburg</strong> - lokale expertise met persoonlijke service in uw eigen regio.
              </p>
            </div>

            {/* 24/7 Service */}
            <div className="group bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-transparent hover:border-red-500/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">24/7 Bereikbaar</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong>Noodsituaties kennen geen kantooruren</strong> - wij zijn altijd bereikbaar voor urgente reparaties.
              </p>
            </div>

            {/* Garantie */}
            <div className="group bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-transparent hover:border-teal-500/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">100% Garantie</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong>Volledige garantie op alle werkzaamheden</strong> - omdat kwaliteit en betrouwbaarheid onze standaard zijn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-tbgs-navy via-blue-900 to-slate-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10 sm:opacity-20">
          <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-20 h-20 sm:w-40 sm:h-40 border border-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-16 h-16 sm:w-32 sm:h-32 border border-white rounded-lg rotate-45 animate-pulse delay-300"></div>
          <div className="absolute top-1/2 right-1/3 w-12 h-12 sm:w-24 sm:h-24 border border-white rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
              <span>Klaar voor uw Project?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold lg:font-black mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Vakmanschap</span>
              <br />
              <span className="text-white">aan uw dienst</span>
            </h2>

            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 font-light leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
              <strong className="text-white">Vier generaties vakmanschap</strong> die uw huis beschermen. 
              Preventief werken, zodat u geen dure verrassingen krijgt.
            </p>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-yellow-400 mb-1 sm:mb-2">24u</div>
                <div className="text-xs sm:text-sm lg:text-base text-blue-100">Inspectie Gepland</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-green-400 mb-1 sm:mb-2">100%</div>
                <div className="text-xs sm:text-sm lg:text-base text-blue-100">Garantie</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-400 mb-1 sm:mb-2">4.9★</div>
                <div className="text-xs sm:text-sm lg:text-base text-blue-100">Klantbeoordeling</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button 
                onClick={onOpenContactModal}
                className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg lg:text-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 transform hover:-translate-y-1 hover:scale-105 inline-flex items-center w-full sm:w-auto"
              >
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:animate-bounce" />
                <span className="text-sm sm:text-base lg:text-xl">Gratis inspectie aanvragen</span>
              </button>
              <a 
                href="https://wa.me/31614595142" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-green-500 text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg lg:text-xl hover:bg-green-400 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-1 hover:scale-105 inline-flex items-center w-full sm:w-auto"
              >
                <i className="fab fa-whatsapp text-xl sm:text-2xl mr-2 sm:mr-3 group-hover:animate-bounce"></i>
                <span className="text-sm sm:text-base lg:text-xl">Direct WhatsApp</span>
              </a>
            </div>

            <p className="text-blue-200 mt-6 sm:mt-8 text-sm sm:text-base lg:text-lg">
              <strong>Nederland & België</strong> • <strong>24/7 Bereikbaar</strong> • <strong>80+ Jaar Ervaring</strong>
            </p>
          </div>
        </div>
      </section>


    </div>
  );
}
