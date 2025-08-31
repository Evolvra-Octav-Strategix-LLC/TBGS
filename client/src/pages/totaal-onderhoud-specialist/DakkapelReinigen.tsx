import TOSArticleTemplate from "@/components/templates/TOSArticleTemplate";

interface DakkapelReinigenProps {
  onOpenContactModal: () => void;
}

export default function DakkapelReinigen({ onOpenContactModal }: DakkapelReinigenProps) {
  const processSteps = [
    {
      title: "Dakkapel Inspectie",
      description: "Grondige controle van dakkapel constructie, ramen en afwateringssysteem."
    },
    {
      title: "Professionele Reiniging", 
      description: "Vakkundige reiniging van dakkapel buitenkant, ramen en omliggende dakstructuur."
    },
    {
      title: "Onderhoud & Reparatie",
      description: "Kleine reparaties direct uitgevoerd en advies over preventief onderhoud."
    },
    {
      title: "Onderhoudsabonnement",
      description: "Maatwerk abonnement samenstellen voor regelmatige dakkapel zorg."
    }
  ];

  const reinigingServices = [
    "Dakkapel buitenreiniging - Complete reiniging van dakkapel constructie",
    "Ramen reinigen - Professionele ramen reiniging binnen en buiten", 
    "Kozijnen onderhoud - Reiniging en onderhoud van dakkapel kozijnen",
    "Afwatering controle - Controle en reiniging van afwateringssysteem",
    "Loodwerk inspectie - Onderhoud van loodwerk rondom dakkapel",
    "Dakpannen reiniging - Reiniging dakpannen rond dakkapel",
    "Preventief onderhoud - Regelmatige zorg voorkomt grote problemen",
    "Onderhoudsabonnement - Maatwerk abonnement op uw behoeften"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven dakkapel reinigen",
      "Amsterdam dakkapel", 
      "Rotterdam onderhoud",
      "Den Haag reiniging",
      "Utrecht dakkapel",
      "Tilburg onderhoud",
      "Breda reiniging",
      "'s-Hertogenbosch"
    ],
    belgium: [
      "Antwerpen dakkapel reinigen",
      "Brussel dakkapel",
      "Gent onderhoud", 
      "Leuven reiniging",
      "Mechelen dakkapel",
      "Turnhout onderhoud",
      "Hasselt reiniging",
      "Genk dakkapel"
    ]
  };

  const faqs = [
    {
      question: "Hoe vaak moet ik mijn dakkapel laten reinigen?",
      answer: "Wij adviseren jaarlijkse reiniging van uw dakkapel. Dit voorkomt vervuiling, houdt ramen helder en detecteert vroeg eventuele onderhoudsproblemen."
    },
    {
      question: "Wat wordt er gereinigd bij dakkapel onderhoud?",
      answer: "Complete buitenreiniging van dakkapel, ramen binnen/buiten, kozijnen, afwatering, loodwerk en omliggende dakpannen."
    },
    {
      question: "Kan dakkapel reiniging in het onderhoudsabonnement?",
      answer: "Ja, dakkapel onderhoud kan onderdeel zijn van uw maatwerk abonnement. Samenstel uw pakket en betaal alleen voor gewenste diensten."
    },
    {
      question: "Worden kleine reparaties direct uitgevoerd?",
      answer: "Ja, tijdens de reiniging voeren wij kleine reparaties direct uit. Dit voorkomt verdere schade en houdt uw dakkapel in optimale staat."
    }
  ];

  const sections = [
    {
      title: "Dakkapel Reiniging Services",
      content: "",
      items: reinigingServices,
      icon: "fas fa-list"
    },
    {
      title: "Professionele Dakkapel Reiniging",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>Dakkapel reiniging</strong> door ervaren onderhoud specialisten zorgt voor heldere ramen, schone constructie en optimale levensduur van uw dakkapel. Regelmatige reiniging voorkomt vervuiling en detecteert vroeg eventuele onderhoudsproblemen.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Onze specialisten reinigen niet alleen de dakkapel zelf, maar controleren ook het omliggende dak, loodwerk en afwateringssysteem. Deze integrale aanpak zorgt voor complete zorg van uw dakkapel.
        </p>
        
        <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-home text-green-600 mr-3"></i>
            Dakkapel Reiniging Voordelen
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Heldere ramen voor maximaal lichtinval</li>
            <li>• Schone constructie voorkomt vervuiling</li>
            <li>• Optimale levensduur van dakkapel</li>
            <li>• Vroege detectie van problemen</li>
            <li>• Complete integrale zorg</li>
          </ul>
        </div>
      `,
      icon: "fas fa-home"
    }
  ];

  const mainContent = `
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Dakkapel Reinigen</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Professionele <strong>dakkapel reiniging</strong> door ervaren onderhoud specialisten. Complete zorg voor dakkapel, ramen en omliggende dakstructuur met maatwerk onderhoudsabonnement.
    </p>
  `;

  return (
    <TOSArticleTemplate
      title="Dakkapel Reinigen 2025 | Onderhoud Specialist | Onderhoudsabonnement | Nederland & België"
      description="🏠 Dakkapel reinigen 2025! ✅ Professionele reiniging, ramen schoonmaken, onderhoudsabonnement op maat - Nederland & België!"
      url="https://tbgs.nl/totaal-onderhoud-specialist/dakkapel-reinigen"
      heroTitle="Dakkapel reinigen"
      heroSubtitle="Professionele dakkapel reiniging voor heldere ramen en schone constructie. Complete zorg met maatwerk onderhoudsabonnement."
      heroDescription="Ervaren specialisten zorgen voor complete dakkapel onderhoud. Samenstel uw eigen abonnement en voorkom vervuiling."
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Professionele dakkapel reiniging door onderhoud specialist"
      urgencyText="Onderhoudsabonnement Beschikbaar"
      statsConfig={{
        stat1: { number: "100%", text: "Helder zicht" },
        stat2: { number: "Jaarlijks", text: "Onderhoud" },
        stat3: { number: "Maatwerk", text: "Abonnement" }
      }}
      mainContent={mainContent}
      sections={sections}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Klaar voor Dakkapel Reiniging?"
      ctaDescription="Zorg voor heldere ramen en schone dakkapel met professioneel onderhoud. Samenstel uw maatwerk abonnement voor regelmatige zorg."
      primaryButtonText="Reiniging Inplannen"
      secondaryButtonText="Onderhoud Specialist Bellen"
      onOpenContactModal={onOpenContactModal}
    />
  );
}