
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const RankedBoost = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-dark-300 text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            <span className="apex-gradient-text">Ranked Boost</span> Service
          </h1>
          
          <div className="bg-dark-200 border border-gray-800 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Ranked Boosting Details</h2>
            <p className="text-gray-400 mb-6">
              Our professional boosters will help you climb the ranked ladder in Apex Legends, 
              from Bronze all the way to Apex Predator. We offer fast, secure, and guaranteed results.
            </p>
            
            <h3 className="text-xl font-bold mb-3">Our Ranked Services:</h3>
            <ul className="list-disc pl-5 text-gray-400 mb-6">
              <li className="mb-2">Bronze to Diamond boosting</li>
              <li className="mb-2">Master & Predator boosting</li>
              <li className="mb-2">Rank maintenance services</li>
              <li className="mb-2">Split/Season placement matches</li>
              <li>Account security guaranteed</li>
            </ul>
            
            <Button 
              onClick={() => navigate('/pricing')}
              className="bg-apex hover:bg-apex-light text-white mt-4"
            >
              View Ranked Boost Pricing
            </Button>
          </div>
          
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="mr-4"
            >
              Back to Home
            </Button>
            <Button
              onClick={() => navigate('/contact')}
              className="bg-apex hover:bg-apex-light text-white"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RankedBoost;
