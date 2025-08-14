import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { getKnowledgeBasePost, getAllKnowledgeBasePosts } from '@/lib/wordpress';
import { WordPressContent, FAQ } from '@/components/wordpress/WordPressContent';
import { Button } from '@/components/ui/button';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  try {
    const posts = await getAllKnowledgeBasePosts();
    return posts.map((post: any) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params for knowledge base:', error);
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getKnowledgeBasePost(params.slug);
  
  if (!post) {
    return {
      title: 'Artikel niet gevonden',
    };
  }

  const title = post.seo?.title || post.title;
  const description = post.seo?.metaDesc || post.excerpt;

  return {
    title: `${title} | TBGS Kennisbank`,
    description,
    keywords: post.tags?.nodes?.map(tag => tag.name).join(', '),
    alternates: {
      canonical: `/kennisbank/${params.slug}`,
    },
    openGraph: {
      title: title,
      description: description,
      url: `https://www.tbgs.nl/kennisbank/${params.slug}`,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.modified,
      authors: ['TBGS BV'],
      ...(post.seo?.opengraphImage && {
        images: [{
          url: post.seo.opengraphImage.sourceUrl,
          alt: post.seo.opengraphImage.altText || title,
        }],
      }),
    },
  };
}

export default async function KnowledgeBasePost({ params }: PageProps) {
  const post = await getKnowledgeBasePost(params.slug);

  if (!post) {
    notFound();
  }

  const publishDate = new Date(post.date).toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const modifiedDate = new Date(post.modified).toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long', 
    day: 'numeric',
  });

  return (
    <article className="min-h-screen bg-white">
      {/* Schema.org Article markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            author: {
              '@type': 'Organization',
              name: 'TBGS BV',
            },
            publisher: {
              '@type': 'Organization',
              name: 'TBGS BV',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.tbgs.nl/logo.png',
              },
            },
            datePublished: post.date,
            dateModified: post.modified,
            url: `https://www.tbgs.nl${post.uri}`,
            ...(post.seo?.opengraphImage && {
              image: post.seo.opengraphImage.sourceUrl,
            }),
          }),
        }}
      />

      {/* Navigation */}
      <nav className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Link href="/kennisbank">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Terug naar Kennisbank
            </Button>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Categories */}
            {post.categories?.nodes && post.categories.nodes.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.categories.nodes.map((category) => (
                  <span
                    key={category.slug}
                    className="inline-block px-3 py-1 bg-tbgs-navy text-white text-sm rounded-full"
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {post.acf?.intro && (
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {post.acf.intro}
              </p>
            )}

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Gepubliceerd: {publishDate}</span>
              </div>
              {modifiedDate !== publishDate && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Bijgewerkt: {modifiedDate}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <WordPressContent content={post.content} />

            {/* FAQ Section */}
            {post.acf?.faq && <FAQ faq={post.acf.faq} />}

            {/* Tags */}
            {post.tags?.nodes && post.tags.nodes.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.nodes.map((tag) => (
                    <span
                      key={tag.slug}
                      className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-16 bg-tbgs-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Heeft u vragen over dit onderwerp?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Onze specialisten helpen u graag verder
          </p>
          <Link href="/gratis-offerte">
            <Button size="lg" variant="secondary" className="bg-white text-tbgs-navy hover:bg-gray-100">
              Gratis Adviesgesprek
            </Button>
          </Link>
        </div>
      </section>
    </article>
  );
}