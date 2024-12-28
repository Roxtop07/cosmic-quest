import { useState, useCallback } from 'react';
import type { Question, GameStats } from '../types/game';

const INITIAL_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Which planet is known as the 'Red Planet'?",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    correct: 1,
    explanation: "Mars is called the Red Planet because of the reddish iron oxide (rust) that covers its surface."
  },
  {
    id: 2,
    text: "What is the largest planet in our solar system?",
    image: "https://images.unsplash.com/photo-1614314107768-6018061b5b72",
    options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
    correct: 1,
    explanation: "Jupiter is the largest planet in our solar system, with a mass more than twice that of all other planets combined."
  },
];

const POINTS_PER_QUESTION = 100;
const STREAK_BONUS_MULTIPLIER = 0.5;

export function useGameState() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [stats, setStats] = useState<GameStats>({
    score: 0,
    level: 1,
    progress: 0,
    streakCount: 0,
  });
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(false);

  const handleAnswer = useCallback((selectedIndex: number) => {
    const currentQuestion = INITIAL_QUESTIONS[currentQuestionIndex];
    const isCorrect = selectedIndex === currentQuestion.correct;
    
    setLastAnswerCorrect(isCorrect);
    setShowFeedback(true);

    if (isCorrect) {
      const streakBonus = Math.floor(POINTS_PER_QUESTION * (stats.streakCount * STREAK_BONUS_MULTIPLIER));
      const pointsEarned = POINTS_PER_QUESTION + streakBonus;

      setStats(prev => ({
        ...prev,
        score: prev.score + pointsEarned,
        streakCount: prev.streakCount + 1,
        progress: ((currentQuestionIndex + 1) / INITIAL_QUESTIONS.length) * 100
      }));
    } else {
      setStats(prev => ({
        ...prev,
        streakCount: 0,
        progress: ((currentQuestionIndex + 1) / INITIAL_QUESTIONS.length) * 100
      }));
    }
  }, [currentQuestionIndex, stats.streakCount]);

  const handleNext = useCallback(() => {
    setShowFeedback(false);
    if (currentQuestionIndex < INITIAL_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  }, [currentQuestionIndex]);

  return {
    currentQuestion: INITIAL_QUESTIONS[currentQuestionIndex],
    stats,
    showFeedback,
    lastAnswerCorrect,
    handleAnswer,
    handleNext,
  };
}