import TDSArticleTemplate from "@/components/templates/TDSArticleTemplate";

interface DakgootReinigenProps {
  onOpenContactModal: () => void;
}

export default function DakgootReinigen({ onOpenContactModal }: DakgootReinigenProps) {
  const processSteps = [
    {
      title: "Dakinspectie & Planning",
      description: "Grondige inspectie van dakgoten, regenpijpen en dakconstructie om vervuiling en schade vast te stellen."
    },
    {
      title: "Veilige Reiniging", 
      description: "Professioneel verwijderen van bladeren, mos, takjes en ander vuil uit dakgoten en regenpijpen."
    },
    {
      title: "Doorspoeling & Controle",
      description: "Doorspuiten van dakgoten en regenpijpen om volledige doorstroming te garanderen."
    },
    {
      title: "Reparatie & Beveiliging",
      description: "Directe reparatie van losgeraakte delen en plaatsing van boldraad roosters indien nodig."
    }
  ];

  const reinigingServices = [
    "Dakgoot reinigen - Verwijdering van bladeren, mos en vuil",
    "Regenpijp doorspuiten - Volledige doorstroming herstellen", 
    "Boldraad roosters - Preventieve bescherming tegen vervuiling",
    "Dakgoot reparatie - Bevestiging losgeraakte delen",
    "Jaarlijks onderhoudscontract - Automatische dakgoot reiniging",
    "Spoedservice - Direct ingrijpen bij verstopte dakgoten",
    "Dakgoot inspectie - Beoordeling staat en functionaliteit",
    "Preventief onderhoud - Voorkoming van waterschade"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven dakgoot reinigen",
      "Amsterdam dakgoten", 
      "Rotterdam onderhoud",
      "Den Haag reiniging",
      "Utrecht dakgoot",
      "Tilburg reinigen",
      "Breda dakgoten",
      "'s-Hertogenbosch"
    ],
    belgium: [
      "Antwerpen dakgoot",
      "Brussel reinigen",
      "Gent dakgoten", 
      "Leuven onderhoud",
      "Mechelen dakgoot",
      "Turnhout reinigen",
      "Hasselt dakgoten",
      "Genk reiniging"
    ]
  };

  const faqs = [
    {
      question: "Hoe vaak moet een dakgoot worden gereinigd?",
      answer: "Dakgoten moeten minimaal 2 keer per jaar worden gereinigd - in het voorjaar en na de herfst. Bij veel bomen in de buurt kan vaker nodig zijn voor optimale afvoer."
    },
    {
      question: "Wat kost dakgoot reinigen?",
      answer: "Voor €5,99 per maand krijgt u jaarlijkse dakgoot reiniging, dakinspectie, kleine reparaties én voorrang bij spoedgevallen. Eenmalige reiniging vanaf €150."
    },
    {
      question: "Wat gebeurt er bij verstopte dakgoten?",
      answer: "Verstopte dakgoten kunnen leiden tot wateroverlast, schade aan dak en gevels, rotting van kozijnen en in extreme gevallen kan de dakgoot losraken door het gewicht."
    },
    {
      question: "Bieden jullie onderhoudscontracten aan?",
      answer: "Ja, voor €5,99 per maand krijgt u automatische jaarlijkse reiniging, dakinspectie, kleine reparaties, spoedservice binnen 3 uur en voorrang bij stormschade."
    }
  ];

  const sections = [
    {
      title: "Dakgoot Reinigen Services",
      content: "",
      items: reinigingServices,
      icon: "fas fa-list"
    },
    {
      title: "Waarom Dakgoot Reinigen Essentieel Is",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>Dakgoten</strong> moeten regelmatig, zeker twee maal per jaar worden schoongemaakt. Want een <strong>dakgoot</strong> zorgt er voor dat het regenwater wordt afgevoerd naar het riool. Wanneer de <strong>dakgoot</strong> vervuild is en verstopt raakt kan het water niet meer wegstromen en zal zijn weg zoeken via het dak of de gevel.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Dit kan tot ernstige schade leiden aan dak, muren, of kozijnen bij lekkage of rot. Een overvolle <strong>dakgoot</strong> wordt te zwaar en kan losraken. Deze ingrijpende schade kan worden voorkomen door een betrekkelijk eenvoudig doch vervelend klusje.
        </p>
        
        <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-exclamation-triangle text-red-600 mr-3"></i>
            Gevolgen van Verstopte Dakgoten
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Waterschade aan dak en gevels</li>
            <li>• Rotting van kozijnen en houten delen</li>
            <li>• Vochtproblemen in huis</li>
            <li>• Losrakende dakgoten door overgewicht</li>
          </ul>
        </div>
      `,
      icon: "fas fa-exclamation-triangle"
    },
    {
      title: "TBGS Dakgoot Onderhoudscontract - €5,99/maand",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          TBGS B.V. heeft een oplossing voor deze werkzaamheden. Voor slechts <strong>€5,99 per maand</strong> helpen wij u met uw dak en geniet u van de volgende voordelen:
        </p>

        <div class="grid md:grid-cols-2 gap-6 mt-8">
          <div class="bg-white p-6 rounded-xl border">
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <i class="fas fa-calendar-check text-red-600 mr-3"></i>
              Jaarlijkse Service
            </h3>
            <ul class="space-y-2 text-gray-700">
              <li>• Jaarlijks dakgoten reinigen</li>
              <li>• Volledige dakinspectie</li>
              <li>• Kleine reparaties direct uitgevoerd</li>
              <li>• Preventief onderhoud</li>
            </ul>
          </div>
          
          <div class="bg-white p-6 rounded-xl border">
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <i class="fas fa-clock text-red-600 mr-3"></i>
              Spoedservice
            </h3>
            <ul class="space-y-2 text-gray-700">
              <li>• Binnen 3 uur geholpen bij lekkage</li>
              <li>• Voorrang bij stormschade</li>
              <li>• 24/7 bereikbaarheid</li>
              <li>• Directe noodreparaties</li>
            </ul>
          </div>
        </div>
      `,
      icon: "fas fa-euro-sign"
    },
    {
      title: "Professionele Dakgoot Reiniging",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Natuurlijk kunt u zelf uw <strong>dakgoten</strong> vrijhouden van blad, mos en takjes. Maar daarvoor moet u wel de ladder op, en het is een intensieve klus. TBGS B.V. maakt uw <strong>dakgoten</strong> desgewenst voor u schoon, op afspraak of als gratis service bij een contract voor <strong>dakonderhoud</strong>.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          De goten worden netjes schoongemaakt, en doorgespoten. Indien nodig plaatsen we een boldraad rooster op de regenpijp. Indien nodig bevestigen we losgeraakte delen van <strong>dakgoot</strong> of regenpijp.
        </p>

        <div class="bg-green-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-tools text-red-600 mr-3"></i>
            Onze Dakgoot Reiniging Service
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Volledige reiniging van dakgoten en regenpijpen</li>
            <li>• Doorspuiten voor optimale doorstroming</li>
            <li>• Plaatsing boldraad roosters ter preventie</li>
            <li>• Directe reparatie van losgeraakte delen</li>
            <li>• Professionele veiligheidsuitrusting</li>
            <li>• Opruiming van al het vuil</li>
          </ul>
        </div>
      `,
      icon: "fas fa-broom"
    }
  ];

  const mainContent = `
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Wanneer Moet de Dakgoot Worden Gereinigd?</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      U kunt ons bellen voor het incidenteel schoonmaken van uw <strong>dakgoot</strong>. Vindt u het prettiger dat wij voor u in de gaten houden wanneer het weer nodig is, is een <strong>onderhoudscontract</strong> ook mogelijk. Dan nemen wij vanzelf contact met u op.
    </p>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Dit contract kan ook in combinatie met een onderhoudscontract voor uw dak. Aan u de keuze. Met ons <strong>dakgoot reinigen</strong> service voorkomt u kostbare waterschade en houdt u uw dak in optimale staat.
    </p>
  `;

  return (
    <TDSArticleTemplate
      title="Dakgoot Reinigen 2025 | Professionele Dakgoot Onderhoud | €5,99/maand Contract"
      description="🏠 Dakgoot reinigen 2025! ✅ Professionele dakgoot reiniging 2x per jaar, boldraad roosters & spoedservice. €5,99/maand contract met volledige dakonderhoud. Nederland & België!"
      url="https://tbgs.nl/totaal-dak-specialist/dakgoot-reinigen"
      heroTitle="Dakgoot reinigen"
      heroSubtitle="Professionele dakgoot reiniging door gecertificeerde dakspecialisten. Voorkom waterschade met regelmatig onderhoud van dakgoten en regenpijpen."
      heroDescription="Voor €5,99 per maand krijgt u jaarlijkse dakgoot reiniging, dakinspectie, kleine reparaties en spoedservice binnen 3 uur."
      heroImage="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Professionele dakgoot reinigen door gecertificeerde dakspecialisten"
      urgencyText="€5,99/maand Onderhoudscontract"
      statsConfig={{
        stat1: { number: "2x", text: "Per jaar reinigen" },
        stat2: { number: "3u", text: "Spoedservice" },
        stat3: { number: "€5,99", text: "Per maand" }
      }}
      mainContent={mainContent}
      sections={sections}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Klaar voor Dakgoot Onderhoud?"
      ctaDescription="Voorkom dure waterschade met ons dakgoot onderhoudscontract. Voor €5,99 per maand zorgen wij voor schone dakgoten en een droog huis."
      primaryButtonText="€5,99 Contract Afsluiten"
      secondaryButtonText="Gratis Dakgoot Inspectie"
      onOpenContactModal={onOpenContactModal}
    />
  );
}