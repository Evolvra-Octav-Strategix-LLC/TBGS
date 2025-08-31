import SEOHead from "@/lib/seo";
import { Link } from "wouter";
import Header from "@/components/Header";
import SpecialistNavigationBar from "@/components/SpecialistNavigationBar";
import tssLogo from "@assets/TSS 545x642 (1)_1754935673253.png";
import { 
  Calculator, 
  Phone, 
  Paintbrush2, 
  X, 
  Wrench, 
  Cog, 
  Hammer, 
  AlertTriangle,
  Award,
  CheckCircle,
  Home
} from "lucide-react";
import certifiedIcon from "@assets/image (13)_1754999543397.png";
import cleaningIcon from "@assets/image (19)_1754999543410.png";
import removalIcon from "@assets/image (16)_1754999543400.png";
import repairIcon from "@assets/image (17)_1754999543404.png";
import replacementIcon from "@assets/image (14)_1754999543397.png";
import renovationIcon from "@assets/image (17)_1754999543404.png";
import emergencyIcon from "@assets/image (18)_1754999543407.png";
import heroImage from "@assets/Totaal Schoorsteen Specialist (1)_1754928058600.jpg";

interface TotaalSchoorsteenSpecialistProps {
  onOpenContactModal: () => void;
}

export default function TotaalSchoorsteenSpecialist({ onOpenContactModal }: TotaalSchoorsteenSpecialistProps) {
  return (
    <>
      <SEOHead 
        title="Totaal Schoorsteen Specialist (TSS) - Schoorsteenwerken | TBGS"
        description="TSS - Totaal Schoorsteen Specialist van TBGS. Specialist in schoorsteenonderhoud, reparaties, vervangingen en rookkanaal services in Nederland en België."
        url="https://tbgs.nl/totaal-schoorsteen-specialist"
      />

      <SpecialistNavigationBar />

      <Header 
        specialist="TSS"
        onOpenContactModal={onOpenContactModal}
      />


      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <img src={tssLogo} alt="TSS Logo" className="w-20 h-20 object-contain" />
                  <div>
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                      Totaal Schoorsteen Specialist
                    </h1>
                    <p className="text-xs sm:text-sm lg:text-lg text-tbgs-blue font-semibold">TSS - Uw schoorsteen specialist</p>
                  </div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Schoorsteen renovatie, verwijderen, reparatie en reiniging. 
                  Onze gecertificeerde specialisten zorgen voor veilige en efficiënte schoorsteenoplossingen.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-tbgs-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Calculator className="w-5 h-5 mr-3" />
                  Schoorsteen offerte
                </button>
                <a 
                  href="tel:+31402026744"
                  className="border-2 border-tbgs-blue text-tbgs-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-tbgs-blue hover:text-white transition-colors flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Spoedservice
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-tbgs-blue">20+</div>
                  <div className="text-sm text-gray-600">Jaar ervaring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tbgs-blue">24/7</div>
                  <div className="text-sm text-gray-600">Spoedservice</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tbgs-blue">100%</div>
                  <div className="text-sm text-gray-600">Gecertificeerd</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="Totaal Schoorsteen Specialist - professionele schoorsteenveger" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-tbgs-blue rounded-full flex items-center justify-center relative z-10 flex-shrink-0">
                    <img src={certifiedIcon} alt="Gecertificeerd" className="w-10 h-10 object-contain brightness-0 invert" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-gray-900 text-sm leading-tight">Gecertificeerd</div>
                    <div className="text-xs text-gray-600 leading-tight whitespace-nowrap">Erkend schoorsteenveger</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Onze schoorsteen diensten
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Als totaal schoorsteen specialist bieden wij complete service voor alle schoorsteentypes. 
              Van onderhoud tot complete vervanging.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-blue rounded-full flex items-center justify-center mb-4 relative z-10">
                <img src={cleaningIcon} alt="Schoorsteenvegen" className="w-12 h-12 object-contain brightness-0 invert" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Schoorsteenvegen</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-tbgs-blue mr-2 relative z-10 flex-shrink-0 fill-current" />Jaarlijks onderhoud</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-tbgs-blue mr-2 relative z-10 flex-shrink-0 fill-current" />Roetverwijdering</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-tbgs-blue mr-2 relative z-10 flex-shrink-0 fill-current" />Veiligheidscontrole</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-tbgs-blue mr-2 relative z-10 flex-shrink-0 fill-current" />Vegen certificaat</li>
              </ul>
              <button 
                onClick={onOpenContactModal}
                className="text-tbgs-blue font-semibold hover:text-blue-700 transition-colors"
              >
                Meer informatie →
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-blue rounded-full flex items-center justify-center mb-4 relative z-10">
                <img src={removalIcon} alt="Schoorsteen verwijderen" className="w-12 h-12 object-contain brightness-0 invert" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Schoorsteen verwijderen</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-tbgs-blue mr-2 relative z-10 flex-shrink-0 fill-current" />Volledige sloop</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-tbgs-blue mr-2 relative z-10 flex-shrink-0 fill-current" />Veilige afbraak</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-tbgs-blue mr-2 relative z-10 flex-shrink-0 fill-current" />Opruiming materiaal</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-tbgs-blue mr-2 relative z-10 flex-shrink-0 fill-current" />Dakwerk herstel</li>
              </ul>
              <button 
                onClick={onOpenContactModal}
                className="text-tbgs-blue font-semibold hover:text-blue-700 transition-colors"
              >
                Meer informatie →
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-blue rounded-full flex items-center justify-center mb-4 relative z-10">
                <img src={repairIcon} alt="Schoorsteenreparatie" className="w-12 h-12 object-contain brightness-0 invert" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Schoorsteenreparatie</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-tbgs-blue mr-2 relative z-10 flex-shrink-0 fill-current" />Voegwerk herstellen</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-tbgs-blue mr-2 relative z-10 flex-shrink-0 fill-current" />Schoorsteenkap reparatie</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-tbgs-blue mr-2 relative z-10 flex-shrink-0 fill-current" />Binnenwerkherstellingen</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-tbgs-blue mr-2 relative z-10 flex-shrink-0 fill-current" />Noodreparaties</li>
              </ul>
              <button 
                onClick={onOpenContactModal}
                className="text-tbgs-blue font-semibold hover:text-blue-700 transition-colors"
              >
                Meer informatie →
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-blue rounded-full flex items-center justify-center mb-4 relative z-10">
                <img src={replacementIcon} alt="Schoorsteen vervanging" className="w-12 h-12 object-contain brightness-0 invert" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Schoorsteen vervanging</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-tbgs-blue mr-2 relative z-10 flex-shrink-0 fill-current" />Complete vervanging</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-tbgs-blue mr-2 relative z-10 flex-shrink-0 fill-current" />RVS inliner plaatsing</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-tbgs-blue mr-2 relative z-10 flex-shrink-0 fill-current" />Moderne systemen</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-tbgs-blue mr-2 relative z-10 flex-shrink-0 fill-current" />Energie-efficiënt</li>
              </ul>
              <button 
                onClick={onOpenContactModal}
                className="text-tbgs-blue font-semibold hover:text-blue-700 transition-colors"
              >
                Meer informatie →
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-blue rounded-full flex items-center justify-center mb-4 relative z-10">
                <img src={renovationIcon} alt="Schoorsteen Renovatie" className="w-12 h-12 object-contain brightness-0 invert" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Schoorsteen Renovatie</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-tbgs-blue mr-2 relative z-10 flex-shrink-0 fill-current" />Volledig herstel</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-tbgs-blue mr-2 relative z-10 flex-shrink-0 fill-current" />Moderne technieken</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-tbgs-blue mr-2 relative z-10 flex-shrink-0 fill-current" />Duurzame materialen</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-tbgs-blue mr-2 relative z-10 flex-shrink-0 fill-current" />Energie-efficiënt</li>
              </ul>
              <button 
                onClick={onOpenContactModal}
                className="text-tbgs-blue font-semibold hover:text-blue-700 transition-colors"
              >
                Meer informatie →
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-tbgs-blue rounded-full flex items-center justify-center mb-4 relative z-10">
                <img src={emergencyIcon} alt="Spoedservice 24/7" className="w-12 h-12 object-contain brightness-0 invert" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Spoedservice 24/7</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-tbgs-blue mr-2 relative z-10 flex-shrink-0 fill-current" />Rookproblemen</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-tbgs-blue mr-2 relative z-10 flex-shrink-0 fill-current" />CO-alarm situaties</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-tbgs-blue mr-2 relative z-10 flex-shrink-0 fill-current" />Brandveiligheid</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-tbgs-blue mr-2 relative z-10 flex-shrink-0 fill-current" />Noodoplossingen</li>
              </ul>
              <button 
                onClick={onOpenContactModal}
                className="text-tbgs-blue font-semibold hover:text-blue-700 transition-colors"
              >
                Meer informatie →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Schoorsteen Articles Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Schoorsteen Kennisbank
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lees onze uitgebreide artikelen over schoorsteenonderhoud, renovatie en reparatie. 
              Praktische tips en professioneel advies van onze gecertificeerde schoorsteenspecialisten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Schoorsteen Vegen Article */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <i className="fas fa-broom text-white text-6xl"></i>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">Onderhoud</span>
                  <span className="text-gray-500 text-sm">5 min lezen</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Schoorsteen Vegen</h3>
                <p className="text-gray-600 mb-4">
                  Professioneel <strong>schoorsteen vegen</strong> door gecertificeerde <strong>schoorsteenvegers</strong>. Jaarlijks onderhoud voor veilige rookafvoer en brandpreventie.
                </p>
                <Link href="/totaal-schoorsteen-specialist/schoorsteen-vegen" className="text-tbgs-blue font-semibold hover:text-blue-700 transition-colors cursor-pointer">
                  Lees meer over schoorsteen vegen →
                </Link>
              </div>
            </div>

            {/* Schoorsteen Inspectie Article */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <i className="fas fa-search text-white text-6xl"></i>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">Inspectie</span>
                  <span className="text-gray-500 text-sm">6 min lezen</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Schoorsteen Inspectie</h3>
                <p className="text-gray-600 mb-4">
                  Grondige <strong>schoorsteen inspectie</strong> door ervaren <strong>schoorsteenvegers</strong>. Veiligheidscontrole en technische keuring van rookkanaal en constructie.
                </p>
                <Link href="/totaal-schoorsteen-specialist/schoorsteen-inspectie" className="text-tbgs-blue font-semibold hover:text-blue-700 transition-colors cursor-pointer">
                  Lees meer over schoorsteen inspectie →
                </Link>
              </div>
            </div>

            {/* Schoorsteen Renovatie Article */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <i className="fas fa-hammer text-white text-6xl"></i>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">Renovatie</span>
                  <span className="text-gray-500 text-sm">8 min lezen</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Schoorsteen Renovatie</h3>
                <p className="text-gray-600 mb-4">
                  Complete <strong>schoorsteen renovatie</strong> door vakkundige <strong>schoorsteenvegers</strong>. Modernisering van oude schoorstenen met duurzame materialen.
                </p>
                <Link href="/totaal-schoorsteen-specialist/schoorsteen-renovatie" className="text-tbgs-blue font-semibold hover:text-blue-700 transition-colors cursor-pointer">
                  Lees meer over schoorsteen renovatie →
                </Link>
              </div>
            </div>

            {/* Schoorsteen Verwijderen Article */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <i className="fas fa-trash text-white text-6xl"></i>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">Sloop</span>
                  <span className="text-gray-500 text-sm">7 min lezen</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Schoorsteen Verwijderen</h3>
                <p className="text-gray-600 mb-4">
                  Veilige <strong>schoorsteen verwijdering</strong> door ervaren <strong>schoorsteenvegers</strong>. Professionele sloop met dakwerk herstel en opruiming.
                </p>
                <div className="text-tbgs-blue font-semibold hover:text-blue-700 transition-colors cursor-pointer">
                  Lees meer over schoorsteen verwijderen →
                </div>
              </div>
            </div>

            {/* Schoorsteen Voegen/Repareren Article */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                <i className="fas fa-tools text-white text-6xl"></i>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-semibold">Reparatie</span>
                  <span className="text-gray-500 text-sm">6 min lezen</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Schoorsteen Voegen/Repareren</h3>
                <p className="text-gray-600 mb-4">
                  Professionele <strong>schoorsteen reparatie</strong> door vakkundige <strong>schoorsteenvegers</strong>. Voegwerk, schoorsteenkap reparatie en noodservice.
                </p>
                <div className="text-tbgs-blue font-semibold hover:text-blue-700 transition-colors cursor-pointer">
                  Lees meer over schoorsteen repareren →
                </div>
              </div>
            </div>

            {/* Schoorsteen Onderhoud Article */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                <i className="fas fa-cog text-white text-6xl"></i>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-semibold">Service</span>
                  <span className="text-gray-500 text-sm">5 min lezen</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Schoorsteen Onderhoud</h3>
                <p className="text-gray-600 mb-4">
                  Regelmatig <strong>schoorsteen onderhoud</strong> door gecertificeerde <strong>schoorsteenvegers</strong>. Preventief onderhoud voorkomt dure reparaties.
                </p>
                <div className="text-tbgs-blue font-semibold hover:text-blue-700 transition-colors cursor-pointer">
                  Lees meer over schoorsteen onderhoud →
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={onOpenContactModal}
              className="bg-tbgs-blue text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              <i className="fas fa-envelope mr-3"></i>
              Vraag advies aan onze schoorsteenexperts
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-tbgs-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Problemen met Uw Schoorsteen?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Neem direct contact op met onze gecertificeerde schoorsteenspecialisten. 
              Voor spoedgevallen zijn wij 24/7 bereikbaar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onOpenContactModal}
                className="bg-white text-tbgs-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Calculator className="w-5 h-5 mr-3 fill-current stroke-current" />
                Gratis Schoorsteen offerte
              </button>
              <a 
                href="tel:+31402026744"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-tbgs-blue transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-3 fill-current stroke-current" />
                Spoedservice 24/7
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
