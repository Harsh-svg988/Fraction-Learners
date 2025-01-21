import React from 'react';

const WholeFraction = ({ whole, num, denom, size }) => {
  return (
    <div className="flex items-center space-x-4 mr-7 ml-4">
      <span className={`${size} font-bold`}>{whole}</span>
      <div className="flex flex-col items-center">
        <div className={`${size} font-bold`}>{num}</div>
        <div className="border-t border-black w-4"></div>
        <div className={`${size} font-bold`}>{denom}</div>
      </div>
    </div>
  );
};

export default WholeFraction;
