
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const Contact = () => {
  const location = useLocation();

  // Effect to scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative bg-gradient-blue text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-white/90">
                Get in touch with the ThinkOsphere team for any questions or inquiries
              </p>
            </div>
          </div>
        </div>

        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
