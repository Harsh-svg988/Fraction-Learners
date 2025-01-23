import React, { useState } from 'react';
import Button from '../components/button'
import WholeFraction from '../components/wholeFraction';
import Fraction from '../components/fraction';
import { useGameState } from '../state-utils';
import { useSoundEffects } from "../utils/sound";


const Page1 = ({mixedFraction}) => {
  const { setGameStateRef } = useGameState();
  const handleClick = ()=>{
    updateStep()
    const soundEffect = useSoundEffects()
    soundEffect.join.play()
  
  }

  const updateStep = () => {
    setGameStateRef((prevState) => ({
      ...prevState,
      state1: {
        ...prevState.state1,
        step: 1, // Set the step to 1
      },
    }));
  };
  return (
    <div className="flex justify-center mt-20 ">
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
                <WholeFraction whole={mixedFraction.whole} num={mixedFraction.numerator} denom={mixedFraction.denominator} size='text-5xl '/>
                <div className='text-5xl ' >=</div>
                <Fraction size='text-5xl' num='?' denom='?'/>
              </div>
            </div>
        </div>

        <div className="flex justify-center items-center mt-6">
        <Button text='START' symbol='&gt;&gt; ' onClick={handleClick}/>
        </div>
      </div>
      
    </div>
  );
};

export default Page1;
