import LocationHubTemplate from "@/components/templates/LocationHubTemplate";
import { Home, Wrench, Building2, Hammer } from "lucide-react";

interface LocationOverpeltProps {
  onOpenContactModal: () => void;
}

export default function LocationOverpelt({ onOpenContactModal }: LocationOverpeltProps) {
  return (
    <LocationHubTemplate
      city="Overpelt"
      citySlug="overpelt"
      country="be"
      region="Limburg"
      nearbyCities={["Pelt", "Lommel", "Hamont-Achel", "Neerpelt", "Weert", "Peer", "Bree"]}
      landmarks={[
        "Overpelt Centrum",
        "Kanaal Dessel-Turnhout-Schoten",
        "De Dommel",
        "Overpelt Fabriek", 
        "Gemeentehuis Pelt",
        "Sportpark Overpelt",
        "Industriezone Noord",
        "Woonpark Overpelt"
      ]}
      
      pageTitle="TBGS Overpelt - Dak, Schoorsteen, Onderhoud & Bouw Specialist"
      metaDescription="TBGS in Overpelt ✓ Daklekkage ✓ Renovatie ✓ Onderhoud ✓ Schoorsteenservice. Deel van gemeente Pelt, Belgisch Limburg!"
      
      heroDescription="Uw lokale bouwpartner in Overpelt voor daklekkage, renovaties, onderhoud en schoorsteen service. Onderdeel van gemeente Pelt."
      cityDescription="Overpelt is een belangrijke kern binnen de fusiegemeente Pelt in de provincie Limburg. TBGS kent de lokale bouwstijlen en behoeften van Overpelt goed en biedt vakkundige dienstverlening aan alle inwoners van deze levendige kern."
      
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
          name: "Filip Janssen",
          location: "Overpelt Centrum",
          rating: 5,
          text: "Snelle reactie bij daklekkage. Professioneel en vakkundig opgelost.",
          service: "Daklekkage reparatie",
          date: "December 2024"
        },
        {
          name: "Sofie Claes", 
          location: "Overpelt", 
          rating: 5,
          text: "Mooie renovatie van onze keuken. Kwaliteit en service zijn top.",
          service: "Keukenrenovatie",
          date: "November 2024"
        },
        {
          name: "Tom Peeters",
          location: "Overpelt Noord",
          rating: 5, 
          text: "Betrouwbare partner voor ons jaarlijkse onderhoud. Altijd tevreden.",
          service: "Jaarlijks onderhoud",
          date: "Oktober 2024"
        }
      ]}
      
      faqs={[
        {
          question: "Werken jullie in heel Overpelt?",
          answer: "Ja, we bedienen heel Overpelt inclusief alle wijken en buitengebieden. Als onderdeel van gemeente Pelt kennen we Overpelt goed en zijn we snel ter plaatse."
        },
        {
          question: "Hebben jullie ervaring met Belgische bouwstijlen?",
          answer: "Absoluut! We werken al jaren in België en kennen de specifieke bouwstijlen en voorschriften. Van traditionele Limburgse woningen tot moderne nieuwbouw."
        },
        {
          question: "Kunnen jullie ook in het weekend komen voor spoedgevallen?",
          answer: "Ja, voor acute situaties zoals daklekkages zijn we ook in het weekend beschikbaar. We proberen altijd snel te reageren op spoedgevallen in Overpelt."
        }
      ]}
      
      phone="+32 11 34 24 50"
      coordinates={{ lat: 51.2167, lng: 5.1333 }}
      onOpenContactModal={onOpenContactModal}
    />
  );
}