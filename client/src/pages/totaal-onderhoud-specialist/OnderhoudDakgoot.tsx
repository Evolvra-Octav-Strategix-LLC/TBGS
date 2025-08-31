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
    "Jaarlijkse dakgoot reiniging - Bespaart hoop overlast en onnodige kosten",
    "Vuil verwijdering - Roet, bladeren, vogelnestjes, zand en dakafval", 
    "Verstopping preventie - Water snel naar grond krijgen en afvoeren",
    "Plat dak afwatering - 690-900mm regenval per jaar verwerken",
    "Hellend dak systemen - Pannendaken met snelle waterafvoer",
    "Roosters plaatsen - Grove vuil tegenhouden bij goot-regenpijp verbinding",
    "Veilige reiniging - Dakexperts voor moeilijk bereikbare goten",
    "Onderhoudsabonnementen - Speciale pakketten voor continue zorg"
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
      question: "Wat kan er allemaal in dakgoten terechtkomen?",
      answer: "Roet van nabijgelegen schoorsteen, bladeren, vogelnestjes, zand door wind en vuil van uw dak. Al dit vuil kan dakgoot verstoppen."
    },
    {
      question: "Wat gebeurt bij verstopte dakgoot?",
      answer: "Water kan niet afgevoerd worden en zoekt andere weg naar beneden. Vloeit vaak op ongewenste plaatsen, in ergste geval uw woning binnen."
    },
    {
      question: "Hoeveel regenwater valt er in Nederland?",
      answer: "Gemiddeld tussen 690 en 900 mm per jaar. Zware regenbuien tot 20 mm per kwartier - dakgoten moeten optimaal functioneren."
    },
    {
      question: "Wat zijn tips voor schone dakgoten?",
      answer: "Regelmatige controle via dakraam/ladder, speciale gereedschappen, roosters bij goot-regenpijp, dakexpert voor moeilijk bereikbare goten."
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
      title: "Waarom Dakgoot Onderhoud Zo Belangrijk Is",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Uw <strong>dakgoten</strong> vervoeren het water dat via uw dak en dak onderdelen naar beneden wil. De dakgoot en regenpijp werken hierin samen om het water snel naar de grond te krijgen en af te voeren.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Wanneer dit proces niet efficiënt gebeurt, bijvoorbeeld bij verstopping, heeft u kans op <strong>lekkage en andere overlast</strong> zoals stank en ongedierte. Laat daarom jaarlijks uw dakgoten reinigen, dat bespaart u een hoop overlast en onnodige kosten.
        </p>
        
        <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-exclamation-triangle text-red-600 mr-3"></i>
            Gevolgen van Verwaarlozing
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Lekkage en wateroverlast</li>
            <li>• Stank en ongedierte aantrekken</li>
            <li>• Hoop overlast en onnodige kosten</li>
            <li>• Water vloeit op ongewenste plaatsen</li>
            <li>• In ergste geval water in woning</li>
          </ul>
        </div>
      `,
      icon: "fas fa-exclamation-triangle"
    },
    {
      title: "Tips om Uw Dakgoot Schoon te Houden",
      content: `
        <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-lightbulb text-green-600 mr-3"></i>
            Praktische Tips
          </h3>
          <ul class="space-y-3 text-gray-700">
            <li>• <strong>Regelmatige controle:</strong> Dakgoten die u gemakkelijk via dakraam, dakkapel of ladder kunt bekijken op vuil</li>
            <li>• <strong>Juiste gereedschappen:</strong> Gebruik speciale gereedschappen om vuil eenvoudig weg te scheppen</li>
            <li>• <strong>Roosters plaatsen:</strong> Bij verbindingen tussen dakgoot en regenpijp om grove vuil tegen te houden</li>
            <li>• <strong>Professionele hulp:</strong> Laat dakgoten die u zelf niet goed of veilig kunt bereiken schoonmaken door een dakexpert</li>
          </ul>
        </div>
      `,
      icon: "fas fa-lightbulb"
    },
    {
      title: "Onderhoud Dakgoot op Plat Dak",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Een <strong>plat dak</strong> verwerkt op een andere manier regenwater dan een hellend dak. Op een plat dak hoopt het water vaak eerst op, alvorens ze naar de goot gaten geleid.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          In Nederland valt gemiddeld tussen de <strong>690 en 900 mm regenwater per jaar</strong>. Gelukkig valt dit niet in een keer, maar zware regenbuien kan tot wel 20 mm per kwartier regenwater laten vallen.
        </p>

        <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-cloud-rain text-green-600 mr-3"></i>
            Plat Dak Uitdagingen
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Water hoopt eerst op voordat afvoer</li>
            <li>• 690-900 mm regenval per jaar in Nederland</li>
            <li>• Zware buien: 20 mm per kwartier mogelijk</li>
            <li>• Dakgoten en regenpijpen plots veel water</li>
            <li>• Moeten daarom optimaal functioneren</li>
          </ul>
        </div>
      `,
      icon: "fas fa-cloud-rain"
    },
    {
      title: "Onderhoud Dakgoot op Hellend Dak",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Hellende daken zijn vaak <strong>pannendaken</strong>. Het voordeel van hellende daken, is dat het regenwater snel naar beneden geleid wordt en direct de dakgoot in stroomt.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Het zorgt er dus voor dat het water in grote hoeveelheden vrijwel geleidelijk afgevoerd wordt. Toch is ook bij een hellend dak een schone <strong>dakgoot</strong> van groot belang.
        </p>

        <div class="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-angle-down text-green-600 mr-3"></i>
            Hellend Dak Kenmerken
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Vaak pannendaken met snelle afvoer</li>
            <li>• Regenwater stroomt direct in dakgoot</li>
            <li>• Grote hoeveelheden geleidelijk afgevoerd</li>
            <li>• Schone dakgoot blijft van groot belang</li>
            <li>• Hoger dan plat dak - meer gewicht bij opstoppingen</li>
          </ul>
        </div>
      `,
      icon: "fas fa-angle-down"
    }
  ];

  const mainContent = `
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Onderhoud van Uw Dakgoot</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Uw <strong>dakgoten</strong> vervoeren het water dat via uw dak en dak onderdelen naar beneden wil. De dakgoot en regenpijp werken hierin samen om het water snel naar de grond te krijgen en af te voeren.
    </p>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      TBGS B.V. heeft speciale <strong>onderhoudsabonnementen</strong> voor optimale dakgoot zorg.
    </p>
  `;

  return (
    <TOSArticleTemplate
      title="Dakgoot Onderhoud 2025 | Voorkom Lekkage | Onderhoudsabonnement | Nederland & België"
      description="🏠 Dakgoot onderhoud 2025! ✅ Voorkom lekkage, jaarlijks reinigen, 690-900mm regenval, plat/hellend dak - Nederland & België!"
      url="https://tbgs.nl/totaal-onderhoud-specialist/onderhoud-dakgoot"
      heroTitle="Onderhoud van uw dakgoot"
      heroSubtitle="Voorkom lekkage en overlast! Jaarlijks dakgoten reinigen bespaart hoop overlast en onnodige kosten."
      heroDescription="Water snel naar grond brengen essentieel. Dakgoot en regenpijp werken samen voor efficiënte afvoer."
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Professioneel dakgoot onderhoud door specialist"
      urgencyText="Voorkom Wateroverlast"
      statsConfig={{
        stat1: { number: "690-900mm", text: "Regenval/jaar" },
        stat2: { number: "20mm", text: "Per kwartier" },
        stat3: { number: "Jaarlijks", text: "Reinigen" }
      }}
      mainContent={mainContent}
      sections={sections}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Dakgoot Reiniging Plannen?"
      ctaDescription="Voorkom lekkage en andere overlast zoals stank en ongedierte. Jaarlijks reinigen bespaart hoop overlast en onnodige kosten."
      primaryButtonText="Dakgoot Onderhoud Plannen"
      secondaryButtonText="Specialist Bellen"
      onOpenContactModal={onOpenContactModal}
    />
  );
}