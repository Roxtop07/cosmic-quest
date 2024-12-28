import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { VideoBackground } from '../common/VideoBackground';

export function ContactPage() {
  return (
    <div className="min-h-screen relative">
      <VideoBackground />
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}