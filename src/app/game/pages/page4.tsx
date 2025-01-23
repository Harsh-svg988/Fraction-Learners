import React from "react";
import Header3 from '../components/header3'
import StepModule from '../components/stepModule';
import Pizza from '../components/pizza'
import MathProblem from "../components/mathProblem";
import Button from "../components/button";
import { useDividerStore } from "../../game/store/useDividerStore"
import { useGameState } from "../state-utils";
import { useSoundEffects } from "../utils/sound";
const Page4 = ({mixedFraction}) => {
  const {divider} = useDividerStore()
  const { setGameStateRef } = useGameState();
  
    const updateStep = () => {
      setGameStateRef((prevState) => ({
        ...prevState,
        state1: {
          ...prevState.state1,
          step: 4, // Set the step to 1
        },
      }));
    };

const handleClick = ()=>{
  updateStep()
  const soundEffect = useSoundEffects()
  soundEffect.join.play()

}


    return (
      <div className="min-h-screen p-8 ">
        <div className="max-w-2xl mx-auto  rounded-lg shadow-lg">
          {/* Header */}
          <Header3 emoji='😃' mixedFraction={mixedFraction} bool={true}/>
  
          {/* Step indicator */}
          <StepModule step="STEP 3" task ="ADD THE  Fraction"/>
          <div className="flex justify-center">
            <div className="flex gap-3">
                <Pizza numerator={0} denominator={divider}  circleColor="#c7e308" />
                <Pizza numerator={0} denominator={divider}  circleColor="#c7e308"/>
                <Pizza numerator={0} denominator={divider} color="#99d502" circleColor="#c7e308"/>
            </div>
          </div>
          <MathProblem mixedFraction={mixedFraction}/>
          <div className="flex justify-center ">
        <div className='border-black  flex justify-center items-center shadow-[-5px_5px_0px_black] mb-7 mt-3'>
            <Button text='STEP 4' symbol='&gt;&gt;' onClick={handleClick} />
      </div>
      </div>
        </div>
      </div>
    );
  };

export default Page4  
  