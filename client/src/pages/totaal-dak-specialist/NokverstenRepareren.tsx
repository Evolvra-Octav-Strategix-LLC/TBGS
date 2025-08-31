import TDSArticleTemplate from "@/components/templates/TDSArticleTemplate";

interface NokverstenReparerenProps {
  onOpenContactModal: () => void;
}

export default function NokverstenRepareren({ onOpenContactModal }: NokverstenReparerenProps) {
  const processSteps = [
    {
      title: "Nokvorsten Inspectie",
      description: "Grondige controle van nokvorsten, cementlaag en aansluitingen om lekkages en poreuze plekken op te sporen."
    },
    {
      title: "Schade Beoordeling", 
      description: "Beoordeling van de staat van bestaande cement en bepaling van de beste reparatiemethode."
    },
    {
      title: "Flexim Dakmortel Toepassing",
      description: "Vervanging van oude poreuze cement door duurzame elastische Flexim dakmortel voor permanent herstel."
    },
    {
      title: "Kwaliteitscontrole & Garantie",
      description: "Controle op waterdichtheid en afwerking met garantie op materiaal en vakmanschap."
    }
  ];

  const nokverstenServices = [
    "Nokvorsten repareren - Professioneel herstel met Flexim dakmortel",
    "Cement vervangen - Vervanging poreuze cementlaag door elastische mortel", 
    "Lekkage reparatie - Directe reparatie van lekkende nokvorsten",
    "Preventief onderhoud - Vervanging voor problemen ontstaan",
    "Flexim dakmortel - Modern elastisch alternatief voor traditioneel cement",
    "Nok isolatie - Aanvullende isolatie bij nokvorsten reparatie",
    "Windveer plaatsing - Aanvullende bescherming tegen weersinvloeden",
    "Garantie reparaties - Langdurige garantie op nokvorsten herstel"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven nokvorsten",
      "Amsterdam dakmortel", 
      "Rotterdam nokvorsten",
      "Den Haag reparatie",
      "Utrecht nokvorsten",
      "Tilburg dakmortel",
      "Breda nokvorsten",
      "'s-Hertogenbosch"
    ],
    belgium: [
      "Antwerpen nokvorsten",
      "Brussel dakmortel",
      "Gent nokvorsten", 
      "Leuven reparatie",
      "Mechelen nokvorsten",
      "Turnhout dakmortel",
      "Hasselt nokvorsten",
      "Genk reparatie"
    ]
  };

  const faqs = [
    {
      question: "Wat zijn nokvorsten en waarom gaan ze lekken?",
      answer: "Nokvorsten zijn de afdichting tussen dakpannen op de nok. De traditionele cementlaag wordt poreus door weersinvloeden, waardoor water kan doordringen en lekkages ontstaan."
    },
    {
      question: "Wat is Flexim dakmortel?",
      answer: "Flexim dakmortel is een elastische kunststof mortel die beter bestand is tegen weersomstandigheden. Het kan uitzetten en krimpen zonder scheuren, in tegenstelling tot traditioneel cement."
    },
    {
      question: "Hoe lang houdt Flexim dakmortel?",
      answer: "Flexim dakmortel gaat 2-3x langer mee dan traditioneel cement door de elastische eigenschappen. Gemiddeld 20-25 jaar versus 8-12 jaar voor cement."
    },
    {
      question: "Wat kost nokvorsten repareren?",
      answer: "Nokvorsten reparatie met Flexim dakmortel kost €15-25 per strekkende meter nok. Wij geven altijd een gratis inspectie en transparante offerte vooraf."
    }
  ];

  const sections = [
    {
      title: "Nokvorsten Reparatie Services",
      content: "",
      items: nokverstenServices,
      icon: "fas fa-list"
    },
    {
      title: "Nokvorsten: Lekkages Verhelpen en Voorkomen",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          De bedoeling van een dak is heel simpel. Hij moet er voor zorgen dat regenwater via de dakpannen de straat of de tuin in verdwijnt, in plaats van in uw huis. Helaas kan het af en toe voorkomen dat uw dak gaat lekken, wat kan zorgen voor ernstige schade in huis.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Vooral als u het pas doorkrijgt als het eigenlijk al te laat is en er schimmel en houtrot is ontstaan. Een lekkage aan het dak ontstaat vaak doordat de cementlaag van de <strong>nokvorsten</strong> poreus is geworden.
        </p>
        
        <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-exclamation-triangle text-red-600 mr-3"></i>
            Gevolgen van Lekkende Nokvorsten
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Waterschade in huis en op zolder</li>
            <li>• Schimmelvorming en houtrot</li>
            <li>• Beschadiging van isolatie en plafonds</li>
            <li>• Kostbare reparaties bij te late ontdekking</li>
          </ul>
        </div>
      `,
      icon: "fas fa-exclamation-triangle"
    },
    {
      title: "Herstel Uw Dak met Flexim Dakmortel",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          In plaats van het cement te vervangen, waardoor het vroeg of laat weer gaat lekken, is er inmiddels een veel betere grondstof om dakpannen vast te zetten. <strong>Flexim dakmortel</strong> is namelijk van kunststof en wel elastisch.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Daarmee is het dus veel beter bestand tegen alle weersomstandigheden. Bij warm weer kan het uitzetten en in de winter juist krimpen, zonder dat daardoor de structuur wordt aangetast of er scheuren ontstaan. Het is vrij makkelijk aan te brengen op uw dak, door de oude cementlaag te vervangen.
        </p>

        <div class="grid md:grid-cols-2 gap-6 mt-8">
          <div class="bg-white p-6 rounded-xl border">
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <i class="fas fa-times-circle text-red-600 mr-3"></i>
              Traditioneel Cement
            </h3>
            <ul class="space-y-2 text-gray-700">
              <li>• Wordt poreus door weersinvloeden</li>
              <li>• Scheurt bij temperatuurwisselingen</li>
              <li>• Korte levensduur 8-12 jaar</li>
              <li>• Regelmatige vervanging nodig</li>
            </ul>
          </div>
          
          <div class="bg-green-50 p-6 rounded-xl border">
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <i class="fas fa-check-circle text-green-600 mr-3"></i>
              Flexim Dakmortel
            </h3>
            <ul class="space-y-2 text-gray-700">
              <li>• Elastisch kunststof materiaal</li>
              <li>• Bestand tegen temperatuurwisselingen</li>
              <li>• Levensduur 20-25 jaar</li>
              <li>• Permanent waterdichte afdichting</li>
            </ul>
          </div>
        </div>
      `,
      icon: "fas fa-tools"
    },
    {
      title: "Gratis Offerte voor Nokvorsten Reparatie",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Heeft u een lekkage in uw dak, of heeft u sterk het vermoeden dat dit zo is? Vraag dan een gratis offerte aan, zodat wij zo snel mogelijk uw dak kunnen inspecteren en waar nodig repareren.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          U bepaalt uiteraard zelf op welke manier dit gebeurt, al raden wij aan om dit met het oog op de toekomst gelijk in één keer goed aan te pakken. Voeg waar mogelijk ook enkele foto's bij van uw lekkage voor een betere beoordeling.
        </p>

        <div class="bg-blue-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-camera text-red-600 mr-3"></i>
            Tips voor Betere Offerte
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Maak foto's van de lekkageplek in huis</li>
            <li>• Fotografeer de nokvorsten van buitenaf</li>
            <li>• Noteer wanneer de lekkage is ontstaan</li>
            <li>• Beschrijf de omvang van de waterschade</li>
          </ul>
        </div>
      `,
      icon: "fas fa-file-alt"
    }
  ];

  const mainContent = `
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Nokvorsten: Lekkages Verhelpen en Voorkomen</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      De <strong>nokvorsten</strong> zijn een cruciaal onderdeel van uw dak. Wanneer de traditionele cementlaag poreus wordt, ontstaan er lekkages die ernstige waterschade kunnen veroorzaken. Moderne <strong>Flexim dakmortel</strong> biedt een duurzame oplossing.
    </p>
  `;

  return (
    <TDSArticleTemplate
      title="Nokvorsten Repareren 2025 | Flexim Dakmortel | Lekkage Reparatie | Nederland & België"
      description="🏠 Nokvorsten repareren 2025! ✅ Flexim dakmortel vervangen poreuze cement, 20+ jaar garantie. Voorkom daklekkage met moderne elastische dakmortel - Nederland & België!"
      url="https://tbgs.nl/totaal-dak-specialist/nokvorsten-repareren"
      heroTitle="Nokvorsten repareren"
      heroSubtitle="Professionele nokvorsten reparatie met moderne Flexim dakmortel. Voorkom daklekkages door elastische vervanging van poreuze cementlagen."
      heroDescription="Flexim dakmortel is elastisch en bestand tegen alle weersomstandigheden. Geen scheuren meer - permanent waterdichte nokvorsten met 20+ jaar garantie."
      heroImage="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Professionele nokvorsten reparatie met Flexim dakmortel door dakspecialist"
      urgencyText="Gratis Nokvorsten Inspectie"
      statsConfig={{
        stat1: { number: "20+", text: "Jaar garantie" },
        stat2: { number: "100%", text: "Waterdicht" },
        stat3: { number: "24u", text: "Spoedservice" }
      }}
      mainContent={mainContent}
      sections={sections}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Klaar voor Nokvorsten Reparatie?"
      ctaDescription="Voorkom kostbare waterschade met moderne Flexim dakmortel. Onze dakspecialisten repareren uw nokvorsten permanent waterdicht."
      primaryButtonText="Gratis Nokvorsten Offerte"
      secondaryButtonText="Spoedservice Aanvragen"
      onOpenContactModal={onOpenContactModal}
    />
  );
}