import TOSArticleTemplate from "@/components/templates/TOSArticleTemplate";

interface DakkapelReinigenProps {
  onOpenContactModal: () => void;
}

export default function DakkapelReinigen({ onOpenContactModal }: DakkapelReinigenProps) {
  const processSteps = [
    {
      title: "Dakkapel Inspectie",
      description: "Grondige controle van dakkapel constructie, ramen en afwateringssysteem."
    },
    {
      title: "Professionele Reiniging", 
      description: "Vakkundige reiniging van dakkapel buitenkant, ramen en omliggende dakstructuur."
    },
    {
      title: "Onderhoud & Reparatie",
      description: "Kleine reparaties direct uitgevoerd en advies over preventief onderhoud."
    },
    {
      title: "Onderhoudsabonnement",
      description: "Maatwerk abonnement samenstellen voor regelmatige dakkapel zorg."
    }
  ];

  const reinigingServices = [
    "Dakkapel buitenreiniging - Complete reiniging van dakkapel constructie",
    "Ramen reinigen - Professionele ramen reiniging binnen en buiten", 
    "Kozijnen onderhoud - Reiniging en onderhoud van dakkapel kozijnen",
    "Afwatering controle - Controle en reiniging van afwateringssysteem",
    "Loodwerk inspectie - Onderhoud van loodwerk rondom dakkapel",
    "Dakpannen reiniging - Reiniging dakpannen rond dakkapel",
    "Preventief onderhoud - Regelmatige zorg voorkomt grote problemen",
    "Onderhoudsabonnement - Maatwerk abonnement op uw behoeften"
  ];

  const serviceAreas = {
    netherlands: [
      "Eindhoven dakkapel reinigen",
      "Amsterdam dakkapel", 
      "Rotterdam onderhoud",
      "Den Haag reiniging",
      "Utrecht dakkapel",
      "Tilburg onderhoud",
      "Breda reiniging",
      "'s-Hertogenbosch"
    ],
    belgium: [
      "Antwerpen dakkapel reinigen",
      "Brussel dakkapel",
      "Gent onderhoud", 
      "Leuven reiniging",
      "Mechelen dakkapel",
      "Turnhout onderhoud",
      "Hasselt reiniging",
      "Genk dakkapel"
    ]
  };

  const faqs = [
    {
      question: "Waarom is zelf dakkapel reinigen gevaarlijk?",
      answer: "Dakkapel reinigen is heel onveilig door het klauteren op dak. Risico op vallen en ongevallen is groot. Professionele reiniging is veiliger en effectiever."
    },
    {
      question: "Hoe vaak moet ik mijn dakkapel laten reinigen?",
      answer: "Minstens jaarlijks moet uw dakkapel gereinigd worden. Dit voorkomt groene aanslag, algen en vogel uitwerpselen die schilderwerk en materialen aantasten."
    },
    {
      question: "Wat houdt het onderhoudsabonnement in?",
      answer: "Jaarlijks komen wij uw dakkapel reinigen voor vast bedrag. Noodzakelijke behandelingen inbegrepen. U vergeet het nooit meer en hoeft niet elk jaar een reiniger te zoeken."
    },
    {
      question: "Waarom kiezen voor TBGS B.V.?",
      answer: "Jarenlange ervaring, betrouwbare service, transparantie en klantvriendelijkheid. Wij weten wat écht leeft bij klanten en werken met respect voor materialen."
    }
  ];

  const sections = [
    {
      title: "Dakkapel Reiniging Services",
      content: "",
      items: reinigingServices,
      icon: "fas fa-list"
    },
    {
      title: "Professioneel Dakkapel Reinigen, Onze Specialiteit!",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Jaren geleden maakte je de weloverwogen keuze om een <strong>dakkapel</strong> te laten plaatsen. Je hebt kunnen genieten van de extra ruimte en lichtinval, maar je hebt ook praktisch ondervonden dat het schoonmaken toch veel minder leuk en bovendien heel onveilig is.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Niets is dan ook zo vervelend dan jouw mooie <strong>dakkapel</strong> langzaam groen te zien worden door de vele aanslag en algen erop. Bij de TBGS B.V. nemen we dit vervelende karwei dan ook met plezier van u over. Niet enkel zijn wij gespecialiseerd in <strong>dakkapel reinigen</strong>, maar we doen dit ook nog eens veilig en professioneel.
        </p>
        
        <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-shield-alt text-green-600 mr-3"></i>
            Waarom Professionele Reiniging?
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Veilig - geen gevaarlijk zelf klauteren</li>
            <li>• Voorkomen groene aanslag en algen</li>
            <li>• Behoud mooie uitstraling dakkapel</li>
            <li>• Gespecialiseerde ervaring en materialen</li>
            <li>• Professionele en veilige uitvoering</li>
          </ul>
        </div>
      `,
      icon: "fas fa-star"
    },
    {
      title: "Waarom Reinigen?",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Het is uitermate belangrijk om uw <strong>dakkapel</strong> regelmatig te laten reinigen. Wij zeggen dit niet enkel omdat het de fantastische uitstraling van uw huis sterk kan aantasten, maar ook omdat het zelf reinigen van uw <strong>dakkapel</strong> niet zonder gevaar is.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Bovendien tasten algen, mos en vogel uitwerpselen waarschijnlijk al langdurig uw schilderwerk en plaatmateriaal aan zonder dat u het ooit opmerkte. Het is daarom belangrijk deze met de juiste schoonmaakmiddelen te reinigen. Enkel op die manier voorkomt u structurele schade.
        </p>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
            <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <i class="fas fa-exclamation-triangle text-red-600 mr-3"></i>
              Gevaren Zelf Reinigen
            </h3>
            <ul class="space-y-2 text-gray-700">
              <li>• Heel onveilig klauteren op dak</li>
              <li>• Risico op vallen en ongevallen</li>
              <li>• Verkeerde schoonmaakmiddelen</li>
              <li>• Schade aan materialen mogelijk</li>
            </ul>
          </div>
          
          <div class="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-600">
            <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <i class="fas fa-bug text-green-600 mr-3"></i>
              Schade Door Vervuiling
            </h3>
            <ul class="space-y-2 text-gray-700">
              <li>• Algen en mos aantasting</li>
              <li>• Vogel uitwerpselen corrosie</li>
              <li>• Schilderwerk beschadiging</li>
              <li>• Plaatmateriaal aantasting</li>
            </ul>
          </div>
        </div>
      `,
      icon: "fas fa-exclamation-triangle"
    },
    {
      title: "Jarenlange Ervaring & Respect voor Materialen",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Wij hebben een jarenlange ervaring als het op het reinigen van <strong>dakkapellen</strong> aankomt waardoor de reiniging niet enkel professioneel verloopt maar ook met respect voor de gebruikte materialen.
        </p>

        <div class="bg-green-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-medal text-green-600 mr-3"></i>
            Professionele Expertise
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Jarenlange ervaring in dakkapel reiniging</li>
            <li>• Respect voor gebruikte materialen</li>
            <li>• Juiste schoonmaakmiddelen per materiaalsoort</li>
            <li>• Voorkoming van materiaalschade</li>
            <li>• Professionele werkwijze gegarandeerd</li>
          </ul>
        </div>
      `,
      icon: "fas fa-medal"
    },
    {
      title: "Ontdek Nu Ons Onderhoudsabonnement",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Dat u uw <strong>dakkapel</strong> minstens jaarlijks moet laten reinigen mag nu wel duidelijk zijn, toch blijkt dat men dit uiteindelijk vergeet bij te houden en steeds opnieuw op zoek moet naar een reiniger.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Om dit euvel voor eens en voor altijd weg te werken hebben wij speciaal voor u een uitgebreid <strong>onderhoudsabonnement</strong> ontwikkeld. Met dit abonnement komen wij jaarlijks voor een vast bedrag uw <strong>dakkapel reinigen</strong> en voeren wij de noodzakelijke behandelingen uit.
        </p>

        <div class="bg-blue-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-calendar-check text-green-600 mr-3"></i>
            Onderhoudsabonnement Voordelen
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Vergeet nooit meer jaarlijkse reiniging</li>
            <li>• Vast bedrag - geen verrassingen</li>
            <li>• Automatische planning elk jaar</li>
            <li>• Noodzakelijke behandelingen inbegrepen</li>
            <li>• Op beide oren slapen - zorgeloos</li>
            <li>• Geen zoeken naar reiniger elk jaar</li>
          </ul>
        </div>
      `,
      icon: "fas fa-handshake"
    },
    {
      title: "Waarom Kiezen voor TBGS B.V.?",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Wij staan voor betrouwbare service en garantie. Wij kunnen een jarenlange ervaring binnen ons domein voorleggen en weten wat er écht leeft bij onze klanten. Transparantie, open communicatie en klantvriendelijkheid zijn waarden die wij nauw in het hart dragen.
        </p>

        <div class="bg-green-50 p-6 rounded-xl">
          <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <i class="fas fa-heart text-green-600 mr-3"></i>
            TBGS B.V. Waarden
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Betrouwbare service en garantie</li>
            <li>• Jarenlange domein ervaring</li>
            <li>• Weten wat écht leeft bij klanten</li>
            <li>• Transparantie in alles wat we doen</li>
            <li>• Open communicatie altijd</li>
            <li>• Klantvriendelijkheid staat voorop</li>
          </ul>
        </div>
      `,
      icon: "fas fa-heart"
    }
  ];

  const mainContent = `
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Professioneel Dakkapel Reinigen, Onze Specialiteit!</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
      U wenst uw <strong>dakkapel te laten reinigen</strong>? Wij staan steeds voor u klaar. Vraag een gratis en vrijblijvende offerte aan via ons contactformulier. Onze vriendelijke medewerkers staan u met plezier te woord en samen zoeken we naar de beste mogelijkheden en oplossingen.
    </p>
  `;

  return (
    <TOSArticleTemplate
      title="Dakkapel Reinigen 2025 | Onderhoud Specialist | Onderhoudsabonnement | Nederland & België"
      description="🏠 Dakkapel reinigen 2025! ✅ Professionele reiniging, ramen schoonmaken, onderhoudsabonnement op maat - Nederland & België!"
      url="https://tbgs.nl/totaal-onderhoud-specialist/dakkapel-reinigen"
      heroTitle="Dakkapel reinigen"
      heroSubtitle="Veilige en professionele dakkapel reiniging - ons vervelende karwei wordt uw zorgeloze oplossing!"
      heroDescription="Geen gevaarlijk klauteren meer. Wij nemen het dakkapel reinigen met plezier van u over. Onderhoudsabonnement voor zorgeloos jaar."
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      heroImageAlt="Professionele dakkapel reiniging door onderhoud specialist"
      urgencyText="Onderhoudsabonnement Beschikbaar"
      statsConfig={{
        stat1: { number: "100%", text: "Helder zicht" },
        stat2: { number: "Jaarlijks", text: "Onderhoud" },
        stat3: { number: "Maatwerk", text: "Abonnement" }
      }}
      mainContent={mainContent}
      sections={sections}
      processSteps={processSteps}
      serviceAreas={serviceAreas}
      faqs={faqs}
      ctaTitle="Meer Info over Dakkapel Reiniging?"
      ctaDescription="Vraag een gratis en vrijblijvende offerte aan. Onze vriendelijke medewerkers zoeken samen met u naar de beste oplossingen."
      primaryButtonText="Reiniging Inplannen"
      secondaryButtonText="Onderhoud Specialist Bellen"
      onOpenContactModal={onOpenContactModal}
    />
  );
}