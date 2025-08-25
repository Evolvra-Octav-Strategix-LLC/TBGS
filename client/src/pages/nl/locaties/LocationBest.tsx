import LocationHubTemplate from "@/components/templates/LocationHubTemplate";
import { Home, Wrench, Building2, Hammer } from "lucide-react";

interface LocationBestProps {
  onOpenContactModal: () => void;
}

export default function LocationBest({ onOpenContactModal }: LocationBestProps) {
  return (
    <LocationHubTemplate
      city="Best"
      citySlug="best"
      country="nl"
      region="Noord-Brabant"
      nearbyCities={["Eindhoven", "Son en Breugel", "Oirschot", "Veldhoven", "Sint-Oedenrode"]}
      landmarks={[
        "Best Centrum",
        "Golfbaan Welschap",
        "Sportpark De Rosep", 
        "Natuurgebied De Mortelen",
        "Eindhovenseweg",
        "Wilhelminaplein",
        "De Speelhof",
        "Naastenbest"
      ]}
      
      pageTitle="TBGS Best - Dak, Schoorsteen, Onderhoud & Bouw Specialist"
      metaDescription="TBGS in Best ✓ Daklekkage ✓ Renovatie ✓ Onderhoud ✓ Schoorsteenservice. Lokale specialisten in Best, 25+ jaar ervaring!"
      
      heroDescription="Uw lokale bouwpartner in Best voor daklekkage, renovaties, onderhoud en schoorsteen service. Specialist in deze groene gemeente tussen Eindhoven en 's-Hertogenbosch."
      cityDescription="Best is een charmante gemeente tussen Eindhoven en 's-Hertogenbosch, bekend om zijn groene karakter en levendige gemeenschap. TBGS is er trots op om al jaren de inwoners van Best te bedienen met vakkundig en betrouwbaar bouwwerk. Of het nu gaat om de karakteristieke woningen in het centrum of de nieuwere ontwikkelingen - wij kennen Best door en door."
      
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
          name: "Jan Verhoeven",
          location: "Best Centrum",
          rating: 5,
          text: "Excellente daklekkage service! Snel gereageerd en vakkundig opgelost. Zeer tevreden.",
          service: "Daklekkage reparatie",
          date: "December 2024"
        },
        {
          name: "Marieke Jansen", 
          location: "Naastenbest", 
          rating: 5,
          text: "Prachtige badkamerrenovatie. Alles volgens afspraak en zeer netjes afgewerkt.",
          service: "Badkamerrenovatie",
          date: "November 2024"
        },
        {
          name: "Piet de Vries",
          location: "Best Zuid",
          rating: 5, 
          text: "Betrouwbare onderhoudspartner. Denken goed mee en leveren kwaliteit.",
          service: "Jaarlijks onderhoud",
          date: "Oktober 2024"
        }
      ]}
      
      faqs={[
        {
          question: "Bedienen jullie heel Best?",
          answer: "Ja, we bedienen de hele gemeente Best inclusief alle wijken en buitengebieden. Ook de omliggende plaatsen zoals Son en Breugel en Oirschot behoren tot ons werkgebied."
        },
        {
          question: "Hebben jullie ervaring met de lokale bouwstijlen in Best?",
          answer: "Zeker! Best heeft een mooie mix van authentieke en moderne woningen. We hebben jarenlange ervaring met beide stijlen en passen onze aanpak daarop aan."
        }
      ]}
      
      phone="+31 40 123 4567"
      coordinates={{ lat: 51.5067, lng: 5.3906 }}
      onOpenContactModal={onOpenContactModal}
    />
  );
}