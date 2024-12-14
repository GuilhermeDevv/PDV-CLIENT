import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 400px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 10px;
  box-shadow: 1px 6px 7px 0px ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  & h1 {
    position: absolute;
    top: 10px;
    left: 20px;
  }
`;

export const Top = styled.div`
  z-index: 999;
  display: flex;
  width: 100%;
  min-height: 10%;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  position: relative;
  top: 16px;
`;

export const ContainerSelect = styled.div`
  width: 100%;
  max-width: 200px;
`;
