import React from 'react';
import { LogIn } from 'lucide-react';
import { GoogleSignIn } from './GoogleSignIn';

interface SignInFormProps {
  onToggleMode: () => void;
}

export function SignInForm({ onToggleMode }: SignInFormProps) {
  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent mb-2">
          Welcome Back
        </h2>
        <p className="text-white/70">Continue your cosmic journey</p>
      </div>

      <div className="space-y-6">
        <GoogleSignIn />
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-black text-white/50">Or continue with</span>
          </div>
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

        <div className="text-center space-y-2">
          <a href="#" className="block text-sm text-white/70 hover:text-white transition-colors">
            Forgot your password?
          </a>
          <p className="text-sm text-white/70">
            Don't have an account?{' '}
            <button
              onClick={onToggleMode}
              className="text-white hover:text-purple-400 transition-colors"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </>
  );
}