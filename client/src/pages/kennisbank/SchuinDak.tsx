import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface SchuinDakProps {
  onOpenContactModal: () => void;
}

export default function SchuinDak({ onOpenContactModal }: SchuinDakProps) {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Schuin Dak Specialist - TBGS | Expert Schuine Dakbedekking Nederland & België</title>
        <meta name="description" content="⭐ Schuin dak specialist TBGS - Expert in schuine dakbedekking, dakpannen, dakleien en waterdichte dakconstructies. 25+ jaar ervaring in Nederland & België. Gratis advies!" />
        <meta name="keywords" content="schuin dak, dakpannen, dakleien, schuine dakbedekking, hellend dak, dakconstructie, dakdekker schuin dak" />
        <link rel="canonical" href="https://tbgs.nl/kennisbank/schuin-dak" />
      </Helmet>

      <Header onOpenContactModal={onOpenContactModal} />

      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-tbgs-navy text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Schuin Dak <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Specialist</span>
              </h1>
              <p className="text-xl lg:text-2xl font-light leading-relaxed mb-12 opacity-90">
                Professionele schuine dakbedekking voor duurzame bescherming en tijdloze schoonheid
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                
                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                  <h2 className="text-2xl font-bold text-orange-900 mb-4">Waarom kiezen voor een schuin dak?</h2>
                  <p className="text-orange-800 leading-relaxed">
                    Een schuin dak is de meest traditionele en efficiënte dakconstructie. TBGS specialiseert zich 
                    in alle aspecten van schuine daken, van klassieke dakpannen tot moderne dakleien en 
                    innovatieve dakbedekkingen voor optimale waterdichtheid.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Wat is een schuin dak?</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Een schuin dak is een dakconstructie met een helling tussen 15 en 60 graden. Deze hellingshoek 
                  zorgt voor optimale regenwaterafvoer en sneeuwafschuiving. Schuine daken zijn de meest voorkomende 
                  dakvorm in Nederland en België en kenmerken zich door hun uitstekende functionele en esthetische eigenschappen.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Voordelen van een schuin dak:</h3>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li><strong>Excellente waterafvoer:</strong> Natuurlijke afvoer van regenwater door zwaartekracht</li>
                  <li><strong>Sneeuwlast vermindering:</strong> Sneeuw glijdt automatisch van het dak</li>
                  <li><strong>Traditionele uitstraling:</strong> Tijdloze schoonheid die past bij elke architectuur</li>
                  <li><strong>Duurzaamheid:</strong> Bij juiste uitvoering decennia lang houdbaar</li>
                  <li><strong>Isolatiemogelijkheden:</strong> Ruimte tussen balken voor optimale isolatie</li>
                  <li><strong>Zolderruimte:</strong> Bruikbare ruimte onder het dak voor bewoning of opslag</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Dakbedekkingsmaterialen voor schuine daken</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Dakpannen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Dakpannen zijn het meest gebruikte materiaal voor schuine daken in Nederland. Verkrijgbaar 
                  in verschillende materialen zoals gebakken klei, beton en keramiek. Moderne dakpannen bieden 
                  uitstekende duurzaamheid en zijn verkrijgbaar in talloze kleuren en vormen.
                </p>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">Soorten dakpannen:</h4>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li><strong>Gebakken dakpannen:</strong> Traditioneel en duurzaam, 50+ jaar levensduur</li>
                  <li><strong>Betonnen dakpannen:</strong> Kosteneffectief met goede isolatie-eigenschappen</li>
                  <li><strong>Keramische dakpannen:</strong> Premium kwaliteit met superieure kleurvastheid</li>
                  <li><strong>Geëngobeerde dakpannen:</strong> Extra beschermlaag tegen weersinvloeden</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Dakleien</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Dakleien bieden de meest premium uitstraling voor schuine daken. Natuurlijke leisteen 
                  is extreem duurzaam en weersbestendig. Moderne kunststof leien bieden vergelijkbare 
                  esthetiek met verbeterde eigenschappen en lagere kosten.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Rietdekking</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Voor monumentale panden en landelijke woningen blijft riet een populaire keuze. 
                  TBGS werkt samen met gespecialiseerde rietdekkers voor authentieke restauraties 
                  en nieuwbouw met traditionele uitstraling.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Bitumineuze dakbedekking</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Voor bijgebouwen en schuren is bitumineuze dakbedekking een kosteneffectieve oplossing. 
                  Moderne bitumen shingles combineren de voordelen van traditionele bitumen met 
                  verbeterde UV-bestendigheid en esthetiek.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Dakconstructie en onderdelen</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dakspanten en gordingen</h3>
                <p className="text-lg leading-relaxed mb-4">
                  De draagconstructie van een schuin dak bestaat uit dakspanten of een gordingconstructie. 
                  Deze moeten dimensioneel juist zijn berekend voor de te verwachten belastingen: wind, 
                  sneeuw en eigengewicht van de dakbedekking.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dakbeschot en onderdak</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Modern dakbeschot van OSB of multiplex vormt de basis voor de dakbedekking. Een 
                  hoogwaardig onderdak (bijvoorbeeld Tyvek of Delta) zorgt voor extra waterdichtheid 
                  en winddichtheid van de dakconstructie.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dakgoten en boeidelen</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Professionele waterafvoer via dakgoten is essentieel voor elk schuin dak. TBGS 
                  installeert duurzame aluminium, zink of koperen goten die perfect aansluiten 
                  op de architectuur van uw woning.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Isolatie van schuine daken</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dakisolatie tussen de spanten</h3>
                <p className="text-lg leading-relaxed mb-4">
                  De meest voorkomende isolatiemethode is het aanbrengen van isolatiemateriaal tussen 
                  de dakspanten. Glaswol, steenwol of PIR-platen zorgen voor uitstekende thermische 
                  isolatie en geluiddemping.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dakisolatie boven de spanten</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Voor nieuwe constructies of bij renovatie biedt isolatie boven de spanten optimale 
                  prestaties. Deze methode elimineert koudebruggen en maximaliseert de bruikbare 
                  ruimte onder het dak.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-800"><strong>TBGS Tip:</strong> Combineer verschillende isolatielagen 
                  voor optimale prestaties. Een Rc-waarde van minimaal 6,0 m²K/W is aanbevolen voor nieuwbouw.</p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Ventilatie van schuine daken</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Belang van dakventilatie</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Goede ventilatie voorkomt vochtproblemen, schimmelvorming en verlengt de levensduur 
                  van de dakconstructie. TBGS installeert professionele ventillatiesystemen die 
                  voldoen aan alle bouwregels.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ventilatiemethoden</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Nokventilatie:</strong> Afvoer van warme lucht via de nok</li>
                  <li><strong>Gevelventilatie:</strong> Aanvoer van frisse lucht via de gevel</li>
                  <li><strong>Dakramen:</strong> Natuurlijke ventilatie via openbare dakramen</li>
                  <li><strong>Mechanische ventilatie:</strong> Geforceerde ventilatie voor optimale luchtkwaliteit</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Onderhoud schuin dak</h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Jaarlijkse inspectie</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Controle van dakpannen op scheuren, barsten of verschuivingen</li>
                  <li>Inspectie van voegen en naden</li>
                  <li>Controle van dakgoten en regenpijpen</li>
                  <li>Beoordeling van schoorsteenwerk en dakdoorvoeren</li>
                  <li>Controle van zinkwerk en boeidelen</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Preventief onderhoud</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Regelmatige reiniging van dakgoten en controle van bevestigingen voorkomt 
                  grotere problemen. TBGS biedt onderhoudscontracten voor zorgeloos dakbeheer 
                  gedurende de gehele levensduur van uw dak.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-red-900 mb-3">Veiligheidsadvies</h3>
                  <p className="text-red-800">
                    Werk nooit alleen op een schuin dak en gebruik altijd professionele 
                    veiligheidsuitrusting. De hellingshoek en gladde dakpannen maken 
                    schuine daken bijzonder gevaarlijk voor onervaren personen.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Waarom kiezen voor TBGS?</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Traditie en innovatie</h3>
                    <p className="text-blue-800">
                      25+ jaar ervaring in traditionele dakdekking gecombineerd met moderne technieken.
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Gecertificeerde vakmannen</h3>
                    <p className="text-green-800">
                      Al onze dakdekkers zijn volledig gecertificeerd volgens VCA en CROW normen.
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-orange-900 mb-3">Uitgebreide garantie</h3>
                    <p className="text-orange-800">
                      Tot 20 jaar garantie op materiaal en 10 jaar op arbeid voor volledige zekerheid.
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-900 mb-3">Persoonlijke service</h3>
                    <p className="text-purple-800">
                      Van advies tot nazorg - wij begeleiden u door het gehele dakproject.
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
                Klaar voor uw nieuwe schuine dak?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Onze specialisten adviseren u graag over de beste dakoplossing voor uw woning. 
                Vraag nu een gratis offerte aan!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-white text-tbgs-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Gratis offerte Aanvragen
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