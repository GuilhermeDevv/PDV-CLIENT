export interface IProduct {
  id?: string;
  id_produto: number;
  cor: string;
  nome: string;
  preco: number;
  quantidade: string;
  estoque: string;
  custo: number;
  descricao: string;
  isOnline?: boolean;
  desconto: string;
}

export interface IProductReactSelect {
  value: string;
  label: string;
  price: string;
}
