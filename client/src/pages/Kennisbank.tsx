import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface KennisbankItem {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  image: string;
  category: string;
}

const kennisbankItems: KennisbankItem[] = [
  {
    id: "regenpijp",
    title: "DE REGENPIJP",
    excerpt: "In Nederland valt er jaarlijks op 130 dagen van het jaar 1mm regen en in [...]",
    url: "/kennisbank/regenpijp-onderhoud-reparatie",
    image: "bg-gradient-to-br from-gray-600 to-gray-800",
    category: "Dakgoten"
  },
  {
    id: "dakgoot",
    title: "DE DAKGOOT",
    excerpt: "Het is misschien het laatste waar u aan denkt bij uw dak, maar het is [...]",
    url: "/kennisbank/dakgoot-onderhoud-reiniging",
    image: "bg-gradient-to-br from-slate-700 to-slate-900",
    category: "Dakgoten"
  },
  {
    id: "gevellekkage",
    title: "GEVELLEKKAGE",
    excerpt: "Gevellekkage is een veelvoorkomend probleem dat ernstige schade kan [...]",
    url: "/kennisbank/gevellekkage-oorzaken-oplossingen",
    image: "bg-gradient-to-br from-red-700 to-red-900",
    category: "Gevel"
  },
  {
    id: "dakbedekking-materialen",
    title: "DAKBEDEKKING MATERIALEN",
    excerpt: "De keuze van dakbedekking materialen bepaalt de levensduur en prestaties [...]",
    url: "/kennisbank/dakbedekking-materialen-kiezen",
    image: "bg-gradient-to-br from-blue-700 to-blue-900",
    category: "Dakwerken"
  },
  {
    id: "dakpannen-keus",
    title: "DAKPANNEN: WELKE KEUS IS ER?",
    excerpt: "Het kiezen van de juiste dakpannen is cruciaal voor de duurzaamheid [...]",
    url: "/kennisbank/dakpannen-soorten-kiezen",
    image: "bg-gradient-to-br from-amber-800 to-amber-900",
    category: "Dakwerken"
  },
  {
    id: "nokvorsten",
    title: "WAT ZIJN NOKVORSTEN",
    excerpt: "Nokvorsten zijn een essentieel onderdeel van uw dakconstructie en [...]",
    url: "/kennisbank/nokvorsten-functie-onderhoud",
    image: "bg-gradient-to-br from-sky-700 to-sky-900",
    category: "Dakwerken"
  },
  {
    id: "dakkapel-lekkage",
    title: "LEKKAGE BIJ DAKKAPELLEN",
    excerpt: "Dakkapellen zijn gevoelige punten waar lekkage vaak voorkomt [...]",
    url: "/kennisbank/dakkapel-lekkage-voorkomen",
    image: "bg-gradient-to-br from-orange-700 to-orange-900",
    category: "Dakkapellen"
  },
  {
    id: "dakkapel-renovatie",
    title: "DAKKAPEL RENOVATIE",
    excerpt: "Een dakkapel renovatie verhoogt niet alleen de waarde van uw woning [...]",
    url: "/kennisbank/dakkapel-renovatie-tips",
    image: "bg-gradient-to-br from-green-700 to-green-900",
    category: "Dakkapellen"
  },
  {
    id: "patio-dak",
    title: "PATIO DAK",
    excerpt: "Een patio dak biedt bescherming en comfort voor uw buitenruimte [...]",
    url: "/kennisbank/patio-dak-mogelijkheden",
    image: "bg-gradient-to-br from-teal-700 to-teal-900",
    category: "Overkappingen"
  },
  {
    id: "terras-dak",
    title: "TERRAS DAK",
    excerpt: "Met een terras dak geniet u het hele jaar door van uw terras [...]",
    url: "/kennisbank/terras-dak-voordelen",
    image: "bg-gradient-to-br from-indigo-700 to-indigo-900",
    category: "Overkappingen"
  },
  {
    id: "schuindak",
    title: "SCHUIN DAK",
    excerpt: "Schuine daken zijn de meest voorkomende dakvorm in Nederland [...]",
    url: "/kennisbank/schuindak-onderhoud-renovatie",
    image: "bg-gradient-to-br from-red-800 to-red-900",
    category: "Dakvormen"
  },
  {
    id: "plat-dak",
    title: "PLAT DAK",
    excerpt: "Platte daken vereisen specifieke expertise en onderhoud [...]",
    url: "/kennisbank/plat-dak-onderhoud-tips",
    image: "bg-gradient-to-br from-gray-700 to-gray-900",
    category: "Dakvormen"
  },
  {
    id: "vlak-dak",
    title: "VLAK DAK",
    excerpt: "Vlakke daken bieden unieke mogelijkheden maar vereisen specialistische kennis [...]",
    url: "/kennisbank/vlak-dak-systemen",
    image: "bg-gradient-to-br from-slate-800 to-slate-900",
    category: "Dakvormen"
  },
  {
    id: "glasisolatie",
    title: "GLASISOLATIE",
    excerpt: "Glasisolatie is een moderne oplossing voor energie-efficiëntie [...]",
    url: "/kennisbank/glasisolatie-voordelen",
    image: "bg-gradient-to-br from-emerald-700 to-emerald-900",
    category: "Isolatie"
  },
  {
    id: "dakkapel-isolatie",
    title: "DAKKAPEL ISOLATIE",
    excerpt: "Dakkapel isolatie voorkomt warmteverlies en verhoogt het comfort [...]",
    url: "/kennisbank/dakkapel-isolatie-tips",
    image: "bg-gradient-to-br from-yellow-800 to-yellow-900",
    category: "Isolatie"
  },
  {
    id: "vloerisolatie",
    title: "VLOERISOLATIE",
    excerpt: "Vloerisolatie is essentieel voor een energiezuinige woning [...]",
    url: "/kennisbank/vloerisolatie-methoden",
    image: "bg-gradient-to-br from-purple-700 to-purple-900",
    category: "Isolatie"
  },
  {
    id: "spouwmuurisolatie",
    title: "SPOUWMUURISOLATIE",
    excerpt: "Spouwmuurisolatie is een van de meest effectieve isolatiemethoden [...]",
    url: "/kennisbank/spouwmuurisolatie-voordelen",
    image: "bg-gradient-to-br from-stone-700 to-stone-900",
    category: "Isolatie"
  },
  {
    id: "tritoflex",
    title: "TRITOFLEX WATERDICHT, BRANDVRIJ EN DUURZAAM",
    excerpt: "Tritoflex is een innovatief systeem voor waterdichte en duurzame oplossingen [...]",
    url: "/kennisbank/tritoflex-systeem-voordelen",
    image: "bg-gradient-to-br from-cyan-700 to-cyan-900",
    category: "Materialen"
  },
  {
    id: "epdm-dakbedekking",
    title: "EPDM DAKBEDEKKING",
    excerpt: "EPDM dakbedekking staat bekend om zijn duurzaamheid en flexibiliteit [...]",
    url: "/kennisbank/epdm-dakbedekking-eigenschappen",
    image: "bg-gradient-to-br from-zinc-700 to-zinc-900",
    category: "Materialen"
  },
  {
    id: "bitumen-dakbedekking",
    title: "WAT IS BITUMEN DAKBEDEKKING",
    excerpt: "Bitumen dakbedekking is een veelgebruikte oplossing voor platte daken [...]",
    url: "/kennisbank/bitumen-dakbedekking-info",
    image: "bg-gradient-to-br from-neutral-700 to-neutral-900",
    category: "Materialen"
  }
];

export default function Kennisbank() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Kennisbank</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alle begrippen voor u op een rij. Ontdek alles wat u moet weten over dakwerken, 
              isolatie, onderhoud en meer in onze uitgebreide kennisbank.
            </p>
          </div>
        </div>
      </div>

      {/* Knowledge Base Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kennisbankItems.map((item) => (
            <Link key={item.id} href={item.url}>
              <div className="group cursor-pointer">
                <div className={`relative h-64 rounded-lg overflow-hidden ${item.image} flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105`}>
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="relative z-10 text-center p-6">
                    <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <button className="inline-flex items-center px-4 py-2 border border-white text-sm font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-all duration-300">
                      READ MORE
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-tbgs-navy text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Heeft u nog vragen?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Onze specialisten staan klaar om u te helpen met vakkundig advies en persoonlijke begeleiding.
          </p>
          <Link href="/contact">
            <button className="bg-white text-tbgs-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Neem Contact Op
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}