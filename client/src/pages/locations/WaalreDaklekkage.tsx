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
  Zap
} from "lucide-react";

interface WaalreDaklekkageProps {
  onOpenContactModal: () => void;
}

export default function WaalreDaklekkage({ onOpenContactModal }: WaalreDaklekkageProps) {
  return (
    <ServiceLocationTemplate
      service="daklekkage"
      city="Waalre"
      citySlug="waalre" 
      country="nl"
      region="Noord-Brabant"
      nearbyAreas={["Eindhoven", "Veldhoven", "Nuenen", "Best", "Geldrop", "Son en Breugel"]}
      
      serviceTitle="Daklekkage Reparatie"
      serviceDescription="Professionele daklekkage reparatie in Waalre. Snelle service, garantie, 25+ jaar ervaring."
      pageTitle="Daklekkage Reparatie Waalre | TBGS - Snel & Betrouwbaar"
      metaDescription="Daklekkage in Waalre? ✓ Binnen 24u ter plaatse ✓ 25+ jaar ervaring ✓ Volledige garantie. Bel direct voor snelle reparatie!"
      
      heroDescription="Professionele daklekkage reparatie in Waalre en omgeving. Binnen 24 uur ter plaatse voor spoedgevallen. Volledig verzekerd en gecertificeerd met 25+ jaar ervaring."
      problemsTitle="Veelvoorkomende Daklekkage Problemen in Waalre"
      problems={[
        "Lekkage door verouderde dakpannen of dakbedekking",
        "Verstopte of beschadigde dakgoten en regenpijpen", 
        "Scheuren in voegen en afdichtingen rond dakramen",
        "Schade door extreme weersomstandigheden",
        "Slechte isolatie waardoor vochtproblemen ontstaan"
      ]}
      solutionsTitle="TBGS Oplossingen voor Daklekkage"
      solutions={[
        "Grondige inspectie met professionele detectieapparatuur",
        "Snelle lokalisatie van het lek met infraroodcamera's",
        "Duurzame reparatie met hoogwaardige materialen",
        "Preventief onderhoud om toekomstige problemen te voorkomen",
        "Volledige garantie op alle uitgevoerde werkzaamheden"
      ]}
      
      benefits={[
        {
          icon: <Clock className="w-6 h-6" />,
          title: "24/7 Spoedhulp",
          description: "Bij acute daklekkage staan we binnen 24 uur bij u voor de deur. Ook in het weekend en 's avonds beschikbaar."
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Volledige Garantie",
          description: "Alle reparaties komen met uitgebreide garantie. Bij problemen komen we kosteloos terug."
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "25+ Jaar Ervaring",
          description: "Al meer dan 25 jaar specialist in daklekkage reparatie in Waalre en de regio Brabant."
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Gecertificeerde Monteurs",
          description: "Alle monteurs zijn volledig gecertificeerd en verzekerd. Vakmanschap staat bij ons centraal."
        },
        {
          icon: <Wrench className="w-6 h-6" />,
          title: "Moderne Apparatuur",
          description: "Wij werken met de nieuwste detectieapparatuur om lekken snel en nauwkeurig te lokaliseren."
        },
        {
          icon: <CheckCircle2 className="w-6 h-6" />,
          title: "Gratis Inspectie",
          description: "De eerste inspectie en offerte zijn altijd kosteloos en zonder verplichtingen."
        }
      ]}
      
      faqs={[
        {
          question: "Hoe snel kunnen jullie bij daklekkage in Waalre ter plaatse zijn?",
          answer: "We zijn normaal binnen 24 uur beschikbaar voor spoedgevallen. Voor regulier onderhoud kunnen we meestal binnen een week langskomen."
        },
        {
          question: "Wat kost daklekkage reparatie in Waalre gemiddeld?",
          answer: "We geven altijd eerst een gratis inspectie en transparante offerte. Met 80+ jaar familietraditie zorgen wij voor eerlijke prijzen en kwaliteit reparaties."
        },
        {
          question: "Bieden jullie garantie op daklekkage reparaties?",
          answer: "Ja, alle onze reparaties komen met uitgebreide garantie. Op kleine reparaties geven we 2 jaar garantie, op grotere werkzaamheden tot 10 jaar. Als er binnen de garantieperiode problemen optreden, lossen we dit kosteloos op."
        },
        {
          question: "Hebben jullie ervaring met exclusieve Waalre-woningen?",
          answer: "Ja, we hebben veel ervaring met hoogwaardige woningen in Waalre. We begrijpen de kwaliteitseisen en werken met respect voor de waarde van uw woning."
        },
        {
          question: "Kunnen jullie ook preventief dakonderhoud uitvoeren?",
          answer: "Absoluut! Preventief onderhoud voorkomt veel dakproblemen. We bieden onderhoudscontracten specifiek voor woningen in Waalre."
        }
      ]}
      
      phone="040 202 6744"
      onOpenContactModal={onOpenContactModal}
    />
  );
}