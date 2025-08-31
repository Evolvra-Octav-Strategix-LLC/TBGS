import LocationHubTemplate from "@/components/templates/LocationHubTemplate";
import { Home, Wrench, Building2, Hammer } from "lucide-react";

interface LocationHamontAchelProps {
  onOpenContactModal: () => void;
}

export default function LocationHamontAchel({ onOpenContactModal }: LocationHamontAchelProps) {
  return (
    <LocationHubTemplate
      city="Hamont-Achel"
      citySlug="hamont-achel"
      country="be"
      region="Limburg"
      nearbyCities={["Lommel", "Pelt", "Neerpelt", "Overpelt", "Budel", "Weert", "Maaseik"]}
      landmarks={[
        "Hamont Centrum",
        "Achel Centrum",
        "Trappist Achel",
        "Hamont-Achel Station", 
        "Bosland",
        "Achelse Kluis",
        "De Lommelse Sahara",
        "Nationaal Park Hoge Kempen"
      ]}
      
      pageTitle="TBGS Hamont-Achel - Dak, Schoorsteen, Onderhoud & Bouw Specialist"
      metaDescription="TBGS in Hamont-Achel ✓ Daklekkage ✓ Renovatie ✓ Onderhoud ✓ Schoorsteenservice. Lokale specialist in Belgisch Limburg!"
      
      heroDescription="Uw lokale bouwpartner in Hamont-Achel voor daklekkage, renovaties, onderhoud en schoorsteen service. Specialist in beide deelgemeenten."
      cityDescription="Hamont-Achel is een unieke fusiegemeente in de provincie Limburg, bekend om de Trappist Achel en het prachtige natuurgebied Bosland. TBGS bedient beide deelgemeenten met dezelfde kwaliteit en vakkundigheid die onze klanten al jaren waarderen."
      
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
          name: "Kris Janssen",
          location: "Hamont Centrum",
          rating: 5,
          text: "Snelle en professionele daklekkage reparatie. Perfect opgelost en netjes afgewerkt.",
          service: "Daklekkage reparatie",
          date: "December 2024"
        },
        {
          name: "Ann Peeters", 
          location: "Achel", 
          rating: 5,
          text: "Mooie keukenrenovatie uitgevoerd. Kwaliteit en afwerking zijn uitstekend.",
          service: "Keukenrenovatie",
          date: "November 2024"
        },
        {
          name: "Paul Claes",
          location: "Hamont-Achel",
          rating: 5, 
          text: "Betrouwbare partner voor ons jaarlijkse onderhoud. Altijd vakkundig werk.",
          service: "Jaarlijks onderhoud",
          date: "Oktober 2024"
        }
      ]}
      
      faqs={[
        {
          question: "Werken jullie in beide deelgemeenten?",
          answer: "Ja, we bedienen zowel Hamont als Achel volledig. Onze specialisten kennen beide deelgemeenten goed en zijn overal snel ter plaatse."
        },
        {
          question: "Hebben jullie ervaring met Belgische bouwstijlen?",
          answer: "Absoluut! We werken al jaren in België en kennen de specifieke bouwstijlen en voorschriften. Van traditionele Limburgse woningen tot moderne nieuwbouw."
        },
        {
          question: "Kunnen jullie ook in het weekend komen voor spoedgevallen?",
          answer: "Ja, voor acute situaties zoals daklekkages zijn we ook in het weekend beschikbaar. We proberen altijd snel te reageren op spoedgevallen in Hamont-Achel."
        }
      ]}
      
      phone="+32 11 34 24 50"
      coordinates={{ lat: 51.2500, lng: 5.1167 }}
      onOpenContactModal={onOpenContactModal}
    />
  );
}