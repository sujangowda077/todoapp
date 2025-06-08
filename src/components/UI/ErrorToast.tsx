import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, X } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

interface ErrorToastProps {
  message: string;
}

const ErrorToast: React.FC<ErrorToastProps> = ({ message }) => {
  const [visible, setVisible] = useState(true);
  const { setError } = useAppContext();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => setError(null), 300); // After animation completes
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [setError]);
  
  const handleClose = () => {
    setVisible(false);
    setTimeout(() => setError(null), 300);
  };
  
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-error-900/90 backdrop-blur-sm text-white px-6 py-3 rounded-lg shadow-lg border border-error-600 flex items-center">
            <AlertCircle className="h-5 w-5 text-error-400 mr-2 flex-shrink-0" />
            <span>{message}</span>
            <button 
              onClick={handleClose}
              className="ml-4 text-slate-300 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ErrorToast;