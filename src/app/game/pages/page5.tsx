import React, { useState } from 'react';
import Pizza from '../components/pizza';
import Fraction from '../components/fraction';
import Button from '../components/button';
import Header3 from '../components/header3';
import StepModule from '../components/stepModule';
import { useDividerStore } from "../../game/store/useDividerStore";
import { useGameState } from '../state-utils';
import { useSoundEffects } from "../utils/sound";

const FractionAddition = ({ mixedFraction }) => {
  const [selectedPieces, setSelectedPieces] = useState(0); // State for user input
  const { divider } = useDividerStore();
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
          step: 0, // Set the step to 1
        },
      }));
    };

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Allow only numeric values
    if (/^\d*$/.test(value)) {
      setSelectedPieces(Number(value)); // Update state with numeric input
    }
  };

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 md:p-8 w-full max-w-4xl mx-auto">
      <Header3 emoji="🤩" mixedFraction={mixedFraction} bool={false}/>
      <StepModule step="STEP 4" task="ADD THE FRACTION" />
      <div className="flex flex-col md:flex-row items-center w-full border border-black p-4 gap-6">
        {/* Left section */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Pizza numerator={4} denominator={divider} color="#99d502" circleColor="#c7e308" />
            <Pizza numerator={4} denominator={divider} color="#99d502" circleColor="#c7e308" />
            <Pizza numerator={4} denominator={divider} color="#99d502" circleColor="#c7e308" />
          </div>
          <div className="relative mt-4 w-full flex justify-center">
            <div className="flex items-center w-full max-w-xs">
              <div className="h-4 bg-black w-1" style={{ width: '2px' }}></div>
              <div className="h-1 bg-black mt-3 flex-grow"></div>
              <Fraction size="text-2xl" num={divider * 3} denom={divider} />
              <div className="h-1 bg-black mt-3 flex-grow"></div>
              <div className="h-4 bg-black w-1" style={{ width: '2px' }}></div>
            </div>
          </div>
        </div>

        {/* Middle section */}
        <div className="text-4xl font-bold mx-4 hidden md:block">+</div>

        {/* Right section */}
        <div className="bg-[#ffdad8] p-6 w-full md:w-1/2 flex flex-col items-center border border-black">
          <h2 className="text-pink-500 text-lg sm:text-xl font-bold mb-4 text-center">
            Select {mixedFraction.numerator}/{divider}ths here
          </h2>
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-32 h-32">
              <Pizza
                numerator={selectedPieces}
                denominator={divider}
                color="#99d502"
                circleColor="gray"
              />
            </div>
            <div className="relative mt-4 w-full max-w-xs flex justify-center">
              <div className="flex items-center w-full">
                <div className="h-4 bg-black w-1" style={{ width: '2px' }}></div>
                <div className="h-1 bg-black mt-3 flex-grow"></div>
                <div className="flex flex-col items-center mx-2 bg-white w-9 mt-2">
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    className="w-7 h-7 border-2 border-gray-300 rounded text-center mt-1 appearance-none"
                    style={{
                      MozAppearance: 'textfield',
                      WebkitAppearance: 'none',
                    }}
                    value={selectedPieces} // Controlled input value
                    onChange={handleInputChange} // Update state on change
                  />
                  <div className="border-t border-black w-7 mt-1"></div>
                  <span>{divider}</span>
                </div>
                <div className="h-1 bg-black mt-3 flex-grow"></div>
                <div className="h-4 bg-black w-1" style={{ width: '2px' }}></div>
              </div>
            </div>
          </div>
          <div className="mt-4 border-black flex justify-center items-center shadow-[-5px_5px_0px_black]">
            <Button text="DONE" symbol="" onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FractionAddition;
