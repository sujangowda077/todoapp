import { SymptomResponse } from '../types/types';
import { mockAnalyzeSymptoms } from './mockData';

export const analyzeSymptoms = async (symptoms: string): Promise<SymptomResponse> => {
  try {
    // In a real implementation, this would call OpenAI or other AI service
    // const response = await fetch('/api/analyze', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ symptoms }),
    // });
    // 
    // if (!response.ok) {
    //   throw new Error('Failed to analyze symptoms');
    // }
    // 
    // return await response.json();
    
    // For this example, we'll use mock data with a delay to simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockAnalyzeSymptoms(symptoms));
      }, 2000);
    });
  } catch (error) {
    console.error('Error analyzing symptoms:', error);
    throw error;
  }
};