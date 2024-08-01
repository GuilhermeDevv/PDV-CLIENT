"use client";

import { IData } from "@/types/IDashboard";
import { Bars } from "./components/Bars";
import { Line } from "./components/Line";
import { Container, Content } from "./styles";

export function GraphicsContainer({ salesValue, salesQuantity }: IData) {
  return (
    <Container>
      <Content>
        <Bars data={salesValue} />
        <Line data={salesQuantity} />
      </Content>
    </Container>
  );
}
