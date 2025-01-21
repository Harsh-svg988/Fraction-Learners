import React from "react";
import Header2 from '../components/header2'
import StepModule from '../components/stepModule';
import Pizza from '../components/pizza'
import SlicerComponent from "../components/slicerComponent";


const Page3 = () => {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-2xl mx-auto bg-pink-50 rounded-lg shadow-lg">
          {/* Header */}
          <Header2 />
  
          {/* Step indicator */}
          <StepModule />
          <div className="flex justify-center">
            <div className="flex gap-3">
                <Pizza numerator={0} denominator={0} color={""} circleColor="#c7e308" />
                <Pizza numerator={0} denominator={0} color={""} circleColor="#c7e308"/>
                <Pizza numerator={0} denominator={0} color={""} circleColor="#c7e308"/>
            </div>
          </div>
          <SlicerComponent/>
        </div>
      </div>
    );
  };

export default Page3  
  