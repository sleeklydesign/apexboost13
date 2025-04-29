
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible!",
      duration: 5000,
    });
    
    // Reset form (in a real app, you would send this data to your backend)
    (e.target as HTMLFormElement).reset();
  };
  
  return (
    <div className="min-h-screen bg-dark-300 text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white text-center">
            <span className="apex-gradient-text">Contact</span> Us
          </h1>
          
          <div className="bg-dark-200 border border-gray-800 rounded-lg p-8">
            <p className="text-gray-400 mb-8 text-center">
              Have questions about our services? Reach out to our team and we'll get back to you as soon as possible.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    required 
                    className="bg-dark-300 border-gray-700 text-white" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    required 
                    className="bg-dark-300 border-gray-700 text-white" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="What is this regarding?" 
                  required 
                  className="bg-dark-300 border-gray-700 text-white" 
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  rows={5} 
                  required 
                  className="bg-dark-300 border-gray-700 text-white resize-none" 
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-apex hover:bg-apex-light text-white"
              >
                Send Message
              </Button>
            </form>
            
            <div className="mt-8 pt-6 border-t border-gray-800">
              <h3 className="text-xl font-bold mb-4">Other Ways to Reach Us</h3>
              <div className="space-y-3 text-gray-400">
                <p>
                  <span className="font-bold text-white">Discord:</span> ApexBoost13#1234
                </p>
                <p>
                  <span className="font-bold text-white">Email:</span> contact@apexboost13.com
                </p>
                <p>
                  <span className="font-bold text-white">Hours:</span> 24/7 Support Available
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
