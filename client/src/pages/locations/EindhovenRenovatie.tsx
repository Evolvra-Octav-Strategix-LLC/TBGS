import ServiceLocationTemplate from "@/components/templates/ServiceLocationTemplate";
import { 
  Shield, 
  Clock, 
  Award, 
  Wrench, 
  CheckCircle2, 
  Users,
  Paintbrush,
  Home,
  Ruler
} from "lucide-react";

interface EindhovenRenovatieProps {
  onOpenContactModal: () => void;
}

export default function EindhovenRenovatie({ onOpenContactModal }: EindhovenRenovatieProps) {
  return (
    <ServiceLocationTemplate
      service="renovatie"
      city="Eindhoven"
      citySlug="eindhoven" 
      country="nl"
      region="Noord-Brabant"
      nearbyAreas={["Veldhoven", "Nuenen", "Best", "Geldrop", "Waalre", "Son en Breugel"]}
      
      serviceTitle="Renovatie & Verbouw"
      serviceDescription="Complete woningrenovaties in Eindhoven door ervaren vakspecialisten. Van badkamer tot zolder met kwaliteit en vakmanschap."
      pageTitle="Renovatie Eindhoven | TBGS - Complete Woningrenovatie"
      metaDescription="Renovatie in Eindhoven? ✓ Complete woningrenovatie ✓ Badkamer & keuken ✓ 25+ jaar ervaring ✓ Van ontwerp tot oplevering. Gratis offerte!"
      
      heroDescription="Complete woningrenovaties in Eindhoven door ervaren vakspecialisten. Van kleinschalige verbouwingen tot complete renovaties. Wij realiseren uw droomhuis met kwaliteit en vakmanschap."
      problemsTitle="Renovatie Uitdagingen in Eindhoven Woningen"
      problems={[
        "Verouderde badkamers en keukens in Philips-arbeiderswoningen",
        "Beperkte ruimte optimaal benutten in stadse woningen", 
        "Moderne voorzieningen integreren in karakteristieke panden",
        "Energieprestatie verbeteren zonder karakter te verliezen",
        "Coördinatie tussen verschillende vakspecialisten en vergunningen"
      ]}
      solutionsTitle="TBGS Renovatie Aanpak Eindhoven"
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
          title: "25+ Jaar in Eindhoven",
          description: "Al meer dan 25 jaar specialist in woningrenovaties in Eindhoven. We kennen de stad en haar bouwstijlen door en door."
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Eigen Specialisten",
          description: "Ervaren teamleiders en vakspecialisten die de kwaliteit waarborgen tijdens uw renovatie."
        },
        {
          icon: <Ruler className="w-6 h-6" />,
          title: "Maatwerk Ontwerp",
          description: "Persoonlijke ontwerpen die perfect aansluiten bij uw wensen en de stijl van uw Eindhovense woning."
        },
        {
          icon: <Paintbrush className="w-6 h-6" />,
          title: "Hoogwaardige Afwerking",
          description: "Perfecte afwerking met aandacht voor detail. Uw woning wordt opgeleverd zoals afgesproken."
        }
      ]}
      
      faqs={[
        {
          question: "Wat voor renovaties voeren jullie uit in Eindhoven?",
          answer: "We voeren alle soorten renovaties uit: badkamerrenovatie, keukenrenovatie, zolderverbouwingen, complete woningrenovaties en uitbreidingen. We hebben veel ervaring met verschillende bouwstijlen in Eindhoven, van Philips-arbeiderswoningen tot moderne nieuwbouw."
        },
        {
          question: "Hoelang duurt een gemiddelde renovatie in Eindhoven?",
          answer: "De duur is afhankelijk van vele factoren zoals omvang, complexiteit, vergunningen en materiaallevering. We doen ons uiterste best om elk project zo snel mogelijk uit te voeren, zonder in te boeren op kwaliteit. Bij de offerte geven we een realistische planning."
        },
        {
          question: "Kunnen jullie ook vergunningen regelen voor verbouwingen in Eindhoven?",
          answer: "Ja, we helpen graag met vergunningaanvragen bij de gemeente Eindhoven. We weten precies welke vergunningen nodig zijn en hoe we deze het snelst kunnen verkrijgen. Voor dit service rekenen we een redelijke vergoeding. We kennen de lokale procedures goed en begeleiden u van A tot Z."
        },
        {
          question: "Hoe werkt het offerteproces voor renovaties in Eindhoven?",
          answer: "We beginnen altijd met een gratis kennismaking en inspectie ter plaatse. Vervolgens maken we een gedetailleerde offerte op maat, volledig afgestemd op uw wensen en budget. Alle kosten worden transparant weergegeven."
        },
        {
          question: "Houden jullie rekening met de karakteristieke stijl van Eindhovense woningen?",
          answer: "Absoluut! Of het nu gaat om een Philips-arbeidershuis, een woning in Strijp-S of moderne nieuwbouw - we respecteren altijd de architectonische stijl en combineren dit met moderne technieken en comfort."
        }
      ]}
      
      phone="040 202 6744"
      onOpenContactModal={onOpenContactModal}
    />
  );
}