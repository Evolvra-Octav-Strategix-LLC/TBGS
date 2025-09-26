import ServiceLocationTemplate from "@/components/templates/ServiceLocationTemplate";
import { 
  Shield, 
  Clock, 
  Award, 
  Wrench, 
  CheckCircle2, 
  Users,
  Flame,
  Wind,
  Search,
  ShieldCheck
} from "lucide-react";

interface ValkenswaardSchoorsteenProps {
  onOpenContactModal: () => void;
}

export default function ValkenswaardSchoorsteen({ onOpenContactModal }: ValkenswaardSchoorsteenProps) {
  return (
    <ServiceLocationTemplate
      service="schoorsteen"
      city="Valkenswaard"
      citySlug="valkenswaard" 
      country="nl"
      region="Noord-Brabant"
      nearbyAreas={["Waalre", "Veldhoven", "Eindhoven", "Best", "Eersel", "Bergeijk"]}
      
      serviceTitle="Schoorsteen Service"
      serviceDescription="Professionele schoorsteenservice in Valkenswaard. Reiniging, controle, reparatie en onderhoud van schoorstenen."
      pageTitle="Schoorsteen Service Valkenswaard | TBGS - Reiniging & Reparatie"
      metaDescription="Schoorsteenservice in Valkenswaard? ✓ Professionele reiniging ✓ Controle & reparatie ✓ 25+ jaar ervaring. Veilig en betrouwbaar!"
      
      heroDescription="Professionele schoorsteenservice in Valkenswaard en omgeving. Reiniging, controle, reparatie en onderhoud van alle soorten schoorstenen. Veiligheid staat voorop."
      problemsTitle="Veelvoorkomende Schoorsteenproblemen in Valkenswaard"
      problems={[
        "Verstopte schoorstenen door roet en vogelnestenanval",
        "Beschadigde voegen en metselwerk door weersinvloeden", 
        "Slechte trek waardoor rook in huis komt",
        "Verouderde rookkanalen die niet meer voldoen aan eisen",
        "Onvoldoende onderhoud waardoor gevaarlijke situaties ontstaan"
      ]}
      solutionsTitle="TBGS Schoorsteenoplossingen"
      solutions={[
        "Professionele schoorsteenreiniging met moderne apparatuur",
        "Grondige controle volgens NEN-normen",
        "Vakkundige reparatie van voegen en metselwerk",
        "Installatie van schoorsteenkappen en vogelnetten",
        "Jaarlijkse onderhoudscontracten voor optimale veiligheid"
      ]}
      
      benefits={[
        {
          icon: <Flame className="w-6 h-6" />,
          title: "Brandveiligheid",
          description: "Regelmatige reiniging en controle voorkomen brand en koolmonoxidevergiftiging."
        },
        {
          icon: <Wind className="w-6 h-6" />,
          title: "Optimale Trek",
          description: "Een schone schoorsteen zorgt voor goede trek en efficiënte verbranding."
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "25+ Jaar Ervaring",
          description: "Al meer dan 25 jaar specialist in schoorsteenonderhoud in Valkenswaard en omgeving."
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Gecertificeerde Monteurs",
          description: "Onze monteurs zijn gecertificeerd en werken volgens de geldende veiligheidsnormen."
        },
        {
          icon: <Search className="w-6 h-6" />,
          title: "Grondige Inspectie",
          description: "Complete controle van rookkanaal, aansluitingen en schoorsteenkop volgens NEN-normen."
        },
        {
          icon: <ShieldCheck className="w-6 h-6" />,
          title: "Garantie & Certificaat",
          description: "Na reiniging en controle ontvangt u een certificaat. Garantie op alle uitgevoerde werkzaamheden."
        }
      ]}
      
      faqs={[
        {
          question: "Hoe vaak moet een schoorsteen gereinigd worden in Valkenswaard?",
          answer: "Voor houtkachels adviseren we minimaal 1x per jaar reiniging. Voor cv-ketels hangt het af van het type en gebruik. Wij adviseren u graag persoonlijk."
        },
        {
          question: "Kunnen jullie ook schoorsteenreparaties doen?",
          answer: "Ja, we repareren voegen, vervangen beschadigde stenen en installeren schoorsteenkappen en vogelnetten. We hebben veel ervaring met verschillende soorten schoorstenen."
        },
        {
          question: "Krijg ik een certificaat na de schoorsteenreiniging?",
          answer: "Ja, na elke reiniging en controle ontvangt u een certificaat. Dit is vaak verplicht voor uw verzekering en geeft u zekerheid over de veiligheid."
        },
        {
          question: "Hoe snel kunnen jullie een schoorsteen reinigen in Valkenswaard?",
          answer: "We zijn normaal binnen 24 uur beschikbaar, tenzij er een noodgeval is of je hebt een abonnement. Een standaard reiniging duurt ongeveer 1-2 uur."
        }
      ]}
      
      phone="040-202 67 44"
      onOpenContactModal={onOpenContactModal}
    />
  );
}