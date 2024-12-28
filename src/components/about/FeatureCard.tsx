import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
      <div className="flex items-center justify-center mb-4">
        <Icon className="h-10 w-10 text-purple-400" />
      </div>
      <h3 className="text-xl font-semibold text-white text-center mb-3">{title}</h3>
      <p className="text-white/70 text-center">{description}</p>
    </div>
  );
}