import { useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { useGoogleMaps } from "@/hooks/useGoogleMaps";

interface AddressAutocompleteInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  onPlaceSelect?: (place: any) => void;
}

export default function AddressAutocompleteInput({
  value,
  onChange,
  placeholder = "Begin met typen...",
  className = "",
  onPlaceSelect
}: AddressAutocompleteInputProps) {
  // Disabled Google Places API - only use in FloatingServiceMenu
  return (
    <Input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={className}
      autoComplete="off"
    />
  );
}

// Type declarations for Google Maps
declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}