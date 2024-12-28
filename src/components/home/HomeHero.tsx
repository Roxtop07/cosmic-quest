import React from 'react';
import { ChevronRight } from 'lucide-react';
import { PlanetViewer } from './PlanetViewer';
import { VideoBackground } from '../common/VideoBackground';

export function HomeHero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <VideoBackground />
      
      {/* Animated stars overlay */}
      <div className="absolute inset-0 bg-[url('https://assets.codepen.io/1538474/star.svg')] bg-repeat animate-twinkle opacity-50" />

      {/* Content */}
      <div className="relative container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
            Explore the Universe: Learn, Play, and Conquer the Cosmos
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl">
            Uncover the secrets of space through interactive quizzes, stunning visuals, and endless knowledge.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white font-medium hover:opacity-90 transition-opacity flex items-center group">
              Start Exploring
              <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full border-2 border-white/20 text-white font-medium hover:bg-white/10 transition-colors">
              Learn How It Works
            </button>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <PlanetViewer />
        </div>
      </div>
    </div>
  );
}