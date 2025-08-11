import { Link } from "wouter";

interface HeaderProps {
  onOpenContactModal: () => void;
}

export default function Header({ onOpenContactModal }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-tbgs-red via-tbgs-blue to-tbgs-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TBGS</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-tbgs-navy">TBGS</h1>
                <p className="text-sm text-gray-600">Bouw Groep Specialisten</p>
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-tbgs-navy font-medium transition-colors">Home</Link>
            <a href="#diensten" className="text-gray-700 hover:text-tbgs-navy font-medium transition-colors">Diensten</a>
            <a href="#projecten" className="text-gray-700 hover:text-tbgs-navy font-medium transition-colors">Projecten</a>
            <a href="#over-ons" className="text-gray-700 hover:text-tbgs-navy font-medium transition-colors">Over Ons</a>
            <a href="#contact" className="text-gray-700 hover:text-tbgs-navy font-medium transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <a href="tel:+31612345678" className="hidden md:flex items-center text-tbgs-navy">
              <i className="fas fa-phone mr-2"></i>
              <span className="font-semibold">+31 6 12 34 56 78</span>
            </a>
            <button 
              onClick={onOpenContactModal}
              className="bg-tbgs-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Gratis Offerte
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden text-gray-700">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
