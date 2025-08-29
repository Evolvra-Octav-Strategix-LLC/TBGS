import SEOHead from "@/lib/seo";

export default function DakisolatieTechnieken() {
  return (
    <>
      <SEOHead 
        title="Dakisolatie Technieken 2025 | Professionele Isolatiemethoden | TBGS Specialisten"
        description="Ontdek moderne dakisolatie technieken: PIR isolatie, spouwmuurisolatie, vakmanschap van TBGS. 25+ jaar ervaring in energiebesparende isolatieoplossingen voor Nederland en België."
        keywords="dakisolatie technieken, PIR isolatie, spouwmuurisolatie, energiebesparing, isolatie specialist, TBGS"
        image="/images/dakisolatie-technieken-banner.jpg"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-gradient-to-br from-green-50 via-blue-50 to-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-green-100 text-green-700 px-6 py-3 rounded-full font-medium mb-8">
                <i className="fas fa-leaf mr-3"></i>
                Energiebesparing & Duurzaamheid
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
                Moderne <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Dakisolatie</span> Technieken
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed mb-12 font-light">
                Professionele isolatieoplossingen voor <strong>maximale energiebesparing</strong> en <strong>wooncomfort</strong>. TBGS combineert 25+ jaar vakmanschap met de nieuwste isolatietechnologieën.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">35%</div>
                  <div className="text-sm text-slate-600">Energiebesparing gemiddeld</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">A+++</div>
                  <div className="text-sm text-slate-600">Energielabel verbetering</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-slate-700 mb-2">25+</div>
                  <div className="text-sm text-slate-600">Jaar expertise</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Isolation Techniques */}
        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  Geavanceerde <span className="text-green-600">Isolatietechnieken</span>
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  TBGS past de modernste isolatiemethoden toe voor optimale prestaties en duurzaamheid.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                {/* PIR Isolatie */}
                <div className="bg-gradient-to-br from-white to-green-50 rounded-3xl p-8 shadow-lg border border-green-100">
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                    <i className="fas fa-layer-group text-white text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">PIR Isolatieplaten</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Polyisocyanuraat (PIR) isolatie biedt de hoogste isolatiewaarde per centimeter dikte. 
                    Perfect voor ruimtebesparende oplossingen met uitstekende brandveiligheid.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-slate-700">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      <span><strong>Lambda-waarde:</strong> 0,022 W/mK</span>
                    </div>
                    <div className="flex items-center text-slate-700">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      <span><strong>Brandklasse:</strong> B-s1,d0 (Euroklasse)</span>
                    </div>
                    <div className="flex items-center text-slate-700">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      <span><strong>Toepassingen:</strong> Platte daken, hellende daken</span>
                    </div>
                  </div>
                </div>

                {/* Sprayfoam Isolatie */}
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-lg border border-blue-100">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                    <i className="fas fa-spray-can text-white text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Sprayfoam Isolatie</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Polyuretaan sprayfoam vult alle kieren en spleten volledig op. 
                    Ideaal voor complexe constructies en renovatieprojecten.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-slate-700">
                      <i className="fas fa-check text-blue-500 mr-3"></i>
                      <span><strong>Toepassingsdikte:</strong> 5-30 cm mogelijk</span>
                    </div>
                    <div className="flex items-center text-slate-700">
                      <i className="fas fa-check text-blue-500 mr-3"></i>
                      <span><strong>Voordeel:</strong> 100% luchtdicht systeem</span>
                    </div>
                    <div className="flex items-center text-slate-700">
                      <i className="fas fa-check text-blue-500 mr-3"></i>
                      <span><strong>Geschikt voor:</strong> Spouw, zolder, kruipruimte</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Advanced Applications */}
              <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white mb-20">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
                    Specialistische <span className="text-green-400">Toepassingen</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-building text-2xl"></i>
                      </div>
                      <h4 className="text-xl font-semibold mb-3">Kantoorgebouwen</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Geavanceerde isolatiesystemen voor commerciële projecten met focus op 
                        energieprestatie en binnenklimaat.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-home text-2xl"></i>
                      </div>
                      <h4 className="text-xl font-semibold mb-3">Woningrenovatie</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Isolatie-upgrading van bestaande woningen zonder verstoring 
                        van de bewoning tijdens werkzaamheden.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-industry text-2xl"></i>
                      </div>
                      <h4 className="text-xl font-semibold mb-3">Industriebouw</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Robuuste isolatieoplossingen voor industriële toepassingen 
                        met extreme temperatuurverschillen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  Technische <span className="text-blue-600">Specificaties</span>
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  Professionele isolatie vereist kennis van materiaalkarakteristieken en toepassingsgebieden.
                </p>
              </div>

              {/* Comparison Table */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Isolatiemateriaal</th>
                        <th className="px-6 py-4 text-center font-semibold">Lambda-waarde</th>
                        <th className="px-6 py-4 text-center font-semibold">Brandklasse</th>
                        <th className="px-6 py-4 text-center font-semibold">Vochtbestendig</th>
                        <th className="px-6 py-4 text-center font-semibold">Levensduur</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50">
                        <td className="px-6 py-4 font-medium text-slate-900">PIR Isolatieplaten</td>
                        <td className="px-6 py-4 text-center text-green-600 font-semibold">0,022</td>
                        <td className="px-6 py-4 text-center">B-s1,d0</td>
                        <td className="px-6 py-4 text-center">
                          <i className="fas fa-check text-green-500"></i>
                        </td>
                        <td className="px-6 py-4 text-center">50+ jaar</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="px-6 py-4 font-medium text-slate-900">Sprayfoam PUR</td>
                        <td className="px-6 py-4 text-center text-green-600 font-semibold">0,024</td>
                        <td className="px-6 py-4 text-center">E</td>
                        <td className="px-6 py-4 text-center">
                          <i className="fas fa-check text-green-500"></i>
                        </td>
                        <td className="px-6 py-4 text-center">40+ jaar</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="px-6 py-4 font-medium text-slate-900">Minerale Wol</td>
                        <td className="px-6 py-4 text-center text-blue-600 font-semibold">0,032</td>
                        <td className="px-6 py-4 text-center">A1</td>
                        <td className="px-6 py-4 text-center">
                          <i className="fas fa-times text-red-500"></i>
                        </td>
                        <td className="px-6 py-4 text-center">30+ jaar</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="px-6 py-4 font-medium text-slate-900">EPS Piepschuim</td>
                        <td className="px-6 py-4 text-center text-blue-600 font-semibold">0,030</td>
                        <td className="px-6 py-4 text-center">E</td>
                        <td className="px-6 py-4 text-center">
                          <i className="fas fa-times text-red-500"></i>
                        </td>
                        <td className="px-6 py-4 text-center">25+ jaar</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Expert Tip */}
              <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 lg:p-12 text-white">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center">
                      <i className="fas fa-lightbulb text-2xl"></i>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">TBGS Expert Tip</h3>
                    <p className="text-lg leading-relaxed mb-4">
                      <strong>Combinatie-isolatie</strong> levert de beste resultaten: PIR isolatie voor hoge R-waarde, 
                      gecombineerd met sprayfoam voor luchtdichtheid in moeilijke hoeken en naden.
                    </p>
                    <p className="text-base opacity-90">
                      Onze specialisten berekenen altijd de optimale combinatie voor uw specifieke situatie 
                      om maximale energiebesparing te realiseren.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  Professioneel <span className="text-green-600">Installatie</span> Proces
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  TBGS hanteert een systematische aanpak voor perfecte isolatieresultaten.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-green-100 group-hover:bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                    <i className="fas fa-search text-2xl text-green-600 group-hover:text-white transition-all duration-300"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Inspectie</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Grondige analyse van de constructie, koudebruggen en bestaande isolatie. 
                    Thermografisch onderzoek indien nodig.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-blue-100 group-hover:bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                    <i className="fas fa-drafting-compass text-2xl text-blue-600 group-hover:text-white transition-all duration-300"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Engineering</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Berekening isolatiewaarden, materiaalkeuze en detailtekeningen. 
                    Optimalisatie voor energieprestatie.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-yellow-100 group-hover:bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                    <i className="fas fa-tools text-2xl text-yellow-600 group-hover:text-white transition-all duration-300"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">3. Uitvoering</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Vakkundige installatie door gecertificeerde specialisten. 
                    Strikte kwaliteitscontrole tijdens alle werkfasen.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-purple-100 group-hover:bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                    <i className="fas fa-certificate text-2xl text-purple-600 group-hover:text-white transition-all duration-300"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">4. Certificering</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Eindcontrole en certificering volgens ISSO-normen. 
                    Garantie op materiaal en vakmanschap.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-24 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Start met <span className="text-green-400">Professionele</span> Dakisolatie
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-12">
                TBGS combineert 25+ jaar ervaring met de nieuwste isolatietechnologieën. 
                Vraag een gratis energieadvies aan en ontdek uw besparingsmogelijkheden.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white bg-opacity-10 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-green-400 mb-2">€1200+</div>
                  <div className="text-sm text-slate-300">Gemiddelde jaarlijkse besparing</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-blue-400 mb-2">15 jaar</div>
                  <div className="text-sm text-slate-300">Gemiddelde terugverdientijd</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
                  <div className="text-sm text-slate-300">Jaar garantie materialen</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="https://wa.me/31614595142?text=Hallo%20Team%20TBGS%2C%20ik%20ben%20ge%C3%AFnteresseerd%20in%20professionele%20dakisolatie"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center"
                >
                  <i className="fab fa-whatsapp mr-3"></i>
                  WhatsApp Specialist
                </a>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <i className="fas fa-calculator mr-3"></i>
                  Gratis Energieberekening
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}