import { ITable } from "@/types/ITable";
import { create } from "zustand";

// Definindo o tipo para o estado da store
interface BoxState {
  box: ITable | null;
  setBox: (box: ITable) => void;
}

export const useBoxStore = create<BoxState>((set) => ({
  box: null,
  setBox: (box: ITable) => set({ box }),
}));
