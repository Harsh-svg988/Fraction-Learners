import React from "react";
import Header2 from '../components/header2'
import StepModule from '../components/stepModule';
import Pizza from '../components/pizza'
import MathProblem from "../components/mathProblem";
import Button from "../components/button";

const Page4 = ({setPage}) => {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-2xl mx-auto  rounded-lg shadow-lg">
          {/* Header */}
          <Header2 />
  
          {/* Step indicator */}
          <StepModule />
          <div className="flex justify-center">
            <div className="flex gap-3">
                <Pizza numerator={4} denominator={4}  circleColor="#c7e308" />
                <Pizza numerator={3} denominator={4}  circleColor="#c7e308"/>
                <Pizza numerator={0} denominator={4} color="#99d502" circleColor="#c7e308"/>
            </div>
          </div>
          <MathProblem/>
          <div className="flex justify-center ">
        <div className='border-black  flex justify-center items-center shadow-[-5px_5px_0px_black]'>
            <Button text='STEP 3' symbol='&gt;&gt;' onClick={() => setPage(5)}/>
      </div>
      </div>
        </div>
      </div>
    );
  };

export default Page4  
  