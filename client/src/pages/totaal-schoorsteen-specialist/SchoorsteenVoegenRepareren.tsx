import TSSArticleTemplate from "@/components/templates/TSSArticleTemplate";

interface SchoorsteenVoegenReparerenProps {
  onOpenContactModal: () => void;
}

export default function SchoorsteenVoegenRepareren({ onOpenContactModal }: SchoorsteenVoegenReparerenProps) {
  const processSteps = [
    {
      title: "Uitgebreide Inspectie",
      description: "Grondige inspectie van schoorsteenstaat, voegen en detectie van verzanding en lekkages."
    },
    {
      title: "Voegwerk Analyse", 
      description: "Beoordeling van voegwerk kwaliteit en bepaling van reparatie of volledige renovatie noodzaak."
    },
    {
      title: "Professionele Reparatie",
      description: "Vakkundige reparatie van voegen, bovenplaat en loodwerk met moderne technieken en materialen."
    },
    {
      title: "Veiligheidstest & Onderhoud",
      description: "Complete veiligheidstest en advies over onderhoudsabonnement voor toekomstige zorg."
    }
  ];

  const reparatieServices = [
    "Schoorsteen voegen - Professioneel voegwerk herstelling en vernieuwing",
    "Bovenplaat repareren - Reparatie van beschadigde schoorsteenbovenplaten", 
    "Loodwerk vernieuwen - Vervanging van storm- en windschade aan loodwerk",
    "Verzanding behandeling - Herstel van poreuze en verzande voegen",
    "Lekkage reparatie - Directe reparatie van schoorsteenlekkages",
    "Mossen/algen reiniging - Verwijdering van noordzijde aanslag",
    "Noodreparaties - Spoedreparaties bij acute problemen",
    "Onderhoudsabonnement - Preventief onderhoud volgens afspraak"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven schoorsteen reparatie",
      "Amsterdam voegwerk", 
      "Rotterdam schoorsteen",
      "Den Haag reparatie",
      "Utrecht voegwerk",
      "Tilburg schoorsteen",
      "Breda reparatie",
      "'s-Hertogenbosch"
    ],
    belgium: [
      "Antwerpen schoorsteen reparatie",
      "Brussel voegwerk",
      "Gent schoorsteen", 
      "Leuven reparatie",
      "Mechelen voegwerk",
      "Turnhout schoorsteen",
      "Hasselt reparatie",
      "Genk voegwerk"
    ]
  };

  const faqs = [
    {
      question: "Wat is verzanding van schoorsteenvoegen?",
      answer: "Verzanding betekent dat voegen poreus worden door weersinvloeden. Dit kan leiden tot lekkages en gevaarlijke CO-dampen in huis door slechte rookafvoer."
    },
    {
      question: "Wanneer moet ik mijn schoorsteenvoegen laten repareren?",
      answer: "Bij regelmatig gebruik adviseren wij jaarlijkse inspectie. Vooral bij oude schoorstenen, lange tijd niet gebruikt, of waarneembare lekkage problemen."
    },
    {
      question: "Wat houdt het onderhoudsabonnement in?",
      answer: "Maatwerk abonnement waarbij u zelf bepaalt welke diensten u wilt: schoorsteenonderhoud, dakkapelreiniging, dakgootvegen, ramen wassen. Voorkom achterstallig onderhoud."
    },
    {
      question: "Hoe voorkom ik gevaarlijke CO-dampen?",
      answer: "Regelmatige inspectie en tijdige reparatie van voegwerk voorkomt lekkages. Verzande voegen kunnen rookterugslag veroorzaken met levensgevaarlijke CO-vergiftiging."
    }
  ];

  const sections = [
    {
      title: "Schoorsteen Voegen/Reparatie Services",
      content: "",
      items: reparatieServices,
      icon: "fas fa-list"
    },
    {
      title: "Schoorsteen Voegen/Repareren",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Wanneer u regelmatig gebruik maakt van uw <strong>schoorsteen</strong>, is het verstandig deze periodiek te laten vegen, dat is algemeen bekend. Minder bekend is dat schoorstenen op den duur lekkages kunnen gaan vertonen, met gevaar voor de gezondheid tot gevolg.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Schoorstenen hebben de neiging om te gaan <strong>verzanden</strong>, wat inhoudt dat de <strong>voegen</strong> poreus worden. Bij verzanden kan lekkage van het afvoerkanaal ontstaan waardoor rook het huis in lekt; een levensgevaarlijke bron van <strong>koolmonoxidedampen</strong>.
        </p>
        
        <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-skull-crossbones text-red-600 mr-3"></i>
            Levensgevaarlijke CO-Dampen
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Verzanding maakt voegen poreus</li>
            <li>• Lekkage van afvoerkanaal ontstaat</li>
            <li>• Rook lekt het huis binnen</li>
            <li>• Koolmonoxide vergiftiging mogelijk</li>
            <li>• Regelmatige controle voorkomt gevaar</li>
          </ul>
        </div>
      `,
      icon: "fas fa-tools"
    },
    {
      title: "Schoorsteen Lekkages - Kies voor Jaarlijkse Inspecties",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Om allerhande lekkages te voorkomen is het dus verstandig om oude schoorstenen tijdig te laten <strong>inspecteren</strong>. Houdt hier in bijzonder rekening mee wanneer een <strong>schoorsteen</strong> lange tijd niet is gebruikt of wanneer deze op leeftijd begint te raken.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Uw <strong>schoorsteen repareren</strong>? Wij gebruiken diverse methoden om uw <strong>schoorsteen</strong> weer gebruiksklaar te maken. Denk bijvoorbeeld aan de <strong>schoorsteen voegen</strong>, de bovenplaat repareren en het lood vernieuwen.
        </p>

        <div class="grid md:grid-cols-3 gap-6 mt-8">
          <div class="bg-white p-6 rounded-xl border text-center">
            <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-hammer text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Voegwerk</h3>
            <p class="text-gray-600">
              Professionele reparatie van 
              verzande en poreuze voegen.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl border text-center">
            <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-square text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Bovenplaat</h3>
            <p class="text-gray-600">
              Reparatie van beschadigde 
              schoorsteenbovenplaten.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl border text-center">
            <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-shield-alt text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Loodwerk</h3>
            <p class="text-gray-600">
              Vernieuwing van storm- en 
              windschade aan loodwerk.
            </p>
          </div>
        </div>
      `,
      icon: "fas fa-search"
    },
    {
      title: "Schoorsteen Renovatie Voorkomt Verdere Problemen",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Allereerst wordt door ons een <strong>inspectie</strong> uitgevoerd om de staat van de <strong>schoorsteen</strong> vast te stellen. Soms is het alleen nodig om de <strong>schoorsteen</strong> te reinigen. Vooral aan de noordzijde hebben schoorstenen de neiging om mossen en algen aan te trekken.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Verkeren echter de <strong>voegen</strong> van de opbouw in slechte staat, dan moet worden overgegaan tot <strong>renovatie</strong>. De <strong>schoorsteen voegen</strong> is dan vaak nog goed mogelijk. Het grootste gevaar van deze werkzaamheden schuilt in het uitfrezen van die <strong>voegen</strong>.
        </p>

        <div class="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-leaf text-blue-600 mr-3"></i>
            Noordzijde Schoorsteenproblemen
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Mossen en algen aantrekking aan noordzijde</li>
            <li>• Vochtigheid door minder zonlicht</li>
            <li>• Extra aandacht voor noordzijde reiniging</li>
            <li>• Preventieve behandeling tegen organismen</li>
          </ul>
        </div>
      `,
      icon: "fas fa-hammer"
    },
    {
      title: "Totaal Onderhoud Specialist Onderhoudsabonnement",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Kies voor betrouwbaarheid, en voorkom achterstallig onderhoud dankzij het <strong>onderhoudsabonnement</strong> van Totaal Schoorsteen Specialist. Onze vakmensen zorgen ervoor dat uw <strong>schoorsteen</strong> jaarlijks gecontroleerd wordt en daar waar nodig is gerepareerd wordt.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Tevens kunt u het <strong>onderhoudsabonnement</strong> zo samenstellen, dat wij naast het <strong>schoorsteenonderhoud</strong> ook het overige onderhoud voor onze rekening nemen. Denk hierbij aan dakkapelreiniging, dakgootvegen en ramen wassen.
        </p>

        <div class="bg-green-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-calendar-check text-blue-600 mr-3"></i>
            Onderhoudsabonnement Voordelen
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Voorkom achterstallig onderhoud</li>
            <li>• Jaarlijkse controle gegarandeerd</li>
            <li>• Reparaties waar noodzakelijk</li>
            <li>• Maatwerk samenstelling mogelijk</li>
            <li>• Dakkapelreiniging inbegrepen</li>
            <li>• Dakgootvegen service</li>
            <li>• Ramen wassen service</li>
            <li>• Zekerheid en betrouwbaarheid</li>
          </ul>
        </div>
      `,
      icon: "fas fa-handshake"
    }
  ];

  const mainContent = `
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Schoorsteen Voegen/Repareren</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Professionele <strong>schoorsteen reparatie</strong> en <strong>voegwerk</strong> door ervaren specialisten. Voorkom levensgevaarlijke CO-dampen door tijdige reparatie van verzande en poreuze voegen.
    </p>
  `;

  return (
    <TSSArticleTemplate
      title="Schoorsteen Voegen Repareren 2025 | CO-Preventie | Onderhoudsabonnement | Nederland & België"
      description="🏠 Schoorsteen voegen repareren 2025! ✅ Voorkom CO-vergiftiging, verzanding behandeling, onderhoudsabonnement, bovenplaat & loodwerk - Nederland & België!"
      url="https://tbgs.nl/schoorsteen/schoorsteen-voegen-repareren"
      heroTitle="Schoorsteen voegen/repareren"
      heroSubtitle="Professionele reparatie van verzande voegen en schoorsteenlekkages. Voorkom levensgevaarlijke CO-dampen met vakkundig voegwerk."
      heroDescription="Complete schoorsteenreparatie inclusief voegen, bovenplaat en loodwerk. Onderhoudsabonnement voorkomt achterstallig onderhoud en zorgt voor jaarlijkse controle."
      heroImage="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Professionele schoorsteen voegwerk reparatie door specialist"
      urgencyText="Onderhoudsabonnement Beschikbaar"
      statsConfig={{
        stat1: { number: "100%", text: "CO-preventie" },
        stat2: { number: "24/7", text: "Noodservice" },
        stat3: { number: "Maatwerk", text: "Abonnement" }
      }}
      mainContent={mainContent}
      sections={sections}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Klaar voor Schoorsteen Reparatie?"
      ctaDescription="Voorkom achterstallig onderhoud met ons onderhoudsabonnement. Jaarlijkse controle en reparaties waar nodig - alles op maat samengesteld."
      primaryButtonText="Onderhoudsabonnement Samenstellen"
      secondaryButtonText="Noodreparatie Aanvragen"
      onOpenContactModal={onOpenContactModal}
    />
  );
}