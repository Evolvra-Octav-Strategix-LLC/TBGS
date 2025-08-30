import { useState, useRef, useEffect } from 'react';
import { Link } from 'wouter';
import { X, MessageCircle, Home, Wrench, Hammer, Building2, Shield, Sun, AlertTriangle, Droplets } from 'lucide-react';
import cameraImage from '@assets/IMAGE 2025-08-29 21:02:58_1756494183898.jpg';
import { GooglePlacesInput } from './GooglePlacesInput';



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
  specialist?: "TDS" | "TSS" | "TOS" | "TBS";
}

export function FloatingServiceForm({ className = '', specialist }: FloatingServiceFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'services' | 'photo' | 'description' | 'custom'>('services');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [processedFiles, setProcessedFiles] = useState<{original: File, compressed: File, status: 'processing' | 'completed' | 'failed'}[]>([]);
  const [isProcessingFiles, setIsProcessingFiles] = useState(false);
  const [deviceType, setDeviceType] = useState<'mobile' | 'desktop'>('mobile');
  const [address, setAddress] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactPreference, setContactPreference] = useState('whatsapp');
  const [priority, setPriority] = useState('normal');
  const [phoneCountry, setPhoneCountry] = useState('nl');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [urgencyLevel, setUrgencyLevel] = useState<'normal' | 'urgent' | 'emergency'>('normal');
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [interactionCount, setInteractionCount] = useState(0);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const formRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Get specialist-specific colors
  const getSpecialistColors = () => {
    switch(specialist) {
      case "TDS": return { bg: "bg-tbgs-red", hoverBg: "hover:bg-red-700", activeBg: "active:bg-red-800" };
      case "TSS": return { bg: "bg-tbgs-blue", hoverBg: "hover:bg-blue-700", activeBg: "active:bg-blue-800" };
      case "TOS": return { bg: "bg-tbgs-green", hoverBg: "hover:bg-green-700", activeBg: "active:bg-green-800" };
      case "TBS": return { bg: "bg-tbgs-orange", hoverBg: "hover:bg-orange-700", activeBg: "active:bg-orange-800" };
      default: return { bg: "bg-tbgs-navy", hoverBg: "hover:bg-tbgs-blue", activeBg: "active:bg-blue-800" };
    }
  };

  const colors = getSpecialistColors();

  // Track time on page for urgency messaging
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeOnPage(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Track interactions for lead scoring
  const trackInteraction = () => {
    setInteractionCount(prev => prev + 1);
  };

  // Determine urgency messaging based on time and interactions
  const getUrgencyMessage = () => {
    if (timeOnPage > 180) { // 3 minutes
      return {
        level: 'emergency' as const,
        message: '⚡ SPOED: Gratis inspectie binnen 2 uur mogelijk!',
        color: 'bg-red-600 text-white'
      };
    } else if (timeOnPage > 60 || interactionCount > 3) { // 1 minute or high interaction
      return {
        level: 'urgent' as const,
        message: '🔥 ACTIE: Vandaag nog gratis inspectie - Beperkte plaatsen!',
        color: 'bg-orange-500 text-white'
      };
    }
    return {
      level: 'normal' as const,
      message: '✅ Gratis inspectie en advies op locatie',
      color: 'bg-green-100 text-green-800'
    };
  };

  const urgencyData = getUrgencyMessage();

  const handleSubmit = async () => {
    if (!firstName || !lastName || !email || !phone || !address || !projectDescription) {
      alert('Vul alle velden in');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Show immediate feedback for file processing
      if (selectedFiles.length > 0) {
        console.log(`🔄 Processing ${selectedFiles.length} files for upload...`);
      }
      // Create FormData object voor file uploads
      const formData = new FormData();
      
      // Add form fields
      formData.append('selectedService', selectedService || '');
      formData.append('address', address);
      formData.append('projectDescription', projectDescription);
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('email', email);
      formData.append('phone', `${phoneCountry === 'nl' ? '+31' : '+32'}${phone}`);
      formData.append('contactPreference', contactPreference);
      formData.append('photos', JSON.stringify(selectedFiles.map(file => file.name)));
      
      // Add pre-compressed files (ready for instant submission!)
      const filesToSubmit = processedFiles.length > 0 
        ? processedFiles.filter(p => p.status === 'completed').map(p => p.compressed)
        : selectedFiles;
        
      filesToSubmit.forEach((file, index) => {
        formData.append('files', file);
      });
      
      console.log(`🚀 Submitting ${filesToSubmit.length} pre-processed files (instant!)`);

      // Add urgency and lead scoring data
      formData.append('urgencyLevel', urgencyLevel);
      formData.append('timeOnPage', timeOnPage.toString());
      formData.append('interactionCount', interactionCount.toString());
      formData.append('leadScore', (interactionCount * 2 + Math.min(timeOnPage / 30, 10)).toString());

      console.log('FloatingServiceMenu: Submitting form data:', {
        selectedService: selectedService || '',
        address,
        firstName,
        lastName,
        email,
        phone: `${phoneCountry === 'nl' ? '+31' : '+32'}${phone}`,
        projectDescription
      });
      
      const startTime = Date.now();
      console.log('🚀 Starting fetch request at:', startTime);

      const response = await fetch('/api/service-request', {
        method: 'POST',
        // Don't set Content-Type header - FormData sets it automatically with boundary
        body: formData,
      });
      
      const fetchTime = Date.now();
      console.log('⚡ Fetch completed at:', fetchTime, 'Duration:', fetchTime - startTime, 'ms');

      if (!response.ok) {
        // Log the response for debugging
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(`Server fout: HTTP error! status: ${response.status}. Probeer het later opnieuw.`);
      }

      const result = await response.json();
      const endTime = Date.now();
      console.log('✅ Response parsed at:', endTime, 'Total duration:', endTime - startTime, 'ms');
      console.log('FloatingServiceMenu: API response:', result);

      if (result.success) {
        alert('Uw aanvraag is succesvol verzonden! We nemen binnen 24 uur contact met u op.');
        
        // Reset form and close menu
        setSelectedService('');
        setSelectedFiles([]);
        setProcessedFiles([]);
        setAddress('');
        setProjectDescription('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setContactPreference('whatsapp');
        setStep('services');
        setIsOpen(false); // Auto-close menu after successful submission
      } else {
        alert(result.message || 'Er is een fout opgetreden. Probeer het opnieuw.');
      }
    } catch (error) {
      console.error('FloatingServiceMenu submission error:', error);
      
      // Check if it's a network error
      if (error instanceof TypeError && error.message.includes('fetch')) {
        alert('Geen internetverbinding. Controleer uw verbinding en probeer opnieuw.');
      } else if (error instanceof Error && error.message.includes('HTTP error')) {
        alert(`Server fout: ${error.message}. Probeer het later opnieuw.`);
      } else {
        alert('Er is een fout opgetreden. Controleer uw internetverbinding en probeer opnieuw.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Detect device type and close form when clicking outside
  useEffect(() => {
    // Detect device type
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     ('ontouchstart' in window) || 
                     (window.innerWidth <= 768);
    setDeviceType(isMobile ? 'mobile' : 'desktop');

    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      
      // Don't close if clicking on Google Places dropdown elements
      if (target && (
        (target as Element).closest?.('.pac-container') ||
        (target as Element).classList?.contains('pac-item') ||
        (target as Element).classList?.contains('pac-matched')
      )) {
        return;
      }
      
      if (formRef.current && !formRef.current.contains(target)) {
        setIsOpen(false);
        setStep('services');
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen]);

  const toggleForm = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
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

  // Immediate compression when files are selected
  const compressImage = (file: File): Promise<File> => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        // Quick compression settings for speed
        const maxWidth = 1200;
        const maxHeight = 800;
        let { width, height } = img;
        
        if (width > maxWidth || height > maxHeight) {
          const aspectRatio = width / height;
          if (width > height) {
            width = maxWidth;
            height = width / aspectRatio;
          } else {
            height = maxHeight;
            width = height * aspectRatio;
          }
        }
        
        canvas.width = width;
        canvas.height = height;
        ctx?.drawImage(img, 0, 0, width, height);
        
        canvas.toBlob((blob) => {
          if (blob) {
            // Add "tbgs-" prefix to filename
            const originalName = file.name;
            const fileExtension = originalName.substring(originalName.lastIndexOf('.'));
            const baseName = originalName.substring(0, originalName.lastIndexOf('.'));
            const newFileName = `tbgs-${baseName}${fileExtension}`;
            
            const compressedFile = new File([blob], newFileName, {
              type: 'image/jpeg',
              lastModified: Date.now()
            });
            resolve(compressedFile);
          } else {
            resolve(file);
          }
        }, 'image/jpeg', 0.75);
      };
      
      img.src = URL.createObjectURL(file);
    });
  };

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const maxFileSize = 10 * 1024 * 1024; // 10MB per file
    
    const validFiles = files.filter(file => {
      if (file.size > maxFileSize) {
        alert(`Het bestand "${file.name}" is te groot. Maximum bestandsgrootte is 10MB.`);
        return false;
      }
      return true;
    });
    
    if (validFiles.length === 0) return;
    
    setSelectedFiles(prev => [...prev, ...validFiles].slice(0, 5));
    setIsProcessingFiles(true);
    
    console.log(`🔄 Starting immediate compression of ${validFiles.length} files...`);
    
    // Process each file immediately
    const newProcessedFiles = [];
    for (const file of validFiles) {
      try {
        const fileData = {original: file, compressed: file, status: 'processing' as const};
        setProcessedFiles(prev => [...prev, fileData]);
        
        if (file.type.startsWith('image/')) {
          const compressed = await compressImage(file);
          const compressionRatio = ((file.size - compressed.size) / file.size * 100).toFixed(1);
          console.log(`✅ Compressed ${file.name}: ${(file.size/1024).toFixed(1)}KB → ${(compressed.size/1024).toFixed(1)}KB (${compressionRatio}% reduction)`);
          
          fileData.compressed = compressed;
          fileData.status = 'completed';
        } else {
          fileData.status = 'completed';
        }
        
        newProcessedFiles.push(fileData);
        setProcessedFiles(prev => prev.map(p => p.original === file ? fileData : p));
      } catch (error) {
        console.error(`Failed to compress ${file.name}:`, error);
        const fileData = {original: file, compressed: file, status: 'failed' as const};
        newProcessedFiles.push(fileData);
        setProcessedFiles(prev => prev.map(p => p.original === file ? fileData : p));
      }
    }
    
    setIsProcessingFiles(false);
    console.log(`✅ All files processed and ready for instant submission!`);
  };

  const removeFile = (indexToRemove: number) => {
    const fileToRemove = selectedFiles[indexToRemove];
    setSelectedFiles(prev => prev.filter((_, index) => index !== indexToRemove));
    setProcessedFiles(prev => prev.filter(p => p.original !== fileToRemove));
  };

  // Track current step on body for CSS targeting and manage scroll locking
  useEffect(() => {
    document.body.setAttribute('data-step', step);
    
    // Manage body scroll locking for mobile
    if (isOpen) {
      document.body.classList.add('form-open');
    } else {
      document.body.classList.remove('form-open');
    }
    
    // If we're NOT on the description step, ensure no Google Places interference
    if (step !== 'description') {
      // Clean up any existing Google Places instances
      const pacContainers = document.querySelectorAll('.pac-container');
      pacContainers.forEach(container => container.remove());
    }

    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove('form-open');
    };
  }, [step, isOpen]);







  return (
    <div className={`fixed bottom-3 right-3 ${isOpen ? 'z-[100]' : 'z-40'} ${className}`} ref={formRef}>
      {/* Overlay - Much less fade */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/5 -z-10" />
      )}

      {/* Service Form Modal - More compact */}
      {isOpen && (
        <div className="floating-service-form absolute bottom-0 right-0 w-80 md:w-96 lg:w-[420px] max-w-[85vw] h-[85vh] max-h-[650px] md:max-h-[600px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300 flex flex-col relative z-[110]">
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
                  step === 'description' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  3
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step === 'custom' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  4
                </div>
              </div>
              
              {/* Close Button - Smaller and to the right */}
              <button
                onClick={(e) => toggleForm(e)}
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
                  <span className="text-lg font-bold">Project Details</span>
                </button>
                <p className="text-sm text-gray-600 mt-1">
                  Beschrijf je project en voeg het adres toe
                </p>
              </>
            ) : (
              <>
                <button
                  onClick={() => setStep('description')}
                  className="flex items-center space-x-3 text-gray-900 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-lg font-bold">Contactgegevens</span>
                </button>
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
                      
                      {/* Processing Status */}
                      {(isProcessingFiles || processedFiles.length > 0) && (
                        <div className="mt-4 w-full max-w-xs">
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                            <div className="text-center">
                              {isProcessingFiles ? (
                                <div className="flex items-center justify-center space-x-2">
                                  <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                  <span className="text-sm font-medium text-blue-700">Comprimeren...</span>
                                </div>
                              ) : (
                                <div className="flex items-center justify-center space-x-2">
                                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                  <span className="text-sm font-medium text-green-700">
                                    {processedFiles.filter(p => p.status === 'completed').length} bestanden klaar!
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
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
                  <div className="flex-1 space-y-4">
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-gray-800 mb-3">
                        Projectadres
                      </label>
                      <GooglePlacesInput
                        value={address}
                        onChange={setAddress}
                        placeholder="Typ je adres..."
                        className="w-full p-4 border-2 border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 bg-white shadow-sm"
                      />
                      <p className="text-xs text-gray-500 mt-2">Begin met typen voor adresuggesties</p>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-gray-800 mb-3">
                        Projectbeschrijving
                      </label>
                      <textarea
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        className="w-full h-32 p-4 border-2 border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 resize-none bg-white shadow-sm"
                        placeholder="Beschrijf je project in detail. Wat voor werk moet er gebeuren? Zijn er specifieke wensen of deadlines?"
                        autoComplete="off"
                        data-form-type="description"
                        id="description-input"
                        name="description"
                      />
                      <p className="text-xs text-gray-500 mt-2">Hoe meer details, hoe beter we kunnen helpen</p>
                    </div>
                  </div>
                  
                  {/* Next Button */}
                  <div className="mt-6">
                    <button
                      onClick={() => setStep('custom')}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <span>Naar contactgegevens</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Contact Form */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Voornaam
                      </label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                        placeholder="Jan"
                        autoComplete="nope"
                        id="firstName-input"
                        name="firstName"
                        data-form-type="name"
                        role="textbox"
                        aria-autocomplete="none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Achternaam
                      </label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                        placeholder="Jansen"
                        autoComplete="nope"
                        id="lastName-input"
                        name="lastName"
                        data-form-type="name"
                        role="textbox"
                        aria-autocomplete="none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mailadres
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      placeholder="Bijv. email@example.com"
                      autoComplete="nope"
                      id="email-input"
                      name="email"
                      data-form-type="email"
                      role="textbox"
                      aria-autocomplete="none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefoonnummer
                    </label>
                    <div className="flex">
                      <select
                        value={phoneCountry}
                        onChange={(e) => setPhoneCountry(e.target.value)}
                        className="flex items-center px-3 bg-gray-50 border border-r-0 border-gray-300 rounded-l-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      >
                        <option value="nl">🇳🇱 +31</option>
                        <option value="be">🇧🇪 +32</option>
                      </select>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="flex-1 p-3 border border-gray-300 rounded-r-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                        placeholder={phoneCountry === 'nl' ? '6 12 34 56 78' : '4 56 78 90 12'}
                        autoComplete="nope"
                        id="phone-input"
                        name="phone"
                        data-form-type="tel"
                        role="textbox"
                        aria-autocomplete="none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Voorkeur contact
                      </label>
                      <select
                        value={contactPreference}
                        onChange={(e) => setContactPreference(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      >
                        <option value="email">E-mail</option>
                        <option value="whatsapp">WhatsApp</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Prioriteit
                      </label>
                      <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      >
                        <option value="low">Laag</option>
                        <option value="normal">Normaal</option>
                        <option value="high">Hoog</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div>
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
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full ${isSubmitting ? 'bg-gray-400' : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'} text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>
                      Versturen...
                    </span>
                  </>
                ) : (
                  <>
                    <span>Aanvraag versturen</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
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
          className={`${colors.bg} ${colors.hoverBg} ${colors.activeBg} text-white rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 flex items-center justify-center space-x-3 px-4 py-3 group cursor-pointer select-none`}
          style={{ zIndex: 9999 }}
        >
          {/* Avatar Icon */}
          <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-4 h-4" />
          </div>
          {/* Text */}
          <span className="text-sm font-medium whitespace-nowrap">Offerte aanvragen</span>
        </button>
      )}
    </div>
  );
}