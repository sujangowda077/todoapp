import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 1.5, ease: "linear", repeat: Infinity },
            scale: { duration: 1, repeat: Infinity }
          }}
          className="mx-auto mb-6 w-16 h-16 relative"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="w-16 h-16 text-primary-500" />
          </div>
          <div className="absolute inset-0 rounded-full border-4 border-t-primary-500 border-r-secondary-500 border-b-accent-500 border-l-primary-500 opacity-20 animate-spin" style={{ animationDuration: '3s' }}></div>
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-2">Analyzing Your Symptoms</h3>
        <p className="text-slate-300">Our AI is processing your medical data...</p>
        
        <div className="mt-6 flex justify-center space-x-2">
          <div className="pulse-dot delay-100"></div>
          <div className="pulse-dot delay-300"></div>
          <div className="pulse-dot delay-500"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;