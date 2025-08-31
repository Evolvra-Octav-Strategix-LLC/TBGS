import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
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
import AdminApp from "@/pages/admin/AdminApp";
import AdminArticle from "@/pages/AdminArticle";

import DaklekkageHerkennenVoorkomen from "@/pages/DaklekkageHerkennenVoorkomen";
import EnergibesparingDoorIsolatie from "@/pages/EnergibesparingDoorIsolatie";
import JaarlijkseSchoorsteencontrole from "@/pages/JaarlijkseSchoorsteencontrole";
import Daklekkage from "@/pages/totaal-dak-specialist/Daklekkage";
import Dakrenovatie from "@/pages/totaal-dak-specialist/Dakrenovatie";
import DakgootReinigen from "@/pages/totaal-dak-specialist/DakgootReinigen";
import Dakisolatie from "@/pages/totaal-dak-specialist/Dakisolatie";
import Dakinspectie from "@/pages/totaal-dak-specialist/Dakinspectie";
import Dakbedekking from "@/pages/totaal-dak-specialist/Dakbedekking";
import NokverstenRepareren from "@/pages/totaal-dak-specialist/NokverstenRepareren";
import SchoorsteenVegen from "@/pages/totaal-schoorsteen-specialist/SchoorsteenVegen";
import SchoorsteenInspectie from "@/pages/totaal-schoorsteen-specialist/SchoorsteenInspectie";
import Header from "@/components/Header";
import SpecialistNavigationBar from "@/components/SpecialistNavigationBar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import BackToTopButton from "@/components/BackToTopButton";
import { FloatingServiceForm } from "@/components/FloatingServiceMenu";
import { useState } from "react";
import { useLocation } from "wouter";

// Main Locations Page
import Locaties from "@/pages/Locaties";

// NL - City Hubs (Locatie Hubs) - Only existing files
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

// BE - City Hubs (Locatie Hubs) - All Belgium locations
import LocationLommel from "@/pages/be/LocationLommel";
import LocationRetie from "@/pages/be/LocationRetie";
import LocationHamontAchel from "@/pages/be/LocationHamontAchel";
import LocationPelt from "@/pages/be/LocationPelt";
import LocationSintHuibrechtsLille from "@/pages/be/LocationSintHuibrechtsLille";
import LocationOverpelt from "@/pages/be/LocationOverpelt";
import LocationNeerpelt from "@/pages/be/LocationNeerpelt";
import LocationHamont from "@/pages/be/LocationHamont";

// Location-Service Pages - Netherlands
import EindhovenDaklekkage from "@/pages/locations/EindhovenDaklekkage";
import EindhovenRenovatie from "@/pages/locations/EindhovenRenovatie";
import EindhovenOnderhoud from "@/pages/locations/EindhovenOnderhoud";
import EindhovenSchoorsteen from "@/pages/locations/EindhovenSchoorsteen";
import VeldhovenDaklekkage from "@/pages/locations/VeldhovenDaklekkage";
import VeldhovenRenovatie from "@/pages/locations/VeldhovenRenovatie";
import VeldhovenOnderhoud from "@/pages/locations/VeldhovenOnderhoud";
import VeldhovenSchoorsteen from "@/pages/locations/VeldhovenSchoorsteen";
import MierloDaklekkage from "@/pages/locations/MierloDaklekkage";
import MierloRenovatie from "@/pages/locations/MierloRenovatie";
import MierloOnderhoud from "@/pages/locations/MierloOnderhoud";
import MierloSchoorsteen from "@/pages/locations/MierloSchoorsteen";
import BestDaklekkage from "@/pages/locations/BestDaklekkage";
import BestRenovatie from "@/pages/locations/BestRenovatie";
import BestOnderhoud from "@/pages/locations/BestOnderhoud";
import BestSchoorsteen from "@/pages/locations/BestSchoorsteen";
import NuenenDaklekkage from "@/pages/locations/NuenenDaklekkage";
import NuenenRenovatie from "@/pages/locations/NuenenRenovatie";
import NuenenOnderhoud from "@/pages/locations/NuenenOnderhoud";
import NuenenSchoorsteen from "@/pages/locations/NuenenSchoorsteen";
import SonEnBreugelDaklekkage from "@/pages/locations/SonEnBreugelDaklekkage";
import SonEnBreugelRenovatie from "@/pages/locations/SonEnBreugelRenovatie";
import SonEnBreugelOnderhoud from "@/pages/locations/SonEnBreugelOnderhoud";
import SonEnBreugelSchoorsteen from "@/pages/locations/SonEnBreugelSchoorsteen";
import GeldropDaklekkage from "@/pages/locations/GeldropDaklekkage";
import GeldropRenovatie from "@/pages/locations/GeldropRenovatie";
import GeldropOnderhoud from "@/pages/locations/GeldropOnderhoud";
import GeldropSchoorsteen from "@/pages/locations/GeldropSchoorsteen";
import WaalreDaklekkage from "@/pages/locations/WaalreDaklekkage";
import WaalreRenovatie from "@/pages/locations/WaalreRenovatie";
import WaalreOnderhoud from "@/pages/locations/WaalreOnderhoud";
import WaalreSchoorsteen from "@/pages/locations/WaalreSchoorsteen";

// Location-Service Pages - Belgium
import LommelDaklekkage from "@/pages/locations/LommelDaklekkage";
import LommelRenovatie from "@/pages/locations/LommelRenovatie";
import LommelOnderhoud from "@/pages/locations/LommelOnderhoud";
import LommelSchoorsteen from "@/pages/locations/LommelSchoorsteen";
import RetieDaklekkage from "@/pages/locations/RetieDaklekkage";
import RetieRenovatie from "@/pages/locations/RetieRenovatie";
import RetieOnderhoud from "@/pages/locations/RetieOnderhoud";
import RetieSchoorsteen from "@/pages/locations/RetieSchoorsteen";
import HamontAchelDaklekkage from "@/pages/locations/HamontAchelDaklekkage";
import HamontAchelRenovatie from "@/pages/locations/HamontAchelRenovatie";
import HamontAchelOnderhoud from "@/pages/locations/HamontAchelOnderhoud";
import HamontAchelSchoorsteen from "@/pages/locations/HamontAchelSchoorsteen";
import PeltDaklekkage from "@/pages/locations/PeltDaklekkage";
import PeltRenovatie from "@/pages/locations/PeltRenovatie";
import PeltOnderhoud from "@/pages/locations/PeltOnderhoud";
import PeltSchoorsteen from "@/pages/locations/PeltSchoorsteen";
import SintHuibrechtsLilleDaklekkage from "@/pages/locations/SintHuibrechtsLilleDaklekkage";
import SintHuibrechtsLilleRenovatie from "@/pages/locations/SintHuibrechtsLilleRenovatie";
import SintHuibrechtsLilleOnderhoud from "@/pages/locations/SintHuibrechtsLilleOnderhoud";
import SintHuibrechtsLilleSchoorsteen from "@/pages/locations/SintHuibrechtsLilleSchoorsteen";
import OverpeltDaklekkage from "@/pages/locations/OverpeltDaklekkage";
import OverpeltRenovatie from "@/pages/locations/OverpeltRenovatie";
import OverpeltOnderhoud from "@/pages/locations/OverpeltOnderhoud";
import OverpeltSchoorsteen from "@/pages/locations/OverpeltSchoorsteen";
import NeerpeltDaklekkage from "@/pages/locations/NeerpeltDaklekkage";
import NeerpeltRenovatie from "@/pages/locations/NeerpeltRenovatie";
import NeerpeltOnderhoud from "@/pages/locations/NeerpeltOnderhoud";
import NeerpeltSchoorsteen from "@/pages/locations/NeerpeltSchoorsteen";
import HamontDaklekkage from "@/pages/locations/HamontDaklekkage";
import HamontRenovatie from "@/pages/locations/HamontRenovatie";
import HamontOnderhoud from "@/pages/locations/HamontOnderhoud";
import HamontSchoorsteen from "@/pages/locations/HamontSchoorsteen";

// Location-Specific Plat Dak Specialist Pages
import EindhovenPlatDak from "@/pages/locaties/EindhovenPlatDak";
import NuenenPlatDak from "@/pages/locaties/NuenenPlatDak";
import VeldhovenPlatDak from "@/pages/locaties/VeldhovenPlatDak";

// Kennisbank Articles
import PatioDak from "@/pages/kennisbank/PatioDak";
import TerrasDak from "@/pages/kennisbank/TerrasDak";
import Groendaken from "@/pages/kennisbank/Groendaken";
import Zonnepanelen from "@/pages/kennisbank/Zonnepanelen";
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

// SEO Landing Pages
import DakdekkerEindhoven from "@/pages/DakdekkerEindhoven";

function Router() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [location] = useLocation();

  // Check if current page is a specialist page (which has its own header)
  const isSpecialistPage = [
    '/totaal-dak-specialist',
    '/totaal-schoorsteen-specialist', 
    '/totaal-onderhoud-specialist',
    '/totaal-bouw-specialist'
  ].includes(location) || location.startsWith('/totaal-dak-specialist/') || location.startsWith('/totaal-schoorsteen-specialist/') || location.startsWith('/totaal-onderhoud-specialist/') || location.startsWith('/totaal-bouw-specialist/');

  // Get specialist type based on current page
  const getCurrentSpecialist = (): "TDS" | "TSS" | "TOS" | "TBS" | undefined => {
    if (location === '/totaal-dak-specialist' || location.startsWith('/totaal-dak-specialist/')) {
      return 'TDS';
    }
    if (location === '/totaal-schoorsteen-specialist' || location.startsWith('/totaal-schoorsteen-specialist/')) {
      return 'TSS';
    }
    if (location === '/totaal-onderhoud-specialist' || location.startsWith('/totaal-onderhoud-specialist/')) {
      return 'TOS';
    }
    if (location === '/totaal-bouw-specialist' || location.startsWith('/totaal-bouw-specialist/')) {
      return 'TBS';
    }
    return undefined;
  };

  // Get footer colors based on current page
  const getFooterProps = () => {
    if (location === '/totaal-dak-specialist' || location.startsWith('/totaal-dak-specialist/')) {
      return { backgroundColor: 'bg-tbgs-red', accentColor: 'text-tbgs-red' };
    }
    if (location === '/totaal-schoorsteen-specialist' || location.startsWith('/totaal-schoorsteen-specialist/')) {
      return { backgroundColor: 'bg-tbgs-blue', accentColor: 'text-tbgs-blue' };
    }
    if (location === '/totaal-onderhoud-specialist' || location.startsWith('/totaal-onderhoud-specialist/')) {
      return { backgroundColor: 'bg-tbgs-green', accentColor: 'text-tbgs-green' };
    }
    if (location === '/totaal-bouw-specialist' || location.startsWith('/totaal-bouw-specialist/')) {
      return { backgroundColor: 'bg-tbgs-orange', accentColor: 'text-tbgs-orange' };
    }
    return { backgroundColor: 'bg-gray-900', accentColor: 'text-tbgs-navy' };
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

          <Route path="/totaal-dak-specialist/daklekkage" component={() => <Daklekkage onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/totaal-dak-specialist/dakrenovatie" component={() => <Dakrenovatie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/totaal-dak-specialist/dakgoot-reinigen" component={() => <DakgootReinigen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/totaal-dak-specialist/dakisolatie" component={() => <Dakisolatie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/totaal-dak-specialist/dakinspectie" component={() => <Dakinspectie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/totaal-dak-specialist/dakbedekking" component={() => <Dakbedekking onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/totaal-dak-specialist/nokvorsten-repareren" component={() => <NokverstenRepareren onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/totaal-schoorsteen-specialist/schoorsteen-vegen" component={() => <SchoorsteenVegen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/totaal-schoorsteen-specialist/schoorsteen-inspectie" component={() => <SchoorsteenInspectie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
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
          <Route path="/kennisbank/groendaken" component={() => <Groendaken onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/kennisbank/zonnepanelen" component={() => <Zonnepanelen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          
          {/* Admin-generated articles - dynamic route for admin articles - MUST BE LAST */}
          <Route path="/kennisbank/:slug" component={() => <AdminArticle onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          
          {/* Main Locations Page */}
          <Route path="/locaties" component={() => <Locaties />} />
          
          {/* NL - City Hubs (Locatie Hubs) */}
          <Route path="/nl/locaties/eindhoven" component={() => <LocationEindhoven onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/locaties/nuenen" component={() => <LocationNuenen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/locaties/veldhoven" component={() => <LocationVeldhoven onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/locaties/best" component={() => <LocationBest onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/locaties/son-en-breugel" component={() => <LocationSonEnBreugel onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          {/* Direct route for Son en Breugel to match LocationCards links */}
          <Route path="/nl/son-en-breugel" component={() => <LocationSonEnBreugel onOpenContactModal={() => setIsContactModalOpen(true)} />} />
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
          
          {/* BE - City Hubs (Locatie Hubs) - All Belgium locations */}
          <Route path="/be/lommel" component={() => <LocationLommel onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/retie" component={() => <LocationRetie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/hamont-achel" component={() => <LocationHamontAchel onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/pelt" component={() => <LocationPelt onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/sint-huibrechts-lille" component={() => <LocationSintHuibrechtsLille onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/overpelt" component={() => <LocationOverpelt onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/neerpelt" component={() => <LocationNeerpelt onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/hamont" component={() => <LocationHamont onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          
          {/* BE - Direct city routes (cleaner URLs) */}
          

          
          {/* Location-Specific Plat Dak Specialist Routes */}
          <Route path="/eindhoven/plat-dak-specialist" component={() => <EindhovenPlatDak onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nuenen/plat-dak-specialist" component={() => <NuenenPlatDak onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/veldhoven/plat-dak-specialist" component={() => <VeldhovenPlatDak onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          
          {/* NL Location-Service Routes - All city-service combinations */}
          <Route path="/nl/eindhoven/daklekkage" component={() => <EindhovenDaklekkage onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/eindhoven/renovatie" component={() => <EindhovenRenovatie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/eindhoven/onderhoud" component={() => <EindhovenOnderhoud onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/eindhoven/schoorsteen" component={() => <EindhovenSchoorsteen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/veldhoven/daklekkage" component={() => <VeldhovenDaklekkage onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/veldhoven/renovatie" component={() => <VeldhovenRenovatie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/veldhoven/onderhoud" component={() => <VeldhovenOnderhoud onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/veldhoven/schoorsteen" component={() => <VeldhovenSchoorsteen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/mierlo/daklekkage" component={() => <MierloDaklekkage onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/mierlo/renovatie" component={() => <MierloRenovatie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/mierlo/onderhoud" component={() => <MierloOnderhoud onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/mierlo/schoorsteen" component={() => <MierloSchoorsteen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/best/daklekkage" component={() => <BestDaklekkage onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/best/renovatie" component={() => <BestRenovatie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/best/onderhoud" component={() => <BestOnderhoud onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/best/schoorsteen" component={() => <BestSchoorsteen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/nuenen/daklekkage" component={() => <NuenenDaklekkage onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/nuenen/renovatie" component={() => <NuenenRenovatie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/nuenen/onderhoud" component={() => <NuenenOnderhoud onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/nuenen/schoorsteen" component={() => <NuenenSchoorsteen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/son-en-breugel/daklekkage" component={() => <SonEnBreugelDaklekkage onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/son-en-breugel/renovatie" component={() => <SonEnBreugelRenovatie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/son-en-breugel/onderhoud" component={() => <SonEnBreugelOnderhoud onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/son-en-breugel/schoorsteen" component={() => <SonEnBreugelSchoorsteen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/geldrop/daklekkage" component={() => <GeldropDaklekkage onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/geldrop/renovatie" component={() => <GeldropRenovatie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/geldrop/onderhoud" component={() => <GeldropOnderhoud onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/geldrop/schoorsteen" component={() => <GeldropSchoorsteen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/waalre/daklekkage" component={() => <WaalreDaklekkage onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/waalre/renovatie" component={() => <WaalreRenovatie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/waalre/onderhoud" component={() => <WaalreOnderhoud onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nl/waalre/schoorsteen" component={() => <WaalreSchoorsteen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          
          {/* BE Location-Service Routes - Implemented cities */}
          <Route path="/be/lommel/daklekkage" component={() => <LommelDaklekkage onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/lommel/renovatie" component={() => <LommelRenovatie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/lommel/onderhoud" component={() => <LommelOnderhoud onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/lommel/schoorsteen" component={() => <LommelSchoorsteen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/retie/daklekkage" component={() => <RetieDaklekkage onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/retie/renovatie" component={() => <RetieRenovatie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/retie/onderhoud" component={() => <RetieOnderhoud onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/retie/schoorsteen" component={() => <RetieSchoorsteen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/hamont-achel/daklekkage" component={() => <HamontAchelDaklekkage onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/hamont-achel/renovatie" component={() => <HamontAchelRenovatie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/hamont-achel/onderhoud" component={() => <HamontAchelOnderhoud onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/hamont-achel/schoorsteen" component={() => <HamontAchelSchoorsteen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/pelt/daklekkage" component={() => <PeltDaklekkage onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/pelt/renovatie" component={() => <PeltRenovatie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/pelt/onderhoud" component={() => <PeltOnderhoud onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/pelt/schoorsteen" component={() => <PeltSchoorsteen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/sint-huibrechts-lille/daklekkage" component={() => <SintHuibrechtsLilleDaklekkage onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/sint-huibrechts-lille/renovatie" component={() => <SintHuibrechtsLilleRenovatie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/sint-huibrechts-lille/onderhoud" component={() => <SintHuibrechtsLilleOnderhoud onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/sint-huibrechts-lille/schoorsteen" component={() => <SintHuibrechtsLilleSchoorsteen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/overpelt/daklekkage" component={() => <OverpeltDaklekkage onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/overpelt/renovatie" component={() => <OverpeltRenovatie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/overpelt/onderhoud" component={() => <OverpeltOnderhoud onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/overpelt/schoorsteen" component={() => <OverpeltSchoorsteen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/neerpelt/daklekkage" component={() => <NeerpeltDaklekkage onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/neerpelt/renovatie" component={() => <NeerpeltRenovatie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/neerpelt/onderhoud" component={() => <NeerpeltOnderhoud onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/neerpelt/schoorsteen" component={() => <NeerpeltSchoorsteen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/hamont/daklekkage" component={() => <HamontDaklekkage onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/hamont/renovatie" component={() => <HamontRenovatie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/hamont/onderhoud" component={() => <HamontOnderhoud onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/be/hamont/schoorsteen" component={() => <HamontSchoorsteen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          
          {/* Admin Routes */}
          <Route path="/admin*" component={AdminApp} />
          
          {/* High-Ranking SEO Landing Pages */}
          <Route path="/dakdekker-eindhoven" component={() => <DakdekkerEindhoven onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          
          {/* Legacy Routes - Keep for Existing SEO */}
          <Route path="/eindhoven" component={() => <LocationEindhoven onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nuenen" component={() => <LocationNuenen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/veldhoven" component={() => <LocationVeldhoven onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/best" component={() => <LocationBest onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/lommel" component={() => <LocationLommel onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          
          <Route component={NotFound} />
        </Switch>
      </main>
      
      <Footer {...getFooterProps()} />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      <BackToTopButton />
      <FloatingServiceForm specialist={getCurrentSpecialist()} />
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
          <SpeedInsights />
          <Analytics />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
