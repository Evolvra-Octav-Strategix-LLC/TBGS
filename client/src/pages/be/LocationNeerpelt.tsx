import LocationHubTemplate from "@/components/templates/LocationHubTemplate";
import { Home, Wrench, Building2, Hammer } from "lucide-react";

interface LocationNeerpeltProps {
  onOpenContactModal: () => void;
}

export default function LocationNeerpelt({ onOpenContactModal }: LocationNeerpeltProps) {
  return (
    <LocationHubTemplate
      city="Neerpelt"
      citySlug="neerpelt"
      country="be"
      region="Limburg"
      nearbyCities={["Pelt", "Lommel", "Overpelt", "Hamont-Achel", "Peer", "Bree", "Weert"]}
      landmarks={[
        "Neerpelt Centrum",
        "Kanaal Dessel-Turnhout-Schoten",
        "De Dommel",
        "Neerpelt Station", 
        "Gemeentehuis Pelt",
        "Sportcomplex Neerpelt",
        "Industriezone",
        "Bosgebied Neerpelt"
      ]}
      
      pageTitle="TBGS Neerpelt - Dak, Schoorsteen, Onderhoud & Bouw Specialist"
      metaDescription="TBGS in Neerpelt ✓ Daklekkage ✓ Renovatie ✓ Onderhoud ✓ Schoorsteenservice. Deel van gemeente Pelt, Belgisch Limburg!"
      
      heroDescription="Uw lokale bouwpartner in Neerpelt voor daklekkage, renovaties, onderhoud en schoorsteen service. Onderdeel van gemeente Pelt."
      cityDescription="Neerpelt is een belangrijke kern binnen de fusiegemeente Pelt in de provincie Limburg. TBGS kent de lokale situatie van Neerpelt goed en biedt al jaren betrouwbare bouw- en onderhoudsdiensten aan de inwoners van deze gezellige kern."
      
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
          name: "Wim Janssen",
          location: "Neerpelt Centrum",
          rating: 5,
          text: "Snelle en professionele daklekkage reparatie. Perfect opgelost.",
          service: "Daklekkage reparatie",
          date: "December 2024"
        },
        {
          name: "Rita Peeters", 
          location: "Neerpelt", 
          rating: 5,
          text: "Uitstekende badkamerrenovatie. Mooi resultaat en nette afwerking.",
          service: "Badkamerrenovatie",
          date: "November 2024"
        },
        {
          name: "Luc Claes",
          location: "Neerpelt Zuid",
          rating: 5, 
          text: "Betrouwbare partner voor ons jaarlijkse onderhoud. Zeer tevreden.",
          service: "Jaarlijks onderhoud",
          date: "Oktober 2024"
        }
      ]}
      
      faqs={[
        {
          question: "Werken jullie in heel Neerpelt?",
          answer: "Ja, we bedienen heel Neerpelt inclusief alle wijken. Als onderdeel van gemeente Pelt kennen we Neerpelt goed en zijn we snel ter plaatse."
        },
        {
          question: "Hebben jullie ervaring met Belgische bouwstijlen?",
          answer: "Absoluut! We werken al jaren in België en kennen de specifieke bouwstijlen en voorschriften. Van traditionele Limburgse woningen tot moderne nieuwbouw."
        },
        {
          question: "Kunnen jullie ook in het weekend komen voor spoedgevallen?",
          answer: "Ja, voor acute situaties zoals daklekkages zijn we ook in het weekend beschikbaar. We proberen altijd snel te reageren op spoedgevallen in Neerpelt."
        }
      ]}
      
      phone="+32 11 34 24 50"
      coordinates={{ lat: 51.2167, lng: 5.1667 }}
      onOpenContactModal={onOpenContactModal}
    />
  );
}