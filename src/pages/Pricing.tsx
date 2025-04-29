
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-dark-300 text-white">
      <Navbar />
      
      <div className="pt-16">
        <PricingSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Pricing;
