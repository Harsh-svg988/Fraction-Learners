import React from 'react';
import Fraction from './fraction';
import Button from './button'
const MathProblem = () => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-[#fff6f5] w-full">
      {/* Top text */}
      <div className="text-center mb-8 text-xl flex justify-center items-center">
        <span>So there are</span>
        <input 
          type="text"
          className="w-9 h-9 mx-2 border-2 border-gray-300 rounded text-center text-2xl"
        />
        <span className="inline-flex items-center justify-center">
        <Fraction size="text-1xl" num="1" denom="4"/>
        </span>
        <span className="ml-2">sized pieces in 3 wholes</span>
        
      </div>

      {/* Green awesome banner */}
      <div className='bg-[#f6f4c6] rounded-lg'>
        <div className="bg-[#caed9e] py-3 text-center  rounded-lg">
            <span className="text-xl font-bold uppercase">Awesome</span>
        </div>

        {/* Yellow equation box */}
        <div className="bg-[#f6f4c6] p-4 rounded-lg text-center mb-8">
            <div className="flex items-center justify-center text-xl space-x-2">
            <span>3 wholes =</span>
            <div className="flex flex-col items-center">
                <input 
                type="text"
                className="w-9 h-9 border-2 border-gray-300 rounded text-center"
                />
                <div className="border-t border-black w-10 mt-1"></div>
                <span className="mt-1">4</span>
            </div>
            </div>
        </div>
      </div>

      {/* Step button */}
      
    </div>
  );
};

export default MathProblem;