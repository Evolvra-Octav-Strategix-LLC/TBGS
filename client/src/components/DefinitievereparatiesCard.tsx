import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Wrench, Home, Building, Layers } from "lucide-react";

interface DefinitievereparatiesCardProps {
  onOpenContactModal: () => void;
}

export default function DefinitievereparatiesCard({ onOpenContactModal }: DefinitievereparatiesCardProps) {
  const services = [
    {
      title: "Renovatie Daken",
      icon: Home,
      description: "Complete dakrenovaties voor woonhuizen en bedrijfspanden",
      features: ["Isolatie verbetering", "Moderne materialen", "Energiebesparing", "Waardevermeerdering"]
    },
    {
      title: "Nieuwbouw Daken",
      icon: Building,
      description: "Professionele dakwerkzaamheden voor nieuwbouw projecten",
      features: ["Moderne technieken", "Kwaliteitsgarantie", "Tijdige oplevering", "Bouwnorm compliant"]
    },
    {
      title: "Platte Daken",
      icon: Layers,
      description: "Specialist in platte daken met EPDM en bitumen",
      features: ["Waterafvoer systemen", "Isolatie oplossingen", "Onderhoudscontracten", "Duurzame materialen"]
    },
    {
      title: "Hellende Daken",
      icon: Wrench,
      description: "Traditionele en moderne hellende daken vakkundig uitgevoerd",
      features: ["Dakpannen herstel", "Nokken en randen", "Dakgoot systemen", "Ventilatie optimalisatie"]
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-800 mb-4">
              DEFINITIEVE REPARATIES
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Dakoplossingen
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Van renovatie tot nieuwbouw - wij leveren definitieve dakoplossingen voor elke situatie. 
              Professioneel uitgevoerd met 15 jaar garantie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="relative overflow-hidden border-2 hover:border-orange-200 transition-all duration-300 hover:shadow-lg group">
                <CardHeader className="text-center pb-3">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-200 transition-colors">
                    <service.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Klaar voor Uw Dakproject?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Onze specialisten maken een gratis inspectie en offerte voor uw definitieve dakoplossing. 
                Van klein onderhoud tot complete renovaties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={onOpenContactModal}
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3"
                >
                  <Wrench className="w-5 h-5 mr-2" />
                  Gratis Inspectie Aanvragen
                </Button>
                <Button
                  onClick={() => window.open('tel:+31402026744', '_self')}
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-semibold px-8 py-3"
                >
                  Direct Bellen: 040 202 6744
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}