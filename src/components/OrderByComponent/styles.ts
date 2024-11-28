import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  min-width: 280px;
  max-width: 280px;

  & > span {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};
    margin-right: 8px;
    text-wrap: nowrap;
  }
`;
