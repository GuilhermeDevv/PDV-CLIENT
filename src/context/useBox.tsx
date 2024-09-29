import { IUser } from '@/types/IUser';
import { create } from 'zustand';

interface userState {
  user: IUser | null;
  setUser: (box: IUser) => void;
}

export const useBoxStore = create<userState>(set => ({
  user: null,
  setUser: (user: IUser) => set({ user }),
}));
