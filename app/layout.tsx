import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | TBGS BV - Totaal Bouw Groep Specialisten',
    default: 'TBGS BV - Totaal Bouw Groep Specialisten | Dakdekker, Schoorsteenveger, Aannemer & Onderhoudsbedrijf',
  },
  description: 'TBGS BV - Uw specialist voor dakwerkzaamheden, schoorsteenonderhoud, algemene bouw en onderhoud in Nederland en België. Vakkundige service met jarenlange ervaring.',
  keywords: 'dakdekker, schoorsteenveger, aannemer, onderhoudsbedrijf, TBGS, Nederland, België, Eindhoven, Lommel',
  authors: [{ name: 'TBGS BV' }],
  creator: 'TBGS BV',
  publisher: 'TBGS BV',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.tbgs.nl'),
  alternates: {
    canonical: '/',
    languages: {
      'nl-NL': '/nl',
      'nl-BE': '/be',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://www.tbgs.nl',
    siteName: 'TBGS BV',
    title: 'TBGS BV - Totaal Bouw Groep Specialisten',
    description: 'Uw specialist voor dakwerkzaamheden, schoorsteenonderhoud, algemene bouw en onderhoud in Nederland en België.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TBGS BV - Totaal Bouw Groep Specialisten',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TBGS BV - Totaal Bouw Groep Specialisten',
    description: 'Uw specialist voor dakwerkzaamheden, schoorsteenonderhoud, algemene bouw en onderhoud.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        {/* Hreflang tags for international SEO */}
        <link rel="alternate" href="https://www.tbgs.nl/nl" hrefLang="nl-NL" />
        <link rel="alternate" href="https://www.tbgs.nl/be" hrefLang="nl-BE" />
        <link rel="alternate" href="https://www.tbgs.nl/" hrefLang="x-default" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//cms.tbgs.nl" />
        <link rel="preconnect" href="https://cms.tbgs.nl" crossOrigin="anonymous" />
        
        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Schema.org Organization markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'TBGS BV - Totaal Bouw Groep Specialisten',
              url: 'https://www.tbgs.nl',
              logo: 'https://www.tbgs.nl/logo.png',
              sameAs: [
                'https://www.facebook.com/tbgsnl',
                'https://www.linkedin.com/company/tbgs-bv',
              ],
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+31-40-123-4567',
                  contactType: 'Customer Service',
                  areaServed: ['NL', 'BE'],
                  availableLanguage: ['Dutch'],
                },
              ],
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'NL',
                addressRegion: 'Noord-Brabant',
                addressLocality: 'Eindhoven',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}