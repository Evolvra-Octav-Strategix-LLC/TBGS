import React from 'react';
import DOMPurify from 'isomorphic-dompurify';

interface WordPressContentProps {
  content: string;
  className?: string;
}

export function WordPressContent({ content, className = '' }: WordPressContentProps) {
  const sanitizedContent = DOMPurify.sanitize(content, { 
    USE_PROFILES: { html: true } 
  });

  return (
    <div 
      className={`wp-content prose prose-lg max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
}

interface FAQProps {
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQ({ faq }: FAQProps) {
  if (!faq || faq.length === 0) return null;

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Veelgestelde Vragen
      </h2>
      <div className="space-y-4">
        {faq.map((item, index) => (
          <details key={index} className="faq-item border border-gray-200 rounded-lg">
            <summary className="cursor-pointer font-medium text-lg p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
              {item.question}
            </summary>
            <div className="p-4 border-l-4 border-tbgs-navy bg-white">
              <WordPressContent content={item.answer} />
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

interface SchemaMarkupProps {
  type: string;
  name: string;
  city: string;
  country: string;
  coordinates?: { lat: number; lng: number };
}

export function SchemaMarkup({ type, name, city, country, coordinates }: SchemaMarkupProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    name: name,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressCountry: country,
    },
    telephone: country === 'NL' ? '+31-40-123-4567' : '+32-11-34-24-50',
    email: 'info@tbgs.nl',
    url: `https://www.tbgs.nl/${country.toLowerCase()}/${city.toLowerCase()}`,
    ...(coordinates && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: coordinates.lat,
        longitude: coordinates.lng,
      },
    }),
    areaServed: [city, country === 'NL' ? 'Nederland' : 'België'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.8,
      reviewCount: 127,
    },
    openingHours: ['Mo-Fr 08:00-17:00', 'Sa 09:00-16:00'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}