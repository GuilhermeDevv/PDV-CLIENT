'use client';
import { ICard } from '@/types';
import { Card } from './Card';
import { Container, Content } from './styles';

import { Skeleton } from '@mui/material';
import { useTheme } from 'styled-components';
export interface ICardsContainerProps {
  data: ICard[] | undefined;
}

export function CardsContainer({ data }: ICardsContainerProps) {
  const theme = useTheme();
  return (
    <Container>
      <Content>
        {data && data.map((card, index) => <Card key={index} {...card} />)}
        {!data &&
          Array.from({ length: 4 }).map((_, index) => (
            <Skeleton
              key={index}
              sx={{
                borderRadius: '8px',
                backgroundColor: theme.background,
              }}
              animation="wave"
              variant="rectangular"
              width="calc(25.5% - 2rem)"
              height={150}
            />
          ))}
      </Content>
    </Container>
  );
}
