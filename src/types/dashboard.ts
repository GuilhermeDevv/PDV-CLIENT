import { Card, SalesProfit, SalesValue, SalesQuantity } from './';

export type Dashboard = {
   quantityInfo: Array<Card>;
   salesProfit: Array<SalesProfit>;
   salesValue: Array<SalesValue>;
   salesQuantity: Array<SalesQuantity>;
};
