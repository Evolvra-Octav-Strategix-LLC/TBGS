import TDSArticleTemplate from "@/components/templates/TDSArticleTemplate";

interface DakgootLekkageProps {
  onOpenContactModal: () => void;
}

export default function DakgootLekkage({ onOpenContactModal }: DakgootLekkageProps) {
  const processSteps = [
    {
      title: "Spoedmelding & Diagnose",
      description: "Direct telefonisch contact voor dakgoot lekkage. Binnen 24 uur ter plaatse voor grondige diagnose van het probleem."
    },
    {
      title: "Lekdetectie & Analyse", 
      description: "Professionele dakgoot inspectie met moderne detectietechnieken om de exacte oorzaak van de lekkage vast te stellen."
    },
    {
      title: "Noodreparatie & Bescherming",
      description: "Directe dakgoot lekkage reparatie om waterschade te voorkomen. Tijdelijke afdichting en waterafvoer herstellen."
    },
    {
      title: "Permanente Reparatie",
      description: "Definitieve dakgoot reparatie met premium materialen en volledige garantie op het uitgevoerde vakwerk."
    }
  ];

  const lekkageTypes = [
    "Dakgoot lekkage - Beschadigde voegen, scheuren of losgeraakte bevestigingen",
    "Dakgoot overloop - Verstopte afvoeren door bladeren, mos of vuil", 
    "Regenpijp lekkage - Gebroken verbindingen of corrosie in waterafvoer",
    "Dakgoot verzakking - Losgeraakte beugels waardoor water blijft staan",
    "Hoekverbinding lek - Defecte dakgoot hoeken of T-stukken",
    "Dakgoot doorbuiging - Overbelasting door sneeuw of ijsvorming",
    "Zinken dakgoot lek - Corrosie en veroudering van metalen dakgoten",
    "PVC dakgoot schade - UV-schade of koudescheuren in kunststof systemen"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven dakgoot lekkage",
      "Amsterdam dakgoot reparatie", 
      "Rotterdam goot specialist",
      "Den Haag dakgoot lek",
      "Utrecht waterafvoer",
      "Tilburg dakgoot service",
      "Breda gootreparatie",
      "'s-Hertogenbosch dakgoten"
    ],
    belgium: [
      "Antwerpen dakgoot lek",
      "Brussel goot reparatie",
      "Gent dakgoot service", 
      "Leuven waterafvoer",
      "Mechelen dakgoot specialist",
      "Turnhout gootreparatie",
      "Hasselt dakgoten",
      "Genk dakgoot lekkage"
    ]
  };

  const faqs = [
    {
      question: "Hoe snel kunnen jullie dakgoot lekkage repareren?",
      answer: "Bij dakgoot lekkage spoedgevallen zijn wij binnen 24 uur ter plaatse in heel Nederland en België. Noodreparaties worden direct uitgevoerd om waterschade te voorkomen."
    },
    {
      question: "Wat kost dakgoot lekkage reparatie?",
      answer: "Wij bieden altijd een gratis inspectie en transparante offerte vooraf. Elke dakgoot reparatie is maatwerk, daarom bepalen wij eerst de exacte oorzaak en geven een eerlijke prijsopgave met 80+ jaar vakmanschap garantie."
    },
    {
      question: "Hoe voorkom ik dakgoot lekkage in de toekomst?",
      answer: "Preventief dakgoot onderhoud is essentieel: 2x per jaar reinigen, jaarlijkse inspectie van bevestigingen en voegen, en tijdige vervanging van versleten onderdelen."
    },
    {
      question: "Welke garantie krijg ik op dakgoot lekkage reparatie?",
      answer: "Alle dakgoot reparaties krijgen minimaal 2 jaar garantie op vakmanschap. Bij volledige dakgoot vervanging bieden wij tot 10 jaar garantie op materiaal en installatie."
    },
    {
      question: "Kunnen jullie alle soorten dakgoten repareren?",
      answer: "Ja, wij zijn specialist in alle dakgoot materialen: zinken dakgoten, PVC systemen, aluminium goten, koperen dakgoten en moderne halfrondsystemen."
    }
  ];

  const sections = [
    {
      title: "Soorten Dakgoot Lekkages",
      content: "",
      items: lekkageTypes,
      icon: "fas fa-list"
    },
    {
      title: "Gevolgen van Dakgoot Lekkage",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>Dakgoot lekkage</strong> is een veelvoorkomend probleem dat ernstige waterschade kan veroorzaken. Een defecte dakgoot zorgt voor water dat langs de gevel loopt, wat vocht in muren, funderingen en kelders veroorzaakt. 
          <strong>Dakgoot specialist</strong> TBGS lost dit probleem snel en vakkundig op met premium reparatietechnieken.
        </p>
        
        <div class="grid md:grid-cols-2 gap-6 mt-8">
          <div class="bg-white p-6 rounded-xl border">
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <i class="fas fa-exclamation-triangle text-red-600 mr-3"></i>
              Directe Waterschade
            </h3>
            <ul class="space-y-2 text-gray-700">
              <li>• Vocht in gevels en buitenmuren</li>
              <li>• Ondergraving van funderingen</li>
              <li>• Water in kelders en kruipruimtes</li>
              <li>• Erosie van bestrating en tuinen</li>
            </ul>
          </div>
          
          <div class="bg-white p-6 rounded-xl border">
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <i class="fas fa-home text-red-600 mr-3"></i>
              Structurele Problemen
            </h3>
            <ul class="space-y-2 text-gray-700">
              <li>• Vochtschade aan gevelwerk</li>
              <li>• Schimmelvorming in kelders</li>
              <li>• Verzakking van terrassen</li>
              <li>• Waardedaling van uw woning</li>
            </ul>
          </div>
        </div>
      `,
      icon: "fas fa-exclamation-triangle"
    },
    {
      title: "Premium Dakgoot Reparatie Technieken",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          TBGS <strong>dakgoot specialisten</strong> gebruiken geavanceerde reparatietechnieken voor permanente oplossingen. 
          Met 80+ jaar ervaring en moderne materialen garanderen wij waterdichte dakgoot systemen voor alle woningtypes.
        </p>
        
        <div class="grid md:grid-cols-3 gap-6 mt-8">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
            <h3 class="text-xl font-bold text-blue-900 mb-4 flex items-center">
              <i class="fas fa-spray-can text-blue-600 mr-3"></i>
              Dakgoot Coating
            </h3>
            <p class="text-blue-800">
              Geavanceerde nano-coating beschermt dakgoten tegen corrosie en vervuiling. Verlengt levensduur met 15+ jaar extra garantie.
            </p>
          </div>
          
          <div class="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
            <h3 class="text-xl font-bold text-green-900 mb-4 flex items-center">
              <i class="fas fa-wrench text-green-600 mr-3"></i>
              Beugel Versteviging
            </h3>
            <p class="text-green-800">
              Nieuwe dakgoot beugels en bevestigingen voor optimale waterafvoer. RVS materialen voor lange levensduur.
            </p>
          </div>
          
          <div class="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
            <h3 class="text-xl font-bold text-red-900 mb-4 flex items-center">
              <i class="fas fa-shield-alt text-red-600 mr-3"></i>
              Complete Vervanging
            </h3>
            <p class="text-red-800">
              Volledige dakgoot vervanging met moderne materialen. Aluminium of zinken systemen naar uw voorkeur.
            </p>
          </div>
        </div>
      `,
      icon: "fas fa-cogs"
    },
    {
      title: "Waarom Kiezen voor TBGS Dakgoot Specialist?",
      content: `
        <div class="grid md:grid-cols-2 gap-8 mt-8">
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="bg-red-100 rounded-full p-3 flex-shrink-0">
                <i class="fas fa-medal text-red-600 text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">80+ Jaar Familietraditie</h3>
                <p class="text-gray-700">Vier generaties dakgoot expertise sinds 1940. Bewezen vakmanschap in Nederland en België.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="bg-red-100 rounded-full p-3 flex-shrink-0">
                <i class="fas fa-clock text-red-600 text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">24/7 Spoedservice</h3>
                <p class="text-gray-700">Direct beschikbaar voor dakgoot lekkage spoedgevallen. Binnen 24 uur ter plaatse.</p>
              </div>
            </div>
          </div>
          
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="bg-red-100 rounded-full p-3 flex-shrink-0">
                <i class="fas fa-star text-red-600 text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Premium Materialen</h3>
                <p class="text-gray-700">Hoogwaardige dakgoot systemen van bekende merken. Duurzame oplossingen met lange garantie.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="bg-red-100 rounded-full p-3 flex-shrink-0">
                <i class="fas fa-certificate text-red-600 text-xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">10 Jaar Garantie</h3>
                <p class="text-gray-700">Uitgebreide garantie op dakgoot reparaties en vervangingen. Volledige zekerheid en service.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      icon: "fas fa-award"
    }
  ];

  const mainContent = `
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Dakgoot lekkage? Direct actie vereist!</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Een <strong>dakgoot lekkage</strong> is meer dan alleen een vervelend probleem - het kan ernstige waterschade aan uw woning veroorzaken. 
      Wanneer dakgoten niet goed functioneren, stroomt regenwater langs gevels, wat vocht in muren, funderingen en kelders veroorzaakt. 
      TBGS <strong>dakgoot specialisten</strong> staan 24/7 klaar voor spoedgevallen met 80+ jaar vakmanschap.
    </p>
    
    <h3 class="text-2xl font-bold text-gray-900 mb-4">Herken dakgoot lekkage symptomen tijdig</h3>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      Vroege detectie van <strong>dakgoot problemen</strong> voorkomt kostbare waterschade. Let op vochtplekken aan gevels, 
      water dat langs muren loopt tijdens regen, of dakgoten die overstromen. Een professionele <strong>dakgoot inspectie</strong> 
      door TBGS specialisten kan veel ellende voorkomen.
    </p>
  `;

  return (
    <TDSArticleTemplate
      title="Dakgoot Lekkage Reparatie 2025 | 24/7 Dakgoot Specialist | Nederland & België"
      description="🚨 Dakgoot lekkage spoedservice 2025! ⚡ 24/7 dakgoot specialist voor dakgoot reparatie in Nederland & België. ✅ 80+ jaar vakmanschap, premium reparaties. Bel nu!"
      url="https://tbgs.nl/daken/dakgoot-lekkage"
      heroTitle="Dakgoot Lekkage Reparatie"
      heroSubtitle="24/7 Spoedservice voor Dakgoot Lekkage | Premium Dakgoot Specialist"
      heroDescription="Professionele dakgoot lekkage reparatie door gecertificeerde dakgoot specialisten. 80+ jaar vakmanschap voor waterdichte oplossingen in Nederland & België."
      heroImage="https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Professionele dakgoot specialist repareert dakgoot lekkage met moderne gereedschappen"
      urgencyText="24/7 Dakgoot Spoedservice"
      statsConfig={{
        stat1: { number: "24/7", text: "Spoedservice" },
        stat2: { number: "800+", text: "Dakgoten gerepareerd" },
        stat3: { number: "10 jaar", text: "Garantie" }
      }}
      mainContent={mainContent}
      sections={sections}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Dakgoot Lekkage Spoedservice"
      ctaDescription="Voorkom waterschade met onze dakgoot lekkage reparatie service. Onze dakgoot specialisten staan 24/7 klaar voor spoedgevallen in heel Nederland en België."
      primaryButtonText="Direct Dakgoot Specialist"
      secondaryButtonText="24/7 Spoedservice Bellen"
      onOpenContactModal={onOpenContactModal}
    />
  );
}