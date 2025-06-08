import React from 'react';
import { motion } from 'framer-motion';
import { PillIcon, AlertTriangle, ShoppingCart } from 'lucide-react';
import { Medicine } from '../../types/types';

interface MedicineCardProps {
  medicine: Medicine;
  index: number;
}

const MedicineCard: React.FC<MedicineCardProps> = ({ medicine, index }) => {
  return (
    <motion.div 
      className="result-item"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex items-start">
        <div className="bg-secondary-800/50 p-2 rounded-lg mr-3">
          <PillIcon className="h-6 w-6 text-secondary-400" />
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg">{medicine.name}</h3>
            <span className="bg-secondary-900/70 text-secondary-300 text-xs px-2 py-1 rounded">
              {medicine.type}
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-sm">
            <div className="bg-slate-700/30 p-2 rounded">
              <span className="text-slate-400">Dosage:</span> 
              <span className="ml-1 text-white">{medicine.dosage}</span>
            </div>
            <div className="bg-slate-700/30 p-2 rounded">
              <span className="text-slate-400">Frequency:</span> 
              <span className="ml-1 text-white">{medicine.frequency}</span>
            </div>
          </div>
          
          {medicine.warning && (
            <div className="mt-3 flex items-start text-sm">
              <AlertTriangle className="h-4 w-4 text-warning-500 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-warning-300">{medicine.warning}</p>
            </div>
          )}
          
          <div className="mt-4">
            <button className="bg-secondary-600 hover:bg-secondary-500 text-white py-1.5 px-3 rounded-md text-sm flex items-center transition-colors">
              <ShoppingCart className="h-4 w-4 mr-1" />
              <span>Find Online</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MedicineCard;