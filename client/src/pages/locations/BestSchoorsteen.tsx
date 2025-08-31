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

interface BestSchoorsteenProps {
  onOpenContactModal: () => void;
}

export default function BestSchoorsteen({ onOpenContactModal }: BestSchoorsteenProps) {
  return (
    <ServiceLocationTemplate
      service="schoorsteen"
      city="Best"
      citySlug="best" 
      country="nl"
      region="Noord-Brabant"
      nearbyAreas={["Eindhoven", "Veldhoven", "Nuenen", "Geldrop", "Waalre", "Son en Breugel"]}
      
      serviceTitle="Schoorsteen Service"
      serviceDescription="Professionele schoorsteenreiniging en onderhoud in Best. Veiligheid en kwaliteit gegarandeerd."
      pageTitle="Schoorsteen Service Best | TBGS - Reiniging & Onderhoud"
      metaDescription="Schoorsteen service in Best? ✓ Professionele reiniging ✓ Veiligheidscontrole ✓ 25+ jaar ervaring ✓ Gecertificeerde monteurs!"
      
      heroDescription="Professionele schoorsteenservice in Best en omgeving. Reiniging, inspectie en onderhoud door gecertificeerde specialisten. Veiligheid en kwaliteit gegarandeerd."
      problemsTitle="Veelvoorkomende Schoorsteen Problemen in Best"
      problems={[
        "Vervuiling en roetaanslag in traditionele Best-schoorstenen",
        "Beschadigde schoorsteenvoering en mortelvoegen", 
        "Verstopte rookkanalen door vogelnesten of bladeren",
        "Schade door weersomstandigheden aan karakteristieke schoorsteenkappen",
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
          title: "25+ Jaar in Best",
          description: "Al meer dan 25 jaar specialist in schoorsteenonderhoud in Best. We kennen de karakteristieke woningen goed."
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
          question: "Hoe vaak moet een schoorsteen in Best gereinigd worden?",
          answer: "Voor regelmatig gebruik (houtkachel, open haard) adviseren we jaarlijkse reiniging. Bij intensief gebruik (dagelijks stoken) twee keer per jaar. De frequentie hangt af van gebruik en brandstof."
        },
        {
          question: "Wat kost schoorsteenreiniging in Best?",
          answer: "We geven altijd vooraf een duidelijke en transparante offerte. Met 80+ jaar familietraditie zorgen wij voor eerlijke prijzen en kwaliteit service."
        },
        {
          question: "Hebben jullie ervaring met karakteristieke Best-schoorstenen?",
          answer: "Ja, we hebben veel ervaring met traditionele bouwstijlen in Best. We respecteren het karakter van uw woning terwijl we zorgen voor optimale veiligheid."
        },
        {
          question: "Kunnen jullie ook 's avonds of weekends langskomen?",
          answer: "We werken meestal doordeweeks overdag. In overleg zijn avondafspraken mogelijk tegen een kleine toeslag. Weekend alleen voor spoedgevallen."
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