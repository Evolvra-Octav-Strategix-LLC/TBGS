import SEOHead from "@/lib/seo";
import { Link } from "wouter";
import { ShieldCheck } from "lucide-react";
import GoogleBusinessIntegration from "@/components/GoogleBusinessIntegration";
import GoogleReviewSlider from "@/components/GoogleReviewSlider";
import LocalSEOSchema from "@/components/LocalSEOSchema";
import tssLogo from "@assets/TSS 545x642 (1)_1755096878001.png";
import tdsLogo from "@assets/TDS 545x642 (1)_1755096847747.png";
import tosLogo from "@assets/TOS 545x642 (1)_1755096847747.png";
import tbsLogo from "@assets/TBS 545x642 (1)_1755096847747.png";

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
      <LocalSEOSchema businessData={{
        name: "TBGS BV - Totaal Bouw Groep Specialisten",
        address: {
          addressLocality: "Eindhoven",
          addressRegion: "Noord-Brabant", 
          addressCountry: "NL"
        },
        telephone: "+31 40 202 6744",
        email: "info@tbgs.nl",
        website: "https://tbgs.nl",
        geo: {
          latitude: 51.4416,
          longitude: 5.4697
        },
        areaServed: ["Nederland", "België", "Noord-Brabant", "Limburg"],
        rating: {
          ratingValue: 4.8,
          reviewCount: 127
        },
        openingHours: [
          "Mo-Fr 08:00-17:00",
          "Sa 09:00-16:00"
        ]
      }} />
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
                  Premium bouwspecialisten voor <strong>dakwerken</strong>, <strong>schoorsteenwerken</strong> en <strong>onderhoud</strong> in Nederland en België. Gecertificeerd vakmanschap met <strong>80+ jaar ervaring vanuit de gehele familie</strong>.
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
              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-slate-200">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent leading-tight">8800+</div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Voltooide klussen</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent leading-tight">4e</div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Generatie vakmanschap</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent leading-tight">4.9</div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">★ Google rating</div>
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
              <span>Onze Specialiteiten</span>
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
              <div className="group bg-white border-2 border-slate-200 rounded-3xl p-8 hover:shadow-2xl hover:border-tbgs-blue transition-all duration-500 hover:-translate-y-2 cursor-pointer h-full flex flex-col">
                <div className="text-center space-y-6 flex-1 flex flex-col justify-between">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto group-hover:from-tbgs-blue group-hover:to-blue-600 transition-all duration-500 shadow-lg">
                      <img src={tssLogo} alt="TSS Logo" className="w-16 h-16 object-contain opacity-88 group-hover:opacity-100 transition-all duration-500" />
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
              <div className="group bg-white border-2 border-slate-200 rounded-3xl p-8 hover:shadow-2xl hover:border-tbgs-red transition-all duration-500 hover:-translate-y-2 cursor-pointer h-full flex flex-col">
                <div className="text-center space-y-6 flex-1 flex flex-col justify-between">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center mx-auto group-hover:from-tbgs-red group-hover:to-red-600 transition-all duration-500 shadow-lg">
                      <img src={tdsLogo} alt="TDS Logo" className="w-16 h-16 object-contain opacity-88 group-hover:opacity-100 transition-all duration-500" />
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
              <div className="group bg-white border-2 border-slate-200 rounded-3xl p-8 hover:shadow-2xl hover:border-tbgs-green transition-all duration-500 hover:-translate-y-2 cursor-pointer h-full flex flex-col">
                <div className="text-center space-y-6 flex-1 flex flex-col justify-between">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center mx-auto group-hover:from-tbgs-green group-hover:to-green-600 transition-all duration-500 shadow-lg">
                      <img src={tosLogo} alt="TOS Logo" className="w-16 h-16 object-contain opacity-88 group-hover:opacity-100 transition-all duration-500" />
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
              <div className="group bg-white border-2 border-slate-200 rounded-3xl p-8 hover:shadow-2xl hover:border-tbgs-orange transition-all duration-500 hover:-translate-y-2 cursor-pointer h-full flex flex-col">
                <div className="text-center space-y-6 flex-1 flex flex-col justify-between">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl flex items-center justify-center mx-auto group-hover:from-tbgs-orange group-hover:to-orange-600 transition-all duration-500 shadow-lg">
                      <img src={tbsLogo} alt="TBS Logo" className="w-16 h-16 object-contain opacity-88 group-hover:opacity-100 transition-all duration-500" />
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

          {/* Company Story Section */}
          <div className="mt-24 bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-6 sm:p-8 lg:p-16 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-20 h-20 border-2 border-tbgs-navy rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-tbgs-blue rounded-lg rotate-45"></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-tbgs-red rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium text-slate-600 mb-6">
                  <i className="fas fa-building"></i>
                  <span>Ons Verhaal</span>
                </div>
                <h3 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Waarom Kiezen voor <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">TBGS?</span>
                </h3>
                <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
                  Complete ontzorging bij <strong>dak, schoorsteen, onderhoud en bouw</strong> werkzaamheden. Wij nemen uw project volledig in beheer, zodat u zich nergens zorgen over hoeft te maken.
                </p>
              </div>

              {/* Heritage Story */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg border border-slate-200 mb-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-tbgs-navy to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                        <i className="fas fa-users text-xl sm:text-2xl text-white"></i>
                      </div>
                      <div>
                        <h4 className="text-xl sm:text-2xl font-bold text-slate-900">Van overgrootvader tot kleinzoon</h4>
                        <p className="text-tbgs-navy font-medium text-sm sm:text-base">4 generaties vakmanschap sinds 1943</p>
                      </div>
                    </div>
                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
                      Het begon in 1943 toen de eerste generatie van TBGS hun eerste dakpan legde. Het vakmanschap werd doorgegeven van generatie op generatie, van dak- en bouwwerken tot specialistische technieken. Vier generaties later hebben wij duizenden <strong>kostbare herstelprojecten</strong> uitgevoerd die eigenlijk voorkomen hadden kunnen worden.
                    </p>

                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                      <strong>Preventie is onze kracht.</strong> Met 80 jaar ervaring in dak-, schoorsteen-, onderhoud- en bouwwerkzaamheden weten wij precies waar problemen ontstaan. Wij investeren in grondige inspecties en preventieve maatregelen, zodat u nooit voor onaangename verrassingen komt te staan.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-tbgs-navy to-blue-600 rounded-2xl p-8 text-white">
                      <div className="text-center mb-6">
                        <div className="text-4xl font-bold">1943 - 2025</div>
                        <div className="text-lg opacity-90">80+ jaar vakmanschap</div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <i className="fas fa-check-circle text-green-300"></i>
                          <span>4 Generaties Ervaring</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <i className="fas fa-check-circle text-green-300"></i>
                          <span>Duizenden Problemen Opgelost</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <i className="fas fa-check-circle text-green-300"></i>
                          <span>4 Gespecialiseerde Teams</span>
                        </div>
                      </div>
                    </div>

                    
                  </div>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="text-center mb-12">
                <div className="bg-gradient-to-r from-tbgs-navy to-blue-600 rounded-3xl p-8 lg:p-12 text-white">
                  <h4 className="text-2xl lg:text-3xl font-bold mb-6">Onze Missie</h4>
                  <p className="text-xl lg:text-2xl leading-relaxed font-light max-w-4xl mx-auto">
                    TBGS is daarom geëvolueerd tot een <strong>totaal ontzorgende organisatie</strong> die de klant overal bij bijstaat. Van preventieve controles tot noodreparaties - niets is ons te gek. Wij nemen uw project volledig in beheer om problemen te voorkomen, niet om ze achteraf op te lossen.
                  </p>
                  <p className="text-lg lg:text-xl leading-relaxed font-light max-w-3xl mx-auto mt-6 opacity-90">
                    Door onze jarenlange ervaring met alle mogelijke bouwproblemen weten wij als geen ander waar u tegenaan kunt lopen. Onze specialistische aanpak zorgt ervoor dat wij altijd een stapje voor zijn, zodat u zich nooit zorgen hoeft te maken over uw dak, schoorsteen of bouwproject.
                  </p>
                  <div className="mt-8">
                    <button 
                      onClick={() => scrollToSection('over-ons')}
                      className="bg-white text-tbgs-navy px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center"
                    >
                      <i className="fas fa-book-open mr-3"></i>
                      Lees Ons Volledige Verhaal
                    </button>
                  </div>
                </div>
              </div>

              {/* Key Differentiators */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
                <div className="bg-white rounded-xl p-4 lg:p-6 text-center shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-100 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4">
                    <ShieldCheck className="w-6 h-6 lg:w-8 lg:h-8 text-green-600" />
                  </div>
                  <h5 className="text-base lg:text-lg font-bold text-slate-900 mb-1 lg:mb-2">Preventief Werken</h5>
                  <p className="text-slate-600 text-xs lg:text-sm leading-tight">Problemen voorkomen in plaats van achteraf oplossen</p>
                </div>
                
                <div className="bg-white rounded-xl p-4 lg:p-6 text-center shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-100 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4">
                    <i className="fas fa-users-cog text-lg lg:text-2xl text-blue-600"></i>
                  </div>
                  <h5 className="text-base lg:text-lg font-bold text-slate-900 mb-1 lg:mb-2">4 Specialisten</h5>
                  <p className="text-slate-600 text-xs lg:text-sm leading-tight">Dak, schoorsteen, onderhoud én bouw onder één dak</p>
                </div>
                
                <div className="bg-white rounded-xl p-4 lg:p-6 text-center shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-purple-100 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4">
                    <i className="fas fa-handshake text-lg lg:text-2xl text-purple-600"></i>
                  </div>
                  <h5 className="text-base lg:text-lg font-bold text-slate-900 mb-1 lg:mb-2">Totale Ontzorging</h5>
                  <p className="text-slate-600 text-xs lg:text-sm leading-tight">Eén aanspreekpunt van offerte tot nazorg</p>
                </div>
                
                <div className="bg-white rounded-xl p-4 lg:p-6 text-center shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-yellow-100 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4">
                    <i className="fas fa-clock text-lg lg:text-2xl text-yellow-600"></i>
                  </div>
                  <h5 className="text-base lg:text-lg font-bold text-slate-900 mb-1 lg:mb-2">Altijd Vooruit</h5>
                  <p className="text-slate-600 text-xs lg:text-sm leading-tight">Door jarenlange ervaring weten wij waar u tegenaan loopt</p>
                </div>
              </div>
            </div>
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

          {/* Trust Score - Mobile Responsive */}
          <div className="text-center mb-16">
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-lg mx-auto max-w-md md:max-w-none">
              {/* Mobile Layout */}
              <div className="md:hidden px-6 py-6 space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <div className="flex text-yellow-400 text-xl">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="text-2xl font-black text-slate-900">4.9</span>
                </div>
                <div className="text-center border-t border-slate-200 pt-4">
                  <div className="font-bold text-slate-900">Google Reviews</div>
                  <div className="text-sm text-slate-600">127+ verified reviews</div>
                </div>
                <div className="text-center border-t border-slate-200 pt-4">
                  <div className="font-bold text-slate-900">97%</div>
                  <div className="text-sm text-slate-600">Recommend us</div>
                </div>
              </div>
              
              {/* Desktop Layout */}
              <div className="hidden md:flex items-center space-x-6 px-8 py-6">
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
          </div>

          {/* Real Google Reviews Slider */}
          <GoogleReviewSlider placeId="ChIJd0X8fA-7xkcRKOkp7DQsQZs" className="mb-12" />

          {/* Trust Badges */}
          <div className="bg-slate-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 text-center mb-8">Waarom Klanten TBGS Vertrouwen</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-award text-2xl text-green-600"></i>
                </div>
                <div className="font-bold text-slate-900 mb-2">80+ Jaar Familietraditie</div>
                <div className="text-slate-600 text-sm">Generaties vakmanschap gebundeld</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-2xl text-blue-600"></i>
                </div>
                <div className="font-bold text-slate-900 mb-2">8800+ Klussen</div>
                <div className="text-slate-600 text-sm">Van klein tot groot</div>
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
                      <li className="flex items-center"><i className="fas fa-check-circle text-green-500 w-4 mr-2"></i><Link href="/eindhoven" className="hover:text-tbgs-navy font-medium">Eindhoven</Link></li>
                      <li className="flex items-center"><i className="fas fa-check-circle text-green-500 w-4 mr-2"></i><Link href="/nuenen" className="hover:text-tbgs-navy font-medium">Nuenen</Link></li>
                      <li className="flex items-center"><i className="fas fa-check-circle text-green-500 w-4 mr-2"></i><Link href="/veldhoven" className="hover:text-tbgs-navy font-medium">Veldhoven</Link></li>
                      <li className="flex items-center"><i className="fas fa-check-circle text-green-500 w-4 mr-2"></i><Link href="/best" className="hover:text-tbgs-navy font-medium">Best</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Ook beschikbaar</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-center"><i className="fas fa-check-circle text-blue-500 w-4 mr-2"></i><Link href="/son-en-breugel" className="hover:text-tbgs-navy font-medium">Son en Breugel</Link></li>
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
                      <li className="flex items-center"><i className="fas fa-check-circle text-green-500 w-4 mr-2"></i><Link href="/retie" className="hover:text-tbgs-navy font-medium">Retie</Link></li>
                      <li className="flex items-center"><i className="fas fa-check-circle text-green-500 w-4 mr-2"></i><Link href="/lommel" className="hover:text-tbgs-navy font-medium">Lommel</Link></li>
                      <li className="flex items-center"><i className="fas fa-check-circle text-green-500 w-4 mr-2"></i>Hamont-Achel</li>
                      <li className="flex items-center"><i className="fas fa-check-circle text-green-500 w-4 mr-2"></i>Hamont</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Aangrenzende</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-center"><i className="fas fa-check-circle text-blue-500 w-4 mr-2"></i>Pelt</li>
                      <li className="flex items-center"><i className="fas fa-check-circle text-blue-500 w-4 mr-2"></i>Sint-Huibrechts-Lille</li>
                      <li className="flex items-center"><i className="fas fa-check-circle text-blue-500 w-4 mr-2"></i>Overpelt</li>
                      <li className="flex items-center"><i className="fas fa-check-circle text-blue-500 w-4 mr-2"></i>Neerpelt</li>
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

      {/* Google Business Integration Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium text-slate-600 mb-6">
              <i className="fas fa-map-marker-alt"></i>
              <span>Bedrijfsinformatie</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Vind Ons <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">Locatie</span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              Wij bedienen <strong>Nederland en België</strong> met lokale kennis en <strong>gecertificeerde specialisten</strong>. Bekijk onze reviews en contactgegevens.
            </p>
          </div>

          <GoogleBusinessIntegration 
            placeId="ChIJd0X8fA-7xkcRKOkp7DQsQZs"
            showReviews={true}
            showMap={true}
            showHours={true}
            className="max-w-6xl mx-auto"
          />
        </div>
      </section>

      {/* Contact CTA - Compact Design */}
      <section id="contact" className="py-16 lg:py-20 bg-gradient-to-br from-tbgs-navy via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.2),transparent_70%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6">
              <i className="fas fa-rocket"></i>
              <span>Start Uw Project</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Klaar om te <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Starten?</span>
            </h2>
            <p className="text-lg lg:text-xl opacity-90 max-w-3xl mx-auto font-light leading-relaxed">
              Neem contact met ons op voor een <strong>vrijblijvende offerte</strong>. Wij denken graag mee en adviseren u over de beste oplossing voor uw project.
            </p>
          </div>

          {/* Contact Methods - Compact Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-phone text-lg"></i>
              </div>
              <h4 className="font-bold mb-2 text-base">Direct Bellen</h4>
              <a href="tel:+31402026744" className="text-yellow-300 hover:text-white font-bold transition-colors text-sm">
                040 202 6744
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-envelope text-lg"></i>
              </div>
              <h4 className="font-bold mb-2 text-base">Email Ons</h4>
              <a href="mailto:info@tbgs.nl" className="text-yellow-300 hover:text-white font-bold transition-colors text-sm">
                info@tbgs.nl
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-whatsapp text-lg"></i>
              </div>
              <h4 className="font-bold mb-2 text-base">WhatsApp</h4>
              <a href="https://wa.me/31402026744" className="text-yellow-300 hover:text-white font-bold transition-colors text-sm">
                Chat Direct
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-calculator text-lg"></i>
              </div>
              <h4 className="font-bold mb-2 text-base">Gratis Offerte</h4>
              <button 
                onClick={onOpenContactModal}
                className="text-yellow-300 hover:text-white font-bold transition-colors text-sm"
              >
                Direct Aanvragen
              </button>
            </div>
          </div>

          {/* Main CTA Button */}
          <div className="text-center mb-8">
            <button 
              onClick={onOpenContactModal}
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-10 py-4 rounded-2xl font-black text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 inline-flex items-center"
            >
              <i className="fas fa-calculator mr-3 transition-transform group-hover:scale-110"></i>
              Gratis Offerte in 24u
            </button>
          </div>

          {/* Trust Footer - Compact */}
          <div className="text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 lg:gap-6 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
              <div className="flex items-center space-x-2">
                <i className="fas fa-shield-alt text-green-400 text-sm"></i>
                <span className="text-xs lg:text-sm">100% Garantie</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-clock text-blue-400 text-sm"></i>
                <span className="text-xs lg:text-sm">24u Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-star text-yellow-400 text-sm"></i>
                <span className="text-xs lg:text-sm">4.9★ Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-users text-purple-400 text-sm"></i>
                <span className="text-xs lg:text-sm">500+ Klanten</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
