import React from "react";
import Header3 from '../components/header3'
import StepModule from '../components/stepModule';
import Pizza from '../components/pizza'
import SlicerComponent from "../components/slicerComponent";
import { useGameState } from "../state-utils";
import { useSoundEffects } from "../utils/sound";


const Page3 = ({mixedFraction}) => {
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
          step: 3, // Set the step to 1
        },
      }));
    };
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-2xl mx-auto bg-pink-50 rounded-lg shadow-lg">
          {/* Header */}
          <Header3 emoji='😃' mixedFraction={mixedFraction} bool={true}/>
  
          {/* Step indicator */}
          <StepModule step="STEP 2" task ="Whole to Fractions"/>
          <div className="flex justify-center">
            <div className="flex gap-3">
                <Pizza numerator={0} denominator={0} color={""} circleColor="#c7e308" />
                <Pizza numerator={0} denominator={0} color={""} circleColor="#c7e308"/>
                <Pizza numerator={0} denominator={0} color={""} circleColor="#c7e308"/>
            </div>
          </div>
          <SlicerComponent update={handleClick}/>
        </div>
      </div>
    );
  };

export default Page3  
  