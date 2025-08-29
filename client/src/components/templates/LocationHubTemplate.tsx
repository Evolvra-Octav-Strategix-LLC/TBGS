import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Header from "../Header";
import Footer from "../Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, ExternalLink } from "lucide-react";

interface Service {
  slug: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: "red" | "blue" | "green" | "orange";
  popular?: boolean;
}

interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

interface LocationHubTemplateProps {
  city: string;
  citySlug: string;
  country: "nl" | "be";
  region: string;
  nearbyCities: string[];
  landmarks: string[];
  pageTitle: string;
  metaDescription: string;
  heroDescription: string;
  cityDescription: string;
  services: Service[];
  reviews: Review[];
  onOpenContactModal: () => void;
}

export default function LocationHubTemplate({
  city,
  citySlug,
  country,
  region,
  nearbyCities,
  landmarks,
  pageTitle,
  metaDescription,
  heroDescription,
  cityDescription,
  services,
  reviews,
  onOpenContactModal
}: LocationHubTemplateProps) {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "red": return "bg-tbgs-red text-white";
      case "blue": return "bg-tbgs-blue text-white";
      case "green": return "bg-tbgs-green text-white";
      case "orange": return "bg-tbgs-orange text-white";
      default: return "bg-gray-900 text-white";
    }
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      <Header onOpenContactModal={onOpenContactModal} />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-tbgs-navy to-gray-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                TBGS {city}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                {heroDescription}
              </p>
              <Button onClick={onOpenContactModal} size="lg" className="bg-tbgs-red hover:bg-red-700">
                Gratis Offerte Aanvragen
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Onze Diensten in {city}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Professionele bouwdiensten voor particulieren en bedrijven in {city} en omgeving.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <Card key={service.slug} className="relative group hover:shadow-lg transition-shadow">
                  {service.popular && (
                    <Badge className="absolute -top-2 -right-2 bg-tbgs-red text-white">
                      Populair
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 rounded-full ${getColorClasses(service.color)} mx-auto flex items-center justify-center mb-4`}>
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={`/${country}/${citySlug}/${service.slug}`}>
                      <Button variant="outline" className="w-full group-hover:bg-tbgs-navy group-hover:text-white">
                        Meer Info <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* City Info */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Waarom TBGS in {city}?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {cityDescription}
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Bekende locaties in {city}:
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {landmarks.map((landmark, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-tbgs-red" />
                        <span className="text-sm">{landmark}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Ook werkzaam in de omgeving:
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {nearbyCities.map((nearbyCity, index) => (
                    <div key={index} className="text-gray-600 text-sm">
                      {nearbyCity}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Wat Klanten in {city} Zeggen
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <p className="text-sm text-gray-600">{review.location}</p>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">"{review.text}"</p>
                    <div className="text-sm text-gray-500">
                      <p>{review.service}</p>
                      <p>{review.date}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-tbgs-navy text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">
              Klaar voor Uw Project in {city}?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Neem contact met ons op voor een gratis offerte en persoonlijk advies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={onOpenContactModal} size="lg" className="bg-tbgs-red hover:bg-red-700">
                Gratis Offerte
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-tbgs-navy">
                Bel Direct: 040-2543266
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer backgroundColor="bg-gray-900" accentColor="text-tbgs-navy" />
    </>
  );
}