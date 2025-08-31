import ServiceLocationTemplate from "@/components/templates/ServiceLocationTemplate";
import { 
  Shield, 
  Home, 
  Award, 
  Calendar, 
  CheckCircle2, 
  Users,
  Star,
  Phone,
  Eye,
  Zap
} from "lucide-react";

interface WaalreRenovatieProps {
  onOpenContactModal: () => void;
}

export default function WaalreRenovatie({ onOpenContactModal }: WaalreRenovatieProps) {
  return (
    <ServiceLocationTemplate
      service="renovatie"
      city="Waalre"
      citySlug="waalre" 
      country="nl"
      region="Noord-Brabant"
      nearbyAreas={["Eindhoven", "Veldhoven", "Nuenen", "Best", "Geldrop", "Son en Breugel"]}
      
      serviceTitle="Renovatie & Verbouw"
      serviceDescription="Complete woningrenovaties in Waalre door ervaren vakspecialisten. Van badkamer tot zolder met kwaliteit en vakmanschap."
      pageTitle="Renovatie Waalre | TBGS - Complete Woningrenovatie"
      metaDescription="Renovatie in Waalre? ✓ Complete woningrenovatie ✓ Badkamer & keuken ✓ 25+ jaar ervaring ✓ Van ontwerp tot oplevering. Gratis offerte!"
      
      heroDescription="Complete woningrenovaties in Waalre door ervaren vakspecialisten. Van kleinschalige verbouwingen tot complete renovaties. Wij realiseren uw droomhuis met kwaliteit en vakmanschap."
      problemsTitle="Renovatie Uitdagingen in Waalre Woningen"
      problems={[
        "Verouderde badkamers en keukens in exclusieve Waalre-woningen",
        "Beperkte ruimte optimaal benutten in karakteristieke villa's", 
        "Moderne voorzieningen integreren zonder karakter te verliezen",
        "Energieprestatie verbeteren met behoud van authentieke uitstraling",
        "Coördinatie tussen verschillende vakspecialisten en vergunningen"
      ]}
      solutionsTitle="TBGS Renovatie Aanpak Waalre"
      solutions={[
        "Complete projectleiding van ontwerp tot oplevering",
        "Slimme ruimteoplossingen voor optimaal wooncomfort",
        "Moderne technieken gecombineerd met respect voor karakter",
        "Energiezuinige oplossingen voor duurzaam wonen",
        "Transparante communicatie gedurende het hele project"
      ]}
      
      benefits={[
        {
          icon: <Home className="w-6 h-6" />,
          title: "Complete Renovaties",
          description: "Van ontwerp tot oplevering alles uit één hand. Badkamers, keukens, zolderverbouwingen en complete woningrenovaties."
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Projectgarantie",
          description: "Volledige garantie op alle renovatiewerkzaamheden. Bij problemen lossen we dit kosteloos op."
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "25+ Jaar in Waalre",
          description: "Al meer dan 25 jaar specialist in woningrenovaties in Waalre. We kennen de gemeente en haar exclusieve bouwstijlen goed."
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Ervaren Vakspecialisten",
          description: "Alle monteurs zijn volledig gecertificeerd en verzekerd. Van loodgieterswerk tot tegelwerk - alles in eigen beheer."
        },
        {
          icon: <Calendar className="w-6 h-6" />,
          title: "Planning & Begeleiding",
          description: "Duidelijke planning en persoonlijke begeleiding gedurende het hele project. U weet altijd waar u aan toe bent."
        },
        {
          icon: <CheckCircle2 className="w-6 h-6" />,
          title: "Gratis Offerte",
          description: "Uitgebreid advies en offerte zijn altijd kosteloos en zonder verplichtingen."
        }
      ]}
      
      faqs={[
        {
          question: "Hoelang duurt een complete woningrenovatie in Waalre gemiddeld?",
          answer: "Dit varieert sterk per project. Een badkamerrenovatie duurt 1-2 weken, een complete woning 6-12 weken. We maken altijd een realistische planning en houden u op de hoogte van de voortgang."
        },
        {
          question: "Wat kost een renovatie in Waalre gemiddeld?",
          answer: "De kosten zijn afhankelijk van de omvang en gewenste kwaliteit. Een badkamerrenovatie start rond €8.000, een complete woningrenovatie vanaf €40.000. We geven altijd eerst een gratis offerte."
        },
        {
          question: "Regelen jullie ook de vergunningen voor renovaties in Waalre?",
          answer: "Ja, wij begeleiden u bij het aanvragen van benodigde vergunningen bij gemeente Waalre. We kennen de lokale procedures en eisen goed."
        },
        {
          question: "Hebben jullie ervaring met exclusieve Waalre-woningen?",
          answer: "Ja, we hebben veel ervaring met hoogwaardige woningen in Waalre. We begrijpen de kwaliteitseisen en werken met respect voor de waarde van uw woning."
        },
        {
          question: "Kunnen jullie werken binnen de karakteristieke bouwstijl?",
          answer: "Absoluut! We respecteren altijd de architectonische stijl en combineren dit met moderne technieken en comfort. Waalre heeft prachtige villa's die we graag in ere houden."
        }
      ]}
      
      phone="040 202 6744"
      onOpenContactModal={onOpenContactModal}
    />
  );
}