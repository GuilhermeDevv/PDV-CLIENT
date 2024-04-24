"use client";
import { InputHTMLAttributes } from "react";
import { Input } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputComponent({ type, ...rest }: InputProps) {
  return <Input type={type ?? "text"} {...rest} />;
}
