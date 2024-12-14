'use client';

import { TailSpin } from 'react-loading-icons';
import {
  Container,
  ContainerActions,
  Content,
  Horizontal,
  InputContainer,
  Left,
  Right,
} from './styles';
import { product } from '@/types/product';
import { ImageUploader } from '@/components/image-uploader';
import CloseIcon from '@mui/icons-material/Close';
import { usePopupProductsComponent } from './hooks/usePopupProductsComponent';
import { formatPercent } from '@/utils/formatPercent';

export interface IProductProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  product: product | null;
  isLoading: boolean;
  handleCreateProduct: (data: product) => Promise<void>;
  fetchUpdateProduct: (data: product) => Promise<void>;
  isOpen: boolean;
}

export function PopupProductsComponent({
  setIsOpen,
  product,
  handleCreateProduct,
  fetchUpdateProduct,
  isLoading,
  isOpen,
}: IProductProps) {
  const {
    errors,
    formatValue,
    handleChangeProduct,
    handleSubmit,
    register,
    setValue,
    handleImageUpload,
    imageUrl,
  } = usePopupProductsComponent({
    fetchUpdateProduct,
    handleCreateProduct,
    product,
  });

  {
    /* <Content>
        <span>
          <CloseIcon onClick={() => setIsOpen(false)} />
        </span>
        <strong>{product ? 'EDITAR PRODUTO !' : 'ADICIONAR PRODUTO '}</strong>
        <ContainerActions>
          <InputContainer>
            <span>ID</span>
            <input
              {...register('id_produto')}
              type="text"
              placeholder="DIGITE O ID (opcional)"
              defaultValue={product ? product.id_produto : ''}
              readOnly={product ? true : false}
            />
          </InputContainer>

          <InputContainer>
            <span>NOME</span>
            <input
              {...register('name')}
              type="text"
              placeholder="DIGITE O NOME"
              defaultValue={product ? product.nome : ''}
            />
          </InputContainer>
          <InputContainer>
            <span>DESCRIÇÃO</span>
            <input
              {...register('description')}
              type="text"
              placeholder="DIGITE A DESCRIÇÃO"
              defaultValue={product ? product.descricao : ''}
            />
          </InputContainer>
          <InputContainer>
            <span>PREÇO</span>
            <input
              {...register('price')}
              type="text"
              placeholder="DIGITE O VALOR"
              defaultValue={product ? `R$ ${product.preco}` : ''}
              onChange={formatValue}
            />
          </InputContainer>

          <InputContainer>
            <span>PREÇO DE CUSTO</span>
            <input
              {...register('cost_price')}
              type="text"
              placeholder="DIGITE O VALOR"
              defaultValue={product ? `R$ ${product.custo}` : ''}
              onChange={formatValue}
            />
          </InputContainer>
          <InputContainer>
            <span>ESTOQUE</span>
            <input
              {...register('stock')}
              type="text"
              placeholder="DIGITE A QUANTIDADE"
              defaultValue={product ? product.estoque : ''}
            />
          </InputContainer>
          <InputContainer>
            <span>QUANTIDADE COMPRADA</span>
            <input
              {...register('available_quantity')}
              type="text"
              placeholder="DIGITE A QUANTIDADE"
              defaultValue={product ? product.quantidade : ''}
            />
          </InputContainer>

          <InputContainer>
            <span>DESCONTO</span>
            <Horizontal>
              <input
                {...register('discount')}
                type="number"
                min={0}
                max={100}
                placeholder="DIGITE O DESCONTO"
                defaultValue={
                  product ? +product.desconto.toString().split('%')[0] : 0
                }
                style={{ width: '87%' }}
              />
              <span>%</span>
            </Horizontal>
          </InputContainer>
        </ContainerActions>
        <button type="submit">
          {isLoading ? (
            <TailSpin height={30} />
          ) : product ? (
            'EDITAR'
          ) : (
            'ADICIONAR'
          )}
        </button>
      </Content> */
  }

  return (
    <Container
      onSubmit={handleSubmit(data => handleChangeProduct(data as any))}
    >
      <Left>
        {/* IMAGEM DO PRODUTO IMPORTADO DA MAQUINA DO USUARIO OU LINK */}
        <ImageUploader onImageUpload={handleImageUpload} />

        {/*  NOME DO PRODUTO */}

        {/* PREÇO DO PRODUTO */}

        {/* ESTOQUE COMPRADO */}

        {/* QUANTIDADE DISPONIVEL */}

        {/* DESCONTO */}

        {/* SELECT DE CATEGORIA (VAI SER RETORNADO DO BANCO AS CATEGORIAS DISPONIVEIS) */}

        {/* DESCRIÇÃO */}

        {/* FORNECEDOR OU MARCA */}
      </Left>

      <Right>{/* PREVISUALIZAÇÃO DOS PRODUTOS */}</Right>
    </Container>
  );
}
