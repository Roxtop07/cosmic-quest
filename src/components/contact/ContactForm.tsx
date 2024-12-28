import React from 'react';
import { Send } from 'lucide-react';

export function ContactForm() {
  return (
    <form className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
          placeholder="Your message"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white rounded-lg hover:opacity-90 transition-opacity"
      >
        <Send className="h-5 w-5" />
        <span>Send Message</span>
      </button>
    </form>
  );
}