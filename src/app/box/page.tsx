"use client";
import { Container, Main } from "../styles";
import { TitleComponent } from "@/components/Title";
import { BoxButton } from "@/components/BoxButton";
import { TableComponent } from "@/components/TableComponent";
import { PopupComponent } from "@/components/BoxPopup";
import { useBox } from "@/utils/hooks/useBox";
import { httpClientFactory, formatDateFactory } from "@/adapters";
import { NotFound } from "@/components/NotFound";

export default function Box() {
  const {
    open,
    table,
    loading,
    hasBoxOpen,
    handleChangeVisibilityPopup,
    fetchCloseBox,
    fetchOpenBox,
    setOpen,
  } = useBox({
    client: httpClientFactory(),
    formatDate: formatDateFactory(),
  });

  return (
    <Main>
      <Container>
        <TitleComponent text="CAIXA" />
        <BoxButton
          handleChangeVisibilityPopup={() => handleChangeVisibilityPopup()}
          boxOpen={hasBoxOpen}
          fetchCloseBoxFn={fetchCloseBox}
          idCaixa={table?.length === 0 || !table ? 0 : +table[0].id!}
        />
        {table && <TableComponent table={table} key="table" />}
        {table && table.length === 0 && (
          <NotFound text="Nenhum caixa encontrado !" />
        )}
        <PopupComponent
          isLoading={loading}
          setIsOpen={setOpen}
          open={open}
          handleChangeVisibilityPopup={() => handleChangeVisibilityPopup()}
          fetchOpenBoxFn={fetchOpenBox}
        />
      </Container>
    </Main>
  );
}
