import TOSArticleTemplate from "@/components/templates/TOSArticleTemplate";

interface SchilderProps {
  onOpenContactModal: () => void;
}

export default function Schilder({ onOpenContactModal }: SchilderProps) {
  const processSteps = [
    {
      title: "Voorbereidende Inspectie",
      description: "Grondige inspectie van te schilderen oppervlakken en voorbereiding van werkzaamheden."
    },
    {
      title: "Oppervlakte Voorbereiding", 
      description: "Professionele voorbereiding van ondergrond voor optimale verfhechting en duurzaamheid."
    },
    {
      title: "Vakkundig Schilderwerk",
      description: "Hoogwaardige verfwerken met kwaliteitsverf voor langdurige bescherming en mooie afwerking."
    },
    {
      title: "Afwerking & Onderhoud",
      description: "Perfecte afwerking en advies over onderhoudsprogramma voor langdurige resultaten."
    }
  ];

  const schilderServices = [
    "Buiten schilderwerk - Professioneel schilderen van gevels en buitenwerk",
    "Binnen schilderwerk - Vakkundige afwerking van interieur wanden en plafonds", 
    "Houtwerk schilderen - Beschermende coating voor houten constructies",
    "Kozijnen schilderen - Onderhoud en afwerking van raam- en deurkozijnen",
    "Dakkapel schilderen - Schilderwerk aan dakkapel constructies",
    "Preventief schilderen - Regelmatige bescherming tegen weersinvloeden",
    "Reparatie schilderwerk - Herstel van beschadigd verfwerk",
    "Onderhoudsabonnement - Regelmatige schilderzorg volgens planning"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven schilder",
      "Amsterdam schilderwerk", 
      "Rotterdam schilder",
      "Den Haag schilderwerk",
      "Utrecht schilder",
      "Tilburg schilderwerk",
      "Breda schilder",
      "'s-Hertogenbosch"
    ],
    belgium: [
      "Antwerpen schilder",
      "Brussel schilderwerk",
      "Gent schilder", 
      "Leuven schilderwerk",
      "Mechelen schilder",
      "Turnhout schilderwerk",
      "Hasselt schilder",
      "Genk schilderwerk"
    ]
  };

  const faqs = [
    {
      question: "Hoe vaak moet ik mijn huis laten schilderen?",
      answer: "Buitenschilderwerk adviseren wij elke 6-8 jaar, afhankelijk van weersinvloeden en kwaliteit vorige verflaag. Preventief onderhoud verlengt intervallen."
    },
    {
      question: "Welke voorbereiding is nodig voor schilderwerk?",
      answer: "Professionele voorbereiding omvat reiniging, reparatie van ondergrond en primer toepassing voor optimale verfhechting en duurzaamheid."
    },
    {
      question: "Kan schilderwerk in het onderhoudsabonnement?",
      answer: "Ja, preventief schilderwerk past uitstekend in uw maatwerk abonnement. Regelmatige kleine onderhoudsbeurten voorkomen grote schilderprojecten."
    },
    {
      question: "Wat gebeurt er bij uitgesteld schilderwerk?",
      answer: "Uitstel van schilderwerk leidt tot schade aan ondergrond, hogere kosten en verminderde bescherming tegen weersinvloeden."
    }
  ];

  const sections = [
    {
      title: "Schilderwerk Services",
      content: "",
      items: schilderServices,
      icon: "fas fa-list"
    },
    {
      title: "Professioneel Schilderwerk",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>Schilderwerk</strong> door ervaren specialisten biedt langdurige bescherming en mooie afwerking van uw woning. Vakkundige voorbereiding en hoogwaardige materialen garanderen duurzame resultaten.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Onze <strong>schilders</strong> hebben ervaring met alle soorten oppervlakken en omstandigheden. Van gevelwerk tot fijn binnenwerk - altijd met oog voor detail en kwaliteit.
        </p>
        
        <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-paint-brush text-green-600 mr-3"></i>
            Schilderwerk Voordelen
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Langdurige bescherming tegen weer</li>
            <li>• Professionele voorbereiding ondergrond</li>
            <li>• Hoogwaardige verfmaterialen</li>
            <li>• Vakkundige afwerking</li>
            <li>• Verhoogde waarde woning</li>
          </ul>
        </div>
      `,
      icon: "fas fa-paint-brush"
    }
  ];

  const mainContent = `
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Professioneel Schilderwerk</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Vakkundig <strong>schilderwerk</strong> door ervaren specialisten. Binnen- en buitenschilderwerk met hoogwaardige materialen en perfecte afwerking.
    </p>
  `;

  return (
    <TOSArticleTemplate
      title="Schilder 2025 | Professioneel Schilderwerk | Onderhoudsabonnement | Nederland & België"
      description="🎨 Schilderwerk 2025! ✅ Professionele schilder, binnen/buiten schilderen, onderhoudsabonnement, vakkundige afwerking - Nederland & België!"
      url="https://tbgs.nl/totaal-onderhoud-specialist/schilder"
      heroTitle="Schilder"
      heroSubtitle="Professioneel schilderwerk voor binnen en buiten. Vakkundige afwerking en langdurige bescherming met kwaliteitsverf."
      heroDescription="Ervaren schilders voor alle schilderklussen. Van gevelwerk tot fijn binnenwerk - altijd perfecte afwerking gegarandeerd."
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Professioneel schilderwerk door ervaren schilder specialist"
      urgencyText="Preventief Programma"
      statsConfig={{
        stat1: { number: "6-8 jaar", text: "Duurzaamheid" },
        stat2: { number: "100%", text: "Kwaliteitsverf" },
        stat3: { number: "Vakkundig", text: "Afwerking" }
      }}
      mainContent={mainContent}
      sections={sections}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Klaar voor Schilderwerk?"
      ctaDescription="Geef uw woning nieuwe uitstraling met professioneel schilderwerk. Preventief onderhoud bespaart u geld en zorgt voor langdurige bescherming."
      primaryButtonText="Schilderwerk Plannen"
      secondaryButtonText="Schilder Bellen"
      onOpenContactModal={onOpenContactModal}
    />
  );
}