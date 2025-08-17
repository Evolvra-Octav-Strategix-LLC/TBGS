import { useEffect } from "react";
import { Link } from "wouter";
import SEOHead from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kennisbank</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Alle begrippen voor u op een rij
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Daklekkage Articles */}
            <Link href="/kennisbank/patio-dak">
              <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Patio Dak - TBGS Dakspecialisten"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">PATIO DAK</h3>
                  <button className="w-fit border border-white px-4 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors">
                    READ MORE
                  </button>
                </div>
              </div>
            </Link>

            <Link href="/kennisbank/terras-dak">
              <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Terras Dak - TBGS Dakspecialisten"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">TERRAS DAK</h3>
                  <button className="w-fit border border-white px-4 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors">
                    READ MORE
                  </button>
                </div>
              </div>
            </Link>

            <Link href="/kennisbank/schuin-dak">
              <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Schuin Dak - TBGS Dakspecialisten"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">SCHUIN DAK</h3>
                  <button className="w-fit border border-white px-4 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors">
                    READ MORE
                  </button>
                </div>
              </div>
            </Link>

            <Link href="/kennisbank/plat-dak">
              <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Plat Dak - TBGS Dakspecialisten"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">PLAT DAK</h3>
                  <button className="w-fit border border-white px-4 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors">
                    READ MORE
                  </button>
                </div>
              </div>
            </Link>

            <Link href="/kennisbank/vlak-dak">
              <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Vlak Dak - TBGS Dakspecialisten"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">VLAK DAK</h3>
                  <button className="w-fit border border-white px-4 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors">
                    READ MORE
                  </button>
                </div>
              </div>
            </Link>

            <Link href="/kennisbank/glasisolatie">
              <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1558618047-6c8b00b0c263?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Glasisolatie - TBGS Isolatiespecialisten"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">GLASISOLATIE</h3>
                  <button className="w-fit border border-white px-4 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors">
                    READ MORE
                  </button>
                </div>
              </div>
            </Link>

            <Link href="/kennisbank/dakkapel-isolatie">
              <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1502005229762-cf1b2da35293?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Dakkapel Isolatie - TBGS Isolatiespecialisten"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">DAKKAPEL ISOLATIE</h3>
                  <button className="w-fit border border-white px-4 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors">
                    READ MORE
                  </button>
                </div>
              </div>
            </Link>

            <Link href="/kennisbank/vloerisolatie">
              <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Vloerisolatie - TBGS Isolatiespecialisten"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">VLOERISOLATIE</h3>
                  <button className="w-fit border border-white px-4 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors">
                    READ MORE
                  </button>
                </div>
              </div>
            </Link>

            <Link href="/kennisbank/spouwmuurisolatie">
              <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Spouwmuurisolatie - TBGS Isolatiespecialisten"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">SPOUWMUURISOLATIE</h3>
                  <button className="w-fit border border-white px-4 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors">
                    READ MORE
                  </button>
                </div>
              </div>
            </Link>

            <Link href="/kennisbank/tritoflex-waterdicht">
              <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Tritoflex Waterdicht - TBGS Dakspecialisten"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">TRITOFLEX WATERDICHT, BRANDVRIJ EN DUURZAAM</h3>
                  <button className="w-fit border border-white px-4 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors">
                    READ MORE
                  </button>
                </div>
              </div>
            </Link>

            <Link href="/kennisbank/epdm-dakbedekking">
              <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1558618047-3c8c76e7d329?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="EPDM Dakbedekking - TBGS Dakspecialisten"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">EPDM DAKBEDEKKING</h3>
                  <button className="w-fit border border-white px-4 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors">
                    READ MORE
                  </button>
                </div>
              </div>
            </Link>

            <Link href="/kennisbank/bitumen-dakbedekking">
              <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Bitumen Dakbedekking - TBGS Dakspecialisten"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">WAT IS BITUMEN DAKBEDEKKING</h3>
                  <button className="w-fit border border-white px-4 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors">
                    READ MORE
                  </button>
                </div>
              </div>
            </Link>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <Link href="/kennisbank/regenpijp">
                <div className="relative group overflow-hidden rounded-lg cursor-pointer h-80">
                  <img 
                    src="https://images.unsplash.com/photo-1558618047-6c8b00b0c263?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                    alt="De Regenpijp - TBGS Dakspecialisten"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-bold mb-4">DE REGENPIJP</h3>
                    <p className="text-sm mb-4 leading-relaxed">
                      In Nederland valt er jaarlijks op 130 dagen van het jaar 1mm regen en in [...]
                    </p>
                    <button className="w-fit border border-white px-4 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors">
                      READ MORE
                    </button>
                  </div>
                </div>
              </Link>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/kennisbank/dakgoot">
                <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=240" 
                    alt="De Dakgoot - TBGS Dakspecialisten"
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-lg font-bold mb-2">DE DAKGOOT</h3>
                    <p className="text-xs mb-2">
                      Het is misschien het laatste waar u aan denkt bij uw dak, maar het is [...]
                    </p>
                    <button className="w-fit border border-white px-3 py-1 text-xs font-medium hover:bg-white hover:text-black transition-colors">
                      READ MORE
                    </button>
                  </div>
                </div>
              </Link>

              <Link href="/kennisbank/gevellekkage">
                <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=240" 
                    alt="Gevellekkage - TBGS Dakspecialisten"
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-lg font-bold mb-2">GEVELLEKKAGE</h3>
                    <button className="w-fit border border-white px-3 py-1 text-xs font-medium hover:bg-white hover:text-black transition-colors">
                      READ MORE
                    </button>
                  </div>
                </div>
              </Link>

              <Link href="/kennisbank/dakbedekking-materialen">
                <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=240" 
                    alt="Dakbedekking Materialen - TBGS Dakspecialisten"
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-lg font-bold mb-2">DAKBEDEKKING MATERIALEN</h3>
                    <button className="w-fit border border-white px-3 py-1 text-xs font-medium hover:bg-white hover:text-black transition-colors">
                      READ MORE
                    </button>
                  </div>
                </div>
              </Link>

              <Link href="/kennisbank/dakpannen-welke-keus">
                <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=240" 
                    alt="Dakpannen Welke Keus - TBGS Dakspecialisten"
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-lg font-bold mb-2">DAKPANNEN: WELKE KEUS IS ER?</h3>
                    <button className="w-fit border border-white px-3 py-1 text-xs font-medium hover:bg-white hover:text-black transition-colors">
                      READ MORE
                    </button>
                  </div>
                </div>
              </Link>

              <Link href="/kennisbank/lekkage-dakkapellen">
                <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1502005229762-cf1b2da35293?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=240" 
                    alt="Lekkage Bij Dakkapellen - TBGS Dakspecialisten"
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-lg font-bold mb-2">LEKKAGE BIJ DAKKAPELLEN</h3>
                    <button className="w-fit border border-white px-3 py-1 text-xs font-medium hover:bg-white hover:text-black transition-colors">
                      READ MORE
                    </button>
                  </div>
                </div>
              </Link>

              <Link href="/kennisbank/dakkapel-renovatie">
                <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=240" 
                    alt="Dakkapel Renovatie - TBGS Dakspecialisten"
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-lg font-bold mb-2">DAKKAPEL RENOVATIE</h3>
                    <button className="w-fit border border-white px-3 py-1 text-xs font-medium hover:bg-white hover:text-black transition-colors">
                      READ MORE
                    </button>
                  </div>
                </div>
              </Link>
            </div>
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
    </div>
  );
}