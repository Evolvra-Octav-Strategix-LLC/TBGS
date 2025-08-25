import LocationHubTemplate from "@/components/templates/LocationHubTemplate";
import { 
  Home, 
  Wrench, 
  Building2, 
  Hammer
} from "lucide-react";

interface LocationMierloProps {
  onOpenContactModal: () => void;
}

export default function LocationMierlo({ onOpenContactModal }: LocationMierloProps) {
  return (
    <LocationHubTemplate
      // Core Data
      city="Mierlo"
      citySlug="mierlo"
      country="nl"
      region="Noord-Brabant"
      nearbyCities={["Geldrop", "Helmond", "Eindhoven", "Nuenen", "Lierop", "Aarle-Rixtel", "Someren", "Deurne"]}
      landmarks={[
        "Centrum Mierlo",
        "Mariakerk",
        "Golfbaan Welschap", 
        "Bokt de Barrier",
        "Kasteel Geldrop (nabij)",
        "Strabrechtse Heide",
        "De Mortel",
        "Recreatiepark Klein Vink"
      ]}
      
      // SEO Data
      pageTitle="TBGS Mierlo - Dak, Schoorsteen, Onderhoud & Bouw Specialist"
      metaDescription="TBGS in Mierlo ✓ Daklekkage ✓ Renovatie ✓ Onderhoud ✓ Schoorsteenservice. Lokale specialisten, 25+ jaar ervaring. Gratis offerte!"
      
      // Content
      heroDescription="Uw betrouwbare bouwpartner in Mierlo voor daklekkage, renovaties, onderhoud en schoorsteen service. Als lokale specialisten kennen wij Mierlo en omgeving als geen ander."
      cityDescription="Mierlo is een charmant dorp in Noord-Brabant, gelegen tussen Eindhoven en Helmond. TBGS is er trots op om al meer dan 25 jaar inwoners van Mierlo van dienst te zijn. Van het historische dorpscentrum tot de nieuwere woonwijken - wij begrijpen de unieke uitdagingen van woningen in dit mooie deel van Brabant."
      
      // Services available in this location
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
      
      // Reviews from customers in this city
      reviews={[
        {
          name: "Henk van der Meer",
          location: "Mierlo Centrum",
          rating: 5,
          text: "Uitstekende service bij een acute daklekkage. Ze waren er binnen een paar uur en hebben alles perfect gerepareerd. Zeer professioneel!",
          service: "Daklekkage reparatie",
          date: "December 2024"
        },
        {
          name: "Marieke Janssen", 
          location: "Mierlo Noord", 
          rating: 5,
          text: "TBGS heeft onze keuken en woonkamer prachtig gerenoveerd. Vakmanschap van hoge kwaliteit en zeer betrouwbaar.",
          service: "Keukenrenovatie",
          date: "November 2024"
        },
        {
          name: "Peter de Bruin",
          location: "Mierlo Zuid",
          rating: 5, 
          text: "Al jaren tevreden klant voor ons jaarlijkse onderhoudscontract. Ze denken goed mee en lossen alles netjes op.",
          service: "Jaarlijks onderhoud",
          date: "Oktober 2024"
        },
        {
          name: "Sandra Vermeulen",
          location: "Mierlo West",
          rating: 5,
          text: "Snelle en vakkundige schoorsteenreiniging. Alles keurig achtergelaten. Zeer tevreden over de service!",
          service: "Schoorsteenreiniging", 
          date: "September 2024"
        },
        {
          name: "Johan Bakker",
          location: "Mierlo Oost",
          rating: 5,
          text: "Dakpannen vervangen na stormschade. Snel gereageerd en zeer vakkundig uitgevoerd. Aanrader!",
          service: "Dakpannen vervangen",
          date: "Augustus 2024"
        },
        {
          name: "Els de Wit",
          location: "Mierlo Centrum", 
          rating: 5,
          text: "Betrouwbaar bedrijf waar je op kunt rekenen. Al meerdere klussen laten uitvoeren, altijd tevreden.",
          service: "Diverse werkzaamheden",
          date: "Juli 2024"
        }
      ]}
      
      // FAQ specific to this location
      faqs={[
        {
          question: "In welke delen van Mierlo zijn jullie actief?",
          answer: "Wij bedienen heel Mierlo, inclusief alle woonwijken in Noord, Zuid, Oost en West Mierlo. Ook de omliggende gebieden zoals Geldrop, parts van Helmond en Eindhoven vallen binnen ons werkgebied."
        },
        {
          question: "Kennen jullie de lokale situatie in Mierlo goed?",
          answer: "Absoluut! Als lokale specialisten werken we al meer dan 25 jaar in Mierlo. We kennen de specifieke uitdagingen van woningen in het dorp, van de oudere huizen in het centrum tot de nieuwere wijken."
        },
        {
          question: "Kunnen jullie ook werken aan monumentale of karakteristieke panden in Mierlo?",
          answer: "Zeker! We hebben ruime ervaring met onderhoud aan karakteristieke en oudere panden. We respecteren de authentieke uitstraling en werken met geschikte materialen en technieken."
        },
        {
          question: "Hoe snel kunnen jullie in Mierlo ter plaatse zijn voor spoedgevallen?",
          answer: "Voor spoedgevallen in Mierlo kunnen we meestal binnen 2-4 uur ter plaatse zijn. Bij acute situaties zoals daklekkages tijdens storm hebben we 24/7 service beschikbaar."
        },
        {
          question: "Bieden jullie ook onderhoudscontracten aan voor woningen in Mierlo?",
          answer: "Ja, we bieden meerjarige onderhoudscontracten aan voor woningen in Mierlo. Dit bevat jaarlijkse controles, klein onderhoud en voorrang bij spoedreparaties tegen een vast maandbedrag."
        }
      ]}
      
      // Contact & coordinates
      phone="+31 40 202 6744"
      coordinates={{ lat: 51.4411, lng: 5.6222 }}
      onOpenContactModal={onOpenContactModal}
    />
  );
}