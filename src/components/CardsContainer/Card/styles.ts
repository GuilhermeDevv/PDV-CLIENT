import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled(Link)`
  z-index: 999;
  height: 180px;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 1px 6px 7px 0px ${({ theme }) => theme.shadow};
  border-radius: 10px;
  overflow: hidden;
  color: ${({ theme }) => theme.secundary};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  @media (min-width: 1367px) {
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  }
  &:hover {
    scale: 1.02;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  color: inherit;
`;

export const Top = styled.div`
  height: 20%;
  color: inherit;
  display: flex;
  padding: 3rem 2rem;
  gap: 1rem;
  align-items: center;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: capitalize;
  & span {
    color: ${({ theme }) => theme.text};
    font-size: inherit;
    font-weight: inherit;
    text-transform: inherit;
  }
  & svg {
    font-size: 18px;
    color: ${({ theme }) => theme.primary};
    & path {
      color: inherit;
    }
  }
`;

export const ContainerIcon = styled.div<{
  color: string;
}>`
  padding: 0.5rem;
  border-radius: 6px;
  // obter a cor de fundo de fundo em theme de acordo o nome da propriedade em color
  background-color: ${({ color, theme }) => theme[color]};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Middle = styled.div`
  color: inherit;
  display: flex;
  align-items: center;
  font-weight: bold;
  height: 40%;
  font-size: 4rem;
  color: ${({ theme }) => theme.text};
  padding: 0 2rem;
  gap: 1rem;
  & strong {
    color: inherit;
    font-weight: inherit;
    width: 100%;
  }
`;

export const Bottom = styled.div<{
  color: string;
}>`
  width: 100%;
  height: 40%;
  background-color: ${({ color, theme }) => theme[color]};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 2rem;
  gap: 1rem;
  & > svg {
    font-size: 26px;
    color: ${({ theme }) => theme.primary};
    fill: ${({ theme }) => theme.primary};
    & path {
      color: ${({ theme }) => theme.primary};
      fill: ${({ theme }) => theme.primary};
    }
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: ${({ theme }) => theme.primary};

  & > span {
    color: ${({ theme }) => theme.primary};
  }
  & > span:first-child {
    font-size: 1.5rem;
    font-weight: bold;
  }
  & > span:last-child {
    font-size: 1rem;
    font-weight: normal;
  }
`;
