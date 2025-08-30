import { useState, useEffect, useRef } from "react";
import { Search, FileText, MapPin, Book, Building } from "lucide-react";
import { Link } from "wouter";

interface SearchResult {
  id: string;
  title: string;
  url: string;
  type: 'kennisbank' | 'locatie' | 'dienst' | 'page';
  excerpt?: string;
  category?: string;
}

interface SimpleSearchDropdownProps {
  isVisible: boolean;
  onClose: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

// Static search data to avoid re-render loops
const searchData: SearchResult[] = [
  // Kennisbank articles - Old
  {
    id: 'kb-1',
    title: 'Daklekkage Herkennen en Voorkomen',
    url: '/kennisbank/daklekkage-herkennen-voorkomen',
    type: 'kennisbank',
    excerpt: 'Leer hoe u daklekkage tijdig herkent en voorkomt. Tips van onze dakspecialisten.',
    category: 'Dak'
  },
  {
    id: 'kb-2',
    title: 'Energiebesparing Door Isolatie',
    url: '/kennisbank/energiebesparing-door-isolatie',
    type: 'kennisbank',
    excerpt: 'Ontdek hoe goede isolatie uw energiekosten drastisch kan verlagen.',
    category: 'Isolatie'
  },
  {
    id: 'kb-3',
    title: 'Jaarlijkse Schoorsteencontrole',
    url: '/kennisbank/jaarlijkse-schoorsteencontrole',
    type: 'kennisbank',
    excerpt: 'Waarom een jaarlijkse schoorsteencontrole essentieel is voor uw veiligheid.',
    category: 'Schoorsteen'
  },
  {
    id: 'kb-4',
    title: 'Dakgoot Onderhoud en Reiniging',
    url: '/kennisbank/dakgoot-onderhoud-reiniging',
    type: 'kennisbank',
    excerpt: 'Complete gids voor dakgoot onderhoud en reiniging door professionals.',
    category: 'Dak'
  },
  
  // Kennisbank articles - New
  {
    id: 'kb-5',
    title: 'Patio Dak Specialist',
    url: '/kennisbank/patio-dak',
    type: 'kennisbank',
    excerpt: 'Professionele patio dakbedekking voor duurzame bescherming en stijlvolle buitenruimtes.',
    category: 'Dak'
  },
  {
    id: 'kb-6',
    title: 'Terras Dak Specialist',
    url: '/kennisbank/terras-dak',
    type: 'kennisbank',
    excerpt: 'Professionele terrasoverkappingen voor optimaal buitengenot in alle weersomstandigheden.',
    category: 'Dak'
  },
  {
    id: 'kb-7',
    title: 'Schuin Dak Specialist',
    url: '/kennisbank/schuin-dak',
    type: 'kennisbank',
    excerpt: 'Professionele schuine dakbedekking voor duurzame bescherming en tijdloze schoonheid.',
    category: 'Dak'
  },
  {
    id: 'kb-8',
    title: 'Plat Dak Specialist',
    url: '/kennisbank/plat-dak',
    type: 'kennisbank',
    excerpt: 'Professionele platte dakbedekking voor moderne architectuur en optimale waterdichtheid.',
    category: 'Dak'
  },
  {
    id: 'kb-9',
    title: 'Schilderwerken Specialist',
    url: '/kennisbank/schilderwerken',
    type: 'kennisbank',
    excerpt: 'Professionele schilderwerken voor duurzame bescherming en perfecte afwerking.',
    category: 'Schilderwerk'
  },
  {
    id: 'kb-10',
    title: 'Regenpijp Specialist',
    url: '/kennisbank/regenpijp',
    type: 'kennisbank',
    excerpt: 'Expert regenpijp installatie voor optimale hemelwaterafvoer en dakbescherming.',
    category: 'Dak'
  },
  {
    id: 'kb-11',
    title: 'Dakgoot Specialist', 
    url: '/kennisbank/dakgoot',
    type: 'kennisbank',
    excerpt: 'Professionele dakgoot installatie voor optimale hemelwaterafvoer en dakbescherming.',
    category: 'Dak'
  },
  {
    id: 'kb-12',
    title: 'Gevellekkage Specialist',
    url: '/kennisbank/gevellekkage', 
    type: 'kennisbank',
    excerpt: 'Professionele gevellekkage opsporing en reparatie voor een droge en gezonde woning.',
    category: 'Gevel'
  },
  {
    id: 'kb-13',
    title: 'Dakbedekking Materialen',
    url: '/kennisbank/dakbedekking-materialen',
    type: 'kennisbank', 
    excerpt: 'Expert gids voor het kiezen van de juiste dakbedekking voor uw woning.',
    category: 'Dak'
  },
  {
    id: 'kb-14',
    title: 'Dakpannen: Welke Keus?',
    url: '/kennisbank/dakpannen-welke-keus',
    type: 'kennisbank',
    excerpt: 'Expert gids voor het kiezen van de juiste dakpannen voor uw woning.',
    category: 'Dak'
  },
  {
    id: 'kb-15',
    title: 'Lekkage bij Dakkapellen',
    url: '/kennisbank/lekkage-dakkapellen',
    type: 'kennisbank',
    excerpt: 'Professionele dakkapel lekkage opsporing en reparatie voor een droge zolder.',
    category: 'Dakkapel'
  },
  {
    id: 'kb-16',
    title: 'Dakkapel Renovatie',
    url: '/kennisbank/dakkapel-renovatie',
    type: 'kennisbank',
    excerpt: 'Professionele dakkapel renovatie voor meer ruimte, licht en comfort op zolder.',
    category: 'Dakkapel'
  },

  // Location pages - Netherlands
  {
    id: 'loc-1',
    title: 'TBGS Eindhoven',
    url: '/nl/eindhoven',
    type: 'locatie',
    excerpt: 'Dakdekker, schoorsteenveger, aannemer en onderhoudsbedrijf in Eindhoven',
    category: 'Nederland'
  },
  {
    id: 'loc-2',
    title: 'TBGS Nuenen',
    url: '/nl/nuenen',
    type: 'locatie',
    excerpt: 'Lokale bouwspecialisten in Nuenen voor al uw bouwbehoeften',
    category: 'Nederland'
  },
  {
    id: 'loc-3',
    title: 'TBGS Veldhoven',
    url: '/nl/veldhoven',
    type: 'locatie',
    excerpt: 'Betrouwbare bouwdiensten in Veldhoven door TBGS specialisten',
    category: 'Nederland'
  },
  {
    id: 'loc-4',
    title: 'TBGS Best',
    url: '/nl/best',
    type: 'locatie',
    excerpt: 'Complete bouwservice in Best door lokale vakmannen',
    category: 'Nederland'
  },

  // Location pages - Belgium
  {
    id: 'loc-5',
    title: 'TBGS Lommel',
    url: '/be/lommel',
    type: 'locatie',
    excerpt: 'TBGS diensten in Lommel, België - lokale vakmannen',
    category: 'België'
  },
  {
    id: 'loc-6',
    title: 'TBGS Hamont-Achel',
    url: '/be/hamont-achel',
    type: 'locatie',
    excerpt: 'Betrouwbare bouwdiensten in Hamont-Achel',
    category: 'België'
  },
  {
    id: 'loc-7',
    title: 'TBGS Pelt',
    url: '/be/pelt',
    type: 'locatie',
    excerpt: 'Vakkundige bouwservice in Pelt door lokale specialisten',
    category: 'België'
  },

  // Service pages
  {
    id: 'svc-1',
    title: 'Totaal Dak Specialist',
    url: '/totaal-dak-specialist',
    type: 'dienst',
    excerpt: 'Professionele dakwerkzaamheden door gecertificeerde specialisten',
    category: 'Dakwerken'
  },
  {
    id: 'svc-2',
    title: 'Totaal Schoorsteen Specialist',
    url: '/totaal-schoorsteen-specialist',
    type: 'dienst',
    excerpt: 'Schoorsteenreiniging en onderhoud door ervaren vaklieden',
    category: 'Schoorsteenwerken'
  },
  {
    id: 'svc-3',
    title: 'Totaal Onderhoud Specialist',
    url: '/totaal-onderhoud-specialist',
    type: 'dienst',
    excerpt: 'Preventief en curatief onderhoud voor uw woning of bedrijf',
    category: 'Onderhoud'
  },
  {
    id: 'svc-4',
    title: 'Totaal Bouw Specialist',
    url: '/totaal-bouw-specialist',
    type: 'dienst',
    excerpt: 'Complete bouwdiensten van verbouwing tot nieuwbouw',
    category: 'Bouwwerken'
  },

  // Regular pages
  {
    id: 'page-1',
    title: 'Over Ons',
    url: '/over-ons',
    type: 'page',
    excerpt: 'Leer meer over TBGS en onze ervaring in de bouwsector',
    category: 'Bedrijfsinfo'
  },
  {
    id: 'page-2',
    title: 'Contact',
    url: '/contact',
    type: 'page',
    excerpt: 'Neem contact met ons op voor vrijblijvende advies',
    category: 'Contact'
  },
  {
    id: 'page-3',
    title: 'Gratis offerte',
    url: '/offerte',
    type: 'page',
    excerpt: 'Vraag een gratis offerte aan voor uw project',
    category: 'Offerte'
  },
  {
    id: 'page-4',
    title: 'Locaties',
    url: '/locaties',
    type: 'page',
    excerpt: 'Overzicht van al onze servicelocaties in Nederland en België',
    category: 'Locaties'
  },
  {
    id: 'page-5',
    title: 'Zorgeloos Wonen',
    url: '/zorgeloos-wonen',
    type: 'page',
    excerpt: 'Complete zorgeloze woonoplossingen voor uw woning',
    category: 'Service'
  },
  {
    id: 'page-6',
    title: 'Onze Projecten',
    url: '/onze-projecten',
    type: 'page',
    excerpt: 'Bekijk onze uitgevoerde projecten en realisaties',
    category: 'Portfolio'
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'kennisbank':
      return <Book className="w-4 h-4 text-blue-500" />;
    case 'locatie':
      return <MapPin className="w-4 h-4 text-green-500" />;
    case 'dienst':
      return <Building className="w-4 h-4 text-orange-500" />;
    case 'page':
      return <FileText className="w-4 h-4 text-gray-500" />;
    default:
      return <FileText className="w-4 h-4 text-gray-500" />;
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case 'kennisbank':
      return 'Kennisbank';
    case 'locatie':
      return 'Locatie';
    case 'dienst':
      return 'Dienst';
    case 'page':
      return 'Pagina';
    default:
      return 'Pagina';
  }
};

export default function SimpleSearchDropdown({ isVisible, onClose, searchQuery, onSearchChange }: SimpleSearchDropdownProps) {
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter results based on search query
  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setFilteredResults([]);
      setHighlightedIndex(-1);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = searchData.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.excerpt?.toLowerCase().includes(query) ||
      item.category?.toLowerCase().includes(query)
    );

    // Sort results by relevance (title matches first)
    results.sort((a, b) => {
      const aTitle = a.title.toLowerCase().includes(query);
      const bTitle = b.title.toLowerCase().includes(query);
      if (aTitle && !bTitle) return -1;
      if (!aTitle && bTitle) return 1;
      
      // Secondary sort by type priority
      const typePriority = { kennisbank: 1, dienst: 2, locatie: 3, page: 4 };
      return typePriority[a.type] - typePriority[b.type];
    });

    setFilteredResults(results.slice(0, 8)); // Limit to 8 results
    setHighlightedIndex(-1);
  }, [searchQuery]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isVisible || filteredResults.length === 0) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setHighlightedIndex(prev => 
            prev < filteredResults.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex(prev => prev > 0 ? prev - 1 : prev);
          break;
        case 'Enter':
          e.preventDefault();
          if (highlightedIndex >= 0 && filteredResults[highlightedIndex]) {
            window.location.href = filteredResults[highlightedIndex].url;
            handleResultClick();
          }
          break;
        case 'Escape':
          onClose();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, filteredResults, highlightedIndex, onClose]);

  const handleResultClick = () => {
    onClose();
    // Close mobile menu if it's open
    const closeEvent = new CustomEvent('closeMobileMenu');
    window.dispatchEvent(closeEvent);
  };

  if (!isVisible) {
    return null;
  }

  // Show "no results" if query is long enough but no results found
  if (searchQuery.trim().length >= 2 && filteredResults.length === 0) {
    return (
      <>
        <div className="fixed inset-0 z-40" onClick={onClose} />
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 w-96">
          <div className="p-4 text-center text-gray-500">
            <Search className="w-8 h-8 mx-auto mb-2 text-gray-300" />
            <p className="text-sm">Geen resultaten gevonden voor "{searchQuery}"</p>
            <p className="text-xs mt-1">Probeer een ander zoekterm</p>
          </div>
        </div>
      </>
    );
  }

  // Don't show dropdown if no query or no results
  if (searchQuery.trim().length < 2) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
      
      {/* Dropdown */}
      <div 
        ref={dropdownRef}
        className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto w-96"
      >
        <div className="p-3 border-b border-gray-100">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{filteredResults.length} resultaten voor "{searchQuery}"</span>
            <span className="text-xs">↑↓ navigeren • Enter selecteren</span>
          </div>
        </div>

        <div className="py-2">
          {filteredResults.map((result, index) => (
            <Link
              key={result.id}
              href={result.url}
              onClick={handleResultClick}
              className={`block px-4 py-3 hover:bg-gray-50 transition-colors ${
                index === highlightedIndex ? 'bg-blue-50 border-r-2 border-blue-500' : ''
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-0.5">
                  {getTypeIcon(result.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {result.title}
                    </h3>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                      {getTypeLabel(result.type)}
                    </span>
                  </div>
                  {result.excerpt && (
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {result.excerpt}
                    </p>
                  )}
                  {result.category && (
                    <p className="text-xs text-blue-600 mt-1">
                      {result.category}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

/**
 * Function to add new searchable content dynamically
 */
export const addSearchableContent = (content: Omit<SearchResult, 'id'>) => {
  const id = `${content.type}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  searchData.push({ id, ...content });
  return id;
};