"use client";

import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
  eraseSpeed?: number;
  delay?: number;
}

export const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 150, eraseSpeed = 100, delay = 3000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          setIndex(index + 1);
        } else {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(text.slice(0, index - 1));
          setIndex(index - 1);
        } else {
          setIsDeleting(false);
        }
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? eraseSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index, text, speed, eraseSpeed, delay]);

  return (
    <span className="inline-block min-h-[1.5em]">
      {displayedText}
      <span className="animate-pulse text-red-500">|</span>
    </span>
  );
};