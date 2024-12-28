import React from 'react';
import { Rocket, Menu } from 'lucide-react';
import { NavLink } from './NavLink';

interface HeaderProps {
  onSignIn: () => void;
  onNavigate: (page: 'home' | 'about') => void;
}

export function Header({ onSignIn, onNavigate }: HeaderProps) {
  return (
    <header className="fixed w-full z-50 bg-gradient-to-b from-black/50 to-transparent">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
              CosmicQuest
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => onNavigate('home')} className="text-white/90 font-medium hover:text-transparent hover:bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hover:bg-clip-text transition-colors">
              Home
            </button>
            <button onClick={() => onNavigate('about')} className="text-white/90 font-medium hover:text-transparent hover:bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hover:bg-clip-text transition-colors">
              About the Game
            </button>
            <NavLink href="/explore">Explore the Universe</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={onSignIn}
              className="hidden md:block px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white font-medium hover:opacity-90 transition-opacity"
            >
              Sign In
            </button>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}