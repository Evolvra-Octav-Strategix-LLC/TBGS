import LocationHubTemplate from "@/components/templates/LocationHubTemplate";
import { Home, Wrench, Building2, Hammer } from "lucide-react";

interface LocationEindhovenProps {
  onOpenContactModal: () => void;
}

export default function LocationEindhoven({ onOpenContactModal }: LocationEindhovenProps) {
  return (
    <LocationHubTemplate
      city="Eindhoven"
      citySlug="eindhoven"
      country="nl"
      region="Noord-Brabant"
      nearbyCities={["Veldhoven", "Nuenen", "Best", "Geldrop", "Waalre", "Son en Breugel", "Helmond", "Tilburg"]}
      landmarks={[
        "Centrum - Stratumseind",
        "Strijp-S District", 
        "High Tech Campus",
        "Philips Stadion (PSV)",
        "Van Abbemuseum",
        "TU/e Campus",
        "ASML Hoofdkantoor",
        "Catharina Ziekenhuis"
      ]}
      
      pageTitle="TBGS Eindhoven - Dak, Schoorsteen, Onderhoud & Bouw Specialist"
      metaDescription="TBGS in Eindhoven ✓ Daklekkage ✓ Renovatie ✓ Onderhoud ✓ Schoorsteenservice. 25+ jaar ervaring, snelle service. Gratis offerte!"
      
      heroDescription="Uw betrouwbare bouwpartner in Eindhoven voor daklekkage, renovaties, onderhoud en schoorsteen service. Al meer dan 25 jaar actief in de Lichtstad."
      cityDescription="Eindhoven staat bekend als de Lichtstad en is het kloppende hart van de technologie-industrie in Nederland. TBGS is er trots op om al meer dan 25 jaar eigenaren in deze innovatieve stad van dienst te zijn. Van het bruisende Strijp-S tot de High Tech Campus - wij kennen Eindhoven als geen ander en begrijpen de unieke uitdagingen van woningen in deze stad."
      
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
          color: "green",
          popular: true
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
          name: "Maria van der Berg",
          location: "Eindhoven Centrum",
          rating: 5,
          text: "Fantastische service! Ze waren er binnen een dag voor mijn daklekkage en hebben alles perfect gerepareerd. Zeer professioneel team.",
          service: "Daklekkage reparatie",
          date: "December 2024"
        },
        {
          name: "Johan Hendriks", 
          location: "Strijp-S", 
          rating: 5,
          text: "TBGS heeft onze badkamer volledig gerenoveerd. Uitstekende kwaliteit en netjes afgewerkt. Zeker een aanrader!",
          service: "Badkamerrenovatie",
          date: "November 2024"
        },
        {
          name: "Sarah de Wit",
          location: "Woensel-Noord",
          rating: 5, 
          text: "Zeer tevreden over het jaarlijkse onderhoudscontract. Ze denken mee en voorkomen problemen voordat ze ontstaan.",
          service: "Jaarlijks onderhoud",
          date: "Oktober 2024"
        },
        {
          name: "Peter Jansen",
          location: "Gestel",
          rating: 5,
          text: "Snelle en vakkundige schoorsteenreiniging. Alles keurig opgeruimd achtergelaten. Top service!",
          service: "Schoorsteenreiniging", 
          date: "September 2024"
        },
        {
          name: "Lisa Vermeulen",
          location: "Tongelre",
          rating: 5,
          text: "Zeer betrouwbaar bedrijf. Ze stonden er toen onze dakpannen door storm beschadigd waren. Snel en betaalbaar opgelost.",
          service: "Dakpannen vervangen",
          date: "Augustus 2024"
        },
        {
          name: "Robert de Jong",
          location: "Stratum", 
          rating: 5,
          text: "Al jaren klant bij TBGS. Uitstekende service, eerlijke prijzen en altijd op tijd. Echt een betrouwbare partner.",
          service: "Diverse werkzaamheden",
          date: "Juli 2024"
        }
      ]}
      
      faqs={[
        {
          question: "In welke wijken van Eindhoven zijn jullie actief?",
          answer: "Wij bedienen alle wijken van Eindhoven, inclusief Centrum, Strijp-S, Woensel, Gestel, Stratum, Tongelre, Blixembosch en Meerhoven. Ook de omliggende dorpen zoals Veldhoven, Nuenen en Best vallen binnen ons werkgebied."
        },
        {
          question: "Hebben jullie ervaring met de specifieke bouwstijlen in Eindhoven?",
          answer: "Ja, absoluut! Van de karakteristieke Philips arbeiderswoningen tot moderne nieuwbouw in Strijp-S. We kennen de specifieke uitdagingen van verschillende bouwperiodes in Eindhoven en passen onze aanpak hierop aan."
        },
        {
          question: "Kunnen jullie ook werken aan monumentale panden in Eindhoven?",
          answer: "Zeker! We hebben ruime ervaring met monumentaal onderhoud en werken regelmatig aan karakteristieke panden in het centrum van Eindhoven. We houden ons strikt aan de monumentenwetgeving en werken waar nodig samen met specialisten."
        },
        {
          question: "Hoe snel kunnen jullie in Eindhoven ter plaatse zijn voor spoedgevallen?",
          answer: "Voor spoedgevallen in Eindhoven streven we ernaar binnen 4-6 uur ter plaatse te zijn, afhankelijk van de drukte en het tijdstip. Voor acute situaties zoals daklekkages tijdens storm hebben we een 24/7 spoeddienst beschikbaar."
        },
        {
          question: "Werken jullie ook samen met andere bedrijven in de regio Eindhoven?",
          answer: "Ja, we hebben een netwerk van betrouwbare partners in Eindhoven en omgeving. Voor grote projecten werken we samen met lokale elektriciens, loodgieters en andere vakspecialisten om u complete service te bieden."
        }
      ]}
      
      phone="+31 40 123 4567"
      coordinates={{ lat: 51.4416, lng: 5.4697 }}
      onOpenContactModal={onOpenContactModal}
    />
  );
}