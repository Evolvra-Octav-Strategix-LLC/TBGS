import { MapPin, Navigation, Building2 } from "lucide-react";

interface LocalLandmarkReferencesProps {
  city: string;
  country: "nl" | "be";
  region: string;
  landmarks: string[];
  nearbyProjects?: {
    location: string;
    service: string;
    description: string;
  }[];
}

export default function LocalLandmarkReferences({ 
  city, 
  country, 
  region, 
  landmarks,
  nearbyProjects = []
}: LocalLandmarkReferencesProps) {
  
  // Generate location-specific content based on landmarks
  const getLocationContent = () => {
    if (country === "nl") {
      return {
        title: `Bekende Locaties in ${city}`,
        subtitle: `Onze specialisten kennen alle wijken en gebieden in ${city}`,
        description: `TBGS heeft uitgebreide ervaring met werkzaamheden rondom bekende plekken in ${city}. Deze lokale kennis zorgt voor snellere planning en efficiëntere uitvoering.`
      };
    } else {
      return {
        title: `Bekende Locaties in ${city}`,
        subtitle: `Onze Belgische specialisten kennen ${city} en omgeving`,
        description: `TBGS België heeft ervaring met projecten rondom belangrijke locaties in ${city}, Limburg. Onze lokale expertise zorgt voor betere service en snellere responstijden.`
      };
    }
  };

  const content = getLocationContent();

  if (landmarks.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              {content.title}
            </h2>
            <p className="text-lg text-slate-600 mb-2">
              {content.subtitle}
            </p>
            <p className="text-slate-600 max-w-3xl mx-auto">
              {content.description}
            </p>
          </div>

          {/* Landmark Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {landmarks.map((landmark, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors">
                <div className="flex items-center mb-3">
                  <MapPin className="h-5 w-5 text-tbgs-blue mr-3" />
                  <h3 className="font-semibold text-slate-900">{landmark}</h3>
                </div>
                <p className="text-slate-600 text-sm">
                  Ervaring met werkzaamheden in deze omgeving van {city}
                </p>
              </div>
            ))}
          </div>

          {/* Nearby Projects Section */}
          {nearbyProjects.length > 0 && (
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 text-white">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  Recente Projecten in {city}
                </h3>
                <p className="text-slate-300">
                  Voorbeelden van onze werkzaamheden in de omgeving
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nearbyProjects.map((project, index) => (
                  <div key={index} className="bg-white bg-opacity-10 rounded-xl p-6">
                    <div className="flex items-center mb-3">
                      <Building2 className="h-5 w-5 text-blue-400 mr-3" />
                      <h4 className="font-semibold text-white">{project.location}</h4>
                    </div>
                    <div className="mb-2">
                      <span className="bg-blue-500 bg-opacity-30 text-blue-200 px-2 py-1 rounded-full text-xs">
                        {project.service}
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Local SEO Boost */}
          <div className="mt-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-8 text-white text-center">
            <h3 className="text-xl font-bold mb-4">
              <Navigation className="h-6 w-6 inline mr-2" />
              Perfecte Lokale Service in {city}
            </h3>
            <p className="text-green-100 mb-4">
              Door onze jarenlange ervaring in {city} en {region} weten we precies hoe we uw 
              project het beste kunnen aanpakken. Van historische gebouwen tot moderne nieuwbouw.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                Lokale Kennis
              </span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                Snelle Service
              </span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                {region} Expert
              </span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                25km Bereik
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}