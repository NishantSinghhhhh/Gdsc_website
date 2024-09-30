import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NavigationButtons = ({ handlePrev, handleNext }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (direction) => {
    setActiveButton(direction);
    setTimeout(() => setActiveButton(null), 200); // Reset after 200ms
    direction === 'prev' ? handlePrev() : handleNext();
  };

  return (
    <div className="flex items-center gap-[4rem] justify-center w-full mt-4">
      <button
        onClick={() => handleClick('prev')}
        className={`flex items-center justify-center w-12 h-12 rounded-full border-2 border-black transition-colors ${
          activeButton === 'prev' ? 'bg-yellow-300' : 'bg-white'
        }`}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => handleClick('next')}
        className={`flex items-center justify-center w-12 h-12 rounded-full border-2 border-black transition-colors ${
          activeButton === 'next' ? 'bg-yellow-300' : 'bg-white'
        }`}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default NavigationButtons;