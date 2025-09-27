import SEOHead from "@/lib/seo";
import { Link } from "wouter";
import Header from "@/components/Header";
import LocationAreasOnly from "@/components/LocationAreasOnly";
import SpecialistNavigationBar from "@/components/SpecialistNavigationBar";
import { AlertTriangle, Wrench, Award, Check, ArrowLeft, Mail, Home, Cog, Hammer, Shield, Clock, Calculator } from "lucide-react";

// Icon mapping function to convert FontAwesome class names to Lucide icons
const renderIcon = (iconClass: string, className: string) => {
  const iconMap: { [key: string]: any } = {
    'fas fa-home': Home,
    'fas fa-cog': Cog,
    'fas fa-hammer': Hammer,
    'fas fa-wrench': Wrench,
    'fas fa-shield': Shield,
    'fas fa-shield-alt': Shield,
    'fas fa-clock': Clock,
    'fas fa-tools': Wrench,
    'fas fa-award': Award,
    'fas fa-check': Check,
    'fas fa-calculator': Calculator
  };
  
  const IconComponent = iconMap[iconClass];
  if (IconComponent) {
    return <IconComponent className={className} />;
  }
  return null;
};

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
                    <AlertTriangle className="w-4 h-4 mr-2" />
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
                  <Wrench className="w-5 h-5 mr-3" />
                  {primaryButtonText}
                </button>
                <a 
                  href={`https://wa.me/31614595142?text=Hallo%20Team%20TBGS%2C%20ik%20heb%20een%20vraag%20over%20${heroTitle.toLowerCase()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center"
                >
                  <span className="mr-3">💬</span>
                  Direct Specialist WhatsAppen
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
                    <Award className="w-5 h-5 text-white" />
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
                  {section.icon && renderIcon(section.icon, "w-6 h-6 text-red-600 mr-4")}
                  {section.title}
                </h2>
                
                {section.content && (
                  <div className="text-lg text-gray-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: section.content }} />
                )}
                
                {section.items && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-gray-50 p-6 rounded-xl border hover:shadow-md transition-shadow">
                        <div className="flex items-start mb-3">
                          <div className="w-10 h-10 bg-tbgs-red rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 leading-relaxed">{item}</h3>
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

            {/* Service Areas - Using LocationCards Component */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Gebieden</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Onze <strong>dakdekkers</strong> zijn actief in heel Nederland en België. Vind uw lokale specialist voor snelle service.
                </p>
              </div>
              
              <LocationAreasOnly 
                specialist="dak"
              />
            </div>

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
                href="/daken" 
                className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-lg"
              >
                <ArrowLeft className="w-5 h-5 mr-3" />
                Terug naar Daken
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
                <Mail className="w-5 h-5 mr-3" />
                {primaryButtonText}
              </button>
              <a 
                href={`https://wa.me/31614595142?text=Hallo%20Team%20TBGS%2C%20ik%20heb%20een%20vraag%20over%20${heroTitle.toLowerCase()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-colors flex items-center justify-center"
              >
                <span className="mr-3">💬</span>
                Direct Specialist WhatsAppen
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}