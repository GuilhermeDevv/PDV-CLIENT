"use client";

import { TailSpin } from "react-loading-icons";
import { Container, Content, InputContainer } from "./styles";
import { IProduct } from "@/types/IProduct";
import CloseIcon from "@mui/icons-material/Close";
import { ChangeEvent } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { unformatCurrency } from "@/utils/formatCurrencyBR";

export interface IProductProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  product: IProduct | null;
  isLoading: boolean;
  handleCreateProduct: (data: IProduct) => Promise<void>;
  fetchUpdateProduct: (data: IProduct) => Promise<void>;
}

export function PopupProductsComponent({
  setIsOpen,
  product,
  handleCreateProduct,
  fetchUpdateProduct,
  isLoading,
}: IProductProps) {
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

  return (
    <Container
      onSubmit={handleSubmit((data) => handleChangeProduct(data as any))}
    >
      <Content>
        <span>
          <CloseIcon onClick={() => setIsOpen(false)} />
        </span>
        <strong>{product ? "EDITAR PRODUTO !" : "ADICIONAR PRODUTO "}</strong>
        <InputContainer>
          <span>ID</span>
          <input
            {...register("id_produto")}
            type="text"
            placeholder="DIGITE O ID (opcional)"
            defaultValue={product ? product.id_produto : ""}
            readOnly={product ? true : false}
          />
        </InputContainer>
        <InputContainer>
          <span>NOME</span>
          <input
            {...register("name")}
            type="text"
            placeholder="DIGITE O NOME"
            defaultValue={product ? product.nome : ""}
          />
        </InputContainer>
        <InputContainer>
          <span>DESCRIÇÃO</span>
          <input
            {...register("description")}
            type="text"
            placeholder="DIGITE A DESCRIÇÃO"
            defaultValue={product ? product.descricao : ""}
          />
        </InputContainer>
        <InputContainer>
          <span>PREÇO</span>
          <input
            {...register("price")}
            type="text"
            placeholder="DIGITE O VALOR"
            defaultValue={product ? `R$ ${product.preco}` : ""}
            onChange={formatValue}
          />
        </InputContainer>

        <InputContainer>
          <span>PREÇO DE CUSTO</span>
          <input
            {...register("cost_price")}
            type="text"
            placeholder="DIGITE O VALOR"
            defaultValue={product ? `R$ ${product.custo}` : ""}
            onChange={formatValue}
          />
        </InputContainer>
        <InputContainer>
          <span>ESTOQUE</span>
          <input
            {...register("stock")}
            type="text"
            placeholder="DIGITE A QUANTIDADE"
            defaultValue={product ? product.estoque : ""}
          />
        </InputContainer>
        <InputContainer>
          <span>QUANTIDADE COMPRADA</span>
          <input
            {...register("available_quantity")}
            type="text"
            placeholder="DIGITE A QUANTIDADE"
            defaultValue={product ? product.quantidade : ""}
          />
        </InputContainer>

        <button type="submit">
          {isLoading ? (
            <TailSpin height={30} />
          ) : product ? (
            "EDITAR"
          ) : (
            "ADICIONAR"
          )}
        </button>
      </Content>
    </Container>
  );
}
