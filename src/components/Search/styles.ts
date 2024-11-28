import styled from 'styled-components';
import { Search } from '@mui/icons-material';

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 40px 10px 10px;
  border-radius: 16px;
  border: none;
  background-color: ${({ theme }) => theme.BackgroundIconActive};
  font-size: 1.5rem;
  outline: none;
  color: ${({ theme }) => theme.iconActive};
  padding-left: 40px;
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  font-size: 1rem !important;
  height: 2.5rem !important;
  color: ${({ theme }) => theme.iconActive} !important;
  fill: ${({ theme }) => theme.iconActive} !important;
  & path {
    fill: inherit;
  }

  pointer-events: none;
`;
