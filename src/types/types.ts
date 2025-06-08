export interface Diagnosis {
  condition: string;
  probability: string;
  description: string;
}

export interface Medicine {
  name: string;
  type: string;
  dosage: string;
  frequency: string;
  warning?: string;
}

export interface Doctor {
  specialty: string;
  reason: string;
}

export interface Pharmacy {
  name: string;
  address?: string;
  distance?: string;
  website: string;
  rating: number;
  hasDelivery: boolean;
}

export interface SymptomResponse {
  diagnoses: Diagnosis[];
  medicines: Medicine[];
  doctor: Doctor;
  pharmacies: Pharmacy[];
}