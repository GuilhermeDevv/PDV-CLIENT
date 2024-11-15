import styled from 'styled-components';

export const Container = styled.aside<{ $isOpen: boolean }>`
  user-select: none;
  width: 100%;
  min-height: 100%;
  min-width: 18vw;
  position: absolute;
  right: 0;
  top: calc(100% + 20px);
  background-color: ${({ theme }) => theme.background};
  padding: 1rem 2rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.shadow};
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 2rem;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${({ theme }) => theme.textSecundary};

  & p {
    color: ${({ theme }) => theme.text};
    font-size: 1.3rem;
  }
`;

export const Middle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const InfoUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & strong {
    color: ${({ theme }) => theme.text};
    font-size: 1.6rem;
    font-weight: bold;
  }

  & span {
    color: ${({ theme }) => theme.text};
    font-size: 1.2rem;
    font-style: italic;
  }
`;

export const Point = styled.div<{ $online: boolean }>`
  display: flex;
  align-items: center;
  font-size: 1rem;
  gap: 0.5rem;

  & span {
    display: inline-block;
  }

  & span:first-child {
    font-size: 0;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: ${({ $online, theme }) =>
      $online ? theme.quinaryBackground : theme.quaternaryBackground};
  }

  & span:last-child {
    font-style: italic;
    font-weight: bold;
    font-size: inherit;
    letter-spacing: 0.1rem;
    color: ${({ $online, theme }) =>
      $online ? theme.quinaryBackground : theme.quaternaryBackground};
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Box = styled.div`
  border-radius: 6px;
  flex: 1;
  background-color: ${({ theme }) => theme.backgroundSecundary};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const BottomBox = styled.div<{ $color: string }>`
  display: flex;

  align-items: center;
  gap: 0.5rem;
  & svg,
  path {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.icon} !important;
  }

  & strong {
    font-size: 2rem;
    font-weight: bold;
    color: ${({ $color }) => $color};
  }
`;
