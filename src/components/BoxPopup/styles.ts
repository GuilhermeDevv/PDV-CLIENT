import styled from "styled-components";

export const Container = styled.aside<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.BackgroundInative};
  z-index: 6;
  display: ${({ $open }) => ($open ? "flex" : "none")};
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;
`;
export const Content = styled.form`
  position: relative;
  width: 400px;
  height: fit-content;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  align-items: center;
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
    &:disabled {
      cursor: not-allowed;
      background-color: ${({ theme }) => theme.BackgroundInative};
    }
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
