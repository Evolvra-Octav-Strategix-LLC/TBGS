import { useEffect, useState } from "react";
import SEOHead from "@/lib/seo";
import LocationCards from "@/components/LocationCards";
import { Phone, Clock, Euro, Search, Mail, Reply, Camera, AlertTriangle, Send, Home, Building, Wrench, Hammer, HelpCircle } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

// Icon mapping function to convert FontAwesome class names to Lucide icons
const renderIcon = (iconClass: string, className: string = "") => {
  const iconMap: { [key: string]: any } = {
    'fas fa-home': Home,
    'fas fa-industry': Building,
    'fas fa-tools': Wrench,
    'fas fa-hammer': Hammer,
    'fas fa-question-circle': HelpCircle,
    'fas fa-phone': Phone,
    'fas fa-clock': Clock,
    'fas fa-euro-sign': Euro,
    'fas fa-search': Search,
    'fas fa-envelope': Mail,
    'fas fa-reply': Reply,
    'fas fa-camera': Camera,
    'fas fa-exclamation-triangle': AlertTriangle,
    'fas fa-paper-plane': Send
  };
  
  const IconComponent = iconMap[iconClass];
  if (IconComponent) {
    return <IconComponent className={className} />;
  }
  return null;
};

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
        title="Contact TBGS BV - Dakspecialist Eindhoven | 040 202 6744 | Gratis Inspectie"
        description="▶ Contact TBGS BV ▶ Dakspecialist Eindhoven ▶ Gratis inspectie binnen 24u ▶ 80+ jaar ervaring ▶ VCA gecertificeerd ▶ 24/7 noodservice ▶ Nederland & België ▶ Telefoon: 040 202 6744"
        url="/contact"
        keywords="TBGS BV contact, dakspecialist Eindhoven, dakdekker contact, gratis inspectie, daklekkage specialist, schoorsteenspecialist, bouwbedrijf Brabant, 040 202 6744, VCA gecertificeerd, noodservice dak, contact formulier"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tbgs-navy/5 to-blue-600/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium text-slate-600 mb-8">
              <Phone className="w-5 h-5" />
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
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <div className="font-bold text-slate-900 mb-2">Snelle reactie</div>
                <div className="text-slate-600 text-sm">Binnen 24 uur contact</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Euro className="w-8 h-8 text-blue-600" />
                </div>
                <div className="font-bold text-slate-900 mb-2">Gratis offerte</div>
                <div className="text-slate-600 text-sm">Altijd vrijblijvend</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-purple-600" />
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
                    <Phone className="w-8 h-8 text-white" />
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
                      <Clock className="w-5 h-5 mr-2" />
                      Ma-Vr: 07:00-18:00 | Za: 08:00-16:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 mb-8 border-l-4 border-blue-500">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <Mail className="w-8 h-8 text-white" />
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
                      <Reply className="w-5 h-5 mr-2" />
                      Reactie binnen 24 uur
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-8 mb-8 border-l-4 border-emerald-500">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <WhatsAppIcon className="text-white" size={8} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">WhatsApp</h3>
                    <p className="text-slate-700 mb-4">Snelle communicatie met foto's en berichten</p>
                    <a 
                      href="https://wa.me/31614595142?text=Hallo%20Team%20TBGS%2C" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      040 202 6744
                    </a>
                    <p className="text-sm text-slate-600 mt-2">
                      <Camera className="w-5 h-5 mr-2" />
                      Stuur foto's van uw situatie
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 border-l-4 border-red-500">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <AlertTriangle className="w-8 h-8 text-white" />
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
                      <Clock className="w-5 h-5 mr-2" />
                      24 uur per dag beschikbaar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modern Contact Hub */}
            <div>
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 lg:p-12 text-white sticky top-8">
                <h2 className="text-3xl font-bold mb-8 text-center">Neem Direct Contact Op</h2>
                
                <div className="space-y-4">
                  {/* Primary Contact Button */}
                  <a 
                    href="tel:+31402026744" 
                    className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center"
                    data-testid="button-call-primary"
                  >
                    <Phone className="w-6 h-6 mr-3" />
                    040 202 6744
                    <span className="ml-2 text-sm opacity-90">(Direct bellen)</span>
                  </a>

                  {/* WhatsApp Contact */}
                  <a 
                    href="https://wa.me/31614595142?text=Hallo%20Team%20TBGS%2C"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center"
                    data-testid="button-whatsapp-contact"
                  >
                    <WhatsAppIcon className="mr-3" size={6} />
                    WhatsApp Chat
                    <span className="ml-2 text-sm opacity-90">(Met foto's)</span>
                  </a>

                  {/* Contact Form Modal */}
                  <button 
                    onClick={onOpenContactModal}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center"
                    data-testid="button-contact-form"
                  >
                    <Send className="w-6 h-6 mr-3" />
                    Verstuur Bericht
                    <span className="ml-2 text-sm opacity-90">(Online formulier)</span>
                  </button>

                  {/* Emergency Contact */}
                  <a 
                    href="tel:+31402026744" 
                    className="w-full bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center"
                    data-testid="button-emergency-contact"
                  >
                    <AlertTriangle className="w-5 h-5 mr-3" />
                    24/7 Noodservice
                  </a>
                </div>

                {/* Quick Response Promise */}
                <div className="mt-8 pt-6 border-t border-white/20 text-center">
                  <div className="flex items-center justify-center space-x-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">&lt; 2u</div>
                      <div className="text-xs opacity-80">Eerste reactie</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">100%</div>
                      <div className="text-xs opacity-80">Vrijblijvend</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">80+</div>
                      <div className="text-xs opacity-80">Jaar ervaring</div>
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

      {/* Authority & Expertise Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                Waarom <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">TBGS BV</span> Kiezen?
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
                Met meer dan 80 jaar ervaring in de bouw- en onderhoudssector bieden wij bewezen expertise en betrouwbaarheid.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-8">Gecertificeerde Vakmannen</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">VCA Gecertificeerd Team</h4>
                      <p className="text-slate-700">Al onze specialisten beschikken over VCA certificering voor veilig werken op hoogte en in risicovolle omgevingen.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📋</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Erkend Dakdekkersbedrijf</h4>
                      <p className="text-slate-700">Officieel erkend door brancheverenigingen en aangesloten bij Dakdekkers Nederland voor kwaliteitsgarantie.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">24/7 Noodservice</h4>
                      <p className="text-slate-700">Onze ervaren technikers staan 24 uur per dag klaar voor acute lekkages en noodreparaties in heel Brabant en België.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Ons Werkproces</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-tbgs-navy text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-bold text-slate-900">Gratis Inspectie</h4>
                      <p className="text-slate-600 text-sm">Binnen 24 uur een vrijblijvende beoordeling ter plaatse</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-tbgs-navy text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-bold text-slate-900">Transparante Offerte</h4>
                      <p className="text-slate-600 text-sm">Duidelijke kostenraming zonder verborgen kosten</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-tbgs-navy text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-bold text-slate-900">Professionele Uitvoering</h4>
                      <p className="text-slate-600 text-sm">Vakkundig werk met hoogwaardige materialen</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-tbgs-navy text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                    <div>
                      <h4 className="font-bold text-slate-900">Garantie & Service</h4>
                      <p className="text-slate-600 text-sm">Uitgebreide garantie en nazorg op alle werkzaamheden</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-green-50 rounded-2xl p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">2000+</div>
                <div className="text-slate-700 font-medium">Tevreden klanten</div>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">&lt; 2u</div>
                <div className="text-slate-700 font-medium">Reactietijd</div>
              </div>
              <div className="bg-purple-50 rounded-2xl p-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">80+</div>
                <div className="text-slate-700 font-medium">Jaar ervaring</div>
              </div>
              <div className="bg-orange-50 rounded-2xl p-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-slate-700 font-medium">Verzekerd werk</div>
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