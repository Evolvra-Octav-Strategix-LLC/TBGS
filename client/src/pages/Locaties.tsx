import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Star, Search, Navigation } from "lucide-react";
import { Link } from "wouter";

interface Location {
  id: string;
  name: string;
  city: string;
  region: string;
  address: string;
  postalCode: string;
  phone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  services: string[];
  rating: number;
  reviewCount: number;
  isMainLocation?: boolean;
  description: string;
  openingHours: string[];
  slug: string;
}

const locations: Location[] = [
  {
    id: "eindhoven",
    name: "TBGS Eindhoven",
    city: "Eindhoven",
    region: "Noord-Brabant",
    address: "Hoofdstraat 123",
    postalCode: "5611 AB",
    phone: "+31 40 202 6744",
    coordinates: { lat: 51.4416, lng: 5.4697 },
    services: ["TDS - Totaal Dak Specialist", "TSS - Totaal Schoorsteen Specialist", "TOS - Totaal Onderhoud Specialist", "TBS - Totaal Bouw Specialist"],
    rating: 4.8,
    reviewCount: 127,
    isMainLocation: true,
    description: "Ons hoofdkantoor in Eindhoven bedient de gehele regio Noord-Brabant met alle specialistische bouwdiensten.",
    openingHours: ["Ma-Vr: 07:00-17:00", "Za: 08:00-16:00", "Zo: Gesloten"],
    slug: "eindhoven"
  },
  {
    id: "nuenen",
    name: "TBGS Nuenen",
    city: "Nuenen",
    region: "Noord-Brabant", 
    address: "Dorpsstraat 45",
    postalCode: "5671 BC",
    phone: "+31 40 202 6744",
    coordinates: { lat: 51.4702, lng: 5.5544 },
    services: ["TDS - Totaal Dak Specialist", "TSS - Totaal Schoorsteen Specialist", "TOS - Totaal Onderhoud Specialist"],
    rating: 4.7,
    reviewCount: 89,
    description: "Specialistische dienstverlening in Nuenen en omgeving, bekend van Vincent van Gogh.",
    openingHours: ["Ma-Vr: 07:30-17:00", "Za: 08:00-15:00", "Zo: Gesloten"],
    slug: "nuenen"
  },
  {
    id: "veldhoven",
    name: "TBGS Veldhoven",
    city: "Veldhoven",
    region: "Noord-Brabant",
    address: "Industrieweg 67",
    postalCode: "5504 AB",
    phone: "+31 40 202 6744",
    coordinates: { lat: 51.4194, lng: 5.4056 },
    services: ["TDS - Totaal Dak Specialist", "TBS - Totaal Bouw Specialist", "TOS - Totaal Onderhoud Specialist"],
    rating: 4.9,
    reviewCount: 156,
    description: "Volledige bouwservice in Veldhoven met focus op nieuwbouw en renovatie projecten.",
    openingHours: ["Ma-Vr: 07:00-17:30", "Za: 08:00-16:00", "Zo: Gesloten"],
    slug: "veldhoven"
  },
  {
    id: "best",
    name: "TBGS Best",
    city: "Best",
    region: "Noord-Brabant",
    address: "Beatrixlaan 89",
    postalCode: "5684 CD",
    phone: "+31 40 202 6744",
    coordinates: { lat: 51.5067, lng: 5.3897 },
    services: ["TDS - Totaal Dak Specialist", "TSS - Totaal Schoorsteen Specialist"],
    rating: 4.6,
    reviewCount: 73,
    description: "Gespecialiseerd in dak- en schoorsteenwerk in Best en de omliggende gemeenten.",
    openingHours: ["Ma-Vr: 08:00-17:00", "Za: 09:00-15:00", "Zo: Gesloten"],
    slug: "best"
  },
  {
    id: "geldrop",
    name: "TBGS Geldrop",
    city: "Geldrop",
    region: "Noord-Brabant",
    address: "Hoge Ham 12",
    postalCode: "5664 EF",
    phone: "+31 40 202 6744",
    coordinates: { lat: 51.4208, lng: 5.5653 },
    services: ["TDS - Totaal Dak Specialist", "TOS - Totaal Onderhoud Specialist"],
    rating: 4.7,
    reviewCount: 94,
    description: "Professionele dakwerken en onderhoudsdiensten in Geldrop-Mierlo regio.",
    openingHours: ["Ma-Vr: 07:30-17:00", "Za: 08:30-15:30", "Zo: Gesloten"],
    slug: "geldrop"
  },
  {
    id: "mierlo",
    name: "TBGS Mierlo",
    city: "Mierlo", 
    region: "Noord-Brabant",
    address: "Kerkstraat 34",
    postalCode: "5731 JK",
    phone: "+31 40 202 6744",
    coordinates: { lat: 51.4411, lng: 5.6222 },
    services: ["TDS - Totaal Dak Specialist", "TBS - Totaal Bouw Specialist"],
    rating: 4.8,
    reviewCount: 67,
    description: "Totaaloplossingen voor dak en bouw in het mooie Mierlo en omstreken.",
    openingHours: ["Ma-Vr: 07:30-17:00", "Za: 08:00-15:00", "Zo: Gesloten"],
    slug: "mierlo"
  },
  {
    id: "waalre",
    name: "TBGS Waalre",
    city: "Waalre",
    region: "Noord-Brabant", 
    address: "Wilhelminalaan 56",
    postalCode: "5582 AB",
    phone: "+31 40 202 6744",
    coordinates: { lat: 51.3883, lng: 5.4444 },
    services: ["TDS - Totaal Dak Specialist", "TSS - Totaal Schoorsteen Specialist", "TOS - Totaal Onderhoud Specialist"],
    rating: 4.9,
    reviewCount: 112,
    description: "Premium bouwdiensten in Waalre met persoonlijke service en vakmanschap.",
    openingHours: ["Ma-Vr: 07:00-17:30", "Za: 08:00-16:00", "Zo: Gesloten"],
    slug: "waalre"
  },
  {
    id: "hamont-achel",
    name: "TBGS Hamont-Achel",
    city: "Hamont-Achel",
    region: "Limburg, België",
    address: "Stationsstraat 78",
    postalCode: "3930",
    phone: "+32 11 44 55 66",
    coordinates: { lat: 51.2508, lng: 5.1694 },
    services: ["TDS - Totaal Dak Specialist", "TBS - Totaal Bouw Specialist"],
    rating: 4.6,
    reviewCount: 58,
    description: "Grensoverschrijdende kwaliteit in Hamont-Achel met Nederlandse precisie en Belgische gastvrijheid.",
    openingHours: ["Ma-Vr: 08:00-17:00", "Za: 09:00-15:00", "Zo: Gesloten"],
    slug: "hamont-achel"
  }
];

export default function Locaties() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("Alle regio's");

  const regions = ["Alle regio's", "Noord-Brabant", "Limburg, België"];

  const filteredLocations = locations.filter(location => {
    const matchesSearch = location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesRegion = selectedRegion === "Alle regio's" || location.region === selectedRegion;
    
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Onze <span className="text-yellow-400">Locaties</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              TBGS BV bedient Nederland en België met gespecialiseerde bouwdiensten. 
              Vind de dichtstbijzijnde vestiging en ontdek onze lokale expertise.
            </p>
            <div className="flex items-center justify-center gap-4 text-blue-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">{locations.length} Vestigingen</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">4.7+ Beoordeling</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-center text-gray-800">
                Vind uw dichtstbijzijnde TBGS vestiging
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Zoek op stad, service of specialisme..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 text-lg border-gray-200 focus:border-blue-500"
                  />
                </div>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="h-12 px-4 border border-gray-200 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-lg bg-white"
                >
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLocations.map((location) => (
            <Card key={location.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden bg-white">
              <CardHeader className="relative pb-4">
                {location.isMainLocation && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-lg">
                    Hoofdkantoor
                  </Badge>
                )}
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {location.name}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium">{location.city}, {location.region}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-gray-800">{location.rating}</span>
                    <span className="text-gray-500 text-sm">({location.reviewCount} reviews)</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">{location.description}</p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <div className="font-medium">{location.address}</div>
                      <div className="text-sm text-gray-500">{location.postalCode} {location.city}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-700">
                    <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <a href={`tel:${location.phone}`} className="font-medium hover:text-blue-600 transition-colors">
                      {location.phone}
                    </a>
                  </div>

                  <div className="flex items-start gap-3 text-gray-700">
                    <Clock className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      {location.openingHours.map((hours, index) => (
                        <div key={index} className={index === 0 ? "font-medium" : ""}>{hours}</div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Beschikbare diensten:</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.services.map((service) => (
                      <Badge key={service} variant="secondary" className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100">
                        {service.split(' - ')[0]}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Link href={`/locaties/${location.slug}`} className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg">
                      <Navigation className="w-4 h-4 mr-2" />
                      Meer info
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="flex-1 border-blue-200 text-blue-700 hover:bg-blue-50"
                    onClick={() => window.open(`tel:${location.phone}`, '_self')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Bellen
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredLocations.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">Geen locaties gevonden voor "{searchTerm}"</div>
            <Button 
              variant="outline" 
              onClick={() => setSearchTerm("")}
              className="mt-4"
            >
              Toon alle locaties
            </Button>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 text-white border-0 shadow-xl">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">Niet zeker welke vestiging u het beste kan helpen?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Neem contact op met ons hoofdkantoor. Wij zorgen ervoor dat u met de juiste specialist wordt verbonden.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  +31 40 202 6744
                </Button>
                <span className="text-blue-200">of</span>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 px-8">
                    Stuur een bericht
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}