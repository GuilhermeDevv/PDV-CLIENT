export interface IBoxComponentProps {
  open: boolean;
  isLoading: boolean;
  handleChangeVisibilityPopup: (v?: boolean) => void;
  fetchOpenBoxFn: (saldo: number) => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
