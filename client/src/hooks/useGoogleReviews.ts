import { useQuery } from '@tanstack/react-query';

interface GoogleReview {
  name: string;
  rating: number;
  text: string;
  date: string;
  profilePhoto?: string;
}

interface BusinessData {
  name: string;
  rating: number;
  totalReviews: number;
  reviews: GoogleReview[];
  phone?: string;
  website?: string;
  isOpen?: boolean;
  hours?: string[];
  photos?: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export function useGoogleReviews(city: string, country: 'nl' | 'be') {
  return useQuery<BusinessData | null>({
    queryKey: ['google-reviews', city, country],
    queryFn: async () => {
      try {
        const response = await fetch(`/api/google-reviews/${encodeURIComponent(city)}/${country}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            console.log(`No Google data found for ${city}, ${country}`);
            return null;
          }
          throw new Error(`Failed to fetch reviews: ${response.statusText}`);
        }
        
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching Google reviews:', error);
        return null;
      }
    },
    staleTime: 1000 * 60 * 60, // 1 hour
    retry: 1
  });
}

// Hook for bulk fetching all location data
export function useBulkGoogleReviews() {
  return useQuery<Record<string, BusinessData | null>>({
    queryKey: ['google-reviews-bulk'],
    queryFn: async () => {
      try {
        const response = await fetch('/api/google-reviews/bulk');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch bulk reviews: ${response.statusText}`);
        }
        
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching bulk Google reviews:', error);
        return {};
      }
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    retry: 1
  });
}