import React from 'react';
import { PricingCard } from './PricingCard';
import { Rocket, Star, Crown } from 'lucide-react';

export function PricingPlans() {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-20">
      <PricingCard
        icon={Rocket}
        title="Explorer"
        price="Free"
        features={[
          'Basic quizzes and challenges',
          'Progress tracking',
          'Community access',
          'Limited missions'
        ]}
        buttonText="Start Free"
        popular={false}
      />
      <PricingCard
        icon={Star}
        title="Voyager"
        price="$9.99"
        period="/month"
        features={[
          'All Explorer features',
          'Advanced missions',
          'Detailed explanations',
          'Progress certificates',
          'Priority support'
        ]}
        buttonText="Start Trial"
        popular={true}
      />
      <PricingCard
        icon={Crown}
        title="Pioneer"
        price="$99.99"
        period="/year"
        features={[
          'All Voyager features',
          'Exclusive content',
          'Personal mentor',
          'Custom learning path',
          'Team collaboration'
        ]}
        buttonText="Get Started"
        popular={false}
      />
    </div>
  );
}