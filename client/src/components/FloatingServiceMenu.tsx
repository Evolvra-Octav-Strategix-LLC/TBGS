import { useState, useRef, useEffect } from 'react';
import { Link } from 'wouter';
import { X, MessageCircle, Home, Wrench, Hammer, Building2, Shield, Sun, AlertTriangle, Droplets } from 'lucide-react';

interface ServiceOption {
  id: string;
  title: string;
  icon: any;
  href: string;
  description?: string;
}

const serviceOptions: ServiceOption[] = [
  {
    id: 'dakinspectie',
    title: 'Dakinspectie',
    icon: Home,
    href: '/diensten/dakinspectie',
    description: 'Professionele inspectie van uw dak'
  },
  {
    id: 'stormschade',
    title: 'Stormschade/lekkage',
    icon: AlertTriangle,
    href: '/diensten/stormschade',
    description: 'Spoedige reparatie van storm- en waterschade'
  },
  {
    id: 'pannendak',
    title: 'Pannendak',
    icon: Wrench,
    href: '/diensten/pannendak',
    description: 'Leggen en repareren van pannendaken'
  },
  {
    id: 'plat-dak',
    title: 'Plat dak',
    icon: Building2,
    href: '/diensten/plat-dak',
    description: 'Specialist in platte daken'
  },
  {
    id: 'dakisolatie',
    title: 'Dakisolatie',
    icon: Shield,
    href: '/diensten/dakisolatie',
    description: 'Energiebesparende dakisolatie'
  },
  {
    id: 'dakkapel',
    title: 'Dakkapel',
    icon: Building2,
    href: '/diensten/dakkapel',
    description: 'Plaatsing van dakkapellen'
  },
  {
    id: 'asbestsanering',
    title: 'Asbestsanering',
    icon: AlertTriangle,
    href: '/diensten/asbestsanering',
    description: 'Veilige verwijdering van asbest'
  },
  {
    id: 'dakgoten',
    title: 'Dakgoten en regenpijpen',
    icon: Droplets,
    href: '/diensten/dakgoten',
    description: 'Installatie en onderhoud'
  },
  {
    id: 'zonnepanelen',
    title: 'Zonnepanelen en meer',
    icon: Sun,
    href: '/diensten/zonnepanelen',
    description: 'Duurzame energie-oplossingen'
  }
];

interface FloatingServiceMenuProps {
  className?: string;
}

export function FloatingServiceMenu({ className = '' }: FloatingServiceMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'services' | 'custom'>('services');
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setStep('services');
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setStep('services');
    }
  };

  const handleServiceSelect = (service: ServiceOption) => {
    setIsOpen(false);
    setStep('services');
  };

  const handleCustomRequest = () => {
    setStep('custom');
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`} ref={menuRef}>
      {/* Full Screen Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />
      )}

      {/* Robust Full Screen Modal */}
      {isOpen && (
        <div className="fixed inset-4 bg-white rounded-3xl shadow-2xl z-50 flex flex-col max-w-md mx-auto my-auto h-fit">
          {/* Header */}
          <div className="relative p-6 pb-4">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 w-8 h-8 text-gray-400 hover:text-gray-600 flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            {step === 'services' ? (
              <div className="text-center pr-8">
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  Waar kunnen wij je mee
                </h2>
                <h2 className="text-xl font-bold text-blue-600 mb-6">
                  helpen?
                </h2>
                
                {/* Expert Button */}
                <div className="bg-blue-600 text-white rounded-2xl py-4 px-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-base font-semibold">Expert op locatie</div>
                    <div className="text-sm opacity-90">Gratis inspectie binnen 24u</div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <button
                  onClick={() => setStep('services')}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-4"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-sm">Terug</span>
                </button>
                <h2 className="text-xl font-bold text-gray-900">
                  Vertel ons meer
                </h2>
                <p className="text-gray-600 mt-2">
                  Beschrijf de klus zo duidelijk mogelijk
                </p>
              </>
            )}
          </div>

          {/* Content */}
          <div className="px-6 pb-6 flex-1 overflow-y-auto">
            {step === 'services' ? (
              <>
                {/* Service Grid - Clean 2x4 layout */}
                <div className="grid grid-cols-2 gap-4">
                  {serviceOptions.map((service) => (
                    <Link
                      key={service.id}
                      href={service.href}
                      onClick={() => handleServiceSelect(service)}
                      className="group"
                    >
                      <div className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-2xl p-6 text-center transition-all duration-200 hover:shadow-lg cursor-pointer h-32 flex flex-col items-center justify-center">
                        <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                          <service.icon className="w-10 h-10 text-gray-700" />
                        </div>
                        <div className="text-sm font-medium text-gray-900 leading-tight">
                          {service.title}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Iets Anders Button */}
                <button
                  onClick={handleCustomRequest}
                  className="w-full mt-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-2xl p-4 text-center transition-all duration-200 hover:shadow-lg flex items-center justify-center space-x-3"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 11l3 3L22 4M6 21h-6v-6l15-15" />
                  </svg>
                  <span className="text-base font-medium text-gray-900">Iets anders</span>
                </button>
              </>
            ) : (
              <>
                {/* Custom Request Form */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-base font-medium text-gray-700 mb-3">
                      Beschrijf je probleem
                    </label>
                    <textarea
                      className="w-full p-4 border border-gray-200 rounded-2xl text-base resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      placeholder="Bijv. Ik wil graag..."
                      maxLength={250}
                    />
                    <div className="text-sm text-gray-500 mt-2 text-right">
                      Maximaal 250 tekens
                    </div>
                  </div>

                  <Link href="/gratis-offerte">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-2xl py-4 px-6 font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Volgende
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Floating Action Button - Only show when closed */}
      {!isOpen && (
        <button
          onClick={toggleMenu}
          type="button"
          className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center space-x-3 px-5 py-3 group cursor-pointer select-none"
          style={{ zIndex: 9999 }}
        >
          {/* Avatar Icon */}
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-4 h-4" />
          </div>
          {/* Text */}
          <span className="text-sm font-medium whitespace-nowrap">Offerte aanvragen</span>
        </button>
      )}
    </div>
  );
}