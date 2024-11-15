import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'sans-serif';
`;

export const Content = styled.div`
  width: 100%;
  height: fit-content;
  overflow: hidden;

  & .DataGrid {
    font-size: 10px;
    text-transform: uppercase;
    background-color: transparent;
    border: none !important;
    font-family: 'sans-serif';
    height: calc(100vh - 150px);
  }

  & span {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.textSecundary};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;
