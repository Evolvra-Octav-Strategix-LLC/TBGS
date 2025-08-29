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

interface BestDaklekkageProps {
  onOpenContactModal: () => void;
}

export default function BestDaklekkage({ onOpenContactModal }: BestDaklekkageProps) {
  return (
    <ServiceLocationTemplate
      service="daklekkage"
      city="Best"
      citySlug="best" 
      country="nl"
      region="Noord-Brabant"
      nearbyAreas={["Eindhoven", "Veldhoven", "Nuenen", "Geldrop", "Waalre", "Son en Breugel"]}
      
      serviceTitle="Daklekkage Reparatie"
      serviceDescription="Professionele daklekkage reparatie in Best. Snelle service, garantie, 25+ jaar ervaring."
      pageTitle="Daklekkage Reparatie Best | TBGS - Snel & Betrouwbaar"
      metaDescription="Daklekkage in Best? ✓ Binnen 24u ter plaatse ✓ 25+ jaar ervaring ✓ Volledige garantie. Bel direct voor snelle reparatie!"
      
      heroDescription="Professionele daklekkage reparatie in Best en omgeving. Binnen 24 uur ter plaatse voor spoedgevallen. Volledig verzekerd en gecertificeerd met 25+ jaar ervaring."
      problemsTitle="Veelvoorkomende Daklekkage Problemen in Best"
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
          description: "Al meer dan 25 jaar specialist in daklekkage reparatie in Best en de regio Brabant."
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Gecertificeerde Monteurs",
          description: "Alle monteurs zijn volledig gecertificeerd en verzekerd. Vakmanschap staat bij ons centraal."
        },
        {
          icon: <Wrench className="w-6 h-6" />,
          title: "Moderne Apparatuur",
          description: "We gebruiken de nieuwste apparatuur voor snelle en accurate lekdetectie, specifiek voor Best-woningen."
        },
        {
          icon: <Eye className="w-6 h-6" />,
          title: "Gratis Inspectie",
          description: "Bij spoedreparaties krijgt u altijd eerst een gratis inspectie van de schade en een transparante prijsopgave."
        }
      ]}

      faqs={[
        {
          question: "Hoe snel kunnen jullie bij daklekkage in Best ter plaatse zijn?",
          answer: "Bij spoedgevallen staan we binnen 24 uur bij u voor de deur in Best. Voor acute situaties kunnen we vaak nog sneller uitrukken, soms binnen enkele uren."
        },
        {
          question: "Wat kost daklekkage reparatie in Best gemiddeld?",
          answer: "De kosten variëren per situatie. Na een gratis inspectie geven we een transparante prijsopgave. Noodreparaties beginnen vaak al bij een bescheiden bedrag."
        },
        {
          question: "Geven jullie garantie op dakreparaties in Best?",
          answer: "Ja, alle daklekkage reparaties komen met volledige garantie. De garantietermijn is afhankelijk van het type reparatie en gebruikte materialen."
        },
        {
          question: "Welke materialen gebruiken jullie voor dakreparaties in Best?",
          answer: "We gebruiken uitsluitend hoogwaardige, weerbestendige materialen die perfect geschikt zijn voor het Nederlandse klimaat. Alle materialen komen met fabrieksgarantie."
        },
        {
          question: "Kunnen jullie ook preventief dakonderhoud in Best uitvoeren?",
          answer: "Absoluut! Preventief onderhoud voorkomt veel dakproblemen. We bieden onderhoudscontracten specifiek voor woningen in Best en omgeving."
        }
      ]}

      onOpenContactModal={onOpenContactModal}
    />
  );
}