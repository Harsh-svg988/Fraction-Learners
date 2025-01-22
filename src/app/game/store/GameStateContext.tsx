import React, { createContext, useContext, useRef, useState } from 'react';

// Define the type for the context
interface GameStateContextType {
  gameStateRef: React.MutableRefObject<{
    state1: {
      step: number;
      mixedFraction: { whole: number; numerator: number; denominator: number };
    };
  }>;
  step: number;
  updateStep: (newStep: number) => void;
}

// Create the context with a default value
const GameStateContext = createContext<GameStateContextType | undefined>(undefined);

export const GameStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const gameStateRef = useRef({
    state1: {
      step: 0,
      mixedFraction: { whole: 1, numerator: 2, denominator: 3 },
    },
  });

  const [step, setStep] = useState<number>(gameStateRef.current.state1.step);

  const updateStep = (newStep: number) => {
    gameStateRef.current.state1.step = newStep;
    setStep(newStep);
  };

  return (
    <GameStateContext.Provider value={{ gameStateRef, step, updateStep }}>
      {children}
    </GameStateContext.Provider>
  );
};

export const useGameStep = (): GameStateContextType => {
  const context = useContext(GameStateContext);
  if (!context) {
    throw new Error('useGameState must be used within a GameStateProvider');
  }
  return context;
};
