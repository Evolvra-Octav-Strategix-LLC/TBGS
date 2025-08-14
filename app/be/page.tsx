import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TBGS België - Dakdekker, Schoorsteenveger, Aannemer & Onderhoudsbedrijf',
  description: 'TBGS België - Uw betrouwbare specialist voor dakwerkzaamheden, schoorsteenonderhoud, algemene bouw en onderhoud in België. Vakkundige service in Limburg en omgeving.',
  keywords: 'dakdekker België, schoorsteenveger België, aannemer België, onderhoudsbedrijf België, TBGS, Lommel, Pelt, Hamont-Achel',
  alternates: {
    canonical: '/be',
  },
  openGraph: {
    title: 'TBGS België - Vakkundige Bouwspecialisten',
    description: 'Betrouwbare specialist voor dakwerkzaamheden, schoorsteenonderhoud, algemene bouw en onderhoud in België.',
    url: 'https://www.tbgs.nl/be',
  },
};

const beLocations = [
  {
    name: 'Lommel',
    slug: 'lommel',
    region: 'Limburg',
    description: 'Groene gemeente aan de Nederlandse grens',
  },
  {
    name: 'Hamont-Achel',
    slug: 'hamont-achel',
    region: 'Limburg',
    description: 'Historische gemeente met authentieke architectuur',
  },
  {
    name: 'Pelt',
    slug: 'pelt',
    region: 'Limburg',
    description: 'Moderne fusiegemeente met diverse bouwstijlen',
  },
  {
    name: 'Retie',
    slug: 'retie',
    region: 'Antwerpen',
    description: 'Gemeente in de Kempen met karakteristieke woningen',
  },
];

const specialists = [
  {
    name: 'Totaal Dak Specialist',
    slug: 'totaal-dak-specialist',
    color: 'text-tbgs-red',
    description: 'Vakkundige dakwerkzaamheden',
    icon: '🏠',
  },
  {
    name: 'Totaal Schoorsteen Specialist',
    slug: 'totaal-schoorsteen-specialist',
    color: 'text-tbgs-blue',
    description: 'Professionele schoorsteenservice',
    icon: '🏭',
  },
  {
    name: 'Totaal Onderhoud Specialist',
    slug: 'totaal-onderhoud-specialist',
    color: 'text-tbgs-green',
    description: 'Preventief en curatief onderhoud',
    icon: '🔧',
  },
  {
    name: 'Totaal Bouw Specialist',
    slug: 'totaal-bouw-specialist',
    color: 'text-tbgs-orange',
    description: 'Algemene bouwwerkzaamheden',
    icon: '🏗️',
  },
];

export default function BelgiumHub() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              België
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              TBGS België
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Uw betrouwbare specialist voor dakwerkzaamheden, schoorsteenonderhoud, 
              algemene bouw en onderhoud in België.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-tbgs-navy hover:bg-blue-800 text-white px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                +32 11 34 24 50
              </Button>
              <Link href="/gratis-offerte">
                <Button size="lg" variant="outline" className="border-tbgs-navy text-tbgs-navy hover:bg-tbgs-navy hover:text-white px-8 py-3">
                  Gratis Offerte
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Onze Specialisten
            </h2>
            <p className="text-lg text-gray-600">
              Vier gespecialiseerde teams voor al uw bouwbehoeften
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialists.map((specialist) => (
              <Card key={specialist.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{specialist.icon}</div>
                  <CardTitle className={`text-lg ${specialist.color}`}>
                    {specialist.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{specialist.description}</p>
                  <Link href={`/be/${specialist.slug}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Meer Info
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Onze Locaties in België
            </h2>
            <p className="text-lg text-gray-600">
              Lokale service in Limburg en Kempen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beLocations.map((location) => (
              <Card key={location.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    {location.name}
                  </CardTitle>
                  <p className="text-sm text-gray-500">{location.region}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{location.description}</p>
                  <Link href={`/be/locaties/${location.slug}`}>
                    <Button variant="outline" className="w-full">
                      <MapPin className="w-4 h-4 mr-2" />
                      Bekijk {location.name}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-tbgs-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Klaar voor uw project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ontvang binnen 24 uur een vrijblijvende offerte
          </p>
          <Link href="/gratis-offerte">
            <Button size="lg" variant="secondary" className="bg-white text-tbgs-navy hover:bg-gray-100">
              Gratis Offerte Aanvragen
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}