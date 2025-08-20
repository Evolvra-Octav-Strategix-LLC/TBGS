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

interface FloatingServiceFormProps {
  className?: string;
}

export function FloatingServiceForm({ className = '' }: FloatingServiceFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'services' | 'custom'>('services');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // Close form when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setStep('services');
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const toggleForm = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setStep('services');
    }
  };

  const handleServiceSelect = (service: ServiceOption) => {
    setSelectedService(service.title);
    setStep('custom');
  };

  const handleCustomRequest = () => {
    setSelectedService('Iets anders');
    setStep('custom');
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`} ref={formRef}>
      {/* Overlay - Much less fade */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/5 -z-10" />
      )}

      {/* Service Form Modal - Lower with matching padding */}
      {isOpen && (
        <div className="absolute -bottom-4 -right-4 w-96 max-w-[90vw] max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300 flex flex-col">
          {/* Header with Step Indicator */}
          <div className="relative p-4 border-b border-gray-200">
            {/* Step Indicators and Close Button */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center justify-center space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step === 'services' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  1
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step === 'custom' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  2
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium bg-gray-300 text-gray-600">
                  3
                </div>
              </div>
              
              {/* Close Button - Smaller and to the right */}
              <button
                onClick={toggleForm}
                className="w-6 h-6 text-gray-400 hover:text-gray-600 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            {step === 'services' ? (
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Waar kunnen wij je mee
                </h3>
                <h3 className="text-lg font-bold text-blue-600 mb-4">
                  helpen?
                </h3>
              </div>
            ) : (
              <>
                <button
                  onClick={() => setStep('services')}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-3"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-sm">Terug</span>
                </button>
                <h3 className="text-lg font-bold text-gray-900">
                  Vertel ons meer
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Beschrijf de klus zo duidelijk mogelijk
                </p>
              </>
            )}
          </div>

          {/* Content */}
          <div className="p-4 flex-1 overflow-y-auto">
            {step === 'services' ? (
              <>
                {/* Service Grid - 2 columns with proper spacing */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {serviceOptions.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceSelect(service)}
                      className="group"
                    >
                      <div className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-3xl p-4 text-center transition-all duration-200 hover:shadow-md cursor-pointer h-28 flex flex-col items-center justify-center">
                        <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center">
                          <service.icon className="w-8 h-8 text-gray-700" />
                        </div>
                        <div className="text-sm font-medium text-gray-900 leading-tight">
                          {service.title}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Custom Option - Full width button */}
                <button
                  onClick={handleCustomRequest}
                  className="w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-3xl p-4 text-center transition-all duration-200 hover:shadow-md flex items-center justify-center space-x-2 h-14"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 11l3 3L22 4M6 21h-6v-6l15-15" />
                  </svg>
                  <span className="text-sm font-medium text-gray-900">Iets anders</span>
                </button>
              </>
            ) : (
              <>
                {/* Selected Service Display */}
                {selectedService && (
                  <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-xl">
                    <div className="text-sm font-medium text-blue-900">Geselecteerde service:</div>
                    <div className="text-sm text-blue-700">{selectedService}</div>
                  </div>
                )}

                {/* Custom Request Form */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Beschrijf je probleem
                    </label>
                    <textarea
                      className="w-full p-3 border border-gray-200 rounded-xl text-sm resize-none h-24 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      placeholder="Bijv. Ik wil graag..."
                      maxLength={250}
                    />
                    <div className="text-xs text-gray-500 mt-1 text-right">
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

      {/* Floating Action Button - Only show when closed */}
      {!isOpen && (
        <button
          onClick={toggleForm}
          type="button"
          className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center space-x-2 px-4 py-3 group cursor-pointer select-none"
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