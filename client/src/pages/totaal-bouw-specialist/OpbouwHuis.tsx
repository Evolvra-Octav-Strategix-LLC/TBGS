import TBSArticleTemplate from "@/components/templates/TBSArticleTemplate";

interface OpbouwHuisProps {
  onOpenContactModal: () => void;
}

export default function OpbouwHuis({ onOpenContactModal }: OpbouwHuisProps) {
  const processSteps = [
    {
      title: "Haalbaarheidsonderzoek",
      description: "Onderzoek naar constructieve mogelijkheden en vergunningsprocedures voor uw opbouwproject."
    },
    {
      title: "Ontwerp & Tekeningen", 
      description: "Architectonisch ontwerp en constructietekeningen voor de opbouw van uw woning."
    },
    {
      title: "Vergunningen & Planning",
      description: "Aanvraag bouwvergunning en planning van het project met alle betrokken disciplines."
    },
    {
      title: "Bouw & Oplevering",
      description: "Professionele uitvoering van de opbouw met kwaliteitsmaterialen en eindoplevering."
    }
  ];

  const opbouwTypes = [
    "Tweede verdieping",
    "Dakkapel uitbouw - Ruimte creëren in bestaande kap", 
    "Zolderverbouwing - Zolder omtoveren tot volwaardige ruimte",
    "Penthouse toevoeging - Luxe bovenverdieping met dakterras",
    "Mansarde dak - Klassieke mansarde uitbouw voor meer ruimte",
    "Dakopbouw - Moderne dakopbouw in verschillende stijlen",
    "Loft conversie - Industriële loft-stijl opbouw",
    "Energieneutrale opbouw - Duurzame opbouw met isolatie"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven opbouw huis",
      "Amsterdam dakopbouw", 
      "Rotterdam opbouw",
      "Den Haag uitbouw",
      "Utrecht opbouw huis",
      "Tilburg dakopbouw",
      "Breda opbouw",
      "'s-Hertogenbosch"
    ],
    belgium: [
      "Antwerpen opbouw",
      "Brussel dakopbouw",
      "Gent uitbouw", 
      "Leuven opbouw huis",
      "Mechelen dakopbouw",
      "Turnhout opbouw",
      "Hasselt uitbouw",
      "Genk opbouw huis"
    ]
  };

  const faqs = [
    {
      question: "Heb ik een vergunning nodig voor opbouw van mijn huis?",
      answer: "Ja, voor opbouw is meestal een omgevingsvergunning vereist. Wij regelen de complete vergunningsprocedure voor u."
    },
    {
      question: "Wat kost opbouw van een huis?",
      answer: "Wij bieden altijd een gratis haalbaarheidsonderzoek en transparante offerte. Met 80+ jaar ervaring adviseren wij u over de mogelijkheden."
    },
    {
      question: "Kan mijn huis een extra verdieping dragen?",
      answer: "Dit onderzoeken wij door middel van een constructief onderzoek. De meeste woningen kunnen verstevigd worden voor opbouw."
    },
    {
      question: "Hoe lang duurt een opbouwproject?",
      answer: "Een opbouwproject duurt gemiddeld 8-16 weken, afhankelijk van de omvang en weersomstandigheden."
    },
    {
      question: "Kan ik tijdens de bouw in mijn huis blijven wonen?",
      answer: "In veel gevallen wel, maar dit hangt af van de aard van het project. Wij plannen zo dat u minimaal overlast heeft."
    }
  ];

  return (
    <TBSArticleTemplate
      title="Opbouw Huis Specialist - Tweede Verdieping & Dakopbouw | TBS TBGS"
      description="TBS opbouw specialist. Professionele opbouw van tweede verdiepingen en dakkapellen. ✓ Vergunningen ✓ 80+ jaar ervaring ✓ Gratis offerte"
      url="https://tbgs.nl/bouwen/opbouw-op-uw-huis"
      heroTitle="Opbouw op Uw Huis"
      heroSubtitle="Meer woonruimte door professionele opbouw"
      heroDescription="Specialist in opbouw van woningen: van tweede verdiepingen tot dakkapellen. Meer woonruimte zonder verhuizing, met volledige begeleiding van ontwerp tot oplevering."
      heroImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Moderne opbouw tweede verdieping op woning"
      mainContent="<p>Meer woonruimte nodig? Met een professionele <strong>opbouw</strong> creëert u extra ruimte zonder te verhuizen. Onze ervaren bouwspecialisten begeleiden u van ontwerp tot oplevering.</p>"
      sections={[{
        title: "Onze Opbouw Services",
        content: "Wij bieden verschillende opbouwmogelijkheden voor meer wooncomfort.",
        items: opbouwTypes
      }]}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Klaar voor Meer Woonruimte?"
      ctaDescription="Neem contact met ons op voor een vrijblijvende opbouw offerte. Onze specialists adviseren u graag over de mogelijkheden voor uw woning."
      primaryButtonText="Gratis Opbouw Offerte"
      secondaryButtonText="Direct WhatsApp"
      onOpenContactModal={onOpenContactModal}
    />
  );
}