'use client';

import { IData } from '@/types/IDashboard';
import { Bars } from './components/Bars';
import { Line } from './components/Line';
import { Container, Content } from './styles';
import { Skeleton } from '@mui/material';

export function GraphicsContainer({
  salesValue,
  salesQuantity,
  salesProfit,
}: IData) {
  return (
    <Container>
      <Content>
        {salesValue && <Bars data={salesValue} title="VENDAS (R$) - SEMANAL" />}
        {salesProfit && (
          <Bars data={salesProfit} title="LUCRO (R$) -  SEMANAL" />
        )}
        {salesQuantity && <Line data={salesQuantity} />}

        {!salesValue && (
          <Skeleton
            sx={{
              borderRadius: 0.5,
              backgroundColor: '#262626',
            }}
            animation="wave"
            variant="rectangular"
            width={'100%'}
            height={300}
          />
        )}
        {!salesQuantity && (
          <Skeleton
            sx={{
              borderRadius: 0.5,
              backgroundColor: '#262626',
            }}
            animation="wave"
            variant="rectangular"
            width={'100%'}
            height={300}
          />
        )}
        {!salesProfit && (
          <Skeleton
            sx={{
              borderRadius: 0.5,
              backgroundColor: '#262626',
            }}
            animation="wave"
            variant="rectangular"
            width={'100%'}
            height={300}
          />
        )}
      </Content>
    </Container>
  );
}
