import styled from 'styled-components';

export const Avatar = styled.div`
  background-color: ${({ theme }) => theme.iconActive};
  color: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: fit-content;
  border-radius: 0.5rem;
  & span {
    color: inherit;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
