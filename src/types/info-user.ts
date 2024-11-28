export interface DataPoint {
  x: string;
  y: number;
}

export interface SalesData {
  vendas: DataPoint[];
  total_vendas: number;
  lucro: DataPoint[];
}
