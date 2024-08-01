"use client";

import { HTMLAttributes } from "react";
import { Title } from "./styles";

interface ITitleProps extends HTMLAttributes<HTMLHeadingElement> {
  text: string;
}

export function TitleComponent({ text, ...rest }: ITitleProps) {
  return <Title {...rest}>{text}</Title>;
}
