import React from "react";
import WholeFraction from "./wholeFraction";
import Fraction from "./fraction";
import { useDividerStore } from '../store/useDividerStore';


const Header3 = ({ emoji, mixedFraction, bool }) => {
      const { divider, setDivider } = useDividerStore();
    
  return (
    <>
      {bool ? (
        <div className="mb-8 flex justify-center items-center">
          <div className="flex flex-col md:flex-row justify-center items-center border-2 border-[#f54f7b] rounded-lg bg-[#f54f7b]">
            <div className="border-spacing-0 border-[#f54f7b] rounded-lg bg-[#f54f7b] h-20 w-16 md:h-28 md:w-20 flex justify-center items-center">
              <span className="font-bold text-lg md:text-2xl flex flex-col text-white">
                Level
                <div className="flex justify-center text-white">1</div>
              </span>
            </div>
            <div className="bg-white text-black h-20 md:h-28 flex items-center justify-center border-4 border-[#f54f7b] rounded-lg p-4">
              <WholeFraction
                whole={mixedFraction.whole}
                num={mixedFraction.numerator}
                denom={mixedFraction.denominator}
                size="text-lg md:text-3xl"
              />
              <div className="text-xl md:text-4xl">=</div>
              <div className="text-xl md:text-4xl mx-2">{mixedFraction.whole}</div>
              <div className="text-xl md:text-4xl">+</div>
              <Fraction
                size="text-lg md:text-3xl"
                num={mixedFraction.numerator}
                denom={mixedFraction.denominator}
              />
              <div className="h-16 w-16 md:h-28 md:w-24 flex justify-center items-center bg-white border-l-4 border-t-4 border-b-4 border-[#f54f7b] rounded-lg">
                <span className="text-5xl md:text-7xl">{emoji}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-8 flex justify-center items-center">
          <div className="flex flex-col md:flex-row justify-center items-center border-2 border-[#f54f7b] rounded-lg bg-[#f54f7b]">
            <div className="border-spacing-0 border-[#f54f7b] rounded-lg bg-[#f54f7b] h-20 w-16 md:h-28 md:w-20 flex justify-center items-center">
              <span className="font-bold text-lg md:text-2xl flex flex-col text-white">
                Level
                <div className="flex justify-center text-white">1</div>
              </span>
            </div>
            <div className="bg-white text-black h-20 md:h-28 flex items-center justify-center border-4 border-[#f54f7b] rounded-lg p-4">
              <WholeFraction
                whole={mixedFraction.whole}
                num={mixedFraction.numerator}
                denom={mixedFraction.denominator}
                size="text-lg md:text-3xl"
              />
              <div className="text-xl md:text-4xl">=</div>
              <Fraction
                size="text-lg md:text-3xl"
                num={mixedFraction.whole*divider}
                denom={mixedFraction.denominator}
              />
              <div className="text-xl md:text-4xl">+</div>
              <Fraction
                size="text-lg md:text-3xl"
                num={mixedFraction.numerator}
                denom={mixedFraction.denominator}
              />
              <div className="h-16 w-16 md:h-28 md:w-24 flex justify-center items-center bg-white border-l-4 border-t-4 border-b-4 border-[#f54f7b] rounded-lg">
                <span className="text-5xl md:text-7xl">{emoji}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header3;
