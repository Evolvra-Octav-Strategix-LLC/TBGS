import ServiceLocationTemplate from "@/components/templates/ServiceLocationTemplate";
import { 
  Shield, 
  Clock, 
  Award, 
  Wrench, 
  CheckCircle2, 
  Users,
  Calendar,
  Leaf,
  Target,
  AlertTriangle
} from "lucide-react";

interface ValkenswaardOnderhoudProps {
  onOpenContactModal: () => void;
}

export default function ValkenswaardOnderhoud({ onOpenContactModal }: ValkenswaardOnderhoudProps) {
  return (
    <ServiceLocationTemplate
      service="onderhoud"
      city="Valkenswaard"
      citySlug="valkenswaard" 
      country="nl"
      region="Noord-Brabant"
      nearbyAreas={["Waalre", "Veldhoven", "Eindhoven", "Best", "Eersel", "Bergeijk"]}
      
      serviceTitle="Onderhoud & Service"
      serviceDescription="Professioneel onderhoud aan uw woning in Valkenswaard. Preventief onderhoud voorkomt grote reparaties."
      pageTitle="Onderhoud & Service Valkenswaard | TBGS - Preventief Onderhoud"
      metaDescription="Woningonderhoud in Valkenswaard? ✓ Preventief onderhoud ✓ Onderhoudscontracten ✓ 25+ jaar ervaring. Voorkom dure reparaties!"
      
      heroDescription="Professioneel onderhoud aan uw woning in Valkenswaard en omgeving. Preventief onderhoud voorkomt grote problemen en bespaart u kosten. Jarenlange ervaring."
      problemsTitle="Veelvoorkomende Onderhoudsproblemen in Valkenswaard"
      problems={[
        "Verstopte dakgoten door bladval in bosrijke omgeving",
        "Slijtage aan gevels en kozijnen door weersinvloeden", 
        "Verouderde isolatie die energie verspilt",
        "Kleine problemen die uitgroeien tot grote reparaties",
        "Onregelmatig onderhoud waardoor garanties vervallen"
      ]}
      solutionsTitle="TBGS Onderhoudsoplossingen"
      solutions={[
        "Jaarlijkse onderhoudscontracten op maat",
        "Systematische controle van alle woningonderdelen",
        "Preventieve reparaties voordat problemen ontstaan",
        "Energiebesparend onderhoud en isolatie",
        "Digitaal onderhoudsdossier van uw woning"
      ]}
      
      benefits={[
        {
          icon: <Calendar className="w-6 h-6" />,
          title: "Onderhoudscontract",
          description: "Jaarlijks onderhoudscontract waarbij we uw woning systematisch controleren en onderhouden."
        },
        {
          icon: <Target className="w-6 h-6" />,
          title: "Preventief Onderhoud",
          description: "We signaleren problemen vroeg en voorkomen zo dure reparaties en overlast."
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "25+ Jaar Ervaring",
          description: "Al meer dan 25 jaar specialist in woningonderhoud in Valkenswaard en de regio."
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Vakkundige Monteurs",
          description: "Onze monteurs kennen alle aspecten van woningonderhoud en werken volgens de hoogste kwaliteit."
        },
        {
          icon: <Leaf className="w-6 h-6" />,
          title: "Duurzaam Onderhoud",
          description: "We adviseren over energiebesparende maatregelen en duurzame materialen."
        },
        {
          icon: <AlertTriangle className="w-6 h-6" />,
          title: "Spoedservice",
          description: "Bij acute problemen zijn we snel ter plaatse. We zijn normaal binnen 24 uur beschikbaar."
        }
      ]}
      
      faqs={[
        {
          question: "Wat houdt een onderhoudscontract in Valkenswaard in?",
          answer: "Een onderhoudscontract bestaat uit jaarlijkse inspectie, preventief onderhoud, kleine reparaties en prioriteit bij spoedgevallen. We houden een digitaal dossier bij van uw woning."
        },
        {
          question: "Hoe vaak moet ik mijn woning laten controleren?",
          answer: "We adviseren minimaal één keer per jaar een grondige controle. In het voorjaar controleren we winterschade en maken we uw woning zomerklaar."
        },
        {
          question: "Kunnen jullie ook energiebesparend onderhoud doen?",
          answer: "Ja, we adviseren over isolatie, HR++ glas, LED verlichting en andere energiebesparende maatregelen. Dit bespaart u geld en verhoogt het wooncomfort."
        },
        {
          question: "Wat kost een onderhoudscontract in Valkenswaard?",
          answer: "De kosten zijn afhankelijk van de grootte en staat van uw woning. We maken graag een vrijblijvende offerte op maat. Gemiddeld betaalt u tussen €200-500 per jaar."
        }
      ]}
      
      phone="040-202 67 44"
      onOpenContactModal={onOpenContactModal}
    />
  );
}