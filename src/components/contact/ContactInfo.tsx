import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactCard } from './ContactCard';

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <ContactCard
        icon={MapPin}
        title="Visit Us"
        content="123 Space Station, Cosmic Avenue, Galaxy Center"
      />
      <ContactCard
        icon={Phone}
        title="Call Us"
        content="+1 (555) 123-4567"
      />
      <ContactCard
        icon={Mail}
        title="Email Us"
        content="contact@cosmicquest.com"
      />
    </div>
  );
}