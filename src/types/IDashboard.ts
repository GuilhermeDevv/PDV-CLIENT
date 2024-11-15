import { ICard } from './ICard';

export interface IData {
  quantityInfo: ICard[] | undefined;
  salesValue: IGraphicsProps[] | undefined;
  salesQuantity: IGraphicsProps[] | undefined;
  salesProfit: IGraphicsProps[] | undefined;
}

export interface IGraphicsProps {
  v1: number;
  v2: number;
  color: string;
}
