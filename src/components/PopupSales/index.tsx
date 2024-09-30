import {
  Add,
  Container,
  ContainerProducts,
  Content,
  ContentProducts,
  Delete,
  InputQuantity,
  Options,
  OptionsSelected,
} from './styles';
import CloseIcon from '@mui/icons-material/Close';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';

import { TailSpin } from 'react-loading-icons';
import { ITable } from '@/types/ITable';

import { formatCurrency } from '@/utils/formatCurrencyBR';

import { ISale } from '@/types';
import { IProductReactSelect } from '@/types/IProduct';
import { usePopupSales } from './hooks/usePopupSales';

import { SelectComponent } from '../Select';
import { useState } from 'react';

export interface IPopupSalesProps {
  setIsOpen: (value: boolean) => void;
  sales: ITable[] | null;
  productOptions: IProductReactSelect[];
  handleSales: (sale: ISale) => void;
  isLoading: boolean;
}

export function PopupSales({
  setIsOpen,
  sales,
  productOptions,
  handleSales,
  isLoading,
}: IPopupSalesProps) {
  const {
    register,
    handleSubmit,
    optionsSelected,
    totalValue,
    onSubmit,
    handleDeleteProduct,
    handleQuantityChange,
    handleSelectChange,
    handleKeyDown,
    handleKeyDownSelect,
    addNewProduct,
    containerRef,
    quantityRefs,
    selectRefs,
  } = usePopupSales({ productOptions, handleSales });

  return (
    <Container>
      <Content>
        <span>
          <CloseIcon onClick={() => setIsOpen(false)} />
        </span>
        <strong>Adicionar venda</strong>

        <input
          type="text"
          aria-label="Nome do cliente"
          placeholder="Nome do cliente"
          // AUTO FOCUS
          autoFocus
          {...register('nome_cliente')}
        />

        <ContainerProducts ref={containerRef}>
          {optionsSelected.map((entry, index) => (
            <ContentProducts key={index}>
              <SelectComponent
                id={`select-${entry.id}`}
                options={productOptions}
                value={entry.option}
                onChange={option => handleSelectChange(option as any, entry)}
                onKeyDown={e => handleKeyDownSelect(e, entry.id)}
                ref={el => {
                  selectRefs.current.set(+entry.id, el);
                }}
              />
              <InputQuantity
                type="text"
                ref={el => {
                  quantityRefs.current.set(+entry.id, el);
                }}
                value={entry.quantity}
                onChange={e => handleQuantityChange(e, entry)}
                onKeyDown={e => handleKeyDown(e, entry, index)}
              />

              <strong
                style={{
                  textWrap: 'nowrap',
                }}
              >
                {formatCurrency(entry.option.price.toString())} x{' '}
                {entry.quantity} ={' '}
                {formatCurrency(
                  (entry.option.price * entry.quantity).toString()
                )}
              </strong>
              <Delete onClick={() => handleDeleteProduct(entry.id)}>
                <DeleteSharpIcon />
              </Delete>
            </ContentProducts>
          ))}
        </ContainerProducts>
        <strong>Total: {formatCurrency(totalValue.toString())}</strong>

        <Add onClick={() => addNewProduct()}>ADICIONAR PRODUTO</Add>
        <button onClick={handleSubmit(onSubmit)}>
          {isLoading && <TailSpin height={30} />}
          {!isLoading && 'FINALIZAR'}
        </button>
      </Content>
    </Container>
  );
}
