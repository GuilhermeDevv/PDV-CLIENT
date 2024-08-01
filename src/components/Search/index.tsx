"use client";

import { Input } from "./styles";
import { SearchComponentProps } from "./types";

export function SearchComponent({
  placeholder,
  ...props
}: SearchComponentProps) {
  return <Input {...props} placeholder={placeholder ?? "Pesquisar"} />;
}
