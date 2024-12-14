export type user = {
  id_funcionario: string;
  nome: string;
  cargo: string;
  senha: string;
  imagem?: string;
  infoCargo: {
    id_cargo: number;
    nome: string;
    nivel_acesso: string;
    createdAt: string;
  };
};
