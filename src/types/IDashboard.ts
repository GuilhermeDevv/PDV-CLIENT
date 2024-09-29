import { ICard } from './ICard';

export interface IData {
  quantityInfo: ICard[] | undefined;
  salesValue: IGraphicsProps[] | undefined;
  salesQuantity: IGraphicsProps[] | undefined;
  salesProfit: IGraphicsProps[] | undefined;
}

export interface IGraphicsProps {
  name: string;
  Atual: number;
  Passada: number;
  PassadaFormatado: string;
  AtualFormatado: string;
}
