import { useEffect, useState } from "react";
import SEOHead from "@/lib/seo";

interface GratisInspectieProps {
  onOpenContactModal?: () => void;
}

export default function GratisInspectie({ onOpenContactModal }: GratisInspectieProps) {
  const [selectedInspectionType, setSelectedInspectionType] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const inspectionTypes = [
    {
      id: 'dak',
      title: 'Dakinspectie',
      icon: 'fas fa-home',
      color: 'tbgs-red',
      description: 'Complete controle van uw dakbedekking, goten en isolatie',
      includes: ['Visuele beoordeling dakbedekking', 'Controle dakgoten en afvoeren', 'Isolatie en ventilatie check', 'Rapport met aanbevelingen'],
      duration: '45-60 min',
      waarde: 'Uitgebreide analyse'
    },
    {
      id: 'schoorsteen',
      title: 'Schoorsteencontrole',
      icon: 'fas fa-industry',
      color: 'tbgs-blue',
      description: 'Veiligheidscontrole en functionele beoordeling van uw schoorsteen',
      includes: ['Rookgasafvoer controle', 'Structurele beoordeling', 'Veiligheidscheck ketelkoppeling', 'Adviesrapport met certificaat'],
      duration: '30-45 min',
      waarde: 'Veiligheidsrapport'
    },
    {
      id: 'onderhoud',
      title: 'Onderhoudscheck',
      icon: 'fas fa-tools',
      color: 'tbgs-green',
      description: 'Algemene controle op preventieve onderhoudspunten',
      includes: ['360° gebouwcontrole', 'Preventieve puntenlijst', 'Prioritering werkzaamheden', 'Onderhoudsplanning advies'],
      duration: '60-90 min',
      waarde: 'Onderhoudsplan'
    },
    {
      id: 'bouw',
      title: 'Bouwkundige Inspectie',
      icon: 'fas fa-hammer',
      color: 'tbgs-orange',
      description: 'Uitgebreide technische beoordeling van uw pand',
      includes: ['Structurele elementen controle', 'Gevelbeoordeling', 'Isolatie en vochtproblematiek', 'Renovatie-adviesrapport'],
      duration: '90-120 min',
      waarde: 'Bouwkundig rapport'
    }
  ];

  const benefits = [
    {
      icon: 'fas fa-euro-sign',
      title: 'Kostenbesparing',
      description: 'Problemen vroegtijdig opsporen bespaart aanzienlijke kosten aan noodreparaties'
    },
    {
      icon: 'fas fa-shield-check',
      title: 'Veiligheid',
      description: 'Identificeer veiligheidsproblemen voordat ze gevaarlijk worden'
    },
    {
      icon: 'fas fa-clock',
      title: 'Planbare Onderhoud',
      description: 'Werk op het juiste moment uitvoeren voor optimale resultaten'
    },
    {
      icon: 'fas fa-home',
      title: 'Waardebehoud',
      description: 'Houd uw woning of bedrijfspand in optimale staat'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEOHead 
        title="Gratis Inspectie Aanvragen - TBGS BV | Preventieve Controle Nederland & België"
        description="Vraag nu uw gratis inspectie aan bij TBGS BV. Professionele controle van dak, schoorsteen, onderhoud of bouwkundige staat. Voorkom kostbare reparaties met preventieve zorg. Service in Nederland en België."
        url="/gratis-inspectie"
        keywords="gratis inspectie, gratis dakinspectie, schoorsteencontrole gratis, preventieve inspectie, bouwkundige keuring, onderhoudscheck, TBGS gratis controle, dakcontrole Nederland België"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tbgs-navy/5 to-blue-600/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium text-slate-600 mb-8">
              <i className="fas fa-search"></i>
              <span>100% Gratis & Vrijblijvend</span>
            </div>
            
            <h1 className="text-4xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              Gratis <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">Inspectie</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-600 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
              <strong>Preventie loont</strong> - ontdek potentiële problemen voordat ze kostbaar worden. Onze experts voeren een <strong>grondige inspectie</strong> uit en geven u professioneel advies.
            </p>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-8 mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-green-500 rounded-3xl flex items-center justify-center">
                  <i className="fas fa-gift text-3xl text-white"></i>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Waarom Gratis?</h2>
              <p className="text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
                <strong>80% van alle bouwproblemen</strong> zijn te voorkomen met tijdige inspectie. Wij investeren in preventieve zorg omdat tevreden klanten onze beste reclame zijn.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-tbgs-navy mb-2">80+</div>
                <div className="text-slate-600 text-sm">Jaar ervaring</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-tbgs-navy mb-2">2000+</div>
                <div className="text-slate-600 text-sm">Inspecties uitgevoerd</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-tbgs-navy mb-2">€1000+</div>
                <div className="text-slate-600 text-sm">Gem. besparing per klant</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-tbgs-navy mb-2">100%</div>
                <div className="text-slate-600 text-sm">Vrijblijvend</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspection Types */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Kies Uw <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">Inspectie Type</span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              Elke inspectie wordt uitgevoerd door een <strong>gecertificeerde specialist</strong> en u ontvangt een <strong>uitgebreid rapport</strong> met concrete aanbevelingen.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {inspectionTypes.map((inspection) => (
              <div 
                key={inspection.id} 
                className={`bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer ${
                  selectedInspectionType === inspection.id 
                    ? `border-${inspection.color} bg-gradient-to-br from-${inspection.color}/5 to-${inspection.color}/10` 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
                onClick={() => setSelectedInspectionType(inspection.id)}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`w-16 h-16 bg-${inspection.color}/10 rounded-2xl flex items-center justify-center mr-6`}>
                      <i className={`${inspection.icon} text-2xl text-${inspection.color}`}></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{inspection.title}</h3>
                      <p className="text-slate-600">{inspection.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600 mb-1">GRATIS</div>
                    <div className="text-sm text-slate-500">Waarde: {inspection.waarde}</div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Inclusief:</h4>
                    <ul className="space-y-2">
                      {inspection.includes.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <i className={`fas fa-check text-${inspection.color} w-4 mr-3 mt-1 flex-shrink-0`}></i>
                          <span className="text-slate-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Details:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <i className="fas fa-clock text-slate-400 w-4 mr-3"></i>
                        <span className="text-slate-700 text-sm">Duur: {inspection.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-user-tie text-slate-400 w-4 mr-3"></i>
                        <span className="text-slate-700 text-sm">Door specialist</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-file-alt text-slate-400 w-4 mr-3"></i>
                        <span className="text-slate-700 text-sm">Schriftelijk rapport</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenContactModal?.();
                  }}
                  className={`w-full bg-${inspection.color} text-white px-6 py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
                >
                  <i className="fas fa-calendar-plus mr-3"></i>
                  {inspection.title} Aanvragen
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Waarom <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">Preventieve Inspectie</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-tbgs-navy to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className={`${benefit.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Case Study */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12 border-2 border-green-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-green-500 text-white rounded-full px-4 py-2 text-sm font-bold mb-6">
                  <i className="fas fa-lightbulb"></i>
                  <span>Voorbeeld uit de Praktijk</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">€12.000 Besparing door Preventieve Inspectie</h3>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  <strong>Klant uit Eindhoven</strong> - Bij een gratis dakinspectie ontdekten wij een kleine lekkage die nog niet zichtbaar was van binnen. 
                  Door direct actie te ondernemen voorkwamen we een volledige dakrenovatie.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">€450</div>
                    <div className="text-sm text-slate-600">Kosten preventieve reparatie</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600 mb-2">€12.450</div>
                    <div className="text-sm text-slate-600">Kosten volledige renovatie</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="TBGS preventieve dakinspectie bespaart duizenden euro's"
                  className="w-full rounded-2xl shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-xl font-bold">
                  <i className="fas fa-check-circle mr-2"></i>
                  Probleem Voorkomen
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Hoe Werkt <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">Het?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              Van aanvraag tot rapport - in <strong>5 eenvoudige stappen</strong> naar volledige duidelijkheid over de staat van uw pand.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {[
                {
                  step: '1',
                  title: 'Aanvraag',
                  description: 'Vul het formulier in of bel direct. Binnen 2 uur nemen wij contact op.',
                  icon: 'fas fa-phone'
                },
                {
                  step: '2', 
                  title: 'Afspraak',
                  description: 'Plan een inspectie op een moment dat u uitkomt. Ook avond en weekend mogelijk.',
                  icon: 'fas fa-calendar'
                },
                {
                  step: '3',
                  title: 'Inspectie',
                  description: 'Onze specialist voert een grondige inspectie uit en legt alles uit.',
                  icon: 'fas fa-search'
                },
                {
                  step: '4',
                  title: 'Rapport',
                  description: 'Binnen 24 uur ontvangt u een uitgebreid rapport met foto\'s en advies.',
                  icon: 'fas fa-file-alt'
                },
                {
                  step: '5',
                  title: 'Advies',
                  description: 'Persoonlijke toelichting van het rapport en beantwoording van al uw vragen.',
                  icon: 'fas fa-handshake'
                }
              ].map((processStep, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-tbgs-navy to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <i className={`${processStep.icon} text-2xl text-white`}></i>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {processStep.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{processStep.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{processStep.description}</p>
                  
                  {index < 4 && (
                    <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-tbgs-navy to-blue-600"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-tbgs-navy via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Start Vandaag met <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Preventie</span>
            </h2>
            <p className="text-xl lg:text-2xl font-light leading-relaxed mb-12 opacity-90">
              <strong>Wachten kost geld</strong> - elke dag uitstel kan een klein probleem groter maken. Plan nu uw gratis inspectie.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-phone text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Bel Direct</h3>
                <p className="opacity-90 mb-4">Voor snelle afspraak</p>
                <a href="tel:+31402026744" className="text-2xl font-bold text-yellow-400">
                  040 202 6744
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-calendar-plus text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Online Afspraak</h3>
                <p className="opacity-90 mb-4">Kies zelf tijd en datum</p>
                <button 
                  onClick={onOpenContactModal}
                  className="bg-yellow-400 text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-yellow-500 transition-colors"
                >
                  Plan Inspectie
                </button>
              </div>
            </div>

            <div className="bg-green-500/20 border border-green-500/30 rounded-2xl p-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <i className="fas fa-clock text-green-400 text-2xl"></i>
                <span className="text-2xl font-bold">Actie Deze Week</span>
              </div>
              <p className="text-lg">
                <strong>Gratis inspectie + 10% korting</strong> op eventuele werkzaamheden binnen 30 dagen
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}