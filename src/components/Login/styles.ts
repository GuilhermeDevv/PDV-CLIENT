import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.section`
  position: absolute;
  inset: 0;
  background-color: ${({ theme }) => theme.background};
`;
export const Content = styled.form`
  display: flex;
  width: 100%;
  height: 100svh;
  & input[type='text'],
  input[type='password'] {
    width: 100%;
    height: 48px;
    border: 1px solid ${({ theme }) => theme.shadow};
    border-radius: 6px;
    padding: 0 10px;
    border-radius: 4px;
    font-size: 1.5rem;
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

  & button[type='submit'] {
    width: 50%;
    height: 58px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    color: ${({ theme }) => theme.primary};
    font-weight: bold;
    background-color: ${({ theme }) => theme.iconActive};
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
      background-color: ${({ theme }) => theme.iconInative};
    }
  }
`;

export const Left = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: ${({ theme }) => theme.backgroundSecundary};
  /* background-color: red; */
`;

export const ContainerTitle = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;

  gap: 2rem;
  color: ${({ theme }) => theme.text};
  & p {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};
  }
`;
export const Title = styled.h1`
  font-size: 3rem;
  color: inherit;
  font-weight: bold;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 50%;
  gap: 0.5rem;

  & svg {
    position: absolute;
    left: 10px;
    & path {
      fill: ${({ theme }) => theme.icon};
    }
  }

  & label {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.textSecundary};
    font-weight: bold;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.textSecundary};
  font-size: 14px;

  & label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.iconActive};
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    user-select: none;
  }

  & svg path {
    fill: ${({ theme }) => theme.iconActive};
  }
`;

export const ForgotPassword = styled(Link)`
  color: ${({ theme }) => theme.iconActive};
  font-size: 14px;
  text-decoration: none;
  transition: color 0.2s;
  font-style: italic;
  &:hover {
    color: ${({ theme }) => theme.iconInative};
  }
`;

export const Right = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  background-color: purple;
`;
