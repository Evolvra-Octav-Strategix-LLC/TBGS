// This file is kept for reference only
// All actual location hub pages use LocationHubTemplate.tsx

import LocationHubTemplate from "./LocationHubTemplate";
import { Home, Wrench, Building2, Hammer } from "lucide-react";

interface ExampleLocationHubPageProps {
  onOpenContactModal: () => void;
}

export default function ExampleLocationHubPage({ onOpenContactModal }: ExampleLocationHubPageProps) {
  return (
    <LocationHubTemplate
      city="Example City"
      citySlug="example-city"
      country="nl"
      region="Example Region"
      nearbyCities={["City A", "City B", "City C"]}
      landmarks={["Landmark 1", "Landmark 2", "Landmark 3"]}
      
      pageTitle="TBGS Example City - Example Page Title"
      metaDescription="Example meta description for SEO"
      
      heroDescription="Example hero description for the city page"
      cityDescription="Example description about the city and TBGS presence there."
      
      services={[
        {
          slug: "daklekkage",
          title: "Daklekkage Reparatie",
          description: "24/7 spoeddienst voor alle daklekkages",
          icon: <Home className="w-6 h-6" />,
          color: "red",
          popular: true
        },
        {
          slug: "renovatie", 
          title: "Renovatie & Verbouw",
          description: "Complete renovaties van A tot Z",
          icon: <Building2 className="w-6 h-6" />,
          color: "blue"
        },
        {
          slug: "onderhoud",
          title: "Onderhoud & Service",
          description: "Preventief onderhoud voor uw woning",
          icon: <Wrench className="w-6 h-6" />,
          color: "green"
        },
        {
          slug: "schoorsteen",
          title: "Schoorsteen Service", 
          description: "Reiniging, reparatie en controle",
          icon: <Hammer className="w-6 h-6" />,
          color: "orange"
        }
      ]}
      
      reviews={[
        {
          name: "Example Customer",
          location: "Example City Centrum",
          rating: 5,
          text: "Excellent service example review text.",
          service: "Example service",
          date: "Example date"
        }
      ]}
      
      faqs={[
        {
          question: "Example FAQ question?",
          answer: "Example FAQ answer."
        }
      ]}
      
      phone="+31 40 202 6744"
      coordinates={{ lat: 51.4416, lng: 5.4697 }}
      onOpenContactModal={onOpenContactModal}
    />
  );
}