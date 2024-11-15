import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 3rem;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Top = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
