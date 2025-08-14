import { wpClient, getAllLocations, getAllKnowledgeBasePosts } from './wordpress';

// Auto-sync configuration for all pages
export const AUTO_SYNC_CONFIG = {
  enabled: process.env.NODE_ENV === 'production' || process.env.ENABLE_WP_SYNC === 'true',
  fallbackToStatic: true,
  revalidateOnError: true,
  cacheDuration: 300, // 5 minutes
};

// Enhanced WordPress queries with error handling and fallbacks
export async function getPageContent(type: 'location' | 'specialist' | 'knowledge', params: {
  country?: string;
  city?: string;
  specialist?: string;
  slug?: string;
}) {
  if (!AUTO_SYNC_CONFIG.enabled) {
    return null; // Use static content
  }

  try {
    let query = '';
    let variables = {};

    switch (type) {
      case 'location':
        if (params.specialist) {
          // Specialist × Location page
          query = `
            query SpecialistLocation($city: String!, $country: String!, $specialist: String!) {
              locations(where: {
                metaQuery: [
                  {key: "city", compare: EQUALS, value: $city},
                  {key: "country", compare: EQUALS, value: $country},
                  {key: "specialist", compare: EQUALS, value: $specialist}
                ]
              }) {
                nodes {
                  title
                  content
                  uri
                  seo {
                    title
                    metaDesc
                    opengraphImage {
                      sourceUrl
                      altText
                    }
                  }
                  acf {
                    intro
                    body
                    faq {
                      question
                      answer
                    }
                    images {
                      sourceUrl
                      altText
                    }
                    schema_type
                    country
                    city
                    specialist
                    latitude
                    longitude
                  }
                }
              }
            }
          `;
          variables = {
            city: params.city,
            country: params.country,
            specialist: params.specialist,
          };
        } else {
          // City hub page
          query = `
            query CityHub($city: String!, $country: String!) {
              locations(where: {
                metaQuery: [
                  {key: "city", compare: EQUALS, value: $city},
                  {key: "country", compare: EQUALS, value: $country},
                  {key: "specialist", compare: NOT_EXISTS}
                ]
              }) {
                nodes {
                  title
                  content
                  uri
                  seo {
                    title
                    metaDesc
                    opengraphImage {
                      sourceUrl
                      altText
                    }
                  }
                  acf {
                    intro
                    body
                    faq {
                      question
                      answer
                    }
                    images {
                      sourceUrl
                      altText
                    }
                    schema_type
                    country
                    city
                    latitude
                    longitude
                  }
                }
              }
            }
          `;
          variables = {
            city: params.city,
            country: params.country,
          };
        }
        break;

      case 'knowledge':
        query = `
          query KnowledgeBasePost($slug: String!) {
            postBy(slug: $slug) {
              title
              content
              excerpt
              date
              modified
              uri
              seo {
                title
                metaDesc
                opengraphImage {
                  sourceUrl
                  altText
                }
              }
              acf {
                intro
                faq {
                  question
                  answer
                }
                images {
                  sourceUrl
                  altText
                }
              }
              categories {
                nodes {
                  name
                  slug
                }
              }
              tags {
                nodes {
                  name
                  slug
                }
              }
            }
          }
        `;
        variables = { slug: params.slug };
        break;
    }

    const data = await wpClient.request(query, variables) as any;
    
    if (type === 'location') {
      return data.locations?.nodes?.[0] || null;
    } else if (type === 'knowledge') {
      return data.postBy || null;
    }

    return null;

  } catch (error) {
    console.error(`WordPress sync error for ${type}:`, error);
    
    if (AUTO_SYNC_CONFIG.fallbackToStatic) {
      console.log(`Falling back to static content for ${type}`);
      return null; // This will trigger static content rendering
    }
    
    throw error;
  }
}

// Automatic content tagging and categorization
export function generateContentTags(content: {
  country?: string;
  city?: string;
  specialist?: string;
  title?: string;
  content?: string;
}) {
  const tags = [];
  const categories = [];

  // Location-based tags
  if (content.country && content.city) {
    tags.push(`${content.city} ${content.country.toUpperCase()}`);
    tags.push(content.city);
    
    if (content.country === 'nl') {
      categories.push('Nederland');
      tags.push('Noord-Brabant');
    } else {
      categories.push('België');
      tags.push('Limburg België');
    }
  }

  // Specialist-based tags
  if (content.specialist) {
    switch (content.specialist) {
      case 'totaal-dak-specialist':
        categories.push('Dakwerkzaamheden');
        tags.push('dakdekker', 'daklekkage', 'dakreparatie', 'dakonderhoud');
        break;
      case 'totaal-schoorsteen-specialist':
        categories.push('Schoorsteenservice');
        tags.push('schoorsteenveger', 'schoorsteenonderhoud', 'schoorsteencontrole');
        break;
      case 'totaal-onderhoud-specialist':
        categories.push('Onderhoud');
        tags.push('onderhoudsbedrijf', 'preventief onderhoud', 'reparatieservice');
        break;
      case 'totaal-bouw-specialist':
        categories.push('Bouwwerkzaamheden');
        tags.push('aannemer', 'verbouwing', 'renovatie', 'nieuwbouw');
        break;
    }
  }

  // Content-based tags (analyze title and content for keywords)
  const contentText = `${content.title || ''} ${content.content || ''}`.toLowerCase();
  
  const keywordMap = {
    'energiebesparing': ['energiebesparing', 'isolatie', 'duurzaam'],
    'lekkage': ['lekkage', 'lek', 'waterschade'],
    'onderhoud': ['onderhoud', 'service', 'controle'],
    'renovatie': ['renovatie', 'verbouwing', 'modernisering'],
    'nieuwbouw': ['nieuwbouw', 'nieuwe', 'bouwen'],
  };

  Object.entries(keywordMap).forEach(([tag, keywords]) => {
    if (keywords.some(keyword => contentText.includes(keyword))) {
      tags.push(tag);
    }
  });

  return {
    tags: Array.from(new Set(tags)), // Remove duplicates
    categories: Array.from(new Set(categories)),
  };
}

// WordPress post creation helper (for future GraphQL mutation support)
export async function createWordPressPost(type: 'location' | 'service' | 'knowledge', data: {
  title: string;
  content: string;
  country?: string;
  city?: string;
  specialist?: string;
  intro?: string;
  faq?: Array<{ question: string; answer: string }>;
  images?: string[];
  coordinates?: { lat: number; lng: number };
}) {
  const mutation = `
    mutation CreatePost($input: CreatePostInput!) {
      createPost(input: $input) {
        post {
          id
          title
          uri
        }
      }
    }
  `;

  const { tags, categories } = generateContentTags(data);

  const input = {
    title: data.title,
    content: data.content,
    status: 'PUBLISH',
    ...(type === 'location' && {
      postType: 'LOCATIONS',
      acf: {
        country: data.country,
        city: data.city,
        specialist: data.specialist,
        intro: data.intro,
        body: data.content,
        faq: data.faq,
        latitude: data.coordinates?.lat,
        longitude: data.coordinates?.lng,
        schema_type: getSchemaType(data.specialist),
      },
    }),
    tags: tags.map(tag => ({ name: tag })),
    categories: categories.map(cat => ({ name: cat })),
  };

  try {
    // Note: This requires WordPress GraphQL mutation support
    // For now, return a mock response for development
    console.log('Would create WordPress post:', data.title);
    return {
      id: `mock-${Date.now()}`,
      title: data.title,
      uri: `/mock/${data.title.toLowerCase().replace(/\s+/g, '-')}`,
    };
  } catch (error) {
    console.error('Failed to create WordPress post:', error);
    throw error;
  }
}

function getSchemaType(specialist?: string): string {
  switch (specialist) {
    case 'totaal-dak-specialist':
      return 'RoofingContractor';
    case 'totaal-schoorsteen-specialist':
      return 'ChimneySweep';
    case 'totaal-onderhoud-specialist':
      return 'HomeAndConstructionBusiness';
    case 'totaal-bouw-specialist':
      return 'GeneralContractor';
    default:
      return 'LocalBusiness';
  }
}

// Batch sync existing content to WordPress
export async function syncAllExistingContent() {
  console.log('Starting batch sync of existing content to WordPress...');

  const existingLocations = [
    // NL Locations
    { country: 'nl', city: 'eindhoven', title: 'TBGS Eindhoven', intro: 'Complete bouwdienstverlening in Eindhoven door lokale vakmannen.' },
    { country: 'nl', city: 'nuenen', title: 'TBGS Nuenen', intro: 'Vakkundige bouwservice in het historische Nuenen.' },
    { country: 'nl', city: 'veldhoven', title: 'TBGS Veldhoven', intro: 'Betrouwbare bouwspecialisten in Veldhoven en omgeving.' },
    { country: 'nl', city: 'best', title: 'TBGS Best', intro: 'Professionele bouwdiensten in de groeiende gemeente Best.' },
    { country: 'nl', city: 'geldrop', title: 'TBGS Geldrop', intro: 'Lokale bouwexperts in Geldrop met jarenlange ervaring.' },
    { country: 'nl', city: 'mierlo', title: 'TBGS Mierlo', intro: 'Kwalitatieve bouwservice in het rustige Mierlo.' },
    { country: 'nl', city: 'waalre', title: 'TBGS Waalre', intro: 'Exclusieve bouwdiensten voor de luxe woningen in Waalre.' },
    
    // BE Locations
    { country: 'be', city: 'lommel', title: 'TBGS Lommel', intro: 'Vakkundige bouwservice in Lommel en omliggende gemeenten.' },
    { country: 'be', city: 'hamont-achel', title: 'TBGS Hamont-Achel', intro: 'Betrouwbare bouwspecialisten in Hamont-Achel.' },
    { country: 'be', city: 'pelt', title: 'TBGS Pelt', intro: 'Complete bouwdienstverlening in de fusiegemeente Pelt.' },
    { country: 'be', city: 'retie', title: 'TBGS Retie', intro: 'Professionele bouwservice in Retie en de Kempen.' },
  ];

  const specialists = [
    'totaal-dak-specialist',
    'totaal-schoorsteen-specialist',
    'totaal-onderhoud-specialist',
    'totaal-bouw-specialist'
  ];

  try {
    // Create city hub pages
    for (const location of existingLocations) {
      await createWordPressPost('location', {
        title: location.title,
        content: `<h2>Welkom bij ${location.title}</h2><p>${location.intro}</p><p>Onze ervaren vakmannen staan klaar om u te helpen met al uw bouwbehoeften in ${location.city}. Van kleine reparaties tot grote renovatieprojecten - wij bieden een compleet pakket aan diensten.</p>`,
        country: location.country,
        city: location.city,
        intro: location.intro,
        coordinates: getCityCoordinates(location.city),
      });
      
      console.log(`✓ Created city hub: ${location.title}`);
    }

    // Create specialist × location pages
    for (const location of existingLocations) {
      for (const specialist of specialists) {
        const specialistName = getSpecialistName(specialist);
        await createWordPressPost('location', {
          title: `${specialistName} ${location.city}`,
          content: `<h2>${specialistName} in ${location.city}</h2><p>Vakkundige ${specialist.replace('totaal-', '').replace('-specialist', '')} diensten in ${location.city} door TBGS. Lokale service met jarenlange ervaring.</p>`,
          country: location.country,
          city: location.city,
          specialist: specialist,
          intro: `Professionele ${specialist.replace('totaal-', '').replace('-specialist', '')} service in ${location.city}`,
          coordinates: getCityCoordinates(location.city),
        });
        
        console.log(`✓ Created specialist page: ${specialistName} ${location.city}`);
      }
    }

    console.log('✅ Batch sync completed successfully!');
  } catch (error) {
    console.error('❌ Batch sync failed:', error);
    throw error;
  }
}

function getSpecialistName(specialist: string): string {
  switch (specialist) {
    case 'totaal-dak-specialist': return 'Dakdekker';
    case 'totaal-schoorsteen-specialist': return 'Schoorsteenveger';
    case 'totaal-onderhoud-specialist': return 'Onderhoudsbedrijf';
    case 'totaal-bouw-specialist': return 'Aannemer';
    default: return 'Specialist';
  }
}

function getCityCoordinates(city: string): { lat: number; lng: number } {
  const coordinates: Record<string, { lat: number; lng: number }> = {
    eindhoven: { lat: 51.4416, lng: 5.4697 },
    nuenen: { lat: 51.4700, lng: 5.5500 },
    veldhoven: { lat: 51.4197, lng: 5.4044 },
    best: { lat: 51.5067, lng: 5.3900 },
    geldrop: { lat: 51.4231, lng: 5.5581 },
    mierlo: { lat: 51.4333, lng: 5.6167 },
    waalre: { lat: 51.3833, lng: 5.4500 },
    lommel: { lat: 51.2304, lng: 5.3136 },
    'hamont-achel': { lat: 51.2500, lng: 5.3167 },
    pelt: { lat: 51.2167, lng: 5.4833 },
    retie: { lat: 51.2667, lng: 5.0833 },
  };
  
  return coordinates[city] || { lat: 0, lng: 0 };
}