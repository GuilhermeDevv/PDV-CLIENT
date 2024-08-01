"use client";

import { useProducts } from "@/utils/hooks/useProducts";
import { SearchComponent } from "@/components/Search";
import { Container, Main } from "../styles";
import { TitleComponent } from "@/components/Title";
import { TableComponent } from "@/components/TableComponent";
import { ContainerActions } from "./styles";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { PopupProductsComponent } from "@/components/PopupProducts";

import { httpClientFactory } from "@/adapters";
import { NotFound } from "@/components/NotFound";

export default function Products() {
  const {
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
    fetchChangeStatus,
    fetchUpdateProduct,
  } = useProducts({
    client: httpClientFactory(),
  });

  return (
    <Main>
      <Container>
        <TitleComponent text="PRODUTOS" />
        <ContainerActions>
          <AddCircleRoundedIcon onClick={handleOpenPopup} />
          <SearchComponent
            placeholder="Pesquisar produtos..."
            onChange={(e) => handleFilterTable(e.target.value)}
          />
        </ContainerActions>
        {table || tableFiltered ? (
          <TableComponent
            table={tableFiltered ?? table ?? []}
            setProductEdit={(product) => setProductEdit(product)}
            isEditable
            isOnline
            handleChangeStatus={fetchChangeStatus}
          />
        ) : null}

        {table && table.length === 0 && (
          <NotFound text="Nenhum produto encontrado !" />
        )}

        {isOpen && (
          <PopupProductsComponent
            isLoading={isLoading}
            setIsOpen={setIsOpen}
            handleCreateProduct={handleCreateProduct}
            product={productEdit}
            fetchUpdateProduct={fetchUpdateProduct}
          />
        )}
      </Container>
    </Main>
  );
}
