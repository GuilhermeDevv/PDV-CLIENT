import styled from 'styled-components';
import LinkNext from 'next/link';
import ImageNext from 'next/image';

export const Logout = styled.div`
  display: flex;
  padding: 0.5rem;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  width: 100%;
  z-index: 1;
  & svg {
    width: 22px;
    height: 22px;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 28px;
  }
  & svg path {
    font-size: 40px;
    color: ${({ theme }) => theme.icon};
  }
  & span {
    color: ${({ theme }) => theme.icon};
    font-size: 12px;
    font-weight: 500;
    display: none;
  }
`;
export const TitleComponent = styled.strong`
  color: ${({ theme }) => theme.icon};
  font-size: 1rem;
`;
export const Container = styled.section`
  z-index: 1000;
  width: fit-content;
  overflow-x: hidden;
  height: 100vh;
  position: fixed;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 1px 6px 7px 0px ${({ theme }) => theme.shadow};
  & .Logo {
    width: 40px;
    height: 40px;
  }
  & .Ku {
    & svg path {
      fill: url(#gradient);
    }

    & span {
      color: ${({ theme }) => theme.textSecundary};
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: 0.2rem;
    }
  }
`;

export const Left = styled.menu`
  width: 100%;
  max-width: 60px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s;
  &:hover {
    min-width: 200px;
    max-width: 200px;
    ${TitleComponent} {
      text-align: left;
      align-self: flex-start;
      padding-left: 1.5rem;
    }
    & span {
      display: block;
    }
    & a,
    ${Logout} {
      justify-content: flex-start;
      padding-left: 1.5rem;
    }
  }
  .active {
    background-color: ${({ theme }) => theme.backgroundActive};
    border-right: 4px solid ${({ theme }) => theme.iconActive};
    & svg path {
      color: ${({ theme }) => theme.iconActive};
    }
    & span {
      color: ${({ theme }) => theme.iconActive};
      font-weight: bold;
    }
  }
`;

export const Hr = styled.hr`
  width: 100%;
  border: transparent;
  border-top: transparent;
  margin-bottom: 1rem;
`;

export const Separator = styled.div`
  width: 1px;
  height: 50%;
  background-color: ${({ theme }) => theme.shadow};
  display: block;
`;

export const Link = styled(LinkNext)`
  display: flex;
  padding: 0.5rem;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 100%;
  z-index: 1;
  & svg {
    width: 22px;
    height: 22px;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 28px;
  }
  & svg path {
    font-size: 40px;
    color: ${({ theme }) => theme.icon};
  }
  & span {
    color: ${({ theme }) => theme.icon};
    font-size: 12px;
    display: none;
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Configuration = styled(Navigation)``;

export const Top = styled.aside`
  width: 100%;
  height: 60px;
  position: fixed;
  background-color: ${({ theme }) => theme.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
`;

export const RightTop = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

export const User = styled.div<{
  $isOpen: boolean;
}>`
  position: relative;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  & .IconArrowUser {
    transition: all 0.2s;
    rotate: ${({ $isOpen }) => ($isOpen ? '180deg' : '0deg')};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & svg path {
    color: ${({ theme }) => theme.iconActive};
    font-size: 20px;
    cursor: pointer;
  }
`;

export const NotificationContainer = styled.div<{
  $qtdNotification?: number;
}>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  & svg,
  path {
    color: ${({ theme }) => theme.icon};
    font-size: 20px;
  }

  &::after {
    content: '${({ $qtdNotification }) => $qtdNotification}';
    position: absolute;
    top: -10px;
    right: -4px;
    width: 16px;
    height: 16px;
    background-color: ${({ theme }) => theme.iconActive};
    color: ${({ theme }) => theme.primary};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    font-weight: 700;
    display: ${({ $qtdNotification }) => ($qtdNotification ? 'flex' : 'none')};
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }

  // ativa a animação shake quando tiver notificações novas
  ${({ $qtdNotification }) =>
    $qtdNotification &&
    `
    animation: shake 0.5s;
    animation-iteration-count: infinite;
  `}
`;

export const InfoUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & span {
    font-size: 1.2rem;
    text-transform: capitalize;
    font-style: italic;
  }

  & span:nth-child(1) {
    color: ${({ theme }) => theme.textSecundary};

    font-weight: 600;
  }

  & span:nth-child(2) {
    color: ${({ theme }) => theme.text};
  }
`;
