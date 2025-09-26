import { useEffect, useRef } from 'react';

interface City {
  name: string;
  lat: number;
  lng: number;
  country: 'Netherlands' | 'Belgium';
}

const serviceCities: City[] = [
  // Netherlands
  { name: 'Eindhoven', lat: 51.4416, lng: 5.4697, country: 'Netherlands' },
  { name: 'Nuenen', lat: 51.4703, lng: 5.5506, country: 'Netherlands' },
  { name: 'Veldhoven', lat: 51.4194, lng: 5.4044, country: 'Netherlands' },
  { name: 'Best', lat: 51.5078, lng: 5.3911, country: 'Netherlands' },
  { name: 'Son en Breugel', lat: 51.5164, lng: 5.4969, country: 'Netherlands' },
  { name: 'Geldrop', lat: 51.4208, lng: 5.5597, country: 'Netherlands' },
  { name: 'Mierlo', lat: 51.4439, lng: 5.6228, country: 'Netherlands' },
  { name: 'Waalre', lat: 51.3831, lng: 5.4475, country: 'Netherlands' },
  { name: 'Valkenswaard', lat: 51.3500, lng: 5.4600, country: 'Netherlands' },

  // Belgium
  { name: 'Kaulille', lat: 51.1872, lng: 5.5257, country: 'Belgium' },
  { name: 'Lommel', lat: 51.2306, lng: 5.3139, country: 'Belgium' },
  { name: 'Hamont-Achel', lat: 51.2500, lng: 5.5500, country: 'Belgium' },
  { name: 'Pelt', lat: 51.2167, lng: 5.4167, country: 'Belgium' },
  { name: 'Sint-Huibrechts-Lille', lat: 51.2251, lng: 5.4836, country: 'Belgium' },
  { name: 'Overpelt', lat: 51.2000, lng: 5.4167, country: 'Belgium' },
  { name: 'Neerpelt', lat: 51.2281, lng: 5.4394, country: 'Belgium' },
];

interface MultiCityMapProps {
  height?: string;
  className?: string;
}

declare global {
  interface Window {
    google: any;
    initMultiCityMap: () => void;
  }
}

export default function MultiCityMap({ height = "400px", className = "" }: MultiCityMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Load Google Maps API if not already loaded
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_PLACES_API_KEY || 'YOUR_API_KEY'}&callback=initMultiCityMap`;
      script.async = true;
      script.defer = true;
      
      window.initMultiCityMap = initializeMap;
      document.head.appendChild(script);
    } else {
      initializeMap();
    }

    return () => {
      // Cleanup
      if (window.initMultiCityMap) {
        window.initMultiCityMap = undefined as any;
      }
    };
  }, []);

  const initializeMap = () => {
    if (!mapRef.current || !window.google) return;

    // Calculate center point (roughly between Netherlands and Belgium)
    const centerLat = 51.35;
    const centerLng = 5.4;

    // Initialize map
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: centerLat, lng: centerLng },
      zoom: 9,
      mapTypeId: 'roadmap',
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }]
        }
      ]
    });

    mapInstanceRef.current = map;

    // Info window for markers
    const infoWindow = new window.google.maps.InfoWindow();

    // Create a large service area polygon instead of individual markers
    const serviceAreaCoords = [
      // Northern boundary (Netherlands)
      { lat: 51.55, lng: 5.35 },   // Northwest
      { lat: 51.55, lng: 5.7 },    // Northeast
      
      // Eastern boundary
      { lat: 51.4, lng: 5.7 },     // East Netherlands
      { lat: 51.3, lng: 5.5 },     // East transition
      
      // Southern boundary (Belgium)
      { lat: 51.15, lng: 5.5 },    // Southeast Belgium
      { lat: 51.15, lng: 5.0 },    // Southwest Belgium
      
      // Western boundary
      { lat: 51.25, lng: 4.95 },   // West Belgium
      { lat: 51.35, lng: 5.25 },   // West transition
      { lat: 51.45, lng: 5.3 },    // West Netherlands
    ];

    // Create the service area polygon
    const serviceArea = new window.google.maps.Polygon({
      paths: serviceAreaCoords,
      strokeColor: '#1e40af',
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillColor: '#3b82f6',
      fillOpacity: 0.2,
      map: map
    });

    // Add central marker for the service area
    const centralMarker = new window.google.maps.Marker({
      position: { lat: centerLat, lng: centerLng },
      map: map,
      title: 'TBGS Servicegebied - Nederland & België',
      icon: {
        url: 'https://maps.google.com/mapfiles/ms/icons/blue-pushpin.png',
        scaledSize: new window.google.maps.Size(40, 40)
      }
    });

    // Add click event for service area info
    const showServiceAreaInfo = () => {
      const content = `
        <div style="font-family: Arial, sans-serif; min-width: 280px;">
          <h3 style="margin: 0 0 8px 0; color: #1e40af;">🏠 TBGS Servicegebied</h3>
          <p style="margin: 0 0 12px 0; color: #64748b;">Complete bouwdiensten in Nederland & België</p>
          
          <div style="margin-bottom: 12px;">
            <h4 style="margin: 0 0 4px 0; color: #374151; font-size: 14px;">🇳🇱 Nederland:</h4>
            <p style="margin: 0; color: #6b7280; font-size: 13px;">Eindhoven, Nuenen, Veldhoven, Best, Son en Breugel, Geldrop, Mierlo, Waalre, Valkenswaard</p>
          </div>
          
          <div style="margin-bottom: 12px;">
            <h4 style="margin: 0 0 4px 0; color: #374151; font-size: 14px;">🇧🇪 België:</h4>
            <p style="margin: 0; color: #6b7280; font-size: 13px;">Kaulille, Lommel, Hamont-Achel, Pelt, Sint-Huibrechts-Lille, Overpelt, Neerpelt</p>
          </div>
          
          <div style="border-top: 1px solid #e5e7eb; padding-top: 12px; margin-top: 12px;">
            <div style="margin-bottom: 8px;">
              <a href="/locaties" 
                 style="color: #059669; text-decoration: none; font-weight: 500; font-size: 14px;">
                🏠 Bekijk alle locaties
              </a>
            </div>
            <div>
              <a href="/contact" 
                 style="color: #1e40af; text-decoration: none; font-weight: 500; font-size: 14px;">
                📞 Contact opnemen
              </a>
            </div>
          </div>
        </div>
      `;
      
      infoWindow.setContent(content);
      infoWindow.open(map, centralMarker);
    };

    // Add click events
    centralMarker.addListener('click', showServiceAreaInfo);
    serviceArea.addListener('click', showServiceAreaInfo);

    // Add individual city markers on top of the service area
    serviceCities.forEach((city) => {
      const marker = new window.google.maps.Marker({
        position: { lat: city.lat, lng: city.lng },
        map: map,
        title: `${city.name}, ${city.country}`,
        icon: {
          url: city.country === 'Netherlands' 
            ? 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'  // Netherlands = Blue
            : 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',   // Belgium = Red
          scaledSize: new window.google.maps.Size(32, 32)
        }
      });

      // Add click event for city page navigation
      marker.addListener('click', () => {
        const countryFlag = city.country === 'Netherlands' ? '🇳🇱' : '🇧🇪';
        const citySlug = city.name.toLowerCase().replace(/\s+/g, '-');
        const countryCode = city.country === 'Netherlands' ? 'nl' : 'be';
        const cityUrl = `/${countryCode}/${citySlug}`;
        
        const content = `
          <div style="font-family: Arial, sans-serif; min-width: 200px;">
            <h3 style="margin: 0 0 8px 0; color: #1e40af;">${countryFlag} ${city.name}</h3>
            <p style="margin: 0 0 8px 0; color: #64748b;">${city.country}</p>
            <div style="margin-top: 12px;">
              <a href="https://maps.google.com/?q=${city.lat},${city.lng}" 
                 target="_blank" 
                 style="color: #1e40af; text-decoration: none; font-weight: 500;">
                📍 Routebeschrijving
              </a>
            </div>
            <div style="margin-top: 8px;">
              <a href="${cityUrl}" 
                 style="color: #059669; text-decoration: none; font-weight: 500;">
                🏠 Onze diensten in ${city.name}
              </a>
            </div>
          </div>
        `;
        
        infoWindow.setContent(content);
        infoWindow.open(map, marker);
      });
    });

    // Fit map to show all markers
    const bounds = new window.google.maps.LatLngBounds();
    serviceCities.forEach(city => {
      bounds.extend(new window.google.maps.LatLng(city.lat, city.lng));
    });
    map.fitBounds(bounds);

    // Add padding to bounds
    map.setOptions({ maxZoom: 11 });
    map.setZoom(Math.min(map.getZoom(), 10));
  };

  return (
    <div className={`relative bg-gray-100 rounded-lg overflow-hidden ${className}`}>
      <div 
        ref={mapRef}
        style={{ height }}
        className="w-full"
      />
    </div>
  );
}