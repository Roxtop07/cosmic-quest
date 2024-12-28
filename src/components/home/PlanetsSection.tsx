import React from 'react';
import { motion } from 'framer-motion';

const planets = [
  {
    name: 'Mercury',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5',
    description: 'The smallest and innermost planet, scorched by the Sun.',
    facts: ['Closest to the Sun', 'No moons', 'Extreme temperature variations']
  },
  {
    name: 'Venus',
    image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6',
    description: 'Often called Earth\'s twin due to similar size.',
    facts: ['Hottest planet', 'Toxic atmosphere', 'Spins backwards']
  },
  {
    name: 'Earth',
    image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4',
    description: 'Our home planet, the only known world with life.',
    facts: ['Liquid water', 'Perfect for life', 'One natural satellite']
  },
  {
    name: 'Mars',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9',
    description: 'The Red Planet, featuring massive volcanoes.',
    facts: ['Red color', 'Two moons', 'Possible future colony']
  },
  {
    name: 'Jupiter',
    image: 'https://images.unsplash.com/photo-1614314107768-6018061b5b72',
    description: 'The largest planet in our solar system.',
    facts: ['Great Red Spot', '79 moons', 'Strongest magnetic field']
  },
  {
    name: 'Saturn',
    image: 'https://images.unsplash.com/photo-1614732484003-ef9881555dc3',
    description: 'Known for its stunning ring system.',
    facts: ['Beautiful rings', '82 moons', 'Least dense planet']
  },
  {
    name: 'Uranus',
    image: 'https://images.unsplash.com/photo-1614732484003-ef9881555dc3',
    description: 'The tilted ice giant of our solar system.',
    facts: ['Tilted axis', 'Ice giant', '27 known moons']
  },
  {
    name: 'Neptune',
    image: 'https://images.unsplash.com/photo-1614314107768-6018061b5b72',
    description: 'The windiest planet, with supersonic storms.',
    facts: ['Strongest winds', '14 moons', 'Great Dark Spot']
  }
];

export function PlanetsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-blue-900/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
          Explore Our Solar System
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {planets.map((planet, index) => (
            <motion.div
              key={planet.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={planet.image}
                  alt={planet.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {planet.name}
                  </h3>
                  <p className="text-white/90 mb-4">{planet.description}</p>
                  <ul className="space-y-1">
                    {planet.facts.map((fact, i) => (
                      <li key={i} className="text-sm text-white/70 flex items-center">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2" />
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}