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
  const [step, setStep] = useState<'services' | 'photo' | 'custom'>('services');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showFileOptions, setShowFileOptions] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [deviceType, setDeviceType] = useState<'mobile' | 'desktop'>('mobile');
  const formRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    setStep('photo');
  };

  const handleCustomRequest = () => {
    setSelectedService('Iets anders');
    setStep('photo');
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setSelectedFiles(files);
    setShowFileOptions(false);
  };

  const openFileOptions = () => {
    setShowFileOptions(true);
  };

  const openCamera = () => {
    if (fileInputRef.current) {
      fileInputRef.current.setAttribute('capture', 'environment');
      fileInputRef.current.click();
    }
    setShowFileOptions(false);
    // Auto advance to next step after file selection
    setTimeout(() => setStep('custom'), 500);
  };

  const openGallery = () => {
    if (fileInputRef.current) {
      fileInputRef.current.removeAttribute('capture');
      fileInputRef.current.click();
    }
    setShowFileOptions(false);
    // Auto advance to next step after file selection
    setTimeout(() => setStep('custom'), 500);
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
            ) : (
              <>
                <button
                  onClick={() => setStep('photo')}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-3"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-sm">Terug</span>
                </button>
                <h3 className="text-lg font-bold text-gray-900">
                  Details
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Beschrijf de klus zo duidelijk mogelijk. Hoe meer informatie je geeft, hoe beter wij je kunnen helpen.
                </p>
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
                <div className="flex flex-col items-center justify-center py-4 relative">
                  {/* Camera Interface Image */}
                  <div className="w-32 h-56 rounded-2xl overflow-hidden shadow-lg mb-6">
                    <img 
                      src={cameraImage} 
                      alt="Camera interface" 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Hidden File Input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />

                  {/* Selected Files Display */}
                  {selectedFiles.length > 0 && (
                    <div className="w-full mb-4">
                      <div className="text-sm font-medium text-gray-700 mb-2">
                        Geselecteerde foto's ({selectedFiles.length})
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {selectedFiles.slice(0, 6).map((file, index) => (
                          <div key={index} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-500 p-2">
                            {file.name.substring(0, 10)}...
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* File Options Popup - iOS Style */}
                  {showFileOptions && (
                    <div className="absolute inset-0 bg-black/50 flex items-end justify-center z-50 rounded-2xl">
                      <div className="bg-white rounded-t-3xl w-full max-w-sm mx-4 mb-4 shadow-2xl overflow-hidden">
                        {/* Header */}
                        <div className="px-6 py-4 border-b border-gray-100">
                          <div className="text-center text-lg font-medium text-gray-900">
                            Voeg een foto toe
                          </div>
                        </div>
                        
                        {/* Device-Specific Options */}
                        <div className="py-2">
                          {deviceType === 'mobile' ? (
                            <>
                              {/* Mobile Options */}
                              <button
                                onClick={openGallery}
                                className="w-full px-6 py-4 flex items-center space-x-4 hover:bg-gray-50 transition-colors"
                              >
                                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                </div>
                                <span className="text-lg text-gray-900">Foto's</span>
                              </button>
                              
                              <button
                                onClick={openCamera}
                                className="w-full px-6 py-4 flex items-center space-x-4 hover:bg-gray-50 transition-colors"
                              >
                                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                </div>
                                <span className="text-lg text-gray-900">Camera</span>
                              </button>
                              
                              <button
                                onClick={() => {
                                  if (fileInputRef.current) {
                                    fileInputRef.current.removeAttribute('capture');
                                    fileInputRef.current.setAttribute('accept', '*/*');
                                    fileInputRef.current.click();
                                  }
                                  setShowFileOptions(false);
                                  setTimeout(() => setStep('custom'), 500);
                                }}
                                className="w-full px-6 py-4 flex items-center space-x-4 hover:bg-gray-50 transition-colors"
                              >
                                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                </div>
                                <span className="text-lg text-gray-900">Bestanden</span>
                              </button>
                            </>
                          ) : (
                            <>
                              {/* Desktop Options */}
                              <button
                                onClick={openGallery}
                                className="w-full px-6 py-4 flex items-center space-x-4 hover:bg-gray-50 transition-colors"
                              >
                                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                </div>
                                <span className="text-lg text-gray-900">Computer bestanden</span>
                              </button>
                              
                              <button
                                onClick={openCamera}
                                className="w-full px-6 py-4 flex items-center space-x-4 hover:bg-gray-50 transition-colors"
                              >
                                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                  </svg>
                                </div>
                                <span className="text-lg text-gray-900">Webcam</span>
                              </button>
                              
                              <button
                                onClick={() => {
                                  if (fileInputRef.current) {
                                    fileInputRef.current.removeAttribute('capture');
                                    fileInputRef.current.setAttribute('accept', '*/*');
                                    fileInputRef.current.click();
                                  }
                                  setShowFileOptions(false);
                                  setTimeout(() => setStep('custom'), 500);
                                }}
                                className="w-full px-6 py-4 flex items-center space-x-4 hover:bg-gray-50 transition-colors"
                              >
                                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2V7zm0 0V5a2 0 012-2h6l2 2h6a2 2 0 012 2v2M7 13l3 3 7-7" />
                                  </svg>
                                </div>
                                <span className="text-lg text-gray-900">Bestandsverkenner</span>
                              </button>
                            </>
                          )}
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="p-4 space-y-3">
                          <button
                            onClick={() => setShowFileOptions(false)}
                            className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-2xl py-3 px-4 font-medium transition-colors"
                          >
                            Annuleren
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
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
                </div>
              </>
            )}
          </div>
          
          {/* Bottom Buttons */}
          {step === 'photo' && (
            <div className="p-4 border-t border-gray-200 space-y-3">
              <button
                onClick={openFileOptions}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-2xl py-3 px-4 font-medium transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2V7zm0 0V5a2 2 0 012-2h6l2 2h6a2 2 0 012 2v2M7 13l3 3 7-7" />
                </svg>
                <span>{deviceType === 'mobile' ? 'Foto\'s toevoegen' : 'Bestanden selecteren'}</span>
              </button>
              <button
                onClick={() => setStep('custom')}
                className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-2xl py-3 px-4 font-medium transition-all duration-200"
              >
                Overslaan
              </button>
            </div>
          )}
          
          {step === 'custom' && (
            <div className="p-4 border-t border-gray-200">
              <Link href="/gratis-offerte">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-2xl py-3 px-4 font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Volgende
                </button>
              </Link>
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