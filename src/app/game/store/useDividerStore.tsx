// store/useDividerStore.ts
import { create } from 'zustand';

interface DividerState {
  divider: number; // Type of the divider
  setDivider: (value: number) => void; // Function to update the divider
}

export const useDividerStore = create<DividerState>((set) => ({
  divider: 4, // Default value
  setDivider: (value: number) => set({ divider: value }),
}));
