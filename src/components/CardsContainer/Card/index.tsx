"use client";
import { ICard } from "@/types";

import { Container, Content, Middle, Top } from "./styles";

export function Card({ text, Icon, quantity }: ICard) {
  return (
    <Container>
      <Content>
        <Top>
          <span>{text.toLowerCase()}</span>
          {Icon}
        </Top>
        <Middle>{quantity}</Middle>
      </Content>
    </Container>
  );
}
