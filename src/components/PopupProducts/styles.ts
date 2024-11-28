import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  inset: 0;
  /* background-color: ${({ theme }) => theme.BackgroundInative}; */
  z-index: 40028922;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
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

export const ContainerActions = styled.div`
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 0px;
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
export const Left = styled.form``;

// lista de produtos sendo cadastrados e botão de salvar
export const Right = styled.section``;
