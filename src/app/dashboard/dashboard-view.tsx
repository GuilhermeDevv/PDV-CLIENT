import { useDashboardModel } from './use-dashboard-model';

import { Container, Main } from '@/app/styles';

import { CardsContainer } from '@/components/cards-container';
import { TitleComponent } from '@/components/Title';
import { GraphicsContainer } from '@/components/graphics-container';

export function DashboardView(props: ReturnType<typeof useDashboardModel>) {
  const { data } = props;
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
