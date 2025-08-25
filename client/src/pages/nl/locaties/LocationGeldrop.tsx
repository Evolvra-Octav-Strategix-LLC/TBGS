import LocationHubTemplate from "@/components/templates/LocationHubTemplate";
import { Home, Wrench, Building2, Hammer } from "lucide-react";

interface LocationGeldropProps {
  onOpenContactModal: () => void;
}

export default function LocationGeldrop({ onOpenContactModal }: LocationGeldropProps) {
  return (
    <LocationHubTemplate
      city="Geldrop"
      citySlug="geldrop"
      country="nl"
      region="Noord-Brabant"
      nearbyCities={["Mierlo", "Eindhoven", "Nuenen", "Heeze", "Someren", "Helmond"]}
      landmarks={[
        "Kasteel Geldrop",
        "Geldrop Centrum",
        "Heuvelgalerie",
        "Gewestelijk Zwembad", 
        "Braakhuizenpark",
        "De Akkers",
        "Hulsel",
        "Zesgehuchten"
      ]}
      
      pageTitle="TBGS Geldrop - Dak, Schoorsteen, Onderhoud & Bouw Specialist"
      metaDescription="TBGS in Geldrop ✓ Daklekkage ✓ Renovatie ✓ Onderhoud ✓ Schoorsteenservice. Kasteel gemeente specialist, lokale ervaring!"
      
      heroDescription="Uw lokale bouwpartner in Geldrop voor daklekkage, renovaties, onderhoud en schoorsteen service. Specialist in deze historische kasteelgemeente."
      cityDescription="Geldrop is een charmante gemeente met het bekende Kasteel Geldrop als historisch middelpunt. Als lokale specialisten waarderen wij de unieke mix van historische gebouwen en moderne woonwijken in Geldrop. Van het pittoreske centrum tot de nieuwere ontwikkelingen - TBGS kent Geldrop en haar bewoners al meer dan 25 jaar."
      
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
          name: "Henk Bakker",
          location: "Geldrop Centrum",
          rating: 5,
          text: "Uitstekende service bij daklekkage. Ze kennen Geldrop goed en hebben snel en vakkundig gewerkt.",
          service: "Daklekkage reparatie",
          date: "December 2024"
        },
        {
          name: "Marieke van der Linden", 
          location: "De Akkers", 
          rating: 5,
          text: "Mooie keukenrenovatie gerealiseerd. Zeer tevreden met het resultaat en de begeleiding.",
          service: "Keukenrenovatie",
          date: "November 2024"
        },
        {
          name: "Jan Peters",
          location: "Hulsel",
          rating: 5, 
          text: "Betrouwbare onderhoudspartner. Al jaren tevreden klant.",
          service: "Jaarlijks onderhoud",
          date: "Oktober 2024"
        }
      ]}
      
      faqs={[
        {
          question: "Bedienen jullie ook de gehuchten rond Geldrop?",
          answer: "Ja, we bedienen heel de gemeente Geldrop-Mierlo inclusief alle gehuchten zoals Hulsel, Zesgehuchten en de buitengebieden. We kennen de lokale situatie goed."
        },
        {
          question: "Hebben jullie ervaring met karakteristieke woningen in Geldrop?",
          answer: "Zeker! Geldrop heeft veel mooie, karakteristieke woningen. We hebben ruime ervaring met het onderhoud van authentieke panden en respecteren altijd de oorspronkelijke stijl."
        }
      ]}
      
      phone="+31 40 123 4567"
      coordinates={{ lat: 51.4217, lng: 5.5597 }}
      onOpenContactModal={onOpenContactModal}
    />
  );
}