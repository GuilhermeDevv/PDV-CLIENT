'use client';
import { IHttpClient } from '@/types/httpClient';
import { ISale } from '@/types/ISales';
import { ITable } from '@/types/ITable';
import { useEffect, useState } from 'react';
import { useBoxStore } from '@/context/useBox';
import { formatCurrency } from '../formatCurrencyBR';
import { IFormatDate } from '@/types/formatDate';
import { IProductReactSelect } from '@/types/IProduct';
import swal from 'sweetalert2';

export interface IUseSalesProps {
  client: IHttpClient;
  formatDate: IFormatDate;
}

export function useSales({ client, formatDate }: IUseSalesProps) {
  const token = window.localStorage.getItem('token');
  const [isOpen, setIsOpen] = useState(false);
  const [sales, setSales] = useState<ITable[] | null>(null);
  const [fire, setFire] = useState(true);
  const [productReactSelect, setProductReactSelect] = useState<
    IProductReactSelect[] | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSales(sale: ISale) {
    setIsLoading(true);
    const objSendRequest = {
      id_venda: null,
      nome_cliente: sale.nome_cliente,
      id_produtos: sale.id_produtos,
      total: sale.total,
    };

    try {
      await client.request({
        method: 'post',
        url: `${process.env.NEXT_PUBLIC_API_URL}/venda`,
        body: objSendRequest,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      swal.fire({
        title: 'Venda realizada com sucesso!',
        icon: 'success',
        showConfirmButton: false,
        timer: 3000,
      });
    } catch (e) {
      const { message } = e as Error;
      swal.fire({
        title: message,
        icon: 'error',
        showConfirmButton: false,
        timer: 3000,
      });

      console.log(e);
    }
    setFire(!fire);
    setIsLoading(false);
  }

  async function getSales() {
    try {
      const response = await client.request({
        method: 'get',
        url: `${process.env.NEXT_PUBLIC_API_URL}/venda`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data.map((sale: any) => ({
        id: sale.id_venda,
        cliente: sale.nome_cliente,
        funcionario: sale.nome_funcionario,
        total: formatCurrency(sale.total),
        data: formatDate.format({
          date: sale.data,
          format: 'DD/MM/YYYY HH:mm:ss',
        }),
        produtos: sale.produtos.map(
          (product: any) => `${product.produto.nome} (${product.quantidade})`
        ),
      }));

      setSales(data);
    } catch (e) {
      console.log(e);
    }
  }

  async function getProductsReactSelect() {
    try {
      const response = await client.request({
        method: 'get',
        url: `${process.env.NEXT_PUBLIC_API_URL}/produto/react-select`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProductReactSelect(response.data.data);
    } catch (e) {
      swal.fire({
        title: 'Erro ao carregar produtos!',
        icon: 'error',
        showConfirmButton: false,
        timer: 3000,
      });
    }
  }

  async function deleteSales(id: string) {
    try {
      client.request({
        method: 'delete',
        url: `${process.env.NEXT_PUBLIC_API_URL}/venda/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function updateSales(id: string, sale: ISale) {
    try {
      client.request({
        method: 'put',
        url: `${process.env.NEXT_PUBLIC_API_URL}/venda/${id}`,
        body: sale,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    Promise.all([getSales(), getProductsReactSelect()]);
  }, [fire]);

  return {
    isOpen,
    sales,
    productReactSelect,
    setIsOpen,
    setSales,
    handleSales,
    setFire,
    isLoading,
  };
}
