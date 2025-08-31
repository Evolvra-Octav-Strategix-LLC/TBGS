import LocationHubTemplate from "@/components/templates/LocationHubTemplate";
import { Home, Wrench, Building2, Hammer } from "lucide-react";

interface LocationPeltProps {
  onOpenContactModal: () => void;
}

export default function LocationPelt({ onOpenContactModal }: LocationPeltProps) {
  return (
    <LocationHubTemplate
      city="Pelt"
      citySlug="pelt"
      country="be"
      region="Limburg"
      nearbyCities={["Lommel", "Hamont-Achel", "Overpelt", "Neerpelt", "Peer", "Bree", "Kinrooi"]}
      landmarks={[
        "Pelt Centrum",
        "Overpelt",
        "Neerpelt",
        "Domein Dommelhof", 
        "Kanaal Dessel-Turnhout-Schoten",
        "Pelt-Noord",
        "Gemeentehuis Pelt",
        "Sportpark Pelt"
      ]}
      
      pageTitle="TBGS Pelt - Dak, Schoorsteen, Onderhoud & Bouw Specialist"
      metaDescription="TBGS in Pelt ✓ Daklekkage ✓ Renovatie ✓ Onderhoud ✓ Schoorsteenservice. Fusiegemeente specialist in Belgisch Limburg!"
      
      heroDescription="Uw lokale bouwpartner in Pelt voor daklekkage, renovaties, onderhoud en schoorsteen service. Specialist voor de hele fusiegemeente."
      cityDescription="Pelt is een dynamische fusiegemeente in de provincie Limburg, ontstaan uit de samenvoeging van Overpelt en Neerpelt. TBGS bedient deze groeiende gemeente met vakkundigheid en lokale kennis, van het centrum tot alle deelgebieden."
      
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
          name: "Steven Janssens",
          location: "Overpelt",
          rating: 5,
          text: "Snelle en professionele daklekkage reparatie. Perfect opgelost en netjes afgewerkt.",
          service: "Daklekkage reparatie",
          date: "December 2024"
        },
        {
          name: "Linda Peeters", 
          location: "Neerpelt", 
          rating: 5,
          text: "Uitstekende kwaliteit bij onze badkamerrenovatie. Zeer tevreden met het resultaat.",
          service: "Badkamerrenovatie",
          date: "November 2024"
        },
        {
          name: "Marc Claes",
          location: "Pelt Centrum",
          rating: 5, 
          text: "Betrouwbare partner voor ons jaarlijkse onderhoud. Vakkundig en stipt.",
          service: "Jaarlijks onderhoud",
          date: "Oktober 2024"
        }
      ]}
      
      faqs={[
        {
          question: "Werken jullie in heel Pelt?",
          answer: "Ja, we bedienen de hele fusiegemeente Pelt inclusief Overpelt en Neerpelt. Onze specialisten kennen alle deelgebieden goed en zijn overal snel ter plaatse."
        },
        {
          question: "Hebben jullie ervaring met Belgische bouwstijlen?",
          answer: "Absoluut! We werken al jaren in België en kennen de specifieke bouwstijlen en voorschriften. Van traditionele Limburgse woningen tot moderne nieuwbouw."
        },
        {
          question: "Kunnen jullie ook in het weekend komen voor spoedgevallen?",
          answer: "Ja, voor acute situaties zoals daklekkages zijn we ook in het weekend beschikbaar. We proberen altijd snel te reageren op spoedgevallen in Pelt."
        }
      ]}
      
      phone="+32 11 34 24 50"
      coordinates={{ lat: 51.2167, lng: 5.1500 }}
      onOpenContactModal={onOpenContactModal}
    />
  );
}