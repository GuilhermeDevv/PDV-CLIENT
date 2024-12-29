import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  inset: 0;
  z-index: 40028922;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.form`
  width: 80%;
  min-height: 80%;

  /* background-color: ${({ theme }) => theme.primary}; */
  background-color: red;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding: 20px;
  align-items: center;
  position: relative;
  & > span {
    display: block;
    position: absolute;
    right: 10px;
    top: 10px;
    color: ${({ theme }) => theme.icon};
    cursor: pointer;
    & svg {
      color: inherit;
      font-size: 30px;
      & path {
        color: inherit;
      }
    }
    &:hover {
      color: ${({ theme }) => theme.iconActive};
    }
  }

  & p {
    height: 20px;
  }

  & strong {
    font-size: 20px;
    color: ${({ theme }) => theme.icon};
  }

  & input {
    width: 90%;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.text};
    border-radius: 4px;
    padding: 0 10px;
    border-radius: 4px;
    font-size: 16px;
    color: ${({ theme }) => theme.textSecundary};
    outline: none;
    background-color: ${({ theme }) => theme.BackgroundInative};
    &::placeholder {
      color: ${({ theme }) => theme.textSecundary};
    }
  }
  & input:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  & button {
    width: 90%;
    height: 40px;
    background-color: ${({ theme }) => theme.BackgroundInative};
    color: ${({ theme }) => theme.textSecundary};
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.iconActive};
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 50%;
  align-items: center;
  & > span {
    color: ${({ theme }) => theme.icon};
    font-weight: bold;
    align-self: flex-start;
    margin-left: 5%;
  }
`;

export const Horizontal = styled.div`
  display: flex;
  gap: 6px;
  width: 100%;
  align-items: center;
  justify-content: center;
  & > span {
    color: ${({ theme }) => theme.icon};
    font-weight: bold;
  }
`;

// cadastro de produtos
export const Left = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;

  background: ${({ theme }) => theme.primary};
  border-top: 1px solid ${({ theme }) => theme.shadow};
  height: 100%;
  padding: 20px;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
    background-color: ${({ theme }) => theme.background};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.iconActive};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.background};
  }

  & input {
    background: ${({ theme }) => {
      const hex = theme.iconActive.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, 0.2)`;
    }};
    border-bottom: solid 2px ${({ theme }) => theme.iconActive};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    color: ${({ theme }) => theme.iconActive};
    font-size: 1rem;
    font-weight: bold;

    &::placeholder {
      color: ${({ theme }) => theme.primary};
      font-weight: bold;
    }
  }
`;

export const ContainerActions = styled.div`
  width: 100%;
  max-height: 38px;
  display: flex;
  gap: 10px;
`;

// estilizar as botoes de ação
export const Button = styled.button`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.2s;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.iconActive};
    color: ${({ theme }) => theme.primary};
  }
`;

// estilizar o botão de limpar
export const ButtonClear = styled(Button)`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.iconActive};
  color: ${({ theme }) => theme.iconActive};
  & svg,
  path {
    color: ${({ theme }) => theme.iconActive};
  }
  &:hover {
    box-shadow: 0px 0px 10px ${({ theme }) => theme.iconActive};
    & svg,
    path {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

// estilizar o botao de adicionar
export const ButtonAdd = styled(Button)`
  background-color: ${({ theme }) => theme.iconActive};
  & svg,
  path {
    color: ${({ theme }) => theme.primary};
  }

  &:hover {
    box-shadow: 0px 0px 10px ${({ theme }) => theme.iconActive};
  }
`;

// lista de produtos sendo cadastrados e botão de salvar
export const Right = styled.section``;
