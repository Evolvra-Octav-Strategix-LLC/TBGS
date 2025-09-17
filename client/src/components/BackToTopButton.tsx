import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { useLocation } from "wouter";

interface BackToTopButtonProps {
  className?: string;
}

export default function BackToTopButton({ className = "" }: BackToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [location] = useLocation();

  // Get specialist colors based on current page
  const getSpecialistColors = () => {
    if (location === '/dak' || location.startsWith('/dak/')) {
      return 'from-tbgs-red to-red-600';
    }
    if (location === '/schoorsteen' || location.startsWith('/schoorsteen/')) {
      return 'from-tbgs-blue to-blue-600';
    }
    if (location === '/onderhoud' || location.startsWith('/onderhoud/')) {
      return 'from-green-500 to-green-600';
    }
    if (location === '/bouw' || location.startsWith('/bouw/')) {
      return 'from-yellow-400 to-yellow-500';
    }
    return 'from-tbgs-navy to-blue-600';
  };

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-3 left-3 z-40 bg-gradient-to-br ${getSpecialistColors()} text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 flex items-center justify-center group border border-white/20 ${className}`}
      aria-label="Terug naar boven"
      title="Terug naar boven"
    >
      <ChevronUp className="w-5 h-5 group-hover:animate-bounce" />
    </button>
  );
}