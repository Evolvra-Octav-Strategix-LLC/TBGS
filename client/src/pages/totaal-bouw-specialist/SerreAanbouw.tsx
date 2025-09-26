import TBSArticleTemplate from "@/components/templates/TBSArticleTemplate";

interface SerreAanbouwProps {
  onOpenContactModal: () => void;
}

export default function SerreAanbouw({ onOpenContactModal }: SerreAanbouwProps) {
  const processSteps = [
    {
      title: "Ontwerp & Maatvoering",
      description: "Op maat ontwerp van uw serre passend bij uw woning en tuin situatie."
    },
    {
      title: "Materiaal & Specificaties", 
      description: "Keuze van kozijnen, beglazing en afwerkingsmaterialen voor optimaal comfort."
    },
    {
      title: "Fundering & Montage",
      description: "Professionele fundering en montage van de serre-constructie door vakmensen."
    },
    {
      title: "Afwerking & Installatie",
      description: "Volledige afwerking en installatie van verwarming, verlichting en ventilatie."
    }
  ];

  const serreTypes = [
    "Klassieke serre",
    "Moderne glazen uitbouw - Strakke moderne glasarchitectuur", 
    "Wintergardens - Luxe wintertuinen met klimaatbeheersing",
    "Tuinkamer serre - Volledig geïsoleerde tuinkamer",
    "Orangerie - Klassieke orangerie met hoge ramen",
    "Lean-to serre - Eenvoudige aanbouwserre tegen woning",
    "Paviljoen serre - Vrijstaande serre in de tuin",
    "Atrium - Overdekte binnenplaats of patio"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven serre aanbouw",
      "Amsterdam serre", 
      "Rotterdam serrebouw",
      "Den Haag serre aanbouw",
      "Utrecht serre",
      "Tilburg serrebouw",
      "Breda serre aanbouw",
      "'s-Hertogenbosch"
    ],
    belgium: [
      "Antwerpen serre",
      "Brussel serrebouw",
      "Gent serre aanbouw", 
      "Leuven serre",
      "Mechelen serrebouw",
      "Turnhout serre aanbouw",
      "Hasselt serre",
      "Genk serrebouw"
    ]
  };

  const faqs = [
    {
      question: "Heb ik een vergunning nodig voor een serre?",
      answer: "Voor de meeste serre projecten is een omgevingsvergunning vereist. Wij regelen de complete vergunningsprocedure voor u."
    },
    {
      question: "Wat kost een serre aanbouw?",
      answer: "Wij bieden altijd een gratis ontwerp en transparante offerte. Met 80+ jaar ervaring adviseren wij over de beste serre voor uw situatie."
    },
    {
      question: "Kan een serre het hele jaar door gebruikt worden?",
      answer: "Ja, met goede isolatie, verwarming en ventilatie is een serre het hele jaar comfortabel te gebruiken."
    },
    {
      question: "Welke materialen zijn het beste voor een serre?",
      answer: "Wij werken met aluminium, hout en kunststof kozijnen. De keuze hangt af van uw voorkeur, budget en onderhoudskosten."
    },
    {
      question: "Hoe lang duurt de bouw van een serre?",
      answer: "Een serre aanbouw duurt gemiddeld 2-4 weken, afhankelijk van de grootte en complexiteit van het project."
    }
  ];

  return (
    <TBSArticleTemplate
      title="Serre Aanbouw Specialist - Glazen Uitbouw & Wintertuinen | TBS TBGS"
      description="TBS serre specialist. Professionele serre aanbouw van klassiek tot modern. ✓ Vergunningen ✓ 80+ jaar ervaring ✓ Gratis offerte"
      url="https://tbgs.nl/bouwen/serre-aanbouw"
      heroTitle="Serre Aanbouw"
      heroSubtitle="Glazen uitbouw voor meer woongenot"
      heroDescription="Specialist in serre aanbouw: van klassieke serres tot moderne glazen uitbouw. Meer licht en ruimte in uw huis met professionele serrebouw op maat."
      heroImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Moderne glazen serre aanbouw aan woning"
      mainContent="<p>Meer licht en ruimte in uw huis? Een <strong>serre aanbouw</strong> brengt de buitenwereld naar binnen. Onze ervaren specialisten realiseren de perfecte glazen uitbouw voor uw woning.</p>"
      sections={[{
        title: "Onze Serre Services",
        content: "Wij bieden verschillende serre-oplossingen voor elk budget en elke stijl.",
        items: serreTypes
      }]}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Klaar voor Uw Dromserre?"
      ctaDescription="Neem contact met ons op voor een vrijblijvende serre offerte. Onze specialists adviseren u graag over de perfecte glazen uitbouw voor uw woning."
      primaryButtonText="Gratis Serre Offerte"
      secondaryButtonText="Direct WhatsApp"
      onOpenContactModal={onOpenContactModal}
    />
  );
}