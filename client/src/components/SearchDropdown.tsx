import { useState, useEffect, useRef } from "react";
import { Search, FileText, MapPin, Book, Building } from "lucide-react";
import { Link } from "wouter";
import { useSearch, SearchResult } from "../hooks/useSearch";

interface SearchDropdownProps {
  isVisible: boolean;
  onClose: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

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

export default function SearchDropdown({ isVisible, onClose, searchQuery, onSearchChange }: SearchDropdownProps) {
  const { search, results, isSearching } = useSearch();
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchQuery !== undefined) {
      search(searchQuery);
      setHighlightedIndex(-1);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isVisible || results.length === 0) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setHighlightedIndex(prev => 
            prev < results.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex(prev => prev > 0 ? prev - 1 : prev);
          break;
        case 'Enter':
          e.preventDefault();
          if (highlightedIndex >= 0 && results[highlightedIndex]) {
            window.location.href = results[highlightedIndex].url;
            onClose();
          }
          break;
        case 'Escape':
          onClose();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, results, highlightedIndex, onClose]);

  if (!isVisible || (searchQuery.trim().length >= 2 && results.length === 0)) {
    if (searchQuery.trim().length >= 2) {
      return (
        <>
          <div className="fixed inset-0 z-40" onClick={onClose} />
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
            <div className="p-4 text-center text-gray-500">
              <Search className="w-8 h-8 mx-auto mb-2 text-gray-300" />
              <p className="text-sm">Geen resultaten gevonden voor "{searchQuery}"</p>
              <p className="text-xs mt-1">Probeer een ander zoekterm</p>
            </div>
          </div>
        </>
      );
    }
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
        className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto"
      >
        <div className="p-3 border-b border-gray-100">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>
              {isSearching ? 'Zoeken...' : `${results.length} resultaten voor "${searchQuery}"`}
            </span>
            <span className="text-xs">↑↓ navigeren • Enter selecteren</span>
          </div>
        </div>

        <div className="py-2">
          {results.map((result, index) => (
            <Link
              key={result.id}
              href={result.url}
              onClick={() => {
                onClose();
                // Close mobile menu if it's open
                const closeEvent = new CustomEvent('closeMobileMenu');
                window.dispatchEvent(closeEvent);
              }}
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

