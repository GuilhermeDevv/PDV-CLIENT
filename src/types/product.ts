export type product = {
  id?: string;
  id_produto: string;
  cor: string;
  nome: string;
  preco: number;
  quantidade: number;
  estoque: number;
  custo: number;
  descricao: string;
  isOnline?: boolean;
  desconto: number;
  fornecedor?: string | null;
  url: string;
  createdAt: string;
  categoria?: {
    id_categoria: string;
    nome: string;
    createdAt: string;
    iconeCategoria: string;
    corCategoria: string;
  };
};

export interface IProductReactSelect {
  value: string;
  label: string;
  price: string;
}
