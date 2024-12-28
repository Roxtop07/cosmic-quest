import React from 'react';
import { Star, Trophy, Timer } from 'lucide-react';

export function GameHeader() {
  return (
    <div className="bg-gradient-to-r from-blue-900/50 via-purple-900/50 to-orange-900/50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-lg font-medium">2,450 Points</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-yellow-400" />
              <span className="text-lg font-medium">Level 3</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Timer className="h-5 w-5 text-orange-400" />
            <span className="text-lg font-medium">15:00</span>
          </div>
        </div>
      </div>
    </div>
  );
}