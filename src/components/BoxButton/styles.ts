import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-end;
`;

export const Content = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  gap: 1rem;
`;

export const Button = styled.span<{ $open: boolean }>`
  position: relative;
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;

  & svg {
    font-size: 3rem;
    color: ${({ theme }) => theme.icon};
    & path {
      color: inherit;
    }
  }
  color: ${({ theme }) => theme.secundary};

  & > span {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.icon};
  }
`;

export const Seperator = styled.span`
  width: 1px;
  height: 100%;
  font-weight: bold;
  background: ${({ theme }) => theme.textSecundary};
  height: 100%;
`;

export const StatusBox = styled.span<{ $status: boolean }>`
  position: absolute;
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: ${({ $status }) => ($status ? "red" : "green")};

  bottom: 0px;
  left: 22px;
`;
