import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.section`
  position: absolute;
  inset: 0;
  background-color: ${({ theme }) => theme.background};
`;
export const Content = styled.form`
  max-width: 40%;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 1rem;
  position: absolute;
  inset: 0;

  & input[type='text'],
  input[type='password'] {
    width: 100%;
    height: 40px;
    border: 2px solid ${({ theme }) => theme.text};
    border-radius: 4px;
    padding: 0 10px;
    border-radius: 4px;
    font-size: 16px;
    color: ${({ theme }) => theme.textSecundary};
    outline: none;
    background-color: ${({ theme }) => theme.BackgroundInative};
    padding-left: 40px;
    &::placeholder {
      color: ${({ theme }) => theme.textSecundary};
    }
    &:disabled {
      cursor: not-allowed;
      background-color: ${({ theme }) => theme.BackgroundInative};
    }
  }

  & button[type='submit'] {
    width: 40%;
    height: 40px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    color: ${({ theme }) => theme.textSecundary};
    background-color: ${({ theme }) => theme.primary};
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
      background-color: ${({ theme }) => theme.primaryDark};
    }
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.secundary};
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  font-style: italic;
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  position: relative;

  & svg {
    position: absolute;
    left: 10px;
    & path {
      fill: ${({ theme }) => theme.icon};
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
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
    color: ${({ theme }) => theme.primary};
  }
`;
