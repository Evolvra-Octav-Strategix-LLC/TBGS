import { useEffect, useState } from 'react';

const GOOGLE_MAPS_API_KEY = 'AIzaSyB9kKYnZG2YmD5nv5L5rNfSBqZgV_z6nGI'; // Your provided API key

export function useGoogleMaps() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if Google Maps is already loaded
    if ((window as any).google && (window as any).google.maps) {
      setIsLoaded(true);
      return;
    }

    // Check if script is already loading
    if (document.querySelector('script[src*="maps.googleapis.com"]')) {
      const checkLoaded = () => {
        if ((window as any).google && (window as any).google.maps) {
          setIsLoaded(true);
        } else {
          setTimeout(checkLoaded, 100);
        }
      };
      checkLoaded();
      return;
    }

    // Load Google Maps script
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`;
    
    // Set up global callback
    (window as any).initMap = () => {
      setIsLoaded(true);
    };

    script.onerror = () => {
      setError('Failed to load Google Maps API');
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup if component unmounts
      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
      delete (window as any).initMap;
    };
  }, []);

  return { isLoaded, error };
}