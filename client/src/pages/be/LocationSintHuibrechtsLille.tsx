import LocationHubTemplate from "@/components/templates/LocationHubTemplate";
import { Home, Wrench, Building2, Hammer } from "lucide-react";

interface LocationSintHuibrechtsLilleProps {
  onOpenContactModal: () => void;
}

export default function LocationSintHuibrechtsLille({ onOpenContactModal }: LocationSintHuibrechtsLilleProps) {
  return (
    <LocationHubTemplate
      city="Sint-Huibrechts-Lille"
      citySlug="sint-huibrechts-lille"
      country="be"
      region="Limburg"
      nearbyCities={["Lommel", "Pelt", "Hamont-Achel", "Overpelt", "Bree", "Kinrooi", "Maaseik"]}
      landmarks={[
        "Sint-Huibrechts-Lille Centrum",
        "Kanaal Bocholt-Herentals",
        "De Dommel",
        "Lille Centrum", 
        "Sint-Huibrechts Kerk",
        "Gemeentehuis",
        "Sportcomplex",
        "Industriezone Lille"
      ]}
      
      pageTitle="TBGS Sint-Huibrechts-Lille - Dak, Schoorsteen, Onderhoud & Bouw Specialist"
      metaDescription="TBGS in Sint-Huibrechts-Lille ✓ Daklekkage ✓ Renovatie ✓ Onderhoud ✓ Schoorsteenservice. Lokale specialist in Belgisch Limburg!"
      
      heroDescription="Uw lokale bouwpartner in Sint-Huibrechts-Lille voor daklekkage, renovaties, onderhoud en schoorsteen service. Specialist in beide kernen."
      cityDescription="Sint-Huibrechts-Lille is een landelijke gemeente in de provincie Limburg, bestaande uit de kernen Sint-Huibrechts-Lille en Lille. TBGS bedient deze gemeente met persoonlijke aandacht en vakkundigheid die past bij de kleinschalige, hechte gemeenschap."
      
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
          name: "Jan Peeters",
          location: "Sint-Huibrechts-Lille",
          rating: 5,
          text: "Uitstekende service bij daklekkage. Snel ter plaatse en vakkundig opgelost.",
          service: "Daklekkage reparatie",
          date: "December 2024"
        },
        {
          name: "Marie Claes", 
          location: "Lille", 
          rating: 5,
          text: "Professionele renovatie van onze woonkamer. Mooi resultaat en nette afwerking.",
          service: "Woonkamerrenovatie",
          date: "November 2024"
        },
        {
          name: "Peter Janssen",
          location: "Sint-Huibrechts-Lille",
          rating: 5, 
          text: "Betrouwbare partner voor onderhoud. Altijd op tijd en vakkundig werk.",
          service: "Jaarlijks onderhoud",
          date: "Oktober 2024"
        }
      ]}
      
      faqs={[
        {
          question: "Werken jullie in beide kernen?",
          answer: "Ja, we bedienen zowel Sint-Huibrechts-Lille als Lille volledig. Onze specialisten kennen beide kernen goed en zijn overal snel ter plaatse."
        },
        {
          question: "Hebben jullie ervaring met Belgische bouwstijlen?",
          answer: "Absoluut! We werken al jaren in België en kennen de specifieke bouwstijlen en voorschriften. Van traditionele Limburgse woningen tot moderne nieuwbouw."
        },
        {
          question: "Kunnen jullie ook in het weekend komen voor spoedgevallen?",
          answer: "Ja, voor acute situaties zoals daklekkages zijn we ook in het weekend beschikbaar. We proberen altijd snel te reageren op spoedgevallen in Sint-Huibrechts-Lille."
        }
      ]}
      
      phone="+32 11 34 24 50"
      coordinates={{ lat: 51.2333, lng: 5.1833 }}
      onOpenContactModal={onOpenContactModal}
    />
  );
}