
import React from 'react';
import { 
  Users, 
  TrendingUp, 
  Shield 
} from 'lucide-react';
import CTAButton from './CTAButton';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  learnMoreLink: string;
}

const ServiceCard = ({ title, description, icon, learnMoreLink }: ServiceCardProps) => (
  <div className="bg-dark-200 border border-gray-800 rounded-lg p-6 transition-all duration-300 hover:border-apex/50 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-apex/10">
    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-apex/10 text-apex mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <CTAButton variant="ghost" size="sm" href={learnMoreLink}>Learn More</CTAButton>
  </div>
);

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-dark-300">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 apex-gradient-text">Our Premium Services</h2>
          <p className="text-gray-400">
            We offer professional boosting services to help you achieve your desired badges and ranks in Apex Legends. Our team of experts ensures fast and reliable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="AFK Bot Lobbies"
            description="Join our specialized bot lobbies where you can easily farm kills and damage to earn your 4K damage and 20 bomb badges without the sweat."
            icon={<Users className="w-6 h-6" />}
            learnMoreLink="/bot-lobbies"
          />
          <ServiceCard
            title="Ranked Boosting"
            description="Our skilled boosters will help you climb the ranked ladder, from Bronze all the way up to Apex Predator. Fast, secure, and guaranteed results."
            icon={<TrendingUp className="w-6 h-6" />}
            learnMoreLink="/ranked-boost"
          />
          <ServiceCard
            title="Account Security"
            description="Your account security is our top priority. All our services are performed with strict privacy protocols and account protection measures."
            icon={<Shield className="w-6 h-6" />}
            learnMoreLink="/services"
          />
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Ready to dominate the arena?</h3>
          <CTAButton size="lg" href="/cart">Get Started Now</CTAButton>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
