import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 16px;
  align-self: flex-end;
`;
