import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
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

  // Auto-advance slider
  useEffect(() => {
    if (!isAutoPlaying || reviews.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  // Handle loading and error states
  if (isLoading) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className="inline-flex items-center space-x-2">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-tbgs-navy"></div>
          <span className="text-slate-600">Reviews laden...</span>
        </div>
      </div>
    );
  }

  if (error || reviews.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className="text-slate-600">
          <p className="mb-4">Reviews kunnen momenteel niet worden geladen.</p>
          <a 
            href="https://share.google/egYatvuB3Rli6d2Jz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-tbgs-navy text-white px-6 py-3 rounded-2xl font-bold hover:bg-blue-800 transition-all duration-300"
          >
            <i className="fab fa-google mr-3"></i>
            Bekijk Google Reviews
            <i className="fas fa-external-link-alt ml-3"></i>
          </a>
        </div>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : i < rating 
              ? 'text-yellow-400 fill-current opacity-50'
              : 'text-gray-300'
        }`}
      />
    ));
  };

  const nextReview = () => {
    setCurrentIndex((current) => (current + 1) % reviews.length);
    setIsAutoPlaying(false);
  };

  const prevReview = () => {
    setCurrentIndex((current) => (current - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
  };

  const goToReview = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-6 py-3 mb-6">
          <div className="flex items-center space-x-2">
            <i className="fab fa-google text-lg text-blue-600"></i>
            <span className="font-medium text-slate-700">Google Reviews</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex">{renderStars(businessData?.rating || 4.8)}</div>
            <span className="font-bold text-slate-900">{businessData?.rating || 4.8}</span>
            <span className="text-slate-600">({businessData?.user_ratings_total || 127} reviews)</span>
          </div>
        </div>
      </div>

      {/* Main Slider */}
      <div className="relative bg-white rounded-3xl shadow-xl border border-slate-200 p-8 lg:p-12 max-w-4xl mx-auto">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="text-center">
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {renderStars(review.rating)}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-slate-800 text-xl lg:text-2xl leading-relaxed font-medium mb-8 max-w-3xl mx-auto">
                    <Quote className="w-8 h-8 text-slate-300 mx-auto mb-4" />
                    {review.text}
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-4">
                    {review.profile_photo_url ? (
                      <img 
                        src={review.profile_photo_url} 
                        alt={review.author_name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-tbgs-navy rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {review.author_name.charAt(0)}
                      </div>
                    )}
                    <div className="text-left">
                      <div className="font-bold text-slate-900 text-lg">{review.author_name}</div>
                      <div className="text-slate-600">{review.relative_time_description}</div>
                      <div className="flex items-center space-x-2 mt-1">
                        <i className="fab fa-google text-sm text-blue-600"></i>
                        <span className="text-sm text-slate-500">Google Review</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevReview}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-slate-600 hover:text-tbgs-navy hover:shadow-xl transition-all duration-300 border border-slate-200"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextReview}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-slate-600 hover:text-tbgs-navy hover:shadow-xl transition-all duration-300 border border-slate-200"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-8">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToReview(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-tbgs-navy scale-125' 
                : 'bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>

      {/* View All Reviews Link */}
      <div className="text-center mt-8">
        <a 
          href="https://share.google/egYatvuB3Rli6d2Jz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-tbgs-navy text-white px-6 py-3 rounded-2xl font-bold hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <i className="fab fa-google mr-3"></i>
          Bekijk Alle Google Reviews
          <i className="fas fa-external-link-alt ml-3"></i>
        </a>
      </div>
    </div>
  );
}