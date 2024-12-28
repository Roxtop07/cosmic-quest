import React from 'react';
import { HomeHero } from './HomeHero';
import { ExploreSection } from '../ExploreSection';
import { CelestialSection } from './celestial/CelestialSection';

export function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <HomeHero />
      <ExploreSection />
      <CelestialSection title="Explore Our Planets" type="planets" />
      <CelestialSection title="Dwarf Planets" type="dwarfPlanets" />
      <CelestialSection title="Notable Asteroids" type="asteroids" />
    </main>
  );
}