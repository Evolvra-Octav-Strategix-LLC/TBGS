import TSSArticleTemplate from "@/components/templates/TSSArticleTemplate";

interface SchoorsteenVegenProps {
  onOpenContactModal: () => void;
}

export default function SchoorsteenVegen({ onOpenContactModal }: SchoorsteenVegenProps) {
  const processSteps = [
    {
      title: "Afspraak & Planning",
      description: "Telefonische afspraak voor jaarlijkse schoorsteenreiniging op een moment dat u uitkomt."
    },
    {
      title: "Dakwerk Inspectie", 
      description: "Veilige toegang tot het dak en controle van schoorsteen, kap en rookkanaal constructie."
    },
    {
      title: "Professionele Reiniging",
      description: "Buitendaks vegen met professioneel materiaal door erkende ASPB-aangesloten schoorsteenveger."
    },
    {
      title: "Veiligheidscontrole & Rapport",
      description: "Complete veiligheidscontrole, controle op nesten en schriftelijk reinigingscertificaat."
    }
  ];

  const veegServices = [
    "Jaarlijkse schoorsteen reiniging - Erkende schoorsteenveger service",
    "Buitendaks vegen - Professionele reiniging vanaf het dak", 
    "Rookkanaal inspectie - Controle van gehele rookafvoersysteem",
    "Schoorsteenkap controle - Inspectie en onderhoud schoorsteenkap",
    "Nesten verwijdering - Veilige verwijdering van vogelnesten",
    "Veiligheidscontrole - Complete brandveiligheidscheck",
    "Reinigingscertificaat - Officiële veegbewijzen en documentatie",
    "Abonnement service - Jaarlijkse herinnering en planning"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven schoorsteen vegen",
      "Amsterdam schoorsteenveger", 
      "Rotterdam schoorsteen",
      "Den Haag vegen",
      "Utrecht schoorsteenveger",
      "Tilburg schoorsteen",
      "Breda vegen",
      "'s-Hertogenbosch"
    ],
    belgium: [
      "Antwerpen schoorsteen vegen",
      "Brussel schoorsteenveger",
      "Gent schoorsteen", 
      "Leuven vegen",
      "Mechelen schoorsteenveger",
      "Turnhout schoorsteen",
      "Hasselt vegen",
      "Genk schoorsteenveger"
    ]
  };

  const faqs = [
    {
      question: "Hoe vaak moet ik mijn schoorsteen laten vegen?",
      answer: "De Nederlandse overheid adviseert jaarlijkse schoorsteenreiniging. Wij adviseren minimaal één keer per jaar door een erkende ASPB-aangesloten schoorsteenveger."
    },
    {
      question: "Wat is het verschil tussen erkende en niet-erkende schoorsteenvegers?",
      answer: "Erkende ASPB-schoorsteenvegers hebben een Gezel-opleiding gevolgd, gebruiken professioneel materiaal en bieden klachtenregeling. In Nederland is schoorsteenvegen helaas geen erkend beroep."
    },
    {
      question: "Wat houdt buitendaks vegen in?",
      answer: "Erkende schoorsteenvegers werken vanaf het dak om de schoorsteen te reinigen. Hierdoor kunnen we gelijktijdig de staat van de schoorsteen, kap en rookkanalen controleren."
    },
    {
      question: "Krijg ik een certificaat na het vegen?",
      answer: "Ja, na professionele reiniging ontvangt u altijd een reinigingscertificaat als bewijs van uitgevoerde schoorsteenvegingswerkzaamheden."
    }
  ];

  const sections = [
    {
      title: "Schoorsteen Vegen Services",
      content: "",
      items: veegServices,
      icon: "fas fa-list"
    },
    {
      title: "Jaarlijkse Controle en Reiniging Noodzakelijk",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Als uw woning een <strong>schoorsteen</strong> heeft, dan is het noodzakelijk om deze minimaal één keer per jaar te laten reinigen door een erkende <strong>schoorsteenveger</strong>. Daarmee zorgt u voor veiligheid voor uw gezin, maar ook voor bijvoorbeeld uw buren.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          De Nederlandse overheid adviseert om schoorstenen ieder jaar te laten <strong>vegen</strong>. Helaas kent ons land geen verplichte jaarlijkse controle van schoorstenen. Deze zogenaamde "veegplicht" bestaat wel in veel andere landen in Europa en de praktijk wijst uit dat dit noodzakelijk is voor veilige schoorstenen.
        </p>
        
        <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-fire text-red-600 mr-3"></i>
            Brandpreventie Door Schoorsteenvegen
          </h3>
          <p class="text-gray-700 mb-4">
            Nog steeds ontstaan er in Nederland namelijk iedere dag branden die voorkomen hadden kunnen worden door een periodieke controle en reiniging van schoorstenen.
          </p>
          <ul class="space-y-2 text-gray-700">
            <li>• Dagelijks schoorsteenbranden in Nederland</li>
            <li>• Preventie door jaarlijkse reiniging</li>
            <li>• Bescherming van gezin en buren</li>
            <li>• Voorkoming van kostbare schade</li>
          </ul>
        </div>
      `,
      icon: "fas fa-calendar-check"
    },
    {
      title: "Waar Bestaat Schoorsteenvegen Uit?",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Erkende <strong>schoorsteenvegers</strong> <strong>vegen</strong> uw <strong>schoorsteen</strong> "buitendaks". Zij zullen daarbij op het dak van uw woning staan om de <strong>schoorsteen</strong> te reinigen. Bijkomend voordeel van deze methode is, dat het gelijk mogelijk is om de staat van uw <strong>schoorsteen</strong> te controleren.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Bijvoorbeeld op nesten en de conditie van de kap. Daarnaast kan een erkende <strong>schoorsteenveger</strong> op verzoek voor u diverse andere werkzaamheden verrichten. Hierbij kunt u denken aan een onderzoek van de rookkanalen.
        </p>

        <div class="grid md:grid-cols-2 gap-6 mt-8">
          <div class="bg-white p-6 rounded-xl border">
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <i class="fas fa-home text-blue-600 mr-3"></i>
              Buitendaks Vegen
            </h3>
            <ul class="space-y-2 text-gray-700">
              <li>• Werken vanaf het dak</li>
              <li>• Professioneel reinigingsmateriaal</li>
              <li>• Gelijktijdige inspectie mogelijk</li>
              <li>• Veilige werkmethode</li>
            </ul>
          </div>
          
          <div class="bg-blue-50 p-6 rounded-xl border">
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <i class="fas fa-search text-blue-600 mr-3"></i>
              Aanvullende Controles
            </h3>
            <ul class="space-y-2 text-gray-700">
              <li>• Controle schoorsteenkap</li>
              <li>• Inspectie op vogelnesten</li>
              <li>• Rookkanaal onderzoek</li>
              <li>• Algemene veiligheidscheck</li>
            </ul>
          </div>
        </div>
      `,
      icon: "fas fa-tools"
    },
    {
      title: "Maak Gebruik van een Erkende Schoorsteenveger",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          In Nederland is <strong>schoorsteenvegen</strong> geen erkend beroep, wat als gevolg heeft dat er veel <strong>schoorsteenvegers</strong> zijn die hun vak minder goed verstaan. Om er zeker van te zijn dat u met een deskundige en ervaren <strong>schoorsteenveger</strong> te maken heeft, maakt u gebruik van een schoorsteenveegbedrijf dat is aangesloten bij de ASPB.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          De ASPB is de Nederlandse brancheorganisatie van schoorsteenveegbedrijven. Met een <strong>schoorsteenveger</strong> die is aangesloten bij de ASPB, bent u verzekerd van een uitstekende reiniging met deugdelijk reinigingsmateriaal. Bovendien weet u zeker dat in het geval van problemen of fouten, u een beroep kunt doen op de klachtenregeling van de ASPB.
        </p>

        <div class="bg-green-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-certificate text-blue-600 mr-3"></i>
            ASPB Voordelen
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Erkende Nederlandse brancheorganisatie</li>
            <li>• Gezel-opleiding vereist voor lidmaatschap</li>
            <li>• Professioneel reinigingsmateriaal gegarandeerd</li>
            <li>• Klachtenregeling beschikbaar</li>
            <li>• Strenge kwaliteitseisen</li>
            <li>• Verzekerde kwaliteit en service</li>
          </ul>
        </div>
      `,
      icon: "fas fa-certificate"
    },
    {
      title: "Voordelen van Regelmatige Schoorsteenreiniging",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Met een <strong>abonnement</strong> voor het <strong>schoorsteenvegen</strong> bent u verzekerd van periodieke reiniging van uw <strong>schoorsteen</strong> en bovendien voordeliger uit. U kunt ieder jaar een herinnering krijgen om de <strong>schoorsteenveger</strong> te bellen.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Als u echt geen omkijken wilt hebben naar het <strong>vegen</strong> van uw <strong>schoorsteen</strong>, dan kunt u bij ons ook een <strong>abonnement</strong> afsluiten. U wordt dan ieder jaar tijdig gebeld voor een afspraak, zodat u daar zelf niet meer aan hoeft te denken.
        </p>

        <div class="bg-blue-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-calendar-alt text-blue-600 mr-3"></i>
            Abonnement Voordelen
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Automatische jaarlijkse herinnering</li>
            <li>• Geen zorgen meer over planning</li>
            <li>• Gegarandeerde periodieke reiniging</li>
            <li>• Voordeligere tarieven</li>
            <li>• Tijdige afspraakplanning</li>
            <li>• Continuïteit in schoorsteenonderhoud</li>
          </ul>
        </div>
      `,
      icon: "fas fa-handshake"
    }
  ];

  const mainContent = `
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Schoorsteen Vegen en Reinigen</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Professionele <strong>schoorsteen vegen</strong> door erkende ASPB-aangesloten <strong>schoorsteenvegers</strong>. Jaarlijkse reiniging voorkomt branden en zorgt voor veiligheid van uw gezin en omgeving.
    </p>
  `;

  return (
    <TSSArticleTemplate
      title="Schoorsteen Vegen 2025 | ASPB Erkende Schoorsteenveger | Jaarlijkse Reiniging"
      description="🏠 Schoorsteen vegen 2025! ✅ ASPB erkende schoorsteenveger, jaarlijkse reiniging, buitendaks vegen, brandpreventie. Abonnement service - Nederland & België!"
      url="https://tbgs.nl/schoorsteen/schoorsteen-vegen"
      heroTitle="Schoorsteen vegen"
      heroSubtitle="Professionele schoorsteenreiniging door ASPB-erkende schoorsteenvegers. Jaarlijkse reiniging voor brandveiligheid en optimale rookafvoer."
      heroDescription="Buitendaks vegen met professioneel materiaal, veiligheidscontrole en reinigingscertificaat. Bescherm uw gezin met regelmatige schoorsteenreiniging."
      heroImage="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="ASPB erkende schoorsteenveger bij professionele schoorsteen reiniging"
      urgencyText="Jaarlijkse Reiniging Noodzakelijk"
      statsConfig={{
        stat1: { number: "ASPB", text: "Erkend lid" },
        stat2: { number: "365", text: "Dagen veiligheid" },
        stat3: { number: "100%", text: "Certificaat" }
      }}
      mainContent={mainContent}
      sections={sections}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Klaar voor Schoorsteen Reiniging?"
      ctaDescription="Zorg voor brandveiligheid met jaarlijkse schoorsteenreiniging door ASPB-erkende schoorsteenvegers. Plan vandaag nog uw afspraak."
      primaryButtonText="Schoorsteen Vegen Inplannen"
      secondaryButtonText="Direct Schoorsteenveger Bellen"
      onOpenContactModal={onOpenContactModal}
    />
  );
}