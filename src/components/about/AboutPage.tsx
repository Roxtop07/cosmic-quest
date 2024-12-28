import React from 'react';
import { Rocket, Star, Brain, Trophy, Target, Users } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import { LevelCard } from './LevelCard';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 bg-gradient-to-b from-blue-900/50 via-purple-900/50 to-orange-900/50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564')] bg-cover bg-fixed opacity-20" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
            Cosmic Quest: Unravel the Mysteries of the Universe
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Embark on a thrilling journey through the cosmos with Cosmic Quest, an interactive 
            educational game designed to take you from the basics of space to the deepest 
            mysteries of the universe.
          </p>
        </div>
      </div>

      {/* How it Works */}
      <section className="py-16 bg-gradient-to-b from-black to-blue-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            How the Game Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Brain}
              title="Start with Basics"
              description="Begin your journey with fundamental questions about space and unlock fascinating facts with each correct answer."
            />
            <FeatureCard
              icon={Trophy}
              title="Level Up"
              description="Progress through increasingly complex topics, from our Solar System to the deepest mysteries of the cosmos."
            />
            <FeatureCard
              icon={Target}
              title="Challenge Yourself"
              description="Test your knowledge with timed quizzes and special missions to earn achievements and unlock exclusive content."
            />
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="py-16 bg-gradient-to-b from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
            Your Journey Through Space
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <LevelCard
              level={1}
              title="Basics of Space"
              description="Learn about planets, stars, moons, and galaxies."
              color="from-blue-600 to-blue-400"
            />
            <LevelCard
              level={2}
              title="Solar System"
              description="Explore our cosmic neighborhood, from Mercury to the Kuiper Belt."
              color="from-purple-600 to-purple-400"
            />
            <LevelCard
              level={3}
              title="Milky Way Galaxy"
              description="Discover star systems, nebulae, and black holes."
              color="from-orange-600 to-orange-400"
            />
            <LevelCard
              level={4}
              title="Deep Space"
              description="Study exoplanets, quasars, and supernovae."
              color="from-pink-600 to-pink-400"
            />
            <LevelCard
              level={5}
              title="Cosmic Mysteries"
              description="Unravel dark matter, dark energy, and the universe's origins."
              color="from-red-600 to-red-400"
            />
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Who Can Play?
          </h2>
          <div className="flex items-center justify-center mb-8">
            <Users className="h-16 w-16 text-white/80" />
          </div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Whether you're a student, educator, space enthusiast, or simply curious about our 
            universe, Cosmic Quest is designed for everyone who wants to explore the wonders 
            of space in an engaging and interactive way.
          </p>
        </div>
      </section>
    </div>
  );
}