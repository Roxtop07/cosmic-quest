import React from 'react';
import { motion } from 'framer-motion';

interface QuizOptionsProps {
  options: string[];
  onSelect: (index: number) => void;
}

export function QuizOptions({ options, onSelect }: QuizOptionsProps) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {options.map((option, index) => (
        <motion.button
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => onSelect(index)}
          className="p-4 text-left rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
        >
          <span className="inline-block w-8 h-8 mr-4 rounded-full bg-white/10 text-center leading-8">
            {String.fromCharCode(65 + index)}
          </span>
          {option}
        </motion.button>
      ))}
    </div>
  );
}