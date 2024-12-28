import React from 'react';
import { Flame } from 'lucide-react';
import { motion } from 'framer-motion';

interface StreakIndicatorProps {
  streak: number;
}

export function StreakIndicator({ streak }: StreakIndicatorProps) {
  if (streak === 0) return null;

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/20"
    >
      <Flame className="h-5 w-5 text-orange-400" />
      <span className="font-medium text-orange-400">x{streak}</span>
    </motion.div>
  );
}