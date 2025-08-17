import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface VlakDakProps {
  onOpenContactModal: () => void;
}

export default function VlakDak({ onOpenContactModal }: VlakDakProps) {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Vlak Dak Specialist - TBGS | Expert Vlakke Dakbedekking Nederland & België</title>
        <meta name="description" content="⭐ Vlak dak specialist TBGS - Expert in vlakke dakbedekking, moderne dakmaterialen en waterdichte dakconstructies. 25+ jaar ervaring in Nederland & België. Gratis advies!" />
        <meta name="keywords" content="vlak dak, vlakke dakbedekking, moderne dakbedekking, dakdekker vlak dak, waterdicht dak" />
        <link rel="canonical" href="https://tbgs.nl/kennisbank/vlak-dak" />
      </Helmet>

      <Header onOpenContactModal={onOpenContactModal} />

      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-tbgs-navy text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Vlak Dak <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Specialist</span>
              </h1>
              <p className="text-xl lg:text-2xl font-light leading-relaxed mb-12 opacity-90">
                Moderne vlakke dakoplossingen met geavanceerde materialen en optimale prestaties
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                
                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
                  <h2 className="text-2xl font-bold text-purple-900 mb-4">Moderne vlakke dakoplossingen</h2>
                  <p className="text-purple-800 leading-relaxed">
                    Vlakke daken vertegenwoordigen de nieuwste innovaties in dakbedekking. TBGS combineert 
                    jarenlange ervaring met moderne materialen en technieken voor toekomstbestendige 
                    dakoplossingen die decennia meegaan.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Wat onderscheidt een vlak dak?</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Een vlak dak kenmerkt zich door een minimale helling van 0,5-3 graden en moderne 
                  dakbedekkingsmaterialen die optimale prestaties leveren. In tegenstelling tot traditionele 
                  platte daken maken vlakke daken gebruik van geavanceerde membraansystemen en innovatieve 
                  isolatietechnieken voor superieure duurzaamheid.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Kenmerken van moderne vlakke daken:</h3>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li><strong>Geavanceerde membranen:</strong> Hoogwaardige TPO, PVC of EPDM systemen</li>
                  <li><strong>Intelligente isolatie:</strong> Continue isolatielagen zonder koudebruggen</li>
                  <li><strong>Smart drainage:</strong> Geïntegreerde waterafvoersystemen</li>
                  <li><strong>Energieproductie:</strong> Optimaal geschikt voor zonnepanelen</li>
                  <li><strong>Duurzame constructie:</strong> 30+ jaar levensduur bij juiste uitvoering</li>
                  <li><strong>Klimaatbestendig:</strong> Bestand tegen extreme weersomstandigheden</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Moderne dakbedekkingssystemen</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. TPO Membraansystemen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Thermoplastic Polyolefin (TPO) is de modernste ontwikkeling in vlakke dakbedekking. 
                  Deze single-ply membranen bieden uitstekende UV-bestendigheid, reflectie-eigenschappen 
                  en energiezuinigheid. TPO membranen kunnen mechanisch bevestigd of volledig verlijmd worden.
                </p>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">Voordelen TPO:</h4>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>Superieure energiezuinigheid door witte reflecterende oppervlak</li>
                  <li>Uitstekende flexibiliteit bij temperatuurschommelingen</li>
                  <li>Chemische bestendigheid tegen industriële vervuiling</li>
                  <li>Volledig recyclebaar en milieuvriendelijk</li>
                  <li>Snelle installatie met warmte-gelaste naden</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Liquid Applied Membranes</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Vloeibare membraansystemen worden ter plaatse aangebracht en vormen een naadloze 
                  dakbedekking zonder verbindingen. Deze systemen zijn ideaal voor complexe dakvormen 
                  met veel details en doorvoeren.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Hybride dakbedekkingen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Moderne hybride systemen combineren de beste eigenschappen van verschillende materialen. 
                  Bijvoorbeeld EPDM basis met TPO toplaag voor optimale prestaties en kosteneffectiviteit.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Geïntegreerde zonnepaneelsystemen</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Moderne vlakke daken worden vaak ontworpen met geïntegreerde zonnepaneelsystemen. 
                  Speciale dakbedekkingen met ingebouwde bevestigingspunten maken ballastvrije 
                  installatie mogelijk zonder dakpenetraties.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Innovatieve isolatiesystemen</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vacuum Isolation Panels (VIP)</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Voor extreme isolatieprestaties bij minimale dikte bieden VIP-panelen Rc-waarden 
                  tot 10 m²K/W bij slechts 2-4 cm dikte. Deze high-tech isolatie is ideaal voor 
                  renovatieprojecten met beperkte opbouwhoogte.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Aerogel isolatie</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Aerogel is het lichtste vaste materiaal ter wereld en biedt uitstekende 
                  isolatie-eigenschappen. Bij dakrenovaties waar gewicht kritiek is, 
                  biedt aerogel een unieke oplossing.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase Change Materials (PCM)</h3>
                <p className="text-lg leading-relaxed mb-6">
                  PCM-isolatie absorbeert en geeft warmte af bij temperatuurveranderingen, 
                  waardoor de temperatuur in het gebouw stabieler blijft. Dit verhoogt 
                  het comfort en verlaagt de energiekosten aanzienlijk.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Smart dakbeheersystemen</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">IoT monitoring</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Moderne vlakke daken kunnen uitgerust worden met IoT-sensoren die continue 
                  monitoring bieden van temperatuur, vocht, membrane-integriteit en 
                  waterafvoerprestaties. Dit enableert predictief onderhoud.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligente waterafvoer</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Smart drainage systemen detecteren verstoppingen automatisch en kunnen 
                  zelfreinigend zijn. Geïntegreerde sensoren waarschuwen voor afwijkende 
                  waterstanden en optimaliseren de afvoercapaciteit.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-blue-800"><strong>TBGS Innovatie:</strong> Wij implementeren als één van de 
                  weinige dakspecialisten in Nederland en België smart dakmonitoring systemen voor 
                  onze premium klanten.</p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Duurzaamheid en circulaire economie</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Recyclebare materialen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Moderne vlakke dakbedekkingen zijn ontworpen met het oog op circulaire economie. 
                  TPO en PVC membranen zijn volledig recyclebaar, en oude dakbedekkingen kunnen 
                  worden omgezet in nieuwe producten.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Carbon footprint reductie</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Door gebruik van reflecterende membranen en optimale isolatie dragen vlakke daken 
                  significant bij aan CO2-reductie. Cool roof technologie kan de temperatuur van 
                  dakoppervlakken met 20-30°C verlagen.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Regenwaterhergebruik</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Vlakke daken zijn ideaal voor regenwateropvang en -hergebruik. Geïntegreerde 
                  opslagsystemen kunnen het opgevangen water gebruiken voor irrigatie, 
                  toiletspoeling of industriële processen.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Onderhoud en levensduur</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Preventief onderhoudsprogramma</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Kwartaalinspectie van membrane-integriteit via thermografie</li>
                  <li>Automatische monitoring van drainage-prestaties</li>
                  <li>Jaarlijkse professionele inspectie door gecertificeerde specialisten</li>
                  <li>Predictive maintenance op basis van sensor-data</li>
                  <li>Proactieve reparatie van minimale beschadigingen</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Levensduurverlenging</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Met juist onderhoud kunnen moderne vlakke daken 30-40 jaar meegaan. 
                  Investering in kwaliteitsmateriaal en professionele installatie 
                  resulteert in lagere lifecycle costs.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Toekomsttrends in vlakke dakbedekking</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Levende daken</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Extensive en intensive groendaken worden steeds populairder. Deze systemen 
                  bieden biodiversiteit, temperatuurregulatie en luchtverbetering. TBGS 
                  realiseert complete groendakoplossingen.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Building Integrated Photovoltaics (BIPV)</h3>
                <p className="text-lg leading-relaxed mb-4">
                  De toekomst ligt in dakbedekkingen die zelf energie opwekken. BIPV-systemen 
                  integreren zonnecellen direct in de dakbedekking voor maximale efficiëntie 
                  en esthetiek.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Self-healing materialen</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Onderzoek naar self-healing polymeren toont veelbelovende resultaten. 
                  Deze materialen kunnen kleine beschadigingen automatisch repareren, 
                  wat onderhoudskosten drastisch kan verlagen.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-green-900 mb-3">Duurzaamheidsvoordelen</h3>
                  <p className="text-green-800">
                    Moderne vlakke daken kunnen tot 40% energiebesparing realiseren ten opzichte 
                    van traditionele dakbedekkingen door optimale isolatie en reflectie-eigenschappen.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Waarom kiezen voor TBGS?</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Innovatie leider</h3>
                    <p className="text-blue-800">
                      Als pionier in moderne dakbedekkingen implementeren wij de nieuwste technologieën.
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Toekomstbestendige oplossingen</h3>
                    <p className="text-green-800">
                      Onze vlakke daken zijn ontworpen voor klimaatverandering en energietransitie.
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-orange-900 mb-3">Uitgebreide garantie</h3>
                    <p className="text-orange-800">
                      Tot 25 jaar garantie op premium vlakke daksystemen met smart monitoring.
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-900 mb-3">Lifecycle support</h3>
                    <p className="text-purple-800">
                      Complete lifecycle service van ontwerp tot end-of-life recycling.
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
                Klaar voor de toekomst van dakbedekking?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Ontdek hoe moderne vlakke dakoplossingen uw gebouw toekomstbestendig maken. 
                Vraag nu een gratis adviesgesprek aan!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-white text-tbgs-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Gratis Adviesgesprek
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