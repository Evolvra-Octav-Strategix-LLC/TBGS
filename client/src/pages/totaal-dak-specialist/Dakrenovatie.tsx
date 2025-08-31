import TDSArticleTemplate from "@/components/templates/TDSArticleTemplate";

interface DakrenovatieProps {
  onOpenContactModal: () => void;
}

export default function Dakrenovatie({ onOpenContactModal }: DakrenovatieProps) {
  const processSteps = [
    {
      title: "Inspectie & Advies",
      description: "Grondige dakinspectie om de staat van uw dak te beoordelen en advies over renovatiemogelijkheden."
    },
    {
      title: "Ontwerp & Planning", 
      description: "Ontwerp van de nieuwe dakconstructie met moderne materialen en technieken binnen oorspronkelijke stijl."
    },
    {
      title: "Materiaal & Vergunningen",
      description: "Bestelling van kwalitatieve materialen en aanvraag van benodigde bouwvergunningen."
    },
    {
      title: "Professionele Uitvoering",
      description: "Volledige dakrenovatie door gecertificeerde dakdekkers met garantie op materiaal en vakmanschap."
    }
  ];

  const renovatieTypes = [
    "Volledige dakrenovatie - Complete vernieuwing dakconstructie",
    "Dakpannen vervanging - Nieuwe dakpannen in oorspronkelijke stijl", 
    "Dakkapel renovatie - Modernisering of herstel dakkapellen",
    "Dakisolatie upgrade - Verbetering isolatiewaarde dak",
    "Dakgoot vernieuwing - Nieuwe dakgoten en regenpijpen",
    "Zinkwerk renovatie - Vervanging dakranden en boeidelen",
    "Historische dakrestauratie - Monumentale panden in oorspronkelijke stijl",
    "Energetische dakrenovatie - Duurzaamheid en energiebesparing"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven dakrenovatie",
      "Amsterdam dakdekker", 
      "Rotterdam dakwerken",
      "Den Haag renovatie",
      "Utrecht dakdekker",
      "Tilburg dakrenovatie",
      "Breda dakwerken",
      "'s-Hertogenbosch"
    ],
    belgium: [
      "Antwerpen dakrenovatie",
      "Brussel dakdekker",
      "Gent dakwerken", 
      "Leuven renovatie",
      "Mechelen dakdekker",
      "Turnhout dakrenovatie",
      "Hasselt dakwerken",
      "Genk dakdekker"
    ]
  };

  const faqs = [
    {
      question: "Wanneer is dakrenovatie noodzakelijk?",
      answer: "Dakrenovatie is nodig bij uitgebreide schade, veroudering van meer dan 25 jaar, of wanneer reparaties duurder worden dan vervanging. Ook bij moderne aanpassingen die u wilt herstellen naar oorspronkelijke stijl."
    },
    {
      question: "Wat kost een volledige dakrenovatie?",
      answer: "Wij bieden altijd een gratis inspectie en transparante offerte. Met 80+ jaar familietraditie adviseren wij u over de beste renovatiemogelijkheden voor uw dak."
    },
    {
      question: "Hoe lang duurt een dakrenovatie?",
      answer: "Een gemiddelde dakrenovatie duurt 1-3 weken afhankelijk van het dakoppervlak en weersomstandigheden. Wij plannen altijd rekening houdend met uw situatie."
    },
    {
      question: "Welke garantie krijg ik op dakrenovatie?",
      answer: "Volledige dakrenovatie krijgt 10 jaar garantie op materiaal en vakmanschap. Dakpannen krijgen fabrieksgarantie tot 30 jaar, EPDM rubber tot 20 jaar."
    }
  ];

  const sections = [
    {
      title: "Soorten Dakrenovatie",
      content: "",
      items: renovatieTypes,
      icon: "fas fa-list"
    },
    {
      title: "Vervanging van de Dakkapel",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Maar een <strong>dakrenovatie</strong> hoeft zeker niet altijd een totale facelift te zijn. Wanneer een pand te maken heeft gehad met brand- of waterschade of wanneer het herstel van veroudering meer is dan een eenvoudige reparatie spreken we ook van een <strong>dakrenovatie</strong>. 
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Natuurlijk is meestal een reparatie voldoende om schade of slijtage te verhelpen. Soms echter, is een <strong>dakrenovatie</strong> of een totale vervanging van de <strong>dakkapel</strong> nodig wanneer het dak beter in het geheel vernieuwd kan worden omdat de schade of slijtage te ingrijpend zijn.
        </p>
        
        <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-home text-red-600 mr-3"></i>
            Wanneer Dakkapel Vervanging?
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Structurele schade aan dakkapelconstructie</li>
            <li>• Verouderde isolatie en energieverlies</li>
            <li>• Vochtproblemen en lekkages</li>
            <li>• Moderne stijlverbetering gewenst</li>
          </ul>
        </div>
      `,
      icon: "fas fa-home"
    },
    {
      title: "Uw Dak Renoveren in Oorspronkelijke Stijl",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Een andere mogelijkheid is <strong>renoveren</strong> omdat u moderne aanpassingen aan uw woning wilt herstellen naar de oorspronkelijke stijl. Destijds werd dat gezien als verbetering maar u wilt het originele uiterlijk van de woning zichtbaar maken. 
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Voor degenen die juist het karakter willen behouden of herstellen is het dan nodig om te <strong>renoveren</strong>. <strong>Dakpannen</strong> in de oorspronkelijke stijl bijvoorbeeld, met de mogelijkheden tot <strong>dakisolatie</strong> en ventilatie van nu.
        </p>

        <div class="grid md:grid-cols-2 gap-6 mt-8">
          <div class="bg-white p-6 rounded-xl border">
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <i class="fas fa-history text-red-600 mr-3"></i>
              Historische Stijlen
            </h3>
            <ul class="space-y-2 text-gray-700">
              <li>• Jaren '30 woningen karakteristiek</li>
              <li>• Authentieke dakpannen en kleuren</li>
              <li>• Originele dakkapel vormen</li>
              <li>• Monumentale panden restauratie</li>
            </ul>
          </div>
          
          <div class="bg-white p-6 rounded-xl border">
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <i class="fas fa-leaf text-red-600 mr-3"></i>
              Moderne Technieken
            </h3>
            <ul class="space-y-2 text-gray-700">
              <li>• Verbeterde dakisolatie waarden</li>
              <li>• Geavanceerde ventilatie systemen</li>
              <li>• Duurzame materialen en technieken</li>
              <li>• Energiezuinige oplossingen</li>
            </ul>
          </div>
        </div>
      `,
      icon: "fas fa-palette"
    },
    {
      title: "Voordelen van Professionele Dakrenovatie",
      content: `
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-euro-sign text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Waardevermeerdering</h3>
            <p class="text-gray-600">
              Een gerenoveerd dak verhoogt de waarde van uw woning 
              aanzienlijk en verbetert de energielabel.
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-thermometer-half text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Energiebesparing</h3>
            <p class="text-gray-600">
              Moderne dakisolatie bespaart tot 30% op uw energiekosten 
              en zorgt voor een comfortabeler woonklimaat.
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-shield-alt text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Langdurige Bescherming</h3>
            <p class="text-gray-600">
              Een gerenoveerd dak gaat 25-30 jaar mee zonder grote 
              onderhoudswerkzaamheden.
            </p>
          </div>
        </div>
      `,
      icon: "fas fa-star"
    }
  ];

  const mainContent = `
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Wat is Dakrenovatie?</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      <strong>Dakrenovatie</strong> van een jaren dertig woning, een hele woonwijk of van de tweekapper op de hoek kennen we allemaal. Het herstellen van de oude glorie bij slijtage of veroudering of juist het te niet doen van moderne aanpassingen die het karakter van het pand ondermijnen, allemaal <strong>dakrenovatie</strong> en <strong>dakwerken</strong>.
    </p>
  `;

  return (
    <TDSArticleTemplate
      title="Dakrenovatie 2025 | Professionele Dakvernieuwing | Dakdekker Nederland & België"
      description="🏠 Dakrenovatie 2025 door gecertificeerde dakdekkers! ✅ Volledige dakvernieuwing, dakkapel renovatie & dakpannen vervanging in oorspronkelijke stijl. Garantie tot 10 jaar!"
      url="https://tbgs.nl/totaal-dak-specialist/dakrenovatie"
      heroTitle="Dakrenovatie"
      heroSubtitle="Professionele dakrenovatie door gecertificeerde dakdekkers. Volledige dakvernieuwing in oorspronkelijke stijl met moderne technieken."
      heroDescription="Van dakpannen vervanging tot complete dakkapel renovatie. Behoud het karakter van uw woning met hedendaagse isolatie en duurzaamheid."
      heroImage="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Professionele dakrenovatie met dakpannen vervanging door gecertificeerde dakdekkers"
      urgencyText="Gratis Dakrenovatie Inspectie"
      statsConfig={{
        stat1: { number: "25+", text: "Jaar garantie" },
        stat2: { number: "200+", text: "Daken gerenoveerd" },
        stat3: { number: "30%", text: "Energiebesparing" }
      }}
      mainContent={mainContent}
      sections={sections}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Klaar voor Dakrenovatie?"
      ctaDescription="Ontdek de mogelijkheden voor uw dakrenovatie. Onze dakdekkers adviseren u graag over dakpannen, dakisolatie en dakkapel renovatie in oorspronkelijke stijl."
      primaryButtonText="Gratis Dakrenovatie Offerte"
      secondaryButtonText="Direct Dakdekker Bellen"
      onOpenContactModal={onOpenContactModal}
    />
  );
}