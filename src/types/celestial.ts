export interface CelestialData {
  name: string;
  image: string;
  description: string;
  facts: string[];
  type: 'planet' | 'asteroid' | 'dwarfPlanet';
  diameter?: number;
  orbitalPeriod?: number;
}