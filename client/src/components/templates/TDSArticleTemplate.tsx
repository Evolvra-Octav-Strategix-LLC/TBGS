import SEOHead from "@/lib/seo";
import { Link } from "wouter";
import Header from "@/components/Header";
import SpecialistNavigationBar from "@/components/SpecialistNavigationBar";

interface ArticleSection {
  title: string;
  content: string;
  icon?: string;
  items?: string[];
}

interface FAQItem {
  question: string;
  answer: string;
}

interface TDSArticleTemplateProps {
  // SEO Props
  title: string;
  description: string;
  url: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  urgencyText?: string;
  statsConfig?: {
    stat1: { number: string; text: string };
    stat2: { number: string; text: string };
    stat3: { number: string; text: string };
  };
  
  // Content Sections
  mainContent: string;
  sections: ArticleSection[];
  
  // Process steps (optional)
  processSteps?: {
    title: string;
    description: string;
  }[];
  
  // Service areas
  serviceAreas?: {
    netherlands: string[];
    belgium: string[];
  };
  
  // FAQ
  faqs?: FAQItem[];
  
  // CTA
  ctaTitle: string;
  ctaDescription: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  
  // Props
  onOpenContactModal: () => void;
}

export default function TDSArticleTemplate({
  title,
  description,
  url,
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroImage,
  heroImageAlt,
  urgencyText,
  statsConfig,
  mainContent,
  sections,
  processSteps,
  serviceAreas,
  faqs,
  ctaTitle,
  ctaDescription,
  primaryButtonText,
  secondaryButtonText,
  onOpenContactModal
}: TDSArticleTemplateProps) {
  
  const defaultStats = {
    stat1: { number: "24/7", text: "Spoedservice" },
    stat2: { number: "500+", text: "Klanten geholpen" },
    stat3: { number: "100%", text: "Garantie" }
  };
  
  const stats = statsConfig || defaultStats;

  return (
    <>
      <SEOHead 
        title={title}
        description={description}
        url={url}
      />

      <SpecialistNavigationBar />

      <Header 
        specialist="TDS"
        onOpenContactModal={onOpenContactModal}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-red-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                {urgencyText && (
                  <div className="bg-red-600 text-white px-4 py-2 rounded-full inline-block">
                    <i className="fas fa-exclamation-triangle mr-2"></i>
                    {urgencyText}
                  </div>
                )}
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {heroTitle}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {heroSubtitle}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {heroDescription}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors flex items-center justify-center"
                >
                  <i className="fas fa-tools mr-3"></i>
                  {primaryButtonText}
                </button>
                <a 
                  href="tel:+31402026744"
                  className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center"
                >
                  <i className="fas fa-phone mr-3"></i>
                  {secondaryButtonText}
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">{stats.stat1.number}</div>
                  <div className="text-sm text-gray-600">{stats.stat1.text}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">{stats.stat2.number}</div>
                  <div className="text-sm text-gray-600">{stats.stat2.text}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">{stats.stat3.number}</div>
                  <div className="text-sm text-gray-600">{stats.stat3.text}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage}
                alt={heroImageAlt}
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <i className="fas fa-certificate text-white text-xl"></i>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Gecertificeerde Dakdekkers</div>
                    <div className="text-sm text-gray-600">Volledig verzekerd</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Main Content */}
            <div className="prose prose-lg max-w-none mb-16">
              <div dangerouslySetInnerHTML={{ __html: mainContent }} />
            </div>

            {/* Sections */}
            {sections.map((section, index) => (
              <div key={index} className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  {section.icon && <i className={`${section.icon} text-red-600 mr-4`}></i>}
                  {section.title}
                </h2>
                
                {section.content && (
                  <div className="text-lg text-gray-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: section.content }} />
                )}
                
                {section.items && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-gray-50 p-6 rounded-xl border hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-3">
                          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                            <i className="fas fa-check text-white"></i>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900">{item}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Process Steps */}
            {processSteps && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Ons Werkproces</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {processSteps.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Service Areas */}
            {serviceAreas && (
              <div className="bg-gray-50 p-8 rounded-2xl mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Gebieden</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Onze <strong>dakdekkers</strong> zijn actief in heel Nederland en België:
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-map-marker-alt text-red-600 mr-3"></i>
                      Nederland
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-gray-700">
                      {serviceAreas.netherlands.map((city, index) => (
                        <div key={index}>• {city}</div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-map-marker-alt text-red-600 mr-3"></i>
                      België
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-gray-700">
                      {serviceAreas.belgium.map((city, index) => (
                        <div key={index}>• {city}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* FAQ Section */}
            {faqs && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Veelgestelde Vragen</h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl border">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation back to TDS */}
            <div className="text-center mb-8">
              <Link 
                href="/totaal-dak-specialist" 
                className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-lg"
              >
                <i className="fas fa-arrow-left mr-3"></i>
                Terug naar Totaal Dak Specialist
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {ctaTitle}
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              {ctaDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onOpenContactModal}
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <i className="fas fa-envelope mr-3"></i>
                {primaryButtonText}
              </button>
              <a 
                href="tel:+31402026744"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-colors flex items-center justify-center"
              >
                <i className="fas fa-phone mr-3"></i>
                {secondaryButtonText}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}