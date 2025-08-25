import LocationHubTemplate from "@/components/templates/LocationHubTemplate";
import { Home, Wrench, Building2, Hammer } from "lucide-react";

interface LocationSonEnBreugelProps {
  onOpenContactModal: () => void;
}

export default function LocationSonEnBreugel({ onOpenContactModal }: LocationSonEnBreugelProps) {
  return (
    <LocationHubTemplate
      city="Son en Breugel"
      citySlug="son-en-breugel"
      country="nl"
      region="Noord-Brabant"
      nearbyCities={["Eindhoven", "Best", "Sint-Oedenrode", "Nuenen", "Mierlo", "Breugel"]}
      landmarks={[
        "Son Centrum",
        "Breugel Centrum",
        "Ekkersrijt Bedrijvenpark",
        "Sonse Heide", 
        "Son en Breugel Station",
        "Recreatiegebied De Dommel",
        "Son Forest",
        "Industriepark Ekkersrijt"
      ]}
      
      pageTitle="TBGS Son en Breugel - Dak, Schoorsteen, Onderhoud & Bouw Specialist"
      metaDescription="TBGS in Son en Breugel ✓ Daklekkage ✓ Renovatie ✓ Onderhoud ✓ Schoorsteenservice. Lokale specialist voor wonen en bedrijven!"
      
      heroDescription="Uw lokale bouwpartner in Son en Breugel voor daklekkage, renovaties, onderhoud en schoorsteen service. Specialist voor zowel woningen als bedrijfspanden."
      cityDescription="Son en Breugel is een dynamische gemeente die een perfecte balans biedt tussen wonen en werken. Met het grote bedrijvenpark Ekkersrijt en de groene woongebieden biedt Son en Breugel voor ieder wat wils. TBGS bedient al jaren zowel de inwoners als de bedrijven in deze gemeente met vakkundig en betrouwbaar bouw- en onderhoudswerk."
      
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
          name: "Peter Janssen",
          location: "Son Centrum",
          rating: 5,
          text: "Snelle en professionele daklekkage reparatie. Perfect opgelost en netjes afgewerkt.",
          service: "Daklekkage reparatie",
          date: "December 2024"
        },
        {
          name: "Linda Verhoeven", 
          location: "Breugel", 
          rating: 5,
          text: "Uitstekende renovatie van onze badkamer. Alles volgens planning en hoge kwaliteit.",
          service: "Badkamerrenovatie",
          date: "November 2024"
        },
        {
          name: "Hans de Vries",
          location: "Son Noord",
          rating: 5, 
          text: "Betrouwbare onderhoudspartner. Ze denken goed mee en werken vakkundig.",
          service: "Jaarlijks onderhoud",
          date: "Oktober 2024"
        }
      ]}
      
      faqs={[
        {
          question: "Werken jullie ook aan bedrijfspanden op Ekkersrijt?",
          answer: "Ja, we hebben ruime ervaring met onderhoud en renovatie van bedrijfspanden. Van kantoorgebouwen tot productieruimtes op Ekkersrijt - we leveren professionele service voor het bedrijfsleven."
        },
        {
          question: "Bedienen jullie zowel Son als Breugel?",
          answer: "Ja, we bedienen de hele gemeente Son en Breugel inclusief beide kernen en alle woonwijken. We kennen de lokale situatie goed en zijn snel ter plaatse."
        }
      ]}
      
      phone="+31 40 123 4567"
      coordinates={{ lat: 51.5139, lng: 5.4889 }}
      onOpenContactModal={onOpenContactModal}
    />
  );
}