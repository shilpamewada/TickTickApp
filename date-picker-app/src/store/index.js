import create from 'zustand';

export const useStore = create((set) => ({
  recurrence: 'Daily',
  setRecurrence: (recurrence) => set({ recurrence }),
}));
