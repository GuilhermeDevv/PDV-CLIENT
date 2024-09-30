import { ISale, ISelect } from '@/types';
import { useEffect, useRef, useState } from 'react';
import * as z from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { StylesConfig } from 'react-select';
import { IPopupSalesProps } from '..';
import Select from 'react-select';

type IUsePopupSales = Pick<IPopupSalesProps, 'productOptions' | 'handleSales'>;
type optionSelected = {
  option: { value: string; label: string; price: number };
  id: string;
  quantity: number;
};
export function usePopupSales({ productOptions, handleSales }: IUsePopupSales) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const quantityRefs = useRef<Map<number, HTMLInputElement | null>>(new Map());
  const selectRefs = useRef<Map<number, Select | null>>(new Map());

  const schema = z.object({
    id_venda: z.string().optional(),
    nome_cliente: z.string().optional(),
  });

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
        id: '1',
        quantity: 1,
      },
    ]
  );

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

  function onChangeSelectProduct(option: optionSelected) {
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
  }

  function onSubmit(obj: any) {
    const data: typeof schema._type = obj;

    const idsProdutos = optionsSelected
      .flatMap(i => Array(i.quantity).fill(i.option.value))
      .filter(id => id !== '');

    const salesData = {
      ...data,
      total: totalValue.toString(),
      ...(idsProdutos.length > 0 && { id_produtos: idsProdutos }),
    };

    handleSales(salesData as ISale);
  }

  function handleDeleteProduct(id: string | null) {
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
  }

  function handleSearchProduct(value: string) {
    setOptionsSearch(value);
  }

  function addNewProduct() {
    setOptionsSelected(prev =>
      prev
        ? [
            ...prev,
            {
              option: { value: '', label: '', price: 0 },
              id: `${prev.length + 1}`,
              quantity: 1,
            },
          ]
        : [
            {
              option: { value: '', label: '', price: 0 },
              id: '1',
              quantity: 1,
            },
          ]
    );
  }

  const handleSelectChange = (option: any, entry: any) => {
    onChangeSelectProduct({
      option: option,
      id: entry.id,
      quantity: entry.quantity,
    });

    const quantityInput = quantityRefs.current.get(+entry.id);
    if (quantityInput) {
      quantityInput.focus();
    }
  };

  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    entry: any
  ) => {
    const value = event.target.value;
    if (isNaN(Number(value))) return;
    const id = entry.id;
    onChangeSelectProduct({
      option: entry.option,
      id,
      quantity: Number(value),
    });
  };

  const handleKeyDown = (
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
  };

  const handleKeyDownSelect = (event: any, id: any) => {
    const activeElement = document.activeElement;
    const value = activeElement?.getAttribute('aria-controls');

    if (event.key === 'Enter' && !value) {
      event.preventDefault();
    }
  };

  return {
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
  };
}
