
import React from 'react';
import CTAButton from './CTAButton';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

interface PricingPlanProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const PricingPlan = ({ title, price, features, isPopular = false }: PricingPlanProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleAddToCart = () => {
    // Get the existing cart items or initialize an empty array
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Add the current item to cart
    const newItem = {
      id: Date.now(), // Use timestamp as a simple unique ID
      name: title,
      price: parseFloat(price.replace('$', '')),
      quantity: 1
    };
    
    // Add to cart
    const updatedCart = [...existingCart, newItem];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    // Show success toast
    toast({
      title: "Added to cart",
      description: `${title} has been added to your cart.`,
    });
  };

  return (
    <div className={`
      bg-dark-200 border rounded-lg overflow-hidden transition-all duration-300
      ${isPopular ? 'border-apex shadow-lg shadow-apex/20 transform scale-105' : 'border-gray-800 hover:border-gray-700'}
    `}>
      {isPopular && (
        <div className="bg-apex text-white text-center py-2 font-bold">
          MOST POPULAR
        </div>
      )}
      
      <div className="p-8">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-gray-400 ml-2">/service</span>
        </div>
        
        <ul className="mb-8 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-apex mr-3">✓</span>
              <span className="text-gray-400">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="space-y-3">
          <Button 
            className="w-full bg-apex hover:bg-apex-light text-white"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
          
          <CTAButton 
            variant="outline" 
            className="w-full"
            size="md"
            href="/contact"
          >
            Contact Support
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-dark-300">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 apex-gradient-text">Affordable Pricing</h2>
          <p className="text-gray-400">
            Choose the perfect plan that fits your needs. All plans include 24/7 support and guaranteed results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingPlan
            title="Bot Lobby Basic"
            price="$29.99"
            features={[
              "1-hour bot lobby session",
              "4K damage badge opportunity",
              "Basic instructions",
              "Email support"
            ]}
          />
          
          <PricingPlan
            title="Premium Package"
            price="$59.99"
            features={[
              "3-hour bot lobby session",
              "4K damage + 20 bomb opportunity",
              "Live guidance",
              "24/7 Discord support",
              "Account security guarantee"
            ]}
            isPopular={true}
          />
          
          <PricingPlan
            title="Ranked Boost"
            price="$99.99+"
            features={[
              "Professional boosters",
              "Rank-up guarantee",
              "Fast completion",
              "24/7 Discord support",
              "VPN protection included"
            ]}
          />
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            Not finding what you're looking for? We offer custom packages tailored to your needs.
          </p>
          <CTAButton variant="ghost" href="/contact">Contact Us for Custom Plans</CTAButton>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
