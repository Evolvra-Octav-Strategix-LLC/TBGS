import { useState, useEffect } from 'react';
import { AlertTriangle, Clock, Zap, CheckCircle } from 'lucide-react';

interface UrgencyMessagingProps {
  timeOnPage: number;
  interactionCount: number;
  onUrgencyChange: (level: 'normal' | 'urgent' | 'emergency') => void;
}

export default function UrgencyMessaging({ timeOnPage, interactionCount, onUrgencyChange }: UrgencyMessagingProps) {
  const [currentUrgency, setCurrentUrgency] = useState<'normal' | 'urgent' | 'emergency'>('normal');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let urgencyLevel: 'normal' | 'urgent' | 'emergency' = 'normal';
    
    if (timeOnPage > 180) { // 3 minutes = high urgency
      urgencyLevel = 'emergency';
    } else if (timeOnPage > 60 || interactionCount > 3) { // 1 minute or high interaction
      urgencyLevel = 'urgent';
    }

    setCurrentUrgency(urgencyLevel);
    onUrgencyChange(urgencyLevel);
    setIsVisible(urgencyLevel !== 'normal');
  }, [timeOnPage, interactionCount, onUrgencyChange]);

  const getUrgencyConfig = () => {
    switch(currentUrgency) {
      case 'emergency':
        return {
          icon: <Zap className="h-5 w-5" />,
          message: 'SPOEDHULP: Binnen 2 uur ter plaatse mogelijk!',
          subMessage: 'Bel nu voor directe hulp bij daklekkages',
          bgColor: 'bg-red-600',
          textColor: 'text-white',
          pulseColor: 'animate-pulse',
          ctaText: 'DIRECT BELLEN',
          ctaLink: 'tel:0402026744'
        };
      case 'urgent':
        return {
          icon: <AlertTriangle className="h-5 w-5" />,
          message: 'BEPERKTE TIJD: Vandaag nog gratis inspectie!',
          subMessage: 'Laatste plaatsen beschikbaar voor deze week',
          bgColor: 'bg-orange-500',
          textColor: 'text-white',
          pulseColor: 'animate-bounce',
          ctaText: 'RESERVEER PLAATS',
          ctaLink: 'https://wa.me/31614595142?text=Hallo%20Team%20TBGS%2C%20ik%20wil%20graag%20vandaag%20nog%20een%20gratis%20inspectie%20inplannen!'
        };
      default:
        return {
          icon: <CheckCircle className="h-5 w-5" />,
          message: 'Gratis inspectie en advies op locatie',
          subMessage: 'Binnen 24-48 uur ter plaatse',
          bgColor: 'bg-green-100',
          textColor: 'text-green-800',
          pulseColor: '',
          ctaText: 'PLAN INSPECTIE',
          ctaLink: 'https://wa.me/31614595142?text=Hallo%20Team%20TBGS%2C%20ik%20ben%20ge%C3%AFnteresseerd%20in%20een%20gratis%20inspectie'
        };
    }
  };

  const config = getUrgencyConfig();

  if (!isVisible) return null;

  return (
    <div className={`${config.bgColor} ${config.textColor} rounded-xl p-4 mb-4 ${config.pulseColor}`}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-0.5">
          {config.icon}
        </div>
        <div className="flex-1">
          <div className="font-bold text-sm mb-1">
            {config.message}
          </div>
          <div className="text-xs opacity-90">
            {config.subMessage}
          </div>
        </div>
        <a 
          href={config.ctaLink}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded-lg text-xs font-bold transition-all duration-200"
        >
          {config.ctaText}
        </a>
      </div>
      
      {currentUrgency === 'emergency' && (
        <div className="mt-3 flex items-center justify-center space-x-2 text-xs">
          <Clock className="h-4 w-4" />
          <span>Nog {Math.max(0, 300 - timeOnPage)} seconden voor deze actie!</span>
        </div>
      )}
    </div>
  );
}