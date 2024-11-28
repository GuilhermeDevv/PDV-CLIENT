'use client';

import { Container, Main } from '@/app/styles';

import { useDashboardModel } from '@/utils/hooks/use-dashboard-model';
import { ListDashboardService } from '@/services/dashboard-service';

import { CardsContainer } from '@/components/cards-container';
import { TitleComponent } from '@/components/Title';
import { GraphicsContainer } from '@/components/graphics-container';

import { httpClientFactory } from '@/adapters';

export default function Dashboard() {
  const services = {
    listCardService: new ListDashboardService(httpClientFactory()),
  };

  const { data } = useDashboardModel(services);

  return (
    <Main>
      <Container>
        <TitleComponent
          text="Dashboard"
          style={{
            fontWeight: 'normal',
          }}
        />
        <CardsContainer quantityInfo={data?.quantityInfo!} />
        <GraphicsContainer
          quantityInfo={data?.quantityInfo!}
          salesValue={data?.salesValue!}
          salesQuantity={data?.salesQuantity!}
          salesProfit={data?.salesProfit!}
        />
      </Container>
    </Main>
  );
}
