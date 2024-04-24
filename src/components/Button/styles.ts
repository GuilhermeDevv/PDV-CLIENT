import styled from "styled-components";

export const Button = styled.button`
  height: 40px;
  width: 100%;
  background-color: ${({ theme }) => theme.button};
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.buttonActive};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.buttonDisabled};
    cursor: not-allowed;
  }
`;
