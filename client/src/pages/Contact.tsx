import { useEffect, useState } from "react";
import SEOHead from "@/lib/seo";
import LocationCards from "@/components/LocationCards";
import SpecialistNavigationBar from "@/components/SpecialistNavigationBar";

interface ContactProps {
  onOpenContactModal: () => void;
}

export default function Contact({ onOpenContactModal }: ContactProps) {
  const [selectedService, setSelectedService] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { id: 'tds', name: 'Dakwerken', icon: 'fas fa-home', color: 'tbgs-red' },
    { id: 'tss', name: 'Schoorsteenwerken', icon: 'fas fa-industry', color: 'tbgs-blue' },
    { id: 'tos', name: 'Onderhoud', icon: 'fas fa-tools', color: 'tbgs-green' },
    { id: 'tbs', name: 'Bouwwerken', icon: 'fas fa-hammer', color: 'tbgs-orange' },
    { id: 'general', name: 'Algemene vraag', icon: 'fas fa-question-circle', color: 'slate-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEOHead 
        title="Contact TBGS BV - Gratis offerte & Inspectie Aanvragen | Nederland & België"
        description="Neem contact op met TBGS BV voor dakwerk, schoorsteenservice, onderhoud en bouwprojecten. Gratis offertes, snelle reactietijd. Telefoon, email en contactformulier beschikbaar. Service in Nederland en België."
        url="/contact"
        keywords="TBGS contact, gratis offerte aanvragen, dakspecialist contact, schoorsteenspecialist contact, bouwbedrijf contact Nederland België, gratis inspectie, telefoonnummer, email adres"
      />

      <SpecialistNavigationBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tbgs-navy/5 to-blue-600/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium text-slate-600 mb-8">
              <i className="fas fa-phone"></i>
              <span>Neem Contact Op</span>
            </div>
            
            <h1 className="text-4xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              Contact <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">TBGS BV</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-600 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
              <strong>Gratis offerte aanvragen?</strong> Vragen over uw project? Of direct een <strong>gratis inspectie</strong> inplannen? Wij staan klaar om u te helpen.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clock text-2xl text-green-600"></i>
                </div>
                <div className="font-bold text-slate-900 mb-2">Snelle Reactie</div>
                <div className="text-slate-600 text-sm">Binnen 24 uur contact</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-euro-sign text-2xl text-blue-600"></i>
                </div>
                <div className="font-bold text-slate-900 mb-2">Gratis offerte</div>
                <div className="text-slate-600 text-sm">Altijd vrijblijvend</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-search text-2xl text-purple-600"></i>
                </div>
                <div className="font-bold text-slate-900 mb-2">Gratis inspectie</div>
                <div className="text-slate-600 text-sm">Preventieve check</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-12 leading-tight">
                Direct <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">Contact</span>
              </h2>

              {/* Phone */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 mb-8 border-l-4 border-green-500">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <i className="fas fa-phone text-2xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Bel direct</h3>
                    <p className="text-slate-700 mb-4">Voor spoedeisende zaken en directe vragen</p>
                    <a 
                      href="tel:+31402026744" 
                      className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors"
                    >
                      040 202 6744
                    </a>
                    <p className="text-sm text-slate-600 mt-2">
                      <i className="fas fa-clock mr-2"></i>
                      Ma-Vr: 07:00-18:00 | Za: 08:00-16:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 mb-8 border-l-4 border-blue-500">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <i className="fas fa-envelope text-2xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Email</h3>
                    <p className="text-slate-700 mb-4">Voor uitgebreide vragen en documenten</p>
                    <a 
                      href="mailto:info@tbgs.nl" 
                      className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      info@tbgs.nl
                    </a>
                    <p className="text-sm text-slate-600 mt-2">
                      <i className="fas fa-reply mr-2"></i>
                      Reactie binnen 24 uur
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-8 mb-8 border-l-4 border-emerald-500">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <i className="fab fa-whatsapp text-2xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">WhatsApp</h3>
                    <p className="text-slate-700 mb-4">Snelle communicatie met foto's en berichten</p>
                    <a 
                      href="https://wa.me/31402026744" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      040 202 6744
                    </a>
                    <p className="text-sm text-slate-600 mt-2">
                      <i className="fas fa-camera mr-2"></i>
                      Stuur foto's van uw situatie
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 border-l-4 border-red-500">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <i className="fas fa-exclamation-triangle text-2xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">24/7 Noodservice</h3>
                    <p className="text-slate-700 mb-4">Voor acute lekkages en noodreparaties</p>
                    <a 
                      href="tel:+31402026744" 
                      className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors"
                    >
                      040 202 6744
                    </a>
                    <p className="text-sm text-slate-600 mt-2">
                      <i className="fas fa-clock mr-2"></i>
                      24 uur per dag beschikbaar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div>
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 lg:p-12 text-white sticky top-8">
                <h2 className="text-3xl font-bold mb-8">Snelle Offerte Aanvraag</h2>
                
                {/* Service Selection */}
                <div className="mb-6">
                  <label className="block text-lg font-semibold mb-4">Waar kunnen wij u mee helpen?</label>
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                          selectedService === service.id
                            ? 'border-white bg-white/20 shadow-lg'
                            : 'border-white/30 hover:border-white/60 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <i className={`${service.icon} text-lg`}></i>
                          <span className="font-medium text-sm">{service.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <button 
                    onClick={onOpenContactModal}
                    className="w-full bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <i className="fas fa-paper-plane mr-3"></i>
                    Gratis offerte Aanvragen
                  </button>

                  <button 
                    onClick={onOpenContactModal}
                    className="w-full bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <i className="fas fa-search mr-3"></i>
                    Gratis inspectie aanvragen
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold mb-1">&lt; 24u</div>
                      <div className="text-sm opacity-80">Reactietijd</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold mb-1">100%</div>
                      <div className="text-sm opacity-80">Vrijblijvend</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Veelgestelde <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">Vragen</span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              Krijg direct antwoord op de meest gestelde vragen over onze diensten en werkwijze.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Items */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Hoe snel kan TBGS ter plaatse zijn?</h3>
                <p className="text-slate-700 leading-relaxed">
                  Voor <strong>reguliere werkzaamheden</strong> plannen wij binnen 5-7 werkdagen een afspraak in. Voor <strong>spoedeisende reparaties</strong> zijn wij meestal dezelfde dag ter plaatse. In noodgevallen bieden wij 24/7 service.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Wat kost een gratis inspectie?</h3>
                <p className="text-slate-700 leading-relaxed">
                  Onze <strong>preventieve inspectie is altijd gratis</strong> en vrijblijvend. Wij komen naar uw locatie, beoordelen de situatie en geven een eerlijk advies. Alleen wanneer u voor reparatie of onderhoud kiest, berekenen wij kosten.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Werkt TBGS ook in België?</h3>
                <p className="text-slate-700 leading-relaxed">
                  Ja, wij zijn actief in <strong>provincie Limburg (België)</strong> met dezelfde kwaliteit en service als in Nederland. Onze specialisten kennen de lokale bouwvoorschriften en werken met gecertificeerde materialen.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Krijg ik garantie op het uitgevoerde werk?</h3>
                <p className="text-slate-700 leading-relaxed">
                  TBGS biedt <strong>garantie op alle uitgevoerde werkzaamheden</strong>. De garantieperiode varieert per type werk: 2 jaar op reparaties, 5-10 jaar op renovaties en tot 20 jaar op nieuwbouw daken (afhankelijk van materialen).
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Kunnen jullie ook kleine klussen aan?</h3>
                <p className="text-slate-700 leading-relaxed">
                  Absoluut! Van <strong>kleine daklekkages tot complete renovaties</strong> - geen klus is te klein of te groot. Onze Totaal Onderhoud Specialist (TOS) is gespecialiseerd in kleinere reparaties en preventief onderhoud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Ons <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">Werkgebied</span>
            </h2>
          </div>

          <LocationCards onOpenContactModal={onOpenContactModal} />
        </div>
      </section>
    </div>
  );
}