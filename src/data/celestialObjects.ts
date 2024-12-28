export const celestialData = {
  planets: [
    {
      name: 'Mercury',
      image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5',
      description: 'The smallest and innermost planet, scorched by the Sun.',
      facts: ['Closest to the Sun', 'No moons', 'Extreme temperature variations'],
      type: 'planet',
      diameter: 4879,
      orbitalPeriod: 88
    },
    // ... existing planets data
  ],
  
  dwarfPlanets: [
    {
      name: 'Pluto',
      image: 'https://images.unsplash.com/photo-1614314107768-6018061b5b72',
      description: 'A dwarf planet in the Kuiper Belt.',
      facts: ['Former planet', '5 known moons', 'Heart-shaped region'],
      type: 'dwarfPlanet',
      diameter: 2377
    },
    {
      name: 'Ceres',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9',
      description: 'The largest object in the asteroid belt.',
      facts: ['Round dwarf planet', 'Contains water ice', 'Possible subsurface ocean'],
      type: 'dwarfPlanet',
      diameter: 940
    }
  ],
  
  asteroids: [
    {
      name: 'Vesta',
      image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6',
      description: 'Second-largest asteroid in the main belt.',
      facts: ['Protoplanet', 'Partially differentiated', 'Massive impact crater'],
      type: 'asteroid',
      diameter: 525
    },
    {
      name: 'Pallas',
      image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5',
      description: 'One of the largest asteroids in the Solar System.',
      facts: ['High orbital inclination', 'Very bright', 'Highly cratered surface'],
      type: 'asteroid',
      diameter: 512
    },
    {
      name: 'Hygiea',
      image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4',
      description: 'Fourth-largest asteroid in the main belt.',
      facts: ['Nearly spherical', 'Dark surface', 'Possible dwarf planet'],
      type: 'asteroid',
      diameter: 434
    }
  ]
} as const;