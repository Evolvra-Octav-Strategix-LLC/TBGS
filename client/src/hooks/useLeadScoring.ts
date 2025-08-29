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
    
    // Time engagement scoring (0-30 points)
    if (timeOnPage > 300) score += 30; // 5+ minutes
    else if (timeOnPage > 180) score += 20; // 3-5 minutes
    else if (timeOnPage > 60) score += 10; // 1-3 minutes
    else if (timeOnPage > 30) score += 5; // 30s-1min
    
    // Interaction scoring (0-25 points)
    score += Math.min(interactionCount * 3, 25);
    
    // Form progress scoring (0-25 points)
    score += formProgress;
    
    // Urgency level scoring (0-15 points)
    if (urgencyLevel === 'emergency') score += 15;
    else if (urgencyLevel === 'urgent') score += 10;
    else score += 0;
    
    // Device type bonus (0-5 points)
    if (deviceType === 'desktop') score += 5; // Desktop users often more serious
    
    return Math.min(score, 100);
  };

  const getCategory = (score: number): LeadScoringData['category'] => {
    if (score >= 80) return 'qualified';
    if (score >= 60) return 'hot';
    if (score >= 30) return 'warm';
    return 'cold';
  };

  useEffect(() => {
    const score = calculateScore();
    const category = getCategory(score);
    
    setLeadData(prev => ({
      ...prev,
      score,
      category
    }));
  }, [leadData.factors]);

  const getRecommendedAction = () => {
    switch(leadData.category) {
      case 'qualified':
        return {
          priority: 'IMMEDIATE',
          action: 'Direct phone call within 15 minutes',
          message: 'High-intent lead - immediate attention required'
        };
      case 'hot':
        return {
          priority: 'HIGH',
          action: 'WhatsApp follow-up within 1 hour',
          message: 'Strong interest shown - quick response needed'
        };
      case 'warm':
        return {
          priority: 'MEDIUM',
          action: 'Email follow-up within 4 hours',
          message: 'Engaged visitor - nurture with information'
        };
      case 'cold':
        return {
          priority: 'LOW',
          action: 'Standard email sequence',
          message: 'New visitor - provide value and build trust'
        };
    }
  };

  return {
    leadData,
    updateFactor,
    getRecommendedAction,
    incrementInteraction: () => updateFactor('interactionCount', leadData.factors.interactionCount + 1),
    updateTimeOnPage: (time: number) => updateFactor('timeOnPage', time),
    updateFormProgress: (progress: number) => updateFactor('formProgress', progress),
    updateUrgencyLevel: (level: 'normal' | 'urgent' | 'emergency') => updateFactor('urgencyLevel', level)
  };
}