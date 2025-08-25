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

interface EindhovenDaklekkageProps {
  onOpenContactModal: () => void;
}

export default function EindhovenDaklekkage({ onOpenContactModal }: EindhovenDaklekkageProps) {
  return (
    <ServiceLocationTemplate
      service="daklekkage"
      city="Eindhoven"
      citySlug="eindhoven" 
      country="nl"
      region="Noord-Brabant"
      nearbyAreas={["Veldhoven", "Nuenen", "Best", "Geldrop", "Waalre", "Son en Breugel"]}
      
      serviceTitle="Daklekkage Reparatie"
      serviceDescription="Professionele daklekkage reparatie in Eindhoven. Snelle service, garantie, 25+ jaar ervaring."
      pageTitle="Daklekkage Reparatie Eindhoven | TBGS - Snel & Betrouwbaar"
      metaDescription="Daklekkage in Eindhoven? ✓ Binnen 24u ter plaatse ✓ 25+ jaar ervaring ✓ Volledige garantie. Bel direct voor snelle reparatie!"
      
      heroDescription="Professionele daklekkage reparatie in Eindhoven en omgeving. Binnen 24 uur ter plaatse voor spoedgeval­len. Volledig verzekerd en gecertificeerd met 25+ jaar ervaring."
      problemsTitle="Veelvoorkomende Daklekkage Problemen in Eindhoven"
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
          description: "Al meer dan 25 jaar specialist in daklekkage reparatie in Eindhoven en de regio Brabant."
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
          question: "Hoe snel kunnen jullie bij daklekkage in Eindhoven ter plaatse zijn?",
          answer: "We zijn normaal binnen 24 uur beschikbaar, tenzij er een noodgeval is of je hebt een abonnement."
        },
        {
          question: "Wat kost daklekkage reparatie in Eindhoven gemiddeld?",
          answer: "De kosten variëren afhankelijk van de omvang en locatie van het lek. Een kleine reparatie start vanaf €150, terwijl grotere reparaties kunnen oplopen tot €1500 of meer. We geven altijd eerst een gratis inspectie en transparante offerte."
        },
        {
          question: "Bieden jullie garantie op daklekkage reparaties?",
          answer: "Ja, alle onze reparaties komen met uitgebreide garantie. Op kleine reparaties geven we 2 jaar garantie, op grotere werkzaamheden tot 10 jaar. Als er binnen de garantieperiode problemen optreden, lossen we dit kosteloos op."
        },
        {
          question: "Kunnen jullie ook 's avonds en in weekenden langskomen?",
          answer: "Voor spoedgevallen zijn we 24/7 bereikbaar, ook 's avonds en in het weekend. We berekenen hiervoor een kleine toeslag, maar zorgen ervoor dat acute lekkages snel worden gestopt om verdere schade te voorkomen."
        },
        {
          question: "Hoe weet ik of mijn daklekkage urgent is?",
          answer: "Een daklekkage is urgent als er actief water naar binnen komt, vooral bij slecht weer. Ook als u waterplekken op het plafond ziet groeien of als er een doordringende geur ontstaat. In deze gevallen adviseren we direct contact op te nemen."
        }
      ]}
      
      phone="+31 40 123 4567"
      onOpenContactModal={onOpenContactModal}
    />
  );
}