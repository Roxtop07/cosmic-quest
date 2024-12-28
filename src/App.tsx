import React from 'react';
import { AppContent } from './components/AppContent';
import { useAppState } from './hooks/useAppState';

export default function App() {
  const { 
    isAuthOpen, 
    authMode, 
    currentPage, 
    handleOpenAuth, 
    handleCloseAuth, 
    handleToggleAuthMode, 
    handleNavigate 
  } = useAppState();

  return (
    <AppContent
      isAuthOpen={isAuthOpen}
      authMode={authMode}
      currentPage={currentPage}
      onOpenAuth={handleOpenAuth}
      onCloseAuth={handleCloseAuth}
      onToggleAuthMode={handleToggleAuthMode}
      onNavigate={handleNavigate}
    />
  );
}