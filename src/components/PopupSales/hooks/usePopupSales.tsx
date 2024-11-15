import { ISale, ISelect } from '@/types';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import * as z from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { StylesConfig } from 'react-select';
import { IPopupSalesProps } from '..';
import Select from 'react-select';
import { unformatCurrency } from '@/utils/formatCurrencyBR';

type IUsePopupSales = Pick<IPopupSalesProps, 'productOptions' | 'handleSales'>;
type optionSelected = {
  option: { value: string; label: string; price: number };
  editCurrentPrice: boolean;
  id: string;
  quantity: number;
};
export function usePopupSales({ productOptions, handleSales }: IUsePopupSales) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const quantityRefs = useRef<Map<number, HTMLInputElement | null>>(new Map());
  const selectRefs = useRef<Map<number, Select | null>>(new Map());

  const schema = useMemo(
    () =>
      z.object({
        id_venda: z.string().optional(),
        nome_cliente: z.string().optional(),
      }),
    []
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [totalValue, setTotalValue] = useState(0);
  const [options] = useState(() =>
    productOptions?.map(product => ({
      ...product,
    }))
  );
  const [optionsSearch, setOptionsSearch] = useState('');
  const [optionsSelected, setOptionsSelected] = useState<optionSelected[] | []>(
    [
      {
        option: { value: '', label: '', price: 0 },
        editCurrentPrice: false,
        id: '1',
        quantity: 1,
      },
    ]
  );

  useEffect(() => {
    console.log('optionsSelected', optionsSelected);
  }, [optionsSelected]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [optionsSelected, optionsSelected.length]);

  useEffect(() => {
    // se apertar o F2, FINALIZA A VENDA
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'F2') {
        handleSubmit(onSubmit)();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [optionsSelected]);

  useEffect(() => {
    scrollToBottom();
  }, [optionsSelected]);

  const scrollToBottom = useCallback(() => {
    if (formRef.current) {
      formRef.current.scrollTop = formRef.current.scrollHeight;
    }
  }, []);

  const onChangeSelectProduct = useCallback(
    (option: optionSelected) => {
      const newOptionsSelected = optionsSelected.map(o =>
        o.id === option.id ? { ...option } : o
      );
      const totalValue = parseFloat(
        newOptionsSelected
          .reduce(
            (acc, cur) =>
              acc + parseFloat((cur.option.price * cur.quantity).toFixed(2)),
            0
          )
          .toFixed(2)
      );

      setOptionsSelected(newOptionsSelected);

      setTotalValue(totalValue);
    },
    [optionsSelected, setOptionsSelected, setTotalValue]
  );

  const onChangePriceProduct = useCallback(
    (price: string, id: string) => {
      // Se o preço estiver vazio, não faz nada
      if (price === '') return;

      const numericPrice = unformatCurrency(price); // Usa a função unformatCurrency para converter para número
      const newOptionsSelected = optionsSelected.map(o =>
        o.id === id ? { ...o, option: { ...o.option, price: numericPrice } } : o
      );
      const totalValue = parseFloat(
        newOptionsSelected
          .reduce(
            (acc, cur) =>
              acc + parseFloat((cur.option.price * cur.quantity).toFixed(2)),
            0
          )
          .toFixed(2)
      );

      setOptionsSelected(newOptionsSelected);
      setTotalValue(totalValue);
    },
    [optionsSelected, setOptionsSelected, setTotalValue]
  );

  const onSubmit = useCallback(
    (obj: any) => {
      const data: typeof schema._type = obj;

      const idsProdutos = optionsSelected
        .flatMap(i => Array(i.quantity).fill(i.option.value))
        .filter(id => id !== '');

      const valoresProdutos = optionsSelected.reduce((acc, entry) => {
        if (entry.editCurrentPrice) {
          acc[entry.option.value] = entry.option.price;
        }
        return acc;
      }, {} as Record<string, number>);

      const salesData = {
        ...data,
        total: totalValue.toString(),
        ...(idsProdutos.length > 0 && { id_produtos: idsProdutos }),
        ...(Object.keys(valoresProdutos).length > 0 && {
          valores: valoresProdutos,
        }),
      };

      handleSales(salesData as ISale);
    },
    [handleSales, optionsSelected, totalValue, schema]
  );

  const handleDeleteProduct = useCallback(
    (id: string | null) => {
      if (!id) return;
      if (optionsSelected.length === 1) return;

      setOptionsSelected(prev => prev?.filter(p => p.id !== id) || []);

      const totalValue = parseFloat(
        optionsSelected
          .filter(p => p.id !== id)
          .reduce(
            (acc, cur) =>
              acc + parseFloat((cur.option.price * cur.quantity).toFixed(2)),
            0
          )
          .toFixed(2)
      );

      setTotalValue(totalValue);
    },
    [optionsSelected, setOptionsSelected, setTotalValue]
  );
  // exibir o campo de editar o produto
  const handleEditPriceProduct = useCallback(
    (id: string | null) => {
      if (!id) return;

      const newOptionsSelected = optionsSelected.map(o =>
        o.id === id ? { ...o, editCurrentPrice: !o.editCurrentPrice } : o
      );

      setOptionsSelected(newOptionsSelected);
    },
    [optionsSelected, setOptionsSelected]
  );

  const handleSearchProduct = useCallback((value: string) => {
    setOptionsSearch(value);
  }, []);

  const addNewProduct = useCallback(() => {
    setOptionsSelected(prev =>
      prev
        ? [
            ...prev,
            {
              option: { value: '', label: '', price: 0 },
              editCurrentPrice: false,
              id: `${prev.length + 1}`,
              quantity: 1,
            },
          ]
        : [
            {
              option: { value: '', label: '', price: 0 },
              editCurrentPrice: false,
              id: '1',
              quantity: 1,
            },
          ]
    );
  }, []);

  const handleSelectChange = useCallback(
    (option: any, entry: any) => {
      onChangeSelectProduct({
        option: option,
        editCurrentPrice: false,
        id: entry.id,
        quantity: entry.quantity,
      });

      const quantityInput = quantityRefs.current.get(+entry.id);
      if (quantityInput) {
        quantityInput.focus();
      }
    },
    [onChangeSelectProduct, quantityRefs]
  );

  const handleQuantityChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, entry: any) => {
      const value = event.target.value;
      if (isNaN(Number(value))) return;
      const id = entry.id;
      onChangeSelectProduct({
        option: entry.option,
        editCurrentPrice: false,
        id,
        quantity: Number(value),
      });
    },
    [onChangeSelectProduct]
  );

  const handleKeyDown = useCallback(
    (
      event: React.KeyboardEvent<HTMLInputElement>,
      _entry: any,
      index: number
    ) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        const nextIndex = index + 1;
        if (nextIndex < optionsSelected.length) {
          const nextEntry = optionsSelected[nextIndex];
          const nextSelect = selectRefs.current.get(+nextEntry.id);
          if (nextSelect) {
            (nextSelect as unknown as any).focus();
          }
        } else {
          addNewProduct();
        }
      }
    },
    [addNewProduct, optionsSelected, selectRefs]
  );

  const handleKeyDownSelect = useCallback((event: any, id: any) => {
    const activeElement = document.activeElement;
    const value = activeElement?.getAttribute('aria-controls');

    if (event.key === 'Enter' && !value) {
      event.preventDefault();
    }
  }, []);

  return useMemo(
    () => ({
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
      onChangePriceProduct,
      handleEditPriceProduct,
      containerRef,
      quantityRefs,
      selectRefs,
      formRef,
    }),
    [
      register,
      handleSubmit,
      optionsSelected,
      totalValue,
      handleDeleteProduct,
      handleQuantityChange,
      handleSelectChange,
      handleKeyDown,
      handleKeyDownSelect,
      addNewProduct,
      onSubmit,
      onChangePriceProduct,
      handleEditPriceProduct,
    ]
  );
}
