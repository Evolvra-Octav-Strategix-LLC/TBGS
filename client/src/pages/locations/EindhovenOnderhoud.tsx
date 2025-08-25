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

interface EindhovenOnderhoudProps {
  onOpenContactModal: () => void;
}

export default function EindhovenOnderhoud({ onOpenContactModal }: EindhovenOnderhoudProps) {
  return (
    <ServiceLocationTemplate
      service="onderhoud"
      city="Eindhoven"
      citySlug="eindhoven" 
      country="nl"
      region="Noord-Brabant"
      nearbyAreas={["Veldhoven", "Nuenen", "Best", "Geldrop", "Waalre", "Son en Breugel"]}
      
      serviceTitle="Onderhoud & Service"
      serviceDescription="Professioneel onderhoud van woningen en bedrijfspanden in Eindhoven. Preventief onderhoud, reparaties en technische diensten."
      pageTitle="Onderhoud Eindhoven | TBGS - Betrouwbaar Woningonderhoud"
      metaDescription="Onderhoud in Eindhoven? ✓ Preventief onderhoud ✓ Snelle service ✓ Vaste contactpersoon ✓ 25+ jaar ervaring in Eindhoven!"
      
      heroDescription="Professioneel onderhoud van woningen en bedrijfspanden in Eindhoven door lokale specialisten. Preventief onderhoud, snelle reparaties en technische diensten voor een zorgeloze woning."
      problemsTitle="Veelvoorkomende Onderhoudsproblemen in Eindhoven"
      problems={[
        "Achterstallig onderhoud aan complexe stadse woningen",
        "Schilderwerk dat sneller verslecht door stadsmilieu", 
        "Kleine reparaties die uitgroeien tot grote problemen",
        "Gebrek aan tijd voor regelmatig onderhoud van drukke stedelingen",
        "Verschillende aannemers voor verschillende klussen coördineren"
      ]}
      solutionsTitle="TBGS Onderhoud Aanpak Eindhoven"
      solutions={[
        "Jaarlijkse onderhoudscontracten met vaste planning",
        "Preventieve controles aangepast aan stadse omstandigheden",
        "Snelle service bij acute onderhoudsproblemen in de stad",
        "Één aanspreekpunt voor al uw onderhoudswensen",
        "Transparante prijzen en duidelijke planning"
      ]}
      
      benefits={[
        {
          icon: <Calendar className="w-6 h-6" />,
          title: "Onderhoudscontract",
          description: "Jaarlijkse onderhoudscontracten specifiek voor Eindhovense woningen. Zo blijft uw woning altijd in topconditie."
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Preventief Onderhoud",
          description: "Problemen voorkomen is beter dan repareren. Wij controleren en onderhouden voordat er schade ontstaat."
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "25+ Jaar in Eindhoven",
          description: "Al meer dan 25 jaar de betrouwbare onderhoudspartner voor inwoners van Eindhoven en omgeving."
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Vaste Contactpersoon",
          description: "Altijd dezelfde aanspreekpersoon die uw Eindhovense woning en wensen kent. Persoonlijke service staat centraal."
        },
        {
          icon: <Search className="w-6 h-6" />,
          title: "Grondige Inspectie",
          description: "Uitgebreide controle van uw woning om alle onderhoudspunten in kaart te brengen."
        },
        {
          icon: <Settings className="w-6 h-6" />,
          title: "Lokaal Vakkundig Team",
          description: "Ervaren vakspecialisten die Eindhoven kennen en alle onderhoudswerkzaamheden vakkundig uitvoeren."
        }
      ]}
      
      faqs={[
        {
          question: "Wat houdt een onderhoudscontract in Eindhoven precies in?",
          answer: "Een onderhoudscontract bevat jaarlijkse controle van dak, goten, kozijnen en buitenwerk. Klein onderhoud tot €500 per jaar is inbegrepen. Grotere werkzaamheden worden apart geoffreerd met contractkorting."
        },
        {
          question: "Kunnen jullie ook acute reparaties doen in Eindhoven?",
          answer: "Ja, ook buiten het contract om staan we klaar voor acute reparaties in heel Eindhoven. Contractklanten hebben voorrang en krijgen korting op alle extra werkzaamheden."
        },
        {
          question: "Wat kost een onderhoudscontract voor een woning in Eindhoven?",
          answer: "Dit hangt af van de grootte en het type woning. Voor een gemiddelde eengezinswoning in Eindhoven rekenen we €35-50 per maand. Hiervoor krijgt u jaarlijkse controle plus klein onderhoud."
        },
        {
          question: "Hoe vaak komen jullie langs voor onderhoud in Eindhoven?",
          answer: "Standaard komen we 1x per jaar voor de jaarlijkse controle. Bij specifieke wensen kunnen we vaker langskomen. Voor contractklanten zijn we binnen de stad altijd binnen 48 uur beschikbaar."
        },
        {
          question: "Bedienen jullie alle wijken van Eindhoven?",
          answer: "Ja, we bedienen alle wijken van Eindhoven: centrum, Strijp-S, Woensel, Gestel, Stratum, Tongelre en alle andere delen van de stad. Ook de directe omgeving behoort tot ons werkgebied."
        }
      ]}
      
      phone="+31 40 123 4567"
      onOpenContactModal={onOpenContactModal}
    />
  );
}