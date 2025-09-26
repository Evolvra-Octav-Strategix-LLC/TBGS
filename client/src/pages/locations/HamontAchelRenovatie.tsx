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

interface HamontAchelRenovatieProps {
  onOpenContactModal: () => void;
}

export default function HamontAchelRenovatie({ onOpenContactModal }: HamontAchelRenovatieProps) {
  return (
    <ServiceLocationTemplate
      service="renovatie"
      city="Hamont-Achel"
      citySlug="hamont-achel" 
      country="be"
      region="Limburg"
      nearbyAreas={["Lommel", "Kaulille", "Pelt", "Overpelt", "Neerpelt"]}
      
      serviceTitle="Renovatie & Verbouw"
      serviceDescription="Complete woningrenovaties in Hamont-Achel door ervaren vakspecialisten. Van badkamer tot zolder met kwaliteit en vakmanschap."
      pageTitle="Renovatie Hamont-Achel | TBGS - Complete Woningrenovatie"
      metaDescription="Renovatie in Hamont-Achel? ✓ Complete woningrenovatie ✓ Badkamer & keuken ✓ 25+ jaar ervaring ✓ Van ontwerp tot oplevering. Gratis offerte!"
      
      heroDescription="Complete woningrenovaties in Hamont-Achel door ervaren vakspecialisten. Van kleinschalige verbouwingen tot complete renovaties. Wij realiseren uw droomhuis met kwaliteit en vakmanschap."
      problemsTitle="Renovatie Uitdagingen in Hamont-Achel Woningen"
      problems={[
        "Verouderde badkamers en keukens in traditionele Limburgse woningen",
        "Beperkte ruimte optimaal benutten in karakteristieke panden", 
        "Moderne voorzieningen integreren zonder karakter te verliezen",
        "Energieprestatie verbeteren met behoud van authentieke uitstraling",
        "Coördinatie tussen verschillende vakspecialisten en vergunningen"
      ]}
      solutionsTitle="TBGS Renovatie Aanpak Hamont-Achel"
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
          title: "25+ Jaar in Hamont-Achel",
          description: "Al meer dan 25 jaar specialist in woningrenovaties in Hamont-Achel en Belgisch Limburg."
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
          question: "Hoelang duurt een complete woningrenovatie in Hamont-Achel gemiddeld?",
          answer: "Dit varieert sterk per project. Een badkamerrenovatie duurt 1-2 weken, een complete woning 6-12 weken. We maken altijd een realistische planning en houden u op de hoogte van de voortgang."
        },
        {
          question: "Werken jullie in beide delen van de fusiegemeente?",
          answer: "Ja, we bedienen de hele gemeente Hamont-Achel, zowel Hamont als Achel. We kennen beide delen goed en hebben ervaring met de verschillende bouwstijlen."
        },
        {
          question: "Regelen jullie ook de vergunningen voor renovaties in Hamont-Achel?",
          answer: "Ja, wij begeleiden u bij het aanvragen van benodigde vergunningen bij gemeente Hamont-Achel. We kennen de lokale procedures en eisen goed."
        },
        {
          question: "Werken jullie ook grensoverschrijdend vanuit Nederland?",
          answer: "Ja, we werken grensoverschrijdend in Belgisch Limburg. Onze Nederlandse expertise en jarenlange ervaring stellen we graag ter beschikking."
        },
        {
          question: "Hebben jullie ervaring met traditionele Limburgse bouwstijlen?",
          answer: "Absoluut! We respecteren altijd de architectonische stijl en combineren dit met moderne technieken en comfort. Hamont-Achel heeft een rijke bouwhistorie die we graag behouden."
        }
      ]}
      
      phone="+32 11 88 00 88"
      onOpenContactModal={onOpenContactModal}
    />
  );
}