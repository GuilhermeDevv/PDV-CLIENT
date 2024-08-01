import styled from "styled-components";

export const Container = styled.aside`
  position: absolute;
  color: ${({ theme }) => theme.textSecundary};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  font-size: 2rem;
`;
