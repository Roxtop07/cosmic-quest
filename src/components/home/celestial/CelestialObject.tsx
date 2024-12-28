import React from 'react';
import { motion } from 'framer-motion';
import { CelestialData } from '../../../types/celestial';

interface CelestialObjectProps {
  data: CelestialData;
  index: number;
}

export function CelestialObject({ data, index }: CelestialObjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {data.name}
          </h3>
          <p className="text-white/90 mb-4">{data.description}</p>
          <ul className="space-y-1">
            {data.facts.map((fact, i) => (
              <li key={i} className="text-sm text-white/70 flex items-center">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2" />
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}