import React from 'react';
import { motion } from 'framer-motion';
import { UserRound, Search } from 'lucide-react';
import { Doctor } from '../../types/types';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <motion.div 
      className="result-item"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start">
        <div className="bg-accent-800/50 p-3 rounded-lg mr-4">
          <UserRound className="h-10 w-10 text-accent-400" />
        </div>
        
        <div className="flex-1">
          <h3 className="font-bold text-xl text-accent-300">{doctor.specialty}</h3>
          
          <p className="mt-2 text-slate-300">{doctor.reason}</p>
          
          <div className="mt-4 flex flex-wrap gap-4">
            <button className="bg-accent-600 hover:bg-accent-500 text-white py-2 px-4 rounded-md flex items-center transition-colors">
              <Search className="h-4 w-4 mr-2" />
              <span>Find Specialists Near Me</span>
            </button>
            
            <button className="bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-md flex items-center transition-colors">
              Book Online Consultation
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-4 border-t border-slate-700 pt-4">
        <div className="bg-slate-800/80 p-3 rounded-lg">
          <h4 className="font-semibold text-sm text-slate-300 mb-2">What does a {doctor.specialty} do?</h4>
          <p className="text-sm text-slate-400">
            A {doctor.specialty} specializes in diagnosing and treating conditions related to 
            {doctor.specialty.includes('Neurologist') ? ' the brain and nervous system.' : 
             doctor.specialty.includes('Cardiologist') ? ' the heart and cardiovascular system.' :
             doctor.specialty.includes('Gastroenterologist') ? ' the digestive system and related disorders.' :
             doctor.specialty.includes('ENT') ? ' ear, nose, throat, and related structures of the head and neck.' :
             doctor.specialty.includes('Dermatologist') ? ' skin conditions and diseases.' :
             ' this specific medical area.'}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default DoctorCard;