import styled from 'styled-components';
import LinkNext from 'next/link';
import ImageNext from 'next/image';

export const Container = styled.menu`
  z-index: 1000;
  width: 100%;
  max-width: 60px;
  overflow-x: hidden;
  height: 100vh;
  position: fixed;
  background-color: ${({ theme }) => theme.primary};

  transition: all 0.2s;
  & .Logo {
    transform: scale(2);
  }
  &:hover {
    max-width: 200px;
    & span {
      display: block;
    }
    & .Logo {
      transform: scale(2);
    }
  }
`;

export const Content = styled.div`
  padding: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;

  .active {
    & svg path {
      color: ${({ theme }) => theme.iconActive};
    }
  }
`;

export const Hr = styled.hr`
  width: 100%;
  border: transparent;
  border-top: 1px solid ${({ theme }) => theme.textSecundary};
  margin-bottom: 1rem;
`;

export const Link = styled(LinkNext)`
  display: flex;
  padding: 0.5rem;
  gap: 0.5rem;
  align-items: center;
  background-color: ${({ theme }) => theme.BackgroundIconActive};
  border-radius: 4px;
  width: 100%;
  z-index: 1;
  & svg {
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 28px;
  }
  & svg path {
    font-size: 40px;
    color: ${({ theme }) => theme.icon};
  }
  & span {
    color: ${({ theme }) => theme.textSecundary};
    font-size: 12px;
    font-weight: 500;
    display: none;
  }
`;

export const Logout = styled.div`
  display: flex;
  padding: 0.5rem;
  gap: 0.5rem;
  align-items: center;
  background-color: ${({ theme }) => theme.BackgroundIconActive};
  border-radius: 4px;
  width: 100%;
  z-index: 1;
  & svg {
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 28px;
  }
  & svg path {
    font-size: 40px;
    color: ${({ theme }) => theme.icon};
  }
  & span {
    color: ${({ theme }) => theme.textSecundary};
    font-size: 12px;
    font-weight: 500;
    display: none;
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Configuration = styled(Navigation)``;
