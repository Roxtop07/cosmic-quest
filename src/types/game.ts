// Game types
export interface Question {
  id: number;
  text: string;
  image?: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface GameStats {
  score: number;
  level: number;
  progress: number;
  streakCount: number;
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  totalQuestions: number;
  completedQuestions: number;
  rewards: Reward[];
}

export interface Reward {
  id: string;
  icon: string;
  label: string;
  achieved: boolean;
  requiredScore?: number;
}