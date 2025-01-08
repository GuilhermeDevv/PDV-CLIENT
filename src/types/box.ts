export type Box = {
  createdAt: string;
  data_abertura: string;
  data_fechamento: string | null;
  id_caixa: string;
  saldo: number;
  saldo_final: number;
  saldo_inicial: number;
  status: boolean; // abertou ou fechado
  vendas_parcial: number;
};
