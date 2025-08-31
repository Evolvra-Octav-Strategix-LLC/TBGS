import LocationHubTemplate from "@/components/templates/LocationHubTemplate";
import { Home, Wrench, Building2, Hammer } from "lucide-react";

interface LocationHamontProps {
  onOpenContactModal: () => void;
}

export default function LocationHamont({ onOpenContactModal }: LocationHamontProps) {
  return (
    <LocationHubTemplate
      city="Hamont"
      citySlug="hamont"
      country="be"
      region="Limburg"
      nearbyCities={["Hamont-Achel", "Lommel", "Pelt", "Achel", "Budel", "Weert", "Peer"]}
      landmarks={[
        "Hamont Centrum",
        "Kanaal Bocholt-Herentals",
        "De Dommel",
        "Hamont Station", 
        "Gemeentehuis Hamont-Achel",
        "Sportcomplex Hamont",
        "Industriezone",
        "Kasteel Hamont"
      ]}
      
      pageTitle="TBGS Hamont - Dak, Schoorsteen, Onderhoud & Bouw Specialist"
      metaDescription="TBGS in Hamont ✓ Daklekkage ✓ Renovatie ✓ Onderhoud ✓ Schoorsteenservice. Deel van gemeente Hamont-Achel, Belgisch Limburg!"
      
      heroDescription="Uw lokale bouwpartner in Hamont voor daklekkage, renovaties, onderhoud en schoorsteen service. Onderdeel van gemeente Hamont-Achel."
      cityDescription="Hamont is de hoofdkern van de fusiegemeente Hamont-Achel in de provincie Limburg. TBGS kent de lokale situatie van Hamont goed en biedt al jaren betrouwbare bouw- en onderhoudsdiensten aan de inwoners van deze levendige kern."
      
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
          name: "Karel Janssen",
          location: "Hamont Centrum",
          rating: 5,
          text: "Snelle en professionele daklekkage reparatie. Perfect opgelost.",
          service: "Daklekkage reparatie",
          date: "December 2024"
        },
        {
          name: "Els Peeters", 
          location: "Hamont", 
          rating: 5,
          text: "Mooie renovatie van onze woning. Kwaliteit en service zijn uitstekend.",
          service: "Woning renovatie",
          date: "November 2024"
        },
        {
          name: "Jef Claes",
          location: "Hamont Noord",
          rating: 5, 
          text: "Betrouwbare partner voor ons jaarlijkse onderhoud. Zeer tevreden.",
          service: "Jaarlijks onderhoud",
          date: "Oktober 2024"
        }
      ]}
      
      faqs={[
        {
          question: "Werken jullie in heel Hamont?",
          answer: "Ja, we bedienen heel Hamont inclusief alle wijken. Als onderdeel van gemeente Hamont-Achel kennen we Hamont goed en zijn we snel ter plaatse."
        },
        {
          question: "Hebben jullie ervaring met Belgische bouwstijlen?",
          answer: "Absoluut! We werken al jaren in België en kennen de specifieke bouwstijlen en voorschriften. Van traditionele Limburgse woningen tot moderne nieuwbouw."
        },
        {
          question: "Kunnen jullie ook in het weekend komen voor spoedgevallen?",
          answer: "Ja, voor acute situaties zoals daklekkages zijn we ook in het weekend beschikbaar. We proberen altijd snel te reageren op spoedgevallen in Hamont."
        }
      ]}
      
      phone="+32 11 34 24 50"
      coordinates={{ lat: 51.2500, lng: 5.1000 }}
      onOpenContactModal={onOpenContactModal}
    />
  );
}