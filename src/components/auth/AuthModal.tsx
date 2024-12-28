import React from 'react';
import { X } from 'lucide-react';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'signin' | 'signup';
  onToggleMode: () => void;
}

export function AuthModal({ isOpen, onClose, mode, onToggleMode }: AuthModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-md p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-white/70 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {mode === 'signin' ? (
          <SignInForm onToggleMode={onToggleMode} />
        ) : (
          <SignUpForm onToggleMode={onToggleMode} />
        )}
      </div>
    </div>
  );
}