import { useEffect, useState } from 'react';

// API key moved to environment variables for security

export function useGoogleMaps() {
  // Disabled - Google Places API only used in FloatingServiceMenu
  return { isLoaded: false, error: null };
}