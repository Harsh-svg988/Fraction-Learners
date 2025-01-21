import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import Button from '../components/button'
import WholeFraction from '../components/wholeFraction';
import Fraction from '../components/fraction';


const ImproperFractionGame = () => {
  const [started, setStarted] = useState(false);
  const [numerator, setNumerator] = useState('');
  const [denominator, setDenominator] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  // The correct answer for 1 1/5 as an improper fraction is 6/5
  const checkAnswer = () => {
    const isNumeratorCorrect = parseInt(numerator) === 6;
    const isDenominatorCorrect = parseInt(denominator) === 5;
    setIsCorrect(isNumeratorCorrect && isDenominatorCorrect);
  };

  return (
    <div className="flex justify-center mt-20 h-screen">
      <div>
        {/* Header */}
        <div className="bg-[#ebfb3e] p-4 border border-black transform shadow-[8px_8px_0px_0px_black] mb-14 mx-10">
            <h1 className="text-[45px] font-[400] leading-[45px] text-center font-jersey">
                Mixed number to improper fraction
            </h1>
        </div>
          {/* Problem Box */}
        <div className="border-[6px] border-[#f54f7b] h-36">
            <div className="flex items-center justify-center w-full h-full ">
              <div className=" flex items-center justify-center border-4 border-[#f54f7b] w-[30%] h-full text-4xl border-r-[6px] text-[#f54f7b]">Level 1</div>
              <div className="flex items-center justify-center space-x-2 border-4 border-[#f54f7b] w-[70%] h-full ">
                {/* Mixed Number */}
                <WholeFraction whole={1} num={1} denom={2} size='text-5xl '/>
                <div className='text-5xl ' >=</div>
                <Fraction size='text-5xl'/>
              </div>
            </div>
        </div>
        <div className="flex justify-center items-center mt-6">
        <Button text='START' symbol='&gt;&gt;'/>
        </div>
      </div>
      
    </div>
  );
};

export default ImproperFractionGame;
