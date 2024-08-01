export interface IUseBoxButtonProps {
  handleChangeVisibilityPopup: (v?: boolean) => void;
  boxOpen: boolean;
  fetchCloseBoxFn: (idCaixa: number) => void;

  idCaixa: number;
}
