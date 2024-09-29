import { ChangeEvent, useState } from 'react';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  formatCurrency,
  formatCurrencyOnChange,
  unformatCurrency,
} from '@/utils/formatCurrencyBR';

interface IBoxPopUp {
  handleChangeVisibilityPopup: (v?: boolean) => void;
  fetchOpenBoxFn: (saldo: number) => void;
}

export function useBoxPopUp({
  handleChangeVisibilityPopup,
  fetchOpenBoxFn,
}: IBoxPopUp) {
  const schema = z
    .object({
      value: z.string({
        message: 'Valor inválido',
        required_error: 'Campo obrigatório',
      }),
      confirmValue: z.string({
        message: 'Valor inválido',
        required_error: 'Campo obrigatório',
      }),
    })
    .refine(data => data.value == data.confirmValue, {
      message: 'Os valores não são iguais',
      path: ['confirmValue'],
    });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  function handleOpenBox() {
    handleChangeVisibilityPopup(false);
  }

  function handleSubmitBox(data: any) {
    fetchOpenBoxFn(unformatCurrency(data.value));
  }

  function formatValue(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.name, formatCurrencyOnChange(event.target.value));
  }

  return {
    handleOpenBox,
    handleSubmitBox,
    handleSubmit,
    register,
    errors,
    formatValue,
  };
}
