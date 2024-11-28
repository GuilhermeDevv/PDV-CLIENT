'use client';

import { InputContainer, Input, SearchIcon } from './styles';
import { SearchComponentProps } from './types';

export function SearchComponent({
  placeholder,
  ...props
}: SearchComponentProps) {
  return (
    <InputContainer>
      <SearchIcon />
      <Input {...props} placeholder={placeholder ?? 'Pesquisar'} />
    </InputContainer>
  );
}
