"use client";

import { Bars } from "./components/Bars";
import { Line } from "./components/Line";
import { Container, Content } from "./styles";

export function GraphicsContainer() {
  return (
    <Container>
      <Content>
        <Bars />
        <Line />
      </Content>
    </Container>
  );
}
