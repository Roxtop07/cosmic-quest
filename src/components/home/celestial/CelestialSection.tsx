import React from 'react';
import { CelestialObject } from './CelestialObject';
import { useCelestialData } from '../../../hooks/useCelestialData';

interface CelestialSectionProps {
  title: string;
  type: 'planets' | 'asteroids' | 'dwarfPlanets';
}

export function CelestialSection({ title, type }: CelestialSectionProps) {
  const celestialObjects = useCelestialData(type);

  return (
    <section className="py-20 bg-gradient-to-b from-black to-blue-900/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {celestialObjects.map((object, index) => (
            <CelestialObject
              key={object.name}
              data={object}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}