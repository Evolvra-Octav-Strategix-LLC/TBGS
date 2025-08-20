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
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10" />
      )}

      {/* Menu Modal */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 max-w-[90vw] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-tbgs-navy to-blue-600 text-white p-6 relative">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            {step === 'services' ? (
              <>
                <h3 className="text-lg font-bold mb-2">
                  Waar kunnen wij je mee helpen?
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Expert op locatie</div>
                    <div className="text-xs opacity-90">Gratis inspectie binnen 24u</div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={() => setStep('services')}
                  className="flex items-center space-x-2 text-white/90 hover:text-white mb-3"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-sm">Terug</span>
                </button>
                <h3 className="text-lg font-bold">
                  Vertel ons meer
                </h3>
                <p className="text-sm opacity-90 mt-1">
                  Beschrijf de klus zo duidelijk mogelijk
                </p>
              </>
            )}
          </div>

          {/* Content */}
          <div className="p-4 max-h-96 overflow-y-auto">
            {step === 'services' ? (
              <>
                {/* Service Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {serviceOptions.map((service) => (
                    <Link
                      key={service.id}
                      href={service.href}
                      onClick={() => handleServiceSelect(service)}
                      className="group"
                    >
                      <div className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl p-4 text-center transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
                        <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow">
                          <service.icon className="w-6 h-6 text-slate-700" />
                        </div>
                        <div className="text-sm font-medium text-slate-900 leading-tight">
                          {service.title}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Custom Option */}
                <button
                  onClick={handleCustomRequest}
                  className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl p-4 text-center transition-all duration-200 hover:shadow-md flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 11l3 3L22 4M6 21h-6v-6l15-15" />
                  </svg>
                  <span className="text-sm font-medium text-slate-900">Iets anders</span>
                </button>
              </>
            ) : (
              <>
                {/* Custom Request Form */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Beschrijf je probleem
                    </label>
                    <textarea
                      className="w-full p-3 border border-slate-200 rounded-xl text-sm resize-none h-24 focus:outline-none focus:ring-2 focus:ring-tbgs-navy/20 focus:border-tbgs-navy"
                      placeholder="Bijv. Ik wil graag..."
                      maxLength={250}
                    />
                    <div className="text-xs text-slate-500 mt-1 text-right">
                      Maximaal 250 tekens
                    </div>
                  </div>

                  <Link href="/gratis-offerte">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-2xl py-3 px-4 font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
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

      {/* Floating Action Button */}
      <button
        onClick={toggleMenu}
        className={`w-14 h-14 bg-gradient-to-r from-tbgs-navy to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group ${
          isOpen ? 'rotate-45' : ''
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        )}
      </button>

      {/* Pulse Animation Ring */}
      {!isOpen && (
        <div className="absolute inset-0 w-14 h-14 rounded-full bg-tbgs-navy/30 animate-ping" />
      )}
    </div>
  );
}