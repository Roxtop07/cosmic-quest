import React, { useState, useEffect } from 'react';
import { Quiz } from './quiz/Quiz';
import { useGameState } from '../../hooks/useGameState';
import { Question } from '../../types/Question'; // Adjust the import path as necessary

type GameStats = {
  score: number;
  questionsAnswered: number;
  correctAnswers: number;
  totalQuestions: number;
};

type Stats = {
  score: number;
  questionsAnswered: number;
  correctAnswers: number;
  totalQuestions: number;
};

export function GameContent() {
  const {
    currentQuestion,
    stats,
    handleAnswer,
  }: {
    currentQuestion: Question | null;
    stats: GameStats;
    handleAnswer: (selectedIndex: number) => void;
    showFeedback: boolean;
    lastAnswerCorrect: boolean;
    handleNext: () => void;
  } = useGameState(); // Ensure correct destructuring and type annotation

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (currentQuestion) {
      setLoading(false); // Stop loading when question is fetched
    }
  }, [currentQuestion]);

  const progress: string = (
    (stats.questionsAnswered / stats.totalQuestions) *
    100
  ).toFixed(2);

  const accuracy: string = stats.questionsAnswered
    ? (
        (stats.correctAnswers / stats.questionsAnswered) *
        100
      ).toFixed(2)
    : '0';

  return (
    <div className="flex-1 p-4 space-y-6">
      {loading ? (
        <div className="text-center text-lg font-semibold">Loading question...</div>
      ) : (
        <>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-600 h-4 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 text-right">{progress}% Completed</p>

          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
            <div>
              <p className="text-gray-700 font-bold">Score:</p>
              <p>{stats.score}</p>
            </div>
            <div>
              <p className="text-gray-700 font-bold">Accuracy:</p>
              <p>{accuracy}%</p>
            </div>
            <div>
              <p className="text-gray-700 font-bold">Questions Answered:</p>
              <p>
                {stats.questionsAnswered}/{stats.totalQuestions}
              </p>
            </div>
          </div>

          <Quiz
            question={currentQuestion}
            onAnswer={handleAnswer}
            score={stats.score}
          />
        </>
      )}
    </div>
  );
}
