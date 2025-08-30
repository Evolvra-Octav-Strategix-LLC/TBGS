import { useQuery } from '@tanstack/react-query';

// API key should be provided via environment variable for security
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;

interface GooglePlacesApiResult {
  name: string;
  rating: number;
  user_ratings_total: number;
  reviews: Array<{
    author_name: string;
    profile_photo_url?: string;
    rating: number;
    relative_time_description: string;
    text: string;
    time: number;
  }>;
  formatted_address: string;
  formatted_phone_number: string;
  website: string;
  opening_hours?: {
    open_now: boolean;
    weekday_text: string[];
  };
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
}

export function useGooglePlaces(placeId: string) {
  return useQuery({
    queryKey: ['google-places', placeId],
    queryFn: async (): Promise<GooglePlacesApiResult> => {
      // Try server-side first (will fall back to TBGS data if API fails)
      try {
        const serverResponse = await fetch(`/api/google-business/${placeId}`);
        if (serverResponse.ok) {
          return await serverResponse.json();
        }
      } catch (error) {
        console.log('Server-side Google Places failed, trying client-side...');
      }

      // Client-side Google Places API call
      if (!GOOGLE_MAPS_API_KEY) {
        throw new Error('Google Places API key not configured. Please set VITE_GOOGLE_PLACES_API_KEY environment variable.');
      }

      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,formatted_address,formatted_phone_number,website,opening_hours,geometry,photos,user_ratings_total&key=${GOOGLE_MAPS_API_KEY}`
      );

      if (!response.ok) {
        throw new Error(`Google Places API error: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.status !== 'OK') {
        throw new Error(`Google Places API status: ${data.status}`);
      }

      return data.result;
    },
    staleTime: 1000 * 60 * 15, // 15 minutes
    gcTime: 1000 * 60 * 60, // 1 hour
  });
}