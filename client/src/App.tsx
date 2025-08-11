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
import Header from "@/components/Header";
import SpecialistNavigationBar from "@/components/SpecialistNavigationBar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { useState } from "react";
import { useLocation } from "wouter";

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
          <Route component={NotFound} />
        </Switch>
      </main>
      
      <Footer {...getFooterProps()} />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
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
