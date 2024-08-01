"use client";
import { ITable } from "@/types/ITable";
import { useEffect, useState } from "react";
import { formatCurrency } from "../formatCurrencyBR";
import { IHttpClient } from "@/types/httpClient";
import { IFormatDate } from "@/types/formatDate";
import { useBoxStore } from "@/context/useBox";

interface IBox {
  client: IHttpClient;
  formatDate: IFormatDate;
}

export function useBox({ client, formatDate }: IBox) {
  const { setBox } = useBoxStore();

  const [open, setOpen] = useState(false);
  const [table, setTable] = useState<ITable[] | null>(null);
  const [hasBoxOpen, setHasBoxOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  function handleChangeVisibilityPopup(v?: boolean) {
    setOpen(v ?? !open);
  }

  async function fetchDataTable() {
    setLoading(true);
    try {
      const response = await client.request({
        url: `${process.env.NEXT_PUBLIC_API_URL}/caixa`,
        method: "get",
      });

      const rows =
        response.data.data &&
        response.data.data.map(({ id_caixa, ...row }: ITable) => ({
          id: id_caixa,
          ...row,
          data_abertura: row.data_abertura
            ? formatDate.format({
                date: row.data_abertura as string,
                format: "DD/MM/YYYY HH:mm:ss",
              })
            : null,
          data_fechamento: row.data_fechamento
            ? formatDate.format({
                date: row.data_fechamento as string,
                format: "DD/MM/YYYY HH:mm:ss",
              })
            : null,
          status: row.status ? "Ativo" : "Inativo",
          saldo: formatCurrency(
            (row?.saldo as string) && (row?.saldo?.toString() as string)
          ),
        }));

      setBox(response.data.open && rows[0]);
      setTable(rows);
      setHasBoxOpen(response.data.open);

      handleChangeVisibilityPopup(false);
    } catch (error) {
      console.error(error);
    }

    setIsFetching(false);
    setLoading(false);
  }

  async function fetchCloseBox(idCaixa: number) {
    await client.request({
      url: `${process.env.NEXT_PUBLIC_API_URL}/caixa/`,
      method: "put",
    });
    setIsFetching(true);
  }

  async function fetchOpenBox(saldo: number) {
    setLoading(true);

    await client.request({
      url: `${process.env.NEXT_PUBLIC_API_URL}/caixa`,
      method: "post",
      body: {
        saldo,
      },
    });

    setLoading(false);
    setIsFetching(true);
  }

  useEffect(() => {
    if (!isFetching) return;
    fetchDataTable();
  }, [isFetching]);

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
