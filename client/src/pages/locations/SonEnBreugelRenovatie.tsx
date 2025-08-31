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

interface SonEnBreugelRenovatieProps {
  onOpenContactModal: () => void;
}

export default function SonEnBreugelRenovatie({ onOpenContactModal }: SonEnBreugelRenovatieProps) {
  return (
    <ServiceLocationTemplate
      service="renovatie"
      city="Son en Breugel"
      citySlug="son-en-breugel" 
      country="nl"
      region="Noord-Brabant"
      nearbyAreas={["Eindhoven", "Nuenen", "Best", "Veldhoven", "Geldrop", "Waalre"]}
      
      serviceTitle="Renovatie & Verbouw"
      serviceDescription="Complete woningrenovaties in Son en Breugel door ervaren vakspecialisten. Van badkamer tot zolder met kwaliteit en vakmanschap."
      pageTitle="Renovatie Son en Breugel | TBGS - Complete Woningrenovatie"
      metaDescription="Renovatie in Son en Breugel? ✓ Complete woningrenovatie ✓ Badkamer & keuken ✓ 25+ jaar ervaring ✓ Van ontwerp tot oplevering. Gratis offerte!"
      
      heroDescription="Complete woningrenovaties in Son en Breugel door ervaren vakspecialisten. Van kleinschalige verbouwingen tot complete renovaties. Wij realiseren uw droomhuis met kwaliteit en vakmanschap."
      problemsTitle="Renovatie Uitdagingen in Son en Breugel Woningen"
      problems={[
        "Verouderde badkamers en keukens in karakteristieke woningen",
        "Beperkte ruimte optimaal benutten in traditionele panden", 
        "Moderne voorzieningen integreren zonder karakter te verliezen",
        "Energieprestatie verbeteren met behoud van authentieke uitstraling",
        "Coördinatie tussen verschillende vakspecialisten en vergunningen"
      ]}
      solutionsTitle="TBGS Renovatie Aanpak Son en Breugel"
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
          title: "25+ Jaar in Son en Breugel",
          description: "Al meer dan 25 jaar specialist in woningrenovaties in Son en Breugel. We kennen beide kernen goed."
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
          question: "Hoelang duurt een complete woningrenovatie in Son en Breugel gemiddeld?",
          answer: "Dit varieert sterk per project. Een badkamerrenovatie duurt 1-2 weken, een complete woning 6-12 weken. We maken altijd een realistische planning en houden u op de hoogte van de voortgang."
        },
        {
          question: "Wat kost een renovatie in Son en Breugel gemiddeld?",
          answer: "De kosten zijn afhankelijk van de omvang en gewenste kwaliteit. Een badkamerrenovatie start rond €8.000, een complete woningrenovatie vanaf €40.000. We geven altijd eerst een gratis offerte."
        },
        {
          question: "Regelen jullie ook de vergunningen voor renovaties in Son en Breugel?",
          answer: "Ja, wij begeleiden u bij het aanvragen van benodigde vergunningen bij gemeente Son en Breugel. We kennen de lokale procedures en eisen goed."
        },
        {
          question: "Werken jullie in beide delen van de gemeente?",
          answer: "Ja, we werken in de hele gemeente Son en Breugel, zowel in Son als in Breugel. We kennen de karakteristieke bouwstijlen van beide kernen."
        },
        {
          question: "Kunnen jullie werken binnen de traditionele bouwstijl?",
          answer: "Absoluut! We respecteren altijd de architectonische stijl en combineren dit met moderne technieken en comfort. Son en Breugel heeft een rijke bouwhistorie die we graag behouden."
        }
      ]}
      
      phone="040 202 6744"
      onOpenContactModal={onOpenContactModal}
    />
  );
}