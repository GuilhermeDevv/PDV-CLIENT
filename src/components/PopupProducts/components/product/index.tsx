import {
  Container,
  Content,
  ImageContainer,
  ImageProduct,
  TitleProduct,
} from './styles';

import { ProductProps } from './types';

export function Product(props: ProductProps) {
  const { src, title } = props;

  return (
    <Container>
      <Content>
        <ImageContainer>
          <ImageProduct src={src} width={65} height={65} alt={title} />
          <TitleProduct>{title}</TitleProduct>
        </ImageContainer>

        <Right>
          <Price></Price>
          <Quantity></Quantity>
          <QuantityPurchase></QuantityPurchase>
          <CostPrice></CostPrice>
        </Right>
      </Content>
    </Container>
  );
}
