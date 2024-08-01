// import { Container, Content } from "./styles";

import { useState } from "react";

interface ILoginProps {
  nome: string;
  sobrenome: string;
}

export function Login({ nome, sobrenome }: ILoginProps) {
  const [pessoa, setPessoa] = useState(() => ({
    nome: nome,
    sobrenome: sobrenome,
  }));

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setPessoa(() => ({
      ...pessoa,
      [name]: value,
    }));
  }

  return (
    <form>
      <input
        type="text"
        placeholder="nome"
        name="nome"
        value={pessoa?.nome}
        onChange={handleChange}
      />
      <input
        type="text"
        name="sobrenome"
        placeholder="nome"
        value={pessoa?.sobrenome}
        onChange={handleChange}
      />
    </form>
  );
}
