import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { GooglePlacesInput } from "@/components/GooglePlacesInput";
import { MultiStepForm } from "@/components/MultiStepForm";
import { Upload, X, FileText, Camera, FileImage } from "lucide-react";
import tdsLogo from "@assets/TDS 545x642 (1)_1755096847747.png";
import tssLogo from "@assets/TSS 545x642 (1)_1755096878001.png";
import tosLogo from "@assets/TOS 545x642 (1)_1755096847747.png";
import tbsLogo from "@assets/TBS 545x642 (1)_1755096847747.png";

const formSchema = z.object({
  serviceType: z.string().min(1, "Selecteer een servicetype"),
  specialisme: z.string().min(1, "Selecteer een specialist"),
  projectType: z.string().optional(),
  firstName: z.string().min(1, "Voornaam is verplicht"),
  lastName: z.string().min(1, "Achternaam is verplicht"),
  email: z.string().email("Ongeldig e-mailadres"),
  phone: z.string().min(10, "Telefoonnummer is verplicht"),
  location: z.string().min(1, "Locatie is verplicht"),
  description: z.string().min(10, "Beschrijving moet minimaal 10 karakters bevatten"),
  attachments: z.array(z.string()).optional(),
  urgent: z.boolean().default(false),
  privacy: z.boolean().refine((val) => val === true, "U moet akkoord gaan met de privacyverklaring"),
});

type OfferteFormData = z.infer<typeof formSchema>;

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [processedFiles, setProcessedFiles] = useState<{original: File, compressed: File, status: 'processing' | 'completed' | 'failed'}[]>([]);
  const [isProcessingFiles, setIsProcessingFiles] = useState(false);
  const [addressComponents, setAddressComponents] = useState<{
    street: string;
    houseNumber: string; 
    city: string;
    postcode: string;
    country: string;
  } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Handle scroll locking when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.top = `-${scrollY}px`;
      document.body.classList.add('modal-open');
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.classList.remove('modal-open');
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.top = '';
    };
  }, [isOpen]);

  const form = useForm<OfferteFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceType: "",
      specialisme: "",
      projectType: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      description: "",
      attachments: [],
      urgent: false,
      privacy: false,
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: OfferteFormData) => {
      // Create FormData for file uploads (same as FloatingServiceMenu)
      const formData = new FormData();
      
      // Add form fields
      formData.append('selectedService', data.serviceType + (data.projectType ? ` - ${data.projectType}` : ''));
      formData.append('serviceType', data.serviceType);
      formData.append('specialist', data.specialisme);
      formData.append('projectType', data.projectType || '');
      formData.append('address', data.location);
      formData.append('projectDescription', data.description);
      formData.append('firstName', data.firstName);
      formData.append('lastName', data.lastName);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('contactPreference', 'email'); // Default for modal form
      formData.append('photos', JSON.stringify(uploadedFiles.map((file, index) => `attachment_${index + 1}`)));
      
      // Add pre-compressed files (ready for instant submission!)
      const filesToSubmit = processedFiles.length > 0 
        ? processedFiles.filter(p => p.status === 'completed').map(p => p.compressed)
        : uploadedFiles;
        
      filesToSubmit.forEach((file, index) => {
        formData.append('files', file);
      });
      
      console.log(`🚀 Submitting ${filesToSubmit.length} pre-processed files (instant!)`);

      // Add urgency data
      formData.append('urgencyLevel', data.urgent ? 'urgent' : 'normal');
      formData.append('timeOnPage', '0');
      formData.append('interactionCount', '1');
      formData.append('leadScore', '3');
      
      // Add individual address components for better email subject formatting
      if (addressComponents) {
        formData.append('street', addressComponents.street);
        formData.append('houseNumber', addressComponents.houseNumber);
        formData.append('city', addressComponents.city);
        formData.append('postcode', addressComponents.postcode);
        formData.append('country', addressComponents.country);
      }

      const response = await fetch('/api/service-request', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        // Log the response for debugging
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(`Server fout: HTTP error! status: ${response.status}. Probeer het later opnieuw.`);
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || 'Er is een fout opgetreden');
      }

      return result;
    },
    onSuccess: () => {
      toast({
        title: "Bedankt voor uw aanvraag!",
        description: "Wij nemen binnen 24 uur contact met u op.",
      });
      form.reset();
      setUploadedFiles([]);
      setProcessedFiles([]);
      setAddressComponents(null);
      onClose();
    },
    onError: (error: Error) => {
      toast({
        title: "Er is een fout opgetreden",
        description: error.message || "Probeer het opnieuw of neem telefonisch contact op.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = () => {
    form.handleSubmit((data) => {
      // Show immediate feedback
      toast({
        title: "Bezig met verzenden...",
        description: "Uw aanvraag wordt verwerkt.",
      });
      submitMutation.mutate(data);
    })();
  };

  const serviceTypes = [
    { value: "offerte", label: "Gratis offerte", description: "Persoonlijke inspectie en gedetailleerde prijsopgave" },
    { value: "inspectie", label: "Gratis Inspectie", description: "Locatie bezoek voor analyse en advies" },
    { value: "spoedservice", label: "Spoedservice", description: "Dringende reparatie binnen 24 uur" },
    { value: "onderhoud", label: "Onderhoudscontract", description: "Jaarlijks preventief onderhoud" }
  ];

  const specialismen = [
    { value: "tds", label: "TDS - Totaal Dak Specialist", logo: tdsLogo, color: "bg-tbgs-red" },
    { value: "tss", label: "TSS - Totaal Schoorsteen Specialist", logo: tssLogo, color: "bg-tbgs-blue" },
    { value: "tos", label: "TOS - Totaal Onderhoud Specialist", logo: tosLogo, color: "bg-tbgs-green" },
    { value: "tbs", label: "TBS - Totaal Bouw Specialist", logo: tbsLogo, color: "bg-tbgs-orange" }
  ];

  const projectTypes = {
    tds: ["Dakvervanging", "Dakreparatie", "Dakisolatie", "Zonnepanelen", "Dakgoten", "Lekkage"],
    tss: ["Schoorsteenreparatie", "Jaarlijkse controle", "Rookgasafvoer", "Nieuwe schoorsteen", "Reiniging"],
    tos: ["Gevelreiniging", "Schilderwerk", "Dakgoot onderhoud", "Preventief onderhoud", "Kleine reparaties"],
    tbs: ["Verbouwing", "Aanbouw", "Renovatie", "Keuken", "Badkamer", "Nieuwbouw"]
  };

  const selectedSpecialisme = form.watch("specialisme");
  const currentProjectTypes = selectedSpecialisme ? projectTypes[selectedSpecialisme as keyof typeof projectTypes] || [] : [];
  
  // Watch description field for live character counting
  const descriptionValue = form.watch("description") || "";
  const minChars = 10;
  const currentChars = descriptionValue.length;
  const remainingChars = minChars - currentChars;
  const isDescriptionValid = currentChars >= minChars;
  
  // Watch email field for live validation
  const emailValue = form.watch("email") || "";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailValue.length > 0 && emailRegex.test(emailValue);

  // Immediate compression when files are selected (same as FloatingServiceMenu)
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
        toast({
          title: "Bestand te groot",
          description: `Het bestand "${file.name}" is te groot. Maximum bestandsgrootte is 10MB.`,
          variant: "destructive",
        });
        return false;
      }
      return true;
    });
    
    if (validFiles.length === 0) return;
    
    setUploadedFiles(prev => [...prev, ...validFiles].slice(0, 5));
    setIsProcessingFiles(true);
    
    console.log(`🔄 Starting immediate compression of ${validFiles.length} files...`);
    
    // Process each file immediately
    const newProcessedFiles = [];
    for (const file of validFiles) {
      try {
        const initialFileData = {original: file, compressed: file, status: 'processing' as const};
        setProcessedFiles(prev => [...prev, initialFileData]);
        
        let finalFileData;
        if (file.type.startsWith('image/')) {
          const compressed = await compressImage(file);
          const compressionRatio = ((file.size - compressed.size) / file.size * 100).toFixed(1);
          console.log(`✅ Compressed ${file.name}: ${(file.size/1024).toFixed(1)}KB → ${(compressed.size/1024).toFixed(1)}KB (${compressionRatio}% reduction)`);
          
          finalFileData = {original: file, compressed: compressed, status: 'completed' as const};
        } else {
          finalFileData = {original: file, compressed: file, status: 'completed' as const};
        }
        
        newProcessedFiles.push(finalFileData);
        setProcessedFiles(prev => prev.map(p => p.original === file ? finalFileData : p));
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
    const fileToRemove = uploadedFiles[indexToRemove];
    setUploadedFiles(prev => prev.filter((_, index) => index !== indexToRemove));
    setProcessedFiles(prev => prev.filter(p => p.original !== fileToRemove));
  };

  const handleLocationChange = (address: string, details?: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  }) => {
    form.setValue("location", address);
    
    // Store individual address components for better email subject formatting
    if (details) {
      // Parse street and house number from Google Places street field
      const streetMatch = details.street.match(/^(.+?)\s+(\d+.*?)$/);
      const street = streetMatch ? streetMatch[1] : details.street;
      const houseNumber = streetMatch ? streetMatch[2] : '';
      
      setAddressComponents({
        street: street,
        houseNumber: houseNumber,
        city: details.city,
        postcode: details.postalCode,
        country: details.country
      });
    } else {
      setAddressComponents(null);
    }
  };

  // Step 1: Service & Specialist Selection
  const step1Content = (
    <div className="space-y-4">
      {/* Service Type Selection */}
      <div className="space-y-3">
        <FormField
          control={form.control}
          name="serviceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">Wat heeft u nodig?</FormLabel>
              <FormControl>
                <div className="grid grid-cols-1 gap-2">
                  {serviceTypes.map((service) => (
                    <div
                      key={service.value}
                      className={`p-3 border-2 rounded-lg cursor-pointer transition-all hover:shadow-sm ${
                        field.value === service.value
                          ? 'border-tbgs-navy bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                      onClick={() => field.onChange(service.value)}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-4 h-4 rounded-full border-2 mt-1 flex items-center justify-center ${
                          field.value === service.value
                            ? 'border-tbgs-navy bg-tbgs-navy'
                            : 'border-gray-300'
                        }`}>
                          {field.value === service.value && (
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900 mb-1">{service.label}</h5>
                          <p className="text-sm text-gray-600">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Specialist Selection */}
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="specialisme"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">Welke specialist heeft u nodig?</FormLabel>
              <FormControl>
                <div className="grid grid-cols-1 gap-2">
                  {specialismen.map((spec) => (
                    <div
                      key={spec.value}
                      className={`p-3 border-2 rounded-lg cursor-pointer transition-all hover:shadow-sm ${
                        field.value === spec.value
                          ? `border-white ${spec.color} text-white`
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                      onClick={() => field.onChange(spec.value)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-white border flex items-center justify-center p-2 flex-shrink-0">
                          <img 
                            src={spec.logo} 
                            alt={spec.label}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className={`font-semibold ${
                            field.value === spec.value ? 'text-white' : 'text-gray-900'
                          }`}>
                            {spec.label}
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Project Type Selection */}
      {selectedSpecialisme && (
        <div className="space-y-3">
          <FormField
            control={form.control}
            name="projectType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">Type Werkzaamheden</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-12 border border-gray-300">
                      <SelectValue placeholder="Selecteer het type project" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {currentProjectTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      )}
    </div>
  );

  // Step 2: Project Details & Upload
  const step2Content = (
    <div className="space-y-4">
      {/* Project Description */}
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-semibold">Beschrijf uw project *</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Beschrijf uw project zo uitgebreid mogelijk voor een nauwkeurige offerte..."
                className={`min-h-[80px] text-sm leading-relaxed placeholder:text-gray-400 border transition-colors ${
                  currentChars > 0 && !isDescriptionValid 
                    ? 'border-red-300 focus:border-red-500' 
                    : isDescriptionValid 
                      ? 'border-green-300 focus:border-green-500'
                      : 'border-gray-300 focus:border-blue-500'
                }`}
                {...field}
              />
            </FormControl>
            <div className="flex justify-between items-center mt-1">
              <FormMessage />
              <div className={`text-xs transition-colors ${
                currentChars > 0 && !isDescriptionValid
                  ? 'text-red-500'
                  : isDescriptionValid
                    ? 'text-green-600'
                    : 'text-gray-500'
              }`}>
                {currentChars > 0 && !isDescriptionValid ? (
                  <>Nog {remainingChars} karakters nodig</>
                ) : isDescriptionValid ? (
                  <>✓ {currentChars} karakters</>
                ) : (
                  <>Minimaal {minChars} karakters vereist</>
                )}
              </div>
            </div>
          </FormItem>
        )}
      />

      {/* File Upload Section */}
      <div className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6">
          <div className="text-center mb-4">
            <h4 className="text-base font-semibold text-gray-900 mb-2">Upload Foto's (Optioneel)</h4>
            
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*,.pdf,.doc,.docx"
              onChange={handleFileSelect}
              className="hidden"
            />
            
            <Button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="bg-tbgs-navy hover:bg-blue-800 text-white px-6 py-3"
            >
              <Upload className="w-5 h-5 mr-2" />
              Selecteer Bestanden
            </Button>
            
            <p className="text-xs text-gray-500 mt-3">
              Ondersteunde formaten: PNG, JPG, PDF, DOC. Max 12MB per bestand.
            </p>
          </div>

          {uploadedFiles.length > 0 && (
            <div className="space-y-3">
              <h5 className="font-semibold text-gray-900">Geselecteerde Bestanden:</h5>
              <div className="grid grid-cols-1 gap-2">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileImage className="w-5 h-5 text-tbgs-navy" />
                      <span className="text-sm font-medium text-gray-700">
                        {file.name} ({(file.size / 1024 / 1024).toFixed(2)}MB)
                      </span>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Urgent Checkbox */}
      <FormField
        control={form.control}
        name="urgent"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>
                Dit is spoedeisend (binnen 24 uur contact)
              </FormLabel>
            </div>
          </FormItem>
        )}
      />
    </div>
  );

  // Step 3: Contact Information
  const step3Content = (
    <div className="space-y-4">
      {/* Voornaam en Achternaam - Horizontale lijn */}
      <div className="grid grid-cols-2 gap-3">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Voornaam *</FormLabel>
              <FormControl>
                <Input placeholder="Uw voornaam" className="h-10 border border-gray-300 placeholder:text-gray-500" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Achternaam *</FormLabel>
              <FormControl>
                <Input placeholder="Uw achternaam" className="h-10 border border-gray-300 placeholder:text-gray-500" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Locatie */}
      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Locatie *</FormLabel>
            <FormControl>
              <GooglePlacesInput
                value={field.value}
                onChange={handleLocationChange}
                placeholder="Begin met typen van uw adres..."
                className="h-10 border border-gray-300"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* E-mailadres */}
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>E-mailadres *</FormLabel>
            <FormControl>
              <Input 
                placeholder="uw.email@voorbeeld.nl" 
                type="email" 
                value={field.value || ""}
                onChange={field.onChange}
                onBlur={field.onBlur}
                name={field.name}
                className={`h-10 border transition-colors placeholder:text-gray-500 ${
                  emailValue.length > 0 && !isEmailValid 
                    ? 'border-red-300 focus:border-red-500' 
                    : isEmailValid 
                      ? 'border-green-300 focus:border-green-500'
                      : 'border-gray-300 focus:border-blue-500'
                }`}
              />
            </FormControl>
            <div className="flex justify-between items-center mt-1">
              <FormMessage />
              {emailValue.length > 0 && (
                <div className={`text-xs transition-colors ${
                  isEmailValid ? 'text-green-600' : 'text-red-500'
                }`}>
                  {isEmailValid ? '✓ Geldig e-mailadres' : '✗ Ongeldig e-mailadres'}
                </div>
              )}
            </div>
          </FormItem>
        )}
      />

      {/* Telefoonnummer */}
      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Telefoonnummer *</FormLabel>
            <FormControl>
              <Input placeholder="06 12345678" className="h-10 border border-gray-300 placeholder:text-gray-500" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Privacy Agreement */}
      <FormField
        control={form.control}
        name="privacy"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox 
                checked={field.value === true} 
                onCheckedChange={(checked) => {
                  field.onChange(checked === true);
                }}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel 
                className="cursor-pointer" 
                onClick={() => {
                  field.onChange(!field.value);
                }}
              >
                Ik ga akkoord met de privacyverklaring *
              </FormLabel>
              <p className="text-sm text-gray-500">
                Uw gegevens worden vertrouwelijk behandeld en alleen gebruikt voor het opstellen van uw offerte.
              </p>
            </div>
          </FormItem>
        )}
      />
    </div>
  );

  const steps = [
    {
      title: "Service & Specialist",
      description: "Wat heeft u nodig en welke specialist moet u hebben?",
      content: step1Content
    },
    {
      title: "Project Details",
      description: "Vertel ons meer over uw project en upload eventuele foto's",
      content: step2Content
    },
    {
      title: "Contactgegevens", 
      description: "Hoe kunnen wij contact met u opnemen?",
      content: step3Content
    }
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay to prevent background interaction */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50" 
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 pointer-events-none">
        <div 
          className="bg-white rounded-xl max-w-md sm:max-w-3xl lg:max-w-5xl w-full max-h-[90vh] sm:max-h-[95vh] overflow-y-auto pointer-events-auto shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 sm:p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">Gratis offerte Aanvragen</h3>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            <Form {...form}>
              <MultiStepForm
                steps={steps}
                onSubmit={onSubmit}
                onBack={onClose}
                isSubmitting={submitMutation.isPending}
              />
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
