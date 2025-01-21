// import React from "react";
// import Header2 from '../components/header2'
// import StepModule from '../components/stepModule';
// import Pizza from '../components/pizza'
// import MathProblem from "../components/mathProblem";

// const Page5 = () => {
//     return (
//       <div className="min-h-screen p-8">
//         <div className="max-w-2xl mx-auto  rounded-lg shadow-lg">
//           {/* Header */}
//           <Header2 />
  
//           {/* Step indicator */}
//           <StepModule />
//           <div className="flex justify-center">
//             <div className="flex gap-3">
//                 <Pizza numerator={4} denominator={4}  circleColor="#c7e308" />
//                 <Pizza numerator={3} denominator={4}  circleColor="#c7e308"/>
//                 <Pizza numerator={0} denominator={4} color="#99d502" circleColor="#c7e308"/>
//             </div>
//           </div>
//           <MathProblem/>
//         </div>
//       </div>
//     );
//   };

// export default Page5  
  



import React, { useState } from 'react';
import Pizza from '../components/pizza'
import { Card } from '@/components/ui/card';
import Fraction from '../components/fraction';
import Button from '../components/button';
import Header2 from '../components/header2';
import StepModule from '../components/stepModule';

interface PizzaProps {
  numerator: number;
  denominator: number;
  color: string;
  circleColor: string;
}

const FractionAddition = () => {
  const [selectedPieces, setSelectedPieces] = useState(0);

  return (
    <div className="flex flex-col items-center p-8 w-full max-w-4xl mx-auto">
        <Header2/>
        <StepModule />
      <div className="flex items-center  w-full border border-black">
        <div className="flex flex-col">
            {/* <div className='flex justify-center items-center'> */}
          <div className="flex items-center gap-4">
            <Pizza numerator={4} denominator={4} color="#99d502" circleColor="#c7e308" />
            <Pizza numerator={4} denominator={4} color="#99d502" circleColor="#c7e308" />
            <Pizza numerator={4} denominator={4} color="#99d502" circleColor="#c7e308" />
          </div>
          
          <div className="relative mt-1 mx-6">
            <div className="flex items-center">
            {/* Left vertical line */}
            <div className="h-4 bg-black w-1" style={{ width: '2px' }}></div>
            {/* Middle horizontal line with custom width */}
            <div className="h-1 bg-black mt-3" style={{ width: '48%' }}></div>

            <Fraction size='text-2xl' num='12' denom='4'/>

            <div className="h-1 bg-black mt-3" style={{ width: '48%' }}></div>
            {/* Right vertical line */}
            <div className="h-4 bg-black w-1" style={{ width: '2px' }}></div>
            </div>
          </div>
          
          
        </div>


        <div className="text-2xl font-bold mx-4">+</div>
          {/* </div> */}

        <div className="bg-[#ffdad8] p-6 flex-1 border border-black ">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-pink-500 text-xl font-bold mb-4">Select 2/4ths here</h2>
            <div className="flex flex-col">
            <div className="relative w-32 h-32">
              <Pizza 
                numerator={selectedPieces} 
                denominator={4} 
                color="#99d502" 
                circleColor="#c7e308" 
              />
            </div>


            <div className="relative mt-1 mx-6">
            <div className="flex items-center">
            {/* Left vertical line */}
            <div className="h-4 bg-black w-1" style={{ width: '2px' }}></div>
            {/* Middle horizontal line with custom width */}
            <div className="h-1 bg-black mt-3" style={{ width: '48%' }}></div>

            <Fraction size='text-2xl' num='12' denom='4'/>

            <div className="h-1 bg-black mt-3" style={{ width: '48%' }}></div>
            {/* Right vertical line */}
            <div className="h-4 bg-black w-1" style={{ width: '2px' }}></div>
            </div>
            </div>
            </div>

            <div className='border-black  flex justify-center items-center shadow-[-5px_5px_0px_black]'>
            <Button text='DONE' symbol=''/>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FractionAddition;