import ServiceLocationTemplate from "@/components/templates/ServiceLocationTemplate";
import { 
  Shield, 
  Clock, 
  Award, 
  Wrench, 
  CheckCircle2, 
  Users,
  Calendar,
  Settings,
  Search
} from "lucide-react";

interface VeldhovenOnderhoudProps {
  onOpenContactModal: () => void;
}

export default function VeldhovenOnderhoud({ onOpenContactModal }: VeldhovenOnderhoudProps) {
  return (
    <ServiceLocationTemplate
      service="onderhoud"
      city="Veldhoven"
      citySlug="veldhoven" 
      country="nl"
      region="Noord-Brabant"
      nearbyAreas={["Eindhoven", "Best", "Nuenen", "Geldrop", "Waalre", "Son en Breugel"]}
      
      serviceTitle="Onderhoud & Service"
      serviceDescription="Professioneel onderhoud van woningen en bedrijfspanden in Veldhoven. Preventief onderhoud, reparaties en technische diensten."
      pageTitle="Onderhoud Veldhoven | TBGS - Betrouwbaar Woningonderhoud"
      metaDescription="Onderhoud in Veldhoven? ✓ Preventief onderhoud ✓ Snelle service ✓ Vaste contactpersoon ✓ 25+ jaar ervaring in Veldhoven!"
      
      heroDescription="Professioneel onderhoud van woningen en bedrijfspanden in Veldhoven door lokale specialisten. Preventief onderhoud, snelle reparaties en technische diensten voor een zorgeloze woning."
      problemsTitle="Veelvoorkomende Onderhoudsproblemen in Veldhoven"
      problems={[
        "Achterstallig onderhoud aan moderne Veldhoven-woningen",
        "Schilderwerk dat onderhoudt moet worden aangepast aan lokale omstandigheden", 
        "Kleine reparaties die uitgroeien tot grote problemen",
        "Gebrek aan tijd voor regelmatig onderhoud van drukke gezinnen",
        "Verschillende aannemers voor verschillende klussen coördineren"
      ]}
      solutionsTitle="TBGS Onderhoud Aanpak Veldhoven"
      solutions={[
        "Jaarlijkse onderhoudscontracten met vaste planning",
        "Preventieve controles aangepast aan lokale omstandigheden",
        "Snelle service bij acute onderhoudsproblemen",
        "Één aanspreekpunt voor al uw onderhoudswensen",
        "Transparante prijzen en duidelijke planning"
      ]}
      
      benefits={[
        {
          icon: <Calendar className="w-6 h-6" />,
          title: "Onderhoudscontract",
          description: "Jaarlijkse onderhoudscontracten specifiek voor Veldhoven-woningen. Zo blijft uw woning altijd in topconditie."
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Preventief Onderhoud",
          description: "Problemen voorkomen is beter dan repareren. Wij controleren en onderhouden voordat er schade ontstaat."
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "25+ Jaar in Veldhoven",
          description: "Al meer dan 25 jaar de betrouwbare onderhoudspartner voor inwoners van Veldhoven en omgeving."
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Vaste Contactpersoon",
          description: "Altijd dezelfde aanspreekpersoon die uw Veldhoven-woning en wensen kent. Persoonlijke service staat centraal."
        },
        {
          icon: <Search className="w-6 h-6" />,
          title: "Grondige Inspectie",
          description: "Uitgebreide controle van uw woning om alle onderhoudspunten in kaart te brengen."
        },
        {
          icon: <Settings className="w-6 h-6" />,
          title: "Vakmanschap",
          description: "Professionele aanpak met oog voor detail. Alle werkzaamheden worden uitgevoerd volgens de hoogste kwaliteitsnormen."
        }
      ]}

      faqs={[
        {
          question: "Welke onderhoudsdiensten bieden jullie in Veldhoven?",
          answer: "Wij verzorgen compleet woningonderhoud: schilderwerk, kleine reparaties, preventieve controles, seizoensgebonden onderhoud en technische installaties."
        },
        {
          question: "Hoe vaak moet ik onderhoud laten uitvoeren in Veldhoven?",
          answer: "Dit hangt af van uw woning en situatie. Wij adviseren jaarlijkse controles met onderhoud waar nodig. Bij een onderhoudscontract plannen we dit automatisch in."
        },
        {
          question: "Kunnen jullie ook spoedreparaties uitvoeren in Veldhoven?",
          answer: "Ja, voor acute problemen bieden we spoedservice. We proberen binnen 24 uur ter plaatse te zijn voor spoedreparaties."
        },
        {
          question: "Hoe werkt een onderhoudscontract in Veldhoven?",
          answer: "Met een onderhoudscontract plannen we jaarlijks onderhoud in, krijgt u voorrang bij spoedreparaties en profiteert u van scherpe tarieven."
        },
        {
          question: "Geven jullie garantie op onderhoudswerkzaamheden in Veldhoven?",
          answer: "Ja, alle uitgevoerde werkzaamheden komen met garantie. De garantietermijn verschilt per type werkzaamheden."
        }
      ]}

      onOpenContactModal={onOpenContactModal}
    />
  );
}