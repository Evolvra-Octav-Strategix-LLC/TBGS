import TBSArticleTemplate from "@/components/templates/TBSArticleTemplate";

interface MetselwerkProps {
  onOpenContactModal: () => void;
}

export default function Metselwerk({ onOpenContactModal }: MetselwerkProps) {
  const processSteps = [
    {
      title: "Ontwerp & Planning",
      description: "Uitgebreide bespreking van uw metselwerkwensen en technische planning van het project."
    },
    {
      title: "Materiaal Selectie", 
      description: "Keuze van kwalitatieve metselstenen, mortel en andere materialen passend bij uw stijl."
    },
    {
      title: "Vakkundige Uitvoering",
      description: "Professioneel metselwerk door ervaren vakmensen met oog voor detail en duurzaamheid."
    },
    {
      title: "Oplevering & Garantie",
      description: "Eindcontrole en opruimen werkplek met uitgebreide garantie op materiaal en vakmanschap."
    }
  ];

  const metselwerkTypes = [
    "Baksteen metselwerk",
    "Natuursteen metselwerk - Duurzame natuursteen constructies", 
    "Blokken metselen - Betonblokken en kalkzandsteenblokken",
    "Gevelmetselwerk - Voorgevel en zijgevels in verschillende stenen",
    "Tuinmuren - Vrijstaande muren en erfafscheidingen",
    "Scheidingsmuren - Binnen- en buitenwanden",
    "Schoorsteenmetselwerk - Traditionele schoorsteenconstructies",
    "Herstelwerk - Renovatie en herstel bestaand metselwerk"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven metselwerk",
      "Amsterdam metselaar", 
      "Rotterdam bouw",
      "Den Haag metselwerk",
      "Utrecht metselaar",
      "Tilburg metselwerk",
      "Breda bouw",
      "'s-Hertogenbosch"
    ],
    belgium: [
      "Antwerpen metselwerk",
      "Brussel metselaar",
      "Gent bouw", 
      "Leuven metselwerk",
      "Mechelen metselaar",
      "Turnhout metselwerk",
      "Hasselt bouw",
      "Genk metselaar"
    ]
  };

  const faqs = [
    {
      question: "Wat kost professioneel metselwerk?",
      answer: "Wij bieden altijd een gratis inspectie en transparante offerte vooraf. Met 80+ jaar familietraditie zorgen wij voor vakkundig metselwerk op maat."
    },
    {
      question: "Welke soorten metselstenen gebruiken jullie?",
      answer: "Wij werken met alle soorten metselstenen: bakstenen, kalkzandsteen, natuursteen en betonblokken. Wij adviseren graag over de beste keuze voor uw project."
    },
    {
      question: "Hoe lang duurt een metselwerkproject?",
      answer: "De duur hangt af van de omvang van het project. Een kleine tuinmuur duurt enkele dagen, grotere projecten kunnen weken duren. Wij plannen altijd vooraf."
    },
    {
      question: "Welke garantie krijg ik op metselwerk?",
      answer: "Wij bieden uitgebreide garantie op zowel materiaal als vakmanschap. Ons metselwerk is gebouwd om generaties lang mee te gaan."
    },
    {
      question: "Kunnen jullie ook herstelwerk aan bestaand metselwerk doen?",
      answer: "Ja, wij zijn gespecialiseerd in herstel en renovatie van bestaand metselwerk. Van voegen vervangen tot complete muurrenovatie."
    }
  ];

  return (
    <TBSArticleTemplate
      title="Metselwerk Specialist - Professioneel Metselwerk | TBS TBGS"
      description="TBS metselwerk specialist. Vakkundig metselwerk van bakstenen gevels tot tuinmuren. ✓ 80+ jaar ervaring ✓ Garantie ✓ Gratis offerte"
      url="https://tbgs.nl/bouw/metselwerk"
      heroTitle="Professioneel Metselwerk"
      heroSubtitle="Vakkundig metselwerk door ervaren vakmensen"
      heroDescription="Specialist in alle soorten metselwerk: van klassieke bakstenen gevels tot moderne tuinmuren. Onze ervaren metselaars werken met kwaliteitsmaterialen en garantie op vakmanschap."
      heroImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Professionele metselaar aan het werk met bakstenen"
      mainContent="<p>Onze ervaren metselaars zijn gespecialiseerd in alle vormen van <strong>metselwerk</strong>. Van traditionele bakstenen gevels tot moderne tuinmuren, wij leveren vakwerk van de hoogste kwaliteit.</p>"
      sections={[{
        title: "Onze Metselwerk Services",
        content: "Wij bieden een volledig scala aan metselwerkdiensten voor particulieren en bedrijven.",
        items: metselwerkTypes
      }]}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Klaar voor Vakkundig Metselwerk?"
      ctaDescription="Neem contact met ons op voor een vrijblijvende metselwerk offerte. Onze specialists adviseren u graag over de beste oplossing voor uw project."
      primaryButtonText="Gratis Metselwerk Offerte"
      secondaryButtonText="Direct WhatsApp"
      onOpenContactModal={onOpenContactModal}
    />
  );
}