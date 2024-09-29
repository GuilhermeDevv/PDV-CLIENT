"use client";

import { TailSpin } from "react-loading-icons";
import { Container, Content, InputContainer } from "./styles";
import { IProduct } from "@/types/IProduct";
import CloseIcon from "@mui/icons-material/Close";
import { usePopupProductsComponent } from "./hooks/usePopupProductsComponent";

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
  const { errors, formatValue, handleChangeProduct, handleSubmit, register } =
    usePopupProductsComponent({
      fetchUpdateProduct,
      handleCreateProduct,
      product,
    });

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
