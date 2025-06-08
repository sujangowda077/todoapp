import React, { createContext, useContext, useState, ReactNode } from 'react';
import { SymptomResponse } from '../types/types';

interface AppContextType {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  symptoms: string;
  setSymptoms: (symptoms: string) => void;
  results: SymptomResponse | null;
  setResults: (results: SymptomResponse | null) => void;
  error: string | null;
  setError: (error: string | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [symptoms, setSymptoms] = useState('');
  const [results, setResults] = useState<SymptomResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        symptoms,
        setSymptoms,
        results,
        setResults,
        error,
        setError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};