import { create } from 'zustand';
import { IUser } from '@/types/IUser';
import { INotification } from '@/types/INotification';

interface StoreState {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

interface StoreStateToken {
  token: string | null;
  setToken: (token: string) => void;
}

interface StoreStateIsAuthenticated {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

interface StoreUser {
  user: Omit<IUser, 'senha'>;
  setUser: (user: Omit<IUser, 'senha'>) => void;
}

interface StoreInfoUser {
  infoUser: {
    total_vendas: number;
    vendas: {
      x: string;
      y: number;
    }[];
  };
  setInfoUser: (infoUser: {
    total_vendas: number;
    vendas: {
      x: string;
      y: number;
    }[];
  }) => void;
}

interface StoreNotification {
  notification: INotification[];
  setNotification: (notification: INotification[]) => void;
}

interface StoreOptionsChart {
  optionsChart: {
    label: string;
    value: string;
  }[];
  setOptionsChart: (
    optionsChart: {
      label: string;
      value: string;
    }[]
  ) => void;
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

export const useStoreUser = create<StoreUser>(set => ({
  user: {
    id_funcionario: '',
    nome: '',
    cargo: '',
    imagem: '',
  },
  setUser: (user: Omit<IUser, 'senha'>) => set({ user }),
}));

export const useStoreInfoUser = create<StoreInfoUser>(set => ({
  infoUser: {
    total_vendas: 0,
    vendas: [],
  },
  setInfoUser: (infoUser: {
    total_vendas: number;
    vendas: {
      x: string;
      y: number;
    }[];
  }) => set({ infoUser }),
}));

export const useStoreNotification = create<StoreNotification>(set => ({
  notification: [],
  setNotification: (notification: INotification[]) => set({ notification }),
}));

export const useStoreOptionsChart = create<StoreOptionsChart>(set => ({
  optionsChart: [
    {
      label: 'Semanal',
      value: '0',
    },
    {
      label: 'Mensal',
      value: '1',
    },
    {
      label: 'Anual',
      value: '2',
    },
  ],
  setOptionsChart: (
    optionsChart: {
      label: string;
      value: string;
    }[]
  ) => set({ optionsChart }),
}));

export const useStoreToken = create<StoreStateToken>(set => ({
  token: null,
  setToken: (token: string) => set({ token }),
}));
