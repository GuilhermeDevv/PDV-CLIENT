'use client';
import { IProduct } from '@/types/IProduct';
import { useEffect, useState } from 'react';
import { formatCurrency } from '../formatCurrencyBR';
import { ITable } from '@/types/ITable';
import { IHttpClient } from '@/types/httpClient';
import swal from 'sweetalert2';

export interface IuseProductsProps {
  client: IHttpClient;
}

function useProducts({ client }: IuseProductsProps) {
  const token = window.localStorage.getItem('token');
  const [table, setTable] = useState<ITable[] | null>(null);
  const [tableFiltered, setTableFiltered] = useState<ITable[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [productEdit, setProductEdit] = useState<IProduct | null>(null);
  const [fire, setFire] = useState(false);

  useEffect(() => {
    if (productEdit) setIsOpen(true);
  }, [productEdit]);

  function handleOpenPopup() {
    setProductEdit(null);
    setIsOpen(true);
  }

  async function fetchChangeStatus(id: number, status: boolean) {
    try {
      await client.request({
        method: 'put',
        url: `${process.env.NEXT_PUBLIC_API_URL}/produto/${id}`,
        body: { isOnline: status },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      swal.fire({
        title: 'Status atualizado com sucesso',
        icon: 'success',
        showConfirmButton: false,
        timer: 3000,
      });
    } catch (err) {
      swal.fire({
        icon: 'error',
        title: 'Erro ao atualizar status',
        text: 'Tente novamente mais tarde',
      });
    }
    setFire(!fire);
  }

  function handleFilterTable(search: string) {
    if (!search) return setTableFiltered(null);

    const searchNumber = Number(search);

    let data;
    if (!isNaN(searchNumber)) {
      // Procurar pelo id que contém o número digitado
      data = table?.filter(item => item?.id?.toString().includes(search));
    } else {
      // Procurar pelo nome que contém o texto digitado
      data = table?.filter(item =>
        (item?.nome as string)?.toLowerCase().includes(search.toLowerCase())
      );
    }

    setTableFiltered(data ?? null);
  }

  async function fetchProducts() {
    try {
      const response = await client.request({
        url: `${process.env.NEXT_PUBLIC_API_URL}/produto`,
        method: 'get',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const rows = response.data.data.map((row: IProduct) => ({
        cor: row.cor,
        isOnline: row.isOnline,
        id: row.id_produto,
        nome: row.nome,
        quantidade: row.quantidade,
        preco: formatCurrency(row.preco.toString()),
        descricao: row.descricao,
        custo: formatCurrency(row.custo.toString()),
        estoque: row.estoque,
      }));

      setTable(rows);
      setTableFiltered(null);
    } catch (err) {
      console.log(err);
      swal.fire({
        icon: 'error',
        title: 'Erro ao buscar produtos',
        text: 'Tente novamente mais tarde',
      });
    }
  }

  async function handleCreateProduct(data: IProduct) {
    setIsLoading(true);
    try {
      await client.request({
        url: `${process.env.NEXT_PUBLIC_API_URL}/produto`,
        method: 'post',
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      swal.fire({
        title: 'produto criado com sucesso',
        icon: 'success',
        showConfirmButton: false,
        timer: 3000,
      });
      setIsOpen(false);
      setFire(!fire);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  }

  async function fetchUpdateProduct(data: IProduct) {
    setIsLoading(true);
    try {
      await client.request({
        url: `${process.env.NEXT_PUBLIC_API_URL}/produto/${data.id_produto}`,
        method: 'put',
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      swal.fire({
        title: 'produto atualizado com sucesso',
        icon: 'success',
        showConfirmButton: false,
        timer: 3000,
      });
      setFire(!fire);
      setProductEdit(null);
      setIsOpen(false);
    } catch (err) {
      console.log(err);
      swal.fire({
        icon: 'error',
        title: 'Erro ao atualizar produto',
        text: 'Tente novamente mais tarde',
      });
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, [fire]);

  return {
    table,
    tableFiltered,
    handleFilterTable,
    setIsOpen,
    isOpen,
    isLoading,
    handleCreateProduct,
    productEdit,
    setProductEdit,
    handleOpenPopup,
    setFire,
    fetchChangeStatus,
    fetchUpdateProduct,
  };
}

export { useProducts };
