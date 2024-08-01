import { ICard } from "./ICard";

export interface IData {
  quantityInfo: ICard[];
  salesValue: IGraphicsProps[];
  salesQuantity: IGraphicsProps[];
}

export interface IGraphicsProps {
  name: string;
  Atual: number;
  Passada: number;
  PassadaFormatado: string;
  AtualFormatado: string;
}
