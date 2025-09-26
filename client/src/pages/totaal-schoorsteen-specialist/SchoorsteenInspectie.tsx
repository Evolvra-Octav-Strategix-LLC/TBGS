import TSSArticleTemplate from "@/components/templates/TSSArticleTemplate";

interface SchoorsteenInspectieProps {
  onOpenContactModal: () => void;
}

export default function SchoorsteenInspectie({ onOpenContactModal }: SchoorsteenInspectieProps) {
  const processSteps = [
    {
      title: "Afspraak & Voorbereiding",
      description: "Planning van camera-inspectie en voorbereiding van professionele inspectieapparatuur."
    },
    {
      title: "Camera-Inspectie Rookkanaal", 
      description: "Grondige inspectie met speciaal camerasysteem voor schoorstenen en ventilatiekanalen."
    },
    {
      title: "Fotografische Documentatie",
      description: "Uitgebreide fotodocumentatie van alle bevindingen door gespecialiseerde inspecteur."
    },
    {
      title: "Rapport & Advies",
      description: "Schriftelijk inspectie rapport met bevindingen en betrouwbaar advies voor veilig stoken."
    }
  ];

  const inspectieServices = [
    "Camera-inspectie rookkanaal - Grondige inspectie zonder hak- of breekwerk",
    "Fotografische documentatie - Uitgebreide foto's van alle bevindingen", 
    "Schriftelijk inspectie rapport - Officieel document voor verzekeringen",
    "Schade beoordeling - Professionele analyse van scheuren en lekkages",
    "Verstoppingen detectie - Opsporing van blokkades in rookkanalen",
    "Veiligheidsadvies - Betrouwbare aanbevelingen voor veilig stoken",
    "Verzekeringsdocumentatie - Onderhoudscertificaat voor schadegevallen",
    "Preventieve controle - Vroege detectie voorkomt dure reparaties"
  ];

  const inspectieIndicaties = [
    "Bestaande woning gekocht - Inspectie bij aankoop nieuwe woning",
    "Lange tijd niet gebruikt - Schoorsteen lange periode buiten gebruik",
    "Geen recent bewijs - Ontbreken van recente veeg- of controlebewijs",
    "Na schoorsteenbrand - Controle na brand in schoorsteenkanaal",
    "Teerlucht waarneming - Geur van teer op verdiepingen tijdens stoken",
    "Verzekeringseis - Vereiste voor verzekeringsdekking bij schade",
    "Preventieve controle - Regelmatige veiligheidscontrole",
    "Voor verkoop woning - Inspectie ter voorbereiding op verkoop"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven schoorsteen inspectie",
      "Amsterdam rookkanaal", 
      "Rotterdam schoorsteen",
      "Den Haag inspectie",
      "Utrecht rookkanaal",
      "Tilburg schoorsteen",
      "Breda inspectie",
      "'s-Hertogenbosch"
    ],
    belgium: [
      "Antwerpen schoorsteen inspectie",
      "Brussel rookkanaal",
      "Gent schoorsteen", 
      "Leuven inspectie",
      "Mechelen rookkanaal",
      "Turnhout schoorsteen",
      "Hasselt inspectie",
      "Genk rookkanaal"
    ]
  };

  const faqs = [
    {
      question: "Wanneer moet ik een schoorsteen inspectie laten doen?",
      answer: "Wij adviseren inspectie bij aankoop woning, na lange periode niet gebruiken, ontbreken recent onderhoudsbewijs, na schoorsteenbrand, of bij teerlucht tijdens stoken."
    },
    {
      question: "Hoe werkt camera-inspectie van schoorstenen?",
      answer: "Met speciaal camerasysteem voor schoorstenen inspecteren wij het gehele rookkanaal. Zonder hak- of breekwerk detecteren wij scheuren, verstoppingen en lekkages."
    },
    {
      question: "Waarom eisen verzekeringen een onderhoudscertificaat?",
      answer: "Verzekeringsmaatschappijen vragen bij schadegevallen naar recent inspectie bewijs. Zonder onderhoudscertificaat wordt schade vaak niet vergoed."
    },
    {
      question: "Wat gebeurt er als problemen worden ontdekt?",
      answer: "Alle bevindingen worden opgenomen in ons rapport met betrouwbaar advies voor veilig stoken. U krijgt een volledig overzicht van noodzakelijke maatregelen."
    }
  ];

  const sections = [
    {
      title: "Schoorsteen Inspectie Services",
      content: "",
      items: inspectieServices,
      icon: "fas fa-list"
    },
    {
      title: "Veel Voorkomende Problemen",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Uw <strong>schoorsteen</strong> loopt al eens onverwachts schade op. Vorst, regen en de tand des tijds kunnen de voegen beschadigen met losse stenen en lekkages tot gevolg. Storm en wind kunnen het lood losscheuren en er kunnen scheuren optreden in de bovenplaat van de <strong>schoorsteen</strong>.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Deze problemen zijn aanvankelijk zeer onschuldig en eenvoudig op te lossen maar dan is het wel uitermate belangrijk deze tijdig op te merken. Dat kan enkel en alleen door uw <strong>rookkanaal</strong> regelmatig uitgebreid te laten <strong>inspecteren</strong>.
        </p>
        
        <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-exclamation-triangle text-red-600 mr-3"></i>
            Veelvoorkomende Schoorsteenproblemen
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Beschadigde voegen door vorst en regen</li>
            <li>• Losse stenen en lekkages</li>
            <li>• Losgescheurd lood door storm</li>
            <li>• Scheuren in schoorsteenbovenplaat</li>
            <li>• Verstoppingen in rookkanaal</li>
            <li>• Tand des tijds slijtage</li>
          </ul>
        </div>
      `,
      icon: "fas fa-exclamation-triangle"
    },
    {
      title: "Schoorsteen Inspectie: Geen Overbodige Luxe",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Een veilige en goed geveegde <strong>schoorsteen</strong> is een noodzaak voor ieder pand. Ieder jaar sterven er onnodig talrijke Nederlanders ten gevolge van een brand en/of koolmonoxide vergiftiging. Ook verzekeringsmaatschappijen eisen bij schadegevallen maar al te vaak een onderhoudscertificaat.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Ook voor uw <strong>schoorsteen</strong> geldt: beter voorkomen dan genezen. Zonder regelmatige <strong>inspectie</strong> loopt u risico op schoorsteenbrand of koolmonoxidevergiftiging. Bij een schadegeval zal uw verzekeringsmaatschappij u steeds vragen of de <strong>schoorsteen</strong> wel recent aan een <strong>inspectie</strong> werd onderworpen.
        </p>

        <div class="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-shield-alt text-blue-600 mr-3"></i>
            Waarom Schoorsteen Inspectie Essentieel Is
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Preventie van jaarlijkse slachtoffers door CO-vergiftiging</li>
            <li>• Voorkoming van schoorsteenbranden</li>
            <li>• Verzekeringsdekking bij schadegevallen</li>
            <li>• Tijdige detectie van eenvoudig op te lossen problemen</li>
            <li>• Beter voorkomen dan genezen principe</li>
          </ul>
        </div>
      `,
      icon: "fas fa-shield-alt"
    },
    {
      title: "Wanneer is Inspectie Aangeraden?",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Wij raden een <strong>inspectie</strong> uitermate aan in verschillende gevallen. Regelmatige controle voorkomt gevaarlijke situaties en zorgt voor verzekeringsdekking bij eventuele schade.
        </p>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <i class="fas fa-home text-blue-600 mr-3"></i>
              Situaties voor Inspectie
            </h3>
            <div class="space-y-2 text-gray-700">
              <div>• <strong>Bestaande woning gekocht</strong> - Controle bij eigendomsoverdracht</div>
              <div>• <strong>Lange tijd niet gebruikt</strong> - Schoorsteen periode buiten gebruik</div>
              <div>• <strong>Geen recent bewijs</strong> - Ontbreken onderhoudsdocumentatie</div>
              <div>• <strong>Na schoorsteenbrand</strong> - Veiligheidscontrole na incident</div>
            </div>
          </div>
          
          <div class="space-y-4">
            <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <i class="fas fa-nose text-blue-600 mr-3"></i>
              Waarschuwingssignalen
            </h3>
            <div class="space-y-2 text-gray-700">
              <div>• <strong>Teerlucht tijdens stoken</strong> - Geur op verdiepingen</div>
              <div>• <strong>Verzekeringseis</strong> - Vereiste voor dekking</div>
              <div>• <strong>Preventieve controle</strong> - Regelmatige veiligheid</div>
              <div>• <strong>Voor woningverkoop</strong> - Documentatie gereedheid</div>
            </div>
          </div>
        </div>
      `,
      icon: "fas fa-clipboard-check"
    },
    {
      title: "Verloop van de Inspectie",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Een <strong>schoorsteen inspectie</strong> is veel minder indringend dan men vaak denkt. Met behulp van een grondige <strong>camera-inspectie</strong> kunnen wij uw <strong>schoorsteenkanaal</strong> uitgebreid bestuderen en <strong>inspecteren</strong>. Hiertoe gebruiken wij een camerasysteem speciaal gemaakt voor schoorstenen en andere ventilatiekanalen.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          De foto's die worden gemaakt worden alsook uitbundig onderzocht door een gespecialiseerd inspecteur. Met andere woorden: zonder hak- of breekwerk kunnen wij verstoppingen, lekkages of scheurtjes ontdekken.
        </p>

        <div class="bg-blue-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-video text-blue-600 mr-3"></i>
            Camera-Inspectie Voordelen
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Geen hak- of breekwerk noodzakelijk</li>
            <li>• Speciaal camerasysteem voor schoorstenen</li>
            <li>• Uitgebreide fotografische documentatie</li>
            <li>• Gespecialiseerde inspecteur analyse</li>
            <li>• Detectie van verstoppingen en scheuren</li>
            <li>• Minimaal invasieve onderzoeksmethode</li>
          </ul>
        </div>

        <div class="mt-8 bg-green-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-file-alt text-blue-600 mr-3"></i>
            Na de Inspectie
          </h3>
          <p class="text-gray-700 mb-4">
            Indien er bij deze <strong>inspectie</strong> kleine scheurtjes of andere problemen worden ontdekt, dan wordt dit niet enkel opgenomen in ons rapport maar krijgt u ook een uitgebreid en betrouwbaar advies om weer veilig te kunnen stoken.
          </p>
          <p class="text-gray-700">
            Is dit niet het geval dan kan u het resultaat van deze <strong>inspectie</strong> gebruiken om bij een eventueel later schadegeval aan uw verzekeringsmaatschappij voor te leggen.
          </p>
        </div>
      `,
      icon: "fas fa-video"
    }
  ];

  const mainContent = `
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Schoorsteen Inspectie: Geen Overbodige Luxe</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Professionele <strong>schoorsteen inspectie</strong> met camera-onderzoek voorkomt gevaarlijke situaties en zorgt voor verzekeringsdekking. Zonder hak- of breekwerk detecteren wij alle problemen in uw rookkanaal.
    </p>
  `;

  return (
    <TSSArticleTemplate
      title="Schoorsteen Inspectie 2025 | Camera-Onderzoek | Onderhoudscertificaat | Nederland & België"
      description="🏠 Schoorsteen inspectie 2025! ✅ Camera-onderzoek rookkanaal, zonder hakwerk, fotografische documentatie, onderhoudscertificaat voor verzekering - Nederland & België!"
      url="https://tbgs.nl/schoorsteen/schoorsteen-inspectie"
      heroTitle="Schoorsteen inspectie"
      heroSubtitle="Professionele camera-inspectie van rookkanalen. Geen hak- of breekwerk - uitgebreide fotografische documentatie voor verzekeringsdoeleinden."
      heroDescription="Grondige inspectie met speciaal camerasysteem detecteert verstoppingen, lekkages en scheuren. Schriftelijk rapport met betrouwbaar advies voor veilig stoken."
      heroImage="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Professionele camera-inspectie van schoorsteenkanaal door specialist"
      urgencyText="Verzekering Vereist Certificaat"
      statsConfig={{
        stat1: { number: "100%", text: "Camera-onderzoek" },
        stat2: { number: "0", text: "Hakwerk nodig" },
        stat3: { number: "24u", text: "Rapport gereed" }
      }}
      mainContent={mainContent}
      sections={sections}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Klaar voor Schoorsteen Inspectie?"
      ctaDescription="Voorkom gevaarlijke situaties en zorg voor verzekeringsdekking. Onze camera-inspectie geeft u zekerheid over de veiligheid van uw schoorsteen."
      primaryButtonText="Schoorsteen Inspectie Aanvragen"
      secondaryButtonText="Direct Specialist Bellen"
      onOpenContactModal={onOpenContactModal}
    />
  );
}