import ServiceLocationTemplate from "@/components/templates/ServiceLocationTemplate";
import { 
  Shield, 
  Clock, 
  Award, 
  Wrench, 
  CheckCircle2, 
  Users,
  Star,
  Phone,
  Eye,
  Zap
} from "lucide-react";

interface VeldhovenDaklekkageProps {
  onOpenContactModal: () => void;
}

export default function VeldhovenDaklekkage({ onOpenContactModal }: VeldhovenDaklekkageProps) {
  return (
    <ServiceLocationTemplate
      service="daklekkage"
      city="Veldhoven"
      citySlug="veldhoven" 
      country="nl"
      region="Noord-Brabant"
      nearbyAreas={["Eindhoven", "Waalre", "Eersel", "Oirschot", "Best", "Steensel"]}
      
      serviceTitle="Daklekkage Reparatie"
      serviceDescription="Professionele daklekkage reparatie in Veldhoven. 24/7 spoeddienst, lokale specialisten, volledige garantie."
      pageTitle="Daklekkage Reparatie Veldhoven | TBGS - Lokale Specialist"
      metaDescription="Daklekkage in Veldhoven? ✓ Binnen 3u ter plaatse ✓ Lokale specialist ✓ 25+ jaar ervaring ✓ Volledige garantie. Bel direct!"
      
      heroDescription="Professionele daklekkage reparatie in Veldhoven en omgeving. Als lokale specialist staan wij binnen 3 uur bij u voor spoedgevallen. Volledig verzekerd en gecertificeerd."
      problemsTitle="Veelvoorkomende Daklekkage Problemen in Veldhoven"
      problems={[
        "Lekkage door storm en windschade in open landschap rond Veldhoven",
        "Verstopte dakgoten door bladval van bomen in woonwijken", 
        "Scheuren in dakpannen door temperatuurwisselingen",
        "Vochtproblemen door slechte ventilatie in nieuwbouwwijken",
        "Veroudering van dakbedekking in oudere delen van Veldhoven"
      ]}
      solutionsTitle="TBGS Daklekkage Oplossingen Veldhoven"
      solutions={[
        "Snelle lokalisatie met professionele detectieapparatuur",
        "Directe noodafdichting om verdere schade te voorkomen",
        "Duurzame reparatie met materialen geschikt voor lokaal klimaat",
        "Preventief advies specifiek voor Veldhoven omstandigheden",
        "Volledige garantie op alle uitgevoerde reparaties"
      ]}
      
      benefits={[
        {
          icon: <Clock className="w-6 h-6" />,
          title: "Lokale Snelheid",
          description: "Als Veldhoven specialist staan we binnen 3 uur bij u voor spoedgevallen. We kennen alle wijken van de gemeente."
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Volledige Garantie",
          description: "Alle daklekkage reparaties komen met uitgebreide garantie. Bij problemen komen we kosteloos terug."
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "25+ Jaar in Veldhoven",
          description: "Al meer dan 25 jaar de betrouwbare daklekkage specialist voor inwoners van Veldhoven en omgeving."
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Lokale Vakspecialisten",
          description: "Ons team kent Veldhoven goed en heeft ervaring met alle bouwstijlen in de gemeente."
        },
        {
          icon: <Eye className="w-6 h-6" />,
          title: "Grondige Inspectie",
          description: "Uitgebreide controle van uw dak om verborgen problemen op te sporen en te voorkomen."
        },
        {
          icon: <Zap className="w-6 h-6" />,
          title: "24/7 Bereikbaar",
          description: "Ook 's avonds, 's nachts en in het weekend bereikbaar voor acute daklekkages in Veldhoven."
        }
      ]}
      
      faqs={[
        {
          question: "Hoe snel kunnen jullie bij daklekkage in Veldhoven ter plaatse zijn?",
          answer: "We zijn normaal binnen 24 uur beschikbaar, tenzij er een noodgeval is of je hebt een abonnement."
        },
        {
          question: "Wat kost daklekkage reparatie in Veldhoven gemiddeld?",
          answer: "We geven altijd een gratis inspectie en transparante offerte vooraf. Met 80+ jaar familietraditie zorgen wij voor eerlijke prijzen en kwaliteit reparaties."
        },
        {
          question: "Kennen jullie de specifieke situatie in Veldhoven goed?",
          answer: "Zeker! We werken al 25+ jaar in Veldhoven en kennen de lokale omstandigheden goed. Van het centrum tot Meerveldhoven en Zeelst - we begrijpen de uitdagingen van verschillende wijken."
        },
        {
          question: "Bedienen jullie ook de nieuwbouwwijken in Veldhoven?",
          answer: "Ja, we hebben veel ervaring met de nieuwere ontwikkelingen in Veldhoven. We kennen de specifieke uitdagingen van moderne bouwmethoden en materialen."
        },
        {
          question: "Bieden jullie garantie op daklekkage reparaties in Veldhoven?",
          answer: "Ja, alle reparaties komen met volledige garantie. Op kleine reparaties 2 jaar, op grotere werkzaamheden tot 5 jaar. Bij problemen lossen we dit kosteloos op."
        }
      ]}
      
      phone="+31 40 123 4567"
      onOpenContactModal={onOpenContactModal}
    />
  );
}