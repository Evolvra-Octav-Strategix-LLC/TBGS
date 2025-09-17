import SEOHead from "@/lib/seo";
import LocationAreasOnly from "@/components/LocationAreasOnly";
import PartnerSlider from "@/components/PartnerSlider";
import Header from "@/components/Header";
import SpecialistNavigationBar from "@/components/SpecialistNavigationBar";
import { Clock, Euro, Shield, TrendingUp, Star, Check, Calendar, MessageCircle, Rocket, Cog, Phone } from "lucide-react";

interface ZorgeloosWonenProps {
  onOpenContactModal: () => void;
}

export default function ZorgeloosWonen({ onOpenContactModal }: ZorgeloosWonenProps) {
  const subscriptionPackages = [
    {
      name: "Basis Zorgeloos",
      description: "Voor starters die preventief onderhoud willen",
      priceFrom: "€149",
      priceUnit: "per maand",
      features: [
        "Jaarlijkse dakinspectie",
        "Dakgoot reiniging (1x per jaar)",
        "Kleine reparaties inbegrepen",
        "Prioriteit bij spoedreparaties",
        "WhatsApp support"
      ],
      buttonText: "Basis Abonnement",
      color: "bg-tbgs-green",
      popular: false
    },
    {
      name: "Comfort Zorgeloos", 
      description: "Complete zorg voor uw woning",
      priceFrom: "€249",
      priceUnit: "per maand",
      features: [
        "Alles van Basis pakket",
        "Dakgoot reiniging (2x per jaar)",
        "Dakkapel onderhoud",
        "Gevelreiniging (1x per jaar)",
        "Preventief schilderwerk",
        "24/7 spoeddienst",
        "Jaarlijks onderhoudsrapport"
      ],
      buttonText: "Comfort Abonnement",
      color: "bg-tbgs-green",
      popular: true
    },
    {
      name: "Premium Zorgeloos",
      description: "Totale ontzorging van uw eigendom",
      priceFrom: "€399",
      priceUnit: "per maand",
      features: [
        "Alles van Comfort pakket",
        "Maandelijkse controles",
        "Volledige buitenschildering",
        "Kozijn onderhoud",
        "Tuinschuur/garage onderhoud",
        "Persoonlijke onderhoudsmanager",
        "10% korting op extra werkzaamheden",
        "Waardeconservatie garantie"
      ],
      buttonText: "Premium Abonnement",
      color: "bg-tbgs-green",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Tijd Besparen",
      description: "Geen gedoe met het vinden van specialisten. Wij regelen alles voor u."
    },
    {
      icon: Euro, 
      title: "Geld Besparen",
      description: "Preventief onderhoud voorkomt kostbare reparaties en behoudt waarde."
    },
    {
      icon: Shield,
      title: "Zorgeloos Leven",
      description: "Altijd een specialist binnen handbereik. Geen zorgen meer over onderhoud."
    },
    {
      icon: TrendingUp,
      title: "Waarde Behouden",
      description: "Uw woning blijft in perfecte staat en behoudt haar waarde."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Zorgeloos Wonen - Onderhoudsabonnementen | TBGS BV"
        description="Zorgeloos wonen met TBGS onderhoudsabonnementen. Preventief onderhoud, dakgoot reiniging, dakinspectie en volledige ontzorging voor uw woning."
        url="https://tbgs.nl/zorgeloos-wonen"
      />

      <SpecialistNavigationBar />
      <Header specialist="TOS" onOpenContactModal={onOpenContactModal} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Zorgeloos Wonen
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
              Complete ontzorging voor uw woning. Preventief onderhoud, reguliere controles 
              en acute reparaties - alles in één abonnement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onOpenContactModal}
                className="bg-tbgs-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors flex items-center justify-center"
                data-testid="button-subscription-quote"
              >
                <Calendar className="mr-3 h-5 w-5" />
                Abonnement Aanvragen
              </button>
              <a 
                href="https://wa.me/31614595142?text=Hallo%20Team%20TBGS%2C%20ik%20wil%20graag%20informatie%20over%20zorgeloos%20wonen%20abonnementen"
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-tbgs-green text-tbgs-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-tbgs-green hover:text-white transition-colors flex items-center justify-center"
                data-testid="link-whatsapp-subscription"
              >
                <MessageCircle className="mr-3 h-5 w-5" />
                WhatsApp Direct
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Waarom Zorgeloos Wonen?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uw woning verdient de beste zorg. Met onze abonnementen heeft u nooit meer zorgen over onderhoud.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <benefit.icon className="h-8 w-8 text-tbgs-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kies Uw Zorgeloos Pakket
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van basis preventie tot complete ontzorging. Elk pakket is afgestemd op verschillende behoeften.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {subscriptionPackages.map((pkg, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-lg overflow-hidden ${pkg.popular ? 'ring-4 ring-green-200 transform scale-105' : ''} hover:shadow-xl transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="bg-green-500 text-white text-center py-2 font-semibold">
                    <Star className="inline mr-2 h-4 w-4" />
                    Meest Populair
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900">{pkg.priceFrom}</span>
                      <span className="text-gray-600 ml-2">{pkg.priceUnit}</span>
                    </div>
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="text-green-500 mr-3 mt-1 flex-shrink-0 h-5 w-5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={onOpenContactModal}
                    className={`w-full ${pkg.color} text-white px-6 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity`}
                    data-testid={`button-${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <MessageCircle className="inline mr-2 h-5 w-5" />
                    {pkg.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">
              Alle abonnementen zijn maandelijks opzegbaar en zonder verborgen kosten.
            </p>
            <button 
              onClick={onOpenContactModal}
              className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
              data-testid="button-custom-package"
            >
              <Cog className="inline mr-2 h-5 w-5" />
              Maatwerk Pakket Aanvragen
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hoe Werkt Het?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simpel en transparant. In 4 stappen naar zorgeloos wonen.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-tbgs-green">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pakket Kiezen</h3>
              <p className="text-gray-600">Kies het abonnement dat bij uw behoeften past.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-tbgs-green">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Woningcheck</h3>
              <p className="text-gray-600">Gratis inspectie om uw onderhoudsbehoeften te bepalen.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-tbgs-green">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">Samen maken we een onderhoudskalender voor het hele jaar.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-tbgs-green">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Zorgeloos</h3>
              <p className="text-gray-600">Wij zorgen voor alles volgens planning. U hoeft nergens meer aan te denken.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Veelgestelde Vragen
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wat is inbegrepen in de abonnementen?</h3>
              <p className="text-gray-700">Elk abonnement bevat verschillende diensten. Van basis dakinspectie tot complete buitenonderhoud. Alle werkzaamheden worden uitgevoerd door onze gecertificeerde specialisten.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik mijn abonnement aanpassen?</h3>
              <p className="text-gray-700">Ja, u kunt altijd upgraden naar een uitgebreider pakket. Downgraden is mogelijk met inachtneming van de opzegtermijn van 1 maand.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe worden de kosten berekend?</h3>
              <p className="text-gray-700">De kosten zijn afhankelijk van uw woninggrootte, type onderhoud en gekozen pakket. Na een gratis inspectie krijgt u een transparante offerte zonder verborgen kosten.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wat bij spoedgevallen?</h3>
              <p className="text-gray-700">Alle abonnees krijgen prioriteit bij spoedgevallen. Comfort en Premium leden hebben toegang tot onze 24/7 spoeddienst voor acute problemen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-tbgs-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Klaar Voor Zorgeloos Wonen?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Start vandaag nog met preventief onderhoud en voorkom kostbare reparaties. 
            Onze specialists staan klaar om uw woning perfect te onderhouden.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onOpenContactModal}
              className="bg-white text-tbgs-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
              data-testid="button-final-cta"
            >
              <Rocket className="mr-3 h-5 w-5" />
              Start Zorgeloos Wonen
            </button>
            <a 
              href="https://wa.me/31614595142?text=Hallo%20Team%20TBGS%2C%20ik%20wil%20graag%20meer%20informatie%20over%20de%20zorgeloos%20wonen%20abonnementen"
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-tbgs-green transition-colors flex items-center justify-center"
              data-testid="link-whatsapp-final"
            >
              <Phone className="mr-3 h-5 w-5" />
              WhatsApp Info
            </a>
          </div>
        </div>
      </section>

      <LocationAreasOnly />
      <PartnerSlider />
    </>
  );
}