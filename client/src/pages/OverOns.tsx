import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import { ShieldCheck, Users, Clock, Award, Building2, Heart, Star, MapPin } from "lucide-react";
import SpecialistNavigationBar from "@/components/SpecialistNavigationBar";

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

      <SpecialistNavigationBar />
      
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
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">1943 - 1970: De Basis</h3>
                      <p className="text-sm sm:text-base text-slate-600">De eerste generatie legde de fundamenten. Traditioneel vakmanschap en kwaliteit als uitgangspunt.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-tbgs-blue rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">1970 - 1995: Uitbreiding</h3>
                      <p className="text-sm sm:text-base text-slate-600">Uitbreiding naar schoorsteenservice en gespecialiseerde technieken. Groei door kwaliteit en betrouwbaarheid.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-tbgs-green rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">1995 - 2020: Modernisering</h3>
                      <p className="text-sm sm:text-base text-slate-600">Integratie van moderne technieken met traditioneel vakmanschap. Focus op preventief onderhoud.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-tbgs-orange rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">2020 - Heden: Specialisatie</h3>
                      <p className="text-sm sm:text-base text-slate-600">Vier gespecialiseerde divisies onder één naam. Expertise op het hoogste niveau.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                  <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-tbgs-red mb-4 sm:mb-6" />
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Onze Visie</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    <strong>Voorkomen is beter dan genezen.</strong> Deze wijsheid heeft ons familiebedrijf door vier generaties gedragen. We geloven in transparantie, kwaliteit en eerlijkheid.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                  <Star className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500 mb-4 sm:mb-6" />
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Onze Missie</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Door <strong>preventief onderhoud</strong> en proactief handelen besparen we onze klanten duizenden euro's aan onnodige reparaties. Dat is onze belofte.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                  <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 mb-4 sm:mb-6" />
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Onze Regio</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Actief in <strong>Nederland</strong> en <strong>België</strong> met lokale expertise en kennis van regionale bouwvoorschriften en klimaatsomstandigheden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Specialists Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
              Onze <span className="text-tbgs-navy">Specialismen</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Vier gespecialiseerde divisies, elk met decennia ervaring in hun vakgebied. <strong>Samen vormen wij TBGS BV.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-tbgs-red rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">TDS</h3>
              <p className="text-sm text-slate-600 mb-3 sm:mb-4">Totaal Dak Specialist</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Specialisten in daklekkage, renovatie en preventief dakonderhoud.
              </p>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-tbgs-blue rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">TSS</h3>
              <p className="text-sm text-slate-600 mb-3 sm:mb-4">Totaal Schoorsteen Specialist</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Volledige schoorsteenservice van inspectie tot complete renovatie.
              </p>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-tbgs-green rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">TOS</h3>
              <p className="text-sm text-slate-600 mb-3 sm:mb-4">Totaal Onderhoud Specialist</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Preventief onderhoud dat duizenden euro's aan reparaties bespaart.
              </p>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-tbgs-orange rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">TBS</h3>
              <p className="text-sm text-slate-600 mb-3 sm:mb-4">Totaal Bouw Specialist</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Complete bouwprojecten van renovatie tot nieuwbouw.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Experience Section */}
      <section className="py-20 bg-gradient-to-br from-tbgs-navy to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-slate-900/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
              Waarom kiezen voor <span className="text-yellow-400">TBGS BV</span>?
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-12 leading-relaxed">
              <strong>80 jaar ervaring</strong> heeft ons geleerd dat preventie altijd beter is dan reparatie. Wij besparen u <strong>tijd, geld en stress</strong>.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-yellow-400 mb-1 sm:mb-2">80+</div>
                <div className="text-xs sm:text-sm lg:text-base text-blue-100">Jaar Ervaring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-green-400 mb-1 sm:mb-2">€15K+</div>
                <div className="text-xs sm:text-sm lg:text-base text-blue-100">Gem. Besparing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-orange-400 mb-1 sm:mb-2">24/7</div>
                <div className="text-xs sm:text-sm lg:text-base text-blue-100">Bereikbaar</div>
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