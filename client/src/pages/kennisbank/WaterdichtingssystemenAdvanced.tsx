import SEOHead from "@/lib/seo";

export default function WaterdichtingssystemenAdvanced() {
  return (
    <>
      <SEOHead 
        title="Geavanceerde Waterdichtingssystemen 2025 | EPDM, TPO & Liquid Membranen | TBGS"
        description="Professionele waterdichtingsoplossingen: EPDM, TPO, liquid membranen, groendak systemen. TBGS 25+ jaar expertise in waterdichte dakconstructies Nederland & België."
        keywords="waterdichtingssystemen, EPDM dakbedekking, TPO membraan, liquid waterproofing, groendak waterproofing, TBGS specialist"
        image="/images/waterproofing-systems-banner.jpg"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/water-pattern.svg')] opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-medium mb-8">
                <i className="fas fa-shield-alt mr-3"></i>
                Waterdichte Bouwoplossingen
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
                Geavanceerde <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Waterdichtings</span>systemen
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed mb-12 font-light">
                TBGS implementeert <strong>state-of-the-art waterdichtingstechnologieën</strong> voor permanente bescherming tegen waterindringing. 25+ jaar expertise in complexe dakconstructies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-sm text-slate-600">Jaar garantie systemen</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">100%</div>
                  <div className="text-sm text-slate-600">Waterdichte garantie</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-slate-700 mb-2">24/7</div>
                  <div className="text-sm text-slate-600">Spoedreparatie service</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-slate-800 to-cyan-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Permanente <span className="text-cyan-300">Waterproofing</span> Oplossingen
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed mb-12">
                TBGS realiseert waterdichte daksystemen met jarenlange betrouwbaarheid. 
                Van platte daken tot complexe groendaken - altijd 100% waterdicht gegarandeerd.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="https://wa.me/31614595142?text=Hallo%20Team%20TBGS%2C%20ik%20ben%20ge%C3%AFnteresseerd%20in%20geavanceerde%20waterdichtingssystemen"
                  className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center"
                >
                  <i className="fab fa-whatsapp mr-3"></i>
                  Direct Contact Specialist
                </a>
                <button className="bg-transparent border-2 border-cyan-300 hover:bg-cyan-300 hover:text-slate-900 text-cyan-300 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <i className="fas fa-calendar-check mr-3"></i>
                  Plan Gratis Inspectie
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}