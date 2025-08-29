import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Header from "../Header";
import Footer from "../Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowLeft } from "lucide-react";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServiceLocationTemplateProps {
  service: string;
  city: string;
  citySlug: string;
  country: "nl" | "be";
  region: string;
  nearbyAreas: string[];
  serviceTitle: string;
  serviceDescription: string;
  pageTitle: string;
  metaDescription: string;
  heroDescription: string;
  problemsTitle: string;
  problems: string[];
  solutionsTitle: string;
  solutions: string[];
  benefits: Benefit[];
  onOpenContactModal: () => void;
}

export default function ServiceLocationTemplate({
  service,
  city,
  citySlug,
  country,
  region,
  nearbyAreas,
  serviceTitle,
  serviceDescription,
  pageTitle,
  metaDescription,
  heroDescription,
  problemsTitle,
  problems,
  solutionsTitle,
  solutions,
  benefits,
  onOpenContactModal
}: ServiceLocationTemplateProps) {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      <Header onOpenContactModal={onOpenContactModal} />

      <main>
        {/* Breadcrumb */}
        <section className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-tbgs-navy hover:underline">Home</Link>
              <span className="text-gray-500">/</span>
              <Link href={`/${country}/locaties/${citySlug}`} className="text-tbgs-navy hover:underline">{city}</Link>
              <span className="text-gray-500">/</span>
              <span className="text-gray-700">{serviceTitle}</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-tbgs-navy to-gray-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Link href={`/${country}/locaties/${citySlug}`} className="inline-flex items-center text-gray-300 hover:text-white mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Terug naar {city}
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {serviceTitle} in {city}
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  {heroDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={onOpenContactModal} size="lg" className="bg-tbgs-red hover:bg-red-700">
                    Direct Contact
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-tbgs-navy">
                    Bel: 040-2543266
                  </Button>
                </div>
              </div>
              <div className="lg:text-right">
                <Badge className="bg-tbgs-red text-white mb-4 text-lg px-4 py-2">
                  ⚡ 24/7 Spoedhulp
                </Badge>
                <div className="text-gray-300">
                  <p className="mb-2">📍 Ook werkzaam in:</p>
                  <p className="text-sm">{nearbyAreas.join(", ")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problems & Solutions */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Problems */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {problemsTitle}
                </h2>
                <div className="space-y-4">
                  {problems.map((problem, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                      <p className="text-gray-600">{problem}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {solutionsTitle}
                </h2>
                <div className="space-y-4">
                  {solutions.map((solution, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600">{solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Waarom Kiezen voor TBGS?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Al meer dan 25 jaar uw betrouwbare partner voor {serviceTitle.toLowerCase()} in {city} en omgeving.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-tbgs-navy text-white rounded-full mx-auto flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-tbgs-navy text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">
              {serviceTitle} Nodig in {city}?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Neem direct contact met ons op. Wij staan klaar om u te helpen!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={onOpenContactModal} size="lg" className="bg-tbgs-red hover:bg-red-700">
                Gratis Offerte Aanvragen
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-tbgs-navy">
                Direct Bellen: 040-2543266
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer backgroundColor="bg-gray-900" accentColor="text-tbgs-navy" />
    </>
  );
}