import ServiceLocationTemplate from "@/components/templates/ServiceLocationTemplate";
import { 
  Shield, 
  Clock, 
  Award, 
  Wrench, 
  CheckCircle2, 
  Users,
  Star,
  Phone,
  Eye,
  Flame
} from "lucide-react";

interface VeldhovenSchoorsteenProps {
  onOpenContactModal: () => void;
}

export default function VeldhovenSchoorsteen({ onOpenContactModal }: VeldhovenSchoorsteenProps) {
  return (
    <ServiceLocationTemplate
      service="schoorsteen"
      city="Veldhoven"
      citySlug="veldhoven" 
      country="nl"
      region="Noord-Brabant"
      nearbyAreas={["Eindhoven", "Nuenen", "Best", "Geldrop", "Waalre", "Son en Breugel"]}
      
      serviceTitle="Schoorsteen Service"
      serviceDescription="Professionele schoorsteenreiniging en onderhoud in Veldhoven. Veiligheid en kwaliteit gegarandeerd."
      pageTitle="Schoorsteen Service Veldhoven | TBGS - Reiniging & Onderhoud"
      metaDescription="Schoorsteen service in Veldhoven? ✓ Professionele reiniging ✓ Veiligheidscontrole ✓ 25+ jaar ervaring ✓ Gecertificeerde monteurs!"
      
      heroDescription="Professionele schoorsteenservice in Veldhoven en omgeving. Reiniging, inspectie en onderhoud door gecertificeerde specialisten. Veiligheid en kwaliteit gegarandeerd."
      problemsTitle="Veelvoorkomende Schoorsteen Problemen in Veldhoven"
      problems={[
        "Vervuiling en roetaanslag in schoorsteenkanaal",
        "Beschadigde schoorsteenvoering en mortelvoegen", 
        "Verstopte rookkanalen door vogelnesten of bladeren",
        "Schade door weersomstandigheden aan schoorsteenkap",
        "Slechte trek waardoor rook in huis blijft hangen"
      ]}
      solutionsTitle="TBGS Schoorsteen Oplossingen"
      solutions={[
        "Grondige reiniging met professionele apparatuur",
        "Camera-inspectie voor complete veiligheidscontrole",
        "Reparatie van beschadigde delen en voegen",
        "Plaatsing van vogelbescherming en schoorsteenkappen",
        "Advies over optimale ventilatie en trek"
      ]}
      
      benefits={[
        {
          icon: <Flame className="w-6 h-6" />,
          title: "Veiligheidscontrole",
          description: "Complete veiligheidscontrole met camera-inspectie om brandgevaar en CO-vergiftiging te voorkomen."
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Gecertificeerd",
          description: "Alle monteurs zijn gecertificeerd volgens NACS-richtlijnen en volledig verzekerd voor schoorsteenwerk."
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "25+ Jaar Ervaring",
          description: "Al meer dan 25 jaar specialist in schoorsteenonderhoud in Veldhoven en de regio Brabant."
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: "Snelle Service",
          description: "Meestal binnen een week beschikbaar voor onderhoud. Spoedgevallen binnen 24 uur mogelijk."
        },
        {
          icon: <Eye className="w-6 h-6" />,
          title: "Camera Inspectie",
          description: "Moderne camera-inspectie om problemen nauwkeurig te lokaliseren en vast te leggen."
        },
        {
          icon: <CheckCircle2 className="w-6 h-6" />,
          title: "Officieel Certificaat",
          description: "Na afloop ontvangt u een officieel schoorsteenonderhouscertificaat voor uw verzekering."
        }
      ]}
      
      faqs={[
        {
          question: "Hoe vaak moet een schoorsteen in Veldhoven gereinigd worden?",
          answer: "Voor regelmatig gebruik (houtkachel, open haard) adviseren we jaarlijkse reiniging. Bij intensief gebruik (dagelijks stoken) twee keer per jaar. De frequentie hangt af van gebruik en brandstof."
        },
        {
          question: "Wat kost schoorsteenreiniging in Veldhoven?",
          answer: "We geven altijd vooraf een duidelijke en transparante offerte. Met 80+ jaar familietraditie zorgen wij voor eerlijke prijzen en kwaliteit service."
        },
        {
          question: "Hebben jullie vergunning voor schoorsteenwerk in Veldhoven?",
          answer: "Ja, al onze monteurs zijn NACS-gecertificeerd en hebben alle benodigde vergunningen voor professioneel schoorsteenwerk in Veldhoven en omgeving."
        },
        {
          question: "Werken jullie ook met moderne cv-ketels in Veldhoven?",
          answer: "Ja, we onderhouden ook rookgasafvoeren van moderne hr-ketels en condensatieketels. Deze vereisen specifieke kennis die onze monteurs bezitten."
        },
        {
          question: "Krijg ik een certificaat na de schoorsteenreiniging?",
          answer: "Ja, na elke reiniging en controle krijgt u een officieel certificaat dat u kunt gebruiken voor uw verzekering en hypotheekverstrekker."
        }
      ]}
      
      phone="040 202 6744"
      onOpenContactModal={onOpenContactModal}
    />
  );
}