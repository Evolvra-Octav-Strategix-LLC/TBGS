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
    "Veelzijdige schilderdiensten - Eén bedrijf voor al uw dakwerken en schilderwerk",
    "Binnen en buiten schilderen - Complete woning of bedrijfspand schildering", 
    "Vakkundige afwerking - Transparante communicatie en vakmensen",
    "Particulieren en bedrijven - Schilderwerk voor woningen, bedrijfspanden, verenigingen",
    "Beste materialen - Kwaliteitsverf gaat jaren mee en verhoogt waarde",
    "Gratis dakinspectie - Na schilderwerk gratis controle van dak staat",
    "Onderhoudscontracten - Jaarlijkse onderhoudsbeurten en voorrang bij lekkage",
    "Eindhoven en omstreken - Ook Belgische regio's, betaalbare prijzen"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven schilder",
      "Helmond schilderwerk", 
      "Nuenen schilder",
      "Mierlo schilderwerk",
      "Geldrop schilder",
      "Son en Breugel schilderwerk",
      "Veldhoven schilder",
      "Waalre schilderwerk",
      "Best schilder",
      "Valkenswaard schilderwerk"
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
      question: "Waarom kiezen klanten steeds weer voor TBGS B.V.?",
      answer: "Onze klanten waarderen onze veelzijdigheid. Eén bedrijf voor al uw dakwerken en schilderwerk. Transparante communicatie en vakmensen die uitstekend werk leveren."
    },
    {
      question: "Werken jullie voor particulieren en bedrijven?",
      answer: "Ja, wij werken voor particulieren, bedrijven en verenigingen. Vakkundige oplossingen tegen betaalbare prijzen. Mail ons via info@tbgs.nl voor offerte."
    },
    {
      question: "Wat is het voordeel van jullie gratis dakinspectie?",
      answer: "Na schilderwerk bekijken wij gratis uw dak staat. Advies over reparaties en onderhoudstips. Via onderhoudscontracten krijgt u voorrang bij lekkage."
    },
    {
      question: "Waarom werken met de beste materialen?",
      answer: "Goedkoop is vaak duurkoop bij schilderwerk, vooral op moeilijk bereikbare plaatsen. Goed schilderwerk gaat jaren mee en verhoogt waarde van uw huis."
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
      title: "Waarom Klanten Ons Steeds Weer Kiezen",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Vele van onze klanten herhalen keer op keer dat ze ons waarderen om onze <strong>veelzijdigheid</strong>. Wanneer u namelijk samenwerkt met TBGS B.V. dan haalt u één bedrijf in huis die al uw dakwerken en werkzaamheden rondom uw huis kan onderhouden en repareren waar nodig.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Wij zijn transparant en duidelijk in onze communicatie en onze medewerkers zijn <strong>vakmensen</strong>. Zo kunt u ons naast dakrenovatie en dakbedekking ook inzetten voor schilderwerk en zullen wij ook deze werkzaamheden voor u uitstekend verzorgen.
        </p>
        
        <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-star text-green-600 mr-3"></i>
            Waarom TBGS B.V. Kiezen?
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Eén bedrijf voor al uw dakwerken en schilderwerk</li>
            <li>• Transparante en duidelijke communicatie</li>
            <li>• Alle medewerkers zijn vakmensen</li>
            <li>• Van dakrenovatie tot schilderwerk</li>
            <li>• Uitstekende verzorging van alle werkzaamheden</li>
          </ul>
        </div>
      `,
      icon: "fas fa-star"
    },
    {
      title: "Schildersbedrijf voor Particulieren en Bedrijven",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Wij werken voor <strong>particulieren</strong>, maar ook voor bedrijven en verenigingen. Heeft u schilderwerk en wilt u dat uw klus vakkundig wordt opgelost, vraag dan zeker een offerte op via <strong>info@tbgs.nl</strong>.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Wij helpen u graag en beantwoorden al uw vragen. Heeft u een woning of bedrijfspand dat u wilt laten schilderen, bel of mail ons gerust, wij helpen u graag de klus vakkundig op te lossen tegen <strong>betaalbare prijzen</strong>.
        </p>

        <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-building text-green-600 mr-3"></i>
            Voor Wie Wij Werken
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Particuliere woningen - professionele zorg</li>
            <li>• Bedrijfspanden - vakkundige oplossingen</li>
            <li>• Verenigingen - betrouwbare service</li>
            <li>• Betaalbare prijzen voor iedereen</li>
            <li>• Offerte via info@tbgs.nl</li>
          </ul>
        </div>
      `,
      icon: "fas fa-building"
    },
    {
      title: "Gratis Inspectie na het Schilderwerk",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Omdat TBGS B.V. ook verstand heeft van alle andere <strong>dakwerken</strong>, kunnen wij na en tijdens onze schilder klus bij u gratis en eenvoudig de staat van uw dak bekijken.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Wij kunnen u dan advies geven over reparaties en onderhoudstips. U kunt zelfs via onze <strong>onderhoudscontracten</strong> die u via onze website kunt samenstellen jaarlijkse onderhoudsbeurten voor uw dak afspreken.
        </p>

        <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-gift text-green-600 mr-3"></i>
            Gratis Extra Service
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Gratis dakinspectie na schilderwerk</li>
            <li>• Advies over reparaties en onderhoud</li>
            <li>• Onderhoudscontracten samenstellen</li>
            <li>• Jaarlijkse onderhoudsbeurten afspreken</li>
            <li>• Voorrang bij lekkage of stormschade</li>
            <li>• Dak altijd in perfecte staat houden</li>
          </ul>
        </div>
      `,
      icon: "fas fa-gift"
    },
    {
      title: "Schilderen met de Beste Materialen",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          TBGS B.V. werkt alleen met <strong>vakmensen</strong> en de beste materialen. Goedkoop is namelijk vaak duurkoop als het om schilderwerk aankomt, vooral op plaatsen waar u zelf moeilijk bij kunt.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Goed <strong>schilderwerk</strong> gaat jaren mee en verhoogt de waarde en uitstraling van uw huis.
        </p>

        <div class="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-medal text-green-600 mr-3"></i>
            Kwaliteit Investering
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Alleen vakmensen en beste materialen</li>
            <li>• Goedkoop is vaak duurkoop</li>
            <li>• Moeilijk bereikbare plaatsen vakkundig</li>
            <li>• Schilderwerk gaat jaren mee</li>
            <li>• Verhoogt waarde en uitstraling huis</li>
          </ul>
        </div>
      `,
      icon: "fas fa-medal"
    }
  ];

  const mainContent = `
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Ook voor Uw Schilderwerken, TBGS B.V.</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Vele van onze klanten herhalen keer op keer dat ze ons waarderen om onze <strong>veelzijdigheid</strong>. Wanneer u namelijk samenwerkt met TBGS B.V. dan haalt u één bedrijf in huis die al uw dakwerken en werkzaamheden rondom uw huis kan onderhouden en repareren waar nodig.
    </p>
  `;

  return (
    <TOSArticleTemplate
      title="Schilder 2025 | Veelzijdig Bedrijf | Gratis Dakinspectie | Nederland & België"
      description="🎨 Schilderwerk 2025! ✅ Veelzijdig bedrijf, particulieren/bedrijven, gratis dakinspectie, onderhoudscontracten - Nederland & België!"
      url="https://tbgs.nl/totaal-onderhoud-specialist/schilder"
      heroTitle="Ook voor uw schilderwerken, TBGS B.V."
      heroSubtitle="Eén bedrijf voor al uw dakwerken en schilderwerk! Transparante communicatie, vakmensen, betaalbare prijzen."
      heroDescription="Van dakrenovatie tot schilderwerk - wij verzorgen alles uitstekend. Gratis dakinspectie na schilderwerk inbegrepen."
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Professioneel schilderwerk door ervaren schilder specialist"
      urgencyText="Gratis Dakinspectie"
      statsConfig={{
        stat1: { number: "Eén", text: "Bedrijf" },
        stat2: { number: "Gratis", text: "Inspectie" },
        stat3: { number: "Vakmensen", text: "Garantie" }
      }}
      mainContent={mainContent}
      sections={sections}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Offerte Aanvragen voor Schilderwerk?"
      ctaDescription="Bel of mail ons gerust voor vakkundige oplossing tegen betaalbare prijzen. Wij helpen u graag de klus vakkundig op te lossen."
      primaryButtonText="Schilderwerk Plannen"
      secondaryButtonText="Schilder Bellen"
      onOpenContactModal={onOpenContactModal}
    />
  );
}