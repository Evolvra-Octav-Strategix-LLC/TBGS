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
          name: "Annemarie Koolen",
          location: "Valkenswaard Centrum",
          rating: 5,
          text: "Uitstekende service! Ze hebben onze daklekkage snel en professioneel opgelost. Zeer tevreden met het resultaat en de nette afwerking.",
          service: "Daklekkage reparatie",
          date: "December 2024"
        },
        {
          name: "Piet van Schaijk", 
          location: "Valkenhorst", 
          rating: 5,
          text: "TBGS heeft onze keuken volledig gerenoveerd. Mooi werk geleverd en alles netjes achtergelaten. Echt een aanrader!",
          service: "Keukenrenovatie",
          date: "November 2024"
        },
        {
          name: "Marloes Driessen",
          location: "Dommelen",
          rating: 5, 
          text: "Al jaren klant voor ons onderhoudscontract. Ze zijn betrouwbaar, denken mee en voorkomen problemen voordat ze ontstaan.",
          service: "Jaarlijks onderhoud",
          date: "Oktober 2024"
        },
        {
          name: "Marc Verhagen",
          location: "Borkel en Schaft",
          rating: 5,
          text: "Professionele schoorsteenreiniging en controle. Alles keurig uitgevoerd en goed uitgelegd. Zeer tevreden!",
          service: "Schoorsteenreiniging", 
          date: "September 2024"
        },
        {
          name: "Sandra Wolfs",
          location: "Valkenswaard-Oost",
          rating: 5,
          text: "Na storm waren er dakpannen beschadigd. TBGS was er snel bij en heeft alles vakkundig gerepareerd. Top service!",
          service: "Dakpannen vervangen",
          date: "Augustus 2024"
        },
        {
          name: "Jan de Bruijn",
          location: "Valkenswaard-West", 
          rating: 5,
          text: "Betrouwbaar bedrijf waar je op kunt rekenen. Eerlijke prijzen en altijd op afspraak. Al jaren een tevreden klant.",
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
      
      phone="+31 40 244 58 20"
      coordinates={{ lat: 51.3500, lng: 5.4600 }}
      onOpenContactModal={onOpenContactModal}
    />
  );
}