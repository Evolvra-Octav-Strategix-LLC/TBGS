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
    "Houten dakconstructie onderhoud - Stabiliteit en vorm van uw dak behouden",
    "Dakpannen controle - Voorkomen dat vocht hout bereikt", 
    "Dakgoten onderhoud - Waterdichtheid garanderen en hout beschermen",
    "Dakleer en daklood - Preventie van water naar houten onderdelen",
    "Kapotte dakpan reparatie - Direct repareren voorkomt houtrot",
    "Houtrot preventie - Voorkomen van instabiel dak door vochtschade",
    "Jaarlijkse controle - Belangrijke dakpunten controleren en onderhouden",
    "Onderhoudsabonnement - Preventief programma tegen dak renovatie"
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
      question: "Waarom is hout onder dakpannen zo belangrijk?",
      answer: "Houten onderdelen zorgen voor stabiliteit en vorm van uw dak. Ze houden dakpannen en nokvorsten stevig op plaats - cruciale functie voor dak integriteit."
    },
    {
      question: "Wat gebeurt als vocht het hout bereikt?",
      answer: "Water dat wordt geabsorbeerd door hout veroorzaakt houtrot. Dit maakt uw dak instabiel en vaak is dakrenovatie de enige oplossing - zeer kostbaar."
    },
    {
      question: "Waarom direct repareren van kapotte dakpannen?",
      answer: "Een kleine regenbui kan hout onder dakpannen al snel beschadigen. Direct repareren voorkomt houtrot en kostbare dakrenovatie."
    },
    {
      question: "Hoe voorkom ik kostbare dakrenovatie?",
      answer: "Jaarlijkse controle met onderhoudsabonnement. Wij controleren dakgoten, dakpannen, dakleer, daklood zodat uw dak waterdicht blijft en jaren meegaat."
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
      title: "Belang van Hout in Uw Dak",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Heeft u dakpannen op uw dak, dan zit hier vaak <strong>hout</strong> onder. Deze houten onderdelen zorgen voor de stabiliteit en vorm van uw dak. Ze houden ook de dakpannen en nokvorsten stevig op hun plaats.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Ze hebben dus een belangrijke functie in uw dak en moeten daarom ook goed onderhouden worden. Bij het onderhouden moet u overigens niet denken aan het <strong>hout</strong> dat direct onderhouden moet worden, maar het dak erboven en omheen.
        </p>
        
        <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-home text-green-600 mr-3"></i>
            Functies van Hout in Dak
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Stabiliteit en vorm van uw dak</li>
            <li>• Houden dakpannen stevig op plaats</li>
            <li>• Ondersteuning voor nokvorsten</li>
            <li>• Belangrijke structurele functie</li>
            <li>• Vereist goede onderhoud en bescherming</li>
          </ul>
        </div>
      `,
      icon: "fas fa-home"
    },
    {
      title: "Voorkom Vocht en Regenwater Bereik",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Wat u wilt voorkomen is dat vocht en regenwater het <strong>hout</strong> van uw dak bereikt met alle gevolgen van dien. Laat uw dak daarom jaarlijks controleren.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Bij TBGS B.V. kan dat met een <strong>onderhoudsabonnement</strong>, hierbij komen wij jaarlijks bij u langs om de belangrijke punten in uw dak te controleren en onderhouden. Denk hierbij aan uw dakgoten, dakpannen, dakleer, daklood en overige dakonderdelen.
        </p>

        <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-umbrella text-green-600 mr-3"></i>
            Jaarlijkse Controle Punten
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Dakgoten - voorkomen wateroverlast</li>
            <li>• Dakpannen - intact houden voor bescherming</li>
            <li>• Dakleer - waterdichtheid garanderen</li>
            <li>• Daklood - stabiliteit en afdichting</li>
            <li>• Overige dakonderdelen - complete zorg</li>
            <li>• Waterdicht blijven - hout beschermen</li>
          </ul>
        </div>
      `,
      icon: "fas fa-umbrella"
    },
    {
      title: "Kapotte Dakpannen Direct Repareren",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Een kapotte of gevallen <strong>dakpan</strong> kan het beste direct gerepareerd worden. Een kleine regenbui kan het hout onder dakpannen namelijk al snel beschadigen.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Water dat wordt geabsorbeerd door <strong>hout</strong> kan houtrot veroorzaken. Dit kan uw dak instabiel maken en is een vervelende vorm van lekkage. Wanneer u namelijk veel houtrot onder uw dakpannen heeft, is vaak de enigste oplossing een dak renovatie.
        </p>

        <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-exclamation-triangle text-red-600 mr-3"></i>
            Gevaren van Uitstel
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Kleine regenbui beschadigt hout al snel</li>
            <li>• Water absorptie veroorzaakt houtrot</li>
            <li>• Instabiel dak door houtrot</li>
            <li>• Vervelende lekkage problemen</li>
            <li>• Uiteindelijk dak renovatie noodzakelijk</li>
            <li>• Goed onderhoud voorkomt dit alles</li>
          </ul>
        </div>
        
        <p class="text-lg text-gray-700 leading-relaxed mt-6">
          Dat is vervelend, want met goed onderhoud kan uw dak jaren lang mee.
        </p>
      `,
      icon: "fas fa-exclamation-triangle"
    }
  ];

  const mainContent = `
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Onderhoud van het Hout in het Dak</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Wij zorgen ervoor dat uw dak waterdicht blijft en er mooi bij blijft liggen. Bel ons voor meer informatie over onze werkzaamheden en onderhoud mogelijkheden op <strong>040-2026744</strong>.
    </p>
  `;

  return (
    <TOSArticleTemplate
      title="Onderhoud Hout Dak 2025 | Voorkom Houtrot | Onderhoudsabonnement | Nederland & België"
      description="🏠 Hout onderhoud dak 2025! ✅ Voorkom houtrot, dakpannen controle, waterdicht dak, onderhoudsabonnement - Nederland & België!"
      url="https://tbgs.nl/totaal-onderhoud-specialist/onderhoud-hout-dak"
      heroTitle="Onderhoud van het hout in het dak"
      heroSubtitle="Voorkom kostbare dakrenovatie! Bescherm het hout onder uw dakpannen tegen vocht en houtrot."
      heroDescription="Houten onderdelen zorgen voor stabiliteit van uw dak. Onderhoudsabonnement voorkomt dat vocht het hout bereikt."
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Professioneel onderhoud van hout in dakconstructie"
      urgencyText="Voorkom Dakrenovatie"
      statsConfig={{
        stat1: { number: "Jaarlijks", text: "Controle" },
        stat2: { number: "Waterdicht", text: "Dak" },
        stat3: { number: "Jaren", text: "Langer mee" }
      }}
      mainContent={mainContent}
      sections={sections}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Meer Informatie over Hout Onderhoud?"
      ctaDescription="Bel ons voor meer informatie over onze werkzaamheden en onderhoud mogelijkheden op 040-2026744. Voorkom kostbare dakrenovatie."
      primaryButtonText="Houtonderhoud Plannen"
      secondaryButtonText="Specialist Bellen"
      onOpenContactModal={onOpenContactModal}
    />
  );
}