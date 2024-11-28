import {
  Add,
  Container,
  ContainerProducts,
  Content,
  ContentProducts,
  Delete,
  EditPrice,
  InputPrice,
  InputQuantity,
  Options,
  OptionsSelected,
} from './styles';
import CloseIcon from '@mui/icons-material/Close';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

import { TailSpin } from 'react-loading-icons';
import { ITable } from '@/types/ITable';

import {
  formatCurrency,
  formatCurrencyOnChange,
} from '@/utils/formatCurrencyBR';

import { ISale } from '@/types';
import { IProductReactSelect } from '@/types/product';
import { usePopupSales } from './hooks/usePopupSales';

import { SelectComponent } from '../Select';
import { memo } from 'react';

export interface IPopupSalesProps {
  setIsOpen: (value: boolean) => void;
  sales: ITable[] | null;
  productOptions: IProductReactSelect[];
  handleSales: (sale: ISale) => void;
  isLoading: boolean;
}

const Component = ({
  setIsOpen,
  sales,
  productOptions,
  handleSales,
  isLoading,
}: IPopupSalesProps) => {
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
    formRef,
    onChangePriceProduct,
    handleEditPriceProduct,
  } = usePopupSales({ productOptions, handleSales });

  return (
    <Container>
      <Content ref={formRef}>
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
                id={entry.id}
                options={productOptions}
                value={entry.option}
                onChange={option => handleSelectChange(option as any, entry)}
                onKeyDown={e => handleKeyDownSelect(e, entry.id)}
                ref={el => {
                  selectRefs.current.set(+entry.id, el);
                }}
              />
              {/*   <InputPrice
                type="text"
                aria-label="Valor do produto"
                placeholder="Valor do produto"
                {...register(`valor_${entry.id}`)}
                value={
                  formatCurrency(entry.option.price.toString()) === 'R$ 0,00'
                    ? ''
                    : formatCurrency(entry.option.price.toString())
                }
                onChange={e => {
                  const value = e.target.value;
                  if (value === '') {
                    // Se o valor estiver vazio, define o valor original do produto
                    onChangePriceProduct(
                      entry.option.price.toString(),
                      entry.id
                    );
                  } else {
                    const formattedValue = formatCurrencyOnChange(value);
                    onChangePriceProduct(formattedValue, entry.id);
                  }
                }}
              /> */}

              {entry.editCurrentPrice && (
                <InputPrice
                  type="text"
                  aria-label="Valor do produto"
                  placeholder="Valor do produto"
                  {...register(`valor_${entry.id}`)}
                  value={
                    formatCurrency(entry.option.price.toString()) === 'R$ 0,00'
                      ? ''
                      : formatCurrency(entry.option.price.toString())
                  }
                  onChange={e => {
                    const value = e.target.value;
                    if (value === '') {
                      // Se o valor estiver vazio, define o valor original do produto
                      onChangePriceProduct(
                        entry.option.price.toString(),
                        entry.id
                      );
                    } else {
                      const formattedValue = formatCurrencyOnChange(value);
                      onChangePriceProduct(formattedValue, entry.id);
                    }
                  }}
                />
              )}

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
              <Delete
                onClick={() => handleDeleteProduct(entry.id)}
                title="Remover produto"
              >
                <DeleteSharpIcon />
              </Delete>

              <EditPrice
                onClick={() => handleEditPriceProduct(entry.id)}
                title="Editar preço"
              >
                <ModeEditOutlineIcon />
              </EditPrice>
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
};

export const PopupSales = memo(Component);
