import LocationHubTemplate from "@/components/templates/LocationHubTemplate";
import { Home, Wrench, Building2, Hammer } from "lucide-react";

interface LocationNuenenProps {
  onOpenContactModal: () => void;
}

export default function LocationNuenen({ onOpenContactModal }: LocationNuenenProps) {
  return (
    <LocationHubTemplate
      city="Nuenen"
      citySlug="nuenen"
      country="nl"
      region="Noord-Brabant"
      nearbyCities={["Eindhoven", "Geldrop", "Mierlo", "Gerwen", "Nederwetten", "Lieshout", "Son en Breugel"]}
      landmarks={[
        "Van Gogh Village Museum",
        "Opwettenseweg",
        "Collse Watermolen", 
        "Neunen Centrum",
        "Park Groot Bijgaarden",
        "Vincent van Gogh Huis",
        "Catherinakerk",
        "De Bergen"
      ]}
      
      pageTitle="TBGS Nuenen - Dak, Schoorsteen, Onderhoud & Bouw Specialist"
      metaDescription="TBGS in Nuenen ✓ Daklekkage ✓ Renovatie ✓ Onderhoud ✓ Schoorsteenservice. Van Gogh dorp specialist, 25+ jaar ervaring!"
      
      heroDescription="Uw lokale bouwpartner in Nuenen voor daklekkage, renovaties, onderhoud en schoorsteen service. Specialist in het schilderachtige Van Gogh dorp."
      cityDescription="Nuenen, bekend als het Van Gogh dorp, heeft een rijke geschiedenis en charme die we bij TBGS ten volle waarderen. Als lokale specialists begrijpen wij de unieke karakter van de woningen in dit historische dorp. Van de authentieke boerderijen tot moderne nieuwbouw - wij behandelen elk project met de zorg en aandacht die het verdient."
      
      services={[
        {
          slug: "daklekkage",
          title: "Daklekkage Reparatie",
          description: "24/7 spoeddienst voor alle daklekkages",
          icon: <Home className="w-6 h-6" />,
          color: "red",
          popular: true
        },
        {
          slug: "renovatie", 
          title: "Renovatie & Verbouw",
          description: "Complete renovaties van A tot Z",
          icon: <Building2 className="w-6 h-6" />,
          color: "blue"
        },
        {
          slug: "onderhoud",
          title: "Onderhoud & Service",
          description: "Preventief onderhoud voor uw woning",
          icon: <Wrench className="w-6 h-6" />,
          color: "green"
        },
        {
          slug: "schoorsteen",
          title: "Schoorsteen Service", 
          description: "Reiniging, reparatie en controle",
          icon: <Hammer className="w-6 h-6" />,
          color: "orange"
        }
      ]}
      
      reviews={[
        {
          name: "Henk van der Meer",
          location: "Nuenen Centrum",
          rating: 5,
          text: "Uitstekende daklekkage service. Ze kenden de specifieke uitdagingen van ons oude huis en losten alles vakkundig op.",
          service: "Daklekkage reparatie",
          date: "December 2024"
        },
        {
          name: "Anne Bakker", 
          location: "Gerwen", 
          rating: 5,
          text: "Prachtige keukenrenovatie uitgevoerd. Ze hebben echt oog voor detail en respecteren de sfeer van ons authentieke huis.",
          service: "Keukenrenovatie",
          date: "November 2024"
        },
        {
          name: "Peter de Wit",
          location: "Nuenen Noord",
          rating: 5, 
          text: "Al jaren tevreden met het jaarlijkse onderhoud. Betrouwbaar team dat goed werk levert.",
          service: "Jaarlijks onderhoud",
          date: "Oktober 2024"
        },
        {
          name: "Maria Jansen",
          location: "Nederwetten",
          rating: 5,
          text: "Professionele schoorsteenservice. Ze weten wat ze doen en werken heel netjes.",
          service: "Schoorsteenreiniging", 
          date: "September 2024"
        }
      ]}
      
      faqs={[
        {
          question: "Hebben jullie ervaring met authentieke woningen in Nuenen?",
          answer: "Zeker! Nuenen heeft veel karakteristieke en historische woningen. We hebben ruime ervaring met het onderhoud van authentieke panden en respecteren altijd de oorspronkelijke bouwstijl en materialen."
        },
        {
          question: "Bedienen jullie ook de gehuchten rond Nuenen?",
          answer: "Ja, we bedienen heel de gemeente Nuenen inclusief Gerwen, Nederwetten en alle omliggende gehuchten. We kennen de lokale situatie goed en zijn snel ter plaatse."
        },
        {
          question: "Kunnen jullie werken aan monumentale panden in Nuenen?",
          answer: "Absoluut! We hebben ervaring met monumentaal onderhoud en begrijpen de specifieke eisen die gesteld worden aan werkzaamheden in beschermde dorpsgezichten zoals delen van Nuenen."
        },
        {
          question: "Hoe snel kunnen jullie in Nuenen ter plaatse zijn?",
          answer: "Voor spoedgevallen kunnen we meestal binnen 2-3 uur in Nuenen zijn. Voor reguliere afspraken plannen we binnen 24-48 uur een geschikt moment."
        }
      ]}
      
      phone="+31 40 123 4567"
      coordinates={{ lat: 51.4704, lng: 5.5502 }}
      onOpenContactModal={onOpenContactModal}
    />
  );
}