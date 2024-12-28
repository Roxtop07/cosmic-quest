import { celestialData } from '../data/celestialObjects';
import type { CelestialData } from '../types/celestial';

export function useCelestialData(type: 'planets' | 'asteroids' | 'dwarfPlanets'): CelestialData[] {
  return celestialData[type];
}