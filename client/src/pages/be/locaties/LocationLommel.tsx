import LocationHubTemplate from "@/components/templates/LocationHubTemplate";
import { Home, Wrench, Building2, Hammer } from "lucide-react";

interface LocationLommelProps {
  onOpenContactModal: () => void;
}

export default function LocationLommel({ onOpenContactModal }: LocationLommelProps) {
  return (
    <LocationHubTemplate
      city="Lommel"
      citySlug="lommel"
      country="be"
      region="Limburg"
      nearbyCities={["Hamont-Achel", "Pelt", "Overpelt", "Neerpelt", "Bree", "Peer", "Maaseik"]}
      landmarks={[
        "Lommel Centrum",
        "Lommel Sahara",
        "De Adelberg",
        "Glazen Stad", 
        "Kattenbos",
        "Lommelheide",
        "Lommel Stad",
        "Kristalpark"
      ]}
      
      pageTitle="TBGS Lommel - Dak, Schoorsteen, Onderhoud & Bouw Specialist"
      metaDescription="TBGS in Lommel ✓ Daklekkage ✓ Renovatie ✓ Onderhoud ✓ Schoorsteenservice. Limburg specialist, 25+ jaar ervaring in België!"
      
      heroDescription="Uw betrouwbare bouwpartner in Lommel voor daklekkage, renovaties, onderhoud en schoorsteen service. Al jaren actief in Belgisch Limburg."
      cityDescription="Lommel is een levendige stad in de provincie Limburg, bekend om haar unieke landschappen zoals de Lommel Sahara en het uitgestrekte natuurgebied Lommelheide. TBGS is er trots op om de inwoners van Lommel al jaren van dienst te zijn met vakkundig bouwwerk. Van het bruisende centrum tot de groene buitenwijken - wij kennen Lommel en haar bewoners goed."
      
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
          name: "Marc Janssen",
          location: "Lommel Centrum",
          rating: 5,
          text: "Uitstekende service bij daklekkage. Snel ter plaatse en vakkundig opgelost. Zeer tevreden!",
          service: "Daklekkage reparatie",
          date: "December 2024"
        },
        {
          name: "An Verbeek", 
          location: "Kristalpark", 
          rating: 5,
          text: "Prachtige keukenrenovatie uitgevoerd. Kwaliteit en afwerking zijn uitstekend.",
          service: "Keukenrenovatie",
          date: "November 2024"
        },
        {
          name: "Johan Smets",
          location: "Lommel Zuid",
          rating: 5, 
          text: "Al jaren tevreden klant voor onderhoud. Betrouwbaar en vakkundig team.",
          service: "Jaarlijks onderhoud",
          date: "Oktober 2024"
        }
      ]}
      
      faqs={[
        {
          question: "Werken jullie in heel Lommel?",
          answer: "Ja, we bedienen heel Lommel inclusief alle deelgemeenten en wijken. Van het centrum tot de buitengebieden - we kennen Lommel goed en zijn snel ter plaatse."
        },
        {
          question: "Hebben jullie ervaring met Belgische bouwstijlen?",
          answer: "Absoluut! We werken al jaren in België en kennen de specifieke bouwstijlen en voorschriften. Van traditionele Limburgse woningen tot moderne nieuwbouw."
        },
        {
          question: "Kunnen jullie ook in het weekend komen voor spoedgevallen?",
          answer: "Ja, voor acute situaties zoals daklekkages zijn we ook in het weekend beschikbaar. We proberen altijd snel te reageren op spoedgevallen in Lommel."
        }
      ]}
      
      phone="+32 11 123 456"
      coordinates={{ lat: 51.2297, lng: 5.3131 }}
      onOpenContactModal={onOpenContactModal}
    />
  );
}