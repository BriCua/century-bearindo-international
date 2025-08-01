import React, { useState, useEffect } from 'react';

const FlipBox = ({ frontContent, backContent, interval = 10000 }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const flipInterval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, interval);

    return () => clearInterval(flipInterval);
  }, [interval]);

  return (
    <div className="w-full h-full perspective-1000">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="absolute w-full h-full backface-hidden flex justify-center items-center p-4">
          {frontContent}
        </div>
        <div className="absolute w-full h-full backface-hidden flex justify-center items-center p-4 rotate-y-180">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipBox;