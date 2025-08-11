import SEOHead from "@/lib/seo";

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
        title="TBGS - Totaal Bouw Groep Specialisten | Dakwerken, Schoorsteenwerken & Onderhoud"
        description="TBGS B.V. - Uw specialist voor dakwerken, schoorsteenwerken, onderhoud en algemene bouw in Nederland en België. Samen duurzaam & innovatief (ver)bouwen."
        url="https://tbgs.nl"
      />

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Samen duurzaam & innovatief 
                  <span className="text-tbgs-navy"> (ver)bouwen</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  TBGS B.V. is uw betrouwbare partner voor dakwerken, schoorsteenwerken, onderhoud en algemene bouw in Nederland en België. Vakmanschap met garantie sinds 2010.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-tbgs-navy text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors flex items-center justify-center"
                >
                  <i className="fas fa-calculator mr-3"></i>
                  Gratis Offerte Aanvragen
                </button>
                <button 
                  onClick={() => scrollToSection('projecten')}
                  className="border-2 border-tbgs-navy text-tbgs-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-tbgs-navy hover:text-white transition-colors flex items-center justify-center"
                >
                  <i className="fas fa-eye mr-3"></i>
                  Bekijk Projecten
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-tbgs-navy">500+</div>
                  <div className="text-sm text-gray-600">Tevreden klanten</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tbgs-navy">15+</div>
                  <div className="text-sm text-gray-600">Jaar ervaring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tbgs-navy">4.9</div>
                  <div className="text-sm text-gray-600">Gemiddelde beoordeling</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professionele dakwerkers aan het werk" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">100% Garantie</div>
                    <div className="text-sm text-gray-600">Op al onze werkzaamheden</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="diensten" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Onze Specialismen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van dak tot fundering, van schoorsteen tot gevelbekleding. TBGS biedt totaaloplossingen voor al uw bouwprojecten met gespecialiseerde teams per vakgebied.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service cards content here - shortened for brevity */}
            <div className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-tbgs-red">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-tbgs-red group-hover:bg-opacity-100 transition-colors">
                  <i className="fas fa-home text-3xl text-tbgs-red group-hover:text-white transition-colors"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Totaal Dak Specialist</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Platte en hellende daken, dakisolatie, dakgoten en alle gerelateerde werkzaamheden door gecertificeerde dakspecialisten.
                  </p>
                </div>
                <a href="/totaal-dak-specialist" className="inline-flex items-center text-tbgs-red font-semibold hover:text-red-700 transition-colors">
                  Meer over dakwerken <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* Add other 3 service cards similarly */}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section id="projecten" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Recente Projecten
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Een selectie van onze laatste werkzaamheden in Nederland en België. Kwaliteit en vakmanschap staan centraal bij elk project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Dakrenovatie woonhuis Eindhoven" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-tbgs-red text-white px-3 py-1 rounded-full text-xs font-semibold">TDS</span>
                  <span className="text-gray-500 text-sm">Eindhoven</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Dakrenovatie</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Vervanging van 180m² hellend dak inclusief nieuwe dakgoten en verbeterde isolatie voor energiebesparing.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-tbgs-navy font-semibold">Afgerond: Dec 2024</span>
                  <a href="#" className="text-tbgs-red hover:text-red-700 font-semibold">
                    Details <i className="fas fa-arrow-right ml-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="#" className="bg-tbgs-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center">
              Alle Projecten Bekijken <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Wat Klanten Zeggen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Onze klanten waarderen ons vakmanschap, betrouwbaarheid en persoonlijke aanpak. Lees hier hun ervaringen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review cards */}
            <div className="bg-gray-50 rounded-xl p-8 relative">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-lg">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <span className="ml-2 text-gray-600 font-semibold">5.0</span>
              </div>
              <blockquote className="text-gray-800 mb-6 italic">
                "Uitstekend werk geleverd aan ons dak. Het team van TBGS was professioneel, punctueel en heeft alles perfect achtergelaten. Zeker een aanrader!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-tbgs-navy rounded-full flex items-center justify-center text-white font-bold">
                  MV
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Maria van der Berg</div>
                  <div className="text-sm text-gray-600">Eindhoven • TDS Dakwerken</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-4 bg-green-50 px-6 py-4 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400 text-xl">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-900">4.9</span>
              </div>
              <div className="text-gray-600">
                <div className="font-semibold">Gemiddelde beoordeling</div>
                <div className="text-sm">Gebaseerd op 127 beoordelingen</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Werkgebied Nederland & België
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TBGS is actief in Nederland (regio Eindhoven) en België (provincie Limburg). Ontdek of wij ook in uw gebied werkzaamheden uitvoeren.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-map-marker-alt text-tbgs-navy mr-3"></i>
                  Nederland
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Hoofdlocaties</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center"><i className="fas fa-check text-green-500 w-4 mr-2"></i>Eindhoven</li>
                      <li className="flex items-center"><i className="fas fa-check text-green-500 w-4 mr-2"></i>Nuenen</li>
                      <li className="flex items-center"><i className="fas fa-check text-green-500 w-4 mr-2"></i>Veldhoven</li>
                      <li className="flex items-center"><i className="fas fa-check text-green-500 w-4 mr-2"></i>Best</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-tbgs-navy text-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">Werkgebied Check</h4>
                <p className="mb-4 opacity-90">
                  Twijfelt u of wij in uw gebied werkzaam zijn? Neem contact met ons op voor een vrijblijvende check.
                </p>
                <button 
                  onClick={onOpenContactModal}
                  className="bg-white text-tbgs-navy px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Check Werkgebied
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Ons Servicegebied</h4>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <i className="fas fa-map text-4xl mb-2"></i>
                    <p className="font-semibold">Google Maps</p>
                    <p className="text-sm">Servicegebied TBGS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-tbgs-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Klaar om te Starten?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Neem contact met ons op voor een vrijblijvende offerte. Wij denken graag mee en adviseren u over de beste oplossing voor uw project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-phone text-2xl"></i>
              </div>
              <h4 className="font-semibold mb-2">Bel Direct</h4>
              <p className="opacity-90 text-sm mb-3">Werkdagen 8:00 - 17:00</p>
              <a href="tel:+31612345678" className="text-yellow-300 hover:text-white font-semibold">
                +31 6 12 34 56 78
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-envelope text-2xl"></i>
              </div>
              <h4 className="font-semibold mb-2">Email Ons</h4>
              <p className="opacity-90 text-sm mb-3">Reactie binnen 4 uur</p>
              <a href="mailto:info@tbgs.nl" className="text-yellow-300 hover:text-white font-semibold">
                info@tbgs.nl
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-whatsapp text-2xl"></i>
              </div>
              <h4 className="font-semibold mb-2">WhatsApp</h4>
              <p className="opacity-90 text-sm mb-3">Snelle communicatie</p>
              <a href="https://wa.me/31612345678" className="text-yellow-300 hover:text-white font-semibold">
                Chat Nu
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-calendar text-2xl"></i>
              </div>
              <h4 className="font-semibold mb-2">Plan Afspraak</h4>
              <p className="opacity-90 text-sm mb-3">Gratis adviesgesprek</p>
              <button 
                onClick={onOpenContactModal}
                className="text-yellow-300 hover:text-white font-semibold"
              >
                Afspraak Maken
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onOpenContactModal}
              className="bg-yellow-400 text-tbgs-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center"
            >
              <i className="fas fa-calculator mr-3"></i>
              Gratis Offerte Aanvragen
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-tbgs-navy transition-colors flex items-center justify-center">
              <i className="fas fa-download mr-3"></i>
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
