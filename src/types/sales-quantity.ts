import { SalesProfit } from './sales-profit';

export type SalesQuantity = Omit<
   SalesProfit,
   'AtualFormatado' | 'PassadaFormatado'
>;
