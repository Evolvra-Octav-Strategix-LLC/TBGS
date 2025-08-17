import { useState } from "react";
import { Link } from "wouter";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

interface Topic {
  id: string;
  title: string;
  link: string;
  image: string;
  alt: string;
  badge?: string;
  badgeColor?: string;
}

interface TopicCategory {
  id: string;
  title: string;
  description?: string;
  topics: Topic[];
  defaultOpen?: boolean;
}

interface UnfoldableTopicsGridProps {
  categories: TopicCategory[];
  gridCols?: string;
}

export default function UnfoldableTopicsGrid({ 
  categories, 
  gridCols = "grid-cols-1 md:grid-cols-2 lg:grid-cols-4" 
}: UnfoldableTopicsGridProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    categories.filter(cat => cat.defaultOpen).map(cat => cat.id)
  );

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const isExpanded = (categoryId: string) => expandedCategories.includes(categoryId);

  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <div key={category.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Category Header */}
          <button
            onClick={() => toggleCategory(category.id)}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
              {category.description && (
                <p className="text-gray-600">{category.description}</p>
              )}
              <p className="text-sm text-gray-500 mt-1">
                {category.topics.length} onderwerp{category.topics.length !== 1 ? 'en' : ''}
              </p>
            </div>
            <div className="flex-shrink-0 ml-4">
              {isExpanded(category.id) ? (
                <ChevronUpIcon className="w-6 h-6 text-gray-400" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-gray-400" />
              )}
            </div>
          </button>

          {/* Expandable Content */}
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isExpanded(category.id) ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="p-6 pt-0 border-t border-gray-100">
              <div className={`grid ${gridCols} gap-6`}>
                {category.topics.map((topic) => (
                  <Link key={topic.id} href={topic.link}>
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                      <div className="relative overflow-hidden">
                        <img 
                          src={topic.image}
                          alt={topic.alt}
                          className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        {topic.badge && (
                          <div className="absolute top-3 left-3">
                            <span className={`${topic.badgeColor || 'bg-blue-500'} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                              {topic.badge}
                            </span>
                          </div>
                        )}
                        <div className="absolute bottom-3 left-3 text-white">
                          <h4 className="text-lg font-bold">{topic.title}</h4>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Export helper function to add topics to categories
export const addTopicToCategory = (
  categories: TopicCategory[], 
  categoryId: string, 
  topic: Topic
): TopicCategory[] => {
  return categories.map(category => 
    category.id === categoryId 
      ? { ...category, topics: [...category.topics, topic] }
      : category
  );
};