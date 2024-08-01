"use client";

import { ButtonHTMLAttributes } from "react";
import { Button } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string | React.ReactElement;
}

export function ButtonComponent({ text, ...rest }: IButtonProps) {
  return <Button {...rest}>{text ?? "Visualizar"}</Button>;
}
