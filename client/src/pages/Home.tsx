import SEOHead from "@/lib/seo";
import { Link } from "wouter";

interface HomeProps {
  onOpenContactModal: () => void;
}

export default function Home({ onOpenContactModal }: HomeProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEOHead 
        title="TBGS BV - Premium Bouwspecialisten | Dakwerken, Schoorsteenwerken & Onderhoud Nederland & België"
        description="✓ Totaal Bouw Groep Specialisten ✓ Gecertificeerde vakmannen ✓ 15+ jaar ervaring ✓ Dakwerken, schoorsteenwerken, onderhoud & renovatie ✓ Nederland & België ✓ Gratis offerte"
        url="https://tbgs.nl"
        keywords="dakwerken, schoorsteenwerken, onderhoud, bouw, renovatie, Eindhoven, België, Limburg, dakisolatie, dakgoten, gevelbekleding, TBGS"
      />
      {/* Hero Section - Modern & Engaging */}
      <section id="home" className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Beschikbaar voor nieuwe projecten</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                  Samen duurzaam & 
                  <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent"> innovatief</span>
                  <br />
                  <span className="text-4xl lg:text-6xl">(ver)bouwen</span>
                </h1>
                <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light">
                  Premium bouwspecialisten voor <strong>dakwerken</strong>, <strong>schoorsteenwerken</strong> en <strong>onderhoud</strong> in Nederland en België. Gecertificeerd vakmanschap met 15+ jaar ervaring.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onOpenContactModal}
                  className="group bg-tbgs-navy text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <i className="fas fa-calculator mr-3 transition-transform group-hover:scale-110"></i>
                  Gratis Offerte in 24u
                </button>
                <button 
                  onClick={() => scrollToSection('projecten')}
                  className="group border-2 border-slate-300 text-slate-700 px-10 py-5 rounded-2xl font-semibold text-lg hover:border-tbgs-navy hover:text-tbgs-navy transition-all duration-300 flex items-center justify-center backdrop-blur-sm bg-white/50"
                >
                  <i className="fas fa-play mr-3 transition-transform group-hover:scale-110"></i>
                  Bekijk Onze Projecten
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
                <div className="text-center">
                  <div className="text-4xl font-black bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">500+</div>
                  <div className="text-sm text-slate-600 font-medium">Tevreden klanten</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">15+</div>
                  <div className="text-sm text-slate-600 font-medium">Jaar ervaring</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">4.9</div>
                  <div className="text-sm text-slate-600 font-medium">★ Google rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-0">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Premium dakwerkers TBGS aan het werk op een moderne woning in Eindhoven" 
                  className="rounded-3xl shadow-2xl w-full h-auto object-cover" 
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-200">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-shield-alt text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">100% Garantie</div>
                    <div className="text-sm text-slate-600">Op alle werkzaamheden</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 bg-tbgs-navy text-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">NL & BE</div>
                  <div className="text-sm opacity-90">Werkgebied</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Overview - Modern Design */}
      <section id="diensten" className="py-24 lg:py-32 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-slate-100 rounded-full px-6 py-2 text-sm font-medium text-slate-600 mb-6">
              <i className="fas fa-tools"></i>
              <span>Onze Expertise</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Premium <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">Specialiteiten</span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              Van <strong>dak tot fundering</strong>, van <strong>schoorsteen tot gevelbekleding</strong>. TBGS biedt premium totaaloplossingen voor al uw bouwprojecten met gespecialiseerde teams per vakgebied.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* TSS - Totaal Schoorsteen Specialist */}
            <Link href="/totaal-schoorsteen-specialist">
              <div className="group bg-white border-2 border-slate-200 rounded-3xl p-8 hover:shadow-2xl hover:border-tbgs-blue transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto group-hover:from-tbgs-blue group-hover:to-blue-600 transition-all duration-500 shadow-lg">
                      <i className="fas fa-industry text-4xl text-tbgs-blue group-hover:text-white transition-colors duration-500"></i>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-tbgs-blue rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <i className="fas fa-arrow-right text-white text-xs"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-tbgs-blue transition-colors">Totaal Schoorsteen Specialist</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Schoorsteenrenovatie, reparatie, reiniging en onderhoud door <strong>ervaren schoorsteen specialisten</strong> met moderne technieken.
                    </p>
                  </div>
                  <div className="flex items-center justify-center text-tbgs-blue font-bold opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Meer informatie <i className="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </div>
            </Link>

            {/* TDS - Totaal Dak Specialist */}
            <Link href="/totaal-dak-specialist">
              <div className="group bg-white border-2 border-slate-200 rounded-3xl p-8 hover:shadow-2xl hover:border-tbgs-red transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center mx-auto group-hover:from-tbgs-red group-hover:to-red-600 transition-all duration-500 shadow-lg">
                      <i className="fas fa-home text-4xl text-tbgs-red group-hover:text-white transition-colors duration-500"></i>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-tbgs-red rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <i className="fas fa-arrow-right text-white text-xs"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-tbgs-red transition-colors">Totaal Dak Specialist</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Platte en hellende daken, dakisolatie, dakgoten en alle gerelateerde werkzaamheden door <strong>gecertificeerde dakspecialisten</strong>.
                    </p>
                  </div>
                  <div className="flex items-center justify-center text-tbgs-red font-bold opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Meer informatie <i className="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </div>
            </Link>

            {/* TOS - Totaal Onderhoud Specialist */}
            <Link href="/totaal-onderhoud-specialist">
              <div className="group bg-white border-2 border-slate-200 rounded-3xl p-8 hover:shadow-2xl hover:border-tbgs-green transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center mx-auto group-hover:from-tbgs-green group-hover:to-green-600 transition-all duration-500 shadow-lg">
                      <i className="fas fa-wrench text-4xl text-tbgs-green group-hover:text-white transition-colors duration-500"></i>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-tbgs-green rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <i className="fas fa-arrow-right text-white text-xs"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-tbgs-green transition-colors">Totaal Onderhoud Specialist</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Preventief en curatief onderhoud aan <strong>woningen en bedrijfspanden</strong>. Van klein herstelwerk tot grote onderhoudskliussen.
                    </p>
                  </div>
                  <div className="flex items-center justify-center text-tbgs-green font-bold opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Meer informatie <i className="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </div>
            </Link>

            {/* TBS - Totaal Bouw Specialist */}
            <Link href="/totaal-bouw-specialist">
              <div className="group bg-white border-2 border-slate-200 rounded-3xl p-8 hover:shadow-2xl hover:border-tbgs-orange transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl flex items-center justify-center mx-auto group-hover:from-tbgs-orange group-hover:to-orange-600 transition-all duration-500 shadow-lg">
                      <i className="fas fa-hammer text-4xl text-tbgs-orange group-hover:text-white transition-colors duration-500"></i>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-tbgs-orange rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <i className="fas fa-arrow-right text-white text-xs"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-tbgs-orange transition-colors">Totaal Bouw Specialist</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Algemene bouwwerkzaamheden, <strong>renovaties en uitbreidingen</strong>. Van concept tot oplevering met één aanspreekpunt.
                    </p>
                  </div>
                  <div className="flex items-center justify-center text-tbgs-orange font-bold opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Meer informatie <i className="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Why Choose Us Section */}
          <div className="mt-24 bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-12 lg:p-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Waarom Kiezen voor TBGS?</h3>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">Ontdek wat ons onderscheidt van andere bouwbedrijven</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-certificate text-2xl text-green-600"></i>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Gecertificeerd</h4>
                <p className="text-slate-600 text-sm">Alle specialisten zijn volledig gecertificeerd en verzekerd</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clock text-2xl text-blue-600"></i>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Snelle Service</h4>
                <p className="text-slate-600 text-sm">Offerte binnen 24u, snelle projectstart mogelijk</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shield-alt text-2xl text-purple-600"></i>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Garantie</h4>
                <p className="text-slate-600 text-sm">Uitgebreide garantie op alle uitgevoerde werkzaamheden</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-handshake text-2xl text-yellow-600"></i>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Persoonlijk</h4>
                <p className="text-slate-600 text-sm">Één aanspreekpunt van offerte tot oplevering</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Recent Projects - Modern Portfolio */}
      <section id="projecten" className="pt-8 pb-24 lg:pt-12 lg:pb-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium text-slate-600 mb-6">
              <i className="fas fa-briefcase"></i>
              <span>Onze Realisaties</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Recente <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">Projecten</span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              Een selectie van onze <strong>laatste werkzaamheden</strong> in Nederland en België. Kwaliteit en vakmanschap staan centraal bij elk project.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Featured Project */}
            <div className="lg:col-span-2 group cursor-pointer">
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
                    alt="Complete dakrenovatie luxe villa Eindhoven - TBGS Premium Dakspecialisten" 
                    className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className="bg-tbgs-red text-white px-3 py-1 rounded-full text-xs font-bold">TDS</span>
                    <span className="bg-white/90 backdrop-blur-sm text-slate-700 px-3 py-1 rounded-full text-xs font-medium">Featured</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-500 text-sm font-medium">Eindhoven • December 2024</span>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <i className="fas fa-star text-xs"></i>
                      <i className="fas fa-star text-xs"></i>
                      <i className="fas fa-star text-xs"></i>
                      <i className="fas fa-star text-xs"></i>
                      <i className="fas fa-star text-xs"></i>
                      <span className="text-slate-600 text-sm ml-1">5.0</span>
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-tbgs-red transition-colors">Complete Luxe Dakrenovatie</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Volledige vervanging van <strong>240m² hellend dak</strong> inclusief premium dakbedekking, nieuwe dakgoten, verbeterde isolatie (Rc 6.0) en zonnepanelen integratie. Energielabel verhoogd van C naar A++.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-slate-900">240m²</div>
                        <div className="text-xs text-slate-600">Dakoppervlak</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-slate-900">3 weken</div>
                        <div className="text-xs text-slate-600">Oplevering</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-slate-900">A++</div>
                        <div className="text-xs text-slate-600">Energielabel</div>
                      </div>
                    </div>
                    <button className="text-tbgs-red font-bold group-hover:translate-x-1 transition-transform">
                      Bekijk Details <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Projects */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" 
                  alt="Schoorsteenrenovatie herenhuis België - TBGS Schoorsteenspecialisten" 
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-tbgs-blue text-white px-2 py-1 rounded-full text-xs font-bold">TSS</span>
                    <span className="text-slate-500 text-xs">Limburg, BE</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-tbgs-blue transition-colors">Schoorsteenrenovatie Herenhuis</h4>
                  <p className="text-slate-600 text-sm mb-3">Complete renovatie historische schoorsteen inclusief nieuwe voering en rookgasafvoer.</p>
                  <div className="text-tbgs-blue font-semibold text-sm">Nov 2024</div>
                </div>
              </div>

              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <img 
                  src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" 
                  alt="Gevelbekleding modern appartementencomplex - TBGS Bouwspecialisten" 
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-tbgs-orange text-white px-2 py-1 rounded-full text-xs font-bold">TBS</span>
                    <span className="text-slate-500 text-xs">Veldhoven</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-tbgs-orange transition-colors">Moderne Gevelbekleding</h4>
                  <p className="text-slate-600 text-sm mb-3">Innovatieve gevelbekleding appartementencomplex met duurzame materialen en moderne uitstraling.</p>
                  <div className="text-tbgs-orange font-semibold text-sm">Oct 2024</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-tbgs-navy text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center"
            >
              <i className="fas fa-folder-open mr-3"></i>
              Alle Projecten Bekijken
            </button>
          </div>
        </div>
      </section>
      {/* Customer Testimonials - Premium Design */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-slate-100 rounded-full px-6 py-2 text-sm font-medium text-slate-600 mb-6">
              <i className="fas fa-heart"></i>
              <span>Klantbeoordelingen</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Wat <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">Klanten</span> Zeggen
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              Onze klanten waarderen ons <strong>vakmanschap</strong>, <strong>betrouwbaarheid</strong> en persoonlijke aanpak. Ontdek waarom zij ons aanbevelen.
            </p>
          </div>

          {/* Trust Score */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-6 bg-white/80 backdrop-blur-sm border border-slate-200 px-8 py-6 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400 text-2xl">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span className="text-3xl font-black text-slate-900">4.9</span>
              </div>
              <div className="border-l border-slate-300 pl-6">
                <div className="font-bold text-slate-900">Google Reviews</div>
                <div className="text-sm text-slate-600">127+ verified reviews</div>
              </div>
              <div className="border-l border-slate-300 pl-6">
                <div className="font-bold text-slate-900">97%</div>
                <div className="text-sm text-slate-600">Recommend us</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Premium Testimonial 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 text-lg mr-3">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">Verified</span>
              </div>
              <blockquote className="text-slate-800 mb-8 text-lg leading-relaxed font-medium">
                "Uitstekend werk geleverd aan ons dak. Het team van TBGS was <strong>professioneel, punctueel</strong> en heeft alles perfect achtergelaten. Het resultaat overtreft onze verwachtingen!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-tbgs-navy to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  MV
                </div>
                <div className="ml-4">
                  <div className="font-bold text-slate-900">Maria van der Berg</div>
                  <div className="text-sm text-slate-600">Eindhoven • TDS Dakwerken</div>
                  <div className="text-xs text-slate-500 mt-1">December 2024</div>
                </div>
              </div>
            </div>

            {/* Premium Testimonial 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 text-lg mr-3">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">Google</span>
              </div>
              <blockquote className="text-slate-800 mb-8 text-lg leading-relaxed font-medium">
                "Fantastische service voor onze schoorsteenrenovatie. <strong>Vakkundig, netjes en binnen budget</strong>. TBGS denkt echt mee in oplossingen. Absoluut aan te raden!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-tbgs-blue to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  JD
                </div>
                <div className="ml-4">
                  <div className="font-bold text-slate-900">Jan Dekkers</div>
                  <div className="text-sm text-slate-600">Limburg, BE • TSS Schoorsteenwerken</div>
                  <div className="text-xs text-slate-500 mt-1">November 2024</div>
                </div>
              </div>
            </div>

            {/* Premium Testimonial 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 text-lg mr-3">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-bold">Premium</span>
              </div>
              <blockquote className="text-slate-800 mb-8 text-lg leading-relaxed font-medium">
                "Complete renovatie van A tot Z perfect uitgevoerd. <strong>Transparante communicatie</strong>, geen verrassingen en het eindresultaat is werkelijk prachtig. Top bedrijf!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-tbgs-orange to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  RS
                </div>
                <div className="ml-4">
                  <div className="font-bold text-slate-900">Robert Smits</div>
                  <div className="text-sm text-slate-600">Best • TBS Bouwwerken</div>
                  <div className="text-xs text-slate-500 mt-1">Oktober 2024</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="bg-slate-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 text-center mb-8">Waarom Klanten TBGS Vertrouwen</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-award text-2xl text-green-600"></i>
                </div>
                <div className="font-bold text-slate-900 mb-2">15+ Jaar Ervaring</div>
                <div className="text-slate-600 text-sm">Proven track record sinds 2010</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-2xl text-blue-600"></i>
                </div>
                <div className="font-bold text-slate-900 mb-2">500+ Tevreden Klanten</div>
                <div className="text-slate-600 text-sm">Particulier en zakelijk</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shield-alt text-2xl text-purple-600"></i>
                </div>
                <div className="font-bold text-slate-900 mb-2">100% Garantie</div>
                <div className="text-slate-600 text-sm">Op alle werkzaamheden</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-certificate text-2xl text-yellow-600"></i>
                </div>
                <div className="font-bold text-slate-900 mb-2">Gecertificeerd</div>
                <div className="text-slate-600 text-sm">Alle specialisten</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Areas - Modern Design */}
      <section id="over-ons" className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium text-slate-600 mb-6">
              <i className="fas fa-map-marker-alt"></i>
              <span>Werkgebied</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Nederland & <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">België</span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              TBGS is actief in <strong>Nederland (regio Eindhoven)</strong> en <strong>België (provincie Limburg)</strong>. Ontdek of wij ook in uw gebied werkzaamheden uitvoeren.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Side - Service Areas */}
            <div className="space-y-8">
              {/* Nederland */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt text-2xl text-orange-600"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Nederland</h3>
                    <p className="text-slate-600">Brabant & omstreken</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Hoofdlocaties</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-center"><i className="fas fa-check-circle text-green-500 w-4 mr-2"></i>Eindhoven</li>
                      <li className="flex items-center"><i className="fas fa-check-circle text-green-500 w-4 mr-2"></i>Nuenen</li>
                      <li className="flex items-center"><i className="fas fa-check-circle text-green-500 w-4 mr-2"></i>Veldhoven</li>
                      <li className="flex items-center"><i className="fas fa-check-circle text-green-500 w-4 mr-2"></i>Best</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Ook beschikbaar</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-center"><i className="fas fa-check-circle text-blue-500 w-4 mr-2"></i>Son en Breugel</li>
                      <li className="flex items-center"><i className="fas fa-check-circle text-blue-500 w-4 mr-2"></i>Geldrop</li>
                      <li className="flex items-center"><i className="fas fa-check-circle text-blue-500 w-4 mr-2"></i>Mierlo</li>
                      <li className="flex items-center"><i className="fas fa-check-circle text-blue-500 w-4 mr-2"></i>Waalre</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* België */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt text-2xl text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">België</h3>
                    <p className="text-slate-600">Provincie Limburg</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Actieve gebieden</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-center"><i className="fas fa-check-circle text-green-500 w-4 mr-2"></i>Hasselt</li>
                      <li className="flex items-center"><i className="fas fa-check-circle text-green-500 w-4 mr-2"></i>Genk</li>
                      <li className="flex items-center"><i className="fas fa-check-circle text-green-500 w-4 mr-2"></i>Bilzen</li>
                      <li className="flex items-center"><i className="fas fa-check-circle text-green-500 w-4 mr-2"></i>Tongeren</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Aangrenzende</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-center"><i className="fas fa-check-circle text-blue-500 w-4 mr-2"></i>Maaseik</li>
                      <li className="flex items-center"><i className="fas fa-check-circle text-blue-500 w-4 mr-2"></i>Sint-Truiden</li>
                      <li className="flex items-center"><i className="fas fa-check-circle text-blue-500 w-4 mr-2"></i>Lanaken</li>
                      <li className="flex items-center"><i className="fas fa-check-circle text-blue-500 w-4 mr-2"></i>Lummen</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Interactive CTA */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-tbgs-navy to-blue-700 text-white rounded-3xl p-10 shadow-xl">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-search-location text-3xl"></i>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Werkgebied Check</h3>
                  <p className="text-lg opacity-90 leading-relaxed">
                    Twijfelt u of wij in uw gebied werkzaam zijn? <strong>Vraag het ons direct</strong> voor een vrijblijvende check en persoonlijk advies.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <button 
                    onClick={onOpenContactModal}
                    className="w-full bg-white text-tbgs-navy px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <i className="fas fa-map-check mr-3"></i>
                    Check Mijn Locatie
                  </button>
                  
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold">~25km</div>
                      <div className="text-sm opacity-80">Gemiddelde reisafstand</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm opacity-80">Service beschikbaar</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Elements */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
                <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">Waarom TBGS in uw regio?</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <i className="fas fa-check text-green-600"></i>
                    </div>
                    <span className="text-slate-700">Lokale kennis van bouwvoorschriften</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <i className="fas fa-check text-blue-600"></i>
                    </div>
                    <span className="text-slate-700">Korte reistijd = lagere kosten</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <i className="fas fa-check text-purple-600"></i>
                    </div>
                    <span className="text-slate-700">Snelle service bij noodgevallen</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <i className="fas fa-check text-yellow-600"></i>
                    </div>
                    <span className="text-slate-700">Persoonlijke relatie met klanten</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact CTA - Premium Design */}
      <section id="contact" className="py-24 lg:py-32 bg-gradient-to-br from-tbgs-navy via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.2),transparent_70%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium mb-8">
              <i className="fas fa-rocket"></i>
              <span>Start Uw Project</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Klaar om te <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Starten?</span>
            </h2>
            <p className="text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto font-light leading-relaxed">
              Neem contact met ons op voor een <strong>vrijblijvende offerte</strong>. Wij denken graag mee en adviseren u over de beste oplossing voor uw project.
            </p>
          </div>

          {/* Contact Methods - Modern Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-phone text-2xl"></i>
              </div>
              <h4 className="font-bold mb-3 text-lg">Direct Bellen</h4>
              <p className="opacity-80 text-sm mb-4">Werkdagen 8:00 - 17:00</p>
              <a href="tel:+31612345678" className="text-yellow-300 hover:text-white font-bold transition-colors text-lg">
                +31 6 12 34 56 78
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-envelope text-2xl"></i>
              </div>
              <h4 className="font-bold mb-3 text-lg">Email Ons</h4>
              <p className="opacity-80 text-sm mb-4">Reactie binnen 4 uur</p>
              <a href="mailto:info@tbgs.nl" className="text-yellow-300 hover:text-white font-bold transition-colors">
                info@tbgs.nl
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-whatsapp text-2xl"></i>
              </div>
              <h4 className="font-bold mb-3 text-lg">WhatsApp</h4>
              <p className="opacity-80 text-sm mb-4">Snelle communicatie</p>
              <a href="https://wa.me/31612345678" className="text-yellow-300 hover:text-white font-bold transition-colors">
                Chat Direct
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-calendar-plus text-2xl"></i>
              </div>
              <h4 className="font-bold mb-3 text-lg">Plan Afspraak</h4>
              <p className="opacity-80 text-sm mb-4">Gratis adviesgesprek</p>
              <button 
                onClick={onOpenContactModal}
                className="text-yellow-300 hover:text-white font-bold transition-colors"
              >
                Direct Plannen
              </button>
            </div>
          </div>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button 
              onClick={onOpenContactModal}
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-12 py-6 rounded-2xl font-black text-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 flex items-center justify-center"
            >
              <i className="fas fa-calculator mr-4 transition-transform group-hover:scale-110"></i>
              Gratis Offerte in 24u
            </button>
            <button className="group border-3 border-white text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-tbgs-navy transition-all duration-300 backdrop-blur-sm bg-white/10 flex items-center justify-center">
              <i className="fas fa-download mr-4 transition-transform group-hover:scale-110"></i>
              Download Brochure
            </button>
          </div>

          {/* Trust Footer */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-8 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
              <div className="flex items-center space-x-2">
                <i className="fas fa-shield-alt text-green-400"></i>
                <span className="text-sm">100% Garantie</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-clock text-blue-400"></i>
                <span className="text-sm">24u Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-star text-yellow-400"></i>
                <span className="text-sm">4.9★ Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-users text-purple-400"></i>
                <span className="text-sm">500+ Klanten</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
