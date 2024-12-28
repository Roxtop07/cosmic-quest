import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
}

export function ContactCard({ icon: Icon, title, content }: ContactCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-purple-500/20 rounded-lg">
          <Icon className="h-6 w-6 text-purple-400" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-white mb-1">{title}</h3>
          <p className="text-white/70">{content}</p>
        </div>
      </div>
    </div>
  );
}