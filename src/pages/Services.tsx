
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import BadgeShowcase from '@/components/BadgeShowcase';

const Services = () => {
  return (
    <div className="min-h-screen bg-dark-300 text-white">
      <Navbar />
      
      <div className="pt-16">
        <ServicesSection />
        <BadgeShowcase />
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
