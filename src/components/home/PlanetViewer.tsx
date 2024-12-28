import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const planets = [
  {
    id: 'mercury',
    name: 'Mercury',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5',
    description: 'The smallest and innermost planet, scorched by the Sun.'
  },
  {
    id: 'venus',
    name: 'Venus',
    image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6',
    description: 'Often called Earth\'s twin due to similar size and mass.'
  },
  {
    id: 'earth',
    name: 'Earth',
    image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4',
    description: 'Our home planet, the only known world to harbor life.'
  },
  {
    id: 'mars',
    name: 'Mars',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9',
    description: 'The Red Planet, featuring the tallest volcano in the solar system.'
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    image: 'https://images.unsplash.com/photo-1614314107768-6018061b5b72',
    description: 'The largest planet, with its iconic Great Red Spot storm.'
  },
  {
    id: 'saturn',
    name: 'Saturn',
    image: 'https://images.unsplash.com/photo-1614732484003-ef9881555dc3',
    description: 'Known for its stunning rings made of ice and rock particles.'
  },
  {
    id: 'uranus',
    name: 'Uranus',
    image: 'https://images.unsplash.com/photo-1614314107768-6018061b5b72',
    description: 'The tilted ice giant with unique sideways rotation.'
  },
  {
    id: 'neptune',
    name: 'Neptune',
    image: 'https://images.unsplash.com/photo-1614732484003-ef9881555dc3',
    description: 'The windiest planet, with supersonic storms.'
  }
];

export function PlanetViewer() {
  const [activePlanet, setActivePlanet] = useState(planets[0]);
  const [isHovered, setIsHovered] = useState(false);

  const handleNextPlanet = () => {
    const currentIndex = planets.findIndex(p => p.id === activePlanet.id);
    const nextIndex = (currentIndex + 1) % planets.length;
    setActivePlanet(planets[nextIndex]);
  };

  return (
    <div className="relative w-full aspect-square max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={activePlanet.id}
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 1.2, rotate: 10 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full cursor-pointer group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleNextPlanet}
        >
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <img
              src={activePlanet.image}
              alt={activePlanet.name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          
          {/* Info overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
            <div className="text-center p-8">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {activePlanet.name}
              </h3>
              <p className="text-white/90">
                {activePlanet.description}
              </p>
            </div>
          </div>

          {/* Planet indicator dots */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {planets.map((planet, index) => (
              <div
                key={planet.id}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  planet.id === activePlanet.id
                    ? 'bg-purple-400 w-4'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePlanet(planet);
                }}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Click hint */}
      <div className={`absolute -bottom-24 left-1/2 transform -translate-x-1/2 text-white/70 text-sm transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        Click to explore different planets
      </div>
    </div>
  );
}