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
import { Button } from '@/components/ui/button';

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
      <div className="flex items-center  w-full">
        <div className="flex flex-col">
            {/* <div className='flex justify-center items-center'> */}
          <div className="flex items-center gap-4">
            <Pizza numerator={4} denominator={4} color="#99d502" circleColor="#c7e308" />
            <Pizza numerator={4} denominator={4} color="#99d502" circleColor="#c7e308" />
            <Pizza numerator={4} denominator={4} color="#99d502" circleColor="#c7e308" />
          </div>
          
          <div className="relative mt-2 mx-6">
            <div className="h-0.5 bg-black w-full absolute"></div>
            <div className="text-center mt-2 text-xl font-bold">12</div>
            <div className="text-center text-xl font-bold">4</div>
          </div>
        </div>
        <div className="text-2xl font-bold mx-4">+</div>
          {/* </div> */}

        <Card className="bg-pink-100 p-6 flex-1">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-pink-500 text-xl font-bold mb-4">Select 2/4ths here</h2>
            
            <div className="relative w-32 h-32">
              <Pizza 
                numerator={selectedPieces} 
                denominator={4} 
                color="#99d502" 
                circleColor="#c7e308" 
              />
            </div>

            <div className="flex items-center justify-center mt-2 relative">
              {/* Left bracket */}
              <div className="absolute -left-4 top-0 bottom-0 w-1 flex flex-col">
                <div className="h-1 w-4 bg-black"></div>
                <div className="flex-1 w-1 bg-black"></div>
                <div className="h-1 w-4 bg-black"></div>
              </div>

              <div className="text-2xl font-bold">
                <div className="text-center">{selectedPieces}</div>
                <div className="border-t-2 border-black"></div>
                <div className="text-center">4</div>
              </div>

              {/* Right bracket */}
              <div className="absolute -right-4 top-0 bottom-0 w-1 flex flex-col">
                <div className="h-1 w-4 bg-black ml-auto"></div>
                <div className="flex-1 w-1 bg-black ml-auto"></div>
                <div className="h-1 w-4 bg-black ml-auto"></div>
              </div>
            </div>

            <Button 
              className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-2 rounded mt-4"
            >
              Done
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FractionAddition;