import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useAppContext } from '../../context/AppContext';
import ErrorToast from '../UI/ErrorToast';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { error } = useAppContext();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      {error && <ErrorToast message={error} />}
    </div>
  );
};

export default Layout;