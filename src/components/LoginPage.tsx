import React from 'react';
import { LogIn } from 'lucide-react';

export function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-orange-900">
      {/* Animated stars background */}
      <div className="absolute inset-0 bg-[url('https://assets.codepen.io/1538474/star.svg')] bg-repeat animate-twinkle" />
      
      <div className="relative w-full max-w-md p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent mb-2">
            Welcome Back
          </h2>
          <p className="text-white/70">Continue your cosmic journey</p>
        </div>

        <form className="space-y-6">
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
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <LogIn className="h-5 w-5" />
            <span>Sign In</span>
          </button>
        </form>

        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
}