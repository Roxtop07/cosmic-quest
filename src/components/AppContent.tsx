import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { AuthModal } from './auth/AuthModal';
import { AboutPage } from './about/AboutPage';
import { HomePage } from './home/HomePage';

interface AppContentProps {
  isAuthOpen: boolean;
  authMode: 'signin' | 'signup';
  currentPage: 'home' | 'about';
  onOpenAuth: (mode: 'signin' | 'signup') => void;
  onCloseAuth: () => void;
  onToggleAuthMode: () => void;
  onNavigate: (page: 'home' | 'about') => void;
}

export function AppContent({
  isAuthOpen,
  authMode,
  currentPage,
  onOpenAuth,
  onCloseAuth,
  onToggleAuthMode,
  onNavigate
}: AppContentProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header 
        onSignIn={() => onOpenAuth('signin')} 
        onNavigate={onNavigate}
      />
      
      {currentPage === 'home' ? <HomePage /> : <AboutPage />}
      
      <Footer />
      <AuthModal
        isOpen={isAuthOpen}
        onClose={onCloseAuth}
        mode={authMode}
        onToggleMode={onToggleAuthMode}
      />
    </div>
  );
}