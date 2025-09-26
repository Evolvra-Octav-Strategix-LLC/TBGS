import LocationHubTemplate from "@/components/templates/LocationHubTemplate";
import { Home, Wrench, Building2, Hammer } from "lucide-react";

interface LocationValkenswaardProps {
  onOpenContactModal: () => void;
}

export default function LocationValkenswaard({ onOpenContactModal }: LocationValkenswaardProps) {
  return (
    <LocationHubTemplate
      city="Valkenswaard"
      citySlug="valkenswaard"
      country="nl"
      region="Noord-Brabant"
      nearbyCities={["Waalre", "Veldhoven", "Eindhoven", "Best", "Eersel", "Bergeijk", "Bladel"]}
      landmarks={[
        "De Mollen Winkelcentrum",
        "Valkenhorst Bos", 
        "Dommelpark",
        "Centrum Valkenswaard",
        "Sportpark De Koevoet",
        "Kerkplein",
        "Bospark Eckart",
        "Valkenswaard Station"
      ]}
      
      pageTitle="TBGS Valkenswaard - Dak, Schoorsteen, Onderhoud & Bouw Specialist"
      metaDescription="TBGS in Valkenswaard ✓ Daklekkage ✓ Renovatie ✓ Onderhoud ✓ Schoorsteenservice. 25+ jaar ervaring, snelle service. Gratis offerte!"
      
      heroDescription="Uw betrouwbare bouwpartner in Valkenswaard voor daklekkage, renovaties, onderhoud en schoorsteen service. Al meer dan 25 jaar actief in deze groene gemeente."
      cityDescription="Valkenswaard staat bekend om zijn groene karakter en familievriendelijke omgeving, gelegen tussen de bossen en dicht bij Eindhoven. TBGS is er trots op om al meer dan 25 jaar bewoners in deze charmante gemeente van dienst te zijn. Van het centrum rond De Mollen tot de rustige woonwijken - wij kennen Valkenswaard als geen ander en begrijpen de unieke uitdagingen van woningen in deze bosrijke omgeving."
      
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
          name: "Marco B.",
          location: "Valkenswaard Centrum",
          rating: 5,
          text: "Hele fijne service gehad van TBGS. Daklekkage was binnen 24 uur verholpen. Netjes gewerkt en faire prijs. Zeker aan te raden!",
          service: "Daklekkage reparatie",
          date: "December 2024"
        },
        {
          name: "Linda van den Berg", 
          location: "Valkenhorst", 
          rating: 5,
          text: "Complete badkamerrenovatie laten doen. Professioneel werk, goed overleg vooraf en keurig opgeleverd. Top bedrijf!",
          service: "Badkamerrenovatie",
          date: "November 2024"
        },
        {
          name: "J. Hermans",
          location: "Dommelen",
          rating: 4, 
          text: "Goede service voor ons onderhoudscontract. Komen netjes op tijd en denken goed mee. Enige minpunt was de wachttijd voor afspraak.",
          service: "Jaarlijks onderhoud",
          date: "Oktober 2024"
        },
        {
          name: "Frank S.",
          location: "Borkel en Schaft",
          rating: 5,
          text: "Schoorsteen grondig gereinigd en gecontroleerd. Duidelijke uitleg en alles netjes achtergelaten. Goede prijs-kwaliteit verhouding.",
          service: "Schoorsteenreiniging", 
          date: "September 2024"
        },
        {
          name: "Petra Janssen",
          location: "Valkenswaard",
          rating: 5,
          text: "Na de storm snel geholpen met kapotte dakpannen. Snelle reactie en vakkundige reparatie. Zeer tevreden klant!",
          service: "Storm schade herstel",
          date: "Augustus 2024"
        },
        {
          name: "Rob v.d. Heuvel",
          location: "Valkenswaard", 
          rating: 5,
          text: "Al meerdere klussen laten doen door TBGS. Altijd op tijd, eerlijke prijzen en kwaliteit werk. Echte aanrader voor de regio.",
          service: "Diverse werkzaamheden",
          date: "Juli 2024"
        }
      ]}
      
      faqs={[
        {
          question: "In welke wijken van Valkenswaard zijn jullie actief?",
          answer: "Wij bedienen heel Valkenswaard, inclusief Centrum, Valkenhorst, Dommelen, Borkel en Schaft en alle woonwijken. Ook de omliggende gemeenten zoals Waalre, Veldhoven en Eersel vallen binnen ons werkgebied."
        },
        {
          question: "Hebben jullie ervaring met woningen in bosrijke gebieden?",
          answer: "Ja, zeker! Valkenswaard ligt in een groene omgeving met veel bomen. We hebben ruime ervaring met specifieke uitdagingen zoals bladgoten, takken op daken en vochtproblemen die kunnen ontstaan door de bosrijke omgeving."
        },
        {
          question: "Kunnen jullie ook werken aan oudere woningen in Valkenswaard?",
          answer: "Absoluut! We hebben veel ervaring met verschillende bouwstijlen in Valkenswaard, van karakteristieke oudere woningen tot moderne nieuwbouw. We passen onze werkwijze aan op basis van de specifieke kenmerken van uw woning."
        },
        {
          question: "Hoe snel kunnen jullie in Valkenswaard ter plaatse zijn voor spoedgevallen?",
          answer: "We zijn normaal binnen 24 uur beschikbaar, tenzij er een noodgeval is of je hebt een abonnement. Voor reguliere werkzaamheden plannen we binnen 24-48 uur een afspraak in."
        },
        {
          question: "Werken jullie ook in de kleinere kernen rond Valkenswaard?",
          answer: "Ja, we dekken het hele werkgebied rond Valkenswaard af, inclusief Dommelen, Borkel en Schaft en andere omliggende dorpen. Onze service is hetzelfde, ongeacht de locatie."
        }
      ]}
      
      phone="040-202 67 44"
      coordinates={{ lat: 51.3500, lng: 5.4600 }}
      onOpenContactModal={onOpenContactModal}
    />
  );
}