
import React from 'react';
import CTAButton from './CTAButton';

const BadgeCard = ({ title, image, description }: { title: string; image: string; description: string }) => (
  <div className="bg-dark-200 border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-apex/50 group">
    <div className="relative h-48 overflow-hidden">
      <div 
        className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-300 to-transparent"></div>
      <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{title}</h3>
    </div>
    <div className="p-5">
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

const BadgeShowcase = () => {
  const badges = [
    {
      title: "4K Damage Badge",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description: "Show off your legend's prowess with the prestigious 4K damage badge that proves your ability to deal massive damage in a single match."
    },
    {
      title: "20 Bomb Badge",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description: "The ultimate flex - display your lethal skills with the coveted 20 kill badge that only the elite players earn."
    },
    {
      title: "Apex Predator",
      image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description: "Reach the pinnacle of Apex Legends ranked play with our boosting service to Apex Predator, reserved for only the top players."
    }
  ];

  return (
    <section id="badges" className="py-20 bg-dark-400">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Earn <span className="apex-gradient-text">Prestigious Badges</span>
          </h2>
          <p className="text-gray-400">
            Showcase your skills and intimidate your opponents with these exclusive badges that are difficult to earn in regular gameplay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <BadgeCard
              key={index}
              title={badge.title}
              image={badge.image}
              description={badge.description}
            />
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center">
          <div className="p-8 bg-dark-200 border border-gray-800 rounded-lg max-w-3xl">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Why These Badges Matter</h3>
            <p className="text-gray-400 mb-6">
              In the competitive world of Apex Legends, badges are more than just cosmetics. They're a statement of your skill and experience, 
              earning you respect from teammates and striking fear into opponents before the match even begins.
            </p>
            <div className="flex justify-center">
              <CTAButton variant="solid" href="/cart">Get Your Badges Today</CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BadgeShowcase;
