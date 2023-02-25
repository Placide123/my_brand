import React from 'react';

function Star({ filled }) {
    const className = filled ? 'text-yellow-500' : 'text-gray-400';
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path
          className={`${className} ${filled ? 'bg-yellow-500' : ''}`}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 12.354l-4.417 2.683 1.055-4.901L2.276 7.317l4.919-.45L10 2l2.805 4.867 4.919.45-4.362 3.719 1.055 4.901L10 12.354z"
        />
      </svg>
    );
  }
  

function FiveStar({ rating }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);
  return (
    <div className="flex items-center">
      {stars.map((filled, i) => (
        <Star key={i} filled={filled} />
      ))}
    </div>
  );
}

export default FiveStar;
