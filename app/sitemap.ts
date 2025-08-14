import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tbgs.nl';
  
  // Static pages
  const staticPages = [
    '',
    '/nl',
    '/be',
    '/gratis-offerte',
    '/kennisbank',
    '/over-ons',
    '/contact',
  ];

  // NL cities
  const nlCities = [
    'eindhoven', 'nuenen', 'veldhoven', 'best',
    'geldrop', 'mierlo', 'waalre', 'son-en-breugel'
  ];

  // BE cities
  const beCities = [
    'lommel', 'hamont-achel', 'pelt', 'retie'
  ];

  // Specialists
  const specialists = [
    'totaal-dak-specialist',
    'totaal-schoorsteen-specialist', 
    'totaal-onderhoud-specialist',
    'totaal-bouw-specialist'
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  // Add static pages
  staticPages.forEach(page => {
    sitemap.push({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: page === '' ? 'daily' : 'weekly',
      priority: page === '' ? 1 : 0.8,
    });
  });

  // Add NL city pages
  nlCities.forEach(city => {
    sitemap.push({
      url: `${baseUrl}/nl/${city}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    });

    sitemap.push({
      url: `${baseUrl}/nl/locaties/${city}`,
      lastModified: new Date(),
      changeFrequency: 'weekly', 
      priority: 0.6,
    });

    // Add specialist × city combinations (when pages exist)
    specialists.forEach(specialist => {
      sitemap.push({
        url: `${baseUrl}/nl/${specialist}/${city}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });
  });

  // Add BE city pages
  beCities.forEach(city => {
    sitemap.push({
      url: `${baseUrl}/be/locaties/${city}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    });

    // Add specialist × city combinations for BE
    specialists.forEach(specialist => {
      sitemap.push({
        url: `${baseUrl}/be/${specialist}/${city}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });
  });

  return sitemap;
}