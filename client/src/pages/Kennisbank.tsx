import SEOHead from "@/lib/seo";

interface KennisbankProps {
  onOpenContactModal: () => void;
}

export default function Kennisbank({ onOpenContactModal }: KennisbankProps) {
  const knowledgeCategories = [
    {
      title: "Dakwerken",
      icon: "fas fa-home",
      color: "tbgs-red",
      articles: [
        "Wanneer moet u uw dak vervangen?",
        "Verschillende soorten dakbedekking",
        "Dakisolatie: wat zijn de opties?",
        "Dakgoot onderhoud en reparatie"
      ]
    },
    {
      title: "Schoorsteenwerken",
      icon: "fas fa-industry",
      color: "tbgs-blue",
      articles: [
        "Schoorsteen inspectie en onderhoud",
        "Wanneer heeft u een nieuwe schoorsteen nodig?",
        "Schoorsteenreparatie: veelvoorkomende problemen",
        "Regelgeving voor schoorsteenwerken"
      ]
    },
    {
      title: "Onderhoud",
      icon: "fas fa-tools",
      color: "tbgs-green",
      articles: [
        "Jaarlijks onderhoudsschema voor uw woning",
        "Vochtproblemen herkennen en oplossen",
        "Preventief onderhoud bespaart kosten",
        "Seizoensgebonden onderhoudsklussen"
      ]
    },
    {
      title: "Bouwwerken",
      icon: "fas fa-hammer",
      color: "tbgs-orange",
      articles: [
        "Verbouwingsvergunning: wanneer nodig?",
        "Budgetplanning voor verbouwingen",
        "Duurzame bouwmaterialen kiezen",
        "Bouwproces stap voor stap"
      ]
    }
  ];

  const faqItems = [
    {
      question: "Hoe vaak moet ik mijn dak laten inspecteren?",
      answer: "Wij adviseren een professionele dakinspectie minimaal eens per 2 jaar, en na elke zware storm of extreme weersomstandigheden."
    },
    {
      question: "Wat kost een gemiddelde dakvervanging?",
      answer: "De kosten variëren afhankelijk van dakgrootte, materiaal en complexiteit. Vraag een gratis offerte aan voor een nauwkeurige prijsindicatie."
    },
    {
      question: "Hoelang duurt een dakvervanging?",
      answer: "Een standaard dakvervanging duurt meestal 3-7 werkdagen, afhankelijk van de grootte en complexiteit van het project."
    },
    {
      question: "Bieden jullie garantie op uitgevoerde werkzaamheden?",
      answer: "Ja, wij bieden uitgebreide garantie op al onze werkzaamheden. De garantieperiode verschilt per type werk en wordt altijd duidelijk vermeld in de offerte."
    }
  ];

  return (
    <>
      <SEOHead
        title="Kennisbank - TBGS BV | Bouw en Onderhoud Informatie"
        description="Ontdek praktische tips en professioneel advies over dakwerken, schoorsteenonderhoud, bouwprojecten en woningonderhoud van TBGS BV specialisten."
        url="https://tbgs.nl/kennisbank"
        keywords="kennisbank, bouwadvies, dakwerken tips, onderhoud tips, TBGS BV, bouw informatie"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-tbgs-navy to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                TBGS BV Kennisbank
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Praktische tips en professioneel advies voor al uw bouw- en onderhoudsvragen
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={onOpenContactModal}
                  className="bg-white text-tbgs-navy px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Persoonlijk Advies Aanvragen
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Knowledge Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Kennisgebieden
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ontdek handige informatie georganiseerd per specialisme
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {knowledgeCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`${category.color} p-6 text-white text-center`}>
                    <i className={`${category.icon} text-3xl mb-4`}></i>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {category.articles.map((article, articleIndex) => (
                        <li key={articleIndex} className="flex items-start">
                          <i className="fas fa-chevron-right text-gray-400 text-sm mt-1 mr-3"></i>
                          <span className="text-gray-700 hover:text-tbgs-navy cursor-pointer transition-colors">
                            {article}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Veelgestelde Vragen
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Antwoorden op de meest gestelde vragen over onze diensten
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <i className="fas fa-question-circle text-tbgs-navy mr-3"></i>
                    {item.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed pl-8">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Praktische Tips
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Handige tips om uw woning in topconditie te houden
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center mb-4">
                  <i className="fas fa-calendar-check text-3xl text-tbgs-green mb-3"></i>
                  <h3 className="text-xl font-bold text-gray-900">Seizoenscontrole</h3>
                </div>
                <p className="text-gray-700 text-center">
                  Controleer voor en na de winter uw dak, goten en schoorsteen op beschadigingen.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center mb-4">
                  <i className="fas fa-shield-alt text-3xl text-tbgs-blue mb-3"></i>
                  <h3 className="text-xl font-bold text-gray-900">Preventief Onderhoud</h3>
                </div>
                <p className="text-gray-700 text-center">
                  Klein onderhoud voorkomt grote reparaties. Plan jaarlijks onderhoudswerk in.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center mb-4">
                  <i className="fas fa-user-check text-3xl text-tbgs-red mb-3"></i>
                  <h3 className="text-xl font-bold text-gray-900">Professionele Inspectie</h3>
                </div>
                <p className="text-gray-700 text-center">
                  Laat complexe zaken door specialisten beoordelen voor uw veiligheid.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-tbgs-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Heeft u een specifieke vraag?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Onze specialisten staan klaar om u persoonlijk te adviseren
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onOpenContactModal}
                className="bg-white text-tbgs-navy px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <i className="fas fa-comments mr-2"></i>
                Vraag Advies Aan
              </button>
              <a
                href="tel:+31612345678"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-tbgs-navy transition-colors"
              >
                <i className="fas fa-phone mr-2"></i>
                Bel Direct: +31 6 12 34 56 78
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}