import { useEffect } from "react";

interface LocalBusinessData {
  name: string;
  address: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
  telephone?: string;
  email?: string;
  website?: string;
  openingHours?: string[];
  geo?: {
    latitude: number;
    longitude: number;
  };
  areaServed?: string[];
  rating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

interface LocalSEOSchemaProps {
  businessData: LocalBusinessData;
}

export default function LocalSEOSchema({ businessData }: LocalSEOSchemaProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://tbgs.nl/#organization",
      "name": businessData.name,
      "alternateName": ["TBGS BV", "Totaal Bouw Groep Specialisten"],
      "description": "Premium bouwspecialisten gespecialiseerd in dakwerken, schoorsteenwerken, onderhoud en renovatie in Nederland en België. Gecertificeerd vakmanschap met 15+ jaar ervaring.",
      "url": businessData.website || "https://tbgs.nl",
      "telephone": businessData.telephone,
      "email": businessData.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": businessData.address.streetAddress,
        "addressLocality": businessData.address.addressLocality,
        "addressRegion": businessData.address.addressRegion,
        "postalCode": businessData.address.postalCode,
        "addressCountry": businessData.address.addressCountry
      },
      "geo": businessData.geo ? {
        "@type": "GeoCoordinates",
        "latitude": businessData.geo.latitude,
        "longitude": businessData.geo.longitude
      } : undefined,
      "openingHours": businessData.openingHours || [
        "Mo-Fr 08:00-17:00",
        "Sa 09:00-16:00"
      ],
      "areaServed": businessData.areaServed || [
        {
          "@type": "Country",
          "name": "Nederland"
        },
        {
          "@type": "Country", 
          "name": "België"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Noord-Brabant"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Limburg"
        }
      ],
      "aggregateRating": businessData.rating ? {
        "@type": "AggregateRating",
        "ratingValue": businessData.rating.ratingValue,
        "reviewCount": businessData.rating.reviewCount,
        "bestRating": "5",
        "worstRating": "1"
      } : undefined,
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Bouwdiensten",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Dakwerken",
              "description": "Professionele dakwerken inclusief dakreparatie, dakvervanging, dakisolatie en dakgoot onderhoud."
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Schoorsteenwerken",
              "description": "Schoorsteenreparatie, jaarlijkse controle, reiniging en rookgasafvoer installatie."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Onderhoud & Renovatie",
              "description": "Gevelreiniging, schilderwerk, preventief onderhoud en complete renovaties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bouwwerkzaamheden",
              "description": "Verbouwingen, aanbouwen, keuken en badkamer renovaties en nieuwbouw projecten."
            }
          }
        ]
      },
      "sameAs": [
        "https://share.google/egYatvuB3Rli6d2Jz"
      ],
      "logo": {
        "@type": "ImageObject",
        "url": "https://tbgs.nl/logo.png",
        "width": "400",
        "height": "400"
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://tbgs-bv.nl/tbgs-hero-image.jpg",
        "width": "1200",
        "height": "630"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": businessData.telephone,
          "contactType": "customer service",
          "availableLanguage": ["Dutch", "English"],
          "areaServed": ["NL", "BE"]
        }
      ],
      "founder": {
        "@type": "Person",
        "name": "TBGS Eigenaar"
      },
      "foundingDate": "2010",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": "15"
      },
      "slogan": "Samen duurzaam & innovatief (ver)bouwen",
      "keywords": "dakwerken, schoorsteenwerken, onderhoud, bouw, renovatie, Eindhoven, België, Limburg, dakisolatie, dakgoten, gevelbekleding",
      "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
      "currenciesAccepted": "EUR",
      "priceRange": "€€€"
    };

    // Remove undefined values
    const cleanSchema = JSON.parse(JSON.stringify(schema));

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(cleanSchema);
    
    // Remove existing schema if any
    const existingSchema = document.querySelector('script[type="application/ld+json"]');
    if (existingSchema) {
      existingSchema.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [businessData]);

  return null;
}