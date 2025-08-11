import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";

import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Calculator, Clock, Phone, Mail, MapPin, Shield, Star, Users } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

const offerteSchema = z.object({
  voornaam: z.string().min(2, "Voornaam moet minimaal 2 karakters zijn"),
  achternaam: z.string().min(2, "Achternaam moet minimaal 2 karakters zijn"),
  email: z.string().email("Voer een geldig e-mailadres in"),
  telefoon: z.string().min(10, "Voer een geldig telefoonnummer in"),
  adres: z.string().min(5, "Voer uw volledige adres in"),
  postcode: z.string().min(6, "Voer een geldige postcode in"),
  plaats: z.string().min(2, "Voer uw woonplaats in"),
  specialisme: z.string().min(1, "Kies een specialisme"),
  projectType: z.string().min(1, "Kies een projecttype"),
  projectOmvang: z.string().min(1, "Kies de projectomvang"),
  tijdlijn: z.string().min(1, "Kies de gewenste tijdlijn"),
  budget: z.string().optional(),
  beschrijving: z.string().min(20, "Beschrijf uw project in minimaal 20 karakters"),
  contactVoorkeur: z.string().min(1, "Kies uw contactvoorkeur"),
  privacyAkkoord: z.boolean().refine(val => val === true, "U moet akkoord gaan met de privacyverklaring"),
  nieuwsbrief: z.boolean().optional(),
});

type OfferteFormData = z.infer<typeof offerteSchema>;

export default function GratisOfferte() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<OfferteFormData>({
    resolver: zodResolver(offerteSchema),
    defaultValues: {
      privacyAkkoord: false,
      nieuwsbrief: false,
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: OfferteFormData) => {
      const response = await fetch("/api/offerte", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Offerte aangevraagd!",
        description: "We nemen binnen 24 uur contact met u op.",
      });
    },
    onError: () => {
      toast({
        title: "Er ging iets mis",
        description: "Probeer het opnieuw of neem contact met ons op.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: OfferteFormData) => {
    submitMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Bedankt voor uw aanvraag!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Wij hebben uw offerteaanvraag ontvangen en nemen binnen 24 uur contact met u op.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold mb-4">Wat gebeurt er nu?</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm font-bold">1</span>
                  </div>
                  <p className="text-gray-700">Onze specialist bekijkt uw aanvraag binnen 2 uur</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm font-bold">2</span>
                  </div>
                  <p className="text-gray-700">We nemen contact op voor een afspraak (binnen 24 uur)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm font-bold">3</span>
                  </div>
                  <p className="text-gray-700">Gratis locatiebezoek en persoonlijk advies</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm font-bold">4</span>
                  </div>
                  <p className="text-gray-700">Gedetailleerde offerte binnen 48 uur na bezoek</p>
                </div>
              </div>
            </div>
            <div className="mt-8 space-x-4">
              <Button onClick={() => setIsSubmitted(false)} className="bg-blue-600 hover:bg-blue-700">
                Nieuwe Offerte Aanvragen
              </Button>
              <Button variant="outline" onClick={() => window.location.href = "/"}>
                Terug naar Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Calculator className="w-8 h-8" />
              <h1 className="text-3xl lg:text-5xl font-bold">Gratis Offerte Aanvragen</h1>
            </div>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8">
              Krijg binnen 24 uur een vrijblijvende, gedetailleerde offerte van onze specialisten
            </p>
            
            {/* Trust Indicators */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="flex items-center justify-center space-x-3">
                <Clock className="w-6 h-6 text-blue-200" />
                <span className="text-blue-100">Reactie binnen 24u</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Shield className="w-6 h-6 text-blue-200" />
                <span className="text-blue-100">15 jaar garantie</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Star className="w-6 h-6 text-blue-200" />
                <span className="text-blue-100">4.8/5 klantbeoordeling</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span>Waarom TBGS?</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">Gecertificeerde vakmensen</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">15 jaar garantie op al ons werk</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">Gratis locatiebezoek</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">Transparante prijzen</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">Actief in NL & België</span>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold mb-3">Direct Contact</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-blue-600" />
                          <a href="tel:+31402026744" className="text-blue-600 hover:underline">040 202 67 44</a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-blue-600" />
                          <a href="mailto:info@tbgs.nl" className="text-blue-600 hover:underline">info@tbgs.nl</a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-blue-600" />
                          <span className="text-gray-600">Eindhoven & omstreken</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Form */}
              <div className="lg:col-span-2">
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle>Vertel ons over uw project</CardTitle>
                    <CardDescription>
                      Vul onderstaand formulier in en ontvang binnen 24 uur een vrijblijvende offerte
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {/* Personal Information */}
                        <div>
                          <h3 className="text-lg font-semibold mb-4 flex items-center">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <span className="text-blue-600 font-bold">1</span>
                            </div>
                            Contactgegevens
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="voornaam"
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
                              name="achternaam"
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
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>E-mail *</FormLabel>
                                  <FormControl>
                                    <Input type="email" placeholder="uw.email@voorbeeld.nl" {...field} />
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
                                    <Input placeholder="06 12 34 56 78" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        <Separator />

                        {/* Address Information */}
                        <div>
                          <h3 className="text-lg font-semibold mb-4 flex items-center">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <span className="text-blue-600 font-bold">2</span>
                            </div>
                            Projectlocatie
                          </h3>
                          <div className="space-y-4">
                            <FormField
                              control={form.control}
                              name="adres"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Adres *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Straatnaam en huisnummer" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <div className="grid md:grid-cols-2 gap-4">
                              <FormField
                                control={form.control}
                                name="postcode"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Postcode *</FormLabel>
                                    <FormControl>
                                      <Input placeholder="1234 AB" {...field} />
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
                                      <Input placeholder="Uw woonplaats" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                        </div>

                        <Separator />

                        {/* Project Information */}
                        <div>
                          <h3 className="text-lg font-semibold mb-4 flex items-center">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <span className="text-blue-600 font-bold">3</span>
                            </div>
                            Projectdetails
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <FormField
                              control={form.control}
                              name="specialisme"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Specialisme *</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Kies een specialisme" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="dakwerken">🏠 Dakwerken (TDS)</SelectItem>
                                      <SelectItem value="schoorsteenwerken">🏭 Schoorsteenwerken (TSS)</SelectItem>
                                      <SelectItem value="onderhoud">🔧 Onderhoud & Reparatie (TOS)</SelectItem>
                                      <SelectItem value="bouw">🏗️ Algemene Bouw (TBS)</SelectItem>
                                      <SelectItem value="meerdere">📋 Meerdere specialismen</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="projectType"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Type project *</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Kies projecttype" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="nieuwbouw">Nieuwbouw</SelectItem>
                                      <SelectItem value="renovatie">Renovatie</SelectItem>
                                      <SelectItem value="reparatie">Reparatie</SelectItem>
                                      <SelectItem value="onderhoud">Onderhoud</SelectItem>
                                      <SelectItem value="verbouwing">Verbouwing</SelectItem>
                                      <SelectItem value="anders">Anders</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="projectOmvang"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Projectomvang *</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Kies omvang" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="klein">Klein (1-3 dagen)</SelectItem>
                                      <SelectItem value="middel">Middel (1-2 weken)</SelectItem>
                                      <SelectItem value="groot">Groot (2-6 weken)</SelectItem>
                                      <SelectItem value="zeer-groot">Zeer groot (6+ weken)</SelectItem>
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
                                  <FormLabel>Gewenste tijdlijn *</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Wanneer wilt u starten?" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="zo-snel-mogelijk">Zo snel mogelijk</SelectItem>
                                      <SelectItem value="binnen-1-maand">Binnen 1 maand</SelectItem>
                                      <SelectItem value="binnen-3-maanden">Binnen 3 maanden</SelectItem>
                                      <SelectItem value="binnen-6-maanden">Binnen 6 maanden</SelectItem>
                                      <SelectItem value="nog-niet-zeker">Nog niet zeker</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <FormField
                            control={form.control}
                            name="budget"
                            render={({ field }) => (
                              <FormItem className="mb-4">
                                <FormLabel>Indicatief budget (optioneel)</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Selecteer budget (helpt ons bij advisering)" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="onder-5k">Onder €5.000</SelectItem>
                                    <SelectItem value="5k-15k">€5.000 - €15.000</SelectItem>
                                    <SelectItem value="15k-30k">€15.000 - €30.000</SelectItem>
                                    <SelectItem value="30k-50k">€30.000 - €50.000</SelectItem>
                                    <SelectItem value="boven-50k">Boven €50.000</SelectItem>
                                    <SelectItem value="weet-niet">Weet ik nog niet</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="beschrijving"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Projectbeschrijving *</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Beschrijf uw project zo gedetailleerd mogelijk. Hoe meer informatie, hoe beter we u kunnen adviseren..."
                                    className="min-h-[120px]"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <Separator />

                        {/* Contact Preferences */}
                        <div>
                          <h3 className="text-lg font-semibold mb-4 flex items-center">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <span className="text-blue-600 font-bold">4</span>
                            </div>
                            Contact & Privacy
                          </h3>
                          
                          <FormField
                            control={form.control}
                            name="contactVoorkeur"
                            render={({ field }) => (
                              <FormItem className="mb-4">
                                <FormLabel>Contactvoorkeur *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Hoe nemen we contact op?" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="telefoon">Telefoon</SelectItem>
                                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                                    <SelectItem value="email">E-mail</SelectItem>
                                    <SelectItem value="geen-voorkeur">Geen voorkeur</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="space-y-4">
                            <FormField
                              control={form.control}
                              name="privacyAkkoord"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <div className="space-y-1 leading-none">
                                    <FormLabel className="text-sm">
                                      Ik ga akkoord met de{" "}
                                      <a href="/privacy" className="text-blue-600 hover:underline">
                                        privacyverklaring
                                      </a>{" "}
                                      en algemene voorwaarden *
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
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <div className="space-y-1 leading-none">
                                    <FormLabel className="text-sm">
                                      Ja, ik wil tips en aanbiedingen ontvangen via de nieuwsbrief
                                    </FormLabel>
                                  </div>
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                          <Button
                            type="submit"
                            disabled={submitMutation.isPending}
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            {submitMutation.isPending ? (
                              <>
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                Bezig met versturen...
                              </>
                            ) : (
                              <>
                                <Calculator className="w-5 h-5 mr-3" />
                                Gratis Offerte Aanvragen
                              </>
                            )}
                          </Button>
                          <p className="text-center text-sm text-gray-500 mt-4">
                            Reactie binnen 24 uur • Geheel vrijblijvend • Gratis locatiebezoek
                          </p>
                        </div>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}