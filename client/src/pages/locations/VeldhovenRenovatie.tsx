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

interface VeldhovenRenovatieProps {
  onOpenContactModal: () => void;
}

export default function VeldhovenRenovatie({ onOpenContactModal }: VeldhovenRenovatieProps) {
  return (
    <ServiceLocationTemplate
      service="renovatie"
      city="Veldhoven"
      citySlug="veldhoven" 
      country="nl"
      region="Noord-Brabant"
      nearbyAreas={["Eindhoven", "Best", "Nuenen", "Geldrop", "Waalre", "Son en Breugel"]}
      
      serviceTitle="Renovatie & Verbouw"
      serviceDescription="Complete woningrenovaties in Veldhoven door ervaren vakspecialisten. Van badkamer tot zolder met kwaliteit en vakmanschap."
      pageTitle="Renovatie Veldhoven | TBGS - Complete Woningrenovatie"
      metaDescription="Renovatie in Veldhoven? ✓ Complete woningrenovatie ✓ Badkamer & keuken ✓ 25+ jaar ervaring ✓ Van ontwerp tot oplevering. Gratis offerte!"
      
      heroDescription="Complete woningrenovaties in Veldhoven door ervaren vakspecialisten. Van kleinschalige verbouwingen tot complete renovaties. Wij realiseren uw droomhuis met kwaliteit en vakmanschap."
      problemsTitle="Renovatie Uitdagingen in Veldhoven Woningen"
      problems={[
        "Verouderde badkamers en keukens in moderne Veldhoven-woningen",
        "Beperkte ruimte optimaal benutten in stadse panden", 
        "Moderne voorzieningen integreren zonder karakter te verliezen",
        "Energieprestatie verbeteren met duurzame oplossingen",
        "Coördinatie tussen verschillende vakspecialisten en vergunningen"
      ]}
      solutionsTitle="TBGS Renovatie Aanpak Veldhoven"
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
          title: "25+ Jaar in Veldhoven",
          description: "Al meer dan 25 jaar specialist in woningrenovaties in Veldhoven. We kennen de gemeente en haar bouwstijlen door en door."
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Eigen Specialisten",
          description: "Ervaren teamleiders en vakspecialisten die de kwaliteit waarborgen tijdens uw renovatie."
        },
        {
          icon: <Ruler className="w-6 h-6" />,
          title: "Maatwerk Ontwerp",
          description: "Persoonlijke ontwerpen die perfect aansluiten bij uw wensen en de stijl van uw Veldhoven-woning."
        },
        {
          icon: <Paintbrush className="w-6 h-6" />,
          title: "Kwaliteit Afwerking",
          description: "Perfecte afwerking tot in de details. Wij zorgen voor een resultaat waar u jarenlang plezier van heeft."
        }
      ]}

      faqs={[
        {
          question: "Wat voor renovaties voeren jullie uit in Veldhoven?",
          answer: "We voeren alle soorten renovaties uit: badkamerrenovatie, keukenrenovatie, zolderverbouwingen, complete woningrenovaties en uitbreidingen. We hebben veel ervaring met moderne bouwstijlen in Veldhoven."
        },
        {
          question: "Hoelang duurt een gemiddelde renovatie in Veldhoven?",
          answer: "De duur is afhankelijk van vele factoren zoals omvang, complexiteit, vergunningen en materiaallevering. We doen ons uiterste best om elk project zo snel mogelijk uit te voeren, zonder in te boeren op kwaliteit. Bij de offerte geven we een realistische planning."
        },
        {
          question: "Kunnen jullie ook vergunningen regelen voor verbouwingen in Veldhoven?",
          answer: "Ja, we helpen graag met vergunningaanvragen bij de gemeente Veldhoven. We weten precies welke vergunningen nodig zijn en hoe we deze het snelst kunnen verkrijgen. Voor dit service rekenen we een redelijke vergoeding. We kennen de lokale procedures goed en begeleiden u van A tot Z."
        },
        {
          question: "Werken jullie ook in het weekend in Veldhoven?",
          answer: "Voor spoedsituaties zijn we ook in het weekend beschikbaar. Reguliere renovatiewerkzaamheden plannen we in overleg, waarbij we rekening houden met uw wensen en die van de buren."
        },
        {
          question: "Hoe zit het met de opruiming na de renovatie in Veldhoven?",
          answer: "Volledige opruiming en eindschoonmaak zijn altijd onderdeel van onze service. U krijgt uw woning opgeleverd in perfecte staat, klaar om van te genieten."
        }
      ]}

      onOpenContactModal={onOpenContactModal}
    />
  );
}