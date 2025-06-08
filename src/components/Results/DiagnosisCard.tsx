import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Diagnosis } from '../../types/types';

interface DiagnosisCardProps {
  diagnosis: Diagnosis;
  index: number;
}

const DiagnosisCard: React.FC<DiagnosisCardProps> = ({ diagnosis, index }) => {
  const [expanded, setExpanded] = React.useState(index === 0);
  
  // Determine color based on probability
  const getProbabilityColor = (probability: string) => {
    const value = parseFloat(probability);
    if (value >= 70) return 'text-error-500';
    if (value >= 40) return 'text-warning-500';
    return 'text-success-500';
  };
  
  return (
    <motion.div 
      className="result-item overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center">
          <div className={`w-2 h-8 rounded-full mr-3 ${getProbabilityColor(diagnosis.probability)}`}></div>
          <h3 className="font-bold text-lg">{diagnosis.condition}</h3>
        </div>
        <div className="flex items-center">
          <span className={`mr-3 font-semibold ${getProbabilityColor(diagnosis.probability)}`}>
            {diagnosis.probability}
          </span>
          {expanded ? 
            <ChevronUp className="h-5 w-5 text-slate-400" /> : 
            <ChevronDown className="h-5 w-5 text-slate-400" />
          }
        </div>
      </div>
      
      {expanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-3 pl-5 border-l-2 border-slate-700"
        >
          <p className="text-slate-300">{diagnosis.description}</p>
          
          <div className="mt-3 flex items-start bg-slate-700/50 p-3 rounded text-sm">
            <AlertCircle className="h-5 w-5 text-warning-500 mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-slate-300">
              This is an AI-generated assessment and not a medical diagnosis. 
              Please consult a healthcare professional.
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default DiagnosisCard;