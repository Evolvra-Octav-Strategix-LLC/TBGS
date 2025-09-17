import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { Search } from "lucide-react";
import tbgsLogo from "@assets/TBGS 545x642_1754935848756.png";
import SimpleSearchDropdown from "./SimpleSearchDropdown";

interface HeaderProps {
  onOpenContactModal: () => void;
  specialist?: "TDS" | "TSS" | "TOS" | "TBS";
}

export default function Header({ onOpenContactModal, specialist }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
    setShowSearchDropdown(true);
  };

  const handleSearchBlur = () => {
    // Delay hiding dropdown to allow for clicks
    setTimeout(() => {
      setIsSearchFocused(false);
      setShowSearchDropdown(false);
    }, 200);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    if (value.trim().length > 0) {
      setShowSearchDropdown(true);
    }
  };

  const closeSearchDropdown = () => {
    setShowSearchDropdown(false);
    setSearchQuery("");
    if (searchInputRef.current) searchInputRef.current.blur();
    if (mobileSearchInputRef.current) mobileSearchInputRef.current.blur();
  };

  // Get specialist-specific tagline
  const getSpecialistTagline = () => {
    switch(specialist) {
      case "TDS": return "Dak";
      case "TSS": return "Schoorsteen";
      case "TOS": return "Onderhoud";
      case "TBS": return "Bouw";
      default: return "Totaal Bouw Groep Specialisten";
    }
  };

  // Get specialist-specific colors
  const getSpecialistColors = () => {
    switch(specialist) {
      case "TDS": return { primary: "text-tbgs-red", hover: "hover:text-red-700", bg: "bg-tbgs-red", hoverBg: "hover:bg-red-700" };
      case "TSS": return { primary: "text-tbgs-blue", hover: "hover:text-blue-700", bg: "bg-tbgs-blue", hoverBg: "hover:bg-blue-700" };
      case "TOS": return { primary: "text-tbgs-green", hover: "hover:text-green-700", bg: "bg-tbgs-green", hoverBg: "hover:bg-green-700" };
      case "TBS": return { primary: "text-tbgs-orange", hover: "hover:text-orange-700", bg: "bg-tbgs-orange", hoverBg: "hover:bg-orange-700" };
      default: return { primary: "text-tbgs-navy", hover: "hover:text-tbgs-navy", bg: "bg-tbgs-navy", hoverBg: "hover:bg-blue-800" };
    }
  };

  // Get specialist-specific mobile menu background
  const getMobileMenuBackground = () => {
    switch(specialist) {
      case "TDS": return "from-tbgs-red to-red-700";
      case "TSS": return "from-tbgs-blue to-blue-700";
      case "TOS": return "from-tbgs-green to-green-700";
      case "TBS": return "from-tbgs-orange to-orange-700";
      default: return "from-tbgs-navy to-blue-700";
    }
  };

  const colors = getSpecialistColors();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Listen for close mobile menu events from search results
  useEffect(() => {
    const handleCloseMobileMenu = () => {
      setIsMobileMenuOpen(false);
    };

    window.addEventListener('closeMobileMenu', handleCloseMobileMenu);
    return () => window.removeEventListener('closeMobileMenu', handleCloseMobileMenu);
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 rounded-b-3xl">
      <div className="w-full max-w-screen-2xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center space-x-3 cursor-pointer">
              <img src={tbgsLogo} alt="TBGS Logo" className="w-12 h-12 object-contain" />
              <div>
                <h1 className="text-xl font-bold text-tbgs-navy">TBGS BV</h1>
                <p className={`text-xs sm:text-sm whitespace-nowrap font-medium ${specialist ? colors.primary : 'text-gray-600'}`}>{getSpecialistTagline()}</p>
              </div>
            </div>
          </Link>



          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10 flex-shrink-0">
            <Link href="/locaties" className={`text-gray-700 ${colors.hover} font-medium transition-colors whitespace-nowrap`}>Locaties</Link>
            <Link href="/kennisbank" className={`text-gray-700 ${colors.hover} font-medium transition-colors whitespace-nowrap`}>Kennisbank</Link>
            <Link href="/onze-projecten" className={`text-gray-700 ${colors.hover} font-medium transition-colors whitespace-nowrap`}>Onze projecten</Link>
            <Link href="/over-ons" className={`text-gray-700 ${colors.hover} font-medium transition-colors whitespace-nowrap`}>Over Ons</Link>
            <Link href="/contact" className={`text-gray-700 ${colors.hover} font-medium transition-colors whitespace-nowrap`}>Contact</Link>
          </nav>

          {/* Desktop Search */}
          <div className="hidden xl:flex items-center relative flex-1 max-w-sm mx-6">
            <div className={`bg-white rounded-full shadow-lg px-4 py-2 w-full border-2 transition-all duration-300 ${
              isSearchFocused 
                ? 'border-blue-400 shadow-blue-100 ring-4 ring-blue-50' 
                : 'border-gray-200 hover:border-gray-300 hover:shadow-xl'
            }`}>
              <div className="relative">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors ${
                  isSearchFocused ? 'text-gray-600' : 'text-gray-400'
                }`} />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Waar kunnen we u mee helpen?"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                  className={`pl-10 pr-3 py-1 w-full bg-transparent text-gray-800 placeholder-gray-500 text-sm transition-all duration-200 focus:outline-none`}
                />
                <SimpleSearchDropdown
                  isVisible={showSearchDropdown}
                  onClose={closeSearchDropdown}
                  searchQuery={searchQuery}
                  onSearchChange={handleSearchChange}
                />
              </div>
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link href="/offerte" className={`${colors.bg} text-white px-4 py-2 rounded-lg font-semibold ${colors.hoverBg} transition-colors text-sm whitespace-nowrap`}>
              Gratis offerte
            </Link>
          </div>

          {/* Mobile CTA Button and Menu */}
          <div className="lg:hidden flex items-center space-x-2">
            <Link href="/offerte" className={`${colors.bg} text-white px-3 py-2 rounded-lg font-semibold ${colors.hoverBg} transition-colors text-sm`}>
              Offerte
            </Link>
            <button 
              className="text-gray-700 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Navigation Overlay */}
      <>
        {/* Backdrop */}
        <div 
          className={`fixed inset-0 bg-black z-40 lg:hidden transition-opacity duration-300 ease-in-out ${
            isMobileMenuOpen ? 'bg-opacity-20 pointer-events-auto' : 'bg-opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Mobile Menu Panel - 60% Width Clean Design */}
        <div className={`fixed top-0 right-0 w-3/5 h-full bg-gradient-to-b ${getMobileMenuBackground()} z-50 lg:hidden shadow-2xl rounded-l-3xl transition-all duration-500 ease-out ${
          isMobileMenuOpen 
            ? 'transform translate-x-0 opacity-100 scale-100' 
            : 'transform translate-x-full opacity-0 scale-95'
        }`}>
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center p-6 pt-12">
                <Link 
                  href="/" 
                  className="flex items-center space-x-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <img src={tbgsLogo} alt="TBGS Logo" className="w-12 h-12 object-contain" />
                  <div>
                    <h3 className="font-bold text-white text-lg">TBGS BV</h3>
                    <div className="w-16 h-0.5 bg-white mt-1"></div>
                  </div>
                </Link>
              </div>

              {/* Mobile Search */}
              <div className="px-6 pb-6">
                <div className="relative">
                  <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors ${
                    isSearchFocused ? 'text-blue-600' : 'text-gray-400'
                  }`} />
                  <input
                    ref={mobileSearchInputRef}
                    type="text"
                    placeholder="Zoek in kennisbank, locaties..."
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    onFocus={handleSearchFocus}
                    onBlur={handleSearchBlur}
                    className={`pl-10 pr-4 py-3 w-full border rounded-lg transition-all duration-200 text-sm ${
                      isSearchFocused 
                        ? 'border-blue-600 ring-2 ring-blue-600/20' 
                        : 'border-gray-300'
                    } focus:outline-none bg-white`}
                  />
                  <SimpleSearchDropdown
                    isVisible={showSearchDropdown}
                    onClose={closeSearchDropdown}
                    searchQuery={searchQuery}
                    onSearchChange={handleSearchChange}
                  />
                </div>
              </div>

              {/* Menu Content - Scrollable */}
              <div className="flex-1 overflow-y-auto px-6">
                <nav className="flex flex-col space-y-0 pb-2">
                  <Link 
                    href="/locaties" 
                    className="text-white hover:text-gray-200 font-medium transition-colors py-2 text-base"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Locaties
                  </Link>
                  <Link 
                    href="/kennisbank" 
                    className="text-white hover:text-gray-200 font-medium transition-colors py-2 text-base"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Kennisbank
                  </Link>
                  <Link 
                    href="/zorgeloos-wonen" 
                    className="text-white hover:text-gray-200 font-medium transition-colors py-2 text-base"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Zorgeloos wonen
                  </Link>
                  <Link 
                    href="/onze-projecten" 
                    className="text-white hover:text-gray-200 font-medium transition-colors py-2 text-base"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Onze projecten
                  </Link>
                  <Link 
                    href="/over-ons" 
                    className="text-white hover:text-gray-200 font-medium transition-colors py-2 text-base"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Over ons
                  </Link>
                  <Link 
                    href="/contact" 
                    className="text-white hover:text-gray-200 font-medium transition-colors py-2 text-base"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>
              </div>

              {/* Menu Footer - Compact */}
              <div className="p-4 pb-6">
                {/* Phone Link */}
                <a 
                  href="tel:+31402026744" 
                  className="flex items-center text-white font-medium py-2 mb-3 hover:text-gray-200 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <i className="fas fa-phone mr-3 text-base"></i>
                  <span className="text-base">040 202 6744</span>
                </a>
                
                {/* CTA Button */}
                <button 
                  onClick={() => {
                    onOpenContactModal();
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-tbgs-green text-white px-4 py-2.5 rounded-lg font-medium hover:bg-green-700 transition-colors w-full text-sm shadow-md flex items-center justify-center"
                >
                  Gratis offerte <i className="fas fa-arrow-right ml-2 text-xs"></i>
                </button>
                
                {/* Social Icons */}
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="#" className="text-white hover:text-gray-200 transition-colors">
                    <i className="fab fa-facebook text-lg"></i>
                  </a>
                  <a href="#" className="text-white hover:text-gray-200 transition-colors">
                    <i className="fab fa-instagram text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>


    </header>
  );
}
