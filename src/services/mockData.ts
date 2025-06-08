import { SymptomResponse } from '../types/types';

export const mockAnalyzeSymptoms = (symptoms: string): SymptomResponse => {
  // Default response for headache and fever
  let response: SymptomResponse = {
    diagnoses: [
      {
        condition: 'Common Cold',
        probability: '75%',
        description: 'A viral infection causing inflammation of the upper respiratory tract, including the nose and throat. Symptoms typically include runny nose, sore throat, cough, and mild fever.'
      },
      {
        condition: 'Influenza',
        probability: '60%',
        description: 'A viral infection that attacks your respiratory system — your nose, throat, and lungs. Symptoms are similar to a cold but are typically more severe and come on suddenly.'
      },
      {
        condition: 'COVID-19',
        probability: '45%',
        description: 'A respiratory illness caused by the SARS-CoV-2 virus. Symptoms range from mild to severe and may include fever, cough, shortness of breath, fatigue, and loss of taste or smell.'
      }
    ],
    medicines: [
      {
        name: 'Acetaminophen (Tylenol)',
        type: 'OTC Pain Reliever',
        dosage: '500-1000mg',
        frequency: 'Every 4-6 hours as needed',
        warning: 'Do not exceed 4000mg in 24 hours. Avoid alcohol.'
      },
      {
        name: 'Ibuprofen (Advil, Motrin)',
        type: 'OTC NSAID',
        dosage: '200-400mg',
        frequency: 'Every 4-6 hours with food',
        warning: 'May cause stomach irritation. Not recommended for long-term use without medical supervision.'
      },
      {
        name: 'Pseudoephedrine',
        type: 'OTC Decongestant',
        dosage: '30-60mg',
        frequency: 'Every 4-6 hours',
      }
    ],
    doctor: {
      specialty: 'General Physician',
      reason: 'Your symptoms suggest a common viral infection that can be initially managed by a general physician. If symptoms worsen or persist beyond a week, a specialist consultation may be recommended.'
    },
    pharmacies: [
      {
        name: 'CVS Pharmacy',
        address: '123 Main Street, Anytown',
        distance: '0.8 miles away',
        website: 'https://www.cvs.com',
        rating: 4,
        hasDelivery: true
      },
      {
        name: 'Walgreens',
        address: '456 Oak Avenue, Anytown',
        distance: '1.2 miles away',
        website: 'https://www.walgreens.com',
        rating: 5,
        hasDelivery: true
      },
      {
        name: 'RiteAid',
        address: '789 Pine Road, Anytown',
        distance: '2.4 miles away',
        website: 'https://www.riteaid.com',
        rating: 3,
        hasDelivery: false
      }
    ]
  };

  // Check for migraine symptoms
  if (symptoms.toLowerCase().includes('migraine') || 
      (symptoms.toLowerCase().includes('headache') && 
       (symptoms.toLowerCase().includes('light') || symptoms.toLowerCase().includes('nausea')))) {
    response = {
      diagnoses: [
        {
          condition: 'Migraine',
          probability: '85%',
          description: 'A neurological condition that causes multiple symptoms, typically characterized by intense, debilitating headaches. Symptoms may include throbbing head pain, nausea, vomiting, and sensitivity to light and sound.'
        },
        {
          condition: 'Tension Headache',
          probability: '40%',
          description: 'The most common type of headache, characterized by mild to moderate pain that feels like a band tightening around your head. It\'s often triggered by stress, muscle tension, or dehydration.'
        },
        {
          condition: 'Cluster Headache',
          probability: '20%',
          description: 'A rare but severe type of headache that occurs in cyclical patterns or clusters. The pain is typically centered around one eye and can be accompanied by tearing and nasal congestion.'
        }
      ],
      medicines: [
        {
          name: 'Sumatriptan (Imitrex)',
          type: 'Prescription Triptan',
          dosage: '50-100mg',
          frequency: 'At onset of migraine, may repeat after 2 hours if needed',
          warning: 'Not recommended for people with heart or blood pressure problems.'
        },
        {
          name: 'Rizatriptan (Maxalt)',
          type: 'Prescription Triptan',
          dosage: '5-10mg',
          frequency: 'At onset of migraine, may repeat after 2 hours if needed',
        },
        {
          name: 'Ibuprofen (Advil)',
          type: 'OTC NSAID',
          dosage: '400-800mg',
          frequency: 'Every 6-8 hours with food',
          warning: 'May cause stomach irritation. Not recommended for long-term use.'
        }
      ],
      doctor: {
        specialty: 'Neurologist',
        reason: 'Your symptoms suggest a migraine condition that should be evaluated by a neurologist. They can provide a proper diagnosis, rule out other causes, and develop a treatment plan specific to your needs.'
      },
      pharmacies: [
        {
          name: 'CVS Pharmacy',
          address: '123 Main Street, Anytown',
          distance: '0.8 miles away',
          website: 'https://www.cvs.com',
          rating: 4,
          hasDelivery: true
        },
        {
          name: 'Walgreens',
          address: '456 Oak Avenue, Anytown',
          distance: '1.2 miles away',
          website: 'https://www.walgreens.com',
          rating: 5,
          hasDelivery: true
        },
        {
          name: 'MedExpress Pharmacy',
          address: '101 Health Boulevard, Anytown',
          distance: '3.1 miles away',
          website: 'https://www.medexpress.com',
          rating: 4,
          hasDelivery: true
        }
      ]
    };
  }
  
  // Check for stomach issues
  else if (symptoms.toLowerCase().includes('stomach') || 
           symptoms.toLowerCase().includes('nausea') || 
           symptoms.toLowerCase().includes('vomit') || 
           symptoms.toLowerCase().includes('diarrhea')) {
    response = {
      diagnoses: [
        {
          condition: 'Gastroenteritis',
          probability: '75%',
          description: 'An intestinal infection marked by diarrhea, abdominal cramps, nausea, vomiting, and sometimes fever. The most common cause is a viral or bacterial infection.'
        },
        {
          condition: 'Food Poisoning',
          probability: '65%',
          description: 'Illness caused by eating contaminated food. Symptoms include nausea, vomiting, diarrhea, abdominal cramps, and fever. Onset is typically rapid, within hours of consuming the contaminated food.'
        },
        {
          condition: 'Irritable Bowel Syndrome',
          probability: '30%',
          description: 'A common disorder affecting the large intestine. Signs and symptoms include cramping, abdominal pain, bloating, gas, diarrhea or constipation, or both.'
        }
      ],
      medicines: [
        {
          name: 'Loperamide (Imodium)',
          type: 'OTC Anti-diarrheal',
          dosage: '2mg',
          frequency: 'After each loose stool, max 8mg/day',
          warning: 'Not recommended for high fever or bloody stools. Seek medical attention if symptoms persist.'
        },
        {
          name: 'Bismuth Subsalicylate (Pepto-Bismol)',
          type: 'OTC Antacid',
          dosage: '30ml or 2 tablets',
          frequency: 'Every 30-60 minutes as needed, max 8 doses/day',
        },
        {
          name: 'Ondansetron',
          type: 'Prescription Anti-nausea',
          dosage: '4-8mg',
          frequency: 'Every 8 hours as needed',
        }
      ],
      doctor: {
        specialty: 'Gastroenterologist',
        reason: 'Your symptoms suggest a gastrointestinal issue that should be evaluated by a gastroenterologist, especially if symptoms persist beyond a few days or are severe. They can perform specialized tests to determine the exact cause and provide appropriate treatment.'
      },
      pharmacies: [
        {
          name: 'CVS Pharmacy',
          address: '123 Main Street, Anytown',
          distance: '0.8 miles away',
          website: 'https://www.cvs.com',
          rating: 4,
          hasDelivery: true
        },
        {
          name: 'Walgreens',
          address: '456 Oak Avenue, Anytown',
          distance: '1.2 miles away',
          website: 'https://www.walgreens.com',
          rating: 5,
          hasDelivery: true
        },
        {
          name: 'Online MedExpress',
          website: 'https://www.onlinemedexpress.com',
          rating: 4,
          hasDelivery: true
        }
      ]
    };
  }

  return response;
};