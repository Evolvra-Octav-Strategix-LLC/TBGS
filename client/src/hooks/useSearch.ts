import { useState, useCallback } from "react";

export interface SearchResult {
  id: string;
  title: string;
  url: string;
  type: 'kennisbank' | 'locatie' | 'dienst' | 'page';
  excerpt?: string;
  category?: string;
  tags?: string[];
}

// Global search registry
let searchRegistry: SearchResult[] = [];

/**
 * Custom hook for search functionality
 */
export function useSearch() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const search = useCallback(async (query: string) => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    
    try {
      // Simulate async search (in real app this would be an API call)
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const lowerQuery = query.toLowerCase();
      const filtered = searchRegistry.filter(item => 
        item.title.toLowerCase().includes(lowerQuery) ||
        item.excerpt?.toLowerCase().includes(lowerQuery) ||
        item.category?.toLowerCase().includes(lowerQuery) ||
        item.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
      );

      // Sort by relevance
      const sorted = filtered.sort((a, b) => {
        const aTitle = a.title.toLowerCase().includes(lowerQuery);
        const bTitle = b.title.toLowerCase().includes(lowerQuery);
        if (aTitle && !bTitle) return -1;
        if (!aTitle && bTitle) return 1;
        
        // Secondary sort by type priority
        const typePriority = { kennisbank: 1, dienst: 2, locatie: 3, page: 4 };
        return typePriority[a.type] - typePriority[b.type];
      });

      setResults(sorted.slice(0, 8));
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  return { search, results, isSearching };
}

/**
 * Register new searchable content - automatically called when content is added
 */
export function registerSearchableContent(content: Omit<SearchResult, 'id'>) {
  const id = `${content.type}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const newItem: SearchResult = { id, ...content };
  
  // Check if content already exists (prevent duplicates)
  const existsIndex = searchRegistry.findIndex(item => 
    item.url === content.url && item.title === content.title
  );
  
  if (existsIndex > -1) {
    // Update existing item
    searchRegistry[existsIndex] = newItem;
  } else {
    // Add new item
    searchRegistry.push(newItem);
  }
  
  return id;
}

/**
 * Remove searchable content
 */
export function removeSearchableContent(id: string) {
  const index = searchRegistry.findIndex(item => item.id === id);
  if (index > -1) {
    searchRegistry.splice(index, 1);
  }
}

/**
 * Bulk register content (useful for initial setup)
 */
export function bulkRegisterContent(contentArray: Omit<SearchResult, 'id'>[]) {
  contentArray.forEach(content => registerSearchableContent(content));
}

/**
 * Get all registered search content (useful for debugging)
 */
export function getSearchRegistry() {
  return [...searchRegistry];
}

/**
 * Initialize default search content
 */
export function initializeSearchContent() {
  const defaultContent: Omit<SearchResult, 'id'>[] = [
    // Kennisbank articles
    {
      title: 'Daklekkage Herkennen en Voorkomen',
      url: '/kennisbank/daklekkage-herkennen-voorkomen',
      type: 'kennisbank',
      excerpt: 'Leer hoe u daklekkage tijdig herkent en voorkomt. Tips van onze dakspecialisten.',
      category: 'Dak',
      tags: ['daklekkage', 'onderhoud', 'preventie', 'reparatie']
    },
    {
      title: 'Energiebesparing Door Isolatie',
      url: '/kennisbank/energiebesparing-door-isolatie',
      type: 'kennisbank',
      excerpt: 'Ontdek hoe goede isolatie uw energiekosten drastisch kan verlagen.',
      category: 'Isolatie',
      tags: ['isolatie', 'energie', 'besparing', 'warmte']
    },
    {
      title: 'Jaarlijkse Schoorsteencontrole',
      url: '/kennisbank/jaarlijkse-schoorsteencontrole',
      type: 'kennisbank',
      excerpt: 'Waarom een jaarlijkse schoorsteencontrole essentieel is voor uw veiligheid.',
      category: 'Schoorsteen',
      tags: ['schoorsteen', 'controle', 'veiligheid', 'onderhoud']
    },

    // Service pages
    {
      title: 'Dak',
      url: '/dak',
      type: 'dienst',
      excerpt: 'Professionele dakwerkzaamheden door gecertificeerde specialisten',
      category: 'Dakwerken',
      tags: ['dak', 'dakdekker', 'reparatie', 'vervanging']
    },
    {
      title: 'Schoorsteen',
      url: '/schoorsteen',
      type: 'dienst',
      excerpt: 'Schoorsteenreiniging en onderhoud door ervaren vaklieden',
      category: 'Schoorsteenwerken',
      tags: ['schoorsteen', 'reiniging', 'onderhoud', 'inspectie']
    },
    {
      title: 'Onderhoud',
      url: '/onderhoud',
      type: 'dienst',
      excerpt: 'Preventief en curatief onderhoud voor uw woning of bedrijf',
      category: 'Onderhoud',
      tags: ['onderhoud', 'preventief', 'reparatie', 'service']
    },
    {
      title: 'Bouw',
      url: '/bouw',
      type: 'dienst',
      excerpt: 'Complete bouwdiensten van verbouwing tot nieuwbouw',
      category: 'Bouwwerken',
      tags: ['bouw', 'verbouwing', 'renovatie', 'aannemer']
    },

    // Location pages - Netherlands
    {
      title: 'TBGS Eindhoven',
      url: '/nl/eindhoven',
      type: 'locatie',
      excerpt: 'Dakdekker, schoorsteenveger, aannemer en onderhoudsbedrijf in Eindhoven',
      category: 'Nederland',
      tags: ['eindhoven', 'nederland', 'noord-brabant']
    },
    {
      title: 'TBGS Nuenen',
      url: '/nl/nuenen',
      type: 'locatie',
      excerpt: 'Lokale bouwspecialisten in Nuenen voor al uw bouwbehoeften',
      category: 'Nederland',
      tags: ['nuenen', 'nederland', 'noord-brabant']
    },
    {
      title: 'TBGS Veldhoven',
      url: '/nl/veldhoven',
      type: 'locatie',
      excerpt: 'Betrouwbare bouwdiensten in Veldhoven door TBGS specialisten',
      category: 'Nederland',
      tags: ['veldhoven', 'nederland', 'noord-brabant']
    },
    {
      title: 'TBGS Best',
      url: '/nl/best',
      type: 'locatie',
      excerpt: 'Complete bouwservice in Best door lokale vakmannen',
      category: 'Nederland',
      tags: ['best', 'nederland', 'noord-brabant']
    },

    // Location pages - Belgium
    {
      title: 'TBGS Lommel',
      url: '/be/lommel',
      type: 'locatie',
      excerpt: 'TBGS diensten in Lommel, België - lokale vakmannen',
      category: 'België',
      tags: ['lommel', 'belgië', 'limburg']
    },
    {
      title: 'TBGS Hamont-Achel',
      url: '/be/hamont-achel',
      type: 'locatie',
      excerpt: 'Betrouwbare bouwdiensten in Hamont-Achel',
      category: 'België',
      tags: ['hamont-achel', 'belgië', 'limburg']
    },
    {
      title: 'TBGS Pelt',
      url: '/be/pelt',
      type: 'locatie',
      excerpt: 'Vakkundige bouwservice in Pelt door lokale specialisten',
      category: 'België',
      tags: ['pelt', 'belgië', 'limburg']
    },

    // Regular pages
    {
      title: 'Over Ons',
      url: '/over-ons',
      type: 'page',
      excerpt: 'Leer meer over TBGS en onze ervaring in de bouwsector',
      category: 'Bedrijfsinfo',
      tags: ['over ons', 'bedrijf', 'geschiedenis', 'team']
    },
    {
      title: 'Contact',
      url: '/contact',
      type: 'page',
      excerpt: 'Neem contact met ons op voor vrijblijvende advies',
      category: 'Contact',
      tags: ['contact', 'telefoon', 'email', 'adres']
    },
    {
      title: 'Gratis Offerte',
      url: '/offerte',
      type: 'page',
      excerpt: 'Vraag een gratis offerte aan voor uw project',
      category: 'Offerte',
      tags: ['offerte', 'gratis', 'aanvraag', 'prijs']
    },
    {
      title: 'Locaties',
      url: '/locaties',
      type: 'page',
      excerpt: 'Overzicht van al onze servicelocaties in Nederland en België',
      category: 'Locaties',
      tags: ['locaties', 'nederland', 'belgië', 'servicegebied']
    }
  ];

  bulkRegisterContent(defaultContent);
}

// Initialize search content when module loads
initializeSearchContent();