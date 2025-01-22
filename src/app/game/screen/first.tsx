import { useState } from 'react';
import { useGameState } from '../state-utils';
import Header from '../components/header';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import Page3 from '../pages/page3';
import Page4 from '../pages/page4';
import Page5 from '../pages/page5';
import { useRecoilState, useRecoilValue,RecoilRoot,useSetRecoilState } from 'recoil';


export default function FirstScreen() {
  const { gameStateRef } = useGameState();
  const { mixedFraction } = gameStateRef.current.state1;
  console.log(mixedFraction)

  const [currentPage, setCurrentPage] = useState(1); // State to track the current page

  // Function to switch pages
  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <Page1 setPage={setCurrentPage} mixedFraction={mixedFraction}/>;
      case 2:
        return <Page2 setPage={setCurrentPage} mixedFraction={mixedFraction}/>;
      case 3:
        return <Page3 setPage={setCurrentPage}/>;
      case 4:
        return <Page4 setPage={setCurrentPage}/>;
      case 5:
        return <Page5 />;
      default:
        return <Page1 setPage={setCurrentPage} mixedFraction={mixedFraction}/>;
    }
  };

  return (
    <RecoilRoot>
    <div className="mx-auto">
      <Header mixedFraction={mixedFraction} />
      {renderPage()}
    </div>
    </RecoilRoot>
  );
}
