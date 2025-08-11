import { useState } from "react";
import { Link } from "wouter";
import tbgsLogo from "@assets/TBGS 545x642_1754935848756.png";

interface HeaderProps {
  onOpenContactModal: () => void;
}

export default function Header({ onOpenContactModal }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer">
              <img src={tbgsLogo} alt="TBGS Logo" className="w-12 h-12 object-contain" />
              <div>
                <h1 className="text-xl font-bold text-tbgs-navy">TBGS BV</h1>
                <p className="text-sm text-gray-600 whitespace-nowrap">Totaal Bouw Groep Specialisten</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#diensten" className="text-gray-700 hover:text-tbgs-navy font-medium transition-colors">Diensten</a>
            <Link href="/kennisbank" className="text-gray-700 hover:text-tbgs-navy font-medium transition-colors">Kennisbank</Link>
            <a href="#projecten" className="text-gray-700 hover:text-tbgs-navy font-medium transition-colors">Projecten</a>
            <a href="#over-ons" className="text-gray-700 hover:text-tbgs-navy font-medium transition-colors">Over Ons</a>
            <a href="#contact" className="text-gray-700 hover:text-tbgs-navy font-medium transition-colors">Contact</a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <button 
              onClick={onOpenContactModal}
              className="bg-tbgs-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Gratis Offerte
            </button>
          </div>

          {/* Mobile CTA Button and Menu */}
          <div className="lg:hidden flex items-center space-x-2">
            <button 
              onClick={onOpenContactModal}
              className="bg-tbgs-navy text-white px-3 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-sm"
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
                  <img src={tbgsLogo} alt="TBGS Logo" className="w-10 h-10 object-contain" />
                  <div>
                    <h3 className="font-bold text-tbgs-navy">TBGS BV</h3>
                    <p className="text-xs text-gray-600">Menu</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-700 hover:text-tbgs-navy transition-colors"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>

              {/* Menu Content */}
              <div className="flex-1 overflow-y-auto">
                <nav className="flex flex-col p-6 space-y-6">
                  <a 
                    href="#diensten" 
                    className="text-gray-700 hover:text-tbgs-navy font-medium transition-colors py-3 border-b border-gray-100 flex items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fas fa-cogs mr-4 w-5"></i>
                    Diensten
                  </a>
                  <Link 
                    href="/kennisbank" 
                    className="text-gray-700 hover:text-tbgs-navy font-medium transition-colors py-3 border-b border-gray-100 flex items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fas fa-book mr-4 w-5"></i>
                    Kennisbank
                  </Link>
                  <a 
                    href="#projecten" 
                    className="text-gray-700 hover:text-tbgs-navy font-medium transition-colors py-3 border-b border-gray-100 flex items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fas fa-briefcase mr-4 w-5"></i>
                    Projecten
                  </a>
                  <a 
                    href="#over-ons" 
                    className="text-gray-700 hover:text-tbgs-navy font-medium transition-colors py-3 border-b border-gray-100 flex items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fas fa-users mr-4 w-5"></i>
                    Over Ons
                  </a>
                  <a 
                    href="#contact" 
                    className="text-gray-700 hover:text-tbgs-navy font-medium transition-colors py-3 border-b border-gray-100 flex items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fas fa-envelope mr-4 w-5"></i>
                    Contact
                  </a>
                </nav>
              </div>

              {/* Menu Footer */}
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                {/* Phone Link */}
                <a 
                  href="tel:+31402026744" 
                  className="flex items-center text-tbgs-navy font-medium py-3 mb-4 hover:bg-gray-100 rounded-lg px-3 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <i className="fas fa-phone mr-4 w-5"></i>
                  <span>040 202 6744</span>
                </a>
                
                {/* CTA Button */}
                <button 
                  onClick={() => {
                    onOpenContactModal();
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-tbgs-navy text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors w-full shadow-lg"
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
