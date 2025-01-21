import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import WholeFraction from '../components/wholeFraction';
import Fraction from '../components/fraction';
import  Button  from '../components/button';
import Header2 from '../components/header2'
import StepModule from '../components/stepModule';


interface FractionTile {
  whole: number;
  numerator: number;
  denominator: number;
}

interface DropZone {
  whole?: number;
  fraction?: { numerator: number; denominator: number };
}

const MathLearningGame = () => {
  const [dropZone, setDropZone] = useState<DropZone>({});
  
  const initialFraction: FractionTile = {
    whole: 3,
    numerator: 2,
    denominator: 4
  };

  const handleDragStart = (e: React.DragEvent, type: 'whole' | 'fraction') => {
    // Set the drag data with the type and values
    const dragData = {
      type,
      whole: type === 'whole' ? initialFraction.whole : undefined,
      numerator: type === 'fraction' ? initialFraction.numerator : undefined,
      denominator: type === 'fraction' ? initialFraction.denominator : undefined
    };
    e.dataTransfer.setData('application/json', JSON.stringify(dragData));
  };

  const handleDrop = (e: React.DragEvent, zone: 'whole' | 'fraction') => {
    e.preventDefault();
    try {
      const data = JSON.parse(e.dataTransfer.getData('application/json'));
      
      // Only allow dropping whole numbers in the whole zone and fractions in the fraction zone
      if (zone === 'whole' && data.type === 'whole') {
        setDropZone(prev => ({ ...prev, whole: data.whole }));
      } else if (zone === 'fraction' && data.type === 'fraction') {
        setDropZone(prev => ({
          ...prev,
          fraction: {
            numerator: data.numerator,
            denominator: data.denominator
          }
        }));
      }
    } catch (error) {
      console.error('Error parsing drag data:', error);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto bg-pink-50 rounded-lg shadow-lg">
        {/* Header */}
        <Header2/>

        {/* Step indicator */}
        <StepModule/>
        
        {/* Main content */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Left side - Drag source */}
          <div className="bg-pink-100 p-8 rounded-lg ">
            <div className="flex gap-2 mt-12">
              {/* Whole number draggable */}
              <div
                className="cursor-move mt-5  "
                draggable
                onDragStart={(e) => handleDragStart(e, 'whole')}
              >
                <div className="text-5xl  text-green-600 border border-black w-10 h-12 flex justify-center shadow-[-3px_3px_0px_black]">3</div>
              </div>
              
              {/* Fraction draggable */}
              <div
                className="cursor-move "
                draggable
                onDragStart={(e) => handleDragStart(e, 'fraction')}
              >
                <div className="border border-black h-24 px-2 shadow-[-2px_2px_0px_black] pt-1 w-9">
                  <div className="text-4xl font-bold text-purple-600">{initialFraction.numerator}</div>
                  <div className="border-t-2 border-black"></div>
                  <div className="text-4xl font-bold text-purple-600">{initialFraction.denominator}</div>
                </div>
              </div>

            </div>
            <div className="text-[#f54f7b] mt-28">pick from here</div>
           </div>

          {/* Right side - Drop zones */}
          <div className="my-6">
            <div
              className="border-2 border-green-600 p-1.5 rounded-lg h-28"
              onDrop={(e) => handleDrop(e, 'whole')}
              onDragOver={handleDragOver}
            >
              <div className="text-green-600 text-2xl ">WHOLES</div>
              {dropZone.whole && (
                <div className="text-4xl font-bold text-green-600">
                  {dropZone.whole}
                </div>
              )}
            </div>
            <div className="text-4xl text-center">+</div>
            <div
              className="border-2 border-[#a54dd7] p-1.5 rounded-lg h-28"
              onDrop={(e) => handleDrop(e, 'fraction')}
              onDragOver={handleDragOver}
            >
              <div className="text-[#a54dd7] text-2xl">FRACTION</div>
              {dropZone.fraction && (
                <div className="">
                  <div className="text-3xl font-bold text-[#a54dd7]">
                    {dropZone.fraction.numerator}
                  </div>
                  <div className="border-t-2 border-[#a54dd7] w-4"></div>
                  <div className="text-3xl font-bold text-[#a54dd7]">
                    {dropZone.fraction.denominator}
                  </div>
                </div>
              )}
            </div>
            <div className="text-[#f54f7b] mt-4 flex justify-center">drop here</div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="bg-white p-6 rounded-lg mb-8 text-center text-2xl">
          <span className="text-[#f54f7b] font-bold">3 2/4</span>
          <span className="mx-4">=</span>
          <span className="text-green-600 font-bold">3 wholes</span>
          <span className="mx-4">+</span>
          <span className="text-[#f54f7b] font-bold">2/4</span>
        </div>

        {/* Next step button */}
          <div className="flex justify-center items-center relative">
          {/* Wrapping container to center the button */}
              <div
                className="cursor-move mt-5 shadow-[-7px_7px_0px_black] relative"
                style={{
                  outline: '2px solid black',
                  outlineOffset: '-7px',
                }}
              >
              <Button text="START" symbol="&gt;&gt;" />
            </div>
          </div>

      </div>
    </div>
  );
};

export default MathLearningGame;