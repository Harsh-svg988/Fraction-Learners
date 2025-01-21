'use client'

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import FractionLearner from './game/pages/page1'

import { GameStateProvider } from './game/state-utils';
const Game = dynamic(() => import('./game/game'), {
  ssr: false,
});



console.error = () => {};

const sendAdminMessage = () => {}

export default function Page() {
  return (
    <GameStateProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Game sendAdminMessage={sendAdminMessage} />
        
      </Suspense>
    </GameStateProvider>
  )
}