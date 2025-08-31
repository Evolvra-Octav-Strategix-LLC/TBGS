import TOSArticleTemplate from "@/components/templates/TOSArticleTemplate";

interface OnderhoudGarageProps {
  onOpenContactModal: () => void;
}

export default function OnderhoudGarage({ onOpenContactModal }: OnderhoudGarageProps) {
  const processSteps = [
    {
      title: "Garage Inspectie",
      description: "Complete controle van garage constructie, dak, poorten en afwateringssystemen."
    },
    {
      title: "Onderhoud Planning", 
      description: "Opstellen van onderhoudsprogramma gebaseerd op garage staat en gebruik."
    },
    {
      title: "Uitvoering Onderhoud",
      description: "Professionele uitvoering van alle onderhoudswerkzaamheden volgens planning."
    },
    {
      title: "Preventief Programma",
      description: "Opzetten van preventief onderhoudsprogramma voor langdurige garage functionaliteit."
    }
  ];

  const garageServices = [
    "Garage dak onderhoud - Complete onderhoud van garage dakconstructie",
    "Garagedeur onderhoud - Onderhoud en reparatie van garagedeuren", 
    "Afwatering garage - Onderhoud van garage drainage systemen",
    "Garage vloer onderhoud - Reiniging en onderhoud van garage vloeren",
    "Elektra controle - Controle van garage elektra installaties",
    "Ventilatie onderhoud - Onderhoud van garage ventilatie systemen",
    "Preventieve reparaties - Kleine reparaties voorkom grote problemen",
    "Onderhoudsabonnement - Regelmatige garage zorg volgens afspraak"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven garage onderhoud",
      "Amsterdam garage", 
      "Rotterdam onderhoud",
      "Den Haag garage",
      "Utrecht onderhoud",
      "Tilburg garage",
      "Breda onderhoud",
      "'s-Hertogenbosch"
    ],
    belgium: [
      "Antwerpen garage onderhoud",
      "Brussel garage",
      "Gent onderhoud", 
      "Leuven garage",
      "Mechelen onderhoud",
      "Turnhout garage",
      "Hasselt onderhoud",
      "Genk garage"
    ]
  };

  const faqs = [
    {
      question: "Wat houdt garage onderhoud in?",
      answer: "Complete zorg voor garage: dak, deuren, afwatering, vloer, elektra en ventilatie. Preventief onderhoud voorkomt kostbare reparaties."
    },
    {
      question: "Hoe vaak heeft mijn garage onderhoud nodig?",
      answer: "Wij adviseren jaarlijkse controle en onderhoud. Dit houdt uw garage in optimale staat en detecteert vroeg eventuele problemen."
    },
    {
      question: "Kan garage onderhoud in mijn abonnement?",
      answer: "Ja, garage onderhoud past perfect in uw maatwerk onderhoudsabonnement. Samenstel uw pakket naar behoefte en gebruik."
    },
    {
      question: "Welke garage problemen komen het meest voor?",
      answer: "Meest voorkomende problemen zijn daklekkages, defecte garagedeuren, verstopte afwatering en vocht problemen."
    }
  ];

  const sections = [
    {
      title: "Garage Onderhoud Services",
      content: "",
      items: garageServices,
      icon: "fas fa-list"
    },
    {
      title: "Complete Garage Onderhoud",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>Garage onderhoud</strong> door ervaren specialisten zorgt voor optimale functionaliteit en levensduur van uw garage. Van dak tot vloer - wij verzorgen alle aspecten van garage onderhoud.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Preventief <strong>onderhoud</strong> van uw garage voorkomt kostbare reparaties en zorgt voor veilige en droge berging van uw auto en spullen. Regelmatige controle detecteert problemen voordat ze groot worden.
        </p>
        
        <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-car text-green-600 mr-3"></i>
            Garage Onderhoud Voordelen
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Veilige en droge bergruimte</li>
            <li>• Preventie van kostbare reparaties</li>
            <li>• Optimale functionaliteit garage</li>
            <li>• Langere levensduur constructie</li>
            <li>• Behoud waarde eigendom</li>
          </ul>
        </div>
      `,
      icon: "fas fa-car"
    }
  ];

  const mainContent = `
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Onderhoud van Uw Garage</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Professioneel <strong>garage onderhoud</strong> door ervaren specialisten. Complete zorg voor garage dak, deuren, afwatering en alle technische installaties.
    </p>
  `;

  return (
    <TOSArticleTemplate
      title="Garage Onderhoud 2025 | Onderhoud Specialist | Onderhoudsabonnement | Nederland & België"
      description="🏠 Garage onderhoud 2025! ✅ Complete garage zorg, dak onderhoud, deur service, onderhoudsabonnement - Nederland & België!"
      url="https://tbgs.nl/totaal-onderhoud-specialist/onderhoud-garage"
      heroTitle="Onderhoud van uw garage"
      heroSubtitle="Complete garage onderhoud door ervaren specialisten. Van dak tot vloer - alle aspecten van garage zorg in één hand."
      heroDescription="Preventief garage onderhoud voorkomt kostbare reparaties. Maatwerk abonnement voor regelmatige zorg en optimale functionaliteit."
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Professioneel garage onderhoud door specialist"
      urgencyText="Preventief Onderhoud"
      statsConfig={{
        stat1: { number: "Complete", text: "Garage zorg" },
        stat2: { number: "Preventief", text: "Onderhoud" },
        stat3: { number: "Maatwerk", text: "Abonnement" }
      }}
      mainContent={mainContent}
      sections={sections}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Klaar voor Garage Onderhoud?"
      ctaDescription="Zorg voor optimale garage functionaliteit met professioneel onderhoud. Preventieve zorg bespaart geld en voorkomt problemen."
      primaryButtonText="Garage Onderhoud Plannen"
      secondaryButtonText="Specialist Bellen"
      onOpenContactModal={onOpenContactModal}
    />
  );
}