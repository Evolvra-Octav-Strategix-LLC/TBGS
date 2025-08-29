import { useEffect, useState } from "react";
import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import SEOHead from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { formatDistanceToNow } from "date-fns";
import { nl } from "date-fns/locale";
import { CalendarIcon, ClockIcon, TagIcon, ArrowLeftIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { marked } from "marked";
import DOMPurify from "dompurify";

interface AdminArticleProps {
  onOpenContactModal: () => void;
}

export default function AdminArticle({ onOpenContactModal }: AdminArticleProps) {
  const params = useParams();
  const slug = params.slug;
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: article, isLoading, error } = useQuery({
    queryKey: ['/api/articles', slug],
    queryFn: async () => {
      const response = await fetch(`/api/articles/${slug}`);
      if (!response.ok) {
        throw new Error('Article not found');
      }
      return response.json();
    },
    enabled: !!slug,
  });

  // Convert markdown to HTML using marked library
  useEffect(() => {
    if (article?.content) {
      const convertMarkdown = async () => {
        const rawHtml = await marked(article.content);
        const cleanHtml = DOMPurify.sanitize(rawHtml);
        setHtmlContent(cleanHtml);
      };
      convertMarkdown();
    }
  }, [article?.content]);

  if (isLoading) {
    return (
      <>
        <SEOHead
          title="Laden..."
          description="Artikel wordt geladen..."
          url={`https://tbgs.nl/kennisbank/${slug}`}
        />
        <Header onOpenContactModal={onOpenContactModal} />
        <main className="min-h-screen bg-gray-50">
          <div className="container mx-auto px-4 py-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-8"></div>
              <div className="h-64 bg-gray-200 rounded"></div>
            </div>
          </div>
        </main>
        <Footer onOpenContactModal={onOpenContactModal} />
      </>
    );
  }

  if (error || !article) {
    return (
      <>
        <SEOHead
          title="Artikel niet gevonden | TBGS Kennisbank"
          description="Het gevraagde artikel kon niet worden gevonden."
          url={`https://tbgs.nl/kennisbank/${slug}`}
        />
        <Header onOpenContactModal={onOpenContactModal} />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Artikel niet gevonden</h1>
            <p className="text-gray-600 mb-6">Het gevraagde artikel bestaat niet of is niet beschikbaar.</p>
            <Link href="/kennisbank">
              <Button>
                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                Terug naar Kennisbank
              </Button>
            </Link>
          </div>
        </main>
        <Footer onOpenContactModal={onOpenContactModal} />
      </>
    );
  }

  const publishedDate = article.publishedAt || article.createdAt;

  return (
    <>
      <SEOHead
        title={`${article.title} | TBGS Kennisbank`}
        description={article.excerpt || article.metaDescription || `${article.title} - Expert artikel van TBGS`}
        keywords={article.tags?.map((tag: any) => tag.name).join(', ')}
        url={`https://tbgs.nl/kennisbank/${article.slug}`}
      />
      <Header onOpenContactModal={onOpenContactModal} />
      
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link href="/kennisbank">
                <Button variant="ghost" className="mb-6">
                  <ArrowLeftIcon className="h-4 w-4 mr-2" />
                  Terug naar Kennisbank
                </Button>
              </Link>

              <div className="mb-6">
                {article.category && (
                  <Badge variant="secondary" className="mb-4">
                    {article.category.name}
                  </Badge>
                )}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  {article.title}
                </h1>
                {article.excerpt && (
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {article.excerpt}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8">
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  {formatDistanceToNow(new Date(publishedDate), { 
                    addSuffix: true,
                    locale: nl 
                  })}
                </div>
                {article.readTime && (
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {article.readTime} min leestijd
                  </div>
                )}
                {article.tags && article.tags.length > 0 && (
                  <div className="flex items-center gap-2">
                    <TagIcon className="h-4 w-4" />
                    {article.tags.map((tag: any) => (
                      <Badge key={tag.id} variant="outline" className="text-xs">
                        {tag.name}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {article.featuredImage && (
                <div className="mb-8">
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Heeft u vragen over dit onderwerp?</h2>
            <p className="text-xl mb-8 opacity-90">
              Onze specialisten staan klaar om u persoonlijk te adviseren.
            </p>
            <Button
              onClick={onOpenContactModal}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Gratis Advies Aanvragen
            </Button>
          </div>
        </section>
      </main>

      <Footer
        tbsColor="tbgs-orange"
        tosColor="tbgs-green"
        tssColor="tbgs-blue"
        tdsColor="tbgs-red"
        onOpenContactModal={onOpenContactModal}
      />
    </>
  );
}