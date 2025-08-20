import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { ObjectUploader } from "@/components/ObjectUploader";
import { GooglePlacesInput } from "@/components/GooglePlacesInput";
import { MultiStepForm } from "@/components/MultiStepForm";
import type { UploadResult } from "@uppy/core";
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
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const { toast } = useToast();

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
      const response = await apiRequest("POST", "/api/contact", {
        ...data,
        uploadedFiles,
      });
      return response;
    },
    onSuccess: () => {
      toast({
        title: "Bedankt voor uw aanvraag!",
        description: "Wij nemen binnen 24 uur contact met u op.",
      });
      form.reset();
      setUploadedFiles([]);
      onClose();
    },
    onError: () => {
      toast({
        title: "Er is een fout opgetreden",
        description: "Probeer het opnieuw of neem telefonisch contact op.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = () => {
    form.handleSubmit((data) => {
      submitMutation.mutate(data);
    })();
  };

  const serviceTypes = [
    { value: "offerte", label: "Gratis Offerte", description: "Persoonlijke inspectie en gedetailleerde prijsopgave" },
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

  const handleGetUploadParameters = async () => {
    try {
      const response = await apiRequest("POST", "/api/objects/upload");
      return {
        method: "PUT" as const,
        url: response.uploadURL,
      };
    } catch (error) {
      console.error("Error getting upload parameters:", error);
      throw error;
    }
  };

  const handleUploadComplete = (result: UploadResult<Record<string, unknown>, Record<string, unknown>>) => {
    const uploadedUrls = result.successful.map(file => file.uploadURL);
    setUploadedFiles(prev => [...prev, ...uploadedUrls]);
    
    toast({
      title: "Bestanden geüpload",
      description: `${result.successful.length} bestand(en) succesvol geüpload.`,
    });
  };

  const removeFile = (fileToRemove: string) => {
    setUploadedFiles(prev => prev.filter(file => file !== fileToRemove));
  };

  const handleLocationChange = (address: string, details?: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  }) => {
    form.setValue("location", address);
  };

  // Step 1: Service & Specialist Selection
  const step1Content = (
    <div className="space-y-6">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {specialismen.map((spec) => (
                    <div
                      key={spec.value}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
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
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="projectType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">Type Werkzaamheden</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-12">
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
    <div className="space-y-6">
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
                className="min-h-[120px] text-base leading-relaxed placeholder:text-gray-400"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Location */}
      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-semibold">Locatie *</FormLabel>
            <FormControl>
              <GooglePlacesInput
                value={field.value}
                onChange={handleLocationChange}
                placeholder="Begin met typen van uw adres..."
                className="h-12"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* File Upload Section */}
      <div className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6">
          <div className="text-center mb-4">
            <h4 className="text-base font-semibold text-gray-900 mb-2">Upload Foto's (Optioneel)</h4>
            
            
            <ObjectUploader
              maxNumberOfFiles={5}
              maxFileSize={10 * 1024 * 1024} // 10MB
              onGetUploadParameters={handleGetUploadParameters}
              onComplete={handleUploadComplete}
              buttonClassName="bg-tbgs-navy hover:bg-blue-800 text-white px-6 py-3"
            >
              <div className="flex items-center">
                <Upload className="w-5 h-5 mr-2" />
                Selecteer Bestanden
              </div>
            </ObjectUploader>
            <p className="text-xs text-gray-500 mt-3">
              Ondersteunde formaten: PNG, JPG, PDF. Max 10MB per bestand.
            </p>
          </div>

          {uploadedFiles.length > 0 && (
            <div className="space-y-3">
              <h5 className="font-semibold text-gray-900">Geüploade Bestanden:</h5>
              <div className="grid grid-cols-1 gap-2">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileImage className="w-5 h-5 text-tbgs-navy" />
                      <span className="text-sm font-medium text-gray-700">
                        Bestand {index + 1}
                      </span>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(file)}
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
    <div className="space-y-6">
      {/* Personal Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Voornaam *</FormLabel>
              <FormControl>
                <Input placeholder="Uw voornaam" className="h-12" {...field} />
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
                <Input placeholder="Uw achternaam" className="h-12" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mailadres *</FormLabel>
              <FormControl>
                <Input placeholder="uw.email@voorbeeld.nl" type="email" className="h-12" {...field} />
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
                <Input placeholder="06 12345678" className="h-12" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Privacy Agreement */}
      <FormField
        control={form.control}
        name="privacy"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>
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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-screen overflow-y-auto">
        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Gratis Offerte Aanvragen</h3>
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
  );
}
