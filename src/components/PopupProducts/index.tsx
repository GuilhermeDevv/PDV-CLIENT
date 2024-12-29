'use client';

import { TailSpin } from 'react-loading-icons';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

import {
  Button,
  ButtonAdd,
  ButtonClear,
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
import { InputComponent } from '../Input';
import Select from '../Select';

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

  return (
    <Container
      onSubmit={handleSubmit(data => handleChangeProduct(data as any))}
    >
      <Left>
        {/* IMAGEM DO PRODUTO IMPORTADO DA MAQUINA DO USUARIO OU LINK */}
        <ImageUploader onImageUpload={handleImageUpload} />
        

        {/*  NOME DO PRODUTO */}
        <InputComponent
          placeholder="NOME"
          {...register('name')}
          defaultValue={product ? product.nome : ''}
        />

        {/* PREÇO DO PRODUTO */}
        <InputComponent
          placeholder="PREÇO"
          {...register('price')}
          defaultValue={product ? `R$ ${product.preco}` : ''}
          onChange={formatValue}
        />

        {/* ESTOQUE COMPRADO */}
        <InputComponent
          placeholder="ESTOQUE COMPRADO"
          {...register('stock')}
          defaultValue={product ? product.estoque : ''}
        />

        {/* QUANTIDADE DISPONIVEL */}
        <InputComponent
          placeholder="ESTOQUE DISPONIVEL"
          {...register('available_quantity')}
          defaultValue={product ? product.quantidade : ''}
        />

        {/* DESCONTO */}
        <InputComponent
          placeholder="DESCONTO"
          {...register('discount')}
          type="number"
          min={0}
          max={100}
          defaultValue={
            product ? +product.desconto.toString().split('%')[0] : 0
          }
        />
        {/* DESCRIÇÃO */}
        <InputComponent
          placeholder="DESCRIÇÃO"
          {...register('description')}
          defaultValue={product ? product.descricao : ''}
        />

        {/* SELECT DE CATEGORIA (VAI SER RETORNADO DO BANCO AS CATEGORIAS DISPONIVEIS) */}
        <Select
          menuPlacement="top"
          options={[
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
          ]}
          placeholder="Categoria"
        />

        {/* FORNECEDOR OU MARCA (VAI SER RETORNADO DO BANCO AS CATEGORIAS DISPONIVEIS) */}
        <Select
          menuPlacement="top"
          options={[
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
          ]}
          placeholder="Fornecedor"
        />

        <ContainerActions>
          <ButtonClear type="button" onClick={() => setIsOpen(false)}>
            <ClearIcon />
          </ButtonClear>

          {isLoading && (
            <Button type="submit">
              <TailSpin />
            </Button>
          )}
          {!isLoading && (
            <ButtonAdd type="submit" title="Adicionar Produto">
              <CheckIcon />
            </ButtonAdd>
          )}
        </ContainerActions>
      </Left>

      <Right>{/* PREVISUALIZAÇÃO DOS PRODUTOS JÁ CRIADOS */}</Right>
    </Container>
  );
}
