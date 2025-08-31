import TDSArticleTemplate from "@/components/templates/TDSArticleTemplate";

interface DakbedekkingProps {
  onOpenContactModal: () => void;
}

export default function Dakbedekking({ onOpenContactModal }: DakbedekkingProps) {
  const processSteps = [
    {
      title: "Dakinspectie & Advies",
      description: "Grondige inspectie van huidige dakbedekking en advies over de meest geschikte materialen voor uw dak."
    },
    {
      title: "Materiaal & Ontwerp", 
      description: "Selectie van kwalitatieve dakbedekkingsmaterialen afgestemd op uw huis en eenheid met de woning."
    },
    {
      title: "Voorbereiding & Demontage",
      description: "Professionele demontage van oude dakbedekking en voorbereiding van de dakconstructie."
    },
    {
      title: "Professionele Installatie",
      description: "Vakkundige aanbrenging van nieuwe dakbedekking met bijkomende metsel- en timmerwerkzaamheden."
    }
  ];

  const dakbedekkingTypes = [
    "Bitumen dakbedekking - Duurzame bitumineuze dakbedekking voor platte daken",
    "EPDM dakbedekking - Rubber dakbedekking met 20+ jaar garantie", 
    "TRITOflex dakbedekking - Hoogwaardige kunststof dakbedekking",
    "Pannendak bedekking - Traditionele dakpannen in diverse materialen",
    "Leien dakbedekking - Natuursteen dakbedekking voor monumentale panden",
    "Zinken dakbedekking - Duurzame metalen dakbedekking",
    "Rietdak bedekking - Traditionele rieten dakbedekking",
    "Groendak bedekking - Extensieve en intensieve groendaken"
  ];

  const dakTypes = [
    "Vlak dak - Professionele dakbedekking voor vlakke daken",
    "Plat dak - Specialistische platte dak oplossingen",
    "Schuin dak - Hellende daken met pannenbedekking",
    "Terras dak - Beloopbare dakbedekkingen voor terrassen",
    "Patiodak - Dakbedekking voor patio's en buitenruimtes"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven dakbedekking",
      "Amsterdam dakdekker", 
      "Rotterdam dakwerken",
      "Den Haag bedekking",
      "Utrecht dakbedekking",
      "Tilburg dakdekker",
      "Breda dakwerken",
      "'s-Hertogenbosch"
    ],
    belgium: [
      "Antwerpen dakbedekking",
      "Brussel dakdekker",
      "Gent dakwerken", 
      "Leuven bedekking",
      "Mechelen dakbedekking",
      "Turnhout dakdekker",
      "Hasselt dakwerken",
      "Genk bedekking"
    ]
  };

  const faqs = [
    {
      question: "Welke dakbedekking is het beste voor mijn dak?",
      answer: "De keuze hangt af van daktype, budget en wensen. Voor platte daken adviseren wij EPDM of bitumen, voor hellende daken keramische dakpannen of natuurleien. Wij adviseren altijd maatwerk."
    },
    {
      question: "Hoe lang gaat dakbedekking mee?",
      answer: "Bitumen 15-20 jaar, EPDM 20-30 jaar, dakpannen 25-50 jaar. De levensduur hangt af van materiaal, kwaliteit installatie en onderhoud."
    },
    {
      question: "Wat kost nieuwe dakbedekking?",
      answer: "Wij bieden altijd gratis advies en transparante offertes. De keuze van materiaal bepalen wij samen op basis van uw wensen en daktype."
    },
    {
      question: "Kunnen jullie ook bijkomende werkzaamheden doen?",
      answer: "Ja, wij bieden alle expertise voor een compleet dak: metselwerk, timmerwerk, zinkwerk en isolatie. Alles uit één hand voor een kwalitatief resultaat."
    }
  ];

  const sections = [
    {
      title: "Dakbedekking Materialen",
      content: "",
      items: dakbedekkingTypes,
      icon: "fas fa-list"
    },
    {
      title: "Dakbedekking met Verschillende Materialen",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>Dakbedekking</strong> kunt u doen of laten doen met verschillende materialen zoals <strong>bitumen dakbedekking</strong>, <strong>EPDM dakbedekking</strong> en <strong>dakbedekking met TRITOflex</strong>. Elk materiaal heeft specifieke eigenschappen en toepassingen.
        </p>
        
        <div class="grid md:grid-cols-3 gap-6 mt-8">
          <div class="bg-white p-6 rounded-xl border text-center">
            <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-layer-group text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Bitumen</h3>
            <p class="text-gray-600">
              Bewezen dakbedekking voor platte daken 
              met 15-20 jaar levensduur.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl border text-center">
            <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-shield-alt text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">EPDM</h3>
            <p class="text-gray-600">
              Rubber dakbedekking met uitstekende 
              duurzaamheid tot 30 jaar.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl border text-center">
            <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-star text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">TRITOflex</h3>
            <p class="text-gray-600">
              Premium kunststof dakbedekking voor 
              maximale duurzaamheid.
            </p>
          </div>
        </div>
      `,
      icon: "fas fa-tools"
    },
    {
      title: "Dakbedekking in een Totaalpakket",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Uw <strong>dakbedekking</strong> is onlosmakelijk verbonden met de rest van uw woning. De <strong>dakbedekking</strong> moet afgestemd zijn op uw huis en daarmee een eenheid worden. Daarbij komen soms ook metsel- of timmerwerkzaamheden kijken.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Wij bieden al deze expertises die nodig zijn voor een kwalitatief goed dak. <strong>Dak bedekking</strong> voor een schuin dak is immers heel wat anders dan <strong>dakbedekking</strong> op een plat dak.
        </p>

        <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-home text-red-600 mr-3"></i>
            Daktypen die Wij Bedekken
          </h3>
          <div class="grid md:grid-cols-2 gap-4">
            <ul class="space-y-2 text-gray-700">
              <li>• Vlak dak - Moderne vlakke dakbedekkingen</li>
              <li>• Plat dak - Traditionele platte daken</li>
              <li>• Schuin dak - Hellende daken met pannen</li>
            </ul>
            <ul class="space-y-2 text-gray-700">
              <li>• Terras dak - Beloopbare dakterrassen</li>
              <li>• Patiodak - Dakbedekkingen voor patio's</li>
              <li>• Dakkapellen - Specifieke dakkapel bedekking</li>
            </ul>
          </div>
        </div>
      `,
      icon: "fas fa-home"
    },
    {
      title: "De Dakdekker is de Specialist",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>Dakbedekking</strong> is er in veel soorten materialen en technieken. U kunt uw <strong>dakbedekking</strong> onderhouden en laten repareren of vervangen. De bedekking van uw dak waarborgt beschutting tegen weersinvloeden.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          De <strong>dakdekker</strong> van TDS B.V. inspecteert uw dak en bekijkt welke opties voor uw <strong>dakwerken</strong> aan te bevelen zijn. En laat u de keuze. <strong>Dakbedekking</strong> is een vak, een expertise van de <strong>dakdekker</strong>.
        </p>

        <div class="bg-green-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-user-check text-red-600 mr-3"></i>
            Waarom Kiezen voor TDS Dakspecialisten?
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Gecertificeerde dakdekkers met jaren ervaring</li>
            <li>• Totaalpakket: metselwerk, timmerwerk en zinkwerk</li>
            <li>• Kwaliteit materialen van erkende leveranciers</li>
            <li>• Maatwerk oplossingen per daktype</li>
            <li>• Garantie op materiaal en vakmanschap</li>
            <li>• Gratis advies en vrijblijvende offerte</li>
          </ul>
        </div>
      `,
      icon: "fas fa-certificate"
    }
  ];

  const mainContent = `
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Dakbedekking - Kies Alleen voor Kwaliteit</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Een <strong>dakdekker</strong> die zijn vak verstaat. Niet alleen het dak, maar ook alle bijkomstige klussen neemt deze <strong>dakdekker</strong> voor zijn rekening. <strong>Dakwerken</strong> in alle soorten en materialen voor elke daktype.
    </p>
  `;

  return (
    <TDSArticleTemplate
      title="Dakbedekking 2025 | EPDM, Bitumen & TRITOflex | Dakdekker Nederland & België"
      description="🏠 Dakbedekking 2025! ✅ Professionele EPDM, bitumen & TRITOflex dakbedekking door ervaren dakdekkers. Totaalpakket met garantie - Nederland & België!"
      url="https://tbgs.nl/totaal-dak-specialist/dakbedekking"
      heroTitle="Dakbedekking"
      heroSubtitle="Professionele dakbedekking door ervaren dakdekkers. Van EPDM en bitumen tot TRITOflex - altijd de juiste dakbedekking voor uw daktype."
      heroDescription="Totaalpakket dakbedekking met bijkomende metsel- en timmerwerkzaamheden. Kwaliteit materialen en vakmanschap voor elke daktype."
      heroImage="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Professionele dakbedekking installatie door gecertificeerde dakdekker"
      urgencyText="Gratis Dakbedekking Advies"
      statsConfig={{
        stat1: { number: "30+", text: "Jaar garantie" },
        stat2: { number: "500+", text: "Daken bedekt" },
        stat3: { number: "100%", text: "Kwaliteit materiaal" }
      }}
      mainContent={mainContent}
      sections={sections}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Klaar voor Nieuwe Dakbedekking?"
      ctaDescription="Kies voor kwaliteit dakbedekking door ervaren dakdekkers. Wij adviseren u graag over de beste dakbedekking voor uw daktype."
      primaryButtonText="Gratis Dakbedekking Advies"
      secondaryButtonText="040-2026744 Bellen"
      onOpenContactModal={onOpenContactModal}
    />
  );
}