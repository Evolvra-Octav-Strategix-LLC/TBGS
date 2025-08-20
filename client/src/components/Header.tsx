import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { Search } from "lucide-react";
import tbgsLogo from "@assets/TBGS 545x642_1754935848756.png";
import SimpleSearchDropdown from "./SimpleSearchDropdown";

interface HeaderProps {
  onOpenContactModal: () => void;
}

export default function Header({ onOpenContactModal }: HeaderProps) {
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

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full max-w-screen-2xl mx-auto px-8 py-4 rounded-b-3xl bg-white">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center space-x-3 cursor-pointer">
              <img src={tbgsLogo} alt="TBGS Logo" className="w-12 h-12 object-contain" />
              <div>
                <h1 className="text-xl font-bold text-tbgs-navy">TBGS BV</h1>
                <p className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">Totaal Bouw Groep Specialisten</p>
              </div>
            </div>
          </Link>



          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10 flex-shrink-0">
            <Link href="/locaties" className="text-gray-700 hover:text-tbgs-navy font-medium transition-colors whitespace-nowrap">Locaties</Link>
            <Link href="/kennisbank" className="text-gray-700 hover:text-tbgs-navy font-medium transition-colors whitespace-nowrap">Kennisbank</Link>
            <Link href="/onze-projecten" className="text-gray-700 hover:text-tbgs-navy font-medium transition-colors whitespace-nowrap">Onze projecten</Link>
            <Link href="/over-ons" className="text-gray-700 hover:text-tbgs-navy font-medium transition-colors whitespace-nowrap">Over Ons</Link>
            <Link href="/contact" className="text-gray-700 hover:text-tbgs-navy font-medium transition-colors whitespace-nowrap">Contact</Link>
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
            <Link href="/offerte" className="bg-tbgs-navy text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-sm whitespace-nowrap">
              Gratis Offerte
            </Link>
          </div>

          {/* Mobile CTA Button and Menu */}
          <div className="lg:hidden flex items-center space-x-2">
            <Link href="/offerte" className="bg-tbgs-navy text-white px-3 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-sm">
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
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Mobile Menu Panel - 50% Width Clean Design */}
          <div className="fixed top-0 right-0 w-1/2 h-full bg-gradient-to-b from-blue-600 to-blue-700 z-50 lg:hidden transform transition-transform duration-300 ease-in-out shadow-2xl rounded-l-3xl">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center p-6 pt-16">
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
                    className={`pl-10 pr-4 py-3 w-full border rounded-lg transition-all duration-200 ${
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

              {/* Menu Content */}
              <div className="flex-1 px-6">
                <nav className="flex flex-col space-y-2">
                  <Link 
                    href="/locaties" 
                    className="text-white hover:text-gray-200 font-medium transition-colors py-4 text-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Locaties
                  </Link>
                  <Link 
                    href="/kennisbank" 
                    className="text-white hover:text-gray-200 font-medium transition-colors py-4 text-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Kennisbank
                  </Link>
                  <Link 
                    href="/zorgeloos-wonen" 
                    className="text-white hover:text-gray-200 font-medium transition-colors py-4 text-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Zorgeloos wonen
                  </Link>
                  <Link 
                    href="/onze-projecten" 
                    className="text-white hover:text-gray-200 font-medium transition-colors py-4 text-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Onze projecten
                  </Link>
                  <Link 
                    href="/over-ons" 
                    className="text-white hover:text-gray-200 font-medium transition-colors py-4 text-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Over ons
                  </Link>
                  <Link 
                    href="/contact" 
                    className="text-white hover:text-gray-200 font-medium transition-colors py-4 text-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>
              </div>

              {/* Menu Footer */}
              <div className="p-6 pb-12">
                {/* Phone Link */}
                <a 
                  href="tel:+31402026744" 
                  className="flex items-center text-white font-medium py-3 mb-4 hover:text-gray-200 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <i className="fas fa-phone mr-3 text-lg"></i>
                  <span className="text-lg">040 202 6744</span>
                </a>
                
                {/* CTA Button - Smaller and Cleaner */}
                <button 
                  onClick={() => {
                    onOpenContactModal();
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors w-full text-base shadow-md flex items-center justify-center"
                >
                  Gratis offerte <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </button>
                
                {/* Social Icons */}
                <div className="flex justify-center space-x-6 mt-6">
                  <a href="#" className="text-white hover:text-gray-200 transition-colors">
                    <i className="fab fa-facebook text-xl"></i>
                  </a>
                  <a href="#" className="text-white hover:text-gray-200 transition-colors">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                </div>
                
                {/* Language Flags */}
                <div className="flex justify-center space-x-4 mt-4">
                  <span className="text-xl">🇳🇱</span>
                  <span className="text-xl">🇬🇧</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}


    </header>
  );
}
