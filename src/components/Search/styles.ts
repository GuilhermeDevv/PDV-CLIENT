import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  max-width: 300px;
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: ${({ theme }) => theme.BackgroundIconActive};
  font-size: 1.5rem;
  outline: none;
  color: ${({ theme }) => theme.textSecundary};
`;
