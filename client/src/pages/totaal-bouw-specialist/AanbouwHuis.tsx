import TBSArticleTemplate from "@/components/templates/TBSArticleTemplate";

interface AanbouwHuisProps {
  onOpenContactModal: () => void;
}

export default function AanbouwHuis({ onOpenContactModal }: AanbouwHuisProps) {
  const processSteps = [
    {
      title: "Ruimteanalyse & Ontwerp",
      description: "Analyse van uw woonwensen en ontwerp van de aanbouw passend bij uw bestaande woning."
    },
    {
      title: "Vergunningen & Tekeningen", 
      description: "Complete vergunningaanvraag en constructietekeningen voor uw aanbouwproject."
    },
    {
      title: "Fundering & Constructie",
      description: "Professionele fundering en ruwbouw van de aanbouw met kwaliteitsmaterialen."
    },
    {
      title: "Afbouw & Integratie",
      description: "Volledige afbouw en naadloze integratie met uw bestaande woning."
    }
  ];

  const aanbouwTypes = [
    "Woonkamer uitbreiding",
    "Keuken aanbouw - Ruime woonkeuken met eetgedeelte", 
    "Serre aanbouw - Glazen uitbouw voor extra licht",
    "Badkamer uitbreiding - Extra badkamer of wellness ruimte",
    "Kantoor aanbouw - Thuiswerkplek gescheiden van woonruimte",
    "Speelkamer - Extra ruimte voor kinderen en hobby's",
    "Garage aanbouw - Overdekte parkeerplaats aan huis",
    "Berging aanbouw - Extra opslag- en bergingsruimte"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven aanbouw huis",
      "Amsterdam aanbouw", 
      "Rotterdam uitbreiding",
      "Den Haag aanbouw",
      "Utrecht aanbouw huis",
      "Tilburg aanbouw",
      "Breda uitbreiding",
      "'s-Hertogenbosch"
    ],
    belgium: [
      "Antwerpen aanbouw",
      "Brussel uitbreiding",
      "Gent aanbouw huis", 
      "Leuven aanbouw",
      "Mechelen uitbreiding",
      "Turnhout aanbouw",
      "Hasselt aanbouw huis",
      "Genk aanbouw"
    ]
  };

  const faqs = [
    {
      question: "Heb ik een vergunning nodig voor een aanbouw?",
      answer: "Voor de meeste aanbouwprojecten is een omgevingsvergunning vereist. Wij regelen de complete procedure voor u."
    },
    {
      question: "Wat kost een aanbouw aan mijn huis?",
      answer: "Wij bieden altijd een gratis ontwerp en transparante offerte. Met 80+ jaar ervaring adviseren wij u over de beste oplossing."
    },
    {
      question: "Hoe lang duurt een aanbouwproject?",
      answer: "Een aanbouw duurt gemiddeld 6-12 weken, afhankelijk van de omvang en de gewenste afwerking."
    },
    {
      question: "Sluit de aanbouw naadloos aan op mijn bestaande huis?",
      answer: "Ja, wij zorgen voor perfecte aansluiting qua stijl, materialen en technische installaties voor een geheel."
    },
    {
      question: "Kan ik tijdens de bouw gewoon in mijn huis blijven wonen?",
      answer: "Meestal wel. Wij plannen de werkzaamheden zo dat u minimaal overlast heeft van het bouwproces."
    }
  ];

  return (
    <TBSArticleTemplate
      title="Aanbouw Huis Specialist - Woonkamer & Keuken Aanbouw | TBS TBGS"
      description="TBS aanbouw specialist. Professionele aanbouw van woonkamers, keukens en serre. ✓ Vergunningen ✓ 80+ jaar ervaring ✓ Gratis offerte"
      url="https://tbgs.nl/bouw/aanbouwen-aan-uw-huis"
      heroTitle="Aanbouw aan Uw Huis"
      heroSubtitle="Meer woonruimte door professionele aanbouw"
      heroDescription="Specialist in aanbouw van woningen: van woonkamer uitbreiding tot serre. Meer woonruimte zonder verhuizing, met volledige begeleiding van ontwerp tot oplevering."
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Moderne aanbouw aan bestaande woning"
      mainContent="<p>Meer woonruimte gewenst? Met een professionele <strong>aanbouw</strong> breidt u uw woning uit zonder te verhuizen. Onze ervaren bouwspecialisten realiseren uw droomuitbreiding.</p>"
      sections={[{
        title: "Onze Aanbouw Services",
        content: "Wij bieden verschillende aanbouwmogelijkheden voor meer wooncomfort.",
        items: aanbouwTypes
      }]}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Klaar voor Uw Droomaanbouw?"
      ctaDescription="Neem contact met ons op voor een vrijblijvende aanbouw offerte. Onze specialists adviseren u graag over de beste oplossing voor uw woning."
      primaryButtonText="Gratis Aanbouw Offerte"
      secondaryButtonText="Direct bellen"
      onOpenContactModal={onOpenContactModal}
    />
  );
}