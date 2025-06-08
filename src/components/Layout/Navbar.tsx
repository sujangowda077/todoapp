import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ActivitySquare, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  return (
    <nav className="bg-slate-900/80 backdrop-blur-lg sticky top-0 z-50 border-b border-primary-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <motion.div
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ActivitySquare className="h-6 w-6 text-white" />
              </motion.div>
              <span className="ml-3 text-xl font-title font-bold text-white">MediGuide<span className="text-primary-400">AI</span></span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/' ? 'text-white bg-primary-700/30' : 'text-slate-300 hover:bg-primary-700/20 hover:text-white'} transition-colors`}>
                Home
              </Link>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-primary-700/20 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="#" className="btn-primary text-sm py-2">
                Try Pro Version
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-primary-700/20 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800/90 backdrop-blur-lg border-b border-primary-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/' ? 'text-white bg-primary-700/30' : 'text-slate-300 hover:bg-primary-700/20 hover:text-white'} transition-colors`}>
              Home
            </Link>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-primary-700/20 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary-600 hover:bg-primary-500 transition-colors">
              Try Pro Version
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;