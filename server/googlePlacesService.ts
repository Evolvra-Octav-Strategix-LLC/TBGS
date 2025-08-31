interface GooglePlaceDetails {
  place_id: string;
  name: string;
  rating: number;
  user_ratings_total: number;
  reviews: GoogleReview[];
  formatted_phone_number?: string;
  website?: string;
  opening_hours?: {
    open_now: boolean;
    weekday_text: string[];
  };
  photos?: Array<{
    photo_reference: string;
    height: number;
    width: number;
  }>;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
}

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
  profile_photo_url: string;
}

interface BusinessData {
  name: string;
  rating: number;
  totalReviews: number;
  reviews: Array<{
    name: string;
    rating: number;
    text: string;
    date: string;
    profilePhoto?: string;
  }>;
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

export class GooglePlacesService {
  private apiKey: string;
  private baseUrl = 'https://maps.googleapis.com/maps/api/place';

  constructor() {
    this.apiKey = process.env.GOOGLE_PLACES_API_KEY!;
    if (!this.apiKey) {
      throw new Error('GOOGLE_PLACES_API_KEY environment variable is required');
    }
  }

  /**
   * Search for a place by text query
   */
  async searchPlace(query: string): Promise<string | null> {
    try {
      const searchUrl = `${this.baseUrl}/textsearch/json?query=${encodeURIComponent(query)}&key=${this.apiKey}`;
      
      const response = await fetch(searchUrl);
      const data = await response.json();

      if (data.status === 'OK' && data.results.length > 0) {
        return data.results[0].place_id;
      }
      
      return null;
    } catch (error) {
      console.error('Error searching for place:', error);
      return null;
    }
  }

  /**
   * Get place details including reviews
   */
  async getPlaceDetails(placeId: string): Promise<GooglePlaceDetails | null> {
    try {
      const detailsUrl = `${this.baseUrl}/details/json?place_id=${placeId}&fields=place_id,name,rating,user_ratings_total,reviews,formatted_phone_number,website,opening_hours,photos,geometry&key=${this.apiKey}`;
      
      const response = await fetch(detailsUrl);
      const data = await response.json();

      if (data.status === 'OK') {
        return data.result;
      }
      
      return null;
    } catch (error) {
      console.error('Error fetching place details:', error);
      return null;
    }
  }

  /**
   * Get a photo URL from photo reference
   */
  getPhotoUrl(photoReference: string, maxWidth: number = 400): string {
    return `${this.baseUrl}/photo?maxwidth=${maxWidth}&photo_reference=${photoReference}&key=${this.apiKey}`;
  }

  /**
   * Get formatted business data for a location
   */
  async getBusinessData(businessName: string, city: string, country: 'nl' | 'be'): Promise<BusinessData | null> {
    try {
      // Search for the business
      const searchQuery = `${businessName} ${city} ${country === 'be' ? 'Belgium' : 'Netherlands'}`;
      const placeId = await this.searchPlace(searchQuery);
      
      if (!placeId) {
        console.log(`No place found for: ${searchQuery}`);
        return null;
      }

      // Get detailed information
      const details = await this.getPlaceDetails(placeId);
      
      if (!details) {
        console.log(`No details found for place ID: ${placeId}`);
        return null;
      }

      // Format the data
      const businessData: BusinessData = {
        name: details.name,
        rating: details.rating || 0,
        totalReviews: details.user_ratings_total || 0,
        reviews: (details.reviews || []).map(review => ({
          name: review.author_name,
          rating: review.rating,
          text: review.text,
          date: review.relative_time_description,
          profilePhoto: review.profile_photo_url
        })),
        phone: details.formatted_phone_number,
        website: details.website,
        isOpen: details.opening_hours?.open_now,
        hours: details.opening_hours?.weekday_text,
        photos: (details.photos || []).slice(0, 5).map(photo => 
          this.getPhotoUrl(photo.photo_reference, 600)
        ),
        coordinates: {
          lat: details.geometry.location.lat,
          lng: details.geometry.location.lng
        }
      };

      return businessData;
    } catch (error) {
      console.error('Error getting business data:', error);
      return null;
    }
  }

  /**
   * Cache business data for multiple locations
   */
  async cacheBusinessDataForLocations(): Promise<Record<string, BusinessData | null>> {
    const locations = [
      // Netherlands locations
      { name: 'TBGS', city: 'Eindhoven', country: 'nl' as const },
      { name: 'TBGS', city: 'Nuenen', country: 'nl' as const },
      { name: 'TBGS', city: 'Veldhoven', country: 'nl' as const },
      { name: 'TBGS', city: 'Best', country: 'nl' as const },
      { name: 'TBGS', city: 'Son en Breugel', country: 'nl' as const },
      { name: 'TBGS', city: 'Geldrop', country: 'nl' as const },
      { name: 'TBGS', city: 'Mierlo', country: 'nl' as const },
      { name: 'TBGS', city: 'Waalre', country: 'nl' as const },
      
      // Belgium locations
      { name: 'TBGS', city: 'Lommel', country: 'be' as const },
      { name: 'TBGS', city: 'Retie', country: 'be' as const },
      { name: 'TBGS', city: 'Hamont-Achel', country: 'be' as const },
      { name: 'TBGS', city: 'Pelt', country: 'be' as const },
      { name: 'TBGS', city: 'Sint-Huibrechts-Lille', country: 'be' as const },
      { name: 'TBGS', city: 'Overpelt', country: 'be' as const },
      { name: 'TBGS', city: 'Neerpelt', country: 'be' as const },
      { name: 'TBGS', city: 'Hamont', country: 'be' as const }
    ];

    const cache: Record<string, BusinessData | null> = {};
    
    for (const location of locations) {
      const key = `${location.city}-${location.country}`;
      console.log(`Fetching data for ${key}...`);
      
      try {
        const data = await this.getBusinessData(location.name, location.city, location.country);
        cache[key] = data;
        
        // Add a small delay to respect API rate limits
        await new Promise(resolve => setTimeout(resolve, 200));
      } catch (error) {
        console.error(`Error fetching data for ${key}:`, error);
        cache[key] = null;
      }
    }

    return cache;
  }
}

export const googlePlacesService = new GooglePlacesService();