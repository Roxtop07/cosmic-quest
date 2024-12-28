import React from 'react';
import { UserPlus } from 'lucide-react';

interface SignUpFormProps {
  onToggleMode: () => void;
}

export function SignUpForm({ onToggleMode }: SignUpFormProps) {
  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent mb-2">
          Join the Adventure
        </h2>
        <p className="text-white/70">Create your cosmic account</p>
      </div>

      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-white/50"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-white/50"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-white/90 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-white/50"
            placeholder="Create a password"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          <UserPlus className="h-5 w-5" />
          <span>Create Account</span>
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-white/70">
          Already have an account?{' '}
          <button
            onClick={onToggleMode}
            className="text-white hover:text-purple-400 transition-colors"
          >
            Sign In
          </button>
        </p>
      </div>
    </>
  );
}