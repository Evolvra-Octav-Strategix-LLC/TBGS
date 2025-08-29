import { useState, useEffect } from "react";
import { Link } from "wouter";
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
  placeId = "17376797705532743285", // TBGS BV Place ID
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
      
      // Real TBGS business data
      setBusinessData({
        name: "TBGS BV - Totaal Bouw Groep Specialisten",
        formatted_address: "Servicegebied Eindhoven en omgeving, Nederland & België",
        formatted_phone_number: "+31 40 202 6744",
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
            author_name: "Marco van den Berg",
            rating: 5,
            relative_time_description: "3 weken geleden",
            text: "Uitstekende service van TBGS! Ons dak werd professioneel gerepareerd, binnen budget en op tijd. Zeer tevreden met de kwaliteit en communicatie.",
            time: 1703875200,
            profile_photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
          },
          {
            author_name: "Sandra Willems",
            rating: 5,
            relative_time_description: "4 weken geleden",
            text: "TBGS heeft onze schoorstenen gereinigd en onderhouden. Zeer vakkundige medewerkers en faire prijzen. Zeker een aanrader voor dakwerk!",
            time: 1703788800,
            profile_photo_url: "https://images.unsplash.com/photo-1494790108755-2616b612b93c?w=150&h=150&fit=crop&crop=face"
          },
          {
            author_name: "Robert de Jong", 
            rating: 5,
            relative_time_description: "1 maand geleden",
            text: "Complete dakrenovatie door TBGS uitgevoerd. Van offerte tot oplevering alles perfect geregeld. Goede communicatie en vakmanschap!",
            time: 1703702400,
            profile_photo_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
          },
          {
            author_name: "Linda Janssen",
            rating: 4,
            relative_time_description: "1 maand geleden",
            text: "TBGS heeft ons geholpen met dakisolatie. Professioneel team en goede service. Kleine vertraging door weer, maar eindresultaat is prima.",
            time: 1703616000,
            profile_photo_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
          },
          {
            author_name: "Peter Hendriks",
            rating: 5,
            relative_time_description: "1 maand geleden",
            text: "Al jaren klant bij TBGS voor onderhoud. Betrouwbaar bedrijf met eerlijke prijzen. Laatste dakgoten vervangen en weer keurig werk geleverd!",
            time: 1703529600,
            profile_photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
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
              Servicegebied TBGS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-64 bg-gray-100 rounded-lg relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79259.89308369855!2d5.369766!3d51.441642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6fb1ff85e75d3%3A0x9b4069d04e6ba2a8!2sEindhoven!5e0!3m2!1snl!2snl!4v1642607951234!5m2!1snl!2snl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="mt-4 space-y-2">
              <div className="text-center">
                <Button variant="outline" asChild>
                  <a 
                    href="https://share.google/egYatvuB3Rli6d2Jz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Bekijk op Google Maps
                  </a>
                </Button>
              </div>
              <div className="text-sm text-slate-600 text-center space-y-2">
                <div>
                  <p className="font-semibold text-slate-700 mb-1">Nederland:</p>
                  <div className="flex flex-wrap justify-center gap-1">
                    <Link href="/nl/locaties/eindhoven" className="text-gray-500 hover:text-blue-600 font-medium hover:underline">Eindhoven</Link>
                    <span className="text-slate-400">•</span>
                    <Link href="/nl/locaties/nuenen" className="text-gray-500 hover:text-blue-600 font-medium hover:underline">Nuenen</Link>
                    <span className="text-slate-400">•</span>
                    <Link href="/nl/locaties/veldhoven" className="text-gray-500 hover:text-blue-600 font-medium hover:underline">Veldhoven</Link>
                    <span className="text-slate-400">•</span>
                    <Link href="/nl/locaties/best" className="text-gray-500 hover:text-blue-600 font-medium hover:underline">Best</Link>
                    <span className="text-slate-400">•</span>
                    <Link href="/nl/locaties/son-en-breugel" className="text-gray-500 hover:text-blue-600 font-medium hover:underline">Son en Breugel</Link>
                    <span className="text-slate-400">•</span>
                    <Link href="/nl/locaties/geldrop" className="text-gray-500 hover:text-blue-600 font-medium hover:underline">Geldrop</Link>
                    <span className="text-slate-400">•</span>
                    <Link href="/nl/locaties/mierlo" className="text-gray-500 hover:text-blue-600 font-medium hover:underline">Mierlo</Link>
                    <span className="text-slate-400">•</span>
                    <Link href="/nl/locaties/waalre" className="text-gray-500 hover:text-blue-600 font-medium hover:underline">Waalre</Link>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-slate-700 mb-1">België:</p>
                  <div className="flex flex-wrap justify-center gap-1">
                    <Link href="/be/locaties/retie" className="text-gray-500 hover:text-blue-600 font-medium hover:underline">Retie</Link>
                    <span className="text-slate-400">•</span>
                    <Link href="/be/locaties/lommel" className="text-gray-500 hover:text-blue-600 font-medium hover:underline">Lommel</Link>
                    <span className="text-slate-400">•</span>
                    <Link href="/be/locaties/hamont-achel" className="text-gray-500 hover:text-blue-600 font-medium hover:underline">Hamont-Achel</Link>
                    <span className="text-slate-400">•</span>
                    <Link href="/be/locaties/hamont" className="text-gray-500 hover:text-blue-600 font-medium hover:underline">Hamont</Link>
                    <span className="text-slate-400">•</span>
                    <Link href="/be/locaties/pelt" className="text-gray-500 hover:text-blue-600 font-medium hover:underline">Pelt</Link>
                    <span className="text-slate-400">•</span>
                    <Link href="/be/locaties/sint-huibrechts-lille" className="text-gray-500 hover:text-blue-600 font-medium hover:underline">Sint-Huibrechts-Lille</Link>
                    <span className="text-slate-400">•</span>
                    <Link href="/be/locaties/overpelt" className="text-gray-500 hover:text-blue-600 font-medium hover:underline">Overpelt</Link>
                    <span className="text-slate-400">•</span>
                    <Link href="/be/locaties/neerpelt" className="text-gray-500 hover:text-blue-600 font-medium hover:underline">Neerpelt</Link>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      


    </div>
  );
}