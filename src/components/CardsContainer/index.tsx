"use client";
import { ICard } from "@/types";
import { Card } from "./Card";
import { Container, Content } from "./styles";

export interface ICardsContainerProps {
  data: ICard[];
}

export function CardsContainer({ data }: ICardsContainerProps) {
  return (
    <Container>
      <Content>
        {data.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </Content>
    </Container>
  );
}
