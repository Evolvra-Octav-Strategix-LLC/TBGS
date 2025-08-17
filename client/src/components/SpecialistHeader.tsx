import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { Search } from "lucide-react";
import SimpleSearchDropdown from "./SimpleSearchDropdown";

interface SpecialistHeaderProps {
  specialist: "TDS" | "TSS" | "TOS" | "TBS";
  logo: string;
  companyName: string;
  tagline: string;
  primaryColor: string;
  hoverColor: string;
  onOpenContactModal: () => void;
}

export default function SpecialistHeader({ 
  specialist, 
  logo, 
  companyName, 
  tagline, 
  primaryColor, 
  hoverColor, 
  onOpenContactModal 
}: SpecialistHeaderProps) {
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

  // Listen for close mobile menu events from search results
  useEffect(() => {
    const handleCloseMobileMenu = () => {
      setIsMobileMenuOpen(false);
    };

    window.addEventListener('closeMobileMenu', handleCloseMobileMenu);
    return () => window.removeEventListener('closeMobileMenu', handleCloseMobileMenu);
  }, []);

  const getSpecialistPath = () => {
    switch(specialist) {
      case "TDS": return "/totaal-dak-specialist";
      case "TSS": return "/totaal-schoorsteen-specialist";
      case "TOS": return "/totaal-onderhoud-specialist";
      case "TBS": return "/totaal-bouw-specialist";
      default: return "/";
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full max-w-screen-2xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Specialist Logo */}
          <Link href={getSpecialistPath()} className="flex-shrink-0">
            <div className="flex items-center space-x-3 cursor-pointer">
              <img src={logo} alt={`${companyName} Logo`} className="w-12 h-12 object-contain" />
              <div>
                <h1 className={`text-xs sm:text-sm md:text-base lg:text-lg font-bold ${primaryColor} whitespace-nowrap`}>{companyName}</h1>
                <p className="text-xs text-gray-600">{tagline}</p>
              </div>
            </div>
          </Link>



          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10 flex-shrink-0">
            <Link href="/locaties" className={`text-gray-700 hover:${primaryColor} font-medium transition-colors whitespace-nowrap`}>Locaties</Link>
            <Link href="/kennisbank" className={`text-gray-700 hover:${primaryColor} font-medium transition-colors whitespace-nowrap`}>Kennisbank</Link>
            <Link href="/onze-projecten" className={`text-gray-700 hover:${primaryColor} font-medium transition-colors whitespace-nowrap`}>Onze projecten</Link>
            <Link href="/over-ons" className={`text-gray-700 hover:${primaryColor} font-medium transition-colors whitespace-nowrap`}>Over Ons</Link>
            <Link href="/contact" className={`text-gray-700 hover:${primaryColor} font-medium transition-colors whitespace-nowrap`}>Contact</Link>
          </nav>

          {/* Desktop Search */}
          <div className="hidden xl:flex items-center relative flex-1 max-w-sm mx-6">
            <div className="bg-white rounded-full shadow-md px-4 py-2 w-full border border-gray-100">
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
            <button 
              onClick={onOpenContactModal}
              className={`${primaryColor.replace('text-', 'bg-')} text-white px-4 py-2 rounded-lg font-semibold hover:${hoverColor.replace('text-', 'bg-')} transition-colors text-sm whitespace-nowrap`}
            >
              Gratis Offerte
            </button>
          </div>

          {/* Mobile CTA Button and Menu */}
          <div className="lg:hidden flex items-center space-x-2">
            <button 
              onClick={onOpenContactModal}
              className={`${primaryColor.replace('text-', 'bg-')} text-white px-3 py-2 rounded-lg font-semibold hover:${hoverColor.replace('text-', 'bg-')} transition-colors text-sm`}
            >
              Offerte
            </button>
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
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Mobile Menu Panel */}
          <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <img src={logo} alt={`${companyName} Logo`} className="w-10 h-10 object-contain" />
                  <div>
                    <h3 className={`text-sm font-bold ${primaryColor} leading-tight`}>{companyName}</h3>
                    <p className="text-xs text-gray-600">Menu</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`p-2 text-gray-700 hover:${primaryColor.replace('text-', 'text-')} transition-colors`}
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>

              {/* Menu Content */}
              <div className="flex-1 overflow-y-auto">
                {/* Mobile Search */}
                <div className="p-6 border-b border-gray-200">
                  <div className="relative">
                    <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors ${
                      isSearchFocused ? primaryColor : 'text-gray-400'
                    }`} />
                    <input
                      ref={mobileSearchInputRef}
                      type="text"
                      placeholder="Zoek in kennisbank, locaties..."
                      value={searchQuery}
                      onChange={(e) => handleSearchChange(e.target.value)}
                      onFocus={handleSearchFocus}
                      onBlur={handleSearchBlur}
                      className={`pl-10 pr-4 py-3 w-full border rounded-lg transition-all duration-200 focus:outline-none ${
                        isSearchFocused 
                          ? `border-tbgs-navy ring-2 ring-tbgs-navy/20`
                          : 'border-gray-300'
                      }`}
                    />
                    <SimpleSearchDropdown
                      isVisible={showSearchDropdown}
                      onClose={closeSearchDropdown}
                      searchQuery={searchQuery}
                      onSearchChange={handleSearchChange}
                    />
                  </div>
                </div>

                <nav className="flex flex-col p-6 space-y-6">
                  <Link 
                    href="/locaties" 
                    className={`text-gray-700 hover:${primaryColor} font-medium transition-colors py-3 border-b border-gray-100 flex items-center`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fas fa-map-marker-alt mr-4 w-5"></i>
                    Locaties
                  </Link>
                  <Link 
                    href="/kennisbank" 
                    className={`text-gray-700 hover:${primaryColor} font-medium transition-colors py-3 border-b border-gray-100 flex items-center`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fas fa-book mr-4 w-5"></i>
                    Kennisbank
                  </Link>
                  <Link 
                    href="/zorgeloos-wonen" 
                    className={`text-gray-700 hover:${primaryColor} font-medium transition-colors py-3 border-b border-gray-100 flex items-center`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fas fa-home mr-4 w-5"></i>
                    Zorgeloos wonen
                  </Link>
                  <Link 
                    href="/onze-projecten" 
                    className={`text-gray-700 hover:${primaryColor} font-medium transition-colors py-3 border-b border-gray-100 flex items-center`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fas fa-building mr-4 w-5"></i>
                    Onze projecten
                  </Link>
                  <Link 
                    href="/over-ons" 
                    className={`text-gray-700 hover:${primaryColor} font-medium transition-colors py-3 border-b border-gray-100 flex items-center`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fas fa-users mr-4 w-5"></i>
                    Over Ons
                  </Link>
                  <Link 
                    href="/contact" 
                    className={`text-gray-700 hover:${primaryColor} font-medium transition-colors py-3 border-b border-gray-100 flex items-center`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fas fa-envelope mr-4 w-5"></i>
                    Contact
                  </Link>
                </nav>
              </div>

              {/* Menu Footer */}
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                {/* CTA Button */}
                <button 
                  onClick={() => {
                    onOpenContactModal();
                    setIsMobileMenuOpen(false);
                  }}
                  className={`${primaryColor.replace('text-', 'bg-')} text-white px-6 py-4 rounded-lg font-semibold hover:${hoverColor.replace('text-', 'bg-')} transition-colors w-full shadow-lg`}
                >
                  <i className="fas fa-calculator mr-2"></i>
                  Gratis Offerte
                </button>
              </div>
            </div>
          </div>
        </>
      )}


    </header>
  );
}