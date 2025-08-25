import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Star, Search, Navigation, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import LocationCards from "@/components/LocationCards";
import SEOHead from "@/lib/seo";

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
  // Netherlands - Noord-Brabant
  {
    id: "eindhoven",
    name: "TBGS Eindhoven",
    city: "Eindhoven",
    region: "Noord-Brabant",
    address: "",
    postalCode: "",
    phone: "+31 40 202 6744",
    coordinates: { lat: 51.4416, lng: 5.4697 },
    services: ["TDS", "TSS", "TOS", "TBS"],
    rating: 4.8,
    reviewCount: 127,
    isMainLocation: true,
    description: "Hoofdkantoor voor alle specialistische bouwdiensten in de regio.",
    openingHours: ["Ma-Vr: 07:00-17:00", "Za: 08:00-16:00"],
    slug: "eindhoven"
  },
  {
    id: "nuenen",
    name: "TBGS Nuenen", 
    city: "Nuenen",
    region: "Noord-Brabant",
    address: "",
    postalCode: "",
    phone: "+31 40 202 6744",
    coordinates: { lat: 51.4702, lng: 5.5544 },
    services: ["TDS", "TSS", "TOS"],
    rating: 4.8,
    reviewCount: 127,
    description: "Specialistische dienstverlening in Nuenen en omgeving.",
    openingHours: ["Ma-Vr: 07:00-17:00", "Za: 08:00-16:00"],
    slug: "nuenen"
  },
  {
    id: "veldhoven",
    name: "TBGS Veldhoven",
    city: "Veldhoven", 
    region: "Noord-Brabant",
    address: "",
    postalCode: "",
    phone: "+31 40 202 6744",
    coordinates: { lat: 51.4194, lng: 5.4056 },
    services: ["TDS", "TBS", "TOS"],
    rating: 4.8,
    reviewCount: 127,
    description: "Volledige bouwservice met focus op nieuwbouw en renovatie.",
    openingHours: ["Ma-Vr: 07:00-17:00", "Za: 08:00-16:00"],
    slug: "veldhoven"
  },
  {
    id: "best",
    name: "TBGS Best",
    city: "Best",
    region: "Noord-Brabant",
    address: "",
    postalCode: "",
    phone: "+31 40 202 6744",
    coordinates: { lat: 51.5067, lng: 5.3897 },
    services: ["TDS", "TSS"],
    rating: 4.8,
    reviewCount: 127,
    description: "Gespecialiseerd in dak- en schoorsteenwerk.",
    openingHours: ["Ma-Vr: 07:00-17:00", "Za: 08:00-16:00"],
    slug: "best"
  },
  {
    id: "geldrop",
    name: "TBGS Geldrop",
    city: "Geldrop",
    region: "Noord-Brabant",
    address: "",
    postalCode: "",
    phone: "+31 40 202 6744",
    coordinates: { lat: 51.4208, lng: 5.5653 },
    services: ["TDS", "TOS"],
    rating: 4.8,
    reviewCount: 127,
    description: "Professionele dakwerken en onderhoudsdiensten.",
    openingHours: ["Ma-Vr: 07:00-17:00", "Za: 08:00-16:00"],
    slug: "geldrop"
  },
  {
    id: "mierlo",
    name: "TBGS Mierlo",
    city: "Mierlo",
    region: "Noord-Brabant",
    address: "",
    postalCode: "",
    phone: "+31 40 202 6744",
    coordinates: { lat: 51.4411, lng: 5.6222 },
    services: ["TDS", "TBS"],
    rating: 4.8,
    reviewCount: 127,
    description: "Totaaloplossingen voor dak en bouw.",
    openingHours: ["Ma-Vr: 07:00-17:00", "Za: 08:00-16:00"],
    slug: "mierlo"
  },
  {
    id: "waalre",
    name: "TBGS Waalre",
    city: "Waalre",
    region: "Noord-Brabant",
    address: "",
    postalCode: "",
    phone: "+31 40 202 6744",
    coordinates: { lat: 51.3883, lng: 5.4444 },
    services: ["TDS", "TSS", "TOS"],
    rating: 4.8,
    reviewCount: 127,
    description: "Premium bouwdiensten met persoonlijke service.",
    openingHours: ["Ma-Vr: 07:00-17:00", "Za: 08:00-16:00"],
    slug: "waalre"
  },
  {
    id: "son-en-breugel",
    name: "TBGS Son en Breugel",
    city: "Son en Breugel",
    region: "Noord-Brabant",
    address: "",
    postalCode: "",
    phone: "+31 40 202 6744",
    coordinates: { lat: 51.5167, lng: 5.4833 },
    services: ["TDS", "TSS", "TOS", "TBS"],
    rating: 4.8,
    reviewCount: 127,
    description: "Volledige bouw- en onderhoudsdiensten in Son en Breugel.",
    openingHours: ["Ma-Vr: 07:00-17:00", "Za: 08:00-16:00"],
    slug: "son-en-breugel"
  },
  // Belgium - Actieve gebieden
  {
    id: "retie",
    name: "TBGS Retie",
    city: "Retie",
    region: "Limburg, België",
    address: "",
    postalCode: "",
    phone: "+31 40 202 6744",
    coordinates: { lat: 51.2667, lng: 5.0833 },
    services: ["TDS", "TBS"],
    rating: 4.8,
    reviewCount: 127,
    description: "Grensoverschrijdende kwaliteit in Retie.",
    openingHours: ["Ma-Vr: 07:00-17:00", "Za: 08:00-16:00"],
    slug: "retie"
  },
  {
    id: "lommel",
    name: "TBGS Lommel",
    city: "Lommel",
    region: "Limburg, België",
    address: "",
    postalCode: "",
    phone: "+31 40 202 6744",
    coordinates: { lat: 51.2297, lng: 5.3136 },
    services: ["TDS", "TOS"],
    rating: 4.8,
    reviewCount: 127,
    description: "Professionele bouwdiensten in Lommel.",
    openingHours: ["Ma-Vr: 07:00-17:00", "Za: 08:00-16:00"],
    slug: "lommel"
  },
  {
    id: "hamont-achel",
    name: "TBGS Hamont-Achel",
    city: "Hamont-Achel",
    region: "Limburg, België",
    address: "",
    postalCode: "",
    phone: "+31 40 202 6744",
    coordinates: { lat: 51.2508, lng: 5.1694 },
    services: ["TDS", "TBS"],
    rating: 4.8,
    reviewCount: 127,
    description: "Vakkundige dienstverlening in Hamont-Achel.",
    openingHours: ["Ma-Vr: 07:00-17:00", "Za: 08:00-16:00"],
    slug: "hamont-achel"
  },
  {
    id: "hamont",
    name: "TBGS Hamont",
    city: "Hamont",
    region: "Limburg, België",
    address: "",
    postalCode: "",
    phone: "+31 40 202 6744",
    coordinates: { lat: 51.2500, lng: 5.1600 },
    services: ["TDS", "TSS"],
    rating: 4.8,
    reviewCount: 127,
    description: "Specialistische bouwdiensten in Hamont.",
    openingHours: ["Ma-Vr: 07:00-17:00", "Za: 08:00-16:00"],
    slug: "hamont"
  },
  // Belgium - Aangrenzende gebieden
  {
    id: "pelt",
    name: "TBGS Pelt",
    city: "Pelt",
    region: "Limburg, België",
    address: "",
    postalCode: "",
    phone: "+31 40 202 6744",
    coordinates: { lat: 51.2333, lng: 5.4167 },
    services: ["TDS", "TOS"],
    rating: 4.8,
    reviewCount: 127,
    description: "Betrouwbare dienstverlening in Pelt.",
    openingHours: ["Ma-Vr: 07:00-17:00", "Za: 08:00-16:00"],
    slug: "pelt"
  },
  {
    id: "sint-huibrechts-lille",
    name: "TBGS Sint-Huibrechts-Lille",
    city: "Sint-Huibrechts-Lille",
    region: "Limburg, België",
    address: "",
    postalCode: "",
    phone: "+31 40 202 6744",
    coordinates: { lat: 51.2167, lng: 5.6000 },
    services: ["TDS", "TSS"],
    rating: 4.8,
    reviewCount: 127,
    description: "Kwalitatieve bouwdiensten in Sint-Huibrechts-Lille.",
    openingHours: ["Ma-Vr: 07:00-17:00", "Za: 08:00-16:00"],
    slug: "sint-huibrechts-lille"
  },
  {
    id: "overpelt",
    name: "TBGS Overpelt",
    city: "Overpelt",
    region: "Limburg, België",
    address: "",
    postalCode: "",
    phone: "+31 40 202 6744",
    coordinates: { lat: 51.2064, lng: 5.4200 },
    services: ["TDS", "TOS"],
    rating: 4.8,
    reviewCount: 127,
    description: "Professionele bouwoplossingen in Overpelt.",
    openingHours: ["Ma-Vr: 07:00-17:00", "Za: 08:00-16:00"],
    slug: "overpelt"
  },
  {
    id: "neerpelt",
    name: "TBGS Neerpelt",
    city: "Neerpelt",
    region: "Limburg, België",
    address: "",
    postalCode: "",
    phone: "+31 40 202 6744",
    coordinates: { lat: 51.2281, lng: 5.4419 },
    services: ["TDS", "TBS"],
    rating: 4.8,
    reviewCount: 127,
    description: "Totaalservice voor bouw en dak in Neerpelt.",
    openingHours: ["Ma-Vr: 07:00-17:00", "Za: 08:00-16:00"],
    slug: "neerpelt"
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
    <>
      <SEOHead 
        title="TBGS Locaties - Bouwspecialisten in Nederland en België | Vind uw vestiging"
        description="Vind de dichtstbijzijnde TBGS vestiging voor dak-, schoorsteen-, onderhoud- en bouwdiensten. 15+ locaties in Nederland en België met lokale expertise."
        url="https://tbgs.nl/locaties"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Onze <span className="text-yellow-400">locaties</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              TBGS BV bedient Nederland en België met gespecialiseerde bouwdiensten. 
              Vind de dichtstbijzijnde vestiging en ontdek onze lokale expertise.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-blue-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="font-medium text-sm sm:text-base">{locations.length} Locaties</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium text-sm sm:text-base">4.8 Beoordeling</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 text-center">🇳🇱</span>
                <span className="font-medium text-sm sm:text-base">Nederland</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 text-center">🇧🇪</span>
                <span className="font-medium text-sm sm:text-base">België</span>
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
                  className="h-12 px-4 border border-gray-200 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-lg bg-white min-w-0 w-full md:w-auto"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredLocations.map((location) => (
            <Card key={location.id} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden bg-white shadow-lg">
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 relative">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">
                        {location.city}
                      </h3>
                      <div className="flex items-center gap-1 text-blue-100 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{location.region}</span>
                      </div>
                    </div>
                    {location.isMainLocation && (
                      <Badge className="bg-yellow-500 text-black border-0 text-xs font-bold px-2 py-1">
                        Hoofdkantoor
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 text-blue-100 text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{location.rating} rating</span>
                    <span>•</span>
                    <span>{location.reviewCount} reviews</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {location.description}
                  </p>

                  {/* Popular Services */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Populaire diensten:</h4>
                    <div className="grid grid-cols-3 gap-2">
                      <Link 
                        href={location.region === "Limburg, België" ? `/be/${location.slug}/daklekkage` : `/nl/${location.slug}/daklekkage`}
                        className="group/service"
                      >
                        <div className="bg-red-50 hover:bg-red-100 p-1.5 sm:p-2 rounded-lg transition-colors text-center cursor-pointer border border-red-100">
                          <div className="text-red-600 text-xs font-medium">Daklekkage</div>
                          <ArrowRight className="w-3 h-3 text-red-500 mx-auto mt-1 group-hover/service:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                      <Link 
                        href={location.region === "Limburg, België" ? `/be/${location.slug}/renovatie` : `/nl/${location.slug}/renovatie`}
                        className="group/service"
                      >
                        <div className="bg-blue-50 hover:bg-blue-100 p-1.5 sm:p-2 rounded-lg transition-colors text-center cursor-pointer border border-blue-100">
                          <div className="text-blue-600 text-xs font-medium">Renovatie</div>
                          <ArrowRight className="w-3 h-3 text-blue-500 mx-auto mt-1 group-hover/service:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                      <Link 
                        href={location.region === "Limburg, België" ? `/be/${location.slug}/onderhoud` : `/nl/${location.slug}/onderhoud`}
                        className="group/service"
                      >
                        <div className="bg-green-50 hover:bg-green-100 p-1.5 sm:p-2 rounded-lg transition-colors text-center cursor-pointer border border-green-100">
                          <div className="text-green-600 text-xs font-medium">Onderhoud</div>
                          <ArrowRight className="w-3 h-3 text-green-500 mx-auto mt-1 group-hover/service:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  

                  {/* Contact Info */}
                  <div className="space-y-2 pt-2 sm:pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Phone className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <a href={`tel:${location.phone}`} className="hover:text-blue-600 transition-colors font-medium">
                        {location.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Clock className="w-4 h-4 text-orange-600 flex-shrink-0" />
                      <span>{location.openingHours[0]}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2 sm:pt-3">
                    <Link href={location.region === "Limburg, België" ? `/be/locaties/${location.slug}` : `/nl/locaties/${location.slug}`} className="flex-1">
                      <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                        <Navigation className="w-4 h-4 mr-2" />
                        Bekijk locatie
                      </Button>
                    </Link>
                    <Button 
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4"
                      onClick={() => window.open(`tel:${location.phone}`, '_self')}
                    >
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
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

        {/* Location Cards Section */}
        <div className="mt-20 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Onze service <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">gebieden</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              TBGS bedient Nederland en België met lokale expertise en gecertificeerde specialisten in elke regio.
            </p>
          </div>
          <LocationCards showCTA={false} />
        </div>

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
    </>
  );
}