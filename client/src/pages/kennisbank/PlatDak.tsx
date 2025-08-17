import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface PlatDakProps {
  onOpenContactModal: () => void;
}

export default function PlatDak({ onOpenContactModal }: PlatDakProps) {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Plat Dak Specialist Eindhoven – EPDM & Bitumen Dakbedekking | TBGS</title>
        <meta name="description" content="⭐ Plat dak specialist Eindhoven & regio - TBGS ✓ EPDM & bitumen platte daken ✓ 25+ jaar ervaring ✓ 20 jaar garantie ✓ Gratis offerte binnen 24u" />
        <meta name="keywords" content="plat dak specialist Eindhoven, EPDM dakbedekking Eindhoven, plat dak laten maken Eindhoven, platdak Brabant, bitumen dak specialist" />
        <link rel="canonical" href="https://tbgs.nl/kennisbank/plat-dak" />
        
        {/* Enhanced Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Service", "Article"],
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://tbgs.nl/kennisbank/plat-dak"
            },
            "headline": "Plat Dak Specialist Eindhoven – EPDM & Bitumen Dakbedekking",
            "description": "Expert plat dak diensten in Eindhoven, Nuenen, Veldhoven en omgeving. Gespecialiseerd in EPDM en bitumen dakbedekking met 25+ jaar ervaring.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "TBGS BV - Totaal Bouw Groep Specialisten",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Eindhoven",
                "addressRegion": "Noord-Brabant",
                "addressCountry": "NL"
              },
              "telephone": "+31 40 202 6744",
              "areaServed": ["Eindhoven", "Nuenen", "Veldhoven", "Best", "Geldrop", "Mierlo", "Waalre"]
            },
            "serviceType": "Plat Dak Specialist",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 51.4416,
                "longitude": 5.4697
              },
              "geoRadius": 50000
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": 4.8,
              "reviewCount": 127
            },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceRange": "€€€"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Plat Dak Services",
              "itemListElement": [
                {
                  "@type": "OfferCatalog",
                  "name": "EPDM Dakbedekking",
                  "description": "Synthetisch rubber dakbedekking met 40+ jaar levensduur"
                },
                {
                  "@type": "OfferCatalog", 
                  "name": "Bitumen Dakbedekking",
                  "description": "Traditionele waterafstotende dakbedekking voor platte daken"
                }
              ]
            }
          })}
        </script>

        {/* FAQ Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Hoe lang gaat een plat dak mee?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Een EPDM plat dak gaat 40+ jaar mee bij professionele installatie en regelmatig onderhoud. Bitumen platte daken hebben een levensduur van 20-25 jaar."
                }
              },
              {
                "@type": "Question", 
                "name": "Wat kost EPDM dakbedekking per m² in Eindhoven?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "EPDM dakbedekking kost gemiddeld €80-120 per m² inclusief montage en garantie. De exacte kostprijs hangt af van dakgrootte, complexiteit, isolatie en toegankelijkheid."
                }
              },
              {
                "@type": "Question",
                "name": "Wanneer moet ik mijn platte dak vervangen?", 
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vervang uw platte dak bij herhaalde lekkages, zichtbare scheuren, blaarvorming of als het dak ouder is dan 20 jaar."
                }
              },
              {
                "@type": "Question",
                "name": "Kan ik zonnepanelen op mijn platte dak plaatsen?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "Ja, platte daken zijn ideaal voor zonnepanelen. Belangrijk is dat de dakconstructie het extra gewicht kan dragen en de dakbedekking in goede staat is."
                }
              },
              {
                "@type": "Question",
                "name": "Hoe voorkom ik lekkages in mijn platte dak?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Preventie door regelmatige controle: reinig hemelwaterafvoeren 2x per jaar, controleer aansluitingen en laat jaarlijks inspecteren door een professional."
                }
              },
              {
                "@type": "Question",
                "name": "Hoeveel garantie geeft TBGS op platte daken?", 
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TBGS geeft tot 20 jaar garantie op EPDM platte daken en 15 jaar op moderne bitumen systemen bij professionele installatie."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <Header onOpenContactModal={onOpenContactModal} />

      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-tbgs-navy text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Plat Dak Specialist <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Eindhoven</span>
              </h1>
              <p className="text-lg lg:text-xl font-light leading-relaxed mb-8 opacity-90">
                EPDM & Bitumen Dakbedekking | Noord-Brabant & Limburg
              </p>
              <p className="text-xl lg:text-2xl font-light leading-relaxed mb-12 opacity-90">
                Professionele platte dakbedekking voor moderne architectuur in Eindhoven, Nuenen, Veldhoven en omgeving
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">Plat Dak Specialist in Eindhoven en regio</h2>
                  <p className="text-blue-800 leading-relaxed">
                    TBGS is dé plat dak specialist voor Eindhoven, Nuenen, Veldhoven, Best, Geldrop, Mierlo en Waalre. 
                    Met 25+ jaar ervaring in Noord-Brabant specialiseren wij ons in EPDM en bitumen dakbedekking 
                    met tot 20 jaar garantie. Onze gecertificeerde monteurs kennen de lokale bouwvoorschriften 
                    en klimaatomstandigheden perfect.
                  </p>
                </div>

                {/* Location-specific service areas */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Onze Servicegebieden</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h3 className="font-bold text-tbgs-navy mb-2">📍 Eindhoven</h3>
                      <p className="text-sm text-gray-600">Hoofdlocatie - Volledige service</p>
                      <p className="text-xs text-gray-500">Tel: +31 40 202 6744</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h3 className="font-bold text-tbgs-navy mb-2">📍 Nuenen</h3>
                      <p className="text-sm text-gray-600">Van Gogh dorp specialist</p>
                      <p className="text-xs text-gray-500">Postcode: 5670-5674</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h3 className="font-bold text-tbgs-navy mb-2">📍 Veldhoven</h3>
                      <p className="text-sm text-gray-600">Nieuwbouw & renovatie focus</p>
                      <p className="text-xs text-gray-500">Postcode: 5500-5509</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h3 className="font-bold text-tbgs-navy mb-2">📍 Best</h3>
                      <p className="text-sm text-gray-600">Familiehuis specialist</p>
                      <p className="text-xs text-gray-500">Postcode: 5680-5684</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h3 className="font-bold text-tbgs-navy mb-2">📍 Geldrop</h3>
                      <p className="text-sm text-gray-600">Dakwerk & onderhoud</p>
                      <p className="text-xs text-gray-500">Postcode: 5660-5665</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h3 className="font-bold text-tbgs-navy mb-2">📍 Mierlo & Waalre</h3>
                      <p className="text-sm text-gray-600">Premium service</p>
                      <p className="text-xs text-gray-500">Luxe woningen specialist</p>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <p className="text-sm text-gray-600">
                      <strong>Werkgebied:</strong> 50km rondom Eindhoven | <strong>Responstijd:</strong> Binnen 24 uur | 
                      <strong>Spoeddienst:</strong> Binnen 2 uur voor lekkages
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Wat is een plat dak?</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Een plat dak is een dakconstructie met een minimale helling van 1-5 graden. Deze geringe 
                  helling zorgt voor waterafvoer naar de hemelwaterafvoeren. Platte daken zijn populair 
                  in moderne architectuur vanwege hun strakke uitstraling en multifunctionele mogelijkheden.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Voordelen van een plat dak:</h3>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li><strong>Moderne uitstraling:</strong> Strakke, minimalistische architectuur</li>
                  <li><strong>Multifunctioneel:</strong> Bruikbaar als dakterras, groendak of voor installaties</li>
                  <li><strong>Kosteneffectief:</strong> Minder materiaal en arbeid dan hellende daken</li>
                  <li><strong>Energiezuinig:</strong> Ideaal voor zonnepanelen en warmtepompen</li>
                  <li><strong>Ruimtewinst:</strong> Geen verlies van binnenruimte door dakhellingen</li>
                  <li><strong>Onderhoudsvriendelijk:</strong> Gemakkelijk toegankelijk voor inspectie</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Plat dak materialen</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. EPDM Dakbedekking</h3>
                <p className="text-lg leading-relaxed mb-4">
                  EPDM (Ethyleen Propyleen Dieen Monomeer) is een synthetisch rubber dat uitstekende 
                  prestaties levert bij platte daken. Dit materiaal is extreem elastisch, UV-bestendig 
                  en heeft een levensduur van 40+ jaar bij juiste installatie.
                </p>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">Voordelen EPDM:</h4>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Uitstekende elasticiteit en temperatuurbestendigheid (-45°C tot +120°C)</li>
                  <li>Zeer lage onderhoudskosten</li>
                  <li>Milieuvriendelijk en recyclebaar</li>
                  <li>Snelle en schone installatie</li>
                  <li>Excellent herstelbaar bij beschadigingen</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Bitumineuze dakbedekking</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Traditionele bitumen dakbedekking bestaat uit meerdere lagen bitumineuze materialen. 
                  Modern SBS-gemodificeerd bitumen biedt verbeterde elasticiteit en UV-bestendigheid 
                  ten opzichte van traditioneel bitumen.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. TPO Dakbedekking</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Thermoplastisch Polyolefine (TPO) is een moderne kunstofbedekking die uitstekende 
                  energiezuinigheid biedt door reflectie van zonlicht. TPO is geschikt voor grote 
                  dakvlakken en heeft een levensduur van 25-30 jaar.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">4. PVC Dakbedekking</h3>
                <p className="text-lg leading-relaxed mb-6">
                  PVC dakbedekking biedt uitstekende chemische bestendigheid en is ideaal voor 
                  industriële toepassingen. Dit materiaal is volledig recyclebaar en heeft 
                  goede laskwaliteiten voor waterdichte verbindingen.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Plat dak constructies</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Warme dakconstructie</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Bij een warme dakconstructie ligt de isolatie boven de draagconstructie. Deze methode 
                  voorkomt koudebruggen en condensatieproblemen. De dakbedekking wordt direct op de 
                  isolatie aangebracht, vaak met een beschermlaag ertussen.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Koude dakconstructie</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Een koude dakconstructie heeft isolatie onder de draagconstructie met een 
                  geventileerde spouw ertussen. Deze constructie wordt minder toegepast vanwege 
                  het risico op condensatieproblemen en koudebruggen.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Omgekeerde dakconstructie</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Bij een omgekeerde dakconstructie ligt de isolatie boven de dakbedekking. 
                  Deze methode beschermt de dakbedekking tegen temperatuurschommelingen en 
                  UV-straling, wat de levensduur significant verlengt.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Waterafvoer plat dak</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hemelwaterafvoeren</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Professionele hemelwaterafvoeren zijn cruciaal voor elk plat dak. TBGS installeert 
                  hoogwaardige afvoeren met verwarmingskabels om bevriezing te voorkomen. De afvoeren 
                  worden strategisch geplaatst op de laagste punten van het dak.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Noodoverloop</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Elke hemelwaterafvoer moet voorzien zijn van een noodoverloop op een hoger niveau. 
                  Deze voorkomt wateroverlast bij verstopte hoofdafvoeren en beschermt de dakconstructie 
                  tegen waterinfiltratie.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <p className="text-yellow-800"><strong>Onderhoudsabonnement Tip:</strong> Met een TBGS onderhoudsabonnement 
                  worden uw hemelwaterafvoeren regelmatig gecontroleerd en gereinigd, waardoor verstoppingen 
                  en wateroverlast voorkomen worden.</p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Plat dak isolatie</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Isolatiematerialen</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>PIR isolatie:</strong> Hoge isolatiewaarde bij dunne dikte (Rc 6-8 m²K/W)</li>
                  <li><strong>PUR isolatie:</strong> Excellent isolerend vermogen en drukvast</li>
                  <li><strong>XPS isolatie:</strong> Vochtbestendig en geschikt voor omgekeerde daken</li>
                  <li><strong>Mineralewol:</strong> Brandvertragend en dampopen, ideaal voor warme daken</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dampscherm</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Een professioneel dampscherm voorkomt vochtproblemen in de dakconstructie. 
                  TBGS gebruikt hoogwaardige dampremmende folies die waterdicht worden 
                  aangesloten op alle dakdoorvoeren en aansluitingen.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Onderhoud plat dak</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Halfjaarlijkse inspectie</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Controle van hemelwaterafvoeren en noodoverlopen</li>
                  <li>Inspectie van dakbedekking op scheuren of blaarvorming</li>
                  <li>Controle van alle dakdoorvoeren en aansluitingen</li>
                  <li>Beoordeling van voegen en kitwerk</li>
                  <li>Verwijdering van bladeren en vuil</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Preventief onderhoud</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Regelmatige reiniging van afvoeren en controle van de dakbedekking voorkomt 
                  kostbare lekkages. TBGS biedt onderhoudscontracten die de levensduur van 
                  uw platte dak maximaliseren.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Veelvoorkomende problemen</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lekkages bij aansluitingen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  De meeste lekkages ontstaan bij aansluitingen van het dak aan opstaande delen 
                  zoals schoorstenen, dakramen of installaties. Professionele detaillering 
                  en kwalitatief loodwerk zijn essentieel.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Waterophoping</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Onvoldoende afschot kan leiden tot waterophoping die de dakbedekking 
                  vroegtijdig laat verouderen. TBGS corrigeert afschotproblemen met 
                  professionele afschotmaterialen.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Blaarvorming</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Blaren in bitumineuze dakbedekking ontstaan door vocht of lucht onder 
                  de bedekking. Tijdige reparatie voorkomt dat kleine blaren uitgroeien 
                  tot grote problemen.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-red-900 mb-3">Waarschuwing</h3>
                  <p className="text-red-800">
                    Platte daken vereisen professionele installatie en onderhoud. Verkeerd 
                    uitgevoerde reparaties kunnen leiden tot uitgebreide waterschade. 
                    Schakel altijd een erkende dakspecialist in.
                  </p>
                </div>

                {/* FAQ Section with Schema */}
                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Veelgestelde Vragen - Plat Dak</h2>
                <div className="space-y-6 mb-12">
                  <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-tbgs-navy">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe lang gaat een plat dak mee?</h3>
                    <p className="text-gray-700">
                      Een EPDM plat dak gaat 40+ jaar mee bij professionele installatie en regelmatig onderhoud. 
                      Bitumen platte daken hebben een levensduur van 20-25 jaar. De exacte levensduur hangt af van 
                      materiaalqualiteit, vakkundige installatie en preventief onderhoud.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-tbgs-navy">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost EPDM dakbedekking per m² in Eindhoven?</h3>
                    <p className="text-gray-700">
                      EPDM dakbedekking kost gemiddeld €80-120 per m² inclusief montage en garantie. De exacte 
                      kostprijs hangt af van dakgrootte, complexiteit, isolatie en toegankelijkheid. TBGS biedt 
                      altijd een gratis offerte met transparante prijzen voor de regio Eindhoven.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-tbgs-navy">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Wanneer moet ik mijn platte dak vervangen?</h3>
                    <p className="text-gray-700">
                      Vervang uw platte dak bij herhaalde lekkages, zichtbare scheuren, blaarvorming of als het 
                      dak ouder is dan 20 jaar. Onze specialisten in Eindhoven inspecteren uw dak gratis en 
                      adviseren of reparatie of vervanging de beste optie is.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-tbgs-navy">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik zonnepanelen op mijn platte dak plaatsen?</h3>
                    <p className="text-gray-700">
                      Ja, platte daken zijn ideaal voor zonnepanelen. Belangrijk is dat de dakconstructie het 
                      extra gewicht kan dragen en de dakbedekking in goede staat is. TBGS werkt samen met 
                      gecertificeerde zonnepaneel installateurs in Noord-Brabant.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-tbgs-navy">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe voorkom ik lekkages in mijn platte dak?</h3>
                    <p className="text-gray-700">
                      Preventie door regelmatige controle is het belangrijkste: reinig hemelwaterafvoeren 2x per jaar, 
                      controleer aansluitingen en laat jaarlijks inspecteren door een professional. Een TBGS 
                      onderhoudsabonnement voorkomt 90% van alle lekkages.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-tbgs-navy">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Hoeveel garantie geeft TBGS op platte daken?</h3>
                    <p className="text-gray-700">
                      TBGS geeft tot 20 jaar garantie op EPDM platte daken en 15 jaar op moderne bitumen systemen. 
                      Deze garantie is alleen geldig bij professionele installatie door onze gecertificeerde 
                      monteurs en geldt voor materiaal én vakmanschap.
                    </p>
                  </div>
                </div>

                {/* Internal Linking Section */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Gerelateerde Kennisbank Artikelen</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-red-500">
                      <h3 className="font-bold text-red-700 mb-2">🚨 Daklekkage</h3>
                      <p className="text-sm text-gray-600 mb-3">Acute plat dak lekkages herkennen en snel handelen</p>
                      <Link href="/kennisbank/daklekkage-herkennen-voorkomen" className="text-red-600 hover:text-red-800 font-semibold text-sm">
                        → Lees meer over daklekkage
                      </Link>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-500">
                      <h3 className="font-bold text-green-700 mb-2">🔧 Onderhoud</h3>
                      <p className="text-sm text-gray-600 mb-3">Preventief onderhoud voor langere levensduur</p>
                      <Link href="/kennisbank/preventief-onderhoud" className="text-green-600 hover:text-green-800 font-semibold text-sm">
                        → Preventief onderhoud tips
                      </Link>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-500">
                      <h3 className="font-bold text-blue-700 mb-2">🏠 Dakbedekking</h3>
                      <p className="text-sm text-gray-600 mb-3">Alle materialen voor platte daken vergeleken</p>
                      <Link href="/kennisbank/dakbedekking-materialen" className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                        → Materialen vergelijken
                      </Link>
                    </div>
                  </div>
                </div>

                {/* NAP Blocks for Local SEO */}
                <div className="bg-gray-50 rounded-xl p-8 mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">📍 TBGS Locaties & Contact</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm border">
                      <h3 className="font-bold text-tbgs-navy mb-3">🏢 TBGS Eindhoven (Hoofdkantoor)</h3>
                      <div className="space-y-2 text-sm">
                        <p className="text-gray-700">📞 <strong>Tel:</strong> +31 40 202 6744</p>
                        <p className="text-gray-700">📧 <strong>Email:</strong> eindhoven@tbgs.nl</p>
                        <p className="text-gray-700">🗺️ <strong>Servicegebied:</strong> Eindhoven + 25km</p>
                        <p className="text-gray-700">🕒 <strong>Openingstijden:</strong> Ma-Vr 07:30-17:30</p>
                        <p className="text-gray-700">📋 <strong>KvK:</strong> 17276509</p>
                        <div className="mt-3">
                          <a href="https://maps.google.com/?q=TBGS+Eindhoven" target="_blank" rel="noopener noreferrer" 
                             className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
                            🗺️ Route via Google Maps
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm border">
                      <h3 className="font-bold text-tbgs-navy mb-3">🏘️ TBGS Nuenen</h3>
                      <div className="space-y-2 text-sm">
                        <p className="text-gray-700">📞 <strong>Tel:</strong> +31 40 202 6744</p>
                        <p className="text-gray-700">📧 <strong>Email:</strong> nuenen@tbgs.nl</p>
                        <p className="text-gray-700">🗺️ <strong>Servicegebied:</strong> Van Gogh dorp + omgeving</p>
                        <p className="text-gray-700">🏠 <strong>Specialty:</strong> Historische panden</p>
                        <div className="mt-3">
                          <a href="https://maps.google.com/?q=TBGS+Nuenen" target="_blank" rel="noopener noreferrer" 
                             className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
                            🗺️ Route via Google Maps
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm border">
                      <h3 className="font-bold text-tbgs-navy mb-3">🏗️ TBGS Veldhoven</h3>
                      <div className="space-y-2 text-sm">
                        <p className="text-gray-700">📞 <strong>Tel:</strong> +31 40 202 6744</p>
                        <p className="text-gray-700">📧 <strong>Email:</strong> veldhoven@tbgs.nl</p>
                        <p className="text-gray-700">🗺️ <strong>Servicegebied:</strong> Veldhoven, Oerle, Zeelst</p>
                        <p className="text-gray-700">🏠 <strong>Specialty:</strong> Nieuwbouw & renovatie</p>
                        <div className="mt-3">
                          <a href="https://maps.google.com/?q=TBGS+Veldhoven" target="_blank" rel="noopener noreferrer" 
                             className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
                            🗺️ Route via Google Maps
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                    <div className="bg-white rounded-lg p-4 shadow-sm border">
                      <h4 className="font-bold text-tbgs-navy mb-2">📍 Best</h4>
                      <p className="text-xs text-gray-600">Dakwerk & schoorsteenservice</p>
                      <p className="text-xs text-gray-500">Postcode: 5680-5684</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm border">
                      <h4 className="font-bold text-tbgs-navy mb-2">📍 Geldrop</h4>
                      <p className="text-xs text-gray-600">Onderhoud & reparaties</p>
                      <p className="text-xs text-gray-500">Postcode: 5660-5665</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm border">
                      <h4 className="font-bold text-tbgs-navy mb-2">📍 Mierlo</h4>
                      <p className="text-xs text-gray-600">Complete renovaties</p>
                      <p className="text-xs text-gray-500">Postcode: 5731-5735</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm border">
                      <h4 className="font-bold text-tbgs-navy mb-2">📍 Waalre</h4>
                      <p className="text-xs text-gray-600">Premium woningen</p>
                      <p className="text-xs text-gray-500">Postcode: 5580-5584</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Waarom kiezen voor TBGS?</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Gespecialiseerde kennis</h3>
                    <p className="text-blue-800">
                      25+ jaar specifieke ervaring met platte dakconstructies en moderne dakbedekkingen.
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Gecertificeerde monteurs</h3>
                    <p className="text-green-800">
                      Al onze monteurs zijn gecertificeerd door materiaallevera</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-orange-900 mb-3">Langdurige garantie</h3>
                    <p className="text-orange-800">
                      Tot 20 jaar garantie op EPDM dakbedekking en 15 jaar op moderne bitumen systemen.
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-900 mb-3">Complete service</h3>
                    <p className="text-purple-800">
                      Van ontwerp tot nazorg - alles uit één hand voor optimale kwaliteit.
                    </p>
                  </div>
                </div>

              </article>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-tbgs-navy via-blue-900 to-indigo-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Klaar voor uw nieuwe platte dak?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Onze specialisten adviseren u graag over de beste platte dakoplossing voor uw project. 
                Vraag nu een gratis offerte aan!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-white text-tbgs-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Gratis Offerte Aanvragen
                </button>
                <Link href="/contact">
                  <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-tbgs-navy transition-all duration-300">
                    Direct Contact
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}