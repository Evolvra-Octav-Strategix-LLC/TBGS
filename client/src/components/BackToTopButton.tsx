import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

interface BackToTopButtonProps {
  className?: string;
}

export default function BackToTopButton({ className = "" }: BackToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

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
      className={`fixed bottom-3 left-3 z-40 bg-gray-600 hover:bg-gray-700 active:bg-gray-800 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center space-x-2 px-4 py-3 group cursor-pointer select-none ${className}`}
      aria-label="Terug naar boven"
      title="Terug naar boven"
      style={{ zIndex: 9999 }}
    >
      {/* Icon Container */}
      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
        <ChevronUp className="w-4 h-4" />
      </div>
      {/* Text */}
      <span className="text-sm font-medium whitespace-nowrap">Terug naar boven</span>
    </button>
  );
}