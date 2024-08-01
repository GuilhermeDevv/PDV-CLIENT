import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 3rem;
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 2rem;
  @media (min-width: 1367px) {
    & {
      flex-direction: column;
    }
  }
`;
