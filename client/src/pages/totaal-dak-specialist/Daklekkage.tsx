import TDSArticleTemplate from "@/components/templates/TDSArticleTemplate";

interface DaklekkageProps {
  onOpenContactModal: () => void;
}

export default function Daklekkage({ onOpenContactModal }: DaklekkageProps) {
  const processSteps = [
    {
      title: "Spoedmelding",
      description: "Direct contact opnemen via telefoon of website. Binnen 2 uur ter plaatse voor spoedgevallen."
    },
    {
      title: "Lekdetectie", 
      description: "Professionele inspectietechnieken en visuele controle om de exacte bron van de lekkage te lokaliseren."
    },
    {
      title: "Noodreparatie",
      description: "Directe noodreparatie om verdere waterschade te voorkomen. Professionele afdichting."
    },
    {
      title: "Definitieve Reparatie",
      description: "Permanente reparatie met kwalitatieve materialen en volledige garantie op het uitgevoerde werk."
    }
  ];

  const lekkageTypes = [
    "Daklekkage - Lekkage in dakbedekking of dakconstructie",
    "Gevellekkage - Lekkage in gevels en buitenmuren", 
    "Gesprongen leidingen - Gebroken water- of cv-leidingen",
    "Lekkende leidingen - Slijtage aan leidingsystemen",
    "Lekkende afvoer - Verstopte of beschadigde afvoeren",
    "Lekkende radiatoren - CV-systeem lekkages",
    "Vochtige kelder - Grondwater infiltratie",
    "Lekdetectie - Professionele lekkage opsporing"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven daklekkage",
      "Amsterdam dakdekker", 
      "Rotterdam dakwerken",
      "Den Haag lekkage",
      "Utrecht dakdekker",
      "Tilburg daklekkage",
      "Breda dakwerken",
      "'s-Hertogenbosch"
    ],
    belgium: [
      "Antwerpen daklekkage",
      "Brussel dakdekker",
      "Gent dakwerken", 
      "Leuven lekkage",
      "Mechelen dakdekker",
      "Turnhout daklekkage",
      "Hasselt dakwerken",
      "Genk dakdekker"
    ]
  };

  const faqs = [
    {
      question: "Hoe snel kunnen jullie bij daklekkage ter plaatse zijn?",
      answer: "Bij spoedgevallen zijn wij binnen 2 uur ter plaatse in heel Nederland en België. Voor reguliere afspraken plannen wij binnen 24 uur."
    },
    {
      question: "Wat kost daklekkage reparatie?",
      answer: "Wij bieden altijd een gratis inspectie en transparante offerte vooraf. Met 80+ jaar familietraditie zorgen wij voor vakkundige reparaties op maat."
    },
    {
      question: "Hoe voorkom ik daklekkage in de toekomst?",
      answer: "Regelmatige dakgoot reiniging, jaarlijkse dakinspectie en tijdige vervanging van dakpannen helpen lekkages voorkomen. Wij adviseren graag over preventief onderhoud."
    },
    {
      question: "Welke garantie krijg ik op daklekkage reparatie?",
      answer: "Alle daklekkage reparaties krijgen minimaal 2 jaar garantie. Bij volledige dakrenovatie bieden wij tot 10 jaar garantie op materiaal en vakmanschap."
    }
  ];

  const sections = [
    {
      title: "Soorten Daklekkages",
      content: "",
      items: lekkageTypes,
      icon: "fas fa-list"
    },
    {
      title: "Gevolgen van Daklekkage",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>Daklekkage</strong> ontdekt u vaak pas wanneer het al enige tijd schade aanricht. Vochtplekken in het dak, de muur of dakkapel bijvoorbeeld. 
          Of erger, vocht dat in de spullen eronder is gelopen. Mogelijk is de <strong>dakisolatie</strong> vochtig geworden. 
          Dit wil je zo snel mogelijk verholpen hebben. Waarbij niet alleen de <strong>lekkage gerepareerd</strong> moet worden maar er ook gekeken wordt naar gevolgschade en een adequate manier om die te verhelpen.
        </p>
        
        <div class="grid md:grid-cols-2 gap-6 mt-8">
          <div class="bg-white p-6 rounded-xl border">
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <i class="fas fa-exclamation-triangle text-red-600 mr-3"></i>
              Directe Schade
            </h3>
            <ul class="space-y-2 text-gray-700">
              <li>• Vochtplekken op plafonds en muren</li>
              <li>• Beschadiging van meubilair en bezittingen</li>
              <li>• Vochtige dakisolatie verliest werking</li>
              <li>• Elektrische installaties in gevaar</li>
            </ul>
          </div>
          
          <div class="bg-white p-6 rounded-xl border">
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <i class="fas fa-clock text-red-600 mr-3"></i>
              Langetermijn Gevolgen
            </h3>
            <ul class="space-y-2 text-gray-700">
              <li>• Schimmelvorming en gezondheidsproblemen</li>
              <li>• Structurele schade aan dakconstructie</li>
              <li>• Verhoogde energiekosten door vocht</li>
              <li>• Waardedaling van uw woning</li>
            </ul>
          </div>
        </div>
      `,
      icon: "fas fa-exclamation-triangle"
    },
    {
      title: "Daklekkage Moet Vakkundig Verholpen Worden",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-8">
          Er zijn veel soorten <strong>daklekkage</strong>, die ieder op zichzelf om een eigen vakkundige aanpak vragen. 
          <strong>Lekkage</strong> omdat pannen verschoven zijn, een slijtage plek in een plat dak of een rotte plek in de dakkapel en ga zo maar door. 
          <strong>TBGS B.V.</strong> is thuis in al dit specifiek vakwerk. En in die zin meer dan zomaar een <strong>dakdekker</strong>. 
          U krijgt vooraf een duidelijke offerte, en de monteur inspecteert het dak direct op meer risico plaatsen. 
          In overleg kan dit dan preventief verholpen worden.
        </p>

        <div class="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-2xl">
          <h3 class="text-2xl font-bold mb-4">Heeft u daklekkage of wilt u een preventieve inspectie?</h3>
          <p class="text-lg mb-6 opacity-90">
            Onze gecertificeerde dakdekkers staan 24/7 voor u klaar. Snelle respons, vakkundige reparatie en transparante prijzen.
          </p>
        </div>
      `,
      icon: "fas fa-tools"
    },
    {
      title: "Waarom Kiezen voor TBGS Daklekkage Service?",
      content: `
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-clock text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Snelle Service</h3>
            <p class="text-gray-600">
              24/7 spoedservice voor daklekkage. 
              Binnen 2 uur ter plaatse in heel Nederland en België.
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-certificate text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Gecertificeerde Dakdekkers</h3>
            <p class="text-gray-600">
              Alle werkzaamheden door vakbekwame en 
              gecertificeerde dakspecialisten met jarenlange ervaring.
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-shield-alt text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Volledige Garantie</h3>
            <p class="text-gray-600">
              Uitgebreide garantie op alle daklekkage reparaties 
              en dakwerken. Kwaliteit staat voorop.
            </p>
          </div>
        </div>
      `,
      icon: "fas fa-star"
    }
  ];

  const mainContent = `
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Daklekkage, wat nu?</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Een dak moet beschermen tegen weersinvloeden, en wanneer dat dak een <strong>lekkage</strong> vertoont is dat buitengewoon vervelend. 
      Maar dat geldt ook voor <strong>lekkage in spouw</strong> of <strong>dakkapel</strong>. Vervelend, want reparatie en <strong>dakwerken</strong> moet snel gebeuren. 
      Een <strong>daklekkage</strong> geeft een boel gevolg schade. Je wilt dan dat er vrijwel direct iemand komt kijken die concreet kan vertellen wat er nodig is en uitlegt waarom. 
      Bovendien is het fijn om vooraf een kostenplaatje te krijgen. Want een <strong>lekkage</strong> is nooit begroot of voorzien immers, en dus altijd een onverwachte uitgave.
    </p>
  `;

  return (
    <TDSArticleTemplate
      title="Daklekkage Reparatie 2025 | 24/7 Spoedservice Dakdekker | Nederland & België"
      description="🚨 Daklekkage spoedservice 2025! ⚡ 24/7 dakdekker voor snelle daklekkage reparatie in Nederland & België. ✅ 80+ jaar familietraditie, directe reparatie. Bel nu!"
      url="https://tbgs.nl/totaal-dak-specialist/daklekkage"
      heroTitle="Daklekkage reparatie"
      heroSubtitle="Daklekkage spoedservice door gecertificeerde dakdekkers in heel Nederland en België. Snelle lokalisatie en permanente reparatie van lekkende daken."
      heroDescription="24/7 beschikbaar voor spoedgevallen met 80+ jaar familietraditie en directe noodreparatie om waterschade te voorkomen."
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Dakdekker repareert daklekkage met professionele gereedschappen"
      urgencyText="24/7 Spoedservice Beschikbaar"
      statsConfig={{
        stat1: { number: "24/7", text: "Spoedservice" },
        stat2: { number: "500+", text: "Daklekkages opgelost" },
        stat3: { number: "100%", text: "Garantie" }
      }}
      mainContent={mainContent}
      sections={sections}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Daklekkage? Wij Helpen Direct!"
      ctaDescription="Neem direct contact op voor spoedservice daklekkage reparatie. Onze dakdekkers zijn 24/7 beschikbaar voor al uw dakwerken noden."
      primaryButtonText="Gratis Daklekkage Offerte"
      secondaryButtonText="24/7 Spoednummer"
      onOpenContactModal={onOpenContactModal}
    />
  );
}