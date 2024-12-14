import Select from './select';
import { Container } from './styles';

import { useOrdeByModel } from './hooks';

type OrderByComponentProps = {
  handleOrderBy: (v: string) => void;
};

export function OrderByComponent({ handleOrderBy }: OrderByComponentProps) {
  const { orderBy } = useOrdeByModel();

  return (
    <Container>
      <span>Ordenar por:</span>
      <Select
        options={orderBy}
        onChange={(e: any) => handleOrderBy(e.value)}
        defaultValue={orderBy[0]}
      />
    </Container>
  );
}
