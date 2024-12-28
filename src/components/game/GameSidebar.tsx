import React from 'react';
import { Rocket, Star, Brain, Target } from 'lucide-react';
import { LevelProgress } from './LevelProgress';

export function GameSidebar() {
  return (
    <div className="w-80 bg-white/5 backdrop-blur-sm rounded-2xl p-6 space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Current Mission
        </h2>
        <div className="p-4 rounded-xl bg-white/5">
          <div className="flex items-center space-x-3 mb-3">
            <Rocket className="h-6 w-6 text-purple-400" />
            <h3 className="text-lg font-medium">Solar System Explorer</h3>
          </div>
          <p className="text-white/70">Complete quizzes about our solar system's planets and moons.</p>
        </div>
      </div>

      <LevelProgress
        level={3}
        progress={65}
        rewards={[
          { icon: Star, label: '100 Points', achieved: true },
          { icon: Brain, label: 'Expert Badge', achieved: false },
          { icon: Target, label: 'Mission Complete', achieved: false },
        ]}
      />
    </div>
  );
}