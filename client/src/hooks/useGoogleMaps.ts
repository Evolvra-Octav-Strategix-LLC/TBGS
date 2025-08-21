import { useEffect, useState } from 'react';

const GOOGLE_MAPS_API_KEY = 'AIzaSyB9kKYnZG2YmD5nv5L5rNfSBqZgV_z6nGI'; // Your provided API key

export function useGoogleMaps() {
  // Disabled - Google Places API only used in FloatingServiceMenu
  return { isLoaded: false, error: null };
}