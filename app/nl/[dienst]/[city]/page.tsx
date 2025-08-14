import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Star } from 'lucide-react';
import { getSpecialistLocation } from '@/lib/wordpress';
import { WordPressContent, FAQ, SchemaMarkup } from '@/components/wordpress/WordPressContent';

const validSpecialists = [
  'totaal-dak-specialist',
  'totaal-schoorsteen-specialist',
  'totaal-onderhoud-specialist',
  'totaal-bouw-specialist',
];

const validCities = [
  'eindhoven', 'nuenen', 'veldhoven', 'best',
  'geldrop', 'mierlo', 'waalre', 'son-en-breugel'
];

const specialistInfo: Record<string, {
  name: string;
  description: string;
  color: string;
  schemaType: string;
}> = {
  'totaal-dak-specialist': {
    name: 'Dakdekker',
    description: 'Professionele dakwerkzaamheden',
    color: 'text-tbgs-red',
    schemaType: 'RoofingContractor',
  },
  'totaal-schoorsteen-specialist': {
    name: 'Schoorsteenveger',
    description: 'Gecertificeerde schoorsteenservice',
    color: 'text-tbgs-blue',
    schemaType: 'ChimneySweep',
  },
  'totaal-onderhoud-specialist': {
    name: 'Onderhoudsbedrijf',
    description: 'Preventief en curatief onderhoud',
    color: 'text-tbgs-green',
    schemaType: 'HomeAndConstructionBusiness',
  },
  'totaal-bouw-specialist': {
    name: 'Aannemer',
    description: 'Algemene bouwwerkzaamheden',
    color: 'text-tbgs-orange',
    schemaType: 'GeneralContractor',
  },
};

const cityData: Record<string, {
  name: string;
  coordinates: { lat: number; lng: number };
}> = {
  eindhoven: { name: 'Eindhoven', coordinates: { lat: 51.4416, lng: 5.4697 } },
  nuenen: { name: 'Nuenen', coordinates: { lat: 51.4700, lng: 5.5500 } },
  veldhoven: { name: 'Veldhoven', coordinates: { lat: 51.4197, lng: 5.4044 } },
  best: { name: 'Best', coordinates: { lat: 51.5067, lng: 5.3900 } },
  geldrop: { name: 'Geldrop', coordinates: { lat: 51.4231, lng: 5.5581 } },
  mierlo: { name: 'Mierlo', coordinates: { lat: 51.4333, lng: 5.6167 } },
  waalre: { name: 'Waalre', coordinates: { lat: 51.3833, lng: 5.4500 } },
};

interface PageProps {
  params: { dienst: string; city: string };
}

export function generateStaticParams() {
  const params = [];
  for (const dienst of validSpecialists) {
    for (const city of validCities) {
      params.push({ dienst, city });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { dienst, city } = params;
  const specialist = specialistInfo[dienst];
  const cityInfo = cityData[city];
  
  if (!specialist || !cityInfo) {
    return { title: 'Pagina niet gevonden' };
  }

  const title = `${specialist.name} ${cityInfo.name} - TBGS Nederland`;
  const description = `✓ ${specialist.name} ${cityInfo.name} ✓ TBGS Nederland ✓ ${specialist.description} ✓ Lokale service ✓ 15+ jaar ervaring ✓ Gratis offerte`;

  return {
    title,
    description,
    keywords: `${specialist.name} ${cityInfo.name}, TBGS ${cityInfo.name}, ${dienst} ${cityInfo.name}, Nederland`,
    alternates: {
      canonical: `/nl/${dienst}/${city}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.tbgs.nl/nl/${dienst}/${city}`,
    },
  };
}

export default async function SpecialistLocationPage({ params }: PageProps) {
  const { dienst, city } = params;
  const specialist = specialistInfo[dienst];
  const cityInfo = cityData[city];

  if (!specialist || !cityInfo || !validSpecialists.includes(dienst) || !validCities.includes(city)) {
    notFound();
  }

  // Try to fetch from WordPress, fall back to static content
  let wordpressData;
  try {
    wordpressData = await getSpecialistLocation(city, 'nl', dienst);
  } catch (error) {
    console.log('WordPress not available, using static content');
  }

  return (
    <div className="min-h-screen bg-white">
      <SchemaMarkup
        type={specialist.schemaType}
        name={`${specialist.name} ${cityInfo.name} - TBGS`}
        city={cityInfo.name}
        country="NL"
        coordinates={cityInfo.coordinates}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              {cityInfo.name}, Nederland
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {specialist.name} {cityInfo.name}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {wordpressData?.acf?.intro || 
               `Vakkundige ${specialist.description.toLowerCase()} in ${cityInfo.name} door TBGS Nederland. Lokale service met jarenlange ervaring en uitgebreide garantie.`}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+31401234567"
                className="inline-flex items-center px-8 py-3 bg-tbgs-navy text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Direct Contact
              </a>
              <Link href="/gratis-offerte">
                <Button size="lg" variant="outline" className="border-tbgs-navy text-tbgs-navy hover:bg-tbgs-navy hover:text-white px-8 py-3">
                  Gratis Offerte
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {wordpressData?.content ? (
              <WordPressContent content={wordpressData.content} />
            ) : (
              <div className="prose prose-lg max-w-none">
                <h2>Waarom kiezen voor TBGS {specialist.name} in {cityInfo.name}?</h2>
                <p>
                  Als specialist in {specialist.description.toLowerCase()} bieden wij in {cityInfo.name} en omgeving 
                  een complete service. Onze vakmannen hebben jarenlange ervaring en werken altijd volgens de 
                  nieuwste normen en technieken.
                </p>
                
                <h3>Onze Diensten</h3>
                <ul>
                  <li>Professionele inspectie en advies</li>
                  <li>Kwalitatieve uitvoering van werkzaamheden</li>
                  <li>Preventief onderhoud en service</li>
                  <li>24/7 spoedservice beschikbaar</li>
                </ul>

                <h3>Service in {cityInfo.name}</h3>
                <p>
                  Wij kennen {cityInfo.name} als geen ander en weten precies welke uitdagingen er 
                  zijn op het gebied van {specialist.description.toLowerCase()}. Door onze lokale 
                  aanwezigheid kunnen wij snel schakelen en bent u verzekerd van persoonlijke service.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {wordpressData?.acf?.faq && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FAQ faq={wordpressData.acf.faq} />
            </div>
          </div>
        </section>
      )}

      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Wat klanten zeggen over onze {specialist.name} service
            </h2>
            
            <div className="flex items-center justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-lg font-semibold ml-2">4.8/5</span>
              <span className="text-gray-600 ml-2">(127 beoordelingen)</span>
            </div>

            <p className="text-lg text-gray-600 mb-8">
              "Vakkundige service en eerlijke prijzen. Precies wat je zoekt in een {specialist.name}!"
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-tbgs-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {specialist.name} {cityInfo.name} Nodig?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Neem direct contact op voor een vrijblijvende offerte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+31401234567"
              className="inline-flex items-center px-8 py-3 bg-white text-tbgs-navy rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              +31 40 123 4567
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