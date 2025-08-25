import LocationHubTemplate from "@/components/templates/LocationHubTemplate";
import { Home, Wrench, Building2, Hammer } from "lucide-react";

interface LocationWaalreProps {
  onOpenContactModal: () => void;
}

export default function LocationWaalre({ onOpenContactModal }: LocationWaalreProps) {
  return (
    <LocationHubTemplate
      city="Waalre"
      citySlug="waalre"
      country="nl"
      region="Noord-Brabant"
      nearbyCities={["Veldhoven", "Eindhoven", "Eersel", "Valkenswaard", "Aalst"]}
      landmarks={[
        "Waalre Centrum",
        "Kasteel de Borchgrave",
        "Golfbaan Toxandria",
        "Natuurgebied Leenderbos", 
        "Aalst",
        "De Heuvel",
        "Heikant",
        "Laar"
      ]}
      
      pageTitle="TBGS Waalre - Dak, Schoorsteen, Onderhoud & Bouw Specialist"
      metaDescription="TBGS in Waalre ✓ Daklekkage ✓ Renovatie ✓ Onderhoud ✓ Schoorsteenservice. Groene gemeente specialist, kwaliteit en service!"
      
      heroDescription="Uw lokale bouwpartner in Waalre voor daklekkage, renovaties, onderhoud en schoorsteen service. Specialist in deze groene, welvarende gemeente."
      cityDescription="Waalre staat bekend als een van de groenste en meest welvarende gemeenten van Nederland. Met haar mix van landelijke sfeer en moderne voorzieningen biedt Waalre een unieke woonomgeving. TBGS is er trots op om de kwaliteitsbewuste inwoners van Waalre al jaren van dienst te zijn met vakkundig en betrouwbaar werk dat past bij de hoge standaarden van deze mooie gemeente."
      
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
          name: "Robert van den Berg",
          location: "Waalre Centrum",
          rating: 5,
          text: "Professionele aanpak bij onze daklekkage. Snel, netjes en kwaliteit die past bij Waalre.",
          service: "Daklekkage reparatie",
          date: "December 2024"
        },
        {
          name: "Saskia Hendriksen", 
          location: "Aalst", 
          rating: 5,
          text: "Prachtige renovatie van onze villa. Uitstekende kwaliteit en oog voor detail.",
          service: "Villarenovatie",
          date: "November 2024"
        },
        {
          name: "Mark de Wit",
          location: "De Heuvel",
          rating: 5, 
          text: "Zeer tevreden met het preventieve onderhoud. Professioneel en betrouwbaar.",
          service: "Preventief onderhoud",
          date: "Oktober 2024"
        }
      ]}
      
      faqs={[
        {
          question: "Hebben jullie ervaring met de hoogwaardige woningen in Waalre?",
          answer: "Absoluut! Waalre staat bekend om haar kwaliteitswoningen. We hebben ruime ervaring met luxe woningen, villa's en landhuizen. Onze kwaliteitsstandaarden passen perfect bij de verwachtingen in Waalre."
        },
        {
          question: "Bedienen jullie ook Aalst en de andere kernen van Waalre?",
          answer: "Ja, we bedienen heel de gemeente Waalre inclusief Aalst en alle andere kernen en buitengebieden. We kennen de lokale situatie en specifieke wensen van bewoners goed."
        }
      ]}
      
      phone="+31 40 123 4567"
      coordinates={{ lat: 51.3889, lng: 5.4442 }}
      onOpenContactModal={onOpenContactModal}
    />
  );
}