import React from 'react';
import { motion } from 'framer-motion';
import { QuizQuestion } from './QuizQuestion';
import { QuizOptions } from './QuizOptions';
import { QuizFeedback } from './QuizFeedback';
import type { Question } from '../../../types/game';

interface QuizProps {
  question: Question;
  showFeedback: boolean;
  lastAnswerCorrect: boolean;
  onAnswer: (index: number) => void;
  onNext: () => void;
}

export function Quiz({ 
  question, 
  showFeedback, 
  lastAnswerCorrect, 
  onAnswer, 
  onNext 
}: QuizProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 space-y-8"
    >
      {showFeedback ? (
        <QuizFeedback
          isCorrect={lastAnswerCorrect}
          explanation={question.explanation}
          onNext={onNext}
        />
      ) : (
        <>
          <QuizQuestion
            text={question.text}
            image={question.image}
          />
          <QuizOptions
            options={question.options}
            onSelect={onAnswer}
          />
        </>
      )}
    </motion.div>
  );
}