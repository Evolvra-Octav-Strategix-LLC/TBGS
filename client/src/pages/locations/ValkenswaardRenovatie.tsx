import ServiceLocationTemplate from "@/components/templates/ServiceLocationTemplate";
import { 
  Shield, 
  Clock, 
  Award, 
  Wrench, 
  CheckCircle2, 
  Users,
  Building2,
  Palette,
  HardHat,
  Calculator
} from "lucide-react";

interface ValkenswaardRenovatieProps {
  onOpenContactModal: () => void;
}

export default function ValkenswaardRenovatie({ onOpenContactModal }: ValkenswaardRenovatieProps) {
  return (
    <ServiceLocationTemplate
      service="renovatie"
      city="Valkenswaard"
      citySlug="valkenswaard" 
      country="nl"
      region="Noord-Brabant"
      nearbyAreas={["Waalre", "Veldhoven", "Eindhoven", "Best", "Eersel", "Bergeijk"]}
      
      serviceTitle="Renovatie & Verbouw"
      serviceDescription="Complete renovaties en verbouwingen in Valkenswaard. Van badkamer tot volledige woning, 25+ jaar ervaring."
      pageTitle="Renovatie & Verbouw Valkenswaard | TBGS - Complete Verbouwingen"
      metaDescription="Renovatie in Valkenswaard? ✓ Complete verbouwingen ✓ 25+ jaar ervaring ✓ Van ontwerp tot oplevering. Vraag gratis offerte aan!"
      
      heroDescription="Complete renovaties en verbouwingen in Valkenswaard en omgeving. Van kleine aanpassingen tot complete woning renovaties. Vakmanschap met 25+ jaar ervaring."
      problemsTitle="Renovatie Uitdagingen in Valkenswaard"
      problems={[
        "Verouderde badkamers en keukens die renovatie nodig hebben",
        "Slechte indeling die aangepast moet worden", 
        "Energielabels verbeteren door isolatie en nieuwe systemen",
        "Karakteristieke woningen die vakkundig gerenoveerd moeten worden",
        "Combineren van modern comfort met bestaande stijl"
      ]}
      solutionsTitle="TBGS Renovatie Oplossingen"
      solutions={[
        "3D ontwerp en visualisatie van uw nieuwe ruimte",
        "Complete projectbegeleiding van A tot Z",
        "Ervaren vakmensen voor alle disciplines",
        "Duurzame materialen en moderne technieken",
        "Transparante planning en kostenbeheersing"
      ]}
      
      benefits={[
        {
          icon: <Building2 className="w-6 h-6" />,
          title: "Complete Renovaties",
          description: "Van badkamer tot volledige woningrenovatie. Wij regelen alles onder één dak voor u."
        },
        {
          icon: <Palette className="w-6 h-6" />,
          title: "Ontwerp & Advies",
          description: "Professioneel advies over indeling, materialen en styling voor het beste resultaat."
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "25+ Jaar Ervaring",
          description: "Al meer dan 25 jaar specialist in renovaties en verbouwingen in Valkenswaard en omgeving."
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Ervaren Vakmensen",
          description: "Alle disciplines in huis: elektra, loodgieterij, tegelwerk, schilderwerk en meer."
        },
        {
          icon: <HardHat className="w-6 h-6" />,
          title: "Projectbegeleiding",
          description: "Één aanspreekpunt voor uw gehele project. Wij coördineren alle werkzaamheden."
        },
        {
          icon: <Calculator className="w-6 h-6" />,
          title: "Transparante Prijs",
          description: "Duidelijke offerte vooraf zonder verborgen kosten. U weet precies waar u aan toe bent."
        }
      ]}
      
      faqs={[
        {
          question: "Wat voor renovaties kunnen jullie doen in Valkenswaard?",
          answer: "We doen alle soorten renovaties: badkamers, keukens, complete woningrenovaties, aanbouwen, dakkapellen en energetische renovaties. Van klein tot groot."
        },
        {
          question: "Hoe lang duurt een gemiddelde renovatie?",
          answer: "Dit hangt af van de omvang. Een badkamerrenovatie duurt meestal 1-2 weken, een complete woningrenovatie kan 6-12 weken duren. We maken altijd een duidelijke planning."
        },
        {
          question: "Kunnen jullie helpen met vergunningen in Valkenswaard?",
          answer: "Ja, we hebben ervaring met de lokale procedures in Valkenswaard. We kunnen u adviseren en begeleiden bij het aanvragen van de juiste vergunningen."
        },
        {
          question: "Werken jullie ook met een architect samen?",
          answer: "Absoluut! Voor grotere projecten werken we samen met betrouwbare architecten en adviseurs om het beste resultaat te bereiken."
        }
      ]}
      
      phone="040-202 67 44"
      onOpenContactModal={onOpenContactModal}
    />
  );
}