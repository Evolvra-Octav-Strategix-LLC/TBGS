import { useState, useRef, useEffect } from 'react';
import { Link } from 'wouter';
import { X, MessageCircle, Home, Wrench, Hammer, Building2, Shield, Sun, AlertTriangle, Droplets } from 'lucide-react';
import cameraImage from '@assets/IMG_2694_1755733684734.png';

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
  const [step, setStep] = useState<'services' | 'photo' | 'description' | 'custom'>('services');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [deviceType, setDeviceType] = useState<'mobile' | 'desktop'>('mobile');
  const [address, setAddress] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const formRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);

  // Detect device type and close form when clicking outside
  useEffect(() => {
    // Detect device type
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     ('ontouchstart' in window) || 
                     (window.innerWidth <= 768);
    setDeviceType(isMobile ? 'mobile' : 'desktop');

    function handleClickOutside(event: MouseEvent) {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setStep('services');
      }
    }

    if (isOpen) {
      // Disable body scroll when form is open
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Re-enable body scroll when form is closed
        document.body.style.overflow = 'unset';
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen]);

  const toggleForm = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setStep('services');
    } else {
      // Re-enable body scroll when closing form
      document.body.style.overflow = 'unset';
    }
  };

  const handleServiceSelect = (service: ServiceOption) => {
    setSelectedService(service.title);
    setStep('photo');
  };

  const handleCustomRequest = () => {
    setSelectedService('Iets anders');
    setStep('photo');
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setSelectedFiles(prev => [...prev, ...files].slice(0, 5)); // Limit to 5 files
  };

  const removeFile = (indexToRemove: number) => {
    setSelectedFiles(prev => prev.filter((_, index) => index !== indexToRemove));
  };





  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`} ref={formRef}>
      {/* Overlay - Much less fade */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/5 -z-10" />
      )}

      {/* Service Form Modal - Lower with matching padding */}
      {isOpen && (
        <div className="absolute -bottom-4 -right-4 w-96 max-w-[90vw] h-[600px] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300 flex flex-col">
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
                  step === 'photo' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  2
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step === 'custom' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
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
                <h3 className="text-lg font-bold text-blue-600 mb-3">
                  helpen?
                </h3>
                <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Gratis inspectie in 24u
                </div>
              </div>
            ) : step === 'photo' ? (
              <>
                <button
                  onClick={() => setStep('services')}
                  className="flex items-center space-x-3 text-gray-900 hover:text-gray-700 mb-3"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-lg font-bold">Voeg een foto toe</span>
                </button>
                <p className="text-sm text-gray-600 mt-1">
                  Voeg voor de volledigheid van je aanvraag een foto toe
                </p>
              </>
            ) : step === 'description' ? (
              <>
                <button
                  onClick={() => setStep('photo')}
                  className="flex items-center space-x-3 text-gray-900 hover:text-gray-700 mb-3"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-lg font-bold">Beschrijf je project</span>
                </button>
                <p className="text-sm text-gray-600 mt-1">
                  Vertel ons meer over je project
                </p>
              </>
            ) : (
              <>
                <button
                  onClick={() => setStep('description')}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-3"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-sm">Terug</span>
                </button>
                <h3 className="text-lg font-bold text-gray-900">
                  Vul je gegevens in
                </h3>
              </>
            )}
          </div>

          {/* Content */}
          <div className="px-4 pb-4 flex-1 overflow-y-auto">
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
            ) : step === 'photo' ? (
              <>
                {/* Photo Upload Section */}
                <div className="flex flex-col items-center justify-center py-4 min-h-[300px]">
                  {selectedFiles.length === 0 ? (
                    <>
                      {/* Camera Interface Image */}
                      <div 
                        onClick={() => {
                          if (fileInputRef.current) {
                            fileInputRef.current.removeAttribute('capture');
                            fileInputRef.current.click();
                          }
                        }}
                        className="w-32 h-56 rounded-2xl overflow-hidden shadow-lg mb-6 cursor-pointer hover:shadow-xl transition-shadow"
                      >
                        <img 
                          src={cameraImage} 
                          alt="Camera interface" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      

                    </>
                  ) : (
                    <>
                      {/* Photo Count Display */}
                      <div className="text-center mb-6">
                        <div className="text-3xl font-bold text-gray-900">
                          {selectedFiles.length} / 5 foto's
                        </div>
                      </div>

                      {/* Photo Grid */}
                      <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
                        {/* Display selected photos */}
                        {selectedFiles.slice(0, 5).map((file, index) => {
                          const imageUrl = URL.createObjectURL(file);
                          return (
                            <div key={index} className="aspect-square bg-gray-100 rounded-xl border-2 border-gray-200 relative overflow-hidden">
                              <img 
                                src={imageUrl} 
                                alt={`Preview ${index + 1}`}
                                className="w-full h-full object-cover"
                                onLoad={() => URL.revokeObjectURL(imageUrl)}
                              />
                              {/* Delete button */}
                              <button
                                onClick={() => removeFile(index)}
                                className="absolute top-1 right-1 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-xs transition-colors shadow-lg z-10"
                              >
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </div>
                          );
                        })}
                        
                        {/* Add more button if less than 5 photos */}
                        {selectedFiles.length < 5 && (
                          <div 
                            onClick={() => {
                              if (fileInputRef.current) {
                                fileInputRef.current.click();
                              }
                            }}
                            className="aspect-square bg-blue-50 border-2 border-dashed border-blue-300 rounded-xl flex items-center justify-center cursor-pointer hover:bg-blue-100 transition-colors"
                          >
                            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </>
                  )}

                  {/* Hidden File Input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </div>
              </>
            ) : step === 'description' ? (
              <>
                {/* Project Description Form */}
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Beschrijf je project
                      </label>
                      <textarea
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        className="w-full h-32 p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
                        placeholder="Vertel ons meer over je project. Wat voor werk moet er gebeuren? Wanneer zou je het graag uitgevoerd hebben?"
                      />
                    </div>
                  </div>
                  
                  {/* Next Button */}
                  <div className="mt-4">
                    <button
                      onClick={() => setStep('custom')}
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-xl transition-colors"
                    >
                      Volgende
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Contact Form */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Naam
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      placeholder="Naam"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mailadres
                    </label>
                    <input
                      type="email"
                      className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      placeholder="Bijv. email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefoonnummer
                    </label>
                    <div className="flex">
                      <div className="flex items-center px-3 bg-gray-50 border border-r-0 border-gray-300 rounded-l-xl">
                        <span className="text-lg">🇳🇱</span>
                        <span className="ml-1 text-sm text-gray-600">+31</span>
                      </div>
                      <input
                        type="tel"
                        className="flex-1 p-3 border border-gray-300 rounded-r-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                        placeholder="545 454 548"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Adres
                    </label>
                    <input
                      ref={addressInputRef}
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      placeholder="Bijv. Hoofdstraat 123, Amsterdam"
                    />
                  </div>

                  <div className="text-xs text-gray-500 text-center">
                    Door middel van je inschrijving ga je akkoord met onze{' '}
                    <span className="text-blue-500 underline">algemene voorwaarden</span> en ons{' '}
                    <span className="text-blue-500 underline">privacybeleid</span>.
                  </div>
                </div>
              </>
            )}
          </div>
          
          {/* Bottom Buttons */}
          {step === 'photo' && (
            <div className="p-4 border-t border-gray-200 space-y-3">
              <button
                onClick={() => {
                  if (fileInputRef.current) {
                    fileInputRef.current.removeAttribute('capture');
                    fileInputRef.current.click();
                  }
                }}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-2xl py-3 px-4 font-medium transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2V7zm0 0V5a2 2 0 012-2h6l2 2h6a2 2 0 012 2v2M7 13l3 3 7-7" />
                </svg>
                <span>{deviceType === 'mobile' ? 'Foto\'s toevoegen' : 'Bestanden selecteren'}</span>
              </button>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep('description')}
                  className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-2xl py-3 px-4 font-medium transition-all duration-200"
                >
                  Overslaan
                </button>
                {selectedFiles.length > 0 && (
                  <button
                    onClick={() => setStep('description')}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl py-3 px-4 font-medium transition-all duration-200"
                  >
                    Volgende
                  </button>
                )}
              </div>
            </div>
          )}
          
          {step === 'custom' && (
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={() => {
                  // Here you would normally submit the form data
                  setIsOpen(false);
                }}
                className="w-full bg-green-500 hover:bg-green-600 text-white rounded-2xl py-3 px-4 font-medium transition-all duration-200"
              >
                Volgende
              </button>
            </div>
          )}
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