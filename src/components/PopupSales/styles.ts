import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.BackgroundInative};
  z-index: 6;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.form`
  width: 70%;
  height: fit-content;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  align-items: center;
  position: relative;

  max-height: 90%;
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

  & input[aria-label='Nome do cliente'] {
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
    user-select: none;
  }
`;

export const Select = styled.div`
  width: 90%;
  height: fit-content;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  position: relative;
  color: #a0a0a0;
  & span {
    color: inherit;
    font-size: 16px;
    text-align: center;
    align-self: center;
  }
`;

export const Options = styled.div`
  color: inherit;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  max-height: 200px;
  height: fit-content;
  cursor: pointer;
  position: absolute;
  overflow-y: auto;
  width: 100%;
  top: calc(100% + 8px);
  display: none;
  flex-direction: column;
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

  & > div {
    color: inherit;
    padding: 10px;
    text-transform: capitalize;

    &:hover {
      color: ${({ theme }) => theme.iconActive};
      background-color: ${({ theme }) => theme.background};
    }

    & > span {
      color: inherit;
    }
  }
`;

export const OptionsSelected = styled.div`
  position: relative;
  padding: 10px;
  color: inherit;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  min-height: 49px;
  gap: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  max-height: 200px;
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

  & > div {
    padding: 4px 10px;
    display: flex;
    align-items: center;
    color: inherit;
    background-color: ${({ theme }) => theme.BackgroundIconActive};
    color: ${({ theme }) => theme.icon};
    width: fit-content;
    height: fit-content;
    text-transform: capitalize;

    & > span {
      color: inherit;
    }
  }

  & > input {
    border: none;
    width: 95%;
    height: 100%;
    background-color: transparent;
  }

  &:focus-within + ${Options} {
    display: flex;
  }
`;

export const Delete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  & svg,
  path {
    color: #fff;
    height: 20px;
    font-size: 20px;
    cursor: pointer;
    margin-left: 6px;
  }

  &:hover {
    svg,
    path {
      color: ${({ theme }) => theme.iconActive};
    }
  }
`;
export const ContainerProducts = styled.div`
  max-height: 300px;
  overflow-y: auto;
  width: 90%;
  display: flex;
  flex-direction: column;

  gap: 10px;

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
`;

export const ContentProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;

export const InputQuantity = styled.input`
  width: 50px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.icon};
  border-radius: 4px;
  padding: 0 10px;
  border-radius: 4px;
  font-size: 16px;
  color: ${({ theme }) => theme.textSecundary};
  outline: none;
  background-color: ${({ theme }) => theme.BackgroundInative};
`;

export const Add = styled.div`
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
  user-select: none;
`;
