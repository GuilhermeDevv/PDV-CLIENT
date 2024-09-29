import { ChangeEvent } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { unformatCurrency } from "@/utils/formatCurrencyBR";
import { IProductProps } from "..";

type IUsePopupProductsComponent = Pick<
  IProductProps,
  "handleCreateProduct" | "fetchUpdateProduct" | "product"
>;

export function usePopupProductsComponent({
  handleCreateProduct,
  fetchUpdateProduct,
  product,
}: IUsePopupProductsComponent) {
  const schema = z.object({
    id_produto: z.string().optional(),
    name: z.string({
      message: "Nome inválido",
      required_error: "Campo obrigatório",
    }),
    price: z
      .string({
        message: "Valor inválido",
        required_error: "Campo obrigatório",
      })
      .default("R$"),
    cost_price: z
      .string({
        message: "Valor inválido",
        required_error: "Campo obrigatório",
      })
      .default("R$"),
    stock: z.string({
      message: "Valor inválido",
      required_error: "Campo obrigatório",
    }),
    available_quantity: z.string({
      message: "Valor inválido",
      required_error: "Campo obrigatório",
    }),
    description: z.string({
      message: "Descrição inválida",
      required_error: "Campo obrigatório",
    }),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  function formatValue(event: ChangeEvent<HTMLInputElement>) {
    let valueFormat = event.target.value.replace(/[^0-9]/g, "");
    if (valueFormat.length > 2) {
      valueFormat = valueFormat.slice(0, -2) + "," + valueFormat.slice(-2);
    }
    valueFormat = valueFormat.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    valueFormat = `R$ ${valueFormat}`;
    setValue(event.target.name, valueFormat);
  }

  function handleChangeProduct(data: typeof schema._type) {
    const obj = {
      id_produto: data.id_produto !== "" ? data.id_produto : undefined,
      nome: data.name,
      preco: unformatCurrency(data.price),
      quantidade: +data.available_quantity,
      custo: unformatCurrency(data.cost_price),
      descricao: data.description,
      estoque: +data.stock,
    };
    if (product) {
      fetchUpdateProduct(obj as any);
      return;
    } else {
      handleCreateProduct(obj as any);
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    formatValue,
    handleChangeProduct,
  };
}
