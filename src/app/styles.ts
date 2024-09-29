'use client';
import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.iconActive};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.primary};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: #555;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: calc(100% - 60px);
  height: 100%;
  position: relative;
  top: 0;
  left: 60px;
  padding: 2.5rem;
`;
