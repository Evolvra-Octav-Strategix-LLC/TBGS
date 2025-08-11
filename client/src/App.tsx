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
import Header from "@/components/Header";
import SpecialistNavigationBar from "@/components/SpecialistNavigationBar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { useState } from "react";

function Router() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <SpecialistNavigationBar />
      <Header onOpenContactModal={() => setIsContactModalOpen(true)} />
      
      <main className="flex-1">
        <Switch>
          <Route path="/" component={() => <Home onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/totaal-dak-specialist" component={() => <TotaalDakSpecialist onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/totaal-schoorsteen-specialist" component={() => <TotaalSchoorsteenSpecialist onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/totaal-onderhoud-specialist" component={() => <TotaalOnderhoudSpecialist onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route path="/totaal-bouw-specialist" component={() => <TotaalBouwSpecialist onOpenContactModal={() => setIsContactModalOpen(true)} />} />
          <Route component={NotFound} />
        </Switch>
      </main>
      
      <Footer />
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
