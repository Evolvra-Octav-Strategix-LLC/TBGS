import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'TBGS BV - Totaal Bouw Groep Specialisten',
  description: 'Vakkundige bouwdienstverlening in Nederland en België. Dakdekker, Schoorsteenveger, Aannemer & Onderhoudsbedrijf.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  // For now, redirect to NL as the main market
  // Later we can implement geolocation-based routing
  redirect('/nl');
}