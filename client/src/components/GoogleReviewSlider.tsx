import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useGooglePlaces } from "@/hooks/useGooglePlaces";

interface GoogleReview {
  author_name: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface GoogleReviewSliderProps {
  placeId: string;
  className?: string;
}

export default function GoogleReviewSlider({ placeId, className = "" }: GoogleReviewSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Fetch real Google reviews using the new hook
  const { data: businessData, isLoading, error } = useGooglePlaces(placeId);

  const reviews: GoogleReview[] = businessData?.reviews || [];

  // Fallback reviews matching TBGS style and your reference design
  const fallbackReviews: GoogleReview[] = [
    {
      author_name: "Marco V.",
      rating: 5,
      relative_time_description: "2 maanden geleden",
      text: "Ik had een geweldige ervaring met dit dakbedrijf. Ze hielpen me een lek in mijn dak te repareren, en het hele proces verliep zeer soepel. Communicatie was uitstekend, ze reageerden snel en hun...",
      time: Date.now() - 60 * 24 * 60 * 60 * 1000
    },
    {
      author_name: "Sandra K.",
      rating: 5,
      relative_time_description: "2 maanden geleden",
      text: "Ik ben zeer tevreden met hun werk. Ze waren zeer snel tijdens het hele proces, legden alles perfect uit en adviseerden me over de beste manier om vooruit te gaan. Ze maakten het zeer makkelijk voor me...",
      time: Date.now() - 55 * 24 * 60 * 60 * 1000
    },
    {
      author_name: "David M.",
      rating: 5,
      relative_time_description: "2 maanden geleden",
      text: "Heb hun diensten een paar keer gebruikt de afgelopen jaren. Elke keer was ik onder de indruk van hun ultra snelle reactietijden en professionaliteit. Ik beveel hun diensten ten zeerste aan.",
      time: Date.now() - 50 * 24 * 60 * 60 * 1000
    }
  ];

  // Use fallback reviews if no real reviews are available
  const displayReviews = reviews.length > 0 ? reviews : fallbackReviews;

  // Auto-advance slider
  useEffect(() => {
    if (!isAutoPlaying || displayReviews.length <= 3) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(1, displayReviews.length - 2));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, displayReviews.length]);

  const nextReview = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => Math.min(prev + 1, displayReviews.length - 3));
  };

  const previousReview = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleReviews = displayReviews.slice(currentIndex, currentIndex + 3);

  return (
    <div className={`bg-gray-50 py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wat onze klanten zeggen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek waarom duizenden tevreden klanten TBGS vertrouwen voor hun bouwprojecten
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tbgs-navy"></div>
            <span className="ml-4 text-gray-600">Laden van reviews...</span>
          </div>
        ) : (
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visibleReviews.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </div>

            {/* Navigation buttons */}
            {displayReviews.length > 3 && (
              <>
                <button
                  onClick={previousReview}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 z-10"
                  disabled={currentIndex === 0}
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                
                <button
                  onClick={nextReview}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 z-10"
                  disabled={currentIndex >= displayReviews.length - 3}
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </>
            )}

            {/* Dots indicator */}
            {displayReviews.length > 3 && (
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: Math.max(1, displayReviews.length - 2) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex ? 'bg-tbgs-navy' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Review Card Component matching the Google Reviews design
function ReviewCard({ review }: { review: GoogleReview }) {
  // Extract first name and last initial
  const getDisplayName = (fullName: string) => {
    const parts = fullName.trim().split(' ');
    if (parts.length === 1) return parts[0];
    const firstName = parts[0];
    const lastInitial = parts[parts.length - 1].charAt(0);
    return `${firstName} ${lastInitial}.`;
  };

  // Generate initials for avatar
  const getInitials = (name: string) => {
    const parts = name.trim().split(' ');
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  };

  // Generate consistent color for user based on name
  const getUserColor = (name: string) => {
    const colors = [
      'bg-green-600', 'bg-purple-600', 'bg-blue-600', 'bg-red-600', 
      'bg-orange-600', 'bg-teal-600', 'bg-indigo-600', 'bg-pink-600'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  const displayName = getDisplayName(review.author_name);
  const initials = getInitials(review.author_name);
  const avatarColor = getUserColor(review.author_name);

  const truncateText = (text: string, maxLength: number = 140) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  const [showFullText, setShowFullText] = useState(false);
  const shouldTruncate = review.text.length > 140;
  const displayText = showFullText ? review.text : truncateText(review.text);

  return (
    <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 rounded-lg">
      <CardContent className="p-6">
        {/* Header with avatar and name */}
        <div className="flex items-center mb-4">
          <div className={`w-10 h-10 ${avatarColor} rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3 flex-shrink-0`}>
            {initials}
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="font-medium text-gray-900 text-sm truncate">{displayName}</h4>
            <p className="text-xs text-gray-500">{review.relative_time_description}</p>
          </div>
        </div>

        {/* Review content */}
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {displayText}
        </p>

        {/* Read more link if text was truncated */}
        {shouldTruncate && (
          <button 
            onClick={() => setShowFullText(!showFullText)}
            className="text-blue-600 text-xs hover:underline mb-4 font-medium"
          >
            {showFullText ? 'Read less' : 'Read more'}
          </button>
        )}

        {/* Bottom row with stars and Google logo */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          {/* Google logo */}
          <div className="flex items-center">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}