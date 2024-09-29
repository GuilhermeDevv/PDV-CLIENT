'use client';
import { Container, Main } from '@/app/styles';

import { CardsContainer } from '@/components/CardsContainer';
import { TitleComponent } from '@/components/Title';
import { useDashboard } from '@/utils/hooks/useDashboard';
import { GraphicsContainer } from '@/components/GraphicsContainer';
import { httpClientFactory } from '@/adapters';
import { StartScreen } from '@/components/StartScreen';

export default function Dashboard() {
  const { data, isAnimation } = useDashboard({
    client: httpClientFactory(),
  });
  return (
    <Main>
      <Container>
        {isAnimation && <StartScreen />}
        <TitleComponent text="DASHBOARD" />
        <CardsContainer data={data?.quantityInfo} />
        <GraphicsContainer
          quantityInfo={data?.quantityInfo}
          salesValue={data?.salesValue}
          salesQuantity={data?.salesQuantity}
          salesProfit={data?.salesProfit}
        />
      </Container>
    </Main>
  );
}
