import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Star, 
  CheckCircle2, 
  Award, 
  Shield, 
  MessageCircle,
  Navigation,
  ArrowRight,
  Calendar,
  Users,
  Wrench
} from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/lib/seo";

interface ServiceLocationTemplateProps {
  // Core Data
  service: "daklekkage" | "renovatie" | "onderhoud" | "schoorsteen";
  city: string;
  citySlug: string;
  country: "nl" | "be";
  region: string;
  nearbyAreas: string[];
  
  // SEO Data
  serviceTitle: string;
  serviceDescription: string;
  pageTitle: string;
  metaDescription: string;
  
  // Content
  heroDescription: string;
  problemsTitle: string;
  problems: string[];
  solutionsTitle: string;
  solutions: string[];
  
  // Project showcase
  projects?: {
    title: string;
    description: string;
    beforeImage?: string;
    afterImage?: string;
  }[];
  
  // Benefits/USPs
  benefits: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  
  // FAQ
  faqs: {
    question: string;
    answer: string;
  }[];
  
  // Contact
  phone: string;
  onOpenContactModal: () => void;
}

export default function ServiceLocationTemplate({
  service,
  city,
  citySlug,
  country,
  region,
  nearbyAreas,
  serviceTitle,
  serviceDescription,
  pageTitle,
  metaDescription,
  heroDescription,
  problemsTitle,
  problems,
  solutionsTitle,
  solutions,
  projects = [],
  benefits,
  faqs,
  phone,
  onOpenContactModal
}: ServiceLocationTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const getServiceColor = () => {
    switch(service) {
      case "daklekkage": return "red";
      case "renovatie": return "blue"; 
      case "onderhoud": return "green";
      case "schoorsteen": return "blue";
      default: return "blue";
    }
  };

  const color = getServiceColor();
  const colorClasses = {
    red: {
      bg: "bg-red-600",
      hover: "hover:bg-red-700",
      text: "text-red-600",
      border: "border-red-200",
      accent: "bg-red-50"
    },
    blue: {
      bg: "bg-blue-600", 
      hover: "hover:bg-blue-700",
      text: "text-blue-600",
      border: "border-blue-200",
      accent: "bg-blue-50"
    },
    green: {
      bg: "bg-green-600",
      hover: "hover:bg-green-700", 
      text: "text-green-600",
      border: "border-green-200",
      accent: "bg-green-50"
    }
  };

  const currentColors = colorClasses[color];

  // Generate structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `https://tbgs.nl/${country}/${citySlug}/${service}#organization`,
        "name": "TBGS BV - Totaal Bouw Groep Specialisten",
        "description": `${serviceTitle} specialist in ${city}, ${region}`,
        "url": `https://tbgs.nl/${country}/${citySlug}/${service}`,
        "telephone": phone,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bedrijvenpark",
          "addressLocality": city,
          "addressRegion": region,
          "addressCountry": country === "nl" ? "NL" : "BE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "51.4416",
          "longitude": "5.4697"
        },
        "openingHours": [
          "Mo-Fr 07:00-17:00",
          "Sa 08:00-16:00"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "127"
        },
        "areaServed": nearbyAreas.join(", ")
      },
      {
        "@type": "Service", 
        "@id": `https://tbgs.nl/${country}/${citySlug}/${service}#service`,
        "name": `${serviceTitle} ${city}`,
        "description": serviceDescription,
        "provider": {
          "@id": `https://tbgs.nl/${country}/${citySlug}/${service}#organization`
        },
        "areaServed": {
          "@type": "City",
          "name": city
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer", 
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={metaDescription}
        url={`https://tbgs.nl/${country}/${citySlug}/${service}`}
      />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 2)
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className={`${currentColors.bg} text-white py-16 lg:py-24`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                {city}, {region}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {serviceTitle} in {city}
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                {heroDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  onClick={onOpenContactModal}
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50 font-bold text-lg px-8 py-4"
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  Gratis Offerte
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-700 font-semibold text-lg px-8 py-4"
                  onClick={() => window.open(`tel:${phone}`, '_self')}
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Direct Bellen
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-blue-200 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>4.8/5 sterren</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>25+ jaar ervaring</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Volledig verzekerd</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Explanation Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    {problemsTitle}
                  </h2>
                  <div className="space-y-4">
                    {problems.map((problem, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{problem}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    {solutionsTitle}
                  </h2>
                  <div className="space-y-4">
                    {solutions.map((solution, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-6 h-6 ${currentColors.text} flex-shrink-0 mt-0.5`} />
                        <p className="text-gray-700 leading-relaxed">{solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={`py-16 lg:py-20 ${currentColors.accent}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Waarom Kiezen Klanten in {city} voor TBGS?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Al meer dan 25 jaar de betrouwbare specialist voor {serviceTitle.toLowerCase()} in {city} en omgeving.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 ${currentColors.bg} rounded-xl flex items-center justify-center mb-4`}>
                        <div className="text-white">
                          {benefit.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Veelgestelde Vragen over {serviceTitle} in {city}
                </h2>
                <p className="text-xl text-gray-600">
                  De antwoorden op de meest gestelde vragen van klanten uit {city}.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="border border-gray-200">
                    <CardContent className="p-0">
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          <ArrowRight 
                            className={`w-5 h-5 ${currentColors.text} transform transition-transform ${
                              openFaq === index ? 'rotate-90' : ''
                            }`}
                          />
                        </div>
                      </button>
                      {openFaq === index && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Local Trust & Contact Section */}
        <section className={`py-16 lg:py-20 ${currentColors.bg} text-white`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Direct Contact met TBGS in {city}
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Bereikbaar voor spoedeisende {serviceTitle.toLowerCase()} in {city}, {nearbyAreas.slice(0, 3).join(", ")} en omgeving.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Phone className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                  <h3 className="font-semibold mb-2">Telefoon</h3>
                  <p className="text-blue-100">{phone}</p>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                  <h3 className="font-semibold mb-2">Openingstijden</h3>
                  <p className="text-blue-100">Ma-Vr 07:00-17:00</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                  <h3 className="font-semibold mb-2">Werkgebied</h3>
                  <p className="text-blue-100">{city} + 25km</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={onOpenContactModal}
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8"
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  Gratis Offerte Aanvragen
                </Button>
                <Button 
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold px-8"
                  onClick={() => window.open(`tel:${phone}`, '_self')}
                >
                  <Phone className="w-5 h-5 mr-3" />
                  {phone}
                </Button>
                <Button 
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold px-8"
                  onClick={() => window.open(`https://wa.me/${phone.replace(/\s+/g, '').replace('+', '')}?text=Hallo! Ik heb een vraag over ${serviceTitle.toLowerCase()} in ${city}.`, '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Meer TBGS Diensten in {region}
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Link href={`/${country}/${citySlug}`}>
                  <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <Navigation className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                        TBGS in {city}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2">
                        Alle diensten overzicht
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/locaties">
                  <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                        Alle Locaties
                      </h3>
                      <p className="text-sm text-gray-600 mt-2">
                        Vind uw vestiging
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/kennisbank">
                  <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <Wrench className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                        Kennisbank
                      </h3>
                      <p className="text-sm text-gray-600 mt-2">
                        Tips & Gidsen
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}