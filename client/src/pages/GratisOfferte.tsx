import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import SEOHead from "@/lib/seo";
import Footer from "@/components/Footer";
import { ObjectUploader } from "@/components/ObjectUploader";
import { GooglePlacesInput } from "@/components/GooglePlacesInput";
import { MultiStepForm } from "@/components/MultiStepForm";
import { CheckCircle, Clock, Phone, Mail, MapPin, Calculator, FileText, Users, Award, Star, Zap, Upload, Camera, FileImage, FileVideo, X, Eye, Search } from "lucide-react";
import type { UploadResult } from "@uppy/core";
import tdsLogo from "@assets/TDS 545x642 (1)_1754935666048.png";
import tssLogo from "@assets/TSS 545x642 (1)_1754935673253.png";
import tosLogo from "@assets/TOS 545x642 (1)_1754935666048.png";
import tbsLogo from "@assets/TBS 545x642 (1)_1754935666048.png";

// Enhanced form schema with file attachments and inspection option
const offerteFormSchema = z.object({
  // Personal Information
  voornaam: z.string().min(2, "Voornaam moet minimaal 2 karakters zijn"),
  achternaam: z.string().min(2, "Achternaam moet minimaal 2 karakters zijn"),
  email: z.string().email("Voer een geldig e-mailadres in"),
  telefoon: z.string().min(10, "Voer een geldig telefoonnummer in"),
  
  // Address Information  
  adres: z.string().min(5, "Voer uw volledige adres in"),
  postcode: z.string().min(6, "Voer een geldige postcode in"),
  plaats: z.string().min(2, "Voer uw woonplaats in"),
  
  // Service Selection
  specialisme: z.string().min(1, "Kies een specialisme"),
  serviceType: z.string().min(1, "Kies een service type"),
  
  // Project Details
  projectType: z.string().min(1, "Kies een projecttype"),
  tijdlijn: z.string().min(1, "Kies de gewenste tijdlijn"),
  budget: z.string().optional(),
  beschrijving: z.string().min(20, "Beschrijf uw project in minimaal 20 karakters"),
  
  // Contact Preferences
  contactVoorkeur: z.string().min(1, "Kies uw contactvoorkeur"),
  
  // File Attachments
  attachments: z.array(z.string()).optional(),
  
  // Legal
  privacyAkkoord: z.boolean().refine(val => val === true, "U moet akkoord gaan met de privacyverklaring"),
  nieuwsbrief: z.boolean().optional(),
});

type OfferteFormData = z.infer<typeof offerteFormSchema>;

export default function GratisOfferte() {
  const { toast } = useToast();
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<OfferteFormData>({
    resolver: zodResolver(offerteFormSchema),
    defaultValues: {
      voornaam: "",
      achternaam: "",
      email: "",
      telefoon: "",
      adres: "",
      postcode: "",
      plaats: "",
      specialisme: "",
      serviceType: "",
      projectType: "",
      tijdlijn: "",
      budget: "",
      beschrijving: "",
      contactVoorkeur: "",
      attachments: [],
      privacyAkkoord: false,
      nieuwsbrief: false,
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: OfferteFormData) => {
      return apiRequest("POST", "/api/offerte", { ...data, attachments: uploadedFiles });
    },
    onSuccess: () => {
      toast({
        title: "Offerte aanvraag verzonden!",
        description: "Wij nemen binnen 24 uur contact met u op voor een afspraak.",
      });
      form.reset();
      setUploadedFiles([]);
    },
    onError: (error) => {
      toast({
        title: "Fout bij verzenden",
        description: "Er is een probleem opgetreden. Probeer het opnieuw of bel ons.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    },
  });

  const handleGetUploadParameters = async () => {
    try {
      const response = await apiRequest("POST", "/api/objects/upload");
      const data = await response.json();
      return {
        method: "PUT" as const,
        url: data.uploadURL,
      };
    } catch (error) {
      console.error("Failed to get upload URL:", error);
      throw error;
    }
  };

  const handleUploadComplete = (result: UploadResult<Record<string, unknown>, Record<string, unknown>>) => {
    if (result.successful && result.successful.length > 0) {
      const newFiles = result.successful.map(file => file.uploadURL || "");
      setUploadedFiles(prev => [...prev, ...newFiles]);
      toast({
        title: "Bestanden geüpload",
        description: `${result.successful.length} bestand(en) succesvol toegevoegd.`,
      });
    }
  };

  const removeFile = (fileToRemove: string) => {
    setUploadedFiles(prev => prev.filter(file => file !== fileToRemove));
  };

  const onSubmit = (data: OfferteFormData) => {
    submitMutation.mutate(data);
  };

  // Multi-step form configuration
  const serviceTypes = [
    { value: "offerte", label: "Gratis Offerte", description: "Persoonlijke inspectie en gedetailleerde prijsopgave" },
    { value: "inspectie", label: "Gratis Inspectie", description: "Locatie bezoek voor analyse en advies" },
    { value: "spoedservice", label: "Spoedservice", description: "Dringende reparatie binnen 24 uur" },
    { value: "onderhoud", label: "Onderhoudscontract", description: "Jaarlijks preventief onderhoud" }
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

      {/* Specialist Selection */}
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="specialisme"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">Welke specialist heeft u nodig?</FormLabel>
              <FormControl>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {specialismen.map((specialist) => (
                    <div
                      key={specialist.value}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                        field.value === specialist.value
                          ? `border-white ${specialist.color} text-white`
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                      onClick={() => field.onChange(specialist.value)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-white border flex items-center justify-center p-2 flex-shrink-0">
                          <img 
                            src={specialist.logo} 
                            alt={specialist.label}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className={`font-semibold text-sm ${
                            field.value === specialist.value ? 'text-white' : 'text-gray-900'
                          }`}>
                            {specialist.label}
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
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type Project *</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="border border-gray-300">
                    <SelectValue placeholder="Kies projecttype" />
                  </SelectTrigger>
                  <SelectContent>
                    {(projectTypes[form.watch("specialisme") as keyof typeof projectTypes] || []).map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="tijdlijn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tijdlijn *</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="border border-gray-300">
                    <SelectValue placeholder="Wanneer wilt u starten?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="direct">Direct / Spoedgeval</SelectItem>
                    <SelectItem value="week">Binnen een week</SelectItem>
                    <SelectItem value="maand">Binnen een maand</SelectItem>
                    <SelectItem value="kwartaal">Binnen 3 maanden</SelectItem>
                    <SelectItem value="flexibel">Flexibel / Later</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contactVoorkeur"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact voorkeur *</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="border border-gray-300">
                    <SelectValue placeholder="Hoe wilt u contact?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="telefoon">Telefonisch</SelectItem>
                    <SelectItem value="email">E-mail</SelectItem>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="beschrijving"
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
            <FormMessage />
          </FormItem>
        )}
      />

      {/* File Upload Section */}
      <div className="space-y-4">
        <div className="border-2 border-dashed border-gray-200 rounded-lg p-6">
          <div className="text-center mb-4">
            <h4 className="text-base font-semibold text-gray-900 mb-2">Upload Foto's (Optioneel)</h4>
            
            <ObjectUploader
              maxNumberOfFiles={5}
              maxFileSize={10485760}
              onGetUploadParameters={handleGetUploadParameters}
              onComplete={handleUploadComplete}
              buttonClassName="bg-tbgs-navy hover:bg-blue-800 text-white px-6 py-3"
            >
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4" />
                <span>Selecteer Bestanden</span>
              </div>
            </ObjectUploader>
            <p className="text-xs text-gray-500 mt-3">
              Ondersteunde formaten: PNG, JPG, PDF. Max 10MB per bestand.
            </p>
          </div>
          
          {uploadedFiles.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Geüploade bestanden:</p>
              <div className="space-y-2">
                {uploadedFiles.map((file, index) => {
                  // Extract filename from URL
                  const fileName = file.split('/').pop() || `bestand-${index + 1}`;
                  // Get file extension
                  const extension = fileName.split('.').pop()?.toLowerCase() || '';
                  // Create display name
                  const displayName = fileName.length > 30 ? 
                    `${fileName.substring(0, 20)}...${extension ? `.${extension}` : ''}` : 
                    fileName;
                  
                  return (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                      <div className="flex items-center gap-2">
                        <FileImage className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-700" title={fileName}>{displayName}</span>
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
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Step 3: Contact Information
  const step3Content = (
    <div className="space-y-6">
      <div className="text-center">
        <h4 className="text-lg font-bold text-gray-900 mb-2">Contact Gegevens</h4>
        <p className="text-sm text-gray-600">Hoe kunnen we u bereiken?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="voornaam"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Voornaam *</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Uw voornaam" className="border border-gray-300" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="achternaam"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Achternaam *</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Uw achternaam" className="border border-gray-300" />
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
                <Input {...field} type="email" placeholder="uw.email@voorbeeld.nl" className="border border-gray-300" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="telefoon"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefoonnummer *</FormLabel>
              <FormControl>
                <Input {...field} placeholder="+31 6 12345678" className="border border-gray-300" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="adres"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Adres *</FormLabel>
            <FormControl>
              <GooglePlacesInput
                value={field.value}
                onChange={field.onChange}
                placeholder="Straat en huisnummer"
                className="border border-gray-300"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="postcode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Postcode *</FormLabel>
              <FormControl>
                <Input {...field} placeholder="1234 AB" className="border border-gray-300" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="plaats"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Plaats *</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Uw woonplaats" className="border border-gray-300" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <Separator />

      <div className="space-y-4">
        <FormField
          control={form.control}
          name="privacyAkkoord"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={!!field.value}
                  onCheckedChange={(checked) => {
                    field.onChange(checked);
                  }}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel 
                  className="text-sm text-gray-600 cursor-pointer" 
                  onClick={() => {
                    const newValue = !field.value;
                    field.onChange(newValue);
                  }}
                >
                  Ik ga akkoord met de <a href="#" className="text-tbgs-navy hover:underline">privacyverklaring</a> en algemene voorwaarden *
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="nieuwsbrief"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={!!field.value}
                  onCheckedChange={(checked) => {
                    field.onChange(checked);
                  }}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel 
                  className="text-sm text-gray-600 cursor-pointer" 
                  onClick={() => {
                    const newValue = !field.value;
                    field.onChange(newValue);
                  }}
                >
                  Ja, houd mij op de hoogte van tips en aanbiedingen
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
      </div>
    </div>
  );

  const steps = [
    {
      title: "Service & Specialist",
      description: "Kies uw service en specialist",
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

  return (
    <>
      <SEOHead 
        title="Gratis Offerte Aanvragen - TBGS BV | Professionele Bouwdiensten Nederland & België"
        description="Vraag nu uw gratis offerte aan bij TBGS BV. Specialist in dakwerk, schoorsteenservice, onderhoud en bouw. Upload foto's en wij nemen binnen 24 uur contact met u op."
        url="/gratis-offerte"
        keywords="gratis offerte, offerte aanvragen, dakwerk offerte, schoorsteen offerte, bouw offerte, renovatie prijsopgave, gratis inspectie, TBGS offerte, bouwbedrijf Nederland België"
      />



      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-tbgs-navy to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-full mb-6">
                <Calculator className="w-5 h-5 mr-2" />
                <span className="font-semibold">Gratis & Vrijblijvend</span>
                <span className="mx-2">•</span>
                <span>24 Uur Response</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Gratis Offerte Aanvragen
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                Upload foto's, beschrijf uw project en wij nemen binnen 24 uur contact met u op
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                    <Upload className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Upload Foto's</h3>
                  <p className="text-sm opacity-90">Deel foto's van uw project voor een nauwkeurige offerte</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                    <Eye className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Gratis Inspectie</h3>
                  <p className="text-sm opacity-90">Optioneel locatiebezoek voor complexe projecten</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                    <FileText className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Persoonlijk Contact</h3>
                  <p className="text-sm opacity-90">Wij nemen binnen 24 uur contact op voor afspraak</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-2xl border-0">
                <CardHeader className="text-center pb-6 sm:pb-8">
                  <CardTitle className="text-2xl sm:text-3xl text-gray-900 mb-3 sm:mb-4">Uw Project Details</CardTitle>
                  <CardDescription className="text-base sm:text-lg text-gray-600">
                    Vul onderstaand formulier in en wij nemen snel contact op voor een persoonlijk gesprek en inspectie.
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-8">
                  <Form {...form}>
                    <MultiStepForm
                      steps={steps}
                      onSubmit={() => form.handleSubmit(onSubmit)()}
                      onBack={() => window.history.back()}
                      isSubmitting={submitMutation.isPending}
                    />
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
