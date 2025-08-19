import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { ObjectUploader } from "@/components/ObjectUploader";
import { GooglePlacesInput } from "@/components/GooglePlacesInput";
import type { UploadResult } from "@uppy/core";
import { Upload, X, FileText, Camera } from "lucide-react";
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

  const onSubmit = (data: OfferteFormData) => {
    submitMutation.mutate(data);
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

  const removeUploadedFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleLocationChange = (address: string, details?: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  }) => {
    form.setValue("location", address);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-screen overflow-y-auto">
        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Gratis Offerte Aanvragen</h3>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Service Type Selection */}
              <div className="space-y-4">
                <div className="text-center">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Wat heeft u nodig?</h4>
                  <p className="text-sm text-gray-600">Kies de service die het beste bij uw situatie past</p>
                </div>
                
                <FormField
                  control={form.control}
                  name="serviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {serviceTypes.map((service) => (
                            <div
                              key={service.value}
                              className={`p-3 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
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

              <Separator />

              {/* Specialist Selection */}
              <div className="space-y-4">
                <div className="text-center">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Welke specialist heeft u nodig?</h4>
                  <p className="text-sm text-gray-600">Selecteer het specialisme dat bij uw project past</p>
                </div>

                <FormField
                  control={form.control}
                  name="specialisme"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {specialismen.map((spec) => (
                            <div
                              key={spec.value}
                              className={`p-3 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                                field.value === spec.value
                                  ? `border-white ${spec.color} text-white`
                                  : 'border-gray-200 hover:border-gray-300 bg-white'
                              }`}
                              onClick={() => field.onChange(spec.value)}
                            >
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-lg bg-white border flex items-center justify-center p-1.5 flex-shrink-0">
                                  <img 
                                    src={spec.logo} 
                                    alt={spec.label}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h5 className={`font-semibold text-sm ${
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

              <Separator />

              {/* Project Type Selection */}
              {selectedSpecialisme && (
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-semibold">Type Werkzaamheden</FormLabel>
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

              <Separator />

              {/* Personal Information */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-gray-900">Contactgegevens</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Voornaam *</FormLabel>
                        <FormControl>
                          <Input placeholder="Uw voornaam" {...field} />
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
                          <Input placeholder="Uw achternaam" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mailadres *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="uw.email@voorbeeld.nl" {...field} />
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
                          <Input type="tel" placeholder="+31 6 12 34 56 78" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

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
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Separator />

              {/* Project Description */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Projectbeschrijving *</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={4}
                          placeholder="Beschrijf uw project zo duidelijk mogelijk..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="urgent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Dit is een spoedeisende reparatie
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              <Separator />

              {/* File Upload Section */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-gray-900">Bijlagen (Optioneel)</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Upload foto's, documenten of tekeningen om uw project beter te beschrijven
                </p>
                
                <div className="flex flex-col space-y-4">
                  <ObjectUploader
                    maxNumberOfFiles={3}
                    maxFileSize={10485760} // 10MB
                    onGetUploadParameters={handleGetUploadParameters}
                    onComplete={handleUploadComplete}
                    buttonClassName="w-full sm:w-auto"
                  >
                    <div className="flex items-center gap-2">
                      <Upload className="w-4 h-4" />
                      <span>Bestanden Uploaden</span>
                    </div>
                  </ObjectUploader>
                  
                  {uploadedFiles.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Geüploade bestanden:</p>
                      <div className="space-y-2">
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border">
                            <div className="flex items-center space-x-2">
                              <FileText className="w-4 h-4 text-gray-500" />
                              <span className="text-sm text-gray-700">Bijlage {index + 1}</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeUploadedFile(index)}
                              className="text-red-500 hover:text-red-700 p-1"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>• Toegestane bestandstypen: JPG, PNG, PDF, DOC, DOCX, TXT</p>
                    <p>• Maximaal 3 bestanden, elk max. 10MB</p>
                    <p>• Bestanden helpen ons uw project beter te begrijpen</p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Privacy Agreement */}
              <FormField
                control={form.control}
                name="privacy"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-gray-600">
                        Ik ga akkoord met de <a href="#" className="text-tbgs-navy hover:underline">privacyverklaring</a> en algemene voorwaarden *
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-tbgs-navy text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors"
                disabled={submitMutation.isPending}
              >
                <i className="fas fa-paper-plane mr-3"></i>
                {submitMutation.isPending ? "Bezig met versturen..." : "Verstuur Offerteaanvraag"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
