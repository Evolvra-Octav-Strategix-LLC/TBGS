import TBSArticleTemplate from "@/components/templates/TBSArticleTemplate";

interface NieuwbouwProps {
  onOpenContactModal: () => void;
}

export default function Nieuwbouw({ onOpenContactModal }: NieuwbouwProps) {
  const processSteps = [
    {
      title: "Ontwerp & Voorbereiding",
      description: "Architectonisch ontwerp van uw droomhuis met alle gewenste specificaties en stijlkenmerken."
    },
    {
      title: "Vergunningen & Planning", 
      description: "Complete vergunningaanvraag en gedetailleerde bouwplanning met alle disciplines."
    },
    {
      title: "Fundering & Ruwbouw",
      description: "Professionele fundering en ruwbouw volgens moderne bouwstandaarden en technieken."
    },
    {
      title: "Afbouw & Oplevering",
      description: "Volledige afbouw met kwaliteitsmaterialen en sleutelklare oplevering van uw nieuwe woning."
    }
  ];

  const nieuwbouwTypes = [
    "Eengezinswoning",
    "Villa nieuwbouw - Luxe villa's met hoogwaardige afwerking", 
    "Twee-onder-één-kap - Moderne twee-onder-één-kap woningen",
    "Bungalow - Gelijkvloerse woningen voor alle levensfasen",
    "Energieneutrale woning - Duurzame woningen met lage energiekosten",
    "Passieve woning - Hooggeïsoleerde woningen met natuurlijke ventilatie",
    "Moderne architectuur - Strakke, eigentijdse woningontwerpen",
    "Traditionele bouw - Klassieke woningen in traditionele stijl"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven nieuwbouw",
      "Amsterdam nieuwbouw woning", 
      "Rotterdam bouw",
      "Den Haag nieuwbouw",
      "Utrecht nieuwbouw woning",
      "Tilburg nieuwbouw",
      "Breda bouw",
      "'s-Hertogenbosch"
    ],
    belgium: [
      "Antwerpen nieuwbouw",
      "Brussel bouw",
      "Gent nieuwbouw woning", 
      "Leuven nieuwbouw",
      "Mechelen bouw",
      "Turnhout nieuwbouw",
      "Hasselt nieuwbouw woning",
      "Genk nieuwbouw"
    ]
  };

  const faqs = [
    {
      question: "Hoe lang duurt het bouwen van een nieuwe woning?",
      answer: "Een nieuwbouwproject duurt gemiddeld 6-12 maanden, afhankelijk van de omvang en specificaties van de woning."
    },
    {
      question: "Wat kost nieuwbouw van een huis?",
      answer: "Wij bieden altijd een gratis adviesgesprek en transparante offerte. Met 80+ jaar ervaring bouwen wij binnen elk budget."
    },
    {
      question: "Kunnen jullie ook het ontwerp verzorgen?",
      answer: "Ja, wij werken samen met ervaren architecten en kunnen het complete traject van ontwerp tot oplevering verzorgen."
    },
    {
      question: "Welke bouwmethoden gebruiken jullie?",
      answer: "Wij bouwen volgens moderne standaarden met traditionele en innovatieve bouwmethoden, afhankelijk van uw wensen."
    },
    {
      question: "Regelen jullie ook alle vergunningen?",
      answer: "Ja, wij regelen alle benodigde vergunningen, keuringen en inspecties tijdens het bouwproces."
    }
  ];

  return (
    <TBSArticleTemplate
      title="Nieuwbouw Specialist - Droomhuis Bouwen Sleutelklaar | TBS TBGS"
      description="TBS nieuwbouw specialist. Sleutelklaar bouwen van eengezinswoningen tot villa's. ✓ Ontwerp tot oplevering ✓ 80+ jaar ervaring ✓ Gratis offerte"
      url="https://tbgs.nl/bouwen/nieuwbouw"
      heroTitle="Nieuwbouw Woningen"
      heroSubtitle="Sleutelklaar bouwen van uw droomhuis"
      heroDescription="Specialist in nieuwbouw woningen: van eengezinswoningen tot luxe villa's. Uw droomhuis bouwen met volledige begeleiding van ontwerp tot sleutelklare oplevering."
      heroImage="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Moderne nieuwbouw woning in aanbouw"
      mainContent="<p>Uw eigen <strong>nieuwbouw woning</strong> laten bouwen? Wij realiseren uw droomhuis van de eerste schets tot sleutelklare oplevering. Moderne technieken, duurzame materialen en vakmanschap.</p>"
      sections={[{
        title: "Onze Nieuwbouw Services",
        content: "Wij bouwen verschillende woningtypes volgens de laatste standaarden.",
        items: nieuwbouwTypes
      }]}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Klaar voor Uw Droomhuis?"
      ctaDescription="Neem contact met ons op voor een vrijblijvende nieuwbouw offerte. Onze specialists adviseren u graag over de mogelijkheden voor uw droomhuis."
      primaryButtonText="Gratis Nieuwbouw Offerte"
      secondaryButtonText="Direct WhatsApp"
      onOpenContactModal={onOpenContactModal}
    />
  );
}