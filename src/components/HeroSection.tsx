
import React from 'react';
import CTAButton from './CTAButton';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-dark-400 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Red accent lines */}
      <div className="absolute left-0 top-1/4 w-full h-px bg-apex opacity-30"></div>
      <div className="absolute left-0 bottom-1/4 w-full h-px bg-apex opacity-30"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight">
            <span className="apex-gradient-text">DOMINATE</span> THE ARENA WITH <span className="apex-gradient-text">APEXBOOST13</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Secure your 4K damage badges, 20 bomb badges, and ranked boost services up to Apex Predator.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton size="lg" href="/cart">
              Bot Lobbies
            </CTAButton>
            <CTAButton variant="outline" size="lg" href="/ranked-boost">
              Ranked Boost
            </CTAButton>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-apex text-4xl md:text-5xl font-bold mb-2">100%</p>
              <p className="text-gray-400">Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-apex text-4xl md:text-5xl font-bold mb-2">24/7</p>
              <p className="text-gray-400">Support</p>
            </div>
            <div className="text-center">
              <p className="text-apex text-4xl md:text-5xl font-bold mb-2">500+</p>
              <p className="text-gray-400">Happy Players</p>
            </div>
            <div className="text-center">
              <p className="text-apex text-4xl md:text-5xl font-bold mb-2">3500+</p>
              <p className="text-gray-400">Badges Earned</p>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center items-start p-1">
              <div className="w-1.5 h-3 bg-apex rounded-full animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
