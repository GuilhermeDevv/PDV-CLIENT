'use client';
import { Dashboard } from '@/types';
import { Card } from './Card';
import { Container, Content } from './styles';

import { Skeleton } from '@mui/material';
import { useTheme } from 'styled-components';

export function CardsContainer({
  quantityInfo,
}: Pick<Dashboard, 'quantityInfo'>) {
  const theme = useTheme();
  return (
    <Container>
      <Content>
        {quantityInfo &&
          quantityInfo.map((card, index) => <Card key={index} {...card} />)}
        {!quantityInfo &&
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
