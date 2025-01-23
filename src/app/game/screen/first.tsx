import { useEffect, useState } from 'react';
import { useGameState } from '../state-utils';
import Header from '../components/header';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import Page3 from '../pages/page3';
import Page4 from '../pages/page4';
import Page5 from '../pages/page5';


export default function FirstScreen() {
  const { gameStateRef } = useGameState();
  console.log(gameStateRef)

  const { mixedFraction } = gameStateRef.current.state1;
  const step = gameStateRef.current.state1.step;

  console.log(step)
  // gameStateRef.current.state1.step=2
  

  const [currentPage, setCurrentPage] = useState<JSX.Element | null>(null)// State to track the current page

  // Function to switch pages
  useEffect(() => {
    const renderPage = () => {
      switch (step) {
        case 0:
          return <Page1 mixedFraction={mixedFraction} />;
        case 1:
          return <Page2  mixedFraction={mixedFraction} />;
        case 2:
          return <Page3  mixedFraction={mixedFraction} />;
        case 3:
          return <Page4  mixedFraction={mixedFraction} />;
        case 4:
          return <Page5 mixedFraction={mixedFraction} />;
        default:
          return <Page1  mixedFraction={mixedFraction} />;
      }
    };

    setCurrentPage(renderPage()); // Update the current page when the step changes
  }, [step, mixedFraction]); // Dependency array to track changes in step and mixedFraction
  console.log("after useeffect", step)


  return (
    
    <div className="mx-auto">
      <Header mixedFraction={mixedFraction} />
      {currentPage}
    </div>
    
  );
}
