import SEOHead from "@/lib/seo";

export default function SmartBuildingIntegration() {
  return (
    <>
      <SEOHead 
        title="Smart Building Integration 2025 | IoT Dakmonitoring & Intelligente Bouw | TBGS"
        description="Geavanceerde smart building technologieën: IoT dakmonitoring, intelligente ventilatie, automatisering. TBGS integreert slimme systemen in moderne bouwprojecten."
        keywords="smart building, IoT dakmonitoring, intelligente bouw, gebouwautomatisering, slimme ventilatie, TBGS technologie"
        url="/kennisbank/smart-building-integration"
        image="/images/smart-building-banner.jpg"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/tech-pattern.svg')] opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-purple-100 text-purple-700 px-6 py-3 rounded-full font-medium mb-8">
                <i className="fas fa-microchip mr-3"></i>
                Intelligente Bouwtechnologie
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
                Smart <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Building</span> Integratie
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed mb-12 font-light">
                TBGS integreert <strong>cutting-edge IoT-technologieën</strong> in moderne dakconstructies. Van intelligente monitoring tot automatische onderhoudssystemen.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-sm text-slate-600">Real-time monitoring</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">40%</div>
                  <div className="text-sm text-slate-600">Energiebesparing door AI</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-sm text-slate-600">Jaar technologie ervaring</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IoT Monitoring Systems */}
        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  IoT <span className="text-purple-600">Dakmonitoring</span> Systemen
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  Geavanceerde sensornetwerken voor proactief dakonderhoud en optimale prestaties.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                {/* Sensor Network */}
                <div className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 shadow-xl border border-purple-100">
                  <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
                    <i className="fas fa-satellite-dish text-white text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Sensornetwerk</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Draadloze sensoren monitoren temperatuur, vochtigheid, waterindringing 
                    en dakintegriteit in real-time.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-slate-700">
                      <i className="fas fa-check text-purple-500 mr-3"></i>
                      <span><strong>Detectie:</strong> Waterlekkage binnen 5 minuten</span>
                    </div>
                    <div className="flex items-center text-slate-700">
                      <i className="fas fa-check text-purple-500 mr-3"></i>
                      <span><strong>Batterij:</strong> 5+ jaar levensduur</span>
                    </div>
                    <div className="flex items-center text-slate-700">
                      <i className="fas fa-check text-purple-500 mr-3"></i>
                      <span><strong>Bereik:</strong> LoRaWAN connectiviteit</span>
                    </div>
                  </div>
                </div>

                {/* AI Analytics */}
                <div className="bg-gradient-to-br from-white to-cyan-50 rounded-3xl p-8 shadow-xl border border-cyan-100">
                  <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                    <i className="fas fa-brain text-white text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">AI-Analyse Platform</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Machine learning algoritmes voorspellen onderhoudsbehoefte 
                    en optimaliseren energieprestaties automatisch.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-slate-700">
                      <i className="fas fa-check text-cyan-500 mr-3"></i>
                      <span><strong>Predictive:</strong> 90% nauwkeurigheid</span>
                    </div>
                    <div className="flex items-center text-slate-700">
                      <i className="fas fa-check text-cyan-500 mr-3"></i>
                      <span><strong>Automatisering:</strong> Zelflerende systemen</span>
                    </div>
                    <div className="flex items-center text-slate-700">
                      <i className="fas fa-check text-cyan-500 mr-3"></i>
                      <span><strong>Rapportage:</strong> Real-time dashboards</span>
                    </div>
                  </div>
                </div>

                {/* Mobile Control */}
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-xl border border-blue-100">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                    <i className="fas fa-mobile-alt text-white text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Mobiele Bediening</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Volledige controle via smartphone app. Push notificaties, 
                    remote monitoring en direct contact met specialisten.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-slate-700">
                      <i className="fas fa-check text-blue-500 mr-3"></i>
                      <span><strong>App:</strong> iOS & Android native</span>
                    </div>
                    <div className="flex items-center text-slate-700">
                      <i className="fas fa-check text-blue-500 mr-3"></i>
                      <span><strong>Alerts:</strong> Push & email notificaties</span>
                    </div>
                    <div className="flex items-center text-slate-700">
                      <i className="fas fa-check text-blue-500 mr-3"></i>
                      <span><strong>Support:</strong> Direct lijntje specialisten</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technology Integration */}
              <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white mb-20">
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-3xl lg:text-4xl font-bold mb-8">
                    Geavanceerde <span className="text-purple-400">Technologie</span> Stack
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-cloud text-2xl"></i>
                      </div>
                      <h4 className="text-lg font-semibold mb-3">Cloud Computing</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Microsoft Azure & AWS infrastructuur voor schaalbare data-opslag en -verwerking.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-network-wired text-2xl"></i>
                      </div>
                      <h4 className="text-lg font-semibold mb-3">Edge Computing</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Lokale dataverwerking voor real-time respons en verminderde latency.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-shield-alt text-2xl"></i>
                      </div>
                      <h4 className="text-lg font-semibold mb-3">Cybersecurity</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        End-to-end encryptie en blockchain-gebaseerde identity management.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-leaf text-2xl"></i>
                      </div>
                      <h4 className="text-lg font-semibold mb-3">Sustainability</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        CO2-neutrale datacenters en energiezuinige hardware componenten.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Automation Features */}
        <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  Intelligente <span className="text-purple-600">Automatisering</span>
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  Zelfregulerende systemen die zich aanpassen aan weersomstandigheden en gebruikspatronen.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    <i className="fas fa-fan text-purple-600 mr-4"></i>
                    Smart Ventilatie
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <i className="fas fa-check text-purple-600 text-sm"></i>
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">Adaptieve Luchtstroom</div>
                        <div className="text-slate-600 text-sm">Automatische aanpassing op basis van binnen- en buitentemperatuur</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <i className="fas fa-check text-purple-600 text-sm"></i>
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">CO2 Monitoring</div>
                        <div className="text-slate-600 text-sm">Realtime luchtkwaliteit monitoring en automatische ventilatie</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <i className="fas fa-check text-purple-600 text-sm"></i>
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">Energieoptimalisatie</div>
                        <div className="text-slate-600 text-sm">AI-gestuurde energiebesparing tot 35% op ventilatiekosten</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    <i className="fas fa-thermometer-half text-cyan-600 mr-4"></i>
                    Klimaatregeling
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <i className="fas fa-check text-cyan-600 text-sm"></i>
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">Zonale Regeling</div>
                        <div className="text-slate-600 text-sm">Individuele klimaatcontrole per ruimte of verdieping</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <i className="fas fa-check text-cyan-600 text-sm"></i>
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">Predictive Control</div>
                        <div className="text-slate-600 text-sm">Weersvoorspelling integratie voor proactieve regeling</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mr-4 mt-1">
                        <i className="fas fa-check text-cyan-600 text-sm"></i>
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">Gebruikersprofielen</div>
                        <div className="text-slate-600 text-sm">Zelflerend systeem past zich aan aan bewonersgedrag</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Integration Benefits */}
              <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-3xl p-8 lg:p-12 text-white">
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-3xl font-bold mb-8">Gemeten Resultaten bij Klanten</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-cyan-200 mb-2">42%</div>
                      <div className="text-sm text-purple-100">Energiebesparing gemiddeld</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-200 mb-2">85%</div>
                      <div className="text-sm text-purple-100">Vroege probleemdetectie</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-200 mb-2">67%</div>
                      <div className="text-sm text-purple-100">Minder onderhoudsstoringen</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2">€2.8K</div>
                      <div className="text-sm text-purple-100">Gemiddelde jaarlijkse besparing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  Implementatie <span className="text-purple-600">Proces</span>
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  TBGS hanteert een stapsgewijze aanpak voor naadloze smart building integratie.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-purple-100 group-hover:bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                    <i className="fas fa-search-plus text-2xl text-purple-600 group-hover:text-white transition-all duration-300"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Analyse & Design</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Technische audit, behoefteanalyse en customized smart building ontwerp 
                    specifiek voor uw gebouw.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-cyan-100 group-hover:bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                    <i className="fas fa-cogs text-2xl text-cyan-600 group-hover:text-white transition-all duration-300"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Hardware Installatie</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Professionele installatie van sensoren, controllers en 
                    communicatie-infrastructuur door gecertificeerde technici.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-blue-100 group-hover:bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                    <i className="fas fa-code text-2xl text-blue-600 group-hover:text-white transition-all duration-300"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">3. Software Integratie</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Custom software development, API integraties en 
                    dashboards specifiek afgestemd op uw bedrijfsprocessen.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-green-100 group-hover:bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                    <i className="fas fa-graduation-cap text-2xl text-green-600 group-hover:text-white transition-all duration-300"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">4. Training & Support</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Uitgebreide gebruikersscholing, documentatie en 
                    24/7 technische support voor optimaal gebruik.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Klaar voor <span className="text-purple-300">Slimme</span> Bouwoplossingen?
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-12">
                TBGS ontwikkelt custom smart building oplossingen die daadwerkelijk waarde toevoegen. 
                Van concept tot volledige implementatie - altijd met meetbare resultaten.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white bg-opacity-10 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-purple-300 mb-2">6-12</div>
                  <div className="text-sm text-slate-300">Maanden terugverdientijd</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-cyan-300 mb-2">24/7</div>
                  <div className="text-sm text-slate-300">Monitoring & ondersteuning</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-blue-300 mb-2">15+</div>
                  <div className="text-sm text-slate-300">Jaar technologie garantie</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="https://wa.me/31614595142?text=Hallo%20Team%20TBGS%2C%20ik%20ben%20ge%C3%AFnteresseerd%20in%20smart%20building%20technologie%C3%ABn"
                  className="bg-purple-500 hover:bg-purple-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center"
                >
                  <i className="fab fa-whatsapp mr-3"></i>
                  Technologie Consult
                </a>
                <button className="bg-transparent border-2 border-purple-300 hover:bg-purple-300 hover:text-slate-900 text-purple-300 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <i className="fas fa-calendar-alt mr-3"></i>
                  Plan Demo Sessie
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}