import LocationHubTemplate from "@/components/templates/LocationHubTemplate";
import { Home, Wrench, Building2, Hammer } from "lucide-react";

interface LocationVeldhovenProps {
  onOpenContactModal: () => void;
}

export default function LocationVeldhoven({ onOpenContactModal }: LocationVeldhovenProps) {
  return (
    <LocationHubTemplate
      city="Veldhoven"
      citySlug="veldhoven"
      country="nl"
      region="Noord-Brabant"
      nearbyCities={["Eindhoven", "Waalre", "Eersel", "Oirschot", "Best", "Steensel"]}
      landmarks={[
        "Maxima Medisch Centrum",
        "De Run shopping center",
        "Golfbaan De Gelpenberg", 
        "Veldhoven Centrum",
        "Heempark De Plaetse",
        "Wielewaal",
        "Meerveldhoven",
        "Zeelst"
      ]}
      
      pageTitle="TBGS Veldhoven - Dak, Schoorsteen, Onderhoud & Bouw Specialist"
      metaDescription="TBGS in Veldhoven ✓ Daklekkage ✓ Renovatie ✓ Onderhoud ✓ Schoorsteenservice. Lokale specialisten, 25+ jaar ervaring!"
      
      heroDescription="Uw betrouwbare bouwpartner in Veldhoven voor daklekkage, renovaties, onderhoud en schoorsteen service. Lokale specialisten die Veldhoven door en door kennen."
      cityDescription="Veldhoven is een groeiende gemeente in Noord-Brabant, vlakbij Eindhoven gelegen. Met haar mix van moderne wijken en landelijke gedeelten biedt Veldhoven een unieke woonomgeving. TBGS kent de lokale situatie goed en heeft jarenlange ervaring met de diverse bouwstijlen in Veldhoven, van de traditionele boerderijen tot de moderne nieuwbouwwijken."
      
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
          name: "Mark Hendriksen",
          location: "Veldhoven Centrum",
          rating: 5,
          text: "Super service bij een acute daklekkage! Binnen een paar uur ter plaatse en het probleem was snel opgelost.",
          service: "Daklekkage reparatie",
          date: "December 2024"
        },
        {
          name: "Linda van den Berg", 
          location: "Meerveldhoven", 
          rating: 5,
          text: "Geweldige renovatie van onze woonkamer. Mooi vakwerk en hele nette afwerking. Aanrader!",
          service: "Woonkamerrenovatie",
          date: "November 2024"
        },
        {
          name: "Rob Janssen",
          location: "Zeelst",
          rating: 5, 
          text: "Al jaren blij met hun onderhoudsservice. Betrouwbaar en altijd goed werk.",
          service: "Jaarlijks onderhoud",
          date: "Oktober 2024"
        },
        {
          name: "Sandra de Wit",
          location: "Wielewaal",
          rating: 5,
          text: "Professionele schoorsteenreiniging. Zeer netjes en vakkundig uitgevoerd.",
          service: "Schoorsteenreiniging", 
          date: "September 2024"
        }
      ]}
      
      faqs={[
        {
          question: "Welke delen van Veldhoven bedienen jullie?",
          answer: "We bedienen alle wijken van Veldhoven, inclusief het centrum, Meerveldhoven, Zeelst, Wielewaal en alle omliggende gebieden. Ook de buurgemeenten zoals Waalre en Eersel behoren tot ons werkgebied."
        },
        {
          question: "Hoe snel kunnen jullie in Veldhoven ter plaatse zijn?",
          answer: "We zijn normaal binnen 24 uur beschikbaar, tenzij er een noodgeval is of je hebt een abonnement."
        },
        {
          question: "Hebben jullie ervaring met nieuwbouwwijken in Veldhoven?",
          answer: "Zeker! We werken regelmatig in de nieuwere wijken van Veldhoven en kennen de specifieke uitdagingen van moderne bouwmethoden en materialen."
        }
      ]}
      
      phone="+31 40 123 4567"
      coordinates={{ lat: 51.4207, lng: 5.4033 }}
      onOpenContactModal={onOpenContactModal}
    />
  );
}