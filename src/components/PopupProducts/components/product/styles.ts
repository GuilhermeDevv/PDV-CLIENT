import styled from 'styled-components';
import Image from 'next/image';
export const Container = styled.div`
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 1rem;
  max-width: 320px;
`;

export const ImageProduct = styled(Image)`
  border-radius: 4px;
`;

export const TitleProduct = styled.strong`
  font-size: 1.4rem;
  text-transform: capitalize;
  width: 100%;
`;



export const Right = styled.div`






`;