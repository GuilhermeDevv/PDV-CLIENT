import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const DropArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  height: 150px;
  border: 2px dashed ${({ theme }) => theme.iconActive};
  border-radius: 4px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.textSecundary};
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
`;

export const RemoveButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #dc3545;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`;

export const ImagePreview = styled.img`
  max-width: 300px;
  max-height: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;

  /* remover o fundo da imagem usando o mix-blend-mode */

  mix-blend-mode: darken;
`;
