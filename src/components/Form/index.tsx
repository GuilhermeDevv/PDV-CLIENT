"use client";

import { Container, Content } from "./styles";

interface IFormProps {
  children: React.ReactNode;
}

export function Form({ children }: IFormProps) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}
