import TOSArticleTemplate from "@/components/templates/TOSArticleTemplate";

interface PreventiefOnderhoudProps {
  onOpenContactModal: () => void;
}

export default function PreventiefOnderhoud({ onOpenContactModal }: PreventiefOnderhoudProps) {
  const processSteps = [
    {
      title: "Preventie Planning",
      description: "Opstellen van preventief onderhoudsprogramma afgestemd op uw woning en behoeften."
    },
    {
      title: "Regelmatige Controles", 
      description: "Geplande inspecties en controles volgens afgesproken onderhoudsprogramma."
    },
    {
      title: "Preventieve Actie",
      description: "Proactieve uitvoering van onderhoudswerkzaamheden voordat problemen ontstaan."
    },
    {
      title: "Programma Evaluatie",
      description: "Evaluatie en bijstelling van onderhoudsprogramma voor optimale effectiviteit."
    }
  ];

  const preventiefServices = [
    "Preventief onderhoudsprogramma - Maatwerk onderhoudsprogramma voor uw woning",
    "Jaarlijkse inspecties - Regelmatige controles van alle bouwonderdelen", 
    "Vroege probleem detectie - Detectie van problemen voordat ze kostbaar worden",
    "Preventieve reparaties - Kleine reparaties voorkom grote kosten",
    "Onderhoud planning - Strategische planning van alle onderhoudswerkzaamheden",
    "Seizoens voorbereiding - Voorbereiding woning op seizoens invloeden",
    "Waardeconservatie - Behoud waarde woning door preventief onderhoud",
    "Onderhoudsabonnement - Complete preventieve zorg volgens afspraak"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven preventief onderhoud",
      "Amsterdam onderhoud", 
      "Rotterdam preventie",
      "Den Haag onderhoud",
      "Utrecht preventief",
      "Tilburg onderhoud",
      "Breda preventie",
      "'s-Hertogenbosch"
    ],
    belgium: [
      "Antwerpen preventief onderhoud",
      "Brussel onderhoud",
      "Gent preventie", 
      "Leuven onderhoud",
      "Mechelen preventief",
      "Turnhout onderhoud",
      "Hasselt preventie",
      "Genk onderhoud"
    ]
  };

  const faqs = [
    {
      question: "Wat is preventief onderhoud?",
      answer: "Preventief onderhoud betekent regelmatige zorg voordat problemen ontstaan. Dit bespaart veel geld en voorkomt acute reparaties."
    },
    {
      question: "Waarom is preventief onderhoud voordeliger?",
      answer: "Kleine preventieve ingrepen kosten veel minder dan grote reparaties. Preventie voorkomt kostbare schade en behoudt waarde van uw woning."
    },
    {
      question: "Hoe stel ik een preventief programma samen?",
      answer: "Samen stellen wij een onderhoudsprogramma op maat. Frequentie en werkzaamheden worden afgestemd op uw woning en budget."
    },
    {
      question: "Welke onderdelen vallen onder preventief onderhoud?",
      answer: "Alle bouwonderdelen: dak, dakgoten, kozijnen, schilderwerk, houtwerk, garage, dakkapels - alles wat regelmatige zorg nodig heeft."
    }
  ];

  const sections = [
    {
      title: "Preventief Onderhoud Services",
      content: "",
      items: preventiefServices,
      icon: "fas fa-list"
    },
    {
      title: "Preventief Onderhoud Voordelen",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>Preventief onderhoud</strong> is de slimste manier om uw woning in optimale staat te houden. Door regelmatige kleine ingrepen voorkomt u kostbare grote reparaties en behoudt u de waarde van uw eigendom.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Ons <strong>preventief onderhoudsprogramma</strong> detecteert problemen in een vroeg stadium wanneer reparaties nog eenvoudig en goedkoop zijn. Dit bespaart u veel geld en voorkomt acute situaties.
        </p>
        
        <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-shield-alt text-green-600 mr-3"></i>
            Preventief Onderhoud Voordelen
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Voorkom kostbare grote reparaties</li>
            <li>• Behoud waarde van uw woning</li>
            <li>• Vroege detectie van problemen</li>
            <li>• Planbare onderhoudkosten</li>
            <li>• Voorkom acute noodsituaties</li>
          </ul>
        </div>
      `,
      icon: "fas fa-shield-alt"
    }
  ];

  const mainContent = `
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Preventief Onderhoud</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      <strong>Preventief onderhoud</strong> door ervaren specialisten bespaart geld en voorkomt problemen. Maatwerk onderhoudsprogramma voor optimale woningzorg.
    </p>
  `;

  return (
    <TOSArticleTemplate
      title="Preventief Onderhoud 2025 | Onderhoud Specialist | Bespaar Geld | Nederland & België"
      description="🏠 Preventief onderhoud 2025! ✅ Bespaar geld, voorkom problemen, onderhoudsabonnement, vroege detectie - Nederland & België!"
      url="https://tbgs.nl/totaal-onderhoud-specialist/preventief-onderhoud"
      heroTitle="Preventief onderhoud"
      heroSubtitle="Slim onderhoud dat geld bespaart. Voorkom kostbare reparaties met preventieve zorg door ervaren specialisten."
      heroDescription="Detecteer problemen vroeg wanneer reparaties nog eenvoudig zijn. Maatwerk onderhoudsprogramma voor uw woning."
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Preventief onderhoud door specialist bespaart geld"
      urgencyText="Bespaar Geld Nu"
      statsConfig={{
        stat1: { number: "70%", text: "Kostenbesparing" },
        stat2: { number: "Vroege", text: "Detectie" },
        stat3: { number: "Maatwerk", text: "Programma" }
      }}
      mainContent={mainContent}
      sections={sections}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Klaar voor Preventief Onderhoud?"
      ctaDescription="Start vandaag met preventief onderhoud en bespaar veel geld. Maatwerk programma voorkomt kostbare verrassingen."
      primaryButtonText="Preventief Programma Opstellen"
      secondaryButtonText="Onderhoud Specialist"
      onOpenContactModal={onOpenContactModal}
    />
  );
}