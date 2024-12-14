import styled from 'styled-components';

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.background};
  max-height: 400px;
  min-height: 380px;
  padding: 22px 16px;
  border-radius: 14px;
  box-shadow: 1px 6px 7px 0px ${({ theme }) => theme.shadow};
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(268px, auto));
  transition: all 0.3s;
  &:hover {
    scale: 1.02;
    box-shadow: 1px 6px 7px 0px ${({ theme }) => theme.shadow};
    cursor: pointer;
  }
  position: relative;
`;

export const Status = styled.div<{ $cor: string }>`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ $cor }) => $cor};
  z-index: 1;

  animation: ${({ $cor }) =>
    $cor === '#b81d13' ? 'pulse 2s infinite' : 'none'};
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const Top = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ImageContainer = styled.div<{ $cor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 2px ${({ theme, $cor }) => theme[$cor]};
  width: fit-content;
  height: fit-content;
  padding: 10px;
  border-radius: 14px;
  margin-top: 18px;
  position: relative;
`;

export const CategoryContainer = styled.div<{ $cor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, $cor }) => theme[$cor]};
  position: absolute;
  border-radius: 6px;
  bottom: 2px;
  padding: 2px;
  right: -10px;
  & svg,
  path {
    fill: ${({ theme }) => theme.primary};
    font-size: 24px;
  }
`;

export const MoreInfo = styled.div`
  position: absolute;
  top: 0px;
  right: 4px;
  cursor: pointer;
  & svg,
  path {
    fill: ${({ theme }) => theme.iconActive};
    font-size: 26px;
  }

  & span {
    display: block;
    width: 4px;
    height: 4px;
    background-color: ${({ theme }) => theme.icon};
    border-radius: 50%;
    margin: 4px 0;
    transition: all 0.3s;
  }

  @keyframes dotsToX {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  & span:nth-child(1) {
    animation: dotsToX 2s 0.1s infinite;
  }
  & span:nth-child(2) {
    animation: dotsToX 2s 0.2s infinite;
  }
  & span:nth-child(3) {
    animation: dotsToX 2s 0.3s infinite;
  }
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & strong {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.textSecundary};
    font-weight: bold;
    text-align: center;
  }

  & p {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};
    text-align: center;
    opacity: 0.8;
    margin-top: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 268px;
  }

  & > span {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.text};
    margin-top: 8px;
    display: block;
  }
`;
// fornecedor
export const Supplier = styled.span`
  font-size: 1.5rem !important;
  font-weight: bold !important;
  color: ${({ theme }) => theme.iconActive} !important;
  text-align: center;
  margin: 0 !important;
  display: block;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;

  & > span:nth-child(2) {
    font-weight: bold !important;
  }

  & svg,
  path {
    fill: ${({ theme }) => theme.background};
    font-size: 20px;
  }
`;

export const ContainerIcon = styled.div`
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.waveColor};
  border-radius: 4px;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

export const DropdownItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  &:hover {
    background: #f0f0f0;
  }
  &:first-child {
    border-bottom: 1px solid #ccc;
  }
`;

export const Bottom = styled.div``;
