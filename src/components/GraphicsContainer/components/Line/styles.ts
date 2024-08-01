import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: 300px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 2px;
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

  @media (min-width: 1367px) {
    & {
      width: 100%;
    }
  }
`;
