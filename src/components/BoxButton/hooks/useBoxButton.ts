import { useState } from "react";

interface IUseBoxButton {
  handleChangeVisibilityPopup: (v?: boolean) => void;
  fetchCloseBoxFn: (idCaixa: number) => void;
  boxOpen: boolean;
}

export function useBoxButton({
  handleChangeVisibilityPopup,
  boxOpen,
  fetchCloseBoxFn,
}: IUseBoxButton) {
  function handleStatusBox(idCaixa: number) {
    if (boxOpen) {
      // função para realizar ações de fechar caixa
      fetchCloseBoxFn(idCaixa);

      return;
    }

    handleChangeVisibilityPopup(false);
  }
  return {
    handleStatusBox,
  };
}
