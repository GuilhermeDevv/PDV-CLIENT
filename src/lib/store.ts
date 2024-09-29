import { create } from 'zustand';

interface StoreState {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

interface StoreStateIsAuthenticated {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export const useStore = create<StoreState>(set => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));

export const useStoreIsAuthenticated = create<StoreStateIsAuthenticated>(
  set => ({
    isAuthenticated: false,
    setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
  })
);
