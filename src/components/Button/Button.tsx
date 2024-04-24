"use client";

import { ButtonHTMLAttributes } from "react";
import { Button } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export function ButtonComponent({ text, ...rest }: IButtonProps) {
  return <Button {...rest}>{text ?? "Confirmar"}</Button>;
}
