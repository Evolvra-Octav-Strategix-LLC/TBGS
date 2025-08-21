import { useState, useRef, useEffect } from 'react';
import daklekkageImg from '@assets/IMG_2397_1755730855265.png';
import isolatieImg from '@assets/IMG_2398_1755730855265.png';
import bouwImg from '@assets/IMG_2399_1755732851714.png';
import onderhoudImg from '@assets/IMG_2400_1755732851715.png';
import heroImage from '@assets/IMG_2694_1755733684734.png';

interface FloatingServiceFormProps {
  className?: string;
}

interface ServiceOption {
  id: string;
  title: string;
  description: string;
  image: string;
  urgent?: boolean;
}

const serviceOptions: ServiceOption[] = [
  {
    id: 'daklekkage',
    title: 'Daklekkage',
    description: 'Urgent daklek reparatie binnen 24u',
    image: daklekkageImg,
    urgent: true
  },
  {
    id: 'dakisolatie',
    title: 'Dakisolatie',
    description: 'Professionele dak isolatie',
    image: isolatieImg
  },
  {
    id: 'dakonderhoud',
    title: 'Dakonderhoud',
    description: 'Preventief onderhoud en inspectie',
    image: onderhoudImg
  },
  {
    id: 'dakrenovatie',
    title: 'Dakrenovatie',
    description: 'Complete dak vernieuwing',
    image: bouwImg
  },
  {
    id: 'zonnepanelen',
    title: 'Zonnepanelen',
    description: 'Zonnepanelen installatie op dak',
    image: heroImage
  },
  {
    id: 'goot',
    title: 'Gootreparatie',
    description: 'Goot reiniging en reparatie',
    image: onderhoudImg
  }
];

export function FloatingServiceForm({ className = '' }: FloatingServiceFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'services' | 'photo' | 'custom'>('services');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [deviceType, setDeviceType] = useState<'mobile' | 'desktop'>('mobile');
  const formRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const checkDevice = () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setDeviceType(isMobile ? 'mobile' : 'desktop');
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        if (isOpen) {
          setIsOpen(false);
          setStep('services');
          setSelectedService(null);
          setSelectedFiles([]);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleServiceSelect = (serviceId: string) => {
    const service = serviceOptions.find(s => s.id === serviceId);
    setSelectedService(service?.title || null);
    setStep('photo');
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setSelectedFiles(files);
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`} ref={formRef}>
      {/* Overlay - Much less fade */}
      {isOpen && <div className="fixed inset-0 bg-black/10 z-40" />}
      
      {/* Floating Button or Form */}
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group"
        >
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="font-medium">Gratis Offerte</span>
          </div>
        </button>
      ) : (
        /* Form Card */
        <div className="bg-white rounded-2xl shadow-2xl w-96 h-[600px] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">Gratis Offerte</h3>
              <p className="text-blue-100 text-sm">
                {step === 'services' && 'Selecteer je service'}
                {step === 'photo' && 'Voeg foto\'s toe (optioneel)'}
                {step === 'custom' && 'Vertel ons meer'}
              </p>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                setStep('services');
                setSelectedService(null);
                setSelectedFiles([]);
              }}
              className="text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center p-4 bg-gray-50 border-b">
            <div className="flex items-center space-x-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step === 'services' ? 'bg-blue-500 text-white' : 'bg-blue-500 text-white'
              }`}>
                1
              </div>
              <div className={`w-12 h-0.5 ${step === 'photo' || step === 'custom' ? 'bg-blue-500' : 'bg-gray-300'}`} />
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step === 'photo' ? 'bg-blue-500 text-white' : step === 'custom' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                2
              </div>
              <div className={`w-12 h-0.5 ${step === 'custom' ? 'bg-blue-500' : 'bg-gray-300'}`} />
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step === 'custom' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                3
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="flex-1 overflow-y-auto">
            {step === 'services' ? (
              <>
                {/* Service Selection */}
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-3">
                    {serviceOptions.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => handleServiceSelect(service.id)}
                        className="p-3 border-2 border-gray-200 hover:border-blue-400 rounded-xl transition-all text-left group hover:shadow-md"
                      >
                        <div className="aspect-square bg-gray-100 rounded-lg mb-2 overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                        <div className="text-sm font-medium text-gray-900 mb-1">
                          {service.title}
                          {service.urgent && <span className="text-red-500 ml-1">🚨</span>}
                        </div>
                        <div className="text-xs text-gray-600 leading-relaxed">
                          {service.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : step === 'photo' ? (
              <>
                {/* Photo Upload Step */}
                <div className="p-4 space-y-4">
                  {/* Service Selection Display */}
                  {selectedService && (
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
                      <div className="text-sm font-medium text-blue-900">Geselecteerde service:</div>
                      <div className="text-sm text-blue-700">{selectedService}</div>
                    </div>
                  )}

                  {/* Photo Upload Instructions */}
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Voeg foto's toe</h4>
                    <p className="text-sm text-gray-600 mb-6">
                      Voor de volledigheid van je aanvraag een foto toe
                    </p>
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
              
              <div className="flex space-x-3 mt-3">
                <button
                  onClick={() => setStep('custom')}
                  className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-2xl py-3 px-4 font-medium transition-colors"
                >
                  Overslaan
                </button>
                <button
                  onClick={() => setStep('custom')}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl py-3 px-4 font-medium transition-colors"
                  disabled={selectedFiles.length === 0}
                >
                  Volgende
                </button>
              </div>
            </div>
          )}

          {/* Navigation Buttons for Services and Custom Steps */}
          {(step === 'services' || step === 'custom') && (
            <div className="p-4 border-t border-gray-200">
              {step === 'services' ? (
                <div className="text-center">
                  <button
                    onClick={() => setStep('photo')}
                    className="text-blue-500 hover:text-blue-600 text-sm font-medium"
                  >
                    Custom aanvraag →
                  </button>
                </div>
              ) : (
                <div className="flex space-x-3">
                  <button
                    onClick={() => setStep('photo')}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl py-3 px-4 font-medium transition-colors"
                  >
                    Terug
                  </button>
                  <button
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl py-3 px-4 font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Verstuur
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}