import { useEffect } from "react";
import { Link } from "wouter";
import SEOHead from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnfoldableTopicsGrid from "@/components/UnfoldableTopicsGrid";

interface KennisbankProps {
  onOpenContactModal: () => void;
}

export default function Kennisbank({ onOpenContactModal }: KennisbankProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const knowledgeCategories = [
    {
      id: 'dakwerk',
      title: 'Dakwerk & Renovatie',
      icon: 'fas fa-home',
      color: 'tbgs-red',
      description: 'Complete gids voor dakonderoud, renovatie en preventieve zorg',
      articles: [
        { title: 'Wanneer moet uw dak vervangen worden?', link: null },
        { title: 'Daklekkage herkennen en voorkomen', link: '/kennisbank/daklekkage-herkennen-voorkomen' },
        { title: 'Isolatiewaarden en energiebesparing', link: null },
        { title: 'Zonnepanelen op uw dak plaatsen', link: null }
      ]
    },
    {
      id: 'schoorsteen',
      title: 'Schoorsteenservice',
      icon: 'fas fa-industry', 
      color: 'tbgs-blue',
      description: 'Alles over schoorsteenonderhoud, veiligheid en moderne systemen',
      articles: [
        { title: 'Jaarlijkse schoorsteencontrole checklist', link: '/kennisbank/jaarlijkse-schoorsteencontrole' },
        { title: 'Rookgasafvoer en veiligheidsvoorschriften', link: null },
        { title: 'HR-ketel aansluiting op schoorsteen', link: null },
        { title: 'Historische schoorstenen renoveren', link: null }
      ]
    },
    {
      id: 'onderhoud',
      title: 'Preventief Onderhoud',
      icon: 'fas fa-tools',
      color: 'tbgs-green',
      description: 'Preventieve maatregelen om kostbare reparaties te voorkomen',
      articles: [
        { title: 'Seizoensgebonden onderhoudstaken', link: null },
        { title: 'Energiebesparing door isolatie', link: '/kennisbank/energiebesparing-door-isolatie' },
        { title: 'Signalen die duiden op problemen', link: null },
        { title: 'Onderhoudscontract of losse service?', link: null }
      ]
    },
    {
      id: 'bouw',
      title: 'Bouw & Renovatie',
      icon: 'fas fa-hammer',
      color: 'tbgs-orange', 
      description: 'Van aanbouw tot complete renovatie - alles wat u moet weten',
      articles: [
        { title: 'Vergunningen voor aan- en verbouw', link: null },
        { title: 'Keuken- en badkamerrenovatie', link: null },
        { title: 'Gevelbekleding en isolatie', link: null },
        { title: 'Duurzame materialen kiezen', link: null }
      ]
    }
  ];

  // Organized topic categories for the unfoldable component
  const topicCategories = [
    {
      id: 'dakwerk-en-bedekking',
      title: 'Dakwerk & Bedekking',
      description: 'Alles over dakbedekking, materialen en daktypen',
      defaultOpen: true,
      topics: [
        {
          id: 'plat-dak',
          title: 'PLAT DAK',
          link: '/kennisbank/plat-dak',
          image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250',
          alt: 'Plat Dak - TBGS Dakspecialisten',
          badge: 'Modern',
          badgeColor: 'bg-green-500',
          readTime: '8 min',
          description: 'Moderne platte dakbedekking voor optimale waterdichtheid en functionaliteit'
        },
        {
          id: 'schuin-dak',
          title: 'SCHUIN DAK',
          link: '/kennisbank/schuin-dak',
          image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250',
          alt: 'Schuin Dak - TBGS Dakspecialisten',
          badge: 'Populair',
          badgeColor: 'bg-blue-500',
          readTime: '10 min',
          description: 'Traditionele dakbedekking voor duurzame bescherming en tijdloze schoonheid'
        },
        {
          id: 'patio-dak',
          title: 'PATIO DAK',
          link: '/kennisbank/patio-dak',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200',
          alt: 'Patio Dak - TBGS Dakspecialisten',
          readTime: '6 min',
          description: 'Professionele patio dakbedekking voor duurzame bescherming en stijlvolle buitenruimtes'
        },
        {
          id: 'terras-dak',
          title: 'TERRAS DAK',
          link: '/kennisbank/terras-dak',
          image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200',
          alt: 'Terras Dak - TBGS Dakspecialisten'
        },
        {
          id: 'dakbedekking-materialen',
          title: 'DAKBEDEKKING MATERIALEN',
          link: '/kennisbank/dakbedekking-materialen',
          image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200',
          alt: 'Dakbedekking Materialen - TBGS Specialisten'
        },
        {
          id: 'dakpannen-welke-keus',
          title: 'DAKPANNEN: WELKE KEUS?',
          link: '/kennisbank/dakpannen-welke-keus',
          image: 'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200',
          alt: 'Dakpannen Welke Keus - TBGS Specialisten'
        }
      ]
    },
    {
      id: 'problemen-en-reparaties',
      title: 'Problemen & Reparaties',
      description: 'Herkenning en oplossingen voor dakproblemen',
      topics: [
        {
          id: 'daklekkage-herkennen-voorkomen',
          title: 'DAKLEKKAGE HERKENNEN & VOORKOMEN',
          link: '/kennisbank/daklekkage-herkennen-voorkomen',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250',
          alt: 'Daklekkage Herkennen - TBGS Expert Tips',
          badge: 'Urgent',
          badgeColor: 'bg-red-500',
          readTime: '5 min',
          description: 'Vroege signalen herkennen en kostbare waterschade voorkomen met expert tips'
        },
        {
          id: 'gevellekkage',
          title: 'GEVELLEKKAGE',
          link: '/kennisbank/gevellekkage',
          image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200',
          alt: 'Gevellekkage - TBGS Specialisten',
          readTime: '7 min',
          description: 'Herkenning, oorzaken en professionele oplossingen voor gevellekkage'
        },
        {
          id: 'lekkage-dakkapellen',
          title: 'LEKKAGE DAKKAPELLEN',
          link: '/kennisbank/lekkage-dakkapellen',
          image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da35293?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200',
          alt: 'Lekkage Dakkapellen - TBGS Specialisten'
        },
        {
          id: 'dakkapel-renovatie',
          title: 'DAKKAPEL RENOVATIE',
          link: '/kennisbank/dakkapel-renovatie',
          image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200',
          alt: 'Dakkapel Renovatie - TBGS Specialisten'
        }
      ]
    },
    {
      id: 'waterafvoer-en-goten',
      title: 'Waterafvoer & Goten',
      description: 'Regenwaterbeheersing en drainage systemen',
      topics: [
        {
          id: 'regenpijp',
          title: 'REGENPIJP',
          link: '/kennisbank/regenpijp',
          image: 'https://images.unsplash.com/photo-1558618047-6c8b00b0c263?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200',
          alt: 'Regenpijp - TBGS Specialisten'
        },
        {
          id: 'dakgoot',
          title: 'DAKGOOT',
          link: '/kennisbank/dakgoot',
          image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200',
          alt: 'Dakgoot - TBGS Specialisten'
        }
      ]
    },
    {
      id: 'isolatie-en-energiebesparing',
      title: 'Isolatie & Energiebesparing',
      description: 'Optimale isolatie voor energiebesparing en comfort',
      topics: [
        {
          id: 'energiebesparing',
          title: 'ENERGIEBESPARING',
          link: '/kennisbank/energiebesparing-door-isolatie',
          image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200',
          alt: 'Energiebesparing Isolatie - TBGS'
        },
        {
          id: 'glasisolatie',
          title: 'GLASISOLATIE',
          link: '/kennisbank/glasisolatie',
          image: 'https://images.unsplash.com/photo-1558618047-6c8b00b0c263?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200',
          alt: 'Glasisolatie - TBGS Isolatiespecialisten'
        },
        {
          id: 'dakkapel-isolatie',
          title: 'DAKKAPEL ISOLATIE',
          link: '/kennisbank/dakkapel-isolatie',
          image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da35293?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200',
          alt: 'Dakkapel Isolatie - TBGS Isolatiespecialisten'
        },
        {
          id: 'vloerisolatie',
          title: 'VLOERISOLATIE',
          link: '/kennisbank/vloerisolatie',
          image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200',
          alt: 'Vloerisolatie - TBGS Isolatiespecialisten'
        }
      ]
    },
    {
      id: 'onderhoud-en-controle',
      title: 'Onderhoud & Controle',
      description: 'Preventief onderhoud en veiligheidsinspectie',
      topics: [
        {
          id: 'schoorsteencontrole',
          title: 'SCHOORSTEENCONTROLE',
          link: '/kennisbank/jaarlijkse-schoorsteencontrole',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200',
          alt: 'Schoorsteencontrole - TBGS'
        }
      ]
    },
    {
      id: 'schilderwerk-en-afwerking',
      title: 'Schilderwerk & Afwerking',
      description: 'Professionele schilderwerken en afwerking',
      topics: [
        {
          id: 'schilderwerken',
          title: 'SCHILDERWERKEN',
          link: '/kennisbank/schilderwerken',
          image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200',
          alt: 'Schilderwerken - TBGS Specialisten',
          badge: 'Nieuw',
          badgeColor: 'bg-purple-500'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEOHead 
        title="Kennisbank TBGS BV - Bouw, Dak & Onderhouds Expertise | Nederland & België"
        description="Ontdek professionele tips en kennis van TBGS specialisten over dakwerk, schoorsteenonderhoud, preventief onderhoud en bouwprojecten. Gratis specialist advies voor particulier en zakelijk."
        url="/kennisbank"
        keywords="kennisbank bouw, dakwerk tips, schoorsteenonderhoud, preventief onderhoud, renovatie gids, bouw expertise, onderhoudsadvies, daklekkage voorkomen, TBGS kennis"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tbgs-navy/5 to-blue-600/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium text-slate-600 mb-8">
              <i className="fas fa-graduation-cap"></i>
              <span>Specialist Kennis</span>
            </div>
            
            <h1 className="text-4xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              Kennisbank <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">TBGS</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-600 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
              <strong>80+ jaar familietraditie</strong> gebundeld in praktische tips, uitgebreide gidsen en professioneel advies. Van <strong>dakonderhoud</strong> tot <strong>complete renovaties</strong>.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-book-open text-2xl text-blue-600"></i>
                </div>
                <div className="font-bold text-slate-900 mb-2">50+ Artikelen</div>
                <div className="text-slate-600 text-sm">Uitgebreide kennisbase</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-user-graduate text-2xl text-green-600"></i>
                </div>
                <div className="font-bold text-slate-900 mb-2">Expert Advies</div>
                <div className="text-slate-600 text-sm">Van onze specialisten</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-download text-2xl text-purple-600"></i>
                </div>
                <div className="font-bold text-slate-900 mb-2">Gratis Downloads</div>
                <div className="text-slate-600 text-sm">Checklists en gidsen</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Categories */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Expert <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">Kennis</span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              Onze specialisten delen hun kennis en ervaring om u te helpen bij uw <strong>bouw- en onderhoudsprojecten</strong>.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {knowledgeCategories.map((category) => (
              <div key={category.id} className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mr-6">
                    <i className={`${category.icon} text-2xl text-tbgs-${category.color.split('-')[1]}`}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{category.title}</h3>
                    <p className="text-slate-600">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {category.articles.map((article, index) => (
                    article.link ? (
                      <Link key={index} href={article.link}>
                        <div className="flex items-center p-3 bg-white rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer">
                          <div className={`w-2 h-2 bg-${category.color} rounded-full mr-4 flex-shrink-0`}></div>
                          <span className="text-slate-700 font-medium">{article.title}</span>
                          <i className="fas fa-chevron-right text-slate-400 ml-auto"></i>
                        </div>
                      </Link>
                    ) : (
                      <div key={index} className="flex items-center p-3 bg-gray-100 rounded-xl border border-slate-100 opacity-60">
                        <div className={`w-2 h-2 bg-${category.color} rounded-full mr-4 flex-shrink-0`}></div>
                        <span className="text-slate-700 font-medium">{article.title}</span>
                        <span className="text-xs text-gray-500 ml-auto">Binnenkort beschikbaar</span>
                      </div>
                    )
                  ))}
                </div>
                
                <button 
                  onClick={onOpenContactModal}
                  className="w-full bg-tbgs-red text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <i className="fas fa-book-open mr-3"></i>
                  Bekijk Alle Artikelen
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kennisbank Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Kennisbank</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alle begrippen voor u op een rij - Expert kennis van TBGS specialisten
            </p>
          </div>

          {/* Featured/Important Cards */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Meest Populair</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Daklekkage - Most Important */}
              <Link href="/kennisbank/daklekkage-herkennen-voorkomen">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250" 
                      alt="Daklekkage Herkennen - TBGS Expert Tips"
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">Urgent</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Daklekkage Herkennen & Voorkomen</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Vroege signalen herkennen en kostbare waterschade voorkomen met expert tips.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">5 min leestijd</span>
                      <span className="text-tbgs-red font-semibold group-hover:text-red-700">Lees meer →</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Schuin Dak */}
              <Link href="/kennisbank/schuin-dak">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250" 
                      alt="Schuin Dak - TBGS Dakspecialisten"
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">Populair</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Schuin Dak Specialist</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Traditionele dakbedekking voor duurzame bescherming en tijdloze schoonheid.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">8 min leestijd</span>
                      <span className="text-tbgs-blue font-semibold group-hover:text-blue-700">Lees meer →</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Plat Dak */}
              <Link href="/kennisbank/plat-dak">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250" 
                      alt="Plat Dak - TBGS Dakspecialisten"
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">Modern</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Plat Dak Specialist</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Moderne platte dakbedekking voor optimale waterdichtheid en functionaliteit.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">10 min leestijd</span>
                      <span className="text-tbgs-green font-semibold group-hover:text-green-700">Lees meer →</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Unfoldable Topics Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Alle Onderwerpen</h3>
            <UnfoldableTopicsGrid categories={topicCategories} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-tbgs-navy via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Persoonlijk <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Advies</span> Nodig?
            </h2>
            <p className="text-xl lg:text-2xl font-light leading-relaxed mb-12 max-w-3xl mx-auto opacity-90">
              Onze kennisbank geeft u een goede basis, maar <strong>elke situatie is uniek</strong>. Vraag persoonlijk advies van onze specialisten.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={onOpenContactModal}
                className="bg-white text-tbgs-navy px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center"
              >
                <i className="fas fa-user-tie mr-3"></i>
                Persoonlijk Advies Gesprek
              </button>
              
              <button 
                onClick={onOpenContactModal}
                className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-tbgs-navy transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center"
              >
                <i className="fas fa-search mr-3"></i>
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