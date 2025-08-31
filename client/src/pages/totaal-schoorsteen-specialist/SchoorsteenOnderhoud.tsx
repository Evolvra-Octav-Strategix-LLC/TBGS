import TSSArticleTemplate from "@/components/templates/TSSArticleTemplate";

interface SchoorsteenOnderhoudProps {
  onOpenContactModal: () => void;
}

export default function SchoorsteenOnderhoud({ onOpenContactModal }: SchoorsteenOnderhoudProps) {
  const processSteps = [
    {
      title: "Binnen- & Buitenkant Inspectie",
      description: "Complete controle van rookkanaal binnenkant én dak/buitenkant door dak- en schoorsteenspecialisten."
    },
    {
      title: "Grondige Reiniging", 
      description: "Verwijdering van roet, vogelnesten en ander vuil uit schoorsteenkanaal door ASPB-gediplomeerde vegers."
    },
    {
      title: "Dak & Voegwerk Controle",
      description: "Onderzoek van voegen, loodwerk en schoorsteenconstructie door gecombineerde dak-schoorsteen expertise."
    },
    {
      title: "Onderhoudsabonnement Advies",
      description: "Persoonlijk onderhoudsabonnement samenstellen - betaal alleen voor gewenste diensten en frequentie."
    }
  ];

  const onderhoudServices = [
    "Schoorsteenvegen - ASPB-gediplomeerde schoorsteenvegers voor grondige reiniging",
    "Buitenkant onderhoud - Dakspecialisten voor schoorsteen buitenzijde controle", 
    "Voegwerk inspectie - Controle op verzanding en poreuze voegen",
    "Loodwerk onderhoud - Onderhoud van lood rondom schoorsteenconstructie",
    "Vogelnest verwijdering - Veilige verwijdering van nesten uit rookkanaal",
    "Roet reiniging - Complete verwijdering van roetaanslag",
    "Dakpannen rondom schoorsteen - Controle en onderhoud dakpannen bij schoorsteen",
    "Maatwerk onderhoudsabonnement - Samenstel uw eigen onderhoudspakket"
  ];

  const abonnementVoordelen = [
    "Zelf samenstellen - Kies welke onderdelen u wel/niet wilt hebben",
    "Jaarlijkse inspectie - Schoorsteen en dak jaarlijks onderhouden", 
    "Directe reparaties - Kleine reparaties direct uitgevoerd",
    "Dakgoten reiniging - Dakgoten onderhoud inbegrepen",
    "Daklood controle - Daklood geïnspecteerd en onderhouden",
    "Dakpannen service - Dakpannen gereinigd en gecontroleerd",
    "Dakleer onderhoud - Dakleer onderhoud en inspectie",
    "Lekkage preventie - Voorkom lekkage en schade"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven schoorsteen onderhoud",
      "Amsterdam rookkanaal", 
      "Rotterdam schoorsteen",
      "Den Haag onderhoud",
      "Utrecht rookkanaal",
      "Tilburg schoorsteen",
      "Breda onderhoud",
      "'s-Hertogenbosch"
    ],
    belgium: [
      "Antwerpen schoorsteen onderhoud",
      "Brussel rookkanaal",
      "Gent schoorsteen", 
      "Leuven onderhoud",
      "Mechelen rookkanaal",
      "Turnhout schoorsteen",
      "Hasselt onderhoud",
      "Genk rookkanaal"
    ]
  };

  const faqs = [
    {
      question: "Waarom is schoorsteen onderhoud zo belangrijk?",
      answer: "Schoorsteen onderhoud zorgt voor probleemloze gebruik, voorkomt vuil in huiskamer, houdt lucht in huis gezond en voorkomt gevaarlijke situaties."
    },
    {
      question: "Wat onderscheidt TBGS van reguliere schoorsteenvegers?",
      answer: "TBGS combineert ASPB-gediplomeerde schoorsteenvegers met dakspecialisten. Wij verzorgen zowel binnenkant als buitenkant onderhoud van uw schoorsteen."
    },
    {
      question: "Hoe stel ik mijn onderhoudsabonnement samen?",
      answer: "U kiest zelf welke onderdelen u wilt: schoorsteen, dakgoten, daklood, dakpannen, dakleer. Betaal alleen voor diensten die u daadwerkelijk afneemt."
    },
    {
      question: "Worden kleine reparaties direct uitgevoerd?",
      answer: "Ja, tijdens jaarlijkse inspectie voeren wij kleine reparaties direct uit. Dit voorkomt lekkages en verdere schade aan uw schoorsteen en dak."
    }
  ];

  const sections = [
    {
      title: "Schoorsteen Onderhoud Services",
      content: "",
      items: onderhoudServices,
      icon: "fas fa-list"
    },
    {
      title: "Onderhoud van Uw Schoorsteen",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Heeft u een <strong>schoorsteen</strong> dan is <strong>onderhoud</strong> van deze <strong>schoorsteen</strong> zeer belangrijk. Het zorgt er namelijk niet alleen voor dat u zonder problemen gebruik kunt maken van uw <strong>schoorsteen</strong>, maar ook dat er geen vuil uw huiskamer in komt en de lucht in uw huis gezond blijft.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Laat daarom regelmatig uw <strong>schoorsteen vegen</strong> door een erkende <strong>schoorsteenveger</strong>. TBGS B.V. heeft gediplomeerde <strong>schoorsteenvegers</strong> in dienst die uw <strong>schoorsteen</strong> snel en grondig kunnen reinigen en verwijderen zo alle roet, vogelnesten en ander vuil uit uw <strong>schoorsteen</strong> en huis.
        </p>
        
        <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-home text-blue-600 mr-3"></i>
            Gezonde Leefomgeving
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Probleemloze gebruik van schoorsteen</li>
            <li>• Voorkom vuil in huiskamer</li>
            <li>• Gezonde lucht in huis behouden</li>
            <li>• Verwijdering roet en vogelnesten</li>
            <li>• Erkende ASPB schoorsteenvegers</li>
          </ul>
        </div>
      `,
      icon: "fas fa-broom"
    },
    {
      title: "Schoorsteen Onderhoud aan de Buitenkant",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Een reguliere <strong>schoorsteenveger</strong> komt vaak alleen de binnenkant reinigen. TBGS B.V. is naast schoorsteenveeg specialist ook <strong>dak specialist</strong> en kan dus ook bij u het dak en de buitenkant van uw <strong>schoorsteen</strong> onderzoeken, repareren en renoveren.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Uw <strong>schoorsteen</strong> krijgt namelijk vaak veel te verduren, omdat deze uitsteekt en van alle kanten te maken krijgt met sneeuw, hagel, wind en regen. Dit kan de <strong>voegen</strong> en het lood om de <strong>schoorsteen</strong> aantasten, met alle gevolgen van dien.
        </p>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-blue-50 p-6 rounded-xl">
            <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <i class="fas fa-home text-blue-600 mr-3"></i>
              Reguliere Schoorsteenveger
            </h3>
            <ul class="space-y-2 text-gray-700">
              <li>• Alleen binnenkant reiniging</li>
              <li>• Roet en vuil verwijdering</li>
              <li>• Standaard veegwerkzaamheden</li>
            </ul>
          </div>
          
          <div class="bg-blue-100 p-6 rounded-xl">
            <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <i class="fas fa-tools text-blue-600 mr-3"></i>
              TBGS Dak + Schoorsteen Specialist
            </h3>
            <ul class="space-y-2 text-gray-700">
              <li>• Binnen- én buitenkant onderhoud</li>
              <li>• Dak rondom schoorsteen controle</li>
              <li>• Voegwerk en loodwerk onderhoud</li>
              <li>• Complete renovatie mogelijk</li>
            </ul>
          </div>
        </div>

        <div class="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-600 mt-6">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-cloud-rain text-blue-600 mr-3"></i>
            Weersinvloeden op Schoorstenen
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Sneeuw, hagel, wind en regen van alle kanten</li>
            <li>• Voegen kunnen worden aangetast</li>
            <li>• Loodwerk om schoorsteen beschadigd</li>
            <li>• Uitstekende positie maakt kwetsbaar</li>
          </ul>
        </div>
      `,
      icon: "fas fa-home"
    },
    {
      title: "Schoorsteen in het Onderhoudsabonnement",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Wij vinden het belangrijk dat u tevreden bent en alleen betaalt voor de diensten die u wilt afnemen. U kunt bij ons daarom zelf uw <strong>onderhoudsabonnement</strong> samenstellen en kiest zelf welke onderdelen u wel/niet wilt hebben.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Heeft u een <strong>schoorsteen</strong> dan kunt u dit opgeven en meenemen in het <strong>onderhoudsabonnement</strong>, wij komen dan jaarlijks uw <strong>schoorsteen</strong> en dak onderhouden en inspecteren. Uw dakgoten, daklood, dakpannen en dakleer worden gereinigd en geïnspecteerd en kleine reparaties worden direct uitgevoerd.
        </p>

        <div class="bg-green-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-calendar-check text-blue-600 mr-3"></i>
            Maatwerk Onderhoudsabonnement
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Zelf samenstellen - kies gewenste onderdelen</li>
            <li>• Betaal alleen voor afgenomen diensten</li>
            <li>• Jaarlijkse schoorsteen en dak inspectie</li>
            <li>• Dakgoten reiniging en onderhoud</li>
            <li>• Daklood inspectie en onderhoud</li>
            <li>• Dakpannen reiniging en controle</li>
            <li>• Dakleer onderhoud inbegrepen</li>
            <li>• Kleine reparaties direct uitgevoerd</li>
            <li>• Voorkom lekkage en schade</li>
          </ul>
        </div>
      `,
      icon: "fas fa-handshake"
    },
    {
      title: "Onderhoudsabonnement Voordelen",
      content: `
        <div class="bg-blue-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-star text-blue-600 mr-3"></i>
            Complete Onderhoudszorg
          </h3>
          <div class="space-y-4 text-gray-700">
            <div>• <strong>Jaarlijkse Controle</strong> - Regelmatige inspectie voorkomt grote problemen</div>
            <div>• <strong>Directe Reparaties</strong> - Kleine reparaties meteen uitgevoerd</div>
            <div>• <strong>Preventieve Zorg</strong> - Voorkom lekkages en kostbare schade</div>
            <div>• <strong>Gezonde Leefomgeving</strong> - Schone lucht in huis gegarandeerd</div>
            <div>• <strong>Dak + Schoorsteen Expertise</strong> - Complete specialistische kennis</div>
          </div>
        </div>
      `,
      icon: "fas fa-star"
    }
  ];

  const mainContent = `
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Schoorsteen Onderhoud</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Professioneel <strong>schoorsteen onderhoud</strong> door ASPB-gediplomeerde vegers én dakspecialisten. Binnen- en buitenkant onderhoud met maatwerk onderhoudsabonnement.
    </p>
  `;

  return (
    <TSSArticleTemplate
      title="Schoorsteen Onderhoud 2025 | ASPB Vegers | Onderhoudsabonnement | Nederland & België"
      description="🏠 Schoorsteen onderhoud 2025! ✅ ASPB schoorsteenvegers, binnen/buiten onderhoud, maatwerk abonnement, dak specialist - Nederland & België!"
      url="https://tbgs.nl/totaal-schoorsteen-specialist/schoorsteen-onderhoud"
      heroTitle="Schoorsteen onderhoud"
      heroSubtitle="Complete schoorsteenonderhoud door ASPB-vegers en dakspecialisten. Binnen- en buitenkant onderhoud met maatwerk onderhoudsabonnement."
      heroDescription="Gezonde leefomgeving met professioneel onderhoud. Samenstel uw eigen abonnement - betaal alleen voor gewenste diensten."
      heroImage="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="ASPB gediplomeerde schoorsteenveger tijdens professioneel onderhoud"
      urgencyText="Maatwerk Abonnement Beschikbaar"
      statsConfig={{
        stat1: { number: "ASPB", text: "Gediplomeerd" },
        stat2: { number: "Binnen+Buiten", text: "Volledig onderhoud" },
        stat3: { number: "Maatwerk", text: "Abonnement" }
      }}
      mainContent={mainContent}
      sections={sections}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Klaar voor Schoorsteen Onderhoud?"
      ctaDescription="Zorg voor gezonde leefomgeving met professioneel onderhoud. Samenstel uw maatwerk abonnement en voorkom achterstallig onderhoud."
      primaryButtonText="Onderhoudsabonnement Samenstellen"
      secondaryButtonText="Onderhoud Specialist Bellen"
      onOpenContactModal={onOpenContactModal}
    />
  );
}