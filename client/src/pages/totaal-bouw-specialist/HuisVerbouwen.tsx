import TBSArticleTemplate from "@/components/templates/TBSArticleTemplate";

interface HuisVerbouwenProps {
  onOpenContactModal: () => void;
}

export default function HuisVerbouwen({ onOpenContactModal }: HuisVerbouwenProps) {
  const processSteps = [
    {
      title: "Verbouwingsplan & Ontwerp",
      description: "Uitgebreide inventarisatie van uw wensen en ontwerp van de complete huisverbouwing."
    },
    {
      title: "Vergunningen & Voorbereiding", 
      description: "Aanvraag van alle benodigde vergunningen en planning van de verbouwingsfasen."
    },
    {
      title: "Uitvoering per Fase",
      description: "Gestructureerde uitvoering van de verbouwing per fase voor minimale overlast."
    },
    {
      title: "Oplevering & Nazorg",
      description: "Eindoplevering van uw vernieuwde woning met garantie en nazorg."
    }
  ];

  const verbouwingTypes = [
    "Complete renovatie",
    "Badkamer verbouwing - Luxe badkamer op maat", 
    "Keuken verbouwing - Moderne woonkeuken naar wens",
    "Woonkamer verbouwing - Open woonconcepten en moderne afwerking",
    "Slaapkamer verbouwing - Comfortabele slaapruimtes en inbouwkasten",
    "Monumentale verbouwing - Restauratie van historische panden",
    "Energetische renovatie - Isolatie en duurzaamheidsmaatregelen",
    "Indeling wijzigen - Nieuwe kamerverdeling en ruimte-indeling"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven huis verbouwen",
      "Amsterdam verbouwing", 
      "Rotterdam renovatie",
      "Den Haag verbouwen",
      "Utrecht huis verbouwen",
      "Tilburg verbouwing",
      "Breda renovatie",
      "'s-Hertogenbosch"
    ],
    belgium: [
      "Antwerpen verbouwen",
      "Brussel renovatie",
      "Gent huis verbouwen", 
      "Leuven verbouwing",
      "Mechelen renovatie",
      "Turnhout verbouwen",
      "Hasselt huis verbouwen",
      "Genk verbouwing"
    ]
  };

  const faqs = [
    {
      question: "Hoe lang duurt het verbouwen van een huis?",
      answer: "Een complete verbouwing duurt 8-20 weken afhankelijk van de omvang. Wij plannen vooraf een gedetailleerd tijdschema."
    },
    {
      question: "Kan ik tijdens de verbouwing in mijn huis blijven wonen?",
      answer: "Dit hangt af van de aard van de verbouwing. Bij grote projecten adviseren wij vaak tijdelijke bewoning elders."
    },
    {
      question: "Wat kost het verbouwen van een huis?",
      answer: "Wij bieden altijd een gratis adviesgesprek en transparante offerte. Met 80+ jaar ervaring adviseren wij over de mogelijkheden."
    },
    {
      question: "Regelen jullie ook de vergunningen?",
      answer: "Ja, wij regelen alle benodigde vergunningen en keuren voor uw verbouwingsproject."
    },
    {
      question: "Welke garantie krijg ik op de verbouwing?",
      answer: "Wij bieden uitgebreide garantie op alle uitgevoerde werkzaamheden en gebruikte materialen."
    }
  ];

  return (
    <TBSArticleTemplate
      title="Huis Verbouwen Specialist - Complete Huisverbouwing | TBS TBGS"
      description="TBS verbouwing specialist. Complete huisverbouwing van badkamer tot keuken. ✓ Vergunningen ✓ 80+ jaar ervaring ✓ Gratis offerte"
      url="https://tbgs.nl/bouwen/uw-huis-verbouwen"
      heroTitle="Uw Huis Verbouwen"
      heroSubtitle="Complete huisverbouwing door ervaren professionals"
      heroDescription="Specialist in complete huisverbouwingen: van badkamer tot keuken, van renovatie tot modernisering. Uw droomhuis realiseren met volledige begeleiding."
      heroImage="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Moderne huisverbouwing met open woonkoncept"
      mainContent="<p>Uw huis aan toe aan een metamorfose? Met een complete <strong>huisverbouwing</strong> transformeert u uw woning tot uw droomhuis. Wij begeleiden u van ontwerp tot oplevering.</p>"
      sections={[{
        title: "Onze Verbouwing Services",
        content: "Wij bieden complete huisverbouwingen van klein tot groot.",
        items: verbouwingTypes
      }]}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Klaar voor Uw Droomhuis?"
      ctaDescription="Neem contact met ons op voor een vrijblijvende verbouwing offerte. Onze specialists adviseren u graag over de mogelijkheden voor uw woning."
      primaryButtonText="Gratis Verbouwing Offerte"
      secondaryButtonText="Direct WhatsApp"
      onOpenContactModal={onOpenContactModal}
    />
  );
}