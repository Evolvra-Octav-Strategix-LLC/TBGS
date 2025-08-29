import { useState } from "react";
import { ChevronDown, ChevronUp, MapPin, Clock, Phone } from "lucide-react";

interface LocationFAQProps {
  city: string;
  country: "nl" | "be";
  region: string;
  landmarks: string[];
  nearbyCities: string[];
  phone: string;
}

export default function LocationFAQSection({ 
  city, 
  country, 
  region, 
  landmarks, 
  nearbyCities,
  phone 
}: LocationFAQProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const locationFAQs = [
    {
      question: `Waar is TBGS actief rondom ${city}?`,
      answer: `TBGS is actief in heel ${city} en omliggende gemeenten zoals ${nearbyCities.slice(0, 3).join(', ')}. We dekken een straal van 25 kilometer rond ${city} af voor al onze dienstverlening. Dit zorgt voor snelle responstijden en lokale expertise.`
    },
    {
      question: `Hoe snel kunnen jullie ter plaatse zijn in ${city}?`,
      answer: `Voor spoedeisende situaties zoals daklekkages streven we ernaar binnen 2 uur ter plaatse te zijn in ${city}. Voor reguliere afspraken kunnen we meestal binnen 24-48 uur langskomen voor een gratis inspectie.`
    },
    {
      question: `Kennen jullie specialisten de lokale bouwvoorschriften in ${region}?`,
      answer: `Ja, onze specialisten hebben uitgebreide kennis van de lokale bouwvoorschriften in ${region}. We zorgen ervoor dat al onze werkzaamheden voldoen aan de gemeentelijke eisen en APV-vergunningen waar nodig.`
    },
    {
      question: `Werken jullie ook in de weekenden in ${city}?`,
      answer: `Voor noodgevallen zijn we 7 dagen per week bereikbaar. Reguliere werkzaamheden plannen we voornamelijk doordeweeks. Voor spoedklussen in ${city} kunt u altijd contact opnemen via ${phone}.`
    },
    {
      question: `Welke betalingsmogelijkheden bieden jullie in ${city}?`,
      answer: `We accepteren verschillende betaalwijzen: contant, creditcard, bankoverschrijving en voor grotere projecten bieden we ook gespreide betaling aan. Kleine reparaties kunnen vaak direct na afloop worden afgerekend.`
    },
    ...(landmarks.length > 0 ? [{
      question: `Zijn jullie bekend met de specifieke situatie rondom ${landmarks[0]} in ${city}?`,
      answer: `Ja, we kennen ${city} zeer goed, inclusief bijzondere locaties zoals ${landmarks.slice(0, 2).join(' en ')}. Onze lokale expertise helpt ons om rekening te houden met specifieke omstandigheden zoals windbelasting, toegankelijkheid en eventuele monumentenregels.`
    }] : []),
    {
      question: `Bieden jullie garantie op werkzaamheden in ${city}?`,
      answer: `Ja, alle werkzaamheden worden uitgevoerd met volledige garantie. Materialen hebben fabrieksgarantie tot 20 jaar, en op vakmanschap geven we 5-10 jaar garantie afhankelijk van de werkzaamheden. Deze garantie geldt voor heel ${region}.`
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Veelgestelde Vragen over <span className="text-tbgs-blue">{city}</span>
            </h2>
            <p className="text-lg text-slate-600">
              Lokale informatie over onze dienstverlening in {city} en {region}
            </p>
          </div>

          {/* Location Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-3">
                <MapPin className="h-5 w-5 text-tbgs-blue mr-2" />
                <h3 className="font-semibold text-slate-900">Serviceregio</h3>
              </div>
              <p className="text-slate-600 text-sm">
                {city} + 25km straal<br />
                Inclusief {nearbyCities.slice(0, 2).join(' en ')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-3">
                <Clock className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="font-semibold text-slate-900">Responstijd</h3>
              </div>
              <p className="text-slate-600 text-sm">
                Spoed: binnen 2 uur<br />
                Regulier: 24-48 uur
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-3">
                <Phone className="h-5 w-5 text-orange-600 mr-2" />
                <h3 className="font-semibold text-slate-900">Direct contact</h3>
              </div>
              <p className="text-slate-600 text-sm">
                {phone}<br />
                24/7 noodservice
              </p>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {locationFAQs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-tbgs-blue focus:ring-inset rounded-xl"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="font-semibold text-slate-900 pr-4">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <div className="pt-2 border-t border-slate-100">
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Local Landmarks Reference */}
          {landmarks.length > 0 && (
            <div className="mt-12 bg-gradient-to-r from-tbgs-blue to-blue-700 rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">
                Lokale Expertise in {city}
              </h3>
              <p className="text-blue-100 mb-4">
                Onze specialisten kennen {city} door en door. We hebben ervaring met werkzaamheden rondom bekende locaties zoals:
              </p>
              <div className="flex flex-wrap gap-2">
                {landmarks.map((landmark, index) => (
                  <span key={index} className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                    {landmark}
                  </span>
                ))}
              </div>
              <p className="text-blue-100 text-sm mt-4">
                Deze lokale kennis helpt ons om sneller en effectiever te werken aan uw project.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}