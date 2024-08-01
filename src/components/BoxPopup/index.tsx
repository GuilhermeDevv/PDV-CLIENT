import { TailSpin } from "react-loading-icons";
import { TitleComponent } from "../Title";
import { useBoxPopUp } from "./hooks/useBoxPopup";
import { Container, Content } from "./styles";
import { IBoxComponentProps } from "./types";
import CloseIcon from "@mui/icons-material/Close";

export function PopupComponent({
  open,
  isLoading,
  handleChangeVisibilityPopup,
  fetchOpenBoxFn,
  setIsOpen,
}: IBoxComponentProps) {
  const {
    handleOpenBox,
    handleSubmitBox,
    handleSubmit,
    register,
    errors,
    formatValue,
  } = useBoxPopUp({
    handleChangeVisibilityPopup,
    fetchOpenBoxFn,
  });

  return (
    <Container $open={open}>
      <Content onSubmit={handleSubmit((d) => handleSubmitBox(d))}>
        <span>
          <CloseIcon onClick={() => setIsOpen(false)} />
        </span>
        <strong>QUANTO EM CAIXA ?</strong>

        <input
          {...register("value")}
          type="text"
          placeholder="Digite o valor"
          onChange={formatValue}
        />
        <input
          {...register("confirmValue")}
          type="text"
          placeholder="Confirme o valor"
          onChange={formatValue}
        />
        <p>
          {errors?.value?.message as string}

          {errors?.confirmValue?.message as string}
        </p>
        <button type="submit">
          {isLoading ? <TailSpin height={30} /> : "ABRIR"}
        </button>
      </Content>
    </Container>
  );
}
