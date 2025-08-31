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
  postcode: z.string().min(6, "Postcode is verplicht"),
  plaats: z.string().min(1, "Plaats is verplicht"),
  description: z.string().min(10, "Beschrijving moet minimaal 10 karakters bevatten"),
  tijdlijn: z.string().min(1, "Selecteer een tijdlijn"),
  budget: z.string().optional(),
  contactVoorkeur: z.string().min(1, "Selecteer contactvoorkeur"),
  attachments: z.array(z.string()).optional(),
  urgent: z.boolean().default(false),
  privacy: z.boolean().refine((val) => val === true, "U moet akkoord gaan met de privacyverklaring"),
  nieuwsbrief: z.boolean().default(false),
});

type OfferteFormData = z.infer<typeof formSchema>;

export default function ContactModalV2() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
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
      postcode: "",
      plaats: "",
      description: "",
      tijdlijn: "",
      budget: "",
      contactVoorkeur: "",
      attachments: [],
      urgent: false,
      privacy: false,
      nieuwsbrief: false,
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: OfferteFormData) => {
      // Create FormData for file uploads
      const formData = new FormData();
      
      // Use the separate address fields directly
      const adres = data.location || '';
      const postcode = data.postcode || '';
      const plaats = data.plaats || '';
      
      // Add form fields matching offerte.js schema
      formData.append('voornaam', data.firstName);
      formData.append('achternaam', data.lastName);
      formData.append('email', data.email);
      formData.append('telefoon', data.phone);
      formData.append('adres', adres);
      formData.append('postcode', postcode);
      formData.append('plaats', plaats);
      formData.append('specialisme', data.specialisme);
      formData.append('projectType', data.projectType || '');
      formData.append('tijdlijn', data.tijdlijn);
      formData.append('budget', data.budget || '');
      formData.append('beschrijving', data.description);
      formData.append('contactVoorkeur', data.contactVoorkeur);
      formData.append('privacyAkkoord', data.privacy.toString());
      formData.append('nieuwsbrief', data.nieuwsbrief.toString());
      
      // Add file uploads from state
      uploadedFiles.forEach((file, index) => {
        formData.append('files', file);
      });

      const response = await fetch('/api/offerte', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
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
    },
    onError: (error: Error) => {
      toast({
        title: "Er is een fout opgetreden",
        description: error.message || "Probeer het opnieuw of neem telefonisch contact op.",
        variant: "destructive",
      });
    },
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files);
      if (uploadedFiles.length + newFiles.length <= 5) {
        setUploadedFiles(prev => [...prev, ...newFiles]);
      } else {
        toast({
          title: "Te veel bestanden",
          description: "U kunt maximaal 5 bestanden uploaden.",
          variant: "destructive",
        });
      }
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const onSubmit = (data: OfferteFormData) => {
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

  const tijdlijnen = [
    { value: "asap", label: "Zo snel mogelijk" },
    { value: "1-week", label: "Binnen 1 week" },
    { value: "2-weeks", label: "Binnen 2 weken" },
    { value: "1-month", label: "Binnen 1 maand" },
    { value: "3-months", label: "Binnen 3 maanden" },
    { value: "flexible", label: "Flexibel" }
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
                  {specialisten.map((specialist) => (
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
      {form.watch("specialisme") && (
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="projectType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type Project</FormLabel>
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
      )}
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
            <FormMessage />
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
              accept="image/*,.pdf"
              onChange={handleFileUpload}
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
    </div>
  );

  // Step 3: Contact Information
  const step3Content = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="firstName"
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
          name="lastName"
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
          name="phone"
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
        name="location"
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="tijdlijn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gewenste tijdlijn *</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="border border-gray-300">
                    <SelectValue placeholder="Wanneer moet het klaar zijn?" />
                  </SelectTrigger>
                  <SelectContent>
                    {tijdlijnen.map((tijdlijn) => (
                      <SelectItem key={tijdlijn.value} value={tijdlijn.value}>{tijdlijn.label}</SelectItem>
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
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Budget (optioneel)</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="border border-gray-300">
                    <SelectValue placeholder="Wat is uw budget?" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetOpties.map((budget) => (
                      <SelectItem key={budget.value} value={budget.value}>{budget.label}</SelectItem>
                    ))}
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

      <div className="space-y-4">
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
                <FormLabel className="text-sm text-gray-600 cursor-pointer">
                  🚨 Dit is urgent - neem binnen 2 uur contact op
                </FormLabel>
              </div>
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

        <FormField
          control={form.control}
          name="nieuwsbrief"
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
                  Ja, ik wil graag updates ontvangen over tips en aanbiedingen
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

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-tbgs-navy">
          Gratis Offerte Aanvragen
        </CardTitle>
        <CardDescription className="text-center">
          Vul onderstaand formulier in en ontvang binnen 24 uur een persoonlijke offerte
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <MultiStepForm
            steps={steps}
            onSubmit={() => form.handleSubmit(onSubmit)()}
            onBack={() => {}}
            isSubmitting={submitMutation.isPending}
          />
        </Form>
      </CardContent>
    </Card>
  );
}