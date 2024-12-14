import { useMemo } from 'react';

function useOrdeByModel() {
  const orderBy = useMemo(
    () => [
      { value: 'all', label: 'Todos' },
      { value: 'name', label: 'Nome' },
      { value: 'asc', label: 'Preço: Menor para Maior' },
      { value: 'desc', label: 'Preço: Maior para Menor' },
      {
        value: 'quantity_asc',
        label: 'Quantidade: Menor para Maior',
      },
      {
        value: 'quantity_desc',
        label: 'Quantidade: Maior para Menor',
      },
    ],
    []
  );

  return {
    orderBy,
  };
}

export { useOrdeByModel };
