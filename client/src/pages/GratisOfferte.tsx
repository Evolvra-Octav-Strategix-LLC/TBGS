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
  projectOmvang: z.string().min(1, "Kies de projectomvang"),
  tijdlijn: z.string().min(1, "Kies de gewenste tijdlijn"),
  budget: z.string().optional(),
  beschrijving: z.string().min(20, "Beschrijf uw project in minimaal 20 karakters"),
  
  // Detailed Description (replaces inspection option)
  gedetaileerdeBeschrijving: z.string().min(5, "Geef een beschrijving van minimaal 5 karakters"),
  
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
      projectOmvang: "",
      tijdlijn: "",
      budget: "",
      beschrijving: "",
      contactVoorkeur: "",
      gedetaileerdeBeschrijving: "",
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
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl text-gray-900 mb-4">Uw Project Details</CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Vul onderstaand formulier in en wij nemen snel contact op voor een persoonlijk gesprek en inspectie.
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      
                      {/* Service Type Selection */}
                      <div className="space-y-6">
                        <div className="text-center">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Wat heeft u nodig?</h3>
                          <p className="text-gray-600">Kies de service die het beste bij uw situatie past</p>
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="serviceType"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {serviceTypes.map((service) => (
                                    <div
                                      key={service.value}
                                      className={`p-4 border-2 rounded-xl cursor-pointer transition-all hover:shadow-md ${
                                        field.value === service.value
                                          ? 'border-tbgs-navy bg-blue-50'
                                          : 'border-gray-200 hover:border-gray-300 bg-white'
                                      }`}
                                      onClick={() => field.onChange(service.value)}
                                    >
                                      <div className="flex items-start space-x-3">
                                        <div className={`w-5 h-5 rounded-full border-2 mt-1 flex items-center justify-center ${
                                          field.value === service.value
                                            ? 'border-tbgs-navy bg-tbgs-navy'
                                            : 'border-gray-300'
                                        }`}>
                                          {field.value === service.value && (
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                          )}
                                        </div>
                                        <div className="flex-1">
                                          <h4 className="font-semibold text-gray-900 mb-1">{service.label}</h4>
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

                      <Separator />

                      {/* Specialist Selection */}
                      <div className="space-y-6">
                        <div className="text-center">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Welke specialist heeft u nodig?</h3>
                          <p className="text-gray-600">Selecteer het specialisme dat bij uw project past</p>
                        </div>

                        <FormField
                          control={form.control}
                          name="specialisme"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {specialismen.map((spec) => (
                                    <div
                                      key={spec.value}
                                      className={`p-4 border-2 rounded-xl cursor-pointer transition-all hover:shadow-md ${
                                        field.value === spec.value
                                          ? `border-white ${spec.color} text-white`
                                          : 'border-gray-200 hover:border-gray-300 bg-white'
                                      }`}
                                      onClick={() => field.onChange(spec.value)}
                                    >
                                      <div className="flex items-center space-x-3">
                                        <div className="w-12 h-12 rounded-lg bg-white border flex items-center justify-center p-2">
                                          <img 
                                            src={spec.logo} 
                                            alt={spec.label}
                                            className="w-full h-full object-contain"
                                          />
                                        </div>
                                        <div className="flex-1">
                                          <h4 className={`font-semibold ${
                                            field.value === spec.value ? 'text-white' : 'text-gray-900'
                                          }`}>
                                            {spec.label}
                                          </h4>
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
                        <div className="space-y-6">
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

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="projectOmvang"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-lg font-semibold">Projectomvang</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="h-12">
                                        <SelectValue placeholder="Kies omvang" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="klein">Klein project</SelectItem>
                                      <SelectItem value="middel">Middelgroot project</SelectItem>
                                      <SelectItem value="groot">Groot project</SelectItem>
                                      <SelectItem value="zeer-groot">Zeer groot project</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="tijdlijn"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-lg font-semibold">Gewenste Tijdlijn</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="h-12">
                                        <SelectValue placeholder="Wanneer starten?" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="spoedig">Zo spoedig mogelijk</SelectItem>
                                      <SelectItem value="1-maand">Binnen 1 maand</SelectItem>
                                      <SelectItem value="3-maanden">Binnen 3 maanden</SelectItem>
                                      <SelectItem value="6-maanden">Binnen 6 maanden</SelectItem>
                                      <SelectItem value="volgend-jaar">Volgend jaar</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      )}

                      <Separator />

                      {/* File Upload Section */}
                      <div className="space-y-6">
                        <div className="text-center">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Upload Foto's en Documenten</h3>
                          <p className="text-gray-600">Upload foto's van uw project voor een nauwkeurigere offerte</p>
                        </div>

                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8">
                          <div className="text-center mb-6">
                            <ObjectUploader
                              maxNumberOfFiles={10}
                              maxFileSize={50 * 1024 * 1024} // 50MB
                              onGetUploadParameters={handleGetUploadParameters}
                              onComplete={handleUploadComplete}
                              buttonClassName="bg-tbgs-navy hover:bg-blue-800 text-white px-8 py-4"
                            >
                              <div className="flex items-center">
                                <Upload className="w-5 h-5 mr-2" />
                                Selecteer Bestanden
                              </div>
                            </ObjectUploader>
                            <p className="text-sm text-gray-500 mt-4">
                              Ondersteunde formaten: PNG, JPG, PDF, DOCX, MP4. Max 50MB per bestand.
                            </p>
                          </div>

                          {uploadedFiles.length > 0 && (
                            <div className="space-y-3">
                              <h4 className="font-semibold text-gray-900">Geüploade Bestanden:</h4>
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

                      <Separator />

                      {/* Detailed Project Description */}
                      <div className="space-y-6">
                        <FormField
                          control={form.control}
                          name="gedetaileerdeBeschrijving"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xl font-bold text-gray-900 mb-4">
                                Gedetailleerde Projectbeschrijving *
                              </FormLabel>
                              <FormDescription className="text-base text-gray-600 mb-4">
                                Beschrijf uw project zo uitgebreid mogelijk voor een nauwkeurige offerte.
                              </FormDescription>
                              <FormControl>
                                <Textarea
                                  placeholder="Beschrijf uw project gedetailleerd..."
                                  className="min-h-[200px] text-base leading-relaxed placeholder:text-gray-400"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription className="text-sm text-gray-500 mt-2">
                                Tip: Hoe meer details u geeft (materialen, timing, specifieke wensen, bijzonderheden), 
                                hoe nauwkeuriger en persoonlijker onze offerte wordt.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <Separator />

                      {/* Personal Information */}
                      <div className="space-y-6">
                        <h3 className="text-xl font-bold text-gray-900">Contactgegevens</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="voornaam"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Voornaam *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Uw voornaam" className="h-12 text-gray-900 placeholder:text-gray-400" {...field} />
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
                                  <Input placeholder="Uw achternaam" className="h-12 text-gray-900 placeholder:text-gray-400" {...field} />
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
                                  <Input placeholder="uw.email@voorbeeld.nl" type="email" className="h-12 text-gray-900 placeholder:text-gray-400" {...field} />
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
                                  <Input placeholder="06 12345678" className="h-12 text-gray-900 placeholder:text-gray-400" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="md:col-span-2">
                            <FormField
                              control={form.control}
                              name="adres"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Adres *</FormLabel>
                                  <FormControl>
                                    <GooglePlacesInput
                                      value={field.value}
                                      onChange={(address, details) => {
                                        field.onChange(address);
                                        // Auto-fill other fields if details are available
                                        if (details) {
                                          if (details.city && !form.getValues("plaats")) {
                                            form.setValue("plaats", details.city);
                                          }
                                          if (details.postalCode && !form.getValues("postcode")) {
                                            form.setValue("postcode", details.postalCode);
                                          }
                                        }
                                      }}
                                      placeholder="Begin typing your address..."
                                      className="h-12"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="postcode"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Postcode *</FormLabel>
                                <FormControl>
                                  <Input placeholder="1234 AB" className="h-12 text-gray-900 placeholder:text-gray-400" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="plaats"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Plaats *</FormLabel>
                              <FormControl>
                                <Input placeholder="Uw woonplaats" className="h-12 text-gray-900 placeholder:text-gray-400" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <Separator />

                      {/* Contact and Budget Selection */}
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="budget"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Indicatief Budget (optioneel)</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="h-12">
                                      <SelectValue placeholder="Selecteer budget range" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="klein">Klein budget</SelectItem>
                                    <SelectItem value="middel">Middelgroot budget</SelectItem>
                                    <SelectItem value="groot">Groot budget</SelectItem>
                                    <SelectItem value="uitgebreid">Uitgebreid budget</SelectItem>
                                    <SelectItem value="premium">Premium budget</SelectItem>
                                    <SelectItem value="geen-limiet">Geen budgetlimiet</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="contactVoorkeur"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Contactvoorkeur *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="h-12">
                                      <SelectValue placeholder="Hoe kunnen we contact opnemen?" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="email">E-mail contact</SelectItem>
                                    <SelectItem value="whatsapp">WhatsApp bericht</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      <Separator />

                      {/* Legal and Submit */}
                      <div className="space-y-6">
                        <FormField
                          control={form.control}
                          name="privacyAkkoord"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>
                                  Ik ga akkoord met de privacyverklaring *
                                </FormLabel>
                                <FormDescription>
                                  Uw gegevens worden vertrouwelijk behandeld en alleen gebruikt voor het opstellen van uw offerte.
                                </FormDescription>
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
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>
                                  Houd mij op de hoogte van tips en aanbiedingen
                                </FormLabel>
                                <FormDescription>
                                  Ontvang nuttige onderhoudstips en exclusieve aanbiedingen (optioneel).
                                </FormDescription>
                              </div>
                            </FormItem>
                          )}
                        />

                        <div className="pt-6">
                          <Button 
                            type="submit" 
                            className="w-full h-14 text-lg font-semibold bg-tbgs-navy hover:bg-blue-800"
                            disabled={submitMutation.isPending}
                          >
                            {submitMutation.isPending ? (
                              <div className="flex items-center">
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                Bezig met verzenden...
                              </div>
                            ) : (
                              <div className="flex items-center">
                                <FileText className="w-5 h-5 mr-2" />
                                Verstuur Offerte Aanvraag
                              </div>
                            )}
                          </Button>
                        </div>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">20+ Jaar Ervaring</h3>
                  <p className="text-gray-600">Ruime expertise in alle specialismen</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Gecertificeerd</h3>
                  <p className="text-gray-600">Alle benodigde certificeringen en verzekeringen</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Star className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Klantbeoordeling 9.2</h3>
                  <p className="text-gray-600">Hoge klanttevredenheid door kwaliteit</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer backgroundColor="bg-gray-900" accentColor="text-tbgs-navy" />
    </>
  );
}