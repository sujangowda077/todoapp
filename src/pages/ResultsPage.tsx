import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import DiagnosisCard from '../components/Results/DiagnosisCard';
import MedicineCard from '../components/Results/MedicineCard';
import DoctorCard from '../components/Results/DoctorCard';
import PharmacyCard from '../components/Results/PharmacyCard';
import LoadingScreen from '../components/UI/LoadingScreen';
import VirtualAssistant from '../components/Assistant/VirtualAssistant';
import { ArrowLeft } from 'lucide-react';
import ParticleBackground from '../components/UI/ParticleBackground';

const ResultsPage: React.FC = () => {
  const { results, loading, symptoms } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!results && !loading) {
      navigate('/');
    }
  }, [results, loading, navigate]);

  if (loading) {
    return <LoadingScreen />;
  }

  if (!results) {
    return null;
  }

  const assistantMessage = `Based on your symptoms, I've analyzed the possible conditions. The most likely diagnosis appears to be ${results.diagnoses[0].condition}. I recommend consulting with a ${results.doctor.specialty} for proper medical evaluation.`;

  return (
    <div className="relative min-h-[calc(100vh-5rem)] py-8 px-4">
      <ParticleBackground />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <button 
              onClick={() => navigate('/')}
              className="flex items-center text-slate-300 hover:text-white mb-2 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span>Back to symptom input</span>
            </button>
            <h1 className="text-3xl font-bold neon-text">Analysis Results</h1>
            <p className="text-slate-300 mt-2">Based on symptoms: <span className="italic">{symptoms}</span></p>
          </div>
          
          <div className="bg-slate-800/80 backdrop-blur-sm p-3 rounded-lg text-sm text-error-400 border border-error-500/30">
            <strong>Medical Disclaimer:</strong> This is an AI analysis and not a substitute for professional medical advice.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="gaming-section"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary-400">Possible Diagnoses</h2>
            <div className="space-y-4">
              {results.diagnoses.map((diagnosis, index) => (
                <DiagnosisCard key={index} diagnosis={diagnosis} index={index} />
              ))}
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="gaming-section"
          >
            <h2 className="text-2xl font-bold mb-4 text-secondary-400">Recommended Medicines</h2>
            <div className="space-y-4">
              {results.medicines.map((medicine, index) => (
                <MedicineCard key={index} medicine={medicine} index={index} />
              ))}
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="gaming-section"
          >
            <h2 className="text-2xl font-bold mb-4 text-accent-400">Recommended Specialist</h2>
            <DoctorCard doctor={results.doctor} />
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="gaming-section"
          >
            <h2 className="text-2xl font-bold mb-4 text-success-400">Pharmacies</h2>
            <div className="space-y-4">
              {results.pharmacies.map((pharmacy, index) => (
                <PharmacyCard key={index} pharmacy={pharmacy} index={index} />
              ))}
            </div>
          </motion.section>
        </div>
      </motion.div>

      <VirtualAssistant message={assistantMessage} />
    </div>
  );
};

export default ResultsPage;