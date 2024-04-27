"use client";
import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: calc(100% - 60px);
  height: 100%;
  position: absolute;
  top: 0;
  left: 60px;
  padding: 2.5rem;
`;
