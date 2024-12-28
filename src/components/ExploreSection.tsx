import React from 'react';
import { Globe, Star, Orbit } from 'lucide-react';

const cards = [
  {
    icon: Globe, // Changed from Planet to Globe
    title: 'Exotic Planets',
    description: 'Discover mysterious worlds beyond our solar system',
  },
  {
    icon: Star,
    title: 'Stellar Phenomena',
    description: 'Witness the birth and death of stars across the cosmos',
  },
  {
    icon: Orbit,
    title: 'Black Holes',
    description: 'Venture near the most enigmatic objects in space',
  },
];

export function ExploreSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 via-purple-900 to-orange-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
          Explore the Cosmos
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
            >
              <card.icon className="h-12 w-12 mb-6 text-white/90 group-hover:text-orange-400 transition-colors" />
              <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
              <p className="text-white/70">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}