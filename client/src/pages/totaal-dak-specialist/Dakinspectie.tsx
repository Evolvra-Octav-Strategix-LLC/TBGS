import TDSArticleTemplate from "@/components/templates/TDSArticleTemplate";

interface DakinspectieProps {
  onOpenContactModal: () => void;
}

export default function Dakinspectie({ onOpenContactModal }: DakinspectieProps) {
  const processSteps = [
    {
      title: "Gratis Dakinspectie",
      description: "Uitgebreide visuele inspectie van dak, dakpannen, dakgoten en constructie door gecertificeerde dakspecialisten."
    },
    {
      title: "Thermografisch Onderzoek", 
      description: "Geavanceerde thermische scan om verborgen lekkages, koudebruggen en isolatieproblemen op te sporen."
    },
    {
      title: "Schriftelijk Adviesrapport",
      description: "Gedetailleerd rapport met bevindingen, prioriteiten en kostenraming voor onderhoud of reparaties."
    },
    {
      title: "Persoonlijk Adviesgesprek",
      description: "Uitleg van bevindingen en advies over preventieve maatregelen, reparaties of renovatie opties."
    }
  ];

  const inspectieTypes = [
    "Dak inspectie - Volledige inspectie van dakconstructie en bedekking",
    "Dakkapel inspectie - Specifieke controle van dakkapellen en aansluitingen", 
    "Schoorsteen inspectie - Controle van schoorsteenconstructie en afdichtingen",
    "Dakpannen inspectie - Beoordeling staat en bevestiging dakpannen",
    "Dakgoot inspectie - Controle afvoersysteem en bevestigingen",
    "Lekkage inspectie - Opsporing van actieve en potentiële lekkages",
    "Isolatie inspectie - Thermografische controle isolatiewaarden",
    "Stormschade inspectie - Beoordeling schade na extreme weersomstandigheden"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven dakinspectie",
      "Amsterdam dakadvies", 
      "Rotterdam inspectie",
      "Den Haag dakcontrole",
      "Utrecht dakinspectie",
      "Tilburg inspectie",
      "Breda dakadvies",
      "'s-Hertogenbosch"
    ],
    belgium: [
      "Antwerpen dakinspectie",
      "Brussel dakadvies",
      "Gent inspectie", 
      "Leuven dakcontrole",
      "Mechelen dakinspectie",
      "Turnhout inspectie",
      "Hasselt dakadvies",
      "Genk dakcontrole"
    ]
  };

  const faqs = [
    {
      question: "Wat kost een dakinspectie?",
      answer: "Onze dakinspectie met adviesrapport is volledig gratis en vrijblijvend. U krijgt een uitgebreid schriftelijk rapport met bevindingen en aanbevelingen zonder verplichtingen."
    },
    {
      question: "Hoe vaak moet ik mijn dak laten inspecteren?",
      answer: "Wij adviseren een dakinspectie elke 3-5 jaar, na extreme weersomstandigheden en altijd bij aankoop van een woning. Preventie voorkomt dure reparaties."
    },
    {
      question: "Wat wordt er gecontroleerd bij een dakinspectie?",
      answer: "Volledige controle van dakpannen, goten, isolatie, constructie, aansluitingen, schoorsteenconstructie en dakkapellen. Ook thermografisch onderzoek naar verborgen problemen."
    },
    {
      question: "Krijg ik een schriftelijk rapport?",
      answer: "Ja, u ontvangt altijd een uitgebreid schriftelijk adviesrapport met foto's, bevindingen, prioriteiten en kostenramingen voor eventueel onderhoud."
    }
  ];

  const sections = [
    {
      title: "Dakinspectie Services",
      content: "",
      items: inspectieTypes,
      icon: "fas fa-list"
    },
    {
      title: "Preventieve Dakinspectie",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Over het algemeen hebben mensen geen idee van de staat van hun dak. Slijtage of schade door weersinvloeden of tijd zijn een onbekend gegeven. Op het moment dat duidelijk wordt dat onderhoud nodig is, is het dikwijls al te laat en is de schade reeds geleden.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Maar ook dan is <strong>inspectie</strong> van de schade verstandig om erger te voorkomen. TBGS B.V. biedt meerdere <strong>inspectie</strong> mogelijkheden aan om de staat van uw dak professioneel te beoordelen.
        </p>
        
        <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-shield-alt text-red-600 mr-3"></i>
            Waarom Preventieve Dakinspectie?
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Vroegtijdige ontdekking van problemen</li>
            <li>• Voorkoming van kostbare reparaties</li>
            <li>• Verlenging levensduur van uw dak</li>
            <li>• Zekerheid over staat van uw dak</li>
          </ul>
        </div>
      `,
      icon: "fas fa-shield-alt"
    },
    {
      title: "Gratis Inspectie en Advies",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Wanneer er zich calamiteiten voor doen, u lekkage heeft, of schade kunt u ons natuurlijk bellen voor een <strong>inspectie</strong> van uw dak. Maar verstandiger is om uw dak met enige regelmaat te laten inspecteren voordat er werkelijk iets aan de hand is.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          TBGS B.V. controleert uw dak, en geeft <strong>advies</strong> over de mogelijke werkzaamheden. <strong>Advies</strong> over de levensduur, of <strong>advies</strong> over (preventieve) reparaties. En dit alles is volkomen <strong>gratis</strong>!
        </p>

        <div class="bg-green-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-gift text-red-600 mr-3"></i>
            Gratis Dakinspectie Voordelen
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Volledig gratis en vrijblijvend</li>
            <li>• Schriftelijk adviesrapport met foto's</li>
            <li>• Kostenraming voor eventueel onderhoud</li>
            <li>• Prioritering van noodzakelijke werkzaamheden</li>
            <li>• Advies over levensduur en onderhoud</li>
          </ul>
        </div>
      `,
      icon: "fas fa-gift"
    },
    {
      title: "Advies Geeft Voorspelling voor Later",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          TBGS B.V. maakt een analyse en omschrijft als een soort APK de eventuele schade en geeft <strong>advies</strong>. Dit <strong>advies</strong> is vrijblijvend en kosteloos. Het <strong>advies</strong> kan een aanpassing zijn of een prognose van hoe lang uw dak nog meegaat.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Aan de hand daarvan kunt u een afweging maken of dat u één en ander laat zoals het is, laat repareren of dat u er voor kiest om bijvoorbeeld het dak te renoveren. Op deze manier kunt u eventuele kosten ook begroten en komt het niet –zoals bij een lekkage- als een verrassing.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          En het is toch altijd fijn om te weten wat er boven uw hoofd hangt?
        </p>

        <div class="bg-blue-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-calendar-alt text-red-600 mr-3"></i>
            Dakadvies zoals een APK
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Analyse van huidige dakstaat</li>
            <li>• Prognose levensduur dak</li>
            <li>• Prioritering reparaties</li>
            <li>• Kostenbegroting voor onderhoud</li>
            <li>• Preventieve maatregelen advies</li>
          </ul>
        </div>
      `,
      icon: "fas fa-search"
    }
  ];

  const mainContent = `
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Gratis Inspectie en Advies voor Uw Dak</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Een professionele <strong>dakinspectie</strong> voorkomt onaangename verrassingen en dure reparaties. Onze gecertificeerde dakspecialisten beoordelen de staat van uw dak en geven eerlijk advies over onderhoud, reparaties of renovatie.
    </p>
  `;

  return (
    <TDSArticleTemplate
      title="Gratis Dakinspectie 2025 | Professioneel Dakadvies | Thermografisch Onderzoek"
      description="🏠 Gratis dakinspectie 2025! ✅ Professionele dakinspectie met schriftelijk rapport, thermografisch onderzoek & kostenadvies. Voorkom dure reparaties - Nederland & België!"
      url="https://tbgs.nl/totaal-dak-specialist/dakinspectie"
      heroTitle="Dakinspectie en advies"
      heroSubtitle="Gratis professionele dakinspectie door gecertificeerde dakspecialisten. Voorkom dure reparaties met tijdige ontdekking van dakproblemen."
      heroDescription="Volledige dakinspectie met thermografisch onderzoek, schriftelijk adviesrapport en kostenraming - volledig gratis en vrijblijvend."
      heroImage="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Professionele dakinspectie door gecertificeerde dakspecialist met thermische camera"
      urgencyText="100% Gratis Dakinspectie"
      statsConfig={{
        stat1: { number: "100%", text: "Gratis inspectie" },
        stat2: { number: "24u", text: "Schriftelijk rapport" },
        stat3: { number: "15+", text: "Jaar ervaring" }
      }}
      mainContent={mainContent}
      sections={sections}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Klaar voor Gratis Dakinspectie?"
      ctaDescription="Weet u wat er boven uw hoofd hangt? Onze dakspecialisten inspecteren uw dak gratis en geven eerlijk advies over onderhoud en reparaties."
      primaryButtonText="Gratis Dakinspectie Boeken"
      secondaryButtonText="Direct Dakspecialist Bellen"
      onOpenContactModal={onOpenContactModal}
    />
  );
}