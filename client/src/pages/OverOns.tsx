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
      
      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-tbgs-navy">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 border-2 border-white rounded-lg rotate-45"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/3 w-20 h-20 border-2 border-white rounded-lg rotate-12"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white pt-32 pb-20">
          <div className="max-w-6xl mx-auto">
            {/* Animated Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium mb-8 animate-pulse">
              <Users className="w-4 h-4" />
              <span>4 Generaties Vakmanschap</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight">
              Van <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Overgrootvader</span>
              <br />
              tot <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Kleinzoon</span>
            </h1>
            
            <p className="text-2xl lg:text-3xl text-blue-100 font-light leading-relaxed mb-12 max-w-4xl mx-auto">
              Het begon in <strong className="text-white">1943</strong> toen de eerste generatie van TBGS hun eerste dakpan legde. Het vakmanschap werd doorgegeven van generatie op generatie.
            </p>
            
            {/* Interactive Stats */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl font-black text-yellow-400 mb-4 group-hover:scale-110 transition-transform">80+</div>
                <div className="text-blue-100 font-semibold">Jaar Ervaring</div>
              </div>
              <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl font-black text-blue-400 mb-4 group-hover:scale-110 transition-transform">4</div>
                <div className="text-blue-100 font-semibold">Generaties</div>
              </div>
              <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl font-black text-green-400 mb-4 group-hover:scale-110 transition-transform">8800+</div>
                <div className="text-blue-100 font-semibold">Voltooide Klussen</div>
              </div>
              <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl font-black text-orange-400 mb-4 group-hover:scale-110 transition-transform">4.9</div>
                <div className="text-blue-100 font-semibold">Google Rating</div>
              </div>
            </div>

            <button 
              onClick={onOpenContactModal}
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-12 py-6 rounded-2xl font-bold text-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 transform hover:-translate-y-1 hover:scale-105 inline-flex items-center"
            >
              <Heart className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              Ontdek Ons Verhaal
            </button>
          </div>
        </div>
      </section>

      {/* Story Timeline Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 leading-tight">
              Ons <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">Verhaal</span>
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto font-light">
              Vier generaties later hebben wij duizenden kostbare herstelprojecten uitgevoerd die eigenlijk voorkomen hadden kunnen worden. <strong className="text-tbgs-navy">Preventie is onze kracht.</strong>
            </p>
          </div>

          {/* Interactive Timeline */}
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-12">
              {/* 1943-1970 */}
              <div className="group relative">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className="lg:w-1/2">
                    <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-tbgs-red/20 group-hover:border-tbgs-red/50 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-tbgs-red to-red-600 rounded-2xl flex items-center justify-center mr-6">
                          <Building2 className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-black text-tbgs-red">1943 - 1970</h3>
                          <p className="text-slate-600 font-semibold">De Fundamenten</p>
                        </div>
                      </div>
                      <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        Het begon met <strong>overgrootvader</strong> die zijn eerste dakpan legde in oorlogstijd. Traditioneel vakmanschap met de handen, waarbij kwaliteit en durabiliteit voorop stonden.
                      </p>
                      <div className="flex items-center text-tbgs-red font-semibold">
                        <Star className="w-4 h-4 mr-2" />
                        Traditioneel Dakwerk & Reparaties
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                        alt="Traditioneel dakwerk TBGS 1943-1970"
                        className="rounded-3xl shadow-2xl w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute -bottom-6 -right-6 bg-tbgs-red text-white p-4 rounded-2xl shadow-xl">
                        <div className="text-2xl font-bold">Gen 1</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 1970-1995 */}
              <div className="group relative">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                  <div className="lg:w-1/2">
                    <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-tbgs-blue/20 group-hover:border-tbgs-blue/50 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-tbgs-blue to-blue-600 rounded-2xl flex items-center justify-center mr-6">
                          <ShieldCheck className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-black text-tbgs-blue">1970 - 1995</h3>
                          <p className="text-slate-600 font-semibold">Uitbreiding & Groei</p>
                        </div>
                      </div>
                      <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        <strong>Vader</strong> nam de fakkel over en breidde uit naar schoorsteenservice. Innovatie en klantenservice werden de pijlers van onze groeiende reputatie.
                      </p>
                      <div className="flex items-center text-tbgs-blue font-semibold">
                        <Star className="w-4 h-4 mr-2" />
                        Schoorsteenservice & Specialisatie
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                        alt="TBGS schoorsteenservice uitbreiding 1970-1995"
                        className="rounded-3xl shadow-2xl w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute -bottom-6 -left-6 bg-tbgs-blue text-white p-4 rounded-2xl shadow-xl">
                        <div className="text-2xl font-bold">Gen 2</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 1995-2010 */}
              <div className="group relative">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className="lg:w-1/2">
                    <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-tbgs-green/20 group-hover:border-tbgs-green/50 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-tbgs-green to-green-600 rounded-2xl flex items-center justify-center mr-6">
                          <Clock className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-black text-tbgs-green">1995 - 2010</h3>
                          <p className="text-slate-600 font-semibold">Preventieve Revolutie</p>
                        </div>
                      </div>
                      <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        <strong>Zoon</strong> introduceerde preventief onderhoud. "Voorkomen is beter dan genezen" werd ons motto en de basis voor duizenden tevreden klanten.
                      </p>
                      <div className="flex items-center text-tbgs-green font-semibold">
                        <Star className="w-4 h-4 mr-2" />
                        Preventief Onderhoud & Innovatie
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                        alt="TBGS preventief onderhoud 1995-2010"
                        className="rounded-3xl shadow-2xl w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute -bottom-6 -right-6 bg-tbgs-green text-white p-4 rounded-2xl shadow-xl">
                        <div className="text-2xl font-bold">Gen 3</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2010-heden */}
              <div className="group relative">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                  <div className="lg:w-1/2">
                    <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-tbgs-orange/20 group-hover:border-tbgs-orange/50 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-tbgs-orange to-orange-600 rounded-2xl flex items-center justify-center mr-6">
                          <Award className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-black text-tbgs-orange">2010 - Heden</h3>
                          <p className="text-slate-600 font-semibold">Totale Specialisten</p>
                        </div>
                      </div>
                      <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        <strong>Kleinzoon</strong> transformeerde TBGS tot totale bouwspecialist. Vier teams, één missie: complete ontzorging met 80 jaar ervaring als fundament.
                      </p>
                      <div className="flex items-center text-tbgs-orange font-semibold">
                        <Star className="w-4 h-4 mr-2" />
                        Totale Bouwspecialist & Digitalisering
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                        alt="TBGS moderne bouwspecialist 2010-heden"
                        className="rounded-3xl shadow-2xl w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute -bottom-6 -left-6 bg-tbgs-orange text-white p-4 rounded-2xl shadow-xl">
                        <div className="text-2xl font-bold">Gen 4</div>
                      </div>
                    </div>
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
