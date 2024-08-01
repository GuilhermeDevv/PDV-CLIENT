import styled from "styled-components";
import Link from "next/link";


export const Container = styled(Link)`
  height: 150px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 2px;
  color: ${({ theme }) => theme.secundary};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  @media (min-width: 1367px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
`;
export const Content = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  color: inherit;
`;

export const Top = styled.div`
  height: 20%;
  color: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.textSecundary};
  font-size: 2rem;
  font-weight: 500;
  text-transform: capitalize;
  & span {
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    text-transform: inherit;
  }
  & svg {
    font-size: 3rem;
    color: ${({ theme }) => theme.icon};
    & path {
      color: inherit;
    }
  }
`;
export const Middle = styled.div`
  color: inherit;
  display: flex;
  align-items: center;
  height: 80%;
  font-size: 3rem;
`;
