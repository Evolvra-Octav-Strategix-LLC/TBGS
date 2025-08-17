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
        <title>Plat Dak Specialist - TBGS | Expert Platte Dakbedekking Nederland & België</title>
        <meta name="description" content="⭐ Plat dak specialist TBGS - Expert in platte dakbedekking, EPDM, bitumen en waterdichte dakconstructies. 25+ jaar ervaring in Nederland & België. Gratis advies!" />
        <meta name="keywords" content="plat dak, platte dakbedekking, EPDM dak, bitumen dak, platdak renovatie, dakdekker plat dak" />
        <link rel="canonical" href="https://tbgs.nl/kennisbank/plat-dak" />
      </Helmet>

      <Header onOpenContactModal={onOpenContactModal} />

      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-tbgs-navy text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Plat Dak <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Specialist</span>
              </h1>
              <p className="text-xl lg:text-2xl font-light leading-relaxed mb-12 opacity-90">
                Professionele platte dakbedekking voor moderne architectuur en optimale waterdichtheid
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">Waarom kiezen voor een plat dak?</h2>
                  <p className="text-blue-800 leading-relaxed">
                    Platte daken zijn de basis van moderne architectuur en bieden unieke mogelijkheden 
                    voor dakterrassen, groendaken en zonnepanelen. TBGS specialiseert zich in waterdichte 
                    platte dakoplossingen met jarenlange garantie.
                  </p>
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