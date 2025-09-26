import TSSArticleTemplate from "@/components/templates/TSSArticleTemplate";

interface SchoorsteenVerwijderenProps {
  onOpenContactModal: () => void;
}

export default function SchoorsteenVerwijderen({ onOpenContactModal }: SchoorsteenVerwijderenProps) {
  const processSteps = [
    {
      title: "Situatie Analyse & Vergunningen",
      description: "Uitgebreide inspectie van uw schoorsteen en volledige begeleiding bij vergunning aanvragen voor uw gemeente."
    },
    {
      title: "Veiligheidsplan & Voorbereiding", 
      description: "Opstellen van veiligheidsprotocol en professionele voorbereiding van werkgebied met bescherming van uw eigendom."
    },
    {
      title: "Vakkundige Sloop & Verwijdering",
      description: "Veilige schoorsteen verwijdering door gecertificeerde ASPB-specialisten met moderne sloopapparatuur."
    },
    {
      title: "Dakwerk Herstel & Opruiming",
      description: "Professioneel dakwerk herstel, waterdichte afsluiting en complete opruiming van sloopmateriaal."
    }
  ];

  const verwijderingServices = [
    "Complete schoorsteen verwijdering - Veilige sloop door gecertificeerde vaklieden",
    "Vergunning begeleiding - Volledige ondersteuning bij gemeente procedures", 
    "Dakwerk herstel - Waterdichte afsluiting na schoorsteen verwijdering",
    "Ongebruikte schoorsteen verwijderen - Modernisering van uw woning",
    "Industriële schoorsteen sloop - Specialistische verwijdering grote schoorstenen",
    "Loodwerk herstel - Complete herstellling van beschadigde loodstructuren",
    "Isolatie verbetering - Dakisolatie optimalisatie na verwijdering",
    "Afvoer en recycling - Milieuvriendelijke verwerking van sloopmateriaal"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven schoorsteen verwijderen",
      "Amsterdam schoorsteen sloop", 
      "Rotterdam verwijdering",
      "Den Haag schoorsteen",
      "Utrecht verwijderen",
      "Tilburg schoorsteen sloop",
      "Breda verwijdering",
      "'s-Hertogenbosch sloop"
    ],
    belgium: [
      "Antwerpen schoorsteen verwijderen",
      "Brussel schoorsteen sloop",
      "Gent verwijdering", 
      "Leuven schoorsteen",
      "Mechelen verwijderen",
      "Turnhout schoorsteen sloop",
      "Hasselt verwijdering",
      "Genk sloop"
    ]
  };

  const faqs = [
    {
      question: "Heb ik een vergunning nodig voor schoorsteen verwijdering?",
      answer: "Ja, voor schoorsteen verwijdering is meestal een sloopvergunning vereist van uw gemeente. Wij begeleiden u volledig bij de vergunning aanvraag en zorgen voor correcte procedures."
    },
    {
      question: "Is schoorsteen verwijdering veilig voor mijn woning?",
      answer: "Onze ASPB-gecertificeerde specialisten gebruiken professionele sloopapparatuur en veiligheidsprotocollen. Uw woning en omgeving worden volledig beschermd tijdens het proces."
    },
    {
      question: "Wat gebeurt er met de opening in mijn dak?",
      answer: "Na verwijdering herstellen wij het dakwerk volledig. Dit omvat waterdichte afsluiting, herstel van dakpannen en optimalisatie van dakisolatie voor energiebesparing."
    },
    {
      question: "Kunnen jullie ook industriële schoorstenen verwijderen?",
      answer: "Ja, wij zijn gespecialiseerd in verwijdering van alle schoorsteentypes, van woningschoorstenen tot grote industriële exemplaren. Elke situatie vereist maatwerk benadering."
    },
    {
      question: "Wat zijn de voordelen van een ongebruikte schoorsteen verwijderen?",
      answer: "Voordelen zijn verbeterde dakisolatie, geen onderhoud meer nodig, modernere uitstraling van uw woning en potentiële waardestijging van uw eigendom."
    },
    {
      question: "Hoe lang duurt het verwijdering proces?",
      answer: "Afhankelijk van complexiteit en grootte duurt verwijdering minimaal 1-2 werkdagen. Grote of gecompliceerde schoorstenen kunnen meer tijd vergen."
    },
    {
      question: "Wordt het sloopmateriaal ook afgevoerd?",
      answer: "Ja, wij zorgen voor complete opruiming en milieuvriendelijke afvoer van al het sloopmateriaal. U houdt geen zorgen over na afronding van het project."
    },
    {
      question: "Kan ik na verwijdering nog een nieuwe schoorsteen laten plaatsen?",
      answer: "Absoluut. Wij kunnen na verwijdering ook een moderne schoorsteen installeren die beter past bij uw huidige verwarmingssysteem en woonwensen."
    }
  ];

  const sections = [
    {
      title: "Waarom Kiezen voor Professionele Schoorsteen Verwijdering?",
      content: "Een **ongebruikte schoorsteen verwijderen** biedt talloze voordelen voor uw woning. Door een **professionele schoorsteen sloop** voorkomt u onderhoudsproblemen, verbetert u de dakisolatie en geeft u uw woning een modernere uitstraling. Onze **ASPB-gecertificeerde specialisten** garanderen veilige verwijdering volgens alle Nederlandse en Belgische bouwvoorschriften.",
      icon: "fas fa-home",
      items: verwijderingServices
    },
    {
      title: "Schoorsteen Verwijderen: Vergunningen & Procedures",
      content: "Voor **schoorsteen verwijdering** in Nederland en België zijn specifieke vergunningen vereist. Onze specialisten begeleiden u volledig bij de **gemeente procedures** en zorgen dat alle **sloopvergunningen** correct worden aangevraagd. Wij kennen de lokale regelgeving in Eindhoven, Amsterdam, Antwerpen en alle andere gebieden waar wij actief zijn.",
      icon: "fas fa-file-contract"
    },
    {
      title: "Veiligheid & Vakmanschap bij Schoorsteen Sloop",
      content: "**Schoorsteen verwijdering** vereist specialistische kennis en apparatuur. Onze gecertificeerde vaklieden gebruiken moderne slooptechnieken en comprehensive veiligheidsprotocollen. Van kleine woningschoorstenen tot **industriële schoorsteen sloop** - wij hebben 80+ jaar ervaring in alle types verwijdering projecten.",
      icon: "fas fa-hard-hat"
    },
    {
      title: "Dakwerk Herstel na Schoorsteen Verwijdering",
      content: "Na **schoorsteen verwijdering** is professioneel **dakwerk herstel** essentieel. Wij garanderen waterdichte afsluiting, herstel van dakpannen en optimalisatie van dakisolatie. Dit voorkomt lekkages en verbetert de energieprestatie van uw woning significant.",
      icon: "fas fa-tools"
    }
  ];

  return (
    <TSSArticleTemplate
      title="Schoorsteen Verwijderen | Professionele Sloop & Dakwerk Herstel | TBGS"
      description="Professionele schoorsteen verwijdering door ASPB-gecertificeerde specialisten. Volledige begeleiding bij vergunningen, veilige sloop en dakwerk herstel. Actief in Nederland & België."
      url="https://www.tbgs.nl/schoorsteen/schoorsteen-verwijderen"
      heroTitle="Schoorsteen Verwijderen"
      heroSubtitle="Professionele Sloop & Dakwerk Herstel"
      heroDescription="Veilige **schoorsteen verwijdering** door ASPB-gecertificeerde specialisten. Volledige begeleiding bij vergunningen, vakkundige sloop en professioneel dakwerk herstel. Moderniseer uw woning met onze 80+ jaar ervaring."
      heroImage="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      heroImageAlt="Professionele schoorsteen verwijdering door TBGS specialisten"
      urgencyText="Binnen 24u vrijblijvende offerte"
      statsConfig={{
        stat1: { number: "24u", text: "Offerte service" },
        stat2: { number: "80+", text: "Jaar vakmanschap" },
        stat3: { number: "100%", text: "Vergunning succes" }
      }}
      mainContent="**Schoorsteen verwijdering** is een specialistisch vakgebied dat expertise, vergunningen en professioneel materiaal vereist. Onze **ASPB-gecertificeerde schoorsteenspecialisten** hebben ruim 80 jaar ervaring in veilige sloop van alle schoorsteentypes. Van kleine woningschoorstenen tot grote industriële exemplaren - wij garanderen vakkundige verwijdering met complete dakwerk herstel."
      sections={sections}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Schoorsteen Verwijderen Nodig?"
      ctaDescription="Neem contact op met onze gecertificeerde specialisten voor een vrijblijvende offerte. Wij begeleiden u van vergunning tot afronding."
      primaryButtonText="Gratis Verwijdering Offerte"
      secondaryButtonText="Direct Specialist Bellen"
      onOpenContactModal={onOpenContactModal}
    />
  );
}