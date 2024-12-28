import { useState } from 'react';

export function useAppState() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  const handleOpenAuth = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  const handleCloseAuth = () => setIsAuthOpen(false);

  const handleToggleAuthMode = () => {
    setAuthMode(mode => mode === 'signin' ? 'signup' : 'signin');
  };

  const handleNavigate = (page: 'home' | 'about') => {
    setCurrentPage(page);
  };

  return {
    isAuthOpen,
    authMode,
    currentPage,
    handleOpenAuth,
    handleCloseAuth,
    handleToggleAuthMode,
    handleNavigate
  };
}