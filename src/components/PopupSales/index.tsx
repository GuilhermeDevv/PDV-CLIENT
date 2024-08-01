import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Container,
  Content,
  Delete,
  Options,
  OptionsSelected,
  Select,
} from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import { StylesConfig } from "react-select";
import { TailSpin } from "react-loading-icons";
import { ITable } from "@/types/ITable";
import { useState } from "react";
import { formatCurrency } from "@/utils/formatCurrencyBR";
import { ISelect } from "@/types";
import { ISale } from "@/types";
import { IProductReactSelect } from "@/types/IProduct";

interface IPopupSalesProps {
  setIsOpen: (value: boolean) => void;
  sales: ITable[] | null;
  productOptions: IProductReactSelect[];
  handleSales: (sale: ISale) => void;
  isLoading: boolean;
}

export function PopupSales({
  setIsOpen,
  sales,
  productOptions,
  handleSales,
  isLoading,
}: IPopupSalesProps) {
  const [totalValue, setTotalValue] = useState(0);
  const [options] = useState(() =>
    productOptions?.map((product) => ({
      ...product,
    }))
  );
  const [optionsSearch, setOptionsSearch] = useState("");
  const [optionsSelected, setOptionsSelected] = useState<
    | {
        value: string;
        label: string;
        price: number;
        id: string;
      }[]
    | []
  >([]);

  const schema = z.object({
    id_venda: z.string().optional(),
    nome_cliente: z.string().nonempty("Nome do cliente é obrigatório"),
  });

  function onChangeSelectProduct(option: any) {
    setOptionsSelected((prev) =>
      prev
        ? [
            ...prev,
            {
              ...option,
              id: `${option.value}-${new Date().getTime()}`,
            },
          ]
        : [
            {
              ...option,
              id: `${option.value}-${new Date().getTime()}`,
            },
          ]
    );

    console.log(optionsSelected);

    setTotalValue(
      parseFloat(
        (
          optionsSelected.reduce(
            (acc, cur) => acc + parseFloat(cur.price.toFixed(2)),
            0
          ) + parseFloat(option.price.toFixed(2))
        ).toFixed(2)
      )
    );
  }

  function onSubmit(obj: any) {
    const data: typeof schema._type = obj;
    handleSales({
      ...data,
      total: totalValue.toString(),
      id_produtos: optionsSelected.map((i) => i.value),
    } as ISale);
  }

  function handleDeleteProduct(id: string | null) {
    if (!id) return;
    setOptionsSelected((prev) => prev?.filter((p) => p.id !== id) || []);
    setTotalValue(
      optionsSelected.reduce((acc, cur) => acc + cur.price, 0) -
        optionsSelected.find((p) => p.id === id)?.price!
    );
  }

  function handleSearchProduct(value: string) {
    setOptionsSearch(value);
  }

  

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Content>
        <span>
          <CloseIcon onClick={() => setIsOpen(false)} />
        </span>
        <strong>Adicionar venda</strong>

        <input
          type="text"
          placeholder="Nome do cliente"
          {...register("nome_cliente")}
        />

        

        <Select>
          <OptionsSelected>
            {optionsSelected?.length > 0 &&
              optionsSelected?.map((option, index) => (
                <div key={option.label.concat(option.value, index.toString())}>
                  <span>{option.label}</span>
                  <Delete onClick={() => handleDeleteProduct(option.id)}>
                    <DeleteSharpIcon />
                  </Delete>
                </div>
              ))}

            <input
              type="text"
              placeholder={
                optionsSelected?.length === 0 ? "Selecione um produto" : ""
              }
              onChange={(e) => handleSearchProduct(e.target.value)}
            />
          </OptionsSelected>

          <Options onMouseDown={(e) => e.preventDefault()}>
            {(optionsSearch
              ? options.filter((option) =>
                  option.label
                    .toLowerCase()
                    .includes(optionsSearch.toLowerCase())
                )
              : options
            ).map((option: IProductReactSelect) => (
              <div
                key={option.label.concat(option.value)}
                onClick={() => onChangeSelectProduct(option)}
              >
                <span>{option.label}</span>
                <span>
                  {" "}
                  ({" "}
                  {optionsSelected
                    ? optionsSelected.filter((i) => i.value === option.value)
                        .length
                    : 0}{" "}
                  )
                </span>
              </div>
            ))}
          </Options>
        </Select>

        <strong>Total: {formatCurrency(totalValue.toString())}</strong>

        <button type="submit">
          {isLoading ? (
            <TailSpin height={30} />
          ) : false ? (
            "EDITAR"
          ) : (
            "ADICIONAR"
          )}
        </button>
      </Content>
    </Container>
  );
}
