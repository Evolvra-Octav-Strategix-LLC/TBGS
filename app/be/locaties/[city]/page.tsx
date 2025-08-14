import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { SchemaMarkup } from '@/components/wordpress/WordPressContent';

const validCities = ['lommel', 'hamont-achel', 'pelt', 'retie'];

const cityData: Record<string, {
  name: string;
  region: string;
  description: string;
  coordinates: { lat: number; lng: number };
}> = {
  lommel: {
    name: 'Lommel',
    region: 'Limburg',
    description: 'Groene gemeente aan de Nederlandse grens',
    coordinates: { lat: 51.2304, lng: 5.3136 },
  },
  'hamont-achel': {
    name: 'Hamont-Achel',
    region: 'Limburg',
    description: 'Historische gemeente met authentieke architectuur',
    coordinates: { lat: 51.2500, lng: 5.3167 },
  },
  pelt: {
    name: 'Pelt',
    region: 'Limburg',
    description: 'Moderne fusiegemeente met diverse bouwstijlen',
    coordinates: { lat: 51.2167, lng: 5.4833 },
  },
  retie: {
    name: 'Retie',
    region: 'Antwerpen',
    description: 'Gemeente in de Kempen met karakteristieke woningen',
    coordinates: { lat: 51.2667, lng: 5.0833 },
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
    title: `TBGS ${cityInfo.name} België – Dakdekker, Schoorsteenveger, Aannemer & Onderhoudsbedrijf`,
    description: `✓ TBGS ${cityInfo.name} België ✓ Dakdekker, Schoorsteenveger, Onderhoudsbedrijf & Aannemer ✓ Lokale service ${cityInfo.region} ✓ 15+ jaar ervaring ✓ Gratis offerte`,
    keywords: `TBGS ${cityInfo.name}, dakdekker ${cityInfo.name}, schoorsteenveger ${cityInfo.name}, aannemer ${cityInfo.name}, onderhoudsbedrijf ${cityInfo.name} België`,
    alternates: {
      canonical: `/be/locaties/${city}`,
    },
    openGraph: {
      title: `TBGS ${cityInfo.name} - Vakkundige Bouwspecialisten`,
      description: `Betrouwbare specialist voor dakwerkzaamheden, schoorsteenonderhoud, algemene bouw en onderhoud in ${cityInfo.name}.`,
      url: `https://www.tbgs.nl/be/locaties/${city}`,
    },
  };
}

export default function BelgianCityPage({ params }: PageProps) {
  const { city } = params;
  const cityInfo = cityData[city];

  if (!cityInfo || !validCities.includes(city)) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <SchemaMarkup
        type="LocalBusiness"
        name={`TBGS BV - ${cityInfo.name}`}
        city={cityInfo.name}
        country="BE"
        coordinates={cityInfo.coordinates}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              {cityInfo.name}, {cityInfo.region} - België
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              TBGS {cityInfo.name} – Uw Lokale Bouwpartner
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Complete bouwdienstverlening in {cityInfo.name} door lokale vakmannen. Van dakwerkzaamheden 
              tot schoorsteenservice, van onderhoud tot verbouwingen - alles onder één dak.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-tbgs-navy hover:bg-blue-800 text-white px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Contact {cityInfo.name}
              </Button>
              <a 
                href="tel:+3211342450"
                className="inline-flex items-center px-8 py-3 border-2 border-tbgs-navy text-tbgs-navy rounded-lg font-semibold hover:bg-tbgs-navy hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                +32 11 34 24 50
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
                  <Link href={`/be/${specialist.slug}/${city}`}>
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

      {/* Local Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              {cityInfo.description}
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Als lokale specialist in {cityInfo.name} kennen wij de specifieke uitdagingen 
              en mogelijkheden van deze regio. Onze ervaring met lokale bouwvoorschriften 
              en architectuurstijlen maakt ons de ideale partner voor uw project.
            </p>

            <div className="text-center">
              <Button size="lg" className="bg-tbgs-navy hover:bg-blue-800 text-white px-8 py-3">
                Gratis Adviesgesprek {cityInfo.name}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-tbgs-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Project in {cityInfo.name}?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Lokale service met persoonlijke aandacht
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+3211342450"
              className="inline-flex items-center px-8 py-3 bg-white text-tbgs-navy rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              +32 11 34 24 50
            </a>
            <Link href="/gratis-offerte">
              <Button size="lg" variant="secondary" className="bg-white text-tbgs-navy hover:bg-gray-100">
                Gratis Offerte
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}