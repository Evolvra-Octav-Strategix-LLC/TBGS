import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MultiStepFormProps {
  steps: {
    title: string;
    description: string;
    content: React.ReactNode;
    requiredFields?: string[];
  }[];
  currentStep?: number;
  onStepChange?: (step: number) => void;
  onSubmit: () => void;
  onBack?: () => void;
  isSubmitting?: boolean;
  isValid?: boolean;
  className?: string;
  validateStep?: (stepIndex: number) => boolean;
}

export function MultiStepForm({ 
  steps,
  currentStep: controlledCurrentStep,
  onStepChange,
  onSubmit, 
  onBack, 
  isSubmitting = false, 
  isValid = true,
  className = "",
  validateStep
}: MultiStepFormProps) {
  const [internalCurrentStep, setInternalCurrentStep] = useState(0);
  const currentStep = controlledCurrentStep !== undefined ? controlledCurrentStep : internalCurrentStep;
  const setCurrentStep = onStepChange || setInternalCurrentStep;
  
  const progressPercentage = ((currentStep + 1) / steps.length) * 100;
  
  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      // Adjust scroll position based on whether step 3 (index 2) will have hidden header
      const scrollTop = nextStep === 2 ? 20 : 120; // Less scroll for step 3 without header
      window.scrollTo({ top: scrollTop, behavior: 'smooth' });
    }
  };

  const canGoToNextStep = () => {
    // If step validation function is provided, use it
    if (validateStep) {
      return validateStep(currentStep);
    }
    // Otherwise, always allow progression (step validation will be handled by parent form)
    return true;
  };
  
  const goToPreviousStep = () => {
    if (currentStep > 0) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
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
              disabled={!canGoToNextStep()}
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