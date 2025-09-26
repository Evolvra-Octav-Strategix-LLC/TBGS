import TBSArticleTemplate from "@/components/templates/TBSArticleTemplate";

interface TimmerwerkProps {
  onOpenContactModal: () => void;
}

export default function Timmerwerken({ onOpenContactModal }: TimmerwerkProps) {
  const processSteps = [
    {
      title: "Ontwerp & Maatvoering",
      description: "Uitgebreide bespreking van uw timmerwerkwensen en nauwkeurige opmaak van het project."
    },
    {
      title: "Houtsoort & Materiaal", 
      description: "Keuze van kwalitatief hout en materialen passend bij uw stijl en budget."
    },
    {
      title: "Vakkundige Bewerking",
      description: "Precisie timmerwerk door ervaren vakmensen met moderne gereedschappen en technieken."
    },
    {
      title: "Montage & Afwerking",
      description: "Professionele montage ter plaatse met perfecte afwerking en eindcontrole."
    }
  ];

  const timmerwerkTypes = [
    "Dakconstructies",
    "Kozijnen & Ramen - Houten kozijnen en raamwerk", 
    "Deuren - Binnen- en buitendeuren op maat",
    "Trappen - Houten trappen en trapleuningen",
    "Schuttingen - Tuinschuttingen en erfafscheidingen",
    "Pergola's & Overkappingen - Terrasoverkappingen en carports",
    "Lambrisering - Wand- en plafondbekleding",
    "Maatwerk - Kasten, meubelen en speciale constructies"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven timmerwerk",
      "Amsterdam timmerman", 
      "Rotterdam timmerwerken",
      "Den Haag timmerbedrijf",
      "Utrecht timmerman",
      "Tilburg timmerwerk",
      "Breda timmerwerken",
      "'s-Hertogenbosch"
    ],
    belgium: [
      "Antwerpen timmerwerk",
      "Brussel timmerman",
      "Gent timmerwerken", 
      "Leuven timmerbedrijf",
      "Mechelen timmerman",
      "Turnhout timmerwerk",
      "Hasselt timmerwerken",
      "Genk timmerman"
    ]
  };

  const faqs = [
    {
      question: "Wat kost professioneel timmerwerk?",
      answer: "Wij bieden altijd een gratis inspectie en transparante offerte vooraf. Met 80+ jaar familietraditie zorgen wij voor vakkundig timmerwerk op maat."
    },
    {
      question: "Welke houtsoorten gebruiken jullie?",
      answer: "Wij werken met alle houtsoorten: grenen, eiken, mahonie, meranti en duurzaam FSC-gecertificeerd hout. Wij adviseren graag over de beste keuze."
    },
    {
      question: "Kunnen jullie ook maatwerk leveren?",
      answer: "Ja, wij zijn gespecialiseerd in maatwerk. Van specifieke kasten tot unieke constructies, alles wordt op maat gemaakt door onze vakmensen."
    },
    {
      question: "Hoe lang duurt een timmerwerkproject?",
      answer: "De duur hangt af van de omvang. Kleine klussen binnen enkele dagen, grotere projecten zoals dakconstructies kunnen weken duren."
    },
    {
      question: "Welke garantie krijg ik op timmerwerk?",
      answer: "Wij bieden uitgebreide garantie op zowel materiaal als vakmanschap. Ons timmerwerk is gebouwd voor generaties."
    }
  ];

  return (
    <TBSArticleTemplate
      title="Timmerwerk Specialist - Professioneel Timmerwerk | TBS TBGS"
      description="TBS timmerwerk specialist. Vakkundig timmerwerk van dakconstructies tot maatwerk. ✓ 80+ jaar ervaring ✓ Garantie ✓ Gratis offerte"
      url="https://tbgs.nl/bouwen/timmerwerken"
      heroTitle="Professioneel Timmerwerk"
      heroSubtitle="Vakkundig timmerwerk door ervaren vakmensen"
      heroDescription="Specialist in alle soorten timmerwerk: van dakconstructies tot maatwerk. Onze ervaren timmerlieden werken met kwaliteitshout en garantie op vakmanschap."
      heroImage="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Professionele timmerman aan het werk met hout"
      mainContent="<p>Onze ervaren timmerlieden zijn gespecialiseerd in alle vormen van <strong>timmerwerk</strong>. Van dakconstructies tot maatwerk, wij leveren vakwerk van de hoogste kwaliteit met duurzame materialen.</p>"
      sections={[{
        title: "Onze Timmerwerk Services",
        content: "Wij bieden een volledig scala aan timmerwerkdiensten voor particulieren en bedrijven.",
        items: timmerwerkTypes
      }]}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Klaar voor Vakkundig Timmerwerk?"
      ctaDescription="Neem contact met ons op voor een vrijblijvende timmerwerk offerte. Onze specialists adviseren u graag over de beste oplossing voor uw project."
      primaryButtonText="Gratis Timmerwerk Offerte"
      secondaryButtonText="Direct WhatsApp"
      onOpenContactModal={onOpenContactModal}
    />
  );
}