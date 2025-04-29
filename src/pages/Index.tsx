
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import BadgeShowcase from '@/components/BadgeShowcase';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();

  React.useEffect(() => {
    // Show welcome toast after a short delay
    const timer = setTimeout(() => {
      toast({
        title: "Welcome to ApexBoost13",
        description: "Your premier Apex Legends boosting service!",
        duration: 5000,
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <div className="min-h-screen bg-dark-300 text-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <BadgeShowcase />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
