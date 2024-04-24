import styled from "styled-components";

export const Input = styled.input`
  height: 40px;
  border: none;
  outline: none;
  padding-left: 12px;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 16px;
  &::placeholder {
    color: #ccc;
  }
`;
