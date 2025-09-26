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
  Wrench,
  Home,
  Building2,
  Hammer,
  Loader2
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";
import SEOHead from "@/lib/seo";
import { useGoogleReviews } from "@/hooks/useGoogleReviews";

interface LocationHubTemplateProps {
  // Core Data
  city: string;
  citySlug: string;
  country: "nl" | "be";
  region: string;
  nearbyCities: string[];
  landmarks: string[];
  
  // SEO Data  
  pageTitle: string;
  metaDescription: string;
  
  // Content
  heroDescription: string;
  cityDescription: string;
  
  // Services available in this location
  services: {
    slug: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    color: "red" | "blue" | "green" | "orange";
    popular?: boolean;
  }[];
  
  // Reviews/testimonials from this city (fallback if Google reviews fail)
  reviews?: {
    name: string;
    location: string;
    rating: number;
    text: string;
    service: string;
    date: string;
  }[];
  
  // Projects in this city
  projects?: {
    title: string;
    description: string;
    service: string;
    image?: string;
  }[];
  
  // FAQ specific to this location
  faqs: {
    question: string;
    answer: string;
  }[];
  
  // Contact
  phone: string;
  coordinates: { lat: number; lng: number };
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
  reviews = [],
  projects = [],
  faqs,
  phone,
  coordinates,
  onOpenContactModal
}: LocationHubTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Fetch real Google reviews
  const { data: googleData, isLoading: isLoadingReviews } = useGoogleReviews(city, country);
  
  // Use Google reviews if available, otherwise fallback to mock reviews
  const displayReviews = googleData?.reviews && googleData.reviews.length > 0 ? googleData.reviews : reviews;
  const businessRating = googleData?.rating || 4.8;
  const totalReviews = googleData?.totalReviews || displayReviews.length;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [city, citySlug]);

  // Generate structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `https://tbgs.nl/${country}/${citySlug}#organization`,
        "name": `TBGS ${city} - Totaal Bouw Groep Specialisten`,
        "description": `Dak, Schoorsteen, Onderhoud & Bouw specialist in ${city}, ${region}`,
        "url": `https://tbgs.nl/${country}/${citySlug}`,
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
          "latitude": coordinates.lat.toString(),
          "longitude": coordinates.lng.toString()
        },
        "openingHours": [
          "Mo-Fr 07:00-17:00",
          "Sa 08:00-16:00"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": businessRating.toString(),
          "reviewCount": totalReviews.toString()
        },
        "areaServed": nearbyCities.join(", "),
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `Bouwdiensten ${city}`,
          "itemListElement": services.map(service => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": service.title,
              "description": service.description
            }
          }))
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

  const getServiceColors = (color: string) => {
    const colorMap = {
      red: {
        bg: "bg-red-600",
        hover: "hover:bg-red-700",
        text: "text-red-600",
        accent: "bg-red-50",
        border: "border-red-200"
      },
      blue: {
        bg: "bg-blue-600",
        hover: "hover:bg-blue-700", 
        text: "text-blue-600",
        accent: "bg-blue-50",
        border: "border-blue-200"
      },
      green: {
        bg: "bg-green-600",
        hover: "hover:bg-green-700",
        text: "text-green-600", 
        accent: "bg-green-50",
        border: "border-green-200"
      },
      orange: {
        bg: "bg-orange-600",
        hover: "hover:bg-orange-700",
        text: "text-orange-600",
        accent: "bg-orange-50", 
        border: "border-orange-200"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={metaDescription}
        url={`https://tbgs.nl/${country}/${citySlug}`}
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
        <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                {city}, {region}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                TBGS in {city}
              </h1>
              
              <h2 className="text-xl md:text-2xl text-blue-100 mb-2 font-semibold">
                Dak, Schoorsteen, Onderhoud & Bouw
              </h2>
              
              <p className="text-lg md:text-xl text-blue-200 mb-8 leading-relaxed max-w-3xl mx-auto">
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
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-8 py-4"
                  onClick={() => window.open(`https://wa.me/31614595142?text=Hallo Team TBGS, ik heb een vraag over TBGS diensten in ${city}. Kunnen jullie mij helpen?`, '_blank')}
                >
                  <FaWhatsapp className="w-5 h-5 mr-3" />
                  WhatsApp ({city})
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

        {/* Service Overview Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Onze Diensten in {city}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Van daklekkage tot complete renovatie - TBGS is uw betrouwbare partner voor alle bouwgerelateerde werkzaamheden in {city}.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => {
                  const colors = getServiceColors(service.color);
                  return (
                    <Link 
                      key={index}
                      href={`/${country}/${citySlug}/${service.slug}`}
                      className="group"
                    >
                      <Card className="group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 border-0 overflow-hidden bg-white shadow-lg relative">
                        {service.popular && (
                          <Badge className="absolute top-4 right-4 bg-yellow-500 text-black border-0 text-xs font-bold">
                            Populair
                          </Badge>
                        )}
                        <CardContent className="p-0">
                          {/* Header */}
                          <div className={`${colors.bg} text-white p-6 relative`}>
                            <div className={`w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4`}>
                              {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                              {service.title}
                            </h3>
                            <p className="text-blue-100 text-sm">
                              {service.description}
                            </p>
                          </div>

                          {/* Content */}
                          <div className="p-6">
                            <div className="flex items-center justify-between">
                              <span className={`text-sm font-medium ${colors.text}`}>
                                Meer informatie
                              </span>
                              <ArrowRight className={`w-4 h-4 ${colors.text} group-hover:translate-x-1 transition-transform`} />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* About the City Section */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  TBGS in {city}
                </h2>
                <p className="text-xl text-gray-600">
                  {cityDescription}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Waarom {city} Kiest voor TBGS
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Lokale specialisten met ervaring</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Snelle service in {city} en omgeving</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Bekend met lokale regelgeving</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Uitstekende referenties in {region}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Bekende Locaties in {city}
                  </h3>
                  <div className="space-y-2">
                    {landmarks.map((landmark, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">{landmark}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Ook actief in:</h4>
                    <p className="text-gray-600">{nearbyCities.join(", ")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        {(displayReviews.length > 0 || isLoadingReviews) && (
          <section className="py-16 lg:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {googleData ? 'Google Reviews' : 'Wat Klanten in'} {city} {googleData ? '' : 'Zeggen'}
                  </h2>
                  {isLoadingReviews ? (
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span className="text-gray-600">Reviews laden...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <div className="flex gap-1">
                        {[...Array(Math.round(businessRating))].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                        {[...Array(5 - Math.round(businessRating))].map((_, i) => (
                          <Star key={i + Math.round(businessRating)} className="w-5 h-5 text-gray-300" />
                        ))}
                      </div>
                      <span className="text-lg font-semibold text-gray-900">{businessRating.toFixed(1)}/5</span>
                      <span className="text-gray-600">({totalReviews} reviews)</span>
                      {googleData && (
                        <Badge variant="secondary" className="ml-2">
                          <Star className="w-3 h-3 mr-1" />
                          Google Reviews
                        </Badge>
                      )}
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {isLoadingReviews ? (
                    // Loading skeleton
                    [...Array(3)].map((_, index) => (
                      <Card key={index} className="border border-gray-200">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <div key={i} className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
                            ))}
                          </div>
                          <div className="space-y-2 mb-4">
                            <div className="h-4 bg-gray-200 rounded animate-pulse" />
                            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
                          </div>
                          <div className="border-t pt-4">
                            <div className="flex items-center justify-between text-sm">
                              <div>
                                <div className="h-4 bg-gray-200 rounded animate-pulse w-20 mb-1" />
                                <div className="h-3 bg-gray-200 rounded animate-pulse w-16" />
                              </div>
                              <div className="text-right">
                                <div className="h-3 bg-gray-200 rounded animate-pulse w-12 mb-1" />
                                <div className="h-3 bg-gray-200 rounded animate-pulse w-16" />
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    displayReviews.slice(0, 6).map((review, index) => (
                      <Card key={index} className="border border-gray-200">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-1 mb-3">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                            {[...Array(5 - review.rating)].map((_, i) => (
                              <Star key={i + review.rating} className="w-4 h-4 text-gray-300" />
                            ))}
                          </div>
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            "{review.text.length > 150 ? review.text.substring(0, 150) + '...' : review.text}"
                          </p>
                          <div className="border-t pt-4">
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-2">
                                {googleData && 'profilePhoto' in review && (
                                  <img 
                                    src={review.profilePhoto} 
                                    alt={review.name}
                                    className="w-8 h-8 rounded-full"
                                    onError={(e) => {
                                      e.currentTarget.style.display = 'none';
                                    }}
                                  />
                                )}
                                <div>
                                  <div className="font-semibold text-gray-900">{review.name}</div>
                                  <div className="text-gray-600">
                                    {'location' in review ? review.location : city}
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-gray-600">
                                  {'service' in review ? review.service : 'Google Review'}
                                </div>
                                <div className="text-gray-500">{review.date}</div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Veelgestelde Vragen over TBGS in {city}
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
                            className={`w-5 h-5 text-blue-600 transform transition-transform ${
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

        {/* Contact & Location Section */}
        <section className="py-16 lg:py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Direct Contact met TBGS {city}
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Bereikbaar voor alle bouwgerelateerde vragen in {city} en {nearbyCities.slice(0, 3).join(", ")}.
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
                  className="bg-green-500 hover:bg-green-600 text-white font-bold px-8"
                  onClick={() => window.open(`https://wa.me/31614595142?text=Hallo Team TBGS, ik heb een vraag over TBGS diensten in ${city}. Kunnen jullie mij helpen?`, '_blank')}
                >
                  <FaWhatsapp className="w-5 h-5 mr-3" />
                  WhatsApp ({city})
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Links Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Meer TBGS Informatie
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/locaties">
                  <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                        Alle Locaties
                      </h3>
                      <p className="text-sm text-gray-600 mt-2">
                        Vind andere vestigingen
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

                <Link href="/over-ons">
                  <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                        Over TBGS
                      </h3>
                      <p className="text-sm text-gray-600 mt-2">
                        Ons verhaal
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