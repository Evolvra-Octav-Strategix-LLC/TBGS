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
    "Houten dakkapel onderhoud - Jaarlijks onderhoud verlengt levensduur met 10 jaar",
    "Kunststof dakkapel onderhoud - Preventieve zorg tegen elementen en seizoenen", 
    "Verfwerk onderhoud - Nieuwe verflaag elke 5 jaar voor optimale bescherming",
    "Dakleer en daklood - Regelmatige controle voorkomt lekkages",
    "Goten en regenpijpen - Reiniging voorkomt verstoppingen en wateroverlast",
    "Stabiliteit controle - Garanderen van dakkapel stabiliteit en veiligheid",
    "Lekkage preventie - Preventieve maatregelen tegen waterschade",
    "Onderhoudsabonnement - Vanaf €5,99 voor zorgeloze dakkapel zorg"
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
      question: "Hoeveel jaar gaat een dakkapel mee?",
      answer: "Gemiddeld gaat een dakkapel tussen de 20 en 30 jaar mee, afhankelijk van materialen. Houten dakkapel korter dan kunststof, maar met onderhoud tot 10 jaar langer."
    },
    {
      question: "Hoe vaak heeft een houten dakkapel onderhoud nodig?",
      answer: "Houten dakkapel heeft jaarlijks onderhoud nodig. Elke 5 jaar nieuwe verflaag voor optimale bescherming tegen zon. Dit verlengt levensduur aanzienlijk."
    },
    {
      question: "Wat kost een onderhoudsabonnement voor dakkapel?",
      answer: "Onderhoudsabonnement is al beschikbaar vanaf €5,99. Dit zorgt voor regelmatige controle en onderhoud voor een stevig en waterdicht dakkapel."
    },
    {
      question: "Heeft u vragen over dakkapel onderhoud?",
      answer: "Heeft u vragen bel ons gerust op 040-2026744. Wij helpen u bij onderhoud van uw dakkapel en overige dak werkzaamheden."
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
      title: "Verleng de Levensduur van Uw Dakkapel met 10 Jaar",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Gemiddeld gaat een <strong>dakkapel</strong> tussen de 20 en 30 jaar mee, vooral afhankelijk van de oorspronkelijke materialen. Een houten dakkapel gaat minder lang mee dan een kunststof dakkapel.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Dit komt met name omdat een houten <strong>dakkapel</strong> jaarlijks onderhoud nodig heeft. Wanneer u dit jaarlijks onderhoud laat plegen, kunt u de levensduur van uw houten dakkapel met wel <strong>10 jaar verlengen</strong>.
        </p>
        
        <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-clock text-green-600 mr-3"></i>
            Levensduur Verlenging
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Houten dakkapel: 20-30 jaar (zonder onderhoud)</li>
            <li>• Met jaarlijks onderhoud: +10 jaar extra</li>
            <li>• Kunststof dakkapel gaat langer mee</li>
            <li>• Onderhoudsabonnement vanaf €5,99</li>
            <li>• Investering die zich terugbetaalt</li>
          </ul>
        </div>
      `,
      icon: "fas fa-clock"
    },
    {
      title: "Onderhoud bij Houten Dakkapel",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Uw houten <strong>dakkapel</strong> krijgt het jaarlijks flink te verduren. Denk maar eens aan koude winters en hete zomers. Vooral het hout wordt flink aangetast door de zon en heeft om de 5 jaar een nieuwe verflaag nodig voor optimale bescherming.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Ook het <strong>dakleer en daklood</strong>, moeten regelmatig gecontroleerd en bijgewerkt worden om lekkages te voorkomen en stabiliteit te garanderen.
        </p>

        <div class="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-tree text-green-600 mr-3"></i>
            Houten Dakkapel Zorg
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Koude winters en hete zomers overleven</li>
            <li>• Hout aangetast door zon - bescherming nodig</li>
            <li>• Elke 5 jaar nieuwe verflaag voor bescherming</li>
            <li>• Dakleer en daklood regelmatig controleren</li>
            <li>• Lekkage preventie en stabiliteit borgen</li>
          </ul>
        </div>
      `,
      icon: "fas fa-tree"
    },
    {
      title: "Onderhoud bij Kunststof Dakkapel",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Een kunststof <strong>dakkapel</strong> gaat langer mee dan een houten dakkapel, maar ook hier is onderhoud zeer van belang. Ook een kunststof dakkapel moet de elementen trotseren en staat in de zomer vol in de zon en krijgt te maken met flinke vorst in de winter.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Het regenwater moet ook goed afgevoerd worden om lekkages te voorkomen. Tijdens een onderhoudsbeurt voor uw <strong>dakkapel</strong> worden ook de goten en regenpijpen van uw dakkapel schoongemaakt. Dat voorkomt verstoppingen en ophoping van regenwater.
        </p>

        <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-industry text-green-600 mr-3"></i>
            Kunststof Dakkapel Zorg
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Langer meegaand dan houten dakkapel</li>
            <li>• Onderhoud blijft zeer van belang</li>
            <li>• Trotseren van alle seizoens elementen</li>
            <li>• Zomer zon en winter vorst weerstand</li>
            <li>• Goede afwatering cruciaal voor lekkage preventie</li>
            <li>• Goten en regenpijpen reiniging inbegrepen</li>
          </ul>
        </div>
      `,
      icon: "fas fa-industry"
    },
    {
      title: "Onderhoudsabonnement vanaf €5,99",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          U heeft al een <strong>onderhoudsabonnement</strong> vanaf €5,99. Dit zorgt voor regelmatige controle en onderhoud van uw dakkapel zodat u kunt genieten van een stevig en waterdicht dakkapel.
        </p>

        <div class="bg-green-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-euro-sign text-green-600 mr-3"></i>
            Voordelig Abonnement
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Vanaf €5,99 voor dakkapel zorg</li>
            <li>• Regelmatige controle en onderhoud</li>
            <li>• Stevig en waterdicht dakkapel</li>
            <li>• Levensduur verlenging tot 10 jaar</li>
            <li>• Bekijk onze onderhoudsabonnementen</li>
          </ul>
        </div>
      `,
      icon: "fas fa-handshake"
    }
  ];

  const mainContent = `
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Onderhoud van Uw Dakkapel</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Een <strong>dakkapel</strong> is een mooie verlenging van uw huis. U maakt uw zolder nog nuttiger en ruimer op een eenvoudige manier. Heeft u een dakkapel let dan vooral goed op het onderhoud hiervan.
    </p>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      U kunt dan nog langer genieten van een stevig en waterdicht <strong>dakkapel</strong>. Wij helpen u bij het onderhoud van uw dakkapel en overige dak werkzaamheden.
    </p>
  `;

  return (
    <TOSArticleTemplate
      title="Onderhoud Dakkapel 2025 | +10 Jaar Levensduur | Abonnement €5,99 | Nederland & België"
      description="🏠 Dakkapel onderhoud 2025! ✅ Verleng levensduur +10 jaar, houten/kunststof dakkapel, onderhoudsabonnement €5,99 - Nederland & België!"
      url="https://tbgs.nl/totaal-onderhoud-specialist/onderhoud-dakkapel"
      heroTitle="Onderhoud van uw dakkapel"
      heroSubtitle="Verleng de levensduur van uw dakkapel met 10 jaar! Professioneel onderhoud voor houten en kunststof dakkapellen."
      heroDescription="Maak uw zolder nuttiger en ruimer. Met goed onderhoud geniet u langer van een stevig en waterdicht dakkapel."
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Professionele dakkapel reiniging door onderhoud specialist"
      urgencyText="Vanaf €5,99 Abonnement"
      statsConfig={{
        stat1: { number: "+10 jaar", text: "Levensduur" },
        stat2: { number: "€5,99", text: "Vanaf" },
        stat3: { number: "20-30", text: "Jaar basis" }
      }}
      mainContent={mainContent}
      sections={sections}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Heeft U Vragen over Dakkapel Onderhoud?"
      ctaDescription="Bel ons gerust op 040-2026744. Wij helpen u bij onderhoud van uw dakkapel en overige dak werkzaamheden."
      primaryButtonText="Abonnement Samenstellen"
      secondaryButtonText="Onderhoud Specialist"
      onOpenContactModal={onOpenContactModal}
    />
  );
}