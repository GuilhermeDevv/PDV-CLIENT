'use client';

import { Dashboard } from '@/types';
import { Bars } from './components/Bars';
import { Line } from './components/Line';
import { Container, Content, Top } from './styles';
import { Skeleton } from '@mui/material';
import { useTheme } from 'styled-components';

export function GraphicsContainer({
  salesValue,
  salesQuantity,
  salesProfit,
}: Dashboard) {
  const theme = useTheme();
  return (
    <Container>
      <Content>
        <Top>
          {salesValue && <Bars data={salesValue} title="Vendas" />}
          {salesProfit && <Bars data={salesProfit} title="Lucros" />}
        </Top>
        {salesQuantity && <Line data={salesQuantity} />}

        {/* LOADING! */}
        <Top>
          {!salesValue && (
            <Skeleton
              sx={{
                borderRadius: '8px',
                backgroundColor: theme.background,
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
                borderRadius: '8px',
                backgroundColor: theme.background,
              }}
              animation="wave"
              variant="rectangular"
              width={'100%'}
              height={300}
            />
          )}
        </Top>
        {!salesProfit && (
          <Skeleton
            sx={{
              borderRadius: '8px',
              backgroundColor: theme.background,
            }}
            animation="wave"
            variant="rectangular"
            width={'100%'}
            height={400}
          />
        )}
      </Content>
    </Container>
  );
}
