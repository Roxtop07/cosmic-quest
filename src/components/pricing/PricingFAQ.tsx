import React from 'react';
import { FAQItem } from './FAQItem';

export function PricingFAQ() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        <FAQItem
          question="How does the free trial work?"
          answer="You can try all Voyager features free for 14 days. No credit card required."
        />
        <FAQItem
          question="Can I switch plans later?"
          answer="Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
        />
        <FAQItem
          question="Is there a student discount?"
          answer="Yes! Students get 50% off any plan with valid student ID."
        />
        <FAQItem
          question="What payment methods do you accept?"
          answer="We accept all major credit cards, PayPal, and Apple Pay."
        />
      </div>
    </div>
  );
}