import { useEffect } from "react";
import SEOHead from "@/lib/seo";
import { ShieldCheck, Users, Calendar, ArrowRight } from "lucide-react";

interface OverOnsProps {
  onOpenContactModal: () => void;
}

export default function OverOns({ onOpenContactModal }: OverOnsProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "Waarom kiezen voor TBGS als bouwspecialist?",
      answer: "TBGS combineert 80 jaar ervaring met moderne technieken. Wij voorkomen problemen voordat ze ontstaan door onze preventieve aanpak. Met 4 gespecialiseerde teams onder één dak krijgt u complete ontzorging van offerte tot nazorg."
    },
    {
      question: "Wat maakt TBGS anders dan andere bouwbedrijven?",
      answer: "Ons familiebedrijf bestaat al 4 generaties. Door jarenlange ervaring herkennen wij direct zwakke plekken en voorkomen kostbare noodreparaties. Lokale kennis in Nederland en België zorgt voor snelle service en persoonlijke aanpak."
    },
    {
      question: "In welke gebieden is TBGS actief?",
      answer: "Wij bedienen Noord-Brabant (Eindhoven, Nuenen, Veldhoven, Best) en Belgisch Limburg (Retie, Lommel, Hamont-Achel). Binnen deze regio's bieden wij snelle service en gratis inspecties binnen 24 uur."
    },
    {
      question: "Welke diensten biedt TBGS?",
      answer: "Onze 4 specialisten dekken alles af: TDS (dakwerken), TSS (schoorstenen), TOS (preventief onderhoud) en TBS (algemene bouw). Van daklekkage tot complete renovaties - wij verzorgen het allemaal onder één dak."
    },
    {
      question: "Waarom investeren in preventief onderhoud?",
      answer: "Preventie voorkomt duizenden euro's aan noodreparaties. Door regelmatige controles spotten wij problemen vroeg en houden uw woning in optimale staat. Onze gratis inspecties tonen direct wat aandacht nodig heeft."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Over TBGS BV - 80 Jaar Familiebedrijf | Dakspecialist Nederland België"
        description="Ontdek TBGS BV: 4 generaties vakmanschap sinds 1943. Preventieve dakspecialist in Nederland en België. Gratis inspectie binnen 24u. Lokale expertise, betrouwbare service."
        url="/over-ons"
        keywords="TBGS over ons, familiebedrijf 80 jaar, dakspecialist Nederland België, preventief onderhoud, 4 generaties vakmanschap, lokale bouwspecialist"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium text-slate-600 mb-8">
              <Users className="w-4 h-4" />
              <span>80 Jaar Familiebedrijf</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Van Overgrootvader tot <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">Kleinzoon</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-600 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
              Sinds 1943 gespecialiseerd in <strong>dakwerken en preventief onderhoud</strong> in Nederland en België. 4 generaties ervaring voorkomt duizenden euro's aan onnodige reparaties.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <div className="text-3xl font-bold text-tbgs-navy mb-2">1943</div>
                <div className="text-slate-600">Opgericht</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <div className="text-3xl font-bold text-tbgs-navy mb-2">4</div>
                <div className="text-slate-600">Generaties</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <div className="text-3xl font-bold text-tbgs-navy mb-2">80+</div>
                <div className="text-slate-600">Jaar Ervaring</div>
              </div>
            </div>

            <button 
              onClick={onOpenContactModal}
              className="bg-tbgs-navy text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Gratis Inspectie Plannen
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Veelgestelde <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">Vragen</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Ontdek waarom klanten al 80 jaar voor TBGS kiezen
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 flex items-start">
                    <span className="w-8 h-8 bg-tbgs-navy text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                      {index + 1}
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed ml-12">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Onze <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">Aanpak</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Preventie Eerst</h3>
                <p className="text-slate-700 leading-relaxed">
                  Gratis inspectie binnen 24u om problemen te herkennen voordat ze kostbaar worden. Voorkom duizenden euro's aan noodreparaties.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Lokale Expertise</h3>
                <p className="text-slate-700 leading-relaxed">
                  80 jaar kennis van klimaat en bouwvoorschriften in Nederland en België. Snelle service door korte reisafstanden binnen ~25km.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-handshake text-3xl text-purple-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Totale Ontzorging</h3>
                <p className="text-slate-700 leading-relaxed">
                  Eén aanspreekpunt voor alle bouwzaken. Van daklekkage tot complete renovatie - wij regelen alles van A tot Z onder één dak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-tbgs-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ervaar het Verschil van 80 Jaar Ervaring
            </h2>
            <p className="text-xl lg:text-2xl opacity-90 mb-12 leading-relaxed">
              Laat onze specialisten uw dak, schoorsteen of bouwproject gratis inspecteren. Binnen 24 uur weet u waar u aan toe bent.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={onOpenContactModal}
                className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Plan Gratis Inspectie
              </button>
              
              <a 
                href="https://wa.me/31614595142" 
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <i className="fab fa-whatsapp mr-3 text-xl"></i>
                Direct Contact
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}