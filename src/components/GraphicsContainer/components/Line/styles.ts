import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 300px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
  & h1 {
    position: absolute;
    top: 10px;
    left: 20px;
  }
`;
