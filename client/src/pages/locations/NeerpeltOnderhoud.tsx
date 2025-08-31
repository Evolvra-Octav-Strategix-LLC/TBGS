import ServiceLocationTemplate from "@/components/templates/ServiceLocationTemplate";
import { 
  Shield, 
  Calendar, 
  Award, 
  Wrench, 
  CheckCircle2, 
  Users,
  Star,
  Phone,
  Eye,
  Zap
} from "lucide-react";

interface NeerpeltOnderhoudProps {
  onOpenContactModal: () => void;
}

export default function NeerpeltOnderhoud({ onOpenContactModal }: NeerpeltOnderhoudProps) {
  return (
    <ServiceLocationTemplate
      service="onderhoud"
      city="Neerpelt"
      citySlug="neerpelt" 
      country="be"
      region="Limburg"
      nearbyAreas={["Overpelt", "Pelt", "Sint-Huibrechts-Lille", "Lommel", "Hamont-Achel"]}
      
      serviceTitle="Onderhoud & Service"
      serviceDescription="Professioneel onderhoud van woningen en bedrijfspanden in Neerpelt. Preventief onderhoud, reparaties en technische diensten."
      pageTitle="Onderhoud Neerpelt | TBGS - Betrouwbaar Woningonderhoud"
      metaDescription="Onderhoud in Neerpelt? ✓ Preventief onderhoud ✓ Snelle service ✓ Vaste contactpersoon ✓ 25+ jaar ervaring!"
      
      heroDescription="Professioneel onderhoud van woningen en bedrijfspanden in Neerpelt door lokale specialisten. Preventief onderhoud, snelle reparaties en technische diensten voor een zorgeloze woning."
      problemsTitle="Veelvoorkomende Onderhoudsproblemen in Neerpelt"
      problems={[
        "Achterstallig onderhoud aan karakteristieke Limburgse woningen",
        "Schilderwerk dat onderhoud nodig heeft door lokale omstandigheden", 
        "Kleine reparaties die uitgroeien tot grote problemen",
        "Gebrek aan tijd voor regelmatig onderhoud van drukke gezinnen",
        "Verschillende aannemers voor verschillende klussen coördineren"
      ]}
      solutionsTitle="TBGS Onderhoud Aanpak Neerpelt"
      solutions={[
        "Jaarlijkse onderhoudscontracten met vaste planning",
        "Preventieve controles aangepast aan lokale omstandigheden",
        "Snelle service bij acute onderhoudsproblemen",
        "Één aanspreekpunt voor al uw onderhoudswensen",
        "Transparante prijzen en duidelijke planning"
      ]}
      
      benefits={[
        {
          icon: <Calendar className="w-6 h-6" />,
          title: "Onderhoudscontract",
          description: "Jaarlijkse onderhoudscontracten specifiek voor Neerpelt-woningen. Zo blijft uw woning altijd in topconditie."
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Preventief Onderhoud",
          description: "Problemen voorkomen is beter dan repareren. Wij controleren en onderhouden voordat er schade ontstaat."
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "25+ Jaar in Neerpelt",
          description: "Al meer dan 25 jaar de betrouwbare onderhoudspartner voor inwoners van Neerpelt en omgeving."
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Vaste Contactpersoon",
          description: "Persoonlijke service met een vaste contactpersoon die uw woning en voorkeuren kent."
        },
        {
          icon: <Wrench className="w-6 h-6" />,
          title: "Alle Vakgebieden",
          description: "Van loodgieterswerk tot schilderwerk - wij lossen alle onderhoudsproblemen voor u op."
        },
        {
          icon: <CheckCircle2 className="w-6 h-6" />,
          title: "Gratis Advies",
          description: "Kosteloos advies over onderhoud en kleine reparaties. We denken graag met u mee."
        }
      ]}
      
      faqs={[
        {
          question: "Wat voor onderhoud voeren jullie uit in Neerpelt?",
          answer: "We voeren alle soorten onderhoud uit: schilderwerk, kleine reparaties, preventieve controles, dakgootreiniging, timmerwerk en technische installaties. Van klein tot groot."
        },
        {
          question: "Hebben jullie vaste onderhoudscontracten voor Neerpelt?",
          answer: "Ja, we bieden jaarcontracten waarbij we op vaste momenten uw woning controleren en onderhouden. Dit voorkomt grote reparaties en houdt de waarde van uw woning op peil."
        },
        {
          question: "Hoe snel kunnen jullie bij spoedklussen in Neerpelt?",
          answer: "Voor spoedgevallen proberen we binnen 24 uur beschikbaar te zijn. Voor regulier onderhoud kunnen we meestal binnen een week langskomen."
        },
        {
          question: "Werken jullie ook grensoverschrijdend vanuit Nederland?",
          answer: "Ja, we werken grensoverschrijdend in Belgisch Limburg. We kennen de lokale omstandigheden en eisen goed."
        },
        {
          question: "Geven jullie garantie op onderhoudswerkzaamheden?",
          answer: "Ja, alle uitgevoerde werkzaamheden komen met garantie. De garantietermijn verschilt per type werkzaamheden."
        }
      ]}
      
      phone="+32 11 88 00 88"
      onOpenContactModal={onOpenContactModal}
    />
  );
}