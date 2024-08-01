"use client";

import { useBoxButton } from "./hooks/useBoxButton";
import { Button, Container, Content, StatusBox } from "./styles";
import { IUseBoxButtonProps } from "./types";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";

export function BoxButton({
  handleChangeVisibilityPopup,
  boxOpen,
  fetchCloseBoxFn,
  idCaixa,
}: IUseBoxButtonProps) {
  const { handleStatusBox } = useBoxButton({
    handleChangeVisibilityPopup,
    boxOpen,
    fetchCloseBoxFn,
  });

  return (
    <Container>
      <Content>
        <Button onClick={() => handleStatusBox(idCaixa)} $open={boxOpen}>
          <PointOfSaleIcon />
          <StatusBox $status={boxOpen} />
          <span>{boxOpen ? "FECHAR CAIXA" : "ABRIR CAIXA"}</span>
        </Button>
      </Content>
    </Container>
  );
}
