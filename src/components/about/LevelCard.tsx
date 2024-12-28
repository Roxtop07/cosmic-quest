import React from 'react';

interface LevelCardProps {
  level: number;
  title: string;
  description: string;
  color: string;
}

export function LevelCard({ level, title, description, color }: LevelCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all transform hover:-translate-y-1">
      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${color} flex items-center justify-center mb-4 mx-auto`}>
        <span className="text-white font-bold">{level}</span>
      </div>
      <h3 className="text-xl font-semibold text-white text-center mb-3">{title}</h3>
      <p className="text-white/70 text-center">{description}</p>
    </div>
  );
}