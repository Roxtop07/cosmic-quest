import React from 'react';
import { GameHeader } from './GameHeader';
import { GameContent } from './GameContent';
import { GameSidebar } from './GameSidebar';

export function GamePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <GameHeader />
      <div className="container mx-auto px-4 py-8 flex gap-8">
        <GameSidebar />
        <GameContent />
      </div>
    </div>
  );
}