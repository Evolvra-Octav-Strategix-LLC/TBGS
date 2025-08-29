import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
// import Header from "../../components/Header"; // Header is already rendered by App.tsx
import Footer from "../../components/Footer";

interface GevellekkageProps {
  onOpenContactModal: () => void;
}

export default function Gevellekkage({ onOpenContactModal }: GevellekkageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Gevellekkage Specialist - TBGS | Expert Gevellekkage Opsporing & Reparatie</title>
        <meta name="description" content="⭐ Gevellekkage specialist TBGS - Expert in gevellekkage opsporing, reparatie en preventie. Snelle oplossing voor vochtproblemen in gevels. Gratis advies!" />
        <meta name="keywords" content="gevellekkage, vochtproblemen, gevel reparatie, lekkage opsporing, vocht gevel, gevelrenovatie" />
        <link rel="canonical" href="https://tbgs.nl/kennisbank/gevellekkage" />
      </Helmet>

      {/* Header is already rendered by App.tsx */}

      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-tbgs-navy text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Gevellekkage <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Specialist</span>
              </h1>
              <p className="text-xl lg:text-2xl font-light leading-relaxed mb-12 opacity-90">
                Professionele gevellekkage opsporing en reparatie voor een droge en gezonde woning
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                
                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                  <h2 className="text-2xl font-bold text-red-900 mb-4">Waarom is gevellekkage zo gevaarlijk?</h2>
                  <p className="text-red-800 leading-relaxed">
                    Gevellekkage is vaak onzichtbaar totdat er ernstige schade is ontstaan. Vocht 
                    kan jarenlang ongemerkt in de gevelconstructie dringen en leiden tot houtrot, 
                    schimmelvorming en structurele problemen die kostbare reparaties vereisen.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Wat is gevellekkage?</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Gevellekkage ontstaat wanneer water door de buitengevel van een gebouw dringt. 
                  Dit kan gebeuren door defecte voegen, scheuren in het metselwerk, beschadigde 
                  gevelbekleding of gebrekkige aansluitingen rond vensters en deuren.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gevolgen van gevellekkage:</h3>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li><strong>Vochtige binnenmuren:</strong> Zichtbare vochtplekken en schimmelvorming</li>
                  <li><strong>Houtrot:</strong> Aantasting van houten gevelonderdelen</li>
                  <li><strong>Isolatieschade:</strong> Verminderde isolatiewaarde en energieverlies</li>
                  <li><strong>Structurele schade:</strong> Verzwakking van de gevelconstructie</li>
                  <li><strong>Gezondheidsrisico's:</strong> Schimmel en bacteriegroei</li>
                  <li><strong>Waardedaling:</strong> Aanzienlijke daling van de woningwaarde</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Oorzaken van gevellekkage</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Defecte voegen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Voegen tussen metselwerk kunnen door veroudering, vorst of zetting 
                  scheuren gaan vertonen. Water kan door deze scheuren naar binnen 
                  dringen en schade veroorzaken aan de achterliggende constructie.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Beschadigde gevelbekleding</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Scheuren in sierpleisters, beschadigde gevelpanelen of kapotte 
                  dakpannen aan de gevel kunnen water doorlaten. Deze schade ontstaat 
                  vaak door weersinvloeden, zetting of mechanische beschadiging.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gebrekkige aansluitingen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Rond vensters, deuren, dakranden en andere doorvoeren kunnen 
                  aansluitingen lekken door verouderde kit, verschoven kozijnen 
                  of incorrecte detaillering.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Capillaire vochttransport</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Door capillaire werking kan vocht uit de grond omhoog kruipen 
                  in poreuze gevelmaterialen. Dit probleem treedt vooral op bij 
                  ontbrekende of defecte vochtwering.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Herkennen van gevellekkage</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vroege signalen</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Vochtplekken op binnenmuren</li>
                  <li>Schimmelvorming in hoeken of bij ramen</li>
                  <li>Muffe geuren in bepaalde ruimtes</li>
                  <li>Afbladderende verf of behang</li>
                  <li>Zoutuitslag op buitenmuren</li>
                  <li>Donkere vlekken op de gevel</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professionele detectie</h3>
                <p className="text-lg leading-relaxed mb-6">
                  TBGS gebruikt moderne detectieapparatuur zoals thermografie, 
                  vochtmeters en endoscopie om verborgen lekkages op te sporen 
                  zonder onnodige schade aan de gevel.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <p className="text-yellow-800"><strong>Onderhoudsabonnement Tip:</strong> Met een TBGS 
                  onderhoudsabonnement wordt uw gevel jaarlijks geïnspecteerd op beginnende 
                  lekkages, waardoor grote reparaties worden voorkomen.</p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Reparatiemethoden</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Voegwerk herstel</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Beschadigde voegen worden volledig uitgekrabd en opnieuw 
                  aangebracht met hoogwaardige voegmortel die bestand is tegen 
                  weersinvloeden en vorst-dooi cycli.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gevelimpregnering</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Een professionele gevelimpregnering zorgt voor waterdichte 
                  bescherming terwijl de gevel ademend blijft. Dit voorkomt 
                  vochtindringing zonder condensatieproblemen.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Scheurreparatie</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Scheuren in gevels worden professioneel gerepareerd met 
                  elastische vulmaterialen die meebewegen met de natuurlijke 
                  bewegingen van het gebouw.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Reconstructie</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Bij ernstige schade kan gedeeltelijke reconstructie nodig zijn. 
                  TBGS voert deze werkzaamheden uit met respect voor de 
                  oorspronkelijke architectuur en materialen.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Preventie van gevellekkage</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Regelmatige inspectie</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Jaarlijkse controle van voegen, aansluitingen en gevelbekleding 
                  kan beginnende problemen vroegtijdig signaleren voordat ze 
                  uitgroeien tot kostbare reparaties.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Onderhoud van aansluitingen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Kit rond vensters en deuren moet elke 5-10 jaar vernieuwd worden. 
                  TBGS gebruikt UV-bestendige en elastische kitsoorten voor 
                  langdurige bescherming.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Drainage verbetering</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Goede drainage rond de woning voorkomt waterophoping tegen 
                  de gevel. Dit omvat correcte afschotten, drains en 
                  regenwaterafvoer.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Moderne oplossingen</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nano-impregnering</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Moderne nano-technologie biedt langdurige bescherming tegen 
                  vocht terwijl de natuurlijke uitstraling van de gevel 
                  behouden blijft.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Monitoring systemen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Draadloze vochtmeters kunnen permanent de vochtwaarden in 
                  kritieke punten monitoren en waarschuwen voor afwijkingen.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Intelligente materialen</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Zelf-herstellende materialen en adaptieve coatings kunnen 
                  kleine scheuren automatisch dichten en de levensduur van 
                  gevelwerkzaamheden verlengen.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-red-900 mb-3">Urgentie</h3>
                  <p className="text-red-800">
                    Gevellekkage vereist snelle actie. Elke dag uitstel kan leiden tot 
                    verdere schade en hogere reparatiekosten. Bij vermoeden van lekkage 
                    direct professionele hulp inschakelen.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Waarom kiezen voor TBGS?</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Expertise</h3>
                    <p className="text-blue-800">
                      25+ jaar ervaring in gevellekkage opsporing en reparatie met moderne technieken.
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Snelle service</h3>
                    <p className="text-green-800">
                      24/7 spoeddienst voor acute gevellekkage problemen.
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-orange-900 mb-3">Garantie</h3>
                    <p className="text-orange-800">
                      Uitgebreide garantie op reparaties en gebruikte materialen.
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-900 mb-3">Totaaloplossing</h3>
                    <p className="text-purple-800">
                      Van detectie tot reparatie en preventie - alles uit één hand.
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
                Vermoeden van gevellekkage?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Laat het direct onderzoeken door onze specialisten. Snelle actie voorkomt grote schade!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-white text-tbgs-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Spoed Inspectie
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