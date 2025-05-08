
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  hideHero?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title, subtitle, hideHero = false }) => {
  const location = useLocation();

  // Effect to scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      <Navbar />
      <div className="w-full">
        {!hideHero && (
          <div className="relative bg-gradient-blue text-white py-12 md:py-16 lg:py-24 w-full">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">{title}</h1>
                {subtitle && (
                  <p className="text-lg md:text-xl text-white/90">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="w-full">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
