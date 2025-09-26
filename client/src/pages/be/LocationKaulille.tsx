import LocationHubTemplate from "@/components/templates/LocationHubTemplate";
import { Home, Wrench, Building2, Hammer } from "lucide-react";

interface LocationKaulilleProps {
  onOpenContactModal: () => void;
}

export default function LocationKaulille({ onOpenContactModal }: LocationKaulilleProps) {
  return (
    <LocationHubTemplate
      city="Kaulille"
      citySlug="kaulille"
      country="be"
      region="Limburg"
      nearbyCities={["Lommel", "Pelt", "Overpelt", "Neerpelt", "Mol", "Dessel", "Geel"]}
      landmarks={[
        "Kaulille Centrum",
        "Bocholt",
        "Maaseik",
        "Kaulille-Noord", 
        "Het Keizershof",
        "Prinsenpark",
        "Kaulille Station",
        "Kasteel van Kaulille"
      ]}
      
      pageTitle="TBGS Kaulille - Dak, Schoorsteen, Onderhoud & Bouw Specialist"
      metaDescription="TBGS in Kaulille ✓ Daklekkage ✓ Renovatie ✓ Onderhoud ✓ Schoorsteenservice. Lokale specialist in Belgisch Limburg!"
      
      heroDescription="Uw lokale bouwpartner in Kaulille voor daklekkage, renovaties, onderhoud en schoorsteen service. Al jaren betrouwbaar actief in Belgisch Limburg."
      cityDescription="Kaulille is een charmante deelgemeente van Bocholt in de provincie Limburg, bekend om haar groene omgeving en rustige woongebieden. TBGS is er trots op om de bewoners van Kaulille al jaren van dienst te zijn met vakkundig en betrouwbaar bouwwerk."
      
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
          name: "Maria Janssen",
          location: "Kaulille Centrum",
          rating: 5,
          text: "Uitstekende service bij daklekkage. Snel ter plaatse en perfect opgelost. Zeer tevreden!",
          service: "Daklekkage reparatie",
          date: "December 2024"
        },
        {
          name: "Dirk Peeters", 
          location: "Kaulille-Noord", 
          rating: 5,
          text: "Professionele renovatie van onze badkamer. Kwaliteit en afwerking zijn uitstekend.",
          service: "Badkamerrenovatie",
          date: "November 2024"
        },
        {
          name: "Linda Claes",
          location: "Het Keizershof",
          rating: 5, 
          text: "Al jaren tevreden klant voor onderhoud. Betrouwbaar en vakkundig team.",
          service: "Jaarlijks onderhoud",
          date: "Oktober 2024"
        }
      ]}
      
      faqs={[
        {
          question: "Werken jullie in heel Kaulille?",
          answer: "Ja, we bedienen heel Kaulille inclusief alle deelgemeenten en wijken. Van het centrum tot de buitengebieden - we kennen Kaulille goed en zijn snel ter plaatse."
        },
        {
          question: "Hebben jullie ervaring met Belgische bouwstijlen?",
          answer: "Absoluut! We werken al jaren in België en kennen de specifieke bouwstijlen en voorschriften. Van traditionele Limburgse woningen tot moderne nieuwbouw."
        },
        {
          question: "Kunnen jullie ook in het weekend komen voor spoedgevallen?",
          answer: "Ja, voor acute situaties zoals daklekkages zijn we ook in het weekend beschikbaar. We proberen altijd snel te reageren op spoedgevallen in Kaulille."
        }
      ]}
      
      phone="+32 11 34 24 50"
      coordinates={{ lat: 51.1872, lng: 5.5257 }}
      onOpenContactModal={onOpenContactModal}
    />
  );
}