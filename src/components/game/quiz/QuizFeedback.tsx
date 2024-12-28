import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

interface QuizFeedbackProps {
  isCorrect: boolean;
  explanation: string;
  onNext: () => void;
}

export function QuizFeedback({ isCorrect, explanation, onNext }: QuizFeedbackProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center space-x-3">
        {isCorrect ? (
          <CheckCircle className="h-6 w-6 text-green-400" />
        ) : (
          <XCircle className="h-6 w-6 text-red-400" />
        )}
        <span className={`text-xl font-medium ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
          {isCorrect ? 'Correct!' : 'Incorrect'}
        </span>
      </div>

      <p className="text-white/80">{explanation}</p>

      <button
        onClick={onNext}
        className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
      >
        Next Question
      </button>
    </motion.div>
  );
}