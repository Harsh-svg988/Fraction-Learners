import { useGameState } from '../state-utils';
import Header from '../components/header';
import FractionLearner from '../pages/page1'
import MathLearningGame from '../pages/page2';
import Page3 from '../pages/page3'
import Page4 from '../pages/page4'
import Page5 from '../pages/page5';


export default function FirstScreen() {
  const { gameStateRef, setGameStateRef } = useGameState();
  const { mixedFraction } = gameStateRef.current.state1;

  return (
    <div className="mx-auto">
      <Header mixedFraction={mixedFraction} />
      {/* <FractionLearner/> */}
      {/* <MathLearningGame/> */}
      {/* <Page3/> */}
      {/* <Page4/> */}
      <Page5/>
    </div>
  );
}