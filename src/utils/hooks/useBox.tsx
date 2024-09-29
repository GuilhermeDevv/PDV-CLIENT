'use client';
import { ITable } from '@/types/ITable';
import { useCallback, useEffect, useState } from 'react';
import { formatCurrency } from '../formatCurrencyBR';
import { IHttpClient } from '@/types/httpClient';
import { IFormatDate } from '@/types/formatDate';

interface IBox {
  client: IHttpClient;
  formatDate: IFormatDate;
}

export function useBox({ client, formatDate }: IBox) {
  const token = window.localStorage.getItem('token');
  const [open, setOpen] = useState(false);
  const [table, setTable] = useState<ITable[] | null>(null);
  const [hasBoxOpen, setHasBoxOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  const handleChangeVisibilityPopup = useCallback(
    (v?: boolean) => {
      setOpen(v ?? !open);
    },
    [setOpen, open]
  );

  const fetchDataTable = useCallback(async () => {
    setLoading(true);
    try {
      const response = await client.request({
        url: `${process.env.NEXT_PUBLIC_API_URL}/caixa`,
        method: 'get',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const rows =
        response.data.data &&
        response.data.data.map(({ id_caixa, ...row }: ITable) => ({
          id: id_caixa,
          data_abertura: row.data_abertura
            ? formatDate.format({
                date: row.data_abertura as string,
                format: 'DD/MM/YYYY HH:mm:ss',
              })
            : null,
          'data fechamento': row.data_fechamento
            ? formatDate.format({
                date: row.data_fechamento as string,
                format: 'DD/MM/YYYY HH:mm:ss',
              })
            : null,
          status: row.status ? 'Ativo' : 'Inativo',
          'saldo inicial': formatCurrency(
            (row?.saldo_inicial as string) &&
              (row?.saldo_inicial?.toString() as string)
          ),
          'saldo final': formatCurrency(
            (row?.saldo_final as string) &&
              (row?.saldo_final?.toString() as string)
          ),
          'vendas parcial': formatCurrency(
            (row?.vendas_parcial as string) &&
              (row?.vendas_parcial?.toString() as string)
          ),
        }));

      setTable(rows);
      setHasBoxOpen(response.data.open);

      handleChangeVisibilityPopup(false);
    } catch (error) {
      console.error(error);
    }

    setIsFetching(false);
    setLoading(false);
  }, [handleChangeVisibilityPopup, client, formatDate, token]);

  const fetchCloseBox = useCallback(
    async (idCaixa: number) => {
      await client.request({
        url: `${process.env.NEXT_PUBLIC_API_URL}/caixa/`,
        method: 'put',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsFetching(true);
    },
    [client, token]
  );

  const fetchOpenBox = useCallback(
    async (saldo: number) => {
      setLoading(true);

      await client.request({
        url: `${process.env.NEXT_PUBLIC_API_URL}/caixa`,
        method: 'post',
        body: {
          saldo,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setLoading(false);
      setIsFetching(true);
    },
    [client, token]
  );

  useEffect(() => {
    if (!isFetching) return;
    fetchDataTable();
  }, [isFetching, fetchDataTable]);

  return {
    open,
    table,
    loading,
    hasBoxOpen,
    handleChangeVisibilityPopup,
    fetchCloseBox,
    fetchOpenBox,
    setOpen,
  };
}
