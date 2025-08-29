import { useEffect, useState } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import SEOHead from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { formatDistanceToNow } from "date-fns";
import { nl } from "date-fns/locale";
import { CalendarIcon, ClockIcon, TagIcon, SearchIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface KennisbankProps {
  onOpenContactModal: () => void;
}

export default function Kennisbank({ onOpenContactModal }: KennisbankProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch published articles from admin system
  const { data: adminArticles = [], isLoading: adminLoading } = useQuery({
    queryKey: ['/api/articles'],
    queryFn: async () => {
      try {
        const response = await fetch('/api/articles');
        if (!response.ok) return [];
        return response.json();
      } catch (error) {
        console.error('Failed to fetch admin articles:', error);
        return [];
      }
    },
  });

  // All knowledge base articles as loose cards
  const allKnowledgeArticles = [
    // High-end expert articles (keep these prominent)
    {
      title: 'Dakisolatie Technieken 2025',
      link: '/kennisbank/dakisolatie-technieken',
      category: 'Expert Kennis',
      badge: 'Nieuw',
      badgeColor: 'bg-green-500',
      readTime: '12 min',
      description: 'Moderne isolatiemethoden: PIR, sprayfoam en geavanceerde systemen voor optimale energiebesparing',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250'
    },
    {
      title: 'Waterdichtingssystemen Advanced',
      link: '/kennisbank/waterdichtingssystemen-advanced',
      category: 'Expert Kennis',
      badge: 'Nieuw',
      badgeColor: 'bg-blue-500',
      readTime: '15 min',
      description: 'EPDM, TPO, liquid membranen en groendak systemen voor permanente waterdichtheid',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250'
    },
    {
      title: 'Smart Building Integration',
      link: '/kennisbank/smart-building-integration',
      category: 'Expert Kennis',
      badge: 'Nieuw',
      badgeColor: 'bg-purple-500',
      readTime: '10 min',
      description: 'IoT dakmonitoring, intelligente ventilatie en moderne bouwtechnologie',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250'
    },
    {
      title: 'Duurzaamheidscertificeringen',
      link: '/kennisbank/duurzaamheidscertificeringen',
      category: 'Expert Kennis',
      badge: 'Nieuw',
      badgeColor: 'bg-green-600',
      readTime: '8 min',
      description: 'BREEAM, LEED, WELL certificering voor hogere vastgoedwaarde',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250'
    },
    // Existing articles
    {
      title: 'Plat Dak',
      link: '/kennisbank/plat-dak',
      category: 'Dakwerk',
      badge: 'Populair',
      badgeColor: 'bg-red-500',
      readTime: '8 min',
      description: 'Moderne platte dakbedekking voor optimale waterdichtheid en functionaliteit',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250'
    },
    {
      title: 'Schuin Dak',
      link: '/kennisbank/schuin-dak',
      category: 'Dakwerk',
      badge: 'Basis',
      badgeColor: 'bg-blue-500',
      readTime: '10 min',
      description: 'Traditionele dakbedekking voor duurzame bescherming en tijdloze schoonheid',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250'
    },
    {
      title: 'Patio Dak',
      link: '/kennisbank/patio-dak',
      category: 'Bouw',
      badge: 'Trending',
      badgeColor: 'bg-orange-500',
      readTime: '6 min',
      description: 'Professionele patio dakbedekking voor duurzame bescherming en stijlvolle buitenruimtes',
      image: 'https://images.unsplash.com/photo-1544237151-6e4b99de8e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250'
    },
    {
      title: 'Terras Dak',
      link: '/kennisbank/terras-dak',
      category: 'Bouw',
      badge: 'Seizoen',
      badgeColor: 'bg-green-500',
      readTime: '7 min',
      description: 'Professionele terrasoverkappingen voor optimaal buitengenot in alle weersomstandigheden',
      image: 'https://images.unsplash.com/photo-1517581177682-a085bb7f9408?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250'
    },
    {
      title: 'Dakgoot Specialist',
      link: '/kennisbank/dakgoot',
      category: 'Onderhoud',
      badge: 'Essentieel',
      badgeColor: 'bg-cyan-500',
      readTime: '9 min',
      description: 'Complete gids voor dakgoten: materialen, installatie en onderhoudstips',
      image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250'
    },
    {
      title: 'Regenpijp Systemen',
      link: '/kennisbank/regenpijp',
      category: 'Onderhoud',
      badge: 'Basis',
      badgeColor: 'bg-blue-500',
      readTime: '6 min',
      description: 'Alles over regenpijpen: materialen, installatie en waterafvoer oplossingen',
      image: 'https://images.unsplash.com/photo-1572783635093-15c999a29ea2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250'
    },
    {
      title: 'Dakpannen: Welke Keus?',
      link: '/kennisbank/dakpannen-welke-keus',
      category: 'Dakwerk',
      badge: 'Gids',
      badgeColor: 'bg-amber-500',
      readTime: '11 min',
      description: 'Vergelijking van gebakken, betonnen en keramische dakpannen voor uw project',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250'
    },
    {
      title: 'Dakbedekking Materialen',
      link: '/kennisbank/dakbedekking-materialen',
      category: 'Dakwerk',
      badge: 'Overzicht',
      badgeColor: 'bg-indigo-500',
      readTime: '13 min',
      description: 'Compleet overzicht van alle dakbedekkingsmaterialen en hun eigenschappen',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250'
    },
    {
      title: 'Lekkage bij Dakkapellen',
      link: '/kennisbank/lekkage-dakkapellen',
      category: 'Problemen',
      badge: 'Spoed',
      badgeColor: 'bg-red-500',
      readTime: '8 min',
      description: 'Herken en voorkom dakkapel lekkages met professionele reparatietips',
      image: 'https://images.unsplash.com/photo-1558544022-cc64c1b93d73?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250'
    },
    {
      title: 'Dakkapel Renovatie',
      link: '/kennisbank/dakkapel-renovatie',
      category: 'Renovatie',
      badge: 'Project',
      badgeColor: 'bg-purple-500',
      readTime: '14 min',
      description: 'Complete gids voor dakkapel renovatie: van planning tot oplevering',
      image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250'
    },
    {
      title: 'Daklekkage Herkennen en Voorkomen',
      link: '/kennisbank/daklekkage-herkennen-voorkomen',
      category: 'Problemen',
      badge: 'Belangrijk',
      badgeColor: 'bg-red-600',
      readTime: '9 min',
      description: 'Leer vroege signalen herkennen en voorkom kostbare waterschade',
      image: 'https://images.unsplash.com/photo-1584364788891-a2cdf9ba630d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250'
    },
    {
      title: 'Energiebesparing Door Isolatie',
      link: '/kennisbank/energiebesparing-door-isolatie',
      category: 'Duurzaam',
      badge: 'Subsidie',
      badgeColor: 'bg-green-600',
      readTime: '12 min',
      description: 'Halveer uw energierekening met juiste isolatie en ISDE subsidie tips',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250'
    }
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'Alle Artikelen', count: allKnowledgeArticles.length },
    { id: 'Expert Kennis', name: 'Expert Kennis', count: allKnowledgeArticles.filter(a => a.category === 'Expert Kennis').length },
    { id: 'Dakwerk', name: 'Dakwerk', count: allKnowledgeArticles.filter(a => a.category === 'Dakwerk').length },
    { id: 'Onderhoud', name: 'Onderhoud', count: allKnowledgeArticles.filter(a => a.category === 'Onderhoud').length },
    { id: 'Duurzaam', name: 'Duurzaam', count: allKnowledgeArticles.filter(a => a.category === 'Duurzaam').length },
    { id: 'Problemen', name: 'Problemen', count: allKnowledgeArticles.filter(a => a.category === 'Problemen').length }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter articles based on category and search
  const filteredArticles = allKnowledgeArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort articles: Expert Kennis first, then by category
  const sortedArticles = filteredArticles.sort((a, b) => {
    if (a.category === 'Expert Kennis' && b.category !== 'Expert Kennis') return -1;
    if (b.category === 'Expert Kennis' && a.category !== 'Expert Kennis') return 1;
    return a.title.localeCompare(b.title);
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="TBGS Kennisbank - Alle Expert Tips voor Dak, Schoorsteen & Onderhoud | 2025"
        description="🏠 Complete kennisbank van TBGS specialisten. ✓ Dakwerk ✓ Schoorsteenservice ✓ Onderhoud ✓ Expert tips & gidsen ✓ Gratis advies ✓ 15+ jaar ervaring in Nederland & België"
        url="/kennisbank"
        keywords="TBGS kennisbank, dakwerk tips, schoorsteen onderhoud, bouw gids, renovatie advies, daklekkage voorkomen, isolatie tips, duurzaam bouwen, dakspecialist Nederland, expert bouwadvies"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-tbgs-navy via-blue-900 to-indigo-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              TBGS <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Kennisbank</span>
            </h1>
            <p className="text-xl lg:text-2xl font-light leading-relaxed mb-12 opacity-90">
              Alle expert kennis op één plek - Van dakwerk tot duurzaam bouwen
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Zoek in kennisbank..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onOpenContactModal}
                className="bg-white text-tbgs-navy px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Persoonlijk Advies
              </button>
              <a
                href="tel:+31402026744"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-tbgs-navy transition-colors"
              >
                040 202 6744
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-tbgs-blue text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid - Loose Card Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              {selectedCategory === 'all' ? 'Alle Artikelen' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-lg text-slate-600">
              {filteredArticles.length} artikel{filteredArticles.length !== 1 ? 'en' : ''} gevonden
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedArticles.map((article, index) => (
              <Link key={index} href={article.link}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`${article.badgeColor} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                        {article.badge}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-xs text-slate-500 uppercase tracking-wider">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-tbgs-blue transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">
                        {article.readTime}
                      </span>
                      <span className="text-tbgs-blue font-semibold group-hover:text-blue-700">
                        Lees meer →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <div className="text-slate-400 mb-4">
                <SearchIcon className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Geen artikelen gevonden</h3>
              <p className="text-slate-600 mb-4">
                Probeer een andere zoekopdracht of categorie
              </p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-tbgs-blue font-medium hover:underline"
              >
                Alle artikelen tonen
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-tbgs-navy via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Persoonlijk <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Advies</span> Nodig?
            </h2>
            <p className="text-xl font-light leading-relaxed mb-12 max-w-3xl mx-auto opacity-90">
              Onze kennisbank geeft u een goede basis, maar <strong>elke situatie is uniek</strong>. 
              Vraag persoonlijk advies van onze specialisten.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={onOpenContactModal}
                className="bg-white text-tbgs-navy px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Persoonlijk Advies Gesprek
              </button>
              
              <button 
                onClick={onOpenContactModal}
                className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-tbgs-navy transition-all duration-300"
              >
                Gratis Inspectie
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}