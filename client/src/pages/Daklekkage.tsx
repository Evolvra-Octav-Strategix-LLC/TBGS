import SEOHead from "@/lib/seo";
import { Link } from "wouter";
import Header from "@/components/Header";
import SpecialistNavigationBar from "@/components/SpecialistNavigationBar";
import tdsLogo from "@assets/TDS 545x642 (1)_1754935666048.png";

interface DaklekkageProps {
  onOpenContactModal: () => void;
}

export default function Daklekkage({ onOpenContactModal }: DaklekkageProps) {
  return (
    <>
      <SEOHead 
        title="Daklekkage Reparatie 2025 | 24/7 Spoedservice Dakdekker | Nederland & België"
        description="🚨 Daklekkage spoedservice 2025! ⚡ 24/7 dakdekker voor snelle daklekkage reparatie in Nederland & België. ✅ Thermografisch onderzoek, directe reparatie. Bel nu!"
        url="https://tbgs.nl/daklekkage"
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
                <div className="bg-red-600 text-white px-4 py-2 rounded-full inline-block">
                  <i className="fas fa-exclamation-triangle mr-2"></i>
                  24/7 Spoedservice Beschikbaar
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Daklekkage Reparatie
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  <strong>Daklekkage spoedservice</strong> door gecertificeerde <strong>dakdekkers</strong> in heel Nederland en België. 
                  Snelle lokalisatie en permanente reparatie van lekkende daken.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors flex items-center justify-center"
                >
                  <i className="fas fa-tools mr-3"></i>
                  Direct Daklekkage Reparatie
                </button>
                <a 
                  href="tel:+31402026744"
                  className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center"
                >
                  <i className="fas fa-phone mr-3"></i>
                  24/7 Spoednummer
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">24/7</div>
                  <div className="text-sm text-gray-600">Spoedservice</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">500+</div>
                  <div className="text-sm text-gray-600">Daklekkages opgelost</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">100%</div>
                  <div className="text-sm text-gray-600">Garantie</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Dakdekker repareert daklekkage met professionele gereedschappen" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <i className="fas fa-tint text-white text-xl"></i>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Thermografisch onderzoek</div>
                    <div className="text-sm text-gray-600">Snelle lekkage detectie</div>
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
            
            {/* Daklekkage, wat nu? */}
            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Daklekkage, wat nu?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Een dak moet beschermen tegen weersinvloeden, en wanneer dat dak een <strong>lekkage</strong> vertoont is dat buitengewoon vervelend. 
                Maar dat geldt ook voor <strong>lekkage in spouw</strong> of <strong>dakkapel</strong>. Vervelend, want reparatie en <strong>dakwerken</strong> moet snel gebeuren. 
                Een <strong>daklekkage</strong> geeft een boel gevolg schade. Je wilt dan dat er vrijwel direct iemand komt kijken die concreet kan vertellen wat er nodig is en uitlegt waarom. 
                Bovendien is het fijn om vooraf een kostenplaatje te krijgen. Want een <strong>lekkage</strong> is nooit begroot of voorzien immers, en dus altijd een onverwachte uitgave.
              </p>
            </div>

            {/* Soorten daklekkages */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Soorten Daklekkages</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Daklekkage", icon: "fas fa-home", description: "Lekkage in dakbedekking of dakconstructie" },
                  { title: "Gevellekkage", icon: "fas fa-building", description: "Lekkage in gevels en buitenmuren" },
                  { title: "Gesprongen leidingen", icon: "fas fa-wrench", description: "Gebroken water- of cv-leidingen" },
                  { title: "Lekkende leidingen", icon: "fas fa-tint", description: "Slijtage aan leidingsystemen" },
                  { title: "Lekkende afvoer", icon: "fas fa-shower", description: "Verstopte of beschadigde afvoeren" },
                  { title: "Lekkende radiatoren", icon: "fas fa-thermometer-half", description: "CV-systeem lekkages" },
                  { title: "Vochtige kelder", icon: "fas fa-home", description: "Grondwater infiltratie" },
                  { title: "Lekdetectie", icon: "fas fa-search", description: "Professionele lekkage opsporing" }
                ].map((lekkage, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl border hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                        <i className={`${lekkage.icon} text-white`}></i>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{lekkage.title}</h3>
                    </div>
                    <p className="text-gray-600">{lekkage.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gevolgen van lekkage */}
            <div className="bg-red-50 p-8 rounded-2xl mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Gevolgen van Daklekkage</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Daklekkage</strong> ontdekt u vaak pas wanneer het al enige tijd schade aanricht. Vochtplekken in het dak, de muur of dakkapel bijvoorbeeld. 
                Of erger, vocht dat in de spullen eronder is gelopen. Mogelijk is de <strong>dakisolatie</strong> vochtig geworden. 
                Dit wil je zo snel mogelijk verholpen hebben. Waarbij niet alleen de <strong>lekkage gerepareerd</strong> moet worden maar er ook gekeken wordt naar gevolgschade en een adequate manier om die te verhelpen.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <i className="fas fa-exclamation-triangle text-red-600 mr-3"></i>
                    Directe Schade
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Vochtplekken op plafonds en muren</li>
                    <li>• Beschadiging van meubilair en bezittingen</li>
                    <li>• Vochtige dakisolatie verliest werking</li>
                    <li>• Elektrische installaties in gevaar</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <i className="fas fa-clock text-red-600 mr-3"></i>
                    Langetermijn Gevolgen
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Schimmelvorming en gezondheidsproblemen</li>
                    <li>• Structurele schade aan dakconstructie</li>
                    <li>• Verhoogde energiekosten door vocht</li>
                    <li>• Waardedaling van uw woning</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Vakkundige aanpak */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Daklekkage Moet Vakkundig Verholpen Worden</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Er zijn veel soorten <strong>daklekkage</strong>, die ieder op zichzelf om een eigen vakkundige aanpak vragen. 
                <strong>Lekkage</strong> omdat pannen verschoven zijn, een slijtage plek in een plat dak of een rotte plek in de dakkapel en ga zo maar door. 
                <strong>TBGS B.V.</strong> is thuis in al dit specifiek vakwerk. En in die zin meer dan zomaar een <strong>dakdekker</strong>. 
                U krijgt vooraf een duidelijke offerte, en de monteur inspecteert het dak direct op meer risico plaatsen. 
                In overleg kan dit dan preventief verholpen worden.
              </p>

              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Heeft u daklekkage of wilt u een preventieve inspectie?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Onze gecertificeerde dakdekkers staan 24/7 voor u klaar. Snelle respons, vakkundige reparatie en transparante prijzen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={onOpenContactModal}
                    className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    <i className="fas fa-calculator mr-3"></i>
                    Gratis Daklekkage Offerte
                  </button>
                  <a 
                    href="tel:+31402026744"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-colors flex items-center justify-center"
                  >
                    <i className="fas fa-phone mr-3"></i>
                    24/7 Spoednummer
                  </a>
                </div>
              </div>
            </div>

            {/* Werkproces */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Ons Daklekkage Reparatie Proces</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Spoedmelding</h3>
                  <p className="text-gray-600">
                    Direct contact opnemen via telefoon of website. 
                    Binnen 2 uur ter plaatse voor spoedgevallen.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Lekdetectie</h3>
                  <p className="text-gray-600">
                    Thermografisch onderzoek en visuele inspectie 
                    om de exacte bron van de lekkage te lokaliseren.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Noodreparatie</h3>
                  <p className="text-gray-600">
                    Directe noodreparatie om verdere waterschade 
                    te voorkomen. Professionele afdichting.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Definitieve Reparatie</h3>
                  <p className="text-gray-600">
                    Permanente reparatie met kwalitatieve materialen 
                    en volledige garantie op het uitgevoerde werk.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-gray-50 p-8 rounded-2xl mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Daklekkage Service Gebieden</h2>
              <p className="text-lg text-gray-700 mb-6">
                Onze <strong>dakdekkers</strong> zijn actief in heel Nederland en België voor <strong>daklekkage reparatie</strong> en <strong>dakwerken</strong>:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <i className="fas fa-map-marker-alt text-red-600 mr-3"></i>
                    Nederland
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-gray-700">
                    <div>• Eindhoven daklekkage</div>
                    <div>• Amsterdam dakdekker</div>
                    <div>• Rotterdam dakwerken</div>
                    <div>• Den Haag lekkage</div>
                    <div>• Utrecht dakdekker</div>
                    <div>• Tilburg daklekkage</div>
                    <div>• Breda dakwerken</div>
                    <div>• 's-Hertogenbosch</div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <i className="fas fa-map-marker-alt text-red-600 mr-3"></i>
                    België
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-gray-700">
                    <div>• Antwerpen daklekkage</div>
                    <div>• Brussel dakdekker</div>
                    <div>• Gent dakwerken</div>
                    <div>• Leuven lekkage</div>
                    <div>• Mechelen dakdekker</div>
                    <div>• Turnhout daklekkage</div>
                    <div>• Hasselt dakwerken</div>
                    <div>• Genk dakdekker</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Waarom Kiezen voor TBGS Daklekkage Service?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-clock text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Snelle Service</h3>
                  <p className="text-gray-600">
                    24/7 spoedservice voor daklekkage. 
                    Binnen 2 uur ter plaatse in heel Nederland en België.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-certificate text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Gecertificeerde Dakdekkers</h3>
                  <p className="text-gray-600">
                    Alle werkzaamheden door vakbekwame en 
                    gecertificeerde dakspecialisten met jarenlange ervaring.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-shield-alt text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Volledige Garantie</h3>
                  <p className="text-gray-600">
                    Uitgebreide garantie op alle daklekkage reparaties 
                    en dakwerken. Kwaliteit staat voorop.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Veelgestelde Vragen over Daklekkage</h2>
              <div className="space-y-6">
                {[
                  {
                    question: "Hoe snel kunnen jullie bij daklekkage ter plaatse zijn?",
                    answer: "Bij spoedgevallen zijn wij binnen 2 uur ter plaatse in heel Nederland en België. Voor reguliere afspraken plannen wij binnen 24 uur."
                  },
                  {
                    question: "Wat kost daklekkage reparatie?",
                    answer: "De kosten variëren per situatie. Wij bieden altijd een gratis inspectie en transparante offerte vooraf. Kleine reparaties vanaf €150, grotere dakwerken op maat."
                  },
                  {
                    question: "Hoe voorkom ik daklekkage in de toekomst?",
                    answer: "Regelmatige dakgoot reiniging, jaarlijkse dakinspectie en tijdige vervanging van dakpannen helpen lekkages voorkomen. Wij adviseren graag over preventief onderhoud."
                  },
                  {
                    question: "Welke garantie krijg ik op daklekkage reparatie?",
                    answer: "Alle daklekkage reparaties krijgen minimaal 2 jaar garantie. Bij volledige dakrenovatie bieden wij tot 10 jaar garantie op materiaal en vakmanschap."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl border">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Daklekkage? Wij Helpen Direct!
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Neem direct contact op voor spoedservice daklekkage reparatie. 
              Onze dakdekkers zijn 24/7 beschikbaar voor al uw dakwerken noden.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onOpenContactModal}
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <i className="fas fa-envelope mr-3"></i>
                Gratis Daklekkage Offerte
              </button>
              <a 
                href="tel:+31402026744"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-colors flex items-center justify-center"
              >
                <i className="fas fa-phone mr-3"></i>
                24/7 Spoednummer
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}