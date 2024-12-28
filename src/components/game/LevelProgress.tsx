import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Reward {
  icon: LucideIcon;
  label: string;
  achieved: boolean;
}

interface LevelProgressProps {
  level: number;
  progress: number;
  rewards: Reward[];
}

export function LevelProgress({ level, progress, rewards }: LevelProgressProps) {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-white/70">Level {level} Progress</span>
          <span className="text-sm font-medium">{progress}%</span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Level Rewards</h3>
        <div className="space-y-3">
          {rewards.map((reward, index) => (
            <div 
              key={index}
              className={`flex items-center space-x-3 p-2 rounded-lg ${
                reward.achieved ? 'bg-purple-500/20' : 'bg-white/5'
              }`}
            >
              <reward.icon className={`h-5 w-5 ${
                reward.achieved ? 'text-purple-400' : 'text-white/50'
              }`} />
              <span className={reward.achieved ? 'text-white' : 'text-white/50'}>
                {reward.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}