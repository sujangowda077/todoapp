import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Star, TruckIcon, ExternalLink } from 'lucide-react';
import { Pharmacy } from '../../types/types';

interface PharmacyCardProps {
  pharmacy: Pharmacy;
  index: number;
}

const PharmacyCard: React.FC<PharmacyCardProps> = ({ pharmacy, index }) => {
  // Generate star rating display
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-warning-400 fill-warning-400' : 'text-slate-600'}`} 
      />
    ));
  };
  
  return (
    <motion.div 
      className="result-item"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex items-start">
        <div className="bg-success-900/50 p-2 rounded-lg mr-3 flex-shrink-0">
          <Building2 className="h-6 w-6 text-success-400" />
        </div>
        
        <div className="flex-1">
          <div className="flex flex-wrap justify-between items-start gap-2">
            <h3 className="font-bold text-lg">{pharmacy.name}</h3>
            <div className="flex">{renderStars(pharmacy.rating)}</div>
          </div>
          
          {pharmacy.address && (
            <p className="text-slate-300 mt-1 text-sm">
              {pharmacy.address} {pharmacy.distance && `(${pharmacy.distance})`}
            </p>
          )}
          
          <div className="mt-3 flex flex-wrap items-center gap-4">
            {pharmacy.hasDelivery && (
              <div className="flex items-center text-sm text-success-400">
                <TruckIcon className="h-4 w-4 mr-1" />
                <span>Delivery Available</span>
              </div>
            )}
            
            <a 
              href={pharmacy.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm text-primary-400 hover:text-primary-300 transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              <span>Visit Website</span>
            </a>
          </div>
          
          <div className="mt-4">
            <button className="bg-success-700 hover:bg-success-600 text-white py-1.5 px-3 rounded-md text-sm transition-colors">
              Order Medicines
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PharmacyCard;