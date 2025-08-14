import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
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

// Location Pages - Netherlands
import LocationEindhoven from "@/pages/LocationEindhoven";
import LocationNuenen from "@/pages/LocationNuenen";
import LocationVeldhoven from "@/pages/LocationVeldhoven";
import LocationBest from "@/pages/LocationBest";
import LocationSonEnBreugel from "@/pages/LocationSonEnBreugel";

// Location Pages - Belgium
import LocationRetie from "@/pages/LocationRetie";
import LocationLommel from "@/pages/LocationLommel";

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
          
          {/* Main Locations Page */}
          <Route path="/locaties" component={() => <Locaties />} />
          
          {/* Location Pages - Netherlands */}
          <Route path="/eindhoven" component={() => <LocationEindhoven onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nuenen" component={() => <LocationNuenen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/veldhoven" component={() => <LocationVeldhoven onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/best" component={() => <LocationBest onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/son-en-breugel" component={() => <LocationSonEnBreugel onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/locaties/eindhoven" component={() => <LocationEindhoven onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/locaties/nuenen" component={() => <LocationNuenen onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/locaties/veldhoven" component={() => <LocationVeldhoven onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/locaties/best" component={() => <LocationBest onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/locaties/geldrop" component={() => <LocationEindhoven onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/locaties/mierlo" component={() => <LocationEindhoven onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/locaties/waalre" component={() => <LocationEindhoven onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/locaties/hamont-achel" component={() => <LocationEindhoven onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          
          {/* Location Pages - Belgium */}
          <Route path="/retie" component={() => <LocationRetie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/lommel" component={() => <LocationLommel onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          
          {/* Location-Service Pages - Eindhoven */}
          <Route path="/eindhoven/daklekkage" component={() => <EindhovenDaklekkage onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/eindhoven/renovatie" component={() => <EindhovenRenovatie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/eindhoven/onderhoud" component={() => <EindhovenOnderhoud onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          
          {/* Location-Service Pages - Nuenen */}
          <Route path="/nuenen/daklekkage" component={() => <NuenenDaklekkage onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/nuenen/renovatie" component={() => <NuenenRenovatie onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          
          {/* Location-Service Pages - Veldhoven */}
          <Route path="/veldhoven/daklekkage" component={() => <VeldhovenDaklekkage onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          
          {/* Location-Service Pages - Best */}
          <Route path="/best/daklekkage" component={() => <BestDaklekkage onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          
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
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
