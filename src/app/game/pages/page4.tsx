import React from "react";
import Header2 from '../components/header2'
import StepModule from '../components/stepModule';
import Pizza from '../components/pizza'
import MathProblem from "../components/mathProblem";

const Page4 = () => {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-2xl mx-auto bg-pink-50 rounded-lg shadow-lg">
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
        </div>
      </div>
    );
  };

export default Page4  
  