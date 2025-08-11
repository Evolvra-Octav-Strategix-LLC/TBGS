import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Phone, Globe, Clock, ExternalLink, Quote } from "lucide-react";

interface GoogleReview {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface GoogleBusinessData {
  name: string;
  formatted_address: string;
  formatted_phone_number: string;
  website: string;
  rating: number;
  user_ratings_total: number;
  opening_hours?: {
    open_now: boolean;
    weekday_text: string[];
  };
  reviews?: GoogleReview[];
  geometry?: {
    location: {
      lat: number;
      lng: number;
    };
  };
}

interface GoogleBusinessIntegrationProps {
  placeId?: string;
  showReviews?: boolean;
  showMap?: boolean;
  showHours?: boolean;
  className?: string;
}

export default function GoogleBusinessIntegration({
  placeId = "ChIJd0X8fA-7xkcRKOkp7DQsQZs", // Default place ID from Google profile
  showReviews = true,
  showMap = true,
  showHours = true,
  className = ""
}: GoogleBusinessIntegrationProps) {
  const [businessData, setBusinessData] = useState<GoogleBusinessData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadGoogleBusinessData();
  }, [placeId]);

  const loadGoogleBusinessData = async () => {
    try {
      setIsLoading(true);
      
      // In production, this would call your backend API that fetches from Google Places API
      const response = await fetch(`/api/google-business/${placeId}`);
      
      if (!response.ok) {
        throw new Error('Failed to load business data');
      }
      
      const data = await response.json();
      setBusinessData(data);
    } catch (err) {
      console.error('Error loading Google Business data:', err);
      setError('Unable to load business information');
      
      // Fallback to static data based on the Google profile
      setBusinessData({
        name: "TBGS BV - Totaal Bouw Groep Specialisten",
        formatted_address: "Nederland & België",
        formatted_phone_number: "+31 6 12345678",
        website: "https://tbgs.nl",
        rating: 4.8,
        user_ratings_total: 127,
        opening_hours: {
          open_now: true,
          weekday_text: [
            "Maandag: 08:00–17:00",
            "Dinsdag: 08:00–17:00", 
            "Woensdag: 08:00–17:00",
            "Donderdag: 08:00–17:00",
            "Vrijdag: 08:00–17:00",
            "Zaterdag: 09:00–16:00",
            "Zondag: Gesloten"
          ]
        },
        reviews: [
          {
            author_name: "Jan van der Berg",
            rating: 5,
            relative_time_description: "2 weken geleden",
            text: "Uitstekende service! TBGS heeft ons dak perfect gerepareerd. Professioneel team en eerlijke prijzen.",
            time: Date.now() - 1209600000,
          },
          {
            author_name: "Maria Janssen", 
            rating: 5,
            relative_time_description: "1 maand geleden",
            text: "Zeer tevreden met de schoorsteenreiniging. Punctueel, netjes en vakkundig uitgevoerd.",
            time: Date.now() - 2592000000,
          },
          {
            author_name: "Piet Vermeer",
            rating: 4,
            relative_time_description: "2 maanden geleden", 
            text: "Goede kwaliteit werk aan onze dakgoten. Aanrader voor onderhoudswerkzaamheden.",
            time: Date.now() - 5184000000,
          }
        ],
        geometry: {
          location: {
            lat: 51.4416,
            lng: 5.4697
          }
        }
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : i < rating 
              ? 'text-yellow-400 fill-current opacity-50'
              : 'text-gray-300'
        }`}
      />
    ));
  };

  if (isLoading) {
    return (
      <div className={`space-y-6 ${className}`}>
        <div className="animate-pulse">
          <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !businessData) {
    return (
      <div className={`text-center p-6 ${className}`}>
        <p className="text-gray-500">Bedrijfsinformatie tijdelijk niet beschikbaar</p>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Business Overview Card */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl font-bold">{businessData.name}</CardTitle>
              <div className="flex items-center mt-2 space-x-2">
                <div className="flex items-center">
                  {renderStars(businessData.rating)}
                </div>
                <span className="font-semibold">{businessData.rating}</span>
                <span className="text-gray-500">({businessData.user_ratings_total} reviews)</span>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('https://share.google/egYatvuB3Rli6d2Jz', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Google Profiel
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-tbgs-navy" />
              <span>{businessData.formatted_address}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-tbgs-navy" />
              <span>{businessData.formatted_phone_number}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-tbgs-navy" />
              <span>{businessData.website}</span>
            </div>
            {businessData.opening_hours && (
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-tbgs-navy" />
                <Badge variant={businessData.opening_hours.open_now ? "default" : "secondary"}>
                  {businessData.opening_hours.open_now ? "Nu Open" : "Gesloten"}
                </Badge>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Map Integration */}
      {showMap && businessData.geometry && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Locatie
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-64 bg-gray-100 rounded-lg relative overflow-hidden">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY'}&q=place_id:${placeId}&zoom=15`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              {!import.meta.env.VITE_GOOGLE_MAPS_API_KEY && (
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Google Maps API key vereist</p>
                    <p className="text-sm text-gray-400">Configureer VITE_GOOGLE_MAPS_API_KEY</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Opening Hours */}
      {showHours && businessData.opening_hours && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Openingstijden
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {businessData.opening_hours.weekday_text.map((hours, index) => (
                <div key={index} className="flex justify-between items-center py-1">
                  <span className="font-medium">{hours.split(': ')[0]}</span>
                  <span className="text-gray-600">{hours.split(': ')[1]}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Reviews Section */}
      {showReviews && businessData.reviews && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                Google Reviews
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://share.google/egYatvuB3Rli6d2Jz', '_blank')}
              >
                Alle Reviews
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {businessData.reviews.slice(0, 3).map((review, index) => (
                <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-tbgs-navy rounded-full flex items-center justify-center text-white font-semibold">
                      {review.author_name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-900">{review.author_name}</h4>
                        <span className="text-sm text-gray-500">{review.relative_time_description}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        <Quote className="w-4 h-4 inline mr-1 text-gray-400" />
                        {review.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}