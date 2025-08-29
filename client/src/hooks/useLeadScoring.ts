import { useState, useEffect } from 'react';

interface LeadScoringData {
  score: number;
  category: 'cold' | 'warm' | 'hot' | 'qualified';
  factors: {
    timeOnPage: number;
    interactionCount: number;
    formProgress: number;
    urgencyLevel: 'normal' | 'urgent' | 'emergency';
    deviceType: 'mobile' | 'desktop';
    trafficSource: string;
  };
}

export function useLeadScoring() {
  const [leadData, setLeadData] = useState<LeadScoringData>({
    score: 0,
    category: 'cold',
    factors: {
      timeOnPage: 0,
      interactionCount: 0,
      formProgress: 0,
      urgencyLevel: 'normal',
      deviceType: 'mobile',
      trafficSource: 'direct'
    }
  });

  const updateFactor = (key: keyof LeadScoringData['factors'], value: any) => {
    setLeadData(prev => ({
      ...prev,
      factors: {
        ...prev.factors,
        [key]: value
      }
    }));
  };

  const calculateScore = () => {
    const { timeOnPage, interactionCount, formProgress, urgencyLevel, deviceType } = leadData.factors;
    
    let score = 0;
    
    // Time engagement scoring (0-30 points)\n    if (timeOnPage > 300) score += 30; // 5+ minutes\n    else if (timeOnPage > 180) score += 20; // 3-5 minutes\n    else if (timeOnPage > 60) score += 10; // 1-3 minutes\n    else if (timeOnPage > 30) score += 5; // 30s-1min\n    \n    // Interaction scoring (0-25 points)\n    score += Math.min(interactionCount * 3, 25);\n    \n    // Form progress scoring (0-25 points)\n    score += formProgress;\n    \n    // Urgency level scoring (0-15 points)\n    if (urgencyLevel === 'emergency') score += 15;\n    else if (urgencyLevel === 'urgent') score += 10;\n    else score += 0;\n    \n    // Device type bonus (0-5 points)\n    if (deviceType === 'desktop') score += 5; // Desktop users often more serious\n    \n    return Math.min(score, 100);\n  };\n\n  const getCategory = (score: number): LeadScoringData['category'] => {\n    if (score >= 80) return 'qualified';\n    if (score >= 60) return 'hot';\n    if (score >= 30) return 'warm';\n    return 'cold';\n  };\n\n  useEffect(() => {\n    const score = calculateScore();\n    const category = getCategory(score);\n    \n    setLeadData(prev => ({\n      ...prev,\n      score,\n      category\n    }));\n  }, [leadData.factors]);\n\n  const getRecommendedAction = () => {\n    switch(leadData.category) {\n      case 'qualified':\n        return {\n          priority: 'IMMEDIATE',\n          action: 'Direct phone call within 15 minutes',\n          message: 'High-intent lead - immediate attention required'\n        };\n      case 'hot':\n        return {\n          priority: 'HIGH',\n          action: 'WhatsApp follow-up within 1 hour',\n          message: 'Strong interest shown - quick response needed'\n        };\n      case 'warm':\n        return {\n          priority: 'MEDIUM',\n          action: 'Email follow-up within 4 hours',\n          message: 'Engaged visitor - nurture with information'\n        };\n      case 'cold':\n        return {\n          priority: 'LOW',\n          action: 'Standard email sequence',\n          message: 'New visitor - provide value and build trust'\n        };\n    }\n  };\n\n  return {\n    leadData,\n    updateFactor,\n    getRecommendedAction,\n    incrementInteraction: () => updateFactor('interactionCount', leadData.factors.interactionCount + 1),\n    updateTimeOnPage: (time: number) => updateFactor('timeOnPage', time),\n    updateFormProgress: (progress: number) => updateFactor('formProgress', progress),\n    updateUrgencyLevel: (level: 'normal' | 'urgent' | 'emergency') => updateFactor('urgencyLevel', level)\n  };\n}