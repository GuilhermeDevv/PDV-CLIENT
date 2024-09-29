'use client';
import { ICard } from '@/types';
import { Card } from './Card';
import { Container, Content } from './styles';

import { Skeleton } from '@mui/material';
export interface ICardsContainerProps {
  data: ICard[] | undefined;
}

export function CardsContainer({ data }: ICardsContainerProps) {
  return (
    <Container>
      <Content>
        {data && data.map((card, index) => <Card key={index} {...card} />)}
        {!data &&
          Array.from({ length: 4 }).map((_, index) => (
            <Skeleton
              key={index}
              sx={{
                borderRadius: 0.5,
                backgroundColor: '#262626',
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
