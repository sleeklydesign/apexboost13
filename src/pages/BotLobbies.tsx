
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const BotLobbies = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-dark-300 text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            <span className="apex-gradient-text">Bot Lobbies</span> Service
          </h1>
          
          <div className="bg-dark-200 border border-gray-800 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">How Bot Lobbies Work</h2>
            <p className="text-gray-400 mb-6">
              Our bot lobbies provide a controlled environment where you can easily earn badges like the 4K damage
              and 20 bomb. These lobbies are filled with inactive bots that allow you to rack up damage and kills
              without the usual competition of regular matches.
            </p>
            
            <h3 className="text-xl font-bold mb-3">Benefits:</h3>
            <ul className="list-disc pl-5 text-gray-400 mb-6">
              <li className="mb-2">Guaranteed 4K damage opportunity</li>
              <li className="mb-2">Easy 20+ kill games</li>
              <li className="mb-2">Unlock multiple badges in one session</li>
              <li className="mb-2">Safe and undetectable</li>
              <li>Professional guidance available</li>
            </ul>
            
            <Button 
              onClick={() => navigate('/pricing')}
              className="bg-apex hover:bg-apex-light text-white mt-4"
            >
              View Bot Lobby Pricing
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

export default BotLobbies;
