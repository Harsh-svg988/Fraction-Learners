import React, { useState } from 'react';
import { useDividerStore } from '../store/useDividerStore';

const SlicerIcon = ({ color }) => {
  let imageSrc;

  if (color === 'red') {
    imageSrc = '/red.png';
  } else if (color === 'blue') {
    imageSrc = '/blue.png';
  } else if (color === 'yellow') {
    imageSrc = '/yellow.png';
  }

  return <img src={imageSrc} alt={color} />;
};

const PieSlicerSelector = ({ setPage }) => {
  const [selectedSlicer, setSelectedSlicer] = useState<number | null>(null);
  

  // Zustand hooks to get and set the divider
  const { divider, setDivider } = useDividerStore();

  const slicers = [
    { id: 1, color: 'red', slices: 4 },
    { id: 2, color: 'blue', slices: 3 },
    { id: 3, color: 'yellow', slices: 5 },
  ];

  const handleSlicerClick = (slicerId, slices) => {
    setSelectedSlicer(slicerId);
    setDivider(slices); // Update the Zustand store
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mb-6">
        Choose your slicer
      </h1>

      <div className="border border-blue-600 rounded-lg p-6 sm:p-8 flex flex-col lg:flex-row items-center lg:items-start gap-6">
        {/* Left side - Slicer icons container */}
        <div className="flex flex-wrap lg:flex-col gap-4 border rounded-lg p-4 sm:p-6">
          {slicers.map((slicer) => (
            <div
              key={slicer.id}
              className={`flex items-center cursor-pointer p-2 rounded-lg ${
                selectedSlicer === slicer.id ? 'bg-blue-100 border-2 border-blue-500' : ''
              }`}
              onClick={() => handleSlicerClick(slicer.id, slicer.slices)}
            >
              <SlicerIcon color={slicer.color} />
            </div>
          ))}
        </div>

        {/* Middle - Text descriptions */}
        <div className="flex flex-col justify-between py-6 gap-16 mt-6">
          {slicers.map((slicer) => (
            <div key={slicer.id} className="text-2xl text-blue-600 font-semibold whitespace-nowrap">
              Slices the pie in {slicer.slices} pieces
            </div>
          ))}
        </div>

        {/* Slice button */}
        <div className="mt-4 lg:mt-36 border-black flex justify-center items-center shadow-[-5px_5px_0px_black] ml-9">
          <button
            className="relative bg-pink-500 text-white text-2xl px-8 py-2 font-semibold"
            onClick={() => setPage(4)}
          >
            Slice
          </button>
        </div>
      </div>
    </div>
  );
};

export default PieSlicerSelector;
