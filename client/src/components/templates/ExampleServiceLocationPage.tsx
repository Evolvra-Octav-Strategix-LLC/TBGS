// This file is kept for reference only
// All actual service location pages use ServiceLocationTemplate.tsx

import ServiceLocationTemplate from "./ServiceLocationTemplate";
import { Shield, Clock, Award, Wrench } from "lucide-react";

interface ExampleServiceLocationPageProps {
  onOpenContactModal: () => void;
}

export default function ExampleServiceLocationPage({ onOpenContactModal }: ExampleServiceLocationPageProps) {
  return (
    <ServiceLocationTemplate
      service="example-service"
      city="Example City"
      citySlug="example-city" 
      country="nl"
      region="Example Region"
      nearbyAreas={["Area A", "Area B", "Area C"]}
      
      serviceTitle="Example Service"
      serviceDescription="Example service description for SEO."
      pageTitle="Example Service Example City | TBGS - Example Title"
      metaDescription="Example service in Example City? Example meta description for SEO!"
      
      heroDescription="Example hero description for service page."
      problemsTitle="Example Problems Title"
      problems={[
        "Example problem 1",
        "Example problem 2", 
        "Example problem 3"
      ]}
      solutionsTitle="Example Solutions Title"
      solutions={[
        "Example solution 1",
        "Example solution 2",
        "Example solution 3"
      ]}
      
      benefits={[
        {
          icon: <Clock className="w-6 h-6" />,
          title: "Example Benefit 1",
          description: "Example benefit description 1"
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Example Benefit 2",
          description: "Example benefit description 2"
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "Example Benefit 3",
          description: "Example benefit description 3"
        },
        {
          icon: <Wrench className="w-6 h-6" />,
          title: "Example Benefit 4",
          description: "Example benefit description 4"
        }
      ]}
      
      faqs={[
        {
          question: "Example FAQ question?",
          answer: "Example FAQ answer."
        }
      ]}
      
      phone="+31 40 202 6744"
      onOpenContactModal={onOpenContactModal}
    />
  );
}