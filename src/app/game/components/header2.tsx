import React from "react";
import WholeFraction from "./wholeFraction";
import Fraction from "./fraction";
const Header2 = ()=>{
    return(
        <>
        <div className="mb-8 flex justify-center items-center">
          <div className="flex justify-center items-center border-2 border-[#f54f7b] rounded-lg bg-[#f54f7b]">
            <div className="border-spacing-0 border-[#f54f7b] rounded-lg bg-[#f54f7b] h-28 w-20 flex justify-center items-center">
              <span className="font-bold text-2xl flex flex-col text-white">
                Level
                <div className="flex justify-center text-white">1</div>
              </span>
            </div>
            <div className="bg-white text-black h-28 flex items-center justify-center border-4 border-[#f54f7b] rounded-lg">
              <WholeFraction whole={1} num={1} denom={2} size="text-3xl" />
              <div className="text-4xl">=</div>
              <Fraction size="text-4xl" num="?" denom="?"/>
              <div className="h-28 flex justify-center items-center bg-white border-l-4 border-t-4 border-b-4 border-[#f54f7b] rounded-lg w-24">
                <span className="text-7xl">🤔</span>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Header2