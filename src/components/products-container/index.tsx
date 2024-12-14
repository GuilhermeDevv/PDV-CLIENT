import { product } from '@/types/product';
import { Product } from './components';
import { Container } from './styles';

type ProductProps = {
  products: product[];
};

export function ProductsContainer({ products }: ProductProps) {
  return (
    <Container>
      {products.map((product, i) => (
        <Product key={i} data={product} />
      ))}
    </Container>
  );
}
