import LocationHubTemplate from "@/components/templates/LocationHubTemplate";
import { Home, Wrench, Building2, Hammer } from "lucide-react";

interface LocationRetieProps {
  onOpenContactModal: () => void;
}

export default function LocationRetie({ onOpenContactModal }: LocationRetieProps) {
  return (
    <LocationHubTemplate
      city="Retie"
      citySlug="retie"
      country="be"
      region="Limburg"
      nearbyCities={["Lommel", "Pelt", "Overpelt", "Neerpelt", "Mol", "Dessel", "Geel"]}
      landmarks={[
        "Retie Centrum",
        "De Liereman",
        "Hobos",
        "Retie-Noord", 
        "Kamp van Beverlo",
        "Prinsenpark",
        "Retie Station",
        "Kasteel van Retie"
      ]}
      
      pageTitle="TBGS Retie - Dak, Schoorsteen, Onderhoud & Bouw Specialist"
      metaDescription="TBGS in Retie ✓ Daklekkage ✓ Renovatie ✓ Onderhoud ✓ Schoorsteenservice. Lokale specialist in Belgisch Limburg!"
      
      heroDescription="Uw lokale bouwpartner in Retie voor daklekkage, renovaties, onderhoud en schoorsteen service. Al jaren betrouwbaar actief in Belgisch Limburg."
      cityDescription="Retie is een charmante gemeente in de provincie Limburg, bekend om het natuurgebied De Liereman en haar rustige woongebieden. TBGS is er trots op om de bewoners van Retie al jaren van dienst te zijn met vakkundig en betrouwbaar bouwwerk."
      
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
          location: "Retie Centrum",
          rating: 5,
          text: "Uitstekende service bij daklekkage. Snel ter plaatse en perfect opgelost. Zeer tevreden!",
          service: "Daklekkage reparatie",
          date: "December 2024"
        },
        {
          name: "Dirk Peeters", 
          location: "Retie-Noord", 
          rating: 5,
          text: "Professionele renovatie van onze badkamer. Kwaliteit en afwerking zijn uitstekend.",
          service: "Badkamerrenovatie",
          date: "November 2024"
        },
        {
          name: "Linda Claes",
          location: "De Liereman",
          rating: 5, 
          text: "Al jaren tevreden klant voor onderhoud. Betrouwbaar en vakkundig team.",
          service: "Jaarlijks onderhoud",
          date: "Oktober 2024"
        }
      ]}
      
      faqs={[
        {
          question: "Werken jullie in heel Retie?",
          answer: "Ja, we bedienen heel Retie inclusief alle deelgemeenten en wijken. Van het centrum tot de buitengebieden - we kennen Retie goed en zijn snel ter plaatse."
        },
        {
          question: "Hebben jullie ervaring met Belgische bouwstijlen?",
          answer: "Absoluut! We werken al jaren in België en kennen de specifieke bouwstijlen en voorschriften. Van traditionele Limburgse woningen tot moderne nieuwbouw."
        },
        {
          question: "Kunnen jullie ook in het weekend komen voor spoedgevallen?",
          answer: "Ja, voor acute situaties zoals daklekkages zijn we ook in het weekend beschikbaar. We proberen altijd snel te reageren op spoedgevallen in Retie."
        }
      ]}
      
      phone="+32 11 34 24 50"
      coordinates={{ lat: 51.2634, lng: 5.0789 }}
      onOpenContactModal={onOpenContactModal}
    />
  );
}