import React from 'react';

interface QuizQuestionProps {
  text: string;
  image?: string;
}

export function QuizQuestion({ text, image }: QuizQuestionProps) {
  return (
    <div className="space-y-6">
      {image && (
        <div className="rounded-xl overflow-hidden">
          <img
            src={image}
            alt="Question visual"
            className="w-full h-64 object-cover"
          />
        </div>
      )}
      <h3 className="text-2xl font-bold">{text}</h3>
    </div>
  );
}