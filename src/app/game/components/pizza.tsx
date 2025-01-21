"use client";

import React from 'react';

interface PizzaSlicesProps {
  numerator: number;
  denominator: number;
  color?: string; // Make the color prop optional
  size?: 'sm' | 'md' | 'lg';
  circleColor?: string; // Add circleColor prop
  gap?: number; // Gap width between slices
}

const Pizza: React.FC<PizzaSlicesProps> = ({
  numerator,
  denominator,
  color = '#99d502', // Default color for numerator slices
  circleColor = '#F5DEB3', // Default color for the circle
  gap = 1, // Default gap size between slices
}) => {
  const generateSlices = () => {
    const slices = [];
    const angleStep = 360 / denominator;

    for (let i = 0; i < denominator; i++) {
      const startAngle = i * angleStep;
      const endAngle = (i + 1) * angleStep;
      const largeArcFlag = angleStep > 180 ? 1 : 0;

      const x1 = 50 + 45 * Math.cos((startAngle * Math.PI) / 180);
      const y1 = 50 + 45 * Math.sin((startAngle * Math.PI) / 180);
      const x2 = 50 + 45 * Math.cos((endAngle * Math.PI) / 180);
      const y2 = 50 + 45 * Math.sin((endAngle * Math.PI) / 180);

      slices.push(
        <path
          key={i}
          d={`M 50 50 L ${x1} ${y1} A 45 45 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
          fill={i < numerator ? color : 'none'} // Use the provided or default color
          stroke="#FFFFFF" // Set gap color to white
          strokeWidth={gap} // Set the gap size
        />
      );
    }

    return slices;
  };

  return (
    <div className="">
      <div className="">
        <svg viewBox="0 0 100 100" className="w-32 h-32">
          <circle cx="50" cy="50" r="45" fill={circleColor} />
          {generateSlices()}
        </svg>
      </div>
    </div>
  );
};

export default Pizza;
