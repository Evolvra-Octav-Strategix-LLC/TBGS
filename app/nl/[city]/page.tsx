import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, ArrowRight } from 'lucide-react';

// Static params for known cities
const validCities = [
  'eindhoven', 'nuenen', 'veldhoven', 'best', 
  'geldrop', 'mierlo', 'waalre', 'son-en-breugel'
];

const cityData: Record<string, {
  name: string;
  region: string;
  description: string;
  coordinates: { lat: number; lng: number };
}> = {
  eindhoven: {
    name: 'Eindhoven',
    region: 'Noord-Brabant',
    description: 'Centrum van de Brainport regio met innovatieve bouwprojecten',
    coordinates: { lat: 51.4416, lng: 5.4697 },
  },
  nuenen: {
    name: 'Nuenen',
    region: 'Noord-Brabant', 
    description: 'Historisch dorp met karakteristieke woningen',
    coordinates: { lat: 51.4700, lng: 5.5500 },
  },
  veldhoven: {
    name: 'Veldhoven',
    region: 'Noord-Brabant',
    description: 'Moderne gemeente met diverse bouwstijlen',
    coordinates: { lat: 51.4197, lng: 5.4044 },
  },
  best: {
    name: 'Best',
    region: 'Noord-Brabant',
    description: 'Groeiende gemeente met nieuwbouwprojecten',
    coordinates: { lat: 51.5067, lng: 5.3900 },
  },
  geldrop: {
    name: 'Geldrop',
    region: 'Noord-Brabant',
    description: 'Levendige gemeente met gevarieerde architectuur',
    coordinates: { lat: 51.4231, lng: 5.5581 },
  },
  mierlo: {
    name: 'Mierlo',
    region: 'Noord-Brabant',
    description: 'Rustige gemeente met kwalitatieve woningbouw',
    coordinates: { lat: 51.4333, lng: 5.6167 },
  },
  waalre: {
    name: 'Waalre',
    region: 'Noord-Brabant',
    description: 'Exclusieve gemeente met luxe woningen',
    coordinates: { lat: 51.3833, lng: 5.4500 },
  },
};

const specialists = [
  {
    name: 'Dakdekker',
    slug: 'totaal-dak-specialist',
    color: 'text-tbgs-red',
    description: 'Professionele dakwerkzaamheden',
  },
  {
    name: 'Schoorsteenveger',
    slug: 'totaal-schoorsteen-specialist',
    color: 'text-tbgs-blue',
    description: 'Gecertificeerde schoorsteenservice',
  },
  {
    name: 'Onderhoudsbedrijf',
    slug: 'totaal-onderhoud-specialist',
    color: 'text-tbgs-green',
    description: 'Preventief en curatief onderhoud',
  },
  {
    name: 'Aannemer',
    slug: 'totaal-bouw-specialist',
    color: 'text-tbgs-orange',
    description: 'Algemene bouwwerkzaamheden',
  },
];

interface PageProps {
  params: { city: string };
}

export function generateStaticParams() {
  return validCities.map((city) => ({
    city,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = params;
  const cityInfo = cityData[city];
  
  if (!cityInfo) {
    return {
      title: 'Pagina niet gevonden',
    };
  }

  return {
    title: `TBGS ${cityInfo.name} – Dakdekker, Schoorsteenveger, Aannemer & Onderhoudsbedrijf`,
    description: `✓ TBGS ${cityInfo.name} Nederland ✓ Dakdekker, Schoorsteenveger, Onderhoudsbedrijf & Aannemer ✓ Lokale service ${cityInfo.region} ✓ 15+ jaar ervaring ✓ Gratis offerte`,
    keywords: `TBGS ${cityInfo.name}, dakdekker ${cityInfo.name}, schoorsteenveger ${cityInfo.name}, aannemer ${cityInfo.name}, onderhoudsbedrijf ${cityInfo.name} Nederland`,
    alternates: {
      canonical: `/nl/${city}`,
    },
    openGraph: {
      title: `TBGS ${cityInfo.name} - Vakkundige Bouwspecialisten`,
      description: `Betrouwbare specialist voor dakwerkzaamheden, schoorsteenonderhoud, algemene bouw en onderhoud in ${cityInfo.name}.`,
      url: `https://www.tbgs.nl/nl/${city}`,
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { city } = params;
  const cityInfo = cityData[city];

  if (!cityInfo || !validCities.includes(city)) {
    notFound();
  }

  // Try to fetch from WordPress first
  let wordpressData;
  try {
    const { getPageContent } = await import('@/lib/wordpress-sync');
    wordpressData = await getPageContent('location', {
      country: 'nl',
      city: city,
    });
  } catch (error) {
    console.log('WordPress not available, using static content');
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: `TBGS BV - ${cityInfo.name}`,
            address: {
              '@type': 'PostalAddress',
              addressLocality: cityInfo.name,
              addressRegion: cityInfo.region,
              addressCountry: 'NL',
            },
            telephone: '+31-40-123-4567',
            email: 'info@tbgs.nl',
            url: `https://www.tbgs.nl/nl/${city}`,
            geo: {
              '@type': 'GeoCoordinates',
              latitude: cityInfo.coordinates.lat,
              longitude: cityInfo.coordinates.lng,
            },
            areaServed: [cityInfo.name, cityInfo.region, 'Nederland'],
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: 4.8,
              reviewCount: 127,
            },
            openingHours: ['Mo-Fr 08:00-17:00', 'Sa 09:00-16:00'],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              {cityInfo.name}, {cityInfo.region}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              TBGS {cityInfo.name} – Uw Lokale Bouwpartner
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {wordpressData?.acf?.intro || 
               `Complete bouwdienstverlening in ${cityInfo.name} door lokale vakmannen. Van dakwerkzaamheden tot schoorsteenservice, van onderhoud tot verbouwingen - alles onder één dak.`}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-tbgs-navy hover:bg-blue-800 text-white px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Contact {cityInfo.name}
              </Button>
              <a 
                href="tel:+31401234567"
                className="inline-flex items-center px-8 py-3 border-2 border-tbgs-navy text-tbgs-navy rounded-lg font-semibold hover:bg-tbgs-navy hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                +31 40 123 4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Onze Specialisten in {cityInfo.name}
            </h2>
            <p className="text-lg text-gray-600">
              Vier gespecialiseerde teams voor al uw bouwbehoeften in {cityInfo.name}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {specialists.map((specialist) => (
              <Card key={specialist.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className={`text-xl ${specialist.color}`}>
                    {specialist.name} {cityInfo.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{specialist.description}</p>
                  <Link href={`/nl/${specialist.slug}/${city}`}>
                    <Button variant="outline" className="w-full">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Meer info {specialist.name}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      {wordpressData?.content && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: wordpressData.content }}
              />
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {wordpressData?.acf?.faq && wordpressData.acf.faq.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Veelgestelde Vragen
              </h2>
              <div className="space-y-4">
                {wordpressData.acf.faq.map((item: any, index: number) => (
                  <details key={index} className="border border-gray-200 rounded-lg">
                    <summary className="cursor-pointer font-medium text-lg p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                      {item.question}
                    </summary>
                    <div className="p-4 border-l-4 border-tbgs-navy bg-white">
                      <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why TBGS Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Waarom TBGS in {cityInfo.name}?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Lokale vakmannen met jarenlange ervaring in {cityInfo.name} en omgeving. 
              Betrouwbare service met uitgebreide garantie.
            </p>

            <Button size="lg" className="bg-tbgs-navy hover:bg-blue-800 text-white px-8 py-3">
              Gratis Adviesgesprek {cityInfo.name}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}