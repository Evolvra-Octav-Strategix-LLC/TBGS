import TOSArticleTemplate from "@/components/templates/TOSArticleTemplate";

interface OnderhoudHoutDakProps {
  onOpenContactModal: () => void;
}

export default function OnderhoudHoutDak({ onOpenContactModal }: OnderhoudHoutDakProps) {
  const processSteps = [
    {
      title: "Hout Inspectie",
      description: "Grondige controle van houten dakconstructie op schade, aantasting en slijtage."
    },
    {
      title: "Behandeling Planning", 
      description: "Opstellen behandelingsplan voor houtbescherming en noodzakelijke reparaties."
    },
    {
      title: "Hout Behandeling",
      description: "Professionele behandeling van hout tegen weer, insecten en schimmel."
    },
    {
      title: "Preventief Programma",
      description: "Opzetten van preventief onderhoudsprogramma voor langdurige houtbescherming."
    }
  ];

  const houtServices = [
    "Hout inspectie - Grondige controle van houten dakconstructie elementen",
    "Houtbescherming - Behandeling tegen weer, insecten en schimmelvorming", 
    "Dakspanten onderhoud - Onderhoud van houten dakspanten en balken",
    "Houten dakconstructie - Complete zorg voor houten dakstructuren",
    "Preventieve behandeling - Regelmatige bescherming tegen aantasting",
    "Reparatie houtwerk - Vakkundige reparatie van beschadigd houtwerk",
    "Schilderwerk hout - Beschermende coating en afwerking houtwerk",
    "Onderhoudsabonnement - Preventief houtonderhoud volgens planning"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven hout onderhoud",
      "Amsterdam dakconstructie", 
      "Rotterdam houtwerk",
      "Den Haag onderhoud",
      "Utrecht hout",
      "Tilburg dakconstructie",
      "Breda houtwerk",
      "'s-Hertogenbosch"
    ],
    belgium: [
      "Antwerpen hout onderhoud",
      "Brussel dakconstructie",
      "Gent houtwerk", 
      "Leuven onderhoud",
      "Mechelen hout",
      "Turnhout dakconstructie",
      "Hasselt houtwerk",
      "Genk onderhoud"
    ]
  };

  const faqs = [
    {
      question: "Waarom is onderhoud van hout in het dak belangrijk?",
      answer: "Hout in dakconstructies is kwetsbaar voor weer, insecten en schimmel. Preventief onderhoud voorkomt structurele schade en behoudt sterkte van uw dak."
    },
    {
      question: "Hoe vaak heeft houtwerk in het dak onderhoud nodig?",
      answer: "Afhankelijk van houtsoort en blootstelling adviseren wij elke 3-5 jaar behandeling. Jaarlijkse inspectie detecteert vroeg eventuele problemen."
    },
    {
      question: "Welke behandelingen gebruikt u voor houtbescherming?",
      answer: "Wij gebruiken professionele houtbeschermingsmiddelen tegen insecten, schimmel en weersinvloeden. Behandeling wordt afgestemd op houtsoort en toepassing."
    },
    {
      question: "Kan houtonderhoud in het onderhoudsabonnement?",
      answer: "Ja, houtonderhoud past perfect in uw maatwerk abonnement. Samenstel uw pakket met dakgoot, ramen en andere onderhoudsdiensten."
    }
  ];

  const sections = [
    {
      title: "Hout Onderhoud Services",
      content: "",
      items: houtServices,
      icon: "fas fa-list"
    },
    {
      title: "Onderhoud Hout in het Dak",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>Hout onderhoud</strong> in dakconstructies is cruciaal voor behoud van structurele integriteit en levensduur van uw dak. Houten elementen zijn kwetsbaar voor weersinvloeden, insectenaantasting en schimmelvorming.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Onze specialisten bieden preventief <strong>houtonderhoud</strong> met professionele behandelingen tegen alle vormen van aantasting. Dit voorkomt kostbare vervanging van dakspanten en andere houten constructie-elementen.
        </p>
        
        <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-tree text-green-600 mr-3"></i>
            Houtbescherming Voordelen
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Behoud structurele integriteit</li>
            <li>• Preventie van insectenaantasting</li>
            <li>• Bescherming tegen schimmelvorming</li>
            <li>• Langere levensduur houtwerk</li>
            <li>• Voorkom kostbare vervanging</li>
          </ul>
        </div>
      `,
      icon: "fas fa-tree"
    }
  ];

  const mainContent = `
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Onderhoud Hout in het Dak</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Professioneel <strong>hout onderhoud</strong> voor dakconstructies door ervaren specialisten. Bescherming tegen weer, insecten en schimmel met preventieve behandelingen.
    </p>
  `;

  return (
    <TOSArticleTemplate
      title="Onderhoud Hout Dak 2025 | Houtbescherming | Onderhoudsabonnement | Nederland & België"
      description="🏠 Hout onderhoud dak 2025! ✅ Houtbescherming, dakspanten onderhoud, preventieve behandeling, abonnement - Nederland & België!"
      url="https://tbgs.nl/totaal-onderhoud-specialist/onderhoud-hout-dak"
      heroTitle="Onderhoud hout in het dak"
      heroSubtitle="Professionele houtbescherming voor dakconstructies. Preventieve behandeling tegen weer, insecten en schimmelvorming."
      heroDescription="Behoud de structurele integriteit van uw dak met vakkundig houtonderhoud. Maatwerk abonnement voor continue bescherming."
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Professioneel onderhoud van hout in dakconstructie"
      urgencyText="Preventief Programma"
      statsConfig={{
        stat1: { number: "3-5 jaar", text: "Behandeling" },
        stat2: { number: "100%", text: "Beschermd" },
        stat3: { number: "Preventief", text: "Onderhoud" }
      }}
      mainContent={mainContent}
      sections={sections}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Klaar voor Hout Onderhoud?"
      ctaDescription="Bescherm uw houten dakconstructie met professioneel onderhoud. Voorkom kostbare schade met preventieve behandeling."
      primaryButtonText="Houtonderhoud Plannen"
      secondaryButtonText="Specialist Bellen"
      onOpenContactModal={onOpenContactModal}
    />
  );
}