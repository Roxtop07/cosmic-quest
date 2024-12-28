import React from 'react';
import { PricingPlans } from './PricingPlans';
import { PricingFAQ } from './PricingFAQ';
import { VideoBackground } from '../common/VideoBackground';

export function PricingPage() {
  return (
    <div className="min-h-screen relative">
      <VideoBackground />
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
            Choose Your Journey
          </h1>
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Select the perfect plan to explore the cosmos and expand your knowledge
          </p>
          <PricingPlans />
          <PricingFAQ />
        </div>
      </div>
    </div>
  );
}