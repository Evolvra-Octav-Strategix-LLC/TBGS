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

interface ValkenswaardDaklekkageProps {
  onOpenContactModal: () => void;
}

export default function ValkenswaardDaklekkage({ onOpenContactModal }: ValkenswaardDaklekkageProps) {
  return (
    <ServiceLocationTemplate
      service="daklekkage"
      city="Valkenswaard"
      citySlug="valkenswaard" 
      country="nl"
      region="Noord-Brabant"
      nearbyAreas={["Waalre", "Veldhoven", "Eindhoven", "Best", "Eersel", "Bergeijk"]}
      
      serviceTitle="Daklekkage Reparatie"
      serviceDescription="Professionele daklekkage reparatie in Valkenswaard. Snelle service, garantie, 25+ jaar ervaring."
      pageTitle="Daklekkage Reparatie Valkenswaard | TBGS - Snel & Betrouwbaar"
      metaDescription="Daklekkage in Valkenswaard? ✓ Binnen 24u ter plaatse ✓ 25+ jaar ervaring ✓ Volledige garantie. Bel direct voor snelle reparatie!"
      
      heroDescription="Professionele daklekkage reparatie in Valkenswaard en omgeving. Binnen 24 uur ter plaatse voor spoedgevallen. Volledig verzekerd en gecertificeerd met 25+ jaar ervaring."
      problemsTitle="Veelvoorkomende Daklekkage Problemen in Valkenswaard"
      problems={[
        "Lekkage door verouderde dakpannen of dakbedekking",
        "Verstopte of beschadigde dakgoten en regenpijpen", 
        "Scheuren in voegen en afdichtingen rond dakramen",
        "Schade door extreme weersomstandigheden en takken",
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
          description: "Al meer dan 25 jaar specialist in daklekkage reparatie in Valkenswaard en de regio Brabant."
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Gecertificeerde Monteurs",
          description: "Alle monteurs zijn volledig gecertificeerd en verzekerd. Vakmanschap staat bij ons centraal."
        },
        {
          icon: <Wrench className="w-6 h-6" />,
          title: "Moderne Apparatuur",
          description: "We werken met de nieuwste detectieapparatuur om lekken snel en nauwkeurig te lokaliseren."
        },
        {
          icon: <Eye className="w-6 h-6" />,
          title: "Gratis Inspectie",
          description: "Voordat we beginnen, voeren we altijd een gratis inspectie uit en geven we u een transparante offerte."
        }
      ]}
      
      
      faqs={[
        {
          question: "Hoe snel kunnen jullie bij daklekkage in Valkenswaard ter plaatse zijn?",
          answer: "We zijn normaal binnen 24 uur beschikbaar, tenzij er een noodgeval is of je hebt een abonnement. Bij acute lekken doen we er alles aan om zo snel mogelijk te komen."
        },
        {
          question: "Wat kost daklekkage reparatie in Valkenswaard?",
          answer: "De kosten zijn afhankelijk van de aard en omvang van het lek. We geven altijd eerst een gratis inspectie en transparante offerte. Kleine reparaties starten vaak al vanaf €150."
        },
        {
          question: "Geven jullie garantie op de daklekkage reparatie?",
          answer: "Ja, op alle reparaties geven we uitgebreide garantie. De garantieperiode is afhankelijk van het type reparatie, maar is minimaal 2 jaar."
        },
        {
          question: "Kunnen jullie ook preventief dakonderhoud in Valkenswaard doen?",
          answer: "Absoluut! Preventief onderhoud voorkomt veel problemen. We bieden onderhoudscontracten waarbij we uw dak jaarlijks controleren en kleine reparaties direct uitvoeren."
        }
      ]}
      
      phone="040-202 67 44"
      onOpenContactModal={onOpenContactModal}
    />
  );
}