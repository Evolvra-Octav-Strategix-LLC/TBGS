import TOSArticleTemplate from "@/components/templates/TOSArticleTemplate";

interface OnderhoudDakgootProps {
  onOpenContactModal: () => void;
}

export default function OnderhoudDakgoot({ onOpenContactModal }: OnderhoudDakgootProps) {
  const processSteps = [
    {
      title: "Dakgoot Inspectie",
      description: "Grondige controle van dakgoten, hemelwaterafvoer en bevestigingssysteem."
    },
    {
      title: "Professionele Reiniging", 
      description: "Complete reiniging van dakgoten, afvoerpijpen en controle op verstoppingen."
    },
    {
      title: "Reparatie & Onderhoud",
      description: "Vakkundige reparatie van lekkages en onderhoud van dakgoot systeem."
    },
    {
      title: "Preventief Programma",
      description: "Opzetten van preventief onderhoudsprogramma voor optimale afwatering."
    }
  ];

  const dakgootServices = [
    "Dakgoot reiniging - Complete reiniging van dakgoten en afvoersystemen",
    "Verstoppingen verwijderen - Professionele verwijdering van bladeren en vuil", 
    "Dakgoot reparatie - Reparatie van lekkages en beschadigde gootdelen",
    "Hemelwaterafvoer - Onderhoud van complete hemelwaterafvoer systemen",
    "Dakgoot bevestiging - Controle en reparatie van dakgoot ophangingen",
    "Preventieve reiniging - Regelmatige reiniging voorkomt verstoppingen",
    "Wintervoorbereiding - Voorbereiding dakgoten op winter en vorst",
    "Onderhoudsabonnement - Jaarlijkse dakgoot zorg volgens planning"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven dakgoot onderhoud",
      "Amsterdam dakgoten", 
      "Rotterdam onderhoud",
      "Den Haag dakgoot",
      "Utrecht onderhoud",
      "Tilburg dakgoten",
      "Breda onderhoud",
      "'s-Hertogenbosch"
    ],
    belgium: [
      "Antwerpen dakgoot onderhoud",
      "Brussel dakgoten",
      "Gent onderhoud", 
      "Leuven dakgoot",
      "Mechelen onderhoud",
      "Turnhout dakgoten",
      "Hasselt onderhoud",
      "Genk dakgoot"
    ]
  };

  const faqs = [
    {
      question: "Hoe vaak moeten dakgoten gereinigd worden?",
      answer: "Wij adviseren minimaal 2x per jaar dakgoot reiniging: voorjaar en najaar. Bij veel bomen rondom woning vaker noodzakelijk."
    },
    {
      question: "Wat gebeurt er bij verstopte dakgoten?",
      answer: "Verstopte dakgoten veroorzaken wateroverlast, lekkages, vochtschade aan gevels en mogelijk fundatie problemen door slechte afwatering."
    },
    {
      question: "Kan dakgoot onderhoud in het abonnement?",
      answer: "Ja, dakgoot onderhoud is een populair onderdeel van ons maatwerk abonnement. Regelmatige reiniging voorkomt kostbare waterschade."
    },
    {
      question: "Hoe herken ik dakgoot problemen?",
      answer: "Signalen zijn: water langs gevels, dakgoot die doorhangt, zichtbare verstoppingen, ijsvorming in winter en roestplekken."
    }
  ];

  const sections = [
    {
      title: "Dakgoot Onderhoud Services",
      content: "",
      items: dakgootServices,
      icon: "fas fa-list"
    },
    {
      title: "Professioneel Dakgoot Onderhoud",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>Dakgoot onderhoud</strong> door ervaren specialisten voorkomt wateroverlast en kostbare schade aan uw woning. Regelmatige reiniging en onderhoud zorgen voor optimale hemelwaterafvoer.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Verstopte <strong>dakgoten</strong> veroorzaken water langs gevels, vochtschade en mogelijk fundatie problemen. Preventief onderhoud is veel voordeliger dan reparatie van waterschade.
        </p>
        
        <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-tint text-green-600 mr-3"></i>
            Dakgoot Onderhoud Voordelen
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Voorkom wateroverlast en lekkages</li>
            <li>• Bescherm gevels tegen vochtschade</li>
            <li>• Optimale hemelwaterafvoer</li>
            <li>• Voorkom fundatie problemen</li>
            <li>• Langere levensduur dakgoot systeem</li>
          </ul>
        </div>
      `,
      icon: "fas fa-tint"
    }
  ];

  const mainContent = `
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Onderhoud Dakgoot</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Professioneel <strong>dakgoot onderhoud</strong> door ervaren specialisten. Preventieve reiniging en onderhoud voorkomt wateroverlast en kostbare schade.
    </p>
  `;

  return (
    <TOSArticleTemplate
      title="Dakgoot Onderhoud 2025 | Reiniging | Onderhoudsabonnement | Nederland & België"
      description="🏠 Dakgoot onderhoud 2025! ✅ Professionele dakgoot reiniging, verstoppingen verwijderen, onderhoudsabonnement - Nederland & België!"
      url="https://tbgs.nl/totaal-onderhoud-specialist/onderhoud-dakgoot"
      heroTitle="Onderhoud dakgoot"
      heroSubtitle="Professioneel dakgoot onderhoud voorkomt wateroverlast en beschermt uw woning. Regelmatige reiniging en preventieve zorg."
      heroDescription="Ervaren specialisten zorgen voor optimale hemelwaterafvoer. Maatwerk abonnement voor continue dakgoot zorg."
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Professioneel dakgoot onderhoud door specialist"
      urgencyText="Wateroverlast Preventie"
      statsConfig={{
        stat1: { number: "2x", text: "Per jaar" },
        stat2: { number: "100%", text: "Afwatering" },
        stat3: { number: "Preventief", text: "Onderhoud" }
      }}
      mainContent={mainContent}
      sections={sections}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Klaar voor Dakgoot Onderhoud?"
      ctaDescription="Voorkom wateroverlast en bescherm uw woning met professioneel dakgoot onderhoud. Regelmatige zorg bespaart u veel geld."
      primaryButtonText="Dakgoot Onderhoud Plannen"
      secondaryButtonText="Specialist Bellen"
      onOpenContactModal={onOpenContactModal}
    />
  );
}