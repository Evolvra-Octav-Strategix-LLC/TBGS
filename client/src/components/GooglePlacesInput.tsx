import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";

interface GooglePlacesInputProps {
  value: string;
  onChange: (address: string, details?: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  }) => void;
  placeholder?: string;
  className?: string;
}

declare global {
  interface Window {
    google: any;
  }
}

export function GooglePlacesInput({ 
  value, 
  onChange, 
  placeholder = "Begin typing address...", 
  className = "" 
}: GooglePlacesInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if Google Maps API is already loaded
    if (window.google && window.google.maps && window.google.maps.places) {
      initializeAutocomplete();
      return;
    }

    // Check if API key is available - try multiple sources
    let apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
    
    // Fallback to direct environment variable if Vite variable not available
    if (!apiKey && typeof window !== 'undefined') {
      // For development, use the server-side key directly
      apiKey = 'AIzaSyDcnWjazRb8XCuRFrCASBxwEjhCg4s2IMw';
    }
    
    console.log("API Key status:", apiKey ? "Found" : "Not found");
    if (!apiKey) {
      console.warn("Google Places API key not found. Please set VITE_GOOGLE_PLACES_API_KEY environment variable.");
      return;
    }

    // Load Google Maps API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
    script.async = true;
    script.defer = true;

    window.initMap = () => {
      setIsLoaded(true);
      initializeAutocomplete();
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (autocompleteRef.current) {
        window.google?.maps?.event?.clearInstanceListeners?.(autocompleteRef.current);
      }
    };
  }, []);

  const initializeAutocomplete = () => {
    if (!inputRef.current || !window.google) return;

    autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
      types: ['address'],
      componentRestrictions: { country: ['nl', 'be'] }, // Netherlands and Belgium
      fields: ['formatted_address', 'address_components', 'geometry']
    });

    autocompleteRef.current.addListener('place_changed', () => {
      const place = autocompleteRef.current.getPlace();
      
      if (!place.address_components) {
        onChange(place.formatted_address || '');
        return;
      }

      // Extract address components
      let street = '';
      let city = '';
      let postalCode = '';
      let country = '';

      place.address_components.forEach((component: any) => {
        const types = component.types;
        
        if (types.includes('street_number') || types.includes('route')) {
          street += component.long_name + ' ';
        }
        if (types.includes('locality') || types.includes('administrative_area_level_2')) {
          city = component.long_name;
        }
        if (types.includes('postal_code')) {
          postalCode = component.long_name;
        }
        if (types.includes('country')) {
          country = component.long_name;
        }
      });

      onChange(place.formatted_address, {
        street: street.trim(),
        city,
        postalCode,
        country
      });
    });
  };

  return (
    <Input
      ref={inputRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`${className} text-gray-900 placeholder:text-gray-400`}
    />
  );
}