import TSSArticleTemplate from "@/components/templates/TSSArticleTemplate";

interface SchoorsteenRenovatieProps {
  onOpenContactModal: () => void;
}

export default function SchoorsteenRenovatie({ onOpenContactModal }: SchoorsteenRenovatieProps) {
  const processSteps = [
    {
      title: "Schoorsteen Inspectie",
      description: "Grondige controle van voegen, constructie en functionaliteit van bestaande schoorsteen."
    },
    {
      title: "Renovatie Advies", 
      description: "Professioneel advies over renovatie mogelijkheden en meest geschikte modernisering."
    },
    {
      title: "Vakkundige Renovatie",
      description: "Complete schoorsteenrenovatie met moderne materialen en technieken door ASPB-specialisten."
    },
    {
      title: "Veiligheidstest & Garantie",
      description: "Uitgebreide veiligheidstest na renovatie en garantie op materiaal en vakmanschap."
    }
  ];

  const renovatieServices = [
    "Voegen renovatie - Vervanging van verzande en poreuze voegen",
    "Complete schoorsteenrenovatie - Modernisering van oude schoorstenen", 
    "Rookkanaal herstelling - Reparatie van beschadigde rookafvoersystemen",
    "Schoorsteenkap vervanging - Nieuwe waterdichte schoorsteenkappen",
    "Gaskachel aansluiting - Professionele aansluiting op gerenoveerde schoorsteen",
    "Loodwerk herstelling - Reparatie van storm- en windschade aan loodwerk",
    "Moderne isolatie - Toevoeging van isolatie tijdens renovatie",
    "Onderhoudspakket - Aangepast abonnement na renovatie"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven schoorsteen renovatie",
      "Amsterdam rookkanaal", 
      "Rotterdam schoorsteen",
      "Den Haag renovatie",
      "Utrecht rookkanaal",
      "Tilburg schoorsteen",
      "Breda renovatie",
      "'s-Hertogenbosch"
    ],
    belgium: [
      "Antwerpen schoorsteen renovatie",
      "Brussel rookkanaal",
      "Gent schoorsteen", 
      "Leuven renovatie",
      "Mechelen rookkanaal",
      "Turnhout schoorsteen",
      "Hasselt renovatie",
      "Genk rookkanaal"
    ]
  };

  const faqs = [
    {
      question: "Wanneer moet ik mijn schoorsteen laten renoveren?",
      answer: "Renovatie is aangeraden bij verzande voegen, slechte rookafvoer, aansluiting van gaskachel op oude schoorsteen, of na langdurig gebrek aan onderhoud."
    },
    {
      question: "Wat zijn de gevaren van een slecht onderhouden schoorsteen?",
      answer: "Hoofdrisico's zijn rookterugslag, koolmonoxide vergiftiging en verhoogd brandgevaar. Vooral bij aansluiting van gaskachels op oude schoorstenen."
    },
    {
      question: "Hoe lang duurt een schoorsteenrenovatie?",
      answer: "Afhankelijk van de omvang 1-3 dagen. Complete renovatie inclusief voegwerk en nieuwe kap duurt gemiddeld 2-3 werkdagen."
    },
    {
      question: "Kan ik een onderhoudsabonnement samenstellen?",
      answer: "Ja, bij Totaal Schoorsteen Specialist kunt u uw eigen onderhoudsabonnement samenstellen. U betaalt alleen voor diensten die u daadwerkelijk nodig heeft."
    }
  ];

  const sections = [
    {
      title: "Schoorsteen Renovatie Services",
      content: "",
      items: renovatieServices,
      icon: "fas fa-list"
    },
    {
      title: "Schoorsteen Renovatie Noodzaak",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Heeft u een <strong>schoorsteen</strong> van al een aantal jaren oud, dan zijn de meest voorkomende problemen vaak te vinden in het verzanden of poreus worden van de voegen. Uw <strong>schoorsteen</strong> steekt lekkerlijk de lucht in en vangt veel wind, regen, sneeuw en hagel van alle kanten.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Dit zorgt ervoor dat de voegen van de <strong>schoorsteen</strong> het flink te verduren krijgen. Laat daarom regelmatig uw <strong>schoorsteen</strong> controleren en vegen door een expert. Die u kan adviseren over de onderhouds en <strong>renovatie</strong> mogelijkheden.
        </p>
        
        <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-cloud-rain text-blue-600 mr-3"></i>
            Weersinvloeden op Schoorstenen
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Verzanding en poreus worden van voegen</li>
            <li>• Wind, regen, sneeuw en hagel schade</li>
            <li>• Voegen krijgen het flink te verduren</li>
            <li>• Regelmatige controle en renovatie nodig</li>
          </ul>
        </div>
      `,
      icon: "fas fa-hammer"
    },
    {
      title: "De Gevaren van een Slecht Onderhouden Schoorsteen",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Een ontwikkeling die al langer gaande is, is dat huiseigenaren hun traditionele kachel vervangen door een <strong>gaskachel</strong> die aangesloten wordt op de <strong>schoorsteen</strong>. Wanneer echter niet naar de <strong>schoorsteen</strong> zelf gekeken wordt en deze door verzanding van de voegen niet meer goed functioneert, kan de rook terugslaan.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Met alle risico's voor uw gezondheid van dien. In extreme gevallen kan er zelfs sprake zijn van <strong>koolmonoxide vergiftiging</strong>. Dit alles is eenvoudig te voorkomen door jaarlijks uw <strong>schoorsteen</strong> te laten inspecteren en onderhouden.
        </p>

        <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-exclamation-triangle text-red-600 mr-3"></i>
            Gevaren van Slecht Onderhoud
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Rookterugslag bij gaskachel aansluiting</li>
            <li>• Koolmonoxide vergiftiging risico</li>
            <li>• Verhoogd brandgevaar</li>
            <li>• Gezondheidsrisico's voor bewoners</li>
            <li>• Verzekeringsclausules bij schade</li>
            <li>• Eenvoudig preventie door jaarlijks onderhoud</li>
          </ul>
        </div>
      `,
      icon: "fas fa-exclamation-triangle"
    },
    {
      title: "Uw Schoorsteen Weer als Nieuw",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Uw <strong>schoorsteen</strong> is als de kroon op uw huis en moet er netjes en goed uitzien. Daarnaast moet het de rook naar buiten vervoeren en net zo lang meegaan als uw dak. Net als alle andere dakwerken is onderhoud zeer belangrijk.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Bij Totaal Schoorsteen Specialist kunt u zelfs uw eigen <strong>onderhoudsabonnement</strong> samenstellen, waarbij u zelf bepaalt wat u daarin wilt hebben. U betaalt alleen voor de diensten die u nodig heeft.
        </p>

        <div class="bg-green-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-crown text-blue-600 mr-3"></i>
            Schoorsteen als Kroon op Uw Huis
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Netjes en representatief uiterlijk</li>
            <li>• Effectieve rookafvoer naar buiten</li>
            <li>• Levensduur gelijk aan dakconstructie</li>
            <li>• Regelmatig onderhoud essentieel</li>
            <li>• Maatwerk onderhoudsabonnementen</li>
            <li>• Betaal alleen voor benodigde diensten</li>
          </ul>
        </div>
      `,
      icon: "fas fa-crown"
    },
    {
      title: "Regelmatig Onderhoud Door ASPB Schoorsteenvegers",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Om uw <strong>schoorsteen</strong> schoon en veilig te houden is regelmatig onderhoud erg belangrijk. Totaal Schoorsteen Specialist heeft naast dak specialisten ook ASPB gediplomeerde <strong>schoorsteenvegers</strong>. Die uw <strong>schoorsteen</strong>, veilig en snel schoongemaakt hebben.
        </p>

        <div class="bg-blue-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-certificate text-blue-600 mr-3"></i>
            ASPB Gediplomeerde Specialisten
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Gecertificeerde ASPB schoorsteenvegers</li>
            <li>• Dak specialisten en schoorsteenexperts</li>
            <li>• Veilige en snelle schoonmaak</li>
            <li>• Professionele renovatie service</li>
            <li>• Complete onderhoudspakketten</li>
            <li>• Aangepaste abonnementen mogelijk</li>
          </ul>
        </div>
      `,
      icon: "fas fa-users"
    }
  ];

  const mainContent = `
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Schoorsteen Renovatie</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Professionele <strong>schoorsteen renovatie</strong> door ASPB-gecertificeerde specialisten. Modernisering van oude schoorstenen met duurzame materialen en veilige gaskachel aansluitingen.
    </p>
  `;

  return (
    <TSSArticleTemplate
      title="Schoorsteen Renovatie 2025 | ASPB Specialisten | Gaskachel Aansluiting | Nederland & België"
      description="🏠 Schoorsteen renovatie 2025! ✅ ASPB specialisten, voegen renovatie, gaskachel aansluiting, onderhoudsabonnement op maat - Nederland & België!"
      url="https://tbgs.nl/schoorsteen/schoorsteen-renovatie"
      heroTitle="Schoorsteen renovatie"
      heroSubtitle="Complete schoorsteenrenovatie door ASPB-gecertificeerde specialisten. Van voegen herstelling tot moderne gaskachel aansluitingen."
      heroDescription="Uw schoorsteen weer als nieuw met professionele renovatie. Voorkom rookterugslag en CO-vergiftiging met vakkundige modernisering."
      heroImage="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Professionele schoorsteen renovatie door ASPB gecertificeerde specialist"
      urgencyText="Onderhoudsabonnement Beschikbaar"
      statsConfig={{
        stat1: { number: "ASPB", text: "Gecertificeerd" },
        stat2: { number: "20+", text: "Jaar garantie" },
        stat3: { number: "100%", text: "Veilig stoken" }
      }}
      mainContent={mainContent}
      sections={sections}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Klaar voor Schoorsteen Renovatie?"
      ctaDescription="Maak uw schoorsteen weer als nieuw met professionele renovatie. Samenstel uw eigen onderhoudsabonnement voor continue zorg."
      primaryButtonText="Renovatie Offerte Aanvragen"
      secondaryButtonText="ASPB Specialist Bellen"
      onOpenContactModal={onOpenContactModal}
    />
  );
}