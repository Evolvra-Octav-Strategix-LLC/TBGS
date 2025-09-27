import { useState, useEffect, useCallback } from 'react';

interface GoogleMapsLoaderState {
  isLoaded: boolean;
  isLoading: boolean;
  error: string | null;
}

interface GoogleMapsLoaderOptions {
  libraries?: string[];
  apiKey?: string;
}

// Global state to prevent multiple loads
let globalState: GoogleMapsLoaderState = {
  isLoaded: false,
  isLoading: false,
  error: null,
};

let loadPromise: Promise<void> | null = null;
const listeners = new Set<(state: GoogleMapsLoaderState) => void>();

const notifyListeners = () => {
  listeners.forEach(listener => listener({ ...globalState }));
};

const loadGoogleMapsAPI = async (options: GoogleMapsLoaderOptions = {}): Promise<void> => {
  // If already loaded, return immediately
  if (window.google?.maps) {
    globalState.isLoaded = true;
    globalState.isLoading = false;
    globalState.error = null;
    notifyListeners();
    return;
  }

  // If currently loading, wait for existing load
  if (loadPromise) {
    return loadPromise;
  }

  globalState.isLoading = true;
  globalState.error = null;
  notifyListeners();

  const apiKey = options.apiKey || import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
  
  if (!apiKey) {
    const error = 'Google Maps API key not found. Please set VITE_GOOGLE_PLACES_API_KEY environment variable.';
    globalState.isLoading = false;
    globalState.error = error;
    notifyListeners();
    throw new Error(error);
  }

  const libraries = options.libraries || ['places'];
  const callbackName = 'initGoogleMapsLoader';

  loadPromise = new Promise<void>((resolve, reject) => {
    // Set up global callback
    (window as any)[callbackName] = () => {
      globalState.isLoaded = true;
      globalState.isLoading = false;
      globalState.error = null;
      notifyListeners();
      
      // Cleanup
      delete (window as any)[callbackName];
      loadPromise = null;
      
      resolve();
    };

    // Create and append script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=${libraries.join(',')}&callback=${callbackName}&loading=async`;
    script.async = true;
    script.defer = true;
    
    script.onerror = () => {
      globalState.isLoading = false;
      globalState.error = 'Failed to load Google Maps API';
      notifyListeners();
      
      // Cleanup
      delete (window as any)[callbackName];
      loadPromise = null;
      
      reject(new Error('Failed to load Google Maps API'));
    };

    document.head.appendChild(script);
  });

  return loadPromise;
};

export function useGoogleMapsLoader(options: GoogleMapsLoaderOptions = {}) {
  const [state, setState] = useState<GoogleMapsLoaderState>(() => ({
    ...globalState,
    isLoaded: Boolean(window.google?.maps),
  }));

  useEffect(() => {
    // Add listener for state changes
    listeners.add(setState);
    
    return () => {
      listeners.delete(setState);
    };
  }, []);

  const loadMaps = useCallback(async () => {
    if (!globalState.isLoaded && !globalState.isLoading) {
      try {
        await loadGoogleMapsAPI(options);
      } catch (error) {
        console.error('Error loading Google Maps:', error);
      }
    }
  }, [options]);

  return {
    ...state,
    loadMaps,
  };
}

export default useGoogleMapsLoader;