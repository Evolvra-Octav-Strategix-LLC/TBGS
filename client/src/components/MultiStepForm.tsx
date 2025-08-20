import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MultiStepFormProps {
  steps: {
    title: string;
    description: string;
    content: React.ReactNode;
  }[];
  onSubmit: () => void;
  onBack?: () => void;
  isSubmitting?: boolean;
  isValid?: boolean;
  className?: string;
}

export function MultiStepForm({ 
  steps, 
  onSubmit, 
  onBack, 
  isSubmitting = false, 
  isValid = true,
  className = ""
}: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  
  const progressPercentage = ((currentStep + 1) / steps.length) * 100;
  
  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;
  
  return (
    <div className={`space-y-6 ${className}`}>
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Stap {currentStep + 1} van {steps.length}</span>
          <span className="text-gray-600">{Math.round(progressPercentage)}% voltooid</span>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>
      
      {/* Step Header */}
      <div className="text-center space-y-2">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
          {steps[currentStep].title}
        </h2>
        <p className="text-gray-600">
          {steps[currentStep].description}
        </p>
      </div>
      
      {/* Step Content */}
      <div className="min-h-[400px] flex flex-col">
        <div className="flex-1">
          {steps[currentStep].content}
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-6 border-t">
          <Button
            type="button"
            variant="outline"
            onClick={isFirstStep ? onBack : goToPreviousStep}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{isFirstStep ? "Sluiten" : "Vorige"}</span>
          </Button>
          
          {isLastStep ? (
            <Button
              type="button"
              onClick={onSubmit}
              disabled={!isValid || isSubmitting}
              className="bg-tbgs-navy hover:bg-blue-800 flex items-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Verzenden...</span>
                </>
              ) : (
                <>
                  <span>Verstuur Aanvraag</span>
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </Button>
          ) : (
            <Button
              type="button"
              onClick={goToNextStep}
              disabled={!isValid}
              className="bg-tbgs-navy hover:bg-blue-800 flex items-center space-x-2"
            >
              <span>Volgende</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}