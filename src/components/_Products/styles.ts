"use client";
import styled from "styled-components";

export const ContainerActions = styled.aside`
  display: flex;
  gap: 1rem;
  align-items: center;
  align-self: flex-end;
  & svg,
  path {
    color: ${({ theme }) => theme.icon};
    fill: ${({ theme }) => theme.icon};
    cursor: pointer;
    width: 32px;
    height: 32px;
    & :hover {
      fill: ${({ theme }) => theme.iconActive};
    }
  }
`;
export const button = styled.div``;
