import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-lg border-t border-primary-500/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <div className="mt-8 md:mt-0">
            <p className="text-center md:text-right text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} MediGuide AI. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 border-t border-slate-700 pt-8 text-center md:flex md:items-center md:justify-between">
          <div className="text-sm text-slate-400">
            <p>Not a substitute for professional medical advice.</p>
            <p className="mt-1">Always consult a qualified healthcare provider.</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;