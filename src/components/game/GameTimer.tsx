import React from 'react';
import { Timer } from 'lucide-react';
import { useTimer } from '../../hooks/useTimer';

interface GameTimerProps {
  initialTime: number;
  onTimeUp: () => void;
}

export function GameTimer({ initialTime, onTimeUp }: GameTimerProps) {
  const { timeLeft, formatTime, isRunning } = useTimer(initialTime);

  React.useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
    }
  }, [timeLeft, onTimeUp]);

  return (
    <div className="flex items-center space-x-2">
      <Timer className={`h-5 w-5 ${timeLeft < 30 ? 'text-red-400' : 'text-orange-400'}`} />
      <span className={`text-lg font-medium ${timeLeft < 30 ? 'text-red-400' : 'text-white'}`}>
        {formatTime()}
      </span>
    </div>
  );
}