import React from 'react';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564')] 
        bg-cover bg-center bg-fixed"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-orange-900/90" />
      </div>

      {/* Animated stars */}
      <div className="absolute inset-0 bg-[url('https://assets.codepen.io/1538474/star.svg')] bg-repeat animate-twinkle" />

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
          Discover the Secrets of the Universe
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
          An interactive journey to explore the wonders of space and beyond
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white font-medium hover:opacity-90 transition-opacity flex items-center">
            Start Your Adventure
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
          <button className="px-8 py-4 rounded-full border-2 border-white/20 text-white font-medium hover:bg-white/10 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}