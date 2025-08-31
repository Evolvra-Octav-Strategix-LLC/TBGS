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
    "Plat dak onderhoud - Garagedak heeft ander onderhoud dan hellende daken",
    "Waterafvoer controle - Schone dakgoot en regenpijp essentieel", 
    "Bitumen dakbedekking - Ballastlaag kiezels beschermen tegen UV-stralen",
    "EPDM rubber dak - Elastisch bij alle temperaturen, langer meegaand",
    "Groen dak mogelijkheden - EPDM geschikt voor worteldoorgroei",
    "Lekkage preventie - Voorkom vervelende schade door waterophoping",
    "Drainage systemen - Groot oppervlak water snel naar grond brengen",
    "Onderhoudsabonnement - Niet duur maar wel belangrijk voor preventie"
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
      question: "Waarom heeft een garagedak ander onderhoud nodig?",
      answer: "Garagedak is vaak plat dak zonder dakpannen en daklood. Heeft groot oppervlak waar water kan blijven staan - andere onderhoudsbenadering nodig."
    },
    {
      question: "Wat is het verschil tussen Bitumen en EPDM?",
      answer: "Bitumen heeft ballastlaag (kiezels) tegen UV-stralen. EPDM synthetisch rubber is elastischer, minder UV-gevoelig en geschikt voor groen dak."
    },
    {
      question: "Waarom is waterafvoer zo belangrijk bij garagedak?",
      answer: "Plat dak moet regenwater in grote hoeveelheden snel afvoeren. Schone dakgoot en regenpijp essentieel voor lekkage preventie."
    },
    {
      question: "Is garagedak onderhoud duur?",
      answer: "Garagedak onderhouden is niet duur, maar wel belangrijk. Voorkomt lekkage en andere vervelende schade - preventie altijd goedkoper."
    }
  ];

  const sections = [
    {
      title: "Garagedak Onderhoud Services",
      content: "",
      items: garageServices,
      icon: "fas fa-list"
    },
    {
      title: "Plat Dak Onderhoud Verschillen",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Een <strong>garagedak</strong> is vaak een plat dak en platte daken hebben ander onderhoud en dak werkzaamheden nodig dan hellende daken. Zo heeft een plat dak bijvoorbeeld geen dakpannen en daklood.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Het heeft echter wel een groot oppervlak waar water kan blijven staan. Een <strong>garagedak onderhouden</strong> is niet duur, maar wel belangrijk. Zo voorkomt u lekkage en andere vervelende schade.
        </p>
        
        <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-home text-green-600 mr-3"></i>
            Plat Dak Kenmerken
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Geen dakpannen en daklood</li>
            <li>• Groot oppervlak waar water kan staan</li>
            <li>• Onderhoud niet duur maar wel belangrijk</li>
            <li>• Voorkomt lekkage en vervelende schade</li>
            <li>• Ander onderhoud dan hellende daken</li>
          </ul>
        </div>
      `,
      icon: "fas fa-home"
    },
    {
      title: "Waterafvoer: Essentieel voor Garagedak",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Een plat dak moet namelijk het regenwater in grote hoeveelheden en korte tijd naar de grond brengen. Een schone <strong>dakgoot en regenpijp</strong> zijn dan van essentieel belang.
        </p>

        <div class="bg-cyan-50 p-6 rounded-xl border-l-4 border-cyan-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-tint text-green-600 mr-3"></i>
            Waterafvoer Kritiek
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Regenwater in grote hoeveelheden</li>
            <li>• Korte tijd naar grond brengen</li>
            <li>• Schone dakgoot essentieel</li>
            <li>• Regenpijp van cruciaal belang</li>
            <li>• Voorkomt waterophoping op dak</li>
          </ul>
        </div>
      `,
      icon: "fas fa-tint"
    },
    {
      title: "Bitumen Garagedak",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          De meeste <strong>garagedaken</strong> zijn bedekt met Bitumen dakbedekking. Vooral op garagedaken komt u ook een ballastlaag tegen in de vorm van kiezels of drainage-tegels.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Die zorgen ervoor dat uw <strong>Bitumen dakbedekking</strong> lange tijd meegaat, omdat deze niet meer direct blootgesteld wordt aan de zon en uv-stralen van de zon. Bij Bitumen dakbedekking is waterafvoer erg belangrijk.
        </p>

        <div class="bg-gray-50 p-6 rounded-xl border-l-4 border-gray-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-layer-group text-green-600 mr-3"></i>
            Bitumen Voordelen
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Ballastlaag van kiezels of drainage-tegels</li>
            <li>• Bescherming tegen zon en UV-stralen</li>
            <li>• Langere levensduur door ballast</li>
            <li>• Waterafvoer cruciaal voor duurzaamheid</li>
            <li>• Hoe beter waterafvoer, hoe langer meegaand</li>
          </ul>
        </div>
      `,
      icon: "fas fa-layer-group"
    },
    {
      title: "EPDM Garagedak",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>EPDM</strong> staat voor Ethyleen, Propyleen, Di Monomeer. Een EPDM dakbedekking bestaat uit een synthetisch rubber. De voordelen van een EPDM dakbedekking is dat het zeer elastisch is bij lage en hoge temperaturen.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Het is ook veel minder gevoelig voor de UV stralen van de zon en gaat daarom ook langer mee. U kunt het zelfs gebruiken als ondergrond voor een <strong>groen dak</strong>. Het is namelijk geschikt voor worteldoorgroei en tast boven groeiende vegetatie niet aan.
        </p>

        <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-leaf text-green-600 mr-3"></i>
            EPDM Voordelen
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Ethyleen, Propyleen, Di Monomeer rubber</li>
            <li>• Zeer elastisch bij alle temperaturen</li>
            <li>• Minder gevoelig voor UV-stralen</li>
            <li>• Gaat langer mee dan andere materialen</li>
            <li>• Geschikt voor groen dak ondergrond</li>
            <li>• Worteldoorgroei bestendig</li>
            <li>• Groen dak gaat 2x langer mee</li>
          </ul>
        </div>
      `,
      icon: "fas fa-leaf"
    }
  ];

  const mainContent = `
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Onderhoud van Uw Garagedak</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Een <strong>garagedak</strong> is vaak een plat dak en platte daken hebben ander onderhoud en dak werkzaamheden nodig dan hellende daken. Zo heeft een plat dak bijvoorbeeld geen dakpannen en daklood.
    </p>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Het heeft echter wel een groot oppervlak waar water kan blijven staan. Een garagedak onderhouden is niet duur, maar wel belangrijk. Zo voorkomt u lekkage en andere vervelende schade.
    </p>
  `;

  return (
    <TOSArticleTemplate
      title="Garagedak Onderhoud 2025 | Plat Dak | Bitumen EPDM | Nederland & België"
      description="🏠 Garagedak onderhoud 2025! ✅ Plat dak specialist, Bitumen/EPDM, waterafvoer, groen dak, niet duur maar belangrijk - Nederland & België!"
      url="https://tbgs.nl/totaal-onderhoud-specialist/onderhoud-garage"
      heroTitle="Onderhoud van uw garagedak"
      heroSubtitle="Plat dak specialist voor Bitumen en EPDM garagedaken. Niet duur maar wel belangrijk voor lekkage preventie."
      heroDescription="Groot oppervlak waar water kan staan vereist andere aanpak. Waterafvoer en dakbedekking onderhoud cruciaal."
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Professioneel garage onderhoud door specialist"
      urgencyText="Niet Duur, Wel Belangrijk"
      statsConfig={{
        stat1: { number: "Plat", text: "Dak Specialist" },
        stat2: { number: "Waterafvoer", text: "Essentieel" },
        stat3: { number: "2x Langer", text: "Groen Dak" }
      }}
      mainContent={mainContent}
      sections={sections}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Garagedak Onderhoud Plannen?"
      ctaDescription="Voorkom lekkage en vervelende schade. Garagedak onderhoud is niet duur maar wel belangrijk - neem contact op."
      primaryButtonText="Garage Onderhoud Plannen"
      secondaryButtonText="Specialist Bellen"
      onOpenContactModal={onOpenContactModal}
    />
  );
}