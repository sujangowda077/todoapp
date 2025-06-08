import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mic, Wand2, RotateCcw, ArrowRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { analyzeSymptoms } from '../services/medicalService';
import ParticleBackground from '../components/UI/ParticleBackground';
import VirtualAssistant from '../components/Assistant/VirtualAssistant';

const HomePage: React.FC = () => {
  const { symptoms, setSymptoms, setResults, setLoading, setError } = useAppContext();
  const [isRecording, setIsRecording] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!symptoms.trim()) {
      setError('Please enter your symptoms');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const data = await analyzeSymptoms(symptoms);
      setResults(data);
      navigate('/results');
    } catch (error) {
      setError('Failed to analyze symptoms. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleVoiceInput = () => {
    setIsRecording(!isRecording);
    
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false);
        setSymptoms(symptoms + (symptoms ? ' ' : '') + "I have a headache and fever for two days.");
      }, 3000);
    }
  };

  const clearSymptoms = () => {
    setSymptoms('');
  };

  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center p-4">
      <ParticleBackground />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl mx-auto"
      >
        <div className="text-center mb-8">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 neon-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            MediGuide AI
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Your AI-powered medical assistant with gaming vibes
          </motion.p>
        </div>

        <motion.div 
          className="gaming-card neon-border"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Describe Your Symptoms</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="relative mb-6">
              <textarea
                className="input-gaming w-full min-h-[150px] resize-y"
                placeholder="Describe your symptoms in detail (e.g., 'I have had a persistent cough and fever for three days')"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
              />
              
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button 
                  type="button" 
                  onClick={clearSymptoms}
                  className="p-2 rounded-full bg-slate-600 hover:bg-slate-500 transition-colors"
                  title="Clear symptoms"
                >
                  <RotateCcw className="h-5 w-5 text-white" />
                </button>
                <button 
                  type="button" 
                  onClick={handleVoiceInput}
                  className={`p-2 rounded-full transition-colors ${
                    isRecording ? 'bg-error-500 animate-pulse' : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                  title="Voice input"
                >
                  <Mic className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button 
                type="button" 
                className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2"
                onClick={() => {
                  setSymptoms("I have a severe headache, nausea, and sensitivity to light for the past 24 hours.");
                }}
              >
                <Wand2 className="h-5 w-5" />
                <span>Sample Symptoms</span>
              </button>
              
              <button 
                type="submit" 
                className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <span>Analyze Symptoms</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </form>
        </motion.div>
        
        <motion.div 
          className="mt-8 text-center text-slate-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="bg-slate-800/50 p-4 rounded-lg inline-block">
            <strong className="text-error-400">Disclaimer:</strong> This is not a substitute for medical advice. 
            Please consult a healthcare professional before taking any medication.
          </p>
        </motion.div>
      </motion.div>

      <VirtualAssistant message="Hi! I'm Neko, your medical assistant. How can I help you today?" />
    </div>
  );
};

export default HomePage;