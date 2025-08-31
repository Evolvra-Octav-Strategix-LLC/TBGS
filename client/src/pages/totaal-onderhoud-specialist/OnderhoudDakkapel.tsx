import TOSArticleTemplate from "@/components/templates/TOSArticleTemplate";

interface OnderhoudDakkapelProps {
  onOpenContactModal: () => void;
}

export default function OnderhoudDakkapel({ onOpenContactModal }: OnderhoudDakkapelProps) {
  const processSteps = [
    {
      title: "Uitgebreide Inspectie",
      description: "Complete controle van dakkapel constructie, isolatie en waterdichtheid."
    },
    {
      title: "Onderhoud Planning", 
      description: "Opstellen van onderhoudsprogramma gebaseerd op dakkapel staat en gebruik."
    },
    {
      title: "Preventief Onderhoud",
      description: "Regelmatige onderhoudswerkzaamheden volgens afgesproken planning en frequentie."
    },
    {
      title: "Abonnement Beheer",
      description: "Beheer van uw onderhoudsabonnement en rapportage van uitgevoerde werkzaamheden."
    }
  ];

  const onderhoudServices = [
    "Dakkapel constructie onderhoud - Complete onderhoud van dakkapel structuur",
    "Isolatie controle - Controle en onderhoud van dakkapel isolatie", 
    "Kozijnen onderhoud - Regelmatig onderhoud van dakkapel kozijnen",
    "Ramen onderhoud - Professioneel onderhoud van dakkapel beglazing",
    "Afwatering onderhoud - Onderhoud van dakkapel drainage systemen",
    "Loodwerk onderhoud - Onderhoud van loodwerk rond dakkapel",
    "Preventieve reparaties - Kleine reparaties voorkom grote problemen",
    "Onderhoudsabonnement - Regelmatige zorg volgens afspraak"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven dakkapel onderhoud",
      "Amsterdam dakkapel", 
      "Rotterdam onderhoud",
      "Den Haag dakkapel",
      "Utrecht onderhoud",
      "Tilburg dakkapel",
      "Breda onderhoud",
      "'s-Hertogenbosch"
    ],
    belgium: [
      "Antwerpen dakkapel onderhoud",
      "Brussel dakkapel",
      "Gent onderhoud", 
      "Leuven dakkapel",
      "Mechelen onderhoud",
      "Turnhout dakkapel",
      "Hasselt onderhoud",
      "Genk dakkapel"
    ]
  };

  const faqs = [
    {
      question: "Wat houdt dakkapel onderhoud in?",
      answer: "Complete zorg voor dakkapel: constructie, isolatie, kozijnen, ramen, afwatering en loodwerk. Preventief onderhoud voorkomt dure reparaties."
    },
    {
      question: "Hoe vaak heeft mijn dakkapel onderhoud nodig?",
      answer: "Wij adviseren jaarlijkse controle en onderhoud. Dit houdt uw dakkapel in optimale staat en voorkomt kostbare schade door verwaarlozing."
    },
    {
      question: "Kan ik dakkapel onderhoud in mijn abonnement opnemen?",
      answer: "Ja, dakkapel onderhoud kan onderdeel zijn van uw maatwerk onderhoudsabonnement. Samenstel uw pakket naar behoefte."
    },
    {
      question: "Wat gebeurt er bij verwaarlozing van dakkapel onderhoud?",
      answer: "Verwaarlozing leidt tot isolatie problemen, lekkages, kozijn schade en verminderde levensduur. Preventief onderhoud is veel voordeliger."
    }
  ];

  const sections = [
    {
      title: "Dakkapel Onderhoud Services",
      content: "",
      items: onderhoudServices,
      icon: "fas fa-list"
    },
    {
      title: "Preventief Dakkapel Onderhoud",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>Dakkapel onderhoud</strong> is essentieel voor behoud van functionaliteit en levensduur van uw dakkapel. Preventief onderhoud voorkomt kostbare reparaties en zorgt voor optimale prestaties van isolatie, beglazing en afwatering.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Onze onderhoud specialisten controleren alle aspecten van uw dakkapel: van constructie en isolatie tot kozijnen en loodwerk. Deze integrale aanpak garandeert langdurige functionaliteit.
        </p>
        
        <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-shield-alt text-green-600 mr-3"></i>
            Preventief Onderhoud Voordelen
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Voorkom kostbare reparaties</li>
            <li>• Optimale isolatie prestaties</li>
            <li>• Langere levensduur dakkapel</li>
            <li>• Vroege detectie van problemen</li>
            <li>• Behoud van waarde woning</li>
          </ul>
        </div>
      `,
      icon: "fas fa-home"
    },
    {
      title: "Maatwerk Onderhoudsabonnement",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Samenstel uw eigen <strong>onderhoudsabonnement</strong> en kies welke onderhoud diensten u wilt opnemen. Dakkapel onderhoud combineert perfect met andere diensten zoals dakgoot reiniging, ramen wassen en schilderwerk.
        </p>

        <div class="bg-green-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-calendar-check text-green-600 mr-3"></i>
            Abonnement Samenstellen
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Dakkapel reiniging en onderhoud</li>
            <li>• Ramen wassen service</li>
            <li>• Dakgoot onderhoud</li>
            <li>• Preventief schilderwerk</li>
            <li>• Betaal alleen voor gewenste diensten</li>
            <li>• Regelmatige planning naar behoefte</li>
          </ul>
        </div>
      `,
      icon: "fas fa-handshake"
    }
  ];

  const mainContent = `
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Dakkapel Reinigen</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Professionele <strong>dakkapel reiniging</strong> door ervaren onderhoud specialisten. Complete zorg voor dakkapel constructie, ramen en omliggende dakstructuur.
    </p>
  `;

  return (
    <TOSArticleTemplate
      title="Dakkapel Reinigen 2025 | Onderhoud Specialist | Onderhoudsabonnement | Nederland & België"
      description="🏠 Dakkapel reinigen 2025! ✅ Professionele dakkapel reiniging, ramen schoonmaken, onderhoudsabonnement - Nederland & België!"
      url="https://tbgs.nl/totaal-onderhoud-specialist/dakkapel-reinigen"
      heroTitle="Dakkapel reinigen"
      heroSubtitle="Professionele dakkapel reiniging voor optimale lichtinval en schone constructie. Maatwerk onderhoudsabonnement beschikbaar."
      heroDescription="Complete dakkapel zorg door ervaren specialisten. Reiniging, onderhoud en preventieve reparaties in één pakket."
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Professionele dakkapel reiniging door onderhoud specialist"
      urgencyText="Maatwerk Abonnement"
      statsConfig={{
        stat1: { number: "100%", text: "Schoon resultaat" },
        stat2: { number: "Preventief", text: "Onderhoud" },
        stat3: { number: "Maatwerk", text: "Abonnement" }
      }}
      mainContent={mainContent}
      sections={sections}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Klaar voor Dakkapel Onderhoud?"
      ctaDescription="Samenstel uw maatwerk onderhoudsabonnement en zorg voor optimale dakkapel onderhoud het hele jaar door."
      primaryButtonText="Abonnement Samenstellen"
      secondaryButtonText="Onderhoud Specialist"
      onOpenContactModal={onOpenContactModal}
    />
  );
}