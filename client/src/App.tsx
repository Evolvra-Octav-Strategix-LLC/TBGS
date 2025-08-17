import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import TotaalDakSpecialist from "@/pages/TotaalDakSpecialist";
import TotaalSchoorsteenSpecialist from "@/pages/TotaalSchoorsteenSpecialist";
import TotaalOnderhoudSpecialist from "@/pages/TotaalOnderhoudSpecialist";
import TotaalBouwSpecialist from "@/pages/TotaalBouwSpecialist";
import Kennisbank from "@/pages/Kennisbank";
import GratisOfferte from "@/pages/GratisOfferte";
import OverOns from "@/pages/OverOns";
import Contact from "@/pages/Contact";
import GratisInspectie from "@/pages/GratisInspectie";
import DaklekkageHerkennenVoorkomen from "@/pages/DaklekkageHerkennenVoorkomen";
import EnergibesparingDoorIsolatie from "@/pages/EnergibesparingDoorIsolatie";
import JaarlijkseSchoorsteencontrole from "@/pages/JaarlijkseSchoorsteencontrole";
import Header from "@/components/Header";
import SpecialistNavigationBar from "@/components/SpecialistNavigationBar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import BackToTopButton from "@/components/BackToTopButton";
import { useState } from "react";
import { useLocation } from "wouter";

// Main Locations Page
import Locaties from "@/pages/Locaties";

// NL - City Hubs (Locatie Hubs)
import LocationEindhoven from "@/pages/nl/locaties/LocationEindhoven";
import LocationNuenen from "@/pages/nl/locaties/LocationNuenen";
import LocationVeldhoven from "@/pages/nl/locaties/LocationVeldhoven";
import LocationBest from "@/pages/nl/locaties/LocationBest";
import LocationSonEnBreugel from "@/pages/nl/locaties/LocationSonEnBreugel";
import LocationGeldrop from "@/pages/nl/locaties/LocationGeldrop";
import LocationMierlo from "@/pages/nl/locaties/LocationMierlo";
import LocationWaalre from "@/pages/nl/locaties/LocationWaalre";

// BE - Limburg Regio Hub
import LimburgRegioHub from "@/pages/be/LimburgRegioHub";

// BE - City Hubs (Locatie Hubs)
import LocationLommel from "@/pages/be/locaties/LocationLommel";
import LocationHamontAchel from "@/pages/be/locaties/LocationHamontAchel";
import LocationPelt from "@/pages/be/locaties/LocationPelt";
import LocationHamont from "@/pages/be/locaties/LocationHamont";
import LocationRetie from "@/pages/be/locaties/LocationRetie";
import LocationSintHuibrechtsLille from "@/pages/be/locaties/LocationSintHuibrechtsLille";
import LocationOverpelt from "@/pages/be/locaties/LocationOverpelt";
import LocationNeerpelt from "@/pages/be/locaties/LocationNeerpelt";

// BE - Specialist × Locatie Pages - Dak Specialist
import LommelDakSpecialist from "@/pages/be/totaal-dak-specialist/LommelDakSpecialist";
import HamontAchelDakSpecialist from "@/pages/be/totaal-dak-specialist/HamontAchelDakSpecialist";
import PeltDakSpecialist from "@/pages/be/totaal-dak-specialist/PeltDakSpecialist";

// BE - Specialist × Locatie Pages - Schoorsteen Specialist
import LommelSchoorsteenSpecialist from "@/pages/be/totaal-schoorsteen-specialist/LommelSchoorsteenSpecialist";
import HamontAchelSchoorsteenSpecialist from "@/pages/be/totaal-schoorsteen-specialist/HamontAchelSchoorsteenSpecialist";
import PeltSchoorsteenSpecialist from "@/pages/be/totaal-schoorsteen-specialist/PeltSchoorsteenSpecialist";

// BE - Specialist × Locatie Pages - Onderhoud Specialist
import LommelOnderhoudSpecialist from "@/pages/be/totaal-onderhoud-specialist/LommelOnderhoudSpecialist";
import HamontAchelOnderhoudSpecialist from "@/pages/be/totaal-onderhoud-specialist/HamontAchelOnderhoudSpecialist";
import PeltOnderhoudSpecialist from "@/pages/be/totaal-onderhoud-specialist/PeltOnderhoudSpecialist";

// BE - Specialist × Locatie Pages - Bouw Specialist
import LommelBouwSpecialist from "@/pages/be/totaal-bouw-specialist/LommelBouwSpecialist";
import HamontAchelBouwSpecialist from "@/pages/be/totaal-bouw-specialist/HamontAchelBouwSpecialist";
import PeltBouwSpecialist from "@/pages/be/totaal-bouw-specialist/PeltBouwSpecialist";

// Location-Service Pages - Eindhoven
import EindhovenDaklekkage from "@/pages/locations/EindhovenDaklekkage";
import EindhovenRenovatie from "@/pages/locations/EindhovenRenovatie";
import EindhovenOnderhoud from "@/pages/locations/EindhovenOnderhoud";

// Location-Service Pages - Nuenen
import NuenenDaklekkage from "@/pages/locations/NuenenDaklekkage";
import NuenenRenovatie from "@/pages/locations/NuenenRenovatie";

// Location-Service Pages - Veldhoven  
import VeldhovenDaklekkage from "@/pages/locations/VeldhovenDaklekkage";

// Location-Service Pages - Best
import BestDaklekkage from "@/pages/locations/BestDaklekkage";

// Location-Service Pages - Geldrop
import GeldropDaklekkage from "@/pages/locations/GeldropDaklekkage";
import GeldropRenovatie from "@/pages/locations/GeldropRenovatie";
import GeldropOnderhoud from "@/pages/locations/GeldropOnderhoud";

// Location-Service Pages - Mierlo
import MierloDaklekkage from "@/pages/locations/MierloDaklekkage";
import MierloRenovatie from "@/pages/locations/MierloRenovatie";
import MierloOnderhoud from "@/pages/locations/MierloOnderhoud";

// Location-Service Pages - Waalre
import WaalreDaklekkage from "@/pages/locations/WaalreDaklekkage";
import WaalreRenovatie from "@/pages/locations/WaalreRenovatie";
import WaalreOnderhoud from "@/pages/locations/WaalreOnderhoud";

// Location-Service Pages - Hamont-Achel
import HamontAchelDaklekkage from "@/pages/locations/HamontAchelDaklekkage";
import HamontAchelRenovatie from "@/pages/locations/HamontAchelRenovatie";
import HamontAchelOnderhoud from "@/pages/locations/HamontAchelOnderhoud";

// Location-Service Pages - Hamont
import HamontDaklekkage from "@/pages/locations/HamontDaklekkage";
import HamontRenovatie from "@/pages/locations/HamontRenovatie";
import HamontOnderhoud from "@/pages/locations/HamontOnderhoud";

// Location-Service Pages - Pelt
import PeltDaklekkage from "@/pages/locations/PeltDaklekkage";
import PeltRenovatie from "@/pages/locations/PeltRenovatie";
import PeltOnderhoud from "@/pages/locations/PeltOnderhoud";

// Location-Service Pages - Sint-Huibrechts-Lille
import SintHuibrechtsLilleRenovatie from "@/pages/locations/SintHuibrechtsLilleRenovatie";
import SintHuibrechtsLilleOnderhoud from "@/pages/locations/SintHuibrechtsLilleOnderhoud";

// Location-Service Pages - Overpelt
import OverpeltDaklekkage from "@/pages/locations/OverpeltDaklekkage";

// Location-Specific Plat Dak Specialist Pages
import EindhovenPlatDak from "@/pages/locaties/EindhovenPlatDak";
import NuenenPlatDak from "@/pages/locaties/NuenenPlatDak";
import VeldhovenPlatDak from "@/pages/locaties/VeldhovenPlatDak";

// Kennisbank Articles
import PatioDak from "@/pages/kennisbank/PatioDak";
import TerrasDak from "@/pages/kennisbank/TerrasDak";
import SchuinDak from "@/pages/kennisbank/SchuinDak";
import PlatDak from "@/pages/kennisbank/PlatDak";
import Schilderwerken from "@/pages/kennisbank/Schilderwerken";
import Regenpijp from "@/pages/kennisbank/Regenpijp";
import Dakgoot from "@/pages/kennisbank/Dakgoot";
import Gevellekkage from "@/pages/kennisbank/Gevellekkage";
import DakbedekkingMaterialen from "@/pages/kennisbank/DakbedekkingMaterialen";
import DakpannenWelkeKeus from "@/pages/kennisbank/DakpannenWelkeKeus";
import LekkageDakkapellen from "@/pages/kennisbank/LekkageDakkapellen";
import DakkapelRenovatie from "@/pages/kennisbank/DakkapelRenovatie";

function Router() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [location] = useLocation();

  // Check if current page is a specialist page (which has its own header)
  const isSpecialistPage = [
    '/totaal-dak-specialist',
    '/totaal-schoorsteen-specialist', 
    '/totaal-onderhoud-specialist',
    '/totaal-bouw-specialist'
  ].includes(location);

  // Get footer colors based on current page
  const getFooterProps = () => {
    switch(location) {
      case '/totaal-dak-specialist':
        return { backgroundColor: 'bg-tbgs-red', accentColor: 'text-tbgs-red' };
      case '/totaal-schoorsteen-specialist':
        return { backgroundColor: 'bg-tbgs-blue', accentColor: 'text-tbgs-blue' };
      case '/totaal-onderhoud-specialist':
        return { backgroundColor: 'bg-tbgs-green', accentColor: 'text-tbgs-green' };
      case '/totaal-bouw-specialist':
        return { backgroundColor: 'bg-tbgs-orange', accentColor: 'text-tbgs-orange' };
      default:
        return { backgroundColor: 'bg-gray-900', accentColor: 'text-tbgs-navy' };
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Only show main navigation for non-specialist pages */}
      {!isSpecialistPage && (
        <>
          <SpecialistNavigationBar />
          <Header onOpenContactModal={() => setIsContactModalOpen(true)} />
        </>
      )}
      
      <main className="flex-1">
        <Switch>
          <Route path="/" component={() => <Home onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/totaal-dak-specialist" component={() => <TotaalDakSpecialist onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/totaal-schoorsteen-specialist" component={() => <TotaalSchoorsteenSpecialist onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/totaal-onderhoud-specialist" component={() => <TotaalOnderhoudSpecialist onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/totaal-bouw-specialist" component={() => <TotaalBouwSpecialist onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/kennisbank" component={() => <Kennisbank onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/gratis-offerte" component={() => <GratisOfferte />} />
          <Route path="/offerte" component={() => <GratisOfferte />} />
          <Route path="/over-ons" component={() => <OverOns onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/contact" component={() => <Contact onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/gratis-inspectie" component={() => <GratisInspectie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/kennisbank/daklekkage-herkennen-voorkomen" component={() => <DaklekkageHerkennenVoorkomen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/kennisbank/energiebesparing-door-isolatie" component={() => <EnergibesparingDoorIsolatie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/kennisbank/jaarlijkse-schoorsteencontrole" component={() => <JaarlijkseSchoorsteencontrole onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          
          {/* New Kennisbank Articles */}
          <Route path="/kennisbank/patio-dak" component={() => <PatioDak onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/kennisbank/terras-dak" component={() => <TerrasDak onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/kennisbank/schuin-dak" component={() => <SchuinDak onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/kennisbank/plat-dak" component={() => <PlatDak onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/kennisbank/schilderwerken" component={() => <Schilderwerken onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/kennisbank/regenpijp" component={() => <Regenpijp onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/kennisbank/dakgoot" component={() => <Dakgoot onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/kennisbank/gevellekkage" component={() => <Gevellekkage onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/kennisbank/dakbedekking-materialen" component={() => <DakbedekkingMaterialen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/kennisbank/dakpannen-welke-keus" component={() => <DakpannenWelkeKeus onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/kennisbank/lekkage-dakkapellen" component={() => <LekkageDakkapellen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/kennisbank/dakkapel-renovatie" component={() => <DakkapelRenovatie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          
          {/* Main Locations Page */}
          <Route path="/locaties" component={() => <Locaties />} />
          
          {/* NL - City Hubs (Locatie Hubs) */}
          <Route path="/nl/locaties/eindhoven" component={() => <LocationEindhoven onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/locaties/nuenen" component={() => <LocationNuenen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/locaties/veldhoven" component={() => <LocationVeldhoven onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/locaties/best" component={() => <LocationBest onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/locaties/son-en-breugel" component={() => <LocationSonEnBreugel onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/locaties/geldrop" component={() => <LocationGeldrop onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/locaties/mierlo" component={() => <LocationMierlo onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/locaties/waalre" component={() => <LocationWaalre onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          
          {/* NL - Direct city routes (for SEO compatibility) */}
          <Route path="/nl/eindhoven" component={() => <LocationEindhoven onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/nuenen" component={() => <LocationNuenen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/veldhoven" component={() => <LocationVeldhoven onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/best" component={() => <LocationBest onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/geldrop" component={() => <LocationGeldrop onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/mierlo" component={() => <LocationMierlo onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/waalre" component={() => <LocationWaalre onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          
          {/* NL Specialist × Location routes temporarily removed - will be added as pages are created */}
          
          {/* BE - Main Landing and Limburg Regio Hub */}
          <Route path="/be" component={() => <LimburgRegioHub onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/" component={() => <LimburgRegioHub onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/limburg" component={() => <LimburgRegioHub onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          
          {/* BE - City Hubs (Locatie Hubs) */}
          <Route path="/be/locaties/lommel" component={() => <LocationLommel onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/locaties/hamont-achel" component={() => <LocationHamontAchel onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/locaties/pelt" component={() => <LocationPelt onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/locaties/hamont" component={() => <LocationHamont onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/locaties/retie" component={() => <LocationRetie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/locaties/sint-huibrechts-lille" component={() => <LocationSintHuibrechtsLille onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/locaties/overpelt" component={() => <LocationOverpelt onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/locaties/neerpelt" component={() => <LocationNeerpelt onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          
          {/* BE - Specialist × Locatie Pages - Dak Specialist */}
          <Route path="/be/totaal-dak-specialist/lommel" component={() => <LommelDakSpecialist onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/totaal-dak-specialist/hamont-achel" component={() => <HamontAchelDakSpecialist onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/totaal-dak-specialist/pelt" component={() => <PeltDakSpecialist onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          
          {/* BE - Specialist × Locatie Pages - Schoorsteen Specialist */}
          <Route path="/be/totaal-schoorsteen-specialist/lommel" component={() => <LommelSchoorsteenSpecialist onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/totaal-schoorsteen-specialist/hamont-achel" component={() => <HamontAchelSchoorsteenSpecialist onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/totaal-schoorsteen-specialist/pelt" component={() => <PeltSchoorsteenSpecialist onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          
          {/* BE - Specialist × Locatie Pages - Onderhoud Specialist */}
          <Route path="/be/totaal-onderhoud-specialist/lommel" component={() => <LommelOnderhoudSpecialist onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/totaal-onderhoud-specialist/hamont-achel" component={() => <HamontAchelOnderhoudSpecialist onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/totaal-onderhoud-specialist/pelt" component={() => <PeltOnderhoudSpecialist onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          
          {/* BE - Specialist × Locatie Pages - Bouw Specialist */}
          <Route path="/be/totaal-bouw-specialist/lommel" component={() => <LommelBouwSpecialist onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/totaal-bouw-specialist/hamont-achel" component={() => <HamontAchelBouwSpecialist onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/totaal-bouw-specialist/pelt" component={() => <PeltBouwSpecialist onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          
          {/* Location-Specific Plat Dak Specialist Routes */}
          <Route path="/eindhoven/plat-dak-specialist" component={() => <EindhovenPlatDak onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nuenen/plat-dak-specialist" component={() => <NuenenPlatDak onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/veldhoven/plat-dak-specialist" component={() => <VeldhovenPlatDak onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          
          {/* Legacy Routes - Keep for Existing SEO */}
          <Route path="/eindhoven" component={() => <LocationEindhoven onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nuenen" component={() => <LocationNuenen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/veldhoven" component={() => <LocationVeldhoven onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/best" component={() => <LocationBest onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/lommel" component={() => <LocationLommel onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/retie" component={() => <LocationRetie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          
          <Route component={NotFound} />
        </Switch>
      </main>
      
      <Footer {...getFooterProps()} />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      <BackToTopButton />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
