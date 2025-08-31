import ServiceLocationTemplate from "@/components/templates/ServiceLocationTemplate";
import { Shield, Clock, Award, Wrench, CheckCircle2, Users, Eye, Zap } from "lucide-react";

interface MierloDaklekkageProps {
  onOpenContactModal: () => void;
}

export default function MierloDaklekkage({ onOpenContactModal }: MierloDaklekkageProps) {
  return (
    <ServiceLocationTemplate
      service="daklekkage"
      city="Mierlo"
      citySlug="mierlo" 
      country="nl"
      region="Noord-Brabant"
      nearbyAreas={["Geldrop", "Helmond", "Eindhoven", "Nuenen", "Lierop", "Aarle-Rixtel"]}
      
      serviceTitle="Daklekkage Reparatie"
      serviceDescription="Professionele daklekkage reparatie in Mierlo. 24/7 spoeddienst, gecertificeerde vakspecialisten, volledige garantie."
      pageTitle="Daklekkage Reparatie Mierlo | TBGS - 24/7 Spoeddienst"
      metaDescription="Daklekkage in Mierlo? ✓ Binnen 4u ter plaatse ✓ 25+ jaar ervaring ✓ Volledige garantie ✓ Lokale specialisten. Bel direct!"
      
      heroDescription="Professionele daklekkage reparatie in Mierlo en omgeving. Als lokale specialisten staan wij binnen 4 uur bij u voor spoedgevallen. Volledig verzekerd en gecertificeerd."
      problemsTitle="Veelvoorkomende Daklekkage Problemen in Mierlo"
      problems={[
        "Lekkage door verouderde dakpannen in oudere delen van Mierlo",
        "Verstopte dakgoten door bladval van de vele bomen in het dorp", 
        "Scheuren in voegen rond dakramen en schoorstenen",
        "Schade door storm en hagel in het open landschap",
        "Vochtproblemen door slechte dakisolatie in oudere woningen"
      ]}
      solutionsTitle="TBGS Daklekkage Oplossingen Mierlo"
      solutions={[
        "Snelle lokalisatie met moderne lekdetectie apparatuur",
        "Directe noodafdichting om verdere schade te voorkomen",
        "Duurzame reparatie met hoogwaardige materialen",
        "Preventief advies voor toekomstige problemen",
        "Volledige garantie op alle uitgevoerde reparaties"
      ]}
      
      benefits={[
        {
          icon: <Clock className="w-6 h-6" />,
          title: "Lokale Snelheid",
          description: "Als Mierlo specialist staan we binnen 4 uur bij u voor spoedgevallen. We kennen elke straat in het dorp."
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Volledige Garantie",
          description: "Alle daklekkage reparaties komen met uitgebreide garantie. Bij problemen komen we kosteloos terug."
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "25+ Jaar in Mierlo",
          description: "Al meer dan 25 jaar de betrouwbare daklekkage specialist voor inwoners van Mierlo en omgeving."
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Lokale Vakspecialisten",
          description: "Ons team kent Mierlo goed en heeft ervaring met alle bouwstijlen in het dorp."
        },
        {
          icon: <Eye className="w-6 h-6" />,
          title: "Grondige Inspectie",
          description: "Uitgebreide controle van uw dak om verborgen problemen op te sporen en te voorkomen."
        },
        {
          icon: <Zap className="w-6 h-6" />,
          title: "24/7 Bereikbaar",
          description: "Ook 's avonds, 's nachts en in het weekend bereikbaar voor acute daklekkages."
        }
      ]}
      
      faqs={[
        {
          question: "Hoe snel kunnen jullie bij daklekkage in Mierlo ter plaatse zijn?",
          answer: "We zijn normaal binnen 24 uur beschikbaar, tenzij er een noodgeval is of je hebt een abonnement."
        },
        {
          question: "Wat kost daklekkage reparatie in Mierlo gemiddeld?",
          answer: "We geven altijd een gratis inspectie en transparante offerte vooraf. Met 80+ jaar familietraditie zorgen wij voor eerlijke prijzen en kwaliteit reparaties."
        },
        {
          question: "Kennen jullie de specifieke situatie in Mierlo goed?",
          answer: "Zeker! We werken al 25+ jaar in Mierlo en kennen de lokale omstandigheden goed. Van de oudere woningen in het centrum tot nieuwbouw in de uitbreidingswijken."
        },
        {
          question: "Bieden jullie garantie op daklekkage reparaties in Mierlo?",
          answer: "Ja, alle reparaties komen met volledige garantie. Op kleine reparaties 2 jaar, op grotere werkzaamheden tot 5 jaar. Bij problemen lossen we dit kosteloos op."
        }
      ]}
      
      phone="+31 40 202 6744"
      onOpenContactModal={onOpenContactModal}
    />
  );
}