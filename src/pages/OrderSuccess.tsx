
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const OrderSuccess = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-dark-300 text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-dark-200 border border-gray-800 rounded-lg p-8 mb-8">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Order Placed <span className="apex-gradient-text">Successfully!</span>
            </h1>
            
            <p className="text-gray-400 mb-8">
              Thank you for your order! Our team will contact you via Discord shortly to coordinate the service. Please keep an eye on your Discord ticket.
            </p>
            
            <div className="bg-dark-300 border border-gray-800 rounded-lg p-6 mb-6 text-left">
              <h2 className="text-xl font-bold mb-3">Next Steps:</h2>
              <ol className="list-decimal pl-5 text-gray-400 space-y-2">
                <li>Our team will review your order details</li>
                <li>We'll contact you via your Discord ticket</li>
                <li>Confirm the service details and schedule</li>
                <li>Enjoy your boosting service!</li>
              </ol>
            </div>
            
            <p className="text-sm text-gray-500 mb-6">
              If you don't hear from us within 24 hours, please check your Discord server connection or contact us directly at contact@apexboost13.com
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                onClick={() => navigate('/')}
                className="bg-apex hover:bg-apex-light text-white"
              >
                Return to Home
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/services')}
              >
                Browse More Services
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OrderSuccess;
