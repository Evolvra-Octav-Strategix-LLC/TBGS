import { useEffect } from "react";
import SEOHead from "@/lib/seo";

interface OverOnsProps {
  onOpenContactModal: () => void;
}

export default function OverOns({ onOpenContactModal }: OverOnsProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEOHead 
        title="Over TBGS BV - 80 Jaar Vakmanschap in Bouw & Renovatie | Nederland & België"
        description="Ontdek het verhaal van TBGS BV: 4 generaties vakmanschap sinds 1943. Specialist in dakwerk, schoorsteenservice, onderhoud en bouwprojecten in Nederland en België. Premium kwaliteit met preventieve aanpak."
        url="/over-ons"
        keywords="TBGS over ons, bouwbedrijf geschiedenis, 4 generaties vakmanschap, dakspecialist Nederland België, preventief onderhoud, familiebedrijf bouw, schoorsteenspecialist, onderhoudsspecialist"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tbgs-navy/5 to-blue-600/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium text-slate-600 mb-8">
              <i className="fas fa-users"></i>
              <span>Ons Verhaal</span>
            </div>
            
            <h1 className="text-4xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              Over <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">TBGS BV</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-600 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
              <strong>80 jaar vakmanschap</strong> doorgegevan van generatie op generatie. Van <strong>kleine dakreparaties</strong> tot <strong>complete bouwprojecten</strong> - TBGS staat voor kwaliteit, betrouwbaarheid en preventieve zorg.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-tbgs-navy mb-2">1943</div>
                <div className="text-slate-600">Opgericht</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-tbgs-navy mb-2">4</div>
                <div className="text-slate-600">Generaties</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-tbgs-navy mb-2">2000+</div>
                <div className="text-slate-600">Projecten</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-2 mb-8 inline-block">
                <div className="bg-white rounded-xl p-4">
                  <i className="fas fa-history text-3xl text-tbgs-navy"></i>
                </div>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Van Overgrootvader tot <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">Kleinzoon</span>
              </h2>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Het begon in <strong>1943 toen de eerste generatie van TBGS hun eerste dakpan legde</strong>. Het vakmanschap werd doorgegeven van generatie op generatie, van dak- en bouwwerken tot specialistische technieken.
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Vier generaties later hebben wij duizenden <strong>kostbare herstelprojecten</strong> uitgevoerd die eigenlijk voorkomen hadden kunnen worden. <strong>Preventie is onze kracht</strong> - met 80 jaar ervaring weten wij precies waar problemen ontstaan.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-tbgs-red rounded-full"></div>
                  <span className="text-slate-700"><strong>1943-1970:</strong> Traditioneel dakwerk en reparaties</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-tbgs-blue rounded-full"></div>
                  <span className="text-slate-700"><strong>1970-1995:</strong> Uitbreiding naar schoorsteenservice</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-tbgs-green rounded-full"></div>
                  <span className="text-slate-700"><strong>1995-2010:</strong> Preventief onderhoud toegevoegd</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-tbgs-orange rounded-full"></div>
                  <span className="text-slate-700"><strong>2010-heden:</strong> Totale bouwspecialist</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8 lg:p-12">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="TBGS familievakmanschap door 4 generaties - dakwerken en bouwprojecten sinds 1943"
                  className="w-full rounded-2xl shadow-xl"
                />
                <div className="mt-6 text-center">
                  <div className="text-2xl font-bold text-slate-900 mb-2">4 Generaties Ervaring</div>
                  <p className="text-slate-600">Van grootvader tot kleinzoon - vakmanschap in de genen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Specialists */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Onze <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">Specialisten</span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              TBGS heeft zich ontwikkeld tot een <strong>totaal ontzorgende organisatie</strong> met vier gespecialiseerde teams onder één dak.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* TDS - Totaal Dak Specialist */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-tbgs-red/10 rounded-2xl flex items-center justify-center mr-6">
                  <i className="fas fa-home text-2xl text-tbgs-red"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Totaal Dak Specialist</h3>
                  <p className="text-tbgs-red font-semibold">TDS</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-6">
                Complete <strong>dakrenovaties, reparaties en preventief onderhoud</strong>. Van kleine lekkages tot volledige nieuwbouw daken - inclusief isolatie, dakgoten en zonnepanelen integratie.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-3"></i>Dakrenovatie & nieuwbouw</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-3"></i>Daklekkage reparaties</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-3"></i>Preventieve dakinspecties</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-red w-4 mr-3"></i>Dakgoten & boeidelen</li>
              </ul>
            </div>

            {/* TSS - Totaal Schoorsteen Specialist */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-tbgs-blue/10 rounded-2xl flex items-center justify-center mr-6">
                  <i className="fas fa-industry text-2xl text-tbgs-blue"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Totaal Schoorsteen Specialist</h3>
                  <p className="text-tbgs-blue font-semibold">TSS</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-6">
                Specialistische <strong>schoorsteenservice, rookgasafvoer en ventilatie</strong>. Renovatie van historische schoorstenen tot moderne HR-ketel installaties.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-3"></i>Schoorsteenrenovatie</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-3"></i>Rookgasafvoer systemen</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-3"></i>Ventilatie oplossingen</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-blue w-4 mr-3"></i>Ketelkoppeling service</li>
              </ul>
            </div>

            {/* TOS - Totaal Onderhoud Specialist */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-tbgs-green/10 rounded-2xl flex items-center justify-center mr-6">
                  <i className="fas fa-tools text-2xl text-tbgs-green"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Totaal Onderhoud Specialist</h3>
                  <p className="text-tbgs-green font-semibold">TOS</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-6">
                <strong>Preventief onderhoud en reparatieservice</strong> voor woningen en bedrijfspanden. Wij voorkomen problemen voordat ze kostbaar worden.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-3"></i>Preventieve inspecties</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-3"></i>Onderhoudsprogramma's</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-3"></i>24/7 Noodservice</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-green w-4 mr-3"></i>Kleinreparaties</li>
              </ul>
            </div>

            {/* TBS - Totaal Bouw Specialist */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-tbgs-orange/10 rounded-2xl flex items-center justify-center mr-6">
                  <i className="fas fa-hammer text-2xl text-tbgs-orange"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Totaal Bouw Specialist</h3>
                  <p className="text-tbgs-orange font-semibold">TBS</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-6">
                <strong>Complete bouwprojecten en renovaties</strong>. Van aanbouwen tot gevelbekleding - wij realiseren uw droomproject van A tot Z.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-3"></i>Aanbouw & verbouw</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-3"></i>Gevelbekleding</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-3"></i>Badkamerrenovatie</li>
                <li className="flex items-center"><i className="fas fa-check text-tbgs-orange w-4 mr-3"></i>Keukenplaatsing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Onze <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">Kernwaarden</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-tbgs-navy to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-shield-check text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Preventie Eerst</h3>
              <p className="text-slate-600 leading-relaxed">Problemen voorkomen in plaats van achteraf oplossen - dat bespaart tijd, geld en zorgen.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-handshake text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Betrouwbaarheid</h3>
              <p className="text-slate-600 leading-relaxed">Afspraken nakomen, kwaliteit leveren en altijd bereikbaar zijn voor onze klanten.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-users-cog text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Vakmanschap</h3>
              <p className="text-slate-600 leading-relaxed">80 jaar ervaring gecombineerd met moderne technieken en voortdurende scholing.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-heart text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Persoonlijk</h3>
              <p className="text-slate-600 leading-relaxed">Elk project krijgt persoonlijke aandacht - van eerste contact tot nazorg.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Werkgebied <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">Nederland & België</span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              TBGS is actief in <strong>Nederland (regio Eindhoven)</strong> en <strong>België (provincie Limburg)</strong>. Lokale kennis, korte reistijd, persoonlijke service.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mr-4">
                  <i className="fas fa-map-marker-alt text-2xl text-orange-600"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Nederland</h3>
                  <p className="text-slate-600">Noord-Brabant & omstreken</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
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
              <div className="grid grid-cols-2 gap-6">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-tbgs-navy via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Klaar om met <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">TBGS</span> te Werken?
            </h2>
            <p className="text-xl lg:text-2xl font-light leading-relaxed mb-12 max-w-3xl mx-auto opacity-90">
              Ontdek waarom <strong>duizenden klanten</strong> voor TBGS kiezen. Van gratis inspectie tot volledige projectrealisatie.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={onOpenContactModal}
                className="bg-white text-tbgs-navy px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center"
              >
                <i className="fas fa-calendar-check mr-3"></i>
                Gratis Inspectie Aanvragen
              </button>
              
              <button 
                onClick={onOpenContactModal}
                className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-tbgs-navy transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center"
              >
                <i className="fas fa-phone mr-3"></i>
                Direct Contact
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}