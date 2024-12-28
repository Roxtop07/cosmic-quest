import React from 'react';
import { LucideIcon, Check } from 'lucide-react';

interface PricingCardProps {
  icon: LucideIcon;
  title: string;
  price: string;
  period?: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

export function PricingCard({
  icon: Icon,
  title,
  price,
  period,
  features,
  buttonText,
  popular = false
}: PricingCardProps) {
  return (
    <div className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 ${
      popular ? 'ring-2 ring-purple-500 scale-105' : ''
    }`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="flex flex-col items-center mb-8">
        <div className="p-3 bg-purple-500/20 rounded-lg mb-4">
          <Icon className="h-8 w-8 text-purple-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <div className="text-center">
          <span className="text-4xl font-bold text-white">{price}</span>
          {period && <span className="text-white/70">{period}</span>}
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3 text-white/80">
            <Check className="h-5 w-5 text-purple-400 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-3 px-4 rounded-lg transition-opacity ${
        popular
          ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500'
          : 'bg-white/10 hover:bg-white/20'
      } text-white`}>
        {buttonText}
      </button>
    </div>
  );
}