import { Link } from "wouter";
import tssLogo from "@assets/TSS 545x642 (1)_1755096878001.png";
import tdsLogo from "@assets/TDS 545x642 (1)_1755096847747.png";
import tosLogo from "@assets/TOS 545x642 (1)_1755096847747.png";
import tbsLogo from "@assets/TBS 545x642 (1)_1755096847747.png";

interface SpecialistCardsProps {
  currentSpecialist?: "TSS" | "TDS" | "TOS" | "TBS";
  showTitle?: boolean;
  compact?: boolean;
}

export default function SpecialistCards({ currentSpecialist, showTitle = true, compact = false }: SpecialistCardsProps) {
  return (
    <section className={`${compact ? 'py-8' : 'py-12 lg:py-24'} bg-white relative`}>
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-12 lg:mb-20">
            <div className="inline-flex items-center space-x-2 bg-slate-100 rounded-full px-6 py-2 text-sm font-medium text-slate-600 mb-6">
              <i className="fas fa-tools"></i>
              <span>Onze specialiteiten</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Onze <span className="bg-gradient-to-r from-tbgs-navy to-blue-600 bg-clip-text text-transparent">specialiteiten</span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              Van <strong>dak tot fundering</strong>, van <strong>schoorsteen tot gevelbekleding</strong>. TBGS biedt complete totaaloplossingen voor al uw bouwprojecten met gespecialiseerde teams per vakgebied.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* TSS - Totaal Schoorsteen Specialist */}
          <div className={`group bg-white border-2 ${currentSpecialist === 'TSS' ? 'border-tbgs-blue shadow-lg scale-105' : 'border-slate-200'} rounded-3xl p-8 hover:shadow-2xl hover:border-tbgs-blue transition-all duration-500 hover:-translate-y-2 h-full flex flex-col`}>
            <div className="text-center space-y-4 flex-1 flex flex-col justify-between">
              <div className="relative">
                <div className={`w-24 h-24 bg-gradient-to-br ${currentSpecialist === 'TSS' ? 'from-tbgs-blue to-blue-600' : 'from-blue-50 to-blue-100'} rounded-2xl flex items-center justify-center mx-auto group-hover:from-tbgs-blue group-hover:to-blue-600 transition-all duration-500 shadow-lg`}>
                  <img src={tssLogo} alt="TSS Logo" className={`w-16 h-16 object-contain ${currentSpecialist === 'TSS' ? 'opacity-100' : 'opacity-88'} group-hover:opacity-100 transition-all duration-500`} />
                </div>
                <div className={`absolute -top-2 -right-2 w-6 h-6 bg-tbgs-blue rounded-full flex items-center justify-center ${currentSpecialist === 'TSS' ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-all duration-300`}>
                  <i className="fas fa-arrow-right text-white text-xs"></i>
                </div>
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${currentSpecialist === 'TSS' ? 'text-tbgs-blue' : 'text-slate-900'} mb-3 group-hover:text-tbgs-blue transition-colors leading-tight`}>
                  <Link href="/totaal-schoorsteen-specialist" className="hover:underline block">
                    <div className="mb-1">Totaal</div>
                    <div className="mb-1">Schoorsteen</div>
                    <div>Specialist</div>
                  </Link>
                </h3>
                <div className="text-slate-600 text-center space-y-1">
                  <div><Link href="/nl/eindhoven/schoorsteenrenovatie" className="text-slate-600 hover:text-tbgs-blue hover:underline font-medium transition-colors">Schoorsteenrenovatie</Link></div>
                  <div><Link href="/nl/eindhoven/schoorsteenreparatie" className="text-slate-600 hover:text-tbgs-blue hover:underline font-medium transition-colors">Schoorsteenreparatie</Link></div>
                  <div><Link href="/nl/eindhoven/schoorsteenreiniging" className="text-slate-600 hover:text-tbgs-blue hover:underline font-medium transition-colors">Schoorsteenreiniging</Link></div>
                  <div><Link href="/nl/eindhoven/schoorsteenonderhoud" className="text-slate-600 hover:text-tbgs-blue hover:underline font-medium transition-colors">Schoorsteenonderhoud</Link></div>
                  <div className="text-sm text-slate-500 mt-2">Door <strong>ervaren specialisten</strong>.</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Link href="/totaal-schoorsteen-specialist" className="text-tbgs-blue font-bold opacity-70 hover:opacity-100 transition-all duration-300 hover:underline">
                  Meer informatie <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* TDS - Totaal Dak Specialist */}
          <div className={`group bg-white border-2 ${currentSpecialist === 'TDS' ? 'border-tbgs-red shadow-lg scale-105' : 'border-slate-200'} rounded-3xl p-8 hover:shadow-2xl hover:border-tbgs-red transition-all duration-500 hover:-translate-y-2 h-full flex flex-col`}>
            <div className="text-center space-y-4 flex-1 flex flex-col justify-between">
              <div className="relative">
                <div className={`w-24 h-24 bg-gradient-to-br ${currentSpecialist === 'TDS' ? 'from-tbgs-red to-red-600' : 'from-red-50 to-red-100'} rounded-2xl flex items-center justify-center mx-auto group-hover:from-tbgs-red group-hover:to-red-600 transition-all duration-500 shadow-lg`}>
                  <img src={tdsLogo} alt="TDS Logo" className={`w-16 h-16 object-contain ${currentSpecialist === 'TDS' ? 'opacity-100' : 'opacity-88'} group-hover:opacity-100 transition-all duration-500`} />
                </div>
                <div className={`absolute -top-2 -right-2 w-6 h-6 bg-tbgs-red rounded-full flex items-center justify-center ${currentSpecialist === 'TDS' ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-all duration-300`}>
                  <i className="fas fa-arrow-right text-white text-xs"></i>
                </div>
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${currentSpecialist === 'TDS' ? 'text-tbgs-red' : 'text-slate-900'} mb-3 group-hover:text-tbgs-red transition-colors leading-tight`}>
                  <Link href="/totaal-dak-specialist" className="hover:underline block">
                    <div className="mb-1">Totaal</div>
                    <div className="mb-1">Dak</div>
                    <div>Specialist</div>
                  </Link>
                </h3>
                <div className="text-slate-600 text-center space-y-1">
                  <div><Link href="/nl/eindhoven/daklekkage" className="text-slate-600 hover:text-tbgs-red hover:underline font-medium transition-colors">Daklekkage</Link></div>
                  <div><Link href="/nl/eindhoven/dakisolatie" className="text-slate-600 hover:text-tbgs-red hover:underline font-medium transition-colors">Dakisolatie</Link></div>
                  <div><Link href="/nl/eindhoven/dakgoten" className="text-slate-600 hover:text-tbgs-red hover:underline font-medium transition-colors">Dakgoten</Link></div>
                  <div><Link href="/nl/eindhoven/dakreparatie" className="text-slate-600 hover:text-tbgs-red hover:underline font-medium transition-colors">Dakreparatie</Link></div>
                  <div className="text-sm text-slate-500 mt-2">Door <strong>ervaren specialisten</strong>.</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Link href="/totaal-dak-specialist" className="text-tbgs-red font-bold opacity-70 hover:opacity-100 transition-all duration-300 hover:underline">
                  Meer informatie <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* TOS - Totaal Onderhoud Specialist */}
          <div className={`group bg-white border-2 ${currentSpecialist === 'TOS' ? 'border-tbgs-green shadow-lg scale-105' : 'border-slate-200'} rounded-3xl p-8 hover:shadow-2xl hover:border-tbgs-green transition-all duration-500 hover:-translate-y-2 h-full flex flex-col`}>
            <div className="text-center space-y-4 flex-1 flex flex-col justify-between">
              <div className="relative">
                <div className={`w-24 h-24 bg-gradient-to-br ${currentSpecialist === 'TOS' ? 'from-tbgs-green to-green-600' : 'from-green-50 to-green-100'} rounded-2xl flex items-center justify-center mx-auto group-hover:from-tbgs-green group-hover:to-green-600 transition-all duration-500 shadow-lg`}>
                  <img src={tosLogo} alt="TOS Logo" className={`w-16 h-16 object-contain ${currentSpecialist === 'TOS' ? 'opacity-100' : 'opacity-88'} group-hover:opacity-100 transition-all duration-500`} />
                </div>
                <div className={`absolute -top-2 -right-2 w-6 h-6 bg-tbgs-green rounded-full flex items-center justify-center ${currentSpecialist === 'TOS' ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-all duration-300`}>
                  <i className="fas fa-arrow-right text-white text-xs"></i>
                </div>
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${currentSpecialist === 'TOS' ? 'text-tbgs-green' : 'text-slate-900'} mb-3 group-hover:text-tbgs-green transition-colors leading-tight`}>
                  <Link href="/totaal-onderhoud-specialist" className="hover:underline block">
                    <div className="mb-1">Totaal</div>
                    <div className="mb-1">Onderhoud</div>
                    <div>Specialist</div>
                  </Link>
                </h3>
                <div className="text-slate-600 text-center space-y-1">
                  <div><Link href="/nl/eindhoven/gevelreiniging" className="text-slate-600 hover:text-tbgs-green hover:underline font-medium transition-colors">Gevelreiniging</Link></div>
                  <div><Link href="/nl/eindhoven/schilderwerk" className="text-slate-600 hover:text-tbgs-green hover:underline font-medium transition-colors">Schilderwerk</Link></div>
                  <div><Link href="/nl/eindhoven/onderhoud" className="text-slate-600 hover:text-tbgs-green hover:underline font-medium transition-colors">Preventief onderhoud</Link></div>
                  <div><Link href="/nl/eindhoven/reparaties" className="text-slate-600 hover:text-tbgs-green hover:underline font-medium transition-colors">Algemene reparaties</Link></div>
                  <div className="text-sm text-slate-500 mt-2">Door <strong>ervaren specialisten</strong>.</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Link href="/totaal-onderhoud-specialist" className="text-tbgs-green font-bold opacity-70 hover:opacity-100 transition-all duration-300 hover:underline">
                  Meer informatie <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* TBS - Totaal Bouw Specialist */}
          <div className={`group bg-white border-2 ${currentSpecialist === 'TBS' ? 'border-tbgs-orange shadow-lg scale-105' : 'border-slate-200'} rounded-3xl p-8 hover:shadow-2xl hover:border-tbgs-orange transition-all duration-500 hover:-translate-y-2 h-full flex flex-col`}>
            <div className="text-center space-y-4 flex-1 flex flex-col justify-between">
              <div className="relative">
                <div className={`w-24 h-24 bg-gradient-to-br ${currentSpecialist === 'TBS' ? 'from-tbgs-orange to-orange-600' : 'from-orange-50 to-orange-100'} rounded-2xl flex items-center justify-center mx-auto group-hover:from-tbgs-orange group-hover:to-orange-600 transition-all duration-500 shadow-lg`}>
                  <img src={tbsLogo} alt="TBS Logo" className={`w-16 h-16 object-contain ${currentSpecialist === 'TBS' ? 'opacity-100' : 'opacity-88'} group-hover:opacity-100 transition-all duration-500`} />
                </div>
                <div className={`absolute -top-2 -right-2 w-6 h-6 bg-tbgs-orange rounded-full flex items-center justify-center ${currentSpecialist === 'TBS' ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-all duration-300`}>
                  <i className="fas fa-arrow-right text-white text-xs"></i>
                </div>
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${currentSpecialist === 'TBS' ? 'text-tbgs-orange' : 'text-slate-900'} mb-3 group-hover:text-tbgs-orange transition-colors leading-tight`}>
                  <Link href="/totaal-bouw-specialist" className="hover:underline block">
                    <div className="mb-1">Totaal</div>
                    <div className="mb-1">Bouw</div>
                    <div>Specialist</div>
                  </Link>
                </h3>
                <div className="text-slate-600 text-center space-y-1">
                  <div><Link href="/nl/eindhoven/verbouwing" className="text-slate-600 hover:text-tbgs-orange hover:underline font-medium transition-colors">Verbouwingen</Link></div>
                  <div><Link href="/nl/eindhoven/aanbouw" className="text-slate-600 hover:text-tbgs-orange hover:underline font-medium transition-colors">Aanbouw</Link></div>
                  <div><Link href="/nl/eindhoven/badkamerrenovatie" className="text-slate-600 hover:text-tbgs-orange hover:underline font-medium transition-colors">Badkamerrenovatie</Link></div>
                  <div><Link href="/nl/eindhoven/keukenrenovatie" className="text-slate-600 hover:text-tbgs-orange hover:underline font-medium transition-colors">Keukenrenovatie</Link></div>
                  <div className="text-sm text-slate-500 mt-2">Door <strong>ervaren specialisten</strong>.</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Link href="/totaal-bouw-specialist" className="text-tbgs-orange font-bold opacity-70 hover:opacity-100 transition-all duration-300 hover:underline">
                  Meer informatie <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}