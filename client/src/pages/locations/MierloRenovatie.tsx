import ServiceLocationTemplate from "@/components/templates/ServiceLocationTemplate";
import { Shield, Clock, Award, Wrench, CheckCircle2, Users, Paintbrush, Home, Ruler } from "lucide-react";

interface MierloRenovatieProps {
  onOpenContactModal: () => void;
}

export default function MierloRenovatie({ onOpenContactModal }: MierloRenovatieProps) {
  return (
    <ServiceLocationTemplate
      service="renovatie"
      city="Mierlo"
      citySlug="mierlo" 
      country="nl"
      region="Noord-Brabant"
      nearbyAreas={["Geldrop", "Helmond", "Eindhoven", "Nuenen", "Lierop", "Aarle-Rixtel"]}
      
      serviceTitle="Renovatie & Verbouw"
      serviceDescription="Complete woningrenovaties in Mierlo door ervaren vakspecialisten. Van badkamer tot zolder met kwaliteit en vakmanschap."
      pageTitle="Renovatie Mierlo | TBGS - Complete Woningrenovatie"
      metaDescription="Renovatie in Mierlo? ✓ Complete woningrenovatie ✓ Badkamer & keuken ✓ 25+ jaar ervaring ✓ Lokale specialisten. Gratis offerte!"
      
      heroDescription="Complete woningrenovaties in Mierlo door ervaren vakspecialisten. Van kleinschalige verbouwingen tot complete renovaties. Wij realiseren uw droomhuis met kwaliteit en vakmanschap."
      problemsTitle="Renovatie Uitdagingen in Mierlo Woningen"
      problems={[
        "Verouderde badkamers en keukens in oudere delen van Mierlo",
        "Slechte isolatie en energieprestatie van traditionele woningen", 
        "Beperkte ruimte optimaal benutten in kleinere woningen",
        "Karakteristieke details behouden bij modernisering",
        "Afstemming tussen verschillende vakspecialisten"
      ]}
      solutionsTitle="TBGS Renovatie Aanpak Mierlo"
      solutions={[
        "Complete projectleiding van ontwerp tot oplevering",
        "Moderne technieken gecombineerd met respect voor karakter",
        "Slimme ruimteoplossingen voor optimaal wooncomfort",
        "Hoogwaardige materialen en afwerking",
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
          title: "25+ Jaar Ervaring",
          description: "Al meer dan 25 jaar specialist in woningrenovaties in Mierlo en omgeving."
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Eigen Specialisten",
          description: "Ervaren teamleiders en vakspecialisten die de kwaliteit waarborgen tijdens uw renovatie."
        },
        {
          icon: <Ruler className="w-6 h-6" />,
          title: "Maatwerk Ontwerp",
          description: "Persoonlijke ontwerpen die perfect aansluiten bij uw wensen en de stijl van uw woning."
        },
        {
          icon: <Paintbrush className="w-6 h-6" />,
          title: "Hoogwaardige Afwerking",
          description: "Perfecte afwerking met aandacht voor detail. Uw woning wordt opgeleverd zoals afgesproken."
        }
      ]}
      
      faqs={[
        {
          question: "Wat voor renovaties voeren jullie uit in Mierlo?",
          answer: "We voeren alle soorten renovaties uit: badkamerrenovatie, keukenrenovatie, zolderverbouwingen, complete woningrenovaties en uitbreidingen. Ook kleinere klussen zoals tegelwerk en schilderwerk."
        },
        {
          question: "Hoelang duurt een gemiddelde renovatie in Mierlo?",
          answer: "Dit hangt af van de omvang. Een badkamerrenovatie duurt 2-3 weken, een keuken 1-2 weken, een zolderverbouwing 3-4 weken. Complete woningrenovaties kunnen 2-4 maanden duren."
        },
        {
          question: "Kunnen jullie ook vergunningen regelen voor verbouwingen in Mierlo?",
          answer: "Ja, we helpen graag met vergunningaanvragen bij de gemeente Geldrop-Mierlo. We weten precis welke vergunningen nodig zijn en hoe we deze het snelst kunnen verkrijgen."
        },
        {
          question: "Wat kost een renovatie in Mierlo gemiddeld?",
          answer: "Dit varieert sterk per project. Een badkamerrenovatie vanaf €8.000, keuken vanaf €12.000, zolderverbouwing vanaf €15.000. We maken altijd een gedetaileerde offerte op maat."
        }
      ]}
      
      phone="+31 40 202 6744"
      onOpenContactModal={onOpenContactModal}
    />
  );
}