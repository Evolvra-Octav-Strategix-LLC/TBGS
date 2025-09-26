import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import SEOHead from "@/lib/seo";
import Footer from "@/components/Footer";
import ContactModalV2 from "@/components/ContactModalV2";
import GoogleReviewSlider from "@/components/GoogleReviewSlider";
import GoogleBusinessIntegration from "@/components/GoogleBusinessIntegration";
import { CheckCircle, Clock, Phone, Mail, MapPin, Calculator, FileText, Users, Award, Star, Zap, Shield, ThumbsUp, Building, Home, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import tdsLogo from "@assets/TDS 545x642 (1)_1755096847747.png";
import tssLogo from "@assets/TSS 545x642 (1)_1755096878001.png";
import tosLogo from "@assets/TOS 545x642 (1)_1755096847747.png";
import tbsLogo from "@assets/TBS 545x642 (1)_1755096847747.png";

export default function GratisOfferte() {
  useEffect(() => {
    // Start with collapsed header like in form steps (120px from top)
    // Delay to ensure page is fully loaded
    setTimeout(() => {
      window.scrollTo({ top: 120, behavior: 'instant' });
    }, 50);
  }, []);

  return (
    <>
      <SEOHead 
        title="Gratis offerte aanvragen - TBGS B.V. | Professionele Dak-, Schoorsteen-, Onderhoud- en Bouwdiensten"
        description="Vraag nu een gratis offerte aan voor uw dak-, schoorsteen-, onderhoud- of bouwproject. TBGS B.V. biedt professionele diensten in heel Nederland en België. Binnen 24 uur contact!"
        keywords="gratis offerte, dakdekker offerte, schoorsteen reparatie offerte, bouw offerte, onderhoud offerte, TBGS aanvraag"
        url="/offerte"
      />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Form Section - Direct Focus */}
        <section className="px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto py-8">
            <ContactModalV2 />
          </div>
        </section>

        {/* High-Priority Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Onze meest gevraagde diensten
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                24/7 spoedservice voor daklekkage, professioneel onderhoud en alle bouw- en renovatiewerkzaamheden
              </p>
            </div>

            {/* All Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-8">
              {/* Daklekkage - Highest Priority */}
              <Link href="/dak" className="group">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-red-200 bg-gradient-to-br from-red-50 to-white">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <img src={tdsLogo} alt="TDS Logo" className="w-12 h-12 object-contain" />
                    </div>
                    <Badge className="mb-3 bg-tbgs-red text-white">24/7 spoedservice</Badge>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-tbgs-red transition-colors">Daklekkage reparatie</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Binnen 24 uur ter plaatse voor alle daklekkages. Van pannendak tot platdak - onze specialisten lossen het direct op.</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Dakgoot lekkage</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Pannendak herstel</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Platdak reparatie</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Noodafdichting</li>
                    </ul>
                  </CardContent>
                </Card>
              </Link>

              {/* Onderhoud - High Priority */}
              <Link href="/onderhoud" className="group">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200 bg-gradient-to-br from-green-50 to-white">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <img src={tosLogo} alt="TOS Logo" className="w-12 h-12 object-contain" />
                    </div>
                    <Badge className="mb-3 bg-tbgs-green text-white">Preventief</Badge>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-tbgs-green transition-colors">Onderhoud & service</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Preventief onderhoud voorkomt kostbare reparaties. Onze specialisten houden uw woning in topconditie.</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Preventief onderhoudsplan</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Dakgoot onderhoud</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Schilderwerk</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Inspectieservice</li>
                    </ul>
                  </CardContent>
                </Card>
              </Link>

              {/* Schoorsteen Service */}
              <Link href="/schoorsteen" className="group">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <img src={tssLogo} alt="TSS Logo" className="w-12 h-12 object-contain" />
                    </div>
                    <Badge className="mb-3 bg-tbgs-blue text-white">Jaarlijks</Badge>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-tbgs-blue transition-colors">Schoorsteen specialist</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Veilige en efficiënte schoorsteenservice. Van jaarlijkse controle tot volledige renovatie.</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Reiniging & controle</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Reparatie & herstel</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Rookgasafvoer</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Nieuwbouw</li>
                    </ul>
                  </CardContent>
                </Card>
              </Link>

              {/* Bouw & Renovatie */}
              <Link href="/bouw" className="group">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200 bg-gradient-to-br from-orange-50 to-white">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <img src={tbsLogo} alt="TBS Logo" className="w-12 h-12 object-contain" />
                    </div>
                    <Badge className="mb-3 bg-tbgs-orange text-white">Complete projecten</Badge>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-tbgs-orange transition-colors">Bouw & renovatie</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Van kleine verbouwingen tot complete renovaties. Uw droomproject van A tot Z.</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Aanbouw</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Verbouwing</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Badkamers</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Keukens</li>
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* Urgency & Contact Card */}
            <div className="max-w-2xl mx-auto">
              <Card className="h-full bg-gradient-to-br from-tbgs-navy to-blue-700 text-white border-0">
                <CardHeader className="pb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <Badge className="mb-2 bg-red-500 text-white">Urgent</Badge>
                      <CardTitle className="text-lg">Spoedservice beschikbaar</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-blue-100">Lekkage of noodgeval? Wij zijn 24/7 bereikbaar en staan binnen 24 uur bij u voor de deur.</p>
                  <div className="space-y-3">
                    <a href="tel:+31402026744" className="flex items-center text-white hover:text-blue-200 transition-colors">
                      <Phone className="w-4 h-4 mr-2" />
                      <span className="font-semibold">040 202 6744</span>
                    </a>
                    <a href="https://wa.me/31402026744" className="flex items-center text-white hover:text-blue-200 transition-colors">
                      <FaWhatsapp className="w-4 h-4 mr-2" />
                      <span>Direct WhatsApp</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process & Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Process Section */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ons bewezen proces</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-tbgs-navy rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Snelle reactie</h4>
                      <p className="text-gray-600">Binnen 24 uur contact en inspectie. Voor spoedgevallen direct ter plaatse.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-tbgs-navy rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Gratis inspectie</h4>
                      <p className="text-gray-600">Uitgebreide inspectie en transparante offerte zonder verborgen kosten.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-tbgs-navy rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Vakkundige uitvoering</h4>
                      <p className="text-gray-600">Gecertificeerde specialisten met 80+ jaar ervaring en volledige garantie.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Waarom TBGS kiezen?</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center space-x-3">
                      <Award className="w-6 h-6 text-yellow-500" />
                      <div>
                        <h4 className="font-semibold text-gray-900">80 jaar familietraditie</h4>
                        <p className="text-sm text-gray-600">Van vader op zoon, vier generaties vakmanschap</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-6 h-6 text-green-500" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Volledige garantie</h4>
                        <p className="text-sm text-gray-600">Uitgebreide garantie op alle uitgevoerde werkzaamheden</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center space-x-3">
                      <Users className="w-6 h-6 text-blue-500" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Lokale specialisten</h4>
                        <p className="text-sm text-gray-600">Bekend met Nederlandse en Belgische bouwstijlen</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center space-x-3">
                      <Zap className="w-6 h-6 text-red-500" />
                      <div>
                        <h4 className="font-semibold text-gray-900">24/7 spoedservice</h4>
                        <p className="text-sm text-gray-600">Altijd beschikbaar voor noodgevallen</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Locations & Google Business Profile */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Onze werkgebieden
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                TBGS B.V. levert kwaliteitsdiensten in heel Nederland en België
              </p>
            </div>
            
            {/* Google Business Integration */}
            <div className="mb-12">
              <GoogleBusinessIntegration 
                placeId="ChIJVSc2_yXbxkcROATmSZNFGFU"
                showReviews={false}
                showMap={true}
                showHours={true}
                className=""
              />
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Veelgestelde vragen over offertes
            </h2>
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Waarom zou ik een offerte aanvragen bij TBGS?
                </h3>
                <p className="text-gray-700">
                  TBGS heeft 80+ jaar ervaring als familiebedrijf en werkt met gecertificeerde specialisten voor <Link href="/dak" className="text-tbgs-red font-medium hover:underline">dakwerk</Link>, <Link href="/onderhoud" className="text-tbgs-green font-medium hover:underline">onderhoud</Link>, <Link href="/schoorsteen" className="text-tbgs-blue font-medium hover:underline">schoorsteenservice</Link> en <Link href="/bouw" className="text-tbgs-orange font-medium hover:underline">bouwprojecten</Link>. Alle offertes zijn gratis en vrijblijvend, met transparante communicatie en garantie op alle uitgevoerd werk.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Hoe snel krijg ik reactie op mijn offerteaanvraag?
                </h3>
                <p className="text-gray-700">
                  Wij nemen binnen 24 uur contact met u op na het indienen van uw offerteaanvraag. Voor spoedgevallen zoals <Link href="/dak" className="text-tbgs-red font-medium hover:underline">daklekkage</Link> bieden wij 24/7 service en streven we ernaar dezelfde dag ter plaatse te zijn in <Link href="/nl/eindhoven" className="text-tbgs-navy font-medium hover:underline">Eindhoven</Link> en omstreken.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Wat gebeurt er na mijn offerteaanvraag?
                </h3>
                <p className="text-gray-700">
                  Na uw aanvraag nemen we contact op voor een <strong>gratis inspectie</strong> ter plaatse. We bespreken uw wensen, maken foto's en meten op. Binnen 48 uur ontvangt u een gedetailleerde, vrijblijvende offerte met duidelijke omschrijving en garantievoorwaarden. Bekijk onze <Link href="/onderhoud" className="text-tbgs-green font-medium hover:underline">onderhoudsabonnementen</Link> voor regelmatige controles.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Werken jullie ook in België?
                </h3>
                <p className="text-gray-700">
                  Ja, TBGS is actief in zowel Nederland als België. In België werken wij vooral in de provincie Limburg, inclusief <Link href="/be/lommel" className="text-tbgs-navy font-medium hover:underline">Lommel</Link>, <Link href="/be/pelt" className="text-tbgs-navy font-medium hover:underline">Pelt</Link>, <Link href="/be/neerpelt" className="text-tbgs-navy font-medium hover:underline">Neerpelt</Link>, Overpelt, Hamont-Achel en <Link href="/be/kaulille" className="text-tbgs-navy font-medium hover:underline">Kaulille</Link>. Dezelfde kwaliteit en service als in Nederland.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Wat als ik spoed heb met een lekkage?
                </h3>
                <p className="text-gray-700">
                  Voor noodgevallen hebben wij 24/7 <Link href="/dak/daklekkage" className="text-tbgs-red font-medium hover:underline">daklekkage spoedservice</Link> beschikbaar. Bel direct <a href="tel:+31402026744" className="text-tbgs-navy font-semibold hover:underline">040 202 6744</a> of <a href="https://wa.me/31402445820?text=🚨%20SPOED%20DAKLEKKAGE%20-%20Ik%20heb%20urgente%20hulp%20nodig%20bij%20een%20daklekkage!" target="_blank" rel="noopener noreferrer" className="text-green-600 font-medium hover:underline">WhatsApp ons direct</a>, of markeer uw aanvraag als 'urgent' in het formulier. We streven ernaar binnen 24 uur ter plaatse te zijn en voeren eerst een noodreparatie uit om verdere schade te voorkomen.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Wat voor garantie krijg ik op het werk?
                </h3>
                <p className="text-gray-700">
                  TBGS geeft uitgebreide garantie op alle uitgevoerde werkzaamheden. De garantietermijn verschilt per type werk, van 2 jaar op <Link href="/onderhoud" className="text-tbgs-green font-medium hover:underline">onderhoudswerk</Link> tot 10 jaar op <Link href="/dak" className="text-tbgs-red font-medium hover:underline">dakbedekkingen</Link>. Voor <Link href="/bouw" className="text-tbgs-orange font-medium hover:underline">bouwprojecten</Link> hanteren we standaard 5 jaar garantie. Alle voorwaarden staan duidelijk in uw offerte.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Review & Trust Block */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Wat onze klanten zeggen
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Lees de ervaringen van duizenden tevreden klanten uit Eindhoven, Nederland en België
              </p>
            </div>
            
            {/* Google Reviews Slider */}
            <div>
              <GoogleReviewSlider placeId="ChIJVSc2_yXbxkcROATmSZNFGFU" className="" />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-tbgs-navy to-blue-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar om uw project te starten?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Vraag direct uw gratis offerte aan en ons team neemt binnen 24 uur contact op.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-tbgs-navy hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Nu offerte aanvragen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                size="lg" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a 
                  href="https://wa.me/31402445820?text=Hallo%20TBGS%2C%20ik%20wil%20graag%20een%20gratis%20offerte%20aanvragen." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <FaWhatsapp className="w-6 h-6 mr-2" />
                  WhatsApp contact
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer showPartnerSlider={true} />
    </>
  );
}