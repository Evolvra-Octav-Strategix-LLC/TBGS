import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    serviceType: "",
    description: "",
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) {
      toast({
        title: "Privacy Verklaring",
        description: "U moet akkoord gaan met de privacyverklaring om door te gaan.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", formData);
      toast({
        title: "Bedankt voor uw aanvraag!",
        description: "Wij nemen binnen 24 uur contact met u op.",
      });
      onClose();
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        location: "",
        serviceType: "",
        description: "",
        privacy: false,
      });
    } catch (error) {
      toast({
        title: "Er is een fout opgetreden",
        description: "Probeer het opnieuw of neem telefonisch contact op.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-screen overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Gratis Offerte Aanvragen</h3>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Voornaam *</label>
                <Input
                  type="text"
                  required
                  placeholder="Uw voornaam"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Achternaam *</label>
                <Input
                  type="text"
                  required
                  placeholder="Uw achternaam"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">E-mailadres *</label>
                <Input
                  type="email"
                  required
                  placeholder="uw.email@voorbeeld.nl"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Telefoonnummer *</label>
                <Input
                  type="tel"
                  required
                  placeholder="+31 6 12 34 56 78"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Locatie *</label>
              <Input
                type="text"
                required
                placeholder="Stad, postcode"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Type werkzaamheden *</label>
              <Select value={formData.serviceType} onValueChange={(value) => setFormData({ ...formData, serviceType: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Kies uw specialisme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dak">Dakwerken (TDS)</SelectItem>
                  <SelectItem value="schoorsteen">Schoorsteenwerken (TSS)</SelectItem>
                  <SelectItem value="onderhoud">Onderhoud (TOS)</SelectItem>
                  <SelectItem value="bouw">Bouwwerken (TBS)</SelectItem>
                  <SelectItem value="combinatie">Combinatie van diensten</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Beschrijving project</label>
              <Textarea
                rows={4}
                placeholder="Beschrijf uw project zo duidelijk mogelijk..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-start space-x-3">
                <i className="fas fa-info-circle text-tbgs-navy text-lg mt-1"></i>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold mb-1">Wat kunt u verwachten?</p>
                  <ul className="space-y-1 text-xs">
                    <li>• Reactie binnen 24 uur op werkdagen</li>
                    <li>• Gratis adviesgesprek en inmeting</li>
                    <li>• Vrijblijvende offerte op maat</li>
                    <li>• Geen verrassingen, transparante prijzen</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Checkbox
                id="privacy"
                checked={formData.privacy}
                onCheckedChange={(checked) => setFormData({ ...formData, privacy: checked as boolean })}
              />
              <label htmlFor="privacy" className="text-sm text-gray-600">
                Ik ga akkoord met de <a href="#" className="text-tbgs-navy hover:underline">privacyverklaring</a> en algemene voorwaarden *
              </label>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-tbgs-navy text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors"
              disabled={isSubmitting}
            >
              <i className="fas fa-paper-plane mr-3"></i>
              {isSubmitting ? "Bezig met versturen..." : "Verstuur Offerteaanvraag"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
