import TDSArticleTemplate from "@/components/templates/TDSArticleTemplate";

interface DakisolatieProps {
  onOpenContactModal: () => void;
}

export default function Dakisolatie({ onOpenContactModal }: DakisolatieProps) {
  const processSteps = [
    {
      title: "Isolatie Inspectie",
      description: "Thermografisch onderzoek om huidige isolatiewaarde en energieverlies punten vast te stellen."
    },
    {
      title: "Advies & Materiaaladvies", 
      description: "Persoonlijk advies over isolatiemethoden, materialen en subsidie mogelijkheden voor uw situatie."
    },
    {
      title: "Professionele Installatie",
      description: "Vakkundige aanbrenging van dakisolatie met juiste ventilatie en dampschermen."
    },
    {
      title: "Kwaliteitscontrole",
      description: "Controle op juiste aanbrenging, ventilatie en afwerking met garantie op materiaal en uitvoering."
    }
  ];

  const isolatieTypes = [
    "Dakisolatie - Isolatie van hellende en platte daken",
    "Spouwmuurisolatie - Vulling van spouwmuren met isolatiemateriaal", 
    "Vloerisolatie - Isolatie van begane grond en verdiepingsvloeren",
    "Dakkapel isolatie - Specifieke isolatie voor dakkapellen",
    "Glasisolatie - HR++ en triple glas installatie",
    "Isolatieplaten - Rigide isolatieplaten voor diverse toepassingen",
    "PIR isolatie - Polyisocyanuraat isolatie voor hoge R-waarden",
    "Rockwool isolatie - Steenwol voor geluid- en warmte-isolatie"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven dakisolatie",
      "Amsterdam isolatie", 
      "Rotterdam dakisolatie",
      "Den Haag isoleren",
      "Utrecht dakisolatie",
      "Tilburg isolatie",
      "Breda dakisolatie",
      "'s-Hertogenbosch"
    ],
    belgium: [
      "Antwerpen dakisolatie",
      "Brussel isolatie",
      "Gent dakisolatie", 
      "Leuven isoleren",
      "Mechelen dakisolatie",
      "Turnhout isolatie",
      "Hasselt dakisolatie",
      "Genk isoleren"
    ]
  };

  const faqs = [
    {
      question: "Wat zijn de voordelen van dakisolatie?",
      answer: "Dakisolatie bespaart tot 30% op energiekosten, verhoogt het wooncomfort, voorkomt condensatie en verhoogt de woningwaarde. Ook in de zomer houdt het de warmte buiten."
    },
    {
      question: "Welke isolatiematerialen gebruiken jullie?",
      answer: "Wij werken met isolatieplaten, PIR isolatie en Rockwool. De keuze hangt af van de toepassing, R-waarde vereisten en uw budget. Wij adviseren altijd het meest geschikte materiaal."
    },
    {
      question: "Kan ik subsidie krijgen voor dakisolatie?",
      answer: "Ja, er zijn verschillende subsidies beschikbaar voor isolatie. Wij bekijken graag met u de mogelijkheden en helpen bij de aanvraag van beschikbare regelingen."
    },
    {
      question: "Hoe lang duurt dakisolatie aanbrengen?",
      answer: "Dakisolatie duurt gemiddeld 1-3 dagen afhankelijk van het dakoppervlak en isolatiemethode. Wij werken efficiënt met minimale overlast voor bewoners."
    }
  ];

  const sections = [
    {
      title: "Isolatie Services",
      content: "",
      items: isolatieTypes,
      icon: "fas fa-list"
    },
    {
      title: "Waarom een Dak Isoleren?",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Natuurlijk dient <strong>isolatie</strong> om de kostbare warmte binnen te houden, en koude buiten met de bedoeling om de energierekening laag te houden. Maar ook andersom dient <strong>isolatie</strong> zijn doel, denk maar eens aan de warme zomerzon op een plat dak, dan is het prettig om de warmte buiten te houden.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Maar <strong>isolatie</strong> kan ook dienen om geluid of trillingen van een vloer te dempen om overlast op de verdieping er onder te voorkomen. Kortom, <strong>isolatie</strong> is er in vele vormen en met verschillende doeleinden.
        </p>
        
        <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-thermometer-half text-red-600 mr-3"></i>
            Voordelen van Dakisolatie
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Tot 30% energiebesparing op verwarmingskosten</li>
            <li>• Comfortabeler woonklimaat jaar rond</li>
            <li>• Verhoging woningwaarde en energielabel</li>
            <li>• Preventie van condensatie en vochtproblemen</li>
          </ul>
        </div>
      `,
      icon: "fas fa-thermometer-half"
    },
    {
      title: "Verschillende Isolatie Methoden",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Het isoleren van uw huis kan om verschillende redenen, en op verschillende manieren. Wij kijken met u wat uw wensen zijn en adviseren hoe dit verwezenlijkt kan worden. Er wordt dan rekening gehouden met of het nieuwbouw is, of bestaande bouw, met de toepassing van de ruimte, de ventilatie en de afwerking.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          TDS B.V. werkt met verschillende materialen en methoden, denk daarbij aan bijvoorbeeld <strong>isolatieplaten</strong>, <strong>PIR isolatie</strong> en <strong>Rockwool</strong>. Niet alles is altijd in iedere situatie even geschikt waarbij fouten in aanbrenging of de keuze van de <strong>isolatie</strong> kunnen leiden tot vervelende gevolgen.
        </p>

        <div class="grid md:grid-cols-3 gap-6 mt-8">
          <div class="bg-white p-6 rounded-xl border text-center">
            <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-layer-group text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Isolatieplaten</h3>
            <p class="text-gray-600">
              Rigide isolatieplaten voor hellende daken 
              en specifieke toepassingen.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl border text-center">
            <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-fire text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">PIR Isolatie</h3>
            <p class="text-gray-600">
              Polyisocyanuraat isolatie met hoge 
              R-waarden en brandvertragende eigenschappen.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl border text-center">
            <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-volume-mute text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Rockwool</h3>
            <p class="text-gray-600">
              Steenwol isolatie voor warmte- en 
              geluidsisolatie met vochtregulerend vermogen.
            </p>
          </div>
        </div>
      `,
      icon: "fas fa-tools"
    },
    {
      title: "Subsidie Mogelijkheden 2025",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          TBGS B.V. geeft u een eerlijk advies over de beste <strong>isolatie</strong> oplossing voor uw situatie. Ook bekijken wij met u de mogelijkheden tot subsidie voor <strong>dakisolatie</strong> en energiebesparende maatregelen.
        </p>

        <div class="bg-green-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-euro-sign text-red-600 mr-3"></i>
            Subsidies & Financiering 2025
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• ISDE subsidie voor isolatiemaatregelen</li>
            <li>• BTW-verlaging op energiebesparende renovaties</li>
            <li>• Gemeentelijke isolatie regelingen</li>
            <li>• Energiebespaarlening tegen lage rente</li>
            <li>• Wij helpen bij aanvraag en begeleiding</li>
          </ul>
        </div>
      `,
      icon: "fas fa-hand-holding-euro"
    }
  ];

  const mainContent = `
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Dakisolatie - Isoleer Uw Dak en Bespaar op Energie</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Ook voor het isoleren van uw dak bent u bij ons aan het goede adres. En niet alleen voor <strong>dakisolatie</strong> maar ook voor bijvoorbeeld <strong>spouwmuurisolatie</strong>, <strong>vloerisolatie</strong>, <strong>dakkapel isolatie</strong> en <strong>glasisolatie</strong>.
    </p>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      De laatste is de meest bekende vorm van <strong>isolatie</strong>, iedereen kent de term 'dubbel glas', maar <strong>isolatie</strong> gaat tegenwoordig veel verder en heeft vele doeleinden voor optimaal wooncomfort en energiebesparing.
    </p>
  `;

  return (
    <TDSArticleTemplate
      title="Dakisolatie 2025 | Energiebesparing tot 30% | Subsidie & PIR Isolatie | Nederland & België"
      description="🏠 Dakisolatie 2025! ✅ Tot 30% energiebesparing met PIR isolatie, Rockwool & isolatieplaten. Subsidie advies & professionele installatie. Nederland & België!"
      url="https://tbgs.nl/totaal-dak-specialist/dakisolatie"
      heroTitle="Dakisolatie"
      heroSubtitle="Professionele dakisolatie voor maximale energiebesparing. Isolatieplaten, PIR isolatie en Rockwool door gecertificeerde isolatie specialisten."
      heroDescription="Bespaar tot 30% op energiekosten met moderne dakisolatie. Wij adviseren over subsidies en installeren met garantie op materiaal en vakmanschap."
      heroImage="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Professionele dakisolatie installatie met PIR isolatieplaten"
      urgencyText="Gratis Isolatie Advies + Subsidiecheck"
      statsConfig={{
        stat1: { number: "30%", text: "Energiebesparing" },
        stat2: { number: "25+", text: "Jaar garantie" },
        stat3: { number: "R6+", text: "Isolatiewaarde" }
      }}
      mainContent={mainContent}
      sections={sections}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Klaar voor Dakisolatie?"
      ctaDescription="Bespaar direct op energiekosten met professionele dakisolatie. Onze isolatie specialisten adviseren u graag over subsidies en de beste isolatie oplossing."
      primaryButtonText="Gratis Isolatie Advies"
      secondaryButtonText="Subsidiecheck Aanvragen"
      onOpenContactModal={onOpenContactModal}
    />
  );
}