import ServiceLocationTemplate from "@/components/templates/ServiceLocationTemplate";
import { Shield, Clock, Award, Wrench, CheckCircle2, Users, Calendar, Settings, Search } from "lucide-react";

interface MierloOnderhoudProps {
  onOpenContactModal: () => void;
}

export default function MierloOnderhoud({ onOpenContactModal }: MierloOnderhoudProps) {
  return (
    <ServiceLocationTemplate
      service="onderhoud"
      city="Mierlo"
      citySlug="mierlo" 
      country="nl"
      region="Noord-Brabant"
      nearbyAreas={["Geldrop", "Helmond", "Eindhoven", "Nuenen", "Lierop", "Aarle-Rixtel"]}
      
      serviceTitle="Onderhoud & Service"
      serviceDescription="Professioneel onderhoud van woningen en bedrijfspanden in Mierlo. Preventief onderhoud, reparaties en technische diensten."
      pageTitle="Onderhoud Mierlo | TBGS - Betrouwbaar Woningonderhoud"
      metaDescription="Onderhoud in Mierlo? ✓ Preventief onderhoud ✓ Snelle service ✓ Vaste contactpersoon ✓ 25+ jaar ervaring. Gratis inspectie!"
      
      heroDescription="Professioneel onderhoud van woningen en bedrijfspanden in Mierlo door lokale specialisten. Preventief onderhoud, snelle reparaties en technische diensten voor een zorgeloze woning."
      problemsTitle="Veelvoorkomende Onderhoudsproblemen in Mierlo"
      problems={[
        "Achterstallig onderhoud aan dakgoten en regenpijpen",
        "Schilderwerk dat door weersomstandigheden verslecht", 
        "Kleine reparaties die uitgroeien tot grote problemen",
        "Gebrek aan tijd voor regelmatig onderhoud",
        "Onbetrouwbare uitvoering door verschillende bedrijven"
      ]}
      solutionsTitle="TBGS Onderhoud Aanpak Mierlo"
      solutions={[
        "Jaarlijkse onderhoudscontracten met vaste planning",
        "Preventieve controles om problemen te voorkomen",
        "Snelle service bij acute onderhoudsproblemen",
        "Één aanspreekpunt voor al uw onderhoudswensen",
        "Transparante prijzen en duidelijke planning"
      ]}
      
      benefits={[
        {
          icon: <Calendar className="w-6 h-6" />,
          title: "Onderhoudscontract",
          description: "Jaarlijkse onderhoudscontracten met vaste planning. Zo blijft uw woning in Mierlo altijd in topconditie."
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Preventief Onderhoud",
          description: "Problemen voorkomen is beter dan repareren. Wij controleren en onderhouden voordat er schade ontstaat."
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "25+ Jaar Lokaal",
          description: "Al meer dan 25 jaar de betrouwbare onderhoudspartner voor inwoners van Mierlo en omgeving."
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Vaste Contactpersoon",
          description: "Altijd dezelfde aanspreekpersoon die uw woning en wensen kent. Persoonlijke service staat centraal."
        },
        {
          icon: <Search className="w-6 h-6" />,
          title: "Grondige Inspectie",
          description: "Uitgebreide controle van uw woning om alle onderhoudspunten in kaart te brengen."
        },
        {
          icon: <Settings className="w-6 h-6" />,
          title: "Vakkundig Team",
          description: "Ervaren vakspecialisten voor alle onderhoudswerkzaamheden aan uw woning."
        }
      ]}
      
      faqs={[
        {
          question: "Wat houdt een onderhoudscontract in Mierlo precies in?",
          answer: "Een onderhoudscontract bevat jaarlijkse controle van dak, goten, kozijnen en buitenwerk. Klein onderhoud tot €500 per jaar is inbegrepen. Grotere werkzaamheden worden apart geoffreerd."
        },
        {
          question: "Kunnen jullie ook acute reparaties doen in Mierlo?",
          answer: "Ja, ook buiten het contract om staan we klaar voor acute reparaties. Contractklanten hebben voorrang en krijgen korting op alle extra werkzaamheden."
        },
        {
          question: "Wat kost een onderhoudscontract voor een woning in Mierlo?",
          answer: "Dit hangt af van de grootte en het type woning. Voor een gemiddelde eengezinswoning rekenen we €35-50 per maand. Hiervoor krijgt u jaarlijkse controle plus klein onderhoud."
        },
        {
          question: "Hoe vaak komen jullie langs voor onderhoud in Mierlo?",
          answer: "Standaard komen we 1x per jaar voor de jaarlijkse controle. Bij specifieke wensen kunnen we vaker langskomen. Voor contractklanten zijn we altijd binnen 48 uur beschikbaar."
        }
      ]}
      
      phone="+31 40 202 6744"
      onOpenContactModal={onOpenContactModal}
    />
  );
}