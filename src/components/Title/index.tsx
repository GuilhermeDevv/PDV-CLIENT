"use client";

import { Title } from "./styles";

interface ITitleProps {
  text: string;
}

export function TitleComponent({ text }: ITitleProps) {
  return <Title>{text}</Title>;
}
