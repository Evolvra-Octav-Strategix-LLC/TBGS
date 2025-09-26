import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { GooglePlacesInput } from "@/components/GooglePlacesInput";
import { MultiStepForm } from "@/components/MultiStepForm";
import { Upload, X, FileText, Camera, FileImage } from "lucide-react";
import { useLocation } from "wouter";
import tdsLogo from "@assets/TDS 545x642 (1)_1755096847747.png";
import tssLogo from "@assets/TSS 545x642 (1)_1755096878001.png";
import tosLogo from "@assets/TOS 545x642 (1)_1755096847747.png";
import tbsLogo from "@assets/TBS 545x642 (1)_1755096847747.png";

const formSchema = z.object({
  serviceType: z.string().optional(),
  specialisme: z.string().optional(),
  projectType: z.string().optional(),
  firstName: z.string().min(1, "Voornaam is verplicht"),
  lastName: z.string().min(1, "Achternaam is verplicht"),
  email: z.string().min(1, "E-mailadres is verplicht").email("Ongeldig e-mailadres"),
  phone: z.string().min(10, "Telefoonnummer is verplicht"),
  location: z.string().min(1, "Locatie is verplicht"),
  description: z.string().min(10, "Beschrijving moet minimaal 10 karakters bevatten"),
  budget: z.string().optional(),
  contactVoorkeur: z.string().min(1, "Selecteer contactvoorkeur"),
  attachments: z.array(z.string()).optional(),
  urgent: z.boolean().default(false),
  privacy: z.boolean().refine((val) => val === true, "U moet akkoord gaan met de privacyverklaring"),
});

type OfferteFormData = z.infer<typeof formSchema>;

export default function ContactModalV2() {
  const [currentStep, setCurrentStep] = useState(0);
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
  const [, setLocation] = useLocation();

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
      budget: "",
      contactVoorkeur: "",
      attachments: [],
      urgent: false,
      privacy: false,
    },
  });

  // Watch description field for live character counting
  const descriptionValue = form.watch("description") || "";
  const minChars = 10;
  const currentChars = descriptionValue.length;
  const remainingChars = minChars - currentChars;
  const isDescriptionValid = currentChars >= minChars;

  const submitMutation = useMutation({
    mutationFn: async (data: OfferteFormData) => {
      // Create FormData for file uploads (same as FloatingServiceMenu)
      const formData = new FormData();
      
      // Add form fields matching service-request schema
      formData.append('selectedService', data.serviceType || 'Algemeen Project');
      formData.append('address', data.location);
      formData.append('projectDescription', data.description);
      formData.append('firstName', data.firstName);
      formData.append('lastName', data.lastName);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('contactPreference', data.contactVoorkeur || 'email');
      formData.append('photos', JSON.stringify(uploadedFiles.map(file => file.name)));
      
      // Add pre-compressed files (ready for instant submission!)
      const filesToSubmit = processedFiles.length > 0 
        ? processedFiles.filter(p => p.status === 'completed').map(p => p.compressed)
        : uploadedFiles;
        
      filesToSubmit.forEach((file, index) => {
        formData.append('files', file);
      });
      
      console.log(`🚀 Submitting ${filesToSubmit.length} pre-processed files (instant!)`);

      // Add urgency and lead scoring data
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
      
      // Redirect to home page after successful submission
      setTimeout(() => {
        setLocation('/');
      }, 2000); // Wait 2 seconds to let user see the success message
    },
    onError: (error: Error) => {
      toast({
        title: "Er is een fout opgetreden",
        description: error.message || "Probeer het opnieuw of neem telefonisch contact op.",
        variant: "destructive",
      });
    },
  });


  // Image compression function (same as FloatingServiceMenu)
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

  // Handle file selection with compression (same as FloatingServiceMenu)
  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const maxFileSize = 10 * 1024 * 1024; // 10MB per file
    
    const validFiles = files.filter(file => {
      if (file.size > maxFileSize) {
        toast({
          title: "Bestand te groot",
          description: `Het bestand "${file.name}" is te groot. Maximum bestandsgrootte is 10MB.`,
          variant: "destructive"
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

  const removeFile = (index: number) => {
    const fileToRemove = uploadedFiles[index];
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
    setProcessedFiles(prev => prev.filter(p => p.original !== fileToRemove));
  };

  const onSubmit = (data: OfferteFormData) => {
    // Show immediate feedback
    toast({
      title: "Bezig met verzenden...",
      description: "Uw aanvraag wordt verwerkt.",
    });
    submitMutation.mutate(data);
  };

  const specialisten = [
    { value: "tds", label: "TDS - Totaal Dak Specialist", logo: tdsLogo, color: "bg-tbgs-red" },
    { value: "tss", label: "TSS - Totaal Schoorsteen Specialist", logo: tssLogo, color: "bg-tbgs-blue" },
    { value: "tos", label: "TOS - Totaal Onderhoud Specialist", logo: tosLogo, color: "bg-tbgs-green" },
    { value: "tbs", label: "TBS - Totaal Bouw Specialist", logo: tbsLogo, color: "bg-tbgs-orange" }
  ];

  const projectTypes = {
    tds: ["Dakvervanging", "Dakreparatie", "Dakisolatie", "Zonnepanelen", "Dakgoten", "Lekkage"],
    tss: ["Schoorsteenreparatie", "Jaarlijkse controle", "Rookgasafvoer", "Nieuwe schoorsteen", "Reiniging"],
    tos: ["Preventief onderhoud", "Onderhoudscontract", "Gevelreiniging", "Dakonderhoud", "Algemeen onderhoud"],
    tbs: ["Verbouwing", "Renovatie", "Nieuwbouw", "Aanbouw", "Kozijnen", "Badkamerrenovatie"]
  };

  const serviceTypes = [
    { value: "offerte", label: "Gratis offerte", description: "Persoonlijke inspectie en gedetailleerde prijsopgave" },
    { value: "inspectie", label: "Gratis Inspectie", description: "Locatie bezoek voor analyse en advies" },
    { value: "spoedservice", label: "Spoedservice", description: "Dringende reparatie binnen 24 uur" },
    { value: "onderhoud", label: "Onderhoudscontract", description: "Jaarlijks preventief onderhoud" }
  ];


  const budgetOpties = [
    { value: "unknown", label: "Weet ik nog niet" },
    { value: "flexible", label: "Flexibel budget" },
    { value: "limited", label: "Beperkt budget" },
    { value: "quality", label: "Kwaliteit staat voorop" }
  ];

  const contactVoorkeuren = [
    { value: "phone", label: "Telefonisch contact" },
    { value: "email", label: "E-mail contact" },
    { value: "whatsapp", label: "WhatsApp" }
  ];

  // Step 1: Service & Specialist Selection
  const step1Content = (
    <div className="space-y-8">
      {/* Service Type Selection */}
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="serviceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">Wat heeft u nodig?</FormLabel>
              <FormControl>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {serviceTypes.map((service) => (
                    <div
                      key={service.value}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
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
                          <h5 className="font-semibold text-gray-900 mb-1 text-sm">{service.label}</h5>
                          <p className="text-xs text-gray-600">{service.description}</p>
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

    </div>
  );

  // Step 2: Project Details
  const step2Content = (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Projectbeschrijving *</FormLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder="Beschrijf uw project zo gedetailleerd mogelijk..."
                className="min-h-[100px] border border-gray-300"
              />
            </FormControl>
            <div className="flex justify-between items-center">
              <FormMessage />
              <div className={`text-xs ${
                isDescriptionValid 
                  ? "text-green-600" 
                  : remainingChars > 0 
                    ? "text-orange-500" 
                    : "text-red-500"
              }`}>
                {currentChars}/{minChars} karakters
                {!isDescriptionValid && remainingChars > 0 && (
                  <span className="ml-1">({remainingChars} nog nodig)</span>
                )}
              </div>
            </div>
          </FormItem>
        )}
      />

      {/* File Upload Section */}
      <div className="space-y-4">
        <div className="border-2 border-dashed border-gray-200 rounded-lg p-6">
          <div className="text-center mb-4">
            <h4 className="text-base font-semibold text-gray-900 mb-2">Upload Foto's (Optioneel)</h4>
            
            <Button
              type="button"
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              className="bg-tbgs-navy hover:bg-blue-800 text-white border-0"
            >
              <Camera className="w-4 h-4 mr-2" />
              Selecteer Bestanden
            </Button>
            
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*,.pdf,.doc,.docx"
              onChange={handleFileSelect}
              className="hidden"
            />
            
            <p className="text-xs text-gray-500 mt-3">
              Ondersteunde formaten: PNG, JPG, PDF. Max 5 bestanden.
            </p>
          </div>
          
          {uploadedFiles.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Geüploade bestanden:</p>
              <div className="space-y-2">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                    <div className="flex items-center gap-2">
                      <FileImage className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-700">{file.name}</span>
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

      {/* Urgency Checkbox */}
      <FormField
        control={form.control}
        name="urgent"
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
              <FormLabel className="text-sm text-gray-600 cursor-pointer">🚨 Dit is urgent neem Z.S.M contact op!</FormLabel>
            </div>
          </FormItem>
        )}
      />
    </div>
  );

  // Step 3: Contact Information
  const step3Content = (
    <div className="space-y-6">
      {/* Voornaam en Achternaam - Horizontale lijn */}
      <div className="grid grid-cols-2 gap-3 md:gap-6">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Voornaam *</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Uw voornaam" className="border border-gray-300 placeholder:text-gray-500" />
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
                <Input {...field} placeholder="Uw achternaam" className="border border-gray-300 placeholder:text-gray-500" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Adres */}
      <div style={{ position: "relative", zIndex: 10 }}>
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adres *</FormLabel>
              <FormControl>
                <GooglePlacesInput
                  value={field.value}
                  onChange={(address, details) => {
                    field.onChange(address);
                    if (details) {
                      setAddressComponents({
                        street: details.street || '',
                        houseNumber: '', // Will be parsed from street
                        city: details.city || '',
                        postcode: details.postalCode || '',
                        country: details.country || ''
                      });
                    }
                  }}
                  placeholder="Straat en huisnummer"
                  className="border border-gray-300 placeholder:text-gray-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* E-mailadres en Telefoonnummer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mailadres *</FormLabel>
              <FormControl>
                <Input {...field} type="email" placeholder="uw.email@voorbeeld.nl" className="border border-gray-300 placeholder:text-gray-500" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefoonnummer *</FormLabel>
              <FormControl>
                <Input {...field} placeholder="+31 6 12345678" className="border border-gray-300 placeholder:text-gray-500" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="contactVoorkeur"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Hoe mogen we u bereiken? *</FormLabel>
            <FormControl>
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="border border-gray-300">
                  <SelectValue placeholder="Kies uw contactvoorkeur" />
                </SelectTrigger>
                <SelectContent>
                  {contactVoorkeuren.map((voorkeur) => (
                    <SelectItem key={voorkeur.value} value={voorkeur.value}>{voorkeur.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

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
              <FormLabel className="text-sm text-gray-600 cursor-pointer">
                Ik ga akkoord met de <a href="#" className="text-tbgs-navy hover:underline">privacyverklaring</a> en algemene voorwaarden *
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
    </div>
  );

  const steps = [
    {
      title: "Service Selectie",
      description: "Kies het type service dat u nodig heeft",
      content: step1Content
    },
    {
      title: "Project Details",
      description: "Vertel over uw project",
      content: step2Content
    },
    {
      title: "Contact Informatie",
      description: "Hoe kunnen we u bereiken?",
      content: step3Content
    }
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto">
      {currentStep !== 2 && (
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-tbgs-navy">
            Gratis offerte aanvragen
          </CardTitle>
          <CardDescription className="text-center">
            Vul onderstaand formulier in en ontvang binnen 24 uur een persoonlijke offerte
          </CardDescription>
        </CardHeader>
      )}
      <CardContent>
        <Form {...form}>
          <MultiStepForm
            steps={steps}
            currentStep={currentStep}
            onStepChange={setCurrentStep}
            onSubmit={() => form.handleSubmit(onSubmit)()}
            onBack={() => {}}
            isSubmitting={submitMutation.isPending}
          />
        </Form>
      </CardContent>
    </Card>
  );
}